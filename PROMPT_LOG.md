# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Tạ Lê Phi Trường
- **MSSV:** 125001362
- **Tên đề tài Website:** MAISON ÉPOQUE – Vintage Fashion Landing Page
- **Công cụ AI đã sử dụng:** Google Antigravity (Gemini 3.8 Flash)
- **Công nghệ:** HTML5, CSS3, JavaScript, Animate.css, AOS, Git, GitHub Pages.

---

## 1. Yêu cầu ban đầu (System/Initial Prompt)

### Mục tiêu
Xây dựng landing page giới thiệu thương hiệu thời trang Vintage MAISON ÉPOQUE, hướng đến người yêu thích phong cách cổ điển, thanh lịch và sang trọng theo triết lý *Quiet Luxury* và *French Vintage*.

### Prompt đã sử dụng
```text
Bạn là một Senior Front-end Developer và UI/UX Designer hàng đầu chuyên về các thương hiệu xa xỉ. Hãy khởi tạo mã nguồn hoàn chỉnh cho một Landing Page thương hiệu thời trang cổ điển cao cấp mang tên "MAISON ÉPOQUE" (Paris • Saïgon) với slogan "Elegance Never Fades".

Yêu cầu chi tiết:
1. Phong cách thiết kế:
   - Thẩm mỹ: Tạp chí thời trang cao cấp (Editorial Magazine), French Vintage, Classic Luxury, Quiet Luxury.
   - Bảng màu thương hiệu: Ivory (#F4EFE6 làm nền ấm), Burgundy (#542B2B điểm nhấn quý phái), Espresso (#302820 cho chữ và nền tối), Muted Gold (#B59A72 viền trang trí ánh kim), Sand (#E2D5C3 màu trung tính chuyển tiếp).
   - Phông chữ: Cormorant Garamond (Serif cổ điển quý phái cho tiêu đề) kết hợp Plus Jakarta Sans (Sans-serif hiện đại, thanh thoát, dễ đọc cho nội dung).

2. Cấu trúc nội dung (Tối thiểu 8 sections hoàn chỉnh, không dùng văn bản giả Lorem Ipsum):
   - Announcement Bar: Thông báo sự kiện Défilé Thu - Đông 2026 và trải nghiệm thử đồ cá nhân hóa.
   - Header & Navigation: Logo thương hiệu chữ lồng đài các, menu liên kết (Trang chủ, Bộ sưu tập, Sản phẩm, Di sản, Triết lý, Đặt hẹn), nút CTA Đặt lịch Salon, nút Hamburger trên di động.
   - Hero Section: Headline "Elegance Never Fades", lời đề từ phong cách, 2 nút CTA, số liệu thống kê (100% Cashmere, 48h+ thủ công, 50 bản giới hạn), hình ảnh Editorial Lookbook N° 01.
   - Featured Collections (3 bộ sưu tập): L'Automne Parisien (Áo măng-tô cát), Heritage Tailoring (Âu phục may đo Savile Row), Soirée & Velours (Đầm dạ hội nhung đen tuyền).
   - Signature Products (6 sản phẩm): Thẻ sản phẩm kèm ảnh, tag danh mục, chất liệu cao cấp, giá niêm yết VNĐ, nút Xem Chi Tiết và nút Thử Đồ. Có bộ lọc danh mục (Tất cả, Măng-tô, Âu phục, Nhung lụa).
   - Brand Story: Hành trình gìn giữ di sản may đo hơn 30 năm, hình ảnh nghệ nhân cắt dựng phom vải, 2 trụ cột giá trị cốt lõi.
   - Philosophy Banner: Tuyên ngôn thẩm mỹ nghệ thuật Quiet Luxury, trích dẫn danh ngôn thương hiệu, 3 giá trị vàng (Tiết chế, Chuẩn xác, Trường tồn).
   - Private Salon Appointment: Giới thiệu địa chỉ Salon tại Hà Nội (Tràng Tiền) và TP.HCM (Đồng Khởi), kèm biểu mẫu đặt hẹn VIP gồm Họ tên, Số điện thoại, Salon tiếp đón, Ngày hẹn, Dịch vụ may đo, Ghi chú đặc biệt.
   - VIP Newsletter (Époque Privé Club): Đăng ký nhận thư mời tham dự trình diễn riêng tư.
   - Footer: 4 cột chuẩn mực (Thông tin thương hiệu & mạng xã hội, Liên kết khám phá, Dịch vụ may đo Bespoke, Thông tin địa chỉ & hotline salon, bản quyền năm 2026).

3. Yêu cầu kỹ thuật:
   - Tách thành 3 file độc lập: index.html, style.css, script.js.
   - Tối ưu SEO, Semantic HTML5, CSS Variables, Responsive đa màn hình, không lỗi JavaScript Console.
```

