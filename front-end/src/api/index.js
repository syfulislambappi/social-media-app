import axios from "axios";

const url = `http://localhost:4000/api/v1/post/all`;
const postUrl = `http://localhost:4000/api/v1/post/create`;

export const fetchPosts = axios.get(url);

export const createPost = (newPost) => axios.post(postUrl, newPost);
