import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
    <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
    style={{color: 'red'}}/>
    }
        {
            !tuit.liked &&
            <i className="far fa-heart me-1"/>
        }
        {tuit && tuit.postLikes}
    </span>

);
}
export default TuitStats;