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
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
      <Suspense fallback={null}>
       <Scene />
       
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    </>
  )
}

export default App
