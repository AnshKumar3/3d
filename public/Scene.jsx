/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Sameer.Uddin (https://sketchfab.com/Sameer.Uddin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/music-concert-stage-low-poly-89629aceff334b34a76c30d42f8327bd
Title: Music_concert_stage_Low_poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
