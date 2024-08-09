CREATE TABLE Trips (
    trip_id char(6) PRIMARY KEY,
    name varchar(255),
    location varchar(255),
    start_date date,
    end_date date
);

-- TEST DATA
INSERT INTO Trips
VALUES ('keWA3g', 'Trip 1', 'England, Scotland', '2024-01-01', '2024-01-10');

INSERT INTO Trips
VALUES ('XY3x27', 'Trip 2', 'Tasmania', '2024-01-01', '2024-01-10');
