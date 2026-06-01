import React, { useState } from 'react';
import SEO from '../SEO';

export default function Marketplace() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (

    <>
    <SEO 
        title="Cloud Marketplace & Software Solutions"
        description="Explore JPRHosting's cloud marketplace. Discover, deploy, and manage top enterprise applications and integrated cloud infrastructure toolsets instantly."
        keywords="cloud marketplace, enterprise software, cloud deployment, business tools"
        url="https://jprhosting.in/marketplace"
      />
    
   
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
    

      {/* ==========================================
          SECTION 1: HERO BANNER
         ========================================== */}
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(5,25,20,0.95), rgba(10,50,40,0.85)), url("/assets/banner/network-integration-services.jpg")',
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
                Enterprise <span style={{ color: '#d4af37' }}>Cloud Marketplace</span>
              </h1>
              
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">
                  Discover cloud solutions, hosting services, security tools, and enterprise-ready infrastructure for modern businesses.
                </p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Contact Us
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
          SECTION 2: FEATURED SERVICES (Why JPRHosting Services)
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">
            Why <span className="text-success">JPRHosting</span> Services
          </h2>
          
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Cloud Hosting Plans</h6>
                <p className="text-muted small mb-0">RAS based design for future ready infrastructure.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Managed Services</h6>
                <p className="text-muted small mb-0">14 Data Centers - 188 MW Using 11 Metro and Edge DCs.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Managed Services</h6>
                <p className="text-muted small mb-0">Campuses is highly scalable with BTS capacities.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Security Solutions</h6>
                <p className="text-muted small mb-0">Enhanced 10 levels of security with auto containment.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Smart Hands</h6>
                <p className="text-muted small mb-0">309.6 MW renewable energy contracted. ESG best practices.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Managed Services</h6>
                <p className="text-muted small mb-0">AI/ML led operational excellence with uptime guarantees.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Hyperconnection Tools</h6>
                <p className="text-muted small mb-0">Hyperconnected, Carrier-neutral and Rich Interconnect ecosystem.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h6 className="fw-bold text-dark mb-2">Secure Office Space</h6>
                <p className="text-muted small mb-0">Exclusive, secure customized office space options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: SERVICE OFFERINGS (Hosting, Managed, Security)
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <h2 className="fw-bold text-dark mb-5 fs-2">Service Offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud Hosting Plans</h5>
              <p className="text-muted small lh-base">
                Cloud solutions, hosting services, security tools, and enterprise-ready infrastructure for megawatt-capacity security for necessary, built-to-suit center risk between JPRHosting DC-hosted customer and other data centers.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Services</h5>
              <p className="text-muted small lh-base">
                Ensure seamless movement of customer's IT services can rent space for their servers and IT equipment. It provides this is a ready-to-use connectivity framework in recooling, cooling, and customized environmental maintenance of physical hosted services.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Security Solutions</h5>
              <p className="text-muted small lh-base">
                Exclusive, secure and customized office space with basic fit-outs that house communication lines furniture, multi-factor authentication using badge, and biometric access controls.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Services on Plans</h5>
              <p className="text-muted small lh-base">
                Ensures cloud solution hosting powers scaling with needs so data servers will be celling up to JPRHosting data centers smoothly.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">AI/ML Uptime</h5>
              <p className="text-muted small lh-base">
                Managed operational excellence with high availability models and absolute edge uptime orchestration.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Security Solutions</h5>
              <p className="text-muted small lh-base">
                Exclusive, secure and customized office space with furniture, multi-factor authentic using badge and other value-added services.
              </p>
            </div>
          </div>

          {/* Decorative Dot Matrix Grid */}
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
      </section>

      {/* ==========================================
          SECTION 4: PARTNER PRODUCTS & AI AUTOMATION TOOLS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#624483' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            
            {/* Left Side: Partner Products */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h3 className="fw-bold text-white mb-3">Partner Products</h3>
              <div className="bg-white bg-opacity-10 rounded p-4 border border-white border-opacity-10">
                <ul className="list-unstyled mb-0 d-flex flex-column" style={{ gap: '12px' }}>
                  <li className="d-flex align-items-center"><span className="text-warning me-2">•</span> 138+ partners</li>
                  <li className="d-flex align-items-center"><span className="text-warning me-2">•</span> 219+ NVIDIA partners</li>
                  <li className="d-flex align-items-center"><span className="text-warning me-2">•</span> 35 host partners</li>
                  <li className="d-flex align-items-center"><span className="text-warning me-2">•</span> 22 faster partners</li>
                </ul>
              </div>
            </div>

            {/* Right Side: AI & Automation Tools Counters */}
            <div className="col-lg-7 ps-lg-5">
              <h3 className="fw-bold text-white mb-4">AI & Automation Tools</h3>
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="text-center text-sm-start">
                    <span className="display-5 fw-bold text-warning d-block">14</span>
                    <span className="small text-white opacity-75">Data Centers in operation</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="text-center text-sm-start">
                    <span className="display-5 fw-bold text-warning d-block">3</span>
                    <span className="small text-white opacity-75">AI-optimized NVIDIA certified data centers</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="text-center text-sm-start">
                    <span className="display-5 fw-bold text-warning d-block">309.6 MWp</span>
                    <span className="small text-white opacity-75">Renewable power contracted</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="text-center text-sm-start">
                    <span className="display-5 fw-bold text-warning d-block">58.7%</span>
                    <span className="small text-white opacity-75">Power generated from renewable sources</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section 
        className="py-5 text-white text-center" 
        style={{ backgroundColor: '#023330', borderTop: '4px solid #d4af37' }}
      >
        <div className="container py-4">
          <h2 className="fw-bold mb-3 display-6">Call-To-Action how can profit your today!</h2>
          <p className="mb-4 opacity-75 fs-6">Empower your operational pipelines with high-speed scalable cloud tools.</p>
          
          <button 
            className="btn btn-warning fw-bold text-dark px-5 py-3 btn-lg rounded shadow"
            style={{ letterSpacing: '0.5px' }}
          >
            Start Your Digital Journey
          </button>
        </div>
      </section>

    </div>
     </>
  );
}