import React, {useState} from "react";
import {useDispatch} from "react-redux";
import '../../../vendors/fontawesome/css/fontawesome.css';
import '../../../vendors/fontawesome/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarChart, faCalendar, faImage, faSmile} from "@fortawesome/free-solid-svg-icons";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
                     tuit: whatsHappening
                 }); }

    const style1={
        backgroundColor: "black",
        borderBottom: "1px solid #F00"
    }
    const style2={
       display: "inline"
    }

    return (
        <>
            <div className="row">
            <div className="col-2">
            <img src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg" className="rounded-circle" alt="Cinque Terre" width="80" height="80" />
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
                <div className="col-8">
                    <button type="button" className="btn btn-primary" style={{float: "right"}} onClick={tuitClickHandler}>Tuit</button>
                </div>
            </div>


        </>
    );
}
export default WhatsHappening;