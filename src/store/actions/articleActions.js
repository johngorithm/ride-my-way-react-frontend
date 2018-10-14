import axios from 'axios';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT
} from './types';

export const getContacts = () => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const updateContact = updContact => async dispatch => {
  const updatedContact = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${updContact.id}`,
    updContact
  );

  dispatch({
    type: UPDATE_CONTACT,
    payload: updatedContact.data
  });
};
