import React, { useState , useEffect } from 'react';
import "./AvatarForm.css";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdMic } from "react-icons/io";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useDebounce from '../../hooks/UseDebounce';


function AvatarForm(props) {
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" })
}; 
const stopListening = () =>{
  SpeechRecognition.stopListening()
};
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return null
    }
    console.log({props});
    const {fnSendChat,onScriptSelect,  fnRepeat, fnReset} = props;
    const [seletedScriptValue, setSeletedScriptValue] = useState("-Select-");
    const [chatMessage, setChatMessage] = useState("");
    const [toggle,setToggle] = useState(true);

    const debounce = useDebounce(chatMessage,3000);
    

    useEffect(() => {
      SpeechRecognition.stopListening()
    }, [debounce])
    
    useEffect(() => {
      setChatMessage(transcript)
      
    }, [transcript])
    
    
  return (

    <motion.div drag onClick={SpeechRecognition.stopListening} className='avatar-form-container' >
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

        <IoMdMic
            onClick={listening ? stopListening : startListening} // Only allow mic activation if it's not active
            style={{ color: listening ? 'red' : 'inherit', cursor: listening ? 'not-allowed' : 'pointer' }} // Change color and cursor based on mic state
        />
       
       </div>
       <div className='btn-container'>
       <button className='btn' onClick={()=>fnSendChat(chatMessage)}>Send</button>
       <button className='btn' onClick={fnRepeat}>Repeat</button>
       <button className='btn' onClick={(e)=>{
        e.stopPropagation()
        fnReset() 
        stopListening()
        resetTranscript()
        setSeletedScriptValue("")
        setChatMessage("")
        }}>Reset</button>
       </div>
    </div> : "" }
    </motion.div>
  )
}

export default AvatarForm