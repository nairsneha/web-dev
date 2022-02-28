const PostItem = (post) => {
    return(`



            <div class="card bg-black rounded-0 mt-2">
                <div class="card-body pb-0">
                
                    <div class="row">
                      <div class="col-2">
                            
                            <img class="rounded-circle float-right ml-5 mb-2" src=${post.imageIcon} width="60" height="60">

                        </div>
                        <div class="col-9">
                            <h6 class="text-white">${post.name}  <i class="fa-solid fa-circle-check text-white"></i> <span class="text-secondary">&nbsp; @${post.userName}</span><span class="text-secondary"> - ${post.time}</span></h6>
  
                           <div class="text-white pr-4">${post.title}</div>
                        </div>
                         <div class="col-1">
                            <h6 class="text-secondary">
                                <i class="fa-solid fa-ellipsis"></i>
                            </h6>
                        </div>
                    </div>
                    
                    <div class="row">
     
                        <div class="col-2">
                        </div>
                        
                        <div class="col-10 rounded-3 pl-0 pr-0" style="border-color: rgb(34,34,34); border-width: 1px; border-style: solid;">
                        <img class="w-100" style="border-color: rgb(34,34,34); border-width: 1px; border-style: solid;" src=${post.image}>
                        <div class="text-white p-2">${post.imageCaption}</div>
                        <div class="text-secondary pl-2 pr-2">${post.postInfo}</div>
                        <i class="fa-solid fa-link pl-2"></i><span class="text-secondary pl-2">netflix.com</span>
                        </div>
                    
                    </div>
     
              <div class="row pt-3">
              <div class="col-2">
                        </div>
                        
                        <div class="col-3">
                        <i class="fa-solid fa-message text-secondary pr-2"></i>
                        <span class="text-secondary">
                        ${post.postComments}
                        </span>
                        </div>
                        
                        <div class="col-3">
                        <i class="fa-solid fa-retweet text-secondary pr-2"></i>
                        <span class="text-secondary">
                        ${post.postRetuits}
                        </span>
                        </div>
                        
                        <div class="col-3">
                       <i class="fa-solid fa-heart text-secondary pr-2"></i>
                        <span class="text-secondary">
                        ${post.postLikes}
                        </span>
                        </div>
                        
                        <div class="col-1">
                       <i class="fa-solid fa-arrow-up-from-bracket text-secondary pr-2"></i>
                        </div>
                        
              </div>
                </div>
            </div>
          
          <hr>
            
            
    `);

}
export default PostItem;