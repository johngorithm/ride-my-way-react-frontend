import {
  GET_RIDES,
  ADD_RIDE
} from 'constants';

const initialState = {
  rides: [
    {
      id: 1,
      destination: 'Okija',
      capacity: 4,
      occupied: 3,
      takeOffVenue: '12, Main street, Mende',
      date: '2018-10-03',
      time: '08:00 AM',
      driver: 'James Tomi'
    },
    {
      id: 2,
      destination: 'Lekki Phase 2',
      capacity: 4,
      occupied: 3,
      takeOffVenue: '12, Main street, Iyana Ipaja',
      date: '2018-10-03',
      time: '08:00 AM',
      driver: 'John Tomi'
    },
    {
      id: 3,
      destination: 'Agege',
      capacity: 4,
      occupied: 3,
      takeOffVenue: '12, Main street, Ikeja',
      date: '2018-10-03',
      time: '08:00 AM',
      driver: 'Daniel Tomi'
    },
    {
      id: 4,
      destination: 'Ikorodu',
      capacity: 4,
      occupied: 3,
      takeOffVenue: '90, Main street, Ikorodu',
      date: '2018-10-03',
      time: '08:00 AM',
      driver: 'Orji Emeka'
    },
    {
      id: 5,
      destination: 'Mi 12',
      capacity: 4,
      occupied: 3,
      takeOffVenue: '12, Main street, Oluwole',
      date: '2018-10-03',
      time: '08:00 AM',
      driver: 'Godwill Tomi'
    }
  ],
  ride: {}
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state,
        rides: action.payload
      };
    case ADD_RIDE:
      return {
        ...state,
        ride: action.payload
      };

    // case GET_CONTACT:
    //   return {
    //     ...state,
    //     contact: action.payload
    //   };

    // case ADD_CONTACT:
    //   return {
    //     ...state,
    //     contacts: [action.payload, ...state.contacts]
    //   };
    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       contact => action.payload !== contact.id
    //     )
    //   };
    // case UPDATE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.map(
    //       contact =>
    //         contact.id === action.payload.id
    //           ? (contact = action.payload)
    //           : contact
    //     )
    //   };
    default:
      return state;
  }
};

export default rideReducer;