import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './NetworkSecurity.css';

const NetworkSecurity = () => {
  return (
    <div className="network-security-page">

      {/* SECTION 1: HERO (Screenshot 2026-05-14 at 3.52.47 PM.jpg) */}
      <section className="hero-network d-flex align-items-center text-white position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fw-bold text-lime display-6">
                Boost your Cyber Defenses while ensuring maximized performance and increased productivity
              </h1>
            </div>
          </div>
        </div>
        {/* Sidebar Icons Wrapper */}
        <div className="position-absolute end-0 top-50 translate-middle-y d-flex flex-column gap-1 pe-2">
            <div className="bg-lime p-2 text-dark"><i className="bi bi-broadcast"></i></div>
            <div className="bg-lime p-2 text-dark"><i className="bi bi-telephone-fill"></i></div>
        </div>
      </section>

      {/* SECTION 2: ADVISORY & DIAGRAM (Screenshot 2026-05-14 at 3.52.53 PM.jpg) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Advanced Network Security Services: Expert data protection advisory and implementation</h2>
              <p className="text-muted small">Organizations are facing unprecedented challenges managing their network in a rapidly changing environment...</p>
              <p className="small"><strong>JPRHosting's Managed Network Security Services</strong> provide the expertise, hardware, software, installation, and continuous updates...</p>
              <div className="dot-grid-pattern mt-4"></div>
            </div>
            <div className="col-lg-6 text-center">
              {/* Simplified placeholder for the hexagonal diagram */}
              <div className="diagram-placeholder border rounded-circle p-5 d-inline-block">
                <h6 className="fw-bold mb-0">Unified network security management</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY SERVICES (Screenshot 2026-05-14 at 3.52.59 PM.jpg) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Key Services</h2>
          <div className="service-frame bg-white border-lime-top-bottom rounded-4 p-5 shadow-sm">
            <div className="row text-center">
              <div className="col-md-4 border-end-dashed px-4">
                <h5 className="fw-bold">Firewall Management</h5>
                <p className="small text-muted">Support for multiple firewall technologies with design, installation, and configuration including daily maintenance...</p>
              </div>
              <div className="col-md-4 border-end-dashed px-4">
                <h5 className="fw-bold">Unified Threat Management</h5>
                <p className="small text-muted">Unified security controls encompassing firewalls, IPS, AV, content filtering, VPNs and remote access...</p>
              </div>
              <div className="col-md-4 px-4">
                <h5 className="fw-bold">Intrusion Detection and Prevention System Management</h5>
                <p className="small text-muted">Defensive security demands IDS and IPS implementation to minimize the risk of business-impacting security breaches...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE (Screenshot 2026-05-14 at 3.53.05 PM.jpg) */}
      <section className="why-sify-dark py-5 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h2 className="fw-bold">Why <br/> customers <br/> choose <span className="text-lime">JPRHosting</span></h2>
            </div>
            <div className="col-md-9">
              <div className="row row-cols-md-2 g-4">
                <div className="col border-start border-lime border-3 ps-4">
                  <p className="small mb-0">Implemented and managed 5000+ firewalls across customer premise, JPRHosting DCs, and hyperscale public clouds</p>
                </div>
                <div className="col border-start border-lime border-3 ps-4">
                  <p className="small mb-0">OEM-agnostic partner with expertise in implementation & management of multi-brand security control technologies & products</p>
                </div>
                <div className="col border-start border-lime border-3 ps-4">
                  <p className="small mb-0">Delivering end-to-end network-managed services leveraging leading platforms and tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NetworkSecurity;