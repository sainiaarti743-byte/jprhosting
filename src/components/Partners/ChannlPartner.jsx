import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const ChannelPartner = () => {
  const sifyGreen = "#adff2f";

  return (
    <>
    
  <SEO title="Join Our Channel Partner & Reseller Program" description="Expand your service portfolio. Resell high-performance hosting plans backed by LiteSpeed server management technologies." keywords="hosting affiliate channel partner reseller cloud program" url="https://jprhosting.in/channel-partners" />
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fcfcfc' }}>
      
      {/* 1. Hero Banner - Ref: Screenshot 2026-05-14 at 3.55.32 PM.jpg */}
      <section className="position-relative text-white py-5" style={{ backgroundColor: '#020d2b', minHeight: '400px' }}>
        <img 
          src="/assets/banner/digital-L4-banner.jpg" 
          alt="Partner Banner" 
          className="position-absolute w-100 h-100 top-0 start-0" 
          style={{ objectFit: 'cover', opacity: '0.4' }}
        />
        <div className="container position-relative py-5">
          <h1 className="fw-bold display-5 mb-2">JPRHosting Channel Partner Program</h1>
          <h2 className="fw-bold mb-4" style={{ color: sifyGreen }}>Supercharge Your Growth</h2>
          <div className="mb-4">
            <span className="border-start border-4 ps-2 border-white">#GrowTogether</span>
          </div>
          <h4 className="fw-bold" style={{ color: sifyGreen }}>Tried. Tested. Trusted.</h4>
          <p className="mb-4">Your Digital Infrastructure Partner for over 25 years</p>
          <button className="btn fw-bold px-4 py-2" style={{ backgroundColor: sifyGreen, borderRadius: '25px' }}>Partner with us</button>
        </div>
      </section>

      {/* 2. AI-Powered Partner Section - Ref: Screenshot 2026-05-14 at 3.55.39 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Collaborate with a Trusted AI-Powered Innovation Partner</h2>
              <p className="text-muted small mb-4">
                Be a part of <strong>our high-growth Channel Partner Program</strong> built with collaborative success in mind. Unlock business opportunities with JPRHosting's trusted AI-enabled digital transformation solutions — <strong>Network, Data Center, Cloud, Digital and Security.</strong>
              </p>
              <h6 className="fw-bold">Unmatched Growth Opportunities</h6>
              <ul className="list-unstyled mt-3">
                {["Recurring monetary benefits on sourced business opportunities", "Annuity-driven revenue", "Professionally managed and entrepreneurially driven"].map((item, i) => (
                  <li key={i} className="mb-2 small d-flex align-items-center">
                    <span className="me-2 text-success">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <img src="/assets/img3/AI-powered-innovation-partner.webp" className="img-fluid rounded-start-5 shadow" alt="AI Partner" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Market Solutions Section - Ref: Screenshot 2026-05-14 at 3.55.46 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 ps-lg-5">
              <h2 className="fw-bold mb-4">Bring Our Market Leading Solutions to Your Clients</h2>
              <p className="text-muted small">
                As a JPRHosting channel partner, you will gain access to a complete suite of ICT services to help your clients transform and grow...
              </p>
              <h3 className="fw-bold mt-5 mb-3">Complete suite of ICT services to meet all your customers' business needs</h3>
              <p className="text-muted small">
                JPRHosting has formed the IT backbone of the nation over the last 25 years. Not one to rest on our laurels, we offer the most cutting-edge products and services.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/assets/img3/Market-Leading-Solutions.webp" className="img-fluid rounded-end-5 shadow" alt="Meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Services Grid - Ref: Screenshot 2026-05-14 at 3.55.53 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            {[
              { title: "AI Data Centers", desc: "Our hyperscale, hyperconnected, green AI data centers provide the foundation for AI transformation.", points: ["14 data centers – 227 MW IT, 407+ MW by 2025", "Scalable to 1 GW with Built-to-Suit", "Upcoming 15+ edge data centers"] },
              { title: "AI Networks", desc: "JPRHosting's AI network infrastructure delivers ultra-low latency, multi-terabit capacity.", points: ["Enterprise connectivity in 1700+ cities", "Sub-1 ms latency to hyperscalers", "National Long Distance"] },
              { title: "Network Digital Managed Services", desc: "Leveraging AI, automation, and software-defined architectures.", points: ["Managed SD-WAN with integrated SASE", "Cloud managed branch & campus operations", "Captive & hybrid NOC services"] },
              { title: "CloudInfinit+AI and IT services", desc: "Delivers high-performance GPU as a Service for demanding AI workloads.", points: ["Hybrid cloud, GPUaaS, Bare Metal", "Multi-cloud management platform with FinOps", "Cloud security services"] }
            ].map((box, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="d-flex align-items-start h-100">
                  <div className="p-2 me-3 rounded bg-light">⚙️</div>
                  <div>
                    <h5 className="fw-bold">{box.title}</h5>
                    <p className="small text-muted mb-2">{box.desc}</p>
                    <ul className="list-unstyled">
                      {box.points.map((p, i) => <li key={i} className="small text-muted mb-1">• {p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Onboarding Steps - Ref: Screenshot 2026-05-14 at 3.56.02 PM.jpg */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold">Effortless Partner Onboarding</h2>
          <p className="text-muted mb-5">It's easy doing business with us. Our engagement process is simple and hassle-free.</p>
          <div className="row justify-content-center g-0 position-relative">
            <img src="/assets/img3/75.png" className="img-fluid rounded-end-5 shadow" alt="Meeting" />
          </div>
        </div>
      </section>

      {/* 6. Call to Action Footer - Ref: Screenshot 2026-05-14 at 3.56.10 PM.jpg */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #020d2b 0%, #1a0525 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4 className="fw-bold mb-0">We have a dedicated channel support team to assist you at every step of your journey, just a message away.</h4>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0">
              <button className="btn fw-bold px-4 py-2 shadow-sm" style={{ backgroundColor: sifyGreen, borderRadius: '25px' }}>Reach out to us today</button>
            </div>
          </div>
        </div>
      </section>

    </div>
      </>
  );
};

export default ChannelPartner;