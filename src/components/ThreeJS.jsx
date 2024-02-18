import { useRef } from "react";
import { useFrame } from "@react-three/fiber"


export const Cube = ({position, size, color}) => {
    const ref = useRef();
    
  
    useFrame((state, delta) => 
     {ref.current.rotation.x += delta
      ref.current.rotation.y += delta * 2.0
      ref.current.position.y += delta
      ref.current.position.z += Math.sin(state.clock.elapsedTime) * 2}
    )
  
    return (
      <mesh position={position} ref={ref} >
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color}/>
      </mesh>
    )
  }
  

export const Sphere = ({position, size, color}) => {
   
    return (
      <mesh position={position} >
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={color}/>
      </mesh>
    )
  }
  
export const Torus = ({position, size, color}) => {
   
    return (
      <mesh position={position} >
      <torusGeometry args={size}/>
      <meshStandardMaterial color={color}/>
      </mesh>
    )
  }

export const TorusKnot = ({position, size, color}) => {
    const ref = useRef();
    
  
    useFrame((state, delta) => {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta * 0.2
      ref.current.position.z += Math.sin(state.clock.elapsedTime) * 2
    })
   
    return (
      <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size}/>
      <meshStandardMaterial color={color}/>
      </mesh>
    )
  }