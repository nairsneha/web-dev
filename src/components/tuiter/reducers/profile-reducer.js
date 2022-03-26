import React from "react";
import profile from '../data/profile.json'

const ProfileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'edit-name':
            return {
                ...state,
                name: action.name,
            };

        case 'edit-location':
            return {
                ...state,
                location: action.location,
            };

        case 'edit-dateOfBirth':
            return {
                ...state,
                dateOfBirth: action.dateOfBirth,
            };

        case 'edit-bio':
            return {
                ...state,
                bio: action.bio,
            };

        case 'edit-website':
            return {
                ...state,
                website: action.website,
            };


        default:
            return profile
    }

}

export default ProfileReducer;

