import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransformSlider from './TransformSlider';
import SEO from '../SEO';

const NetworkTransformation = () => {
  const limeColor = "#adff2f";

  return (

    <>
    <SEO 
        title="Network Transformation - Software-Defined Routing"
        description="Upgrade static configurations to dynamic software-controlled routing setups for agile asset handling."
        keywords="network transformation software-defined WAN architectural evolution"
        url="https://jprhosting.in/network-services/network-transformation-services"
      />

    <TransformSlider/>
  
    <div className="network-transformation-page" style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. Hero & Radial Infographic - Ref: Screenshot 2026-05-14 at 2.20.44 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Embrace the future of connectivity with our Network Transformation Services</h2>
              <p className="small text-muted mb-4">
                Enterprises today need scalable, reliable, secure, and agile network architecture and management to support 
                their business and deliver seamless customer experience.
              </p>
              <p className="small text-muted">
                JPRHosting through its expertise in network integration and transformation for hybrid or multi-cloud environments, 
                helps customers <strong>harness the true potential</strong> of cloud, data centers, and network technologies at the three 
                pivotal points of the network – core, edge and management layer – to advance technology adoption and 
                enhance business outcomes.
              </p>
              <div className="dot-pattern mt-5 opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              {/* Radial Infographic Representation */}
              <img src="/assets/img3/Network-Transformation-Services-1.svg" alt="Transformation Points" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 2.20.51 PM.png */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Our Service Offerings</h3>
          <div className="row g-5">
            <div className="col-md-6">
              <img src="" alt="Cloud Ready" className="mb-4" />
              <h5 className="fw-bold">Cloud Ready</h5>
              <p className="small text-muted mb-4">
                Hybrid Cloud Connectivity over a secure, seamless, and deterministic network that allows scalability with 
                growing market needs, and manageability at reduced costs.
              </p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm fw-bold">Know More</button>
            </div>
            <div className="col-md-6">
              <img src="" alt="Edge Ready" className="mb-4" />
              <h5 className="fw-bold">Edge Ready</h5>
              <p className="small text-muted mb-4">
                Enabling digital ambition of enterprises through a foundation of a robust managed edge network platform 
                that comprises of wired and wireless services.
              </p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm fw-bold">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transformational Areas - Ref: Screenshot 2026-05-14 at 2.20.57 PM.png */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-5">Transformational Areas</h3>
          <div className="border-top border-bottom border-4 py-5 px-3 position-relative" style={{ borderColor: limeColor, borderRadius: '20px' }}>
            <div className="row text-center align-items-center">
              <div className="col-md-4 border-end border-secondary border-opacity-25 border-dashed">
                <h5 className="fw-bold">Core</h5>
                <p className="small text-muted px-3">Transformation services at the core of the network help customers harness the true potential of cloud and digital</p>
              </div>
              <div className="col-md-4 border-end border-secondary border-opacity-25 border-dashed">
                <h5 className="fw-bold">Edge</h5>
                <p className="small text-muted px-3">JPRHosting offers advisory and implementation services for delivering an intelligent edge using Wi-Fi, IoT and 5G networks.</p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Management layer</h5>
                <p className="small text-muted px-3">JPRHosting provides next-generation AI/ML-driven network management services resulting in deep visibility and application correlation to support true digital organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Dynamic Background) - Ref: Screenshot 2026-05-14 at 2.21.04 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(to right, #000c24, #001f3f)',
        backgroundImage: 'url("https://via.placeholder.com/1200x500?text=Fiber+Optic+Background")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h3>
          <div className="row g-1">
            {[
              { t: "Pan-geography diverse fiber networks", d: "Dual PoPs with the latest Metro DWDM access network infrastructure that ensures customer networks across major cities and international gateways never go down." },
              { t: "High-quality, fail-safe network", d: "N X 10G Metro access ring network with multi-service access nodes (MSANs) across metros ensures high-quality traffic even if one fiber route is compromised." },
              { t: "Last-mile connectivity", d: "Strong relationship with multiple carriers allows JPRHosting to connect customers even in geographies where its own network coverage is not available." },
              { t: "One stop network approach", d: "JPRHosting is a single provider that implements multiple layers of redundant network in the same branch." },
              { t: "Very low latency", d: "JPRHosting provides network for DC/DR/Near-DR replication with very low latency (< 2 ms) to enable hyper-reach and hyperscale, resilient network design." }
            ].map((card, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                  <h6 className="fw-bold" style={{ color: limeColor }}>{card.t}</h6>
                  <p className="small mt-3 opacity-75" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>{card.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs - Ref: Screenshot 2026-05-14 at 2.21.11 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">FAQs</h3>
          <div className="accordion accordion-flush shadow-sm border rounded overflow-hidden">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-medium py-3" type="button">
                  — &nbsp; What are Network Transformation Services?
                </button>
              </h2>
              <div className="accordion-body p-4 bg-white border-bottom">
                <p className="small text-muted mb-0">
                  Network Transformation Services involve the strategic upgrade and optimization of an organization's network infrastructure to enhance performance, efficiency, and scalability. These services typically include the integration of advanced technologies, redesigning network architecture, and implementing automation and security measures.
                </p>
              </div>
            </div>
            {[
              "Why is network transformation important for businesses?",
              "What are the key components of a successful network transformation strategy?",
              "How can JPRHosting Technologies assist with network transformation?",
              "What challenges might organizations face during network transformation?"
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

export default NetworkTransformation;