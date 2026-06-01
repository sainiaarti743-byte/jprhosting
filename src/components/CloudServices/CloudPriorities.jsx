import React from 'react';
import { Cloud, Settings, Layout, DollarSign, Download } from 'lucide-react';

const CloudPriorities = () => {
  // Inline Styles for reliability
  const styles = {
    container: { fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '1600px', margin: '0 auto', color: '#333' },
    header: { fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' },
    flexRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' },
    leftSection: { flex: '1', minWidth: '400px' },
    rightSection: { flex: '1', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' },
    iconCircle: (color) => ({
      backgroundColor: color, color: 'white', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }),
    blueCircle: {
      width: '200px', height: '200px', backgroundColor: '#0070c0', borderRadius: '50%', position: 'relative', 
      display: 'grid', gridTemplateColumns: '1fr 1fr', color: 'white', fontSize: '8px', textAlign: 'center', border: '4px solid white', overflow: 'hidden'
    },
    diamond: {
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)',
      backgroundColor: 'white', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    banner: {
      marginTop: '50px', backgroundColor: '#e6f2ff', padding: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '30px'
    },
    button: {
      backgroundColor: '#004a99', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '25px', 
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.flexRow}>
        {/* Left Side Content */}
        <div style={styles.leftSection}>
          <h1 style={styles.header}>Unlock and enjoy your cloud freedom</h1>
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
            Today, most organizations adopt a multi cloud or hybrid cloud strategy to unleash the power of the platform 
            and take advantage of best-of-breed solutions for improved business outcomes.
          </p>
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
            JPRHosting Cloud Anywhere with its <b>decade-long experience</b> helps customers adopt, integrate or deploy any target 
            cloud environment seamlessly.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 15px)', gap: '8px', marginTop: '20px', opacity: '0.3' }}>
            {[...Array(20)].map((_, i) => <div key={i} style={{ width: '6px', height: '6px', backgroundColor: '#666', borderRadius: '50%' }} />)}
          </div>
        </div>

        {/* Right Side Diagram */}
        <div style={styles.rightSection}>
          <div style={{ marginRight: '20px', textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '10px', width: '100px' }}>Identify ideal cloud provider</span>
              <div style={styles.iconCircle('#2563eb')}><Cloud size={16} /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '10px', width: '100px' }}>Ensure governance</span>
              <div style={styles.iconCircle('#fbbf24')}><Settings size={16} /></div>
            </div>
          </div>

          <div style={{ width: '100px', height: '180px', border: '2px solid #eee', borderLeft: 'none', borderRadius: '0 90px 90px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', zIndex: '2' }}>
            <span style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center' }}>CIO CLOUD PRIORITIES</span>
          </div>

          <div style={styles.blueCircle}>
            <div style={{ borderRight: '1px solid #ffffff33', borderBottom: '1px solid #ffffff33', padding: '10px', paddingTop: '25px' }}>COMPONENT ALIGNED</div>
            <div style={{ borderBottom: '1px solid #ffffff33', padding: '10px', paddingTop: '25px' }}>SUBSCRIPTION ALIGNED</div>
            <div style={{ borderRight: '1px solid #ffffff33', padding: '10px', paddingBottom: '25px', display: 'flex', alignItems: 'flex-end' }}>BUSINESS OUTCOME</div>
            <div style={{ padding: '10px', paddingBottom: '25px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>USAGE ALIGNED</div>
            <div style={styles.diamond}>
              <div style={{ transform: 'rotate(-45deg)', color: '#004a99', fontWeight: 'bold', fontSize: '7px' }}>ENGAGEMENT MODELS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Footer */}
      <div style={styles.banner}>
        <div style={{ width: '100px', height: '140px', backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ color: '#4ade80', fontSize: '8px', alignSelf: 'flex-end' }}>JPRHosting</span>
          <p style={{ fontSize: '6px', color: '#eab308', margin: '0' }}>UNLOCK AND ENJOY</p>
          <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '0' }}>YOUR CLOUD FREEDOM</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px' }}>Unlock and enjoy your Cloud freedom Brochure</h3>
          <button style={styles.button}>
            <Download size={18} /> Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudPriorities;