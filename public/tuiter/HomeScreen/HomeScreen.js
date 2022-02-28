import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostItem from "../PostList";

(function ($) {
    $('#wd-explore').append(`

<div class="container-fluid">

    <div class="row pl-2 pr-2">
    
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 pr-0 mt-2">
            ${NavigationSidebar('Home')}
        </div>
        <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-xs-10 col-10 ml-0 pl-0 pr-4 mb-4 rounded">
            ${PostItem()}
        </div>
        <div class="col-xl-4 col-lg-3 pr-4 mb-2 mt-2 rounded d-none d-lg-block">
             ${PostSummaryList()}
      </div>
</div>
</div>
    `);
})($);
