import styles from "./ServicesSection.module.css";
import { PHONE_NUMBER, PHONE_DISPLAY, SERVICE_ITEMS } from "@/lib/site";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={styles.section}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.92),rgba(255,255,255,.92)), url('/images/hero.png')",
      }}
    >
      <div className="container">
        <div className={styles.panel}>
          <h2 className={styles.title}>Dịch Vụ Hỗ Trợ Tận Tâm</h2>
          <p className={styles.lead}>
            Đập tan mọi rào cản về vận chuyển và bảo quản, Bếp AnAn luôn có
            giải pháp để những chiếc bánh đến tay bạn trong trạng thái hoàn
            hảo nhất.
          </p>
          <ul className={styles.list}>
            {SERVICE_ITEMS.map((item) => (
              <li key={item.strong} className={styles.item}>
                <i className="bx bxs-badge-check" />
                <span>
                  <strong>{item.strong}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btnPrimary">
              <i className="bx bxs-phone-call" /> Gọi tư vấn sỉ:{" "}
              {PHONE_DISPLAY}
            </a>
            <a href="#menu" className="btn btnOutline">
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
