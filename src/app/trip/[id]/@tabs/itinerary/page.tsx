import { getTrip } from "@/app/database/trips";
import { differenceInDays, eachDayOfInterval, interval, parse } from "date-fns";
import type { ItineraryItem } from "./DayTable";
import DayTable from "./DayTable";
import styles from "./page.css";

const FAKE_ITINERARY: ItineraryItem[][] = [
  [
    {
      start: parse("2024-01-01 12:54", "yyyy-MM-dd HH:mm", new Date()),
      end: parse("2024-01-01 15:12", "yyyy-MM-dd HH:mm", new Date()),
      location: "France",
      name: "Boop",
      notes: "",
    },
  ],
  [],
];

interface ItineraryPageProps {
  params: { id: string };
}

export default async function ItineraryPage({
  params: { id: tripId },
}: ItineraryPageProps) {
  const trip = await getTrip(tripId);
  const tripInterval = interval(
    trip?.startDate ?? new Date(),
    trip?.endDate ?? new Date()
  );
  const numberOfDays =
    differenceInDays(tripInterval.end, tripInterval.start) + 1;

  return (
    <div className={styles.tableContainer}>
      {eachDayOfInterval(tripInterval).map((date, i) => (
        <DayTable
          key={date.getTime()}
          date={date}
          items={FAKE_ITINERARY[i]}
          dayNumber={i + 1}
          numberOfDays={numberOfDays}
        />
      ))}
    </div>
  );
}
