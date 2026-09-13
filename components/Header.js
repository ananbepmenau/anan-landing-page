import Image from "next/image";
import styles from "./Header.module.css";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand}>
          <Image
            src="/images/logo_v2.png"
            alt="AnAn - Bếp Mẹ Nấu"
            width={52}
            height={52}
            className={styles.logo}
          />
          <span className={styles.brandText}>
            <strong className={styles.brandName}>AnAn - Bếp Mẹ Nấu</strong>
            <span className={styles.brandTagline}>
              Bánh bò thốt nốt nướng thủ công
            </span>
          </span>
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={i === 0 ? styles.linkActive : styles.link}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#menu"
          className={`btn btnPrimary ${styles.cta}`}
        >
          <i className="bx bx-cookie" /> Đặt bánh ngay
        </a>
      </div>
    </nav>
  );
}
