# MAISON ÉPOQUE — Vintage Fashion Landing Page

> **Slogan:** *Elegance Never Fades*  
> **Phong cách:** French Vintage • Classic Luxury • Quiet Luxury  
> **Sinh viên thực hiện:** Tạ Lê Phi Trường — MSSV: 125001362  
> **Đơn vị:** Đại học Lạc Hồng (LHU)  
> **Website Demo (GitHub Pages):** [https://talephitruong.github.io/Truong_TaLePhi_125001362/](https://talephitruong.github.io/Truong_TaLePhi_125001362/)

---

## 1. Giới thiệu dự án

**MAISON ÉPOQUE** là dự án Landing Page giới thiệu thương hiệu thời trang cổ điển cao cấp mang phong thái Pháp thế kỷ 20 kết hợp triết lý may đo Haute Tailoring và tinh thần *Quiet Luxury*. Dự án được xây dựng với mục tiêu đem lại trải nghiệm thị giác như một tạp chí thời trang danh tiếng (Editorial Magazine), tôn vinh giá trị may đo thủ công, chất liệu len Cashmere, tơ tằm tự nhiên và vẻ đẹp trường tồn cùng thời gian.

---

## 2. Công nghệ sử dụng

- **HTML5 Semantic:** Cấu trúc phân cấp chuẩn W3C, thẻ ngữ nghĩa `<aside>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<blockquote>`, `<cite>`, `<footer>`, `<address>`. Đạt chuẩn Web Accessibility (WCAG AA).
- **CSS3 Hiện đại:** 
  - Khai báo Design System với hơn 50 CSS Custom Properties (`:root`).
  - Hệ thống bố cục kết hợp linh hoạt giữa CSS Grid và Flexbox.
  - Typography Scale với hàm `clamp()` thích ứng mượt mà trên mọi độ phân giải từ 320px đến màn hình 4K.
  - Hỗ trợ chuẩn `@media (prefers-reduced-motion: reduce)` cho người dùng nhạy cảm với chuyển động.
- **Vanilla JavaScript (ES6+):**
  - Xử lý bộ lọc sản phẩm theo danh mục không tải lại trang.
  - Cửa sổ Quick-View Modal hiển thị chi tiết chất liệu, phom dáng và xuất xứ.
  - Khóa cuộn nền trang (`modal-open`) khi mở Modal hoặc Navigation Drawer.
  - Kiểm tra tính hợp lệ dữ liệu biểu mẫu (Form Validation) bằng biểu thức chính quy (Regex số điện thoại Việt Nam).
  - Hệ thống Toast Notification trang nhã và nút Back-to-Top thông minh.
- **Thư viện Animation (qua Cloudflare CDN):**
  - **Animate.css (v4.1.1):** Tạo hiệu ứng mượt mà khi tải trang đầu tiên tại Hero Section.
  - **AOS (Animate On Scroll v2.3.4):** Kích hoạt hiệu ứng xuất hiện tuần tự khi cuộn trang.
- **Quản lý phiên bản & Triển khai:** Git, GitHub, GitHub Pages.

---

## 3. Cấu trúc thư mục

```text
maison-epoque/
├── index.html        # Mã nguồn HTML5 Semantic & nội dung hoàn chỉnh 8 sections
├── style.css         # Hệ thống thiết kế CSS Variables, Grid/Flexbox & Responsive
├── script.js         # JavaScript thuần điều khiển Modal, Bộ lọc, Validation & Toast
├── PROMPT_LOG.md     # Nhật ký Prompt Engineering (Vibe Coding Log) chi tiết
└── README.md         # Tài liệu hướng dẫn, mô tả dự án và giấy phép hình ảnh
```

---

## 4. Các tính năng nổi bật

1. **Thanh thông báo (Announcement Bar):** Giới thiệu sự kiện Défilé Thu - Đông 2026 và trải nghiệm thử đồ cá nhân hóa tại Salon.
2. **Thanh điều hướng thông minh (Sticky Header):** Tự động đổi nền khi cuộn trang, hỗ trợ menu trượt Drawer trên thiết bị di động.
3. **Hero Section nghệ thuật:** Typography ấn tượng, ảnh Lookbook N° 01 chuẩn editorial, huy hiệu thương hiệu và số liệu cam kết chất lượng.
4. **Bộ sưu tập chọn lọc (Featured Collections):** 3 ấn bản thời trang (Mùa Thu Paris, Âu Phục Di Sản, Dạ Tiệc & Nhung Lụa).
5. **Lưới sản phẩm tiêu biểu (Signature Products):** 6 thiết kế độc bản với giá tiền VNĐ, chất liệu cao cấp, bộ lọc danh mục tức thì và nút Quick-View.
6. **Câu chuyện di sản (Brand Story):** Tôn vinh hơn 30 năm gìn giữ nghề may đo truyền thống, hình ảnh xưởng may Atelier và nghệ nhân cắt dựng phom.
7. **Tuyên ngôn nghệ thuật (Philosophy Banner):** Triết lý Quiet Luxury với trích dẫn danh ngôn và 3 giá trị vàng (Tiết chế, Chuẩn xác, Trường tồn).
8. **Đặt hẹn trải nghiệm Salon (Private Appointment):** Giới thiệu Salon Hà Nội & TP.HCM kèm biểu mẫu đặt lịch may đo Bespoke có kiểm tra hợp lệ dữ liệu.
9. **Câu lạc bộ quý khách VIP (Époque Privé Club):** Biểu mẫu đăng ký nhận thư mời độc quyền và bản xem trước Lookbook.
10. **Chân trang chuyên nghiệp (Footer):** 4 cột thông tin đầy đủ bản quyền, chính sách dịch vụ và liên kết mạng xã hội.

---

## 5. Hướng dẫn chạy thử nghiệm cục bộ

1. Sao chép (clone) kho lưu trữ về máy tính:
   ```bash
   git clone https://github.com/TaLePhiTruong/Truong_TaLePhi_125001362.git
   cd Truong_TaLePhi_125001362
   ```
2. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt hiện đại nào (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
3. Hoặc sử dụng tiện ích mở rộng **Live Server** trên Visual Studio Code để xem trực tiếp tại `http://127.0.0.1:5500`.

---

## 6. Nguồn trích dẫn hình ảnh (Image Credits & License)

Toàn bộ hình ảnh sử dụng trong dự án được tuyển chọn kỹ lưỡng từ kho ảnh miễn phí chất lượng cao **Unsplash** tuân thủ theo [Unsplash License](https://unsplash.com/license) (sử dụng phi thương mại cho mục đích học tập và nghiên cứu):

- **Hero Lookbook N° 01:** [Unsplash - Photo by Tamara Bellis](https://images.unsplash.com/photo-1515886657613-9f3515b0c78f)
- **Collection 01 (L'Automne Parisien):** [Unsplash - Photo by Pete Bellis](https://images.unsplash.com/photo-1539109136881-3be0616acf4b)
- **Collection 02 (Heritage Tailoring):** [Unsplash - Photo by Hunters Race](https://images.unsplash.com/photo-1507679799987-c73779587ccf)
- **Collection 03 (Soirée & Velours):** [Unsplash - Photo by Flaunter](https://images.unsplash.com/photo-1490481651871-ab68de25d43d)
- **Product 01 (Măng-tô Cashmere Le Marais):** [Unsplash - Photo by Artem Beliaikin](https://images.unsplash.com/photo-1544441893-675973e31985)
- **Product 02 (Blazer Tweed Saint-Germain):** [Unsplash - Photo by NordWood Themes](https://images.unsplash.com/photo-1550614000-4895a10e1bfd)
- **Product 03 (Suit 3 Mảnh Le Gentilhomme):** [Unsplash - Photo by Nimble Made](https://images.unsplash.com/photo-1594938298603-c8148c4dae35)
- **Product 04 (Đầm Dạ Hội La Nuit Étoilée):** [Unsplash - Photo by Melody Jacob](https://images.unsplash.com/photo-1566174053879-31528523f8ae)
- **Product 05 (Sơ Mi Lụa Poète Romantique):** [Unsplash - Photo by Nimble Made](https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf)
- **Product 06 (Măng-tô Houndstooth Vendôme):** [Unsplash - Photo by Laura Chouette](https://images.unsplash.com/photo-1578587018452-892bacefd3f2)
- **Story Atelier (Bàn tay nghệ nhân may đo):** [Unsplash - Photo by Michael Burrows](https://images.unsplash.com/photo-1598554747436-c9293d6a588f)
- **Story Accent (Vải len và kéo cắt may thủ công):** [Unsplash - Photo by Ksenia Chernaya](https://images.unsplash.com/photo-1558769132-cb1aea458c5e)

---

&copy; 2026 **MAISON ÉPOQUE**. Báo cáo môn học Thiết kế Website.
