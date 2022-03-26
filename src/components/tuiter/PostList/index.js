import React from "react";
import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";

const PostList = () => {
    const posts = useSelector(
        state => state.posts);

    return (<>
            {/*<div className="list-group">*/}
            {/*    {*/}
            {/*        posts.map((post,index) => {*/}
            {/*            return(<PostItem key={'post'+index} post={post} />);*/}
            {/*        })*/}
            {/*    }*/}
            {/* </div>*/}
            <ul className="ttr-tuits list-group">
                {
                    posts.map && posts.map(post =>
                                               <PostItem key={post.id}
                                                             post={post}/>)
                }
            </ul>
        </>
             
); }

export default PostList;