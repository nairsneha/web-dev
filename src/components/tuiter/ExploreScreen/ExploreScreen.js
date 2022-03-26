import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

const ExploreScreen = () => {

    return (<>
        {/*

        <div className = "container-fluid">

            <div className="row pl-2 pr-2">

            </div>
        </div>

        */}
        <div className=" ml-0 pl-4 pr-4 mb-4 rounded">
            <ExploreComponent />
        </div>
    </>);

}
export default ExploreScreen;