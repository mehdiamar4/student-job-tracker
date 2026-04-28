const BASE_URL = "http://localhost:5050";

export async function getJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  return await response.json();
}

export async function createJob(jobData) {
  const response = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  return await response.json();
}

export async function removeJob(jobId) {
  const response = await fetch(`${BASE_URL}/jobs/${jobId}`, {
    method: "DELETE",
  });

  return await response.json();
}