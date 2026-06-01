import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppSlider from './AppSlider';
import SEO from '../../SEO';

const AppModernization = () => {
  return (
    <>
    <SEO 
        title="Application Modernization Services - Microservices Shift"
        description="Refactor old web services into clean, lightweight containerized setups. Enhance speed, maintainability, and horizontal scalability metrics."
        keywords="app modernization, legacy application refactoring, microservices architecture"
        url="https://jprhosting.in/digital-services/app-modernization"
      />
  <AppSlider/>
    <div className="modernization-page bg-light">
      
      {/* 1. Hero Section  */}
      <section className="py-5 container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">App modernization: Achieve unmatched agility and faster TTM</h1>
            <p className="mt-4 text-muted">
              The digital transformation initiative of any enterprise or startup functions with the need to accelerate application delivery...
            </p>
            <p className="text-muted">
              With its <strong>cloud-agnostic solutions, DevSecOps, and CI/CD services</strong>, JPRHosting delivers a compelling user experience.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
          <img src="/assets/img2/Application-Modernization.svg" alt="AWS Cloud" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* 2. Service Offerings  */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="mb-5 fw-bold">Our service offerings</h2>
          <div className="row text-center g-4">
            {[
              { title: "Kubernetes-as-a-Service", desc: "Ensure agile and flexible automated container orchestration..." },
              { title: "DevSecOps-as-a-Service", desc: "Accelerate time-to-value with enhanced visibility and control..." },
              { title: "Site Reliability Engineering", desc: "Enhance fault tolerance, uptime and scalability of applications..." }
            ].map((service, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-3">
                  <div className="mx-auto mb-4" style={{width: '80px', height: '80px', backgroundColor: '#f8f9fa', borderRadius: '50%'}}></div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="small text-muted mb-4">{service.desc}</p>
                  <button className="btn btn-dark btn-sm rounded-pill px-4">Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Value Proposition  */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-5">Value Proposition</h2>
          <div className="row g-0 align-items-stretch">
            <div className="col-md-8">
              <div className="row g-3">
                {[
                  { title: "Cost optimization", body: "Increased productivity and reduced spend by 30%" },
                  { title: "Agility", body: "Expedited time to market and accelerated feature velocity by 40%" },
                  { title: "Visibility", body: "Real-time visibility and tracking of feature delivery progress" },
                  { title: "Stability", body: "Improve security and compliance by reducing manual errors" }
                ].map((val, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="bg-white p-4 h-100 shadow-sm border-end border-bottom">
                      <h6 className="fw-bold">{val.title}</h6>
                      <p className="small text-muted">{val.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="h-100 bg-secondary d-flex align-items-center justify-content-center text-white">
                [Image: Woman using tablet - cite: Screenshot 2026-05-14 at 10.43.15 AM.jpg]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dark Horizontal Banner  */}
      <section className="py-5 text-white" style={{backgroundColor: '#1a001a'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h2 className="fw-bold">Why customers choose <span style={{color: '#cddc39'}}>us</span></h2>
            </div>
            <div className="col-md-9">
              <div className="row">
                {[
                  "Experience in architecting and deploying cloud-native digital infrastructures...",
                  "Holistic capabilities to provide digital transformation services...",
                  "Application modernization services that build on digital infrastructure..."
                ].map((text, idx) => (
                  <div key={idx} className="col-md-4 border-start border-3" style={{borderColor: '#cddc39 !important'}}>
                    <p className="small px-3">{text}</p>
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

export default AppModernization ;