import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginFormPage from './components/pages/LoginFormPage';

import { loadUserFromStorage } from './actions/clientActions';
import ShopProductCards from './components/ShopPageComponents/ShopProductCard';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopProductCards />} />

      </Routes>

    </Router>
  );
};

export default App;