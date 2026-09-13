import styles from "./CommitmentSection.module.css";

export default function CommitmentSection() {
  return (
    <section id="cam-ket" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.eyebrow}>Lời Cam Kết Vàng</span>
          <h2 className={styles.title}>
            Tươi mới mỗi ngày.
            <br />
            Minh bạch từng nguyên liệu.
          </h2>
          <p className={styles.lead}>
            Tại <strong>AnAn Bếp Mẹ Nấu</strong>, chúng tôi thực hiện việc
            quản lý số Lot của từng loại nguyên vật liệu. Trên mỗi hộp bánh
            đều có ghi số Lot nhằm mục đích truy xuất ngày và lô sản xuất.
          </p>
          <p className={styles.body}>
            Việc này giúp Bếp nắm rõ chính xác các lô nguyên liệu nào đã được
            sử dụng cho từng lô bánh, đảm bảo chất lượng đồng đều và an toàn
            tuyệt đối cho thực khách.
          </p>
          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.pointIcon}>
                <i className="bx bx-calendar-check" />
              </div>
              <div>
                <h4 className={styles.pointTitle}>
                  100% bánh nướng tươi mới mỗi ngày
                </h4>
                <p className={styles.pointDesc}>
                  Tuyệt đối KHÔNG bán bánh qua ngày.
                </p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.pointIcon}>
                <i className="bx bx-leaf" />
              </div>
              <div>
                <h4 className={styles.pointTitle}>
                  Tuyệt đối không dùng phụ gia công nghiệp
                </h4>
                <p className={styles.pointDesc}>
                  Hoàn toàn tự nhiên, an toàn cho sức khỏe.
                </p>
              </div>
            </div>
          </div>
          <a href="#menu" className="btn btnWhite">
            Đặt mẻ bánh hôm nay <i className="bx bx-right-arrow-alt" />
          </a>
        </div>
        <div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderTitle}>
                <i className="bx bx-time" />{" "}
                <strong>Hạn sử dụng &amp; Bảo quản</strong>
              </div>
            </div>
            <ul className={styles.list}>
              <li className={`${styles.listItem} ${styles.listItemDashed}`}>
                <i className="bx bx-check-circle" />
                <span>
                  <strong>Nhiệt độ thường:</strong> Dùng trong vòng 2 ngày (48
                  giờ) từ ngày sản xuất.
                </span>
              </li>
              <li className={styles.listItem}>
                <i className="bx bx-check-circle" />
                <span>
                  <strong>Ngăn mát tủ lạnh:</strong> Giữ được trong vòng 5
                  ngày.
                </span>
              </li>
            </ul>
            <div className={styles.note}>
              <strong>Lưu ý khi bảo quản lạnh:</strong>
              <br />
              Khi lấy khỏi tủ lạnh, cần dùng lò vi sóng làm nóng lại để bánh
              thơm ngon như mới. Sau khi làm nóng, vui lòng{" "}
              <strong>dùng ngay</strong> và tuyệt đối{" "}
              <strong>không tái cấp lạnh</strong>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
