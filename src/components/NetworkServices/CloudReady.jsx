import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const CloudReady = () => {
  const limeColor = "#adff2f";
  const darkGrey = "#5a5a5a";

  return (
    <>
    <SEO 
        title="Cloud-Ready High Bandwidth Network Frameworks"
        description="Direct low-latency channels feeding cloud storage layers effortlessly with minimal packet delays."
        keywords="cloud ready solutions cloud data optimization pathways connectivity"
        url="https://jprhosting.in/network-services/network-transformation-services/cloud-ready"
      />
    
  
    <div className="cloud-ready-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. Hero Section - Ref: Screenshot 2026-05-14 at 2.21.23 PM.jpg */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: limeColor }}>
            Bridge the Gap to the Cloud with JPRHosting Technologies' Expert Network Transformation
          </h2>
        </div>
      </section>

      {/* 2. Intro Content - Ref: Screenshot 2026-05-14 at 2.21.23 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/assets/img3/cloud-ready.png" alt="Cloud Solutions" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Drive Scalability and Flexibility with JPRHosting Technologies’ Cloud-Ready Network Solutions</h3>
              <p className="small text-muted mb-3">
                Organizations are embracing the never-before-seen pace at which businesses and applications are moving online. As the network boundary for enterprises becomes blurred, a <strong>cloud-first strategy is becoming the only way forward</strong> for providing the right user experience to customers and employees.
              </p>
              <p className="small text-muted">
                This leads to the urgent need for network transformation from the hardware-intensive rigid network to an <strong>agile, secure, on-demand, auto-scalable, and application-aware network</strong> solution.
              </p>
              <div className="dot-pattern mt-4 opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Custom-Built Network - Ref: Screenshot 2026-05-14 at 2.21.30 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
              <h3 className="fw-bold mb-4">JPRHosting’s custom-built, future-proof, and cloud-first network</h3>
              <p className="small text-muted">
                JPRHosting's new-age SD-WAN solutions and cloud-ready networks come with data center interconnects, hyperscale cloud connects with sub-ms latency and internet exchanges for carrier neutrality. Supported by JPRHosting's world-class, global NOCs and network managed services, they provide flexible and secure connectivity for applications and databases.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/assets/img3/Sifys-custom-built-future-proof-and-cloud-first-network.jpg" alt="Future Proof" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Highlights Grid - Ref: Screenshot 2026-05-14 at 2.21.35 PM.png */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-5">Highlights</h3>
          <div className="row g-4 mb-4">
            {[
              "Layer 3/ Layer 2 connections", "Robust virtualized network", "Global Cloud Connect",
              "Data Center Interconnect", "End-to-end high availability", "Traffic engineering",
              "Visibility and reach"
            ].map((text, idx) => (
              <div className={idx === 6 ? "col-md-4" : "col-md-4"} key={idx}>
                <div className="p-4 h-100 shadow-sm border-start border-4" style={{ borderColor: limeColor, backgroundColor: '#fff' }}>
                  <p className="small fw-bold mb-0">{text}</p>
                </div>
              </div>
            ))}
            <div className="col-md-8 d-flex align-items-center">
               <div className="dot-grid text-muted opacity-25 w-100" style={{ letterSpacing: '12px' }}>
                 ••••••••••••••••••••••••••••••••<br />••••••••••••••••••••••••••••••••<br />••••••••••••••••••••••••••••••••
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Cloud Connect (Diagram Section) - Ref: Screenshot 2026-05-14 at 2.21.45 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h3 className="fw-bold">Global cloud connect services</h3>
          <p className="small text-muted mb-5 w-75">
            JPRHosting's Global Cloud Connect Services (GCC) is a one-stop solution to access any cloud service. Our global reach is complemented by strategic partnerships with various global service providers.
          </p>
          <div className="text-center">
            <img src="/assets/img3/Global-Cloud-Connect-Services.svg" alt="Global Cloud Connect Diagram" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* 6. Benefits (Pill Layout) - Ref: Screenshot 2026-05-14 at 2.21.51 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h3 className="fw-bold mb-5 text-start">Benefits</h3>
          <div className="row align-items-center">
            <div className="col-md-4 d-grid gap-3">
              <div className="rounded-pill p-3 text-dark fw-bold small shadow-sm" style={{ backgroundColor: limeColor }}>Private, scalable, stable and secure</div>
              <div className="rounded-pill p-3 text-white fw-bold small shadow-sm" style={{ backgroundColor: darkGrey }}>Reduced ownership costs</div>
              <div className="rounded-pill p-3 text-dark fw-bold small shadow-sm" style={{ backgroundColor: limeColor }}>Manage risk and data safety</div>
            </div>
            <div className="col-md-4 py-4">
              <div className="position-relative d-inline-block">
                <div className="border border-2 border-dashed rounded-circle p-5" style={{ borderColor: limeColor }}>
                  <img src="/assets/img3/Cloud-ready-Benefits.svg" alt="Cloud Central" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-4 d-grid gap-3">
              <div className="rounded-pill p-3 text-dark fw-bold small shadow-sm" style={{ backgroundColor: limeColor }}>Adaptable: as agile as your cloud</div>
              <div className="rounded-pill p-3 text-white fw-bold small shadow-sm" style={{ backgroundColor: darkGrey }}>on-demand flexible links</div>
              <div className="rounded-pill p-3 text-dark fw-bold small shadow-sm" style={{ backgroundColor: limeColor }}>Avoid congestion in your network</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Customers Choose (Dark Theme) - Ref: Screenshot 2026-05-14 at 2.21.59 PM.jpg */}
      <section className="py-5 text-white" style={{ background: '#000', backgroundImage: 'url("https://via.placeholder.com/1200x500?text=Dark+Mesh+Background")', backgroundSize: 'cover' }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h3>
          <div className="row g-3">
            {[
              { t: "Pan-geography diverse fiber networks", d: "Dual PoPs with the latest Metro DWDM access network infrastructure that ensures customer networks never go down." },
              { t: "High-quality, fail-safe network", d: "N X 10G Metro access ring network ensure high-quality traffic even if one fiber route is compromised." },
              { t: "Last-mile connectivity", d: "Strong relationship with multiple carriers allows JPRHosting to connect customers everywhere." },
              { t: "One-stop network approach", d: "JPRHosting is a single provider that implements multiple layers of redundant network." },
              { t: "Very low latency", d: "JPRHosting provides network for DC/DR replication with very low latency (< 2 ms)." }
            ].map((box, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 h-100 border rounded" style={{ borderColor: 'rgba(173, 255, 47, 0.4)', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                  <h6 className="fw-bold" style={{ color: limeColor }}>{box.t}</h6>
                  <p className="small mt-3 opacity-75">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs - Ref: Screenshot 2026-05-14 at 2.22.06 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">FAQs</h3>
          <div className="accordion accordion-flush shadow-sm border rounded overflow-hidden">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-medium py-3" type="button">
                  — &nbsp; What are Cloud Ready Network Transformation Services?
                </button>
              </h2>
              <div className="accordion-body p-4 border-bottom">
                <p className="small text-muted mb-0">
                  Cloud Ready Network Transformation Services refer to the strategies and solutions designed to help organizations transition their network infrastructure to be compatible with cloud environments, enabling efficient data management and seamless integration of cloud services.
                </p>
              </div>
            </div>
            {[
              "Why is network transformation necessary for cloud readiness?",
              "How does JPRHosting Technologies support organizations in their network transformation journey?",
              "What are the benefits of adopting a cloud-ready network?",
              "Can existing network infrastructure be adapted to become cloud-ready?"
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

export default CloudReady ;