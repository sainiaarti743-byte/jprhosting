import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const DigitalTrust  = () => {
  const sifyGreen = "#adff2f";

  // Ribbon data from Screenshot 2026-05-14 at 2.54.10 PM.jpg
  const statsRibbon = [
    { label: "Issued 15 Million+ Digital Signatures", color: "#e74c3c" },
    { label: "Deployed 200+ Hardware Security Modules (HSMs)", color: "#f1c40f" },
    { label: "Delivered HSM & PKI solution for India's 1st Smart City project", color: "#2ecc71" },
    { label: "Enabling paperless office for Govt., Banks & private enterprises", color: "#3498db" },
    { label: "Increases production speed; diminishing overhead expenses", color: "#2980b9" },
    { label: "Improves digital workflow and enhances storage space", color: "#7f8c8d" }
  ];

  return (
    <>
    <SEO 
        title="Digital Trust, Access Controls & Identity Management"
        description="Implement multi-factor authentication systems and secure validation routines across data touchpoints."
        keywords="digital trust access identification management token validation"
        url="https://jprhosting.in/integration-services/digital-trust-and-authentication-services"
      />
   
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
  <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container-fluid">
          <h1 className="display-5 fw-bold" style={{ color: '#d4e117', maxWidth: '700px' }}>
            Modernize and transform on-premise and cloud workloads with IT integration services
          </h1>
        </div>
      </section>


      
      {/* 1. Digital Authentication Intro - Ref: Screenshot 2026-05-14 at 2.54.10 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Digital authentication using secure and robust cloud infrastructure</h2>
              <p className="text-muted small">
                Modern enterprises have normalized work-from-home arrangements and accelerated the adoption of cloud... Traditional methods of physical or 'wet ink' signatures are rapidly being replaced by electronic and digital signatures.
              </p>
              <p className="text-muted small mt-3">
                As <strong>India's first Licensed Certifying Authority</strong>, JPRHosting helps organizations to authenticate digital identity and enable trust with secured connections.
              </p>
              <div className="mt-5 opacity-25 d-flex flex-wrap gap-2" style={{ maxWidth: '300px' }}>
                {[...Array(30)].map((_, i) => <span key={i} style={{fontSize: '10px'}}>●</span>)}
              </div>
            </div>

            <div className="col-lg-7 mt-4 mt-lg-0">
             <img src="/assets/img3/Digital-Trust-and-Authentication.svg" alt="Edge Assets" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Security Service Offerings - Ref: Screenshot 2026-05-14 at 2.54.13 PM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-4">
            {[
              { 
                title: "Authentication and Encryption", 
                desc: "End-to-end content, and device encryption, document rights management, and trusted messaging." 
              },
              { 
                title: "Data Security Solution", 
                desc: "Granular encryption, tokenization, and role-based access control for structured and unstructured data." 
              },
              { 
                title: "Transaction Security Solution", 
                desc: "Customized solutions to secure transactions over the internet or private networks, ranging from SSL to HSMs." 
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-2">
                  <div className="mb-3 fs-2 text-primary">🔒</div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted x-small mt-3" style={{ fontSize: '13px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose JPRHosting (Dark Grid) - Ref: Screenshot 2026-05-14 at 2.54.24 PM.jpg */}
      <section className="py-5 text-white" style={{ backgroundColor: '#050a1f', backgroundImage: 'radial-gradient(circle at top right, #0a1931, #050a1f)' }}>
        <div className="container">
          <h3 className="mb-5 fw-bold">Why customers choose <span style={{ color: sifyGreen }}>JPRHosting</span></h3>
          <div className="row g-0 border border-secondary">
            {[
              { 
                t: "End-to-end solution", 
                d: "Delivered through over two decades of experience deploying and managing CA systems in India." 
              },
              { 
                t: "Experience in integrating and implementing ERP systems", 
                d: "Understanding of PKI and security helps integrate DSC solutions to the existing enterprise framework." 
              },
              { 
                t: "Over 200 HSMs of Thales deployed", 
                d: "Across verticals, for different compliances like ADV, IRDA, and many others." 
              },
              { 
                t: "Rich partner network", 
                d: "Unparalleled support from JPRHosting's network of over 15,000+ partners." 
              }
            ].map((box, idx) => (
              <div className="col-md-6 border border-secondary" key={idx}>
                <div className="p-5 h-100">
                  <h5 className="fw-bold mb-3" style={{ color: sifyGreen }}>{box.t}</h5>
                  <p className="small opacity-75">{box.d}</p>
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

export default DigitalTrust ;