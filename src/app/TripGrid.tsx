import React from "react";
import TripCard, { TripCardProps } from "./TripCard";
import * as styles from "./TripGrid.css";

const MOCK_TRIPS: TripCardProps[] = [
  {
    location: "Tasmania",
    travelers: "Emma, Johnny, Alex, Winter",
    startDate: "August-24-2050",
    endDate: "September-15-2050",
    title: "Tazzy Time",
  },
  {
    location: "France, England, Belguim",
    travelers: "solo",
    startDate: "May-8-2028",
    endDate: "May-28-2028",
    title: "Europe Solo Trip",
  },
];

export default function TripGrid() {
  return (
    <div className={styles.container}>
      {MOCK_TRIPS.map((trip, i) => (
        <TripCard
          key={i}
          location={trip.location}
          travelers={trip.travelers}
          startDate={trip.startDate}
          endDate={trip.endDate}
          title={trip.title}
        />
      ))}
    </div>
  );
}
