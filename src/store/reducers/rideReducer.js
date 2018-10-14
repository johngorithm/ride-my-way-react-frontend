import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [],
  contact: {}
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => action.payload !== contact.id
        )
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};
