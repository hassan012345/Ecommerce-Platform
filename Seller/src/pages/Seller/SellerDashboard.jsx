import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Orders = () => <div>Orders Content</div>;
const Products = () => <div>Products Content</div>;
const Income = () => <div>Income Content</div>;

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'income':
        return <Income />;
      default:
        return <Orders />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-64 bg-white rounded-r-3xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-4">Seller Dashboard</h1>
          <nav>
            <Link onClick={() => setActiveTab('orders')} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
              Manage Orders
            </Link>
            <Link onClick={() => setActiveTab('products')} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
              Manage Products
            </Link>
            <Link onClick={() => setActiveTab('income')} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
              Manage Income
            </Link>
          </nav>
        </div>
      </div>

        <Routes>
          <Route path="/seller/orders" element={<Orders />}>
            
            {/* Insert Orders Component */}
          </Route>
          <Route path="/seller/products" element= {<Products />}>
            
            {/* Insert Products Component */}
          </Route>
          <Route path="/seller/income" element = {<Income />}>
            
            {/* Insert Income Component */}
          </Route>
        </Routes>

      <div className="flex-1 p-10 text-2xl font-bold">
        {renderContent()}
      </div>
    </div>
  );
};

export default SellerDashboard;