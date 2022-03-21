import React from "react";
import posts from "./posts.json"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (<>
            <div className="list-group">
                {
                    posts.map((post,index) => {
                        return(<PostItem key={'post'+index} post={post} />);
                    })
                }
             </div>
        </>
             
); }

export default PostList;