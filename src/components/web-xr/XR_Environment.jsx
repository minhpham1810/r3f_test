import RotatingCube from './RotatingCube'
import BouncingSphere from './BouncingSphere'
// React Three Fiber - Main 3D rendering library for React
import { Canvas } from '@react-three/fiber'
// Drei - Helper components and utilities for R3F (Box, Sphere, Plane, OrbitControls)
import { XR, createXRStore } from '@react-three/xr'
import { Plane } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
const store = createXRStore()

function XR_Environment() {
    return <>
      
      <button onClick={() => store.enterAR()}>Enter AR</button>
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <XR store={store}>
            {/* ==================== LIGHTING SETUP ==================== */}
            {/* Multiple light sources create realistic illumination */}
            
            {/* Ambient light: soft, uniform lighting from all directions */}
            {/* Prevents objects from being completely black in shadows */}
            <ambientLight intensity={0.5} />
            
            {/* Point light: bright light source from a specific position (like a light bulb) */}
            {/* Creates highlights and shadows for depth perception */}
            <pointLight position={[10, 10, 10]} />
            
            {/* Directional light: parallel light rays from a direction (like sunlight) */}
            {/* Provides consistent lighting across the scene */}
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            
            {/* ==================== 3D OBJECTS ==================== */}
            {/* Our custom animated components */}
            <RotatingCube />
            <BouncingSphere />
            
            {/* ==================== GROUND PLANE ==================== */}
            {/* Creates a floor for spatial reference and depth perception */}
            <Plane 
              args={[10, 10]}                    // Size: 10x10 units
              rotation={[-Math.PI / 2, 0, 0]}    // Rotate 90° to lay flat (horizontal)
              position={[0, -2, 0]}              // Position 2 units below center (acts as floor)
            >
              {/* Simple gray material for the ground */}
              <meshStandardMaterial color="lightgray" />
            </Plane>
            
            {/* ==================== CAMERA CONTROLS ==================== */}
            {/* OrbitControls enables mouse/touch interaction with the camera */}
            {/* Users can orbit around, zoom in/out, and pan the view */}
            <OrbitControls 
              enableDamping       // Smooth, gradual camera movement (feels more natural)
              dampingFactor={0.05} // How quickly movement stops (lower = smoother)
            />
          </XR>
        </Canvas>  
         
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'white',
          fontFamily: 'Courier New',
          fontSize: '14px',
          background: 'rgba(0,0,0,0.7)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          <h3>React Three Fiber XR Scene</h3>
          <p>Blue cube: Click to scale, hover to change color</p>
          <p>Purple sphere: Animated bouncing wireframe</p>
          <p>Mouse: Orbit controls enabled</p>
          <p>Click 'Enter AR' to start XR experience</p>
        </div>
    </>
}

export default XR_Environment