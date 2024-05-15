import React from "react";
import TripCard, { TripCardProps } from "./TripCard";
import * as styles from "./TripGrid.css";

const MOCK_TRIPS: TripCardProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1583586189949-d9b71613b468?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tasmania",
    travelers: "Emma, Johnny, Alex, Winter",
    startDate: "August-24-2050",
    endDate: "September-15-2050",
    title: "Tazzy Time",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590407499953-967e2aa7dbe5?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          image={trip.image}
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
