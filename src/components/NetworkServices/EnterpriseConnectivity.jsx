import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const EnterpriseConnectivity = () => {
  const limeColor = "#adff2f";

  return (

    <>
    
   <SEO 
        title="Secure Corporate Wide Area Network (WAN) Systems"
        description="High-throughput point-to-point data pathways linking corporate main offices directly to global server systems safely."
        keywords="corporate connectivity WAN configurations private leased line data paths"
        url="https://jprhosting.in/network-services/enterprise-network-connectivity"
      />
    <div className="enterprise-network">

  <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/banner/digital-L4-banner.jpg') center/cover",
          height: '400px',
          padding: '0 5%'
        }}>
        <div className="container-fluid">
          <h1 className="display-5 fw-bold" style={{ color: '#d4e117', maxWidth: '600px' }}>
            Building the backbone for digital transformation with Network Integration Services
          </h1>
        </div>
      </section>


      
      {/* 1. Network Transformation (Hexagon Stats) - Ref: Screenshot 2026-05-14 at 2.14.50 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Transform your network connectivity with enterprise network services</h2>
              <p className="small text-muted">
                JPRHosting – a pioneer in Network Services since the beginning of the millennium – blankets India with one of the 
                largest IP Multiprotocol Label Switching (MPLS)-enabled tier-1 networks spanning more than 3,700+ points of presence (PoPs) in 1,600+ cities.
              </p>
              <p className="small text-muted mb-4">
                The <strong>fully meshed IPv6-ready JPRHosting network</strong> is built to support the move to fully digital business models, with 
                bandwidth services available to enterprises, content providers, over-the-top (OTT) providers, and other 
                network operators with speeds up to 100 Gbps throughout India.
              </p>
              <div className="dot-pattern opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
            <div className="col-lg-7">
               {/* This represents the hexagon infographic area */}
               <div className="d-flex flex-wrap justify-content-center gap-3">
                 <img src="/assets/img3/Enterprise-Network-Connectivity-1.svg" alt="Network Stats" className="img-fluid" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Offerings (Two-row Grid) - Ref: Screenshot 2026-05-14 at 2.14.58 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Our Enterprise Network Service Offerings</h3>
          <div className="row g-5">
            {[
              { title: "India VPN Services", desc: "With 3,700+ PoPs in India, and 9 global PoPs, we provide highly cost-effective end-to-end private VPN services to enterprises focusing on regular and mission-critical traffic" },
              { title: "Internet Services", desc: "Backed by industry-leading service level agreements (SLAs), we connect your business with secure and dependable internet service" },
              { title: "WAN Ethernet Services", desc: "High-capacity, low-latency, standards-based, and affordable connectivity to support data center and cloud connectivity requirements" },
              { title: "Global Cloud Connect", desc: "Enabling connectivity between an organization's premises and their cloud workloads, bypassing public internet over secure and deterministic network latency" },
              { title: "Global Site Connect", desc: "Seamless, secure, and scalable global network connectivity for your business" },
              { title: "Global Managed Internet Services", desc: "We cater to your internet connectivity needs across 150+ countries – from procurement and service delivery to 24x7 NOC helpdesk" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <img src="" alt="Service Icon" className="mb-3" />
                <h6 className="fw-bold">{item.title}</h6>
                <p className="small text-muted" style={{ lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose JPRHosting (Dark Fiber BG) - Ref: Screenshot 2026-05-14 at 2.15.05 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(to right, #050a1f, #001f3f)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Mocking the light trails background */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h3>
          <div className="row g-0">
            {[
              { title: "Enterprise first architecture", desc: "Highly resilient networks with 3-tier architecture across major Indian cities, supported by dual cable landing station, dual international gateways, dual PoPs in 7 cities and redundant backbone links" },
              { title: "State-of-the-art technology", desc: "Networks built using industry-leading IP and optical infrastructure. Our N X 100G metro access network supports multi-services delivery across key markets" },
              { title: "Last-mile connectivity", desc: "Dense access network supported by 25,000+ Kms of fiber, 350+ connected business hubs and 3,500+ fixed wireless base stations" },
              { title: "Data center and cloud interconnect", desc: "With industry-leading latency, our networks are designed for cloud connectivity and DC/DR/near-DR replication across 50+ data centers in India" }
            ].map((box, idx) => (
              <div className="col-md-3" key={idx}>
                <div className="p-4 h-100 border-end border-secondary" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                  <h6 className="mb-3" style={{ color: limeColor }}>{box.title}</h6>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs (Accordion) - Ref: Screenshot 2026-05-14 at 2.15.15 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">FAQs</h2>
          <div className="accordion accordion-flush" id="faqAccordion">
            
            {/* Open Item */}
            <div className="accordion-item border-0 mb-3 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white" type="button">
                  What is JPRHosting's Enterprise Network Connectivity service?
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body small text-muted p-4">
                  JPRHosting's Enterprise Network Connectivity service offers robust and scalable networking solutions, utilizing one of India's largest IP Multiprotocol Label Switching (MPLS)-enabled tier-1 networks. This network spans over 3,700 points of presence (PoPs) across 1,600 cities, providing enterprises with high-speed, reliable connectivity.
                </div>
              </div>
            </div>

            {/* Closed Items */}
            {["What types of connectivity solutions does JPRHosting provide?", 
              "How does JPRHosting ensure network reliability and performance?", 
              "Can JPRHosting's network support cloud and data center interconnectivity?", 
              "What makes JPRHosting's Enterprise Network Connectivity services stand out?"
            ].map((q, idx) => (
              <div className="accordion-item border-bottom py-2" key={idx}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-dark shadow-none" type="button">
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

export default EnterpriseConnectivity;