import { useState } from 'react'
import {Input} from 'antd'
import {Button} from 'antd'
import './App.css'
import Popup from './components/popup'


function App() {
  const [text,setText]  = useState('');
  const [showQR,setShowQR] = useState(false);
  const [btnPopup,setBtnPopup] = useState(false);
  const listen = ()=>{
    const inp = document.getElementById('input-1');
    setText(inp.value);
    console.log(text);
  }



  return (
      <>
    <main className='main_section'>
      <h1>QR-Code Generator</h1>
      <div className='container'>
        <label htmlFor="input-1">Enter Text To get QR-code</label>
        <Input type="text" name="input-1" id="input-1" placeholder='eg. www.google.com' onChange={listen}/>
        <Button type="primary" className='btn' onClick={setBtnPopup} disabled={text === ""}>Make Qr code </Button> {/*triggerShowQR*/}
       
        <Popup trigger={btnPopup} value={text} setTrigger={setBtnPopup}>
        </Popup>
    </div>
    </main>
    </>
  )
    
}

export default App
