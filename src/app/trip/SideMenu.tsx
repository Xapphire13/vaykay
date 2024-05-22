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
      <button>
        <Hospital className={styles.icon}></Hospital>
      </button>
      <hr className={styles.line}></hr>
      <button className={styles.icon}>
        <AirplaneEngines></AirplaneEngines>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <House className={styles.icon}></House>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <BusFront className={styles.icon}></BusFront>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <Passport className={styles.icon}></Passport>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <TicketPerforated className={styles.icon}></TicketPerforated>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <CupStraw className={styles.icon}></CupStraw>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <Cash className={styles.icon}></Cash>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <SuitcaseLg className={styles.icon}></SuitcaseLg>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <FileEarmarkCheckFill className={styles.icon}></FileEarmarkCheckFill>
      </button>
      <hr className={styles.line}></hr>
      <button>
        <Map className={styles.icon}></Map>
      </button>
    </div>
  );
}
