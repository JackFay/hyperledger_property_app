// import from action types
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

// determent how stat should be returned when action is called
export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, error:'', authenticated: true };
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    case FETCH_MESSAGE:
      return {...state, message: action.payload}
  };

  return state;
};