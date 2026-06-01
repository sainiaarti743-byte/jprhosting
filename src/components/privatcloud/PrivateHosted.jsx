import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';
import SEO from '../SEO';

const PrivateHosted = () => {
  const privateCloudSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hosted Private Cloud Server",
    "description": "Completely isolated secure computing resources built on private clusters with root panel controls.",
    "brand": { "@type": "Brand", "name": "JPRHosting" }
  };
  return (
    <>
     <SEO 
        title="Secure Hosted Private Cloud Solutions"
        description="Get full control and absolute privacy with JPRHosting Private Hosted Cloud. Fully customized computing clusters for high compliance requirements."
        keywords="private cloud hosting, dedicated private cloud, secure hosting India"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services/hosted-private-cloud"
      />

      <div className="cloud-page" style={{ backgroundColor: '#f8f9fa' }}>

        {/* SECTION 1: Hero & Intro (Based on Screenshot 2026-05-13 at 9.06.58 AM.jpg) */}
        <section className="hero-section text-white d-flex align-items-center"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/digital-L4-banner.jpg') center/cover",
            height: '350px',
            padding: '0 5%'
          }}>
          <div className="container py-4">
            <h1 className="fw-bold" style={{ color: '#c6e217' }}>Hosted Private Cloud Services</h1>
            <h2 className="h3 mb-4">For Secure & Scalable Cloud Infrastructure</h2>
            <button className="btn rounded-pill px-4 fw-bold" style={{ backgroundColor: '#c6e217', color: '#000' }}>Contact Us</button>
          </div>
        </section>

        <section className="intro-section py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="p-4 rounded-circle d-flex justify-content-center align-items-center" style={{ backgroundColor: '#c6e217', width: '100%', height: '500px' }}>
                  <img src="/assets/img/Mask-Group-1.png" alt="Cloud Icon" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-7 ps-md-5">
                <h2 className="fw-bold mb-3">Hosted Private Cloud Services: Deploy instantly and reduce your TCO</h2>
                <p className="text-muted">JPRHosting CloudInfinit hosted private cloud offers ready-to-use compute instances on a robust, dedicated, on-demand and scalable platform...</p>
                <p className="text-muted">Managed by JPRHosting's <strong>24x7-available cloud experts</strong> and intelligent, state-of-the-art management platform...</p>
                <div className="mt-4 d-flex gap-2">
                  {[...Array(20)].map((_, i) => <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Highlights (Based on Screenshot 2026-05-13 at 9.07.10 AM.png) */}
        <section className="highlights-section py-5">
          <div className="container-fluid">
            <h2 className="fw-bold mb-4">Highlights</h2>
            <div className="row g-3">
              {[
                "Instant, real-time automated deployment of VMs",
                "Highly scalable and resilient",
                "Usage-based monthly or annual billing",
                "Reliable service and strong SLA",
                "24x7 customer support via email or phone",
                "Lower total cost of ownership (TCO)",
                "Gen-5 intelligent cloud management platform",
                "Flexibility to choose the right cloud model"
              ].map((text, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="bg-white p-3 d-flex align-items-center h-100 shadow-sm" style={{ borderLeft: '6px solid #c6e217' }}>
                    <span className="fw-bold small text-dark">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Services Grid (Based on Screenshot 2026-05-13 at 9.07.25 AM.jpg) */}
        <section className="services-grid py-5">
          <div className="container-fluid">
            <h2 className="fw-bold mb-4">Hosted private cloud services</h2>
            <div className="row g-4">
              {serviceData.map((service, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px', borderBottom: '4px solid #c6e217' }}>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <ul className="list-unstyled">
                      {service.features.map((f, i) => <li key={i} className="small text-muted mb-2">- {f}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Infinite Possibilities (Based on Screenshot 2026-05-13 at 9.07.37 AM.jpg) */}
        <section className="dark-possibilities py-5 text-white" style={{ backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at 50% 50%, #222 0%, #000 100%)' }}>
          <div className="container py-4">
            <h2 className="fw-bold mb-2">Infinite possibilities with JPRHosting CI</h2>
            <p className="mb-5">Cloud Leadership Across Industries</p>
            <div className="row g-4">
              {[
                "Decade-plus experience of managing and migrating 250+ cloud customers in India",
                "Holistic multi cloud approach across public, private and hybrid",
                "On-premise-like experience for your cloud workloads",
                "Assured cost-effectiveness for predictable loads",
                "Single point of ownership across all digital-led IT infrastructure",
                "Outcome-based service models enable industries to relate with their business"
              ].map((text, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="bg-white text-dark p-4 rounded h-100 d-flex align-items-center justify-content-center text-center shadow">
                    <p className="m-0 small fw-medium">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQs (Based on Screenshot 2026-05-13 at 9.07.47 AM.jpg) */}
        <section className="faq-section py-5">
          <div className="container-fluid">
            <h2 className="fw-bold mb-4">FAQs</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button text-white" style={{ backgroundColor: '#4a4a4a' }}>
                    — What is a Hosted Private Cloud?
                  </button>
                </h2>
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body bg-white py-4">
                    <p className="small m-0">A Hosted Private Cloud is a cloud computing environment dedicated to a single organization, providing enhanced privacy, control, and security compared to shared cloud environments...</p>
                  </div>
                </div>
              </div>
              {[
                "What are the benefits of using JPRHosting CloudInfinit Hosted Private Cloud?",
                "How does JPRHosting ensure the security of its Hosted Private Cloud?",
                "Can I integrate my existing IT infrastructure with the JPRHosting Hosted Private Cloud?",
                "What kind of support does JPRHosting provide?",
                "What is Private Cloud?"
              ].map((q, i) => (
                <div className="accordion-item border-0 mb-2 border-bottom" key={i}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      + {q}
                    </button>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const serviceData = [
  { title: "Compute-as-a-Service", features: ["Customizable compute instances", "On-demand and ubiquitous", "Scalable and elastic", "Pay as per need"] },
  { title: "Storage-as-a-Service", features: ["Need-based storage solution", "Information-focused delivery", "Unified monitoring", "24*7 professional management"] },
  { title: "Network-as-a-Service", features: ["Create network architecture", "Create multiple layers- web, app, DB", "Clustering/grouping of servers"] },
  { title: "Security-as-a-Service", features: ["Carrier-grade UTM infrastructure", "Firewall & SSL", "Vulnerability Assessment", "DDoS protection"] },
  { title: "Platform-as-a-Service", features: ["Environment ready to deploy", "Services offered across OS, DB", "Middleware management"] },
  { title: "Backup-as-a-Service", features: ["Data backup and restore", "Remote data backup", "Synchronous protect", "Disaster protect"] }
];

export default PrivateHosted;