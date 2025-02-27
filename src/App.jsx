import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginFormPage from './components/pages/LoginFormPage';
import Footer from './components/layout/Footer';
import CartPage from './components/pages/CartPage';

import { loadUserFromStorage } from './actions/clientActions';
import ShopProductCards from './components/ShopPageComponents/ShopProductCard';
import ProductDetailPage from './components/pages/ProductDetailPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopProductCards />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;