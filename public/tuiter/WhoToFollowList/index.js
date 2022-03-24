import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js'

const WhoToFollowList = () => {
    return (`
 
                    <div class="row rounded-top" style="background-color: rgb(34,34,34) !important;">
                        <div class="col-12 pt-2 rounded-top">
                            <h6 class="mt-2 ml-2 text-white"><b>Who to follow</b></h6>
                        </div>
                    </div>
                 
                    
            <div class="list-group">
                   
            ${
        who.map(user => {
            return(WhoToFollowListItem(user));
        }).join('')
    }
             </div>
             
`); }

export default WhoToFollowList;
