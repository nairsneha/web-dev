import React from "react";
import {useDispatch} from "react-redux";
import  {DislikeTuit} from '../../../actions/tuits-actions';
const TuitDislike = ({tuit}) => {
    const dispatch = useDispatch();

    const dislikeTuit1 = () => {
      //  dispatch({type: 'dislike-tuit', tuit});
        DislikeTuit(dispatch,tuit);
    };

    return (
        <span onClick={dislikeTuit1}>
    {
        tuit.disliked &&
        <i className="far fa-thumbs-down ms-2"
           style={{color: 'red'}}/>
    }
            {
                !tuit.disliked &&
                <i className="far fa-thumbs-down ms-2"/>
            }
            {tuit && tuit.postDislikes}
    </span>

    );
}
export default TuitDislike;