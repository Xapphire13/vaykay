import React from "react";
import * as styles from "./SideMenu.css";

import { Hospital } from "react-bootstrap-icons";
import { AirplaneEngines } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { BusFrontFill } from "react-bootstrap-icons";
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
      <hr></hr>
      <button className={styles.icon}>
        <AirplaneEngines></AirplaneEngines>
      </button>
      <hr></hr>
      <button>
        <House className={styles.icon}></House>
      </button>
      <hr></hr>
      <button>
        <BusFrontFill className={styles.icon}></BusFrontFill>
      </button>
      <hr></hr>
      <button>
        <Passport className={styles.icon}></Passport>
      </button>
      <hr></hr>
      <button>
        <TicketPerforated className={styles.icon}></TicketPerforated>
      </button>
      <hr></hr>
      <button>
        <CupStraw className={styles.icon}></CupStraw>
      </button>
      <hr></hr>
      <button>
        <Cash className={styles.icon}></Cash>
      </button>
      <hr></hr>
      <button>
        <SuitcaseLg className={styles.icon}></SuitcaseLg>
      </button>
      <hr></hr>
      <button>
        <FileEarmarkCheckFill className={styles.icon}></FileEarmarkCheckFill>
      </button>
      <hr></hr>
      <button>
        <Map className={styles.icon}></Map>
      </button>
    </div>
  );
}
