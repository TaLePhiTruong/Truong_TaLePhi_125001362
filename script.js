/**
 * MAISON ÉPOQUE — JavaScript Logic (script.js)
 * High-end Vintage Luxury Fashion Landing Page
 * Features:
 *   - AOS Animation Initialization
 *   - Sticky Header & Scroll Spy Navigation
 *   - Mobile Drawer Navigation
 *   - Dynamic Category Filtering
 *   - Accessible Product Quick-View Modal
 *   - VIP Appointment Booking & Real-time Validation
 *   - Newsletter Privé Club Subscription
 *   - Toast Notification System
 *   - Back-to-Top Button
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA DICTIONARY FOR SIGNATURE PRODUCTS
  // ==========================================================================
  const PRODUCTS_DATA = {
    'prod-1': {
      id: 'prod-1',
      title: 'Măng-tô Cashmere Dạ Lạc Đà "Le Marais"',
      category: 'ÁO MĂNG-TÔ',
      price: '18.500.000 ₫',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      description: 'Lấy cảm hứng từ góc phố lịch sử Le Marais tại Paris, chiếc áo măng-tô dáng dài hai hàng khuy được may từ 100% dạ Cashmere dệt thoi mật độ cao. Thiết kế ve cổ bản rộng kinh điển của thập niên 1960 mang lại phong thái quý tộc và khả năng giữ ấm vượt trội.',
      specs: [
        'Chất liệu chính: 100% Cashmere nguyên chất từ Mông Cổ',
        'Lớp lót trong: Lụa Habotai cao cấp dệt hoa văn chìm',
        'Phụ liệu: Nút sừng bò tự nhiên được chạm khắc thủ công',
        'Kỹ thuật: Khâu tay đột chỉ pick-stitching viền ve áo',
        'Bảo hành: Miễn phí bảo dưỡng bề mặt dạ trọn đời tại Salon'
      ]
    },
    'prod-2': {
      id: 'prod-2',
      title: 'Blazer Tweed Cổ Điển "Saint-Germain"',
      category: 'BLAZER TWEED',
      price: '12.800.000 ₫',
      image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=80',
      description: 'Hiện thân của vẻ đẹp học thức thanh lịch vùng tả ngạn sông Seine. Chiếc áo blazer dáng xuông nhẹ nhàng với sắc len Tweed pha trộn giữa màu cát sa mạc và sợi chỉ vàng kim tuyến chìm, tạo hiệu ứng thị giác sang trọng khi chuyển động.',
      specs: [
        'Chất liệu: Len Tweed lông cừu xứ Scotland dệt thoi truyền thống',
        'Phom dáng: Cổ áo ve nhọn Notch Lapel thanh thoát',
        'Khuy áo: Đồng đúc phủ patina màu vàng cổ (Antique Brass)',
        'Ứng dụng: Hoàn hảo cho tiết trời thu đông và tiệc trà chiều'
      ]
    },
    'prod-3': {
      id: 'prod-3',
      title: 'Bộ Suit 3 Mảnh "Le Gentilhomme"',
      category: 'BESPOKE SUIT',
      price: '26.000.000 ₫',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
      description: 'Bộ âu phục 3 món (Áo khoác, Áo gile cổ chữ V và Quần cạp cao xếp ly kép) được thiết kế theo phom dáng Edwardian chuẩn mực. Cấu trúc Full Canvas lông ngựa tự nhiên ôm trọn chuyển động cơ thể theo thời gian.',
      specs: [
        'Vải may: Len Super 150s Loro Piana nhập khẩu từ Ý',
        'Cấu trúc: May dựng Full-Canvas thủ công hơn 60 giờ làm việc',
        'Quần: Cạp cao 5cm kiểu Gurkha cổ điển có đai chỉnh eo',
        'Dịch vụ đi kèm: 3 lần thử phom (fittings) cá nhân hóa'
      ]
    },
    'prod-4': {
      id: 'prod-4',
      title: 'Đầm Dạ Hội Nhung "La Nuit Étoilée"',
      category: 'ĐẦM DẠ HỘI',
      price: '16.200.000 ₫',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
      description: 'Lấy cảm hứng từ bầu trời đêm huyền bí của Paris, tác phẩm được tạo nên từ nhung tuyết dệt tơ lụa Bảo Lộc mềm mượt. Thiết kế cổ thuyền quyến rũ cùng chi tiết xẻ lưng tinh tế tôn vinh trọn vẹn đường nét đài các của quý cô.',
      specs: [
        'Vải chính: Nhung tơ tằm dệt kim sa chìm cao cấp',
        'Lót trong: Lụa satin mềm mại kháng tĩnh điện',
        'Chi tiết: Đính kết thủ công pha lê Swarovski tiệp màu',
        'Kỹ thuật: Kỹ thuật xếp nếp draping trực tiếp trên ma-nơ-canh'
      ]
    },
    'prod-5': {
      id: 'prod-5',
      title: 'Sơ Mi Lụa Rũ "Poète Romantique"',
      category: 'SƠ MI LỤA TƠ TẰM',
      price: '6.900.000 ₫',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      description: 'Chiếc áo sơ mi mang đậm âm hưởng thi ca lãng mạn thế kỷ 19. Tay áo bồng nhẹ kiểu Giám mục (Bishop sleeves) với cổ thắt nơ Lavallière có thể tháo rời tùy biến linh hoạt theo phong cách quý tộc hoặc thanh lịch hiện đại.',
      specs: [
        'Chất liệu: 100% Tơ tằm dệt tay Mulberry Silk 22 Momme',
        'Khuy áo: Xà cừ tự nhiên dập vân chìm biểu tượng thương hiệu',
        'Đường may: Đường viền Pháp (French seams) mịn màng không gờ',
        'Bảo quản: Giặt khô chuyên nghiệp hoặc giặt tay với sữa tắm thảo mộc'
      ]
    },
    'prod-6': {
      id: 'prod-6',
      title: 'Măng-tô Dạ Nanh Sói "Vendôme"',
      category: 'MĂNG-TÔ HOUNDSTOOTH',
      price: '19.800.000 ₫',
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
      description: 'Họa tiết răng sói Houndstooth nhuyễn hai màu kem và đen espresso cổ điển. Cắt may dạng phom A-line kinh điển thập niên 50, mang lại vẻ quyền lực mà vẫn vô cùng duyên dáng khi rảo bước trên phố.',
      specs: [
        'Chất liệu: Len Merino 750gsm dệt Jacquard kháng gió',
        'Cổ áo: Cổ lật biến tấu ve nhọn có khuy cài gió ẩn',
        'Túi áo: Hai túi cơi sâu lót nỉ nhung giữ ấm đôi tay',
        'Xuất xứ: Dệt tại xưởng di sản vùng Lyon, Pháp'
      ]
    }
  };

  // ==========================================================================
  // 2. KHỞI TẠO AOS (ANIMATE ON SCROLL) VỚI CƠ CHẾ DỰ PHÒNG AN TOÀN
  // ==========================================================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 50,
      // Tự động vô hiệu hóa nếu người dùng bật chế độ giảm tải chuyển động
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  } else {
    // Dự phòng an toàn: nếu AOS CDN gặp lỗi tải hoặc bị chặn,
    // ép hiển thị 100% tất cả phần tử [data-aos] để nội dung không bị biến mất
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // ==========================================================================
  // 3. STICKY HEADER & SCROLL SPY ACTIVE LINK
  // ==========================================================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main > section[id]');

  const handleScrollEffects = () => {
    // Thêm bóng đổ cho header khi cuộn
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy: highlight menu hiện tại
    const scrollPosition = window.scrollY + 160;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects(); // Chạy ngay khi tải trang

  // ==========================================================================
  // 4. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const primaryNav = document.getElementById('primaryNavigation');

  const openMobileNav = () => {
    primaryNav.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền
  };

  const closeMobileNav = () => {
    primaryNav.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileNav);
  }

  // Đóng khi click vào link điều hướng trên mobile
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMobileNav();
      }
    });
  });

  // Đóng khi click ra bên ngoài bảng menu di động
  document.addEventListener('click', (e) => {
    if (primaryNav.classList.contains('active') && 
        !primaryNav.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Tự động đóng menu và khôi phục thanh cuộn nếu người dùng đổi kích thước cửa sổ lên desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && primaryNav.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Tương tác Logo: Cuộn mượt mà về đầu trang
  document.querySelectorAll('.brand-logo').forEach(logo => {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.innerWidth <= 768 && primaryNav.classList.contains('active')) {
        closeMobileNav();
      }
      if (history.pushState) {
        history.pushState(null, null, '#hero');
      }
    });
  });

  // Tương tác dịch vụ Bespoke ở chân trang: Tự động điền dịch vụ vào form đặt lịch hẹn
  document.querySelectorAll('a[data-service]').forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceType = link.getAttribute('data-service');
      const serviceName = link.textContent.trim();
      const clientNote = document.getElementById('clientNote');
      const clientService = document.getElementById('clientService');

      if (clientNote) {
        clientNote.value = `Quý khách quan tâm đến dịch vụ: "${serviceName}". Kính nhờ chuyên viên tư vấn chi tiết.`;
      }
      if (clientService) {
        if (serviceType === 'couture-gown') {
          clientService.value = 'couture-gown';
        } else if (serviceType === 'bespoke-suit') {
          clientService.value = 'bespoke-suit';
        } else {
          clientService.value = 'wardrobe-consult';
        }
      }
    });
  });

  // ==========================================================================
  // 5. PRODUCT CATEGORY FILTER TABS
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  const filterProducts = (category) => {
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Cập nhật lại AOS nếu cần
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const category = btn.getAttribute('data-category');
      filterProducts(category);
    });
  });

  // Liên kết từ các thẻ Collection Cards xuống đúng Filter
  const collectionActionLinks = document.querySelectorAll('.collection-action[data-filter]');
  collectionActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetFilter = link.getAttribute('data-filter');
      const matchingBtn = document.querySelector(`.filter-btn[data-category="${targetFilter}"]`);
      if (matchingBtn) {
        matchingBtn.click();
      }
    });
  });

  // ==========================================================================
  // 6. ACCESSIBLE PRODUCT QUICK-VIEW MODAL
  // ==========================================================================
  const productModal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalBookBtn = document.getElementById('modalBookBtn');

  let activeProductId = null;
  let previousActiveElement = null;

  const openProductModal = (productId) => {
    const data = PRODUCTS_DATA[productId];
    if (!data) return;

    activeProductId = productId;
    previousActiveElement = document.activeElement;

    // Đổ dữ liệu vào modal
    modalImage.src = data.image;
    modalImage.alt = `Chi tiết tuyệt tác: ${data.title} — MAISON ÉPOQUE`;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalPrice.textContent = data.price;
    modalDesc.textContent = data.description;

    // Render danh sách đặc tính
    modalSpecsList.innerHTML = '';
    data.specs.forEach(spec => {
      const li = document.createElement('li');
      li.textContent = spec;
      modalSpecsList.appendChild(li);
    });

    // Mở modal
    productModal.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Đặt focus vào nút close
    setTimeout(() => {
      modalCloseBtn.focus();
    }, 100);
  };

  const closeProductModal = () => {
    productModal.classList.remove('active');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  };

  // Lắng nghe sự kiện click nút xem chi tiết trên từng card
  document.querySelectorAll('.btn-quick-view, .btn-product-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-product-id');
      if (btn.classList.contains('btn-product-order')) {
        // Nút Thử Đồ: Điền trước vào Form Đặt Hẹn và cuộn xuống
        fillAppointmentProduct(prodId);
      } else {
        openProductModal(prodId);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProductModal);

  // Đóng khi click ngoài backdrop
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  // Đóng bằng phím ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && productModal.classList.contains('active')) {
      closeProductModal();
    }
  });

  // Nút đặt lịch từ bên trong Modal
  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      const currentId = activeProductId;
      closeProductModal();
      fillAppointmentProduct(currentId);
    });
  }

  // Hàm điền sản phẩm vào form và cuộn xuống form đặt hẹn
  const fillAppointmentProduct = (productId) => {
    const data = PRODUCTS_DATA[productId];
    const appointmentSection = document.getElementById('appointment');
    const clientNote = document.getElementById('clientNote');
    const clientService = document.getElementById('clientService');

    if (data && clientNote) {
      clientNote.value = `Quý khách quan tâm và muốn thử trước tác phẩm: "${data.title}" (Giá tham khảo: ${data.price}).`;
      if (productId === 'prod-3') {
        clientService.value = 'bespoke-suit';
      } else if (productId === 'prod-4') {
        clientService.value = 'couture-gown';
      } else {
        clientService.value = 'ready-to-wear';
      }
    }

    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const clientNameInput = document.getElementById('clientName');
        if (clientNameInput) clientNameInput.focus();
      }, 600);
    }
  };

  // ==========================================================================
  // 7. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, type = 'gold') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'burgundy' ? 'toast-burgundy' : ''}`;
    toast.setAttribute('role', 'alert');

    toast.innerHTML = `
      <span style="color: var(--color-muted-gold); font-size: 1.1rem; line-height: 1;">✦</span>
      <div style="flex-grow: 1;">${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Tự động xóa sau 5 giây
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 5000);
  };

  // ==========================================================================
  // 8. APPOINTMENT FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const appointmentForm = document.getElementById('appointmentForm');

  if (appointmentForm) {
    // Tự động gán ngày tối thiểu là ngày hôm nay
    const dateInput = document.getElementById('clientDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Tên
      const nameInput = document.getElementById('clientName');
      const nameError = document.getElementById('nameError');
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Vui lòng cung cấp họ và tên của Quý khách.';
        nameInput.style.borderColor = '#a82424';
        isValid = false;
      } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '';
      }

      // 2. Số điện thoại (kiểm tra regex số điện thoại Việt Nam)
      const phoneInput = document.getElementById('clientPhone');
      const phoneError = document.getElementById('phoneError');
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      const cleanPhone = phoneInput.value.replace(/\s+/g, '');

      if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
        phoneError.textContent = 'Số điện thoại chưa hợp lệ (Ví dụ: 0901234567).';
        phoneInput.style.borderColor = '#a82424';
        isValid = false;
      } else {
        phoneError.textContent = '';
        phoneInput.style.borderColor = '';
      }

      // 3. Salon
      const salonInput = document.getElementById('clientSalon');
      const salonError = document.getElementById('salonError');
      if (!salonInput.value) {
        salonError.textContent = 'Vui lòng chọn Salon đón tiếp.';
        salonInput.style.borderColor = '#a82424';
        isValid = false;
      } else {
        salonError.textContent = '';
        salonInput.style.borderColor = '';
      }

      // 4. Ngày hẹn
      const dateError = document.getElementById('dateError');
      if (!dateInput.value) {
        dateError.textContent = 'Vui lòng chọn ngày Quý khách muốn ghé thăm.';
        dateInput.style.borderColor = '#a82424';
        isValid = false;
      } else {
        dateError.textContent = '';
        dateInput.style.borderColor = '';
      }

      if (isValid) {
        const clientName = nameInput.value.trim();
        const salonName = salonInput.options[salonInput.selectedIndex].text;

        // Giả lập trạng thái gửi
        const submitBtn = document.getElementById('btnSubmitAppointment');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang tiếp nhận...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Xác Nhận Lịch Hẹn Riêng';
          appointmentForm.reset();

          showToast(
            `Kính gửi Quý khách <strong>${clientName}</strong>, MAISON ÉPOQUE đã ghi nhận lịch hẹn tại <em>${salonName}</em>. Concierge sẽ liên hệ xác nhận trong 30 phút.`,
            'burgundy'
          );
        }, 800);
      }
    });
  }

  // ==========================================================================
  // 9. VIP NEWSLETTER SUBSCRIPTION
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterError = document.getElementById('newsletterError');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        newsletterError.textContent = 'Vui lòng nhập địa chỉ email hợp lệ.';
        newsletterEmail.style.borderColor = '#a82424';
      } else {
        newsletterError.textContent = '';
        newsletterEmail.style.borderColor = '';

        newsletterEmail.value = '';
        showToast(
          'Hân hạnh chào đón Quý khách gia nhập câu lạc bộ <strong>Époque Privé</strong>. Thư mời và ấn bản Lookbook đang trên đường tới hộp thư của Quý khách.',
          'gold'
        );
      }
    });
  }

  // ==========================================================================
  // 10. BACK TO TOP BUTTON
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 11. IMAGE ERROR FALLBACK SYSTEM (EDITORIAL BRANDED SVG)
  // ==========================================================================
  const handleImageErrors = () => {
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
      img.addEventListener('error', function () {
        if (this.dataset.hasErrorFallback) return;
        this.dataset.hasErrorFallback = 'true';

        const width = this.getAttribute('width') || '800';
        const height = this.getAttribute('height') || '1000';

        // Thay thế bằng SVG thanh lịch mang nhận diện thương hiệu MAISON ÉPOQUE
        this.src = `data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22${width}%22%20height%3D%22${height}%22%20viewBox%3D%220%200%20${width}%20${height}%22%3E%3Crect%20fill%3D%22%23EFE7DC%22%20width%3D%22100%25%22%20height%3D%22100%25%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22calc(100%25%20-%2048px)%22%20height%3D%22calc(100%25%20-%2048px)%22%20fill%3D%22none%22%20stroke%3D%22%23B59A72%22%20stroke-width%3D%221.2%22%20stroke-dasharray%3D%226%2C4%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2246%25%22%20font-family%3D%22serif%22%20font-size%3D%2222%22%20font-weight%3D%22600%22%20letter-spacing%3D%224%22%20fill%3D%22%23302820%22%20text-anchor%3D%22middle%22%3EMAISON%20%C3%89POQUE%3C%2Ftext%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2252%25%22%20font-family%3D%22serif%22%20font-size%3D%2214%22%20font-style%3D%22italic%22%20letter-spacing%3D%221.5%22%20fill%3D%22%23542B2B%22%20text-anchor%3D%22middle%22%3EElegance%20Never%20Fades%3C%2Ftext%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2258%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2211%22%20letter-spacing%3D%222%22%20fill%3D%22%238A7E72%22%20text-anchor%3D%22middle%22%3EEDITORIAL%20ARCHIVE%3C%2Ftext%3E%3C%2Fsvg%3E`;
        this.classList.add('img-fallback-loaded');
      });
    });
  };

  handleImageErrors();
});
