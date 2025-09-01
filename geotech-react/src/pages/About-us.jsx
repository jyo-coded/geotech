import React from "react";

export default function About() {
  return (
    <div className="page-container">
      {/* Hero Image Section */}
      <section className="hero-image">
        <img 
          src="/images/logo.jpg" 
          alt="Geotech Geospatial - What Belongs Where" 
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>About Geotech Geospatial</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="content-section">
        <h2>Our Company</h2>
        <p>
          Geotech Geospatial is a premier provider of comprehensive IT solutions 
          specializing in geospatial concepts and technologies. Founded with the 
          vision of bridging the gap between complex spatial data and practical 
          business applications, we have established ourselves as a trusted partner 
          for organizations across various industries.
        </p>
        <p>
          Our expertise spans across Geographic Information Systems (GIS), remote 
          sensing, spatial analysis, and custom software development. We pride 
          ourselves on delivering cutting-edge solutions that empower our clients 
          to make informed decisions based on spatial intelligence.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="content-section">
        <h2>Our Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To provide innovative, reliable, and scalable 
          geospatial IT solutions that enable our clients to harness the power of 
          spatial data for strategic decision-making and operational excellence.
        </p>
        <p>
          <strong>Vision:</strong> To be the leading global provider of geospatial 
          technology solutions, recognized for our expertise, innovation, and 
          commitment to client success in the digital transformation of spatial 
          data management.
        </p>
      </section>

      {/* Our Expertise */}
      <section className="content-section">
        <h2>Our Expertise</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>GIS Development</h3>
            <p>
              Custom GIS application development, system integration, and 
              database management solutions tailored to your specific needs.
            </p>
          </div>
          <div className="service-card">
            <h3>Spatial Analysis</h3>
            <p>
              Advanced spatial modeling, statistical analysis, and predictive 
              analytics to unlock insights from your geospatial data.
            </p>
          </div>
          <div className="service-card">
            <h3>Remote Sensing</h3>
            <p>
              Satellite imagery processing, change detection, and environmental 
              monitoring using state-of-the-art remote sensing technologies.
            </p>
          </div>
          <div className="service-card">
            <h3>Consulting</h3>
            <p>
              Strategic consulting, project management, and technical support 
              to ensure successful implementation of geospatial initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="content-section">
        <h2>Our Values</h2>
        <p>
          At Geotech Geospatial, we are driven by a commitment to excellence, 
          innovation, and client satisfaction. Our core values include:
        </p>
        <ul style={{ 
          textAlign: 'left', 
          maxWidth: '600px', 
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#64748b'
        }}>
          <li><strong>Innovation:</strong> Continuously exploring new technologies and methodologies</li>
          <li><strong>Quality:</strong> Delivering solutions that meet the highest standards</li>
          <li><strong>Reliability:</strong> Building long-term partnerships through consistent performance</li>
          <li><strong>Expertise:</strong> Maintaining deep knowledge in geospatial technologies</li>
          <li><strong>Client Focus:</strong> Prioritizing client needs and success in everything we do</li>
        </ul>
      </section>
    </div>
  );
}