import { Canvas } from "@react-three/fiber"
import { Sphere, Torus, TorusKnot } from "./components/ThreeJS"




const App = () => {
  return (
  <>
  {/* <ThreeAnimation /> */}
    <Canvas>
    <directionalLight position={[0, 0, 2]} intensity={0.5}/>
    <ambientLight intensity={0.1} />
    <group position={[0, -1, 0]}>
    {/* <Cube position={[-1, 0, 0]}/> */}
    </group>
    {/* <Cube position={[0, 0, 0]} color={'red'} size={[1, 1, 1]}/> */}
    <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color={'red'}/>
    <Torus position={[2, 0, 0]} size={[0.8, 0.2, 30, 10]} color={'blue'}/>
    <TorusKnot position={[-2, 0, 0]} size={[0.8, 0.2, 50, 50]} color={'green'}/>
    </Canvas>
  </>
    
  )
}

export default App
