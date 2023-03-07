import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/signup'
import LoginPage from './pages/loginpage'
import ForgotPassword from './components/signup/ForgotPassword'
import SignUpDepositor from './components/signup/SignUpDepositor'
import Profile from './pages/profile'
import Contact from './pages/contact'
import Dashboard from './pages/dashboard'
const App = () => {
  return (
    <BrowserRouter>

<Routes>
<Route path="/" element={<Navigate to="/signup" />} />
<Route path="/signup" element={<SignUp />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/signup" />} />
<Route path="/login" element={<LoginPage />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/forgotpassword" />} />
<Route path="/forgotpassword" element={<ForgotPassword />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/sign-up-depositor" />} />
<Route path="/sign-up-depositor" element={<SignUpDepositor />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/collectordashboard" />} />
<Route path="/collectordashboard" element={<Dashboard />} />
</Routes>

<Routes>
<Route path="/" element={<Navigate to="/profile" />} />
<Route path="/profile" element={<Profile />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/home" />} />
<Route path="/home" element={<Contact />} />
</Routes>


    </BrowserRouter>
  )
}

export default App