### Kết quả AI tạo ra
- **Cấu trúc tệp tin:** AI đã tạo ra trọn vẹn 3 file cốt lõi: `index.html` (khung xương nội dung 8 phần), `style.css` (bảng màu, font chữ, bố cục Flexbox/Grid), và `script.js` (dữ liệu sản phẩm, tương tác cơ bản).
- **Giao diện & Bố cục:** Giao diện mang đậm tính nghệ thuật tạp chí thời trang Vogue với màu kem ngà Ivory làm chủ đạo, viền vàng đồng Muted Gold tinh xảo, hình ảnh mẫu trang phục chụp theo phong cách editorial phương Tây.
- **Tính năng ban đầu:** Khung điều hướng có hiệu ứng cuộn mượt đến các section; các card sản phẩm hiển thị thông tin giá bán và chất liệu; biểu mẫu đặt hẹn có đầy đủ các trường nhập liệu cần thiết.

### Nhận xét của sinh viên
- **Điểm đạt yêu cầu:**
  - Bố cục tổng thể cân đối, tính thẩm mỹ sang trọng, màu sắc và typography kết hợp rất hài hòa, phản ánh chuẩn xác tinh thần thời trang cổ điển xa xỉ.
  - Nội dung mô tả sản phẩm bằng tiếng Việt rất trau chuốt, giàu cảm xúc thời trang, hoàn toàn không xuất hiện văn bản rác hay chữ mẫu "Lorem Ipsum".
- **Điểm cần cải thiện:**
  - Cấu trúc HTML chưa đạt chuẩn Semantic tuyệt đối: Vẫn còn lạm dụng thẻ `<div>` thay vì các thẻ ngữ nghĩa; cây phân cấp heading còn lộn xộn (có chỗ nhảy từ H2 sang H4); chưa có thẻ ngữ nghĩa cho các card độc lập.
  - Các biến màu sắc và khoảng cách trong CSS chưa được gom thành Design System hoàn chỉnh trong `:root`; nhiều thuộc tính còn bị hardcode giá trị cố định.
  - Chưa tích hợp hai thư viện hiệu ứng quan trọng theo yêu cầu đề bài là `Animate.css` và `AOS (Animate On Scroll)`.
  - Chưa tối ưu trải nghiệm trên di động (chưa có menu trượt drawer cho mobile), và các form chưa có tính năng kiểm tra dữ liệu đầu vào (validation).

---

## 2. Quá trình tinh chỉnh và giải quyết sự cố

### Lần 1: Chuẩn hóa Semantic HTML5

