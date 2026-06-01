import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      id: "one",
      question: "What are cloud managed services?",
      answer: "Cloud managed services involve outsourcing the management, monitoring, optimization, and security of cloud environments to a specialized provider to ensure performance, reliability, and scalability."
    },
    {
      id: "two",
      question: "Why choose a cloud managed services provider in India?",
      answer: "Choosing a provider in India offers benefits like localized support, compliance with regional data regulations, and cost-effective management for businesses operating in the Indian market."
    },
    {
      id: "three",
      question: "Does JPRHosting support hybrid and multi-cloud environments?",
      answer: "Yes, JPRHosting provides seamless support for both hybrid and multi-cloud environments, ensuring consistent governance across different platforms like AWS, Azure, and Google Cloud."
    },
    {
      id: "four",
      question: "What security measures are included in cloud managed services?",
      answer: "Security measures include advanced threat hunting, automated compliance checks, identity management, and real-time security monitoring across all cloud assets."
    },
    {
      id: "five",
      question: "How do cloud managed services help reduce IT costs?",
      answer: "They reduce costs by optimizing resource usage, eliminating the need for extensive in-house IT infrastructure management, and preventing expensive downtime through proactive monitoring."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" style={{ fontSize: '24px' }}>FAQs</h2>
      
      <div className="accordion accordion-flush" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden" key={faq.id}>
            <h2 className="accordion-header">
              <button 
                className={`accordion-button ${index === 0 ? '' : 'collapsed'} fw-medium`} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#collapse${faq.id}`}
                style={{ 
                  backgroundColor: index === 0 ? '#4b4b4b' : '#fff', 
                  color: index === 0 ? '#fff' : '#333',
                  padding: '1.2rem'
                }}
              >
                <span className="me-3">{index === 0 ? '−' : '+'}</span>
                {faq.question}
              </button>
            </h2>
            <div 
              id={`collapse${faq.id}`} 
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;