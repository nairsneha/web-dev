import React from "react";
import PostList from "../PostList/index.js";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return (<>
            <div className="ml-0 pl-0 pr-4 mb-4 rounded">
                <WhatsHappening/>
                <PostList/>
            </div>
        </>
    );
}

export default HomeScreen;