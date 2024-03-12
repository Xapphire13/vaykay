"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function TripCard() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/trip");
  };

  return <button onClick={handleClick}>I&apos;m a trip card!</button>;
}
