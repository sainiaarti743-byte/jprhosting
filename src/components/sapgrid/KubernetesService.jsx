import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const KubernetesService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
    <SEO 
        title="Managed Kubernetes as a Service (K8s)"
        description="Deploy and automate container orchestration easily. Full control over node management, deployment load balance pipelines, and automatic patching."
        keywords="Kubernetes as a service, managed K8s cluster, container application hosting"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services/kubernetes-as-a-service"
      />
   
    <div className="k8s-page" style={{ backgroundColor: '#f8f9fa', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      
      {/* SECTION 1: HERO  */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#c6e217' }}>JPRHosting CloudInfinit Kubernetes Service</h1>
          <p className="fs-5 mb-4">
            <span style={{ borderLeft: '4px solid #c6e217', paddingLeft: '10px' }}>
              Delivering Agility, Efficiency, and Innovation to accelerate business growth!
            </span>
          </p>
          <button className="btn rounded-pill px-4 fw-bold" style={{ backgroundColor: '#c6e217', color: '#000' }}>Contact Us</button>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="intro-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/assets/img2/Sify-CloudInfinit-Kubernetes-CKS-img (1).webp" alt="K8s Illustration" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="small text-muted">Cloud-native applications are transforming software development, driving the need for greater agility, scalability, and reliability...</p>
              <p className="small text-muted">CKS is a secure, user-friendly managed platform for seamless container orchestration...</p>
              
              <div className="bg-light p-4 rounded-3 text-center mt-4" style={{ border: '1px solid #dee2e6' }}>
                <h6 className="fw-bold">Optimize your Cloud Strategy with JPRHosting CKS!</h6>
                <button className="btn btn-primary rounded-pill px-4 mt-2" style={{ backgroundColor: '#003366' }}>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HIGHLIGHTS  */}
      <section className="highlights-section py-5" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="container">
          <h2 className="fw-bold mb-4">Highlights</h2>
          <div className="row g-3">
            {highlights.map((text, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-4 h-100 shadow-sm border-start border-4" style={{ borderColor: '#c6e217' }}>
                  <p className="small fw-bold m-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE BLOCK  */}
      <section className="service-block-section py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">JPRHosting CloudInfinit Kubernetes Service Block</h2>
          <img src="/assets/img2/CKS-info-revised-img (1).svg" alt="Architecture" className="img-fluid rounded shadow" />
          <div className="mt-4 d-flex justify-content-center gap-2">
            <div className="px-5 py-2 fw-bold text-white" style={{ backgroundColor: '#c6e217', color: '#000', clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}>Users</div>
            <div className="px-5 py-2 fw-bold text-white flex-grow-1" style={{ backgroundColor: '#c6e217', color: '#000' }}>Core Platform</div>
            <div className="px-5 py-2 fw-bold text-white" style={{ backgroundColor: '#c6e217', color: '#000', clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}>K8s Clusters</div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES  */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Features</h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm border-bottom border-4" style={{ borderColor: i % 3 === 1 ? '#c6e217' : '#003366' }}>
                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-3">{f.title}</h6>
                    <p className="text-muted" style={{ fontSize: '13px' }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE  */}
      <section className="why-choose-section py-5 text-white" style={{ background: '#000' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Why Choose JPRHosting CKS</h2>
          <div className="row g-4">
            {whyChoose.map((text, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white text-dark p-4 rounded-3 h-100 text-center shadow">
                  <p className="small m-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS  */}
      <section className="faq-section py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">FAQs</h2>
          <div className="accordion">
            {faqs.map((faq, i) => (
              <div className="accordion-item border-0 mb-3 shadow-sm" key={i}>
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openFaq === i ? '' : 'collapsed'}`} 
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{ backgroundColor: openFaq === i ? '#555' : '#fff', color: openFaq === i ? '#fff' : '#000' }}
                  >
                    {openFaq === i ? '−' : '+'} &nbsp; {faq.q}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === i ? 'show' : ''}`}>
                  <div className="accordion-body small text-muted">
                    {faq.a}
                  </div>
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

const highlights = [
  "Automated provisioning and management of Kubernetes control plane and nodes",
  "High-availability cluster setup for redundancy and minimal downtime",
  "Seamless application deployment and scaling with Kubernetes manifests or Helm charts",
  "CI/CD integration for automated application deployment, scaling, and updates on Kubernetes clusters",
  "Private container registry for storing, versioning, and sharing container images within the tenancy",
  "Web-based Application Catalog for easy deployment, management, and monitoring of Kubernetes applications with Helm charts"
];

const features = [
  { title: "K8S Cluster Provisioning, Automation & Orchestration", desc: "Simplified provisioning across private and public clouds. Orchestrated scaling, upgrading, and decommissioning of K8S clusters." },
  { title: "Multi-Kubernetes-Cluster Management", desc: "Simplified web-interface to deploy applications, manage resources, and monitor performance across federation of K8S clusters." },
  { title: "Hybrid/Multi-Cloud Enablement", desc: "Direct Cloud Connect facilitates hybrid/multi-cloud strategies by integrating on-premises infra with various cloud environments." },
  { title: "Security & Compliance", desc: "Robust security measures, fine-grained access controls, and simplified policy management ensure compliance." },
  { title: "Low Latency Cloud Connectivity", desc: "Minimize network latency and guarantee high-speed data transfer, crucial for real-time applications." },
  { title: "Traffic Management, Monitoring & Observability", desc: "Leveraging Opensource traffic management and resource monitoring for proactive performance optimization." }
];

const whyChoose = [
  "Extensive experience in architecting and deploying cloud-native digital infrastructures- Kubernetes to optimize your containerized workloads.",
  "Tailored Kubernetes solutions to address businesses' specific requirements, from design and implementation to ongoing management.",
  "Comprehensive lifecycle management encompassing provisioning, scaling, patching, and updating of Kubernetes clusters.",
  "Continuous innovation and R&D with the latest Kubernetes features and best practices to keep you ahead.",
  "Vendor Neutrality allows leveraging the strengths of different cloud providers without being locked into a single ecosystem."
];

const faqs = [
  { q: "What is Kubernetes as a Service (KaaS)?", a: "Kubernetes as a Service (KaaS) is a cloud-based service that allows users to deploy, manage, and scale containerized applications using Kubernetes without the hassle of setting up and maintaining the underlying infrastructure." },
  { q: "What are the benefits of using JPRHosting's Kubernetes as a Service?", a: "Benefits include automated scaling, enhanced security, high availability, and reduced operational complexity." },
  { q: "How does JPRHosting ensure the security of applications deployed on Kubernetes?", a: "JPRHosting uses fine-grained access controls, network policies, and regular security updates to ensure a secure environment." },
  { q: "Can I migrate my existing applications to JPRHosting's Kubernetes as a Service?", a: "Yes, JPRHosting supports containerized application migration with expert consulting services." },
  { q: "What kind of support does JPRHosting offer for Kubernetes as a Service users?", a: "JPRHosting provides 24x7 managed support and lifecycle management for your K8s clusters." }
];

export default KubernetesService;