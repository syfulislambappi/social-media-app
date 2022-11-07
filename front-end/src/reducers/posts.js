import * as types from "../constants/actionTypes";

const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return { ...state, isLoading: true };
    case types.END_LOADING:
      return { ...state, isLoading: false };
    case types.DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload.id),
      };
    case types.UPDATE:
    case types.UPDATE_LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case types.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPage,
      };
    case types.FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case types.CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default posts;
