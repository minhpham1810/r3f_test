// Standard React hooks for component state and references
import { useRef, useState } from 'react'
// R3F animation hook - runs on every frame (60fps)
import { useFrame } from '@react-three/fiber'

import { Box } from '@react-three/drei'
/**
 * RotatingCube Component
 * Creates an interactive 3D cube that rotates continuously and responds to user interaction
 */
function RotatingCube() {
  // useRef creates a direct reference to the 3D mesh object
  // This allows us to manipulate the object's properties directly (like rotation)
  const meshRef = useRef()
  
  // React state to track if the mouse is hovering over the cube
  const [hovered, setHovered] = useState(false)
  
  // React state to track if the cube has been clicked (toggles scale)
  const [clicked, setClicked] = useState(false)

  // useFrame runs on every animation frame (typically 60fps)
  // Parameters: state (contains clock, camera, etc.), delta (time since last frame)
  useFrame((state, delta) => {
    // Safety check: ensure the mesh reference exists before manipulating it
    if (meshRef.current) {
      // Rotate the cube continuously using delta for frame-rate independent animation
      // delta ensures the same rotation speed regardless of frame rate
      meshRef.current.rotation.x += delta        // Full speed rotation on X-axis
      meshRef.current.rotation.y += delta * 0.5  // Half speed rotation on Y-axis
    }
  })

  return (
    <Box
      ref={meshRef}                           // Attach the reference for direct manipulation
      position={[-2, 0, 0]}                   // Position: 2 units left, center Y, center Z
      scale={clicked ? 1.5 : 1}               // Dynamic scaling: 1.5x when clicked, normal when not
      onClick={() => setClicked(!clicked)}    // Toggle clicked state on mouse click
      onPointerOver={() => setHovered(true)}  // Set hovered to true when mouse enters
      onPointerOut={() => setHovered(false)}  // Set hovered to false when mouse leaves
    >
      {/* Material defines the appearance of the 3D object */}
      {/* Dynamic color based on interaction state: hover > click > default */}
      <meshStandardMaterial 
        color={hovered ? 'hotpink' : clicked ? 'orange' : 'lightblue'} 
      />
    </Box>
  )
}

export default RotatingCube