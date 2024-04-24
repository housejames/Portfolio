import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Your Name © {new Date().getFullYear()}</span>
        {/* Add your social profile links here */}
      </div>
    </footer>
  );
};

export default Footer;
