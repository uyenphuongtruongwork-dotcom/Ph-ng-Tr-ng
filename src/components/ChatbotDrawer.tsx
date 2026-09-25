import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, RefreshCw } from 'lucide-react';
import { Language, ProductId } from '../types';
import { translations } from '../data/translations';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface ChatbotDrawerProps {
  currentLang: Language;
  onNavigateToProduct?: (productId: ProductId) => void;
  onNavigateToCustomizer?: (productId: ProductId) => void;
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  currentLang,
  onNavigateToCustomizer,
}) => {
  const t = translations[currentLang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: t.chatbot.welcomeMsg,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'assistant',
            text: t.chatbot.welcomeMsg,
            timestamp: new Date(),
          },
        ];
      }
      return prev;
    });
  }, [currentLang, t.chatbot.welcomeMsg]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Comprehensive multi-language cultural & styling knowledge base
  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Multilingual scenario 1: GIFT CONSULTATION / MUA QUÀ
    if (
      q.includes('quà') ||
      q.includes('gift') ||
      q.includes('cadeau') ||
      q.includes('선물') ||
      q.includes('ギフト') ||
      q.includes('礼物') ||
      q.includes('tặng')
    ) {
      switch (currentLang) {
        case 'en':
          return `🎁 **Gift Consultation Recommendations**:
1. **For International Friends & Diplomats**: The **Heritage Clutch** (690,000 VND) with an authentic H’Mông or Thái brocade band. It is compact, travel-friendly, and a striking conversation piece.
2. **For Housewarming & New Homes**: **Heritage Wall Art** (890,000 VND). Framed in natural oak with indigo hemp, it introduces warm artisanal soul into modern apartments.
3. **For Mothers & Mentors**: The **Story Scarf** (1,290,000 VND) in lustrous Bảo Lộc mulberry silk with hand-rolled hems and custom initial embroidery.
4. **For Fashion Lovers & Youth**: The **Mini Twilly** (390,000 VND) — versatile for tying on bags or wearing as a chic neck accent!`;
        case 'fr':
          return `🎁 **Conseils Idées Cadeaux**:
1. **Pour un ami étranger ou diplomate**: La pochette **The Heritage Clutch** (690 000 VND), rehaussée d'un panneau de brocart traditionnel fait main.
2. **Pour une pendaison de crémaillère**: Le tableau textile **Heritage Wall Art** (890 000 VND) encadré en chêne naturel.
3. **Pour une mère ou une personne chère**: Le carré **The Story Scarf** (1 290 000 VND) en pure soie de mûrier de Bảo Lộc avec roulotté main.
4. **Pour un jeune proche**: Le ruban **The Mini Twilly** (390 000 VND) noué au poignet ou à l'anse d'un sac.`;
        case 'ko':
          return `🎁 **맞춤 선물 큐레이션**:
1. **외국인 친구 및 비즈니스 선물**: **The Heritage Clutch** (690,000 VND) — 흐몽·타이족 전통 직물이 포인트로 들어가 이동 시 휴대가 간편하며 베트남 문화를 전하기 좋습니다.
2. **집들이 및 인테리어 선물**: **Heritage Wall Art** (890,000 VND) — 내추럴 오크 프레임과 쪽염색 직물이 거실 공간을 아늑하게 채워줍니다.
3. **부모님 및 은사님**: **The Story Scarf** (1,290,000 VND) — 바오록 천연 멀베리 실크와 섬세한 핸드롤 마감, 이니셜 자수로 고급스러움을 더합니다.
4. **젊은 층 & 가벼운 선물**: **The Mini Twilly** (390,000 VND) — 가방 손잡이나 목에 산뜻하게 포인트로 연출할 수 있습니다!`;
        case 'ja':
          return `🎁 **ギフト選びのご提案**:
1. **海外のご友人や記念品に**: **The Heritage Clutch** (690,000 VND) — 本物の手織り錦織バンドが美しく、持ち運びにも最適です。
2. **新築祝い・お引越し祝いに**: **Heritage Wall Art** (890,000 VND) — 無垢のオーク材と藍染め織物が洗練された和洋どちらの空間にも調和します。
3. **大切な方や記念日に**: **The Story Scarf** (1,290,000 VND) — バオロック産極上シルクに手巻き仕上げとイニシャル刺繍を添えた最高の一品。
4. **普段使いのプチギフトに**: **The Mini Twilly** (390,000 VND) — バッグの持ち手や首元に巻ける軽やかなシルクリボンです。`;
        case 'zh':
          return `🎁 **非遗文化送礼指南**:
1. **送给外国友人或商务外事**: **The Heritage Clutch（承韵信封手拿包）** (690,000 VND) — 点缀原生态赫蒙族或泰族织锦，轻便且极具文化交流意义。
2. **乔迁新居与家居装点**: **Heritage Wall Art（织锦布艺挂画）** (890,000 VND) — 原木画框衬托蓝靛手工麻布，赋予空间深厚人文沉淀。
3. **赠予长辈、母亲或挚爱**: **The Story Scarf（桑蚕丝故事方巾）** (1,290,000 VND) — 保禄高密桑蚕生丝，配手工卷边与专属姓名花体刺绣。
4. **年轻时尚好友**: **The Mini Twilly（百变真丝飘带）** (390,000 VND) — 系于手袋把手或颈间，轻盈灵动！`;
        default:
          return `🎁 **Gợi ý chọn quà tặng theo dịp**:
1. **Quà tặng bạn bè quốc tế / Ngoại giao**: Ví cầm tay **The Heritage Clutch** (690.000 VND) với dải thổ cẩm thật H’Mông hoặc Thái — nhỏ gọn, dễ mang đi máy bay và là lời mở đầu câu chuyện văn hóa tuyệt vời.
2. **Quà tân gia / Không gian sống mới**: Tranh vải **Heritage Wall Art** (890.000 VND) đóng khung gỗ sồi mộc tự nhiên hoặc viền đồng — tạo điểm nhấn chiều sâu tĩnh tại cho căn hộ hiện đại.
3. **Quà tặng mẹ, sếp hoặc người thương**: Khăn lụa **The Story Scarf** (1.290.000 VND) dệt từ lụa tơ tằm Bảo Lộc/Vạn Phúc mềm óng, cuộn mép tay và thêu chữ lồng tên riêng (+50.000 VND).
4. **Quà cho bạn trẻ yêu thời trang**: **The Mini Twilly** (390.000 VND) buộc quai túi hoặc quàng cổ linh hoạt!`;
      }
    }

    // Multilingual scenario 2: COLOR PAIRING / PHỐI MÀU
    if (
      q.includes('màu') ||
      q.includes('color') ||
      q.includes('couleur') ||
      q.includes('색상') ||
      q.includes('カラー') ||
      q.includes('配色') ||
      q.includes('phối')
    ) {
      switch (currentLang) {
        case 'en':
          return `🎨 **Artisanal Color Harmony Guide**:
- **Wall Art Pairing**: Pair a **Natural Cream (Kem mộc)** or **Storm Slate** canvas with the centered **H’Mông Indigo Batik**. The neutral background lets the geometric solar spiral breathe with gallery-like presence.
- **Clutch Bag Styling**: A **Warm Cognac Leather** body with the **Thái Rhombus Diamond** pattern and **Antique Brass** hardware creates an earthy, heritage-luxe look. For sleek evening minimalist style, choose **Deep Indigo** body with **Smoked Silver** accents.
- **Silk Scarf Palette**: An **Ivory Silk** base with **Indigo Hand-Rolled Hem** and golden monogram stitching achieves a timeless, quiet luxury aesthetic!`;
        case 'fr':
          return `🎨 **Conseils d'Harmonie des Nuances**:
- **Tableau Mural**: Associez un fond en **Crème brut naturel** avec le motif central **Batik H’Mông**. Le contraste met en valeur la profondeur de l'indigo.
- **Pochette Clutch**: Le corps **Cuir Cognac chaud** marié au **Losange Thaï** et une finition **Laiton antique** donne un style intemporel et chaleureux.
- **Carré de Soie**: Base en **Soie Ivoire nacrée** bordée d'un **Ourlet roulotté indigo** avec monogramme doré pour une allure chic et discrète.`;
        case 'ko':
          return `🎨 **세련된 컬러 매칭 제안**:
- **벽걸이 액자**: **내추럴 크림** 캔버스 바탕에 **흐몽 인디고 바틱** 직물을 정중앙에 배치하면 현대 갤러리 같은 차분한 분위기를 연출할 수 있습니다.
- **클러치백**: **웜 코냑 브라운** 바디에 **타이족 마름모 직물**과 **빈티지 브라스** 금속을 매칭하면 클래식하면서도 따스한 장인 감성이 완성됩니다.
- **실크 스카프**: **천연 아이보리 실크**에 **인디고 블루 핸드롤 테두리**, 골드 자수 이니셜을 더하면 격조 높은 데일리 룩이 완성됩니다.`;
        case 'ja':
          return `🎨 **洗練されたカラーコーディネート**:
- **額装アート**: **生成りナチュラルクリーム**のキャンバス地に**モン族の藍染めバティック**を合わせると、静謐で現代的なアートピースになります。
- **クラッチバッグ**: **コニャックレザーブラウン**に**タイ族の菱形織**と**アンティーク真鍮金具**を合わせると、温かみのある工芸美が際立ちます。
- **シルクスカーフ**: **天然アイボリー**の絹地に**藍色の手巻き縁かがり**とゴールドのイニシャル刺繍を添えるのが最も王道の美しさです。`;
        case 'zh':
          return `🎨 **东方雅致色彩调配法则**:
- **布艺挂画**: 建议选择**天然原麻奶白**或**风暴灰**底布，居中装裱**赫蒙族蓝靛太阳蜡染**，留白充足，尽显当代极简画廊气质。
- **信封手包**: **暖调干邑棕**包身搭配**泰族繁盛菱形锦带**与**青古铜**锁扣，兼具复古质感与民族张力。
- **真丝方巾**: **象牙白真丝**搭配**深蓝靛手卷边**与金线字母刺绣，是永不过时的温润雅奢之选。`;
        default:
          return `🎨 **Bí quyết phối màu tinh tế chuẩn phong cách sống**:
- **Với Tranh Heritage Wall Art**: Chọn nền **Kem mộc tự nhiên** kết hợp mảng thổ cẩm **H’Mông Hoa Chàm** đặt ở tâm đối xứng. Nền sáng giúp tôn trọn vẹn từng đường xoắn ốc sáp ong tinh xảo mà không bị rối mắt.
- **Với Ví The Heritage Clutch**: Thân ví màu **Nâu da bò cognac** hoặc **Xanh chàm sâu** phối dải dệt **Thái Quả Trám** và khóa **Đồng cổ** tạo cảm giác ấm áp, sang trọng cổ điển.
- **Với Khăn The Story Scarf**: Màu lụa **Trắng ngà tơ tự nhiên** kết hợp **Viền cuộn tay xanh chàm** cùng chữ cái thêu ánh vàng là công thức thanh lịch vượt thời gian!`;
      }
    }

    // Multilingual scenario 3: MATERIALS & SILK REGIONS / CHẤT LIỆU
    if (
      q.includes('chất liệu') ||
      q.includes('vải') ||
      q.includes('lụa') ||
      q.includes('thổ cẩm') ||
      q.includes('material') ||
      q.includes('silk') ||
      q.includes('brocade') ||
      q.includes('matière') ||
      q.includes('소재') ||
      q.includes('실크') ||
      q.includes('シルク') ||
      q.includes('材质') ||
      q.includes('vạn phúc') ||
      q.includes('bảo lộc')
    ) {
      switch (currentLang) {
        case 'en':
          return `🧵 **Material & Regional Heritage Guide**:
1. **Brocade by Community**:
   - **H’Mông**: Beeswax batik drawings on hand-spun hemp, dyed in deep natural indigo vats through multiple ferments.
   - **Thái**: Supplementary weft woven on wooden foot looms with diamond lozenge motifs (quả trám) symbolizing prosperity and natural harmony.
   - **Dao (Red Dao)**: Blind reverse-count thread embroidery without pre-drawn guides, featuring sacred pine trees and tiger paws for family protection.
2. **Vietnamese Mulberry Silk Origins**:
   - **Vạn Phúc (Hà Đông)**: 1,000-year-old village famed for Vân silk with subtle jacquard patterns woven into pure silk that shimmer delicately under changing light.
   - **Bảo Lộc (Lâm Đồng)**: High-plateau capital with cool climate producing pure white cocoons, spun into dense, ultra-smooth silk with an ethereal drape.
3. **Our Integrity Promise**: We never make misleading "100% silk" claims; all items state verified batch compositions and authentic artisanal origins clearly.`;
        case 'fr':
          return `🧵 **Guide des Matières & Terroirs de Soie**:
1. **Les Brocarts par Communauté**:
   - **H’Mông** : Batik à la cire d’abeille sur chanvre filé main et teinture naturelle à l’indigo profond.
   - **Thaï** : Tissage sur métier traditionnel en bois aux motifs de losanges symbolisant la fertilité.
   - **Dao** : Broderie à fils comptés sans dessin préalable depuis le revers, arborant le sapin sacré et la patte de tigre.
2. **Les Deux Berceaux de la Soie Vietnamienne**:
   - **Vạn Phúc (Hà Đông)** : Village millénaire réputé pour sa soie jacquard Vân aux motifs subtilement ondoyants.
   - **Bảo Lộc (Lâm Đồng)** : Capitale de la soie des hauts plateaux au climat frais, offrant une soie fluide et soyeuse incomparable.`;
        case 'ko':
          return `🧵 **전통 소재 및 실크 산지 비교 안내**:
1. **소수민족 전통 직물(토껌) 기법**:
   - **흐몽족**: 삼베 직물 위에 구리 펜으로 밀랍을 그려 쪽물에 반복 염색하는 전통 바틱 기법.
   - **타이족**: 베틀 북을 사용해 논밭과 용의 눈을 상징하는 풍요의 마름모(Quả trám)를 짜내는 문직물.
   - **자오족**: 도안 없이 천 뒷면에서 올을 세어 수놓는 고난도 기법으로, 수호 소나무와 호랑이 발자국 문양이 특징.
2. **베트남 2대 실크 산지**:
   - **반푹 (하동)**: 1,000년 역사의 명주 마을로, 빛에 따라 구름 문양이 은은하게 드러나는 전통 자카드 실크(Lụa Vân)의 본고장.
   - **바오록 (람동)**: 서늘한 고원 지대에서 생산된 최상급 백옥 고치를 고밀도로 제직하여 매끄러운 광택을 자랑합니다.`;
        case 'ja':
          return `🧵 **素材とシルク産地のご案内**:
1. **山岳民族の錦織技法**:
   - **モン族**: 手紡ぎ麻布に蜜蝋で文様を描き、天然藍で幾重にも染め上げるバティック技法。
   - **タイ族**: 高機（たかばた）で織り込まれる豊かな実りを祈る幾何学菱形文様（クアチャム）。
   - **ザオ族**: 下絵を描かずに裏面から織り目を数えて刺す針仕事。聖なる松の木と虎の足跡の護符文様。
2. **ベトナム二大シルク名産地**:
   - **ヴァンフック（ハドン）**: 1,000年の歴史を持ち、光の加減で雲紋が浮かび上がる伝統の薄絹「ルア・ヴァン」。
   - **バオロック（ラムドン）**: 涼しい高原気候が生み出す最高品質の白繭から紡がれる、滑らかな高密度シルク。`;
        case 'zh':
          return `🧵 **非遗材质与真丝产地考证**:
1. **各民族手织织锦技艺**:
   - **赫蒙族**: 手纺麻布上以铜刀画滚烫蜂蜡，经过多次蓝靛发酵深染，热水脱蜡显出白净纹理。
   - **泰族**: 提花木机挑梭织造，代表龙目与水田丰收的繁盛菱形纹（Quả trám）。
   - **瑶族**: 无需底稿、在布料背面数纱挑花，刺绣神圣松树与辟邪虎爪纹。
2. **越南两大丝绸源流**:
   - **万福（河东）**: 千年丝绸名村，以光影流转中若隐若现的云纹绸（Lụa Vân）著称。
   - **保禄（林同）**: 高原冷凉气候滋养出的优质纯白蚕茧，丝线均匀高密，垂顺如水。`;
        default:
          return `🧵 **Cẩm nang phân biệt chất liệu & Vùng lụa xác thực**:
1. **Kỹ thuật Thổ cẩm 3 Dân tộc**:
   - **Đồng bào H’Mông**: Vẽ sáp ong thủ công bằng bút đồng trên vải lanh, nhuộm chàm tự nhiên nhiều lớp, hoa văn xoắn ốc mặt trời và hoa bí.
   - **Đồng bào Thái**: Dệt thoi trên khung cửi truyền thống với hoa văn quả trám (hình thoi) tượng trưng cho mắt rồng và đất trời sinh sôi.
   - **Đồng bào Dao (Dao Đỏ)**: Kỹ thuật thêu đếm sợi chỉ từ mặt trái mà không cần vẽ mẫu, nổi bật với họa tiết cây thông che chở và dấu chân cọp bình an.
2. **Phân biệt hai vùng lụa di sản**:
   - **Lụa Vạn Phúc (Hà Đông)**: Hơn 1.000 năm lịch sử, đặc trưng là lụa Vân với hoa văn chìm nổi tinh tế, mộc mạc và sang trọng kinh kỳ.
   - **Lụa Bảo Lộc (Lâm Đồng)**: Khí hậu cao nguyên mát mẻ nuôi giống tằm kén trắng óng ả, công nghệ se tơ mật độ cao cho bề mặt mượt óng và bền chắc.`;
      }
    }

    // Default contextual answer
    switch (currentLang) {
      case 'en':
        return `Thank you for asking! Dệt Sắc Việt is dedicated to honoring Vietnamese handwoven brocades (H’Mông, Thái, Dao) and mulberry silk (Bảo Lộc, Vạn Phúc) in contemporary lifestyle design. You can also ask me about gift ideas, color coordination, or explore the "Design Your Own" studio to customize your piece!`;
      case 'fr':
        return `Merci pour votre question ! Dệt Sắc Việt valorise les brocarts artisanaux des H’Mông, Thaï et Dao ainsi que la soie de mûrier de Bảo Lộc et Vạn Phúc. N'hésitez pas à me demander des conseils de personnalisation ou d'harmonie des teintes !`;
      case 'ko':
        return `문의해 주셔서 감사합니다! Dệt Sắc Việt은 베트남 소수민족 토껌과 천연 멀베리 실크를 현대 디자인으로 재해석합니다. 선물 추천, 배색 가이드, 또는 '직접 디자인하기' 스튜디오에 대해 언제든 편하게 물어보세요!`;
      case 'ja':
        return `ご質問ありがとうございます！Dệt Sắc Việt はモン族・タイ族・ザオ族の手織り錦織とバオロック・ヴァンフックの天然シルクを現代の暮らしに提案しています。ギフト選びや配色のコツなどお気軽にお尋네ください！`;
      case 'zh':
        return `感谢您的咨询！“织色越 (Dệt Sắc Việt)”致力于将赫蒙族、泰族、瑶族手织锦与保禄、万福天然桑蚕丝融入当代生活美学。您可以随时向我咨询送礼推荐、色彩搭配或定制建议！`;
      default:
        return `Cảm ơn bạn đã trò chuyện! Dệt Sắc Việt luôn sẵn sàng đồng hành cùng bạn tìm hiểu về kỹ nghệ dệt thổ cẩm H’Mông, Thái, Dao và sự khác biệt giữa lụa Vạn Phúc với lụa Bảo Lộc. Bạn cũng có thể bấm vào "Tự thiết kế" để trải nghiệm cá nhân hóa ngay nhé!`;
    }
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(query);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleScenarioClick = (prompt: string) => {
    handleSend(prompt);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: t.chatbot.welcomeMsg,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer border border-amber-300/30"
          aria-label="Open Heritage Chatbot"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide">
            {t.chatbot.launcherText}
          </span>
          <MessageSquare className="w-4 h-4" />
        </button>
      )}

      {/* Slide-in Chat Drawer / Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[82vh] h-[580px] bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E6DDCE] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="px-5 py-4 bg-[#F3EDE3] border-b border-[#E8DFC0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#8A3D2B] text-amber-200 flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                DS
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-900 leading-tight">
                  {t.chatbot.drawerTitle}
                </h3>
                <p className="text-[10px] text-stone-500 font-mono">
                  Dệt Sắc Việt Cultural AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-[#E8DFC0]/50 transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-[#E8DFC0]/50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Scenarios Tray */}
          <div className="px-4 py-2 bg-[#FAF4EA] border-b border-[#EFE7D8] flex gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => handleScenarioClick(t.chatbot.scenarios.gift.prompt)}
              className="px-2.5 py-1 bg-white border border-[#DCD3C3] rounded-md text-stone-700 hover:border-[#8A3D2B] hover:text-[#8A3D2B] whitespace-nowrap transition-colors cursor-pointer shadow-xs"
            >
              {t.chatbot.scenarios.gift.label}
            </button>
            <button
              onClick={() => handleScenarioClick(t.chatbot.scenarios.palette.prompt)}
              className="px-2.5 py-1 bg-white border border-[#DCD3C3] rounded-md text-stone-700 hover:border-[#8A3D2B] hover:text-[#8A3D2B] whitespace-nowrap transition-colors cursor-pointer shadow-xs"
            >
              {t.chatbot.scenarios.palette.label}
            </button>
            <button
              onClick={() => handleScenarioClick(t.chatbot.scenarios.materials.prompt)}
              className="px-2.5 py-1 bg-white border border-[#DCD3C3] rounded-md text-stone-700 hover:border-[#8A3D2B] hover:text-[#8A3D2B] whitespace-nowrap transition-colors cursor-pointer shadow-xs"
            >
              {t.chatbot.scenarios.materials.label}
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#8A3D2B] text-white rounded-br-xs shadow-xs'
                      : 'bg-white border border-[#E8DFC0] text-stone-800 rounded-bl-xs shadow-xs'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8DFC0] rounded-xl px-3 py-2 text-[11px] text-stone-500 italic flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-[#8A3D2B] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#8A3D2B] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#8A3D2B] rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1">{t.chatbot.typing}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#F5EFE6] border-t border-[#E8DFC0] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.chatbot.inputPlaceholder}
              className="flex-1 px-3 py-2 bg-white rounded-lg border border-[#D8CEC0] text-xs text-stone-900 focus:outline-hidden focus:border-[#8A3D2B]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-[#8A3D2B] text-white rounded-lg hover:bg-[#723223] disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
