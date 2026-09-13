// Shared site constants and data.

export const PHONE_NUMBER = "0918103741";
export const PHONE_DISPLAY = "0918 103 741";
export const ORDER_FORM_URL = "https://forms.gle/afFfUAZzd5VWz7Hr7";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591733211255";

export function formatVnd(amount) {
  return amount.toLocaleString("vi-VN") + "đ";
}

// Products offered in the interactive picker on the menu section.
export const PRODUCTS = [
  {
    id: "traditional",
    name: "Bánh Bò Thốt Nốt Nướng Truyền Thống",
    image: "/images/hinh-04.jpg",
    badge: "Best Seller",
    badgeColor: "#a66b38",
    description:
      "Đậm đà hương vị nguyên bản. Bánh rễ tre xốp nhẹ, mềm dai vừa phải, hòa quyện giữa vị ngọt thanh của thốt nốt và chút béo dịu của cốt dừa tự nhiên.",
    small: { label: "Hộp nhỏ (300-350g)", price: 50000 },
    large: { label: "Hộp lớn (500g)", price: 80000 },
  },
  {
    id: "coconut",
    name: "Bánh Bò Thốt Nốt Nhân Dừa Rim",
    image: "/images/hinh-05.jpg",
    badge: "Mới Lạ",
    badgeColor: "#e74c3c",
    description:
      "Trải nghiệm vị giác mới mẻ và gây nghiện. Lớp bánh nướng thơm lừng bao bọc phần nhân dừa rim dẻo dai, sần sật, nhai cực kỳ vui miệng.",
    small: { label: "Hộp nhỏ (300-350g)", price: 55000 },
    large: { label: "Hộp lớn (500-600g)", price: 90000 },
  },
];

// "Who is this for" cards on the combo section.
export const NEEDS_CARDS = [
  {
    image: "/images/hinh-01.jpg",
    icon: "bx-home-heart",
    title: "Cho Gia Đình & Văn Phòng",
    description:
      "Bữa xế gọn gàng, năng lượng sạch cho cả nhà và đồng nghiệp. Ăn ngon, lành tính, không lo đầy bụng.",
    priceLabel: "từ 50.000đ",
    cta: { label: "Chọn hộp bánh", href: "#menu" },
    highlight: false,
  },
  {
    image: "/images/hinh-07.jpg",
    icon: "bx-gift",
    title: "Quà Biếu Tặng Chỉn Chu",
    description:
      "Bánh được đặt trong hộp thiết kế thanh lịch, sang trọng. Thích hợp làm quà tặng tinh tế, mang đậm hương vị truyền thống.",
    priceLabel: "Hộp quà cao cấp",
    cta: { label: "Đặt hộp quà", href: ORDER_FORM_URL, external: true },
    badge: "Được đặt nhiều",
    highlight: true,
  },
  {
    image: "/images/hinh-08.jpg",
    icon: "bx-store-alt",
    title: "Đối Tác Sỉ / Quán Cafe",
    description:
      "Mảnh ghép hoàn hảo cho menu đồ uống. Cung cấp sỉ linh hoạt từ 16 hộp, hỗ trợ giữ form bánh đẹp để tối ưu kinh doanh.",
    priceLabel: "Sỉ từ 16 hộp",
    cta: { label: "Nhận báo giá sỉ", href: `tel:${PHONE_NUMBER}` },
    highlight: false,
  },
];

export const SERVICE_ITEMS = [
  {
    text: "Giữ trọn độ ẩm, mùi vị, an toàn khi mang đi xa hoặc gửi tặng các tỉnh.",
    strong: "Hỗ trợ hút chân không miễn phí:",
  },
  {
    text: "Hộp tiêu chuẩn sạch sẽ, hoặc hộp quà cao cấp theo yêu cầu.",
    strong: "Đóng gói linh hoạt:",
  },
  {
    text: "Chiết khấu tốt, hỗ trợ tư vấn set up bánh cho quán nước / sự kiện teabreak.",
    strong: "Chính sách sỉ ưu đãi:",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Bánh ngon dã man! Rễ tre nhiều, bánh mềm dai mà không bị khô. Cái vị ngọt thanh của thốt nốt ăn rất dễ chịu, không gắt. Có cái mã số lô trên hộp nhìn uy tín hẳn, mua cho mấy nhóc ở nhà ăn rất yên tâm.",
    name: "Khánh Vân Q5",
    role: "Chuyên viên tư vấn tâm lý",
  },
  {
    quote:
      "Khách quán mình khen bánh bò nhân dừa rim quá trời. Dừa sần sật nhai rất đã, kết hợp với trà sen hay cafe đen đều hợp. Bếp AnAn hút chân không rất kỹ nên bánh giữ form tốt, bảo quản dễ.",
    name: "Chị Cát",
    role: "Chủ team chăm sóc sức khỏe Phú Nhuận, TP.HCM",
  },
  {
    quote:
      "Mua hộp bánh biếu mẹ chồng mà cụ khen nức nở bảo đúng cái vị ngày xưa. Hộp bánh chỉn chu, cầm nặng tay. Lần sau sẽ đặt thêm bánh bò mời khách đến nhà.",
    name: "Chị Hè",
    role: "Chủ quán cơm đường Tám Danh, Q.8, TP.HCM",
  },
];

export const STORY_IMAGES = [
  { src: "/images/hinh-01.jpg", alt: "Quá trình làm bánh", offset: false },
  {
    src: "/images/hinh-03.jpg",
    alt: "Bánh nướng chín trong lò",
    offset: true,
  },
  { src: "/images/hinh-07.jpg", alt: "Sản phẩm Bếp AnAn", offset: false },
  { src: "/images/hinh-08.jpg", alt: "Bánh bò thơm ngon", offset: true },
];

export const DELIVERY_WINDOWS = [
  { window: "9:00 – 12:00", cutoff: "đặt trước 19:00 tối hôm trước" },
  { window: "15:00 – 19:00", cutoff: "đặt trước 11:00 sáng cùng ngày" },
];

export const NAV_LINKS = [
  { href: "#menu", label: "Sản phẩm" },
  { href: "#combo", label: "Combo & Quà tặng" },
  { href: "#cam-ket", label: "Cam kết" },
  { href: "#khach-hang", label: "Đánh giá" },
  { href: "#story", label: "Câu chuyện" },
];

export const EXPLORE_LINKS = [
  { href: "#menu", label: "Sản phẩm & giá" },
  { href: "#combo", label: "Combo & quà tặng" },
  { href: "#services", label: "Mua sỉ từ 16 hộp" },
  { href: "#cam-ket", label: "Cam kết & bảo quản" },
  { href: "#khach-hang", label: "Đánh giá khách hàng" },
];
