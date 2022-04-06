import React from "react";
import posts from "../data/posts.json";
import profileData from "../data/profile.json"
import {FIND_ALL_TUITS,  CREATE_TUIT, UPDATE_TUIT,
}
    from "../../../actions/tuits-actions";

const tuitsReducer = (state = posts, action) => {

    switch (action.type) {

        case 'create-tuit':
          /*  const newPost = {
                _id: (new Date()).getTime() + '',
                name: profileData.firstName,
                userName: profileData.handle,
                time:" just now",
                imageIcon: profileData.profilePicture,
                image: "",
                video: "",
                title: "This is the title of the new tuit",
                postInfo: action.tuit,
                postComments : 2,
                postRetuits : 5,
                postLikes: 4,
                verified : true

            }*/
          //   console.log('action.newTuit: '+action.newTuit)
          //  console.log([action.newTuit].concat(state))
             return [action.newTuit].concat(state);

        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.postLikes--;
                    } else {
                        tuit.liked = true;
                        tuit.postLikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        case 'dislike-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.disliked === true) {
                        tuit.disliked = false;
                        tuit.postDislikes--;
                    } else {
                        tuit.disliked = true;
                        tuit.postDislikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        case 'DELETE_TUIT':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

        case FIND_ALL_TUITS:
            return action.tuits;

        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];

        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                        action.tuit : tuit);

        default:
            return posts
    }

}

export default tuitsReducer;