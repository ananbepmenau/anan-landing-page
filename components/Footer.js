import Image from "next/image";
import styles from "./Footer.module.css";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  ORDER_FORM_URL,
  FACEBOOK_URL,
  DELIVERY_WINDOWS,
  EXPLORE_LINKS,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer id="order" className={styles.footer}>
      <div className="container">
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>
            Bạn đã sẵn sàng nếm thử mẻ bánh tươi nhất hôm nay?
          </h2>
          <p className={styles.ctaLead}>
            Đặt trước 11:00 sáng để nhận bánh chiều cùng ngày (15:00–19:00).
          </p>
          <div className={styles.ctaRow}>
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnLg btnPrimary"
            >
              <i className="bx bx-notepad" /> Đặt Bánh Qua Google Form
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btnLg btnOutlineWhite">
              <i className="bx bxs-phone-call" /> Gọi Hotline: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <Image
                src="/images/logo_v2.png"
                alt="AnAn - Bếp Mẹ Nấu"
                width={46}
                height={46}
                className={styles.brandLogo}
              />
              <div>
                <h3 className={styles.brandName}>
                  AnAn - <span className={styles.brandAccent}>Bếp Mẹ Nấu</span>
                </h3>
                <p className={styles.brandTagline}>
                  Gói an lành trong từng vị bánh
                </p>
              </div>
            </div>
            <div className={styles.socialRow}>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className={styles.socialLink}
              >
                <i className="bx bxl-facebook-circle" />
              </a>
              <a href="#" title="Instagram" className={styles.socialLink}>
                <i className="bx bxl-instagram" />
              </a>
              <a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Đặt bánh"
                className={styles.socialLink}
              >
                <i className="bx bx-message-rounded-dots" />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <span className={styles.colLabel}>Liên hệ &amp; Đặt bánh</span>
            <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneLink}>
              <i className={`bx bxs-phone-call ${styles.iconInline}`} />{" "}
              {PHONE_DISPLAY}
            </a>
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.formLink}
            >
              <i className={`bx bx-notepad ${styles.iconInline}`} /> Đặt qua
              Google Form
            </a>
            <p className={styles.address}>
              <i className={`bx bx-map ${styles.icon}`} />
              <span>
                Số 55, Đường Lê Quyên,
                <br />
                Phường Chánh Hưng, TP.HCM
              </span>
            </p>
          </div>

          <div className={styles.col}>
            <span className={styles.colLabel}>Giờ giao bánh</span>
            {DELIVERY_WINDOWS.map((slot) => (
              <div key={slot.window} className={styles.deliveryRow}>
                <span className={styles.deliveryWindow}>{slot.window}</span>
                <span className={styles.deliveryCutoff}>{slot.cutoff}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.col} ${styles.colTight}`}>
            <span className={styles.colLabel}>Khám phá</span>
            {EXPLORE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.exploreLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 Bếp AnAn. All rights reserved. Designed with love.</p>
          <p className={styles.bottomNote}>
            <i className="bx bx-check-shield" /> Bánh nướng tươi mỗi ngày ·
            Không phụ gia công nghiệp
          </p>
        </div>
      </div>
    </footer>
  );
}
