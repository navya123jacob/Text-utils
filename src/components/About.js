import React from 'react'

export default function About(props) {
  let mystyle={
    backgroundColor:props.mode==='dark'?'#00001a':'white',
  color:props.mode==='dark'?'white':'black'}
 
    
  return (
    <div class="container" >
    <h1>About us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
       <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
      Text Utils is a versatile utility application designed to empower users with the ability to manipulate and analyze text in numerous ways. With Text Utils, users can easily transform text into uppercase or lowercase, copy text for sharing or reference, remove extra spaces to enhance readability, and determine the average time required to read a given passage. Additionally, Text Utils offers features to clear text fields and modify text according to specific preferences. Whether you're composing documents, analyzing data, or simply refining your writing, Text Utils provides the essential tools to streamline your text editing experience.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This website is completely free of cost and You can use it to analyse your text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
      <strong> Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Text Utils is compatible with all modern web browsers, ensuring a seamless user experience across different platforms and devices.
      </div>
    </div>
  </div>
</div>

</div>
  );
}
