import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function TeamDiversityDonut() {
  const url = "https://public.tableau.com/views/TeamDiversityDonut/TeamDiversityDonut";

  const ref = useRef(null);

  var options = {
    height: 330,
    width: "100%",
    hideTabs: false,
    hideToolbar: false,
    //device: "desktop",
  }

  var viz;
  function initViz() {
    viz = new tableau.Viz(ref.current, url, options);
    
  }

  useEffect(() => {
    initViz();
   }, []);

   function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <Card
      id="chartActivity"
      title="Team Diversity Satisfaction"
      content={<div id="container" ref={ref}></div>}
      stats="The goal is 6.5 on a 1-7 scale"
    />
  );
  
}

export default TeamDiversityDonut;