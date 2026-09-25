import { Language } from '../types';

export interface AppTranslation {
  brandName: string;
  brandTagline: string;
  nav: {
    home: string;
    stories: string;
    shop: string;
    customizer: string;
    about: string;
    cart: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    customBtn: string;
    craftEthos: string;
  };
  featured: {
    heading: string;
    subheading: string;
    viewDetail: string;
    customizeNow: string;
    startingFrom: string;
  };
  culturalStories: {
    badge: string;
    title: string;
    intro: string;
    hmongTitle: string;
    hmongDesc: string;
    hmongTech: string;
    thaiTitle: string;
    thaiDesc: string;
    thaiTech: string;
    daoTitle: string;
    daoDesc: string;
    daoTech: string;
    silkTitle: string;
    silkIntro: string;
    vanPhucTitle: string;
    vanPhucDesc: string;
    baoLocTitle: string;
    baoLocDesc: string;
    integrityNote: string;
    viewRelatedProduct: string;
  };
  shop: {
    title: string;
    subtitle: string;
    filterMaterial: string;
    filterPurpose: string;
    filterGift: string;
    all: string;
    materials: {
      brocade_linen: string;
      silk: string;
      hybrid: string;
    };
    purposes: {
      decor: string;
      daily_accessories: string;
      silk_fashion: string;
    };
    gifts: {
      housewarming: string;
      international: string;
      personal_loved: string;
    };
    clearFilters: string;
    productsFound: string;
  };
  productDetail: {
    materialSpecs: string;
    culturalNarrative: string;
    craftTechnique: string;
    customizationHighlights: string;
    designYourOwnBtn: string;
    addToCartBtn: string;
    basePriceLabel: string;
    guaranteeNote: string;
  };
  customizer: {
    pageTitle: string;
    pageSubtitle: string;
    selectProduct: string;
    basePrice: string;
    addonsFee: string;
    totalPrice: string;
    formula: string;
    interactiveNotice: string;
    wallArt: {
      size: string;
      sizes: {
        '30x40': string;
        '40x60': string;
        '50x70': string;
      };
      bgColor: string;
      bgColors: {
        cream: string;
        indigo: string;
        slate: string;
        terracotta: string;
      };
      position: string;
      positions: {
        center: string;
        asymmetric: string;
        horizontal_stripe: string;
      };
      frame: string;
      frames: {
        oak_natural: string;
        premium_brass: string;
      };
    };
    clutch: {
      bodyColor: string;
      bodyColors: {
        graphite: string;
        deep_indigo: string;
        warm_cognac: string;
        sand_cream: string;
      };
      brocadePattern: string;
      patterns: {
        hmong_indigo_spiral: string;
        thai_rhombus_diamond: string;
        dao_red_pine: string;
      };
      hardwareColor: string;
      hardwares: {
        antique_brass: string;
        matte_gold: string;
        smoked_silver: string;
      };
      monogram: string;
      monogramPlaceholder: string;
      symbol: string;
      symbols: {
        none: string;
        crane: string;
        lotus: string;
        mountain_cloud: string;
      };
    };
    scarf: {
      baseColor: string;
      baseColors: {
        ivory_silk: string;
        coral_blush: string;
        jade_teal: string;
        saffron_gold: string;
      };
      borderColor: string;
      borderColors: {
        indigo_rolled: string;
        rhododendron_red: string;
        gilded_amber: string;
      };
      motifStyle: string;
      motifs: {
        van_phuc_subtle: string;
        ly_dynasty_wave: string;
        brocade_silk_border: string;
      };
      monogram: string;
      monogramPlaceholder: string;
      symbol: string;
      symbols: {
        none: string;
        crane: string;
        lotus: string;
        mountain_cloud: string;
      };
    };
    twilly: {
      dualColorway: string;
      colorways: {
        indigo_and_ivory: string;
        crimson_and_cream: string;
        saffron_and_slate: string;
      };
      motifPattern: string;
      patterns: {
        geometric_rhombus: string;
        batik_floral: string;
        flowing_silk: string;
      };
      monogram: string;
      monogramPlaceholder: string;
      symbol: string;
      symbols: {
        none: string;
        crane: string;
        lotus: string;
        mountain_cloud: string;
      };
    };
    fees: {
      monogramFee: string;
      symbolFee: string;
      frameFee: string;
    };
    addToCartSuccess: string;
  };
  cart: {
    title: string;
    empty: string;
    emptySubtitle: string;
    basePrice: string;
    addons: string;
    quantity: string;
    remove: string;
    subtotal: string;
    currencyNote: string;
    studentNotice: string;
    checkoutBtn: string;
    currencySelectorLabel: string;
    orderSuccessTitle: string;
    orderSuccessDesc: string;
    close: string;
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    projectBadge: string;
    projectDisclaimer: string;
    contactTitle: string;
    contactSubtitle: string;
    form: {
      name: string;
      email: string;
      topic: string;
      topics: {
        general: string;
        custom_inquiry: string;
        cultural_exchange: string;
        student_feedback: string;
      };
      message: string;
      sendBtn: string;
      sending: string;
      sentSuccess: string;
    };
  };
  chatbot: {
    launcherText: string;
    drawerTitle: string;
    drawerSubtitle: string;
    scenarioTitle: string;
    scenarios: {
      gift: {
        label: string;
        prompt: string;
      };
      palette: {
        label: string;
        prompt: string;
      };
      materials: {
        label: string;
        prompt: string;
      };
    };
    inputPlaceholder: string;
    send: string;
    typing: string;
    welcomeMsg: string;
  };
  productsData: {
    [key: string]: {
      name: string;
      categoryLabel: string;
      shortDesc: string;
      detailedDesc: string;
      materialInfo: string;
      designStory: string;
      technique: string;
    };
  };
}

