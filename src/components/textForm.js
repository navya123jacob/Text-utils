import React ,{useState} from 'react'

 function TextForm(prop) {
  const [text,setText]=useState('Enter text here')
  const [searchTerm, setSearchTerm] = useState('');
  const [replacementText, setReplacementText] = useState('');
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
 function countLines() {
  const lines = text.split('.').filter(line => line.trim() !== '');
  prop.showAlert(`Number of lines: ${lines.length}`, 'info');
} 
function handleSearchTermChange(event) {
  setSearchTerm(event.target.value);
}

function handleReplacementTextChange(event) {
  setReplacementText(event.target.value);
}

function findAndReplace() {
  if (searchTerm.trim() === '') {
    prop.showAlert('Please enter a search term.', 'warning');
    return;
  }

  const newText = text.replace(new RegExp(searchTerm, 'g'), replacementText);
  setText(newText);
  prop.showAlert('Text replaced successfully.', 'success');
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
        style={{ backgroundColor: prop.mode === 'dark' ? '#001a33' : 'white',color:prop.mode === 'dark' ? 'white' : 'black' }}
      ></textarea>
  <div className="mb-3">
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={upcase}>Convert to Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={locase}>Convert to lowercase</button>
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={cotext}>Copy Text</button>
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={cltext}>Clear Text</button>
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={rmspace}>Remove Extra space</button>
   <button disabled={text.length===0} className="btn btn-primary m-1" onClick={countLines}>Count Lines</button>
  </div>
    </div>

    <div className="container my-2">
      <h1>Your text summary</h1>
      <p> {text.length?text.split(' ').filter((e)=>{return e.length!==0}).length:0} words and <b>{text.length}</b> characters in {text.length?0.08 * text.split(' ').length:0 } minutes</p>
      <p>{text.trim().length>0? <pre>{text}</pre>:'Nothing to preview'}</p>
    </div>
    <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{width: '50vw', backgroundColor: prop.mode === 'dark' ? '#001a33' : 'white',color:prop.mode === 'dark' ? 'white' : 'black' }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter replacement text"
          value={replacementText}
          onChange={handleReplacementTextChange}
          style={{width: '50vw', backgroundColor: prop.mode === 'dark' ? '#001a33' : 'white',color:prop.mode === 'dark' ? 'white' : 'black' }}
        />
        <button disabled={text.length===0} className="btn btn-primary m-3" onClick={findAndReplace}>Find and Replace</button>
        </div>
    </>
    
  );
}

export default TextForm;
