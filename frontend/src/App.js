import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../src/contexts/AuthContext';

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Router>
        <nav>
          <Link to="/" style={{ padding: '5px' }}><button>Login</button></Link>
          <Link to="/signup" style={{ padding: '5px' }}><button>Sign Up</button></Link>
          <Link to="/profile" style={{ padding: '5px' }}><button>Profile</button></Link>
        </nav>
        <div style={{
          display: 'flex', width: 700, padding: 30
        }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {currentUser ? <Route path="/profile" element={<Profile />} /> : <Route path="/profile" element={<Alert variant='danger'><h1>Please login First</h1></Alert>} />}
            <Route path="*" element={<Alert variant='danger'><h1>404 Not Found</h1></Alert>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
