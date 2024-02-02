/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/Models/model.glb -o src/components/Avatar.jsx -r public 
*/

import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useControls, button } from "leva";
import axios from "axios";
import * as THREE from "three";
import fs from "fs";
import path from "path";
import AvatarForm from "./AvatarForm/AvatarForm";
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

export function Avatar(props) {
  const [fileName, setFileName] = useState("");

  // const { script, chat } = useControls({
    // script: {
    //   value: "-Select-",
    //   options: ["-Select-", "Webinar Speech"],
    // },
    // chat: "",
    // Send: button(fnSendChat),
    // Repeat: button(fnRepeat),
    // Reset: button(fnReset),
    // Greet: button(fnSalaam)
  // });

  function fnSendChat(msg) {
    // var msg = document.getElementById("chat").value;
    audio.src = "\\audios\\AboutQuery.ogg";
    setNewLipSync(JSON.stringify({
      "metadata": {
        "soundFile": "C:\\Users\\yashn\\AppData\\Local\\Temp\\temp.ogg",
        "duration": 2.50
      },
      "mouthCues": [
        { "start": 0.00, "end": 0.11, "value": "X" },
        { "start": 0.11, "end": 0.17, "value": "B" },
        { "start": 0.17, "end": 0.23, "value": "C" },
        { "start": 0.23, "end": 0.37, "value": "B" },
        { "start": 0.37, "end": 0.44, "value": "C" },
        { "start": 0.44, "end": 0.51, "value": "B" },
        { "start": 0.51, "end": 0.79, "value": "C" },
        { "start": 0.79, "end": 0.93, "value": "B" },
        { "start": 0.93, "end": 1.07, "value": "X" },
        { "start": 1.07, "end": 1.17, "value": "B" },
        { "start": 1.17, "end": 1.25, "value": "A" },
        { "start": 1.25, "end": 1.54, "value": "B" },
        { "start": 1.54, "end": 1.62, "value": "A" },
        { "start": 1.62, "end": 1.70, "value": "C" },
        { "start": 1.70, "end": 1.84, "value": "B" },
        { "start": 1.84, "end": 1.91, "value": "C" },
        { "start": 1.91, "end": 1.98, "value": "B" },
        { "start": 1.98, "end": 2.05, "value": "F" },
        { "start": 2.05, "end": 2.40, "value": "B" },
        { "start": 2.40, "end": 2.50, "value": "X" }
      ]
    }));
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

  const sendMessage = async (msg) => {

    debugger;

    setAnimation("Think");

    console.log(serverUrl)



    // get Response from chatGPT

    const chatGptResponse = await axios.post(`${serverUrl}/chat`, { message: msg })



    // Convert TTS

    const audioRes = await axios.post('https://aidemo.infusai.com:9001/ttsPolly',

      { text: chatGptResponse.data.message }, // data

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

  const { nodes, materials } = useGLTF('/models/NewAustraliaModel.glb')

  // const { animations: idleAnimation } = useGLTF("/animations/AshishAvaturnModel.glb");
  const { animations: idleAnimation } = useGLTF("/animations/AshishPalkeshIdlePose.glb");
  // const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
  const { animations: thinkAnimation } = useGLTF("/animations/Ashish_thinking.glb");
  const { animations: salaamAnimation } = useGLTF("/animations/Salaam6_defaultNew.glb");

  idleAnimation[0].name = "Idle";
  thinkAnimation[0].name = "Think";
  salaamAnimation[0].name = "Salaam";
  const [animation, setAnimation] = useState("Idle");

  const group = useRef();
  const { actions } = useAnimations(
    [idleAnimation[0], thinkAnimation[0], salaamAnimation[0]], //, danceAnimation[0], thinkingAnimation[0], dwarfAnimation[0]
    group,
  );
  

  useEffect(() => {
    ReactDOM.createRoot(document.getElementById('avatar-form')).render(
        <div className="avatar-form-wrapper"><AvatarForm fnSendChat={fnSendChat}  onScriptSelect={onScriptSelect} fnRepeat={fnRepeat} fnReset={fnReset}/></div>
    )
  
  },[])
  

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);

  function onScriptSelect(selectedValue){
    if (selectedValue === "Webinar Speech") {
      audio.src = "\\audios\\temp_audio_Webinar.ogg";
      setNewLipSync(JSON.stringify({
        "metadata": {
          "soundFile": "C:\\Users\\yashn\\AppData\\Local\\Temp\\temp.ogg",
          "duration": 30.13
        },
        "mouthCues": [
          { "start": 0.00, "end": 0.11, "value": "X" },
          { "start": 0.11, "end": 0.31, "value": "C" },
          { "start": 0.31, "end": 0.39, "value": "A" },
          { "start": 0.39, "end": 0.66, "value": "F" },
          { "start": 0.66, "end": 0.76, "value": "A" },
          { "start": 0.76, "end": 0.83, "value": "B" },
          { "start": 0.83, "end": 0.96, "value": "D" },
          { "start": 0.96, "end": 1.03, "value": "B" },
          { "start": 1.03, "end": 1.10, "value": "C" },
          { "start": 1.10, "end": 1.45, "value": "B" },
          { "start": 1.45, "end": 1.52, "value": "G" },
          { "start": 1.52, "end": 1.59, "value": "C" },
          { "start": 1.59, "end": 1.66, "value": "B" },
          { "start": 1.66, "end": 1.80, "value": "E" },
          { "start": 1.80, "end": 1.87, "value": "B" },
          { "start": 1.87, "end": 2.29, "value": "C" },
          { "start": 2.29, "end": 2.36, "value": "B" },
          { "start": 2.36, "end": 2.54, "value": "X" },
          { "start": 2.54, "end": 2.62, "value": "B" },
          { "start": 2.62, "end": 2.69, "value": "C" },
          { "start": 2.69, "end": 2.76, "value": "E" },
          { "start": 2.76, "end": 2.90, "value": "B" },
          { "start": 2.90, "end": 3.11, "value": "C" },
          { "start": 3.11, "end": 3.18, "value": "B" },
          { "start": 3.18, "end": 3.25, "value": "C" },
          { "start": 3.25, "end": 3.32, "value": "B" },
          { "start": 3.32, "end": 3.46, "value": "F" },
          { "start": 3.46, "end": 3.54, "value": "A" },
          { "start": 3.54, "end": 3.81, "value": "B" },
          { "start": 3.81, "end": 3.88, "value": "C" },
          { "start": 3.88, "end": 3.96, "value": "A" },
          { "start": 3.96, "end": 4.10, "value": "C" },
          { "start": 4.10, "end": 4.24, "value": "B" },
          { "start": 4.24, "end": 4.31, "value": "G" },
          { "start": 4.31, "end": 4.52, "value": "F" },
          { "start": 4.52, "end": 4.59, "value": "B" },
          { "start": 4.59, "end": 4.73, "value": "C" },
          { "start": 4.73, "end": 4.80, "value": "B" },
          { "start": 4.80, "end": 4.94, "value": "D" },
          { "start": 4.94, "end": 5.08, "value": "B" },
          { "start": 5.08, "end": 5.66, "value": "X" },
          { "start": 5.66, "end": 5.73, "value": "H" },
          { "start": 5.73, "end": 5.80, "value": "C" },
          { "start": 5.80, "end": 6.22, "value": "B" },
          { "start": 6.22, "end": 6.36, "value": "C" },
          { "start": 6.36, "end": 6.43, "value": "B" },
          { "start": 6.43, "end": 6.51, "value": "A" },
          { "start": 6.51, "end": 6.68, "value": "B" },
          { "start": 6.68, "end": 6.82, "value": "X" },
          { "start": 6.82, "end": 6.94, "value": "B" },
          { "start": 6.94, "end": 7.15, "value": "C" },
          { "start": 7.15, "end": 7.29, "value": "B" },
          { "start": 7.29, "end": 7.43, "value": "C" },
          { "start": 7.43, "end": 7.71, "value": "E" },
          { "start": 7.71, "end": 7.84, "value": "C" },
          { "start": 7.84, "end": 7.88, "value": "F" },
          { "start": 7.88, "end": 7.92, "value": "C" },
          { "start": 7.92, "end": 7.99, "value": "B" },
          { "start": 7.99, "end": 8.07, "value": "A" },
          { "start": 8.07, "end": 8.48, "value": "D" },
          { "start": 8.48, "end": 8.55, "value": "C" },
          { "start": 8.55, "end": 8.62, "value": "B" },
          { "start": 8.62, "end": 8.76, "value": "E" },
          { "start": 8.76, "end": 8.90, "value": "B" },
          { "start": 8.90, "end": 8.97, "value": "G" },
          { "start": 8.97, "end": 9.11, "value": "B" },
          { "start": 9.11, "end": 9.18, "value": "G" },
          { "start": 9.18, "end": 9.25, "value": "C" },
          { "start": 9.25, "end": 9.39, "value": "B" },
          { "start": 9.39, "end": 9.60, "value": "C" },
          { "start": 9.60, "end": 10.19, "value": "X" },
          { "start": 10.19, "end": 10.23, "value": "F" },
          { "start": 10.23, "end": 10.41, "value": "B" },
          { "start": 10.41, "end": 10.49, "value": "A" },
          { "start": 10.49, "end": 10.74, "value": "E" },
          { "start": 10.74, "end": 10.81, "value": "B" },
          { "start": 10.81, "end": 10.95, "value": "C" },
          { "start": 10.95, "end": 11.02, "value": "E" },
          { "start": 11.02, "end": 11.16, "value": "B" },
          { "start": 11.16, "end": 11.30, "value": "G" },
          { "start": 11.30, "end": 11.44, "value": "C" },
          { "start": 11.44, "end": 11.51, "value": "B" },
          { "start": 11.51, "end": 11.58, "value": "C" },
          { "start": 11.58, "end": 11.79, "value": "B" },
          { "start": 11.79, "end": 11.86, "value": "F" },
          { "start": 11.86, "end": 12.54, "value": "B" },
          { "start": 12.54, "end": 12.64, "value": "C" },
          { "start": 12.64, "end": 12.71, "value": "E" },
          { "start": 12.71, "end": 12.92, "value": "B" },
          { "start": 12.92, "end": 13.06, "value": "C" },
          { "start": 13.06, "end": 13.13, "value": "B" },
          { "start": 13.13, "end": 13.20, "value": "G" },
          { "start": 13.20, "end": 13.27, "value": "E" },
          { "start": 13.27, "end": 13.35, "value": "A" },
          { "start": 13.35, "end": 13.57, "value": "C" },
          { "start": 13.57, "end": 13.71, "value": "B" },
          { "start": 13.71, "end": 13.79, "value": "A" },
          { "start": 13.79, "end": 13.87, "value": "E" },
          { "start": 13.87, "end": 13.94, "value": "B" },
          { "start": 13.94, "end": 14.02, "value": "A" },
          { "start": 14.02, "end": 14.78, "value": "B" },
          { "start": 14.78, "end": 14.86, "value": "A" },
          { "start": 14.86, "end": 14.91, "value": "E" },
          { "start": 14.91, "end": 14.95, "value": "F" },
          { "start": 14.95, "end": 15.09, "value": "B" },
          { "start": 15.09, "end": 15.17, "value": "A" },
          { "start": 15.17, "end": 15.38, "value": "E" },
          { "start": 15.38, "end": 15.45, "value": "B" },
          { "start": 15.45, "end": 15.55, "value": "A" },
          { "start": 15.55, "end": 15.66, "value": "B" },
          { "start": 15.66, "end": 15.73, "value": "C" },
          { "start": 15.73, "end": 16.36, "value": "B" },
          { "start": 16.36, "end": 16.43, "value": "F" },
          { "start": 16.43, "end": 16.64, "value": "B" },
          { "start": 16.64, "end": 16.78, "value": "C" },
          { "start": 16.78, "end": 16.92, "value": "B" },
          { "start": 16.92, "end": 16.99, "value": "C" },
          { "start": 16.99, "end": 17.06, "value": "G" },
          { "start": 17.06, "end": 17.20, "value": "F" },
          { "start": 17.20, "end": 17.27, "value": "B" },
          { "start": 17.27, "end": 17.48, "value": "E" },
          { "start": 17.48, "end": 17.55, "value": "F" },
          { "start": 17.55, "end": 17.83, "value": "B" },
          { "start": 17.83, "end": 18.38, "value": "X" },
          { "start": 18.38, "end": 18.45, "value": "F" },
          { "start": 18.45, "end": 18.79, "value": "B" },
          { "start": 18.79, "end": 19.00, "value": "F" },
          { "start": 19.00, "end": 19.14, "value": "B" },
          { "start": 19.14, "end": 19.21, "value": "C" },
          { "start": 19.21, "end": 19.49, "value": "B" },
          { "start": 19.49, "end": 19.57, "value": "A" },
          { "start": 19.57, "end": 19.69, "value": "D" },
          { "start": 19.69, "end": 19.76, "value": "C" },
          { "start": 19.76, "end": 19.84, "value": "A" },
          { "start": 19.84, "end": 20.03, "value": "B" },
          { "start": 20.03, "end": 20.10, "value": "C" },
          { "start": 20.10, "end": 20.24, "value": "B" },
          { "start": 20.24, "end": 20.38, "value": "C" },
          { "start": 20.38, "end": 20.45, "value": "B" },
          { "start": 20.45, "end": 20.66, "value": "E" },
          { "start": 20.66, "end": 20.73, "value": "B" },
          { "start": 20.73, "end": 20.80, "value": "G" },
          { "start": 20.80, "end": 20.87, "value": "C" },
          { "start": 20.87, "end": 20.95, "value": "A" },
          { "start": 20.95, "end": 21.00, "value": "F" },
          { "start": 21.00, "end": 21.12, "value": "B" },
          { "start": 21.12, "end": 21.19, "value": "G" },
          { "start": 21.19, "end": 21.26, "value": "B" },
          { "start": 21.26, "end": 21.47, "value": "C" },
          { "start": 21.47, "end": 21.61, "value": "B" },
          { "start": 21.61, "end": 21.69, "value": "A" },
          { "start": 21.69, "end": 21.81, "value": "E" },
          { "start": 21.81, "end": 22.08, "value": "B" },
          { "start": 22.08, "end": 22.18, "value": "C" },
          { "start": 22.18, "end": 22.32, "value": "H" },
          { "start": 22.32, "end": 22.53, "value": "B" },
          { "start": 22.53, "end": 22.60, "value": "C" },
          { "start": 22.60, "end": 22.95, "value": "B" },
          { "start": 22.95, "end": 23.03, "value": "A" },
          { "start": 23.03, "end": 23.18, "value": "C" },
          { "start": 23.18, "end": 23.32, "value": "B" },
          { "start": 23.32, "end": 23.39, "value": "C" },
          { "start": 23.39, "end": 23.53, "value": "B" },
          { "start": 23.53, "end": 23.60, "value": "C" },
          { "start": 23.60, "end": 23.67, "value": "E" },
          { "start": 23.67, "end": 23.88, "value": "B" },
          { "start": 23.88, "end": 24.02, "value": "C" },
          { "start": 24.02, "end": 24.09, "value": "B" },
          { "start": 24.09, "end": 24.23, "value": "D" },
          { "start": 24.23, "end": 24.37, "value": "B" },
          { "start": 24.37, "end": 24.93, "value": "X" },
          { "start": 24.93, "end": 25.01, "value": "H" },
          { "start": 25.01, "end": 25.22, "value": "B" },
          { "start": 25.22, "end": 25.36, "value": "C" },
          { "start": 25.36, "end": 25.43, "value": "B" },
          { "start": 25.43, "end": 25.50, "value": "G" },
          { "start": 25.50, "end": 25.64, "value": "F" },
          { "start": 25.64, "end": 25.71, "value": "B" },
          { "start": 25.71, "end": 25.78, "value": "C" },
          { "start": 25.78, "end": 25.85, "value": "G" },
          { "start": 25.85, "end": 25.99, "value": "F" },
          { "start": 25.99, "end": 26.06, "value": "B" },
          { "start": 26.06, "end": 26.13, "value": "E" },
          { "start": 26.13, "end": 26.20, "value": "C" },
          { "start": 26.20, "end": 26.28, "value": "A" },
          { "start": 26.28, "end": 26.51, "value": "B" },
          { "start": 26.51, "end": 26.65, "value": "C" },
          { "start": 26.65, "end": 26.72, "value": "B" },
          { "start": 26.72, "end": 26.79, "value": "F" },
          { "start": 26.79, "end": 26.86, "value": "B" },
          { "start": 26.86, "end": 27.00, "value": "C" },
          { "start": 27.00, "end": 27.07, "value": "B" },
          { "start": 27.07, "end": 27.21, "value": "D" },
          { "start": 27.21, "end": 27.70, "value": "B" },
          { "start": 27.70, "end": 27.77, "value": "C" },
          { "start": 27.77, "end": 27.85, "value": "A" },
          { "start": 27.85, "end": 28.02, "value": "C" },
          { "start": 28.02, "end": 28.30, "value": "B" },
          { "start": 28.30, "end": 28.85, "value": "X" },
          { "start": 28.85, "end": 28.90, "value": "F" },
          { "start": 28.90, "end": 29.08, "value": "C" },
          { "start": 29.08, "end": 29.16, "value": "A" },
          { "start": 29.16, "end": 29.30, "value": "F" },
          { "start": 29.30, "end": 29.37, "value": "B" },
          { "start": 29.37, "end": 29.44, "value": "C" },
          { "start": 29.44, "end": 29.51, "value": "F" },
          { "start": 29.51, "end": 29.59, "value": "A" },
          { "start": 29.59, "end": 29.69, "value": "B" },
          { "start": 29.69, "end": 29.90, "value": "D" },
          { "start": 29.90, "end": 30.04, "value": "B" },
          { "start": 30.04, "end": 30.13, "value": "X" }
        ]
      }));
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
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Body_Mesh" geometry={nodes.Body_Mesh.geometry} material={materials.Body} skeleton={nodes.Body_Mesh.skeleton} />
          <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
          <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
          <skinnedMesh name="Head_Mesh" geometry={nodes.Head_Mesh.geometry} material={materials.Head} skeleton={nodes.Head_Mesh.skeleton} morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences} />
          <skinnedMesh name="Eye_Mesh" geometry={nodes.Eye_Mesh.geometry} material={materials.Eyes} skeleton={nodes.Eye_Mesh.skeleton} morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences} />
          <skinnedMesh name="Eyelash_Mesh" geometry={nodes.Eyelash_Mesh.geometry} material={materials.Eyelash} skeleton={nodes.Eyelash_Mesh.skeleton} morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences} />
          <skinnedMesh name="Teeth_Mesh" geometry={nodes.Teeth_Mesh.geometry} material={materials.Teeth} skeleton={nodes.Teeth_Mesh.skeleton} morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences} />
          <skinnedMesh name="Tongue_Mesh" geometry={nodes.Tongue_Mesh.geometry} material={materials.Teeth} skeleton={nodes.Tongue_Mesh.skeleton} morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences} />
          <skinnedMesh name="EyeAO_Mesh" geometry={nodes.EyeAO_Mesh.geometry} material={materials.EyeAO} skeleton={nodes.EyeAO_Mesh.skeleton} morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/NewAustraliaModel.glb')
