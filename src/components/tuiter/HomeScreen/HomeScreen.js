import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem";

const HomeScreen = () => {
    return (<>
        <div className="container-fluid">

            <div className="row pl-2 pr-2">

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 pr-0 mt-2">
                    <NavigationSidebar active={"Home"} />
                </div>
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-xs-10 col-10 ml-0 pl-0 pr-4 mb-4 rounded">
                    <PostList/>
                </div>
                <div className="col-xl-4 col-lg-3 pr-4 mb-2 mt-2 rounded d-none d-lg-block">
                    <PostSummaryItem />
                </div>

            </div>
        </div>
        </>
    );

}
/*




 */

export default HomeScreen;