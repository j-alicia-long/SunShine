import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function GenderBreakdowns() {
  const url = "https://public.tableau.com/views/EthnicBreakdown/EthnicBreakdown";

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
      title="Ethnic Makeup of Employees"
      category="Ethnic makeup of VMware employees relative to US population and other tech companies"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default GenderBreakdowns;