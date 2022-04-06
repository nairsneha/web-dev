import React from "react";
import {useDispatch} from "react-redux";
import {LikeTuit} from '../../../actions/tuits-actions'
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeTuit1 = () => {
      //  dispatch({type: 'like-tuit', tuit});
       // console.log('liked tutit: '+JSON.stringify(tuit));
        LikeTuit(dispatch,tuit);
    };

    return (
    <span onClick={likeTuit1}>
    {
        tuit.liked &&
        <i className="far fa-thumbs-up ms-2"
    style={{color: 'red'}}/>
    }
        {
            !tuit.liked &&
            <i className="far fa-thumbs-up ms-2"/>
        }
        {tuit && tuit.postLikes}
    </span>

);
}
export default TuitStats;