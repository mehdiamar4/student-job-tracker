import { useState } from "react";

function JobForm({ onAddJob }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Saved");
  const [dateApplied, setDateApplied] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newJob = {
      id: Date.now(),
      company: company,
      position: position,
      location: location,
      status: status,
      dateApplied: dateApplied,
    };

    onAddJob(newJob);

    setCompany("");
    setPosition("");
    setLocation("");
    setStatus("Saved");
    setDateApplied("");
  }

  return (
    <div className="job-form-container">
      <h2>Add a Job Application</h2>

      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>Saved</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date Applied</label>
          <input
            type="date"
            value={dateApplied}
            onChange={(event) => setDateApplied(event.target.value)}
          />
        </div>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default JobForm;