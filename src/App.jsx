import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginFormPage from './components/pages/LoginFormPage';
import Header from './components/layout/Header';
import CategoryList from './components/CategoryList';
import TopCategories from './components/TopCategories';
import { loadUserFromStorage } from './actions/clientActions';

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
      </Routes>

    </Router>
  );
};

export default App;