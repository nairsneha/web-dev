import React from 'react';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/font-awesome.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Index/>}/>
                    <Route path="/tuiter/home"
                           exact={true}
                           element={<Index/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}
export default App;


