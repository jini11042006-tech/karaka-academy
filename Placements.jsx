import React from "react";
import { Link } from "react-router-dom";
import "./Placements.css";

function Placements() {
  const preparation = [
    {
      number: "01",
      title: "Skill Development",
      description:
        "Develop technical knowledge, problem-solving ability and industry-ready skills.",
      tag: "BUILD YOUR SKILLS",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "02",
      title: "Project Experience",
      description:
        "Build practical projects and demonstrate your abilities through your portfolio.",
      tag: "CREATE PROJECTS",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "03",
      title: "Career Preparation",
      description:
        "Prepare your resume, strengthen interview skills and explore career opportunities.",
      tag: "GET CAREER READY",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <main className="karka-placement-page">

      {/* HERO SECTION */}
      <section className="karka-placement-hero">
        <span className="karka-placement-label">
          CAREER OUTCOMES
        </span>

        <h1>
          Prepare.
          <strong> Perform.</strong>
        </h1>

        <p>
          Build practical skills, create real projects and
          prepare yourself for technology career opportunities.
        </p>

        <div className="placement-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=90"
            alt="Students learning technology skills"
          />

          <div className="placement-image-overlay">
            <span>LEARN • BUILD • GROW</span>
            <h2>Your Skills. Your Future.</h2>
          </div>
        </div>
      </section>

      {/* PLACEMENT STATS */}
      <section className="karka-placement-stats">

        <div className="karka-placement-box">
          <span>01</span>
          <strong>24 LPA</strong>
          <h3>Highest Package</h3>
          <p>
            Career opportunities across technology roles.
          </p>
        </div>

        <div className="karka-placement-box">
          <span>02</span>
          <strong>100%</strong>
          <h3>Placement Support</h3>
          <p>
            Career preparation and placement assistance.
          </p>
        </div>

        <div className="karka-placement-box">
          <span>03</span>
          <strong>50+</strong>
          <h3>Hiring Partners</h3>
          <p>
            Opportunities through industry connections.
          </p>
        </div>

      </section>

      {/* CAREER PREPARATION */}
      <section className="karka-placement-preparation">

        <div className="karka-preparation-heading">
          <span>OUR APPROACH</span>

          <h2>
            Career
            <strong> Preparation.</strong>
          </h2>

          <p>
            Develop your skills, gain practical experience
            and prepare for your professional journey.
          </p>
        </div>

        <div className="karka-preparation-grid">

          {preparation.map((item) => (
            <article
              className="karka-preparation-card"
              key={item.number}
            >
              <div className="preparation-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="preparation-number">
                  {item.number}
                </span>
              </div>

              <div className="preparation-card-content">
                <span className="preparation-tag">
                  {item.tag}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to="/courses">
                  Explore Career Tracks →
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="placement-cta">
        <span>START YOUR JOURNEY</span>

        <h2>
          Build Skills.
          <strong> Build Your Future.</strong>
        </h2>

        <p>
          Explore our career tracks and discover the skills
          you can develop for your future.
        </p>

        <Link to="/contact" className="placement-cta-button">
          APPLY NOW →
        </Link>
      </section>

      {/* DISCLAIMER */}
      <section className="karka-placement-note">
        <p>
          Placement statistics and hiring information should
          be verified with Karka AI & Tech Academy before
          publishing as official claims.
        </p>
      </section>

    </main>
  );
}

export default Placements;