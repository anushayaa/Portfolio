import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        <p className="hello">Hi, I'm</p>

        <h1 className="name">
          Anushaya A
        </h1>

        <h2 className="role">
          Full Stack Developer
        </h2>

        <p className="description">
          Passionate about building responsive and user-friendly web applications.
          
        </p>

        <div className="home-buttons">
          <a
         href="/resume.jpeg"
         className="btn primary"
         target="_blank"
         rel="noopener noreferrer"
>
  View Resume
</a>

          
        </div>

      </div>
    </section>
  );
}

export default Home;