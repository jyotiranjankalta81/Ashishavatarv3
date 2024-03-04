import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { AshishAvatar } from './components/AshishAvatar';
import { NeelamAvatar } from './components/NeelamAvatar';
import { ArchanaAvatar } from './components/ArchanaAvatar';

function App() {
  return (
     
      <Routes>
      
        <Route exact path="/ashish" element={<CanvasWrapper Avatar={AshishAvatar} />} />
        <Route exact path="/neelam" element={<CanvasWrapper Avatar={NeelamAvatar} />} />
        <Route path="/archana" element={<CanvasWrapper Avatar={ArchanaAvatar} />} />
        {/* Add a default route */}
        <Route path="*" element={<CanvasWrapper Avatar={AshishAvatar} />} />
      </Routes>
   
  );
}

function CanvasWrapper({ Avatar }) {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={['#ececec']} />
      <Experience Avatar={Avatar} />
    </Canvas>
  );
}

export default App;
