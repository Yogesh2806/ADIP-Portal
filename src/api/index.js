import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const url = "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// export const fetchPosts = () => axios.get(url);
export const fetchPosts = () => API.get("/posts");

// export const createPost = (newPost) => axios.post(url, newPost);

export const createPost = (newPost) => API.post("/posts", newPost);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
