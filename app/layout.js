import { Be_Vietnam_Pro } from "next/font/google";
import "boxicons/css/boxicons.min.css";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "AnAn - Bếp Mẹ Nấu | Bánh bò thốt nốt nướng thủ công",
  description:
    "Bánh bò thốt nốt nướng thủ công, tươi mới 100% mỗi ngày. Đặt bánh cho gia đình, làm quà biếu, hoặc mua sỉ cho quán cafe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body>{children}</body>
    </html>
  );
}
