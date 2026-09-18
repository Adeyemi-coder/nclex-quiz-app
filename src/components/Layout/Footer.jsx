import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} NCLEX Clinical Master. All rights reserved.</p>
    </footer>
  );
}