import * as types from "../constants/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case types.DELETE:
      return posts.filter((post) => post._id !== action.payload.id);
    case types.UPDATE:
    case types.UPDATE_LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case types.FETCH_ALL:
      return action.payload;
    case types.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default posts;
