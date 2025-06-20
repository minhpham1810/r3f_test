import RotatingCube from './RotatingCube'
import BouncingSphere from './BouncingSphere'
// React Three Fiber - Main 3D rendering library for React
import { Canvas } from '@react-three/fiber'
// Drei - Helper components and utilities for R3F (Box, Sphere, Plane, OrbitControls)
import { OrbitControls, Plane } from '@react-three/drei'

function Environment() {
    return (
    // Full-screen container for the 3D scene
    <div style={{ width: '100vw', height: '100vh' }}>
      
      {/* Canvas creates the WebGL context and Three.js scene */}
      {/* Camera configuration: position=[x,y,z], fov=field of view in degrees */}
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>x
        
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
      </Canvas>
      
      {/* ==================== UI OVERLAY ==================== */}
      {/* Floating UI panel that appears over the 3D scene */}
      {/* Provides instructions and information to users */}
      <div style={{
        position: 'absolute',        // Position over the 3D scene
        top: '20px',                // 20px from top of screen
        left: '20px',               // 20px from left of screen
        color: 'white',             // White text for visibility
        fontFamily: 'Courier New',  // Monospace font for tech aesthetic
        fontSize: '14px',           // Readable font size
        background: 'rgba(0,0,0,0.7)', // Semi-transparent black background
        padding: '10px',            // Internal spacing
        borderRadius: '5px'         // Rounded corners for modern look
      }}>
        <h3>React Three Fiber Debug Scene</h3>
        <p>🔄 Blue cube: Click to scale, hover to change color</p>
        <p>🔮 Purple sphere: Animated bouncing wireframe</p>
        <p>🖱️ Mouse: Orbit controls enabled</p>
      </div>
    </div>
    )
}

export default Environment