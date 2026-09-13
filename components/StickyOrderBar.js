"use client";

import Image from "next/image";
import styles from "./StickyOrderBar.module.css";
import { useOrder } from "./OrderProvider";
import { PHONE_NUMBER, ORDER_FORM_URL } from "@/lib/site";

export default function StickyOrderBar() {
  const { product, size, qty, totalText } = useOrder();

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.summary}>
          <Image
            src="/images/logo_v2.png"
            alt=""
            width={40}
            height={40}
            className={styles.logo}
          />
          <div className={styles.text}>
            <strong className={styles.name}>{product.name}</strong>
            <span className={styles.meta}>
              {qty} × {size.label} ·{" "}
              <strong className={styles.metaTotal}>{totalText}</strong>
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={`btn btnOutline ${styles.callButton}`}
          >
            <i className="bx bxs-phone-call" /> Gọi Zalo
          </a>
          <a
            href={ORDER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btnPrimary ${styles.orderButton}`}
          >
            <i className="bx bx-cookie" /> Đặt bánh ngay
          </a>
        </div>
      </div>
    </div>
  );
}
