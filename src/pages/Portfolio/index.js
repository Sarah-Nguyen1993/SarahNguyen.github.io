import React from "react";
import Container from "../../components/Container";
import Project from "../../components/Project";
import PhotoPhriend from "../../images/PhotoPhriend.gif";

function Portfolio() {
  return (
    <Container>
      <div className="card">
        <Project 
            title="PhotoPhriend"
            demo={PhotoPhriend}
            deployedWebsite="https://ikethe4.github.io/photophriend/"
            githubLink="https://github.com/ikethe4/photophriend"
        />
        <Project 
            title="Combat Fitness"
            demo="demo.gif"
            deployedWebsite="https://combatfitness.herokuapp.com/"
            githubLink="https://github.com/Sarah-Nguyen1993/Combat-Fitness"
        />
        <Project 
            title="Employee Tracker"
            demo="demo.gif"
            githubLink="https://github.com/Sarah-Nguyen1993/Employee-Tracker"
        />
        <Project 
            title="Note Taker"
            demo="demo.gif"
            deployedWebsite="https://easy-note-taker.herokuapp.com/"
            githubLink="https://github.com/Sarah-Nguyen1993/Note-Taker"
        />
        <Project 
            title="Weather Forecast"
            demo="demo.gif"
            deployedWebsite="https://sarah-nguyen1993.github.io/Weather-Forecast/"
            githubLink="https://github.com/Sarah-Nguyen1993/Weather-Forecast"
        />
        <Project 
            title="Budget Tracker"
            demo="demo.gif"
            deployedWebsite="https://keepyourbudgetontrack.herokuapp.com/"
            githubLink="https://github.com/Sarah-Nguyen1993/Budget-Tracker"
        />

        
      </div>
    </Container>
  );
}
export default Portfolio;
