import React, {useEffect, useState} from "react";
import PostItem from "./PostItem.js";
import {useDispatch, useSelector}
    from "react-redux";
import {deleteTuit, findAllTuits}
    from "../../../actions/tuits-actions";

import * as service
    from '../../../../src/services/tuits-service';
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                        <><FontAwesomeIcon icon={faClose} onClick={() => deleteTuit(
                            dispatch, tuit)}
                        />
                                               <PostItem key={tuit.id}
                                                             tuit={tuit}/></>
                                              )

                }

            </ul>
        </>
             
); }

export default PostList;