import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function PODInvolmentByManagerialLevel() {
  const url = "https://public.tableau.com/views/PODInvolvementbyManagerialLevel/PODInvolvementbyManagerialLevel";

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
      title="POD Involvement by Managerial Level"
      category="POD membership counts by levels from CEO"
      //stats={<a href="#" onClick={handleClick}>View Detail</a>}
      //statsIcon="pe-7s-note"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default PODInvolmentByManagerialLevel;