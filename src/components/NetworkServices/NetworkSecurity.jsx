import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const NetworkSecurity = () => {
  const limeColor = "#adff2f";

  return (

    <>
    <SEO 
        title="Network Security - Next-Gen Firewall (NGFW) Rules"
        description="Incorporate inline deep packet checking structures and robust DDoS blockades directly over company connection interfaces."
        keywords="network security systems next-generation firewalls DDoS protection tools"
        url="https://jprhosting.in/network-services/managed-network-services/network-security-services"
      />
   
    <div className="network-security-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. Hero Section - Ref: Screenshot 2026-05-14 at 2.19.52 PM.jpg */}
     <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: limeColor }}>
            Advanced Network Security Services (NSS) for Maximum Protection
          </h2>
          <div className="d-flex align-items-center mb-3">
            <div style={{ width: '4px', height: '40px', backgroundColor: limeColor, marginRight: '15px' }}></div>
            <p className="mb-0 small">
              Enhance Protection with World-Class Network Security Services – Deploy<br />
              advanced firewalls, intrusion prevention, and cryptographic security solutions.
            </p>
          </div>
          <button className="btn rounded-pill px-4 fw-bold mt-2" style={{ backgroundColor: limeColor, color: '#000', fontSize: '0.8rem' }}>
            Get in touch
          </button>
        </div>
      </section>

      {/* 2. Intro Content - Ref: Screenshot 2026-05-14 at 2.19.52 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/assets/img3/Network-Service-Spotlight.png" alt="Security Illustration" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Enterprise-Grade Network Security Services: Protect Against Cyber Threats</h3>
              <p className="small text-muted mb-3">
                In today's world, point solutions are unable to safeguard the interests of organizations due to the increasing complexities in the business environment, including mobility, blurred endpoints, and increasing cloud adoption.
              </p>
              <p className="small text-muted">
                JPRHosting has a comprehensive, overarching view of the data paths from the end-user to the clouds, machines to data centers, and a business view of what the network enables. Our Network Security Solutions are designed to <strong>protect data through its entire transit, whether inbound or outbound</strong>, whether at the edge, over the internet, or over wireless networks.
              </p>
              <div className="dot-pattern mt-4 opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SASE-ready Info - Ref: Screenshot 2026-05-14 at 2.20.01 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
              <h3 className="fw-bold mb-4">JPRHosting's SASE-ready Network Security Services</h3>
              <p className="small text-muted mb-3">Internet threats to systems and data can impede business innovation, limit productivity and damage compliance efforts. Our Managed Security Services benefit you in multiple ways.</p>
              <p className="small text-muted">The comprehensive network security services from JPRHosting include network security monitoring, anti-malware, anti-spam, IP filtering, network attack detection and prevention, and devising access control policies.</p>
            </div>
            <div className="col-md-6">
              <img src="/assets/img3/network-security-2.jpg" alt="SASE Ready" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Features Grid - Ref: Screenshot 2026-05-14 at 2.20.08 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-5">Key Features of Our Network Security Solutions</h3>
          <div className="row g-4">
            {[
              "Reduce costs and manage regulatory compliance",
              "Protect endpoints, applications, systems, and networks",
              "Use best practices to deliver an expertly managed network",
              "Eliminate manual data analysis and reduce IT complexity",
              "OEM-agnostic partner with expertise in implementation & management of multibrand security control technologies & products",
              "Delivering end-to-end managed services leveraging leading platforms and tools",
              "JPRHosting security consultants have multi-vendor product expertise in multiple technology areas and across industries",
              "Single-pane-of-glass visibility of security posture"
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100 border-start border-4 shadow-sm" style={{ borderColor: limeColor, backgroundColor: '#fff' }}>
                  <p className="small fw-bold mb-0">{feature}</p>
                </div>
              </div>
            ))}
            <div className="col-md-4 d-flex align-items-center justify-content-center">
               <div className="dot-grid text-muted opacity-25" style={{ letterSpacing: '8px' }}>
                 ••••••••••••<br />••••••••••••<br />••••••••••••
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Services (White Cards) - Ref: Screenshot 2026-05-14 at 2.20.16 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Key Services</h3>
          <div className="row g-4">
            {[
              { t: "Managed Firewall", d: "Firewall as a service with complete security policy management" },
              { t: "Clean Connect", d: "Protect the WAN connection of the organization with JPRHosting's managed firewall, web filtering and antivirus protection as a consolidated cloud service" },
              { t: "Roam Connect", d: "Securely connect remote users" },
              { t: "DDoS Protect", d: "Protect corporate IT assets from malicious attacks" },
              { t: "SD-WAN & SASE", d: "Secure multi-OEM, SD-WAN platform deployments with cloud-delivered security" }
            ].map((service, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderBottom: `4px solid ${[1, 4].includes(idx) ? '#5a6268' : limeColor}` }}>
                  <h6 className="fw-bold mb-3">{service.t}</h6>
                  <p className="small text-muted">{service.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose (Black Theme) - Ref: Screenshot 2026-05-14 at 2.20.23 PM.jpg */}
      <section className="py-5 text-white" style={{ background: '#000' }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}></span></h3>
          <div className="row g-3">
            {[
              { t: "Industry experience", d: "We are highly experienced in running complex mission-critical networks for over 20 years" },
              { t: "Deep engagement with OEMs", d: "Our partnership with technology OEMs as carrier, integrator, managed services provider and user makes us a one-stop network solutions provider" },
              { t: "Project implementation expertise", d: "We are experienced in large network integration projects with multi-service provider and hybrid cloud environments" },
              { t: "Network-agnostic managed services", d: "We offer managed services to all service provider networks through collaborative relationship with other providers" },
              { t: "Extensive operations support", d: "We have dedicated a significant number of resources for our field services and customer support" }
            ].map((box, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100 border rounded" style={{ borderColor: 'rgba(173, 255, 47, 0.4)' }}>
                  <h6 className="fw-bold" style={{ color: limeColor }}>{box.t}</h6>
                  <p className="small mt-3 opacity-75">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs - Ref: Screenshot 2026-05-14 at 2.20.30 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">FAQs</h3>
          <div className="accordion accordion-flush shadow-sm border rounded overflow-hidden">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-medium py-3" type="button">
                  — &nbsp; What is network security?
                </button>
              </h2>
              <div className="accordion-body p-4 border-bottom">
                <p className="small text-muted mb-0">
                  Network security is the practice of protecting computer networks from unauthorised access, misuse, or attacks. It involves tools and policies that ensure data confidentiality, integrity, and availability.
                </p>
              </div>
            </div>
            {[
              "What services are included in JPRHosting's Network Security offerings?",
              "How does JPRHosting's Network Security Services help in reducing costs and managing regulatory compliance?",
              "What expertise does JPRHosting bring to Network Security?",
              "How does JPRHosting's Network Security Services enhance visibility and control?",
              "What makes JPRHosting's Network Security Services stand out?"
            ].map((q, i) => (
              <div className="accordion-item border-bottom" key={i}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed py-3 small" type="button">
                    + &nbsp; {q}
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

export default NetworkSecurity;