import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const AzureServices = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
    <SEO 
        title="Managed Microsoft Azure Cloud Integration"
        description="Migrate workloads to Microsoft Azure flawlessly with advanced resource management, setup compliance protocols, and cloud scaling tools."
        keywords="Azure cloud support, managed Microsoft Azure, enterprise Azure infrastructure"
        url="https://jprhosting.in/cloudservices/hyperscale-partner-cloud-services/azure"
      />
  
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      
      {/* HERO SECTION  */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#c6e217' }}>
            Azure Managed Cloud Services in India – Secure, <br /> Scalable & Cost-Optimised
          </h1>
          <button className="btn fw-bold px-4 py-2 rounded-pill" style={{ backgroundColor: '#c6e217', color: '#000' }}>
            Contact Us
          </button>
        </div>
      </section>

      {/* INTRO SECTION WITH VIDEO THUMBNAIL  */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="position-relative rounded-3 overflow-hidden shadow">
                <img src="/assets/img/cloud.webp" alt="Azure Webinar" className="img-fluid w-100" />
                <div className="position-absolute top-50 start-50 translate-middle">
                   <div className="bg-danger rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', cursor: 'pointer' }}>
                     <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '5px' }}></div>
                   </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-4">Azure Managed Cloud Services: Seamless access, easy migration</h2>
              <p className="text-muted small">Enterprises are moving business-critical use cases on Azure platform to enhance their digital journey through IT modernization. JPRHosting's <b>Azure Managed Cloud Services</b> offers a comprehensive suite of products and services that cover <b>assessment, migration, hybrid cloud management, Microsoft 365 adoption, and managed security services</b>.</p>
              <p className="text-muted small">Using home-grown and partner tools, we have automated the delivery of our services helping the transformation journey to be faster, accurate and operationally efficient.</p>
              <div className="d-flex flex-wrap mt-4 opacity-25 w-50">
                {[...Array(40)].map((_, i) => (
                  <div key={i} className="bg-secondary rounded-circle m-1" style={{ width: '6px', height: '6px' }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION  */}
      <section className="py-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-3">
            {azureHighlights.map((text, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-white p-4 h-100 border-start border-4 shadow-sm" style={{ borderColor: '#c6e217' }}>
                  <p className="mb-0 fw-bold small lh-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AZURE HYPERSCALE SERVICES  */}
      <section className="py-5 position-relative">
        <div className="container">
          <h2 className="fw-bold mb-5">Azure Hyperscale Services</h2>
          <div className="row g-4">
            {azureServices.map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 border-bottom border-4" style={{ borderColor: (i % 2 === 0 ? '#c6e217' : '#2c3e50') }}>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted small mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE JPRHosting */}
      <section className="py-5 text-white" style={{ background: '#000814' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c6e217' }}>JPRHosting</span></h2>
          <div className="row g-0 border border-secondary border-opacity-25">
            {reasons.map((r, i) => (
              <div className="col-md-4 p-4 border border-secondary border-opacity-25 bg-black" key={i}>
                <h5 className="fw-bold mb-3" style={{ color: '#c6e217' }}>{r.title}</h5>
                <p className="small text-light opacity-75">{r.p1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs SECTION  */}
      <section className="py-5 bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="fw-bold mb-4">FAQs</h2>
          <div className="accordion accordion-flush">
            {faqs.map((faq, i) => (
              <div className={`accordion-item mb-3 border rounded-3 overflow-hidden ${openFaq === i ? 'shadow' : 'border-light'}`} key={i}>
                <button 
                  className={`accordion-button shadow-none ${openFaq === i ? 'bg-dark text-white' : 'bg-white text-secondary'}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="me-3 fw-light fs-4">{openFaq === i ? '−' : '+'}</span>
                  {faq.q}
                </button>
                <div className={`accordion-collapse collapse ${openFaq === i ? 'show' : ''}`}>
                  <div className="accordion-body text-muted small px-5 pb-4">
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

// Data objects
const azureHighlights = [
  "Comprehensive hybrid and Azure centralized cloud management platform for deployment, cost optimization, compliance, and governance",
  "A solution provider who can offer cloud migration, cloud connectivity, and Azure professional services as a single partner",
  "One of the key Express Route providers pan India and hosting Government Community Cloud on Azure Stack for a major developed state government of India",
  "Microsoft LSP (Licensing Solution Provider), Tier 1 Direct CSP, SPLA Reseller, and Managed Reseller",
  "Microsoft Gold Partner (App Development & Integration, Cloud Platform, Collaboration, and Content)"
];

const azureServices = [
  { title: "Assessment Service", desc: "Gain an in-depth understanding of your workloads and cloud deployment recommendations to plan for the migration." },
  { title: "Azure Migration Service", desc: "Move out from any physical, virtual and cloud environments to Azure cloud." },
  { title: "Azure Implementation Service", desc: "Transform applications for cloud to run efficiently leveraging cloud-native technologies and best practices." },
  { title: "Azure Managed Service", desc: "Comprehensive, cost-optimized operations and effective management of hybrid Azure cloud deployment." },
  { title: "Azure Security Service", desc: "Leveraging cloud-native and partner security tools to provide maximum coverage for mitigating the risk." },
  { title: "Global Cloud Connect Service", desc: "Connect your on-premises data centers with cloud workloads over a secure and deterministic network." }
];

const reasons = [
  { title: "Advisory & migration expertise", p1: "Comprehensive tool-based discovery and assessment with experience in 200+ complex cloud projects." },
  { title: "Multi cloud management", p1: "Providing customers better visibility and control while maintaining governance and regulations." },
  { title: "Unified security", p1: "Ensuring unified security and visibility on a single console with augmented controls." },
  { title: "Hybrid cloud-led digital infrastructure", p1: "Offering cloud-adjacent data centers and GlobalCloudConnect to hyperscale CSPs." },
  { title: "IT modernization", p1: "Cloud-agnostic digital infrastructure and value stream management solutions around DevSecOps." },
  { title: "Skills & certifications", p1: "500+ certified cloud professionals, 150+ dedicated, highly skilled cloud engineering experts." }
];

const faqs = [
  { q: "What are Azure Managed Cloud Services?", a: "Azure Managed Cloud Services help businesses run and manage their applications on Microsoft Azure efficiently. They include setup, monitoring, security, and support." },
  { q: "What are Hyperscale Partner Cloud Services in Azure?", a: "These are large-scale cloud solutions provided in collaboration with top hyperscale providers like Microsoft." },
  { q: "Who can benefit from Azure Hyperscale services?", a: "Enterprises seeking high scalability, government agencies requiring secure hosting, and businesses migrating legacy apps." }
];

export default AzureServices;