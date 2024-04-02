import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls} from '@react-three/drei';
import Scene from '../public/Scene';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null}>
       <Scene />
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    </>
  )
}

export default App
