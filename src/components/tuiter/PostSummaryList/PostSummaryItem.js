import React from "react";

const PostSummaryItem = (props) => {
    return(<>

            <div className="card rounded-0">
                <div className="card-body">
                    <div className="row">

                        <div className="col-10">
                            <h6 className="text-secondary">{props.post.topic} </h6>
                            <h6 className="text-white"><b>{props.post.userName}</b>
                                <i className="fa-solid fa-circle-check text-white"/>
                                <span className="wd-grey-color text-secondary"> - {props.post.time}</span>
                            </h6>
                           <div className="text-white pr-4"><b>{props.post.title}</b></div>
                        </div>


                        <div className="col-2">

                            <img className="rounded float-right ml-5" src={props.post.image} width="80" height="70" />

                        </div>

                    </div>
                </div>
            </div>
    </>
);

}
export default PostSummaryItem;