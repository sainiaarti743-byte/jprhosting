import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrustedPartner from '../../page/TrustedPartner';
import CustomerStories from '../../page/CustomerStories';

import SEO from '../SEO';

const SecurityServices = () => {
  const limeColor = "#adff2f";

  return (

    <>
   <SEO 
        title="Managed Cybersecurity Solutions & Network Shielding"
        description="Protect critical company databases from active zero-day system vectors with advanced automated corporate defenses."
        keywords="cybersecurity services India, network security company, threat defense"
        url="https://jprhosting.in/security-services"
      />
    
 
    <div className="network-services-page" style={{ color: '#333' }}>

   {/* 1. Hero Section  */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">security Infrastructure & Application Managed Services</h1>
          <p className="mb-0 border-start border-warning border-4 ps-3">Drive innovation, agility, and security within your business</p>
        </div>
      </section>


      
      {/* 1. Streamline Operations Hero - Ref: Screenshot 2026-05-14 at 2.13.49 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Streamline Operations with Network Services</h2>
              <p className="small mb-3">
                The rapid proliferation of cloud and SaaS applications, enterprise mobility, and digital business models has 
                triggered a transformation in the network architecture, to become more agile, performance-oriented, and secure.
              </p>
              <p className="small">
                With over 2 decades of experience in managing business-critical networks, JPRHosting offers a range of infrastructure, 
                networking, and automation skills, along with the right tools, processes, and capabilities to help enterprises 
                devise a <strong>future-ready network strategy</strong>, integrate and connect to any cloud, and <strong>consolidate and manage complex networks</strong>.
              </p>
              <div className="dot-pattern mt-4 text-muted opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
            <div className="col-md-6 text-center">
              {/* This represents the 3D isometric graphic in the screenshot */}
              <img src="/assets/img3/Security-1.svg" alt="Network Transformation Graphic" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

 <TrustedPartner/>

      {/* 3. Service Offerings (Icon Grid) - Ref: Screenshot 2026-05-14 at 2.14.13 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-5">
            {[
              { title: "Enterprise Network Connectivity", desc: "Connecting geographically dispersed businesses across India and the world" },
              { title: "Managed Network Services", desc: "Flexible monitoring and management of IT & network infrastructure to save cost and drive efficiencies" },
              { title: "SD-WAN", desc: "Enabling agility through software-defined infrastructure, security, and app acceleration with single-pane network visibility" },
              { title: "Network Transformation Services", desc: "Increase network capacity and future-readiness using innovative technologies that boost efficiency" },
              { title: "Unified Communication & Collaboration Services", desc: "Enhance employee productivity by streamlining workflows using digital collaboration solutions" },
              { title: "JPRHosting OnNet", desc: "Enhance employee productivity by streamlining workflows using digital collaboration solutions across multiple communication domains" }
            ].map((service, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="mb-3">
                   <img src="" alt="icon" className="mb-3" />
                   <h6 className="fw-bold">{service.title}</h6>
                   <p className="text-muted small">{service.desc}</p>
                   <button className="btn btn-dark btn-sm rounded-pill px-3" style={{ fontSize: '0.7rem' }}>Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Customers Choose (Abstract Background) - Ref: Screenshot 2026-05-14 at 2.14.22 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(to right, #000, #001f3f)', 
        backgroundImage: 'url("https://via.placeholder.com/1200x400")', // Replace with fiber optic line texture
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { title: "Pioneering network", desc: "India’s first and largest MPLS network by connections – 3,700+ PoPs across 1,600 towns" },
              { title: "Trusted partner", desc: "Implementing and managing business-critical, complex networks of national importance for 700+ enterprises" },
              { title: "Low latency", desc: "Low latency cloud and DC-ready network to support your digital transformation pursuits" },
              { title: "Agile and secure", desc: "Agility through software-defined infrastructure, app acceleration, and network resiliency" },
              { title: "Managed Network Services", desc: "World-class service delivery platform, network agnostic, automation with proactive monitoring" },
              { title: "Continuous Innovation", desc: "Deploy state-of-the-art technologies by virtue of SD-WAN and SASE to improve network efficiency" }
            ].map((box, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.8)', borderLeft: `1px solid ${limeColor}` }}>
                  <h6 style={{ color: limeColor }}>{box.title}</h6>
                  <p className="small opacity-75">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerStories/>

      {/* 5. GTM Partners - Ref: Screenshot 2026-05-14 at 2.14.29 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#efefef' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h4 className="fw-bold">Our GTM partners</h4>
              <p className="small text-muted">Our strategic partners help us deliver unmatched business value and a unique experience.</p>
              <div className="dot-pattern text-muted opacity-25" style={{ letterSpacing: '8px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
            <div className="col-md-8">
              <div className="row g-4 align-items-center text-center">
                {/* Simplified logo placeholders */}
                {["CISCO", "HPE Aruba", "VERSA", "FORTINET", "ciena", "NOKIA", "netskope", "FAT Pipe", "Juniper"].map((logo, idx) => (
                  <div className="col-3" key={idx}>
                    <span className="fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>{logo}</span>
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

export default SecurityServices;