- **Prompt đã dùng:**
  ```text
  Hãy tái cấu trúc và chuẩn hóa toàn diện file index.html theo đúng tiêu chuẩn Semantic HTML5 và Khả năng tiếp cận Web (W3C & WCAG AA Accessibility). 
  Yêu cầu bắt buộc:
  1. Chỉ sử dụng duy nhất một thẻ <main> cho toàn bộ nội dung chính của trang.
  2. Chỉ có duy nhất một thẻ <h1> tại phần Hero section; toàn bộ cây heading phải theo thứ bậc nghiêm ngặt H1 -> H2 -> H3, tuyệt đối không nhảy cấp.
  3. Sử dụng thẻ <aside> cho thanh thông báo Announcement Bar và các ghi chú trích dẫn phụ.
  4. Sử dụng thẻ <article> cho từng card Bộ sưu tập (Collections) và từng card Sản phẩm (Products).
  5. Sử dụng thẻ <figure> và <figcaption> cho ảnh đại diện nghệ thuật của Hero và khu vực Brand Story.
  6. Sử dụng thẻ <blockquote> và <cite> cho trích dẫn triết lý nghệ thuật tại Philosophy Banner.
  7. Sử dụng thẻ <nav> có aria-label phân biệt rõ ràng cho Header và các cột liên kết ở Footer; sử dụng thẻ <address> cho thông tin liên hệ Salon.
  8. Bổ sung skip-link ở đầu trang, cùng các thuộc tính aria-expanded, aria-controls, aria-modal, aria-hidden trên các phần tử tương tác.
  ```
- **Kết quả AI tạo ra:**
  - AI đã thay thế toàn bộ các khối `div` chung chung bằng các thẻ semantic chuẩn mực: `<aside class="announcement-bar">`, `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article class="product-card">`, `<figure>`, `<figcaption>`, `<blockquote>`, `<cite>`, `<footer>`, `<address>`.
  - Thêm thẻ `<a href="#main-content" class="skip-link">` hỗ trợ phím bấm bỏ qua điều hướng để đến ngay nội dung chính.
  - Bổ sung các thuộc tính trợ năng: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-hidden="true"` cho modal và các biểu tượng SVG trang trí.
- **Nhận xét và tinh chỉnh của sinh viên:**
  - AI đã thực hiện rất tốt các thẻ chính. Tuy nhiên, khi kiểm tra cây tài liệu (Document Outline), tôi phát hiện trong cửa sổ Modal Quick-View, tiêu đề khối thông số đang dùng thẻ `<h4>` ngay sau `<h2>` (nhảy cóc cấp độ H3). Tôi đã chỉnh lại thẻ này thành `<h3>` để đảm bảo chuỗi heading phân cấp tuần tự tuyệt đối (H1 &rarr; H2 &rarr; H3).
  - Tôi cũng bổ sung thêm thẻ `<h2 class="sr-only">` ẩn thị giác cho khu vực Philosophy và Footer Landmark để phần mềm đọc màn hình (Screen Reader) nhận diện đầy đủ phân cấp nội dung mà không làm ảnh hưởng đến giao diện thị giác.

---

### Lần 2: Hoàn thiện CSS Variables và giao diện

- **Prompt đã dùng:**
  ```text
  Hãy tái cấu trúc toàn diện file style.css để xây dựng một Design System hoàn chỉnh sử dụng CSS Custom Properties (CSS Variables) khai báo trong :root.
  Yêu cầu chi tiết:
  1. Khai báo toàn bộ bảng màu thương hiệu: --color-ivory (#F4EFE6), --color-burgundy (#542B2B), --color-espresso (#302820), --color-muted-gold (#B59A72), --color-sand (#E2D5C3), cùng các biến phái sinh (dark, light, alpha).
  2. Thiết lập thang đo kiểu chữ (Typography scale) với font-size fluid sử dụng hàm clamp() cho tiêu đề Hero và Section title; quy định chuẩn font-family (--font-serif, --font-sans), line-height và letter-spacing (tracking).
  3. Xây dựng hệ thống spacing scale từ --space-3xs (4px) đến --space-4xl (128px), cùng các biến border-radius, box-shadow và transition chuẩn luxury.
  4. Triệt tiêu 100% các giá trị màu sắc và khoảng cách hardcoded trong các bộ chọn class; thay thế hoàn toàn bằng hàm var(--...).
  5. Thiết lập bố cục CSS Grid nhiều cột co giãn tự động (auto-fit, minmax) cho Lưới sản phẩm và Footer; Flexbox cho Header, Nav, và các khối thẻ card.
  ```
- **Kết quả AI tạo ra:**
  - File `style.css` được chuẩn hóa với hơn 50 CSS Variables tại `:root`, bao quát từ màu sắc nền, màu chữ, viền kim loại, kích thước chữ co giãn linh hoạt (`clamp()`), đến khoảng cách lề.
  - Lưới sản phẩm được xây dựng bằng `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))` kết hợp `gap: var(--space-xl)`, giúp các thẻ tự động sắp xếp ngay ngắn và thích ứng trên nhiều độ phân giải.
  - Các nút bấm, đường viền ảnh và thẻ card được bổ sung hiệu ứng chuyển động mượt mà với đường cong gia tốc `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Nhận xét và tinh chỉnh của sinh viên:**
  - Hệ thống biến giúp code CSS cực kỳ gọn gàng, có tính module cao và dễ dàng tùy biến giao diện toàn trang chỉ bằng việc thay đổi giá trị trong `:root`.
  - Khi kiểm tra tỷ lệ tương phản màu sắc (Contrast Ratio) theo chuẩn WCAG AA, tôi nhận thấy màu chữ xám phụ trên nền kem Ivory có tỷ lệ tương phản chưa đạt mức 4.5:1. Tôi đã điều chỉnh lại biến `--color-text-muted: #5C5247` và `--color-espresso: #302820` để đảm bảo văn bản hiển thị rõ ràng, sắc nét và thân thiện với mắt người đọc.
  - Tôi bổ sung thêm trạng thái `:focus-visible` với viền kép màu vàng đồng `outline: 2px solid var(--color-muted-gold)` để người dùng điều khiển bằng phím Tab định vị chuẩn xác phần tử đang được chọn.

