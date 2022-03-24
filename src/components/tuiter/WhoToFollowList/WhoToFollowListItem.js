import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const WhoToFollowListItem = (props)  => {
    const whoToFollowStyle = {
        backgroundColor: '#222222'
    }

    return( <>
            <div className="row pl-2 pt-2 pb-2 p4-4" style={whoToFollowStyle} >

                        <div className="col-2 pl-1 pr-0">
                            <img className="w-100 h-80 rounded-circle" src={props.who.avatarIcon}/>
                        </div>

                        <div className="col-6">
                            <h6 className="text-white"><b>{props.who.userName}</b>   <FontAwesomeIcon icon={faCircle} /></h6>
                            <div><h6 className="text-secondary">{props.who.handle}</h6></div>
                        </div>

                        <div className="col-4 pr-3 pt-2 ">
                            <button type="button" className="btn rounded-pill bg-primary text-white float-right">Follow</button>
                             </div>

                    </div>
    </>);
}
export default WhoToFollowListItem;

