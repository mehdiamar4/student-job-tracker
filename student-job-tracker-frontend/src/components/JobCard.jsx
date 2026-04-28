function JobCard({ job, onDeleteJob }) {
  function getStatusClass(status) {
    if (status === "Saved") return "status-saved";
    if (status === "Applied") return "status-applied";
    if (status === "Interview") return "status-interview";
    if (status === "Rejected") return "status-rejected";
    if (status === "Offer") return "status-offer";

    return "";
  }

  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p><strong>Position:</strong> {job.position}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={`status-badge ${getStatusClass(job.status)}`}>
          {job.status}
        </span>
      </p>
      <p><strong>Date Applied:</strong> {job.date_applied}</p>

      <button onClick={() => onDeleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobCard;