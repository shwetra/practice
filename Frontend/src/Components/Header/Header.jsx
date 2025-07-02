import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    men: {
      categories: ['Aviator', 'Rectangle', 'Wayfarer'],
      brands: ['Ray-Ban', 'Oakley', 'Fastrack'],
    },
    women: {
      categories: ['Cat Eye', 'Round', 'Oversized'],
      brands: ['Vogue', 'Titan', 'Gucci'],
    },
    kids: {
      categories: ['Flexible Frame', 'Lightweight', 'Colorful'],
      brands: ['Chhota Bheem', 'Disney', 'Kids&Co'],
    },
    unisex: {
      categories: ['Retro', 'Classic', 'Minimalist'],
      brands: ['Vincent Chase', 'John Jacobs', 'Carrera'],
    },
  };

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-3 shadow-sm position-relative">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="/">
            <img src="https://via.placeholder.com/100x40?text=LOGO" alt="Logo" />
          </a>

          {/* Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
            {['men', 'women', 'kids', 'unisex'].map((item) => (
              <li
                key={item}
                className="nav-item"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link text-uppercase" href={`/${item}`}>
                  {item} Glasses
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className="nav-link" href="/eye-care">Eye Test & Care</a>
            </li>
          </ul>

          {/* Right Section */}
          <div className="d-flex gap-3 align-items-center">
            <a href="/login" className="text-decoration-none">Login</a>
            <a href="/signup" className="text-decoration-none">Signup</a>
            <a href="/wishlist" className="text-decoration-none">❤️</a>
            <a href="/cart" className="text-decoration-none">🛒</a>
          </div>
        </div>
      </nav>

      {/* Full-width bottom sticky dropdown */}
      {activeMenu && (
        <div
          className="bottom-hover-panel"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container py-4">
            <h5 className="text-capitalize mb-3">{activeMenu} Glasses</h5>
            <div className="row">
              <div className="col-md-6">
                <strong>Categories</strong>
                <ul>
                  {menuData[activeMenu].categories.map((cat, i) => (
                    <li key={i}>{cat}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <strong>Brands</strong>
                <ul>
                  {menuData[activeMenu].brands.map((brand, i) => (
                    <li key={i}>{brand}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
