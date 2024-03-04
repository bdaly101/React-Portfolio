
import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', padding: '20px' }}>
      <p>Find me on:</p>
      <a href="https://github.com/bdaly101" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.svg" alt="GitHub" style={{ width: '24px', height: '24px' }} />
      </a>
      <a href="https://www.linkedin.com/in/brendan-daly-a7a481278/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', color: 'white' }} />
      </a>
    </footer>
  );
}

export default Footer;

