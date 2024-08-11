import * as styles from "./TripCard.css";
import { ArrowRight } from "react-bootstrap-icons";
import { format } from "date-fns/format";
import Link from "next/link";
import { isEqual } from "date-fns";
import type { Trip } from "./database/trips";

export interface TripCardProps {
  image: string;
  trip: Trip;
}

export default function TripCard({ image, trip }: TripCardProps) {
  const { location, name, startDate, endDate } = trip;

  return (
    <Link tabIndex={0} className={styles.container} href={`/trip/${trip.id}`}>
      <img src={image} className={styles.cardImg} alt="Trip image" />
      <div className={styles.details}>
        <div>{location}</div>
        <div>Bingo and Bluey</div>
        {startDate && (
          <div className={styles.date}>
            <div>{format(startDate, "PP")}</div>
            {endDate && !isEqual(endDate, startDate) && (
              <>
                <ArrowRight />
                <div>{format(endDate, "PP")}</div>
              </>
            )}
          </div>
        )}
      </div>
      <div className={styles.title}>
        <div>{name}</div>
      </div>
    </Link>
  );
}
