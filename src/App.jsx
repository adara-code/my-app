import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/signup'
import LoginPage from './pages/loginpage'
import ForgotPassword from './components/signup/ForgotPassword'
import SignUpDepositor from './components/signup/SignUpDepositor'
import Profile from './pages/profile'
import Contact from './pages/contact'
import Dashboard from './pages/dashboard'
import DashboardHome from './components/dashboard/DashboardHome'
import Customers from './components/dashboard/Customers'
import Transaction from './components/dashboard/Transaction'
import Review from './components/dashboard/Review'
import AccountSettings from './components/dashboard/AccountSettings'
import Transactionpage from './pages/transactionpage'
import Collection from './pages/Collection'
import CollectionProfile from './pages/CollectionProfile'
import ProfileSetup from './pages/ProfileSetup'
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
<Route path="/" element={<Navigate to="/dashboardhome" />} />
<Route path="/dashboardhome" element={<DashboardHome />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/dashboardcustomer" />} />
<Route path="/dashboardcustomer" element={<Customers />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/dashboardreview" />} />
<Route path="/dashboardreview" element={<Review />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/dashboardsetting" />} />
<Route path="/dashboardsetting" element={<AccountSettings />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/dashboardtransaction" />} />
<Route path="/dashboardtransaction" element={<Transaction />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/collectordashboard" />} />
<Route path="/collectordashboard" element={<Dashboard />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/transactionpage" />} />
<Route path="/transactionpage" element={<Transactionpage />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/collections" />} />
<Route path="/collections" element={<Collection />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/collectionprofile" />} />
<Route path="/collectionprofile" element={<CollectionProfile />} />
</Routes>
<Routes>
<Route path="/" element={<Navigate to="/setupprofile" />} />
<Route path="/setupprofile" element={<ProfileSetup />} />
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
