import { GET_USERS, SHOW_ERROR, GET_USER_BY_ID, GET_TODOS } from '../constants';

const initialState = {
  users: [],
  user: [],
  todos: [],
  user_loading: true,
  todos_loading: true,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        user_loading: false,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        user: payload,
        user_loading: false,
      };

    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        todos_loading: false,
      };

    case SHOW_ERROR:
      return {
        ...state,
        error: payload,
        user_loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
