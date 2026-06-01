import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './CloudSecurity.css';
import SEO from '../SEO';

const CloudSecurity = () => {
  return (
    <>
    <SEO 
        title="Cloud Security - Host Isolation & IAM Audits"
        description="Secure public and private environments from cloud misconfigurations through continuous posture management toolsets."
        keywords="cloud security solutions posture management access isolation systems"
        url="https://jprhosting.in/security-services/cloud-security"
      />
  
    <div className="cloud-security-page">



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
 

      {/* SECTION 2: HEXAGON CONTENT (Based on Screenshot 2026-05-14 at 3.51.50 PM.jpg) */}
      <section className="hexagon-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Advanced cloud security service offerings for uninterrupted operations</h2>
              <p className="text-muted">Public cloud does not have clear perimeters. It becomes challenging to protect when adopting modern cloud approaches...</p>
              <p><strong>JPRHosting's Cloud Security Managed Services</strong> address these challenges by enabling Cloud Security Posture Management...</p>
              <div className="dot-pattern mt-4"></div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
               <img src="/assets/img3/Cloud-Security.svg" alt="Tech" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY SERVICES (Based on Screenshot 2026-05-14 at 3.51.58 PM.jpg) */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="mb-5">Key Services</h2>
          <div className="row g-4">
            {[
              { title: "Secure Access Service Edge (SASE)", desc: "JPRHosting's SASE services push security and access closer to users..." },
              { title: "Cloud Security Posture Management (CSPM)", desc: "Mitigate cloud infrastructure risks, and get comprehensive visibility..." },
              { title: "Cloud Workload Protection Platform (CWPP)", desc: "JPRHosting's CWPP is a server workload protection system..." },
              { title: "Cloud Access Security Broker (CASB)", desc: "JPRHosting's CASB services allow your enterprise to attain complete cloud..." },
              { title: "Secure Web Gateway", desc: "Prevent unsecured internet traffic from entering your organization..." },
              { title: "Zero Trust Network Access", desc: "Reduce the risk of data loss or sabotage by minimizing privileged access..." }
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-card">
                  <div className="service-icon mb-3"></div> {/* Replace with actual icons */}
                  <h6>{service.title}</h6>
                  <p className="small text-muted">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE (Based on Screenshot 2026-05-14 at 3.52.05 PM.jpg) */}
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

export default CloudSecurity;