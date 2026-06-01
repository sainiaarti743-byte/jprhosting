import React, { useState } from 'react';
import SEO from '../SEO';

const Investors = () => {
  // FAQ template components mapping or internal layout nodes toggle state if needed
  const [activeReport, setActiveReport] = useState(0);

  return (

    <>
    <SEO 
        title="Investor Relations & Corporate Governance"
        description="Access JPRHosting investor data, financial updates, corporate growth reports, announcements, and stakeholder performance evaluations."
        keywords="investor relations, financial metrics, corporate governance, JPRHosting investors"
        url="https://jprhosting.in/investors"
      />
    
    
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
    

      {/* ==========================================
          SECTION 1: HERO SECTION
         ========================================== */}
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(15,25,35,0.95), rgba(20,40,60,0.85)), url("/assets/banner/enterprise-network-connectivity.jpg")',
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
                <span style={{ color: '#d4af37' }}>Investor Relations</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">
                  Driving innovation, scalability, and sustainable digital infrastructure growth.
                </p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                View Financial Reports
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
          SECTION 2: COMPANY OVERVIEW
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-2">Company Overview</h2>
              <p className="text-muted mb-4 fs-6">
                Building India's premier digital backbone with next-generation network distribution matrices and hyperscale systems infrastructure.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                We stand at the core convergence of <strong>enterprise ICT execution, digital structural cloud ecosystems, and absolute system integrity architecture</strong>. By running operations over highly efficient interconnected network fabrics, we consistently enable corporate businesses and government complexes to run fluid digital transformation programs. Our robust operational delivery maps directly to sustained, long-term stakeholder margin capitalization across expanding digital horizons.
              </p>

              {/* Decorative Dot Matrix Grid Element */}
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
                  <i className="bi bi-building fs-1 mb-2"></i>
                  <p className="small mb-0">[ Corporate Footprint & Enterprise Grid Placeholder ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: FINANCIAL HIGHLIGHTS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#142534' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Financial Highlights</h2>
          <p className="mb-5 opacity-75 fs-6 fw-light">Robust fiscal tracking driving consistent equity validation performance metrics</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                <p className="text-white-50 mb-0 pt-5">[ Q-o-Q Enterprise Revenue Growth Curves Chart ]</p>
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Consolidated</span>
                    <span className="small text-white opacity-75">Revenue streams expanding across targeted ICT channels</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Healthy</span>
                    <span className="small text-white opacity-75">EBITDA margin parameters secured via asset optimization rules</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Sustained</span>
                    <span className="small text-white opacity-75">Capital deployment cycles focused on high-capacity assets</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Strong</span>
                    <span className="small text-white opacity-75">Cash flow management supporting systemic market expansions</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Optimized</span>
                    <span className="small text-white opacity-75">Debt profiles aligning strictly with global capital standards</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-6 fw-bold text-info me-2">Increased</span>
                    <span className="small text-white opacity-75">Earnings distribution visibility for long-term backing portfolios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: ANNUAL REPORTS
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Annual Reports</h2>
          
          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              { year: "Annual Report 2025 - 2026", desc: "Comprehensive analysis of fiscal year performance, digital asset additions, core market capitalization parameters, and comprehensive audited financial balances details." },
              { year: "Annual Report 2024 - 2025", desc: "Historical documentation covering the integration of multi-cloud network endpoints, baseline infrastructure buildouts, and initial corporate structural growth tracks." },
              { year: "Annual Report 2023 - 2024", desc: "Strategic archive mapping structural capital allocations, early stage datacenter footprints expansion setups, and baseline system orchestration reviews." }
            ].map((report, index) => {
              const isOpen = activeReport === index;
              return (
                <div key={index} className="bg-light rounded border border-light overflow-hidden">
                  <div 
                    className="p-3 d-flex align-items-center justify-content-between"
                    style={{ 
                      cursor: 'pointer', 
                      backgroundColor: isOpen ? '#4a4a4a' : '#ffffff',
                      color: isOpen ? '#ffffff' : '#212529',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => setActiveReport(isOpen ? null : index)}
                  >
                    <span className="fw-semibold small">{isOpen ? '−' : '+'} &nbsp; {report.year}</span>
                    <span className="small text-warning px-2"><i className="bi bi-download"></i> PDF</span>
                  </div>
                  {isOpen && (
                    <div className="p-4 bg-white border-top border-light">
                      <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>{report.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: LEADERSHIP MESSAGE
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Leadership Message</h2>
          <div className="bg-white p-4 rounded shadow-sm border border-light">
            <p className="text-dark fs-6 font-italic" style={{ lineHeight: '1.8' }}>
              "Our structural execution remains centered around building digital resilience parameters that convert raw technological velocity into sustainable business enterprise margins. By focusing heavily on capital expenditure efficiency, asset-light expanding network routes, and structural cloud software integrity setups, we safeguard our balance sheets while opening up continuous long-tail revenue avenues. We thank our financial partners for backing our digital transition roadmap values systematically."
            </p>
            <div className="mt-3">
              <h6 className="fw-bold text-dark mb-0">Board of Directors & Executive Management</h6>
              <span className="text-muted small">Strategic Corporate Governance Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: GROWTH STRATEGY & MARKET EXPANSION
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            
            {/* Growth Strategy */}
            <div className="col-md-6">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #198754' }}>
                <h4 className="fw-bold text-dark mb-3">Growth Strategy</h4>
                <p className="text-muted small mb-0 lh-base">
                  Accelerating operational scale by moving monolithic enterprise platforms into high-value managed cloud micro-framework arrays. We actively integrate automated software pipelines alongside cloud architecture scaling parameters to reduce overheads while expanding delivery metrics.
                </p>
              </div>
            </div>

            {/* Market Expansion */}
            <div className="col-md-6">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #0dcaf0' }}>
                <h4 className="fw-bold text-dark mb-3">Market Expansion</h4>
                <p className="text-muted small mb-0 lh-base">
                  Extending our core interconnected digital edge hubs across high-load regional tech corridors and sovereign data storage perimeters. This spatial expansion introduces enterprise hosting solutions directly into newly industrialized corporate zones across the country.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: ESG & SUSTAINABILITY
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#133520' }}>
        <div className="container py-4">
          <h2 className="fw-bold text-white mb-2 fs-2">ESG & Sustainability</h2>
          <p className="mb-4 opacity-75 small">Validating ecological benchmarks within enterprise compute engineering</p>
          
          <div className="row g-3">
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 p-4 rounded h-100">
                <h6 className="fw-bold text-warning mb-2">Environmental Auditing</h6>
                <p className="text-white-50 small mb-0">Transitioning mass server frameworks to sustainable green power matrices to flatten operational carbon prints.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 p-4 rounded h-100">
                <h6 className="fw-bold text-warning mb-2">Social Responsibility</h6>
                <p className="text-white-50 small mb-0">Investing systematically in digital literacy programs and community-oriented technological access gateways.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 p-4 rounded h-100">
                <h6 className="fw-bold text-warning mb-2">Corporate Governance</h6>
                <p className="text-white-50 small mb-0">Enforcing strict transparency practices, explicit risk management policies, and balanced board audits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: INVESTOR CONTACT INFORMATION
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Investor Contact Information</h2>
          <div className="bg-white p-4 rounded shadow-sm border border-light">
            <div className="row g-4">
              <div className="col-md-6">
                <h6 className="fw-bold text-dark mb-2"><i className="bi bi-envelope-fill text-warning me-2"></i> Institutional Investor Desk</h6>
                <p className="text-muted small mb-0">For institutional holdings inquiries, analyst tracking coordinates, and equity portfolio reviews:<br /><strong>investor.relations@JPRHostingcorp.com</strong></p>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold text-dark mb-2"><i className="bi bi-geo-alt-fill text-warning me-2"></i> Share Transfer & Compliance Office</h6>
                <p className="text-muted small mb-0">For retail share operations, physical transfers documentation processing, and regulatory compliance alignment:<br /><strong>compliance.desk@JPRHosting.com</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  );
};

export default Investors;