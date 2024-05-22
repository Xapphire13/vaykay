"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as styles from "./TripCard.css";
import { ArrowRight } from "react-bootstrap-icons";

export interface TripCardProps {
  image: string;
  location: string;
  travelers: string;
  startDate: Date;
  endDate: Date;
  title: string;
}

export default function TripCard({
  image,
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
      <img src={image} className={styles.cardImg} />
      <div className={styles.details}>
        <div>{location}</div>
        <div>{travelers}</div>
        <div className={styles.date}>
          <div>{startDate.toISOString()}</div>
          <ArrowRight />
          <div>{endDate.toISOString()}</div>
        </div>
      </div>
      <div className={styles.title}>
        <div>{title}</div>
      </div>
    </button>
  );
}