---

### Lần 3: Tích hợp Animate.css và AOS

- **Prompt đã dùng:**
  ```text
  Tích hợp hai thư viện hiệu ứng Animate.css (v4.1.1) và AOS (v2.3.4) qua hệ thống Cloudflare CDN vào dự án MAISON ÉPOQUE.
  Yêu cầu:
  1. Thêm link stylesheet của Animate.css và AOS vào thẻ <head> của index.html; thêm script AOS trước script.js tại cuối thẻ <body>.
  2. Áp dụng Animate.css cho các phần tử khởi đầu tại Hero Section: hero-badge (animate__fadeInDown), hero-title (animate__fadeInUp), hero-desc và hero-actions (animate__fadeInUp kèm độ trễ animate__delay-1s).
  3. Áp dụng AOS cho các section cuộn trang: data-aos="fade-up", "fade-left", "fade-right", "zoom-in" với hiệu ứng so le (staggered delay) trên các thẻ card bộ sưu tập và sản phẩm.
  4. Khởi tạo AOS trong script.js với cấu hình: duration: 850, once: true, offset: 80, easing: 'ease-out-cubic'.
  5. Đảm bảo tuân thủ tiêu chuẩn Accessibility: Viết media query @media (prefers-reduced-motion: reduce) để vô hiệu hóa toàn bộ chuyển động cho người dùng nhạy cảm thị giác, và thẻ <noscript> hiển thị đầy đủ nội dung nếu người dùng tắt JavaScript.
  ```
- **Kết quả AI tạo ra:**
  - Liên kết CDN được nhúng chính xác với đầy đủ thuộc tính bảo mật `integrity` và `crossorigin`.
  - Khu vực Hero tải lên vô cùng ấn tượng với tiêu đề và huy hiệu xuất hiện nhịp nhàng, trang trọng.
  - Khi cuộn trang, các khối nội dung, hình ảnh xưởng may và từng thẻ sản phẩm xuất hiện mượt mà theo từng nấc cuộn chuột nhờ AOS.
  - Cấu hình `prefers-reduced-motion` được định nghĩa chuẩn xác trong CSS giúp chuyển ngay `animation: none !important` và `transition: none !important` khi hệ điều hành kích hoạt chế độ giảm chuyển động.
