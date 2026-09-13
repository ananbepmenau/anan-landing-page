import Image from "next/image";
import styles from "./ComboSection.module.css";
import { NEEDS_CARDS } from "@/lib/site";

export default function ComboSection() {
  return (
    <section id="combo" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Mua theo nhu cầu</span>
          <h2 className="sectionTitle">Bếp AnAn dành cho ai?</h2>
          <div className="divider" />
        </div>
        <div className={styles.grid}>
          {NEEDS_CARDS.map((card) => (
            <div
              key={card.title}
              className={`${styles.card} ${
                card.highlight ? styles.cardHighlight : ""
              }`}
            >
              <div className={styles.mediaWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={380}
                  className={styles.media}
                />
                {card.badge && (
                  <span className={styles.mediaBadge}>{card.badge}</span>
                )}
              </div>
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <div className={styles.iconCircle}>
                    <i className={`bx ${card.icon}`} />
                  </div>
                  <h3 className={styles.title}>{card.title}</h3>
                </div>
                <p className={styles.desc}>{card.description}</p>
                <div className={styles.footer}>
                  <strong className={styles.price}>{card.priceLabel}</strong>
                  <a
                    href={card.cta.href}
                    target={card.cta.external ? "_blank" : undefined}
                    rel={card.cta.external ? "noopener noreferrer" : undefined}
                    className={styles.link}
                  >
                    {card.cta.label} <i className="bx bx-right-arrow-alt" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
