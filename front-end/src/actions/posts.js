import * as api from "../api";
import * as types from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const { data } = await api.fetchPosts(page);

    dispatch({ type: types.FETCH_ALL, payload: data });
    dispatch({ type: types.END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: types.FETCH_BY_SEARCH, payload: data });
    dispatch({ type: types.END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: types.START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: types.CREATE, payload: data });
    dispatch({ type: types.END_LOADING });
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
