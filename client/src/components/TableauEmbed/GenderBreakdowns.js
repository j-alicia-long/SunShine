import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function GenderBreakdowns() {
  const url = "https://public.tableau.com/views/GenderBreakdown_15966678644280/GenderBreakdown";

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
      title="Gender Makeup of Employees"
      category="Gender makeup of VMware employees relative to US population and other tech companies"
      //stats={<a href="#" onClick={handleClick}>View Detail</a>}
      //statsIcon="pe-7s-note"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default GenderBreakdowns;