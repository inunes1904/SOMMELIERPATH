import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/configuracao" style={styles.navLink}>Configuração</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/avaliacao" style={styles.navLink}>Avaliação</Link>
        </li>
        <li style={styles.navItem}>
          <button onClick={onLogout} style={styles.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#007bff',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  logoutButton: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Navbar;
