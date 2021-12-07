import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { useSelector, useDispatch } from 'react-redux';
import { reset, win } from '../state/actions/level_1/actions.js';

export default function Mario({ ...props }) {

  const dispatch = useDispatch();
  const warp = useSelector((state) => state.level1[0].warp);
  const size = useSelector((state) => state.level1[0].size);
  const resetGame = useSelector((state) => state.level1[3].reset);

  const [group, api] = useSphere(() => ({
    type: 'Dynamic',
    mass: 1,
    args: 1,
    position: [-10, -4, 0],
    rotation: [0, -Math.PI/2, 0],
    onCollide: (e) => {
      const name = e.body.name;
      if (name === 'Ground') {
        setTimeout(() => dispatch(reset), 10);
      };
      if (name === 'Castle') {
        dispatch(win);
      };
    }
  }));

  useEffect(() => {
    if (warp) {
      api.position.set(11, 6, 0);
      api.velocity.set(0, 1, 0);
    };
    if (resetGame) {
      api.position.set(-10, -4, 0);
      api.rotation.set(0, -Math.PI/2, 0);
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
    }
  }, [
        api.position, api.rotation, api.velocity, api.angularVelocity, resetGame, warp
     ]
  );

  const { nodes } = useGLTF('../../3DModels/Level_1/Mario/scene.gltf');

  return (
    <group name='Mario' ref={group} scale={size} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -6.34]} rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
            <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
            <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../../3DModels/Level_1/Mario/scene.gltf');