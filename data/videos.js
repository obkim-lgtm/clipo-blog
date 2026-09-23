// 배우기 탭 영상 데이터. 제목은 가안(docs/video_backlog.md와 동기화).
// since: 이 기능이 업데이트된 날짜(YYYY-MM-DD). 있으면 배우기 '최근 업데이트된 기능'에 90일간 노출. art: 카드 그림 키(data/art.js). mp4: 직접 재생 파일(있으면 yt보다 우선). dur: "1:20" 게시됨 / null 준비 중. yt: 유튜브 ID(게시 후). screen: 관련 제품 화면(2단계 맥락 링크용).
window.CATS = {
  start:   { name: '시작하기',      desc: '한 학기 흐름 순서로 보는 재생목록' },
  class:   { name: '수업·학생',     desc: '학생 등록, 수업, 권한' },
  design:  { name: '수행평가 설계', desc: '성취기준, 채점기준 AI 생성' },
  files:   { name: '과제물 관리',   desc: '개별·일괄·스캔 업로드, 학생 제출' },
  grading: { name: '수행평가 채점', desc: 'AI 채점 결과 확인, 재채점, 내보내기' },
  record:  { name: '생기부',        desc: '세특·창체·행특 초안' },
  account: { name: '계정·이용권',   desc: '크레딧, 이용권, 학교 도입, 소속 변경' },
};

// 영상 → AI 채점 가이드 장. 영상 항목에 guide 가 있으면 그 장, 없으면 묶음 기본값(GUIDE_BY_CAT)
window.GUIDE_CH = {
  'index.html': 'AI 채점은 어떻게 동작하나요?',
  'ch1.html': 'AI는 이렇게 채점해요', 'ch2.html': '채점기준은 이렇게 써요', 'ch3.html': '과제물은 이렇게 준비해요',
  'ch4.html': '이런 답안까지 채점돼요', 'ch5.html': '결과가 다를 땐 이렇게 해요', 'ch6.html': '자주 묻는 질문',
  'examples.html': '과목별 채점 예시'
};
window.GUIDE_BY_CAT = { design: 'ch2.html', files: 'ch3.html', grading: 'ch5.html' };

