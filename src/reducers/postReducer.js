import {
  GET_POSTS,
  SHOW_ERROR,
  GET_POST_BY_USER,
  CREATE_POST,
  DELETE_POST,
} from '../constants';

const initialState = {
  posts: [],
  post: [],
  post_loading: true,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        post_loading: false,
      };

    case GET_POST_BY_USER:
      return {
        ...state,
        post: payload,
        post_loading: false,
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };

    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter((item) => item._id !== payload),
        post_loading: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: payload,
        post_loading: false,
      };

    default:
      return state;
  }
};

export default postReducer;
