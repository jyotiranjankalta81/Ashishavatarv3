import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import AvatarForm from "../components/AvatarForm/AvatarForm";
import ReactDOM from 'react-dom/client'

const corresponding = {
  A: "viseme_PP",
  B: "viseme_kk",
  C: "viseme_I",
  D: "viseme_AA",
  E: "viseme_O",
  F: "viseme_U",
  G: "viseme_FF",
  H: "viseme_TH",
  X: "viseme_PP",
};

function UseAvatar(props) {
    const {modelPath,
        idleAnimationPath,
        thinkAnimationPath,
        salaamAnimationPath,
        audioSrc,
        mouthCues,
        thinkAudio,
        think,
        gender="female",
    } = props;
    
    // useGLTF.preload(modelPath)

    const [fileName, setFileName] = useState("");
  
    function fnSendChat(msg) {
    audio.src = thinkAudio;
      setNewLipSync(JSON.stringify(
     think
      ));
      audio.play();
      sendMessage(msg);
    }
    function fnReset() {
      audio.pause();
      audio.currentTime = 0;
      setAnimation("Idle");
    }
    function fnRepeat() {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  
    function fnSalaam() {
      audio.src = "\\audios\\SalaamDubai.ogg";
      audio.play();
      setNewLipSync(JSON.stringify({
        "metadata": {
          "soundFile": "C:\\Users\\yashn\\AppData\\Local\\Temp\\temp.ogg",
          "duration": 1.10
        },
        "mouthCues": [
          { "start": 0.00, "end": 0.11, "value": "X" },
          { "start": 0.11, "end": 0.19, "value": "B" },
          { "start": 0.19, "end": 0.26, "value": "C" },
          { "start": 0.26, "end": 0.33, "value": "H" },
          { "start": 0.33, "end": 0.40, "value": "D" },
          { "start": 0.40, "end": 0.48, "value": "A" },
          { "start": 0.48, "end": 0.56, "value": "F" },
          { "start": 0.56, "end": 0.64, "value": "A" },
          { "start": 0.64, "end": 0.86, "value": "D" },
          { "start": 0.86, "end": 1.00, "value": "B" },
          { "start": 1.00, "end": 1.10, "value": "X" }
        ]
      }));
      setAnimation("Salaam");
  
      setTimeout(() => {
  
        setAnimation("Idle")
        // document.getElementById("script"). = "-Select-"
      }, 3000);
    }
  
    const serverUrl = "https://aidemo.infusai.com:9001";
  
    const [newLipSync, setNewLipSync] = useState(
      '{\r\n  "metadata": {\r\n    "soundFile": "C:\\\\Users\\\\yashn\\\\AppData\\\\Local\\\\Temp\\\\temp.wav",\r\n    "duration": 2.84\r\n  },\r\n  "mouthCues": [\r\n    { "start": 0.00, "end": 0.09, "value": "X" },\r\n    { "start": 0.09, "end": 0.16, "value": "C" },\r\n    { "start": 0.16, "end": 0.30, "value": "E" },\r\n    { "start": 0.30, "end": 0.37, "value": "F" },\r\n    { "start": 0.37, "end": 1.10, "value": "X" },\r\n    { "start": 1.10, "end": 1.17, "value": "E" },\r\n    { "start": 1.17, "end": 1.51, "value": "C" },\r\n    { "start": 1.51, "end": 1.72, "value": "B" },\r\n    { "start": 1.72, "end": 1.93, "value": "F" },\r\n    { "start": 1.93, "end": 2.00, "value": "B" },\r\n    { "start": 2.00, "end": 2.14, "value": "C" },\r\n    { "start": 2.14, "end": 2.21, "value": "B" },\r\n    { "start": 2.21, "end": 2.84, "value": "X" }\r\n  ]\r\n}\r\n'
    );
    
    const exceptionalMessageList = ["hi","hello"]
    const isExceptionalMessage = (message) =>
       exceptionalMessageList.some((exceptionalMessage)=> 
        exceptionalMessage.toLowerCase()===message.toLowerCase())
      
    
  
    const sendMessage = async (msg="") => {
      setAnimation("Think");
  
      console.log(serverUrl)
  
      // filter the msg according to user input
      const messageToSend = isExceptionalMessage(msg) ? msg : `${msg} Please provide the answer in maximum 3 lines`;
      
  
      //response
      const chatGptResponse = await axios.post(`${serverUrl}/chat`, { message:  messageToSend  })
     
      // Convert TTS
  
      const audioRes = await axios.post('https://aidemo.infusai.com:9001/ttsPolly',
    
  
        { 
          text: chatGptResponse.data.message,
          gender: gender 
        }, // data
  
        { responseType: 'blob' }, // config options
  
      )
  
      const audioObjectUrl = URL.createObjectURL(audioRes.data);
  
      var data = new FormData();
  
      data.append("file", audioRes.data, "temp.ogg");//"temp.ogg");
  
      let config = {
  
        method: 'post',
  
        maxBodyLength: Infinity,
  
        url: 'https://infusai.com/audioToJson/api/audio',
  
        headers: {
  
          'Content-Type': 'multipart/form-data'
  
        },
  
        data: data
  
      };
  
  
      axios.request(config)
  
        .then((response) => {
  
          setAnimation('Idle')
  
          setNewLipSync(JSON.stringify(response.data));
          audio.src = audioObjectUrl;
          audio.play();
  
        })
  
        .catch((error) => {
  
          console.log(error);
  
        });
    }
  
    useFrame(({ clock }) => {
      const currentAudioTime = audio.currentTime;
      const jsonLipSync = JSON.parse(newLipSync);
      if (audio.paused || audio.ended) {
        console.log("Idle");
        // setAnimation("Idle");
      }
      console.log(currentAudioTime);
      Object.values(corresponding).forEach((value) => {
        nodes.Head_Mesh.morphTargetInfluences[
          nodes.Head_Mesh.morphTargetDictionary[value]
        ] = 0;
        nodes.Teeth_Mesh.morphTargetInfluences[
          nodes.Teeth_Mesh.morphTargetDictionary[value]
        ] = 0;
      });
      //Eyes Blink
      if (parseFloat(Math.sin(clock.elapsedTime % 4).toFixed(2)) == 1.00) {
        nodes.Head_Mesh.morphTargetInfluences[
          nodes.Head_Mesh.morphTargetDictionary["eyeBlinkLeft"]
        ] = 1;
        nodes.Head_Mesh.morphTargetInfluences[
          nodes.Head_Mesh.morphTargetDictionary["eyeBlinkRight"]
        ] = 1;
      }
  
      if (parseFloat(Math.sin(clock.elapsedTime % 4).toFixed(2)) < 0.99) {
        nodes.Head_Mesh.morphTargetInfluences[
          nodes.Head_Mesh.morphTargetDictionary["eyeBlinkLeft"]
        ] = 0;
        nodes.Head_Mesh.morphTargetInfluences[
          nodes.Head_Mesh.morphTargetDictionary["eyeBlinkRight"]
        ] = 0;
      }
  
  
  
  
      //Animation Getting Bored
  
      // if ((audio.paused || audio.ended) && Math.floor(clock.elapsedTime % 30) == 0) {
      //   console.log((audio.paused || audio.ended) && clock.elapsedTime % 10 == 0)
      //   setAnimation("Dwarf");
      // }
  
      // if ((audio.paused || audio.ended) && Math.floor(clock.elapsedTime % 30) > 4) {
      //   console.log((audio.paused || audio.ended) && clock.elapsedTime % 10 == 0)
      //   setAnimation("Idle");
      // }
  
      // if ((audio.paused || audio.ended) && Math.floor(clock.elapsedTime % 60) == 0) {
      //   console.log((audio.paused || audio.ended) && clock.elapsedTime % 60 == 0)
      //   setAnimation("Dwarf");
      // }
  
      // if ((audio.paused || audio.ended) && Math.floor(clock.elapsedTime % 60) > 4) {
      //   console.log((audio.paused || audio.ended) && clock.elapsedTime % 60 == 0)
      //   setAnimation("Idle");
      // }
  
  
      //end
      // console.log(lipsync.mouthCues.length);
      // if (script !== "Dance") {
  
      // }
  
      //comment
      for (let i = 0; i < jsonLipSync.mouthCues.length; i++) {
        const mouthCue = jsonLipSync.mouthCues[i];
        if (
          currentAudioTime >= mouthCue.start &&
          currentAudioTime <= mouthCue.end
        ) {
          console.log("lipsync working!!");
          console.log(currentAudioTime);
          nodes.Head_Mesh.morphTargetInfluences[
            nodes.Head_Mesh.morphTargetDictionary[corresponding[mouthCue.value]]
          ] = 1;
          nodes.Teeth_Mesh.morphTargetInfluences[
            nodes.Teeth_Mesh.morphTargetDictionary[
            corresponding[mouthCue.value]
            ]
          ] = 1;
          break;
        }
      }
    });
  
    const audio = useMemo(() => new Audio(), [fileName]);
    const model = useGLTF(modelPath)
   
    const {nodes,materials} = model;
  
    const { animations: idleAnimation } = useGLTF(idleAnimationPath);;
    const { animations: thinkAnimation } = useGLTF(thinkAnimationPath);
    const { animations: salaamAnimation } = useGLTF(salaamAnimationPath);
  
    idleAnimation[0].name = "Idle";
    thinkAnimation[0].name = "Think";
    salaamAnimation[0].name = "Salaam";
    const [animation, setAnimation] = useState("Idle");
  
    const group = useRef();
    const { actions } = useAnimations(
      [idleAnimation[0], thinkAnimation[0], salaamAnimation[0]],  
      group,
    );
    
  
    useEffect(() => {
      ReactDOM.createRoot(document.getElementById('avatar-form')).render(
         <>
          <div className="avatar-form-wrapper"><AvatarForm fnSendChat={fnSendChat}  onScriptSelect={onScriptSelect} fnRepeat={fnRepeat} fnReset={fnReset}/></div>
         </>
          
      )
    
    },[])
    
  
    useEffect(() => {
      actions[animation].reset().fadeIn(0.5).play();
      return () => actions[animation].fadeOut(0.5);
    }, [animation]);
  
    function onScriptSelect(selectedValue){
      if (selectedValue === "Speech") {
        audio.src = audioSrc;
        setNewLipSync(JSON.stringify(
        mouthCues
        ));
        audio.play();
        setAnimation("Idle");
      }
      // } else if (script === "Dance") {
      //   audio.src = "public\\audios\\Background_dancemusic.mp3";
      //   audio.play();
      //   setAnimation("Dance");
      // }
    }

  return (
    {nodes,materials,group}
  )
}

export default UseAvatar