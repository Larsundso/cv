/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kostka002: THREE.Mesh
    Kostka002_1: THREE.Mesh
  }
  materials: {
    ['Desk wood']: THREE.MeshPhysicalMaterial
    ['Metal Black Dixon']: THREE.MeshPhysicalMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Table.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Desk" scale={[1.25, 1, 1.25]}>
        <mesh
          name="Kostka002"
          castShadow
          receiveShadow
          geometry={nodes.Kostka002.geometry}
          material={materials['Desk wood']}
        />
        <mesh
          name="Kostka002_1"
          castShadow
          receiveShadow
          geometry={nodes.Kostka002_1.geometry}
          material={materials['Metal Black Dixon']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Table.glb')