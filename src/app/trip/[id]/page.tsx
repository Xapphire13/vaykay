import { getTrip } from "@/app/database/trips";
import DeleteTripButton from "./DeleteTripButton";
import styles from "./page.css";

interface TripPageProps {
  params: { id: string };
}

export default async function TripPage({ params: { id } }: TripPageProps) {
  const trip = await getTrip(id);

  return (
    <div className={styles.container}>
      <h1>{trip?.name}</h1>
      <DeleteTripButton tripId={id} />
    </div>
  );
}
