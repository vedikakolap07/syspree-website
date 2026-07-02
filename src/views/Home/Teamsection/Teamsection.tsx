import './Teamsection.css';

interface TeamMember {
  id: number;
  src: string;
  alt: string;
}

function TeamSection() {
  const teamImages: TeamMember[] = [
    { id: 1, src: 'https://syspree.com/wp-content/uploads/2024/10/1-1-240x300.png', alt: 'Team Member 1' },
    { id: 2, src: 'https://syspree.com/wp-content/uploads/2024/10/1-768x960.png', alt: 'Team Member 2' },
    { id: 3, src: 'https://syspree.com/wp-content/uploads/2024/10/2-1-240x300.png', alt: 'Team Member 3' },
  ];

  return (
    <section className="team-section-container">
      <div className="team-bg-silhouette">
        <img 
          src="path-to-transparent-silhouette.png" 
          alt="Background Graphic" 
          className="silhouette-img"
        />
      </div>

      <div className="team-content-wrapper">
        {/* Left Side: Images */}
        <div className="team-images-column">
          {teamImages.map((member) => (
            <div key={member.id} className="team-avatar-card">
              <img 
                src={member.src} 
                alt={member.alt} 
                className="avatar-img"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Text Track */}
        <div className="team-text-column">
          <p className="team-meta-title">OUR TEAM</p>
          
          <div className="team-text-paragraphs">
            <p className="team-text">
              At Syspree, our team is not just skilled and full of domain expertise — they're innovators who elevate industry standards.
            </p>
            <p className="team-text">
              Each member brings unique expertise, years of experience and a passion for driving measurable results for each of our clients. Our talented professionals specialize in cutting-edge digital marketing strategies, web development, and brand growth, helping businesses outperform their competition.
            </p>
            <p className="team-text">
              Whether it's designing user-centric websites or crafting high-converting campaigns, our team delivers exceptional results, tailored to your specific needs. Trust in Syspree's unmatched talent pool to take your business to the next level with solutions that are creative, strategic, and results-driven.
            </p>
          </div>

          <button className="team-cta-btn">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;