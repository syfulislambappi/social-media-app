import axios from "axios";

const url = `http://localhost:4000/api/v1`;
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// Post api
export const fetchPost = (id) => API.get(`/post/${id}`);
export const fetchPosts = (page) => API.get(`/post/all?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/post/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post(`/post/create`, newPost);
export const updatePost = (id, updatePost) =>
  API.patch(`/post/update/${id}`, updatePost);
export const deletePost = (id) => API.delete(`/post/delete/${id}`);
export const updateLike = (id) => API.patch(`/post/${id}/likePost`);

// User api
export const signup = (formData) => API.post("/user/signup", formData);
export const signin = (formData) => API.post("/user/signin", formData);
