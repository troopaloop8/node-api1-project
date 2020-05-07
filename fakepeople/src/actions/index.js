import axios from "axios";

export const GET_PERSON_START = "GET_PERSON_START";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_ERROR = "GET_PERSON_SUCCESS";
export const NEW_PERSON_START = "NEW_PERSON_START";
export const NEW_PERSON_SUCCESS = "NEW_PERSON_SUCCESS";
export const NEW_PERSON_ERROR = "NEW_PERSON_ERROR";
export const DELETE_PERSON_START = "DELETE_PERSON_START";
export const DELETE_PERSON_SUCCESS = "DELETE_PERSON_SUCCESS";
export const DELETE_PERSON_ERROR = "DELETE_PERSON_ERROR";

export const getPerson = () => dispatch => {
  dispatch({ type: GET_PERSON_START });
  axios
    .get("http://localhost:5000/api/users")
    .then(res => {
      //console.log(res);
      dispatch({ type: GET_PERSON_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: GET_PERSON_ERROR, payload: error });
    });
};

export const addNewPerson = user => dispatch => {
  dispatch({ type: NEW_PERSON_START });
  axios
    .post("http://localhost:5000/api/users", user)
    .then(res => {
      console.log(res.data);
      dispatch({ type: NEW_PERSON_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: NEW_PERSON_ERROR, payload: error });
    });
};

export const deletePerson = id => dispatch => {
  dispatch({ type: DELETE_PERSON_START });
  axios
    .delete(`http://localhost:5000/api/users/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: DELETE_PERSON_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: DELETE_PERSON_ERROR, payload: error });
    });
};
