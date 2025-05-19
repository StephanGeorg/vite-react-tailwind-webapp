import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import AboutPage from '../pages/AboutPage';
import { UsersProvider } from '../context/UsersContext';

export default function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </UsersProvider>
  );
}
