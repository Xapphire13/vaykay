import TravelerEmergencyContactTable, {
  TravelerEmerContact,
} from "@/app/trip/emergency/TravelerEmergencyContactTable";

const travelerList: TravelerEmerContact[] = [
  {
    travelerName: "Lisa Frank",
    emergencyContactName: "Veronica Rosemary De La Fromage",
    eCPhoneNumber: "+1-555-555-5555",
  },
];

export default function NumbersPage() {
  return <TravelerEmergencyContactTable travelers={travelerList} />;
}
