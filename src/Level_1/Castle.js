import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export default function Castle({ ...props }) {

  const [group] = useBox(() => ({
    type: 'Static',
    ...props,
  }));

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/Castle/scene.gltf');

  return (
    <group name='Castle' ref={group} {...props} scale={[.05, .05, .05]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Part1Mtld70f} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.Part59MtlPar} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.Union2MtlRed} />
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
        <mesh geometry={nodes.mesh_5.geometry} material={materials.Union22MtlWh} />
        <mesh geometry={nodes.mesh_6.geometry} material={materials.Part1Mtl} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials.Union95MtlBr} />
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/Castle/scene.gltf');
