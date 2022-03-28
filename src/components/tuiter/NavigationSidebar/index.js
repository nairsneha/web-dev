import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../vendors/fontawesome/css/font-awesome.min.css';
import '../../../vendors/fontawesome/css/all.min.css';
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom";
import {
    faBell,
    faBookmark, faCommentDots,
    faHashtag,
    faHome,
    faList,
    faMessage, faUser
} from "@fortawesome/free-solid-svg-icons";


const NavigationSidebar = (props) => {
    const activeColor = {
        backgroundColor: '#4D9ED1'
    }
    const inactiveColor = {
        backgroundColor: '#222222'
    }
    const location = useLocation();


    return(<>
        <div className="list-group">

            <Link to="/" className="list-group-item text-decoration-none">
                <i className={"fab fa-twitter"}/>
            </Link>


            <Link to="/tuiter/home" className="list-group-item text-decoration-none" style={location.pathname.toLowerCase().includes("home") || location.pathname.toLowerCase() === "/tuiter/" || location.pathname.toLowerCase() === "/tuiter" ? activeColor : inactiveColor}>
                <FontAwesomeIcon icon={faHome} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Home</span></Link>

            <Link to="/tuiter/explore" className="list-group-item text-decoration-none" style={location.pathname.toLowerCase().includes("explore") ? activeColor : inactiveColor}>
                <FontAwesomeIcon icon={faHashtag} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Explore</span></Link>

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

            <Link to="/tuiter/profile" className="list-group-item text-decoration-none" style={location.pathname.toLowerCase().includes("profile") ? activeColor : inactiveColor}>
                <FontAwesomeIcon icon={faUser} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">Profile</span></Link>

            <a className="list-group-item text-decoration-none" href="#">
                <FontAwesomeIcon icon={faCommentDots} />
                &nbsp;&nbsp;<span
                className="text-white d-none d-lg-inline d-print-block">More</span></a>
        </div>

            <div className="d-grid mt-2">
                <a href="#"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    </>);
}
export default NavigationSidebar;
