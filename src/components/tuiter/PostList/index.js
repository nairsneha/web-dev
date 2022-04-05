import React, {useEffect, useState} from "react";
import PostItem from "./PostItem.js";
import {useDispatch, useSelector}
    from "react-redux";
import {deleteTuit, createTuit, findAllTuits}
    from "../../../actions/tuits-actions";

const PostList = () => {
    const tuits = useSelector(
        state => state.posts);

    const dispatch = useDispatch();

    useEffect(() =>
                  findAllTuits(dispatch),
              []);


    return (<>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        // <><FontAwesomeIcon icon={faClose} onClick={() => deleteTuit(
                        //     dispatch, tuit)}
                        // />
                                               <PostItem key={tuit.id}
                                                             tuit={tuit}/>
                    //x</>
                                              )

                }

            </ul>
        </>
             
); }

export default PostList;