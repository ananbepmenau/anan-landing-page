import styles from "./TopBar.module.css";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/site";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.item}>
        <span className={styles.dot} /> Lò đang nướng mẻ chiều nay
      </span>
      <span className={styles.item}>
        <i className="bx bx-time-five" /> Chốt đơn giao 15:00–19:00 trước{" "}
        <strong>11:00</strong> sáng nay
      </span>
      <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneLink}>
        <i className="bx bxs-phone-call" /> Zalo/SĐT {PHONE_DISPLAY}
      </a>
    </div>
  );
}
