import { Language } from '../types';

export interface JourneyTranslation {
  nav: {
    home: string;
    ourStory: string;
    brocade: string;
    silk: string;
    designYourOwn: string;
    shop: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreStoryBtn: string;
    shopCollectionBtn: string;
    scrollToExplore: string;
    badge: string;
  };
  brandStory: {
    tagline: string;
    title: string;
    description: string;
    pillars: {
      culture: { title: string; desc: string };
      customization: { title: string; desc: string };
      aiAssistant: { title: string; desc: string };
    };
  };
  brocadeStory: {
    tagline: string;
    title: string;
    whatIsBrocade: string;
    craftValue: string;
    communities: {
      hmong: { name: string; desc: string };
      thai: { name: string; desc: string };
      dao: { name: string; desc: string };
    };
    applicationTitle: string;
    applicationDesc: string;
    exploreBtn: string;
  };
  silkStory: {
    tagline: string;
    title: string;
    intro: string;
    characteristics: string;
    regions: {
      vanPhuc: { name: string; desc: string };
      baoLoc: { name: string; desc: string };
    };
    applicationTitle: string;
    applicationDesc: string;
    exploreBtn: string;
  };
  designSteps: {
    tagline: string;
    title: string;
    subtitle: string;
    step1: { num: string; title: string; desc: string };
    step2: { num: string; title: string; desc: string };
    step3: { num: string; title: string; desc: string };
    openStudioBtn: string;
  };
  shopSection: {
    tagline: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterBrocade: string;
    filterSilk: string;
    viewDetails: string;
    designYourOwn: string;
    basePrice: string;
  };
}

