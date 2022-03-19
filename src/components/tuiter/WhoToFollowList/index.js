import React from "react";
import who from './who.json'
import WhoToFollowListItem from './WhoToFollowListItem.js'

const WhoToFollowList = () => {

    const whoToFollowStyle = {
        backgroundColor: "#222222 !important"
    }
    return (
 <>
     {/*style={"background-color: rgb(34,34,34) !important;"}*/}
                    <div className="row rounded-top" style={whoToFollowStyle} >
                        <div className="col-12 pt-2 rounded-top" style={whoToFollowStyle}>
                            <h6 className="mt-2 ml-2 text-white"><b>Who to follow</b></h6>
                        </div>
                    </div>


            <div className="list-group">
                {who.map((person) => (
                       <WhoToFollowListItem who={person} />
                    ))}
             </div>
 </>
); }

export default WhoToFollowList;
