import React, { useState } from 'react'
import NavBar from './NavBar';
// import React from 'react'

export default function TextBox(props) {
      
  // const [mystyle, setMyStyle] = useState({
  //   color:'white',
  //   backgroundColor:'black'
  // })

const [text, setText] = useState("");
console.log("props.mode:", props.mode);
    let obj={
        height:'100%',
        // backgroundColor:props.mode==='light'?'grey':'white'
        
    };
    const UpperCase=()=>{
        setText(text.toUpperCase())
    }
    const LowerCase=()=>{
        setText(text.toLowerCase())
    }
    
    const ClearText=()=>{
        setText("")
    }
    const change=(event)=>{

        setText(event.target.value)
    }
    // const format=()=>{
    //     let langth=text.trim()
    //     setText(langth)
    // }
    const format = () => {
        // Replace multiple spaces with a single space using a regular expression
        const formattedText = text.replace(/\s+/g, ' ');
        setText(formattedText);
      };
      function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      }
      
      // Usage
    //   speak("Hello, how are you?");
      
      
    
  
          let langth=text
        //   console.log(langth)
        langth=langth.replace(/\s/g, "")
           
        let words=text.trim()
         words = text.replace(/\s+/g, ' ');
         words=words.trim()
        words=words.split(/\s+/);
        if(words==''||words=="  "){
          words.length=0
          
        }


  return (
   <>
   <div className="container" >  


   <div className={`form-floating  text-${props.mode=='light'?'dark':'dark'}`}>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{backgroundColor:props.mode==='light'?'white':'grey'}} value={text} onChange={change}></textarea>
  <label htmlFor="floatingTextarea2 ">Enter you text</label>
  helioiii
</div>
<button type="button" onClick={UpperCase} className={`btn btn-${props.color}  my-3 mx-2`}>Upper Case</button>
<button type="button" onClick={LowerCase} className={`btn btn-${props.color}  my-3 mx-2`}>Lower Case</button>

<button type="button" onClick={ClearText} className={`btn btn-${props.color}  my-3 mx-2`}>Clear Text</button>
<button type="button" onClick={format} className={`btn btn-${props.color}  my-3 mx-2`}>Format</button>
<button type="button" onClick={()=>speak(text)} className={`btn btn-${props.color}  my-3 mx-2`}>Speak</button>

{/* <button type="button" onClick={LowerCase} className="btn btn-primary my-3">Lower Case</button> */}
<button>{langth.length}</button><label>Alphabet</label><br/>
<button>{words.length}</button><label>Words</label><br/>
<h2>Preview</h2>
<div className='container'>{text}</div>

</div>
</>
  )
}
