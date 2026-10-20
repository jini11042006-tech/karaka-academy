import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "01",
    title: "Software Development",
    description:
      "Learn to build real-world applications with modern technologies and industry best practices.",
    skills: "HTML • CSS • JavaScript",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    color: "purple",
  },
  {
    id: "02",
    title: "Skill Development",
    description:
      "Improve communication, problem-solving and professional skills for career growth.",
    skills: "Communication • Aptitude",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
    color: "blue",
  },
  {
    id: "03",
    title: "React Development",
    description:
      "Master React and build dynamic, interactive and responsive web applications.",
    skills: "React • JavaScript • APIs",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=85",
    color: "cyan",
  },
  {
    id: "04",
    title: "Data Science & AI",
    description:
      "Work with data, machine learning and intelligent solutions using AI.",
    skills: "Python • ML • AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
    color: "purple",
  },
  {
    id: "05",
    title: "Python Programming",
    description:
      "Learn Python from the basics and create useful applications and automation tools.",
    skills: "Python • OOP • Projects",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=85",
    color: "yellow",
  },
  {
    id: "06",
    title: "Web Development",
    description:
      "Build modern, responsive websites using frontend and backend technologies.",
    skills: "HTML • CSS • JavaScript",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=85",
    color: "pink",
  },
  {
    id: "07",
    title: "UI/UX Design",
    description:
      "Create user-friendly designs, attractive interfaces and interactive prototypes.",
    skills: "Figma • UI • UX",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=85",
    color: "purple",
  },
  {
    id: "08",
    title: "Data Analytics",
    description:
      "Turn raw data into meaningful insights through analysis and visualization.",
    skills: "Excel • SQL • Power BI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    color: "cyan",
  },
];

function Courses() {
  return (
    <main className="courses-page">

      <section className="courses-hero">
        <span className="courses-eyebrow">EXPLORE</span>

        <h1>
          Career <strong>Tracks</strong>
        </h1>

        <p>
          Choose your path. Build your skills. Create your future.
          <br />
          Explore our focused career tracks designed for real-world success.
        </p>
      </section>

      <section className="visual-course-grid">

        {courses.map((course) => (
          <article
            className={`visual-course-card ${course.color}`}
            key={course.id}
          >
            <div className="visual-course-image">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
              />

              <span className="course-number">
                {course.id}
              </span>
            </div>

            <div className="visual-course-content">
              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <div className="course-skills">
                {course.skills}
              </div>

              <Link
                to="/contact"
                className="visual-course-link"
              >
                Explore <span>→</span>
              </Link>
            </div>
          </article>
        ))}

      </section>

      <section className="courses-bottom-cta">
        <span>YOUR FUTURE STARTS HERE</span>

        <h2>
          Ready to build your <strong>career?</strong>
        </h2>

        <p>
          Choose a learning path and start developing
          practical technology skills.
        </p>

        <Link to="/contact" className="courses-apply-btn">
          APPLY NOW →
        </Link>
      </section>

    </main>
  );
}

export default Courses;