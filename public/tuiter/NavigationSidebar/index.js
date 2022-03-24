
const NavigationSidebar = (active) => {

    $(document).ready(function () {
        if (active === 'Home')
            $("a:nth-child(2)").addClass("active");

        if (active === 'Explore')
            $("a:nth-child(3)").addClass("active");
    });

    return(`
            <div class="list-group">
            
                <a class="list-group-item text-decoration-none" href="">
                      <i class="fab fa-twitter text-white"></i></a>


                <a class="list-group-item text-decoration-none" href="../HomeScreen/index.html">
                      <i class="fa-solid fa-home text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Home</span></a>
                  
                    <a class="list-group-item text-decoration-none" href="../ExploreScreen/explore.html">
                      <i class="fa-solid fa-hashtag text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Explore</span></a>      
            
                <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-bell text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Notifications</span></a>
                      
                      
                <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-message text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Messages</span></a>
                      
                      
                <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-bookmark text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Bookmarks</span></a>
                      
                      
                <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-list text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Lists</span></a>
                      
                       <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-user text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">Profile</span></a>
                      
                      
                       <a class="list-group-item text-decoration-none" href="#">
                      <i class="fa-solid fa-comment-dots text-white"></i>&nbsp;&nbsp;<span class="text-white d-none d-lg-inline d-print-block">More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;













//
// const NavigationSidebar = () => {
//     return(`
//                    <div class="col-2 mt-2 wd-left-panel">
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-1">
//                     <div class="col-12">
//                         <i class="fa-brands fa-twitter text-white"></i>
//                     </div>
//                 </div>
//             </div>
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-home text-white"></i> <span class="d-none d-xl-inline-block text-white"> Home</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-hashtag text-white"></i> <span class="d-none d-xl-inline-block text-white"> <b>Explore</b></span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-bell text-light"></i> <span class="d-none d-xl-inline-block text-light">Notifications</span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-envelope text-light"></i> <span class="d-none d-xl-inline-block text-light">Messages</span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-bookmark text-light"></i> <span class="d-none d-xl-inline-block text-light">Bookmarks</span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-list text-light"></i> <span class="d-none d-xl-inline-block text-light" >Lists</span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0 mb-0">
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-user text-light"></i> <span class="d-none d-xl-inline-block text-light" >Profile</span>
//                     </div>
//                 </div>
//             </div>
//
//             <div class="card border-0" >
//                 <div class="row ml-1 mt-2 mb-2">
//                     <div class="col-12">
//                         <i class="fa-solid fa-comment-dots text-light"></i> <span class="d-none d-xl-inline-block text-light" >More</span>
//                     </div>
//                 </div>
//             </div>
//             <br />
//             <button type="button" class="btn btn-primary btn-lg wd-left-panel-tuit-button">Tuit</button>
//         </div>
//     `);
// }
// export default NavigationSidebar;

