import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function ProfessionalDevelopmentSatisfactionDonut() {
  const url = "https://public.tableau.com/views/ProfessionalDevelopmentSatisfactionDonut/ProfDevSatisfactionDonut";

  const ref = useRef(null);

  var options = {
    height: 300,
    width: "100%",
    hideTabs: false,
    hideToolbar: false,
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
      title="Professional Development Satisfaction"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default ProfessionalDevelopmentSatisfactionDonut;