import React from "react";
import SEO from "../components/SEO";

const Gcc =()=>{
     const limeColor = "#adff2f";
  const darkPurple = "#6f3586";
    return(

        <>

        <SEO 
        title="Global Capability Centers (GCC) - Dedicated Offshore IT"
        description="Establish dedicated offshore development centers and secure engineering infrastructure teams inside India effortlessly."
        keywords="global capability center India GCC technology hub setup offshore team"
        url="https://jprhosting.in/global-capability-centers"
      />
         <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', overflowX: 'hidden' }}>
          {/* 4. AI Foundation Hero - Ref: Screenshot 2026-05-14 at 2.22.53 PM.jpg */}
      <section className="py-5 bg-black text-white overflow-hidden" style={{ minHeight: '400px' }}>
        <div className="container position-relative">
          <div className="row py-5">
            <div className="col-md-7">
              <h2 className="display-6 fw-bold">AI Foundation for</h2>
              <h2 className="display-5 fw-bold" style={{ color: limeColor }}>Global Capability Centers</h2>
              <p className="lead mt-3 opacity-75">Built to support growth, performance, and transformation at scale</p>
              <button className="btn mt-4 px-4 py-2 fw-bold" style={{ backgroundColor: limeColor }}>Get in touch</button>
            </div>
            <div className="col-md-5">
              <div className="border border-warning p-2" style={{ transform: 'rotate(2deg)' }}>
                <img src="https://via.placeholder.com/400x300?text=GCC+Office+AI" alt="GCC AI" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Innovation at Scale - Ref: Screenshot 2026-05-14 at 2.23.01 PM.jpg */}
      <section className="py-5 text-white" style={{ backgroundColor: darkPurple }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold mb-4">Enabling Innovation at Scale for GCCs</h3>
              <p className="small mb-4 opacity-90">
                JPRHosting delivers a complete AI digital foundation, purpose-built for the scale, complexity, and governance demands of modern GCCs. By unifying infrastructure, connectivity, cloud, security, and operations, we enable GCCs to scale from day one.
              </p>
              <button className="btn btn-outline-light rounded-pill px-4" style={{ backgroundColor: limeColor, color: '#000', border: 'none' }}>Download Brochure</button>
            </div>
            <div className="col-md-6">
              <div className="row g-2">
                <div className="col-6"><img src="https://via.placeholder.com/250x150?text=AI+Chip" className="img-fluid" /></div>
                <div className="col-6"><img src="https://via.placeholder.com/250x350?text=Tech+Hand" className="img-fluid" /></div>
                <div className="col-6 mt-n4"><img src="https://via.placeholder.com/250x200?text=Operator" className="img-fluid" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI Foundation Slider - Ref: Screenshot 2026-05-14 at 2.23.20 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#c4e538' }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Our AI Digital Foundation for GCCs ▪</h3>
          <div className="row g-4 text-center">
            {['Networks', 'Data Centers', 'Cloud & AI', 'Cyber Security'].map((title, i) => (
              <div className="col-md-3" key={i}>
                <div className="bg-white p-4 h-100 shadow rounded border-bottom border-5" style={{ borderColor: darkPurple }}>
                   <div className="mb-3" style={{ fontSize: '40px', color: darkPurple }}>⚙</div>
                   <h5 className="fw-bold">{title}</h5>
                   {i === 2 && <p className="x-small text-muted mt-2">Flexible CloudInfinit+AI platform spanning private/public clouds.</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Transformation Stories - Ref: Screenshot 2026-05-14 at 2.23.28 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-5">Transformation Stories ▪</h3>
          <div className="row g-5">
            <div className="col-md-6 d-flex gap-4">
              <img src="https://via.placeholder.com/200x200?text=Retail+Tech" alt="Retail" className="rounded shadow" />
              <div>
                <h5 className="fw-bold">Powering Luxury Retail's India GCC Transformation</h5>
                <p className="small text-muted">JPRHosting built a scalable, compliant digital foundation for a global luxury retailer's India GCC...</p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">Know More</button>
              </div>
            </div>
            <div className="col-md-6 d-flex gap-4">
              <img src="https://via.placeholder.com/200x200?text=Finance+Tech" alt="Finance" className="rounded shadow" />
              <div>
                <h5 className="fw-bold">Enabling Financial Enterprise with Resilient Connectivity</h5>
                <p className="small text-muted">JPRHosting delivered high-capacity, fail-proof connectivity across three strategic locations...</p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA - Ref: Screenshot 2026-05-14 at 2.23.36 PM.jpg */}
      <section className="py-5 text-center text-white" style={{ background: `linear-gradient(45deg, ${darkPurple}, #4a235a)` }}>
        <div className="container">
          <h2 className="fw-bold">Let's Supercharge Your Expansion Journey</h2>
          <p className="my-4 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Partner with JPRHosting to accelerate your GCCs digital transformation and build a foundation that scales, secures, and evolves with your ambitions.
          </p>
          <button className="btn px-5 py-2 fw-bold rounded-pill shadow" style={{ backgroundColor: limeColor }}>Get in touch</button>
        </div>
      </section>
      </div>
        </>
    )
};

export default Gcc;