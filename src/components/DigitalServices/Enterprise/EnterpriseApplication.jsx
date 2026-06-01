import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const EnterpriseApplication = () => {
    const limeColor = "#adff2f";
  return (
    <>
    <SEO 
        title="Enterprise Application Implementations & Integrations"
        description="Streamline standard corporate ERP networks with highly secure backend application layers crafted precisely for high-load distributions."
        keywords="enterprise apps management, corporate business management software systems"
        url="https://jprhosting.in/digital-services/enterprise-application-services"
      />
    
   
    <div className="app-services-page bg-white">

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

      
      {/* 1. Intro Section with Design Poster  */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Manage applications end-to-end and discover new business opportunities</h2>
              <p className="text-muted small">
                Businesses today require constant optimization of their IT operations to navigate complexities. 
                As a trusted leader in Application Managed Services, JPRHosting empowers enterprises to improve performance 
                and unlock new revenue streams.
              </p>
              <p className="text-muted small">
                JPRHosting's experts integrate efforts across <strong>Microsoft Azure, Oracle, SAP</strong>, and hybrid cloud environments.
              </p>
            </div>
            <div className="col-md-6 text-center">
              {/* Image Space for Screenshot 2026-05-14 at 11.57.11 AM.jpg */}
              <div className="p-3 border border-dashed rounded bg-light">
                <img 
                  src="/assets/img2/Enterprise-Application-Services-img.svg" 
                  alt="EAS SAP Oracle Azure Diagram - Screenshot 2026-05-14 at 11.57.11 AM.jpg" 
                  className="img-fluid"
                />
                {/* <p className="text-muted mt-2 x-small">[Image: EAS Circular Poster]</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Service Offerings  */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-4">
            {[
              { title: "SAP Enterprise Application Services", desc: "JPRHosting has over a decade of experience in providing SAP advisory, consulting, and management.", icon: "⚙️" },
              { title: "Microsoft Azure Enterprise Application Services", desc: "JPRHosting, being a Microsoft Gold Partner, provides assessment, migration, and managed services.", icon: "💻" },
              { title: "Oracle Enterprise Application Services", desc: "Use JPRHosting's Oracle Managed Services to optimize Oracle workloads, applications, and databases.", icon: "☁️" }
            ].map((service, idx) => (
              <div key={idx} className="col-md-4">
                <div className="h-100 p-2">
                  <div className="fs-1 mb-3">{service.icon}</div>
                  <h6 className="fw-bold">{service.title}</h6>
                  <p className="text-muted small" style={{fontSize: '0.85rem'}}>{service.desc}</p>
                  <button className="btn btn-dark btn-sm rounded-pill px-4 mt-2">Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Customers Choose JPRHosting  */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("path_to_fiber_optic_bg")',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-5"><span className="text-white">Why customers choose </span><span className="text-warning">JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { t: "End-to-end Application Managed Services", d: "From application consulting, support, and maintenance to complex cloud migrations." },
              { t: "Advisory and Migration expertise", d: "Comprehensive tool-based discovery and assessment with experience in 250+ projects." },
              { t: "Multi-Cloud Management", d: "Providing better visibility and control while enabling cloud usage policy." },
              { t: "IT Modernization", d: "Cloud-agnostic digital infrastructure and value stream management solutions." },
              { t: "Unified Security", d: "Enabling security and visibility on a single console with augmented controls." },
              { t: "Hybrid Cloud-Led Infrastructure", d: "Offering cloud-adjacent data centers and Global Cloud Connect." }
            ].map((reason, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' }}>
                  <h6 className="text-warning fw-bold">{reason.t}</h6>
                  <p className="small text-light opacity-75">{reason.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics with Images  */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="position-relative overflow-hidden rounded shadow">
                {/* Image Placeholder for 500+ professionals */}
                <div className="bg-secondary" style={{height: '250px'}}>
                  <img src="path_to_pro_image" alt="500+ professionals" className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="position-absolute bottom-0 start-0 p-4 text-white w-100" style={{background: 'linear-gradient(transparent, black)'}}>
                  <h2 className="fw-bold text-warning mb-0">500+</h2>
                  <p className="mb-0">certified cloud professionals</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative overflow-hidden rounded shadow">
                {/* Image Placeholder for 150+ resources */}
                <div className="bg-secondary" style={{height: '250px'}}>
                  <img src="path_to_team_image" alt="150+ resources" className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="position-absolute bottom-0 start-0 p-4 text-white w-100" style={{background: 'linear-gradient(transparent, black)'}}>
                  <h2 className="fw-bold text-warning mb-0">150+</h2>
                  <p className="mb-0">dedicated, highly skilled resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
     </>
  );
};

export default EnterpriseApplication;