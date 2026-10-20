import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CareerTracks.css";

const tracks = [
    
  {
    title: "Artificial Intelligence",
    subtitle: "Build intelligent applications",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
    tag: "AI & ML",
  },
  {
    title: "Web Development",
    subtitle: "Create modern websites",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    tag: "WEB",
  },
  {
    title: "Python Programming",
    subtitle: "Learn to code and automate",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=85",
    tag: "PYTHON",
  },
  {
    title: "Data Analytics",
    subtitle: "Turn data into insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    tag: "DATA",
  },
  {
    title: "UI/UX Design",
    subtitle: "Design better user experiences",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85",
    tag: "DESIGN",
  },
  {
    title: "Cyber Security",
    subtitle: "Understand digital security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85",
    tag: "SECURITY",
  },
];

function CareerTracks() {
    const navigate=useNavigate();
  return (
    <section className="career-tracks-section">
      <div className="career-tracks-heading">
        <span className="career-tracks-eyebrow">
          YOUR NEXT MOVE
        </span>

        <h2>
          Explore Career <span>Tracks.</span>
        </h2>

        <p>
          Choose your path. Build real skills.
          Create your future with technology.
        </p>
      </div>

      <div className="career-tracks-grid">
        {tracks.map((track) => (
          <article
            className="career-track-card"
            key={track.title}
          >
            <div className="career-track-image-wrap">
              <img
                src={track.image}
                alt={track.title}
                className="career-track-image"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <span className="career-track-tag">
                {track.tag}
              </span>
            </div>

            <div className="career-track-content">
              <h3>{track.title}</h3>
              <p>{track.subtitle}</p>

              <Link
                to="/courses"
                className="career-track-link"
              >
                Explore Track <span>↗</span>
              </Link>
              <button
              className="career-tracks-link"
              onClick={()=>navigate("/courses")}
              ></button>
            </div>
          </article>
        ))}
      </div>

      <div className="career-tracks-bottom">
        <p>READY TO BUILD YOUR FUTURE?</p>
       <button 
        type="button"
         className="career-tracks-button"
        onClick={()=>navigate("/courses")}
        >
          Explore All Courses →
          </button>
       
        
      </div>
      
    </section>
    
  );
}

export default CareerTracks;