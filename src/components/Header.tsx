import React from 'react';
import rcLogo from '../assets/rc-logo.png';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#2121c9',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      position: 'relative',
      left: 0,
      right: 0
    }}>
      <img 
        src={rcLogo} 
        alt="Retailcompass Logo" 
        style={{
          height: '40px',
          marginLeft: '1rem'
        }}
      />
    </header>
  );
};

export default Header; 