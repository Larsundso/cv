/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Mouse.glb -t s 
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
 nodes: {
  MouseThermaltakeBlack: THREE.Mesh;
  MouseThermaltakeBlack003: THREE.Mesh;
  MouseThermaltakeBlack008: THREE.Mesh;
  MouseThermaltakeBlack010: THREE.Mesh;
  MouseThermaltakeBlack012: THREE.Mesh;
  MouseThermaltakeBlack014: THREE.Mesh;
  MouseThermaltakeBlack015: THREE.Mesh;
 };
 materials: {
  PaletteMaterial001: THREE.MeshStandardMaterial;
  PaletteMaterial002: THREE.MeshStandardMaterial;
  PaletteMaterial003: THREE.MeshStandardMaterial;
  PaletteMaterial004: THREE.MeshStandardMaterial;
  PaletteMaterial005: THREE.MeshStandardMaterial;
  PaletteMaterial006: THREE.MeshStandardMaterial;
  PaletteMaterial007: THREE.MeshStandardMaterial;
 };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
 const { nodes, materials } = useGLTF("/Mouse.glb") as GLTFResult;
 return (
  <group {...props} dispose={null}>
   <mesh
    geometry={nodes.MouseThermaltakeBlack.geometry}
    material={materials.PaletteMaterial001}
    position={[-0.001, 0.011, -0.017]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={[0.025, 0.019, 0.019]}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack003.geometry}
    material={materials.PaletteMaterial002}
    position={[-0.005, 0.008, -0.004]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack008.geometry}
    material={materials.PaletteMaterial003}
    position={[0.001, 0.011, -0.017]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack010.geometry}
    material={materials.PaletteMaterial004}
    position={[-0.014, 0.014, 0.007]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack012.geometry}
    material={materials.PaletteMaterial005}
    position={[-0.005, 0.008, -0.004]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack014.geometry}
    material={materials.PaletteMaterial006}
    position={[-0.001, 0.011, -0.017]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
   <mesh
    geometry={nodes.MouseThermaltakeBlack015.geometry}
    material={materials.PaletteMaterial007}
    position={[-0.005, 0.008, -0.004]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.018}
   />
  </group>
 );
}

useGLTF.preload("/Mouse.glb");