- **Thách thức gặp phải:**
  - Khi thu nhỏ trình duyệt xuống màn hình di động (<768px), trang web xuất hiện thanh cuộn ngang khó chịu (horizontal overflow) khiến người dùng có thể kéo trượt trang sang phải tạo khoảng trắng thừa.
  - Nguyên nhân: Các phần tử mang thuộc tính `data-aos="fade-left"` và `data-aos="fade-right"` ban đầu bị đẩy ra ngoài biên màn hình (translate 100px) trước khi cuộn tới, làm tràn khung viewport trên trình duyệt di động.
  - Thêm vào đó, nếu tắt JavaScript trong trình duyệt để thử nghiệm, các phần tử mang `data-aos` bị gán mặc định `opacity: 0` khiến trang web trở nên trống trơn.
- **Cách sửa prompt (Debug prompt):**
  ```text
  Trang web đang gặp lỗi xuất hiện thanh cuộn ngang trên điện thoại di động do hiệu ứng fade-left/fade-right của AOS làm tràn khung nhìn viewport, và khi tắt JavaScript thì nội dung bị ẩn mất do opacity: 0. 
  Hãy cung cấp giải pháp khắc phục triệt để:
  1. Thêm overflow-x: hidden cho các container cha, body và html mà không làm hỏng thuộc tính position: sticky của Header.
  2. Viết khối thẻ <noscript> trong <head> để gán [data-aos] { opacity: 1 !important; transform: none !important; } khi tắt JS.
  3. Trên màn hình mobile (max-width: 768px), tự động chuyển đổi các hiệu ứng fade ngang thành fade-up để triệt tiêu nguy cơ tràn màn hình.
  ```
  - **Kết quả kiểm tra:** Lỗi cuộn ngang trên điện thoại được loại bỏ 100%. Thanh điều hướng vẫn bám dính (sticky) hoàn hảo khi cuộn trang; khi tắt JavaScript, toàn bộ hình ảnh và bài viết vẫn hiển thị rõ ràng, đạt chuẩn phát triển tăng cường lũy tiến (Progressive Enhancement).

---

### Lần 4: Kiểm tra responsive và tương tác

- **Prompt đã dùng:**
  ```text
  Tối ưu hóa giao diện đa thiết bị (Responsive Design) và hoàn thiện các tính năng tương tác người dùng bằng Vanilla JavaScript thuần (không dùng thư viện ngoài).
  Yêu cầu:
  1. Responsive: Thiết lập 3 dải breakpoint: Desktop (>1024px), Tablet (768px - 1024px), Mobile (<768px và hỗ trợ màn hình siêu nhỏ 320px).
  2. Mobile Navigation Drawer: Nút hamburger đóng mở menu trượt từ cạnh phải, hiệu ứng mờ backdrop, khóa cuộn trang (scroll-lock) khi mở menu, tự động đóng khi nhấn phím ESC hoặc nhấn vào liên kết điều hướng.
  3. Bộ lọc sản phẩm (Dynamic Category Filtering): Lọc danh mục theo tab (Tất cả, Măng-tô, Âu phục, Nhung lụa) bằng JavaScript không tải lại trang, có hiệu ứng chuyển đổi mượt mà.
  4. Quick-View Modal: Nhấn "Xem Chi Tiết" mở hộp thoại Modal hiển thị ảnh lớn, chất liệu, thông số may đo; có thể đóng bằng nút X, phím ESC hoặc bấm ra ngoài vùng dialog.
  5. Kết nối thông minh: Nhấn nút "Thử Đồ" tại card hoặc modal sẽ tự động chọn dịch vụ tương ứng trong Form Đặt Hẹn VIP và cuộn mượt xuống khu vực Salon.
  ```
