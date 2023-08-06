import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {

    const token = localStorage.getItem("token")

    const renderIfAuthenticated = (component) => {
      return token ? component : <Navigate to="/" />;
    };

    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={renderIfAuthenticated(<Home />)} />
        <Route
          path="/contact/:id"
          element={renderIfAuthenticated(<Contact />)}
        />
      </Routes>
    );
}

export default App
