import React, {useEffect, useState} from "react";
import PostItem from "./PostItem.js";
import {useDispatch, useSelector}  from "react-redux";
import {deleteTuit, createTuit, findAllTuits, CREATE_TUIT, FIND_ALL_TUITS} from "../../../actions/tuits-actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarChart, faCalendar, faImage, faSmile} from "@fortawesome/free-solid-svg-icons";
import '../../../vendors/fontawesome/css/fontawesome.css';
import '../../../vendors/fontawesome/css/all.min.css';
import axios from "axios";


const PostList = () => {
    let tuits = useSelector(state => state.posts);

  //  const [tuits,setTuits]=useState([]);
 //  const [counter,setCounter]=useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        findAllTuits(dispatch);
        },[]);

    /*useEffect(() => {
        axios.get('http://localhost:4000/api/tuits')
            .then((response)=>response.data)
            .then((data)=> setTuits(data));
    },[]);*/


    const profilePic = useSelector(
        state => state.profile.profilePicture);

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

// const tuitClickHandler = () => {
//
//     dispatch({type: 'create-tuit',
//                  tuit: whatsHappening
//              }); }

    const style1 = {
        backgroundColor: "black",
        color: 'white',
        borderBottom: "1px solid rgb(83, 83, 83)"
    }

    return (<>
            <div className="row">
                <div className="col-2">
                    <img src={profilePic} className="rounded-circle" alt="Cinque Terre" width="60"
                         height="60"/>
                </div>
                <div className="col-10">
                    <form>
                        <div className="form-group">
                        <textarea className="form-control" id="webdev-create-tweet"
                                  placeholder=" What's Happening?" rows="3" style={style1}
                            // defaultValue={newTuit.tuit}
                                  onChange={(e) =>
                                      setNewTuit({
                                                     ...newTuit,
                                                     tuit: e.target.value
                                                 })}
                        />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">

                <div className="col-2"/>

                <div className="col-1">
                    <FontAwesomeIcon icon={faImage} style={{color: '#4D9ED1', display: "inline"}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faBarChart} style={{color: '#4D9ED1'}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faSmile} style={{color: '#4D9ED1', display: "inline"}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faCalendar}
                                     style={{color: '#4D9ED1', display: "inline"}}/>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-primary rounded-pill"
                            style={{float: "right"}} onClick={() =>
                        createTuit(dispatch, newTuit)}>Tuit
                    </button>
                </div>
            </div>


            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        // <><FontAwesomeIcon icon={faClose} onClick={() => deleteTuit(
                        //     dispatch, tuit)}
                        // />
                                               <PostItem key={tuit._id}
                                                             tuit={tuit}/>
                    //x</>
                                              )

                }

            </ul>
        </>
             
); }

export default PostList;