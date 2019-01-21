const meetupFields = {
  select: 'id type details location addedBy',
  populate: [
    {
      path: 'addedBy',
      select: 'fullname id',
    },
  ],
}

const userFields = {
  select: 'id firstname lastname fullname email',
}

const user = [
  {
    path: 'addedMeetups',
    ...meetupFields
  },
  {
    path: 'hostedMeetups',
    ...meetupFields
  },
  {
    path: 'attendedMeetups',
    ...meetupFields
  },
  {
    path: 'attending',
    ...meetupFields
  },
];

const meetup = [
  {
    path: 'addedBy',
    ...userFields
  },
  {
    path: 'attendees',
    ...userFields
  },
  {
    path: 'comments',
    populate: [
      {
        path: 'commentedBy',
        ...userFields
      },
      {
        path: 'replies',
        populate: {
          path: 'commentedBy',
          ...userFields
        }
      },
    ]
  },
];

export default {
  user,
  meetup
};
