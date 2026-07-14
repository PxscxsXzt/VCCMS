import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/ToastContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import QRScanner from './pages/QRScanner';
import Inventory from './pages/Inventory';
import LotDetail from './pages/LotDetail';
import Transfer from './pages/Transfer';
import WardView from './pages/WardView';
import Report from './pages/Report';
import ExpiryCalendar from './pages/ExpiryCalendar';
import AuditLog from './pages/AuditLog';
import BarcodePrinter from './pages/BarcodePrinter';

const App = () => {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scanner" element={<QRScanner />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<LotDetail />} />
            <Route path="/print-barcodes/:id" element={<BarcodePrinter />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/ward-view" element={<WardView />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<ExpiryCalendar />} />
            <Route path="/audit" element={<AuditLog />} />
          </Route>
        </Routes>
      </ToastProvider>
    </Router>
  );
};

// Mock Login component
const Login = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login Page</h2>
      <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
    </div>
  );
};

export default App;
