CREATE TABLE IF NOT EXISTS jobs (
    id BIGSERIAL PRIMARY KEY,
    company VARCHAR(100) NOT NULL,
    position VARCHAR(150) NOT NULL,
    location VARCHAR(100),
    status VARCHAR(30) NOT NULL,
    date_applied DATE
);
