// CSS styles for the application
import './App.css'
import { Routes, Route } from "react-router"
import Environment from './components/web/Environment'
import XR_Environment from './components/web-xr/XR_Environment'
/**
 * Main App Component
 * Sets up the 3D scene with camera, lighting, objects, and UI overlay
 */
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Environment/>}/> */}
      <Route path="/" element={<XR_Environment/>}/>
    </Routes>
  );
}

// Export the App component as the default export
// This allows other files to import it with: import App from './App.jsx'
export default App
