import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useDispatch } from 'react-redux';
import { warp } from '../state/actions/level_1/actions.js';

export default function WarpPipe(props) {

  const dispatch = useDispatch();

  const [group] = useBox(() => ({
    type: 'Static',
    onCollide: (e) => {
      const name = e.body.name;
      if (name === 'Mario') {
        dispatch(warp);
      }
    },
    ...props
  }));

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/WarpPipe/scene.gltf');

  return (
    <group name='WarpPipe' ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[407.62, 590.39, -100.55]} rotation={[1.89, 0.88, -2.05]} scale={[100, 100, 100]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[824.47, 794.42, 804.33]} rotation={[3.14, 0.76, 2.66]} scale={[100, 100, 100]} />
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/WarpPipe/scene.gltf');
