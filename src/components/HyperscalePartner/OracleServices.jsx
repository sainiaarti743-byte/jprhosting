import React, { useState } from 'react';
import { Plus, Minus, Phone, Radio } from 'lucide-react';
import SEO from '../SEO';

const OracleServices = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Custom Inline Styles for guaranteed look
  const styles = {
    heroSection: {
      backgroundColor: '#1a0505',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      position: 'relative',
      overflow: 'hidden',
    },
    heroHeading: {
      color: '#c6e217',
      fontSize: '32px',
      fontWeight: 'bold',
      maxWidth: '700px',
      lineHeight: '1.3',
      zIndex: 2
    },
    contactBtn: {
      backgroundColor: '#c6e217',
      color: 'black',
      padding: '10px 25px',
      borderRadius: '50px',
      border: 'none',
      fontWeight: 'bold',
      marginTop: '20px',
      cursor: 'pointer'
    },
    highlightCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderLeft: '5px solid #c6e217',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      fontSize: '14px',
      fontWeight: 'bold',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    faqContainer: {
      maxWidth: '900px',
      margin: '50px auto',
      padding: '0 20px'
    },
    faqButtonActive: {
      backgroundColor: '#4d4d4d',
      color: 'white',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      border: 'none',
      textAlign: 'left',
      fontWeight: 'bold',
      cursor: 'pointer',
      gap: '15px'
    },
    faqButtonInactive: {
      backgroundColor: 'white',
      color: '#333',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      border: 'none',
      borderBottom: '1px solid #eee',
      textAlign: 'left',
      fontWeight: 'bold',
      cursor: 'pointer',
      gap: '15px'
    },
    sidebar: {
      position: 'fixed',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    sidebarIcon: {
      backgroundColor: '#c6e217',
      padding: '10px',
      cursor: 'pointer'
    }
  };

  const highlights = [
    "Comprehensive hybrid and OCI centralized cloud management platform for deployment, cost optimization, compliance, and governance",
    "JPRHosting, a key FastConnect Partner pan India, having a unique advantage of OCI terminating nodes in its Rabale and Hyderabad data centers",
    "A solution provider who can offer cloud adjacent data center, cloud connectivity, and Oracle professional services",
    "The only partner in APAC who can provide \"Exadata as a service\"",
    "Oracle Partner-Network member for Cloud Service Track, Cloud Resell Track, License, and Hardware Track"
  ];

  const faqs = [
    { q: "What are Oracle Hyperscale Partner Cloud Services?", a: "Oracle Hyperscale Partner Cloud Services are cloud solutions designed to provide scalable and flexible infrastructure for businesses. They leverage Oracle's advanced technology." },
    { q: "How does Oracle's Hyperscale architecture benefit businesses?", a: "It provides high availability and massive scalability for enterprise workloads." }
  ];

  return (
    <>
    <SEO 
        title="Oracle Cloud Infrastructure (OCI) Deployment"
        description="Power intense database-centric corporate applications using professional OCI architectures with secure dedicated clustering."
        keywords="Oracle cloud architecture, OCI deployment service, managed Oracle enterprise"
        url="https://jprhosting.in/cloudservices/hyperscale-partner-cloud-services/oracle"
      />
  
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}>
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div>
          <h1 style={styles.heroHeading}>
            Transforming existing on-premise Oracle deployments and broader IT ecosystem to OCI
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </section>

      {/* Intro Section */}
      <div style={{ display: 'flex', padding: '60px 10%', gap: '50px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src="/assets/img2/Oracle.png" alt="OCI" style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Oracle Cloud Services: Expert support for OCI adoption</h2>
          <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>
            JPRHosting offers <b>assessment, migration, hybrid cloud management, managed and security services</b> across OCI and hybrid IT deployments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '30px', width: '150px' }}>
            {[...Array(15)].map((_, i) => <div key={i} style={{ width: '6px', height: '6px', backgroundColor: '#ccc', borderRadius: '50%' }}></div>)}
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '60px 10%' }}>
        <h2 style={{ marginBottom: '30px' }}>Highlights</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {highlights.map((text, idx) => (
            <div key={idx} style={styles.highlightCard}>{text}</div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <h2 style={{ marginBottom: '30px' }}>FAQs</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <button 
              onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              style={activeFaq === idx ? styles.faqButtonActive : styles.faqButtonInactive}
            >
              {activeFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
              {faq.q}
            </button>
            {activeFaq === idx && (
              <div style={{ padding: '25px', backgroundColor: 'white', border: '1px solid #eee', fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      

    </div>
      </>
  );
};

export default OracleServices;