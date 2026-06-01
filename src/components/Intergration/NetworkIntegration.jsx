import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';


const NetworkIntegration  = () => {
  return (
    <>
    <SEO 
        title="Complex Multi-Vendor Network Infrastructure Integration"
        description="Bridge disparate routing systems and firewall profiles into a synchronized corporate directory ecosystem."
        keywords="network integration solutions multi vendor infrastructure management"
        url="https://jprhosting.in/integration-services/network-integration-services"
      />
    
    <div className="landing-page">
      
      {/* 1. Hero Section (Screenshot 2026-05-14 at 2.54.35 PM.jpg) */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '400px',
          padding: '0 5%'
        }}>
        <div className="container-fluid">
          <h1 className="display-5 fw-bold" style={{ color: '#d4e117', maxWidth: '600px' }}>
            Building the backbone for digital transformation with Network Integration Services
          </h1>
        </div>
      </section>

      {/* 2. Intro Section (Screenshot 2026-05-14 at 2.54.41 PM.jpg) */}
      <section className="intro-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Network Integration Services to fast-track digital transformation</h2>
              <p className="text-muted">
                New-age networks must facilitate faster and safer modes of data transfer across data centers, 
                cloud, and edge devices. JPRHosting, with its <strong>software-defined programmable networking technology</strong>...
              </p>
              {/* Dot Grid Decoration */}
              <div className="dot-grid mt-4" style={{ opacity: 0.3 }}>
                {[...Array(3)].map((_, i) => (
                  <div key={i}>• • • • • • • • •</div>
                ))}
              </div>
            </div>
            <div className="col-md-6 text-center">
              {/* Is jagah aap image placement karenge */}
              <img src="/assets/img3/Network-integration-sptlight-img.svg" alt="Features" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Offerings (Screenshot 2026-05-14 at 2.54.48 PM.png) */}
      <section className="services-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="mb-5 fw-bold">Our service offerings</h2>
          <div className="row text-start">
            {[
              { title: "Edge Network Transformation", desc: "Agile and secure edge network built with enterprise-grade features" },
              { title: "Enterprise Network- WAN", desc: "Agile, resilient, and secure WAN networks" },
              { title: "Network Operations Center", desc: "Achieve operational efficiency and agility with real-time visibility and control" }
            ].map((service, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="service-icon mb-3" style={{ fontSize: '3rem', color: '#d4e117' }}>⚙️</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Screenshot 2026-05-14 at 2.54.56 PM.jpg) */}
      <section className="why-sify py-5 text-white" 
        style={{ background: "#050a1f url('abstract-bg.jpg') center/cover" }}>
        <div className="container">
          <h2 className="mb-5">Why customers choose <span style={{ color: '#d4e117' }}>JPRHosting</span></h2>
          <div className="row">
            {[
              { title: "Stability and flexibility", text: "Network solutions custom-built to deliver robust performance" },
              { title: "Simplistic solutions", text: "Flexible and can be molded in accordance with enterprise requirements" },
              { title: "Increasing productivity", text: "Unparalleled business flexibility and reduced operational costs" }
            ].map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderLeft: '2px solid #d4e117', height: '100%' }}>
                  <h5 style={{ color: '#d4e117' }}>{item.title}</h5>
                  <p className="small mb-0 mt-3">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Icons (Right Side) */}
      <div className="position-fixed end-0 top-50 translate-middle-y d-flex flex-column gap-2 pe-2" style={{ zIndex: 1000 }}>
        <div className="bg-success p-2 text-white">🎧</div>
        <div className="bg-success p-2 text-white">📞</div>
      </div>

    </div>

    </>
  );
};

export default NetworkIntegration;