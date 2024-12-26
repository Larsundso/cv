/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Headphones.glb -t s 
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
 nodes: {
  Cube004_1: THREE.Mesh;
  Cube004_2: THREE.Mesh;
  Cube004_3: THREE.Mesh;
  Cube005: THREE.Mesh;
  Cylinder011: THREE.Mesh;
  Cylinder011_1: THREE.Mesh;
  Cylinder013: THREE.Mesh;
  Cylinder019: THREE.Mesh;
 };
 materials: {
  Leather: THREE.MeshStandardMaterial;
  ["Leather Fabric 01"]: THREE.MeshStandardMaterial;
  Plastic: THREE.MeshStandardMaterial;
  ["Dark fabric"]: THREE.MeshStandardMaterial;
  ["Material.001"]: THREE.MeshStandardMaterial;
  ["Plastic.001"]: THREE.MeshStandardMaterial;
  ["Material.002"]: THREE.MeshStandardMaterial;
  ["Material.003"]: THREE.MeshStandardMaterial;
 };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
 const { nodes, materials } = useGLTF("/Headphones.glb") as GLTFResult;
 return (
  <group {...props} dispose={null}>
   <group position={[-0.047, 0.054, 0.043]} rotation={[0, Math.PI / 2, 0]}>
    <mesh geometry={nodes.Cube004_1.geometry} material={materials.Leather} />
    <mesh
     geometry={nodes.Cube004_2.geometry}
     material={materials["Leather Fabric 01"]}
    />
    <mesh geometry={nodes.Cube004_3.geometry} material={materials.Plastic} />
   </group>
   <mesh
    geometry={nodes.Cube005.geometry}
    material={materials["Dark fabric"]}
    position={[-0.08, 0.021, -0.134]}
    rotation={[0, Math.PI / 2, 0]}
   />
   <group position={[-0.014, 0.056, 0.057]} rotation={[0, Math.PI / 2, 0]}>
    <mesh
     geometry={nodes.Cylinder011.geometry}
     material={materials["Material.001"]}
    />
    <mesh
     geometry={nodes.Cylinder011_1.geometry}
     material={materials["Plastic.001"]}
    />
   </group>
   <mesh
    geometry={nodes.Cylinder013.geometry}
    material={materials["Material.002"]}
    position={[-0.014, 0.056, 0.057]}
    rotation={[2.961, -1.079, -Math.PI / 2]}
   />
   <mesh
    geometry={nodes.Cylinder019.geometry}
    material={materials["Material.003"]}
    position={[-0.08, 0.045, -0.016]}
    rotation={[0, Math.PI / 2, 0]}
   />
  </group>
 );
}

useGLTF.preload("/Headphones.glb");
