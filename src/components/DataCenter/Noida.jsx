import React, { useState } from 'react';

export default function Noida() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
   
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(10,20,30,0.95), rgba(15,35,55,0.85)), url("/assets/banner/hybrid-it-integration-services.jpg")',
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
                Next-Gen <span style={{ color: '#d4af37' }}>Cybersecurity Defense</span> <br />
                <span className="text-warning">Managed Detection, Mitigation & Zero-Trust Governance</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">24x7 Continuous AI-Driven Threat Tracking & Incident Management</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Secure Your Infrastructure
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
          SECTION 2: ABOUT SECURITY SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Proactively defend your enterprise endpoints, cloud vectors, and core data layers
              </h2>
              <p className="text-muted mb-4 fs-6">
                Sophisticated multi-vector attacks, ransomware networks, and phishing exploits can bypass legacy firewalls, threatening critical business operational continuity.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting’s advanced <strong>Cybersecurity Solutions</strong> provide a comprehensive, intelligence-backed defense perimeter for your entire IT estate. Managed through our certified <strong>Global Security Operations Centers (SOC)</strong>, we integrate deep <strong>SIEM/SOAR analytics, Zero-Trust identity parameters, and real-time behavioral tracing</strong>. We safeguard your environment from ongoing infiltration attempts via expert <strong>Vulnerability Assessments (VAPT), regulatory compliance alignment, and automated endpoint threat containment.</strong>
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
                    src="/assets/banner/data9.jpeg"
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
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Security offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Detection & Response (MDR)</h5>
              <p className="text-muted small lh-base">
                Proactive threat hunting powered by AI anomalies analysis to detect, trace, and forcefully isolate malicious script executions on system endpoints before they spread.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Vulnerability Assessment & Penetration Testing</h5>
              <p className="text-muted small lh-base">
                Comprehensive VAPT dry-runs targeting your networks, web applications, and cloud APIs to discover, patch, and remediate systemic layout exploits.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Zero-Trust Identity Access Management</h5>
              <p className="text-muted small lh-base">
                Enforcing absolute cryptographic authentication parameters, multi-factor validations, and least-privilege boundary rules across all internal remote data access paths.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud Security Posture Management</h5>
              <p className="text-muted small lh-base">
                Continuous compliance auditing and drift tracking across AWS, Azure, and GCP environments to eliminate misconfigured buckets and exposed core network ports.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Perimeter Next-Gen Firewall (NGFW)</h5>
              <p className="text-muted small lh-base">
                Deep layer-7 packet inspection, encrypted traffic scanning, and synchronized edge web application firewalls (WAF) blocking dirty botnet request vectors.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Incident Response & Ransomware Containment</h5>
              <p className="text-muted small lh-base">
                Immediate specialized emergency response squads deploying automated containment scripts to neutralize compromised active directory nodes and secure backup integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: SECURITY FOOTPRINT / STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#112233' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Cybersecurity Scale & Analytics</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Sovereign Threat Intelligence Protecting Global Enterprise Frontiers</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                <p className="text-white-50 mb-0 pt-5">[ Global Cyber Threat Map & Mitigation Nodes ]</p>
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">10M+</span>
                    <span className="small text-white opacity-90">Daily Exploit Infiltrations Blocked</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">&lt; 10 Min</span>
                    <span className="small text-white opacity-90">Average Threat Containment Execution Time</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">3 Dedicated</span>
                    <span className="small text-white opacity-90">Geo-Redundant Cert-In Compliant SOC Hubs</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">150+</span>
                    <span className="small text-white opacity-90">Certified L3 Ethical Security Engineers</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">100%</span>
                    <span className="small text-white opacity-90">ISO 27001 & PCI-DSS Compliance Alignment</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Continuous</span>
                    <span className="small text-white opacity-90">Dark Web Risk Signature Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR SECURITY SERVICES
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Cybersecurity Defenses
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Integrated SIEM/SOAR:</strong> Automated threat parsing rules running over neural evaluation stacks.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Continuous Risk Scoring:</strong> Dynamic real-time profiling tracking employee device health parameters.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Advanced Threat Feeds:</strong> Instantly synchronized with elite global cyber intelligence exchanges.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Frictionless Integrations:</strong> Lightweight non-intrusive endpoint client deployments.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Data Privacy Control:</strong> Complete local compliance preserving strict residency architectures.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Automated Playbooks:</strong> Instant network perimeter isolation upon unauthorized administrative execution.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Vulnerability Lifecycle Tracking:</strong> End-to-end bug ticketing right through code remediation phases.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Heuristic Log Analysis:</strong> Retaining high-fidelity access tracks for secure auditing processes.
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
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors running on JPRHosting Cybersecurity Defenses</h2>
          <p className="text-muted mb-4 fs-5">Mitigating operational hazards across regulatory and high-load digital channels.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Core Banking & Asset Portals</h5>
                <p className="text-muted small mb-0 lh-base">
                  Shielding sensitive financial workflows via continuous penetration scanning and automated perimeter data isolation architectures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Government & Public Utilities</h5>
                <p className="text-muted small mb-0 lh-base">
                  Hardening state data portals against coordinated international multi-vector denial-of-service (DDoS) scripts.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Digital Healthcare & Insurance</h5>
                <p className="text-muted small mb-0 lh-base">
                  Enforcing comprehensive encryption models across distributed telemetry logs to satisfy privacy guidelines completely.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Cybersecurity Defense Engineering – 5 Core Pillars</h2>
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
                q: "What is a Managed Security Operations Center (SOC)?",
                a: "A Managed SOC is a centralized, expert-led monitoring station that operates 24x7 to collect, evaluate, and act upon security logs generated across your databases, endpoints, cloud clusters, and perimeter hardware to instantly identify anomalies."
              },
              {
                q: "How does MDR differ from traditional anti-virus solutions?",
                a: "Traditional anti-virus software only matches threats against old, known file definitions. Managed Detection & Response (MDR) tracks active software behaviors, memory tracking modifications, and micro-anomalies using AI models to stop never-before-seen zero-day exploits."
              },
              {
                q: "How often should our corporate infrastructure undergo VAPT auditing?",
                a: "Industry best practices and regulatory compliance frameworks recommend deep VAPT testing at least twice a year, or immediately following any significant changes to your production code or network layout."
              },
              {
                q: "What is the core rule behind a Zero-Trust architecture?",
                a: "The foundational rule of Zero-Trust is 'never trust, always verify.' It means no user or device is trusted by default just because they are logged into the office network. Continuous validation of device health, identity credentials, and explicit permissions is required at every access step."
              },
              {
                q: "How does JPRHosting minimize response delays during an active security incident?",
                a: "Our SOC systems utilize automated SOAR playbooks. The moment a critical breach signature is validated (such as rapid file encryption indicators), the target system or node is automatically isolated from the rest of the network within seconds while our incident response team takes over."
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
  );
}