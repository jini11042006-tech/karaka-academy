import React from "react";
import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Web Applications",
    category: "DIGITAL EXPERIENCES",
    description:
      "Create responsive websites and interactive web applications to solve real-world problems.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    tag: "Frontend & Backend",
  },
  {
    id: "02",
    title: "AI & Machine Learning",
    category: "INTELLIGENT SYSTEMS",
    description:
      "Explore intelligent applications using machine learning, prediction and data-driven models.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    tag: "AI / ML",
  },
  {
    id: "03",
    title: "Data Analytics",
    category: "INSIGHTS & DATA",
    description:
      "Transform raw information into useful insights through analysis, dashboards and visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    tag: "Python & Analytics",
  },
  {
    id: "04",
    title: "Automation",
    category: "SMART WORKFLOWS",
    description:
      "Build smart workflows that reduce repetitive tasks and improve everyday productivity.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85",
    tag: "Automation",
  },
  {
    id: "05",
    title: "UI/UX Projects",
    category: "DESIGN & EXPERIENCE",
    description:
      "Design clean, accessible and user-friendly interfaces with a focus on real user needs.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    tag: "UI / UX Design",
  },
  {
    id: "06",
    title: "Business Solutions",
    category: "TECH FOR BUSINESS",
    description:
      "Develop practical digital solutions for business operations, services and customer needs.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    tag: "Digital Solutions",
  },
];

function Projects() {
  return (
    <main className="karka-projects-page">

      {/* HERO SECTION */}
      <section className="projects-hero">

        <div className="projects-hero-content">
          <span className="projects-eyebrow">
            <span className="projects-live-dot"></span>
            LEARN. CREATE. INNOVATE.
          </span>

          <h1>
            Ideas Into
            <br />
            <strong>Impact.</strong>
          </h1>

          <p>
            Don't just learn technology.
            Build something meaningful with it.
            Explore practical project areas designed
            to turn your knowledge into real solutions.
          </p>

          <a href="#project-showcase" className="projects-hero-btn">
            Explore Projects
            <span>↘</span>
          </a>
        </div>

        <div className="projects-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
            alt="Students collaborating on technology projects"
          />

          <div className="projects-image-shade"></div>

          <div className="projects-floating-card">
            <span className="floating-card-icon">✳</span>
            <div>
              <strong>Ideas. Code. Results.</strong>
              <p>Build your next big idea.</p>
            </div>
          </div>

          <span className="projects-image-label">
            THE MAKER MINDSET
          </span>
        </div>

        <div className="projects-hero-bottom">
          <span>01 — EXPLORE</span>
          <span>02 — EXPERIMENT</span>
          <span>03 — BUILD</span>
        </div>

      </section>


      {/* PROJECT INTRODUCTION */}
      <section className="projects-intro" id="project-showcase">

        <div>
          <span className="projects-section-label">
            WHAT YOU CAN CREATE
          </span>

          <h2>
            Your next project
            <br />
            starts <strong>here.</strong>
          </h2>
        </div>

        <p>
          From your first website to intelligent AI
          applications, explore technology domains
          where your ideas can become working projects.
        </p>

      </section>


      {/* PROJECT CARDS */}
      <section className="projects-showcase">

        {projects.map((project) => (
          <article className="project-showcase-card" key={project.id}>

            <div className="project-showcase-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-image-number">
                {project.id}
              </span>

              <span className="project-image-arrow">
                ↗
              </span>
            </div>

            <div className="project-showcase-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-card-footer">
                <span className="project-tech-tag">
                  {project.tag}
                </span>

                <span className="project-card-line"></span>
              </div>

            </div>

          </article>
        ))}

      </section>


      {/* CREATIVE CTA */}
      <section className="projects-cta">

        <div className="projects-cta-decoration">✳</div>

        <span className="projects-section-label">
          YOUR IDEA MATTERS
        </span>

        <h2>
          Think beyond
          <br />
          <strong>the ordinary.</strong>
        </h2>

        <p>
          Start with curiosity. Learn by building.
          Create technology that makes a difference.
        </p>

        <a href="/contact" className="projects-cta-button">
          Let's Build Something
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default Projects;