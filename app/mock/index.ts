import { Feed } from "@/app/types";

export const feeds: Feed[] = [
  {
    id: 1,
    summary: `트럼프는 중국산 제품에 대한 25% 관세를 부과할 것이라고 발표했다. 
            이는 무역 불균형을 해소하기 위한 조치라고 밝혔다. 시장은 부정적으로 반응했다.`,
    tags: ["#반도체", "#미국", "#총선"],
    channel: "CNN",
    link: "https://www.cnn.com",
    published_at: "2025-11-18T12:00:00Z",
    created_at: "2025-11-18T12:30:00Z",
  },
  {
    id: 2,
    summary: `트럼프 대통령이 미국 기업들의 자국 내 생산 확대를 위한 세금 인센티브 계획을 발표했다. 
            해외 제조 기업에 대한 규제도 강화될 전망이다.`,
    tags: ["#반도체", "#미국", "#총선"],
    channel: "Bloomberg",
    link: "https://www.bloomberg.com",
    published_at: "2025-11-18T08:00:00Z",
    created_at: "2025-11-18T08:30:00Z",
  },
  {
    id: 3,
    summary: `트럼프가 대만 반도체 기업과의 협력 강화를 발표했다. 
            TSMC와의 파트너십을 통해 미국 내 반도체 생산 역량을 확대할 계획이라고 밝혔다.`,
    tags: ["#반도체", "#대만", "#TSMC"],
    channel: "Reuters",
    link: "https://www.reuters.com",
    published_at: "2025-11-18T04:00:00Z",
    created_at: "2025-11-18T04:30:00Z",
  },
  {
    id: 4,
    summary: `트럼프 행정부가 인텔과 삼성전자에 대한 반도체 투자 인센티브를 확대한다고 발표했다. 
            아리조나와 텍사스에 새로운 파운드리를 건설할 예정이다.`,
    tags: ["#반도체", "#인텔", "#삼성전자"],
    channel: "The Wall Street Journal",
    link: "https://www.wsj.com",
    published_at: "2025-11-18T00:00:00Z",
    created_at: "2025-11-18T00:30:00Z",
  },
  {
    id: 5,
    summary: `트럼프가 중국산 전기차에 대한 추가 관세를 검토 중이라고 밝혔다. 
            자동차 산업 보호를 위한 조치로, 유럽 연합도 함께 협력할 가능성이 있다.`,
    tags: ["#전기차", "#중국", "#관세"],
    channel: "Financial Times",
    link: "https://www.ft.com",
    published_at: "2025-11-17T20:00:00Z",
    created_at: "2025-11-17T20:30:00Z",
  },
  {
    id: 6,
    summary: `트럼프 대통령이 AI 반도체 수출 규제를 강화할 것이라고 발표했다. 
            엔비디아와 AMD의 고성능 칩 수출에 제한을 둘 예정이다.`,
    tags: ["#AI", "#반도체", "#엔비디아"],
    channel: "TechCrunch",
    link: "https://www.techcrunch.com",
    published_at: "2025-11-17T16:00:00Z",
    created_at: "2025-11-17T16:30:00Z",
  },
  {
    id: 7,
    summary: `트럼프가 미국 내 반도체 설계 인재 양성을 위한 교육 프로그램을 시작한다고 발표했다. 
            대학과 기업 간 협력 프로그램에 50억 달러를 투자할 계획이다.`,
    tags: ["#반도체", "#교육", "#인재양성"],
    channel: "CNBC",
    link: "https://www.cnbc.com",
    published_at: "2025-11-17T12:00:00Z",
    created_at: "2025-11-17T12:30:00Z",
  },
  {
    id: 8,
    summary: `트럼프 행정부가 유럽과의 반도체 공급망 협력 강화를 논의 중이다. 
            ASML과의 협력 확대를 통해 리스크를 분산할 계획이다.`,
    tags: ["#반도체", "#유럽", "#ASML"],
    channel: "Bloomberg",
    link: "https://www.bloomberg.com",
    published_at: "2025-11-17T08:00:00Z",
    created_at: "2025-11-17T08:30:00Z",
  },
  {
    id: 9,
    summary: `트럼프가 일본과의 반도체 장비 협력 강화를 발표했다. 
            도쿄일렉트론과의 파트너십을 통해 미국 내 생산 역량을 확대할 예정이다.`,
    tags: ["#반도체", "#일본", "#장비"],
    channel: "Nikkei",
    link: "https://www.nikkei.com",
    published_at: "2025-11-17T04:00:00Z",
    created_at: "2025-11-17T04:30:00Z",
  },
  {
    id: 10,
    summary: `트럼프 대통령이 중국산 리튬이온 배터리에 대한 관세를 30%로 인상한다고 발표했다. 
            전기차 산업 보호를 위한 조치로, 국내 배터리 제조업체들이 환영하고 있다.`,
    tags: ["#배터리", "#전기차", "#중국"],
    channel: "Reuters",
    link: "https://www.reuters.com",
    published_at: "2025-11-17T00:00:00Z",
    created_at: "2025-11-17T00:30:00Z",
  },
  {
    id: 11,
    summary: `트럼프가 미국 내 반도체 연구개발에 200억 달러를 추가 투자한다고 발표했다. 
            DARPA와의 협력을 통해 차세대 반도체 기술 개발에 집중할 예정이다.`,
    tags: ["#반도체", "#R&D", "#DARPA"],
    channel: "The New York Times",
    link: "https://www.nytimes.com",
    published_at: "2025-11-16T20:00:00Z",
    created_at: "2025-11-16T20:30:00Z",
  },
  {
    id: 12,
    summary: `트럼프 행정부가 한국과의 반도체 협력 강화를 논의 중이다. 
            삼성전자와 SK하이닉스의 미국 투자 확대를 위한 인센티브를 제공할 예정이다.`,
    tags: ["#반도체", "#한국", "#SK하이닉스"],
    channel: "Yonhap News",
    link: "https://www.yonhapnews.co.kr",
    published_at: "2025-11-16T16:00:00Z",
    created_at: "2025-11-16T16:30:00Z",
  },
  {
    id: 13,
    summary: `트럼프가 중국산 태양광 패널에 대한 관세를 50%로 인상한다고 발표했다. 
            재생에너지 산업 보호를 위한 조치로, 국내 제조업체들의 생산 확대를 유도할 계획이다.`,
    tags: ["#태양광", "#재생에너지", "#중국"],
    channel: "Energy News",
    link: "https://www.energynews.com",
    published_at: "2025-11-16T12:00:00Z",
    created_at: "2025-11-16T12:30:00Z",
  },
  {
    id: 14,
    summary: `트럼프 대통령이 미국 내 반도체 패키징 기술 개발에 집중한다고 발표했다. 
            고급 패키징 기술을 통해 반도체 성능 향상을 도모할 예정이다.`,
    tags: ["#반도체", "#패키징", "#기술개발"],
    channel: "IEEE Spectrum",
    link: "https://www.spectrum.ieee.org",
    published_at: "2025-11-16T08:00:00Z",
    created_at: "2025-11-16T08:30:00Z",
  },
  {
    id: 15,
    summary: `트럼프가 유럽 연합과의 반도체 공급망 안정화 협정을 체결했다. 
            상호 의존성을 강화하여 글로벌 공급망 리스크를 줄이기로 합의했다.`,
    tags: ["#반도체", "#EU", "#공급망"],
    channel: "Politico",
    link: "https://www.politico.com",
    published_at: "2025-11-16T04:00:00Z",
    created_at: "2025-11-16T04:30:00Z",
  },
  {
    id: 16,
    summary: `트럼프 행정부가 중국산 드론에 대한 수입 제한을 강화한다고 발표했다. 
            보안 우려를 이유로 국방부와 정부 기관의 중국산 드론 사용을 금지할 예정이다.`,
    tags: ["#드론", "#보안", "#중국"],
    channel: "Defense News",
    link: "https://www.defensenews.com",
    published_at: "2025-11-16T00:00:00Z",
    created_at: "2025-11-16T00:30:00Z",
  },
  {
    id: 17,
    summary: `트럼프가 미국 내 반도체 원자재 공급망 구축을 위한 계획을 발표했다. 
            실리콘 웨이퍼와 희토류 원자재의 자국 내 생산을 확대할 계획이다.`,
    tags: ["#반도체", "#원자재", "#공급망"],
    channel: "Mining.com",
    link: "https://www.mining.com",
    published_at: "2025-11-15T20:00:00Z",
    created_at: "2025-11-15T20:30:00Z",
  },
  {
    id: 18,
    summary: `트럼프 대통령이 퀀텀 컴퓨팅 반도체 개발에 30억 달러를 투자한다고 발표했다. 
            IBM과 구글과의 협력을 통해 차세대 컴퓨팅 기술을 선도할 계획이다.`,
    tags: ["#반도체", "#퀀텀컴퓨팅", "#IBM"],
    channel: "Wired",
    link: "https://www.wired.com",
    published_at: "2025-11-15T16:00:00Z",
    created_at: "2025-11-15T16:30:00Z",
  },
  {
    id: 19,
    summary: `트럼프가 중국산 로봇에 대한 관세를 35%로 인상한다고 발표했다. 
            제조업 자동화 산업 보호를 위한 조치로, 국내 로봇 제조업체들이 환영하고 있다.`,
    tags: ["#로봇", "#자동화", "#중국"],
    channel: "Robotics Business Review",
    link: "https://www.roboticsbusinessreview.com",
    published_at: "2025-11-15T12:00:00Z",
    created_at: "2025-11-15T12:30:00Z",
  },
  {
    id: 20,
    summary: `트럼프 행정부가 미국 내 반도체 테스트 장비 산업 육성을 위한 정책을 발표했다. 
            테라다인과 키사이트 등 국내 기업들의 경쟁력 강화를 지원할 예정이다.`,
    tags: ["#반도체", "#테스트장비", "#산업육성"],
    channel: "EE Times",
    link: "https://www.eetimes.com",
    published_at: "2025-11-15T08:00:00Z",
    created_at: "2025-11-15T08:30:00Z",
  },
];
