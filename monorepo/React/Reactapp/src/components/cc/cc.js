import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Step2 from "./step2";
import Button from "../Button/Button";
const CC = () =>{

    return(
        <div>
            <Step2/>
            <Link to="/">
            <Button/>
            </Link>
            <h2>Anti Wrinkle Treatment</h2>
        </div>
    )
}
export default CC

