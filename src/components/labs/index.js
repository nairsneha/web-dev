import React from "react";
import ReduxExamples from "./redux-examples";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <ReduxExamples/>
        </>)
};

export default Labs;