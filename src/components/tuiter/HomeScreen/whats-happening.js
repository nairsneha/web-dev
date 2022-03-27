import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../../vendors/fontawesome/css/fontawesome.css';
import '../../../vendors/fontawesome/css/all.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarChart, faCalendar, faImage, faSmile} from "@fortawesome/free-solid-svg-icons";

const WhatsHappening = () => {
    const profilePic = useSelector(
        state => state.profile.profilePicture);

    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
                     tuit: whatsHappening
                 }); }

    const style1 = {
        backgroundColor: "black",
        borderBottom: "1px solid rgb(83, 83, 83)"
    }

    return (
        <>
            <div className="row">
            <div className="col-2">
            <img src={profilePic} className="rounded-circle" alt="Cinque Terre" width="60" height="60" />
            </div>
            <div className="col-10">
                <form>
                    <div className="form-group">
                        <textarea className="form-control" id="webdev-create-tweet" placeholder=" What's Happening?" rows="3" style={style1}
    value={whatsHappening}
    onChange={(event) =>
        setWhatsHappening(event.target.value)}
    />
                    </div>
                </form>
            </div>
        </div>
            <div class="row">

                <div className="col-2"/>

                <div className="col-1">
                  <FontAwesomeIcon icon={faImage} style={{color: '#4D9ED1', display:"inline"}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faBarChart} style={{color: '#4D9ED1'}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faSmile} style={{color: '#4D9ED1', display:"inline"}}/>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faCalendar} style={{color: '#4D9ED1', display:"inline"}}/>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-primary rounded-pill" style={{float: "right"}} onClick={tuitClickHandler}>Tuit</button>
                </div>
            </div>


        </>
    );
}
export default WhatsHappening;