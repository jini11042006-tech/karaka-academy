import React from "react";
import { Link } from "react-router-dom";



function Home() {

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-grid"></div>

        <div className="floating-tech tech-1">
          &lt;/&gt;
        </div>

        <div className="floating-tech tech-2">
          PY
        </div>

        <div className="floating-tech tech-3">
          AI
        </div>

        <div className="floating-tech tech-4">
          DATA
        </div>

        <div className="hero-container">

          <div className="hero-left">

            <div className="hero-mini">
              SKILLS &nbsp; / &nbsp; PROJECTS &nbsp; / &nbsp; CAREERS
            </div>

            <h1>
              BUILD YOUR
              <br />

              <span>FUTURE</span>

              <br />

              WITH <strong>AI</strong>
            </h1>

            <h2>
              Learn. Build. Launch.
            </h2>

            <p>
              Build industry-ready skills through
              practical learning, real projects and
              career-focused technology programs.
            </p>

            <div className="hero-features">

              <div>
                <b>◇</b>
                <section>
                  <strong>Career Tracks</strong>
                  <small>Choose Your Path</small>
                </section>
              </div>

              <div>
                <b>&lt;/&gt;</b>
                <section>
                  <strong>Real Projects</strong>
                  <small>Build What Matters</small>
                </section>
              </div>

              <div>
                <b>◇</b>
                <section>
                  <strong>Career Support</strong>
                  <small>Get Career Ready</small>
                </section>
              </div>

            </div>

            <div className="hero-buttons">

              <Link
                to="/courses"
                className="primary-btn"
              >
                EXPLORE CAREER TRACKS →
              </Link>

              <Link
                to="/contact"
                className="secondary-btn"
              >
                APPLY NOW →
              </Link>

            </div>

          </div>


          {/* AI VISUAL */}

          <div className="hero-right">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="ai-core">

              <div className="ai-glow"></div>

              <div className="ai-points">

                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>

              </div>

            </div>

            <div className="ai-label label-code">
              &lt;/&gt;
              <small>CODE</small>
            </div>

            <div className="ai-label label-ai">
              AI
              <small>INTELLIGENCE</small>
            </div>

            <div className="ai-label label-python">
              Py
              <small>PYTHON</small>
            </div>

            <div className="ai-label label-data">
              ◎
              <small>DATA</small>
            </div>

          </div>

        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-box">
            <strong>01</strong>
            <h3>AI + Tech</h3>
            <p>Future-focused learning</p>
          </div>

          <div className="stat-box">
            <strong>06+</strong>
            <h3>Career Tracks</h3>
            <p>Technology learning paths</p>
          </div>

          <div className="stat-box">
            <strong>100%</strong>
            <h3>Practical</h3>
            <p>Project-based learning</p>
          </div>

          <div className="stat-box">
            <strong>∞</strong>
            <h3>Growth</h3>
            <p>Keep learning and building</p>
          </div>

        </div>

      </section>


      {/* ================= WHY KARKA ================= */}

      <section className="section-block">

        <div className="section-heading">

          <span>WHY KARKA</span>

          <h2>
            Learn Skills.
            <strong> Build Careers.</strong>
          </h2>

          <p>
            Learn modern technologies by building
            practical solutions and real-world projects.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-card">
            <span>01</span>
            <h3>Practical Learning</h3>
            <p>
              Learn concepts through hands-on
              implementation and projects.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Industry Skills</h3>
            <p>
              Develop skills around modern tools,
              frameworks and technologies.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Career Focus</h3>
            <p>
              Prepare your portfolio and technical
              skills for career opportunities.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PAY AFTER PLACEMENT ================= */}

      <section className="pay-section">

        <div className="pay-glow"></div>

        <div className="pay-container">

          <div className="pay-left">

            <span className="section-tag">
              CAREER SUPPORT MODEL
            </span>

            <h2>
              Learn Now.
              <br />

              <strong>
                Pay After Placement.
              </strong>
            </h2>

            <p>
              Build practical skills, work on
              real-world projects and prepare for
              career opportunities with an applicable
              Pay After Placement model.
            </p>

            <Link
              to="/contact"
              className="pay-link"
            >
              Explore Eligibility →
            </Link>

          </div>


          <div className="pay-right">

            <div className="pay-card">

              <div className="pay-icon">
                ₹
              </div>

              <h3>
                PAY AFTER
                <br />
                PLACEMENT
              </h3>

              <p>
                Terms & eligibility apply
              </p>

            </div>

            <div className="pay-card">

              <div className="pay-icon">
                ✓
              </div>

              <h3>
                CAREER
                <br />
                PREPARATION
              </h3>

              <p>
                Skills + Projects + Support
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CAREER TRACKS ================= */}

      <section className="career-section">

        <div className="section-heading">

          <span>CAREER TRACKS</span>

          <h2>
            Choose Your
            <strong> Path.</strong>
          </h2>

        </div>


        <div className="career-grid">

          <div className="career-card">
            <span>01</span>
            <h3>Full Stack Development</h3>
            <p>React · Node · MongoDB</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

          <div className="career-card">
            <span>02</span>
            <h3>AI & Data Science</h3>
            <p>Python · ML · AI</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

          <div className="career-card">
            <span>03</span>
            <h3>Data Analytics</h3>
            <p>Excel · Python · Power BI</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

          <div className="career-card">
            <span>04</span>
            <h3>Data Engineering</h3>
            <p>Python · SQL · Cloud</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

          <div className="career-card">
            <span>05</span>
            <h3>UI/UX Design</h3>
            <p>Figma · Design · Prototype</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

          <div className="career-card">
            <span>06</span>
            <h3>Web Designing</h3>
            <p>HTML · CSS · JavaScript</p>
            <Link to="/courses">
              Explore →
            </Link>
          </div>

        </div>

      </section>


<section className="cf-home-section">

  <div className="cf-home-box">

    <span className="cf-home-label">
      NOT SURE WHAT TO LEARN?
    </span>

    <h2>
      Find Your
      <strong> Tech Path.</strong>
    </h2>

    <p>
      Answer 3 questions and discover a career
      track that matches your interests.
    </p>

    <Link
      to="/career-finder"
      className="cf-home-button"
    >
      START AI CAREER FINDER →
    </Link>

  </div>

</section>

      {/* ================= CTA ================= */}

      <section className="home-cta">

        <span>START BUILDING</span>

        <h2>
          Your Future
          <strong> Starts Here.</strong>
        </h2>

        <p>
          Choose a career track and start
          building practical technology skills.
        </p>

        <Link
          to="/contact"
          className="primary-btn"
        >
          APPLY NOW →
        </Link>

      </section>

    </main>
  );
}

export default Home;