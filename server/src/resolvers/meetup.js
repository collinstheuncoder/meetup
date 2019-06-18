import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated, isMeetupCreator } from './authorization';
import { populate } from '../helpers';

export default {
  Query: {
    allMeetups: (parent, args, { models: { Meetup } }, info) =>
      fetchMeetups(Meetup),

    meetupsByType: (parent, { type }, { models: { Meetup } }, info) =>
      fetchMeetups(Meetup, { name: 'type', value: type }),

    meetupsByLocation: (parent, { location }, { models: { Meetup } }, info) =>
      fetchMeetups(Meetup, { name: 'location', value: location }),

    meetupsByTypeAndLocation: (
      parent,
      { type, location },
      { models: { Meetup } },
      info
    ) =>
      fetchMeetups(Meetup, {
        name: 'location and type',
        value: [type, location],
      }),
  },

  Mutation: {
    createMeetup: combineResolvers(
      isAuthenticated,
      async (parent, args, { models: { Meetup, User } }, info) => {
        try {
          // Save new meetup to DB
          let newMeetup = await Meetup.create(args);
                    
          newMeetup = await newMeetup.populate(populate.meetup).execPopulate();
          
          // Update current user's [addedMeetups]
          await User.findByIdAndUpdate(args.addedBy, {
            $push: { addedMeetups: newMeetup.id },
          });

          return newMeetup;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    ),
    attendMeetup: combineResolvers(
      isAuthenticated,
      async (
        parent,
        { meetupId },
        { models: { Meetup, User }, currentUser },
        info
      ) => {
        try {
          // Add user(id) to attending array
          await Meetup.findByIdAndUpdate(
            meetupId,
            { $push: { attendees: currentUser.id } },
            { new: true }
          );

          // Add meetup to user's Attending Meetups list
          await User.findByIdAndUpdate(
            currentUser.id,
            { $push: { attending: meetupId } },
            { new: true }
          );

          return true;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    ),
    updateMeetup: combineResolvers(
      isMeetupCreator,
      async (parent, { input }, { models: { Meetup } }, info) => {
        try {
          const updatedMeetup = await Meetup.findByIdAndUpdate(
            input.meetupId,
            { ...input },
            { new: true }
          );

          return updatedMeetup;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    ),
    deleteMeetup: combineResolvers(
      isMeetupCreator,
      async (parent, { meetupId }, { models: { Meetup } }, info) => {
        try {
          await Meetup.findByIdAndRemove(meetupId);

          return true;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    ),
  },
};

async function fetchMeetups(model, condition) {
  try {
    const meetupsQuery = async () => {
      if (!condition) {
        return model.find().populate(populate.meetup);
      }
      if (condition.name === 'type') {
        return model.find({ type: condition.value }).populate(populate.meetup);
      }
      if (condition.name === 'location') {
        return model
          .find({
            'location.name': {
              $eq: condition.value,
              $exists: true,
            },
          })
          .populate(populate.meetup);
      }
      if (condition.name === 'location and type') {
        return model
          .find(
            { type: condition.value[0] },
            { 'location.name': condition.value[1] }
          )
          .populate(populate.meetup);
      }
    };

    const meetups = await meetupsQuery();

    return meetups;
  } catch (error) {
    throw new Error(error.message);
  }
}
