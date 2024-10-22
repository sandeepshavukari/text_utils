import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')
    
    const handleonChange=(event)=>
    {
        // console.log("changed")
        setText(event.target.value);
    }
    const handleUpClick=()=>
    {
        // console.log("handleUpClicke clicked")
        console.log(text)
        let newText= text.toUpperCase()
        setText(newText)
        // console.log("Text Converted to Uppercase")
        console.log(newText)
        // alert("Converted to UpperCase!");
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>
        {   
            // console.log("handleUpClicke clicked")
            console.log(text)
            let newText= text.toLowerCase()
            setText(newText)
            // console.log("Text Converted to Uppercase")
            console.log(newText)
            // alert("Converted to LowerCase!");
            props.showAlert("Converted to Lowercase","success");
        }
        const handleClearText=()=>
            {   
                // console.log("handleUpClicke clicked")
                console.log(text)
                let newText=''
                setText(newText)
                // console.log("Text Converted to Uppercase")
                console.log(newText)
                // alert("Text Cleared!");
                props.showAlert("Text Cleared","success");
            }
        // const handleCopyText=()=>
        //     {
        //         var text= document.getElementById("mybox");
        //         text.select();
        //         navigator.clipboard.writeText(text);
        //     }    
        const handleCopyText = () => {
            var text = document.getElementById("mybox").value; // Get the value of the textarea
            navigator.clipboard.writeText(text); // Copy the value to the clipboard
            // alert("Copied to clipboard!"); // Optional: show a confirmation message
            props.showAlert("Copied to Clipboard","success");
        }
        // const handleExtraSpaces=()=>
        // {
        //     let newText = text.split(/[ ]+/);
        //     setText(newText.join(" "));
        // };
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Remeoved Extra Spaces","success");
         }
    
        
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* #343A4B  grey */}
            <label htmlFor="mybox" className="form-label"></label>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#041b3b':'#b7c0c9',color:props.mode==='dark'?'white':'black'}} onChange={handleonChange} value={text} id="mybox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remeove Extra Spaces</button>
    
    <div className="container my-3">
        <h2>Test Summary</h2>
        <p>Provided text contains {text.length} characters and {text.split(" ").length} words</p>
        <p>Can be read in {0.08 * text.split(" ").length} minutes</p>
        <h2>Preview </h2> 
        <p>{text.length>0?text:'Enter Something to Preview Here'}</p>
    </div>
    </div>
    </>
  )
}
