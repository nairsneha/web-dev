import React from "react";
import posts from "../data/posts.json";

const tuitsReducer = (state = posts, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newPost = {
                _id: (new Date()).getTime() + '',
                name: "Sneha",
                userName: "snehanair",
                time:" just now",
                imageIcon: "https://media.wired.com/photos/5bae7a3f6278de2d2123479b/1:1/w_1665,h_1665,c_limit/ElonMusk_18261092524731.jpg",
                image: "https://www.w3schools.com/bootstrap4/cinqueterre.jpg",
                title: "Creating new tuit",
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