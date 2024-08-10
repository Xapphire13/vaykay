"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as styles from "./TripCard.css";
import { ArrowRight } from "react-bootstrap-icons";
import { Trip } from "./hooks/useGetTrips";
import { format } from "date-fns/format";

export interface TripCardProps {
  image: string;
  trip: Trip;
}

export default function TripCard({ image, trip }: TripCardProps) {
  const { location, name, startDate, endDate } = trip;
  const router = useRouter();

  const handleClick = () => {
    router.push("/trip");
  };

  return (
    <button tabIndex={0} className={styles.container} onClick={handleClick}>
      <img src={image} className={styles.cardImg} />
      <div className={styles.details}>
        <div>{location}</div>
        <div>Bingo and Bluey</div>
        <div className={styles.date}>
          <div>{format(startDate, "PP")}</div>
          <ArrowRight />
          <div>{format(endDate, "PP")}</div>
        </div>
      </div>
      <div className={styles.title}>
        <div>{name}</div>
      </div>
    </button>
  );
}
