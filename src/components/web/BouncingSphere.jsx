// Standard React hooks for component state and references
import { useRef } from 'react'
// R3F animation hook - runs on every frame (60fps)
import { useFrame } from '@react-three/fiber'

import { Sphere } from '@react-three/drei'
/**
 * BouncingSphere Component
 * Creates a wireframe sphere that bounces up and down using a sine wave animation
 */
function BouncingSphere() {
  // Reference to the sphere mesh for direct position manipulation
  const meshRef = useRef()

  // useFrame for continuous animation
  useFrame((state) => {
    // Safety check before manipulating the mesh
    if (meshRef.current) {
      // Create bouncing motion using sine wave
      // state.clock.elapsedTime: total time since app started (in seconds)
      // Math.sin creates smooth oscillation between -1 and 1
      // Multiply by 2 for frequency (2 bounces per second)
      // Multiply by 1.5 for amplitude (bounce height of 1.5 units)
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 1.5
    }
  })

  return (
    <Sphere 
      ref={meshRef}           // Attach reference for animation
      position={[2, 0, 0]}    // Position: 2 units right, center Y, center Z
      args={[0.8, 32, 32]}    // Arguments: [radius, widthSegments, heightSegments]
                              // More segments = smoother sphere but more GPU load
    >
      {/* Wireframe material shows only the mesh lines, not solid surface */}
      <meshStandardMaterial color="purple" wireframe />
    </Sphere>
  )
}

export default BouncingSphere