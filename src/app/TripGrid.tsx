import React from "react";
import TripCard from "./TripCard";
import * as styles from "./TripGrid.css";
import { fetchTrips } from "./database/trips";

export default async function TripGrid() {
  const trips = await fetchTrips();

  return (
    <div className={styles.container}>
      {trips.map((trip, i) => (
        <TripCard
          key={i}
          image="https://images.unsplash.com/photo-1583586189949-d9b71613b468?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          trip={trip}
        />
      ))}
    </div>
  );
}
