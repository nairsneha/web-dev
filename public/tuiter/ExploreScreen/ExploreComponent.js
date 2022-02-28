import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="col-11 rounded-pill bg-white h-75 mt-2 mb-2">
               
                <i class="fa fa-search position-absolute float-left pt-2 pl-1 mt-1"></i>
                <input class="pl-4 mb-2 mt-2 border-0 w-100" style="box-shadow: none; outline: none" type="text" placeholder="Search Tuiter">
                
                </div>
                
                <div class="col-1 pl-2">
                <a class="fa fa-gear fa-lg text-decoration-none float-right mt-4" href="explore-settings.html"></a>
                </div>
            </div>
       
       
     <ul class="nav nav-pills mb-1">
                <li class="nav-item">
                    <a class="nav-link text-white bg-primary" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white d-none d-sm-block" href="#">COVID-19</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white d-none d-md-block" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white d-none d-lg-block" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white d-none d-xl-block" href="#">Entertainment </a>
                </li>
            </ul>
            
            
              <div class="wd-image-overlay-container mb-2 mt-0">
                <img class = "wd-explore-post-image" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="Snow">
                <div class="wd-image-overlay-left-text">SpaceX's Starship</div>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
