import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DataSecurity.css';
import SEO from '../SEO';

const DataSecurity = () => {
  return (

    <>
    <SEO 
        title="Data Security - AES-256 Bit Storage Encryption"
        description="Ensure complete database confidentiality using strong structural encryption states for data at rest and in transit."
        keywords="data encryption services enterprise record security masking solutions"
        url="https://jprhosting.in/security-services/data-security"
      />
   
    <div className="data-security-page">
 {/* 1. Hero Section  */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/Digital_app-modernization.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">security Infrastructure & Application Managed Services</h1>
          <p className="mb-0 border-start border-warning border-4 ps-3">Drive innovation, agility, and security within your business</p>
        </div>
      </section>

      {/* SECTION 2: ADVISORY (Screenshot 2026-05-14 at 3.52.25 PM.jpg) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Expert-level data protection advisory and implementation services</h2>
              <p className="text-muted small">Cyber-criminals are looking to take advantage of distracted remote working employees...</p>
              <p className="small">JPRHosting's Data Protection offerings provide <strong>advisory and implementation services</strong> to safeguard your organization's critical data...</p>
              <div className="dot-grid mt-4"></div>
            </div>
            <div className="col-lg-7">
              {/* Illustration Placeholder - Using Bootstrap Flex for the diagram layout */}
              <div className="d-flex justify-content-center align-items-center diagram-container">
                 <img src="/assets/img3/Data-Security.svg" className="img-fluid" alt="Data security diagram" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY SERVICES (Screenshot 2026-05-14 at 3.52.31 PM.png) */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Key Services</h2>
          <div className="service-banner-box border-lime-top-bottom p-4 shadow-sm rounded-4">
            <div className="row text-center g-0">
              {[
                { title: "Data Discovery", desc: "Locating sensitive data using data discovery is the first step..." },
                { title: "Data Classification", desc: "To protect the valuable data discovered, organizations need to clasJPRHosting it..." },
                { title: "Data Encryption", desc: "Secure the data stored on your computers and USB flash drives..." },
                { title: "Data Loss Prevention", desc: "Quickly and easily gain visibility and control of your sensitive data..." }
              ].map((item, idx) => (
                <div className={`col-md-3 px-4 ${idx !== 3 ? 'border-end' : ''}`} key={idx}>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="small text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE (Screenshot 2026-05-14 at 3.52.37 PM.jpg) */}
        <section className="py-5" style={{ backgroundColor: '#000' }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c8e000' }}>JPRHosting</span></h2>
          <div className="row g-3">
            {[
              { t: "Advisory & migration expertise", d: "Comprehensive tool-based discovery and assessment. Experience in 200+ complex cloud migration projects." },
              { t: "Multi cloud management", d: "Providing better visibility and control while enabling cloud usage policy and maintaining governance." },
              { t: "Unified security", d: "Ensuring unified security and visibility on a single console with augmented controls and proactive threat monitoring." },
              { t: "Hybrid cloud-led digital infrastructure", d: "Offering cloud-adjacent data centers and GlobalCloudConnect to hyperscale CSPs along with JPRHosting Virtual Private Cloud." },
              { t: "IT modernization", d: "Cloud-agnostic digital infrastructure and value stream management solutions around DevSecOps and CI/CD." },
              { t: "Skills & certifications", d: "500+ certified cloud professionals, 150+ dedicated, highly skilled cloud engineering and security experts." }
            ].map((box, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 h-100" style={{ border: '1px solid #c8e00033', backgroundColor: '#0a0a0a' }}>
                  <h6 style={{ color: '#c8e000' }} className="fw-bold mb-3">{box.t}</h6>
                  <p className="small opacity-75 mb-0">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>

     </>
  );
};

export default DataSecurity;