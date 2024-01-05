import skyScene from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Sky = ({isRotating}) => {

    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta)=>{
      if(isRotating){
        skyRef.current.rotation.y += 0.20 * delta;
      }
    })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky