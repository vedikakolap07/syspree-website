
import './GlobalPresence.css';

// --- INTERFACES & STATIC DATA ---
interface StoryVideo {
  id: number;
  thumbnail: string;
  title: string;
  logo: string;
}

const officeLocations = [
  {
    country: "India",
    cities: ["Mumbai", "Bengaluru", "Delhi NCR", "Chennai", "Hyderabad", "Pune", "Surat", "Ahmedabad"]
  },
  {
    country: "Australia",
    cities: ["Brisbane", "Adelaide", "Gold Coast", "Canberra", "Perth", "Sydney", "Melbourne"]
  },
  {
    country: "USA",
    cities: ["New York", "San Francisco", "Miami", "Chicago", "Los Angeles"]
  },
  {
    country: "UAE",
    cities: ["Dubai", "Ras Al Khaimah", "Ajman", "Sharjah", "Abu Dhabi"]
  },
  {
    country: "UK",
    cities: ["London", "Leeds", "Birmingham", "Glasgow", "Edinburgh"]
  }
];

const storiesData: StoryVideo[] = [
  {
    id: 1,
    thumbnail: 'path-to-video-thumbnail1.jpg',
    title: 'Creme de la Creme',
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
  },
  {
    id: 2,
    thumbnail: 'path-to-video-thumbnail2.jpg',
    title: 'One team, One dream, SySpree.',
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
  },
  {
    id: 3,
    thumbnail: 'path-to-video-thumbnail3.jpg',
    title: '',
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
  },
  {
    id: 4,
    thumbnail: 'path-to-video-thumbnail4.jpg',
    title: '',
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
  }
];

// --- MAIN UNIFIED COMPONENT ---
function GlobalPresence() {
  return (
    <div className="global-wrapper">
       {/* --- SECTION 2: OUR STORIES (INJECTED MID-WAY CLEANLY) --- */}
      <section className="stories-section">
        <div className="stories-header">
          <p className="stories-meta">OUR STORIES</p>
          <h2 className="stories-title">What's Happening at Syspree</h2>
        </div>

        <div className="stories-grid">
          {storiesData.map((story) => (
            <div key={story.id} className="story-card">
              <img src={story.thumbnail} alt={story.title || "Syspree Story"} className="story-thumbnail" />
              <div className="card-overlay">
                <div className="story-brand-logo">
                  <img src={story.logo} alt="Syspree" />
                </div>
                <button className="play-button-overlay" aria-label="Play Video">
                  <svg viewBox="0 0 100 100" className="play-svg">
                    <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="3" fill="none" opacity="0.85" />
                    <polygon points="40,35 70,50 40,65" fill="white" />
                  </svg>
                </button>
                {story.title && (
                  <div className="story-card-footer">
                    <h3 className="story-card-title">{story.title}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- SECTION 1: GLOBAL MAP PRESENCE --- */}
      <section className="map-section">
        <p className="map-subtitle">OUR <span>GLOBAL</span> PRESENCE</p>
        <h2 className="map-heading"><span>Countries</span> we are in</h2>
        <p className="map-description">
          Syspree is proud to serve clients from around the world, delivering tailored digital marketing and web development solutions that drive growth in diverse markets. Here are the countries where we have made an impact.
        </p>

        <div className="map-container">
          <img 
            src="https://syspree.com/wp-content/uploads/2024/10/Map-01-1-1536x919.png" 
            alt="World Map Presence" 
            className="world-map-img" 
          />
          <div className="map-silhouette-layer"></div>
        </div>

        <div className="directory-grid">
          {officeLocations.map((loc, idx) => (
            <div key={idx} className="directory-column">
              <h3>{loc.country}</h3>
              <ul>
                {loc.cities.map((city, cIdx) => <li key={cIdx}>{city}</li>)}
              </ul>
            </div>
          ))}

          <div className="directory-column highlighted-text">
            <h3>Singapore</h3>
            <ul>
              <li>Oman</li>
              <li>Saudi</li>
              <li>Newzealand</li>
              <li>Africa</li>
              <li>Europe</li>
            </ul>
          </div>
          <div className="directory-column highlighted-text">
            <h3>Bahrain</h3>
            <ul>
              <li>Kuwait</li>
              <li>Thailand</li>
              <li>Philippines</li>
              <li>Canada</li>
              <li>Malaysia</li>
            </ul>
          </div>
        </div>
      </section>

     

    

    </div>
  );
}

export default GlobalPresence;