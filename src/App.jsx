import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls} from '@react-three/drei';
import Scene from '../public/Scene';
import { useEffect, useRef } from "react";
import Sky from '../public/Sky';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [currentStage, setCurrentStage] = useState(1);
  const islandRef = useRef();
   // When rotating, determine the current stage based on island's orientation
   const rotation = 1;
console.log(islandRef);
  const normalizedRotation =
  ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

// Set the current stage based on the island's orientation

  return (
   <div >
  
      
    <Canvas
    
    style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/silhouettes-concert-crowd-front-bright-stage-lights-rock-space-text-93795414.jpg")'}}
     shadows
     frameloop='demand'
     dpr={[1, 2]}
     gl={{ preserveDrawingBuffer: true }}
     camera={{
       fov: 45,
       near: 0.1,
       far: 200,
       position: [-1.7724, -0.2638, 30],
     }}>
      <ambientLight />
      <OrbitControls 
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
      <Suspense fallback={null}>
       <Scene 
         setCurrentStage={setCurrentStage}
         
         
         />
       
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    </div>
  )
}


export default App;

