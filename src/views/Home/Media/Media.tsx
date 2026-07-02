import "./Media.css";

const mediaData = [
  {
    text: (
      <>
        SySpree's results-driven approach emphasizes{" "}
        <span>trust and transparency.</span>
      </>
    ),
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/MSN_2012_logo.svg",
  },
  {
    text: (
      <>
        SySpree remains the gateway to{" "}
        <span>digital triumphs.</span>
      </>
    ),
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/ANI_Logo.svg",
  },
  {
    text: (
      <>
        SySpree's <span>inhouse IP</span>, generates{" "}
        <span>unparalleled growth.</span>
      </>
    ),
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/JioNews_Logo.png",
  },
];

function Media() {
  return (
    <section className="media">

      <div className="media-container">

        <p className="media-tag">MEDIA</p>

        <h2>
          <span>Syspree</span> in Media
        </h2>

        <p className="media-description">
          Our work and achievements have been recognized in leading newspapers,
          blogs, and industry publications. Here are some of the places where
          Syspree has been featured.
        </p>

        <div className="media-cards">
          {mediaData.map((item, index) => (
            <div className="media-card" key={index}>
              <div className="quote">❝</div>

              <p>{item.text}</p>

              <img src="https://syspree.com/wp-content/uploads/2024/10/MSN-Emblem.png" alt="" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Media;