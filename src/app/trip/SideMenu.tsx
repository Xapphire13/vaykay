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

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <SideMenuChoice
        icon={<Hospital className={styles.icon} />}
        iconText="Emergency Numbers"
      />
      <SideMenuChoice
        icon={<AirplaneEngines className={styles.icon} />}
        iconText="Flights"
      />
      <SideMenuChoice
        icon={<House className={styles.icon} />}
        iconText="Accommodation"
      />
      <SideMenuChoice
        icon={<BusFront className={styles.icon} />}
        iconText="Transportation"
      />
      <SideMenuChoice
        icon={<Passport className={styles.icon} />}
        iconText="Important Docs"
      />
      <SideMenuChoice
        icon={<TicketPerforated className={styles.icon} />}
        iconText="Booked Activities"
      />
      <SideMenuChoice
        icon={<CupStraw className={styles.icon} />}
        iconText="Dining"
      />
      <SideMenuChoice
        icon={<Cash className={styles.icon} />}
        iconText="Cost Breakdown"
      />
      <SideMenuChoice
        icon={<SuitcaseLg className={styles.icon} />}
        iconText="Packing Checklist"
      />
      <SideMenuChoice
        icon={<FileEarmarkCheckFill className={styles.icon} />}
        iconText="Itinerary"
      />
      <SideMenuChoice
        icon={<Map className={styles.icon} />}
        iconText="Map View"
      />
    </div>
  );
}