- **Kết quả AI tạo ra:**
  - Giao diện đáp ứng xuất sắc trên cả 3 dải thiết bị: Menu drawer di động trượt ra mềm mại với nút đóng X tiện lợi; lưới sản phẩm tự co thành 1 cột trên điện thoại, 2 cột trên máy tính bảng và 3 cột trên máy tính để bàn.
  - Bộ lọc sản phẩm xử lý mượt mà bằng JavaScript thuần thông qua thuộc tính `data-category`, ẩn hiện các card sản phẩm bằng class CSS có animation dịu mắt.
  - Modal Quick-View lấy dữ liệu trực tiếp từ đối tượng `PRODUCTS_DATA`, hiển thị chi tiết từ xuất xứ vải len Cashmere đến kỹ thuật may dựng ngực Full Canvas.
- **Nhận xét của sinh viên:**
  - Tất cả các nút bấm trên website đều có phản hồi thực tế và hữu ích (không có nút bấm giả "dead-button").
  - Tôi phát hiện trên trình duyệt Safari iOS, khi mở Modal Quick-View, người dùng lướt ngón tay vẫn làm trôi trang web phía sau nền (hiện tượng scroll leakage). Tôi đã bổ sung thêm dòng lệnh `document.body.classList.add('modal-open')` kết hợp CSS `body.modal-open { overflow: hidden; touch-action: none; }` để cố định hoàn toàn trang nền khi modal đang mở, và gỡ bỏ class này khi modal đóng lại.

---

### Lần 5: Kiểm thử và hoàn thiện

- **Prompt đã dùng (Code Review & Audit Prompt):**
  ```text
  Thực hiện đợt rà soát và kiểm thử chất lượng mã nguồn toàn diện (Final Code Review & Quality Audit) cho dự án MAISON ÉPOQUE trước khi triển khai chính thức.
  Yêu cầu kiểm tra:
  1. Kiểm tra toàn bộ 12 URL hình ảnh từ Unsplash: Đảm bảo link hoạt động ổn định (HTTP 200 OK), ảnh đúng tỷ lệ và phong cách thời trang cổ điển sang trọng, tối ưu tham số nén ảnh để tải nhanh.
  2. Viết cơ chế dự phòng hình ảnh (Fallback Vector SVG): Nếu người dùng bị mất kết nối mạng hoặc link ảnh bị lỗi, tự động thay thế bằng hình ảnh vector SVG độc bản của MAISON ÉPOQUE với hoa văn monogram sang trọng.
  3. Kiểm tra tính hợp lệ dữ liệu biểu mẫu (Form Validation): Viết hàm kiểm tra số điện thoại di động Việt Nam (10 chữ số, các đầu số 03, 05, 07, 08, 09), kiểm tra định dạng email và ngày hẹn; hiển thị thông báo lỗi trực quan dưới từng trường và xuất thông báo Toast Notification trang trọng khi gửi thành công.
  4. Phòng ngừa hiện tượng giật giật khung hình (CLS - Cumulative Layout Shift): Khai báo rõ width, height và aspect-ratio cho tất cả các thẻ <img>.
  5. Cung cấp hướng dẫn đóng gói Git và xuất bản website lên GitHub Pages.
  ```
- **Lỗi phát hiện:**
  1. Hai đường link ảnh ban đầu có kích thước gốc quá lớn (độ phân giải trên 4000px, dung lượng >3MB mỗi ảnh), làm giảm tốc độ tải trang ban đầu (FCP) trên mạng 3G/4G di động.
  2. Biểu mẫu đặt hẹn ban đầu chỉ dựa vào thuộc tính `required` của trình duyệt, người dùng nhập số điện thoại chứa ký tự chữ cái hoặc chuỗi ngắn (như "abc" hoặc "123") thì form vẫn gửi đi được.
  3. Một số thẻ `<img>` chưa có cặp thuộc tính `width` và `height` trong HTML, khiến trình duyệt chưa xác định được khung chứa trước khi tải ảnh xong, tạo ra độ dịch chuyển bố cục (CLS > 0.1).
  4. Trang web chưa có nút quay về đầu trang (Back to top), gây bất tiện khi người dùng cuộn xuống dưới cùng của trang dài.
