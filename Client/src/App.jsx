import { Route, Routes } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
