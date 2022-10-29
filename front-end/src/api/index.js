import axios from "axios";

const url = `http://localhost:4000/api/v1/post/`;
const getUrl = `http://localhost:4000/api/v1/post/all`;
const postUrl = `http://localhost:4000/api/v1/post/create`;
const patchUrl = `http://localhost:4000/api/v1/post/update/`;
const deleteUrl = `http://localhost:4000/api/v1/post/delete/`;

export const fetchPosts = axios.get(getUrl);

export const createPost = (newPost) => axios.post(postUrl, newPost);

export const updatePost = (id, updatePost) =>
  axios.patch(`${patchUrl}${id}`, updatePost);

export const deletePost = (id) => axios.delete(`${deleteUrl}${id}`);

export const updateLike = (id) => axios.patch(`${url}${id}/likePost`);
