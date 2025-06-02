/**
 * Main application component for Little Lemon restaurant website
 * 
 * This file sets up the routing structure for the application using React Router.
 * It defines a Layout component that handles the common structure (navigation and footer)
 * across all pages, and conditionally renders the footer based on the current route.
 * 
 * @module App
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import ConfirmationPage from './pages/ConfirmationPage';
//import { useEffect } from 'react';

/**
 * Layout component that structures the application
 * 
 * This component:
 * - Renders the navigation bar on all pages
 * - Contains all the routes for the application
 * - Conditionally renders the footer (hidden on the login page)
 * 
 * @returns {JSX.Element} The layout structure with navigation, routes, and conditional footer
 */
function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === '/login';

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

/**
 * Root App component that wraps the entire application with BrowserRouter
 * 
 * @returns {JSX.Element} The application wrapped with BrowserRouter for routing
 */
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
