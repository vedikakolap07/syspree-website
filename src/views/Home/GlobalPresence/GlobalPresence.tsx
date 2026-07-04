
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
import './GlobalPresence.css';

// --- INTERFACES & STATIC DATA ---
interface StoryVideo {
  id: number;
  thumbnail: string;
  logo: string;
<<<<<<< HEAD
  videoUrl: string;
=======
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
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
    thumbnail: 'https://syspree.com/wp-content/uploads/2024/10/thumb-1.jpg',
<<<<<<< HEAD
    logo: 'https://syspree.com/wp-content/uploads/2024/04/logosyspree.png',
    videoUrl: 'https://player.vimeo.com/video/123456789'
=======
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
  },
  {
    id: 2,
    thumbnail: 'https://syspree.com/wp-content/uploads/2024/10/Story-2.00_00_01_13.Still002.png',
<<<<<<< HEAD
    logo: 'https://syspree.com/wp-content/uploads/2024/04/logosyspree.png',
    videoUrl: 'https://player.vimeo.com/video/123456789'
=======
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
  },
  {
    id: 3,
    thumbnail: 'https://syspree.com/wp-content/uploads/2024/10/Story-3.00_00_01_25.Still001.png',
<<<<<<< HEAD
    logo: 'https://syspree.com/wp-content/uploads/2024/04/logosyspree.png',
    videoUrl: 'https://player.vimeo.com/video/123456789'
=======
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
  },
  {
    id: 4,
    thumbnail: 'https://syspree.com/wp-content/uploads/2024/10/thumb-4.jpg',
<<<<<<< HEAD
    logo: 'https://syspree.com/wp-content/uploads/2024/04/logosyspree.png',
    videoUrl: 'https://player.vimeo.com/video/123456789'
=======
    logo: 'https://syspree.com/wp-content/uploads/2023/04/syspree-logo-favicon.png'
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
  }
];

// --- MAIN UNIFIED COMPONENT ---
function GlobalPresence() {
<<<<<<< HEAD
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

=======
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
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
              <img src={story.thumbnail} alt={"Syspree Story"} className="story-thumbnail" />
              <div className="card-overlay">
                <div className="story-brand-logo">
                  <img src={story.logo} alt="Syspree" />
                </div>
<<<<<<< HEAD
                <button
                  className="play-button-overlay"
                  aria-label="Play Video"
                  onClick={() => setActiveVideo(story.videoUrl)}
                >
=======
                <button className="play-button-overlay" aria-label="Play Video">
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
                  <svg viewBox="0 0 100 100" className="play-svg">
                    <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="3" fill="none" opacity="0.85" />
                    <polygon points="40,35 70,50 40,65" fill="white" />
                  </svg>
                </button>
<<<<<<< HEAD
=======
                
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD

        {activeVideo && (
          <div className="video-overlay" role="dialog" aria-modal="true">
            <div className="video-overlay-backdrop" onClick={() => setActiveVideo(null)} />
            <div className="video-overlay-content">
              <button
                className="video-overlay-close"
                aria-label="Close video"
                onClick={() => setActiveVideo(null)}
              >
                ×
              </button>
              <div className="video-frame-wrapper">
                <iframe
                  title="Syspree Story Video"
                  src={`${activeVideo}?autoplay=1&muted=0&controls=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
=======
>>>>>>> 9e32617af492f6cfbf8cf658aaaf8160bb49b90e
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