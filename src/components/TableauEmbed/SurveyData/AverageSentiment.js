import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function AverageSentiment() {
  const url = "https://public.tableau.com/views/AverageSentiment_15966930773430/AverageSentiment";

  const ref = useRef(null);

  var options = {
    height: 800,
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
      title="Average Sentiment"
      category="Average sentiment from survey"
      //stats={<a href="#" onClick={handleClick}>View Detail</a>}
      //statsIcon="pe-7s-note"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default AverageSentiment;