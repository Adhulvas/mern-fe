  import React from 'react';
  import './Home.css'
  import banner from '../../assets/banner.png'

  function Home() {
    return (
      <div
        style={{
          height: '100vh',
          backgroundImage: `url(${banner})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="homepage"
      >
        <div className="overlay">
          <div className="content text-center text-white">
            <h1>Welcome to ShopEase</h1>
            <p>Your one-stop shop for everything you need!</p>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
