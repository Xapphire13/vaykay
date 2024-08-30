import styles from "./TripCard.css";
import { ArrowRight } from "react-bootstrap-icons";
import { format } from "date-fns/format";
import Link from "next/link";
import { isEqual } from "date-fns";
import type { Trip } from "./database/trips";
import { countries } from "countries-list";
import { Card, CardBody } from "@nextui-org/card";

export interface TripCardProps {
  image: string;
  trip: Trip;
}

export default function TripCard({ image, trip }: TripCardProps) {
  const { name, startDate, endDate } = trip;

  return (
    <Card isPressable shadow="none" className={styles.container}>
      <CardBody className={styles.body}>
        <Link tabIndex={0} href={`/trip/${trip.id}`}>
          <img src={image} className={styles.cardImg} alt="Trip image" />
          <div className={styles.details}>
            {trip.countryCodes && (
              <div>
                Location:{" "}
                {trip.countryCodes
                  ?.map((countryCode) => countries[countryCode].name)
                  .join(", ")}
              </div>
            )}
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
      </CardBody>
    </Card>
  );
}
