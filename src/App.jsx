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
  const [currentStage, setCurrentStage] = useState(1);
  const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
      return (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Hi, I'm
          <span className='font-semibold mx-2 text-white'>Adrian</span>
          👋
          <br />
          A Software Engineer from Croatia 🇭🇷
        </h1>
      );
  
    if (currentStage === 2) {
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Worked with many companies <br /> and picked up many skills along the way
          </p>
  
          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Learn more
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );
    }
  
    if (currentStage === 3) {
      return (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Led multiple projects to success over the years. <br /> Curious about the impact?
          </p>
  
          <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );
    }
  
    if (currentStage === 4) {
      return (
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }
  
    return null;
  };
  return (
   <div >
  <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
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
       position: [-4, -10, 30],
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

export default App
