import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
        <ul className="footer-links">
          <li><a href="/about">Biz haqimizda</a></li>
          <li><a href="/contact">Boglanish</a></li>
          <li><a href="/privacy">Maxfiylik siyosati</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
