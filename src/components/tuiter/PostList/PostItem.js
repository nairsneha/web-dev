import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUp,
    faCircle,
    faEllipsis,
    faHeart,
    faLink,
    faMessage,
    faReply
} from "@fortawesome/free-solid-svg-icons";

const PostItem = (props) => {

    const style1={
        //border-color: rgb(34,34,34); border-width: 1px; border-style: solid;
        borderColor: "#222222",
        borderWidth: "1px",
        borderStyle: "solid"
    }
    const style2={
        // {/*style="border-color: rgb(34,34,34); border-width: 1px; border-style: solid;"*/}
        borderColor: "#222222",
        borderWidth: "1px",
        borderStyle: "solid"
    }
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
                               {/*<i className="fa-solid fa-circle-check text-white"></i> */}
                               <FontAwesomeIcon icon={faCircle}/>
                               <span
                                   className="text-secondary">&nbsp; @{props.post.userName}</span><span
                                   className="text-secondary"> &middot; {props.post.time}</span></h6>

                           <div className="text-white pr-4" dangerouslySetInnerHTML={{ __html:props.post.title}} />
                       </div>
                       <div className="col-1">
                           <h6 className="text-secondary">
                               {/*<i className="fa-solid fa-ellipsis"></i>*/}
                               <FontAwesomeIcon icon={faEllipsis}/>
                           </h6>
                       </div>
                   </div>

                   <div className="row">

                       <div className="col-2">
                       </div>

                       {/*style="border-color: rgb(34,34,34); border-width: 1px; border-style: solid;"*/}
                       <div className="col-10 rounded-3 pl-0 pr-0" style={style1}>
                           {/*style="border-color: rgb(34,34,34); border-width: 1px; border-style: solid;"*/}
                           <img className="w-100" style={style2} src={props.post.image}/>
                           <div className="text-white p-2">{props.post.imageCaption}</div>
                           <div className="text-secondary pl-2 pr-2">{props.post.postInfo}</div>
                           {/*<i className="fa-solid fa-link pl-2"></i>*/}
                           <FontAwesomeIcon icon={faLink}/>
                           <span className="text-secondary pl-2">netflix.com</span>
                       </div>

                   </div>

                   <div className="row pt-3">
                       <div className="col-2">
                       </div>

                       <div className="col-3">
                           {/*<i className="fa-solid fa-message text-secondary pr-2"></i>*/}
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
                           <FontAwesomeIcon icon={faHeart}/>
                           &nbsp;
                           <span className="text-secondary">
                        {props.post.postLikes}
                        </span>
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