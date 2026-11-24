
import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home">

      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at amazing prices!</p>
        <button>Shop Now</button>
      </header>

      <section className="categories">
        <h2>Our Categories</h2>

        <div className="category-list">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Accessories</div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

export default Home;