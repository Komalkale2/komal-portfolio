function Projects() {
  const projects = [
    {
      title: "India Population Visualization",
      link: "https://komalkale2.github.io/IndiaPopulationVisualization/",
      desc: "Interactive visualization of India's state-wise population data.",
    },
    {
      title: "CSV Analyzer Application",
      link: "https://python-data-analyzer-9i4naq4cbsqjrzrrhj8lqr.streamlit.app/",
      desc: "Analyze CSV files and generate statistics and charts.",
    },
    {
      title: "Email Spam Detection",
      link: "https://email-spam-detectiongit-dzg3xaqjk3uprvbno8nbzg.streamlit.app/",
      desc: "Machine learning model for spam email classification.",
    },
    {
      title: "Women Safety Application",
      link: "https://komalkale2.github.io/Women_support_analytics",
      desc: "Women safety and support platform.",
    },
    {
      title: "TB Care AI Assistant",
      link: "https://ai-powered-tb-detection.vercel.app/",
      desc: "AI-powered healthcare assistance system.",
    },
  ];

  return (
    <section>
        <section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  }}
>

</section>
<h1
  style={{
    fontSize: "52px",
  }}
>
</h1>
      <h2 style={{ textAlign: "center" }}>Projects</h2>

     <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  }}
>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <a href={project.link} target="_blank" rel="noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;