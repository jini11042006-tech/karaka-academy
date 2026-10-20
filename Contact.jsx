import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    college_name: "",
    phone: "",
    email: "",
    career_track: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");


  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      const response = await fetch(
        "http://localhost/karka-api/apply.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {

        setSuccess(data.message);

        setFormData({
          name: "",
          college_name: "",
          phone: "",
          email: "",
          career_track: "",
          message: ""
        });

      } else {

        setError(data.message);

      }

    } catch (err) {

      setError(
        "Unable to connect to server. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <main className="contact-page">

      <section className="contact-hero">

        <span>START YOUR JOURNEY</span>

        <h1>
          Build Your
          <strong> Future.</strong>
        </h1>

        <p>
          Tell us about yourself and choose
          your career track.
        </p>

      </section>


      <section className="contact-section">

        <div className="contact-container">


          <div className="contact-info">

            <span className="contact-label">
              APPLY NOW
            </span>

            <h2>
              Let's Start
              <strong> Building.</strong>
            </h2>

            <p>
              Fill in your details and our team
              will get in touch with you.
            </p>


            <div className="contact-item">
              <span>01</span>

              <div>
                <h3>Choose a Track</h3>

                <p>
                  Select your career path.
                </p>
              </div>

            </div>


            <div className="contact-item">
              <span>02</span>

              <div>
                <h3>Submit Details</h3>

                <p>
                  Tell us about yourself.
                </p>
              </div>

            </div>


            <div className="contact-item">
              <span>03</span>

              <div>
                <h3>Get Connected</h3>

                <p>
                  Our team will contact you.
                </p>
              </div>

            </div>

          </div>


          <div className="contact-form-card">

            <form onSubmit={handleSubmit}>


              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  College Name
                </label>

                <input
                  type="text"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  required
                />

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Career Track
                </label>

                <select
                  name="career_track"
                  value={formData.career_track}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a career track
                  </option>

                  <option>
                    MERN Stack Development
                  </option>

                  <option>
                    React + Java/Python
                  </option>

                  <option>
                    AI & Data Science
                  </option>

                  <option>
                    Data Analytics
                  </option>

                  <option>
                    Data Engineering
                  </option>

                  <option>
                    UI/UX Design
                  </option>

                  <option>
                    Web Designing
                  </option>

                  <option>
                    Business Analyst
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you want to learn..."
                  rows="5"
                />

              </div>


              {success && (
                <div className="form-success">
                  ✓ {success}
                </div>
              )}


              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}


              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >

                {loading
                  ? "Submitting..."
                  : "Submit Application →"}

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>

  );
}

export default Contact;