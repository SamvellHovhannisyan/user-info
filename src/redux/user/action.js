import types from "./types";
import {api} from "../../api";

export const setUsers = data => ({
    type: types.GET_USERS,
    payload: data,
});
export const setCurrentUser = data => ({
    type: types.GET_CURRENT_USER,
    payload: data,
});

export const setUserAlbums = data => ({
    type: types.GET_USER_ALBUMS,
    payload: data,
});

export const setAlbumPhotos = data => ({
    type: types.GET_ALBUM_PHOTOS,
    payload: data,
});

export const setUserPosts = data => ({
    type: types.GET_USER_POSTS,
    payload: data,
});

export const setPostComments = data => ({
    type: types.GET_POST_COMMENTS,
    payload: data,
});


export const getUsers= () => dispatch => {
    return api.get('users')
        .then(response => {
            dispatch(setUsers(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};

export const getCurrentUser = (id) => dispatch => {

    return api.get(`users/${id}`)
        .then(response => {
            dispatch(setCurrentUser(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};

export const getUserAlbums = (id) => dispatch => {
    return api.get(`users/${id}/albums`)
        .then(response => {
            dispatch(setUserAlbums(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};

export const getAlbumPhotos = (albumId) => dispatch => {
    return api.get(`photos?albumId=${albumId}`)
        .then(response => {
            dispatch(setAlbumPhotos(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};


export const getUserPosts = (userId) => dispatch => {
    return api.get(`posts?userId=${userId}`)
        .then(response => {
            dispatch(setUserPosts(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};


export const getPostComments = (postId) => dispatch => {

    return api.get(`posts/${postId}/comments`)
        .then(response => {
            dispatch(setPostComments(response.data));
        })
        .catch(error => {
            alert(error.message)
        });
};