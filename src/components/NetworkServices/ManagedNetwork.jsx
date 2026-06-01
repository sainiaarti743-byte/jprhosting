import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MangeSlider from './MangeSlider';
import SEO from '../SEO';

const ManagedNetwork = () => {
  const limeColor = "#adff2f";

  return (

    <>
    <SEO 
        title="Managed Network Optimization & Diagnostics"
        description="Complete round-the-clock remote link performance diagnostic reporting to isolate and bypass bottlenecks actively."
        keywords="managed networking system support infrastructure monitoring route fixes"
        url="https://jprhosting.in/network-services/managed-network-services"
      />
   <MangeSlider/>
    <div className="managed-network-page">

      
      
      {/* 1. Hero & Stats - Ref: Screenshot 2026-05-14 at 2.17.50 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Advanced Network Managed Services to amplify your business success</h2>
              <p className="small text-muted mb-3">
                Enterprises today need to invest heavily in continuously upskilling people, tools and technologies to support 
                the business and make it secure, reliable and agile. This often takes away time and money from their core business.
              </p>
              <p className="small text-muted mb-3">
                JPRHosting's integrated skillsets, processes, and tools save costs and drive efficiencies that are otherwise impossible 
                over a broad spectrum of areas.
              </p>
              <p className="small text-muted mb-4">
                We de-risk technology by <strong>minimizing Capex and Opex investments</strong> through our experience and expertise in 
                network managed services, empowering businesses to focus on their core functions and strategies.
              </p>
              <div className="dot-pattern opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
            <div className="col-lg-6">
              {/* Infographic representation of the stats timeline */}
              <img src="/assets/img3/Managed-Network-Services-1.svg" alt="Managed Network Stats" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 2.17.57 PM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Our Managed Network Service Offerings</h3>
          <div className="row g-5">
            <div className="col-md-6">
              <img src="" alt="NOC Icon" className="mb-3" />
              <h6 className="fw-bold">Managed NOC Services</h6>
              <p className="small text-muted mb-4">Simplifying the complexities of monitoring and management of the network with our robust global Network Operations Center (NOC) services.</p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm fw-bold">Know More</button>
            </div>
            <div className="col-md-6">
              <img src="" alt="Security Icon" className="mb-3" />
              <h6 className="fw-bold">Network Security Services</h6>
              <p className="small text-muted mb-4">Safeguarding the interests of organizations with our Network Security Solutions that are designed to protect data over the edge, internet, and network.</p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm fw-bold">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights - Ref: Screenshot 2026-05-14 at 2.18.03 PM.png */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h3 className="fw-bold mb-5">Highlights</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Network Operations Solution - Get more out of your network</h6>
              <p className="small text-muted">Transition network operations from an existing partner or in-house team to our specialists. JPRHosting addresses the complete spectrum of network operations - SLA, vendor, AMC management and NOC.</p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Network Consolidation and Operations Solution - Optimize your network</h6>
              <p className="small text-muted">Consolidate, optimize and protect your network investment by assessing against your current and future business needs for redundancy, security, flexibility, performance management and streamlining operations.</p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Network Transformation and Operations - Get Digital-Ready</h6>
              <p className="small text-muted">Overhaul your network with JPRHosting's end-to-end planning, implementation, monitoring and management services. Redesign, and re-engineer network architecture, while availing the benefits of SDN.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Dark Grid) - Ref: Screenshot 2026-05-14 at 2.18.09 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(to right, #000, #050a1f)', 
        backgroundImage: 'url("https://via.placeholder.com/1200x400")', // Texture placeholder
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h3>
          <div className="row g-0">
            {[
              { title: "Industry experience", desc: "We are highly experienced in running complex mission-critical networks for over 20 years" },
              { title: "Deep engagement with OEMs", desc: "Our partnership with technology OEMs as carrier, integrator, managed services provider and user makes us a one-stop network solutions provider" },
              { title: "Project implementation expertise", desc: "We are experienced in large network integration projects with multi-service provider and hybrid cloud environments" },
              { title: "Network-agnostic managed services", desc: "We offer network managed services to all service provider networks through collaborative relationships with other providers." },
              { title: "Extensive operations support", desc: "We have dedicated a significant number of resources for our field services and customer support" }
            ].map((box, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100 border border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                  <h6 className="mb-3" style={{ color: limeColor }}>{box.title}</h6>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs - Ref: Screenshot 2026-05-14 at 2.18.16 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">FAQs</h3>
          <div className="accordion accordion-flush shadow-sm border rounded overflow-hidden">
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-medium" type="button">
                  What are Managed Network Services?
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body p-4 bg-white">
                  <p className="small text-muted mb-0">
                    Managed Network Services involve outsourcing the management, monitoring, and maintenance of an organization's network infrastructure to a specialized service provider. This approach ensures optimal network performance, security, and reliability, allowing businesses to focus on their core operations.
                  </p>
                </div>
              </div>
            </div>
            {["What specific services does JPRHosting offer under Managed Network Services?", 
              "How does JPRHosting's Managed Network Services benefit businesses?", 
              "What industries have benefited from JPRHosting's Managed Network Services?", 
              "Why should businesses choose JPRHosting for Managed Network Services?"
            ].map((q, i) => (
              <div className="accordion-item border-top" key={i}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed py-3" type="button">
                    {q}
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

export default ManagedNetwork;