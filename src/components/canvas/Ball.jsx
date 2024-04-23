import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../Loader'



const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight position={} />
    </Float>
  )
}


const BallCanvas = ({icon}) => {
  return(
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
        />

        <Ball  imgUrl={icon}/>

      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas