import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useSelector, useDispatch } from 'react-redux';
import { powerUp } from '../state/actions.js';

export default function Mushroom({ ...props }) {

  const dispatch = useDispatch();
  const vis = useSelector((state) => state.level1[0].showShroom);

  const [group, api] = useBox(() => ({
    type: 'Kinematic',
    rotation: [0, -Math.PI/2, 0],
    onCollide: (e) => {
      const name = e.body.name;
      if (name === 'Mario') {
        dispatch(powerUp);
      }
    },
    ...props,
  }));

  useEffect(() => {
    if (vis) {
      api.position.set(-4, -8, 0);
    };
    if (!vis) {
      api.position.set(-4, -11, 0);
    };
  });

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/Mushroom/scene.gltf');

  return (
    <group name='Mushroom' scale={[0.4, 0.4, 0.4]} visible={vis} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={nodes.defaultMaterial.material} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert3SG} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={nodes.defaultMaterial_3.material} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/Mushroom/scene.gltf');