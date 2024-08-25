import React from "react";
import * as styles from "./TravelerEmergencyContactTable.css";
import { PlusLg } from "react-bootstrap-icons";

export interface TravelerEmerContact {
  travelerName: string;
  emergencyContactName: string;
  eCPhoneNumber: string;
}

interface TravelerEmergencyContactTableProps {
  travelers: TravelerEmerContact[];
}

export default function TravelerEmergencyContactTable({
  travelers,
}: TravelerEmergencyContactTableProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2>Emergency Contacts</h2>
          <button className={styles.addTraveler}>
            <PlusLg className={styles.plusSign} />
          </button>
        </div>
        <table>
          <tr className={styles.tableHead}>
            <th>Travelers Name</th>
            <th>Contacts Name</th>
            <th>Contacts Number</th>
          </tr>
          {travelers.map((item) => (
            <tr key={item.travelerName} className={styles.tableRow}>
              <td>{item.travelerName}</td>
              <td>{item.emergencyContactName}</td>
              <td>{item.eCPhoneNumber}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
