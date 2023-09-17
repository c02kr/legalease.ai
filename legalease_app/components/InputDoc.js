import { useState } from "react"

const InputDoc = () => {
    const [input,setInput] = useState('')
    const summariseDoc = () =>{
        if(input===''){
            alert('Enter something in the input field!')
        }
        console.log(input)
    }
  return (
    <div className="input-div">
        <h3>Enter legal document below...</h3>
        <textarea onChange={(e)=>setInput(e.target.value)} className="textarea" cols="30" rows="18"></textarea>
        <button className="login-btn" onClick={summariseDoc}>Summarise doc</button>
    </div>
  )
}

export default InputDoc