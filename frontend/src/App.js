import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
import Homepage from './pages/Homepage';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import { useAuth } from '../src/contexts/AuthContext';

import React from 'react'


const App = ()=> {
  return <Homepage />;}


export default App;
