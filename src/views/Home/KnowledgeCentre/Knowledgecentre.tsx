import './Knowledgecentre.css';

// 1. Move interfaces and static data outside the rendering functions
interface StatItem {
  id: number;
  value: string;
  label: string;
}

interface CardItem {
  id: number;
  image: string;
  title: string;
}

const cards: CardItem[] = [
  {
    id: 1,
    image: 'https://syspree.com/wp-content/uploads/2024/10/10-Proven-Digital-Strategies-to-Boost-Lead-Generation-by-SySpree-768x768.webp',
    title: '10 Proven Digital Strategies to Boost Lead Generation and Drive Business Growth'
  },
  {
    id: 2,
    image: 'https://syspree.com/wp-content/uploads/2024/10/Scaling-Your-Business-with-Digital-Marketing_-A-Deep-Dive-into-High-ROI-Campaigns-SySpree-768x768.webp',
    title: 'Scaling Your Business with Digital Marketing: A Deep Dive into High-ROI Campaigns'
  },
  {
    id: 3,
    image: 'https://syspree.com/wp-content/uploads/2024/10/How-We-Achieve-5X-Growth-in-Online-Traffic-Sales-by-SySpree-768x768.webp',
    title: 'Deep Analysis of Lead Funnels That Deliver Results for Tech Companies'
  }
];

const stats: StatItem[] = [
  { id: 1, value: '10,000+', label: 'Keywords Ranked on Page 1' },
  { id: 2, value: '1,000+', label: '5X Business Growth' },
  { id: 3, value: '10+', label: 'Trusted Digital Leadership' },
  { id: 4, value: '1,000+', label: 'Websites Managed' },
  { id: 5, value: '100,000+', label: 'Leads per day' },
];

function KnowledgeCenter() {
  return (
    <>
      
      {/* Achievements Section */}
      <section className="achievements-section">
        {/* Background Graphic Overlays */}
        <div className="bg-mountain-left"></div>
        <div className="bg-mountain-right">
          <div className="silhouette-overlay"></div>
        </div>

        <div className="achievements-container">
          {/* Left Content Side */}
          <div className="achievements-left">
            <p className="achievements-sub">RESULTS IN NUMBERS</p>
            <h2 className="achievements-heading">
              Our <span>Achievements</span> in Numbers
            </h2>
          </div>

          {/* Right Stats Grid Side */}
          <div className="achievements-right">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-box">
                  <span className="stat-number">{stat.value}</span>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Knowledge Section */}
      <section className="knowledge-section">
        <p className="knowledge-subtitle">
          OUR <span>EXPERTISE</span>, YOUR KNOWLEDGE
        </p>
        
        <h2>Blogs, Podcasts, Vlogs</h2>

        <div className="knowledge-grid">
          {cards.map((card) => (
            <div key={card.id} className="knowledge-card">
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="knowledge-btn">
          View the Knowledge Center
        </button>
      </section>

    </>
  );
}

export default KnowledgeCenter;