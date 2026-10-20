import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost/karka-api/admin_login.php",
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
        localStorage.setItem(
          "karkaAdmin",
          JSON.stringify(data.admin)
        );

        navigate("/admin");
      } else {
        setError(
          data.message ||
          "Invalid username or password"
        );
      }

    } catch (err) {

      setError(
        "Unable to connect to server."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">

      <div className="admin-login-card">

        {/* Logo */}

        <div className="admin-login-logo">
          KARKA<span>AI</span>
        </div>


        {/* Heading */}

        <div className="admin-login-heading">

          <span>
            ADMIN ACCESS
          </span>

          <h1>
            Welcome
            <strong> Back.</strong>
          </h1>

          <p>
            Login to manage Karka Academy
            applications.
          </p>

        </div>


        {/* Form */}

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >

          {/* Username */}

          <div className="form-group">

            <label>
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              autoComplete="username"
              required
            />

          </div>


          {/* Password */}

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />

          </div>


          {/* Error */}

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}


          {/* Submit */}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Login to Dashboard →"}
          </button>

        </form>


        {/* Back */}

        <button
          type="button"
          className="admin-back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Karka Academy
        </button>

      </div>

    </main>
  );
}

export default AdminLogin;