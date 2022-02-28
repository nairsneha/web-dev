import posts from "./posts.js"
import PostItem from "./PostItem.js";

const PostItemList = () => {
    return (`
            <div class="list-group">
                   
            ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
             </div>
             
`); }

export default PostItemList;