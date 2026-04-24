import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/Landing/LandingPage'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes — no sidebar */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* Protected routes — sidebar appears after login
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </BrowserRouter>
  )
}