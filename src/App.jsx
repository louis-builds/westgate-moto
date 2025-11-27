import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Parts from './pages/Parts';
import PartDetail from './pages/PartDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="parts" element={<Parts />} />
        <Route path="parts/:id" element={<PartDetail />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
