import SideMenu from "./SideMenu";
import * as styles from "./layout.css";

interface TripLayoutProps {
  tabs: React.ReactNode;
}

export default function TripLayout({ tabs }: TripLayoutProps) {
  return (
    <div className={styles.container}>
      <SideMenu />
      <div>{tabs}</div>
    </div>
  );
}
