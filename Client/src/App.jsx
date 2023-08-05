import { Route, Routes } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
