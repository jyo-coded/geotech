import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Geotech Geospatial</h1>
        <p>
          Your trusted partner for complete IT solutions related to Geospatial Concepts. 
          We provide cutting-edge technology and expertise to help you make informed decisions.
        </p>
        <Link to="/about-us" className="btn-primary">
          Learn More About Us
        </Link>
      </section>

      {/* Services Section */}
      <section className="content-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>GIS Solutions</h3>
            <p>
              Comprehensive Geographic Information Systems solutions for data analysis, 
              mapping, and spatial decision-making processes.
            </p>
          </div>
          <div className="service-card">
            <h3>Remote Sensing</h3>
            <p>
              Advanced remote sensing technologies for monitoring, surveying, and 
              environmental analysis using satellite and aerial imagery.
            </p>
          </div>
          <div className="service-card">
            <h3>Spatial Analytics</h3>
            <p>
              Powerful spatial analysis tools and techniques to extract meaningful 
              insights from complex geospatial datasets.
            </p>
          </div>
          <div className="service-card">
            <h3>Consulting Services</h3>
            <p>
              Expert consultation on geospatial projects, technology implementation, 
              and strategic planning for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="content-section">
        <h2>Why Choose Geotech Geospatial?</h2>
        <p>
          With years of experience in the geospatial industry, we combine technical expertise 
          with innovative solutions to deliver results that exceed expectations. Our team of 
          skilled professionals is dedicated to providing personalized service and support 
          throughout your project lifecycle.
        </p>
        <p>
          Whether you're looking to implement new GIS systems, analyze spatial data, or 
          develop custom geospatial applications, we have the knowledge and tools to help 
          you succeed in today's data-driven world.
        </p>
      </section>
    </div>
  );
}
export default Home;