export const journeyTranslations: Record<Language, JourneyTranslation> = {
  vi: {
    nav: {
      home: 'Home',
      ourStory: 'Our Story',
      brocade: 'Brocade',
      silk: 'Silk',
      designYourOwn: 'Design Your Own',
      shop: 'Shop',
    },
    hero: {
      badge: 'Thủ công Việt Nam · Đương đại hóa',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: 'Scroll to explore',
    },
    brandStory: {
      tagline: 'Về Dệt Sắc Việt',
      title: 'Đưa di sản vào từng nhịp thở hiện đại',
      description: 'Dệt Sắc Việt ra đời từ niềm đam mê gìn giữ nghề dệt thủ công Việt Nam, kết nối những thước vải thổ cẩm của bản làng vùng cao và dải lụa tơ tằm óng ả vào các vật phẩm phong cách sống thanh lịch, bền vững.',
      pillars: {
        culture: {
          title: 'Câu chuyện văn hóa xác thực',
          desc: 'Tôn vinh nguồn gốc rõ ràng của từng kỹ thuật thủ công H’Mông, Thái, Dao cùng các làng lụa danh tiếng.',
        },
        customization: {
          title: 'Thiết kế cá nhân hóa',
          desc: 'Cho phép bạn đồng sáng tạo, tự chọn màu nền, dải thổ cẩm, màu khóa và thêu tên riêng với bản xem trước trực quan.',
        },
        aiAssistant: {
          title: 'Trợ lý AI đa ngôn ngữ',
          desc: 'Đồng hành tư vấn chọn quà, gợi ý phối màu và giải đáp sâu về kỹ thuật truyền thống bằng 6 thứ tiếng.',
        },
      },
    },
    brocadeStory: {
      tagline: 'Sợi Chỉ & Đất Trời Vùng Cao',
      title: 'Câu chuyện Thổ cẩm dệt tay',
      whatIsBrocade: 'Thổ cẩm Việt Nam là vải dệt và trang trí thủ công từ sợi tự nhiên (lanh, bông), kết tinh tri thức bản địa, tín ngưỡng và sự kiên nhẫn qua từng nhịp thoi gõ.',
      craftValue: 'Mỗi dải vải là độc bản. Người phụ nữ vùng cao không chỉ dệt vải, họ thêu cả tâm tư, lời chúc mùa màng và lòng tự hào dân tộc vào từng nếp gấp.',
      communities: {
        hmong: {
          name: 'H’Mông — Batik sáp ong & Nhuộm chàm',
          desc: 'Dùng bút đồng vẽ sáp ong nóng trên vải lanh, nhuộm chàm nhiều lần tạo màu xanh thăm thẳm và hoa văn xoắn ốc mặt trời.',
        },
        thai: {
          name: 'Thái — Khung cửi thoi bay & Quả trám',
          desc: 'Dệt thoi luồn hoa nổi với họa tiết quả trám tượng trưng cho mắt rồng và đất trời sinh sôi, màu sắc tương phản rực rỡ.',
        },
        dao: {
          name: 'Dao — Thêu luồn sợi từ mặt trái',
          desc: 'Đếm sợi chỉ thêu từ mặt sau không cần mẫu vẽ, khắc họa cây thông chở che và dấu chân cọp bình an.',
        },
      },
      applicationTitle: 'Ứng dụng vào tác phẩm hiện đại',
      applicationDesc: 'Mảng thổ cẩm dệt tay được đưa vào Tranh vải treo tường (Heritage Wall Art) làm điểm nhấn kiến trúc, và Ví cầm tay (The Heritage Clutch) tinh tế.',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: 'Dòng Chảy Óng Ả Tự Nhiên',
      title: 'Câu chuyện Lụa tơ tằm Việt Nam',
      intro: 'Lụa tơ tằm là biểu tượng của sự thanh cao, mềm mát mùa hè và ấm áp mùa đông, phản chiếu ánh sáng tự nhiên với vẻ óng ả tinh tế.',
      characteristics: 'Sợi tơ tự nhiên lành tính với làn da, có độ rủ mềm mại và độ bền dai kỳ diệu qua bàn tay người thợ se sợi.',
      regions: {
        vanPhuc: {
          name: 'Lụa Vạn Phúc (Hà Đông)',
          desc: 'Ngôi làng nghìn năm bên dòng sông Đáy nổi danh với lụa Vân dệt hoa văn chìm nổi kín đáo, đài các chốn kinh kỳ.',
        },
        baoLoc: {
          name: 'Lụa Bảo Lộc (Lâm Đồng)',
          desc: 'Thủ phủ tơ tằm đất cao nguyên mát lành nuôi giống kén trắng, cho sợi tơ se mật độ cao óng ả và mượt mà.',
        },
      },
      applicationTitle: 'Ứng dụng vào phụ kiện thanh lịch',
      applicationDesc: 'Lụa tơ tằm được chuyển hóa thành Khăn quàng The Story Scarf viền cuộn mép tay và Khăn lụa nhỏ The Mini Twilly buộc túi phong cách.',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: 'Không Gian Sáng Tạo',
      title: 'Từ chất liệu đến thiết kế của riêng bạn',
      subtitle: 'Tự do tùy biến sản phẩm thủ công chỉ với 3 bước trực quan trên màn hình.',
      step1: {
        num: '01',
        title: 'Chọn sản phẩm',
        desc: 'Chọn 1 trong 4 thiết kế: tranh treo tường, ví clutch, khăn quàng lụa hoặc mini twilly.',
      },
      step2: {
        num: '02',
        title: 'Chọn màu & chi tiết thêu',
        desc: 'Tùy chỉnh màu sắc nền, dải hoa văn thổ cẩm, màu khóa và yêu cầu thêu chữ cái hoặc hình nhỏ.',
      },
      step3: {
        num: '03',
        title: 'Xem trước & Giá tức thì',
        desc: 'Bản xem trước cập nhật ngay lập tức cùng bảng giá minh bạch: Giá cơ bản + Phụ phí = Tổng giá.',
      },
      openStudioBtn: 'Mở Studio Tự Thiết Kế',
    },
    shopSection: {
      tagline: 'Bộ Sưu Tập Di Sản',
      title: 'Bốn tác phẩm sáng tạo',
      subtitle: 'Lựa chọn thiết kế nguyên bản hoặc bắt đầu tùy biến mang dấu ấn riêng.',
      filterAll: 'Tất cả (4)',
      filterBrocade: 'Thổ cẩm (2)',
      filterSilk: 'Lụa tơ tằm (2)',
      viewDetails: 'Xem chi tiết',
      designYourOwn: 'Tự thiết kế',
      basePrice: 'Giá tiêu chuẩn',
    },
  },
  en: {
    nav: {
      home: 'Home',
      ourStory: 'Our Story',
      brocade: 'Brocade',
      silk: 'Silk',
      designYourOwn: 'Design Your Own',
      shop: 'Shop',
    },
    hero: {
      badge: 'Vietnamese Living Heritage · Redesigned',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: 'Scroll to explore',
    },
    brandStory: {
      tagline: 'About Dệt Sắc Việt',
      title: 'Weaving heritage into contemporary living',
      description: 'Dệt Sắc Việt connects indigenous Vietnamese weaving traditions with modern everyday design, transforming ethnic brocades and highland silk into refined, sustainable lifestyle objects.',
      pillars: {
        culture: {
          title: 'Authentic Cultural Narratives',
          desc: 'Honoring transparent origins across H’Mông, Thái, and Dao craft techniques alongside historic silk villages.',
        },
        customization: {
          title: 'Interactive Co-Design',
          desc: 'Empowering you to choose tones, woven bands, hardware finishes, and custom monograms with real-time visual feedback.',
        },
        aiAssistant: {
          title: 'Multilingual AI Assistant',
          desc: 'Offering smart gift advice, styling palettes, and verified craft insights across 6 languages.',
        },
      },
    },
    brocadeStory: {
      tagline: 'Highland Threads & Mountain Spirits',
      title: 'The Handwoven Brocade Narrative',
      whatIsBrocade: 'Vietnamese thổ cẩm represents handwoven, hand-embellished textiles from natural hemp and cotton fibers, holding ancestral cosmologies and extraordinary manual discipline.',
      craftValue: 'Each textile panel is one of a kind. Highland women weave memory, prayers for fertile harvests, and community identity into every pass of the shuttle.',
      communities: {
        hmong: {
          name: 'H’Mông — Beeswax Batik & Indigo',
          desc: 'Using molten beeswax copper pens on handspun hemp, followed by layered natural indigo fermentation to yield midnight blue and solar spirals.',
        },
        thai: {
          name: 'Thái — Flying Shuttle & Rhombus',
          desc: 'Loom-woven supplementary wefts creating geometric lozenges symbolizing dragon eyes and harmony with nature.',
        },
        dao: {
          name: 'Dao — Reverse Counted Embroidery',
          desc: 'Counting threads from the back side without pre-drawing, depicting sacred pine trees and guardian tiger paw motifs.',
        },
      },
      applicationTitle: 'Applied to Modern Objects',
      applicationDesc: 'Authentic brocades become architectural focal points in Heritage Wall Art and conversation pieces in The Heritage Clutch.',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: 'Natural Ethereal Sheen',
      title: 'The Vietnamese Mulberry Silk Story',
      intro: 'Mulberry silk represents timeless refinement — cool and breathable in summer, comforting in winter, with a luminous natural drape.',
      characteristics: 'Pure silk filaments are gentle on the skin, celebrated for supple fluidity and surprising resilience honed by generations of spinners.',
      regions: {
        vanPhuc: {
          name: 'Vạn Phúc Silk (Hà Đông)',
          desc: 'A millennium-old riverbank village famous for Vân cloud-jacquard weaves with delicate tone-on-tone relief.',
        },
        baoLoc: {
          name: 'Bảo Lộc Silk (Lâm Đồng)',
          desc: 'The misty highland capital yielding pristine white cocoons spun into ultra-smooth, high-density lustrous weaves.',
        },
      },
      applicationTitle: 'Applied to Elegant Accessories',
      applicationDesc: 'Silk is tailored into The Story Scarf with hand-rolled hems and The Mini Twilly for playful neck and handbag accents.',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: 'Co-Creation Studio',
      title: 'From Authentic Material to Your Custom Design',
      subtitle: 'Personalize your artisanal keepsake in three simple, interactive steps.',
      step1: {
        num: '01',
        title: 'Select Your Piece',
        desc: 'Choose from Wall Art, Clutch Bag, Story Scarf, or Mini Twilly.',
      },
      step2: {
        num: '02',
        title: 'Choose Colors & Details',
        desc: 'Customize canvas tones, ethnic motifs, metal hardware, and personal monogram embroidery.',
      },
      step3: {
        num: '03',
        title: 'Live Preview & Final Price',
        desc: 'Instant visual rendering with clear formula: Base Price + Custom Add-ons = Total Price.',
      },
      openStudioBtn: 'Open Customizer Studio',
    },
    shopSection: {
      tagline: 'Heritage Collection',
      title: 'Four Handcrafted Signatures',
      subtitle: 'Choose standard artisan editions or personalize directly.',
      filterAll: 'All (4)',
      filterBrocade: 'Brocade (2)',
      filterSilk: 'Mulberry Silk (2)',
      viewDetails: 'View Details',
      designYourOwn: 'Design Your Own',
      basePrice: 'Base Price',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      ourStory: 'Notre Histoire',
      brocade: 'Brocart',
      silk: 'Soie',
      designYourOwn: 'Créez le Vôtre',
      shop: 'Boutique',
    },
    hero: {
      badge: 'Héritage Vivant du Vietnam',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: 'Faites défiler pour explorer',
    },
    brandStory: {
      tagline: 'À propos de Dệt Sắc Việt',
      title: 'Tisser l’héritage dans la modernité',
      description: 'Dệt Sắc Việt relie les savoir-faire textiles traditionnels du Vietnam au design contemporain, transformant les brocarts ethniques et la soie naturelle en objets de vie raffinés.',
      pillars: {
        culture: {
          title: 'Histoires culturelles authentiques',
          desc: 'Mise en valeur rigoureuse des techniques H’Mông, Thaï, Dao et des terroirs séricicoles.',
        },
        customization: {
          title: 'Design personnalisé interactif',
          desc: 'Choisissez les teintes, les motifs tissés et vos initiales brodées avec aperçu en temps réel.',
        },
        aiAssistant: {
          title: 'Assistant IA multilingue',
          desc: 'Conseils cadeaux, harmonies de couleurs et réponses documentées en 6 langues.',
        },
      },
    },
    brocadeStory: {
      tagline: 'Fils des Hauts Plateaux',
      title: 'L’Art du Brocart Tissé Main',
      whatIsBrocade: 'Le brocart traditionnel est un textile d’art tissé sur fibres végétales (chanvre, coton), porteur de la cosmologie et de la patience des communautés montagnardes.',
      craftValue: 'Chaque pièce est une création unique, tissée au rythme de la mémoire ancestrale et des vœux de prospérité.',
      communities: {
        hmong: {
          name: 'H’Mông — Batik à la cire & Indigo',
          desc: 'Dessin à la cire chaude sur chanvre et bains d’indigo naturel pour de profonds bleus nuit.',
        },
        thai: {
          name: 'Thaï — Navette volante & Losange',
          desc: 'Tissage d’art créant des motifs de losanges symbolisant la fertilité et l’œil du dragon.',
        },
        dao: {
          name: 'Dao — Broderie à fils comptés',
          desc: 'Broderie sur le revers sans tracé préalable, représentant le sapin sacré et la patte de tigre.',
        },
      },
      applicationTitle: 'Transposé dans des créations modernes',
      applicationDesc: 'Intégré au tableau textile mural Heritage Wall Art et à la pochette The Heritage Clutch.',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: 'Élégance Pure & Fluide',
      title: 'La Soie de Mûrier du Vietnam',
      intro: 'Matière d’exception, fraîche en été et protectrice en hiver, au tombé soyeux et à la brillance naturelle.',
      characteristics: 'Fils doux pour la peau, alliant souplesse caressante et surprenante résistance.',
      regions: {
        vanPhuc: {
          name: 'Soie de Vạn Phúc (Hà Đông)',
          desc: 'Village millénaire célèbre pour sa soie jacquard Vân aux motifs subtilement chatoyants.',
        },
        baoLoc: {
          name: 'Soie de Bảo Lộc (Lâm Đồng)',
          desc: 'Terroir d’altitude aux cocons immaculés donnant une soie fluide et soyeuse incomparable.',
        },
      },
      applicationTitle: 'Sublimée en accessoires précieux',
      applicationDesc: 'Déclinée en grand carré The Story Scarf et en ruban multifonction The Mini Twilly.',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: 'Studio de Création',
      title: 'De la matière brute à votre création unique',
      subtitle: 'Personnalisez votre pièce en 3 étapes simples et visuelles.',
      step1: {
        num: '01',
        title: 'Choisissez le modèle',
        desc: 'Tableau mural, pochette clutch, carré de soie ou ruban twilly.',
      },
      step2: {
        num: '02',
        title: 'Sélectionnez les détails',
        desc: 'Couleurs de fond, motifs ethniques, fermoirs et initiales brodées.',
      },
      step3: {
        num: '03',
        title: 'Aperçu & Prix instantané',
        desc: 'Visualisation immédiate : Prix de base + Options = Total transparent.',
      },
      openStudioBtn: 'Ouvrir le Studio de Design',
    },
    shopSection: {
      tagline: 'Collection Artisanale',
      title: 'Quatre Œuvres Signatures',
      subtitle: 'Commandez en version originale ou personnalisez selon vos envies.',
      filterAll: 'Tout (4)',
      filterBrocade: 'Brocart (2)',
      filterSilk: 'Soie de mûrier (2)',
      viewDetails: 'Détails',
      designYourOwn: 'Personnaliser',
      basePrice: 'Prix de base',
    },
  },
  ko: {
    nav: {
      home: '홈',
      ourStory: '브랜드 스토리',
      brocade: '브로케이드',
      silk: '실크',
      designYourOwn: '커스텀 디자인',
      shop: '스토어',
    },
    hero: {
      badge: '베트남 핸드크래프트 유산의 현대적 재해석',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: '스크롤하여 탐색하기',
    },
    brandStory: {
      tagline: 'Dệt Sắc Việt 소개',
      title: '전통 유산을 현대의 일상 속으로',
      description: 'Dệt Sắc Việt은 베트남 전통 장인 직물을 현대적인 감각의 라이프스타일 오브제로 엮어내는 디자인 브랜드입니다.',
      pillars: {
        culture: {
          title: '진정성 있는 문화 기록',
          desc: '흐몽·타이·자오족의 검증된 공예 기법과 역사 깊은 실크 산지의 이야기를 전달합니다.',
        },
        customization: {
          title: '실시간 커스텀 디자인',
          desc: '배경 색상, 직물 패턴, 금속 부자재, 이니셜 자수를 직접 선택하고 즉시 미리 봅니다.',
        },
        aiAssistant: {
          title: '6개 국어 AI 쇼핑 도우미',
          desc: '선물 추천, 세련된 컬러 조합, 문화 지식을 언제든 친절하게 안내합니다.',
        },
      },
    },
    brocadeStory: {
      tagline: '고원의 숨결과 장인의 손길',
      title: '핸드위빙 브로케이드(토껌) 이야기',
      whatIsBrocade: '토껌은 천연 삼베와 면사로 짠 전통 직물로, 소수민족의 지혜와 우주관이 깃들어 있습니다.',
      craftValue: '모든 직물은 세상에 단 하나뿐이며, 장인들의 오랜 인내와 정성이 고스란히 담겨 있습니다.',
      communities: {
        hmong: {
          name: '흐몽족 — 밀랍 바틱 & 쪽염색',
          desc: '구리 펜으로 밀랍을 그려 쪽물에 반복 염색하여 태양 나선형 문양을 완성합니다.',
        },
        thai: {
          name: '타이족 — 베틀 북 & 마름모 문양',
          desc: '풍요와 번영을 기원하는 마름모(Quả trám) 문양을 베틀로 섬세하게 짜냅니다.',
        },
        dao: {
          name: '자오족 — 뒷면 올 세기 자수',
          desc: '도안 없이 뒷면에서 올을 세어 수호 소나무와 호랑이 발자국을 수놓습니다.',
        },
      },
      applicationTitle: '현대적 디자인 오브제로의 탄생',
      applicationDesc: 'Heritage Wall Art 액자와 The Heritage Clutch 가방으로 완성되었습니다.',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: '자연이 빚은 은은한 광택',
      title: '베트남 천연 멀베리 실크 이야기',
      intro: '여름에는 시원하고 겨울에는 따뜻한 천연 실크는 고유의 우아한 드레이프를 자랑합니다.',
      characteristics: '피부에 닿는 부드러운 촉감과 장인의 고연사 제직 기술이 결합된 최고급 소재입니다.',
      regions: {
        vanPhuc: {
          name: '반푹 실크 (하동)',
          desc: '천년 역사를 지닌 마을로, 빛에 따라 구름 문양이 은은하게 드러나는 전통 자카드가 특징입니다.',
        },
        baoLoc: {
          name: '바오록 실크 (람동)',
          desc: '서늘한 고원에서 얻은 백옥 고치로 짜내어 극상의 매끄러움과 탄력을 선사합니다.',
        },
      },
      applicationTitle: '우아한 패션 소품으로의 확장',
      applicationDesc: 'The Story Scarf 스카프와 The Mini Twilly 실크 리본으로 선보입니다.',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: '커스텀 스튜디오',
      title: '전통 소재에서 나만의 디자인까지',
      subtitle: '간단한 3단계로 세상에 단 하나뿐인 공예품을 완성하세요.',
      step1: {
        num: '01',
        title: '제품 선택',
        desc: '액자, 클러치, 실크 스카프, 트윌리 중 원하는 제품을 고릅니다.',
      },
      step2: {
        num: '02',
        title: '색상 및 자수 커스텀',
        desc: '배경 컬러, 전통 패턴, 금속 장식, 이니셜 자수를 자유롭게 지정합니다.',
      },
      step3: {
        num: '03',
        title: '실시간 미리보기 & 투명한 가격',
        desc: '기본 가격 + 옵션 비용 = 최종 가격을 즉시 확인합니다.',
      },
      openStudioBtn: '커스텀 스튜디오 열기',
    },
    shopSection: {
      tagline: '헤리티지 컬렉션',
      title: '네 가지 시그니처 에디션',
      subtitle: '기본 모델을 바로 담거나 나만의 디자인으로 커스텀해 보세요.',
      filterAll: '전체 (4)',
      filterBrocade: '브로케이드 (2)',
      filterSilk: '실크 (2)',
      viewDetails: '상세보기',
      designYourOwn: '직접 디자인',
      basePrice: '기본 가격',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      ourStory: 'ストーリー',
      brocade: '錦織',
      silk: 'シルク',
      designYourOwn: 'デザイン',
      shop: 'ショップ',
    },
    hero: {
      badge: 'ベトナム伝統工芸の現代的再生',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: 'スクロールして詳しく見る',
    },
    brandStory: {
      tagline: 'Dệt Sắc Việt について',
      title: '伝統の息吹を現代の暮らしへ',
      description: 'Dệt Sắc Việt はベトナムの山岳民族の手織り錦織と伝統の絹織物を、洗練された現代のライフスタイルアイテムへと昇華させます。',
      pillars: {
        culture: {
          title: '確かな文化の記録',
          desc: 'モン族・タイ族・ザオ族の工芸技法と伝統の絹織物の産地情報を正しく伝えます。',
        },
        customization: {
          title: 'インタラクティブな個別デザイン',
          desc: '下地の色、織物モチーフ、金具、イニシャル刺繍を画面上で選んでプレビューできます。',
        },
        aiAssistant: {
          title: '多言語AIショッピング相談',
          desc: 'ギフトの提案やカラーコーディネート、伝統の技法について6言語で丁寧にお答えします。',
        },
      },
    },
    brocadeStory: {
      tagline: '高地の風土と手仕事',
      title: '手織り伝統錦織の物語',
      whatIsBrocade: '伝統錦織（トッカム）は天然繊維を使い、高地民族の祈りや自然観を手織り機で織り上げた貴重な布地です。',
      craftValue: '一枚一枚が世界に一つだけの作品であり、職人の温もりと技術が宿っています。',
      communities: {
        hmong: {
          name: 'モン族 — 蜜蝋バティック＆藍染め',
          desc: '銅ペンで蜜蝋を描き、天然藍で幾重にも染め上げた太陽の渦巻き模様。',
        },
        thai: {
          name: 'タイ族 — 高機織り＆菱形文様',
          desc: '豊穣と調和を象徴する幾何学菱形文様（クアチャム）を鮮やかに織り込みます。',
        },
        dao: {
          name: 'ザオ族 — 裏面からの数え糸刺繍',
          desc: '下絵なしで布の織り目を数えて刺す、聖なる松の木と虎の足跡の護符文様。',
        },
      },
      applicationTitle: '現代のアートピースへ',
      applicationDesc: 'Heritage Wall Art の額装タペストリーと The Heritage Clutch に応用されています。',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: 'しなやかな自然の光沢',
      title: 'ベトナム産マルベリーシルクの物語',
      intro: '夏は涼しく冬は暖かい極上の天然シルクは、優美な光沢としなやかなドレープが魅力です。',
      characteristics: '肌にやさしく寄り添い、熟練の製糸技術によってしなやかさと耐久性を兼ね備えています。',
      regions: {
        vanPhuc: {
          name: 'ヴァンフック絹（ハドン）',
          desc: '千年の歴史を誇り、光の加減で雲紋が優雅に浮かび上がる伝統ジャカード織。',
        },
        baoLoc: {
          name: 'バオロック絹（ラムドン）',
          desc: '涼しい高原気候が育む純白の繭から紡ぎ出された、極上の滑らかさを持つ高密度シルク。',
        },
      },
      applicationTitle: '日常を彩る上質な装いへ',
      applicationDesc: '手巻き仕上げの The Story Scarf と万能な The Mini Twilly に仕立てました。',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: 'デザインスタジオ',
      title: '素材からあなただけの作品へ',
      subtitle: '画面を見ながら3つのステップで簡単にカスタマイズできます。',
      step1: {
        num: '01',
        title: 'アイテムを選択',
        desc: '額装アート、クラッチバッグ、大判スカーフ、ミニリボンから選びます。',
      },
      step2: {
        num: '02',
        title: 'カラー＆刺繍を指定',
        desc: 'ベースカラー、伝統モチーフ、金具、イニシャル刺繍を好みに合わせて選択。',
      },
      step3: {
        num: '03',
        title: 'リアルタイム確認＆価格表示',
        desc: '基本価格 + オプション料金 = 合計金額が明瞭に更新されます。',
      },
      openStudioBtn: 'デザインスタジオを開く',
    },
    shopSection: {
      tagline: 'ヘリテージコレクション',
      title: '4つの象徴的エディション',
      subtitle: '標準仕様をそのまま注文することも、自分好みにカスタマイズすることも可能です。',
      filterAll: 'すべて (4)',
      filterBrocade: '錦織 (2)',
      filterSilk: '天然シルク (2)',
      viewDetails: '詳細を見る',
      designYourOwn: '自分でデザイン',
      basePrice: '基本価格',
    },
  },
  zh: {
    nav: {
      home: '首页',
      ourStory: '品牌故事',
      brocade: '手织锦',
      silk: '桑蚕丝',
      designYourOwn: '自由定制',
      shop: '典藏商店',
    },
    hero: {
      badge: '越南活态手工艺文化遗产 · 当代新生',
      title: 'Vietnamese Heritage, Designed by You',
      subtitle: 'Discover Vietnamese brocade and silk through everyday pieces you can make your own.',
      exploreStoryBtn: 'Explore Our Story',
      shopCollectionBtn: 'Shop the Collection',
      scrollToExplore: '向下滑动探索',
    },
    brandStory: {
      tagline: '关于“织色越”',
      title: '将非遗织造融入当代雅致生活',
      description: 'Dệt Sắc Việt（织色越）植根于对越南传统纺织工艺的敬畏，将深山民族织锦与高原温润真丝，转化为适合现代日常的格调雅物。',
      pillars: {
        culture: {
          title: '真实可溯的非遗叙事',
          desc: '恪守学术严谨，详细记录赫蒙族、泰族、瑶族手作技艺及两大丝绸名产地。',
        },
        customization: {
          title: '全景交互式个性定制',
          desc: '自主挑选面料底色、织锦图腾、五金件与专属姓名刺绣，所见即所得。',
        },
        aiAssistant: {
          title: '多语种AI穿搭与文化顾问',
          desc: '支持6种语言，随时解答送礼选品、配色调和与工艺溯源。',
        },
      },
    },
    brocadeStory: {
      tagline: '高山经纬与岁月回响',
      title: '手工织锦（Thổ cẩm）的故事',
      whatIsBrocade: '越南传统手工织锦以天然麻、棉为材，承载着山地民族的古老智慧、自然图腾与代代相传的非凡匠心。',
      craftValue: '每一段织锦都是孤品，匠人将对神林的敬畏与丰收祈愿织入每一道飞梭之中。',
      communities: {
        hmong: {
          name: '赫蒙族 — 蜂蜡蜡染与蓝靛染色',
          desc: '铜蜡刀手绘蜂蜡于手纺麻布，数日反复发酵染就深邃夜空蓝与太阳螺旋纹。',
        },
        thai: {
          name: '泰族 — 飞梭挑花与繁盛菱形',
          desc: '木织机挑花织就菱形（Quả trám）纹，象征龙目护佑与沃野丰饶。',
        },
        dao: {
          name: '瑶族 — 背面数纱挑花刺绣',
          desc: '无底稿由背面数纱穿针，勾勒庇佑阖家的神圣松树与辟邪虎爪纹。',
        },
      },
      applicationTitle: '融入当代空间与随身美学',
      applicationDesc: '化作画廊级布艺挂画（Heritage Wall Art）与典雅手包（The Heritage Clutch）。',
      exploreBtn: 'Explore Brocade Pieces',
    },
    silkStory: {
      tagline: '流光温润的东方丝韵',
      title: '越南天然桑蚕丝的故事',
      intro: '桑蚕丝轻灵柔韧、夏凉冬温，流转着未经雕琢的纯净丝光与极佳垂坠感。',
      characteristics: '天然蚕丝蛋白亲和肌肤，经由工匠高捻度纺织，温润而富有筋骨。',
      regions: {
        vanPhuc: {
          name: '万福丝绸（河东）',
          desc: '千年古韵名村，以光影下若隐若现的传统云纹暗花绸（Lụa Vân）闻名于世。',
        },
        baoLoc: {
          name: '保禄丝绸（林同）',
          desc: '清凉高原培育出的优质纯白蚕茧，丝线高密匀称，触感顺滑如水。',
        },
      },
      applicationTitle: '化作随身雅致配饰',
      applicationDesc: '精心织造成法式手卷边的 The Story Scarf 故事方巾与多用 The Mini Twilly 飘带。',
      exploreBtn: 'Explore Silk Pieces',
    },
    designSteps: {
      tagline: '在线定制工坊',
      title: '从原生质感，到专属设计',
      subtitle: '仅需直观三步，亲手完成专属于您的非遗生活艺术品。',
      step1: {
        num: '01',
        title: '挑选心仪品类',
        desc: '选择挂画、信封手包、真丝大方巾或真丝小飘带。',
      },
      step2: {
        num: '02',
        title: '调配色彩与刺绣',
        desc: '自主设定画布底色、织锦纹样、金属锁扣与专属字母刺绣。',
      },
      step3: {
        num: '03',
        title: '实时渲染与透明定价',
        desc: '图形即时更新，价格公式公开透明：基础售价 + 定制费 = 最终总价。',
      },
      openStudioBtn: '开启专属定制工坊',
    },
    shopSection: {
      tagline: '典藏系列',
      title: '四大匠造标志之作',
      subtitle: '直接选购标准工匠版，或进入工坊自由定制。',
      filterAll: '全部 (4)',
      filterBrocade: '传统织锦 (2)',
      filterSilk: '天然桑蚕丝 (2)',
      viewDetails: '查看详情',
      designYourOwn: '自由定制',
      basePrice: '标准基础价',
    },
  },
};
