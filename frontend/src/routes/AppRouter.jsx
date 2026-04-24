import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/Landing/LandingPage'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes — no sidebar */}
        <Route path="/" element={<LandingPage />} />


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