import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function PODInvolvementbyBU() {
  const url = "https://public.tableau.com/views/PODInvolvementbyBU/PODInvolvementbyBU";

  const ref = useRef(null);

  var options = {
    height: 800,
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
        title="POD Member Counts"
        category="Member counts of 7 PODs across VMware"
        stats={<a href="#" onClick={handleClick}>View Detail</a>}
        statsIcon="pe-7s-note"
        content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default PODInvolvementbyBU;