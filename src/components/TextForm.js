import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleextraspaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))

  }
  const handleupclick=()=>{
    console.log("upper is clicked")
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handlelowclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");

  }
  const handleOnchange=(event)=>{
    setText(event.target.value)
  }
  const handleclear=()=>{ 
    let newtext="";
    setText(newtext);
    props.showAlert("text cleared","success")
  }
  const[text,setText]=useState('enter text here');

  return (
    <>
    
    
  <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.Heading}</h1>

    
<textarea className="form-control" value ={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>

<button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleclear}>Clear it</button>
<button className="btn btn-primary mx2 my-2" onClick={handleextraspaces} >handle extraspace</button>


  </div>

  <div className="container my-3 "style={{color:props.mode==='dark'?'white':'#042743'}} >
<h4>Your text summary</h4>
<p><b>{text.split(" ").length} words and {text.length} characters</b></p>
<p>{text.split(" ").length*0.008} minutes read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter the text to preview"}</p>
  </div>
  

  </>
  )
}
