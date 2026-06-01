import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntergrationSlider from './IntergrationSlider';
import TrustedPartner from '../../page/TrustedPartner';
import CustomerStories from '../../page/CustomerStories';
import SEO from '../SEO';

const IntergrationServices = () => {
  const sifyGreen = "#adff2f";

  return (
    <>
    <SEO 
        title="End-to-End Enterprise Systems Integration Solutions"
        description="Unify fragmented database channels, physical components, and software panels into a singular workflow design."
        keywords="systems integration company IT infrastructure convergence services"
        url="https://jprhosting.in/integration-services"
      />
    <IntergrationSlider/>
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* 1. Integration Challenges Section - Ref: Screenshot 2026-05-14 at 2.52.55 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Addressing technology integration challenges across the enterprise digital lifecycle</h2>
              <p className="text-muted small">
                Digital disruption has given rise to distributed applications in <strong>disparate environments</strong> across on-premises, hosted, cloud, and hybrid... It is imperative for organizations to ensure that disjointed elements—applications, data, and processes operate in unison.
              </p>
              <p className="text-muted small mt-3">
                At JPRHosting, we enable organizations to focus on their complex integration challenges through <strong>built-to-suit solutions</strong>.
              </p>
              <div className="mt-4 opacity-25 d-flex gap-2">
                {[...Array(10)].map((_, i) => <span key={i}>●</span>)}
              </div>
            </div>
            <div className="col-lg-7">
             <img src="/assets/img3/Integration-Spotlight.svg" alt="Edge Assets" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <TrustedPartner/>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 2.53.15 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-4">
            {[
              { title: "Data Center Integration Services", desc: "Pioneers in building reliable, agile, scalable, and secure data centers." },
              { title: "Network Integration Services", desc: "Building a safe and easy-to-manage intelligent network backbone." },
              { title: "Hybrid IT Integration Services", desc: "An innovative approach to owning and consuming IT with the best of all scenarios." },
              { title: "Digital Trust & Authentication Solutions", desc: "Over two decades of providing digital authentication and identity solutions." }
            ].map((service, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="h-100">
                  <div className="mb-3 fs-2 text-success">⚙️</div>
                  <h6 className="fw-bold">{service.title}</h6>
                  <p className="text-muted x-small my-3">{service.desc}</p>
                  <button className="btn btn-dark btn-sm rounded-pill px-3">Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why JPRHosting Grid - Ref: Screenshot 2026-05-14 at 2.53.23 PM.jpg */}
      <section className="py-5 text-white" style={{ background: '#050a1f', backgroundImage: 'radial-gradient(circle at center, #0a1931 0%, #050a1f 100%)' }}>
        <div className="container">
          <h3 className="mb-5">Why customers choose <span style={{ color: sifyGreen }}>JPRHosting</span></h3>
          <div className="row g-0">
            {[
              { t: "Leadership in complex project implementation", d: "Over 20 years of proven experience in successfully implementing large turnkey projects." },
              { t: "Expert in mission-critical projects", d: "Built & managed integrated data centers for more than 10 Indian states." },
              { t: "Integrated service offerings", d: "Spans across integrating hybrid IT, network, security, and managed services." },
              { t: "Creative commercial models", d: "Options to consume IT on dedicated, consumption, and outcome-based contracts." },
              { t: "Single partner, OEM agnostic", d: "OEM-neutral and customer-centric approach with shorter TAT." },
              { t: "Future-ready solution capabilities", d: "Extensive expertise across key industry verticals." }
            ].map((box, idx) => (
              <div className="col-md-4 border border-secondary" key={idx}>
                <div className="p-4 h-100 bg-transparent">
                  <h6 className="fw-bold" style={{ color: sifyGreen }}>{box.t}</h6>
                  <p className="x-small mt-3 opacity-75" style={{ lineHeight: '1.6' }}>{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerStories/>

      {/* 4. GTM Partners - Ref: Screenshot 2026-05-14 at 2.53.30 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h4 className="fw-bold">Our GTM partners</h4>
              <p className="text-muted x-small">Our strategic partners help us deliver unmatched business value.</p>
              <div className="mt-3 opacity-25">● ● ● ● ● ● ● ● ● ●</div>
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-wrap justify-content-around align-items-center gap-4 opacity-75 grayscale" style={{ filter: 'grayscale(100%)' }}>
                <img src="/assets/img/cloud.webp" height="40" alt="Cisco" />
                <img src="/assets/img/cloud.webp" height="30" alt="HPE" />
                <img src="/assets/img/cloud.webp" height="40" alt="Dell" />
                <img src="/assets/img/cloud.webp" height="25" alt="VMware" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default IntergrationServices;