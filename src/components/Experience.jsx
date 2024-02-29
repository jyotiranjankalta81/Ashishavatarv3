import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Experience = (props) => {
  const {Avatar} = props;
  const texture = useTexture("textures/youtubeBackground.png");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
      {/* <Avatar position={[-1, -3, 3.5]} scale={2} rotation={[0.04, 0.75, 0]} /> */}
      <Avatar position={[-0.75, -2.5, 4]} scale={2} rotation={[0, 0.1, 0]} />
      {/* <Environment preset="sunset" /> */}
      <Environment files="/images/studio_small_09_4k.hdr"/>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
