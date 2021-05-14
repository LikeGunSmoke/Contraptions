import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';

export default function RedShell(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('3DModels/RedShell/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.57, 66.33, -0.12]} rotation={[0, -Math.PI / 2, 0]} scale={[2.65, 3.48, 2.68]}>
            <group position={[1.56, -5.56, -30.7]}>
              <mesh geometry={nodes['Shell_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
              <mesh geometry={nodes['Shell_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
              <mesh geometry={nodes['Shell_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
              <mesh geometry={nodes['Shell_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
              <mesh geometry={nodes['Shell_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('3DModels/RedShell/scene.gltf')