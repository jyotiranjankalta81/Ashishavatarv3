import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {useParams} from 'react-router-dom'
import * as React from 'react'
import { AshishAvatar } from "./AshishAvatar";
import { NeelamAvatar } from "./NeelamAvatar";
import { ArchanaAvatar } from "./ArchanaAvatar";

export const Experience = (props) => {
  const params = useParams();
  const searchParams = new URLSearchParams(window.location.search);

  const currentUrl = window.location.href;

    // Use a regular expression to extract the last segment
    const lastSegment = currentUrl.match(/\/([^\/]+)\/?$/)[1];

    console.log('Last Segment:', lastSegment);


  console.log('nelammmmmmmmmmmmmm==============>',searchParams)

  const {Avatar} = props;
  const texture = useTexture("textures/youtubeBackground.png");
  const viewport = useThree((state) => state.viewport);

  const [userChanger,setUserChanger]=React.useState('');

  React.useEffect(()=>{
    if(lastSegment !==''){
      setUserChanger(lastSegment)
    }

  },[lastSegment])






  return (
    <>
      <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
      {/* <Avatar position={[-1, -3, 3.5]} scale={2} rotation={[0.04, 0.75, 0]} /> */}
      {
        (userChanger == 'ashish' || userChanger =='') && <AshishAvatar position={[-0.75, -2.5, 4]} scale={2} rotation={[0, 0.1, 0]}/>
      }{
        userChanger == 'neelam' && <NeelamAvatar position={[-0.75, -2.5, 4]} scale={2} rotation={[0, 0.1, 0]}/>
      }
      {
        userChanger == 'archana' && <ArchanaAvatar position={[-0.75, -2.5, 4]} scale={2} rotation={[0, 0.1, 0]}/>
      } 
      {/* <Avatar position={[-0.75, -2.5, 4]} scale={2} rotation={[0, 0.1, 0]} /> */}
      {/* <Environment preset="sunset" /> */}
      <Environment files="/images/studio_small_09_4k.hdr"/>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
