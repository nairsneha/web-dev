import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faBell,
    faBookmark, faCommentDots,
    faHashtag,
    faHome, faKiwiBird,
    faList,
    faMessage, faUser
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    // (document).ready(function () {
    //     if (active === 'Home')
    //         ("a:nth-child(2)").addClass("active");
    //
    //     if (active === 'Explore')
    //         ("a:nth-child(3)").addClass("active");
    // });

    return(<>
        <div className="list-group">

            <a className="list-group-item text-decoration-none" href="">
                <FontAwesomeIcon icon={faKiwiBird} />
              </a>


            <a className="list-group-item text-decoration-none" href="../HomeScreen/index.html">
                <FontAwesomeIcon icon={faHome} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Home</span></a>

            <a className="list-group-item text-decoration-none"
               href="../ExploreScreen/explore.html">
                <FontAwesomeIcon icon={faHashtag} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Explore</span></a>

            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faBell} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Notifications</span></a>


            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faMessage} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Messages</span></a>


            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faBookmark} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Bookmarks</span></a>


            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faList} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Lists</span></a>

            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Profile</span></a>


            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faCommentDots} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">More</span></a>
        </div>
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    </>);
}
export default NavigationSidebar;
