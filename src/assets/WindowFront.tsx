/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
 nodes: {
  Cube086: THREE.Mesh;
  Cube086_1: THREE.Mesh;
  Cube086_2: THREE.Mesh;
 };
 materials: {
  PaletteMaterial001: THREE.MeshStandardMaterial;
  PaletteMaterial002: THREE.MeshStandardMaterial;
  PaletteMaterial003: THREE.MeshStandardMaterial;
 };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
 const { nodes, materials } = useGLTF("/WindowFront.glb") as GLTFResult;
 return (
  <group {...props} dispose={null}>
   <group position={[0, 1, -2.244]} rotation={[Math.PI, 0, Math.PI]} scale={-1}>
    <mesh
     geometry={nodes.Cube086.geometry}
     material={materials.PaletteMaterial001}
    />
    <mesh
     geometry={nodes.Cube086_1.geometry}
     material={materials.PaletteMaterial002}
    />
    <mesh
     geometry={nodes.Cube086_2.geometry}
     material={materials.PaletteMaterial003}
    />
   </group>
  </group>
 );
}

useGLTF.preload("/WindowFront.glb");