-- UP

CREATE TABLE trips (
    trip_id char(6) PRIMARY KEY,
    name varchar(255),
    location varchar(255),
    start_date date,
    end_date date
);

-- DOWN