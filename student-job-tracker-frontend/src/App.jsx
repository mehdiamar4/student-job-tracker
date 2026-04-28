import { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import { getJobs, createJob, removeJob } from "./services/api";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchJobs() {
    try {
      setLoading(true);
      setError("");

      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setError("Could not load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  async function addJob(newJob) {
    try {
      setError("");
      const createdJob = await createJob(newJob);
      setJobs((prevJobs) => [createdJob, ...prevJobs]);
    } catch (error) {
      console.error("Failed to create job:", error);
      setError("Could not create the job.");
    }
  }

  async function deleteJob(jobId) {
    try {
      setError("");
      await removeJob(jobId);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
    } catch (error) {
      console.error("Failed to delete job:", error);
      setError("Could not delete the job.");
    }
  }

  const filteredJobs =
    selectedStatus === "All"
      ? jobs
      : jobs.filter((job) => job.status === selectedStatus);

  return (
    <div className="app-container">
      <h1>Student Job Tracker</h1>
      <p className="subtitle">Track your applications in one place.</p>

      <JobForm onAddJob={addJob} />
      <FilterBar
        selectedStatus={selectedStatus}
        onFilterChange={setSelectedStatus}
      />

      {loading && <p className="info-message">Loading jobs...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <JobList
            jobs={filteredJobs}
            onDeleteJob={deleteJob}
            totalJobsCount={jobs.length}
            selectedStatus={selectedStatus}
          />
      )}
    </div>
  );
}

export default App;