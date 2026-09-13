"use client";

import Image from "next/image";
import styles from "./ProductSection.module.css";
import { useOrder } from "./OrderProvider";
import { PRODUCTS, ORDER_FORM_URL, formatVnd } from "@/lib/site";

export default function ProductSection() {
  const {
    productIndex,
    sizeIndex,
    qty,
    product,
    totalText,
    selectProduct,
    selectSize,
    increment,
    decrement,
  } = useOrder();

  return (
    <section id="menu" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Thực đơn Bếp AnAn</span>
          <h2 className="sectionTitle">Sản Phẩm Chủ Lực</h2>
          <p className={styles.subtitle}>
            Chọn vị bánh và cỡ hộp — chúng tôi nướng theo đơn của bạn trong
            ngày.
          </p>
          <div className={`divider ${styles.divider}`} />
        </div>

        <div className={styles.cards}>
          {PRODUCTS.map((p, index) => {
            const selected = productIndex === index;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => selectProduct(index)}
                className={styles.card}
              >
                {selected && <div className={styles.cardRing} />}
                <div className={styles.cardMedia}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={640}
                    height={500}
                    className={styles.cardImg}
                  />
                  <span
                    className={styles.cardBadge}
                    style={{ background: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                  {selected && (
                    <span className={styles.selectedBadge}>
                      <i className="bx bx-check" /> Đang chọn
                    </span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.name}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <div className={`${styles.priceRow} ${styles.priceRowDashed}`}>
                    <span>{p.small.label}</span>
                    <strong className={styles.priceValue}>
                      {formatVnd(p.small.price)}
                    </strong>
                  </div>
                  <div className={styles.priceRow}>
                    <span>{p.large.label}</span>
                    <strong className={styles.priceValue}>
                      {formatVnd(p.large.price)}
                    </strong>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.summary}>
          <div>
            <span className={styles.summaryLabel}>Bạn đang chọn</span>
            <h3 className={styles.summaryChosen}>{product.name}</h3>
            <div className={styles.sizeOptions}>
              <button
                type="button"
                onClick={() => selectSize(0)}
                className={styles.sizeButton}
              >
                Hộp nhỏ · {formatVnd(product.small.price)}
                {sizeIndex === 0 && <span className={styles.sizeRing} />}
              </button>
              <button
                type="button"
                onClick={() => selectSize(1)}
                className={styles.sizeButton}
              >
                Hộp lớn · {formatVnd(product.large.price)}
                {sizeIndex === 1 && <span className={styles.sizeRing} />}
              </button>
            </div>
          </div>
          <div>
            <span className={styles.summaryLabel}>Số hộp</span>
            <div className={styles.qtyRow}>
              <button
                type="button"
                onClick={decrement}
                className={styles.qtyButton}
                aria-label="Giảm số hộp"
              >
                −
              </button>
              <strong className={styles.qtyValue}>{qty}</strong>
              <button
                type="button"
                onClick={increment}
                className={styles.qtyButton}
                aria-label="Tăng số hộp"
              >
                +
              </button>
              <span className={styles.qtyHint}>
                Từ 16 hộp áp dụng giá sỉ
              </span>
            </div>
          </div>
          <div className={styles.totalPanel}>
            <div className={styles.totalRow}>
              <span style={{ color: "var(--color-text-muted)" }}>
                Tạm tính
              </span>
              <strong className={styles.totalValue}>{totalText}</strong>
            </div>
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              <i className="bx bx-notepad" /> Đặt {qty} hộp qua Google Form
            </a>
            <span className={styles.orderNote}>
              Không cần trả trước · Bếp gọi xác nhận trong 15 phút
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
