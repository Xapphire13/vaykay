import React from "react";
import * as styles from "./TravelerEmerContact.css";

export default function TravelerEmerContact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2>EmergencyContacts</h2>
          <button className={styles.addTraveler}>PH</button>
        </div>
        <table>
          <tr>
            <th>Travelers Name</th>
            <th>Contacts Name</th>
            <th>Contacts Number</th>
          </tr>
          <tr>
            <td>Lisa Frank</td>
            <td>Veronica Rosemary De La Fromage</td>
            <td>+1-555-555-5555</td>
          </tr>
          <tr>
            <td>Franklin Tim Vonmannin</td>
            <td>Greg</td>
            <td>+64-000-555-9999</td>
          </tr>
        </table>
      </div>
    </>
  );
}
