import gql from "graphql-tag";

export const createNewMeetup = gql`
  mutation CreateMeetup(
    $addedBy: ID!
    $location: MeetupLocationInput!
    $type: [String!]!
    $details: MeetupDetailsInput!
  ) {
    createMeetup(
      addedBy: $addedBy
      location: $location
      type: $type
      details: $details
    ) {
      addedBy {
        id
        fullname
      }
      location {
        name
        latitude
        longitude
      }
      type
      details {
        hostedBy {
          fullname
        }
        description
      }
    }
  }
`;

export const attendMeetup = gql`
  mutation AttendMeetup($meetupId: ID!) {
    attendMeetup(meetupId: $meetupId)
  }
`;

export const updateMeetup = gql`
  mutation UpdateMeetup($input: UpdateMeetupInput!) {
    updateMeetup(input: $input) {
      id
      location {
        name
      }
      details {
        name
        description
      }
    }
  }
`;

export const deleteMeetup = gql`
  mutation DeleteMeetup($meetupId: ID!) {
    deleteMeetup(meetupId: $meetupId)
  }
`;

export const createAccount = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      authenticated
      token
    }
  }
`;

export const loginToAccount = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      authenticated
      token
    }
  }
`;

export const changeLocation = gql`
  mutation ChangeLocation($location: String!) {
    changeLocation(location: $location) @client {
      location
    }
  }
`;
