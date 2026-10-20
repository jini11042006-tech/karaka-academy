import React, { useState } from "react";

function ApplicationStatus() {

  const [applicationId, setApplicationId] = useState("");
  const [application, setApplication] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkStatus = async () => {

    if (!applicationId.trim()) {
      setError("Please enter your Application ID");
      return;
    }

    setLoading(true);
    setError("");
    setApplication(null);

    try {

      const response = await fetch(
        `http://localhost/karka-api/get_application_status.php?id=${applicationId}`
      );

      const data = await response.json();

      if (data.success) {

        setApplication(data.application);

      } else {

        setError(
          data.message || "Application not found"
        );

      }

    } catch (error) {

      setError(
        "Unable to connect to server"
      );

    } finally {

      setLoading(false);

    }

  };


  const getStatusStep = () => {

    if (!application) {
      return 0;
    }

    const status =
      application.status?.toLowerCase();

    if (status === "new") {
      return 1;
    }

    if (
      status === "under review" ||
      status === "review"
    ) {
      return 2;
    }

    if (status === "shortlisted") {
      return 3;
    }

    if (status === "interview") {
      return 4;
    }

    if (
      status === "selected" ||
      status === "approved"
    ) {
      return 5;
    }

    return 1;

  };


  const currentStep = getStatusStep();


  return (

    <main className="application-status-page">

      <section className="status-container">

        {/* HEADER */}

        <div className="status-header">

          <span>
            KARKA APPLICATION TRACKER
          </span>

          <h1>
            Track Your
            <strong> Application.</strong>
          </h1>

          <p>
            Enter your application ID to check
            your latest application status.
          </p>

        </div>


        {/* SEARCH */}

        <div className="status-search">

          <label>
            APPLICATION ID
          </label>

          <div className="status-search-row">

            <input
              type="number"
              placeholder="Enter Application ID"
              value={applicationId}
              onChange={(e) =>
                setApplicationId(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  checkStatus();
                }

              }}
            />

            <button
              type="button"
              onClick={checkStatus}
              disabled={loading}
            >

              {loading
                ? "CHECKING..."
                : "CHECK STATUS →"
              }

            </button>

          </div>

          {error && (

            <div className="status-error">
              {error}
            </div>

          )}

        </div>


        {/* APPLICATION RESULT */}

        {application && (

          <section className="application-result">

            <div className="application-top">

              <div>

                <span>
                  APPLICATION #{application.id}
                </span>

                <h2>
                  {application.name}
                </h2>

              </div>

              <div className="current-status">

                <small>
                  CURRENT STATUS
                </small>

                <strong>
                  {application.status}
                </strong>

              </div>

            </div>


            {/* DETAILS */}

            <div className="application-details">

              <div>
                <span>COLLEGE</span>
                <strong>
                  {application.college_name || "-"}
                </strong>
              </div>

              <div>
                <span>CAREER TRACK</span>
                <strong>
                  {application.career_track}
                </strong>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>
                  {application.email}
                </strong>
              </div>

              <div>
                <span>APPLIED ON</span>
                <strong>
                  {application.created_at}
                </strong>
              </div>

            </div>


            {/* STATUS TIMELINE */}

            <div className="status-timeline">

              <div className="timeline-line"></div>


              <div
                className={
                  currentStep >= 1
                    ? "timeline-item active"
                    : "timeline-item"
                }
              >

                <div className="timeline-dot">
                  {currentStep >= 1 ? "✓" : "1"}
                </div>

                <div>
                  <strong>
                    Application Submitted
                  </strong>

                  <small>
                    Your application has been received.
                  </small>
                </div>

              </div>


              <div
                className={
                  currentStep >= 2
                    ? "timeline-item active"
                    : "timeline-item"
                }
              >

                <div className="timeline-dot">
                  {currentStep >= 2 ? "✓" : "2"}
                </div>

                <div>
                  <strong>
                    Under Review
                  </strong>

                  <small>
                    Our team is reviewing your application.
                  </small>
                </div>

              </div>


              <div
                className={
                  currentStep >= 3
                    ? "timeline-item active"
                    : "timeline-item"
                }
              >

                <div className="timeline-dot">
                  {currentStep >= 3 ? "✓" : "3"}
                </div>

                <div>
                  <strong>
                    Shortlisted
                  </strong>

                  <small>
                    Your profile has been shortlisted.
                  </small>

                </div>

              </div>


              <div
                className={
                  currentStep >= 4
                    ? "timeline-item active"
                    : "timeline-item"
                }
              >

                <div className="timeline-dot">
                  {currentStep >= 4 ? "✓" : "4"}
                </div>

                <div>

                  <strong>
                    Interview
                  </strong>

                  <small>
                    Interview stage of the selection process.
                  </small>

                </div>

              </div>


              <div
                className={
                  currentStep >= 5
                    ? "timeline-item active"
                    : "timeline-item"
                }
              >

                <div className="timeline-dot">
                  {currentStep >= 5 ? "✓" : "5"}
                </div>

                <div>

                  <strong>
                    Selected
                  </strong>

                  <small>
                    Final selection completed.
                  </small>

                </div>

              </div>

            </div>

          </section>

        )}

      </section>

    </main>

  );
}

export default ApplicationStatus;