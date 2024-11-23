import React from 'react';
import Login from './components/Login';

const App = () => {
  return (
    <div style={styles.title}>
      <h1>SOMMELIER APP</h1>
      <Login />
    </div>
  );
};


const styles = {
  title: {
    textAlign: 'center',
  },

};
export default App;

