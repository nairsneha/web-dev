import React from "react";
import posts from "../data/posts.json";
import profileData from "../data/profile.json"

const tuitsReducer = (state = posts, action) => {

    switch (action.type) {
        case 'create-tuit':
            const newPost = {
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

            }


            return [
                newPost,
                ...state,
            ];

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

        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

         default:
            return posts
    }

}

export default tuitsReducer;