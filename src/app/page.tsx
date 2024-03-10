import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Vaykay</h1>

      <p>
        Here&apos;s a{" "}
        <Link className={styles.link} href="/trip">
          link to the trip page
        </Link>
      </p>
    </main>
  );
}
