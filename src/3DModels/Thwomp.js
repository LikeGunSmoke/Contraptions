import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'

export default function Thwomp(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('3DModels/Thwomp/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[15.48, 1053.6, 0]} rotation={[-Math.PI, 0, 0]} scale={[-1, 1, 1]}>
            <mesh material={materials['07_-_Default']} geometry={nodes['Box001_07_-_Default_0'].geometry} />
            <mesh material={materials['03_-_Default']} geometry={nodes['Box001_03_-_Default_0'].geometry} />
            <mesh material={materials['02_-_Default']} geometry={nodes['Box001_02_-_Default_0'].geometry} />
            <mesh material={materials['08_-_Default']} geometry={nodes['Box001_08_-_Default_0'].geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('3DModels/Thwomp/scene.gltf')