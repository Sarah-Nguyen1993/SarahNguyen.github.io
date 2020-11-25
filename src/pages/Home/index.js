import React from "react";
import Container from "../../components/Container";
import "./style.css";
import portrait from "../../images/portrait.jpg"

function Home(){
    return (
       <Container>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                        <h2 className="card-title">About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={portrait} alt="portrait" />
                        </div>
                        <div className="col-md-9">
                            <p className="card-text">
                                Hello, welcome to my website.<br/>
                                My name is Sarah Nguyen. 
                                I am currently a full-stack web developing student who will gradute from The Coding Bootcamp at University of Texas at Austin in December 2020.
                                I am eager and passionate to learn and grow in technology industry.<br/>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <br/>
                        <p className="card-text">
                            <a href="https://drive.google.com/file/d/1XdA1lGdzITc6YSgPPLP7U788kkrS_9Gx/view?usp=sharing"><strong>My Resume</strong></a>
                            <br/>
                            <strong>Find me at:</strong><br/>
                            <strong>Email: </strong><a href="mailto:dudu.nt107@gmail.com">dudu.nt107@gmail.com</a> 
                            <br/>
                            <strong>Phone Number: </strong><a href="#">(253)359-5805</a> 
                            <br/>
                            <strong>Github: </strong><a href="https://github.com/Sarah-Nguyen1993" target = "_blank">github.com/Sarah-Nguyen1993</a> 
                            <br/>
                            <strong>Linkedin: </strong><a href='https://linkedin.com/in/sarah-nguyen1993' target = "_blank">linkedin.com/in/sarah-nguyen1993</a>
                        </p>
                    </div>

                    
                    
            
                </div>
            </div>
       
       </Container>
        
    )

};
export default Home;