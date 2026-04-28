# Student Job Tracker

A full-stack web application for tracking job applications.  
Built as a student project to practice frontend, backend, and database development with React, Node.js, Express, and PostgreSQL.

## Features

- Add a new job application
- View all saved applications
- Delete applications
- Filter applications by status
- Colored status badges
- Loading, error, and empty states
- Persistent data storage with PostgreSQL

## Tech Stack

### Frontend

- React
- JavaScript
- CSS

### Backend

- Node.js
- Express

### Database

- PostgreSQL

## Project Structure

```txt
student-job-tracker/
├── student-job-tracker-frontend/
├── student-job-tracker-backend/
├── README.md
└── .gitignore
```

## How to Run Locally

### 1. Start the backend

```bash
cd student-job-tracker-backend
npm install
npm run dev
```

The backend runs on: `http://localhost:5050`

### 2. Start the frontend

```bash
cd student-job-tracker-frontend
npm install
npm run dev
```

The frontend runs on: `http://localhost:5173`

### 3. PostgreSQL setup

Create a PostgreSQL database named: `student_job_tracker`

Then create the jobs table with this SQL query:

```sql
CREATE TABLE jobs (
    id BIGSERIAL PRIMARY KEY,
    company VARCHAR(100) NOT NULL,
    position VARCHAR(150) NOT NULL,
    location VARCHAR(100),
    status VARCHAR(30) NOT NULL,
    date_applied DATE
);
```

## API Routes

**GET** `/jobs`  
Returns all saved job applications.

**POST** `/jobs`  
Creates a new job application.

**DELETE** `/jobs/:id`  
Deletes a job application by id.

## What I Learned

Through this project, I practiced:

- Building reusable React components
- Managing state with `useState` and `useEffect`
- Creating API routes with Express
- Connecting Node.js to PostgreSQL
- Writing SQL queries for real CRUD operations
- Separating frontend UI logic from API communication
- Handling loading, error, and empty states
- Structuring a small full-stack project more clearly

## Future Improvements

- Edit existing job applications
- Search by company or position
- Authentication for personal accounts
- Better UI design
- Deployment

## Author

Ahmed Mehdi Amar
