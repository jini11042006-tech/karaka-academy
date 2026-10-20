import React, { useEffect, useState } from "react";

function Admin() {

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  const fetchApplications = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost/karka-api/get_applications.php"
      );

      const data = await response.json();

      if (data.success) {

        setApplications(
          data.applications
        );

      } else {

        setError(data.message);

      }

    } catch (error) {

      setError(
        "Unable to connect to server."
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {
    fetchApplications();
  }, []);


  const updateStatus = async (
    id,
    status
  ) => {

    try {

      const response = await fetch(
        "http://localhost/karka-api/update_status.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            id,
            status
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {
        fetchApplications();
      }

    } catch (error) {

      alert(
        "Unable to update status."
      );

    }

  };


  const deleteApplication = async (id) => {

    if (
      !window.confirm(
        "Delete this application?"
      )
    ) {
      return;
    }

    try {

      const response = await fetch(
        "http://localhost/karka-api/delete_application.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            id
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {
        fetchApplications();
      }

    } catch (error) {

      alert(
        "Unable to delete application."
      );

    }

  };


  return (
    <main className="admin-page">

      <div className="admin-header">

        <div>

          <span>
            KARKA ADMIN
          </span>

          <h1>
            Applications
            <strong> Dashboard.</strong>
          </h1>

          <p>
            Manage student applications.
          </p>

        </div>


        <button
          onClick={fetchApplications}
        >
          ↻ Refresh
        </button>

      </div>


      <div className="admin-stats">

        <div>
          <span>
            TOTAL APPLICATIONS
          </span>

          <strong>
            {applications.length}
          </strong>
        </div>

        <div>
          <span>
            NEW APPLICATIONS
          </span>

          <strong>
            {
              applications.filter(
                app =>
                  app.status === "New"
              ).length
            }
          </strong>
        </div>

        <div>
          <span>
            CAREER TRACKS
          </span>

          <strong>
            {
              new Set(
                applications.map(
                  app =>
                    app.career_track
                )
              ).size
            }
          </strong>
        </div>

      </div>


      <div className="admin-table-section">

        {loading && (
          <div className="admin-message">
            Loading applications...
          </div>
        )}


        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}


        {!loading &&
          !error &&
          applications.length === 0 && (

            <div className="admin-message">
              No applications found.
            </div>

          )}


        {!loading &&
          !error &&
          applications.length > 0 && (

            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Career</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>College</th>
                  </tr>

                </thead>


                <tbody>

                  {applications.map(
                    (app) => (

                      <tr key={app.id}>

                        <td>
                          #{app.id}
                        </td>

                        <td>
                          {app.name}
                        </td>

                        <td>
                          {app.phone}
                        </td>

                        <td>
                          {app.email}
                        </td>

                        <td>
                          {app.career_track}
                        </td>
                        <td>
  {applications.college_name}
</td>

                        <td>

                          <select
                            value={app.status}
                            onChange={(e) =>
                              updateStatus(
                                app.id,
                                e.target.value
                              )
                            }
                          >

                            <option>
                              New
                            </option>

                            <option>
                              Contacted
                            </option>

                            <option>
                              Completed
                            </option>

                          </select>

                        </td>

                        <td>

                          <button
                            className="delete-button"
                            onClick={() =>
                              deleteApplication(
                                app.id
                              )
                            }
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

      </div>

    </main>
  );
}

export default Admin;