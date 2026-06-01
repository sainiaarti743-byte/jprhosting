import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const ImmersiveExperience = () => {
  return (
    <>
    
   <SEO 
        title="Immersive AR / VR Corporate Design Solutions"
        description="Craft next-generation production mockups and highly spatial simulation environments using cutting-edge interactive web assets."
        keywords="augmented reality simulation development virtual reality business models"
        url="https://jprhosting.in/digital-services/digital-xr/immersive-experience"
      />
    <div className="xr-landing-page">
      
      {/* 1. Hero Section (Ref: Screenshot 2026-05-14 at 12.01.12 PM.jpg) */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="display-5 fw-bold text-lime" style={{ color: '#adff2f' }}>
            Deliver innovative end-user <br />
            experience with extended reality <br />
            solutions
          </h1>
        </div>
      </section>

      {/* 2. Intro Section with Image (Ref: Screenshot 2026-05-14 at 12.01.12 PM.jpg) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x400" alt="VR Illustration" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Virtual Reality Services that deliver exceptional user experiences</h2>
              <p className="text-muted">
                JPRHosting's Extended Reality solutions use AR/VR, MR, and AI tools to help organizations 
                <strong> create an immersive experience for people, products and processes</strong>, 
                using design thinking. Our custom-built Extended Reality solutions are scalable and 
                compliant with industry-standard privacy, security, and health and safety guidelines.
              </p>
              <div className="dot-pattern mt-4" style={{ letterSpacing: '8px', color: '#ccc', fontSize: '24px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights Section (Ref: Screenshot 2026-05-14 at 12.01.18 PM.png) */}
      <section className="py-5" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-4">
            {[
              { title: "AR-iPad based training", desc: "Augmented-Reality-based training and performance support delivered on iPad device" },
              { title: "Dual Access", desc: "WebGL/Quest-based VR for training manufacturing operators on customized, context-specific engineering skills" },
              { title: "VR Haptics", desc: "Haptic glove-based VR for training laboratory analysts on compliance skills" },
              { title: "VR for Leadership Training", desc: "Virtual-Reality-based training to help managers increase self-awareness about their unconscious biases during hiring and coaching" },
              { title: "VR-Onboarding", desc: "Virtual-Reality-based onboarding experiences to provide new joiners a real and personal connect to the organization" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-4 h-100" style={{ borderLeft: '5px solid #adff2f', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Platforms and Devices (Ref: Screenshot 2026-05-14 at 12.01.27 PM.jpg) */}
      <section className="py-5 bg-white overflow-hidden" style={{ position: 'relative' }}>
        <div className="container">
          <h2 className="fw-bold mb-4">Platforms and devices for XR solutions and services</h2>
          <h5 className="mb-4">Standard Virtual Reality Solutions</h5>
          <div className="row row-cols-2 row-cols-md-5 g-3">
            {["Smartphone-based VR", "Oculus Go", "HTC Vive", "Oculus Rift S", "Oculus Quest"].map((device, idx) => (
              <div className="col" key={idx}>
                <div className="card h-100 text-center p-3 border-light shadow-sm" style={{ borderBottom: '3px solid #adff2f' }}>
                  <img src="https://via.placeholder.com/150" className="mx-auto mb-3 img-fluid" alt={device} />
                  <p className="fw-bold small mb-0">{device}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Yellow decorative curve background */}
        <div style={{ position: 'absolute', right: '-10%', bottom: '0', width: '40%', height: '100%', background: 'radial-gradient(circle, rgba(173,255,47,0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
      </section>

      {/* 5. Why Customers Choose (Ref: Screenshot 2026-05-14 at 12.01.44 PM.jpg) */}
      <section className="py-5" style={{ backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at 10% 20%, #1a1a1a 0%, #000 100%)' }}>
        <div className="container">
          <h2 className="text-white mb-5">Why customers choose <span style={{ color: '#adff2f' }}>JPRHosting</span></h2>
          <div className="row g-4">
            {[
              { title: "Learning at the core", desc: "Over two decades of helping organizations with the digital transformation of their content using our custom learning and content solutions..." },
              { title: "Modern design", desc: "Help modernize your organization's learning program using human-centric design for digital augmentation..." },
              { title: "Innovative solutions", desc: "We improve people, process, and product development by helping users gain knowledge, and facilitating application..." },
              { title: "Return on Investment", desc: "Our ROI matrix for clients ensures improvement in time to competence, reduces training time, increases productivity..." }
            ].map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="p-4 h-100" style={{ backgroundColor: '#333', border: '1px solid #adff2f', borderRadius: '8px' }}>
                  <h4 style={{ color: '#adff2f' }}>{item.title}</h4>
                  <p className="text-light small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Buttons (Visible in multiple screenshots) */}
      <div className="position-fixed end-0 top-50 translate-middle-y d-flex flex-column gap-2 pe-2" style={{ zIndex: 1000 }}>
        <div className="p-2" style={{ backgroundColor: '#adff2f' }}><i className="bi bi-broadcast"></i></div>
        <div className="p-2" style={{ backgroundColor: '#adff2f' }}><i className="bi bi-telephone-fill"></i></div>
      </div>

    </div>
     </>
  );
};

export default ImmersiveExperience;