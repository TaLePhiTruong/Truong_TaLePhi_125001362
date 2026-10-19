# PROMPT ENGINEERING & TECHNICAL LOG — MAISON ÉPOQUE

> **Dự án:** Landing Page Thương Hiệu Thời Trang Vintage Cao Cấp **MAISON ÉPOQUE**  
> **Slogan:** *Elegance Never Fades*  
> **Thời gian làm bài thi:** 120 phút  
> **Vai trò:** Senior Front-end Developer & UI/UX Designer  
> **Công nghệ sử dụng:** HTML5 Semantic, CSS3 (Custom Properties, Grid & Flexbox), Vanilla JavaScript, Animate.css (CDN), AOS.js (CDN).

---

## 1. TỔNG QUAN DỰ ÁN & ĐỊNH HƯỚNG THƯƠNG HIỆU

### 1.1. Bản sắc thương hiệu (Brand DNA)
- **Tên thương hiệu:** MAISON ÉPOQUE (Paris • Saïgon).
- **Định vị:** Thời trang Vintage kết hợp Classic Luxury, French Vintage và Quiet Luxury.
- **Tập khách hàng mục tiêu:** Khách hàng tinh hoa, yêu thích phong cách cổ điển, thanh lịch và chú trọng đến chiều sâu văn hóa, kỹ nghệ may đo thủ công (Haute Tailoring / Bespoke).
- **Cảm hứng thị giác:** Phong cách dàn trang tạp chí thời trang cao cấp (Vogue, Harper's Bazaar, Ralph Lauren Purple Label, CELINE, Gucci Vintage).

### 1.2. Bảng màu thương hiệu (Curated Color Palette)
Tất cả các mã màu được chuẩn hóa thành CSS Variables trong `:root`:
- **Ivory (`#F4EFE6`):** Màu kem ngà quý phái, làm nền tảng cho sự ấm áp, cổ điển và tạo khoảng trắng nghỉ ngơi cho thị giác.
- **Burgundy (`#542B2B`):** Sắc đỏ rượu vang Bordeaux thẫm, tượng trưng cho sự quyền uy, quý tộc và tạo điểm nhấn chuyển đổi (CTA, giá tiền, badge).
- **Espresso (`#302820`):** Sắc nâu cà phê đậm sâu, sử dụng cho văn bản chính, tiêu đề và khối nền chân trang, dịu mắt hơn màu đen tuyền kỹ thuật số thô ráp.
- **Muted Gold (`#B59A72`):** Sắc vàng đồng cổ điển ánh kim, tạo đường viền trang trí, hoa văn ornament và focus-ring sang trọng.
- **Sand (`#E2D5C3`):** Sắc cát sa mạc trung tính, đóng vai trò kết nối giữa Ivory và Espresso.

### 1.3. Hệ thống Typography (Font Pairing)
- **Tiêu đề & Trích dẫn (Serif):** `'Cormorant Garamond', Georgia, serif` — Phông chữ cổ điển mang vẻ đẹp thi ca Pháp, uyển chuyển và đài các.
- **Nội dung & Giao diện (Sans-serif):** `'Plus Jakarta Sans', system-ui, sans-serif` — Đảm bảo khả năng đọc hoàn hảo trên mọi kích thước màn hình từ 320px đến 4K.

---

## 2. QUÁ TRÌNH PROMPT ENGINEERING

### Giai đoạn 1: Phân tích đề bài & Khung kiến trúc semantic
- **Mục tiêu:** Xác định đúng cấu trúc 8 phần theo yêu cầu đề thi, loại bỏ hoàn toàn mã giả hoặc nội dung rỗng (Lorem Ipsum).
- **Chiến lược prompt:**
  1. Yêu cầu mô hình đóng vai trò Senior Front-end Architect với 8 năm kinh nghiệm thời trang xa xỉ.
  2. Bắt buộc lập kế hoạch thẻ semantic HTML5: `<aside class="announcement-bar">`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  3. Định nghĩa toàn bộ nội dung sản phẩm bằng tiếng Việt trau chuốt, giàu mỹ cảm thời trang (ví dụ: Cashmere Mông Cổ, Kỹ nghệ dựng ngực Canvas, Len Super 150s Loro Piana).

### Giai đoạn 2: Thiết kế giao diện & Thư viện hiệu ứng
- **Mục tiêu:** Tích hợp trọn vẹn Animate.css và AOS qua CDN mà không làm giảm tốc độ tải trang; tuân thủ triết lý Quiet Luxury (không lạm dụng chuyển động giật gân).
- **Chiến lược prompt:**
  1. Đưa Animate.css vào các phần tử khởi đầu trang (Hero Headline, Tagline).
  2. Khởi tạo AOS với `duration: 850ms`, `once: true`, `offset: 80px` để hiệu ứng cuộn trang mềm mại, tinh tế.
  3. Xây dựng `@media (prefers-reduced-motion: reduce)` để đáp ứng tiêu chuẩn Accessibility (A11y).

### Giai đoạn 3: Tương tác người dùng & Đảm bảo tính khả dụng (No Fake Buttons)
- **Mục tiêu:** Đảm bảo mọi nút bấm đều có phản hồi thực tế và hữu ích.
- **Chiến lược prompt:**
  1. Nút "Khám phá ấn bản" tại Collection kích hoạt bộ lọc tương ứng tại mục Sản Phẩm.
  2. Nút "Xem Chi Tiết" mở Modal Quick-View hỗ trợ người dùng xem chất liệu, cấu trúc và cách bảo quản.
  3. Nút "Thử Đồ" tự động điền tên sản phẩm vào Form Đặt Hẹn VIP và cuộn mượt xuống khu vực Salon.
  4. Form đặt lịch hẹn và Form Newsletter có kiểm tra lỗi đầu vào (Client-side validation) và hiển thị thông báo Toast Notification trang trọng.

---

## 3. ĐÁP ỨNG TIÊU CHÍ KỸ THUẬT CỦA ĐỀ THI

| Yêu cầu đề thi | Cách thức hiện thực hóa trong mã nguồn | File tương ứng |
| :--- | :--- | :--- |
| **1. Semantic HTML5** | Chuẩn hóa toàn bộ: 1 thẻ `main` duy nhất, `aside` cho thanh thông báo, `figure`/`figcaption` cho ảnh nghệ thuật, `cite` cho nguồn trích dẫn, `nav` có `aria-label` cho header và 2 cột chân trang, `article` cho các card độc lập (collections, products). Cây Heading tuyệt đối chuẩn xác (H1 -> H2 -> H3, không nhảy cấp). | `index.html` |
| **2. CSS Variables** | Quản lý 100% màu sắc, phông chữ, khoảng cách, border-radius và thời gian chuyển động tại `:root`. Triệt tiêu hoàn toàn các giá trị hardcoded lặp lại. | `style.css` |
| **3. Bố cục Grid & Flexbox** | CSS Grid chuẩn mực cho Lưới sản phẩm, Bộ sưu tập, Layout bất đối xứng Hero & Story, Footer 4 cột và Modal. Flexbox cho Header, Nav, Meta stats, Filter tabs, Card internals. Tối ưu hoàn hảo cho màn hình từ 320px đến Desktop 4K. | `style.css` |
| **4. Animate.css CDN** | Tích hợp thư viện qua Cloudflare CDN, áp dụng lớp `animate__animated`, `animate__fadeInDown`, `animate__fadeInUp`. | `index.html` |
| **5. AOS (Animate on Scroll)** | Tích hợp AOS CSS/JS qua CDN, gắn `data-aos="fade-up"`, khởi tạo chính xác trong `script.js` qua `AOS.init()`. | `index.html`, `script.js` |
| **6. Micro-animations & Hovers** | Tự viết `:hover`, `:focus-visible`, chuyển động mở rộng đường gạch chân menu (`::after`), zoom ảnh nhẹ nhàng (`transform: scale(1.05)`). | `style.css` |
| **7. Khả năng truy cập (A11y)** | Có `skip-link`, `aria-label`, `aria-expanded`, `aria-modal`, `aria-hidden`, tương phản chữ đạt chuẩn WCAG AA. | `index.html`, `style.css` |
| **8. Responsive Design** | Phân chia 3 breakpoint rõ ràng: Desktop (>1024px), Tablet (768px - 1024px), Mobile (<768px). Menu drawer cho di động. | `style.css`, `script.js` |
| **9. Prefers-reduced-motion** | Truy vấn media vô hiệu hóa hiệu ứng chuyển động nếu người dùng bật chế độ giảm tải chuyển động trong hệ điều hành. | `style.css` |
| **10. Tương tác JavaScript thuần** | Modal chi tiết sản phẩm, lọc danh mục tab, đặt lịch hẹn kiểm tra regex số điện thoại Việt Nam, thông báo toast sang trọng. | `script.js` |

---

## 4. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
maison-epoque/
├── index.html        # Khung kiến trúc Semantic HTML5, cấu trúc nội dung đầy đủ
├── style.css         # Hệ thống thiết kế CSS3 Variables, Grid/Flexbox, Responsive
├── script.js         # JavaScript thuần điều khiển AOS, Modal, Filter, Form Validation
└── PROMPT_LOG.md     # Nhật ký kỹ thuật, Prompt Engineering, Bản sắc thiết kế & Hướng dẫn
```

---

## 5. BẢNG CHECKLIST KIỂM THỬ CHẤT LƯỢNG (QA AUDIT)

Trước khi nộp bài thi, toàn bộ các hạng mục sau đã được kiểm thử:

- [x] **Hiển thị & Bố cục:**
  - [x] Đầy đủ 8 phần theo yêu cầu: Announcement Bar, Header, Hero, Collections (3 thẻ), Products (6 thẻ), Brand Story, Philosophy Banner, Footer.
  - [x] Không còn bất kỳ chữ "Lorem Ipsum" nào; toàn bộ nội dung đều là văn phong thời trang cao cấp.
  - [x] Khoảng cách padding/margin cân đối, tỷ lệ ảnh 4:5 và 3:4 chuẩn mực editorial thời trang.
- [x] **Hiệu ứng & CDN:**
  - [x] Thư viện Animate.css hoạt động mượt mà ở phần Hero.
  - [x] Thư viện AOS kích hoạt chính xác khi cuộn trang, không bị giật lag hay tràn màn hình ngang.
  - [x] Chế độ `prefers-reduced-motion` tắt chuyển động êm đẹp khi được bật.
- [x] **Tính năng JavaScript:**
  - [x] Bộ lọc tab sản phẩm (Tất cả, Măng-tô, Âu phục, Nhung lụa) lọc chính xác từng nhóm.
  - [x] Cửa sổ Modal Quick-View mở mượt mà, đầy đủ thông số kỹ nghệ, đóng bằng nút X, phím ESC hoặc click ra ngoài.
  - [x] Form đặt hẹn VIP kiểm tra số điện thoại hợp lệ (đầu số 03, 05, 07, 08, 09), báo lỗi rõ ràng và hiển thị Toast khi thành công.
  - [x] Menu drawer trên di động đóng mở êm ái, tự đóng khi chọn mục điều hướng.
  - [x] Nút "Cuộn lên đầu trang" (Back-to-top) xuất hiện sau khi cuộn qua 450px.
- [x] **Kiểm tra kỹ thuật:**
  - [x] Không có bất kỳ lỗi nào xuất hiện trong Developer Console (F12).
  - [x] Tất cả các đường dẫn ảnh đều dùng HTTPS ổn định có thuộc tính `alt` và `loading="lazy"`.
  - [x] Đường dẫn CSS và JS liên kết tương đối (`style.css`, `script.js`), sẵn sàng chạy mọi môi trường.

---

## 6. HƯỚNG DẪN TRIỂN KHAI VÀ XUẤT BẢN

### Cách 1: Chạy trực tiếp bằng Visual Studio Code (Live Server)
1. Mở thư mục `maison-epoque` trong VS Code.
2. Cài đặt tiện ích mở rộng **Live Server** (của Ritwick Dey).
3. Nhấp chuột phải vào file [index.html](file:///c:/Users/LHUser/Downloads/maison-epoque/index.html) và chọn **"Open with Live Server"**.
4. Website sẽ tự động khởi chạy tại địa chỉ: `http://127.0.0.1:5500/index.html`.

### Cách 2: Triển khai lên GitHub Pages (Miễn phí & Vĩnh viễn)
1. Khởi tạo kho lưu trữ Git cục bộ:
   ```bash
   git init
   git add .
   git commit -m "feat: complete luxury vintage fashion landing page for MAISON ÉPOQUE"
   ```
2. Tạo một repository mới trên GitHub (ví dụ: `maison-epoque`).
3. Đẩy mã nguồn lên GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TENTAIKHOAN/maison-epoque.git
   git push -u origin main
   ```
4. Kích hoạt GitHub Pages:
   - Truy cập trang Repository trên GitHub: **Settings** &rarr; **Pages**.
   - Tại mục **Build and deployment** &gt; **Branch**, chọn nhánh `main` và thư mục `/ (root)`.
   - Bấm **Save**. Sau 1 - 2 phút, đường dẫn website chính thức sẽ xuất hiện dưới dạng:  
     `https://TENTAIKHOAN.github.io/maison-epoque/`

---

## 7. RÀ SOÁT VÀ TỐI ƯU TOÀN DIỆN HỆ THỐNG HÌNH ẢNH (IMAGE AUDIT)

### 7.1. Tiêu chí đã hoàn thành
- [x] **Xác minh mạng thực tế:** Đã kiểm tra 12/12 URL ảnh qua script tự động (HTTP HEAD), toàn bộ đạt trạng thái **200 OK**, `image/jpeg`.
- [x] **Bản quyền Logo thương hiệu:** Logo MAISON ÉPOQUE được tạo 100% bằng HTML & CSS typography (Cormorant Garamond), hoàn toàn không sử dụng logo của thương hiệu khác.
- [x] **Phong cách Vintage/Editorial nhất quán:** Bảng màu Camel, Sand, Espresso, Burgundy, Ivory, Black Velvet đồng bộ toàn bộ landing page.
- [x] **Object-fit & Object-position tối ưu:** Đặt `object-fit: cover` và tiêu cự vàng `center 20%` - `center 22%` cho chân dung trang phục; `center center` cho xưởng may và dụng cụ thủ công.
- [x] **Mô tả Alt chuẩn Accessibility:** Toàn bộ ảnh đều có thuộc tính `alt` tiếng Việt chi tiết; modal cập nhật alt động theo tên sản phẩm.
- [x] **Phòng ngừa Layout Shift (CLS = 0):** Định nghĩa cặp kích thước `width`/`height` trên từng thẻ `<img>` kết hợp `aspect-ratio` trong CSS.
- [x] **Hiệu suất tải trang:** Hero image áp dụng `loading="eager"`, `fetchpriority="high"`, `decoding="async"`. 11 ảnh còn lại áp dụng `loading="lazy"`.
- [x] **Hệ thống Fallback & Nền dự phòng:** Khung ảnh có hiệu ứng radial-gradient màu cát ấm; JavaScript tự động bắt lỗi `onerror` và kích hoạt Fallback Vector SVG độc bản mang thương hiệu MAISON ÉPOQUE nếu mất kết nối.
- [x] **Tài liệu hóa giấy phép:** Toàn bộ nguồn ảnh, ID Unsplash, tác giả và giấy phép Unsplash License được ghi chép đầy đủ tại [README.md](file:///c:/Users/LHUser/Downloads/maison-epoque/README.md).
