const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Backend and PostgreSQL are running",
      time: result.rows[0],
    });
  } catch (error) {
    console.error("Root route DB error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/jobs", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        company,
        position,
        location,
        status,
        TO_CHAR(date_applied, 'YYYY-MM-DD') AS date_applied
      FROM public.jobs
      ORDER BY id DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("GET /jobs error:", error);
    res.status(500).json({
      error: "Failed to fetch jobs",
      details: error.message,
    });
  }
});

app.post("/jobs", async (req, res) => {
  try {
    const { company, position, location, status, dateApplied } = req.body;

    const result = await pool.query(
      `INSERT INTO public.jobs (company, position, location, status, date_applied)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING 
         id,
         company,
         position,
         location,
         status,
         TO_CHAR(date_applied, 'YYYY-MM-DD') AS date_applied`,
      [company, position, location, status, dateApplied]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("POST /jobs error:", error);
    res.status(500).json({
      error: "Failed to create job",
      details: error.message,
    });
  }
});

app.delete("/jobs/:id", async (req, res) => {
  try {
    const jobId = Number(req.params.id);

    const result = await pool.query(
      "DELETE FROM public.jobs WHERE id = $1 RETURNING *",
      [jobId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({
      message: "Job deleted successfully",
      deletedJob: result.rows[0],
    });
  } catch (error) {
    console.error("DELETE /jobs/:id error:", error);
    res.status(500).json({
      error: "Failed to delete job",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});