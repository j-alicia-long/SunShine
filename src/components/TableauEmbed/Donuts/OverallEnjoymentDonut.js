import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function OverallEnjoymentDonut() {
  const url = "https://public.tableau.com/views/OverallEnjoymentDonut/OverallEnjoymentDonut";

  const ref = useRef(null);

  var options = {
    height: 330,
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
      title="Overall Enjoyment"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default OverallEnjoymentDonut;