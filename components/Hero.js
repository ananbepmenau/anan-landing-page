import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.badge}>Ngon - Sạch - Tươi - An tâm</span>
          <h1 className={styles.title}>
            AnAn - <span className={styles.titleAccent}>Bếp Mẹ Nấu</span>
          </h1>
          <p className={styles.subtitle}>Gói an lành trong từng vị bánh</p>
          <p className={styles.lead}>
            Thưởng thức bánh bò thốt nốt nướng thủ công thơm lừng, dai mềm
            hoàn hảo. Tươi mới 100% mỗi ngày, an toàn tuyệt đối từ nguyên liệu
            đến bàn ăn.
          </p>
          <div className={styles.rating}>
            <div className={styles.stars}>
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <span className={styles.ratingText}>
              <strong className={styles.ratingScore}>5.0</strong> từ khách
              quen, quán cafe &amp; khách đặt quà biếu
            </span>
          </div>
          <div className={styles.ctaRow}>
            <a href="#menu" className="btn btnLg btnPrimary">
              Đặt Bánh Tươi Hôm Nay <i className="bx bx-right-arrow-alt" />
            </a>
            <a href="#services" className="btn btnLg btnOutline">
              Tư Vấn Mua Sỉ &amp; Quà Tặng
            </a>
          </div>
          <div className={styles.trustRow}>
            <span className={styles.trustItem}>
              <i className={`bx bx-check-shield ${styles.trustIcon}`} />{" "}
              Không bán bánh qua ngày
            </span>
            <span className={styles.trustItem}>
              <i className={`bx bx-leaf ${styles.trustIcon}`} /> Không phụ
              gia công nghiệp
            </span>
            <span className={styles.trustItem}>
              <i className={`bx bxs-badge-check ${styles.trustIcon}`} /> Hút
              chân không miễn phí
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imageWrap}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/hinh-02.jpg"
                alt="Bánh bò thốt nốt AnAn - Bếp Mẹ Nấu"
                width={640}
                height={640}
                className={styles.heroImg}
                priority
              />
            </div>
            <div className={`${styles.floatCard} ${styles.floatFresh}`}>
              <i className="bx bx-check-shield" /> 100% Tươi Mới
            </div>
            <div className={`${styles.floatCard} ${styles.floatBamboo}`}>
              <i className="bx bx-heart" /> Rễ tre chuẩn vị
            </div>
            <a href="#menu" className={styles.priceCard}>
              <span className={styles.priceLabelCol}>
                <span className={styles.priceEyebrow}>Bán chạy nhất</span>
                <strong className={styles.priceName}>
                  Bánh bò thốt nốt nướng
                </strong>
              </span>
              <span className={styles.priceValueCol}>
                <strong className={styles.priceValue}>từ 50.000đ</strong>
                <span className={styles.priceUnit}>/ hộp 300-350g</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
