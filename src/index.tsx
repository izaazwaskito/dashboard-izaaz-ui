import React from 'react';

const Home = () => {
  // Styling inline
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url(/background.jpg)', // Pastikan gambar berada di folder public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparan hitam
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '30px',
  };

  const itemStyle: React.CSSProperties = {
    margin: '15px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Sedikit transparan untuk item
    padding: '20px',
    borderRadius: '10px',
  };

  const itemHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const itemTextStyle: React.CSSProperties = {
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={headingStyle}>Welcome to My Page</h1>
        <div style={itemStyle}>
          <h2 style={itemHeadingStyle}>Item 1</h2>
          <p style={itemTextStyle}>This is the first item.</p>
        </div>
        <div style={itemStyle}>
          <h2 style={itemHeadingStyle}>Item 2</h2>
          <p style={itemTextStyle}>This is the second item.</p>
        </div>
        <div style={itemStyle}>
          <h2 style={itemHeadingStyle}>Item 3</h2>
          <p style={itemTextStyle}>This is the third item.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
