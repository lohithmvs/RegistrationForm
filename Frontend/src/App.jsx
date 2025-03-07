import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './MyForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './StudentList'
import Login from './login'
import Home from './home'

function App() {

  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<MyForm />} />  {/* Home page with the form */}
       {/*Route path="/students" element={<StudentList />} />  {/* Page to show the student list */}
       <Route path="/login" element={<Login />}/>
       <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
      
    </>
  )
}

export default App
