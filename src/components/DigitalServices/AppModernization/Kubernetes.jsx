import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const Kubernetes = () => {
  return (
    <>
    <SEO 
        title="Kubernetes Pod Clustering & Container Automation"
        description="Build secure dynamic clustering platforms tailored perfectly for autoscaling production apps with advanced cluster isolations."
        keywords="Kubernetes infrastructure containerization, cluster orchestrations"
        url="https://jprhosting.in/digital-services/app-modernization/kubernetes"
      />
   
    <div className="kubernetes-page">

      {/* 1. Hero/Architect Section - Ref: Screenshot 2026-05-14 at 10.43.44 AM.jpg */}
      <section className="py-5 bg-white">
        <div className="container-fluid p-0 mb-5">
           <div className="bg-black text-warning p-4 fw-bold h3 mb-0">
             Agile and flexible operating environment for modern, distributed applications
           </div>
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Isometric Illustration Placeholder */}
              <div className="p-4">
                <img src="/assets/img2/Kubernates.png" alt="K8s Architecture" className="img-fluid" />
                {/* <p className="text-muted small text-center mt-2">[Ref: Screenshot 2026-05-14 at 10.43.44 AM.jpg]</p> */}
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Architect modern, distributed application landscapes with Kubernetes</h2>
              <p className="text-muted">
                Kubernetes is the de facto software-defined container orchestration for deployment and lifecycle management...
              </p>
              <p className="text-muted">
                JPRHosting's managed Kubernetes as a service provides solutions to <strong>eliminate day 2 governance challenges</strong>, including prevention of cluster sprawl, <strong>unified governance, and management dashboard across clusters</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights Grid - Ref: Screenshot 2026-05-14 at 10.44.16 AM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-4">
            {[
              { title: "Managed Kubernetes", body: "Offers architecture and configuration services for any Kubernetes distribution on any cloud" },
              { title: "Curated application catalog", body: "Deploy, manage, or upgrade applications within a predefined set of policies with desired standards" },
              { title: "Modern applications on Kubernetes", body: "Ensure seamless portability of a modern microservices application across Kubernetes clusters" },
              { title: "Policies and governance", body: "Validate, mutate, and generate Kubernetes resources with JPRHosting Kubernetes policy manager" }
            ].map((item, idx) => (
              <div key={idx} className="col-md-6">
                <div className="bg-white p-4 h-100 d-flex border-start border-4 shadow-sm" style={{borderColor: '#cddc39'}}>
                  <div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="small text-muted mb-0">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Outcomes - Ref: Screenshot 2026-05-14 at 10.44.28 AM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h4 className="fw-bold mb-5">Business outcome:</h4>
          <div className="row g-4">
            {[
              { title: "Cost optimization", desc: "Increased productivity and reduced spend by 30%", color: '#cddc39' },
              { title: "Agility", desc: "Expedited time to market and accelerated feature velocity by 40%", color: '#6c757d' },
              { title: "Visibility", desc: "Real-time visibility and tracking of feature delivery progress and KPIs", color: '#6c757d' },
              { title: "Stability", desc: "Improve security and compliance by reducing manual errors", color: '#cddc39' }
            ].map((outcome, idx) => (
              <div key={idx} className="col-md-6">
                <div className="card border-0 shadow-lg rounded-pill p-3 d-flex flex-row align-items-center">
                   <div className="hexagon-icon me-3 d-flex align-items-center justify-content-center text-white fw-bold" 
                        style={{
                          width: '60px', 
                          height: '60px', 
                          backgroundColor: outcome.color,
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                        }}>
                   </div>
                   <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1">{outcome.title}</h6>
                      <p className="small text-muted mb-0">{outcome.desc}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose JPRHosting (Black Banner) - Ref: Screenshot 2026-05-14 at 10.44.37 AM.jpg */}
      <section className="py-5 bg-black text-white">
        <div className="container">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{color: '#cddc39'}}>JPRHosting</span></h2>
          <div className="row g-4">
            {[
              "Experience in architecting and deploying cloud-native digital infrastructures, including Kubernetes and hybrid cloud.",
              "Holistic capabilities to provide digital transformation services, including infrastructure-led re-platforming.",
              "Application modernization services that build on digital infrastructure to establish zero trust pipelines."
            ].map((text, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 h-100 border border-secondary rounded">
                  <p className="small text-light opacity-75">{text}</p>
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

export default Kubernetes;