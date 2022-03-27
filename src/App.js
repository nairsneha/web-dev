import React from 'react';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/font-awesome.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import NotificationScreen from "./components/tuiter/NotificationScreen";
import Tuiter from "./components/tuiter";
import ProfileScreen from "./components/tuiter/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Labs/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route path="" element={<HomeScreen/>}/>
                            <Route path="home" element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>
                            <Route path="notifications" element={<NotificationScreen/>}/>
                        </Route>
                    </Route>
                </Routes>

            </div>
        </BrowserRouter>
        // <>
        //     <Labs/>
        // </>
    );
}
export default App;


