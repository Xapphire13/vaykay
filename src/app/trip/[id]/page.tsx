"use client";
import PrimaryButton from "@/app/shared/PrimaryButton";
import { deleteTrip } from "./deleteTrip";
import { useParams, useRouter } from "next/navigation";

export default function TripPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const handleDeleteTrip = async () => {
    await deleteTrip(id);
    router.replace("/");
  };

  return (
    <div>
      <PrimaryButton onPress={handleDeleteTrip}>Delete trip</PrimaryButton>
    </div>
  );
}
