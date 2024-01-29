import React from 'react'
import './popup.css';
import {QRCodeSVG} from 'qrcode.react'

import { CloseOutlined } from '@ant-design/icons';
function popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='inner-popup'>
            <h1>Your QR-Code</h1>
            <QRCodeSVG value={props.value} size="256" className='qrcode' />
            <button className='close-btn' onClick={()=>props.setTrigger(false)}>
                <CloseOutlined/>
            </button>
            {props.chiildren}
        </div>
    </div>
  ) : "";
}

export default popup
