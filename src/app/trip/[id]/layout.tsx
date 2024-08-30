import SideMenu from "./SideMenu";
import * as styles from "./layout.css";

interface TripLayoutProps {
  children: React.ReactNode;
  tabs: React.ReactNode;
  params: { id: string };
}

export default function TripLayout({
  children,
  tabs,
  params,
}: TripLayoutProps) {
  const { id } = params;

  return (
    <>
      {children}
      <div className={styles.container}>
        <SideMenu className={styles.sideNav} tripId={id} />
        <main className={styles.tabsContainer}>{tabs}</main>
      </div>
    </>
  );
}
