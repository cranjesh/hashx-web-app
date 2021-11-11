import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import Profile from './containers/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
