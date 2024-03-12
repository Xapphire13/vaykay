"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./TripCard.module.css";

export default function TripCard() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/trip");
  };

  return (
    <button tabIndex={0} className={styles.container} onClick={handleClick}>
      I&apos;m a trip card!
    </button>
  );
}