export const translations: Record<Language, AppTranslation> = {
  vi: {
    brandName: 'Dệt Sắc Việt',
    brandTagline: 'Thổ cẩm dệt tay & Lụa tơ tằm đương đại',
    nav: {
      home: 'Trang chủ',
      stories: 'Câu chuyện văn hóa',
      shop: 'Cửa hàng',
      customizer: 'Tự thiết kế',
      about: 'Về chúng tôi & Liên hệ',
      cart: 'Giỏ hàng',
    },
    hero: {
      badge: 'Di sản thủ công Việt Nam',
      title: 'Hồn thêu sắc lụa trong nhịp sống hôm nay',
      subtitle: 'Nâng niu từng thước lụa tơ tằm Bảo Lộc, Vạn Phúc và những họa tiết thổ cẩm dệt tay của đồng bào H’Mông, Thái, Dao — tái sinh trong các thiết kế sống tinh tế, cá nhân hóa theo phong cách của bạn.',
      exploreBtn: 'Khám phá sản phẩm',
      customBtn: 'Tự thiết kế ngay',
      craftEthos: 'Dệt thủ công từ bản làng đến không gian đương đại',
    },
    featured: {
      heading: 'Bốn tác phẩm di sản đương đại',
      subheading: 'Mỗi thiết kế là sự hòa quyện giữa chất liệu truyền thống có nguồn gốc xác thực và khả năng tùy biến mang dấu ấn riêng.',
      viewDetail: 'Xem chi tiết',
      customizeNow: 'Tùy biến ngay',
      startingFrom: 'Giá từ',
    },
    culturalStories: {
      badge: 'Tư liệu & Tri thức bản địa',
      title: 'Hành trình của sợi tơ và hoa văn ngàn năm',
      intro: 'Mỗi dải thổ cẩm và tấm lụa tơ tằm Việt Nam không chỉ là vải vóc, mà là ký ức, nhân sinh quan và kỹ nghệ tích lũy qua hàng thế kỷ của các thế hệ nghệ nhân.',
      hmongTitle: 'Thổ cẩm H’Mông: Kỹ thuật vẽ sáp ong & nhuộm chàm',
      hmongDesc: 'Phụ nữ H’Mông sử dụng bút đồng chấm sáp ong nóng chảy để vẽ trực tiếp lên vải lanh dệt tay những họa tiết xoắn ốc mặt trời, hoa bí, mắt chim. Sau đó, vải được ngâm nhuộm chàm qua nhiều ngày nắng gió để lên màu xanh thăm thẳm, trước khi luộc nhả sáp tạo nên những nét hoa trắng sắc sảo.',
      hmongTech: 'Vẽ batik sáp ong · Nhuộm chàm tự nhiên nhiều lớp · Thêu chữ thập trên sợi lanh',
      thaiTitle: 'Thổ cẩm Thái: Khung cửi thoi bay & hoa văn quả trám',
      thaiDesc: 'Cộng đồng người Thái vùng Tây Bắc nổi danh với kỹ thuật luồn thoi dệt hoa văn hình thoi (quả trám) tượng trưng cho mắt rồng, sự màu mỡ của ruộng nương và vũ trụ quan hòa hợp với thiên nhiên. Các sắc màu đỏ đất, vàng nghệ và chàm được phối sắc tương phản uyển chuyển.',
      thaiTech: 'Dệt thoi luồn hoa nổi · Họa tiết quả trám sinh sôi · Phối màu tương phản tự nhiên',
      daoTitle: 'Thổ cẩm Dao: Thêu luồn sợi từ mặt trái & dấu chân cọp',
      daoDesc: 'Nghệ nhân Dao (Dao Đỏ, Dao Tiền) sở hữu kỹ thuật thêu độc đáo: đếm sợi chỉ và thêu từ mặt trái để hoa văn nổi đều trên mặt phải mà không cần vẽ mẫu trước. Những mô típ tiêu biểu như cây thông, dấu chân cọp tượng trưng cho sức mạnh rừng thiêng che chở gia đình.',
      daoTech: 'Thêu luồn sợi mặt trái không mẫu vẽ · Họa tiết cây thông & dấu chân cọp · Chuông bạc hộ mệnh',
      silkTitle: 'Lụa tơ tằm Việt Nam: Hai dòng chảy di sản',
      silkIntro: 'Chúng tôi phân định rõ ràng nguồn gốc tơ lụa để tôn vinh đúng bản sắc từng vùng nguyên liệu, kiên quyết không dùng danh xưng mập mờ.',
      vanPhucTitle: 'Lụa Vạn Phúc (Hà Đông) — Ngàn năm lụa vân sông Đáy',
      vanPhucDesc: 'Làng lụa cổ hơn 1.000 năm tuổi nổi tiếng với dòng lụa Vân: dệt hoa văn chìm nổi tinh tế trên nền lụa mộc, khi ra ánh sáng hoa văn lấp lánh ẩn hiện. Lụa mang vẻ đẹp nền nã, cổ điển của kinh kỳ xưa.',
      baoLocTitle: 'Lụa Bảo Lộc (Lâm Đồng) — Thủ phủ tơ tằm đất cao nguyên',
      baoLocDesc: 'Nằm trên cao nguyên đất đỏ màu mỡ với khí hậu mát lạnh, Bảo Lộc là cái nôi nuôi giống tằm kén trắng chất lượng cao. Sợi tơ se mảnh, mịn, óng ả và được dệt với mật độ sợi cao, tạo bề mặt mướt nhẹ như sương.',
      integrityNote: 'Cam kết xác thực: Sản phẩm ứng dụng lụa tơ tằm dệt thủ công theo mẻ sợi tự nhiên hoặc phối sợi vải mộc; nêu rõ thông số kiểm chứng và nguồn gốc cụ thể của từng chất liệu.',
      viewRelatedProduct: 'Xem sản phẩm ứng dụng chất liệu này',
    },
    shop: {
      title: 'Bộ sưu tập sáng tạo',
      subtitle: 'Lựa chọn tác phẩm thủ công được tạo tác tỉ mỉ, sẵn sàng để bạn tùy biến theo phong cách sống riêng.',
      filterMaterial: 'Chất liệu',
      filterPurpose: 'Mục đích sử dụng',
      filterGift: 'Dịp quà tặng',
      all: 'Tất cả',
      materials: {
        brocade_linen: 'Thổ cẩm & Vải thô',
        silk: 'Lụa tơ tằm Bảo Lộc/Vạn Phúc',
        hybrid: 'Phối kết hợp lụa & thổ cẩm',
      },
      purposes: {
        decor: 'Trang trí nội thất',
        daily_accessories: 'Phụ kiện hàng ngày',
        silk_fashion: 'Thời trang & Quàng lụa',
      },
      gifts: {
        housewarming: 'Quà tân gia & không gian mới',
        international: 'Quà ngoại giao & khách quốc tế',
        personal_loved: 'Quà cho bản thân & người thương',
      },
      clearFilters: 'Xóa bộ lọc',
      productsFound: 'sản phẩm',
    },
    productDetail: {
      materialSpecs: 'Chất liệu & Cấu tạo',
      culturalNarrative: 'Câu chuyện thiết kế',
      craftTechnique: 'Kỹ nghệ chế tác',
      customizationHighlights: 'Tùy biến có thể chọn',
      designYourOwnBtn: 'Tùy biến thiết kế này (Design Your Own)',
      addToCartBtn: 'Thêm vào giỏ hàng',
      basePriceLabel: 'Giá tiêu chuẩn',
      guaranteeNote: 'Tác phẩm thủ công nguyên bản · Đóng hộp quà giấy mỹ thuật kèm câu chuyện văn hóa',
    },
    customizer: {
      pageTitle: 'Design Your Own — Studio tùy biến thiết kế',
      pageSubtitle: 'Tự tay chọn màu nền, dải thổ cẩm, màu khóa hoặc yêu cầu thêu tên riêng. Bản xem trước tương tác cập nhật ngay lập tức.',
      selectProduct: 'Chọn sản phẩm tùy biến',
      basePrice: 'Giá cơ bản',
      addonsFee: 'Phụ phí tùy chỉnh',
      totalPrice: 'Tổng giá',
      formula: 'Giá cơ bản + Phụ phí tùy chỉnh = Tổng giá',
      interactiveNotice: 'Bản xem trước đồ họa tương tác mô phỏng chất liệu & hoa văn thủ công.',
      wallArt: {
        size: 'Kích thước tranh',
        sizes: {
          '30x40': '30 x 40 cm (Nhỏ gọn bàn làm việc)',
          '40x60': '40 x 60 cm (Tiêu chuẩn phòng khách)',
          '50x70': '50 x 70 cm (Khổ lớn ấn tượng)',
        },
        bgColor: 'Màu nền vải mộc',
        bgColors: {
          cream: 'Kem mộc tự nhiên',
          indigo: 'Xanh chàm sâu lắng',
          slate: 'Xám bão khoáng đạt',
          terracotta: 'Đỏ gạch nung ấm',
        },
        position: 'Vị trí mảng thổ cẩm',
        positions: {
          center: 'Tâm đối xứng cổ điển',
          asymmetric: 'Lệch góc đương đại',
          horizontal_stripe: 'Dải băng ngang trường tồn',
        },
        frame: 'Kiểu khung hoàn thiện',
        frames: {
          oak_natural: 'Gỗ sồi mộc tự nhiên (Chuẩn)',
          premium_brass: 'Khung cao cấp viền đồng sang trọng (+150.000 VND)',
        },
      },
      clutch: {
        bodyColor: 'Màu thân ví da/vải thô',
        bodyColors: {
          graphite: 'Đen than chì',
          deep_indigo: 'Xanh chàm sâu',
          warm_cognac: 'Nâu da bò cognac',
          sand_cream: 'Kem cát sa mạc',
        },
        brocadePattern: 'Mẫu hoa văn thổ cẩm',
        patterns: {
          hmong_indigo_spiral: 'Batik H’Mông Xoắn ốc mặt trời',
          thai_rhombus_diamond: 'Dệt Thái Quả trám thịnh vượng',
          dao_red_pine: 'Thêu Dao Đỏ Cây thông che chở',
        },
        hardwareColor: 'Màu khóa & móc kim loại',
        hardwares: {
          antique_brass: 'Đồng cổ vintage',
          matte_gold: 'Vàng gold lì sang trọng',
          smoked_silver: 'Bạc hun khói tinh tế',
        },
        monogram: 'Thêu chữ cái cá nhân (+50.000 VND)',
        monogramPlaceholder: 'Nhập 1 - 3 chữ cái (ví dụ: VN, AN...)',
        symbol: 'Thêu biểu tượng nhỏ (+100.000 VND)',
        symbols: {
          none: 'Không thêu biểu tượng',
          crane: 'Chim hạc di sản (Thanh tao, trường thọ)',
          lotus: 'Hoa sen cách điệu (Thuần khiết)',
          mountain_cloud: 'Mây ngàn non cao (Tự do, bình yên)',
        },
      },
      scarf: {
        baseColor: 'Màu lụa tơ tằm chính',
        baseColors: {
          ivory_silk: 'Trắng ngà tơ tự nhiên',
          coral_blush: 'Hồng san hô ấm',
          jade_teal: 'Xanh ngọc bích',
          saffron_gold: 'Vàng hoàng yến óng',
        },
        borderColor: 'Màu viền cuộn mép tay',
        borderColors: {
          indigo_rolled: 'Viền xanh chàm cuộn chỉ tay',
          rhododendron_red: 'Viền đỏ hoa đỗ quyên',
          gilded_amber: 'Viền vàng hổ phách',
        },
        motifStyle: 'Phối họa tiết lụa',
        motifs: {
          van_phuc_subtle: 'Họa tiết dệt chìm Vạn Phúc thanh nhã',
          ly_dynasty_wave: 'Sóng nước thời Lý cách điệu',
          brocade_silk_border: 'Dải họa tiết thổ cẩm in nghệ thuật',
        },
        monogram: 'Thêu chữ lồng tên riêng (+50.000 VND)',
        monogramPlaceholder: 'Chữ viết tắt (ví dụ: MH, TH...)',
        symbol: 'Thêu biểu tượng nhỏ (+100.000 VND)',
        symbols: {
          none: 'Không thêu biểu tượng',
          crane: 'Chim hạc di sản',
          lotus: 'Hoa sen thanh khiết',
          mountain_cloud: 'Mây ngàn non cao',
        },
      },
      twilly: {
        dualColorway: 'Phối màu hai đầu khăn',
        colorways: {
          indigo_and_ivory: 'Đầu vát Chàm sâu & Thân Trắng ngọc',
          crimson_and_cream: 'Đầu vát Đỏ trầm & Thân Kem cát',
          saffron_and_slate: 'Đầu vát Vàng Saffron & Thân Ghi thanh lịch',
        },
        motifPattern: 'Cách phối họa tiết',
        patterns: {
          geometric_rhombus: 'Họa tiết thoi quả trám tối giản',
          batik_floral: 'Hoa cúc sáp ong H’Mông',
          flowing_silk: 'Vệt lụa đương đại uyển chuyển',
        },
        monogram: 'Thêu chữ cái viết hoa (+50.000 VND)',
        monogramPlaceholder: '1 chữ cái (ví dụ: L, P, H...)',
        symbol: 'Thêu biểu tượng nhỏ (+100.000 VND)',
        symbols: {
          none: 'Không thêu biểu tượng',
          crane: 'Chim hạc di sản',
          lotus: 'Hoa sen thanh khiết',
          mountain_cloud: 'Mây ngàn non cao',
        },
      },
      fees: {
        monogramFee: '+50.000 VND',
        symbolFee: '+100.000 VND',
        frameFee: '+150.000 VND',
      },
      addToCartSuccess: 'Đã thêm thiết kế tùy biến vào giỏ hàng!',
    },
    cart: {
      title: 'Giỏ hàng của bạn',
      empty: 'Giỏ hàng đang trống',
      emptySubtitle: 'Hãy khám phá các tác phẩm di sản và tạo thiết kế mang dấu ấn của riêng bạn.',
      basePrice: 'Giá cơ bản',
      addons: 'Phụ phí tùy chọn',
      quantity: 'Số lượng',
      remove: 'Xóa',
      subtotal: 'Tổng cộng',
      currencyNote: 'Giá thanh toán niêm yết bằng VND. Giá ngoại tệ hiển thị tham khảo theo tỷ giá Vietcombank niêm yết (cập nhật 09/2026).',
      studentNotice: 'Đây là website mẫu thuộc dự án học tập sáng tạo, trình diễn trải nghiệm đặt hàng & thiết kế cá nhân hóa. Chưa phát sinh thanh toán thật.',
      checkoutBtn: 'Tiến hành đặt thử nghiệm (Demo Checkout)',
      currencySelectorLabel: 'Đơn vị tiền tệ tham khảo',
      orderSuccessTitle: 'Đặt hàng thử nghiệm thành công!',
      orderSuccessDesc: 'Cảm ơn bạn đã trải nghiệm mô phỏng đặt hàng của dự án sinh viên Dệt Sắc Việt. Thiết kế tùy biến của bạn đã được ghi nhận trong phiên trình diễn này.',
      close: 'Đóng',
    },
    about: {
      title: 'Về dự án Dệt Sắc Việt',
      subtitle: 'Ý tưởng dự án sinh viên tôn vinh di sản thủ công và kết nối nghệ thuật dệt may truyền thống vào nhịp sống hiện đại.',
      storyTitle: 'Tầm nhìn sáng tạo từ nguồn cội',
      storyP1: 'Dệt Sắc Việt ra đời từ đồ án nghiên cứu và sáng tạo của nhóm sinh viên ngành Thiết kế & Văn hóa. Xuất phát từ niềm xúc động trước những bàn tay chai sần của bà con H’Mông vẽ sáp ong thâu đêm hay tiếng thoi gõ nhịp bền bỉ tại làng Vạn Phúc, chúng tôi khao khát mang chất liệu quý giá này bước vào đời sống đô thị qua các sản phẩm tinh tế, thanh lịch và mang tính ứng dụng cao.',
      storyP2: 'Chúng tôi tin rằng bảo tồn di sản bền vững nhất là biến di sản thành một phần của phong cách sống đương đại — nơi mỗi người trẻ đều có thể tự hào khoác lên chiếc khăn lụa tơ tằm hay trang trí góc nhà bằng một bức tranh thổ cẩm do chính mình đồng sáng tạo.',
      projectBadge: 'Dự án nghiên cứu & thiết kế học thuật (Student Concept Project)',
      projectDisclaimer: 'Lưu ý: Đây là website mẫu phục vụ mục đích trình diễn thiết kế, trải nghiệm người dùng và lan tỏa câu chuyện văn hóa. Tất cả mức giá và giao dịch trên trang dùng cho mục đích mô phỏng học tập.',
      contactTitle: 'Gửi lời nhắn & Góp ý cho dự án',
      contactSubtitle: 'Chúng tôi rất trân trọng mọi chia sẻ, góp ý chuyên môn từ bạn để tiếp tục hoàn thiện đồ án.',
      form: {
        name: 'Họ và tên của bạn',
        email: 'Địa chỉ Email',
        topic: 'Chủ đề liên hệ',
        topics: {
          general: 'Góp ý chung cho website',
          custom_inquiry: 'Hỏi về ý tưởng tùy biến sản phẩm',
          cultural_exchange: 'Giao lưu văn hóa & kết nối nghệ nhân',
          student_feedback: 'Nhận xét từ thầy cô & chuyên gia',
        },
        message: 'Nội dung chia sẻ...',
        sendBtn: 'Gửi tin nhắn phản hồi',
        sending: 'Đang gửi...',
        sentSuccess: 'Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công đến nhóm dự án.',
      },
    },
    chatbot: {
      launcherText: 'Tư vấn Văn hóa & Chọn Quà',
      drawerTitle: 'Trợ lý Văn hóa & Thiết kế',
      drawerSubtitle: 'Đồng hành cùng bạn hiểu sâu câu chuyện thổ cẩm, lụa tơ tằm và phối sắc cá nhân.',
      scenarioTitle: 'Tình huống gợi ý nhanh',
      scenarios: {
        gift: {
          label: '🎁 Tư vấn chọn quà tặng',
          prompt: 'Tôi muốn tìm một món quà ý nghĩa từ lụa hoặc thổ cẩm, bạn gợi ý cho tôi nhé?',
        },
        palette: {
          label: '🎨 Hướng dẫn phối màu',
          prompt: 'Làm sao để phối màu ví clutch hoặc tranh thổ cẩm cho hài hòa và hiện đại?',
        },
        materials: {
          label: '🧵 Phân biệt chất liệu & Vùng lụa',
          prompt: 'Thổ cẩm các dân tộc khác nhau thế nào, và lụa Vạn Phúc khác lụa Bảo Lộc ra sao?',
        },
      },
      inputPlaceholder: 'Hỏi về hoa văn, chất liệu, cách chọn quà...',
      send: 'Gửi',
      typing: 'Đang tìm kiếm tư liệu văn hóa...',
      welcomeMsg: 'Xin chào! Tôi là Trợ lý Văn hóa & Thiết kế của Dệt Sắc Việt. Bạn có thể bấm vào các tình huống gợi ý bên dưới hoặc hỏi tôi bất kỳ điều gì về kỹ thuật thổ cẩm, phân biệt lụa hay cách phối màu nhé!',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — Tranh vải treo tường',
        categoryLabel: 'Nội thất & Điểm nhấn không gian',
        shortDesc: 'Mảng thổ cẩm dệt tay nguyên bản làm điểm nhấn kiêu hãnh trên nền vải mộc canvas, đóng khung gỗ sồi hoặc viền đồng cao cấp.',
        detailedDesc: 'Tác phẩm biến những thước vải thổ cẩm dệt thủ công của nghệ nhân bản địa thành tranh nghệ thuật treo tường đương đại. Vẻ đẹp mộc mạc của từng sợi lanh nhuộm chàm hoặc chỉ dệt tương phản tạo chiều sâu thị giác ấn tượng cho phòng khách hay góc làm việc.',
        materialInfo: 'Mảng thổ cẩm dệt tay thủ công bởi đồng bào H’Mông/Thái gắn kết trên nền vải linen mộc; khung gỗ sồi tự nhiên hoàn thiện dầu sáp mờ.',
        designStory: 'Lấy cảm hứng từ việc gìn giữ những mảng hoa văn thổ cẩm cổ, tác phẩm giải phóng thổ cẩm khỏi khuôn khổ trang phục để trở thành tranh nghệ thuật thị giác đương đại.',
        technique: 'Batik sáp ong H’Mông hoặc dệt thoi Thái · Căng khung thủ công đa lớp',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — Ví cầm tay di sản',
        categoryLabel: 'Phụ kiện cầm tay cá nhân hóa',
        shortDesc: 'Thân ví tối giản với dải thổ cẩm thủ công tạo điểm nhấn sang trọng, khóa kim loại cao cấp và tùy chọn thêu chữ viết tắt.',
        detailedDesc: 'Sự giao thoa hoàn hảo giữa phom dáng ví clutch tối giản và dải hoa văn thổ cẩm truyền thống rực rỡ. Thân ví làm từ vải thô cao cấp kết hợp dải thổ cẩm thật, vừa tôn vinh văn hóa vừa tiện dụng trong các buổi tiệc hay gặp gỡ trang trọng.',
        materialInfo: 'Vải thô dày dặn cán lớp bảo vệ chống ẩm; dải thổ cẩm dệt thủ công; phụ kiện khóa kim loại mạ điện phân bền màu.',
        designStory: 'Mỗi chiếc ví kể lại một câu chuyện rừng núi: từ nụ cười của phụ nữ Dao Đỏ đến sự nhẫn nại bên khung dệt của người Thái Tây Bắc.',
        technique: 'Ghép mộng vải thủ công · May viền mép chịu lực · Thêu monogram tùy biến',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — Khăn quàng lụa tơ tằm',
        categoryLabel: 'Khăn lụa tơ tằm nghệ thuật',
        shortDesc: 'Dệt từ lụa tơ tằm mềm mại óng ả, viền cuộn mép tay tỉ mỉ và tùy chọn thêu chữ lồng tinh xảo.',
        detailedDesc: 'Chiếc khăn quàng vuông khổ rộng dệt từ tơ tằm nguyên bản mát lành mùa hè, giữ ấm mùa đông. Ánh sáng lướt trên mặt lụa tạo độ óng ả tự nhiên, tôn vinh kỹ thuật se tơ truyền thống cùng viền mép cuộn tròn khâu tay bởi thợ lành nghề.',
        materialInfo: 'Lụa tơ tằm dệt thủ công theo mẻ sợi tự nhiên Bảo Lộc / Vạn Phúc; mực in chứng nhận an toàn sợi tự nhiên.',
        designStory: 'Họa tiết lụa gợi nhắc những đợt sóng nước thời Lý và nét duyên thầm của lụa Vân Hà Đông, mang lại phong thái thanh lịch vượt thời gian.',
        technique: 'Se sợi tơ tằm tự nhiên · Cuộn mép tay thủ công viền tròn (hand-rolled hem)',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — Khăn lụa nhỏ đa năng',
        categoryLabel: 'Khăn lụa mảnh phối đồ',
        shortDesc: 'Khăn lụa tơ tằm dáng dài hai đầu vát, linh hoạt quấn cổ áo, buộc cổ tay hoặc tạo điểm nhấn quai túi xách.',
        detailedDesc: 'Một phụ kiện thời trang nhỏ gọn nhưng đầy tính biến hóa. Khăn twilly lụa tơ tằm là sự kết hợp vui tươi giữa các mảng màu tương phản lấy cảm hứng từ họa tiết vùng cao và bề mặt lụa óng mượt.',
        materialInfo: 'Lụa tơ tằm mềm mại dệt từ kén tằm trắng Bảo Lộc; may lộn đường may ẩn tinh tế.',
        designStory: 'Thiết kế hướng đến các bạn trẻ yêu thích thời trang hiện đại muốn mang theo một nét văn hóa Việt nhẹ nhàng trên chiếc túi đi làm mỗi ngày.',
        technique: 'Dệt sợi mảnh hai mặt · Cắt vát chéo góc 45 độ chuẩn xác · Khâu tay giấu chỉ',
      },
    },
  },

  en: {
    brandName: 'Dệt Sắc Việt',
    brandTagline: 'Handwoven Brocade & Contemporary Mulberry Silk',
    nav: {
      home: 'Home',
      stories: 'Cultural Stories',
      shop: 'Shop',
      customizer: 'Design Your Own',
      about: 'About & Contact',
      cart: 'Cart',
    },
    hero: {
      badge: 'Vietnamese Living Heritage',
      title: 'Heritage Threads in Contemporary Life',
      subtitle: 'Honoring natural mulberry silk from Bảo Lộc and Vạn Phúc, alongside authentic handwoven brocades from the H’Mông, Thái, and Dao communities — reimagined for modern lifestyle objects, tailored by you.',
      exploreBtn: 'Explore Collection',
      customBtn: 'Design Your Own',
      craftEthos: 'Handcrafted from indigenous villages to contemporary spaces',
    },
    featured: {
      heading: 'Four Signature Heritage Pieces',
      subheading: 'Each piece unites authentic verified craftsmanship with interactive personal customization.',
      viewDetail: 'View Details',
      customizeNow: 'Customize',
      startingFrom: 'From',
    },
    culturalStories: {
      badge: 'Archival & Indigenous Knowledge',
      title: 'The Century-Old Odyssey of Threads and Motifs',
      intro: 'In Vietnam, handwoven brocade and mulberry silk are more than textiles — they are living memory, spiritual cosmologies, and ancestral knowledge honed across generations.',
      hmongTitle: 'H’Mông Brocade: Beeswax Batik & Indigo Dyeing',
      hmongDesc: 'H’Mông artisans draw intricate motifs using copper pens dipped in boiling molten beeswax directly onto hand-spun hemp. The cloth is repeatedly fermented in indigo dye vats for deep blue tones before being boiled to melt away wax lines.',
      hmongTech: 'Beeswax batik technique · Multi-stage natural indigo dyeing · Cross-stitch embroidery on hemp',
      thaiTitle: 'Thái Brocade: Flying Shuttle & Rhombus Lozenge Motifs',
      thaiDesc: 'The Northwest Thái people are celebrated for shuttle-woven lozenges (quả trám) symbolizing dragon eyes, fertile rice terraces, and harmony with nature, using warm earthen terracotta, turmeric yellow, and deep indigo.',
      thaiTech: 'Continuous supplementary weft weaving · Fertile rhombus lozenge motif · Natural contrasting dyes',
      daoTitle: 'Dao Brocade: Reverse-Count Embroidery & The Sacred Tiger Paw',
      daoDesc: 'Red Dao and Coin Dao craftswomen count warp threads and stitch from the reverse side so intricate motifs appear on the front without pre-drawing. Key motifs include pine trees and sacred tiger paws symbolizing forest sanctuary and protection.',
      daoTech: 'Blind reverse-count thread embroidery · Pine tree & tiger paw guardian motifs · Silver protective charms',
      silkTitle: 'Vietnamese Mulberry Silk: Two Storied Rivers',
      silkIntro: 'We clearly differentiate each silk origin to honor regional heritage without misleading generalizations.',
      vanPhucTitle: 'Vạn Phúc (Hà Đông) — A Millennium of Cloud-Jacquard Silk',
      vanPhucDesc: 'A millennium-old craft village celebrated for Vân silk: subtly raised and recessed jacquard patterns on pure silk that shimmer delicately under changing sunlight, embodying classical northern grace.',
      baoLocTitle: 'Bảo Lộc (Lâm Đồng) — The Highland Silk Capital',
      baoLocDesc: 'Nurtured in the fertile basalt soil and cool highland mists of Lâm Đồng, Bảo Lộc yields pristine white silkworm cocoons. Fine, high-twist threads produce an exceptionally smooth, lustrous drape.',
      integrityNote: 'Authenticity Guarantee: All pieces use verified natural silk batches or authentic ethnic brocades; exact technical attributes are disclosed without deceptive 100% claims.',
      viewRelatedProduct: 'View products featuring this craft',
    },
    shop: {
      title: 'Crafted Collection',
      subtitle: 'Discover four artisan creations thoughtfully prepared for your personal aesthetic choices.',
      filterMaterial: 'Material',
      filterPurpose: 'Intended Use',
      filterGift: 'Gift Occasion',
      all: 'All',
      materials: {
        brocade_linen: 'Brocade & Raw Canvas',
        silk: 'Bảo Lộc/Vạn Phúc Mulberry Silk',
        hybrid: 'Hybrid Silk & Brocade',
      },
      purposes: {
        decor: 'Home Decor',
        daily_accessories: 'Daily Accessories',
        silk_fashion: 'Silk Fashion & Scarves',
      },
      gifts: {
        housewarming: 'Housewarming & New Living Spaces',
        international: 'Diplomatic & International Gifts',
        personal_loved: 'For Yourself & Loved Ones',
      },
      clearFilters: 'Clear Filters',
      productsFound: 'items found',
    },
    productDetail: {
      materialSpecs: 'Materials & Specifications',
      culturalNarrative: 'Design Narrative',
      craftTechnique: 'Artisan Technique',
      customizationHighlights: 'Customization Options',
      designYourOwnBtn: 'Design Your Own',
      addToCartBtn: 'Add to Cart',
      basePriceLabel: 'Base Price',
      guaranteeNote: 'Original artisanal craft · Packaged in keepsake art paper box with heritage booklet',
    },
    customizer: {
      pageTitle: 'Design Your Own — Interactive Studio',
      pageSubtitle: 'Choose base tones, authentic brocade panels, hardware finishes, or personalized initials. Live interactive preview updates instantly.',
      selectProduct: 'Select product to customize',
      basePrice: 'Base Price',
      addonsFee: 'Custom Surcharges',
      totalPrice: 'Total Price',
      formula: 'Base Price + Custom Surcharges = Total Price',
      interactiveNotice: 'Interactive graphic simulation previewing handcrafted textile layers and motifs.',
      wallArt: {
        size: 'Art Dimensions',
        sizes: {
          '30x40': '30 x 40 cm (Desk & Nook Display)',
          '40x60': '40 x 60 cm (Living Room Standard)',
          '50x70': '50 x 70 cm (Statement Centerpiece)',
        },
        bgColor: 'Canvas Background Tone',
        bgColors: {
          cream: 'Raw Natural Cream',
          indigo: 'Deep Midnight Indigo',
          slate: 'Muted Storm Slate',
          terracotta: 'Warm Terracotta Brick',
        },
        position: 'Brocade Placement',
        positions: {
          center: 'Symmetric Classic Center',
          asymmetric: 'Contemporary Asymmetric Offset',
          horizontal_stripe: 'Timeless Horizontal Runner',
        },
        frame: 'Frame Style',
        frames: {
          oak_natural: 'Natural Raw Oak (Standard)',
          premium_brass: 'Premium Gilded Brass-Lined Frame (+150,000 VND)',
        },
      },
      clutch: {
        bodyColor: 'Bag Body Tone',
        bodyColors: {
          graphite: 'Graphite Charcoal',
          deep_indigo: 'Deep Indigo Blue',
          warm_cognac: 'Warm Cognac Leather',
          sand_cream: 'Desert Sand Cream',
        },
        brocadePattern: 'Ethnic Brocade Pattern',
        patterns: {
          hmong_indigo_spiral: 'H’Mông Solar Spiral Batik',
          thai_rhombus_diamond: 'Thái Prosperity Rhombus',
          dao_red_pine: 'Red Dao Sacred Pine Embroidery',
        },
        hardwareColor: 'Hardware & Zipper Finish',
        hardwares: {
          antique_brass: 'Vintage Antique Brass',
          matte_gold: 'Matte Brushed Gold',
          smoked_silver: 'Smoked Sterling Silver',
        },
        monogram: 'Custom Monogram Initial (+50,000 VND)',
        monogramPlaceholder: 'Enter 1 - 3 initials (e.g. VN, AN...)',
        symbol: 'Embroidered Emblem (+100,000 VND)',
        symbols: {
          none: 'No emblem',
          crane: 'Heritage Crane (Elegance & Longevity)',
          lotus: 'Stylized Lotus (Purity)',
          mountain_cloud: 'Highland Mountain Mist (Peace)',
        },
      },
      scarf: {
        baseColor: 'Silk Base Color',
        baseColors: {
          ivory_silk: 'Lustrous Ivory Silk',
          coral_blush: 'Warm Coral Blush',
          jade_teal: 'Jade Imperial Teal',
          saffron_gold: 'Saffron Goldenrod',
        },
        borderColor: 'Hand-Rolled Hem Edge',
        borderColors: {
          indigo_rolled: 'Indigo Hand-Rolled Hem',
          rhododendron_red: 'Rhododendron Crimson Edge',
          gilded_amber: 'Gilded Amber Hem',
        },
        motifStyle: 'Silk Motif Treatment',
        motifs: {
          van_phuc_subtle: 'Subtle Vạn Phúc Tone-on-Tone Jacquard',
          ly_dynasty_wave: 'Stylized Lý Dynasty Sacred Waves',
          brocade_silk_border: 'Brocade Motif Silk Screen Accent',
        },
        monogram: 'Embroidered Monogram (+50,000 VND)',
        monogramPlaceholder: 'Initials (e.g. MH, TH...)',
        symbol: 'Embroidered Emblem (+100,000 VND)',
        symbols: {
          none: 'No emblem',
          crane: 'Heritage Crane',
          lotus: 'Pristine Lotus',
          mountain_cloud: 'Highland Mountain Mist',
        },
      },
      twilly: {
        dualColorway: 'Two-Tone Ends Combination',
        colorways: {
          indigo_and_ivory: 'Deep Indigo Tips & Pearl Body',
          crimson_and_cream: 'Crimson Tips & Sand Body',
          saffron_and_slate: 'Saffron Tips & Slate Body',
        },
        motifPattern: 'Pattern Accent',
        patterns: {
          geometric_rhombus: 'Minimalist Rhombus Lozenge',
          batik_floral: 'H’Mông Batik Chrysanthemum',
          flowing_silk: 'Contemporary Flowing Ribbons',
        },
        monogram: 'Embroidered Initial (+50,000 VND)',
        monogramPlaceholder: '1 capital letter (e.g. L, P, H...)',
        symbol: 'Embroidered Emblem (+100,000 VND)',
        symbols: {
          none: 'No emblem',
          crane: 'Heritage Crane',
          lotus: 'Pristine Lotus',
          mountain_cloud: 'Highland Mountain Mist',
        },
      },
      fees: {
        monogramFee: '+50,000 VND',
        symbolFee: '+100,000 VND',
        frameFee: '+150,000 VND',
      },
      addToCartSuccess: 'Customized design added to your cart!',
    },
    cart: {
      title: 'Your Shopping Bag',
      empty: 'Your bag is empty',
      emptySubtitle: 'Explore our heritage collections and design a personalized piece.',
      basePrice: 'Base Price',
      addons: 'Custom Add-ons',
      quantity: 'Quantity',
      remove: 'Remove',
      subtotal: 'Subtotal',
      currencyNote: 'Standard checkout amount is priced in VND. Foreign currencies are shown for reference based on published Vietcombank rates (updated Sept 2026).',
      studentNotice: 'This is a sample academic design showcase demonstrating custom product workflows. No real financial transactions are executed.',
      checkoutBtn: 'Proceed to Demo Checkout',
      currencySelectorLabel: 'Reference Currency',
      orderSuccessTitle: 'Demo Order Completed!',
      orderSuccessDesc: 'Thank you for testing the Dệt Sắc Việt student project prototype. Your custom creation has been recorded in this simulation session.',
      close: 'Close',
    },
    about: {
      title: 'About Dệt Sắc Việt',
      subtitle: 'A student design thesis connecting traditional Vietnamese weaving heritage with contemporary everyday design.',
      storyTitle: 'Craft Innovation Grounded in Origins',
      storyP1: 'Dệt Sắc Việt originated as an academic capstone initiative in Design and Cultural Preservation. Inspired by the tireless hands of H’Mông women drawing batik through the night and the rhythmic click of wooden looms in Vạn Phúc, we envisioned a way to weave these timeless crafts into sleek, modern daily objects.',
      storyP2: 'We believe genuine preservation requires turning heritage into an active lifestyle choice — empowering contemporary owners to co-design pieces that bridge ancestral wisdom and modern aesthetics.',
      projectBadge: 'Academic & Cultural Research Concept (Student Showcase)',
      projectDisclaimer: 'Note: This website is a conceptual demonstration developed for educational exhibition, user experience prototyping, and cultural education. All prices and transactions are for simulation purposes only.',
      contactTitle: 'Share Your Thoughts & Feedback',
      contactSubtitle: 'We welcome comments, critique, and inquiries to help refine our design research.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        topic: 'Inquiry Topic',
        topics: {
          general: 'General Project Feedback',
          custom_inquiry: 'Custom Product Exploration',
          cultural_exchange: 'Artisan & Cultural Partnerships',
          student_feedback: 'Academic Mentorship & Reviews',
        },
        message: 'Your message...',
        sendBtn: 'Send Message',
        sending: 'Sending...',
        sentSuccess: 'Thank you! Your note has been received by our student team.',
      },
    },
    chatbot: {
      launcherText: 'Heritage & Gift Assistant',
      drawerTitle: 'Cultural & Styling Assistant',
      drawerSubtitle: 'Guiding you through brocade stories, silk varieties, and personalized palette matching.',
      scenarioTitle: 'Guided Scenarios',
      scenarios: {
        gift: {
          label: '🎁 Gift Consultation',
          prompt: 'I am looking for a meaningful gift crafted from silk or brocade. What do you recommend?',
        },
        palette: {
          label: '🎨 Palette Pairing Advice',
          prompt: 'How can I coordinate colors for the clutch or wall art for a refined modern aesthetic?',
        },
        materials: {
          label: '🧵 Compare Materials & Origins',
          prompt: 'What distinguishes ethnic brocade techniques, and how does Vạn Phúc silk differ from Bảo Lộc?',
        },
      },
      inputPlaceholder: 'Ask about motifs, silk care, or gift recommendations...',
      send: 'Send',
      typing: 'Consulting heritage archives...',
      welcomeMsg: 'Welcome! I am the Cultural & Styling Assistant for Dệt Sắc Việt. Click any quick scenario below or ask me about brocade techniques, silk distinctions, and color coordination!',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — Textile Tapestry',
        categoryLabel: 'Interior Accent & Wall Decor',
        shortDesc: 'Handwoven ethnic brocade textile centerpiece mounted on raw natural canvas, framed in solid oak or gilded brass.',
        detailedDesc: 'Elevates tribal weaving into a museum-worthy wall installation. Natural indigo hemp yarns and vivid supplementary threads lend tactile three-dimensional depth to modern interiors.',
        materialInfo: 'Handwoven brocade by H’Mông or Thái artisans mounted on natural linen canvas; solid oak or brass-lined frame.',
        designStory: 'Transforms traditional costume textiles into framed architectural art, preserving ancient motifs in modern spaces.',
        technique: 'H’Mông beeswax batik or Thái loom weave · Multi-layered conservation framing',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — Artisan Pouch',
        categoryLabel: 'Customizable Handcrafted Accessory',
        shortDesc: 'Structured minimalist body with an authentic ethnic brocade panel, finished with electroplated metal hardware and monogram embroidery.',
        detailedDesc: 'Balances contemporary evening silhouette with rich highland patterns. A striking conversation piece suited for galas, art exhibitions, or everyday poise.',
        materialInfo: 'Durable treated canvas shell; authentic artisan-woven brocade strip; rust-resistant galvanic metal hardware.',
        designStory: 'Each bag honors the highland landscape and the enduring patience of master weavers at their wooden looms.',
        technique: 'Precision fabric assembly · Reinforced edge stitching · Custom monogramming',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — Mulberry Silk Scarf',
        categoryLabel: 'Wearable Heritage Silk Art',
        shortDesc: 'Crafted from lustrous Vietnamese mulberry silk with delicate hand-rolled hems and optional embroidered monogram.',
        detailedDesc: 'A luxurious square silk scarf providing breathability in summer and warmth in winter. Captures natural light with an ethereal sheen that speaks to authentic silk cultivation.',
        materialInfo: 'Handwoven natural mulberry silk from Bảo Lộc or Vạn Phúc batches; eco-certified natural dyes.',
        designStory: 'Draws inspiration from the flowing ripples of Lý Dynasty stone carvings and Hà Đông jacquard elegance.',
        technique: 'High-twist natural silk filament spinning · French hand-rolled round hem',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — Versatile Silk Ribbon',
        categoryLabel: 'Playful Multi-Use Silk Ribbon',
        shortDesc: 'Slender angled silk twilly designed for neckwear, wrist accents, or tying onto bag handles.',
        detailedDesc: 'A versatile everyday accessory bringing Vietnamese heritage into chic modern styling. Double-faced silk gives structured drape and vibrant movement.',
        materialInfo: 'High-density mulberry silk from Bảo Lộc cocoons; invisible slip-stitch seam construction.',
        designStory: 'Designed for young trendsetters seeking an understated touch of Vietnamese artistic tradition in their workwear.',
        technique: 'Double-face fine silk weaving · 45-degree bias cut · Hand-blind stitching',
      },
    },
  },

  fr: {
    brandName: 'Dệt Sắc Việt',
    brandTagline: 'Brocats Tissés Main & Soie Sauvage Contemporaine',
    nav: {
      home: 'Accueil',
      stories: 'Histoires Culturelles',
      shop: 'Boutique',
      customizer: 'Créez le Vôtre',
      about: 'À Propos & Contact',
      cart: 'Panier',
    },
    hero: {
      badge: 'Héritage Vivant du Vietnam',
      title: 'Fils d’Héritage dans la Vie Contemporaine',
      subtitle: 'Sublimant la soie de mûrier de Bảo Lộc et Vạn Phúc, ainsi que les brocarts traditionnels des H’Mông, Thaï et Dao pour des créations contemporaines personnalisables.',
      exploreBtn: 'Explorer la Collection',
      customBtn: 'Personnaliser',
      craftEthos: 'Tissé à la main des villages ancestraux aux intérieurs modernes',
    },
    featured: {
      heading: 'Quatre Œuvres Emblématiques',
      subheading: 'Chaque pièce conjugue authenticité certifiée et personnalisation interactive.',
      viewDetail: 'Voir les détails',
      customizeNow: 'Personnaliser',
      startingFrom: 'À partir de',
    },
    culturalStories: {
      badge: 'Archives & Savoirs Indigènes',
      title: 'L’Odyssée Millénaire de la Soie et des Motifs',
      intro: 'Au Vietnam, le brocart artisanal et la soie de mûrier sont les gardiens d’une mémoire ancestrale façonnée à la main.',
      hmongTitle: 'Brocart H’Mông : Batik à la Cire d’Abeille & Indigo',
      hmongDesc: 'Les artisanes H’Mông dessinent à la pointe de cuivre et à la cire chaude sur toile de chanvre avant de teindre le tissu dans de l’indigo naturel pour obtenir ce bleu profond légendaire.',
      hmongTech: 'Batik à la cire d’abeille · Teinture naturelle indigo · Point de croix sur chanvre',
      thaiTitle: 'Brocart Thaï : Navette Volante & Losanges',
      thaiDesc: 'Les tisseuses Thaï du Nord-Ouest tissent des losanges géométriques symbolisant les yeux du dragon et la fertilité des rizières.',
      thaiTech: 'Tissage à la navette · Motif du losange fertile · Teintures végétales contrastées',
      daoTitle: 'Brocart Dao : Broderie à l’Envers & Patte de Tigre',
      daoDesc: 'Les femmes Dao brodent sans dessin préalable en comptant les fils depuis le revers pour faire naître des motifs sacrés de sapin et de patte de tigre protectrice.',
      daoTech: 'Broderie à fils comptés sur l’envers · Motifs sapin & patte de tigre · Breloques d’argent',
      silkTitle: 'La Soie de Mûrier : Deux Berceaux Historiques',
      silkIntro: 'Nous distinguons avec rigueur les origines pour rendre hommage à chaque terroir de soie.',
      vanPhucTitle: 'Vạn Phúc (Hà Đông) — Mille Ans de Soie Vân Jacquard',
      vanPhucDesc: 'Célèbre pour ses soies jacquard aux motifs nuageux qui se révèlent subtilement au gré de la lumière.',
      baoLocTitle: 'Bảo Lộc (Lâm Đồng) — Capitale Séricicole des Hauts Plateaux',
      baoLocDesc: 'Au cœur des hauts plateaux brumeux, des cocons d’un blanc immaculé donnent une soie au tombé fluide et soyeux exceptionnel.',
      integrityNote: 'Garantie d’authenticité : Pas d’allégations trompeuses; nous précisons la composition exacte de chaque lot artisanal.',
      viewRelatedProduct: 'Voir les produits associés',
    },
    shop: {
      title: 'La Collection Créative',
      subtitle: 'Découvrez quatre créations artisanales prêtes à être personnalisées selon vos envies.',
      filterMaterial: 'Matière',
      filterPurpose: 'Usage',
      filterGift: 'Idée Cadeau',
      all: 'Tout',
      materials: {
        brocade_linen: 'Brocart & Lin Brut',
        silk: 'Soie de Bảo Lộc & Vạn Phúc',
        hybrid: 'Alliance Soie & Brocart',
      },
      purposes: {
        decor: 'Décoration d’Intérieur',
        daily_accessories: 'Accessoires Quotidiens',
        silk_fashion: 'Mode & Foulards en Soie',
      },
      gifts: {
        housewarming: 'Crémaillère & Maison',
        international: 'Cadeau Culturel & Diplomatique',
        personal_loved: 'Pour Soi & Ses Proches',
      },
      clearFilters: 'Réinitialiser',
      productsFound: 'produits trouvés',
    },
    productDetail: {
      materialSpecs: 'Matières & Spécifications',
      culturalNarrative: 'Histoire du Design',
      craftTechnique: 'Technique Artisanale',
      customizationHighlights: 'Options de Personnalisation',
      designYourOwnBtn: 'Personnaliser ce modèle',
      addToCartBtn: 'Ajouter au panier',
      basePriceLabel: 'Prix de base',
      guaranteeNote: 'Artisanat original · Livré dans un coffret d’art avec carnet culturel',
    },
    customizer: {
      pageTitle: 'Design Your Own — Studio Interactif',
      pageSubtitle: 'Sélectionnez les nuances, les motifs de brocart et vos initiales brodées avec aperçu en temps réel.',
      selectProduct: 'Choisir un produit',
      basePrice: 'Prix de base',
      addonsFee: 'Suppléments personnalisés',
      totalPrice: 'Prix total',
      formula: 'Prix de base + Suppléments = Prix total',
      interactiveNotice: 'Aperçu graphique interactif simulant les textures et les motifs artisanaux.',
      wallArt: {
        size: 'Dimensions du tableau',
        sizes: {
          '30x40': '30 x 40 cm (Bureau & alcôve)',
          '40x60': '40 x 60 cm (Salon standard)',
          '50x70': '50 x 70 cm (Grand format)',
        },
        bgColor: 'Couleur de la toile de fond',
        bgColors: {
          cream: 'Crème brut naturel',
          indigo: 'Indigo profond de minuit',
          slate: 'Gris ardoise minéral',
          terracotta: 'Terre cuite chaleureuse',
        },
        position: 'Position du brocart',
        positions: {
          center: 'Symétrie classique centrale',
          asymmetric: 'Décalage asymétrique moderne',
          horizontal_stripe: 'Bandeau transversal élégant',
        },
        frame: 'Cadre de finition',
        frames: {
          oak_natural: 'Chêne naturel brut (Standard)',
          premium_brass: 'Cadre haut de gamme cerclé de laiton (+150 000 VND)',
        },
      },
      clutch: {
        bodyColor: 'Couleur du corps de pochette',
        bodyColors: {
          graphite: 'Anthracite graphite',
          deep_indigo: 'Bleu indigo profond',
          warm_cognac: 'Cuir cognac chaud',
          sand_cream: 'Sable crème du désert',
        },
        brocadePattern: 'Motif de brocart ethnique',
        patterns: {
          hmong_indigo_spiral: 'Batik Solaire H’Mông',
          thai_rhombus_diamond: 'Losange de Prospérité Thaï',
          dao_red_pine: 'Sapin Sacré Dao Rouge',
        },
        hardwareColor: 'Finition de fermeture',
        hardwares: {
          antique_brass: 'Laiton vintage vieilli',
          matte_gold: 'Or mat brossé',
          smoked_silver: 'Argent fumé délicat',
        },
        monogram: 'Initiales brodées (+50 000 VND)',
        monogramPlaceholder: '1 à 3 lettres (ex: VN, AN...)',
        symbol: 'Emblème brodé (+100 000 VND)',
        symbols: {
          none: 'Aucun emblème',
          crane: 'Grue de longévité',
          lotus: 'Fleur de lotus pure',
          mountain_cloud: 'Nuages des hautes montagnes',
        },
      },
      scarf: {
        baseColor: 'Nuance de soie de mûrier',
        baseColors: {
          ivory_silk: 'Soie ivoire nacrée',
          coral_blush: 'Corail rosé poudré',
          jade_teal: 'Vert jade impérial',
          saffron_gold: 'Jaune safran doré',
        },
        borderColor: 'Ourlet roulotté main',
        borderColors: {
          indigo_rolled: 'Ourlet roulotté indigo',
          rhododendron_red: 'Bordure rouge rhododendron',
          gilded_amber: 'Ourlet ambre doré',
        },
        motifStyle: 'Décoration de la soie',
        motifs: {
          van_phuc_subtle: 'Jacquard discret ton sur ton Vạn Phúc',
          ly_dynasty_wave: 'Vagues sacrées de la dynastie Lý',
          brocade_silk_border: 'Frise imprimée esprit brocart',
        },
        monogram: 'Monogramme brodé (+50 000 VND)',
        monogramPlaceholder: 'Initiales (ex: MH, TH...)',
        symbol: 'Emblème brodé (+100 000 VND)',
        symbols: {
          none: 'Aucun emblème',
          crane: 'Grue de longévité',
          lotus: 'Fleur de lotus',
          mountain_cloud: 'Nuages des hautes montagnes',
        },
      },
      twilly: {
        dualColorway: 'Harmonie bicolore des pointes',
        colorways: {
          indigo_and_ivory: 'Pointes indigo & Corps nacre',
          crimson_and_cream: 'Pointes pourpre & Corps sable',
          saffron_and_slate: 'Pointes safran & Corps ardoise',
        },
        motifPattern: 'Motif textile',
        patterns: {
          geometric_rhombus: 'Losanges géométriques épurés',
          batik_floral: 'Chrysanthème batik H’Mông',
          flowing_silk: 'Rubans ondulants contemporains',
        },
        monogram: 'Initiale brodée (+50 000 VND)',
        monogramPlaceholder: '1 majuscule (ex: L, P, H...)',
        symbol: 'Emblème brodé (+100 000 VND)',
        symbols: {
          none: 'Aucun emblème',
          crane: 'Grue de longévité',
          lotus: 'Fleur de lotus',
          mountain_cloud: 'Nuages des hautes montagnes',
        },
      },
      fees: {
        monogramFee: '+50 000 VND',
        symbolFee: '+100 000 VND',
        frameFee: '+150 000 VND',
      },
      addToCartSuccess: 'Création ajoutée à votre panier !',
    },
    cart: {
      title: 'Votre Panier',
      empty: 'Votre panier est vide',
      emptySubtitle: 'Explorez nos pièces artisanales et composez un objet unique.',
      basePrice: 'Prix de base',
      addons: 'Options personnalisées',
      quantity: 'Quantité',
      remove: 'Supprimer',
      subtotal: 'Sous-total',
      currencyNote: 'Paiement réel en VND. Devises étrangères affichées à titre indicatif selon le cours Vietcombank (septembre 2026).',
      studentNotice: 'Démonstrateur de projet étudiant. Aucune transaction financière réelle n’est effectuée.',
      checkoutBtn: 'Tester la commande (Démo)',
      currencySelectorLabel: 'Devise de référence',
      orderSuccessTitle: 'Commande de démonstration enregistrée !',
      orderSuccessDesc: 'Merci d’avoir testé notre prototype de recherche étudiante Dệt Sắc Việt.',
      close: 'Fermer',
    },
    about: {
      title: 'À Propos de Dệt Sắc Việt',
      subtitle: 'Un projet d’étude reliant l’artisanat textile vietnamien aux modes de vie contemporains.',
      storyTitle: 'Innovation née des racines',
      storyP1: 'Dệt Sắc Việt est né du travail de recherche d’étudiants passionnés par le patrimoine. Émus par la dextérité des femmes H’Mông et le bruissement des métiers de Vạn Phúc, nous concevons des objets du quotidien élégants et porteurs de sens.',
      storyP2: 'Nous croyons que préserver une tradition consiste à la faire vivre dans nos intérieurs modernes.',
      projectBadge: 'Projet d’Étude Académique (Concept Étudiant)',
      projectDisclaimer: 'Site vitrine conceptuel réalisé dans le cadre d’un projet académique. Les prix et achats sont simulés.',
      contactTitle: 'Nous Écrire & Partager vos Remarques',
      contactSubtitle: 'Nous accueillons avec grand plaisir vos avis pour enrichir ce projet de design.',
      form: {
        name: 'Votre nom complet',
        email: 'Adresse email',
        topic: 'Objet de la demande',
        topics: {
          general: 'Retour d’expérience général',
          custom_inquiry: 'Question sur la personnalisation',
          cultural_exchange: 'Échange culturel & partenariats',
          student_feedback: 'Remarques pédagogiques',
        },
        message: 'Votre message...',
        sendBtn: 'Envoyer le message',
        sending: 'Envoi en cours...',
        sentSuccess: 'Merci beaucoup ! Votre message a bien été transmis à l’équipe étudiante.',
      },
    },
    chatbot: {
      launcherText: 'Conseiller Culturel & Cadeaux',
      drawerTitle: 'Assistant Style & Patrimoine',
      drawerSubtitle: 'Pour tout savoir sur les brocarts, les soies et l’art des harmonies de couleurs.',
      scenarioTitle: 'Scénarios Rapides',
      scenarios: {
        gift: {
          label: '🎁 Conseil Cadeau',
          prompt: 'Je recherche un cadeau raffiné en soie ou en brocart. Que me conseillez-vous ?',
        },
        palette: {
          label: '🎨 Harmonie des Couleurs',
          prompt: 'Comment assortir les couleurs du clutch ou du tableau pour un rendu très contemporain ?',
        },
        materials: {
          label: '🧵 Matières & Terroirs de Soie',
          prompt: 'Quelles sont les différences entre les brocarts ethniques et entre les soies de Vạn Phúc et Bảo Lộc ?',
        },
      },
      inputPlaceholder: 'Posez votre question sur les matières, motifs ou cadeaux...',
      send: 'Envoyer',
      typing: 'Recherche dans les archives culturelles...',
      welcomeMsg: 'Bonjour ! Je suis l’Assistant Culture & Design de Dệt Sắc Việt. Choisissez l’un des thèmes ci-dessous ou posez-moi vos questions librement !',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — Tableau Textile Mural',
        categoryLabel: 'Décoration & Art Mural',
        shortDesc: 'Panneau de brocart ethnique authentique mis en valeur sur toile brute, avec encadrement en chêne ou laiton.',
        detailedDesc: 'Transforme un fragment de tissage traditionnel en œuvre murale contemporaine, apportant texture et chaleur à l’espace.',
        materialInfo: 'Brocart tissé main H’Mông ou Thaï monté sur toile de lin naturel; cadre en chêne massif ciré ou laiton.',
        designStory: 'Rendre hommage aux savoir-faire montagnards dans une scénographie épurée.',
        technique: 'Batik à la cire H’Mông ou tissage Thaï · Montage d’art sur mesure',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — Pochette d’Artisan',
        categoryLabel: 'Accessoire Personnalisé Haut de Gamme',
        shortDesc: 'Pochette moderne ornée d’une bande de brocart fait main, fermoir métallique galvanisé et initiales brodées.',
        detailedDesc: 'L’équilibre idéal entre une ligne épurée et l’énergie d’un textile tribal d’exception.',
        materialInfo: 'Toile enduite résistante; bandeau de brocart artisanal authentique; pièces métalliques anticorrosion.',
        designStory: 'Un hommage nomade à la patience des artisanes des hauts plateaux.',
        technique: 'Assemblage textile de précision · Finition sellier · Monogramme brodé',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — Carré de Soie de Mûrier',
        categoryLabel: 'Haute Soierie Vietnamienne',
        shortDesc: 'Tissé en soie de mûrier chatoyante, bordé d’un roulotté main minutieux et monogramme sur mesure.',
        detailedDesc: 'Un carré généreux et caressant, respirant en été et protecteur en hiver grâce à la pureté des fils de soie.',
        materialInfo: 'Soie de mûrier naturelle tissée à Bảo Lộc ou Vạn Phúc; teintures certifiées douces.',
        designStory: 'Inspiré des courbes ondoyantes des sculptures de la dynastie Lý et de la grâce de Hà Đông.',
        technique: 'Filage à haute torsion · Ourlet roulotté à la française fait main',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — Ruban de Soie Polyvalent',
        categoryLabel: 'Ruban Chic en Soie',
        shortDesc: 'Ruban fin aux extrémités biseautées, à porter autour du cou, au poignet ou à nouer sur un sac.',
        detailedDesc: 'Une touche contemporaine et joyeuse pour intégrer l’artisanat d’art dans un look quotidien.',
        materialInfo: 'Soie de mûrier dense de Bảo Lộc; coutures invisibles faites main.',
        designStory: 'Créé pour les esprits créatifs désirant emporter une note d’héritage vietnamien au bureau.',
        technique: 'Tissage double face · Coupe en biais à 45° · Point invisible',
      },
    },
  },

  ko: {
    brandName: 'Dệt Sắc Việt (벳삭비엣)',
    brandTagline: '핸드위빙 전통 브로케이드 & 현대적 천연 실크',
    nav: {
      home: '홈',
      stories: '문화 이야기',
      shop: '스토어',
      customizer: '커스텀 디자인',
      about: '소개 & 문의',
      cart: '장바구니',
    },
    hero: {
      badge: '베트남 장인 정신의 살아있는 유산',
      title: '현대 생활 속에 피어난 천년의 숨결',
      subtitle: '바오록(Bảo Lộc)과 반푹(Vạn Phúc)의 윤기 나는 천연 실크, 그리고 흐몽·타이·자오족 장인들의 손길로 완성된 핸드메이드 직물이 나만의 감각적인 라이프스타일 오브제로 재탄생합니다.',
      exploreBtn: '컬렉션 보기',
      customBtn: '직접 디자인하기',
      craftEthos: '전통 산간 마을의 수공예가 현대 공간으로 이어집니다',
    },
    featured: {
      heading: '네 가지 시그니처 헤리티지 에디션',
      subheading: '검증된 정통 수공예 소재에 나만의 커스터마이징을 더해 완성하세요.',
      viewDetail: '상세보기',
      customizeNow: '커스텀하기',
      startingFrom: '시작가',
    },
    culturalStories: {
      badge: '토착 문화 기록과 장인 정신',
      title: '천연 실크와 고유 문양에 깃든 오랜 여정',
      intro: '베트남의 전통 토껌(Thổ cẩm) 직물과 천연 실크는 단순한 옷감이 아닌 세대를 넘어 전승된 기억과 세계관입니다.',
      hmongTitle: '흐몽(H’Mông)족: 천연 밀랍 바틱 & 쪽빛 염색',
      hmongDesc: '흐몽족 여성들은 구리 펜에 녹인 천연 밀랍을 묻혀 삼베 직물 위에 정교한 태양 나선형 문양을 손수 그립니다. 천연 쪽물에 수십 차례 담가 깊은 푸른빛을 입힌 후 밀랍을 녹여내 선명한 흰 문양을 완성합니다.',
      hmongTech: '밀랍 바틱 기법 · 다층 천연 쪽염색 · 삼베 위 십자수 기법',
      thaiTitle: '타이(Thái)족: 베틀 북 직조 & 풍요의 마름모 문양',
      thaiDesc: '북서부 타이족은 베틀로 용의 눈과 논밭의 비옥함을 뜻하는 마름모(Quả trám) 문양을 짜냅니다. 붉은 황토색, 울금 노란색, 깊은 남색의 조화가 돋보입니다.',
      thaiTech: '수동 베틀 직조 · 풍요와 화합을 상징하는 마름모 문양 · 천연 대비 염색',
      daoTitle: '자오(Dao)족: 밑그림 없는 뒷면 자수 & 신성한 호랑이 발자국',
      daoDesc: '붉은 자오족 장인들은 천의 올을 세어가며 뒷면에서 수를 놓아 앞면에 오차 없는 문양을 만듭니다. 숲의 수호를 기원하는 소나무와 호랑이 발자국 문양이 대표적입니다.',
      daoTech: '도안 없는 뒷면 올 세기 자수 · 수호 소나무 & 호랑이 발자국 · 액막이 은방울',
      silkTitle: '베트남 실크의 두 가지 대표 산지',
      silkIntro: '지역 고유의 특성을 존중하기 위해 모호한 수식어 없이 산지별 특성을 투명하게 명시합니다.',
      vanPhucTitle: '반푹(Vạn Phúc, 하동) — 천년 역사의 전통 문양 실크',
      vanPhucDesc: '1,000년 전통의 명주 마을로, 빛의 각도에 따라 구름 문양이 은은하게 드러나는 전통 자카드 실크(Lụa Vân)로 유명합니다.',
      baoLocTitle: '바오록(Bảo Lộc, 람동) — 고원의 프리미엄 현대 실크 수도',
      baoLocDesc: '선선한 고원 기후에서 백옥 같은 고품질 누에고치를 얻어 고밀도로 촘촘하게 제직하여 부드럽고 매끄러운 광택을 자랑합니다.',
      integrityNote: '품질 원칙: 검증된 수공예 천연 실크와 산간 소수민족 토껌을 정직하게 표기하며 과장된 100% 문구를 남발하지 않습니다.',
      viewRelatedProduct: '이 소재가 사용된 제품 보기',
    },
    shop: {
      title: '크래프트 컬렉션',
      subtitle: '장인의 손길로 준비된 네 가지 제품을 취향에 맞춰 자유롭게 커스텀해 보세요.',
      filterMaterial: '소재별',
      filterPurpose: '용도별',
      filterGift: '선물 목적별',
      all: '전체',
      materials: {
        brocade_linen: '전통 토껌 & 린넨',
        silk: '바오록/반푹 천연 실크',
        hybrid: '실크 & 토껌 믹스',
      },
      purposes: {
        decor: '인테리어 & 홈데코',
        daily_accessories: '데일리 패션 소품',
        silk_fashion: '실크 스카프 & 패션',
      },
      gifts: {
        housewarming: '집들이 & 공간 장식',
        international: '외국인 친구 & 기념 선물',
        personal_loved: '나를 위한 선물 & 연인',
      },
      clearFilters: '필터 초기화',
      productsFound: '개 제품',
    },
    productDetail: {
      materialSpecs: '소재 및 규격',
      culturalNarrative: '디자인 스토리',
      craftTechnique: '장인 공예 기법',
      customizationHighlights: '커스텀 옵션 안내',
      designYourOwnBtn: '직접 디자인하기 (Design Your Own)',
      addToCartBtn: '장바구니 담기',
      basePriceLabel: '기본 가격',
      guaranteeNote: '정통 핸드메이드 공예품 · 문화 스토리가 담긴 아트 페이퍼 기프트 박스 포장',
    },
    customizer: {
      pageTitle: 'Design Your Own — 실시간 디자인 스튜디오',
      pageSubtitle: '배경 색상, 직물 패턴, 금속 부자재, 이니셜 각인을 선택하세요. 실시간 인터랙티브 프리뷰로 확인할 수 있습니다.',
      selectProduct: '커스텀할 제품 선택',
      basePrice: '기본 가격',
      addonsFee: '커스텀 추가 비용',
      totalPrice: '최종 합계',
      formula: '기본 가격 + 커스텀 옵션 = 최종 합계',
      interactiveNotice: '인터랙티브 그래픽 프리뷰로 실제 소재와 패턴 조합을 실시간 시뮬레이션합니다.',
      wallArt: {
        size: '액자 크기',
        sizes: {
          '30x40': '30 x 40 cm (데스크 & 협탁용)',
          '40x60': '40 x 60 cm (거실 표준형)',
          '50x70': '50 x 70 cm (대형 포인트 액자)',
        },
        bgColor: '캔버스 배경색',
        bgColors: {
          cream: '내추럴 크림',
          indigo: '미드나잇 인디고 블루',
          slate: '클라우드 슬레이트 그레이',
          terracotta: '웜 테라코타 브릭',
        },
        position: '토껌 배치 스타일',
        positions: {
          center: '클래식 정중앙 대칭',
          asymmetric: '현대적 비대칭 코너',
          horizontal_stripe: '수평 런너 스트라이프',
        },
        frame: '액자 프레임',
        frames: {
          oak_natural: '내추럴 오크 원목 (기본)',
          premium_brass: '프리미엄 브라스 황동 라인 프레임 (+150,000 VND)',
        },
      },
      clutch: {
        bodyColor: '클러치 바디 색상',
        bodyColors: {
          graphite: '그라파이트 블랙',
          deep_indigo: '딥 인디고 블루',
          warm_cognac: '웜 코냑 브라운',
          sand_cream: '사막 샌드 크림',
        },
        brocadePattern: '소수민족 전통 패턴',
        patterns: {
          hmong_indigo_spiral: '흐몽 태양 나선형 바틱',
          thai_rhombus_diamond: '타이 풍요 기원 마름모',
          dao_red_pine: '레드 자오 수호 소나무 자수',
        },
        hardwareColor: '지퍼 및 금속 장식',
        hardwares: {
          antique_brass: '빈티지 앤틱 브라스',
          matte_gold: '매트 브러시드 골드',
          smoked_silver: '스모키 스털링 실버',
        },
        monogram: '개인 이니셜 자수 (+50,000 VND)',
        monogramPlaceholder: '영문 1~3자 입력 (예: VN, AN...)',
        symbol: '미니 엠블럼 자수 (+100,000 VND)',
        symbols: {
          none: '자수 없음',
          crane: '장수와 고결함의 학(Crane)',
          lotus: '순결한 연꽃(Lotus)',
          mountain_cloud: '고원의 구름과 산(Highland Mist)',
        },
      },
      scarf: {
        baseColor: '실크 바탕 색상',
        baseColors: {
          ivory_silk: '천연 아이보리 실크',
          coral_blush: '웜 코랄 블러시',
          jade_teal: '임페리얼 제이드 틸',
          saffron_gold: '사프란 골든옐로우',
        },
        borderColor: '핸드롤 테두리 색상',
        borderColors: {
          indigo_rolled: '인디고 블루 핸드롤 테두리',
          rhododendron_red: '진달래 크림슨 레드 테두리',
          gilded_amber: '앰버 골드 테두리',
        },
        motifStyle: '실크 문양 스타일',
        motifs: {
          van_phuc_subtle: '반푹 은은한 톤온톤 자카드',
          ly_dynasty_wave: '리(Lý) 왕조 전통 물결 문양',
          brocade_silk_border: '토껌 모티프 실크스크린 라인',
        },
        monogram: '이니셜 자수 추가 (+50,000 VND)',
        monogramPlaceholder: '이니셜 입력 (예: MH, TH...)',
        symbol: '미니 엠블럼 자수 (+100,000 VND)',
        symbols: {
          none: '자수 없음',
          crane: '전통 학(Crane)',
          lotus: '순결한 연꽃(Lotus)',
          mountain_cloud: '고원의 산과 구름',
        },
      },
      twilly: {
        dualColorway: '양 끝 포인트 컬러 조합',
        colorways: {
          indigo_and_ivory: '딥 인디고 팁 & 펄 바디',
          crimson_and_cream: '크림슨 팁 & 샌드 바디',
          saffron_and_slate: '사프란 팁 & 슬레이트 바디',
        },
        motifPattern: '패턴 스타일',
        patterns: {
          geometric_rhombus: '모던 기하학 마름모',
          batik_floral: '흐몽 국화 밀랍 꽃무늬',
          flowing_silk: '현대적 유선형 리본',
        },
        monogram: '대문자 이니셜 자수 (+50,000 VND)',
        monogramPlaceholder: '대문자 1자 (예: L, P, H...)',
        symbol: '미니 엠블럼 자수 (+100,000 VND)',
        symbols: {
          none: '자수 없음',
          crane: '전통 학(Crane)',
          lotus: '순결한 연꽃(Lotus)',
          mountain_cloud: '고원의 산과 구름',
        },
      },
      fees: {
        monogramFee: '+50,000 VND',
        symbolFee: '+100,000 VND',
        frameFee: '+150,000 VND',
      },
      addToCartSuccess: '나만의 디자인이 장바구니에 담겼습니다!',
    },
    cart: {
      title: '쇼핑백',
      empty: '장바구니가 비어 있습니다',
      emptySubtitle: '베트남 장인의 손길이 담긴 작품을 살펴보고 나만의 디자인을 만들어보세요.',
      basePrice: '기본가',
      addons: '커스텀 추가',
      quantity: '수량',
      remove: '삭제',
      subtotal: '합계',
      currencyNote: '실제 결제는 VND(베트남 동) 기준입니다. 외화 표시는 비엣콤뱅크 고시 환율(2026년 9월 기준)을 바탕으로 한 단순 참고용입니다.',
      studentNotice: '본 웹사이트는 디자인 학술 연구 및 포트폴리오를 위한 데모 프로젝트입니다. 실제 금전 결제는 이루어지지 않습니다.',
      checkoutBtn: '테스트 주문 진행 (Demo Checkout)',
      currencySelectorLabel: '참고 통화 선택',
      orderSuccessTitle: '테스트 주문 완료!',
      orderSuccessDesc: 'Dệt Sắc Việt 학생 프로젝트 시뮬레이션을 이용해 주셔서 감사합니다. 제작하신 디자인이 가상 세션에 정상 기록되었습니다.',
      close: '닫기',
    },
    about: {
      title: 'Dệt Sắc Việt 프로젝트 소개',
      subtitle: '베트남의 유서 깊은 직조 유산을 현대인의 일상과 연결하기 위한 디자인 전공 학생 연구 프로젝트입니다.',
      storyTitle: '뿌리 깊은 전통에서 피어난 현대적 감각',
      storyP1: 'Dệt Sắc Việt은 베트남 전통 공예와 현대 디자인을 접목하고자 시작된 학생 캡스톤 프로젝트입니다. 밤새 밀랍을 다듬는 흐몽족 여인들의 손끝과 반푹 마을 베틀 소리에서 영감을 받아, 소중한 유산을 도심 생활에 어울리는 감각적인 소품으로 승화시켰습니다.',
      storyP2: '진정한 문화 보존은 전통을 박물관에만 두지 않고, 오늘날 젊은 세대가 직접 만지고 소장하며 커스텀할 수 있는 라이프스타일의 일부로 만드는 데 있다고 믿습니다.',
      projectBadge: '학술 디자인 연구 프로젝트 (Student Showcase Concept)',
      projectDisclaimer: '주의: 본 웹사이트는 디자인 프로토타이핑 및 문화 소개를 위해 제작된 가상 쇼케이스입니다. 표시된 금액과 결제는 시뮬레이션 용도입니다.',
      contactTitle: '프로젝트 피드백 & 메시지 남기기',
      contactSubtitle: '더 나은 연구 발전을 위해 여러분의 소중한 의견과 조언을 기다립니다.',
      form: {
        name: '성함',
        email: '이메일 주소',
        topic: '문의 주제',
        topics: {
          general: '프로젝트 일반 의견',
          custom_inquiry: '제품 커스텀 아이디어 문의',
          cultural_exchange: '문화 교류 및 장인 연계',
          student_feedback: '학술 평가 및 전문가 피드백',
        },
        message: '메시지를 입력하세요...',
        sendBtn: '메시지 전송',
        sending: '전송 중...',
        sentSuccess: '감사합니다! 소중한 메시지가 학생 연구팀에 전달되었습니다.',
      },
    },
    chatbot: {
      launcherText: '문화 & 선물 도우미',
      drawerTitle: '문화 & 스타일 어시스턴트',
      drawerSubtitle: '베트남 토껌과 실크의 역사, 어울리는 컬러 매칭을 친절히 안내해 드립니다.',
      scenarioTitle: '추천 질문 시나리오',
      scenarios: {
        gift: {
          label: '🎁 의미 있는 선물 추천',
          prompt: '실크나 토껌 소재로 특별한 선물을 찾고 있어요. 추천해 주실 수 있나요?',
        },
        palette: {
          label: '🎨 세련된 컬러 조합 가이드',
          prompt: '클러치나 벽걸이 액자를 고급스럽고 현대적으로 컬러 매칭하려면 어떻게 해야 할까요?',
        },
        materials: {
          label: '🧵 소수민족 직물과 실크 구분',
          prompt: '소수민족 토껌 기법의 차이점과 반푹 실크, 바오록 실크의 차이는 무엇인가요?',
        },
      },
      inputPlaceholder: '문양, 직조 기법, 선물 팁 등을 물어보세요...',
      send: '전송',
      typing: '문화 아카이브를 탐색 중입니다...',
      welcomeMsg: '안녕하세요! Dệt Sắc Việt의 문화 & 스타일 어시스턴트입니다. 아래 추천 시나리오를 누르거나 소재, 문양, 선물 추천에 대해 자유롭게 질문해 주세요!',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — 패브릭 벽걸이 액자',
        categoryLabel: '인테리어 오브제 & 벽면 아트',
        shortDesc: '소수민족 장인이 손수 짠 고유 토껌 직물을 린넨 캔버스 위에 현대적으로 담아낸 원목 및 브라스 프레임 액자.',
        detailedDesc: '전통 산간 소수민족의 예술적 직물을 현대 거실과 오피스를 위한 세련된 월 아트 피스로 탈바꿈했습니다. 입체감 있는 직조감과 묵직한 색감이 공간에 깊이를 더합니다.',
        materialInfo: '흐몽족 또는 타이족 장인의 핸드위빙 토껌; 내추럴 린넨 캔버스; 천연 오크 원목 또는 브라스 프레임 마감.',
        designStory: '의복에만 머물던 전통 직물을 벽면 예술품으로 해방시켜 고유의 문양을 보존하고 감상할 수 있도록 기획되었습니다.',
        technique: '흐몽족 천연 밀랍 바틱 또는 타이족 수동 베틀 직조 · 수작업 레이어드 마운팅',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — 헤리티지 클러치백',
        categoryLabel: '핸드크래프트 커스텀 클러치',
        shortDesc: '모던한 실루엣에 화려한 전통 토껌 밴드로 포인트를 준 파우치. 고급 도금 하드웨어와 이니셜 자수 지원.',
        detailedDesc: '미니멀한 이브닝 클러치 디자인과 소수민족 특유의 강렬한 수공예 패턴의 감각적인 조화. 격식 있는 자리나 일상 포인트로 완벽합니다.',
        materialInfo: '내구성 강화 코팅 캔버스; 정통 핸드메이드 소수민족 토껌 직물 스트립; 내식성 도금 금속 부자재.',
        designStory: '베틀 앞에서 며칠 밤을 지새우는 장인들의 따뜻한 미소와 손길을 담아낸 휴대용 오브제입니다.',
        technique: '정밀 핸드 스티칭 봉제 · 엣지 강화 보강 · 맞춤형 모노그램 자수',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — 천연 멀베리 실크 스카프',
        categoryLabel: '정통 핸드메이드 실크 웨어',
        shortDesc: '베트남 천연 실크 특유의 매끄러운 윤기와 부드러운 감촉. 장인의 정교한 핸드롤 마감과 이니셜 자수 옵션.',
        detailedDesc: '여름에는 통기성 있게 시원하고 겨울에는 체온을 따스하게 감싸주는 최고급 실크 스카프. 자연광에 따라 은은하게 흐르는 광택이 우아함을 더합니다.',
        materialInfo: '바오록 또는 반푹 산지에서 공수한 천연 멀베리 실크; 친환경 천연 인증 염료.',
        designStory: '베트남 리(Lý) 왕조의 전통 물결 조각과 반푹 명주의 우아한 자카드 곡선에서 영감을 얻었습니다.',
        technique: '고연사 천연 생사 제직 · 전통 프렌치 핸드롤(Hand-rolled) 마감 기법',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — 실크 트윌리 리본',
        categoryLabel: '멀티 스타일링 실크 트윌리',
        shortDesc: '목, 손목 또는 핸드백 손잡이에 다양하게 연출할 수 있는 슬림한 사선 커팅 실크 리본 스카프.',
        detailedDesc: '현대적인 일상 패션에 베트남 전통 색채를 센스 있게 녹여낼 수 있는 젊고 감각적인 액세서리입니다.',
        materialInfo: '바오록산 고밀도 천연 실크; 안쪽으로 봉제선을 숨긴 고급 마감.',
        designStory: '출근길이나 일상 속에서도 가볍게 우리의 전통 예술을 곁에 두고자 하는 젊은 세대를 위해 디자인되었습니다.',
        technique: '양면 고밀도 실크 직조 · 45도 정밀 바이어스 재단 · 무봉제선 핸드 스티칭',
      },
    },
  },

  ja: {
    brandName: 'Dệt Sắc Việt (デット・サック・ヴィエット)',
    brandTagline: '手織り伝統錦織＆現代シルク工芸',
    nav: {
      home: 'ホーム',
      stories: '文化ストーリー',
      shop: 'ショップ',
      customizer: 'デザイン・ユア・オウン',
      about: 'ブランド＆連絡先',
      cart: 'カート',
    },
    hero: {
      badge: 'ベトナムの生きた工芸遺産',
      title: '現代の暮らしに息づく伝統の織り糸',
      subtitle: 'バオロック（Bảo Lộc）とヴァンフック（Vạn Phúc）の極上シルク、そしてモン族・タイ族・ザオ族の手織り錦織を、あなただけの感性でカスタマイズできる現代的なライフスタイルアイテムへと昇華しました。',
      exploreBtn: '作品を見る',
      customBtn: '自分でデザインする',
      craftEthos: '山岳民族の集落から現代の洗練された空間へ',
    },
    featured: {
      heading: '4つの象徴的ヘリテージ作品',
      subheading: '真正な伝統技術とリアルタイムのパーソナライズを融合した作品たち。',
      viewDetail: '詳細を見る',
      customizeNow: 'カスタマイズ',
      startingFrom: '参考価格',
    },
    culturalStories: {
      badge: '文化資料と土着の知恵',
      title: '絹糸と伝統幾何学模様が辿った千年の軌跡',
      intro: 'ベトナムの伝統織物（Thổ cẩm）や天然シルクは単なる布地ではなく、世代を超えて受け継がれた記憶と自然観そのものです。',
      hmongTitle: 'モン（H’Mông）族：蜜蝋バティックと藍染め',
      hmongDesc: 'モン族の女性は銅製のペンに溶かした熱い蜜蝋をつけ、手紡ぎの麻布に太陽の渦巻き模様を描きます。天日と藍の甕（かめ）で幾日も重ねて染め上げ、蝋を湯で煮落とすことで鮮やかな白と藍の文様が浮かび上がります。',
      hmongTech: '蜜蝋バティック蝋防染 · 多重天然藍染め · 麻布のクロスステッチ刺繍',
      thaiTitle: 'タイ（Thái）族：高機織りと繁栄の菱形文様',
      thaiDesc: '西北部タイ族は、龍の目や実り豊かな棚田を象徴する「菱形（クアチャム）」文様を織り込みます。赤土、ウコンの黄、深い藍の鮮やかな対比が特徴です。',
      thaiTech: '杼（ひ）による紋織り · 豊穣を祈る菱形文様 · 植物性染料の色彩調和',
      daoTitle: 'ザオ（Dao）族：裏面からの数え糸刺繍と神聖な虎の足跡',
      daoDesc: '赤ザオ族は下絵を描かず、布の織り目を数えて裏側から針を通す卓越した技法を持ちます。家族を守る森の霊力「松の木」や「虎の足跡」のモチーフが有名です。',
      daoTech: '図案無しの裏面織り目数え刺繍 · 松の木と虎の足跡の護符文様 · 銀鈴飾り',
      silkTitle: 'ベトナムシルクの二大名産地',
      silkIntro: '誇りある産地の個性を正しく伝えるため、曖昧な表記を排し産地情報を正確に開示しています。',
      vanPhucTitle: 'ヴァンフック（Vạn Phúc, ハドン） — 千年受け継がれる雲紋ジャカード絹',
      vanPhucDesc: '1,000年以上の歴史を誇る絹織物の里。光の加減で雲の紋様が浮かび上がる伝統の薄絹「ルア・ヴァン」で知られます。',
      baoLocTitle: 'バオロック（Bảo Lộc, ラムドン） — 高原が育む現代シルクの都',
      baoLocDesc: '冷涼な高原気候で育まれた純白の繭から極細の生糸を紡ぎ、高密度で織り上げることで、滑らかで上品なドレープを生み出します。',
      integrityNote: '真正性の証明：各作品は手織りの天然ロット素材を使用し、過剰な「100%」表現を避け正確な素材情報を提示しています。',
      viewRelatedProduct: 'この素材を用いた作品を見る',
    },
    shop: {
      title: 'クラフトコレクション',
      subtitle: '職人の温もりが宿る4つのデザインを、お好みの仕様でカスタマイズしていただけます。',
      filterMaterial: '素材で選ぶ',
      filterPurpose: '用途で選ぶ',
      filterGift: 'ギフト用途',
      all: 'すべて',
      materials: {
        brocade_linen: '伝統錦織＆生成りリネン',
        silk: 'バオロック／ヴァンフック天然絹',
        hybrid: '絹＆錦織のコンビネーション',
      },
      purposes: {
        decor: 'インテリア＆空間装飾',
        daily_accessories: 'デイリーアクセサリー',
        silk_fashion: 'シルクファッション＆スカーフ',
      },
      gifts: {
        housewarming: '新築祝い・空間のアクセント',
        international: '国際交流・海外へのお土産',
        personal_loved: '自分へのご褒美・大切な人へ',
      },
      clearFilters: '条件をリセット',
      productsFound: '件の作品',
    },
    productDetail: {
      materialSpecs: '素材および仕様',
      culturalNarrative: 'デザインの背景',
      craftTechnique: '手仕事の技術',
      customizationHighlights: 'カスタマイズ項目',
      designYourOwnBtn: '自分でデザインする (Design Your Own)',
      addToCartBtn: 'カートに追加する',
      basePriceLabel: '基本価格',
      guaranteeNote: '正真正銘の手仕事工芸 · 文化小冊子付き特製ギフトボックス包装',
    },
    customizer: {
      pageTitle: 'Design Your Own — デザインスタジオ',
      pageSubtitle: '背景色、伝統錦織パーツ、金具の仕上げ、イニシャル刺繍を選択。リアルタイムプレビューでご確認いただけます。',
      selectProduct: '製品を選択',
      basePrice: '基本価格',
      addonsFee: 'オプション追加料金',
      totalPrice: '合計金額',
      formula: '基本価格 + カスタマイズ料金 = 合計金額',
      interactiveNotice: '職人の手仕事と素材感を再現したインタラクティブグラフィックプレビューです。',
      wallArt: {
        size: '額縁サイズ',
        sizes: {
          '30x40': '30 x 40 cm (デスクや飾り棚向け)',
          '40x60': '40 x 60 cm (リビング標準サイズ)',
          '50x70': '50 x 70 cm (存在感ある大型サイズ)',
        },
        bgColor: 'キャンバス下地カラー',
        bgColors: {
          cream: '生成りナチュラルクリーム',
          indigo: '深遠なミッドナイト藍色',
          slate: '落ち着いたストームグレー',
          terracotta: '温もりあるテラコッタ煉瓦色',
        },
        position: '錦織の配置位置',
        positions: {
          center: 'クラシック中央シンメトリー',
          asymmetric: '現代的なアシンメトリー配置',
          horizontal_stripe: '水平ランナースタイル',
        },
        frame: 'フレーム仕上げ',
        frames: {
          oak_natural: 'ナチュラルオーク無垢材 (標準)',
          premium_brass: '真鍮ゴールドライン高級フレーム (+150,000 VND)',
        },
      },
      clutch: {
        bodyColor: 'クラッチ本体カラー',
        bodyColors: {
          graphite: 'グラファイトブラック',
          deep_indigo: 'ディープ藍色',
          warm_cognac: 'コニャックレザーブラウン',
          sand_cream: 'デザートサンドクリーム',
        },
        brocadePattern: '伝統錦織パターン',
        patterns: {
          hmong_indigo_spiral: 'モン族 太陽の渦巻き蜜蝋バティック',
          thai_rhombus_diamond: 'タイ族 繁栄の菱形織文様',
          dao_red_pine: '赤ザオ族 聖なる松の木刺繍',
        },
        hardwareColor: 'ファスナー＆金具仕上げ',
        hardwares: {
          antique_brass: 'アンティーク真鍮仕上げ',
          matte_gold: 'マットブラッシュドゴールド',
          smoked_silver: 'スモーキーシルバー',
        },
        monogram: 'イニシャル刺繍 (+50,000 VND)',
        monogramPlaceholder: '英字1〜3文字（例: VN, AN...）',
        symbol: 'ミニシンボル刺繍 (+100,000 VND)',
        symbols: {
          none: '刺繍なし',
          crane: '長寿を祈る伝統の鶴 (Crane)',
          lotus: '清らかな蓮の花 (Lotus)',
          mountain_cloud: '高嶺の雲と山 (Mountain Cloud)',
        },
      },
      scarf: {
        baseColor: 'シルク生地ベースカラー',
        baseColors: {
          ivory_silk: '天然アイボリーシルク',
          coral_blush: 'ウォームコーラルピンク',
          jade_teal: '翡翠（ヒスイ）グリーン',
          saffron_gold: 'サフランゴールドイエロー',
        },
        borderColor: '手巻き縁かがりカラー',
        borderColors: {
          indigo_rolled: '藍色手巻きロールヘム',
          rhododendron_red: '石楠花（シャクナゲ）クリムゾンレッド',
          gilded_amber: 'アンバーゴールドエッジ',
        },
        motifStyle: 'シルク装飾スタイル',
        motifs: {
          van_phuc_subtle: 'ヴァンフック風 上品な同色ジャカード調',
          ly_dynasty_wave: '李（リー）朝の聖なる波文様',
          brocade_silk_border: '錦織モチーフのシルクスクリーンプリント',
        },
        monogram: 'イニシャル刺繍 (+50,000 VND)',
        monogramPlaceholder: 'イニシャル（例: MH, TH...）',
        symbol: 'ミニシンボル刺繍 (+100,000 VND)',
        symbols: {
          none: '刺繍なし',
          crane: '長寿の鶴',
          lotus: '清らかな蓮の花',
          mountain_cloud: '高嶺の雲と山',
        },
      },
      twilly: {
        dualColorway: '両端のバイカラー配色',
        colorways: {
          indigo_and_ivory: 'インディゴ先端 ＆ パールホワイト',
          crimson_and_cream: '深紅先端 ＆ サンドベージュ',
          saffron_and_slate: 'サフラン先端 ＆ スレートグレー',
        },
        motifPattern: 'テキスタイルパターン',
        patterns: {
          geometric_rhombus: 'ミニマルな幾何学菱形',
          batik_floral: 'モン族 蜜蝋菊花文様',
          flowing_silk: '流れるような現代リボンライン',
        },
        monogram: '大文字イニシャル刺繍 (+50,000 VND)',
        monogramPlaceholder: '大文字1文字（例: L, P, H...）',
        symbol: 'ミニシンボル刺繍 (+100,000 VND)',
        symbols: {
          none: '刺繍なし',
          crane: '長寿の鶴',
          lotus: '清らかな蓮の花',
          mountain_cloud: '高嶺の雲と山',
        },
      },
      fees: {
        monogramFee: '+50,000 VND',
        symbolFee: '+100,000 VND',
        frameFee: '+150,000 VND',
      },
      addToCartSuccess: 'カスタマイズ作品をカートに追加しました！',
    },
    cart: {
      title: 'ショッピングバッグ',
      empty: 'カートは空です',
      emptySubtitle: 'ベトナムの手仕事コレクションから、あなただけの一品をデザインしてみませんか。',
      basePrice: '基本価格',
      addons: 'オプション料金',
      quantity: '数量',
      remove: '削除',
      subtotal: '小計',
      currencyNote: '決済はベトナムドン（VND）で行われます。外国通貨表示はベトコムバンク公示レート（2026年9月更新）に基づく参考目安です。',
      studentNotice: '本サイトは学生によるデザイン研究・コンセプト実証プロジェクトです。実際の金銭取引は発生いたしません。',
      checkoutBtn: 'ご注文シミュレーション（Demo Checkout）',
      currencySelectorLabel: '参考表示通貨',
      orderSuccessTitle: 'デモ注文が完了しました！',
      orderSuccessDesc: 'Dệt Sắc Việt 学生研究プロジェクトのデモ体験をご利用いただきありがとうございます。',
      close: '閉じる',
    },
    about: {
      title: 'Dệt Sắc Việt について',
      subtitle: 'ベトナム伝統の手織り文化と現代生活をデザインで結ぶ、学生主導の研究プロジェクトです。',
      storyTitle: '伝統の根幹から広がる創造性',
      storyP1: 'Dệt Sắc Việt はデザイン・文化専攻の学生チームによる研究から誕生しました。夜を徹して蜜蝋を描くモン族の女性たちや、ヴァンフック村で響く機織りの音に心を打たれ、この貴重な手仕事を現代のライフスタイルに溶け込む上質な品として提案したいと考えました。',
      storyP2: '真の文化保存とは、伝統を飾るだけでなく、現代の私たちが愛着を持って暮らしの中で使い続けられる形へと育てることだと信じています。',
      projectBadge: '学術研究・デザインコンセプト（Student Showcase）',
      projectDisclaimer: '注記：本サイトはデザインプロトタイピングおよび文化発信を目的とした学生によるデモ展示です。掲載価格や注文はシミュレーション用です。',
      contactTitle: 'メッセージ・ご意見のお寄せ先',
      contactSubtitle: '研究のさらなる発展のため、皆さまからのご感想やアドバイスをお待ちしております。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        topic: 'お問い合わせ項目',
        topics: {
          general: 'プロジェクト全般へのご感想',
          custom_inquiry: 'カスタマイズのアイデアについて',
          cultural_exchange: '職人連携や文化交流について',
          student_feedback: '研究指導・専門家からのレビュー',
        },
        message: 'メッセージをご記入ください...',
        sendBtn: 'メッセージを送信',
        sending: '送信中...',
        sentSuccess: 'ありがとうございます！学生研究チームにメッセージが届きました。',
      },
    },
    chatbot: {
      launcherText: '文化＆ギフト案内',
      drawerTitle: '文化＆スタイリング相談',
      drawerSubtitle: '錦織やシルクの歴史、色の組み合わせ方についてお気軽にお尋ねください。',
      scenarioTitle: 'よくある質問シナリオ',
      scenarios: {
        gift: {
          label: '🎁 心のこもったギフト選び',
          prompt: 'シルクや錦織を使った意味のある贈り物を探しています。おすすめを教えてください。',
        },
        palette: {
          label: '🎨 洗練された配色アドバイス',
          prompt: 'クラッチバッグや額装アートを現代的でおしゃれに配色するコツはありますか？',
        },
        materials: {
          label: '🧵 素材の違いと絹の名産地',
          prompt: '山岳民族の織物の違いや、ヴァンフックとバオロックのシルクの特徴を教えてください。',
        },
      },
      inputPlaceholder: '文様、織りの技術、お手入れなど何でもどうぞ...',
      send: '送信',
      typing: '文化資料を検索中...',
      welcomeMsg: 'こんにちは！Dệt Sắc Việt の文化＆スタイリング相談係です。下のシナリオを選ぶか、織物の歴史や配色について何でも質問してくださいね！',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — ファブリック額装アート',
        categoryLabel: 'インテリア＆ウォールアート',
        shortDesc: '山岳民族が手織りした本物の錦織を、素朴なリネンキャンバスに堂々と配置したオーク材または真鍮の額装アート。',
        detailedDesc: '伝統的な民族衣装の布地を、現代のリビングや書斎を彩るモダンなタペストリーアートへと再解釈しました。糸の立体感と自然染料の深みが空間に品格をもたらします。',
        materialInfo: 'モン族またはタイ族の手織り錦織；天然生成りリネンキャンバス；無垢オーク材または真鍮縁フレーム。',
        designStory: '衣服という枠を超え、古代の幾何学模様を現代アートとして永久保存する試みです。',
        technique: 'モン族の蜜蝋バティックまたはタイ族の高機織り · 多層アート額装仕上げ',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — ヘリテージクラッチバッグ',
        categoryLabel: 'カスタム手仕事アクセサリー',
        shortDesc: 'ミニマルな本体に本物の手織り錦織バンドが美しく映えるクラッチ。高級メッキ金具とイニシャル刺繍に対応。',
        detailedDesc: '洗練されたイブニングバッグのフォルムと、山岳民族の鮮やかな織物が見事に融合。パーティーから普段使いまで、会話のきっかけとなる一品です。',
        materialInfo: '耐久コーティングキャンバス；本物の手織り民族錦織；耐食性メッキ金属金具。',
        designStory: '機織り機に向かう職人たちの静かな誇りと、高地の自然への敬意を込めたバッグです。',
        technique: '精密仕立て縫製 · エッジ補強 · オーダーメイドイニシャル刺繍',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — マルベリーシルクスカーフ',
        categoryLabel: '上質ベトナム生絹ウェア',
        shortDesc: '光沢としなやかさに優れた天然シルクを贅沢に使用。丁寧な手巻き仕上げ（ハンドロール）とイニシャル刺繍に対応。',
        detailedDesc: '夏は涼しく呼吸し、冬はふわりと温かい本物のシルク。自然光を受けると優美な光沢が揺らめき、身につける人の品格を引き立てます。',
        materialInfo: 'バオロックまたはヴァンフック産天然シルク生糸；環境認証天然染料。',
        designStory: 'ベトナム李朝の流麗な波文様と、ハドン薄絹のしとやかな美しさをスカーフに込めました。',
        technique: '高撚糸天然シルク製織 · フランス式手巻き縁かがり仕上げ',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — 万能シルクリボン',
        categoryLabel: 'マルチユースシルクリボン',
        shortDesc: '首元、手首、バッグの持ち手などに自由に巻いて楽しめる、斜めカッティングの細幅シルクリボン。',
        detailedDesc: '日々のコーディネートにベトナムの伝統工芸のエッセンスを軽やかに取り入れられる、遊び心に満ちたアイテムです。',
        materialInfo: 'バオロック産高密度シルク；縫い目を隠した繊細なハンド仕立て。',
        designStory: 'オフィスや外出先でもさりげなく伝統の彩りを身近に感じられるようデザインしました。',
        technique: '両面高密度シルク製織 · 45度精密バイアスカット · すくい縫い手仕立て',
      },
    },
  },

  zh: {
    brandName: 'Dệt Sắc Việt (织色越)',
    brandTagline: '手工织锦与当代桑蚕丝美学',
    nav: {
      home: '首页',
      stories: '文化故事',
      shop: '典藏商店',
      customizer: '自由定制',
      about: '关于我们与联系',
      cart: '购物袋',
    },
    hero: {
      badge: '越南活态手工艺文化遗产',
      title: '传统丝织在当代生活中的雅致新生',
      subtitle: '珍视来自保禄（Bảo Lộc）与万福（Vạn Phúc）的天然桑蚕丝，以及赫蒙族、泰族、瑶族匠人织就的手工织锦——化身为独具现代美感的定制生活艺术品。',
      exploreBtn: '探索产品',
      customBtn: '立即开始定制',
      craftEthos: '源自深山村落的手作，步入当代生活美学空间',
    },
    featured: {
      heading: '四大标志性非遗文创作品',
      subheading: '每一件作品均融合了可溯源的真实手工工艺与富有互动性的个性化定制。',
      viewDetail: '查看详情',
      customizeNow: '立即定制',
      startingFrom: '起价',
    },
    culturalStories: {
      badge: '文献档案与在地智慧',
      title: '千百年来丝缕与图腾的漫长跋涉',
      intro: '在越南，手工织锦与桑蚕丝不仅是布料，更是世代匠人守护的民族记忆、生命哲学与自然宇宙观。',
      hmongTitle: '赫蒙（H’Mông）族织锦：蜂蜡蜡染与蓝靛古法染色',
      hmongDesc: '赫蒙族妇女用铜蜡刀蘸取滚烫的蜂蜡，在手纺麻布上直接勾勒出太阳螺旋纹与几何图腾。布料经过数天反复蓝靛发酵浸染呈现深邃夜空蓝，最后热水脱蜡展现白净线条。',
      hmongTech: '蜂蜡蜡染（Batik）工艺 · 多次古法天然蓝靛染色 · 麻布十字绣',
      thaiTitle: '泰（Thái）族织锦：织梭飞舞与繁衍菱形纹',
      thaiDesc: '西北泰族以精湛的梭织技艺著称，其菱形纹（Quả trám）象征龙目、肥沃田野与天人合一的繁荣景象，赤土红、姜黄与靛青形成鲜明对比。',
      thaiTech: '提花木织机织造 · 祈愿丰收的菱形母题 · 天然植物撞色',
      daoTitle: '瑶（Dao）族织锦：背面数纱挑花与神圣虎爪纹',
      daoDesc: '红瑶妇女精于不绘底稿、在布料背面数纱挑花的技术，使正面图案严密对称。著名的松树纹与虎爪纹象征着神林护佑与家庭平安。',
      daoTech: '无底稿背面数纱挑花 · 松树与虎爪护佑图腾 · 辟邪银铃饰',
      silkTitle: '越南桑蚕丝的南北两大历史源流',
      silkIntro: '我们恪守真实严谨原则，明确标注丝绸产地特征，绝不使用含混虚假的营销辞令。',
      vanPhucTitle: '万福（Vạn Phúc, 河东） — 千年古村的传统云纹暗花绸',
      vanPhucDesc: '拥有千年历史的古老丝绸名村，以传统云纹绸（Lụa Vân）著称：在真丝底布上织出凹凸有致的典雅花纹，在自然光下流光溢彩。',
      baoLocTitle: '保禄（Bảo Lộc, 林同） — 高原现代化优质蚕丝之都',
      baoLocDesc: '坐拥肥沃的玄武岩红土与清凉高原气候，保禄培育出品质极高的纯白蚕茧，抽丝均匀细密，织成的丝绸垂坠如水、柔滑温润。',
      integrityNote: '诚信承诺：所有作品均采用经验证的天然手织批次或原产地真丝，绝不盲目虚标“100%纯桑蚕丝”，公开透明展示技术参数。',
      viewRelatedProduct: '查看应用该材质的作品',
    },
    shop: {
      title: '文创典藏',
      subtitle: '探索精心打磨的手工之作，随心调配符合您生活格调的个性化设计。',
      filterMaterial: '材质筛选',
      filterPurpose: '使用场景',
      filterGift: '送礼指南',
      all: '全部',
      materials: {
        brocade_linen: '传统织锦与麻布',
        silk: '保禄/万福天然桑蚕丝',
        hybrid: '丝锦交融综合款',
      },
      purposes: {
        decor: '家居陈设与艺术挂件',
        daily_accessories: '日常随身配饰',
        silk_fashion: '丝质穿搭与围巾',
      },
      gifts: {
        housewarming: '乔迁新居与空间点缀',
        international: '外事交往与国际友人纪念',
        personal_loved: '悦己之选与挚爱之礼',
      },
      clearFilters: '清除筛选',
      productsFound: '件作品',
    },
    productDetail: {
      materialSpecs: '材质与规格',
      culturalNarrative: '设计背后的文化故事',
      craftTechnique: '手工制作工艺',
      customizationHighlights: '定制选项说明',
      designYourOwnBtn: '开启专属定制 (Design Your Own)',
      addToCartBtn: '加入购物袋',
      basePriceLabel: '标准基础价格',
      guaranteeNote: '手工匠造正品 · 随附文化图册与特制艺术纸盒包装',
    },
    customizer: {
      pageTitle: 'Design Your Own — 在线定制工坊',
      pageSubtitle: '自由选择底色、织锦区块、五金配件及个性化刺绣姓名。实时图形预览即时呈现设计效果。',
      selectProduct: '选择定制产品',
      basePrice: '基础价格',
      addonsFee: '定制附加费',
      totalPrice: '总计价格',
      formula: '基础价格 + 定制附加费 = 总计价格',
      interactiveNotice: '实时交互图形预览，模拟手织面料层次与光泽效果。',
      wallArt: {
        size: '画框尺寸',
        sizes: {
          '30x40': '30 x 40 厘米（书桌与案头摆设）',
          '40x60': '40 x 60 厘米（客厅标准典雅尺寸）',
          '50x70': '50 x 70 厘米（大幅气派中心画）',
        },
        bgColor: '亚麻画布底色',
        bgColors: {
          cream: '天然原麻奶白',
          indigo: '深邃夜幕蓝靛',
          slate: '沉静风暴灰',
          terracotta: '暖调红砖陶土色',
        },
        position: '织锦构图位置',
        positions: {
          center: '经典对称正中',
          asymmetric: '当代偏角留白',
          horizontal_stripe: '长青水平横带',
        },
        frame: '画框材质风格',
        frames: {
          oak_natural: '天然原木橡木框（标准配置）',
          premium_brass: '轻奢黄铜镶边高级画框 (+150,000 VND)',
        },
      },
      clutch: {
        bodyColor: '包体底色',
        bodyColors: {
          graphite: '石墨墨黑',
          deep_indigo: '深靛青蓝',
          warm_cognac: '暖调干邑棕',
          sand_cream: '沙丘浅米',
        },
        brocadePattern: '民族织锦图腾',
        patterns: {
          hmong_indigo_spiral: '赫蒙族 太阳螺旋蜡染',
          thai_rhombus_diamond: '泰族 繁盛祈愿菱形织纹',
          dao_red_pine: '红瑶族 守护神圣松树绣',
        },
        hardwareColor: '金属拉链与扣件',
        hardwares: {
          antique_brass: '复古青古铜',
          matte_gold: '哑光拉丝金',
          smoked_silver: '烟熏质感银',
        },
        monogram: '专属字母刺绣 (+50,000 VND)',
        monogramPlaceholder: '输入1至3个英文字母（如: VN, AN...）',
        symbol: '微型吉祥图腾刺绣 (+100,000 VND)',
        symbols: {
          none: '无刺绣',
          crane: '祥瑞仙鹤（高雅长寿）',
          lotus: '清雅莲花（高洁清心）',
          mountain_cloud: '高山流云（自得安详）',
        },
      },
      scarf: {
        baseColor: '桑蚕丝主色调',
        baseColors: {
          ivory_silk: '天然丝光象牙白',
          coral_blush: '温润珊瑚柔粉',
          jade_teal: '皇家御用翡翠碧绿',
          saffron_gold: '藏红花流金黄',
        },
        borderColor: '手工卷边边缘配色',
        borderColors: {
          indigo_rolled: '蓝靛深色手卷边',
          rhododendron_red: '杜鹃深红手卷边',
          gilded_amber: '琥珀金光手卷边',
        },
        motifStyle: '真丝纹样工艺',
        motifs: {
          van_phuc_subtle: '万福雅致同色暗花提花',
          ly_dynasty_wave: '李朝石刻神圣波浪抽象图纹',
          brocade_silk_border: '民族织锦艺术印花滚边',
        },
        monogram: '绣制花体专属姓名缩写 (+50,000 VND)',
        monogramPlaceholder: '姓名缩写（如: MH, TH...）',
        symbol: '微型吉祥图腾刺绣 (+100,000 VND)',
        symbols: {
          none: '无刺绣',
          crane: '祥瑞仙鹤',
          lotus: '清雅莲花',
          mountain_cloud: '高山流云',
        },
      },
      twilly: {
        dualColorway: '斜角双头撞色方案',
        colorways: {
          indigo_and_ivory: '深靛角头 ＆ 珍珠白身',
          crimson_and_cream: '深绯红角头 ＆ 浅米身',
          saffron_and_slate: '藏红花金角头 ＆ 石板灰身',
        },
        motifPattern: '图腾图案设计',
        patterns: {
          geometric_rhombus: '极简几何菱形纹',
          batik_floral: '赫蒙族 蜂蜡秋菊纹',
          flowing_silk: '当代写意流动丝带',
        },
        monogram: '绣制大写字母 (+50,000 VND)',
        monogramPlaceholder: '1个大写字母（如: L, P, H...）',
        symbol: '微型吉祥图腾刺绣 (+100,000 VND)',
        symbols: {
          none: '无刺绣',
          crane: '祥瑞仙鹤',
          lotus: '清雅莲花',
          mountain_cloud: '高山流云',
        },
      },
      fees: {
        monogramFee: '+50,000 VND',
        symbolFee: '+100,000 VND',
        frameFee: '+150,000 VND',
      },
      addToCartSuccess: '个性化定制作品已加入您的购物袋！',
    },
    cart: {
      title: '您的购物袋',
      empty: '购物袋空空如也',
      emptySubtitle: '探索我们的手作故事，亲手设计一件具有文化温度的珍品。',
      basePrice: '基础售价',
      addons: '定制选配',
      quantity: '数量',
      remove: '移除',
      subtotal: '小计金额',
      currencyNote: '实际结算金额以越南盾（VND）为准。外币金额仅按越南外贸银行（Vietcombank）2026年9月公布牌价折算，作为参考。',
      studentNotice: '本站为高校学生设计与非遗研究课题演示原型，旨在展示个性化定制全流程，不涉及实际资金交易。',
      checkoutBtn: '体验模拟结账 (Demo Checkout)',
      currencySelectorLabel: '参考折算币种',
      orderSuccessTitle: '模拟订单提交成功！',
      orderSuccessDesc: '感谢您体验“织色越 (Dệt Sắc Việt)”学生文创研究原型。您的专属定制参数已在本演示会话中完整记录。',
      close: '关闭',
    },
    about: {
      title: '关于“织色越 (Dệt Sắc Việt)”',
      subtitle: '一项旨在连接越南传统织染技艺与现代生活美学的学生设计课题。',
      storyTitle: '植根传统的当代创新',
      storyP1: '“织色越”脱胎于设计与文化研究专业学生团队的毕业设计。感动于赫蒙族阿姐通宵描画蜡染的长满老茧的双手，以及万福村木织机日夜不辍的律动声响，我们渴望将这些珍贵的民族记忆转化为符合现代都市审美的高品位生活好物。',
      storyP2: '我们坚信，最可持续的文化遗产保护，绝不是把工艺束之高阁，而是让当下的年轻人通过共同设计，将传统化为日常生活中引以为傲的独特风尚。',
      projectBadge: '学术研究与文创设计概念展 (Student Concept Showcase)',
      projectDisclaimer: '注：本网站为学术课题展示、用户体验原型和文化传播性质的样本站点。页面所列金额与购买流程仅供模拟体验。',
      contactTitle: '留言反馈与交流',
      contactSubtitle: '我们非常渴望倾听来自各界专家、师生与爱好者的宝贵建议。',
      form: {
        name: '您的姓名',
        email: '电子邮箱',
        topic: '交流主题',
        topics: {
          general: '网站综合体验反馈',
          custom_inquiry: '产品定制创意探讨',
          cultural_exchange: '非遗文化与艺人联结',
          student_feedback: '学术评审与指导建议',
        },
        message: '您的建议或分享...',
        sendBtn: '提交留言',
        sending: '发送中...',
        sentSuccess: '非常感谢！您的宝贵意见已成功送达学生课题组。',
      },
    },
    chatbot: {
      launcherText: '文化与礼物咨询',
      drawerTitle: '非遗文化与穿搭顾问',
      drawerSubtitle: '为您深入解读织锦工艺、丝绸产地与个性化色彩搭配。',
      scenarioTitle: '精选咨询情境',
      scenarios: {
        gift: {
          label: '🎁 送礼智能推荐',
          prompt: '我想挑选一份有文化意义的丝织或织锦礼物，请问有什么好推荐？',
        },
        palette: {
          label: '🎨 艺术配色建议',
          prompt: '如何为手拿包或挂画选择和谐、现代且有质感的色彩搭配？',
        },
        materials: {
          label: '🧵 辨识工艺与丝绸产地',
          prompt: '各民族织锦在技法上有何区别？万福丝与保禄丝又各有什么特点？',
        },
      },
      inputPlaceholder: '咨询纹样寓意、丝绸养护或送礼建议...',
      send: '发送',
      typing: '正在查阅民族文化典籍...',
      welcomeMsg: '您好！我是“织色越”的文化与穿搭助理。您可以点击下方的快捷情境，或直接向我咨询民族织锦技法、真丝区别及色彩搭配！',
    },
    productsData: {
      'heritage-wall-art': {
        name: 'Heritage Wall Art — 织锦布艺挂画',
        categoryLabel: '空间陈设与墙面艺术',
        shortDesc: '以手织原生态民族织锦为视觉核心，装裱于质朴天然亚麻画布上，配以原木或黄铜高级画框。',
        detailedDesc: '将高山民族的服饰织锦转化为极具现代建筑美感的墙面挂画。植物染料的质朴与立体交错的经纬线，为现代居室注入沉静的历史深度。',
        materialInfo: '赫蒙族或泰族手织原生态织锦；天然未漂白亚麻画布；天然橡木原木或黄铜镶边高级画框。',
        designStory: '打破传统服饰的物理限制，将古老图腾转化为当代室内视觉焦点，使传统织物得以长久保存欣赏。',
        technique: '赫蒙族古法蜂蜡蜡染或泰族挑梭手工织造 · 艺术级多层装裱',
      },
      'the-heritage-clutch': {
        name: 'The Heritage Clutch — 承韵信封手拿包',
        categoryLabel: '可定制手工时尚配饰',
        shortDesc: '极简利落的包身廓形，点缀以原生态手织民族织锦横带，搭配电镀五金件与专属姓名刺绣。',
        detailedDesc: '现代晚装手包的洗练线条与深山织锦的绚丽色块碰撞出强烈张力。无论出席艺展、宴会还是雅致聚会，皆是引人注目的文化焦点。',
        materialInfo: '抗污耐磨加厚帆布包体；真正手织民族织锦饰带；防锈耐磨电镀合金五金配件。',
        designStory: '每一只手包都凝结着高山匠人于木织机前数十载的从容坚守，传承有温度的手作故事。',
        technique: '精细手工拼布裁缝 · 边缘加固缝线 · 个性化刺绣铭牌',
      },
      'the-story-scarf': {
        name: 'The Story Scarf — 桑蚕丝故事方巾',
        categoryLabel: '高阶非遗真丝穿戴',
        shortDesc: '甄选轻盈顺滑的越南天然桑蚕丝织就，手工细密卷边，支持绣制专属姓名花体花押。',
        detailedDesc: '夏日透气清凉，秋冬轻盈保暖的经典大方巾。天然桑蚕丝特有的流转光晕，展现未经刻意修饰的纯粹质感。',
        materialInfo: '保禄或万福批次天然手工桑蚕丝；获得环保认证的天然染料。',
        designStory: '灵感汲取自越南李朝石雕的流云水波纹与河东云纹绸的含蓄内敛，蕴藉东方古典气度。',
        technique: '高捻度天然桑蚕生丝织造 · 法式精工手工圆缘卷边',
      },
      'the-mini-twilly': {
        name: 'The Mini Twilly — 百变随行真丝飘带',
        categoryLabel: '灵动穿搭多用细长巾',
        shortDesc: '双面斜角真丝小飘带，既可点缀颈间、缠绕腕部，亦可绑扎于手袋提手，点亮日常穿搭。',
        detailedDesc: '一款小巧而充满变化可能的时尚配件，将民族织染的经典色彩注入轻快活泼的当代剪裁中。',
        materialInfo: '保禄高密度白茧桑蚕丝；手工隐形针脚暗线缝合。',
        designStory: '专为喜爱现代时尚并渴望在日常通勤中带有一抹越南文化意趣的年轻一代打造。',
        technique: '双面高密织造 · 45度斜裁工艺 · 手工暗针缝合',
      },
    },
  },
};

