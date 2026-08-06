import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <img
            src="/des.jpeg"
            alt="BlissBites Dessert Ordering Website"
            className="project-image"
          />

          <div className="project-content">
            <h3>BlissBites-Dessert Ordering Website</h3>

            <p>
              Built with a modern, responsive design that ensures 
              an intuitive and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;