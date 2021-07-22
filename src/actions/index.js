import axios from 'axios';
import {
  GET_POSTS,
  GET_USERS,
  SHOW_ERROR,
  GET_USER_BY_ID,
  GET_POST_BY_USER,
  GET_TODOS,
  CREATE_POST,
} from '../constants';

const token =
  'd9c46955fe2d7767c2f8321643e852c4c66bebd5cfe637d7960d3f095bc4c4e4';
const USERS_BASE_URL = 'https://gorest.co.in/public/v1/users?access-token=';

export const getPosts = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://gorest.co.in//public/v1/posts?page=${page}?access-token=` + token
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(USERS_BASE_URL + token);
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};

export const getUserByID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users/${id}?access-token=` + token
    );
    dispatch({
      type: GET_USER_BY_ID,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};

export const getPostByUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users/${id}/posts?access-token=` + token
    );
    dispatch({
      type: GET_POST_BY_USER,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};

export const getTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users/${id}/todos?access-token=` + token
    );

    dispatch({
      type: GET_TODOS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};

export const createPost = (id, data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://gorest.co.in/public/v1/users/${id}/posts?access-token=` + token,
      data,
      { Authorization: `Bearer ${token}` }
    );
    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });

    console.log(res.data);
  } catch (err) {
    console.error(err);
    dispatch({
      type: SHOW_ERROR,
      payload: err.message,
    });
  }
};
