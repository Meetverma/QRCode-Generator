import { useState } from 'react'
import {Routes,Route,useNavigate} from 'react'
import {Input} from 'antd'
import {Button} from 'antd'
import './App.css'
import {QRCodeSVG} from 'qrcode.react'

function App() {
  const [count, setCount] = useState(0)
  const [text,setText]  = useState('');
  const [showQR,setShowQR] = useState(false);
  // const navs = useNavigate();
  const listen = ()=>{
    const inp = document.getElementById('input-1');
    setText(inp.value);
    console.log(text);
  }

  const triggerShowQR = ()=>{
    setShowQR(true);
  }

  return (
      <>
        <h1>Qr Code Generator</h1>
    <div className='container'>
        <label htmlFor="input-1">Enter Text To get QR-code</label>
        <Input type="text" name="input-1" id="input-1" placeholder='eg. www.google.com' onChange={listen}/>
        <Button type="primary" onClick={triggerShowQR}>Make Qr code </Button>

        {showQR &&  <QRCodeSVG value={text} size="256" />}
    </div>
    </>
  )
    
}

export default App
