import React, { useState } from 'react';
import { Plus, Minus, Phone, Radio } from 'lucide-react';
import SEO from '../SEO';

const GoogleCloudServices = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // --- Internal Styles ---
  const pageStyles = {
    container: { fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fff' },
    hero: {
      backgroundColor: '#000',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      position: 'relative',
      backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    heroOverlay: {
      position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1
    },
    heroContent: { position: 'relative', zIndex: 2 },
    heroTitle: { color: '#d4ff00', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' },
    btn: { backgroundColor: '#d4ff00', color: '#000', padding: '12px 25px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
    
    section: { padding: '60px 10%' },
    flexRow: { display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'center' },
    column: { flex: '1', minWidth: '300px' },
    
    highlightGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' },
    highlightCard: { backgroundColor: '#fff', padding: '25px', borderLeft: '5px solid #d4ff00', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontWeight: 'bold', fontSize: '15px' },
    
    servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginTop: '30px' },
    serviceCard: { padding: '30px', borderBottom: '4px solid #d4ff00', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', borderRadius: '12px' },
    
    whySection: { backgroundColor: '#000d1a', color: '#fff', padding: '80px 10%' },
    whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', border: '1px solid #333' },
    whyCard: { padding: '40px', border: '1px solid #222', transition: '0.3s' },
    
    faqItem: { marginBottom: '10px', borderRadius: '8px', overflow: 'hidden' },
    faqBtn: { width: '100%', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', border: 'none', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' },
    
    sidebar: { position: 'fixed', right: '0', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '2px', zIndex: 100 },
    iconBox: { backgroundColor: '#d4ff00', padding: '10px', cursor: 'pointer' }
  };

  return (
    <>
    <SEO 
        title="Google Cloud Platform (GCP) Management"
        description="Maximize business velocity with Google Cloud analytical pipelines, fast storage processing clusters, and expert container operations."
        keywords="Google cloud services, GCP architecture setup, cloud engine analytics"
        url="https://jprhosting.in/cloudservices/hyperscale-partner-cloud-services/google"
      />
   
    <div style={pageStyles.container}>
      
      {/* Hero */}
      <section style={pageStyles.hero}>
        <div style={pageStyles.heroOverlay}></div>
        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.heroTitle}>Simplify your digital transformation</h1>
          <button style={pageStyles.btn}>Contact us</button>
        </div>
      </section>

      {/* Intro */}
      <section style={pageStyles.section}>
        <div style={pageStyles.flexRow}>
          <div style={pageStyles.column}>
            <img src="/assets/img2/AWS-Cloud-Service.png" alt="Cloud" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div style={pageStyles.column}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Google Cloud Services for data, analytics and enterprise workloads</h2>
            <p style={{ lineHeight: '1.7', color: '#555' }}>
              Businesses are onboarding Google Cloud because of its powerful data and analytics services for different use cases and critical enterprise workloads.
            </p>
            <p style={{ lineHeight: '1.7', color: '#555', marginTop: '15px' }}>
              JPRHosting offers a comprehensive suite of products and services covering <b>assessment, migration, hybrid cloud management, and managed and security services</b>.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ ...pageStyles.section, backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '28px' }}>Highlights</h2>
        <div style={pageStyles.highlightGrid}>
          {highlights.map((item, i) => (
            <div key={i} style={pageStyles.highlightCard}>{item}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={pageStyles.section}>
        <h2 style={{ fontSize: '28px' }}>Google hyperscale services</h2>
        <div style={pageStyles.servicesGrid}>
          {services.map((s, i) => (
            <div key={i} style={pageStyles.serviceCard}>
              <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why JPRHosting */}
      <section style={pageStyles.whySection}>
        <h2 style={{ marginBottom: '40px', fontSize: '32px' }}>Why customers choose <span style={{ color: '#d4ff00' }}>JPRHosting</span></h2>
        <div style={pageStyles.whyGrid}>
          {reasons.map((r, i) => (
            <div key={i} style={pageStyles.whyCard}>
              <h3 style={{ color: '#d4ff00', marginBottom: '15px' }}>{r.title}</h3>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>{r.desc}</p>
              {r.sub && <p style={{ marginTop: '15px', color: '#ccc', fontWeight: 'bold', fontSize: '14px' }}>{r.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ ...pageStyles.section, maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '30px' }}>FAQs</h2>
        {faqs.map((f, i) => (
          <div key={i} style={pageStyles.faqItem}>
            <button 
              onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
              style={{ 
                ...pageStyles.faqBtn, 
                backgroundColor: activeFaq === i ? '#444' : '#fff',
                color: activeFaq === i ? '#fff' : '#333',
                borderBottom: '1px solid #eee'
              }}
            >
              {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
              {f.q}
            </button>
            {activeFaq === i && (
              <div style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #eee', fontSize: '14px', lineHeight: '1.6' }}>
                {f.a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Sidebar */}
      <div style={pageStyles.sidebar}>
        <div style={pageStyles.iconBox}><Radio size={24} /></div>
        <div style={pageStyles.iconBox}><Phone size={24} /></div>
      </div>

    </div>
     </>
  );
};

// --- Arrays (Highlights, Services, Reasons, Faqs copy from your original code) ---
const highlights = [
  "A solution provider who can offer cloud adjacent data center, cloud connectivity and GCP professional services as a single partner",
  "As a GCP Cloud Interconnect Partner, JPRHosting provides secure and high-performance GCP network services",
  "Comprehensive hybrid and Google centralized cloud management platform for deployment, cost optimization, compliance, and governance",
  "As a Google Cloud Partner, JPRHosting has access to additional tools that accelerate our customers' cloud journey"
];

const services = [
  { title: "Assessment Service", desc: "Gain an in-depth understanding of your workloads and cloud deployment recommendations to plan for the migration." },
  { title: "SAP on Google Cloud", desc: "Migrate, Upgrade, and Transform your ERP on Google Cloud with best-in-class optimization." },
  { title: "GCP Migration Service", desc: "Move out from any physical, virtual and cloud environments to GCP cloud." },
  { title: "GCP Managed Service", desc: "Comprehensive, cost-optimized operations and effective management of hybrid GCP cloud deployment." }
];

const reasons = [
  { title: "Advisory & migration expertise", desc: "Comprehensive tool-based discovery and assessment for cloud migration", sub: "200+ projects." },
  { title: "Multi cloud management", desc: "Visibility and control while enabling cloud usage policy and cost optimization." },
  { title: "Skills & certifications", desc: "500+ certified cloud professionals, 150+ dedicated experts." }
];

const faqs = [
  { q: "What are Hyperscale Partner Cloud Services?", a: "Hyperscale Partner Cloud Services refer to advanced cloud solutions designed to scale efficiently." },
  { q: "How does JPRHosting Technologies integrate with Google Cloud?", a: "JPRHosting integrates through direct interconnects and managed frameworks." }
];

export default GoogleCloudServices;