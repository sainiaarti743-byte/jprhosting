import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const ManagedDetecation = () => {
  const sifyGreen = "#adff2f";

  // Honeycomb data from Screenshot 2026-05-14 at 3.54.16 PM.jpg
  const hexagonStats = [
    { text: "24×7 Security Operations Center (SOC)", color: "#2c3e50" },
    { text: "1,600+ use cases to detect cybersecurity threats", color: "#e74c3c" },
    { text: "3,000+ reports to analyze and explore threats", color: "#8e44ad" },
    { text: "350+ vendor devices supported", color: "#2980b9" },
    { text: "98% faster response time with SOAR", color: "#c0392b" },
    { text: "UEBA to detect anomalies and insider threats", color: "#2980b9" },
    { text: "MITRE ATT&CK framework-based threat mapping", color: "#2c3e50" }
  ];

  return (
    <>
    <SEO 
        title="Managed Detection & Response (MDR) | 24/7 SIEM SOC"
        description="Isolate and remediate digital threat activities instantly via advanced security coordination tools and real-time SIEM alerts."
        keywords="managed detection response MDR solutions real time threat hunting"
        url="https://jprhosting.in/security-services/managed-detection-response"
      />
  
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* 1. MDR Hero Banner - Ref: Screenshot 2026-05-14 at 3.54.10 PM.jpg */}
      <section className="position-relative text-white" style={{ minHeight: '400px', backgroundColor: '#0a192f' }}>
        <img 
          src="/assets/img/cloud.webp" 
          alt="MDR Banner" 
          className="position-absolute w-100 h-100" 
          style={{ objectFit: 'cover', opacity: '0.5' }}
        />
        <div className="container position-relative d-flex align-items-center" style={{ minHeight: '400px' }}>
          <div className="col-lg-7">
            <h1 className="fw-bold display-6" style={{ color: sifyGreen }}>
              Proactive Managed Detection and Response (MDR) services to secure your IT & applications
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Modern MDR Intro & Honeycomb Layout - Ref: Screenshot 2026-05-14 at 3.54.16 PM.jpg */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Modern MDR solutions for faster incident detection and mitigation</h2>
              <p className="text-muted small">
                As digital transformation sweeps through every industry, the attack surface grows dramatically... JPRHosting's MDR Services provide <strong>centralized visibility of security monitoring</strong> for multi-cloud and hybrid infrastructure.
              </p>
              <div className="mt-5 opacity-25 d-flex gap-2">
                {[...Array(10)].map((_, i) => <span key={i} style={{fontSize: '10px'}}>●</span>)}
              </div>
            </div>

            {/* Honeycomb Implementation */}
            <div className="col-lg-7 mt-5 mt-lg-0">
                  <img src="/assets/img3/Managed-Detection-Response.svg" className="img-fluid" alt="Data security diagram" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features List - Ref: Screenshot 2026-05-14 at 3.54.22 PM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Key Features</h3>
          <div className="row g-4">
            {[
              "Logs from the cloud, endpoints, network, users, and the entire IT stack are collected and analyzed to uncover cyber threats",
              "Automated threat hunting to identify malware, data exfiltration, lateral movements, and other indicators of attacks & compromise",
              "Identify threats faster with advanced threat detection leveraging AI & ML capabilities resulting in better mean time to detect and respond",
              "24×7 Security Operations Center (SOC) with rapid triage by JPRHosting's SOC analysts and threat hunters"
            ].map((feature, i) => (
              <div className="col-md-6" key={i}>
                <div className="bg-white p-4 h-100 shadow-sm border-start border-4" style={{ borderColor: sifyGreen }}>
                  <p className="mb-0 fw-bold text-center" style={{ fontSize: '14px', lineHeight: '1.6' }}>{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Customers Choose JPRHosting (MDR Edition) - Ref: Screenshot 2026-05-14 at 3.54.27 PM.jpg */}
      <section className="py-5 text-white" style={{ background: '#2e0a3d', backgroundImage: 'linear-gradient(135deg, #230831 0%, #4a0e63 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="fw-bold">Why customers choose <span style={{ color: sifyGreen }}>JPRHosting</span></h3>
            </div>
            <div className="col-md-9">
              <div className="row g-4 ps-md-5">
                {[
                  "Device-based licensing with predictive billing",
                  "SIEM license as-a-Service to host the platform in customer premises",
                  "Single-pane-of-glass visibility of security posture",
                  "1600+ industry-specific use cases"
                ].map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="ps-3 border-start border-2 border-success h-100" style={{ borderColor: sifyGreen }}>
                      <p className="small mb-0" style={{ opacity: '0.8' }}>{item}</p>
                    </div>
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

export default ManagedDetecation;