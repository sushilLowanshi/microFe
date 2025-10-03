import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("user");
  const navItems = [
    { path: "/auth/user", label: "User" },
    { path: "/booking", label: "Booking" },
    { path: "/report", label: "Analytics & Charts" },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <span className="brand-name">Micro Frontend</span>
          </Link>
        </div>

        <div className="navbar-center">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-right">
          {token ? (
            <Link to="/auth/profile">
              <span className="user-name">Profile</span>
            </Link>
          ) : (
            <Link to="/auth/login">
              <span className="user-name">Login</span>
            </Link>
          )}
        </div>
      </nav>

      {/* CSS in the same file */}
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1.5rem;
            background-color: #ffffff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .navbar-left {
            display: flex;
            align-items: center;
          }

          .logo {
            height: 40px;
            width: 40px;
            margin-right: 0.5rem;
          }

          .brand-name {
            font-weight: bold;
            font-size: 1.25rem;
            color: #333333;
          }

          .navbar-center {
            display: flex;
            gap: 1.5rem;
          }

          .nav-link {
            text-decoration: none;
            color: #555555;
            font-weight: 500;
            transition: color 0.2s;
          }

          .nav-link:hover {
            color: #007bff;
          }

          .navbar-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .user-name {
            font-weight: 500;
            color: #333333;
          }

          .user-avatar {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
};

export default Header;
