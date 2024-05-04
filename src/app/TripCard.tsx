"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as styles from "./TripCard.css";
import { ArrowRight } from "react-bootstrap-icons";

export interface TripCardProps {
  location: string;
  travelers: string;
  startDate: string;
  endDate: string;
  title: string;
}

export default function TripCard({
  location,
  travelers,
  startDate,
  endDate,
  title,
}: TripCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/trip");
  };

  return (
    <button tabIndex={0} className={styles.container} onClick={handleClick}>
      <div>
        <div>
          <h2>{location}</h2>
          <h2>{travelers}</h2>
          <div className={styles.date}>
            <h3>{endDate}</h3>
            <div className={styles.dateArrow}>
              <ArrowRight />
            </div>
            <h3>{startDate}</h3>
          </div>
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </div>
    </button>
  );
}
