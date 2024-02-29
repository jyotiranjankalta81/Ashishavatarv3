import 'regenerator-runtime/runtime';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { AshishAvatar } from './components/AshishAvatar';
import { useLocation } from 'react-router-dom';
import { NeelamAvatar } from './components/NeelamAvatar';
import { ArchanaAvatar } from './components/ArchanaAvatar';

function App() {
  const {pathname} = useLocation()
  
  const avatarMap = {
    "/ashish": AshishAvatar,
    "/neelam" : NeelamAvatar,
    "/archana" : ArchanaAvatar,
  }

  const avatar = avatarMap[pathname?.toLowerCase()]|| avatarMap["/ashish"]
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience Avatar={avatar} />
    </Canvas>
  );
}

export default App;
