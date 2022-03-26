import React, {useState} from "react";
import {useSelector} from "react-redux";
import '../../../vendors/fontawesome/css/font-awesome.min.css';
import '../../../vendors/fontawesome/css/all.min.css';

const Profile = () => {

    const profile = useSelector(
        state => state.profile);
    const [tempProfile, setTempProfile] = useState(profile);


    const bannerImg={
        height:'300px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [isEditProfileOn, setIsEditProfileOn]= useState(false);

    return(
        <>
            {isEditProfileOn === false && <>
                <div>
                <h5 style={{paddingBottom: 5, paddingTop: 5, color:"white", fontWeight: 'bold'}}>{tempProfile.firstName}  {tempProfile.lastName} </h5>
                <p style={{color: "grey", marginTop: '-18px', marginBottom: '2px'}}> {tempProfile.tuittCount} Tweets</p>
                </div>
            </>
            }
            {isEditProfileOn === true && <>
                <div className="row">
                    <div className="col-3">
                        <h5 style={{padding: 5,color:"white"}}>Edit Profile</h5>
                    </div>
                    <div className="col-9" >
                        <button style={{float:"right"}} type="button" className="primary" onClick={() => setIsEditProfileOn(!isEditProfileOn)}> Save </button>
                    </div>
                </div>
            </>
            }

            <div style={bannerImg}>  <img src = {tempProfile.bannerImage}/>
            </div>

            <img src="https://www.statuspik.com/wp-content/uploads/2020/12/Beautiful-anime-profile-pics.jpg" className="rounded-circle"
                 alt="Cinque Terre" height='150' width='150' style={{marginTop: '-50px'}} />
            {isEditProfileOn === false && <>

                <button type="button" style={{float: "right", marginTop: "10px", backgroundColor: 'black'}} className="btn btn-primary rounded-pill" onClick={() => setIsEditProfileOn(!isEditProfileOn)}>Edit Profile</button>

                {/*<button className="primary button button-4" onClick={() => setIsEditProfileOn(!isEditProfileOn)}*/}

                {/*        style={{float: "right", marginTop: "10px"}}> Edit profile*/}
                {/*</button>*/}
            </>
            }
            {isEditProfileOn === false && <>
                <h3 style={{
                    color: "white", fontWeight: 'bold', paddingTop: '2px', paddingBottom: '5px'
                }}> {tempProfile.firstName} {tempProfile.lastName}</h3>
            </>
            }
            {isEditProfileOn === true && <>
                <br />
                <br />
                <input type="text" placeholder="name" value={tempProfile.firstName} />
                <br />
            </>
            }
            {isEditProfileOn === false && <>
                <p style={{color: "grey", marginTop: '-20px'}}> @{tempProfile.handle}</p>
            </>
            }
            {isEditProfileOn === false && <>
                <h6>{tempProfile.bio}</h6>
            </>
            }
            {isEditProfileOn === true && <>
                <input type="textarea" placeholder="Bio" value={tempProfile.bio} />
                <br/>
            </>
            }
            <div className="row">
                {isEditProfileOn === false && <>
                    <div className="col-3">
                        <i className={"fa fa-map-marker"} style={{paddingRight: '6px'}}/>
                        {tempProfile.location}
                    </div>
                </>
                }
                {isEditProfileOn === true && <>
                    <input type="location" placeholder="name" value={tempProfile.location} />
                </>
                }
                {isEditProfileOn === false && <>
                    <div className="col-4">
                        <i className={"fa fa-map-marker"} style={{paddingRight: '6px'}}/>
                        Born, {tempProfile.dateOfBirth}
                    </div>
                </>
                }
                {isEditProfileOn === true && <>
                    <input type="text" placeholder="dateOfBirth" value={tempProfile.dateOfBirth} />
                </>
                }
                <div className="col-4">
                    <i className={"fa fa-map-marker"} style={{paddingRight: '6px'}}/>
                    Joined, {tempProfile.dateJoined}
                </div>
            </div>

            <div className="row">
                <div className="col-3" style={{color:"grey"}}> <span style={{color:"white"}}> {tempProfile.followingCount} <span style={{color: 'rgb(128, 128, 128)'}}> Following </span> </span></div>
                <div className="col-3" style={{color:"grey"}}> <span style={{color:"white"}}> {tempProfile.followersCount} <span style={{color: 'rgb(128, 128, 128)'}}> Followers </span></span></div>
            </div>
        </>
    );
}



export default Profile;