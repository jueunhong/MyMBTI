import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Result from "./Result";

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Test" element={<Test/>}/>
                <Route path="/Result" element={<Result/>}/>

            </Routes>
        </Router>
    )
};

export default AppRouter;