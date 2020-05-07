import {
    GET_PERSON_START,
    GET_PERSON_SUCCESS,
    GET_PERSON_ERROR,
    NEW_PERSON_START,
    NEW_PERSON_SUCCESS,
    NEW_PERSON_ERROR,
    DELETE_PERSON_START,
    DELETE_PERSON_SUCCESS,
    DELETE_PERSON_ERROR
  } from "../actions";
  
  const initialState = {
    users: [],
    isLoading: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PERSON_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case GET_PERSON_SUCCESS:
        return {
          ...state,
          users: action.payload,
          isLoading: false,
          error: ""
        };
      case GET_PERSON_ERROR:
        return {
          ...state,
          error: action.payload
        };
      case NEW_PERSON_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case NEW_PERSON_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: ""
        };
      case NEW_PERSON_ERROR:
        return {
          ...state,
          error: action.payload
        };
      case DELETE_PERSON_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case DELETE_PERSON_SUCCESS:
        return {
          ...state,
          users: action.payload,
          isFetching: false,
          error: ""
        };
      case DELETE_PERSON_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  