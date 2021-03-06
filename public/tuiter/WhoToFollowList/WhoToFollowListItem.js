const WhoToFollowListItem = (who) => {
    return(`
            <div class="row pl-2 pt-2 pb-2 p4-4" style="background-color: rgb(34,34,34) !important;">

                        <div class="col-2 pl-1 pr-0">
                            <img class="w-100 h-80 rounded-circle" src=${who.avatarIcon}>
                        </div>

                        <div class="col-6">
                            <h7 class="text-white"><b>${who.userName}</b> <i class="fa-solid fa-circle-check text-white"></i></h7>
                            <div><h7 class="text-secondary">@${who.handle}</h7></div>
                        </div>

                        <div class="col-4 pr-3 pt-2 ">
                            <button type="button" class="btn rounded-pill bg-primary text-white float-right">Follow</button> 
                             </div>

                    </div>
    `);
}
export default WhoToFollowListItem;

