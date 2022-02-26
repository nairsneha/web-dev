import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";


(function ($) {
    $('#wd-explore').append(`

<div class="container-fluid">

    <div class="row pl-2 pr-2">
    
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 pr-0 mt-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-xs-10 col-10 ml-0 pl-4 pr-4">
            ${ExploreComponent()}
        </div>
        <div class="col-xl-3 col-lg-3 pr-4 mt-2 d-none d-lg-block">
            ${WhoToFollowList()}
      </div>
</div>
</div>
    `);
})($);
