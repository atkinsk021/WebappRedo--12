import axios from 'axios';

export const visit = bookmarkId => {
  return axios.post(`/api/bookmarks/${bookmarkId}/visit`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/bookmarks')
              .then(resp => resp.data);
};

export const getBookmark = bookmarkId => {
  return axios.get(`/api/bookmarks/${bookmarkId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newLink) => {
  return axios.post('/api/bookmarks', { title: newTitle, link: newLink })
              .then(resp => resp.data);
};

export const remove = (bookmarkId) => {
  return axios.delete(`/api/bookmarks/${bookmarkId}`)
    .then(resp => resp.data);
};