function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h2>Skills</h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "12px 20px",
              borderRadius: "25px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;