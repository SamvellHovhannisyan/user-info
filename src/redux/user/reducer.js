import types from './types';

const initState = {
    users: [],
    currentUser:{},
    userAlbums:[],
    albumPhotos:[],
    userPosts:[],
    postComments:[]
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_USERS: {
            return {
                ...state,
                users: action.payload,
            };
        }
        case types.GET_CURRENT_USER:{
            return {
                ...state,
                currentUser: action.payload
            }
        }
        case types.GET_USER_ALBUMS:{
            return {
                ...state,
                userAlbums: action.payload
            }
        }
        case types.GET_ALBUM_PHOTOS:{
            return {
                ...state,
                albumPhotos: action.payload
            }
        }
        case types.GET_USER_POSTS:{
            return {
                ...state,
                userPosts: action.payload
            }
        }
        case types.GET_POST_COMMENTS:{
            return {
                ...state,
                postComments: action.payload
            }
        }

        default:
            return state;
    }
};

export default userReducer;