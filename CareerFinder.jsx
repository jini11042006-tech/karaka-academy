import React, { useState } from "react";
import { Link } from "react-router-dom";

function CareerFinder() {

  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    interest: "",
    skill: "",
    goal: ""
  });

  const [result, setResult] = useState(null);

  const questions = {
    1: {
      title: "What do you enjoy?",
      subtitle: "Choose the area that interests you most.",
      options: [
        {
          value: "coding",
          icon: "</>",
          title: "Coding",
          text: "Building websites & applications"
        },
        {
          value: "ai",
          icon: "AI",
          title: "AI & Technology",
          text: "Artificial intelligence & machine learning"
        },
        {
          value: "data",
          icon: "◈",
          title: "Data",
          text: "Finding insights from data"
        },
        {
          value: "design",
          icon: "✦",
          title: "Design",
          text: "Creating digital experiences"
        }
      ]
    },

    2: {
      title: "What is your current skill?",
      subtitle: "Don't worry — beginners are welcome.",
      options: [
        {
          value: "beginner",
          icon: "01",
          title: "Beginner",
          text: "I'm starting from the basics"
        },
        {
          value: "basic",
          icon: "02",
          title: "Basic",
          text: "I know some fundamentals"
        },
        {
          value: "intermediate",
          icon: "03",
          title: "Intermediate",
          text: "I have built some projects"
        }
      ]
    },

    3: {
      title: "What is your goal?",
      subtitle: "Choose what you want to achieve.",
      options: [
        {
          value: "job",
          icon: "→",
          title: "Job",
          text: "Build skills for a technology career"
        },
        {
          value: "internship",
          icon: "↗",
          title: "Internship",
          text: "Gain practical experience"
        },
        {
          value: "projects",
          icon: "◇",
          title: "Projects",
          text: "Build a strong portfolio"
        }
      ]
    }
  };

  const handleSelect = (value) => {

    const key =
      step === 1
        ? "interest"
        : step === 2
        ? "skill"
        : "goal";

    setAnswers({
      ...answers,
      [key]: value
    });

  };


  const nextStep = () => {

    if (
      (step === 1 && !answers.interest) ||
      (step === 2 && !answers.skill) ||
      (step === 3 && !answers.goal)
    ) {
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateCareer();
    }

  };


  const calculateCareer = () => {

    let career = {
      title: "Full Stack Development",
      icon: "</>",
      description:
        "Build modern websites and full-stack applications using frontend and backend technologies.",
      skills:
        "HTML · CSS · JavaScript · React · Node.js",
      color: "purple"
    };


    if (answers.interest === "ai") {

      career = {
        title: "AI & Data Science",
        icon: "AI",
        description:
          "Explore Python, machine learning, data science and AI-powered applications.",
        skills:
          "Python · ML · Pandas · NumPy · AI",
        color: "cyan"
      };

    } else if (answers.interest === "data") {

      career = {
        title: "Data Analytics",
        icon: "◈",
        description:
          "Turn raw data into meaningful insights using analytics and visualization tools.",
        skills:
          "Excel · Python · SQL · Power BI",
        color: "blue"
      };

    } else if (answers.interest === "design") {

      career = {
        title: "UI/UX Design",
        icon: "✦",
        description:
          "Design user-friendly digital experiences, interfaces and interactive prototypes.",
        skills:
          "Figma · UI Design · UX · Prototyping",
        color: "pink"
      };

    }

    setResult(career);

  };


  const restart = () => {

    setStep(1);

    setAnswers({
      interest: "",
      skill: "",
      goal: ""
    });

    setResult(null);

  };


  if (result) {

    return (

      <main className="career-finder-page">

        <section className="finder-result">

          <span className="finder-label">
            YOUR AI CAREER MATCH
          </span>

          <div className={`result-icon ${result.color}`}>
            {result.icon}
          </div>

          <h1>
            {result.title}
          </h1>

          <p>
            Based on your interests, current skill level
            and career goal, this track could be a
            useful path to explore.
          </p>

          <div className="match-box">

            <span>
              RECOMMENDED SKILLS
            </span>

            <strong>
              {result.skills}
            </strong>

          </div>

          <div className="result-actions">

            <Link
              to="/courses"
              className="primary-btn"
            >
              EXPLORE THIS TRACK →
            </Link>

            <button
              onClick={restart}
              className="finder-reset"
            >
              TRY AGAIN
            </button>

          </div>

        </section>

      </main>

    );

  }


  const currentQuestion = questions[step];


  return (

    <main className="career-finder-page">

      <section className="finder-container">

        {/* HEADER */}

        <div className="finder-header">

          <span>
            KARKA AI CAREER FINDER
          </span>

          <h1>
            Find Your
            <strong> Tech Path.</strong>
          </h1>

          <p>
            Answer 3 simple questions and discover
            a career track you can explore.
          </p>

        </div>


        {/* PROGRESS */}

        <div className="finder-progress">

          <div
            className={step >= 1 ? "active" : ""}
          >
            01
          </div>

          <span></span>

          <div
            className={step >= 2 ? "active" : ""}
          >
            02
          </div>

          <span></span>

          <div
            className={step >= 3 ? "active" : ""}
          >
            03
          </div>

        </div>


        {/* QUESTION */}

        <div className="finder-question">

          <span>
            QUESTION {step} / 3
          </span>

          <h2>
            {currentQuestion.title}
          </h2>

          <p>
            {currentQuestion.subtitle}
          </p>

        </div>


        {/* OPTIONS */}

        <div className="finder-options">

          {currentQuestion.options.map(
            (option) => {

              const key =
                step === 1
                  ? "interest"
                  : step === 2
                  ? "skill"
                  : "goal";

              const selected =
                answers[key] === option.value;

              return (

                <button
                  key={option.value}
                  type="button"
                  className={`finder-option ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect(option.value)
                  }
                >

                  <div className="option-icon">
                    {option.icon}
                  </div>

                  <div className="option-content">

                    <strong>
                      {option.title}
                    </strong>

                    <small>
                      {option.text}
                    </small>

                  </div>

                  <div className="option-arrow">
                    →
                  </div>

                </button>

              );

            }
          )}

        </div>


        {/* NEXT */}

        <button
          type="button"
          className="finder-next"
          onClick={nextStep}
        >

          {step === 3
            ? "FIND MY CAREER →"
            : "CONTINUE →"
          }

        </button>

      </section>

    </main>

  );

}

export default CareerFinder;