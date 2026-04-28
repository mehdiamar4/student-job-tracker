import JobCard from "./JobCard";

function JobList({ jobs, onDeleteJob, totalJobsCount, selectedStatus }) {
  if (jobs.length === 0) {
    if (totalJobsCount === 0) {
      return <p className="empty-message">No job applications added yet.</p>;
    }

    return (
      <p className="empty-message">
        No applications found for the selected status: <strong>{selectedStatus}</strong>.
      </p>
    );
  }

  return (
    <div>
      <h2>Your Applications</h2>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDeleteJob={onDeleteJob} />
      ))}
    </div>
  );
}

export default JobList;