window.VIDEOS = [
  // 시작하기
  { id: 'S0', cat: 'start', art: 'intro', guide: 'index.html', title: '클리포는 어떤 서비스인가요?', dur: '2:39', yt: null,
    mp4: 'https://training.clipo.ai/video/clipo_promo.mp4', poster: 'https://training.clipo.ai/video/poster.jpg', screen: '전체', isNew: true,
    summary: '서·논술형 채점부터 생기부 기록까지, 선생님의 한 학기를 클리포로 어떻게 보내는지 2분 40초로 봐요. AI가 점수와 기록을 정하지 않아요. 제안을 읽고 결정하는 건 언제나 선생님이에요.' },
  { id: 'S1', cat: 'start', art: 'signup', title: '클리포 가입하고 교사 인증 받기', dur: null, yt: null, screen: '가입·내 정보', isNew: false,
    summary: '가입부터 교사 인증까지. 이 영상이 끝나면 선생님 계정으로 클리포에 들어와 있어요.' },
  { id: 'S2', cat: 'start', art: 'people_plus', title: '학생 등록하고 수업 만들기', dur: null, yt: null, screen: '학교 설정 · 수업', isNew: false,
    summary: '학생 명렬을 올리고 첫 수업을 만들어요.' },
  { id: 'S3', cat: 'start', art: 'ruler_pen', guide: 'ch2.html', title: '채점기준 AI로 만들기', dur: '1:07', yt: null,
    mp4: 'video/s3.mp4?v=1', poster: 'video/s3_poster.jpg?v=1', screen: '수행평가 설계', isNew: true,
    summary: '성취기준을 고르고, 원하는 채점기준을 한두 문장으로 적어 AI 초안을 받아요. 쓸 것만 골라 설계에 넣은 뒤 선생님 기준으로 고쳐요.' },
  { id: 'S4', cat: 'start', art: 'paths', guide: 'ch3.html', title: '답안 받는 방법 고르기', dur: '0:43', yt: null,
    mp4: 'video/s4.mp4?v=1', poster: 'video/s4_poster.jpg?v=1', screen: '수행평가 설계', isNew: true,
    summary: '종이로 걷어 올리기, 학생이 클리포에서 직접 쓰거나 파일로 내기, 과제물 없이 바로 채점하기. 세 가지의 차이를 알고 골라요.' },
  { id: 'S5', cat: 'start', art: 'medal', guide: 'ch5.html', title: 'AI 채점 결과 확인하고 확정하기', dur: '1:03', yt: null,
    mp4: 'video/s5.mp4?v=1', poster: 'video/s5_poster.jpg?v=1', screen: '수행평가 채점', isNew: true,
    summary: '학급 단위로 AI 채점을 돌리고, 학생 답안 옆에서 점수와 채점 근거를 읽어요. 고칠 학생만 손본 뒤 점수를 확정하는 건 선생님이에요.' },
  { id: 'S6', cat: 'start', art: 'notebook', title: '채점 결과로 세특 초안 만들기', dur: '1:03', yt: null,
    mp4: 'video/s6.mp4?v=1', poster: 'video/s6_poster.jpg?v=1', screen: '세부능력 및 특기사항 지원', isNew: true,
    summary: '마감한 수행평가의 채점 결과로 학생마다 다른 세특 초안을 받아요. 기록 근거를 보며 고치고, 정하는 건 선생님이에요.' },

  // 수업·학생
  { id: 'A1', cat: 'class', art: 'sheet', title: '학생 명렬 엑셀로 한 번에 등록하기', dur: null, yt: null, screen: '학교 설정 · 학생', isNew: false, summary: '' },
  { id: 'A2', cat: 'class', art: 'lock', title: '학생 계정 비밀번호 바꿔 주기', dur: null, yt: null, screen: '학교 설정 · 학생', isNew: false, summary: '' },
  { id: 'A4', cat: 'class', art: 'crown', title: '대표교사 바꾸기', dur: null, yt: null, screen: '학교 설정 · 선생님', isNew: false, summary: '' },
  { id: 'A5', cat: 'class', art: 'stamp', title: '동료 교사 인증 승인하기', dur: null, yt: null, screen: '학교 설정 · 선생님', isNew: false, summary: '' },
  { id: 'A6', cat: 'class', art: 'phone', title: '학생 로그인 방법 안내하기', dur: null, yt: null, screen: '학생 화면', isNew: false, summary: '' },
  { id: 'A7', cat: 'class', art: 'box', title: '수업 보관하고 다시 꺼내기', dur: null, yt: null, screen: '홈 · 내 수업', isNew: false, summary: '' },

  // 수행평가 설계
  // 원칙 영상(2~3분) — AI 채점 가이드 2장 기반, 시연 계정 실제 화면. 영상 소스 clipo_promo_video `Learn-Rubric` (09-23 첫 게시, 내용은 다듬는 중)
  { id: 'R1', cat: 'design', art: 'compass', guide: 'ch2.html', title: '채점기준 잘 쓰는 법', dur: '2:26', yt: null,
    mp4: 'video/rubric.mp4?v=4', poster: 'video/rubric_poster.jpg?v=3', screen: '수행평가 설계', isNew: true,
    summary: 'AI 채점이 선생님 점수와 잘 맞으려면 채점기준을 어떻게 써야 할까요? 같은 답안 스무 장을 채점기준만 바꿔 다시 채점해 본 결과와 함께, 잘 맞는 쓰기 네 가지와 피할 것 세 가지를 봐요.' },
  { id: 'B1', cat: 'design', art: 'target', since: '2026-08-27', title: '교육과정 성취기준 골라 넣기', dur: null, yt: null, screen: '수행평가 설계', isNew: false, summary: '' },
  { id: 'B2', cat: 'design', art: 'tags', title: '키워드로 채점기준 초안 만들기', dur: null, yt: null, screen: '수행평가 설계', isNew: false, summary: '' },
  { id: 'B3', cat: 'design', art: 'checklist', title: '채점요소 정해서 채점기준 만들기', dur: null, yt: null, screen: '수행평가 설계', isNew: false, summary: '' },
  { id: 'B4', cat: 'design', art: 'camera', guide: 'examples.html', title: '쓰던 채점기준표 사진으로 가져오기', dur: null, yt: null, screen: '수행평가 설계', isNew: false, summary: '' },
  { id: 'B5', cat: 'design', art: 'keyboard', since: '2026-09-02', title: '학생이 클리포에 직접 쓰는 과제 만들기', dur: null, yt: null, screen: '수행평가 설계', isNew: false, summary: '' },

  // 과제물 관리
  { id: 'C1', cat: 'files', art: 'upload_one', title: '학생 한 명 과제물 따로 올리기', dur: null, yt: null, screen: '과제물 관리', isNew: false, summary: '' },
  { id: 'C2', cat: 'files', art: 'upload_many', since: '2026-08-06', title: '여러 학생 파일 한 번에 올리기', dur: '0:33', yt: null,
    mp4: 'video/c2.mp4?v=1', poster: 'video/c2_poster.jpg?v=1', screen: '과제물 관리', isNew: false,
    summary: '학생별로 나뉜 과제물 파일을 한 번에 올리면, 파일 이름의 학생 이름으로 자동으로 짝지어져요. 짝이 틀리면 매칭 수정으로 바꿔요.' },
  { id: 'C3', cat: 'files', art: 'scanner', guide: 'ch4.html', title: '반 전체 스캔 PDF 한 장으로 올리기', dur: null, yt: null, screen: '과제물 관리', isNew: false, summary: '' },
  { id: 'C4', cat: 'files', art: 'send', title: '학생이 직접 제출하게 하기', dur: null, yt: null, screen: '과제물 관리 · 학생 화면', isNew: false, summary: '' },

  // 수행평가 채점
  { id: 'D1', cat: 'grading', art: 'magnifier', guide: 'ch4.html', title: 'AI 채점 전에 확인하기', dur: null, yt: null, screen: '수행평가 채점', isNew: false, summary: '' },
  { id: 'D2', cat: 'grading', art: 'bubble_score', title: '채점 근거 읽고 점수 고치기', dur: null, yt: null, screen: '수행평가 채점', isNew: false, summary: '' },
  { id: 'D3', cat: 'grading', art: 'bubble_pen', title: '피드백 초안 다듬기', dur: null, yt: null, screen: '수행평가 채점', isNew: false, summary: '' },
  { id: 'D4', cat: 'grading', art: 'refresh', title: '다시 채점하기', dur: null, yt: null, screen: '수행평가 채점', isNew: false, summary: '' },
  { id: 'D5', cat: 'grading', art: 'export', title: '채점 결과 내보내고 학생에게 공개하기', dur: null, yt: null, screen: '수행평가 채점', isNew: false, summary: '' },

  // 생기부
  { id: 'E1', cat: 'record', art: 'compass', since: '2026-07-22', title: '세특 초안 방향 바꿔 다시 받기', dur: null, yt: null, screen: '세부능력 및 특기사항 지원', isNew: false, summary: '' },
  { id: 'E2', cat: 'record', art: 'book_tags', title: '채점 없이 키워드로 세특 만들기', dur: null, yt: null, screen: '세특 간편 생성기', isNew: false, summary: '' },
  { id: 'E3', cat: 'record', art: 'clipboard', title: '활동지·설문 올려 창체 초안 만들기', dur: null, yt: null, screen: '창의적 체험활동', isNew: false, summary: '' },
  { id: 'E4', cat: 'record', art: 'quote', title: '일화 몇 줄로 행특 초안 만들기', dur: null, yt: null, screen: '행동특성 및 종합기록 지원', isNew: false, summary: '' },
  { id: 'E5', cat: 'record', art: 'byte_ruler', title: 'NEIS 글자 수에 맞추기', dur: null, yt: null, screen: '생기부 공통', isNew: false, summary: '' },
  { id: 'E6', cat: 'record', art: 'apple', since: '2026-06-25', title: '초등 교과학습발달상황 초안 만들기', dur: null, yt: null, screen: '교과학습발달상황 지원', isNew: false, summary: '' },

  // 계정·이용권
  { id: 'F1', cat: 'account', art: 'coins', title: 'AI 크레딧 차감 방식 알아보기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
  { id: 'F2', cat: 'account', art: 'ticket', title: '이용권 사고 쿠폰 등록하기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
  { id: 'F3', cat: 'account', art: 'building', title: '학교 단체로 도입하기', dur: null, yt: null, screen: '요금제 알아보기', isNew: false, summary: '' },
  { id: 'F4', cat: 'account', art: 'swap_school', title: '학교 옮길 때 소속 바꾸기', dur: null, yt: null, screen: '내 정보', isNew: false, summary: '' },
  { id: 'F5', cat: 'account', art: 'receipt', title: '견적서·영수증 받기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
];
