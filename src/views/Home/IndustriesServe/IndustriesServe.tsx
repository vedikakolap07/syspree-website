import './IndustriesServe.css';

interface CoreCard {
  id: string;
  img: string;
  title: string;
  text: string;
}

interface IndustryCard {
  id: number;
  title: string;
  problemQuestion: string;
  solutionText: string;
}

const coreCardsData: CoreCard[] = [
  {
    id: "C",
    img: "https://syspree.com/wp-content/uploads/2024/08/image-18.png", // Swap with your orange custom SVGs as needed
    title: "Consult",
    text: "Marketing is done right when we understand you, your clients and target them with the right strategy. The first step to digital success."
  },
  {
    id: "O",
    img: "https://syspree.com/wp-content/uploads/2024/08/image-19.png",
    title: "Optimize",
    text: "Here we execute what we strategized. Doing what we say and think is a habit at SySpree. And this shows in our successful results."
  },
  {
    id: "R",
    img: "https://syspree.com/wp-content/uploads/2024/08/image-19.png",
    title: "Reinforce",
    text: "At SySpree, we dont rest on our laurels, we push the envelope by multiplying, tweaking improving. We believe in success that lasts."
  },
  {
    id: "E",
    img: "https://syspree.com/wp-content/uploads/2024/08/image-20.png",
    title: "Excel",
    text: "Excellence in all we do. With SySpree, we dont just strive for your success, we strive harder for your excellence."
  }
];

const industriesData: IndustryCard[] = [
  { id: 1, title: "E-commerce", problemQuestion: "Competing for traffic?", solutionText: "Our SEO and ads bring in visitors, while smart UX turns them into customers." },
  { id: 2, title: "Technology and SaaS", problemQuestion: "Struggling with ARR?", solutionText: "Our inbound marketing and SEO attract qualified leads to boost your revenue." },
  { id: 3, title: "Consulting and Corporate Services", problemQuestion: "Need more RFPs?", solutionText: "Our content marketing builds credibility, turning proposals into contracts." },
  { id: 4, title: "Education and Training", problemQuestion: "Struggling with retention?", solutionText: "Our SEO and social boost enrollments and retention." },
  { id: 5, title: "Healthcare", problemQuestion: "Need more patients?", solutionText: "We boost local visibility with SEO and compliant content." },
  { id: 6, title: "Interior Designers and Renovators", problemQuestion: "Attracting high-value clients?", solutionText: "We showcase your luxury designs to land bigger projects." },
  { id: 7, title: "Travel and Tourism", problemQuestion: "Want to increase ADR?", solutionText: "Our marketing personalizes offers to boost bookings." },
  { id: 8, title: "Hospitality and FnB", problemQuestion: "Seeing a drop in RevPAR?", solutionText: "We use local SEO and ORM to boost your bookings." }
];

function CoreAndIndustries() {
<<<<<<< HEAD
=======
  const [activeIndustry, setActiveIndustry] = useState<number | null>(1);

>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
  return (
    <div className="landing-sections-wrapper">
      
      {/* SECTION 1: CORE FRAMEWORK */}
      <section className="core-framework-section">
        <div className="section-inner-container">
          
          <header className="core-header">
            <p className="core-meta-tag">INHOUSE PROVEN <span>FRAMEWORK.</span></p>
            <h2 className="core-main-heading">The <span>CORE</span> Framework: Consult, Optimize, Reinforce, Excel</h2>
            <p className="core-subtext">
              Our in-house CORE framework is the foundation of Syspree's success. By focusing on consulting, optimizing, reinforcing strategies, and driving excellence, we help businesses achieve sustainable growth through a structured, data-driven approach.
            </p>
          </header>

          {/* Central Diagram Illustration Box */}
          <div className="core-diagram-container">
            <div className="core-central-graphic">
              <img 
                src="https://syspree.com/wp-content/uploads/2025/01/Core-Framework-02.png" 
                alt="Syspree CORE Framework Strategy Diagram" 
                className="framework-center-img"
              />
            </div>
          </div>

          {/* Core Vertical Content Blocks Grid */}
          <div className="core-cards-grid">
            {coreCardsData.map((card) => (
              <div key={card.id} className="core-text-card">
                <div className="core-card-icon">  <img src={card.img} alt={card.title} />
</div>
                <h3 className="core-card-title">{card.title}</h3>
                <p className="core-card-body">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="core-action-row">
            <button className="orange-action-btn">
              Find Out How CORE Can Help You
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 2: INDUSTRIES WE SERVE */}
      <section className="industries-serve-section">
        <div className="section-inner-container white-panel-curve">
          
          <div className="industries-split-header">
            <div className="ind-header-left">
              <p className="ind-meta-tag">INDUSTRY <span>EXPERTISE</span></p>
              <h2 className="ind-main-heading"><span>Industries</span> we serve</h2>
            </div>
            <div className="ind-header-right">
              <p className="ind-header-desc">
                At Syspree, we tailor our digital marketing and web development solutions to meet the unique needs of various industries. Our CORE framework has proven successful across a diverse range of sectors, ensuring measurable results and sustainable growth.
              </p>
            </div>
          </div>

          {/* Dynamic Selection Grid View */}
          <div className="industries-cards-grid">
<<<<<<< HEAD
            {industriesData.map((ind, index) => {
              const isDarkOrangeCard = index === 0 || index === industriesData.length - 1;
              return (
                <div 
                  key={ind.id} 
                  className={`industry-data-card ${isDarkOrangeCard ? 'default-dark-orange' : ''}`}
=======
            {industriesData.map((ind) => {
              const isSelected = activeIndustry === ind.id;
              return (
                <div 
                  key={ind.id} 
                  className={`industry-data-card ${isSelected ? 'active-orange' : ''}`}
                  onMouseEnter={() => setActiveIndustry(ind.id)}
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
                >
                  <h3 className="ind-card-title">{ind.title}</h3>
                  <p className="ind-card-body">
                    <span className="bold-question">{ind.problemQuestion}</span> {ind.solutionText}
                  </p>
                  <div className="ind-card-arrow">
                    <svg viewBox="0 0 24 24" className="arrow-svg-icon">
                      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
                      <polyline points="12,5 19,12 12,19" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ind-action-row">
            <button className="orange-action-btn">
              Digital Marketing in more Industries
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default CoreAndIndustries;