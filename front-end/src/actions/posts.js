import * as api from "../api";
import * as types from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts;

    dispatch({ type: types.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: types.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: types.UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: types.DELETE, payload: { id: id } });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLike = (id) => async (dispatch) => {
  try {
    const { data } = await api.updateLike(id);
    dispatch({ type: types.UPDATE_LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
