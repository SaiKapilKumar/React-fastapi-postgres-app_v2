// frontend/src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EnquiryPage from './pages/EnquiryPage';
import DesignerPage from './pages/DesignerPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import RawMaterialsPage from './pages/RawMaterialsPage';
import ProcessPage from './pages/ProcessPage';
import HomePage from './pages/HomePage';  // Fix import here

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* HomePage, not App */}
      <Route path="/enquiry" element={<EnquiryPage />} />
      <Route path="/designer/:enquiryId" element={<DesignerPage />} />
      <Route path="/order-confirmation/:enquiryId" element={<OrderConfirmationPage />} />
      <Route path="/raw-materials/:enquiryId" element={<RawMaterialsPage />} />
      <Route path="/process/:enquiryId" element={<ProcessPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;