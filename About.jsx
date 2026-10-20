import React from "react";
import "./About.css";

const values = [
  {
    number: "01",
    icon: "✳",
    title: "Practical Learning",
    description:
      "Understand concepts by implementing them through hands-on activities and practical projects.",
    tag: "LEARN BY DOING",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Modern Technology",
    description:
      "Explore modern technologies and tools used across today's digital ecosystem.",
    tag: "EXPLORE TECHNOLOGY",
  },
  {
    number: "03",
    icon: "↗",
    title: "Career Focus",
    description:
      "Build technical skills and projects that help you prepare for career opportunities.",
    tag: "GROW YOUR FUTURE",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-orb about-orb-one"></div>
        <div className="about-orb about-orb-two"></div>
        <div className="about-orb about-orb-three"></div>

        <div className="about-hero-content about-reveal">

          <span className="about-label">
            <span className="about-label-dot"></span>
            ABOUT KARKA
          </span>

          <h1>
            Learn.
            <strong> Build.</strong>
            <br />
            <span className="about-gradient-text">Grow.</span>
          </h1>

          <p>
            Karka AI & Tech Academy focuses on practical
            technology learning, real-world projects and
            career-focused skill development.
          </p>

          <a href="/courses" className="about-hero-button">
            Explore Our Learning
            <span>↗</span>
          </a>

          <div className="about-hero-caption">
            <span className="about-caption-line"></span>
            LEARN TODAY. BUILD TOMORROW.
          </div>

        </div>

        <div className="about-hero-art about-reveal">

          <div className="about-art-ring about-ring-one"></div>
          <div className="about-art-ring about-ring-two"></div>
          <div className="about-art-ring about-ring-three"></div>

          <div className="about-art-core">
            <div className="about-core-inner">
              <span className="about-core-symbol">✳</span>
              <span className="about-core-title">KARKA</span>
              <span className="about-core-subtitle">AI & TECH ACADEMY</span>
            </div>
          </div>

          <div className="about-float-card about-float-top">
            <span className="about-float-icon">✦</span>
            <div>
              <strong>Think Different</strong>
              <span>Explore new ideas</span>
            </div>
          </div>

          <div className="about-float-card about-float-bottom">
            <span className="about-float-icon">⌘</span>
            <div>
              <strong>Build Something</strong>
              <span>Turn ideas into projects</span>
            </div>
          </div>

          <span className="about-art-star about-star-one">✦</span>
          <span className="about-art-star about-star-two">✧</span>
          <span className="about-art-star about-star-three">✦</span>

        </div>

        <div className="about-hero-bottom">
          <span>01 — LEARN</span>
          <span>02 — BUILD</span>
          <span>03 — GROW</span>
        </div>

      </section>


      {/* VALUES SECTION */}

      <section className="about-values">

        <div className="about-section-heading about-reveal">

          <span className="about-label">
            WHAT MAKES US DIFFERENT
          </span>

          <h2>
            Learning with
            <strong> Purpose.</strong>
          </h2>

          <p>
            Discover a learning approach designed to turn
            curiosity into practical skills.
          </p>

        </div>

        <div className="about-values-grid">

          {values.map((value, index) => (
            <article
              className="about-value-card"
              key={value.number}
              style={{ "--card-index": index }}
            >

              <div className="about-card-top">
                <span className="about-number">
                  {value.number}
                </span>

                <span className="about-card-icon">
                  {value.icon}
                </span>
              </div>

              <h2>{value.title}</h2>

              <p>{value.description}</p>

              <div className="about-card-footer">
                <span>{value.tag}</span>
                <span className="about-card-arrow">↗</span>
              </div>

              <div className="about-card-glow"></div>

            </article>
          ))}

        </div>

      </section>


      {/* OUR APPROACH */}

      <section className="about-content">

        <div className="about-content-grid">

          <div className="about-content-left about-reveal">

            <span className="about-label">
              OUR APPROACH
            </span>

            <h2>
              Learn by
              <br />
              <strong>Building.</strong>
            </h2>

            <div className="about-approach-decoration">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          <div className="about-content-right about-reveal">

            <p>
              Technology is best learned by building.
              At Karka, learning is designed around
              practical implementation, projects and
              modern technology.
            </p>

            <p>
              Students can explore different career
              paths, develop technical skills and create
              projects that demonstrate what they can do.
            </p>

            <div className="about-approach-points">

              <div className="about-approach-point">
                <span>✓</span>
                <p>Hands-on learning</p>
              </div>

              <div className="about-approach-point">
                <span>✓</span>
                <p>Project-based experience</p>
              </div>

              <div className="about-approach-point">
                <span>✓</span>
                <p>Continuous skill development</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MISSION SECTION */}

      <section className="about-mission">

        <div className="mission-box">

          <div className="mission-orb"></div>

          <span className="about-label">
            OUR MISSION
          </span>

          <h2>
            Build Skills.
            <br />
            <strong>Create Opportunities.</strong>
          </h2>

          <p>
            Empower learners with practical technology
            skills, project experience and career-focused
            learning.
          </p>

          <a href="/contact" className="about-mission-button">
            Start Your Journey
            <span>↗</span>
          </a>

          <div className="mission-bottom-line"></div>

        </div>

      </section>

    </main>
  );
}

export default About;