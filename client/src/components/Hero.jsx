function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <img
        src="/images/profile.jpg"
        alt="Komal Kale"
        style={{
          width: "250px",
          height: "320px",
          objectFit: "cover",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        }}
      />

      <h1
        style={{
          color: "#5C4033",
          marginTop: "20px",
          fontSize: "3rem",
        }}
      >
        Komal Kale
      </h1>

      <h2
        style={{
          color: "#B88647",
          marginTop: "10px",
        }}
      >
        Data Analytics Enthusiast • Web Developer • Content Creator
      </h2>

      <p
        style={{
          marginTop: "15px",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Combining creativity and technology to build meaningful digital
        experiences.
      </p>

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/Komalkale2"
          target="_blank"
          rel="noreferrer"
        >
          <button>GitHub</button>
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          <button>LinkedIn</button>
        </a>

        <a
          href="https://www.instagram.com/komalll2___"
          target="_blank"
          rel="noreferrer"
        >
          <button>Instagram</button>
        </a>

       <a href="/resume.pdf" target="_blank" rel="noreferrer">
  <button>Resume</button>
</a>
      </div>
    </section>
  );
}

export default Hero;