import { Route, Routes } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
