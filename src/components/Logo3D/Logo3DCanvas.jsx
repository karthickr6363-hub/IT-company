import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Logo3D from './Logo3D'

function Logo3DCanvas({ scale = 1, showControls = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#FFD700" intensity={0.5} />
      
      <Logo3D scale={scale} />
      
      {showControls && <OrbitControls enableZoom={false} />}
      
      <Environment preset="night" />
    </Canvas>
  )
}

export default Logo3DCanvas
