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

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.indvContainer}>
        <button>
          <Hospital className={styles.icon} />
        </button>
        <div className={styles.description}>Emergency Numbers</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <AirplaneEngines className={styles.icon} />
        </button>
        <div className={styles.description}>Flights</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <House className={styles.icon} />
        </button>
        <div className={styles.description}>Accommodation</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <BusFront className={styles.icon} />
        </button>
        <div className={styles.description}>Transportation</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <Passport className={styles.icon} />
        </button>
        <div className={styles.description}>Important Docs</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <TicketPerforated className={styles.icon} />
        </button>
        <div className={styles.description}>Booked Activities</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <CupStraw className={styles.icon} />
        </button>
        <div className={styles.description}>Dining</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <Cash className={styles.icon} />
        </button>
        <div className={styles.description}>Cost Breakdown</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <SuitcaseLg className={styles.icon} />
        </button>
        <div className={styles.description}>Packing Checklist</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <FileEarmarkCheckFill className={styles.icon} />
        </button>
        <div className={styles.description}>Itinerary</div>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.indvContainer}>
        <button>
          <Map className={styles.icon} />
        </button>
        <div className={styles.description}>Map View</div>
      </div>
    </div>
  );
}
