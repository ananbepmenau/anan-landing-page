import styles from "./TestimonialsSection.module.css";
import { TESTIMONIALS } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section id="khach-hang" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Khách hàng nói gì?</span>
          <h2 className="sectionTitle">Niềm Vui Từ Sự An Tâm</h2>
          <div className={`divider ${styles.divider}`} />
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.quoteMark}>&ldquo;</div>
              <div className={styles.stars}>
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div>
                <strong className={styles.name}>{t.name}</strong>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
