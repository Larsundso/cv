import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
 Bloom,
 DepthOfField,
 EffectComposer,
 Noise,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import { Vector3 } from "three";
import "./App.css";

import Cityscape from "./assets/Cityscape";
import Computer from "./assets/Computer";
import Desk from "./assets/Desk";
import Floor from "./assets/Floor";
import Headphones from "./assets/Headphones";
import Keyboard from "./assets/Keyboard";
import Monitors from "./assets/Monitors";
import Mouse from "./assets/Mouse";
import WindowFront from "./assets/WindowFront";

function App() {
 return (
  <>
   <Canvas
    style={{ height: "100vh", width: "100vw" }}
    performance={{ min: 0.1, max: 1 }}
    shadows
    frameloop={"always"}
   >
    <OrbitControls />

    <EffectComposer>
     <DepthOfField
      focusDistance={0.0007}
      focalLength={0.0004}
      bokehScale={1}
      height={1000}
     />
     <Bloom
      luminanceThreshold={0.001}
      luminanceSmoothing={0.8}
      resolutionX={2048}
      resolutionY={2048}
      resolutionScale={0.1}
      intensity={0.2}
     />
     <Noise opacity={0.02} />
    </EffectComposer>

    <color args={["#010101"]} attach="background" />

    <Suspense>
     <Cityscape
      position={[4, 0, 2]}
      scale={new Array(3).fill(4) as unknown as Vector3}
     />

     <WindowFront position={[0, -1, -3.1]} scale={[-1, 1, -1]} />
     <WindowFront position={[0, 1, -3.1]} scale={[-1, 1, -1]} />
     <WindowFront position={[0, -1, 2.9]} scale={[-1, 1, -1]} />
     <WindowFront position={[0, 1, 2.9]} scale={[-1, 1, -1]} />

     <Floor position={[-1.81, -1.47, -1]} />

     <Desk
      position={[-1, -1.5, -2.5]}
      rotation={[0, -1.575, 0]}
      scale={[1.5, 1.4, 1.5]}
     />
     <Monitors position={[-0.13, -0.495, -2.75]} rotation={[0, -1.575, 0]} />
     <Computer
      position={[-0.5, -0.5, -1.7]}
      rotation={[0, -3.1575, 0]}
      scale={new Array(3).fill(1.5) as unknown as Vector3}
     />
     <Mouse
      position={[-0.64, -0.49, -2.4]}
      rotation={[0, -2, 0]}
      scale={new Array(3).fill(1.9) as unknown as Vector3}
     />
     <Keyboard
      position={[-0.6, -0.49, -2.9]}
      scale={new Array(3).fill(0.15) as unknown as Vector3}
      rotation={[1, -1.5, 1]}
     />
     <Headphones position={[-0.3, -0.49, -3.2]} rotation={[0, -0.5, 0]} />

     <Environment preset="city" />
    </Suspense>
   </Canvas>
  </>
 );
}

export default App;
