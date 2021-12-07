import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useDispatch, useSelector } from 'react-redux';
import { showShroom } from '../state/actions/level_1/actions.js';

export default function QuestionBlock({ ...props }) {

  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.level1[0].hideShroom);


  const [group] = useBox(() => ({
    type: 'Static',
    ...props,
  }));

  const onClick = () => {
    if (props.powerUp && hidden) {
      dispatch(showShroom);
    };
  };

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/QuestionBlock/scene.gltf');

  return (
    <group name='QuestionBlock' ref={group} onClick={onClick} {...props} scale={[0.5, 0.5, 0.5]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.outline} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/QuestionBlock/scene.gltf');