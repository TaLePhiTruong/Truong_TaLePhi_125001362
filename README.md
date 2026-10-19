# MAISON ÉPOQUE — HAUTE VINTAGE COUTURE LANDING PAGE

> **Slogan:** *Elegance Never Fades*  
> **Brand Identity:** Vintage Classic Luxury &bull; French Quiet Luxury &bull; Editorial Haute Tailoring (Paris &bull; Saïgon)  
> **Dự án:** Bài thi môn Thiết kế Web  
> **Công nghệ:** HTML5 Semantic, CSS3 Custom Properties (Variables), CSS Grid & Flexbox, Vanilla JavaScript, AOS (Animate on Scroll) & Animate.css.

---

## 1. TỔNG QUAN HỆ THỐNG HÌNH ẢNH (IMAGE AUDIT & ASSETS REGISTRY)

Toàn bộ hình ảnh trong dự án **MAISON ÉPOQUE** được tuyển chọn kỹ lưỡng theo định hướng phong cách **French Quiet Luxury & Vintage Editorial Fashion** (thập niên 1950 &ndash; 1960). 

- **Cam kết bản quyền Logo:** Logo thương hiệu MAISON ÉPOQUE là **100% Typography thuần túy (HTML/CSS)** với kiểu chữ *Cormorant Garamond* và *Plus Jakarta Sans*, hoàn toàn không sử dụng hình ảnh hay logo của bất kỳ thương hiệu nào khác (như Ralph Lauren, Gucci, CELINE, Chanel,...).
- **Giấy phép hình ảnh:** Toàn bộ ảnh được cấp phép theo **[Unsplash License](https://unsplash.com/license)** (Miễn phí sử dụng cho cả mục đích thương mại và phi thương mại, được phép tùy biến, không yêu cầu xin phép trước).
- **Trạng thái kết nối:** 100% tất cả 12 URL ảnh đã được xác minh qua giao thức mạng thực tế (HTTP HEAD Request) và trả về trạng thái **HTTP 200 OK**, định dạng chuẩn `image/jpeg`.

---

## 2. BẢNG CHI TIẾT DANH MỤC HÌNH ẢNH & THUỘC TÍNH TỐI ƯU

| STT | Vị Trí / Thành Phần | ID Unsplash | Kích Thước (W x H) | Tỷ Lệ (Aspect Ratio) | Object Position | Thuộc Tính Tải Tối Ưu | Nội Dung Alt / Mô Tả Ngữ Nghĩa | Nhiếp Ảnh Gia (Unsplash Credit) |
|---|---|---|---|---|---|---|---|---|
| **01** | **Hero Section** (Look 01) | `photo-1515886657613-9f3515b0c78f` | 1000 &times; 1250 px | 4 : 5 | `center 20%` | `loading="eager"`<br>`fetchpriority="high"`<br>`decoding="async"` | Người mẫu diện trang phục măng-tô len Cashmere và váy vintage cổ điển phong cách Pháp của MAISON ÉPOQUE | Dom Hill (@domhill) |
| **02** | **Collection 01** (L'Automne Parisien) | `photo-1539109136881-3be0616acf4b` | 800 &times; 1000 px | 4 : 5 | `center 22%` | `loading="lazy"`<br>`decoding="async"` | Bộ sưu tập L'Automne Parisien với áo măng-tô Cashmere màu cát dạo bước bên đại lộ Saint-Germain | Tamara Bellis (@tamarbellis) |
| **03** | **Collection 02** (Heritage Tailoring) | `photo-1507679799987-c73779587ccf` | 800 &times; 1000 px | 4 : 5 | `center 22%` | `loading="lazy"`<br>`decoding="async"` | Bộ sưu tập Heritage Tailoring với âu phục may đo thủ công chuẩn mực Savile Row | Hunters Race (@huntersrace) |
| **04** | **Collection 03** (Soirée & Velours) | `photo-1490481651871-ab68de25d43d` | 800 &times; 1000 px | 4 : 5 | `center 22%` | `loading="lazy"`<br>`decoding="async"` | Bộ sưu tập Soirée & Velours với váy đầm dạ hội nhung đen tuyền sang trọng | Pete Bellis (@petebellis) |
| **05** | **Sản phẩm 01** (Măng-tô Cashmere Marais) | `photo-1544441893-675973e31985` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Măng-tô Cashmere Dạ Lạc Đà Le Marais phom dài cổ điển | Clem Onojeghuo (@clemono) |
| **06** | **Sản phẩm 02** (Blazer Tweed Saint-Germain) | `photo-1550614000-4895a10e1bfd` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Blazer Tweed Cổ Điển Saint-Germain tông màu cát dệt thoi | Laura Chouette (@laurachouette) |
| **07** | **Sản phẩm 03** (Suit 3 Mảnh Le Gentilhomme) | `photo-1594938298603-c8148c4dae35` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Bộ Suit 3 Mảnh Le Gentilhomme may đo Full-Canvas vải Loro Piana | Nimble Made (@nimblemade) |
| **08** | **Sản phẩm 04** (Đầm Dạ Hội La Nuit Étoilée) | `photo-1566174053879-31528523f8ae` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Đầm Dạ Hội Nhung La Nuit Étoilée cổ thuyền quyến rũ | Tamara Bellis (@tamarbellis) |
| **09** | **Sản phẩm 05** (Sơ Mi Lụa Poète Romantique) | `photo-1602810318383-e386cc2a3ccf` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Áo sơ mi lụa tơ tằm Poète Romantique tay phồng kiểu Pháp cổ điển | Nimble Made (@nimblemade) |
| **10** | **Sản phẩm 06** (Măng-tô Dạ Nanh Sói Vendôme) | `photo-1578587018452-892bacefd3f2` | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Áo khoác măng-tô dạ họa tiết răng sói Houndstooth Vendôme | Tamara Bellis (@tamarbellis) |
| **11** | **Brand Story** (Atelier Tailor Crafting) | `photo-1598554747436-c9293d6a588f` | 900 &times; 1125 px | 4 : 5 | `center center` | `loading="lazy"`<br>`decoding="async"` | Nghệ nhân may đo bậc thầy đang tỉ mỉ đính từng đường kim mũi chỉ tại xưởng may MAISON ÉPOQUE | Khunatorn Chidchum (@khunatorn) |
| **12** | **Brand Story** (Chi tiết kéo &amp; vải len) | `photo-1558769132-cb1aea458c5e` | 700 &times; 700 px | 1 : 1 | `center center` | `loading="lazy"`<br>`decoding="async"` | Kéo may cổ điển bằng đồng thau và cuộn chỉ len tơ tằm thượng hạng | Laura Chouette (@laurachouette) |
| **13** | **Quick-View Modal** (Dynamic Dialog) | *Đồng bộ động từ Sản phẩm* | 800 &times; 1067 px | 3 : 4 | `center 20%` | `loading="lazy"`<br>`decoding="async"` | Cập nhật tự động theo tên sản phẩm: *"Chi tiết tuyệt tác: [Tên Sản Phẩm] — MAISON ÉPOQUE"* | *Theo sản phẩm* |

---

## 3. CÁC GIẢI PHÁP KỸ THUẬT NÂNG CAO ĐÃ TRIỂN KHAI

### 3.1. Chống Layout Shift Tuyệt Đối (CLS = 0)
- Mọi thẻ `<img>` đều được khai báo chính xác cặp thuộc tính `width` và `height`.
- Các container bao bọc (`.hero-image-frame`, `.collection-image-wrapper`, `.product-media`, `.story-img-main-wrap`, `.story-img-accent-wrap`, `.modal-media`) đều được xác định rõ `aspect-ratio` (4/5, 3/4, 1/1) trong CSS.
- Nhờ đó, trình duyệt phân bổ chính xác hộp kích thước trước khi tải ảnh về, không bao giờ bị giật trang hay xô lệch layout khi người dùng cuộn nhanh.

### 3.2. Tối Ưu Hóa Tốc Độ Tải Trang & Điểm LCP (Largest Contentful Paint)
- **Hero Image (LCP Image):** Sử dụng `loading="eager"`, `fetchpriority="high"`, và `decoding="async"` giúp trình duyệt tải và render bức ảnh quan trọng nhất ngay trong đợt nạp mạng đầu tiên.
- **Below-the-fold Images:** Toàn bộ 11 ảnh còn lại đều sử dụng `loading="lazy"` kết hợp `decoding="async"` giúp tiết kiệm băng thông và tối ưu CPU khi giải mã hình ảnh.
- **Query Parameters từ Unsplash CDN:** Dùng `?auto=format&fit=crop&w=...&q=80` giúp máy chủ CDN tự động nén và phục vụ định dạng WebP/AVIF hiện đại nhất phù hợp với thiết bị truy cập.

### 3.3. Tinh Chỉnh Khung Hình & Tiêu Cự (object-fit & object-position)
- Tất cả ảnh đều áp dụng `object-fit: cover` để ảnh lấp đầy khung tỉ lệ vàng mà không bị méo tỷ lệ (distortion).
- Đối với ảnh người mẫu thời trang: Áp dụng `object-position: center 20%` hoặc `center 22%` để đảm bảo phần cổ áo, ve áo, gương mặt và phom dáng trang phục luôn hiển thị hoàn hảo ở trung tâm thị giác, không bao giờ bị cắt cụt đầu hay méo khi co giãn trên màn hình từ 320px đến Desktop 4K.
- Đối với ảnh xưởng may và dụng cụ: Áp dụng `object-position: center center`.

### 3.4. Hệ Thống Nền Dự Phòng (Skeleton Gradient) & Fallback Error SVG Độc Bản
- Khi ảnh đang tải qua mạng chậm: Nền bao bọc hiển thị hiệu ứng `radial-gradient(circle, var(--color-sand-light), var(--color-sand))` màu be cát ấm áp, tiệp tông màu hoàng gia của website.
- Khi gặp sự cố mạng (offline, chặn kết nối hoặc 404): Trình duyệt không hiển thị biểu tượng vỡ ảnh thô kệch. JavaScript tự động bắt sự kiện `onerror` và nạp một bức ảnh Vector SVG Data-URI độc bản của thương hiệu MAISON ÉPOQUE với dòng slogan sang trọng *"Elegance Never Fades &bull; EDITORIAL ARCHIVE"*.

---

## 4. HƯỚNG DẪN KIỂM THỬ TRỰC TIẾP
1. Mở file `index.html` trực tiếp trên bất kỳ trình duyệt web hiện đại nào (Chrome, Safari, Firefox, Edge).
2. Kiểm tra Console: Hoàn toàn không có bất kỳ thông báo lỗi hoặc cảnh báo hình ảnh nào.
3. Thử nghiệm ngắt kết nối mạng hoặc nhập sai URL ảnh: Hệ thống sẽ tự động chuyển sang đồ họa Fallback SVG sang trọng.
