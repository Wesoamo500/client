import axios from 'axios';

const url = 'https://memories-projects-1.herokuapp.com/posts';

export const fetchPost = () => axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);
export const updatedPost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
export const likePost = (id)=>axios.patch(`${url}/${id}/likedPost`);