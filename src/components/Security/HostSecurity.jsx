import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './HostSecurity.css';'
import SEO from '../SEO';

const HostSecurity = () => {
  const sifyGreen = "#adff2f";

  return (

    <>
    <SEO 
        title="Host & Endpoint Security - Antivirus & EDR Integrations"
        description="Protect virtual compute nodes and endpoints from localized threat activity through continuous behavioral monitoring."
        keywords="host security endpoint detection response server file protection"
        url="https://jprhosting.in/security-services/host-security"
      />
    
    <div style={{ fontFamily: 'Segoe UI, sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. Hero Banner - Ref: Screenshot 2026-05-14 at 3.53.42 PM.jpg */}
      <section className="position-relative text-white" style={{ minHeight: '400px', backgroundColor: '#1a2a40' }}>
        <img 
          src="/assets/img/cloud.webp" 
          alt="Breach Protection" 
          className="position-absolute w-100 h-100" 
          style={{ objectFit: 'cover', opacity: '0.4' }}
        />
        <div className="container position-relative d-flex align-items-center" style={{ minHeight: '400px' }}>
          <div className="col-lg-7">
            <h1 className="fw-bold display-5" style={{ color: sifyGreen }}>
              Enabling breach protection for workloads, containers, and Kubernetes
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Host Security Intro & Flow - Ref: Screenshot 2026-05-14 at 3.53.48 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Host Security Services: Enterprise-scale endpoint threat monitoring and protection</h2>
              <p className="text-muted small">
                The growing popularity of remote work often results in more threats to the endpoint... Host Security is the <strong>critical last line of defense</strong> in preventing cyber-attacks.
              </p>
              <p className="text-muted small mt-3">
                JPRHosting’s Host Security Services provide visibility on the endpoint runtime performance and protection to secure enterprise-wide workloads comprising containers, and Kubernetes...
              </p>
              <div className="mt-4 opacity-25 d-flex gap-2">
                {[...Array(12)].map((_, i) => <span key={i} style={{fontSize: '10px'}}>●</span>)}
              </div>
            </div>

            {/* Managed Services Workflow Diagram */}
            <div className="col-lg-7 mt-5 mt-lg-0">
               <img src="/assets/img3/Host-Security.svg" className="img-fluid" alt="Data security diagram" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Grid - Ref: Screenshot 2026-05-14 at 3.53.54 PM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Key Features</h3>
          <div className="row g-4">
            {[
              "Monitor, collect and analyze activity data from endpoints, containers, and Kubernetes that could indicate a threat",
              "Automatically respond to identified threats to remove or contain them and notify security personnel",
              "Machine-learning classification to detect zero-day threats in near-real-time and prevent data exfiltration",
              "Integrated firewall to block hostile network attacks",
              "Insider threat protection to safeguard against unintentional and malicious actions",
              "Centralized endpoint management platform to improve visibility and simplify operations"
            ].map((feature, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white p-4 h-100 shadow-sm border-start border-4" style={{ borderColor: sifyGreen }}>
                  <p className="mb-0 fw-bold text-center" style={{ fontSize: '13px' }}>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Purple Gradient) - Ref: Screenshot 2026-05-14 at 3.54.00 PM.jpg */}
      <section className="py-5 text-white" style={{ background: '#2e0a3d', backgroundImage: 'linear-gradient(45deg, #1a0525 0%, #3d0d4f 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 border-end border-secondary border-opacity-25">
              <h3 className="fw-bold">Why customers choose <span style={{ color: sifyGreen }}>JPRHosting</span></h3>
            </div>
            <div className="col-md-9">
              <div className="row g-4 ps-md-4">
                {[
                  "JPRHosting security consultants have multi-vendor product expertise in multiple technology areas and across industries",
                  "OEM agnostic partner with expertise in implementation & management of multi-brand security control technologies & products",
                  "Protecting and managing 13000+ endpoints with next-gen endpoint security managed services",
                  "Delivering end-to-end managed services leveraging leading platforms and tools"
                ].map((reason, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="ps-3 border-start border-2 h-100" style={{ borderColor: sifyGreen }}>
                      <p className="small opacity-75">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default HostSecurity;