import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls} from '@react-three/drei';
import Scene from '../public/Scene';
import Sky from '../public/Sky';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div >
    <h1>PARAMPARA <br></br>
      2024</h1>
      
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
       position: [-4, -3, 30],
     }}>
      <ambientLight />
      <OrbitControls 
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
      <Suspense fallback={null}>
       <Scene />
       
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    </div>
  )
}

export default App
