import React from "react";
import profile from '../data/profile.json'

const ProfileReducer = (state = profile, action) => {
    switch (action.type) {

        case 'edit-profile':
            return {
           ...action.profile
            };



        default:
            return profile
    }

}

export default ProfileReducer;

