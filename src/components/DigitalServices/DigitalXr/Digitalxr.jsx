import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const Digitalxr = () => {
  const limeColor = "#adff2f";
  return (
    <>
    
    <SEO 
        title="Extended Reality (XR) Platforms & Immersive Media"
        description="Transform standard workflows through immersive 3D visualization layers using customized enterprise virtual realities."
        keywords="extended reality tools XR development interactive applications"
        url="https://jprhosting.in/digital-services/digital-xr"
      />
    <div className="xr-services-container bg-white">

      
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/Networks_managed-network-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: limeColor }}>
            Bridge the Gap to the Cloud with JPRHosting Technologies' Expert Network Transformation
          </h2>
        </div>
      </section>

      {/* 1. Hero & Intro Section - Ref: Screenshot 2026-05-14 at 12.00.43 PM.jpg */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold h2 mb-4">Digital XR solutions and learning services</h1>
              <p className="text-muted small">The revolution in Digital XR and Learning is merging the physical and digital worlds, resulting in a fundamental change in how organizations design and build products, run operations, empower their workforce, and engage consumers.</p>
              <p className="text-muted small">JPRHosting employs novel approaches and methods, technologies, and tools to improve human and organizational capabilities through the use of <strong>interactive and immersive digital experiences</strong>.</p>
              
              {/* Blue Call-to-action box */}
              <div className="mt-4 p-4 rounded d-flex justify-content-between align-items-center" style={{ backgroundColor: '#eef4f9' }}>
                <span className="fw-bold small text-dark">XR Technologies for Improved Training, Process and Performance</span>
                <button className="btn btn-primary btn-sm px-4 rounded-pill" style={{ backgroundColor: '#003366' }}>Learn more</button>
              </div>
            </div>
            
            <div className="col-lg-6 text-center">
              {/* Digital XR and Learning Circular Diagram Placeholder */}
              <div className="p-2">
                <img 
                  src="path_to_xr_learning_wheel" 
                  alt="Digital XR and Learning Wheel - Screenshot 2026-05-14 at 12.00.43 PM.jpg" 
                  className="img-fluid"
                  style={{ maxWidth: '450px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 12.00.49 PM.png */}
      <section className="py-5 border-top border-light">
        <div className="container">
          <h2 className="fw-bold h3 mb-5">Our service offerings</h2>
          <div className="row g-5">
            {/* XR-as-a-Service */}
            <div className="col-md-6">
              <div className="mb-3">
                <img src="path_to_xr_icon" alt="XR Icon" style={{ width: '60px' }} />
              </div>
              <h4 className="fw-bold h5 mb-3">XR-as-a-Service</h4>
              <p className="text-muted small mb-4">Create multi-sensory immersive experiences to assess the workplace and people’s readiness for process transformations, leading to better assimilation, adoption and continual metrics-driven improvement.</p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm">Know More</button>
            </div>
            
            {/* Digital Learning Solutions */}
            <div className="col-md-6">
              <div className="mb-3">
                <img src="path_to_learning_icon" alt="Learning Icon" style={{ width: '60px' }} />
              </div>
              <h4 className="fw-bold h5 mb-3">Digital Learning Solutions</h4>
              <p className="text-muted small mb-4">Design and develop domain-specific learning experiences in varied content delivery formats based on established learning principles to bridge gaps in human development.</p>
              <button className="btn btn-dark rounded-pill px-4 btn-sm">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Highlights Grid - Ref: Screenshot 2026-05-14 at 12.00.55 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h3 mb-4">Key highlights</h2>
          <div className="row g-3">
            {[
              { val: "10,000+", desc: "hours of learning content development" },
              { val: "20+ years of", desc: "delivering learning solutions" },
              { val: "100+ associates", desc: "with onsite, offshore hybrid development" },
              { val: "500+", desc: "projects delivered" },
              { val: "50+ key customers", desc: "including international agencies and Fortune 500 companies" },
              { val: "14", desc: "internationally recognized learning awards" }
            ].map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="bg-white p-4 h-100 shadow-sm border-start border-4 border-warning text-center d-flex flex-column justify-content-center">
                  <h5 className="fw-bold mb-1">{item.val}</h5>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Dark Modern Background) - Ref: Screenshot 2026-05-14 at 12.01.01 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(rgba(0,10,30,0.9), rgba(0,10,30,0.9)), url("path_to_curved_lines_bg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Why customers choose <span className="text-warning">JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { t: "Learning at the core", d: "Over two decades of helping organizations with the digital transformation of their content using our custom learning and content solutions." },
              { t: "Modern design", d: "Help modernize your organization's learning program using human-centric design for digital augmentation to make experiences more engaging." },
              { t: "Innovative solutions", d: "We improve people, process, and product development by helping users gain knowledge and facilitating behavior change through innovative design." },
              { t: "Return on Investment", d: "Our ROI matrix ensures improvement in time to competence, reduces training time, and increases productivity through training intervention." }
            ].map((item, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 h-100 border border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)' }}>
                  <h6 className="text-warning fw-bold mb-3">{item.t}</h6>
                  <p className="small text-light opacity-75">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Digitalxr;