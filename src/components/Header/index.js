import React from "react";
import Container from "../Container";
import "./style.css";

function Header(){
    return(
        <div> 
            <Container>
                <div className="header">
                    <h1 classname="display-4 text-center">Welcome to Sarah's Portfolio</h1>  
                </div>
            </Container>
        </div>
    )
};

export default Header;