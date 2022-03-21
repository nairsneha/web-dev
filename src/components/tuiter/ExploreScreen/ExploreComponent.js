import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import './ExploreComponent.css';
const ExploreComponent = () => {

    const searchBarStyle = {
        boxShadow: "none",
        outline: "none"
    };

    return(
        <>
           <div className="row">
                <div className="col-11 rounded-pill bg-white h-75 mt-2 mb-2">
               
                <i className="fa fa-search position-absolute float-left pt-2 pl-1 mt-1"/>
                <input className="pl-4 mb-2 mt-2 border-0 w-100" style={{searchBarStyle}} type="text" placeholder="Search Tuiter"/>
                
                </div>
                
                <div className="col-1 pl-2">
                <a className="fa fa-gear fa-lg text-decoration-none float-right mt-4" />
                </div>
            </div>


     <ul className="nav nav-pills mb-1">
                <li className="nav-item">
                    <a className="nav-link text-white bg-primary" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white d-none d-sm-block" href="#">COVID-19</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white d-none d-md-block" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white d-none d-lg-block" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white d-none d-xl-block" href="#">Entertainment </a>
                </li>
            </ul>


              <div className="wd-image-overlay-container mb-2 mt-0">
                <img className = "wd-explore-post-image" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="Snow"/>
                <div className="wd-image-overlay-left-text">SpaceX's Starship</div>
            </div>
<PostSummaryList />
        </>
    );
}
export default ExploreComponent;
