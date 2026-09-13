"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { PRODUCTS, formatVnd } from "@/lib/site";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [productIndex, setProductIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0); // 0 = small, 1 = large
  const [qty, setQty] = useState(1);

  const value = useMemo(() => {
    const product = PRODUCTS[productIndex];
    const size = sizeIndex === 0 ? product.small : product.large;
    const total = size.price * qty;

    return {
      product,
      productIndex,
      sizeIndex,
      qty,
      size,
      totalText: formatVnd(total),
      selectProduct: (index) => setProductIndex(index),
      selectSize: (index) => setSizeIndex(index),
      increment: () => setQty((q) => Math.min(99, q + 1)),
      decrement: () => setQty((q) => Math.max(1, q - 1)),
    };
  }, [productIndex, sizeIndex, qty]);

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return ctx;
}
