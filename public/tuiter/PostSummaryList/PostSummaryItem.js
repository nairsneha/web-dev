const PostSummaryItem = (post) => {
    return(`

            <div class="card bg-dark rounded-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col-10">
                            <h6 class="text-secondary">${post.topic} </h6>
                            <h6 class="text-white"><b>${post.userName}</b>
                                <i class="fa-solid fa-circle-check text-white"></i>
                                <span class="wd-grey-color text-secondary"> - ${post.time}</span>
                            </h6>
                           <div class="text-white pr-4"><b>${post.title}</b></div>
                        </div>
                        <div class="col-2">
<br>
                            <img class="rounded float-right ml-5" src=${post.image} width="80" height="70">

                        </div>
                    </div>
                </div>
            </div>
    `);

}
export default PostSummaryItem;