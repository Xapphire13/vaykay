"use client";

import { deleteTrip } from "@/app/database/trips";
import IconButton from "@/app/shared/IconButton";
import { useRouter } from "next/navigation";
import { Trash } from "react-bootstrap-icons";

interface DeleteTripButtonProps {
  tripId: string;
}

export default function DeleteTripButton({ tripId }: DeleteTripButtonProps) {
  const router = useRouter();

  const handleDeleteTrip = async () => {
    await deleteTrip(tripId);
    router.replace("/");
  };

  return (
    <IconButton label="Delete trip" onPress={handleDeleteTrip}>
      <Trash size={16} />
    </IconButton>
  );
}
