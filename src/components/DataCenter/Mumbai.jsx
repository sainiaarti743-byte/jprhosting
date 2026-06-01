import React, { useState } from 'react';
import SEO from '../SEO';

export default function Mumbai() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
  
<SEO title="Data Center Location Mumbai | Edge Cloud Network" description="High availability edge networks operating from central Mumbai grids for immediate data handling access points." url="https://jprhosting.in/data-center/network-services" />


<SEO title="Data Center Location Noida NCR | Server Racks" description="Secure Tier-III computing nodes running from Noida industrial areas ensuring seamless connectivity pipelines." url="https://jprhosting.in/data-center/security-services" />


<SEO title="Data Center Location Chennai | High Uptime Hosting" description="Subsea data landing hubs optimized meticulously inside Chennai for international data distributions." url="https://jprhosting.in/data-center/reliability" />

<SEO title="Data Center Location Bangalore | Tech Hub Node" description="Premium high-density computing spaces engineered smoothly inside Bangalore to power intense tech stacks." url="https://jprhosting.in/data-center/scalability" />


<SEO title="Data Center Location Hyderabad | Resilient Cloud" description="Highly fault-tolerant server systems operating securely from central Hyderabad server parks." url="https://jprhosting.in/data-center/security" />


<SEO title="Data Center Location Kolkata | East India Edge" description="Low latency computing edge clusters managing distributions actively for East Indian network regions." url="https://jprhosting.in/data-center/cost-effective" />
    
   
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
     
   
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(20,10,40,0.95), rgba(40,15,70,0.85)), url("/assets/banner/network-integration-services.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '450px',
          padding: '80px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h1 className="fw-bold display-5 mb-4" style={{ lineHeight: '1.2' }}>
                India’s Most Connected <span style={{ color: '#d4af37' }}>Enterprise Network</span> <br />
                <span className="text-warning">High-Speed, Low-Latency Carrier Neutral Connectivity</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Robust SD-WAN, MPLS Mesh, and Direct Cloud On-Ramps</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Optimize Your Network
              </button>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex" style={{ gap: '8px' }}>
            <div className="bg-warning" style={{ width: '40px', height: '4px' }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT NETWORK SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Link your distributed data assets with a resilient, ultra-secure network fabric
              </h2>
              <p className="text-muted mb-4 fs-6">
                Distributed offices, remote workers, and diverse multi-cloud environments demand zero jitter, dynamic path steering, and deep bandwidth scalability.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting’s comprehensive <strong>Network Services</strong> act as the true backbone for enterprise data routing across India. Backed by our <strong>carrier-neutral multi-telecom ecosystem</strong>, we manage complex <strong>Global MPLS layouts, robust SD-WAN architectures, and dedicated Internet Leased Lines (ILL)</strong>. Whether scaling up simple branches or linking core infrastructure hubs, we deliver high availability, deep threat inspect infrastructure, and microsecond-level edge response execution.
              </p>

              {/* Decorative Dot Matrix */}
              <div className="mt-5 opacity-25 d-flex flex-column row-gap-1" style={{ width: '180px' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="d-flex justify-content-between">
                    {[...Array(12)].map((_, j) => (
                      <span key={j} className="bg-secondary rounded-circle" style={{ width: '6px', height: '6px' }}></span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-5 mt-4 mt-md-0">
              <div className="border border-secondary border-opacity-25 rounded p-5 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '250px' }}>
                <div className="text-center text-muted">
                <img
                    src="/assets/banner/data7.jpeg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: SERVICE OFFERINGS
         ========================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Network offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed SD-WAN</h5>
              <p className="text-muted small lh-base">
                Intelligent application-aware routing that dynamically steers heavy traffic over optimal active backbones, reducing congestion at enterprise branch nodes.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Internet Leased Line (ILL)</h5>
              <p className="text-muted small lh-base">
                Symmetric, dedicated high-speed business internet setups backed by strict SLAs, low latency guarantees, and multiple telco fiber failovers.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Core MPLS VPN Mesh</h5>
              <p className="text-muted small lh-base">
                Highly secure, private multi-site routing architectures linking core business branches, data hubs, and warehouses with stable QoS configurations.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Direct Cloud Interconnect</h5>
              <p className="text-muted small lh-base">
                Pre-provisioned, private fiber bypass links directly plugging your infrastructure racks into AWS, Azure, Google Cloud, and global SaaS endpoints.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Global Edge Content Routing</h5>
              <p className="text-muted small lh-base">
                Distributed localized points-of-presence designed to cache, balance, and deliver video or API assets to pan-India end users instantly.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Network Operations Center (NOC)</h5>
              <p className="text-muted small lh-base">
                Continuous 24x7 tracking of packet transmission parameters, ping variations, network traps, and proactive fault mitigation across every lease tier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: NETWORK FOOTPRINT / STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#4b1d6e' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Pan-India Telecom Scale</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Hyperconnected Backbone Layer for Modern Enterprise Ecosystems</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
              <img
                    src="/assets/banner/data6.jpeg"
                    alt=""
                    className="img-fluid"
                  />
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">3000+</span>
                    <span className="small text-white opacity-90">On-Net Cities Enabled</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">450+</span>
                    <span className="small text-white opacity-90">Network Points of Presence (PoPs)</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">99.995%</span>
                    <span className="small text-white opacity-90">Core Backbone Availability</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">100G</span>
                    <span className="small text-white opacity-90">Scalable Backbone Capacity</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">12+</span>
                    <span className="small text-white opacity-90">Major Telco Partners Integrated</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Dual</span>
                    <span className="small text-white opacity-90">Last-Mile Fiber Path Redundancy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR NETWORK SERVICES
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Enterprise Connectivity
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Carrier-Neutrality:</strong> Absolute choice across multiple telecom backend links.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Zero-Interruption Fallback:</strong> Instant ring-topology hardware link failover.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Granular QoS Rules:</strong> Prioritizing high-importance database transactions over general browsing traffic.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Encrypted Pipelines:</strong> Built-in hardware IPsec tunneling protocols.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Proactive SLA Pushes:</strong> Automatic service credits upon minimal target downtime variations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Central Management Dashboards:</strong> Control worldwide configurations through an explicit single control center.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Last Mile Feasibility:</strong> Extensive fiber reach mapping complex corporate zones.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Next-Gen Equipment:</strong> Premium routers and gateways deployed standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: TRUSTED SEGMENTS
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors running on JPRHosting Backbone</h2>
          <p className="text-muted mb-4 fs-5">Ensuring mission-critical data stays synchronized, safely and reliably.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Core Banking & ATMs</h5>
                <p className="text-muted small mb-0 lh-base">
                  Powering millions of instant branch interactions everyday using highly isolated, premium structured lease links.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Global IT Export Units</h5>
                <p className="text-muted small mb-0 lh-base">
                  Providing massive data pipelines and secure international gateways to support continuous delivery targets.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Retail Supply Networks</h5>
                <p className="text-muted small mb-0 lh-base">
                  Connecting hundreds of physical storefronts to centralized ERP ledgers instantly for immediate stock visibility.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Network Resiliency Engineering – 5 Pillars</h2>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: FAQs
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">FAQs</h2>

          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              {
                q: "What does carrier-neutral connectivity mean?",
                a: "It means our infrastructure points are not locked into any single telecom company. We route traffic across multiple elite telco providers, meaning your connection remains live even if an entire carrier experience a major breakdown."
              },
              {
                q: "How does SD-WAN optimize multi-office traffic?",
                a: "Traditional networks dump all branch traffic along a single fixed line. SD-WAN intelligently tracks real-time link quality and routes high-priority apps (like ERP or video calls) over clean lines while routing minor updates over secondary channels."
              },
              {
                q: "What targets are covered under your network SLAs?",
                a: "We guarantee up to 99.99% backbone uptime, precise packet loss parameters under 0.1%, and definitive round-trip delay parameters mapped between primary corporate enterprise zones."
              },
              {
                q: "Do you offer physical fiber installation at remote locations?",
                a: "Yes. JPRHosting maintains deep local fiber feasibility networks across thousands of commercial areas, providing dedicated physical layout installations right up to your office router room."
              },
              {
                q: "How does a direct cloud on-ramp benefit my applications?",
                a: "Instead of jumping your data across multiple unpredictable public internet nodes, direct cloud links route traffic over a completely private fiber path. This delivers microsecond-level latency reductions and prevents public interception."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded border border-light shadow-sm overflow-hidden"
                >
                  <div 
                    className="p-3 d-flex align-items-center justify-content-between"
                    style={{ 
                      cursor: 'pointer', 
                      backgroundColor: isOpen ? '#4a4a4a' : '#ffffff',
                      color: isOpen ? '#ffffff' : '#212529',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="fw-semibold small">{isOpen ? '−' : '+'} &nbsp; {faq.q}</span>
                  </div>

                  {isOpen && (
                    <div className="p-4 bg-white border-top border-light">
                      <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
     </>
  );
}