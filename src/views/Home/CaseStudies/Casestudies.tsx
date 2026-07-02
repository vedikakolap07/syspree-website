import React from 'react';
import './Casestudies.css';

interface CaseItem {
  id: number;
  tag: string;
  title: string;
  industry: string;
  imageUrl: string;
}

export const Cases: React.FC = () => {
  const caseStudies: CaseItem[] = [
    {
      id: 1,
      tag: 'CASE STUDIES',
      title: '30 Times Surge in Leads within a year',
      industry: 'SPORTS COACHING COMPANY',
      imageUrl: 'https://via.placeholder.com/400x400', 
    },
    {
      id: 2,
      tag: 'CASE STUDIES',
      title: 'Improve Your Traffic by 1400% In Just 2 months!',
      industry: 'IMMIGRATION COMPANY',
      imageUrl: 'https://via.placeholder.com/400x400',
    },
    {
      id: 3,
      tag: 'CASE STUDIES',
      title: 'Maximizing B2B Manufacturing Lead Volume Through Search',
      industry: 'MANUFACTURING ENTERPRISE',
      imageUrl: 'https://via.placeholder.com/400x400',
    },
    {
      id: 4,
      tag: 'CASE STUDIES',
      title: 'Driving 5X Retail Foot Traffic via Local SEO Architecture',
      industry: 'RETAIL CHAIN',
      imageUrl: 'https://via.placeholder.com/400x400',
    },
  ];

  // Dynamically divide the items for the masonry layout columns
  const leftColumnItems = caseStudies.filter((_, index) => index % 2 === 0); // 1st, 3rd items
  const rightColumnItems = caseStudies.filter((_, index) => index % 2 !== 0); // 2nd, 4th items

  // Render helper function for cards
  const renderCard = (item: CaseItem) => (
    <div className="case-item-card" key={item.id}>
      <div className="case-img-frame">
        <img src={item.imageUrl} alt={item.title} className="case-thumbnail" />
      </div>
      <div className="case-content-info">
        <span className="case-tag-label">{item.tag}</span>
        <h3 className="case-card-title">{item.title}</h3>
        <span className="case-industry-tag">{item.industry}</span>
        
        <a href={`/cases/${item.id}`} className="case-arrow-link" aria-label="Read case study">
          <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7,7 17,7 17,17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section className="cases-section">
      <div className="cases-split-layout">
        
        {/* LEFT STICKY PANEL */}
        <div className="cases-left-sticky-panel">
          <p className="cases-meta-subtitle">CASE STUDIES</p>
          <h2 className="cases-main-heading">
            Proven Results <span>Across Industries</span>
          </h2>
          <p className="cases-description">
            Explore how Syspree has helped businesses across industries achieve measurable 
            growth with tailored digital marketing and web development strategies. From 
            e-commerce to tech startups, our custom solutions deliver proven results that 
            drive revenue, improve customer acquisition, and enhance brand visibility.
          </p>
          <button className="cases-btn" type="button">
            Learn How We Can Help Your Business
          </button>
        </div>

        {/* RIGHT CONTAINER PANEL */}
        <div className="cases-right-scroll-panel">
          <div className="cases-masonry-grid">
            
            {/* Left Masonry Track */}
            <div className="masonry-column left-track">
              {leftColumnItems.map(renderCard)}
            </div>

            {/* Right Masonry Track */}
            <div className="masonry-column right-track">
              {rightColumnItems.map(renderCard)}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Cases;