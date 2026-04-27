import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Pixelation,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { DoubleSide } from "three";

export default function App() {
  return (
    <div className="h-screen w-full bg-zinc-900">
      <Canvas>
        <EffectComposer>
          {/* <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          /> */}
          <Pixelation granularity={2} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise
            premultiply
            blendFunction={BlendFunction.OVERLAY} // blend mode
          />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={110} />
          <OrbitControls />
          <mesh>
            <torusKnotGeometry args={[8, 2, 150, 150, 3, 2]} />
            <meshNormalMaterial wireframe={true} side={DoubleSide} />
          </mesh>
        </EffectComposer>
      </Canvas>
    </div>
  );
}
