import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

const ExploreScreen = () => {

    return (<>
        <div className = "container-fluid">

            <div className="row pl-2 pr-2">

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 pr-0 mt-2">
                    <NavigationSidebar active={"Explore"}/>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-xs-10 col-10 ml-0 pl-4 pr-4 mb-4 rounded">
                    <ExploreComponent />
                </div>

                <div className="col-xl-3 col-lg-3 pr-4 mb-2 mt-2 d-none d-lg-block">
                    <WhoToFollowList />
                </div>

            </div>
        </div>
    </>);

}
export default ExploreScreen;