export const currencyRates: Record<string, { code: string; symbol: string; ratePerVnd: number; decimals: number; sourceNote: string }> = {
  VND: { code: 'VND', symbol: '₫', ratePerVnd: 1, decimals: 0, sourceNote: 'Đơn vị thanh toán chuẩn' },
  USD: { code: 'USD', symbol: '$', ratePerVnd: 1 / 25450, decimals: 2, sourceNote: 'Vietcombank 09/2026 (1 USD = 25.450 VND)' },
  EUR: { code: 'EUR', symbol: '€', ratePerVnd: 1 / 27800, decimals: 2, sourceNote: 'Vietcombank 09/2026 (1 EUR = 27.800 VND)' },
  KRW: { code: 'KRW', symbol: '₩', ratePerVnd: 1 / 18.8, decimals: 0, sourceNote: 'Vietcombank 09/2026 (1 KRW ~ 18.8 VND)' },
  JPY: { code: 'JPY', symbol: '¥', ratePerVnd: 1 / 172.5, decimals: 0, sourceNote: 'Vietcombank 09/2026 (1 JPY ~ 172.5 VND)' },
  CNY: { code: 'CNY', symbol: '¥', ratePerVnd: 1 / 3580, decimals: 2, sourceNote: 'Vietcombank 09/2026 (1 CNY ~ 3.580 VND)' },
};
