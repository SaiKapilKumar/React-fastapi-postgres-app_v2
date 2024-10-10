// frontend/src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';


function HomePage() {
  return (
    <div className="home-container">
      <div className="glass-card">
        <h1>Customer Enquiry Management</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/designer/1">Designer Page</Link>
            </li>
            <li>
              <Link className="nav-link" to="/enquiry">Enquiry Page</Link>
            </li>
            <li>
              <Link className="nav-link" to="/order-confirmation/1">Order Confirmation Page</Link>
            </li>
            <li>
              <Link className="nav-link" to="/process/1">Process Page</Link>
            </li>
            <li>
              <Link className="nav-link" to="/raw-materials/1">Raw Materials Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;