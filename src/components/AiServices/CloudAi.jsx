import React from "react";
import AiSlider from "./AiSlider";
import { 
  MdSettingsSuggest, MdMemory, MdSpeed, MdCloudDone, 
  MdSecurity, MdBusiness, MdSchool, MdHealthAndSafety, 
  MdPrecisionManufacturing, MdAccountBalance, MdGavel 
} from "react-icons/md";
import { FaMicrochip, FaCogs, FaChartPie, FaRocket } from "react-icons/fa";
import SEO from "../SEO";

const CloudAi = () => {
  return (
<>
<SEO 
        title="CloudInfinit - Smart AI Powered Cloud Infrastructure"
        description="Accelerate performance with CloudInfinit. High-compute infrastructure designed specifically for AI models, modern machine learning, and data pipelines."
        keywords="CloudInfinit, AI cloud computing, machine learning infrastructure India"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services"
      />



    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <AiSlider />
      
      <main>
        {/* SECTION 1: Build your AI future (Hero) */}
        <section className="py-5" style={{  }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>Build your AI future on a unified cloud & AI platform</h1>
                <p className=" opacity-75">AI adoption is accelerating, but enterprises struggle with fragmented cloud environments, rising security mandates, and the complexity of deploying AI at scale, not just test pilots. Success today depends on a modern cloud foundation paired with an intelligent, enterprise-ready AI platform.</p>
                <p className=" opacity-75 mb-4">JPRHosting brings a unified cloud agnostic AI platform combining its Cloudinfinit™ hi-performance GPUaaS and InfinitAIZEN with integrated FinOps for secure, compliant, and accelerated AI innovation across the enterprise.</p>
                
                {/* Dots Grid Overlay */}
                <div className="d-flex flex-wrap gap-2 opacity-25 mb-4" style={{ width: "200px" }}>
                  {[...Array(30)].map((_, i) => <div key={i} className="bg-light rounded-circle" style={{ width: "5px", height: "5px" }}></div>)}
                </div>

                <div className="d-flex gap-3">
                  <button className="btn btn-primary rounded-pill px-4" style={{ backgroundColor: "#004a99", border: "none" }}>CLOUDINFINIT™</button>
                  <button className="btn btn-primary rounded-pill px-4" style={{ backgroundColor: "#004a99", border: "none" }}>INFINITAIZEN</button>
                </div>
              </div>
              <div className="col-lg-6 text-center mt-5 mt-lg-0">
                <img src="/assets/img/cloud.webp" alt="AI Cloud" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Intelligence & Scalability */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pe-lg-5">
                <h2 className="fw-bold mb-4">Intelligence, Scalability, and Resilience with Sovereign enterprise AI cloud solutions</h2>
                <p className="text-secondary">Enterprises today juggle multi-cloud environments, complex migrations, regulatory pressures, and rising security demands. To build a winning cloud strategy, enterprises need a cloud service provider that brings automation, intelligent monitoring, cost optimization while having the ability to run AI at scale.</p>
                <p className="text-secondary fw-bold">JPRHosting CloudInfinit™, a scalable, seamless, sovereign AI cloud platform offers GPUaaS and Cloud anywhere, ensuring unparalleled performance and low latency for demanding AI workloads with robust security.</p>
              </div>
              <div className="col-lg-6 text-center">
                {/* Graphic Placeholder for the Infinity Loop Diagram */}
                <img src="/assets/img/CloudInfinit.svg" alt="Cloud Diagram" className="img-fluid" />
              
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Key Features */}
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container">
            <h2 className="fw-bold mb-2">Key Features of CloudInfinit+AI</h2>
            <p className="text-secondary mb-5">JPRHosting CloudInfinit is optimized for deep learning, machine learning, and high-performance analytics with on-demand scalability.</p>
            <div className="row g-4">
              {[
                { title: "High-Performance Infrastructure", text: "Powered by NVIDIA's GPU, offers high performance computation power" },
                { title: "High Network Throughput & Low Latency", text: "Low latency interconnects to hyperscalers and other data centers" },
                { title: "AI Data Centers", text: "Hosted within JPRHosting’s AI data centers with liquid cooling, delivering secure computing" },
                { title: "Optimized for AI workloads", text: "Purpose-built to efficiently support deep learning, model training, and AI Applications" },
                { title: "Scalability, Flexibility & Security", text: "Scalable resources, robust security architecture, and enhanced collaboration" }
              ].map((feature, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100 border-0 shadow-sm p-4 border-top border-4" style={{ borderTopColor: "#c9d200 !important" }}>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-secondary small mb-0">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Service Offerings */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="fw-bold mb-5">Our Service Offerings</h2>
            <div className="row g-4">
              {[
                { title: "GPU VPI", icon: <FaMicrochip />, text: "Scalable, cost-efficient multi-tenant GPU service for AI training, inferencing, and data processing." },
                { title: "GPU VPE", icon: <MdMemory />, text: "Dedicated, virtualized GPU servers delivering high performance and enhanced privacy for secure workloads." },
                { title: "GPU EBM", icon: <MdSpeed />, text: "Exclusive, high-performance GPU hardware for mission-critical applications like 3D rendering and genomics." },
                { title: "Hosted Private Cloud", icon: <MdCloudDone />, text: "JPRHosting Cloudinfinit is a dedicated customizable multi-tier architecture that offers ready-to-use compute and storage." },
                { title: "Managed Public Cloud", icon: <MdSettingsSuggest />, text: "Host your most demanding applications with ready-to-use compute instances on a multi-tenant, robust platform." },
                { title: "Smart SAP Grid", icon: <MdBusiness />, text: "We are a trusted partner offering SAP on Cloud with agility, cost controls, and scalability." }
              ].map((service, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100 border-light shadow-sm p-4 text-start">
                    <div className="mb-3 text-success fs-2">{service.icon}</div>
                    <h6 className="fw-bold mb-2">{service.title}</h6>
                    <p className="text-secondary" style={{ fontSize: "13px" }}>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Build, Deploy, and Scale AI */}
        <section className="py-5" style={{ backgroundColor: "#f3f6f9" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="fw-bold mb-4">Build, Deploy, and Scale AI anywhere with InfinitAIZEN</h2>
                <p className="text-secondary small">InfinitAIZEN, an integrated one stop AI platform, empowers enterprises with the freedom to scale AI initiatives confidently and responsibly. Purpose-built with pre-built ready to deploy verticalized blueprints.</p>
                <div className="row mt-5 text-center">
                  <div className="col-4">
                    <h2 className="fw-bold text-success">50%</h2>
                    <p className="small text-secondary">Accelerated AI deployment</p>
                  </div>
                  <div className="col-4">
                    <h2 className="fw-bold text-success">60%</h2>
                    <p className="small text-secondary">Faster time to value</p>
                  </div>
                  <div className="col-4">
                    <h2 className="fw-bold text-success">40%</h2>
                    <p className="small text-secondary">Cost savings</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img src="/assets/img/Picture2-1-1024x683-1.webp" alt="AIZEN" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: AI Industry Use Cases */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="fw-bold mb-5">AI Industry Use Cases</h2>
            <div className="row g-5">
              {[
                { title: "Finance", icon: <MdAccountBalance />, bullets: ["Fraud detection & prevention", "Personalized financial advisors", "Algorithmic trading"] },
                { title: "Manufacturing", icon: <MdPrecisionManufacturing />, bullets: ["Predictive maintenance", "Supply chain optimization", "Visual quality control"] },
                { title: "Healthcare", icon: <MdHealthAndSafety />, bullets: ["Patient triage automation", "Medical imaging & records summarization", "Telemedicine support agents"] },
                { title: "Education", icon: <MdSchool />, bullets: ["Context aware learning assistance", "Multi-lingual learning platform", "Data driven academic progress monitoring"] },
                { title: "Government", icon: <MdGavel />, bullets: ["Record digitization & mapping", "Unified citizen interaction & grievance management", "Automated information access"] }
              ].map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div className="text-start">
                    <div className="fs-1 mb-2">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <ul className="list-unstyled text-secondary small">
                      {item.bullets.map((b, j) => <li key={j} className="mb-2">• {b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Skills and certifications */}
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4 border-end">
                <h2 className="fw-bold">Skills and certifications</h2>
              </div>
              <div className="col-md-4 border-end ps-md-4">
                <h4 className="fw-bold mb-0">500 +</h4>
                <p className="text-secondary small">certified cloud professionals</p>
              </div>
              <div className="col-md-4 ps-md-4">
                <h4 className="fw-bold mb-0">150+ dedicated</h4>
                <p className="text-secondary small">cloud engineering and cloud security experts</p>
              </div>
            </div>
            {/* Certifications Row */}
            <div className="d-flex justify-content-between flex-wrap gap-3">
               <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="border shadow-sm" />
               <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="border shadow-sm" />
               <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="border shadow-sm" />
               <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="border shadow-sm" />
               <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="border shadow-sm" />
            </div>
          </div>
        </section>

        {/* SECTION 8: Why customers choose us */}
        <section className="py-5" style={{ background: "linear-gradient(90deg, #1a052e 0%, #3d0a4f 100%)", color: "white" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <h2 className="fw-bold">Why customers choose us</h2>
              </div>
              <div className="col-lg-9">
                <div className="row g-4 text-start">
                  {[
                    "Comprehensive AI powered discovery and assessment for cloud migration while ensuring business as usual",
                    "Extensive experience with over 250+ complex migration across hyperscalers and private clouds",
                    "Scalable AI infrastructure supporting enterprises digital ambitions",
                    "Automation led productivity and scalable models aligned with business priorities",
                    "AI studios to develop Gen AI assistants & AIOps with digital twins",
                    "Vendor-agnostic managed services expertise, from building IT to seamless management"
                  ].map((text, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="p-3 border-start border-warning border-2 h-100">
                        <p className="small mb-0 opacity-75">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default CloudAi;