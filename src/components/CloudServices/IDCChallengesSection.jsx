import React from 'react';

const IDCChallengesSection = () => {
  // Chart data as per screenshot
  const chartData = [
    { label: "Security Policies", value: "17.7%", color: "#4e5ba6", height: "140px" },
    { label: "Governance bottlenecks", value: "16.6%", color: "#5481b0", height: "130px" },
    { label: "Higher Cost", value: "16.2%", color: "#22a0c2", height: "128px" },
    { label: "SLA management from CSPs & Infra providers", value: "14.4%", color: "#48d19d", height: "115px" },
    { label: "Integration complexities", value: "14.2%", color: "#86d177", height: "112px" },
    { label: "Lack of API integrations across cloud and on-premises", value: "9.4%", color: "#1d71b8", height: "75px" },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <div className="container   p-4 p-md-5 rounded">
        
        {/* Header Section */}
        <div className="row align-items-center mb-4">
          <div className="col-auto">
            <h1 className="fw-bold mb-0" style={{ color: '#005596', fontSize: '4.5rem' }}>
              <span style={{ fontSize: '1.8rem', verticalAlign: 'middle' }}>🌐</span>IDC
            </h1>
          </div>
          <div className="col border-start border-warning border-3 ps-4 ms-3">
            <h5 className="fw-bold text-dark mb-0" style={{ lineHeight: '1.4' }}>
              Hybrid/Multicloud Management: Optimize and secure your cloud with expert-managed services for seamless, scalable business operations
            </h5>
          </div>
        </div>

        {/* Quote Box Section */}
        <div className="row justify-content-center my-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm rounded-4 position-relative overflow-visible" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body p-4 text-center">
                <span className="position-absolute translate-middle-y text-primary fw-bold" style={{ left: '20px', top: '15px', fontSize: '3rem', opacity: '0.5' }}>“</span>
                <p className="text-muted fst-italic mb-0 px-md-5" style={{ fontSize: '13px' }}>
                  According to IDC's Future of Digital Infrastructure Survey 2022, 48% of organizations in India prefer migrating to cloud as their first step to IT modernization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Title */}
        <div className="text-center mb-5">
          <h4 className="fw-bold text-dark">Top Challenges When Deploying a Unified Cloud Management Platform</h4>
        </div>

        {/* Bar Chart Section */}
        <div className="row g-2 align-items-end justify-content-center text-center mt-5" style={{ minHeight: '250px' }}>
          {chartData.map((item, index) => (
            <div key={index} className="col-4 col-md-2 d-flex flex-column align-items-center px-1">
              {/* Percentage Value */}
              <span className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>{item.value}</span>
              
              {/* Vertical Bar */}
              <div 
                className="w-75" 
                style={{ 
                  backgroundColor: item.color, 
                  height: item.height, 
                  minWidth: '45px',
                  borderRadius: '2px 2px 0 0'
                }}
              ></div>

              {/* Label below bar */}
              <div className="mt-3" style={{ height: '60px' }}>
                <p className="text-dark fw-medium" style={{ fontSize: '11px', lineHeight: '1.3' }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Source */}
        <div className="row mt-5">
          <div className="col text-end">
            <p className="text-muted fst-italic small mb-0">
              Source: IDC India Hybrid Cloud Survey in November 2022 (n=180)
            </p>
          </div>
        </div>

      </div>



      <div className="container">
        <div className="row gy-5">
          
          {/* Left Column: Key Takeaways & Overview */}
          <div className="col-lg-7 pe-lg-5">
            <section className="mb-5">
              <h2 className="fw-bold mb-4 text-dark" style={{ fontSize: '2rem' }}>Key Takeaways</h2>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '14px', textAlign: 'justify' }}>
                The paper emphasizes on the increasing adoption of hybrid/multicloud strategies by organizations in India as 
                they pursue digital transformation. Key business priorities identified include reducing risk, enhancing data-driven 
                decision-making, improving customer experience, sustainability, and fostering agility. The paper underscores 
                <span className="fw-bold text-dark"> the importance of professional cloud service providers</span> offering end-to-end capabilities, unified 
                management tools, and cloud-adjacent services to support modern IT infrastructure needs, such as agility, 
                security, and efficient data management.
              </p>
            </section>

            <section>
              <h2 className="fw-bold mb-4 text-dark" style={{ fontSize: '2rem' }}>Overview</h2>
              <ul className="list-unstyled">
                {[
                  "Infrastructure Modernization: Role of Cloud Technologies",
                  "Unified Management is Key to a Successful Hybrid/Multicloud Strategy",
                  "Cost Control Challenges While Spending on Digital Infrastructure",
                  "Application Modernization is a Key Imperative",
                  "Essential Guidance: Partnering with the Right Service Provider"
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-start mb-2" style={{ fontSize: '14px' }}>
                    <span className="me-2 mt-1" style={{ width: '8px', height: '8px', backgroundColor: '#c9d200', display: 'inline-block', flexShrink: 0 }}></span>
                    <span className="text-dark fw-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Download Form */}
          <div className="col-lg-5">
            <h3 className="fw-normal mb-4 text-dark" style={{ fontSize: '1.8rem' }}>Download Spotlight Paper</h3>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label small fw-bold mb-1">First Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-1 shadow-sm py-2" required />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold mb-1">Last Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-1 shadow-sm py-2" required />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold mb-1">Company Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-1 shadow-sm py-2" required />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold mb-1">Designation <span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-1 shadow-sm py-2" required />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold mb-1">Business Email ID <span className="text-danger">*</span></label>
                <input type="email" className="form-control rounded-1 shadow-sm py-2" required />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold mb-1">Mobile Number <span className="text-danger">*</span></label>
                <input type="tel" className="form-control rounded-1 shadow-sm py-2" required />
              </div>

              {/* Checkbox */}
              <div className="col-12 mt-4">
                <div className="form-check d-flex align-items-center">
                  <input className="form-check-input border-secondary me-2" type="checkbox" id="engage" />
                  <label className="form-check-label text-muted" htmlFor="engage" style={{ fontSize: '12px' }}>
                    I wish to engage with a JPRHosting representative
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 text-end mt-4">
                <button type="submit" className="btn btn-primary px-5 py-2 fw-bold" style={{ backgroundColor: '#2b5a91', borderColor: '#2b5a91' }}>
                  Submit
                </button>
              </div>
            </form>
        

        </div>
      </div>
    </div>
    </div>
  );
};

export default IDCChallengesSection;