-- UP

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    trip_id CHAR(6) REFERENCES trips(trip_id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    location_code VARCHAR(5) NOT NULL,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    visit_time TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_trip_id ON locations(trip_id);

ALTER TABLE trips
ALTER COLUMN name TYPE text;

-- DOWN
DROP TABLE IF EXISTS locations;

ALTER TABLE trips
ALTER COLUMN name TYPE varchar(255);