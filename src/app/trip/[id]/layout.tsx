import SideMenu from "./SideMenu";
import * as styles from "./layout.css";

interface TripLayoutProps {
  tabs: React.ReactNode;
  params: { id: string };
}

export default function TripLayout({ tabs, params }: TripLayoutProps) {
  const { id } = params;

  return (
    <div className={styles.container}>
      <SideMenu className={styles.sideNav} tripId={id} />
      <div className={styles.tabsContainer}>{tabs}</div>
    </div>
  );
}
