import React from 'react'
import Login from './Pages/Login'
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Courses from './Pages/Courses';
import CreateCourse from './Pages/CreateCourse';
import PrivateRoute from './Utils/PrivateRoute';
import AdminRoute from './Utils/AdminRoute';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }>
          <Route path='' element={<Courses />} />
          <Route path='/admin/create' element={<CreateCourse />} />
        </Route>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App