- **Cách khắc phục:**
  1. Tối ưu lại 100% các URL ảnh Unsplash với bộ tham số chuẩn hóa: `?auto=format&fit=crop&w=800&q=80` (giảm dung lượng xuống dưới 120KB/ảnh nhưng vẫn giữ trọn vẹn độ sắc nét trên màn hình Retina).
  2. Xây dựng hàm kiểm tra dữ liệu bằng biểu thức chính quy (Regex):
     `const phoneRegex = /^(0|84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;`
     Tích hợp sự kiện `input` và `blur` để báo lỗi đỏ tức thì khi người dùng nhập sai, và hiển thị thông báo Toast Notification trang nhã khi gửi thành công.
  3. Khai báo tường minh `width="800"` và `height="1067"` trên tất cả thẻ `<img>`, đồng thời cấu hình `aspect-ratio` trong CSS để triệt tiêu hoàn toàn Layout Shift (CLS = 0).
  4. Bổ sung nút bấm nổi "Back to Top" ở góc dưới bên phải, tự động hiện ra khi cuộn qua 450px và cuộn mượt về đầu trang khi nhấn.
  5. Bổ sung script bắt lỗi `onerror` trên toàn bộ thẻ ảnh để tự động nạp ảnh vector SVG sang trọng của Maison Époque nếu có sự cố rớt mạng.
- **Trạng thái cuối cùng:**
  - [x] Đạt chuẩn 100% W3C HTML5 Validated (1 thẻ `main`, 1 thẻ `h1`, không nhảy cấp heading).
  - [x] Hệ thống CSS Variables hoạt động xuyên suốt, không còn màu sắc hay kích thước hardcoded.
  - [x] Hiệu ứng Animate.css và AOS kích hoạt trơn tru, không gây giật lag hay tràn khung ngang trên mobile.
  - [x] 0 lỗi trong Developer Console (F12) trên cả Chrome, Edge, Firefox và Safari.
  - [x] Triển khai thành công trên GitHub Pages tại địa chỉ:  
    👉 **`https://talephitruong.github.io/Truong_TaLePhi_125001362/`**

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 3.1. AI đã giúp tiết kiệm thời gian ở phần nào?

AI hỗ trợ tạo khung HTML, đề xuất hệ thống CSS Variables, xây dựng bố cục bằng Flexbox/Grid và gợi ý cách tích hợp các thư viện animation. Điều này giúp tôi tập trung nhiều hơn vào việc đánh giá giao diện, điều chỉnh thiết kế và kiểm tra chất lượng sản phẩm.

### 3.2. Bài học rút ra khi đặt prompt

Tôi nhận thấy một prompt hiệu quả cần nêu rõ vai trò của AI, mục tiêu, yêu cầu kỹ thuật, phong cách thiết kế và tiêu chí đầu ra. Việc chia nhiệm vụ thành nhiều bước giúp dễ kiểm soát code và phát hiện lỗi hơn so với yêu cầu AI xây dựng tất cả trong một lần.

### 3.3. Hạn chế của Vibe Coding

Code do AI tạo ra vẫn cần được kiểm tra. AI có thể bỏ sót yêu cầu, tạo liên kết không hợp lệ hoặc tích hợp thư viện chưa chính xác. Vì vậy, người phát triển cần hiểu cấu trúc HTML, CSS, JavaScript và chủ động kiểm thử trước khi xuất bản.

### 3.4. Kết luận

Thông qua dự án MAISON ÉPOQUE, tôi thực hành cách chuyển yêu cầu thiết kế thành prompt có cấu trúc, sử dụng AI để hỗ trợ lập trình và tinh chỉnh sản phẩm theo các tiêu chí kỹ thuật. Tôi hiểu rằng Vibe Coding không chỉ là tạo code bằng AI mà còn bao gồm việc đánh giá, kiểm thử và chịu trách nhiệm về sản phẩm cuối cùng.
