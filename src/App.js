import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedOutlet from "./router/ProtectedOutlet"
import Login from './containers/Login'
import FeedPage from './containers/FeedPage'
import Profile from './containers/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedOutlet />}>
          <Route path="" element={<FeedPage />} />
        </Route>
        <Route path="/profile" element={<ProtectedOutlet />}>
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
