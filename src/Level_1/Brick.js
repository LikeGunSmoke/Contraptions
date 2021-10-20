import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useSelector } from 'react-redux';

export default function Brick({ ...props }) {

  const resetGame = useSelector((state) => state.level1[3].reset);

  const [group, api] = useBox(() => ({
    type: 'Static',
    ...props,
  }));

  const onClick = () => {
    if (props.vanish) {
      return api.position.set(0, 0, -10);
    };
  };

  useEffect(() => {
    if (resetGame && props.pos === 'first') {
      api.position.set(-11, -6, 0);
    };
    if (resetGame && props.pos === 'second') {
      api.position.set(-10, -6, 0);
    };
    if (resetGame && props.pos === 'third') {
      api.position.set(-9, -6, 0);
    };
  }, [
        api.position, resetGame, props.pos
     ]
  );

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/Brick/scene.gltf');

  return (
    <group name='Brick' ref={group} {...props} scale={[0.1, 0.1, 0.1]} onClick={onClick} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.lambert3SG} />
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/Brick/scene.gltf');