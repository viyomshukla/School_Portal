import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(){
    return(
        <Link to ="/form">
        <button className="btn btn-outline-danger" style={{margin:"100px"}}>Go to Form</button>
        </Link>
    )
}
export default Home;