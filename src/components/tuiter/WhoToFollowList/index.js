import React from "react";
import WhoToFollowListItem from './WhoToFollowListItem.js'
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    const whoToFollowStyle = {
        backgroundColor: '#222222'
    }
    return (
 <>
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
