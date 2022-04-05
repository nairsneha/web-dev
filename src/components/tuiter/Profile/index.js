import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../../../vendors/fontawesome/css/font-awesome.min.css';
import '../../../vendors/fontawesome/css/all.min.css';
import {useDispatch} from "react-redux";

const Profile = () => {

    const profile = useSelector(
        state => state.profile);

    const [tempProfile, setTempProfile] = useState(profile);

    const dispatch = useDispatch();

    const bannerImg = {
        height:'300px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: "hidden",
        marginTop: '5px'
    };

    const textAreaStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    const [isEditProfileOn, setIsEditProfileOn]= useState(false);
    const [isCrossPressed, setIsCrossPressed]= useState(false);

    useEffect(() => {

        if(!isEditProfileOn&&!isCrossPressed) {
            const action = {
                type: 'edit-profile',
                profile: tempProfile
            };
            dispatch(action);
        }

        if(!isEditProfileOn&&isCrossPressed) {
            setTempProfile(profile);
            setIsCrossPressed(false);
        }
    },[isEditProfileOn]);


    return(
        <>
            {isEditProfileOn === false && <>
                <div>
                <h5 style={{paddingBottom: 5, paddingTop: 5, color:"white", fontWeight: 'bold'}}>{tempProfile.firstName} </h5>
                <p style={{color: "grey", marginTop: '-18px', marginBottom: '2px'}}> {tempProfile.tuittCount} Tweets</p>
                </div>
            </>
            }
            {isEditProfileOn === true && <>
                <div className="row">
                    <div className="col-9">
                        <i style={{marginRight: '10px', fontWeight: 'bold'}} className={'fa fa-close'} onClick={() => {
                            setIsEditProfileOn(false);
                            setIsCrossPressed(true);
                        }
                        }/>
                        <span style={{padding: 5,color:"white", fontWeight: 'bold', fontSize: '21.28px'}}>Edit Profile</span>
                    </div>
                    <div className="col-3" >
                        <button type="button" style={{float: "right", backgroundColor: 'black'}} className="btn btn-primary rounded-pill" onClick={() => setIsEditProfileOn(false)}> Save </button>
                    </div>
                </div>
            </>
            }

            <div style={bannerImg}>  <img src = {tempProfile.bannerPicture}/>
            </div>

            <img src="https://www.statuspik.com/wp-content/uploads/2020/12/Beautiful-anime-profile-pics.jpg" className="rounded-circle"
                 alt="Cinque Terre" height='150' width='150' style={{marginTop: '-55px'}} />
            {isEditProfileOn === false && <>
                <button type="button" style={{float: "right", marginTop: "10px", backgroundColor: 'black'}} className="btn btn-primary rounded-pill" onClick={() => setIsEditProfileOn(true)}>Edit Profile</button>
            </>
            }
            {isEditProfileOn === false && <>
                <h3 style={{
                    color: "white", fontWeight: 'bold', paddingTop: '2px', paddingBottom: '5px'
                }}> {tempProfile.firstName}</h3>
            </>
            }

            {isEditProfileOn === true && <>
                <br />
                <br />
                <div className="col-xs-4">
                    <label htmlFor="name" style={{color:"grey", marginTop: '4px'}}>Name:</label>

                    <input className="form-control" id="name"
                           style={{backgroundColor: 'black', color: 'white', borderColor: 'gray', borderWidth: '2px'}}
                           type="text"
                           defaultValue={tempProfile.firstName}

                           onChange={(e) =>
                               setTempProfile({
                                                  ...tempProfile,
                                                  firstName: e.target.value
                                              }) }
                    />
                </div>
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
                <div className="col-xs-4">
                    <label htmlFor="bio" style={{color:"grey", marginTop: '4px'}}>Bio:</label>

                    <input className="form-control" id="bio"
                           style={{backgroundColor: 'black', color: 'white', borderColor: 'gray', borderWidth: '2px'}}
                           type="text"
                           defaultValue={tempProfile.bio}

                           onChange={(e) =>
                               setTempProfile({
                                                  ...tempProfile,
                                                  bio: e.target.value
                                              }) }
                    />
                </div>
            </>
            }



            {isEditProfileOn === false && <>
                <h6 style={{
                    color: "white", fontWeight: 'bold', paddingTop: '2px', paddingBottom: '5px'
                }}> {tempProfile.website}</h6>
            </>
            }

            {isEditProfileOn === true && <>
                <div className="col-xs-4">
                    <label htmlFor="website" style={{color:"grey", marginTop: '4px'}}>Website:</label>

                    <input className="form-control" id="website"
                           style={{backgroundColor: 'black', color: 'white', borderColor: 'gray', borderWidth: '2px'}}
                           type="text"
                           defaultValue={tempProfile.website}

                           onChange={(e) =>
                               setTempProfile({
                                                  ...tempProfile,
                                                  website: e.target.value
                                              }) }
                    />
                </div>
            </>
            }


            <div className="row">
                { isEditProfileOn === false && <>
                    <div className="col-3">
                        <i className={"fa fa-map-marker"} style={{paddingRight: '6px'}}/>
                        {tempProfile.location}
                    </div>
                </>
                }
                {isEditProfileOn === true && <>
                    <div className="col-xs-4">
                        <label htmlFor="location" style={{color:"grey", marginTop: '4px'}}>Location:</label>

                        <input className="form-control" id="location"
                               style={{backgroundColor: 'black', color: 'white', borderColor: 'gray', borderWidth: '2px'}}
                               type="text"
                               defaultValue={tempProfile.location}

                               onChange={(e) =>
                                   setTempProfile({
                                                      ...tempProfile,
                                                      location: e.target.value
                                                  }) }
                        />
                    </div>
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
                        <div className="col-xs-4">
                        <label htmlFor="dateOfBirth" style={{color:"grey", marginTop: '4px'}}>Date Of Birth:</label>

                        <input type = "date" className="form-control" id="dateOfBirth"
                               style={{backgroundColor: 'black', color: 'white', borderColor: 'gray', borderWidth: '2px'}}
                               defaultValue={tempProfile.dateOfBirth}

                               onChange={(e) =>
                                   setTempProfile({
                                                      ...tempProfile,
                                                      dateOfBirth: e.target.value
                                                  }) }
                        />

                    </div>
                </>
                }

    <div className="col-4">

                    <i className={"fa fa-map-marker"} style={{paddingRight: '6px'}}/>
                    Joined, {tempProfile.dateJoined}
                </div>
            </div>

            <div className="row">
                <div className="col-3" style={{color:"grey"}}> <span style={{color:"white", fontWeight: 'bold'}}> {tempProfile.followingCount} <span style={{color: 'rgb(128, 128, 128)'}}> Following </span> </span></div>
                <div className="col-3" style={{color:"grey"}}> <span style={{color:"white", fontWeight: 'bold'}}> {tempProfile.followersCount} <span style={{color: 'rgb(128, 128, 128)'}}> Followers </span></span></div>
            </div>
        </>
    );
}



export default Profile;