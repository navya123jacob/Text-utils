import React ,{useState} from 'react'

 function TextForm(prop) {
  const [text,setText]=useState('Enter text here')
  function oninput(event){
    setText(event.target.value)
   }
 function upcase(){
  setText(text.toUpperCase())
  
 }
 function locase(){
  setText(text.toLowerCase())
 
 }
 function cotext(){
  let elem=document.getElementById('myBox')
  navigator.clipboard.writeText(elem.value)
  prop.showAlert('Copied to clipboard','success')
 }
 function cltext(){
  setText('')
  
 }
 function rmspace(){
  let elem=document.getElementById('myBox').value
  let words = elem.split(/\s+/);
  setText(words.join(' '))
 }
  

  return (
    <>
    <div className='container something'  >
        <h1>{prop.heading} </h1>
  
  <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={oninput}
        style={{ backgroundColor: prop.mode === 'dark' ? 'grey' : 'white',color:prop.mode === 'dark' ? 'white' : 'black' }}
      ></textarea>
  <div className="mb-3">
   <button className="btn btn-primary m-1" onClick={upcase}>Convert to Uppercase</button>
   <button className="btn btn-primary m-1" onClick={locase}>Convert to lowercase</button>
   <button className="btn btn-primary m-1" onClick={cotext}>Copy Text</button>
   <button className="btn btn-primary m-1" onClick={cltext}>Clear Text</button>
   <button className="btn btn-primary m-1" onClick={rmspace}>Remove Extra space</button>
  </div>
    </div>

    <div className="container my-2">
      <h1>Your text summary</h1>
      <p> {text.length?text.split(' ').filter((e)=>{return e.length!==0}).length:0} words and <b>{text.length}</b> characters in {text.length?0.08 * text.split(' ').length:0 } minutes</p>
      <p>{text.length>0?text:'Enter something in the textbox above'}</p>
    </div>
    </>
    
  );
}

export default TextForm;
