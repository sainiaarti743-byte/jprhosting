import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const DigitalLearning = () => {
  const limeColor = "#adff2f";

  return (
    <>
    <SEO 
        title="Digital Learning Systems & Advanced E-Learning Platforms"
        description="Interactive learning modules and modern educational story streaming platforms customized precisely for seamless instructional tasks."
        keywords="digital learning dashboards corporate training application systems"
        url="https://jprhosting.in/digital-services/digital-xr/digital-learning"
      />
   
    <div className="digital-learning-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      
      {/* Hero Section - Ref: Screenshot 2026-05-14 at 12.02.00 PM.jpg */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="fw-bold" style={{ color: limeColor, fontSize: '2.5rem' }}>
            Digital Learning Solutions for the <br /> Modern Workforce
          </h1>
          <div className="d-flex align-items-center mt-2">
            <div style={{ width: '4px', height: '30px', backgroundColor: limeColor, marginRight: '10px' }}></div>
            <p className="mb-0 fs-5">Enhance enterprise performance with digital learning at the core</p>
          </div>
        </div>
      </section>

      {/* Empowering Section - Ref: Screenshot 2026-05-14 at 12.02.00 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img src="https://via.placeholder.com/450x350" alt="Learning Illustration" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h2 className="fw-bold mb-4">Empowering employees with digital learning solutions</h2>
              <p className="text-secondary">
                With the influence of digital in all walks of our lives, we see an increased use of digital services in learning 
                and trainings. JPRHosting Digital Learning solutions help organizations empower their employees to <strong>acquire critical 
                knowledge and new skill sets</strong>, extend their existing skills, and build core competencies to meet the 
                operational requirements of the digital savvy work environment.
              </p>
              <div className="dot-grid mb-4" style={{ letterSpacing: '6px', color: '#dee2e6', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••<br />••••••••••••
              </div>
              <div className="p-4 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
                <span className="fw-bold small">Address your skill gaps with real-time, responsive learning experiences</span>
                <button className="btn btn-primary px-4 rounded-pill" style={{ backgroundColor: '#004085' }}>Click here to know more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights (Numeric) - Ref: Screenshot 2026-05-14 at 12.02.05 PM.png */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-4 text-center">
            {[
              { val: "10,000+ hours", label: "of learning content development" },
              { val: "20+ years", label: "of delivering comprehensive learning solutions" },
              { val: "100+ associates", label: "with onsite, offshore hybrid development" },
              { val: "500+ projects", label: "delivered" },
              { val: "50+ key customers", label: "including international agencies & Fortune 500 companies" },
              { val: "14 internationally", label: "recognized learning awards" }
            ].map((stat, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white p-4 h-100 shadow-sm" style={{ borderLeft: `5px solid ${limeColor}` }}>
                  <h4 className="fw-bold mb-1">{stat.val}</h4>
                  <p className="text-muted small mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services - Ref: Screenshot 2026-05-14 at 12.02.14 PM.jpg */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container">
          <h2 className="fw-bold mb-5">Key Services</h2>
          <div className="row g-4">
            {[
              { title: "Consulting & Advisory Services", desc: "Learning needs analysis, job task analysis, LMS consulting, L&D roadmap, skills or competency mapping..." },
              { title: "Content Development", desc: "Technical writing, online, blended or mobile training, simulation or scenario-based training, gamification..." },
              { title: "New Age Digital Solutions", desc: "Mobile learning - byte sized learning, interactive PDF, virtual reality, social learning, digital adoption platform..." },
              { title: "Globalization Services", desc: "Localization, translation (50+ languages), transcription services, close-captioning services..." },
              { title: "Learning Management System", desc: "LMS implementation and customization, LMS integration with existing applications, LMS hosting and support..." }
            ].map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderBottom: `4px solid ${limeColor}` }}>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>{service.desc}</p>
                </div>
              </div>
            ))}
            {/* Decorative Dot Section */}
            <div className="col-md-4 d-none d-md-block">
               <div className="h-100 d-flex align-items-end justify-content-center opacity-25" style={{ fontSize: '12px', letterSpacing: '12px' }}>
                 {Array(10).fill('• • • • • • •').join('\n')}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JPRHosting (Black Grid) - Ref: Screenshot 2026-05-14 at 12.02.21 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <h2 className="text-white mb-5">Why customers choose <span style={{ color: limeColor }}>JPRHosting</span></h2>
          <div className="row g-3">
            {[
              { title: "Learning at the core", desc: "Over two decades of helping organizations with the digital transformation of their content..." },
              { title: "Modern design", desc: "Help modernize your organization's learning program using human-centric design..." },
              { title: "Innovative solutions", desc: "We improve people, process, and product development by helping users gain knowledge..." },
              { title: "Return on Investment", desc: "Our ROI matrix for clients ensures improvement in time to competence, reduces training time..." }
            ].map((box, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 h-100" style={{ backgroundColor: '#2b2b2b', border: `1px solid ${limeColor}`, borderRadius: '4px' }}>
                  <h5 style={{ color: limeColor }}>{box.title}</h5>
                  <p className="text-light opacity-75 small">{box.desc}</p>
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

export default DigitalLearning;