import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const AwsCloudServices = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (

    <>
    <SEO 
        title="Managed Amazon Web Services (AWS) Setup"
        description="Scale infrastructure securely using JPRHosting AWS managed optimization paths, cloud cost reductions, and advanced architecture fine-tuning."
        keywords="managed AWS solutions, cloud consulting AWS, Amazon server setup"
        url="https://jprhosting.in/cloudservices/hyperscale-partner-cloud-services/aws-cloud-services"
      />
    
    
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {/* HERO SECTION  */}
     <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4" style={{ color: '#c6e217' }}>
            Simplify and fast-track your migration to <br /> AWS cloud
          </h1>
          <button className="btn fw-bold px-4 py-2 rounded-pill" style={{ backgroundColor: '#c6e217', color: '#000' }}>
            Contact Us
          </button>
        </div>
      </section>

      {/* INTRO SECTION -  */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              {/* Illustration Placeholder */}
              <img src="/assets/img2/AWS-Cloud-Service.png" alt="AWS Illustration" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">AWS Cloud Services: Seamless access, easy migration</h2>
              <p className="text-muted small">Businesses are adopting AWS cloud for various use cases. JPRHosting, with its long-standing partnership... offers a comprehensive suite of products and services covering <b>assessment, migration, hybrid cloud management, and managed security services</b>.</p>
              <p className="text-muted small">As a <b>direct connect provider</b> of AWS, JPRHosting can provide <b>below-1ms-latency</b> between your hosted private cloud and AWS public cloud.</p>
              {/* Dots Pattern */}
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
      <section className="py-5" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-3">
            {highlights.map((text, i) => (
              <div className="col-md-6" key={i}>
                <div className="bg-white p-4 h-100 border-start border-4 shadow-sm" style={{ borderColor: '#c6e217' }}>
                  <p className="mb-0 fw-bold small text-dark">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYPERSCALE SERVICES SECTION  */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#fafafa', overflow: 'hidden' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">AWS Hyperscale Services</h2>
          <div className="row g-4">
            {awsServices.map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 border-bottom border-4" style={{ borderColor: (i % 2 === 0 ? '#c6e217' : '#2c3e50') }}>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted small">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION  */}
      <section className="py-5 text-white" style={{ background: '#000814' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c6e217' }}>JPRHosting</span></h2>
          <div className="row g-0 border border-secondary border-opacity-25">
            {reasons.map((r, i) => (
              <div className="col-md-4 p-4 border border-secondary border-opacity-25" key={i} style={{ backgroundColor: '#000' }}>
                <h5 className="fw-bold mb-3" style={{ color: '#c6e217' }}>{r.title}</h5>
                <p className="small text-light opacity-75">{r.p1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs SECTION   */}
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

// Data
const highlights = [
  "JPRHosting is a prominent member of AWS Partner Network as an Advanced Tier Consulting Partner, Channel Reseller, and Direct Connect Partner",
  "JPRHosting, a key AWS Direct Connect provider pan India along with its own Metro Ethernet Connect has the unique advantage of providing connectivity speeds up to 10G+",
  "A solution provider who can offer cloud adjacent data center, cloud connectivity, and AWS professional services as a single partner",
  "Comprehensive hybrid and AWS centralized cloud management platform for deployment, cost optimization, compliance, and governance"
];

const awsServices = [
  { title: "Assessment Service", desc: "Gain an in-depth understanding of your workloads and cloud deployment recommendations to plan for the migration." },
  { title: "AWS Migration Service", desc: "Move out from any physical, virtual and cloud environments to AWS cloud." },
  { title: "AWS Implementation Service", desc: "Transform applications for cloud to run efficiently leveraging cloud-native technologies and best practices." },
  { title: "AWS Managed Service", desc: "Comprehensive, cost-optimized operations and effective management of hybrid AWS cloud deployment." },
  { title: "AWS Security Service", desc: "Leveraging cloud-native and partner security tools to provide maximum coverage for mitigating risk." },
  { title: "Global Cloud Connect Service", desc: "Connect your on-premises data centers with cloud workloads over a secure and deterministic network." }
];

const reasons = [
  { title: "Advisory & migration expertise", p1: "Comprehensive tool-based discovery and assessment with experience in 200+ complex projects." },
  { title: "Multi cloud management", p1: "Providing customers better visibility and control while enabling cloud usage policy." },
  { title: "Unified security", p1: "Ensuring unified security and visibility on a single console with augmented controls." },
  { title: "Hybrid cloud-led digital infrastructure", p1: "Offering cloud-adjacent data centers and GlobalCloudConnect to hyperscale CSPs." },
  { title: "IT modernization", p1: "Cloud-agnostic digital infrastructure and value stream management solutions." },
  { title: "Skills & certifications", p1: "500+ certified cloud professionals, 150+ dedicated engineering experts." }
];

const faqs = [
  { q: "What are AWS Cloud Services?", a: "AWS Cloud Services are a comprehensive suite of cloud computing services provided by Amazon Web Services, offering solutions for computing power, storage, databases, and more." },
  { q: "How can JPRHosting Technologies assist with AWS?", a: "JPRHosting provides end-to-end support from assessment and migration to managed services and security." },
  { q: "What are the key benefits?", a: "Scalability, global reach, and cost-efficiency are prime benefits." }
];

export default AwsCloudServices;