import React from "react";
import TripCard from "./TripCard";
import * as styles from "./TripGrid.css";

const NUMBER_OF_TRIPS = 3;

export default function TripGrid() {
  return (
    <div className={styles.container}>
      {new Array(NUMBER_OF_TRIPS).fill(null).map((_, i) => (
        <TripCard key={i} />
      ))}
    </div>
  );
}
