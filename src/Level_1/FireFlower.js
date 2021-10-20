/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Anthony Yanez (https://sketchfab.com/paulyanez)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/1465bc069efa437b999669c6db5a01ee
title: Fire Flower (Super Mario Bros)
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useDispatch } from 'react-redux';
import { fire_l, fire_r } from '../state/actions.js';

export default function FireFlower({ ...props }) {

  const dispatch = useDispatch();

  const [group] = useBox(() => ({
    type: 'Static',
    ...props,
  }));

  const handleDirection = () => {
    if (props.direction === 'right') {
      dispatch(fire_r);
    };
    if (props.direction === 'left') {
      dispatch(fire_l);
    };
  };

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/FireFlower/scene.gltf');

  return (
    <group name='FireFlower' ref={group} onClick={handleDirection} {...props} scale={[0.003, 0.003, 0.003]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-8.39, 304.39, 0]} rotation={[0, 0, 0]} scale={[1.91, 1.31, 0.54]}>
            <mesh geometry={nodes['Sphere001_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
            <mesh geometry={nodes['Sphere001_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
            <mesh geometry={nodes['Sphere001_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
            <mesh geometry={nodes['Sphere001_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
            <mesh geometry={nodes['Sphere001_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/FireFlower/scene.gltf');
