import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post.id !== action.payload);
        case UPDATE:
            return posts.map((post) => post.id === action.payload.id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
        
    }
};

export default postReducer;
