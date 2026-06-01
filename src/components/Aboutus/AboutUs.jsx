import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const AboutUs = () => {
  const limeGreen = "#adff2f";

  const coreValues = [
    "Put customers' needs first", "Be accountable", 
    "Treat others with dignity", "Be action oriented",
    "Have the courage to confront issues", 
    "Always remember that you are part of the JPRHosting team",
    "Protect JPRHosting’s interest always"
  ];

  const services = [
    { title: "Cloud Servers", desc: "High-performance cloud hosting with scalability and flexibility to meet your growing needs." },
    { title: "Dedicated Servers", desc: "Full control and maximum security with dedicated server solutions tailored to your requirements." },
    { title: "VPS Hosting", desc: "Flexible and scalable VPS hosting for businesses looking to expand." },
    { title: "Data Center", desc: "Secure and reliable data center services with state-of-the-art infrastructure." }
  ];

  const highlights = [
    { title: "Reliability", desc: "99.9% uptime guarantee, ensuring your website is always online." },
    { title: "Security", desc: "Advanced security measures to protect your data and applications." },
    { title: "Scalability", desc: "Solutions designed to grow with your business." },
    { title: "Support", desc: "24/7 expert support team to help you whenever you need it." }
  ];

  return (

    <>
    <SEO title="About Us - Enterprise Server Infrastructure Since 2011" description="Learn about JPRHosting's history. Providing high-availability shared services and enterprise cloud setups since 2011." keywords="about JPRHosting company profile cloud infrastructure history" url="https://jprhosting.in/about-us" />
  
    <div className="about-page">
      
      {/* 1. Hero Banner */}
      <section className="position-relative d-flex align-items-center" style={{ height: '400px', backgroundColor: '#000' }}>
        <div className="position-absolute w-100 h-100" style={{ 
          backgroundImage: `url('/assets/banner/data-center-integration-services.jpg')`, 
          backgroundSize: 'cover', opacity: 0.6 
        }}></div>
        <div className="container position-relative text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ color: limeGreen }}>
            Driving Business Transformation <br/> Across Industries
          </h1>
          <div className="d-flex align-items-center">
            <div style={{ width: '4px', height: '30px', backgroundColor: limeGreen, marginRight: '15px' }}></div>
            <p className="h5 mb-0">Your Partner For Digital Business Infrastructure</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: About JPRHosting & Our Story (Split Layout) */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">About JPRHosting</h2>
              <div className="mb-4" style={{ width: '60px', height: '3px', backgroundColor: limeGreen }}></div>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                Welcome to JPRHosting, a leading provider of web hosting solutions dedicated to empowering businesses and individuals to succeed online. With a strong focus on reliability, security, and scalability, we've built a reputation for delivering exceptional hosting services that meet the evolving needs of our clients.
              </p>
              <div className="p-4 mt-4 border-start border-4 rounded-end" style={{ borderColor: limeGreen, backgroundColor: '#f8f9fa' }}>
                <h5 className="fw-bold mb-2">Our Mission</h5>
                <p className="text-muted mb-0 small">
                  To provide exceptional web hosting solutions that empower our clients to succeed online, while delivering unparalleled service and support.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <div className="mb-4" style={{ width: '60px', height: '3px', backgroundColor: limeGreen }}></div>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                Founded with a passion for technology and innovation, JPRHosting has grown into a trusted name in the web hosting industry. Our team of experts is committed to providing top-notch services that exceed expectations.
              </p>
              <img src="/assets/img/cloud.webp" className="img-fluid rounded shadow-sm mt-3" alt="Our Story" style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Services */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">High-performance hosting solutions tailored to your business needs</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-3">
                <div className="card h-100 border-0 shadow-sm p-4 text-center btn-outline-light">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '50px', height: '50px', backgroundColor: '#e9ecef' }}>
                    <span className="fw-bold" style={{ color: '#000' }}>{index + 1}</span>
                  </div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="text-muted small mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Why Choose JPRHosting */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose JPRHosting?</h2>
            <p className="text-muted">We offer reliability and support that you can always rely on</p>
          </div>
          <div className="row g-4">
            {highlights.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="p-4 border rounded h-100 text-center" style={{ borderStyle: 'dashed !important' }}>
                  <h5 className="fw-bold text-success mb-2">✓ {item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Philosophy Intro */}
   

      {/* NEW SECTION: Get Started with JPRHosting (CTA Banner) */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: '#111' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Get Started with JPRHosting </h2>
          <p className="mx-auto text-light mb-4" style={{ maxWidth: '600px' }}>
            Ready to take your business to the next level? Explore our services and let us help you find the perfect hosting solution for your needs.
          </p>
          <button className="btn btn-lg px-5 fw-bold" style={{ backgroundColor: limeGreen, color: '#000' }}>
            Explore Our Services
          </button>
        </div>
      </section>

    </div>

      </>
  );
};

export default AboutUs;