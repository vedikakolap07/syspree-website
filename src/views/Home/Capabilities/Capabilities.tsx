import "./Capabilities.css";

const cards = [
  {
    title: "Web Development",
    color: "#ff9718",
  },
  {
    title: "Digital Marketing",
    color: "#e4661f",
  },
  {
    title: "Artificial Intelligence",
    color: "#ffb362",
  },
  {
    title: "IT",
    color: "#3d3f46",
  },
  {
    title: "Outsourcing",
    color: "#777983",
  },
];

function Capabilities() {
  return (
    <section className="capabilities">
      <div className="heading">
        <p>
          OUR <span>CAPABILITIES</span>
        </p>

        <h2>
          Let's start <span>growing your business</span> today!
        </h2>
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ background: card.color }}
          >
            {/* Clean top corner line anchor */}
            <div className="top-line"></div>

            <h3 className="card-title">{card.title}</h3>

            {/* Structured action arrow circle matching mockup */}
            <div className="card-arrow-btn">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;