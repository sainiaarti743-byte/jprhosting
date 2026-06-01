import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HyperSlider from './HyperSlider';
import SEO from '../SEO';

const HyperscaleServices = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
    <SEO 
        title="Multi-Cloud Hyperscale Integration Partners"
        description="Integrated cloud ecosystems uniting market giants like AWS, Azure, Google Cloud, and Oracle under one managed interface dashboard."
        keywords="hyperscale cloud providers, multi cloud management India"
        url="https://jprhosting.in/cloudservices/hyperscale-partner-cloud-services"
      />
    <HyperSlider/>
      <main style={{ backgroundColor: '#f8f9fa' }}>
        
        {/* SECTION 1: Adopt the Right Cloud */}
        <section className="py-5 bg-white overflow-hidden">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-6">
                <h1 className="fw-bold mb-4 text-dark display-6">
                  Adopt the right cloud platform for your digital ambition
                </h1>
                <p className="text-muted mb-3">Enterprises seek agility, flexibility and choices while selecting and adopting cloud platform.</p>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  JPRHosting is well-poised to be your ideal cloud partner and enable you to achieve your digital ambition. Our Cloud@Core model is based on our <b>cloud engineering skills</b>, investments across the entire cloud spectrum...
                </p>
                {/* Gray Dots Decoration */}
                <div className="d-flex flex-wrap w-50 opacity-25">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="rounded-circle bg-secondary m-1" style={{ width: '6px', height: '6px' }}></div>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
              <img src="/assets/img2/Hyperscale-Partner-cloud-1.svg" alt="K8s Illustration" className="img-fluid" />
            </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Service Offerings */}
        <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
          <div className="container">
            <h2 className="fw-bold mb-5">Our service offerings</h2>
            <div className="row g-4">
              {services.map((s, i) => (
                <div key={i} className="col-md-3">
                  <div className="d-flex flex-column h-100 p-3 bg-white rounded-3 shadow-sm">
                    <div className="mb-3 p-2 border rounded w-50 text-center fw-bold small bg-light">
                      {s.brand}
                    </div>
                    <h5 className="fw-bold mb-3">{s.title}</h5>
                    <p className="text-muted small mb-4 flex-grow-1">{s.desc}</p>
                    <button className="btn btn-dark btn-sm rounded-pill px-4 w-fit">Know More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Why Customers Choose JPRHosting(Dark Section) */}
        <section className="py-5 text-white" style={{ background: '#000814', position: 'relative' }}>
          <div className="container">
            <h2 className="fw-bold mb-5">
              Why customers choose <span style={{ color: '#c6e217' }}>JPRHosting</span>
            </h2>
            <div className="row g-1">
              {reasons.map((r, i) => (
                <div key={i} className="col-md-4 p-4 border border-secondary border-opacity-25 hover-bg-dark">
                  <h5 style={{ color: '#c6e217' }} className="fw-bold mb-3">{r.title}</h5>
                  <p className="small text-light text-opacity-75">{r.p1}</p>
                  <p className="small text-muted fst-italic">{r.p2}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQs */}
        <section className="py-5 bg-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="fw-bold mb-4">FAQs</h2>
            <div className="accordion accordion-flush" id="faqAccordion">
              {faqs.map((faq, i) => (
                <div className="accordion-item mb-3 border shadow-sm rounded-3 overflow-hidden" key={i}>
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openFaq === i ? '' : 'collapsed'} ${openFaq === i ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openFaq === i ? 'show' : ''}`}>
                    <div className="accordion-body text-muted small">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};



// DATA CONSTANTS
const services = [
  { brand: 'AWS', title: 'AWS Cloud Services', desc: 'JPRHosting accelerates your AWS cloud journey through seamless migration, strengthening your future digital footprint through IT modernization...' },
  { brand: 'Microsoft', title: 'Microsoft Cloud Services', desc: "JPRHosting's Cloud@Core philosophy drives adoption around Microsoft's cloud strategy to enable transformation and better operational efficiency..." },
  { brand: 'Google', title: 'Google Cloud Services', desc: "JPRHosting's Google services enable and streamline the adoption of cloud for intelligent data, analytics, and enterprise workloads..." },
  { brand: 'Oracle', title: 'Oracle Cloud Services', desc: "JPRHosting's Oracle cloud services help enterprises migrate existing on-prem Oracle products and applications to the cloud and manage them." }
];

const reasons = [
  { title: 'Advisory & migration expertise', p1: 'Comprehensive tool-based discovery and assessment for cloud migration', p2: 'Experience in 200+ complex cloud migration projects' },
  { title: 'Multi cloud management and cloud optimization services', p1: 'Providing customers better visibility and control while enabling cloud usage policy...', p2: '' },
  { title: 'Unified security and compliance automation', p1: 'Ensuring unified security and visibility on a single console with augmented controls...', p2: '' },
  { title: 'Hybrid cloud-led digital infrastructure', p1: 'Offering cloud-adjacent data centers and GlobalCloudConnect to hyperscale CSPs...', p2: '' },
  { title: 'IT Modernization', p1: 'Cloud-agnostic digital infrastructure and value stream management solutions around DevSecOps...', p2: '' },
  { title: 'Skills & certifications', p1: '500+ certified cloud professionals, 150+ dedicated, highly skilled cloud engineering experts', p2: '' }
];

const faqs = [
  { q: "What are Hyperscale Partner Cloud Services?", a: "Hyperscale Partner Cloud Services are scalable cloud computing solutions designed to support large-scale applications and workloads. They leverage advanced infrastructure to provide high performance, flexibility, and efficiency for businesses looking to expand their cloud capabilities." },
  { q: "How can businesses benefit from using Hyperscale Partner Cloud Services?", a: "Benefits include global reach, extreme scalability, and pay-as-you-go pricing models." },
  { q: "What types of organizations typically utilize Hyperscale Partner Cloud Services?", a: "Enterprises, startups, and government agencies all use these services for agility." },
  { q: "Are Hyperscale Partner Cloud Services secure?", a: "Yes, they feature advanced encryption, identity management, and compliance certifications." },
  { q: "How do Hyperscale Partner Cloud Services differ from traditional cloud services?", a: "They offer massive scale, deeper feature sets, and more automated management tools." }
];


export default HyperscaleServices;