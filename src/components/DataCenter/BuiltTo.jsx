import React, { useState } from 'react';

import SEO from '../SEO';

export default function BuiltTo() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
    <SEO 
        title="Built-To-Suit Managed Hosting & Infrastructure"
        description="Completely tailor-made server architecture engineering plans designed perfectly around massive computational data requirements."
        keywords="custom managed hosting dedicated enterprise infrastructure"
        url="https://jprhosting.in/data-center/managed-hosting"
      />
   
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
   

      {/* ==========================================
          SECTION 1: HERO BANNER (Managed Hosting)
         ========================================== */}
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(10,25,47,0.95), rgba(16,42,76,0.85)), url("/assets/banner/network-transformation-services.jpg")',
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
                India’s Premier <span style={{ color: '#d4af37' }}>Enterprise Managed Hosting</span> <br />
                <span className="text-warning">Fully Monitored OS & Application Infrastructure Solution</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Guaranteed 99.99% Uptime with SLA-backed OS & DB administration</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Explore Hosting Plans
              </button>
            </div>
          </div>

          {/* Slider Indicators at the Bottom Center */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex" style={{ gap: '8px' }}>
            <div className="bg-warning" style={{ width: '40px', height: '4px' }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT MANAGED HOSTING
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Left Content Column */}
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Shift your infrastructure overhead to our certified system engineers and architects
              </h2>
              <p className="text-muted mb-4 fs-6">
                Modern enterprises face severe bottlenecks in routine patch management, kernel updates, security compliances, and constant architectural fine-tuning.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting, leveraging over <strong>25 years of technical expertise</strong> in delivering production-grade <strong>Managed Hosting services</strong> in India, ensures your server operating systems, core web stacks, and internal processes run perfectly. We provide comprehensive infrastructure deployment models from **isolated virtual instances to full multi-tier multi-tenant private clouds**. Our operations envelope <strong>end-to-end performance scaling, database hardening, disaster mitigation updates, and proactively tracked monitoring tasks.</strong>
              </p>

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

            {/* Right Hosting Feature Placeholder Column */}
            <div className="col-md-5 mt-4 mt-md-0">
              <div className="border border-secondary border-opacity-25 rounded p-5 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '250px' }}>
                <div className="text-center text-muted">
                 <img
                    src="/assets/banner/data3.jpeg"
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
          <h2 className="fw-bold text-dark mb-5 fs-2">Our service offerings</h2>
          
          <div className="row g-4 row-gap-5">
            {/* Box 1 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Operating System Management</h5>
              <p className="text-muted small lh-base">
                Full lifecycle handling of Linux and Windows server instances including security auditing, strict provisioning compliance, kernel builds, and routine package updates.
              </p>
            </div>
            {/* Box 2 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Core Database Admins</h5>
              <p className="text-muted small lh-base">
                Proactive query tuning, regular schema optimization backups, configuration balancing for SQL Server, PostgreSQL, and high-load production clusters.
              </p>
            </div>
            {/* Box 3 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Advanced Security Hardening</h5>
              <p className="text-muted small lh-base">
                Deploying robust multi-tier web application firewalls (WAF), real-time malicious intrusion system tracking, and endpoint isolation protocols directly inside your system kernel.
              </p>
            </div>
            {/* Box 4 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">24x7 Expert Proactive Support</h5>
              <p className="text-muted small lh-base">
                Continuous hardware health checking and level-3 systems architecture support ready to assist instantly upon complex multi-node production breakdowns.
              </p>
            </div>
            {/* Box 5 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Backup & Disaster Recovery</h5>
              <p className="text-muted small lh-base">
                Fully automated image-level snapshot routines with reliable multi-region retention logic to secure business workflows from unpredicted outages.
              </p>
            </div>
            {/* Box 6 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Web Stack Optimization</h5>
              <p className="text-muted small lh-base">
                Tailored setup optimization for high-traffic Nginx, Apache HTTP environments, custom SSL handshake acceleration, and microservices orchestrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: HOSTING FOOTPRINT / STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#2b50aa' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Hosting Scale & Infrastructure</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Highly Redundant, Secure, and Built for Complex Production Apps</p>

          <div className="row align-items-center mt-4">
            {/* Left Placeholder Column */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
               <img
                    src="/assets/banner/data2.jpeg"
                    alt=""
                    className="img-fluid"
                  />
              </div>
            </div>

            {/* Right Counters Grid */}
            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">50k+</span>
                    <span className="small text-white opacity-90">Virtual Nodes Managed</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">45 Min</span>
                    <span className="small text-white opacity-90">Average SLA Response Time</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">99.99%</span>
                    <span className="small text-white opacity-90">Network Uptime Guaranteed</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">3+</span>
                    <span className="small text-white opacity-90">ISO Security Compliances Met</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">20 TB+</span>
                    <span className="small text-white opacity-90">Daily Distributed Dynamic Backups</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">100%</span>
                    <span className="small text-white opacity-90">Certified Technical Engineers Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting GRID FOR MANAGED HOSTING
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Managed Hosting Services
          </h2>

          <div className="row g-3">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>ITIL Aligned</strong> process definitions for handling risk free code deployments.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Scalable CPU & RAM allocation</strong> instantly without requiring re-imaging shutdowns.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  Complete isolation and customization control down to root OS binaries.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  Enhanced <strong>deep log analytics</strong> mapping tracking potential exploit scripts.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Full Multi-Region Offsite Replication</strong> mapping safe points every few hours.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  AI-driven monitoring systems ensuring <strong>predictive fault containment</strong>.
                </p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>DevOps Integration Ready</strong>, mapping pipelines seamlessly to staging web servers.
                </p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Enterprise Solid State Drives (NVMe)</strong> optimizing application request speeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: TRUSTED SEGMENTS & OPERATIONAL PILLARS
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-1 fs-2">Industries that run on JPRHosting Managed Hosting</h2>
          <p className="text-muted mb-4 fs-5">Powering heavy database workloads and microservice clusters over absolute safety parameters.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">BFSI & FinTech Networks</h5>
                <p className="text-muted small mb-0 lh-base">
                  Delivering transaction processing servers built over rigorous compliance modules, ensuring low latency payment settlements securely.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">E-Commerce Marketplaces</h5>
                <p className="text-muted small mb-0 lh-base">
                  Auto-scaling architecture handling millions of queries per second during concurrent sale surges seamlessly.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Healthcare & Core IT</h5>
                <p className="text-muted small mb-0 lh-base">
                  Encrypted patient telemetry clusters operating under reliable, compliant data storage structures.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Operational hosting sustainability – 5 core pillars</h2>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: ACCORDION FAQs
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">FAQs</h2>

          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              {
                q: "What is Managed Hosting?",
                a: "Managed Hosting is an IT deployment model where the client leases dedicated server hardware but delegates daily operating system patching, tracking, optimization, data recovery setups, and firewall management to our certified systems engineering experts."
              },
              {
                q: "How does it differ from traditional self-managed hosting?",
                a: "In self-managed hosting, you only receive raw server space; everything else—from shell scripting to server configurations—is your responsibility. With managed hosting, JPRHosting handles complex configurations, monitoring, patch management, and optimization for you."
              },
              {
                q: "What operating systems are supported under your management tiers?",
                a: "We support all primary corporate Linux builds (RedHat Enterprise Linux, Rocky Linux, Ubuntu LTS systems) alongside comprehensive support structures across different Windows Server operating systems."
              },
              {
                q: "How are urgent security vulnerability hotfixes handled?",
                a: "Our monitoring nodes track security feeds in real time. Critical patches are thoroughly audited on parallel staging environments and then pushed to your live servers during pre-approved maintenance windows to avoid downtime."
              },
              {
                q: "Can I scale my CPU and memory resources mid-way?",
                a: "Yes. Our systems allow you to dynamically upscale computing resources to handle sudden traffic peaks without needing complex migrations or configuration changes."
              },
              {
                q: "What parameters are checked under your 24x7 monitoring system?",
                a: "We track memory exhaustion benchmarks, CPU utilization anomalies, disk IOPS constraints, network transmission drop rates, deep database transaction queries, and login irregularities to maintain optimal server performance."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded border border-light shadow-sm overflow-hidden"
                >
                  {/* Accordion Header */}
                  <div 
                    className="p-3 d-flex align-items-center justify-content-between style-pointer"
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

                  {/* Accordion Body */}
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