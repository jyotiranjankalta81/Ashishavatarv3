import React, { useState, useEffect } from 'react';
import "./AvatarForm.css";
import { motion } from "framer-motion";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import UseDebounce from '../../hooks/useDebounce';


function AvatarForm(props) {
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" })
  };
  const stopListening = () => {
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
  console.log({ props });
  const { fnSendChat, onScriptSelect, fnRepeat, fnReset } = props;
  const [seletedScriptValue, setSeletedScriptValue] = useState("-Select-");
  const [chatMessage, setChatMessage] = useState("");
  const [toggle, setToggle] = useState(true);

  const debounce = UseDebounce(chatMessage, 3000)


  useEffect(() => {
    SpeechRecognition.stopListening()
  }, [debounce])

  useEffect(() => {
    setChatMessage(transcript)

  }, [transcript])


  return (
    <motion.div drag onClick={SpeechRecognition.stopListening} className="avatar-form-container">
      <div className="navbar-container">
        {
          toggle ?
            <img onClick={() => setToggle(false)} className="icon-size" src="/images/ico-open-window.png" alt="" />
            :
            <img onClick={() => setToggle(true)} className="icon-size" src="/images/ico-close-window.png" alt="" />
        }
        <div>
          <img onClick={(e) => {
            e.stopPropagation()
            fnReset()
            stopListening()
            resetTranscript()
            setSeletedScriptValue("")
            setChatMessage("")
          }} className="icon-size icon-reset" src="/images/ico-reset-popup.png" alt="" />
          <img className="icon-size" src="/images/ico-drag-window.png" alt="" />
        </div>
      </div>
      {toggle ? <div>
        <div className="select-option-container">
          <label className="font-className" htmlFor="script-select">Demo Message</label>
          <select className='select' name="" id="script-select" value={seletedScriptValue}
            onChange={e => {
              onScriptSelect(e.target.value)
              setSeletedScriptValue(e.target.value)
            }
            }>
            <option value="-Select-">-Select-</option>
            <option value="Speech" >Speech</option>
          </select>
        </div>
        <div className="chat-container">
          <div className="chat-container-nav">
            <p className="font-className">Ask Me</p>
            {listening ? <img className="icon-size" src="/images/ico-mic-on.png" alt="" onClick={listening ? stopListening : startListening}
              style={{ cursor: listening ? 'not-allowed' : 'pointer' }} /> : <img className="icon-size" src="/images/ico-mic-off.png" alt="" onClick={listening ? stopListening : startListening}
                style={{ cursor: listening ? 'not-allowed' : 'pointer' }} />}
          </div>
          <div className="input-container">
            <textarea className="input-area" type="text" id='chat-input' placeholder="Type your message here or click on mic to speak" value={chatMessage}
              onChange={e => setChatMessage(e.target.value)}></textarea>
          </div>
        </div>
        <div className="button-container">
          <button className="send-button common-btn" onClick={() => fnSendChat(chatMessage)}>Send</button>
          <button className="repeat-button common-btn" onClick={
            fnRepeat
          }>Repeat</button>
        </div>
      </div> : ""}
    </motion.div>

  )
}

export default AvatarForm