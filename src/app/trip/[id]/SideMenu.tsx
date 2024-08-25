import React from "react";
import * as styles from "./SideMenu.css";

import { Hospital } from "react-bootstrap-icons";
import { AirplaneEngines } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { BusFront } from "react-bootstrap-icons";
import { Passport } from "react-bootstrap-icons";
import { TicketPerforated } from "react-bootstrap-icons";
import { CupStraw } from "react-bootstrap-icons";
import { Cash } from "react-bootstrap-icons";
import { SuitcaseLg } from "react-bootstrap-icons";
import { FileEarmarkCheckFill } from "react-bootstrap-icons";
import { Map } from "react-bootstrap-icons";
import SideMenuChoice from "./SideMenuChoice";
import clsx from "clsx";

interface SideMenuProps {
  tripId: string;
  className?: string;
}

export default function SideMenu({ tripId, className }: SideMenuProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <SideMenuChoice
        icon={<Hospital className={styles.icon} size={40} />}
        iconText="Emergency Numbers"
        href={`/trip/${tripId}/numbers`}
      />
      <SideMenuChoice
        icon={<AirplaneEngines className={styles.icon} size={40} />}
        iconText="Flights"
        href={`/trip/${tripId}/flights`}
      />
      <SideMenuChoice
        icon={<House className={styles.icon} size={40} />}
        iconText="Accommodation"
        href={`/trip/${tripId}/accommodation`}
      />
      <SideMenuChoice
        icon={<BusFront className={styles.icon} size={40} />}
        iconText="Transportation"
        href={`/trip/${tripId}/transport`}
      />
      <SideMenuChoice
        icon={<Passport className={styles.icon} size={40} />}
        iconText="Important Docs"
        href={`/trip/${tripId}/docs`}
      />
      <SideMenuChoice
        icon={<TicketPerforated className={styles.icon} size={40} />}
        iconText="Booked Activities"
        href={`/trip/${tripId}/activities`}
      />
      <SideMenuChoice
        icon={<CupStraw className={styles.icon} size={40} />}
        iconText="Dining"
        href={`/trip/${tripId}/dining`}
      />
      <SideMenuChoice
        icon={<Cash className={styles.icon} size={40} />}
        iconText="Cost Breakdown"
        href={`/trip/${tripId}/cost`}
      />
      <SideMenuChoice
        icon={<SuitcaseLg className={styles.icon} size={40} />}
        iconText="Packing Checklist"
        href={`/trip/${tripId}/packing`}
      />
      <SideMenuChoice
        icon={<FileEarmarkCheckFill className={styles.icon} size={40} />}
        iconText="Itinerary"
        href={`/trip/${tripId}/itinerary`}
      />
      <SideMenuChoice
        icon={<Map className={styles.icon} size={40} />}
        iconText="Map View"
        href={`/trip/${tripId}/map`}
      />
    </div>
  );
}
