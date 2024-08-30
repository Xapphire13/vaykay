"use client";

import { format, formatDuration, intervalToDuration } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import PrimaryButton from "@/app/shared/PrimaryButton";
import { ArrowRight, PlusLg } from "react-bootstrap-icons";
import styles from "./DayTable.css";
import { Tooltip } from "@nextui-org/tooltip";

export interface ItineraryItem {
  start: Date;
  end: Date;
  location: string;
  name: string;
  notes: string;
}

interface DayTableProps {
  dayNumber: number;
  numberOfDays: number;
  date: Date;
  items: ItineraryItem[];
}

export default function DayTable({
  date,
  items,
  dayNumber,
  numberOfDays,
}: DayTableProps) {
  return (
    <Table
      topContent={
        <div className={styles.topContent}>
          Day {dayNumber} of {numberOfDays} － {format(date, "PPPP")}
          <PrimaryButton endContent={<PlusLg />}>Add</PrimaryButton>
        </div>
      }
    >
      <TableHeader>
        <TableColumn width={110}>Time</TableColumn>
        <TableColumn width={150}>Location</TableColumn>
        <TableColumn width={300}>Name</TableColumn>
        <TableColumn>Notes</TableColumn>
      </TableHeader>
      <TableBody emptyContent="Nothing planned yet" items={items}>
        {(item) => (
          <TableRow key={item.name}>
            <TableCell>
              <Tooltip
                content={formatDuration(
                  intervalToDuration({ start: item.start, end: item.end })
                )}
              >
                <div className={styles.durationTimes}>
                  {format(item.start, "HH:mm")}
                  <ArrowRight />
                  {format(item.end, "HH:mm")}
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.notes}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
