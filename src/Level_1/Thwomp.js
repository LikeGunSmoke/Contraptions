import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export default function Thwomp({ ...props }) {

  const [group, api] = useBox(() => ({
    type: 'Kinematic',
    ...props,
  }));

  useFrame(({ clock }) => {
    api.position.set(-3, (Math.sin(clock.getElapsedTime()) + 2.45)  * 2.9, 0)}
  );

  const { nodes, materials } = useGLTF('../../3DModels/Level_1/Thwomp/scene.gltf');
  return (
    <group name='Thwomp' ref={group} {...props} scale={[0.001, 0.001, 0.001]} dispose={null}>
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
  );
};

useGLTF.preload('../../3DModels/Level_1/Thwomp/scene.gltf');