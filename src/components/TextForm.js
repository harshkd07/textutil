import React, {useState} from 'react'

export default function TextForm(props) {
    const uppertext = ()=>{
      if(text === text.toUpperCase()){
        props.showalert("Your text is already in uppercase. ", "danger");
      }
      else{
        let newText = text.toUpperCase();
        setText(newText) 
        props.showalert("Your text is converted into uppercase. ", "success");
      }
      }
    const lowertext = ()=>{
      if(text === text.toLowerCase()){
        props.showalert("Your text is already in lowercase. ", "danger");
      }
      else{
        let newText = text.toLowerCase();
        setText(newText) 
        props.showalert("Your text is converted into lowercase. ", "success");
      }     
  }
  const cleartext = ()=>{
    let newText = '';
    setText(newText) 
    props.showalert("Your text is cleared. ", "success");
}
const copytext = ()=>{
  navigator.clipboard.writeText(text);
  props.showalert("Your text is copy to clipboard. ", "success");
}

  const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  
    const [text, setText] = useState("");

  return (
    <>
    <div  className='container tarea'>   
        <h1 className="my-4" style={{color : props.mode === 'dark'?'#fff':'black'}}>{props.heading}</h1>     
        <div className="mb-3">
        <textarea style={{backgroundColor : props.mode === 'dark'?'black':'white' , color : props.mode === 'dark'?'#fff':'black'}} className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8 "></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={uppertext}>convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={lowertext}>convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={cleartext}>clear text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={copytext}>Copy text</button>
       
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'#fff':'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} chatracters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    </div>
    </>  
  )
}
