import React, {useEffect,useState} from "react";
import postJson from './posts.json';
const PostSummaryItem = (props) => {

    const [postArr, setPostarr] = useState([]);

    useEffect(()=>{
      //  setPostarr(JSON.parse(postJson));
    },[]);
    return(<>

        {postJson.map((postData) => {
            return (
                <div className="card rounded-0">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-10">
                                <h6 className="text-secondary">{postData.topic} </h6>
                                <h6 className="text-white"><b>{postData.userName}</b>
                                    <i className="fa-solid fa-circle-check text-white"/>
                                    <span className="wd-grey-color text-secondary"> - {postData.time}</span>
                                </h6>
                                <div className="text-white pr-4"><b>{postData.title}</b></div>
                            </div>


                            <div className="col-2">

                                <img className="rounded float-right ml-5" src={postData.image} width="80" height="70" />

                            </div>

                        </div>
                    </div>
                </div>
            );
        })

        }


    </>
);

}

/*



 */
export default PostSummaryItem;