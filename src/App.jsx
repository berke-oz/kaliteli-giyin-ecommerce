import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginFormPage from './components/pages/LoginFormPage';
import CartPage from './components/pages/CartPage';
import CreateOrderPage from './components/pages/CreateOrderPage';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { loadUserFromStorage } from './actions/clientActions';
import ShopProductCards from './components/ShopPageComponents/ShopProductCard';
import ProductDetailPage from './components/pages/ProductDetailPage';

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopProductCards />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/create-order"
            element={
              <ProtectedRoute>
                <CreateOrderPage />
              </ProtectedRoute>
            }
          />
        </Routes>

      </Router>
    </QueryClientProvider>
  );
};

export default App;