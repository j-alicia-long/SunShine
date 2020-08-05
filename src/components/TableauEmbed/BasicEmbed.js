import React, { useEffect, useRef } from "react";
import { Card } from "components/Card/Card.jsx";

const { tableau } = window;

function BasicEmbed() {
  const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";
  const url2 = "https://tableausse.vmware.com/views/Test_15964635048690";
  const url3 = "https://public.tableau.com/views/BorathonTest/Sheet1";
  const url4 = "https://public.tableau.com/views/RegionalSampleWorkbook/Obesity";

  const ref = useRef(null);

  var options = {
    height: 670,
    width: 800,
    hideTabs: false,
    hideToolbar: false,
  }

  var viz;
  function initViz() {
    viz = new tableau.Viz(ref.current, url4, options);
    
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
      title="2014 Sales"
      category="All products including Taxes"
      stats={<a href="#" onClick={handleClick}>Click me</a>}
      statsIcon="fa fa-check"
      content={<div id="container" ref={ref}></div>}
    />
  );
  
}

export default BasicEmbed;