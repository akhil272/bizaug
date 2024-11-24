import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Outlines, Environment } from "@react-three/drei";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";

const sphereCount = 40;
const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0.8,
  envMapIntensity: 1,
});

function CollisionLayer({ position }: { position: [number, number, number] }) {
  const [ref] = useBox(() => ({
    args: [8, 2, -0.5],
    position,
    type: "Static",
  }));

  return (
    <mesh ref={ref as never} visible={false}>
      <boxGeometry args={[8, 2, -0.5]} />
    </mesh>
  );
}

function TextCollider() {
  const numberOfLayers = 10;
  const layerSpacing = 0.2;

  const layers = Array.from({ length: numberOfLayers }, (_, i) => {
    const zPos = 4 + (i - numberOfLayers / 2) * layerSpacing;
    return <CollisionLayer key={i} position={[0, 0, zPos]} />;
  });

  return (
    <group>
      {/* <Text fontSize={0.5} position={[0, 0, 4]}></Text> */}
      {layers}
    </group>
  );
}

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3() }) {
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame(() => {
    const instancedMesh = ref.current as THREE.InstancedMesh;
    if (!instancedMesh) return;

    for (let i = 0; i < sphereCount; i++) {
      instancedMesh.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });

  return (
    <instancedMesh
      ref={ref as never}
      castShadow
      receiveShadow
      args={[sphereGeometry, baubleMaterial, sphereCount]}
    >
      <Outlines thickness={0.02} />
    </instancedMesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [4],
    position: [0, 0, 0],
  }));

  return useFrame((state) =>
    api.position.set(
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
      0
    )
  );
}

export default function ThreeScene() {
  return (
    <div className="h-full w-full bg-neutral-900">
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
      >
        <ambientLight intensity={0.5} />
        <color attach="background" args={["#1a1a1a"]} />
        <spotLight
          intensity={1}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <Pointer />
          <Clump />
          <TextCollider />
        </Physics>
        <Environment files="/adamsbridge.hdr" />
        <EffectComposer enableNormalPass multisampling={2}>
          <N8AO
            halfRes
            color="black"
            aoRadius={2}
            intensity={1}
            aoSamples={6}
            denoiseSamples={4}
          />
          <SMAA />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
