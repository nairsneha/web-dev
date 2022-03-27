import React from "react";
import TuitStats from './tuit-stats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from "react-redux";
import {
    faArrowUp,
    faCircle,
    faEllipsis,
    faHeart,
    faLink,
    faMessage,
    faReply,
    faClose
} from "@fortawesome/free-solid-svg-icons";

const PostItem = (props) => {
    const dispatch = useDispatch();

    const style1 = {
        borderColor: "#222222",
        borderWidth: "1px",
        borderStyle: "solid"
    }
    const style2 = {
        borderColor: "#222222",
        borderWidth: "1px",
        borderStyle: "solid"
    }

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };


    return(
       <>
           <div className="card bg-black rounded-0 mt-2">
               <div className="card-body pb-0">

                   <div className="row">
                       <div className="col-2">

                           <img className="rounded-circle float-right ml-5 mb-2" src={props.post.imageIcon}
                                width="60" height="60"/>

                       </div>
                       <div className="col-9">
                           <h6 className="text-white">{props.post.name}
                               <FontAwesomeIcon icon={faCircle}/>
                               <span
                                   className="text-secondary">&nbsp; @{props.post.userName}</span><span
                                   className="text-secondary"> &middot; {props.post.time}</span></h6>

                           <div className="text-white pr-4" dangerouslySetInnerHTML={{ __html:props.post.title}} />
                       </div>
                       <div className="col-1">
                           <h6 className="text-secondary">
                               <FontAwesomeIcon icon={faClose} onClick={() =>
                                   deleteTuit(props.post)}
                               />
                           </h6>
                       </div>
                   </div>

                   {props.post.image !== "" ? <div className="row">

                       <div className="col-2">
                       </div>


                       <div className="col-10 rounded-3 pl-0 pr-0" style={style1}>
                           <img className="w-100" style={style2} src={props.post.image}/>
                           <div className="text-white p-2">{props.post.imageCaption}</div>

                           <div className="text-secondary pl-2 pr-2">{props.post.postInfo}</div>
                           <FontAwesomeIcon icon={faLink}/>
                           <span className="text-secondary pl-2">link.com</span>
                       </div>


                   </div> : <div className="row">

                                                <div className="col-2">
                                                </div>

                                                <div className="col-10 rounded-3 pl-0 pr-0">
                                                    <div className="text-secondary pl-2 pr-2">{props.post.postInfo}</div>
                                                </div>


                                            </div>

                   }

                   {props.post.video !== "" ? <div className="row">

                       <div className="col-2">
                       </div>


                       <div className="col-10 rounded-3 pl-0 pr-0" style={style1}>
                           <div className="video-responsive">
                               <iframe
                                   src={`https://www.youtube.com/embed/${props.post.video}`}
                                   width = "100%"
                                   height = "300px"
                                   frameBorder="0"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen
                                   title="Embedded youtube"
                               />
                           </div>
                           <div className="text-white p-2">{props.post.videoCaption}</div>

                           <div className="text-secondary pl-2 pr-2">{props.post.postInfo}</div>
                           <FontAwesomeIcon icon={faLink}/>
                           <span className="text-secondary pl-2">link.com</span>
                       </div>


                   </div>
                                            : ""
                   }



                   <div className="row pt-3">
                       <div className="col-2">
                       </div>

                       <div className="col-3">
                           <FontAwesomeIcon icon={faMessage}/>
                           &nbsp;
                           <span className="text-secondary">
                        {props.post.postComments}
                        </span>
                       </div>

                       <div className="col-3">
                           {/*<i className="fa-solid fa-retweet text-secondary pr-2"></i>*/}
                           <FontAwesomeIcon icon={faReply}/>
                           &nbsp;
                           <span className="text-secondary">
                        {props.post.postRetuits}
                        </span>
                       </div>

                       <div className="col-3">
                           {/*<i className="fa-solid fa-heart text-secondary pr-2"></i>*/}
                           {/*<FontAwesomeIcon icon={faHeart}/>*/}
                           <TuitStats tuit={props.post} />
                           &nbsp;
                           {/*<span className="text-secondary">
                        {props.post.postLikes}
                        </span>
                           */}
                       </div>

                       <div className="col-1">
                           {/*<i className="fa-solid fa-arrow-up-from-bracket text-secondary pr-2"></i>*/}
                           <FontAwesomeIcon icon={faArrowUp}/>
                       </div>

                   </div>
               </div>
           </div>
       </>
    );
}


export default PostItem;