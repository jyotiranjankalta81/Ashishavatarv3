import React, { useState } from 'react';
import "./AvatarForm.css";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiMenu5Line } from "react-icons/ri";

function AvatarForm(props) {
    console.log({props});
    const {fnSendChat,onScriptSelect,  fnRepeat, fnReset} = props;
    const [seletedScriptValue, setSeletedScriptValue] = useState("-Select-")
    const [chatMessage, setChatMessage] = useState("")
    const [toggle,setToggle] = useState(true)
  return (

    <motion.div drag className='avatar-form-container' >
         <div className='form-nav'>
               {
               toggle ?  
                 <BiSolidDownArrow onClick={()=>setToggle(false)} style={{width:"20px", height:"20px", color:"white"}} />
               :
                 <BiSolidRightArrow onClick={()=>setToggle(true)} style={{width:"20px", height:"20px", color:"white"}} />
               }
                
                <RiMenu5Line style={{width:"20px", height:"20px", color:"white"}} />
                <IoSearch style={{width:"20px", height:"20px", color:"white"}} />
        </div>
       {toggle ? <div>
       <div className='label-input-container'>
       <label htmlFor="script-select">Script</label>
       <select className='select' name="" id="script-select" 
        value={seletedScriptValue}
        onChange={e => {
            onScriptSelect(e.target.value)
            setSeletedScriptValue(e.target.value)
        }
        }
        >
        <option value="-Select-">-Select-</option>
        <option value="Webinar Speech" >Webinar Speech</option>
       </select>
       </div>
       <div className='label-input-container'>
       <label htmlFor="chat-input">Chat</label>
       <input className='input' type="text" id='chat-input' 
        value={chatMessage}
        onChange={e => setChatMessage(e.target.value)}
        />
       </div>
       <div className='btn-container'>
       <button className='btn' onClick={()=>fnSendChat(chatMessage)}>Send</button>
       <button className='btn' onClick={fnRepeat}>Repeat</button>
       <button className='btn' onClick={()=>{
        fnReset() 
        setSeletedScriptValue("")
        setChatMessage("")
        }}>Reset</button>
       </div>
    </div> : "" }
    </motion.div>
  )
}

export default AvatarForm