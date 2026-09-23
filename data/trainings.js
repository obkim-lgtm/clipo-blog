// 연수 탭 데이터. training.clipo.ai 의 카드와 같은 필드. 날짜가 지나면 자동으로 '지난 연수'로 이동.
// 다가오는 연수: title, date, dur, place, speaker, topic, form
// 지난 연수:     title, date, tag(교과), speaker, topic, thumb, badge(영상·연수자료 제공 / 연수자료만 제공), materials(자료 링크)
window.TRAININGS = [
  { id: 't-2609-kor', title: '[9월] 국어과 실전 연수', date: '2026-09-30T19:00', dur: '90분',
    place: 'Zoom 온라인 (신청 후 링크 발송)', speaker: '영훈고 국어 선생님',
    topic: '클리포로 끝내는 국어 수행평가 채점 및 생기부 작성',
    form: 'https://forms.gle/6fNN6rqfMXdtiE6G6' },

  { id: 'p-2609-soc', title: '[9월] 사회과 실전 연수', date: '2026-09-16', tag: '사회', speaker: '협성고 사회 선생님',
    topic: '클리포를 활용한 평가-기록 업그레이드 하기', thumb: 'img/training/thumb_social_september.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1zORwKd20MnoxTOcb87HVXvytSB0a04QR?usp=sharing' },
  { id: 'p-2608-sci', title: '[8월] 과학과 실전 연수', date: '2026-08-27', tag: '과학', speaker: '고색고 과학(물리) 선생님',
    topic: '클리포와 함께 과학 서·논술형 평가 대비하기', thumb: 'img/training/thumb_science_august.png', badge: '연수자료만 제공',
    materials: 'https://drive.google.com/drive/folders/1W-H-8EQ81mBqcwTFZGJjWiLDubUDsSlK?usp=sharing' },
  { id: 'p-2608-soc', title: '[8월] 사회과 실전 연수', date: '2026-08-13', tag: '사회', speaker: '천안월봉고 사회 선생님',
    topic: '"직접 해보니 달랐습니다" - 클리포로 스마트하게 완성하는 고교 수행평가와 세특', thumb: 'img/training/thumb_social_august.png', badge: '연수자료만 제공',
    materials: 'https://drive.google.com/drive/folders/1bz-86VFZSy9VDhNcvXprG2xeAhesdi3I?usp=sharing' },
  { id: 'p-2607-ele', title: '[7월] 초등과 실전 연수', date: '2026-07-16', tag: '초등', speaker: '원당초등학교 선생님',
    topic: '클리포로 하는 초등 평가 A to Z', thumb: 'img/training/thumb_ele_july.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1_J8qy4FTpRLyoiqx5coUPjQMRpOD3Y-8?usp=sharing' },
  { id: 'p-2607-eng', title: '[7월] 영어과 실전 연수', date: '2026-07-09', tag: '영어', speaker: '용인신촌중 영어 선생님',
    topic: '클리포로 준비하는 영어 평가 (feat.설계부터 세특까지)', thumb: 'img/training/thumb_english_july.png', badge: '연수자료만 제공',
    materials: 'https://drive.google.com/drive/folders/1nUVd0jblPZ_9MwbRubXupxjT81Pzfdfs?usp=sharing' },
  { id: 'p-2606-kor', title: '[6월] 국어과 실전 연수', date: '2026-06-17', tag: '국어', speaker: '경기 안용중 국어 선생님',
    topic: '국어수업에서 클리포 사용하기(기초)', thumb: 'img/training/thumb_korean_june.png', badge: '연수자료만 제공',
    materials: 'https://drive.google.com/drive/folders/1_HJMUxJ6Ge8n19-PNLz6_m8o8liilmLO?usp=sharing' },
  { id: 'p-2605-chi', title: '[5월] 한문과 실전 연수', date: '2026-05-20', tag: '한문', speaker: '경기 안용중 한문 선생님',
    topic: '서·논술형 평가 AI로 채점부터 세특까지 끝내기', thumb: 'img/training/thumb_chinese_may.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1ALxySTdzFoFlIKVEo5O3C_dCkjJQLhsK?usp=sharing' },
  { id: 'p-2605-math', title: '[5월] 수학과 실전 연수', date: '2026-05-13', tag: '수학', speaker: '경기 안용중 수학 선생님',
    topic: 'AI와 함께하는 수학 서·논술형 정복기', thumb: 'img/training/thumb_math_may.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1Iw0B7axy-WLeF_QccEvNGinLwxdYuo6O?usp=sharing' },
  { id: 'p-2604-soc', title: '[4월] 사회과 실전 연수', date: '2026-04-30', tag: '사회', speaker: '전북 왕궁중 사회 선생님',
    topic: '클리포로 대비하는 서논술형 평가', thumb: 'img/training/thumb_social_april.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1gnVvOYjze7Rgtai0bQ-AV0NlT9LBQNs_?usp=sharing' },
  { id: 'p-2604-kor', title: '[4월] 국어과 실전 연수', date: '2026-04-16', tag: '국어', speaker: '서울여중 국어 선생님',
    topic: 'IB 학교에서 클리포 200% 활용하기', thumb: 'img/training/thumb_korean_april.png', badge: '연수자료만 제공',
    materials: 'https://padlet.com/yeeun_8419/ib-4-16-4uaktwv60fziimql' },
  { id: 'p-2603-sci', title: '[3월] 과학과 실전 연수', date: '2026-03-25', tag: '과학', speaker: '경기 광수중 과학 선생님',
    topic: 'AI로 끝내는 평가계획 생성 및 생기부 작성', thumb: 'img/training/thumb_science_march.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1t4Jp68yiajE_deselYmDB2B3Y0zBxVDb' },
  { id: 'p-2602-math', title: '[2월] 클리포 신학기 실전 연수', date: '2026-02-24', tag: '수학', speaker: '경기 위례한빛고 수학 선생님',
    topic: '선생님의 퇴근을 앞당기는 클리포 완벽 가이드', thumb: 'img/training/thumb_math_feb.png', badge: '영상·연수자료 제공',
    materials: 'https://drive.google.com/drive/folders/1fF0Tby3BvYXBKbMDHm_-pnQ-EqIK7oGR' },
];

// 연수 후기 (training.clipo.ai 지난 연수 탭에서 옮김)
window.REVIEWS = {
  headline: '10명 중 8명, 매우 만족',
  note: '클리포 실전 연수 참여 교사 만족도 조사 기준',
  stats: [['100%', '도움이 됐다'], ['100%', '적용해보고 싶다'], ['99%', '추천하고 싶다']],
  quotes: [
    '수업 설계부터 채점, 세특 기록까지 전 과정을 한 번에 배울 수 있어 큰 도움이 되었습니다.',
    '논술형 수행평가 채점 시간을 줄일 수 있는 실질적인 방안을 알려 주셔서 좋았습니다!',
    '각 교과별로 따로 클리포 강의 열어주시면 너무 감사하겠습니다. 또 듣고 싶어요.',
    '한문과 특화 연수가 많지 않은데 정말 소중한 기회였습니다.',
    '교과 수행평가 채점만 되는 줄 알았는데, 창체·동아리·행발에도 활용할 수 있다는 걸 새로 알게 되었어요.',
    '수업, 평가, 기록이 한 플랫폼에서 일체화될 수 있을 것 같아 기대됩니다.',
    '궁금할 만한 점을 이미 아시고 자세히 설명해주신 부분이 정말 좋았습니다!',
    '실제 사용하면서 필요한 깨알 팁을 알려주셔서 큰 로드맵을 짤 수 있었습니다.'
  ]
};
