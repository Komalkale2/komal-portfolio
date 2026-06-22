function Internships() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h2>Internships</h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          display: "grid",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Java Full Stack Developer Intern</h3>
          <p>Remote | Jan 2024 - Mar 2024</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Python Development Intern</h3>
          <p>Cognifyz Technologies | Sep 2025 - Oct 2025</p>
        </div>
      </div>
    </section>
  );
}

export default Internships;