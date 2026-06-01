import React, { useState } from 'react';
import SEO from '../SEO';

const Careers = () => {
  // Hiring process ya open positions list ke panels handle karne ke liye state
  const [selectedJob, setSelectedJob] = useState(null);

  return (
<>
<SEO 
        title="Careers - Join Our Cloud & Engineering Teams"
        description="Explore current job openings at JPRHosting. Work with cutting-edge LiteSpeed server technology, frontend tools, and cloud deployment frameworks."
        keywords="tech jobs jaipur, software developer careers, cloud engineer jobs, work at JPRHosting"
        url="https://jprhosting.in/careers"
      />


    
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
    

      {/* ==========================================
          SECTION 1: HERO SECTION
         ========================================== */}
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(10,30,40,0.95), rgba(20,50,65,0.85)), url("/assets/banner/Digital_app-modernization.jpg")',
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
                Build Your Future With <span style={{ color: '#d4af37' }}>JPRHosting</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">
                  Join a team passionate about cloud innovation, cybersecurity, digital transformation, and enterprise technology.
                </p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Explore Open Roles
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
          SECTION 2: WHY JOIN US
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-2">Why Join Us</h2>
              <p className="text-muted mb-4 fs-6">
                We empower innovators to build highly responsive cloud fabrics and protect large scale corporate digital assets.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                Working at JPRHosting means being part of a team focused on <strong>disruptive technical engineering, robust architectural scaling, and next-generation systems safety pipelines</strong>. We systematically dissolve traditional workspace boundaries, giving our core engineering and product modules the absolute autonomy to run experiments, deploy modern solutions, and redefine live cloud operations maps directly for enterprise markets globally.
              </p>

              {/* Decorative Dot Matrix Layout Node */}
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
                  <i className="bi bi-people-fill fs-1 mb-2"></i>
                  <p className="small mb-0">[ Global Team Innovation Hub Placeholder ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: OPEN POSITIONS
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Open Positions</h2>
          
          <div className="row g-3">
            {[
              { id: 1, title: "Cloud Infrastructure Engineer", team: "Engineering", loc: "Jaipur / Remote", exp: "3+ Years" },
              { id: 2, title: "Frontend Developer (React / Bootstrap)", team: "UI/UX Development", loc: "Jaipur Office", exp: "2+ Years" },
              { id: 3, title: "Cybersecurity Analyst", team: "SecOps Core", loc: "Remote", exp: "4+ Years" },
              { id: 4, title: "Technical Project Lead", team: "Enterprise Delivery", loc: "Jaipur Office", exp: "6+ Years" }
            ].map((job) => (
              <div key={job.id} className="col-12 col-md-6">
                <div 
                  className="bg-white p-4 rounded shadow-sm d-flex justify-content-between align-items-center"
                  style={{ borderLeft: selectedJob === job.id ? '4px solid #ffc107' : '4px solid transparent', transition: 'all 0.2s' }}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div>
                    <h6 className="fw-bold text-dark mb-1">{job.title}</h6>
                    <span className="text-muted small d-block mb-1"><i className="bi bi-folder2-open"></i> {job.team} &nbsp;|&nbsp; <i className="bi bi-geo-alt"></i> {job.loc}</span>
                    <span className="badge bg-secondary opacity-75 fw-normal">{job.exp}</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark rounded-pill px-3">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: WORK CULTURE
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Work Culture</h2>
          <div className="bg-light p-4 rounded border border-light">
            <p className="text-dark fs-6" style={{ lineHeight: '1.8' }}>
              Our operational ecosystem is anchored entirely on <strong>blameless post-mortems, transparent milestone communication paths, and mutual technical backing</strong>. We completely discard traditional rigid logging schedules to build flexible async environments where engineers determine execution workflows based on production stability indicators. We prioritize structural clarity, ownership principles, and individual growth goals above micromanaged tracking models.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: EMPLOYEE BENEFITS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#112233' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Employee Benefits</h2>
          <p className="mb-5 opacity-75 fs-6 fw-light">Holistic corporate welfare structures protecting our core talent arrays</p>

          <div className="row g-4 text-start">
            <div className="col-md-4 border-bottom border-white border-opacity-25 pb-3">
              <h6 className="fw-bold text-info mb-2">Comprehensive Health Care</h6>
              <p className="small text-white opacity-75 mb-0">Premium medical protection plans covering both employees and active dependent family members completely.</p>
            </div>
            <div className="col-md-4 border-bottom border-white border-opacity-25 pb-3">
              <h6 className="fw-bold text-info mb-2">Flexible Work Frameworks</h6>
              <p className="small text-white opacity-75 mb-0">Fluid remote workspaces and core async tracking rules allowing perfect performance vs health ratios.</p>
            </div>
            <div className="col-md-4 border-bottom border-white border-opacity-25 pb-3">
              <h6 className="fw-bold text-info mb-2">Performance Capital Gains</h6>
              <p className="small text-white opacity-75 mb-0">Bi-annual systematic appraisal metrics and high-yield operational performance incentives allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: LEARNING & DEVELOPMENT
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">Learning & Development</h2>
          <p className="text-muted small mb-4 lh-base">
            Continuous skill calibration loops built directly inside our product lifecycle models.
          </p>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #198754' }}>
                <h5 className="fw-bold text-dark mb-2">Global Certifications Backing</h5>
                <p className="text-muted small mb-0">Fully sponsored validation passes for modern cloud paths across AWS, Microsoft Azure, Google Cloud, and enterprise SecOps setups.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #ffc107' }}>
                <h5 className="fw-bold text-dark mb-2">Internal Tech Workshops</h5>
                <p className="text-muted small mb-0">Weekly engineering peer bootcamps covering complex infrastructure breakdowns, fault mitigation scripts, and core architecture optimization runs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: INTERNSHIP PROGRAMS
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-3 fs-2">Internship Programs</h2>
          <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
            We actively run structured, high-intensity <strong>6-month tech residency internships</strong> for computer science post-graduates and technical candidates. Under direct guidance from engineering platform leads, interns get to interact with live container deployments, assist in writing backend automation loops, and deploy custom interface endpoints. Successful residents scale up directly into permanent corporate roles inside JPRHosting's core developer divisions.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: HIRING PROCESS
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 fs-2 text-center">Hiring Process</h2>
          
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-3 bg-light rounded border border-light h-100">
                <span className="badge bg-dark mb-2">Step 01</span>
                <h6 className="fw-bold text-dark mb-2">Profile Review</h6>
                <p className="text-muted small mb-0">Our recruitment systems inspect technical portfolios and code repos alignment.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded border border-light h-100">
                <span className="badge bg-dark mb-2">Step 02</span>
                <h6 className="fw-bold text-dark mb-2">Technical Screen</h6>
                <p className="text-muted small mb-0">Live coding review evaluating code quality, algorithm depth, and styling structures.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded border border-light h-100">
                <span className="badge bg-dark mb-2">Step 03</span>
                <h6 className="fw-bold text-dark mb-2">System Design</h6>
                <p className="text-muted small mb-0">Deep evaluation testing structural scaling views, data layers, and cloud infrastructure logic.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded border border-light h-100">
                <span className="badge bg-dark mb-2">Step 04</span>
                <h6 className="fw-bold text-dark mb-2">Culture & Offer</h6>
                <p className="text-muted small mb-0">Mutual alignment chat defining roles expectations followed by standard compensation mapping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: APPLY NOW CTA
         ========================================== */}
      <section 
        className="py-5 text-white text-center" 
        style={{ backgroundColor: '#0a2332', borderTop: '4px solid #ffc107' }}
      >
        <div className="container py-4">
          <h2 className="fw-bold mb-3 display-6">Apply Now</h2>
          <p className="mb-4 opacity-75 fs-6">Don't see a matching position? Send us your resume anyway and we will alert you when a profile opens up.</p>
          
          <button 
            className="btn btn-warning fw-bold text-dark px-5 py-3 btn-lg rounded shadow"
            style={{ letterSpacing: '0.5px' }}
          >
            Submit Your Resume
          </button>
        </div>
      </section>

    </div>
    </>
  );
};

export default Careers;