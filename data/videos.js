// 배우기 탭 영상 데이터. 제목은 가안(docs/video_backlog.md와 동기화).
// since: 이 기능이 업데이트된 날짜(YYYY-MM-DD). 있으면 배우기 '최근 업데이트된 기능'에 90일간 노출. art: 카드 그림 키(data/art.js). mp4: 직접 재생 파일(있으면 yt보다 우선). dur: "1:20" 게시됨 / null 준비 중. yt: 유튜브 ID(게시 후). screen: 관련 제품 화면(2단계 맥락 링크용).
window.CATS = {
  start:   { name: '시작하기',      desc: '한 학기 흐름 순서로 보는 재생목록' },
  class:   { name: '수업·참여 학생', desc: '수업 만들기, 참여 학생, 수업 보관' },
  design:  { name: '수행평가 설계', desc: '성취기준, 채점기준 AI 생성' },
  files:   { name: '과제물 관리',   desc: '개별·일괄·스캔 업로드, 학생 제출' },
  grading: { name: '수행평가 채점', desc: 'AI 채점, 점수 확정, 피드백 공개' },
  record:  { name: '생기부',        desc: '세특·창체·행특 초안과 다듬기' },
  school:  { name: '학교 설정',     desc: '학생 계정, 선생님 인증, 이용권, 소속 변경' },
  account: { name: '계정·이용권',   desc: '크레딧, 이용권, 학교 도입, 소속 변경' },
};

// 영상 → AI 채점 가이드 장. 영상 항목에 guide 가 있으면 그 장, 없으면 묶음 기본값(GUIDE_BY_CAT)
window.GUIDE_CH = {
  'index.html': 'AI 채점은 어떻게 동작하나요?',
  'ch1.html': 'AI는 이렇게 채점해요', 'ch2.html': '채점기준은 이렇게 써요', 'ch3.html': '과제물은 이렇게 준비해요',
  'ch4.html': '이런 답안까지 채점돼요', 'ch5.html': '결과가 다를 땐 이렇게 해요', 'ch6.html': '자주 묻는 질문',
  'examples.html': '과목별 채점 예시', 'contest.html#tips': '선생님들이 찾은 채점기준 꿀팁'
};
window.GUIDE_BY_CAT = { design: 'ch2.html', files: 'ch3.html', grading: 'ch5.html' };

window.VIDEOS = [
  // 시작하기
  { id: 'S0', cat: 'start', art: 'intro', guide: 'index.html', title: '클리포는 어떤 서비스인가요?', dur: '2:39', yt: null,
    mp4: 'https://training.clipo.ai/video/clipo_promo.mp4', poster: 'video/s0_poster.jpg?v=2', screen: '전체', isNew: false,
    summary: '서·논술형 채점부터 생기부 기록까지, 선생님의 한 학기를 클리포로 어떻게 보내는지 2분 40초로 봐요. AI가 점수와 기록을 정하지 않아요. 제안을 읽고 결정하는 건 언제나 선생님이에요.' },
  { id: 'S1', cat: 'start', art: 'people_plus', title: '학교 설정에서 학생 계정 만들기', dur: '0:26', yt: null,
    mp4: 'video/s1.mp4?v=2', poster: 'video/s1_poster.jpg?v=2', screen: '학교 설정', isNew: false,
    summary: '수업에 넣을 학생은 학교 설정의 학생 관리에서 먼저 만들어요. 한 명씩 또는 엑셀로 한 번에 만들고, 비밀번호도 여기서 바꿔 줘요.' },
  { id: 'S2', cat: 'start', art: 'cat_class', title: '수업 만들고 학생 넣기', dur: '0:26', yt: null,
    mp4: 'video/s2.mp4?v=3', poster: 'video/s2_poster.jpg?v=3', screen: '수업', isNew: false,
    summary: '홈에서 첫 수업을 만들고, 수업 홈의 참여 학생 관리에서 반별 학생을 확인하거나 더하고 빼요.' },
  { id: 'S3', cat: 'start', art: 'ruler_pen', guide: 'ch2.html', title: '채점기준 AI로 만들기', dur: '1:07', yt: null,
    mp4: 'video/s3.mp4?v=2', poster: 'video/s3_poster.jpg?v=2', screen: '수행평가 설계', isNew: false,
    summary: '성취기준을 고르고, 원하는 채점기준을 한두 문장으로 적어 AI 초안을 받아요. 쓸 것만 골라 설계에 넣은 뒤 선생님 기준으로 고쳐요.' },
  { id: 'S4', cat: 'start', art: 'paths', guide: 'ch3.html', title: '과제물 받는 방법 정하고 올리기', dur: '1:01', yt: null,
    mp4: 'video/s4.mp4?v=3', poster: 'video/s4_poster.jpg?v=3', screen: '수행평가 설계 · 과제물 관리', isNew: false,
    summary: '설계에서 종이로 걷을지, 학생이 클리포에서 낼지 정해요. 걷은 답안은 과제물 관리에서 스캔 PDF나 학생별 파일로 한 번에 올려요.' },
  { id: 'S5', cat: 'start', art: 'medal', guide: 'ch5.html', title: 'AI 채점 결과 확인하고 확정하기', dur: '1:03', yt: null,
    mp4: 'video/s5.mp4?v=2', poster: 'video/s5_poster.jpg?v=2', screen: '수행평가 채점', isNew: false,
    summary: '학급 단위로 AI 채점을 돌리고, 학생 답안 옆에서 점수와 채점 근거를 읽어요. 고칠 학생만 손본 뒤 점수를 확정하는 건 선생님이에요.' },
  { id: 'D5', cat: 'start', art: 'export', title: '채점 결과 학생에게 공개하기', dur: '0:45', yt: null,
    mp4: 'video/d5.mp4?v=2', poster: 'video/d5_poster.jpg?v=2', screen: '수행평가 채점', isNew: false,
    summary: '결과 공개에서 학생이 클리포에서 볼지, PDF로 출력할지 골라요. 공개할 학생·항목·기간을 정하고, 채점 결과 파일은 학급 채점 현황에서 받아요.' },
  { id: 'S6', cat: 'start', art: 'notebook', title: '채점 결과로 세특 초안 만들기', dur: '1:15', yt: null,
    mp4: 'video/s6.mp4?v=3', poster: 'video/s6_poster.jpg?v=3', screen: '수행평가 채점 · 세부능력 및 특기사항 지원', isNew: false,
    summary: '수행평가 채점 목록에서 평가를 마감한 뒤, 채점 결과로 학생마다 다른 세특 초안을 받아요. 기록 근거를 보며 고치고, 정하는 건 선생님이에요.' },

  // 수업·참여 학생 — 수업 단위. 학생 '계정'(등록·비밀번호)은 학교 설정 탭(09-25 올립: 말을 갈라 헷갈리지 않게 — 수업 쪽은 '참여 학생')
  { id: 'A8', cat: 'class', art: 'cat_class', title: '수업 만들기', dur: '0:21', yt: null,
    mp4: 'video/a8.mp4?v=2', poster: 'video/a8_poster.jpg?v=2', screen: '홈 · 내 수업', isNew: false,
    summary: '홈의 수업 만들기에서 학기·학년, 교육과정과 과목, 수업명, 반 편성 방식을 정해요. 과목이 목록에 없으면 내 정보에서 담당 교과를 먼저 맞춰요.' },
  { id: 'A9', cat: 'class', art: 'people_plus', title: '참여 학생 더하고 빼기', dur: '0:25', yt: null,
    mp4: 'video/a9.mp4?v=2', poster: 'video/a9_poster.jpg?v=2', screen: '수업 홈 · 참여 학생 관리', isNew: false,
    summary: '수업 홈의 참여 학생 관리에서 반별 학생을 확인하고 더하거나 빼요. 전학생은 수업에 저절로 들어오지 않아 직접 더해요.' },
  { id: 'A6', cat: 'class', art: 'phone', title: '참여 학생에게 로그인 방법 안내하기', dur: '0:46', yt: null,
    mp4: 'video/a6.mp4?v=1', poster: 'video/a6_poster.jpg?v=1', screen: '학생 로그인 화면', isNew: false,
    summary: '학생은 clipo.ai에서 학생 로그인을 골라 학년도·학교를 고르고, 아이디(학번)와 초기 비밀번호(이름 영문 자판)로 들어와요. 비밀번호를 잊으면 선생님이 바꿔 줘요.' },
  { id: 'A7', cat: 'class', art: 'box', title: '수업 보관하고 다시 꺼내기', dur: '0:35', yt: null,
    mp4: 'video/a7.mp4?v=1', poster: 'video/a7_poster.jpg?v=1', screen: '홈 · 내 수업', isNew: false,
    summary: '다 쓴 수업은 카드 메뉴에서 보관해요. 보관한 수업 보기를 켜면 다시 보이고, 보관 해지로 진행 중 목록에 돌려놔요.' },

  // 수행평가 설계 — 순서 = 제품 `수행평가 만들기` 메뉴(새로 만들기 · 복사해서 만들기 · 평가계획에서 가져오기) → 채점기준 AI → 원칙 → 직접 쓰는 과제 (올립 09-25)
  // B1 = 새로 만들기 한 편에 성취기준 고르기(고르면 상·중·하 자동, 직접 고칠 수 있음) · 채점기준 직접 추가 · 미제출·미응시 처리까지(옛 B3·B7 합침)
  { id: 'B1', cat: 'design', art: 'target', title: '수행평가 새로 만들기', dur: '1:00', yt: null,
    mp4: 'video/b1.mp4?v=2', poster: 'video/b1_poster.jpg?v=2', screen: '수행평가 설계', isNew: false,
    summary: '이름과 성취기준을 넣고, 채점기준을 직접 적어 수행평가를 만들어요. 성취기준을 고르면 상·중·하 성취수준이 채워지고, 점수 산출 방법과 미제출·미응시 점수, 과제물 받는 방법까지 정한 뒤 저장해요.' },
  // B6 = 복사는 평가계획 쪽(평가계획 만들기 → 복사해서 만들기, 다른 선생님의 평가계획) → 수행평가 설계에서 평가계획에서 가져오기(09-25 올립)
  { id: 'B6', cat: 'design', art: 'book_tags', title: '다른 선생님 평가계획 복사해서 쓰기', dur: '0:30', yt: null,
    mp4: 'video/b6.mp4?v=2', poster: 'video/b6_poster.jpg?v=2', screen: '평가계획 · 수행평가 설계', isNew: false,
    summary: '평가계획의 복사해서 만들기에서 다른 선생님이 만든 평가계획을 찾아 복사해요. 복사한 계획은 수행평가 설계에서 평가계획에서 가져오기로 불러와요.' },
  { id: 'P1', cat: 'design', art: 'clipboard', title: '평가계획에서 가져와 만들기', dur: '0:35', yt: null,
    mp4: 'video/p1.mp4?v=2', poster: 'video/p1_poster.jpg?v=2', screen: '평가계획 · 수행평가 설계', isNew: false,
    summary: '왼쪽 메뉴 평가계획에서 계획을 만들어 두면 여러 수행평가에서 쓸 수 있어요. 수행평가 설계에서 평가계획에서 가져오기로 골라 적용해요.' },
  // B2 = 채점기준 AI 생성 창의 방법들(한두 문장 · 활동지 올리기 · 쓰던 채점기준표 사진)을 한 편에(옛 B4·B8 합침)
  { id: 'B2', cat: 'design', art: 'tags', guide: 'ch2.html', title: '채점기준 AI로 만들기: 문장·활동지·사진', dur: '0:49', yt: null,
    mp4: 'video/b2.mp4?v=2', poster: 'video/b2_poster.jpg?v=2', screen: '수행평가 설계', isNew: false,
    summary: '채점기준 AI 생성 창에서 한두 문장으로 적거나, 활동지 이미지를 올리거나, 채점요소와 급간 수만 정하거나, 쓰던 채점기준표 사진을 올려 초안을 받아요. 쓸 것만 골라 적용해요.' },
  // 원칙 영상(2~3분) — AI 채점 가이드 2장 기반, 시연 계정 실제 화면. 영상 소스 clipo_promo_video `Learn-Rubric` (09-23 첫 게시, 내용은 다듬는 중)
  { id: 'R1', cat: 'design', art: 'compass', guide: 'contest.html#tips', title: '채점기준 잘 쓰는 법', dur: '2:26', yt: null,
    mp4: 'video/rubric.mp4?v=7', poster: 'video/rubric_poster.jpg?v=6', screen: '수행평가 설계', isNew: false,
    summary: 'AI는 채점기준 문장에 적힌 것만, 적힌 대로 봐요. AI가 볼 곳을 알려 주고, 판단을 하나로 모으고, 만점의 높이를 맞추는 세 가지 원칙을 선생님들이 실제로 고친 문장 전·후와 결과로 봐요.' },
  // B5 = 직접 쓰는 과제 한 편에 다문항(09-22) + 작성 과정 기록(이탈 로깅, 09-02)을 함께(올립 09-23 "같은 내용")
  { id: 'B5', cat: 'design', art: 'writing_log', since: '2026-09-22', title: '학생이 클리포에 직접 쓰는 과제 만들기', dur: '0:50', yt: null,
    mp4: 'video/b5.mp4?v=2', poster: 'video/b5_poster.jpg?v=2', screen: '수행평가 설계 · 과제물 관리', isNew: false,
    summary: '문항을 여러 개 나눠 내고, 학생은 클리포에서 문항마다 답을 써요. 제출 뒤에는 과제물 관리에서 글자 수가 어떻게 늘었는지, 쓰는 동안 다른 화면을 본 기록을 볼 수 있어요. 태도를 판단하는 근거가 아니라 답안을 이해하는 참고 정보예요.' },

  // 과제물 관리
  // 순서 = 올리는 방법(스캔 PDF · 여러 파일 · 한 명) → 학생 제출 보기 → 학생 화면 → 원칙(09-25 올립). 과제물 인식(OCR) 확인은 채점 탭 D6
  { id: 'C3', cat: 'files', art: 'scanner', guide: 'ch4.html', title: '반 전체 스캔 PDF 한 장으로 올리기', dur: '0:32', yt: null,
    mp4: 'video/c3.mp4?v=2', poster: 'video/c3_poster.jpg?v=2', screen: '과제물 관리', isNew: false,
    summary: '반 전체를 스캔한 PDF 한 개를 올리면 학생별로 나눠져요. 학생 한 명이 몇 장인지, 몇 쪽부터 과제인지 적고, 나뉜 결과가 다르면 고쳐서 등록해요.' },
  { id: 'C2', cat: 'files', art: 'upload_many', since: '2026-08-06', title: '여러 학생 파일 한 번에 올리기', dur: '0:33', yt: null,
    mp4: 'video/c2.mp4?v=2', poster: 'video/c2_poster.jpg?v=2', screen: '과제물 관리', isNew: false,
    summary: '학생별로 나뉜 과제물 파일을 한 번에 올리면, 파일 이름의 학생 이름으로 자동으로 짝지어져요. 짝이 틀리면 매칭 수정으로 바꿔요.' },
  { id: 'C1', cat: 'files', art: 'upload_one', title: '학생 한 명 과제물 따로 올리거나 바꾸기', dur: '0:51', yt: null,
    mp4: 'video/c1.mp4?v=2', poster: 'video/c1_poster.jpg?v=2', screen: '과제물 관리', isNew: false,
    summary: '과제 제출 현황에서 미제출 학생은 업로드, 이미 낸 학생은 변경/삭제로 그 학생의 파일만 올리거나 바꿔요. 가장 최근 파일로 AI 채점이 되고, 몇 명만 바꿀 때 일괄 업로드를 다시 쓰면 기존 과제와 채점 결과가 모두 지워져요.' },
  { id: 'C4', cat: 'files', art: 'send', title: '학생 작성 과정 기록 보기', dur: '0:35', yt: null,
    mp4: 'video/c4.mp4?v=1', poster: 'video/c4_poster.jpg?v=1', screen: '과제물 관리', isNew: false,
    summary: '학생이 클리포에서 직접 쓴 과제는 과제 제출 현황에서 글자 수와 작성 기록을 볼 수 있어요. 글자 수가 늘어난 흐름, 다른 화면을 본 횟수와 시간이 그래프로 나와요. 평가의 참고자료이고 부정행위를 판단하지 않아요.' },
  { id: 'C6', cat: 'files', art: 'phone_up', title: '학생 제출 화면 살펴보기', dur: '0:36', yt: null,
    mp4: 'video/c6.mp4?v=1', poster: 'video/c6_poster.jpg?v=1', screen: '학생 화면', isNew: false,
    summary: '학생은 과제 목록에서 제출하기를 눌러 과제 안내와 문항을 읽고 답을 써요. 다 쓰면 과제 제출을 누르고, 마감 전까지는 수정해서 다시 낼 수 있어요.' },
  { id: 'R2', cat: 'files', art: 'compass', guide: 'ch3.html', title: 'AI가 잘 읽는 과제물 준비하기', dur: '1:38', yt: null,
    mp4: 'video/prepare.mp4?v=1', poster: 'video/prepare_poster.jpg?v=1', screen: '과제물 관리', isNew: false,
    summary: '종이 과제물은 AI가 글씨를 읽은 뒤 채점해요. 활동지는 한 단으로, 채점 표시는 스캔한 뒤에, 답은 답란 안에. 잘못 읽히기 쉬운 표기와 글씨, 받는 방법별 차이, 파일 조건까지 AI 채점 가이드 3장 순서로 봐요.' },

  // 수행평가 채점
  // 순서 = 채점 전 확인 → 점수 매기기(근거·고치기·재실행·확정) → 피드백·공개 (09-25 올립: D2+재실행+확정 합침, D4 없앰, D11 마감은 20초라 뺌 — 마감은 S6·E0 앞부분에 있음). D6 OCR·D7 동료 확인은 배포 뒤
  { id: 'D1', cat: 'grading', art: 'magnifier', guide: 'ch4.html', title: 'AI로 채점할 수 있는 답안', dur: '1:05', yt: null,
    mp4: 'video/d1.mp4?v=1', poster: 'video/d1_poster.jpg?v=1', screen: '수행평가 채점', isNew: false,
    summary: '줄글·수식·표·그림 답안은 채점돼요. 직접 그린 그래프나 개수 세기는 결과를 한 번 확인하고, 지도 위 표기는 아직 어려워요.' },
  { id: 'D2', cat: 'grading', art: 'bubble_score', guide: 'ch5.html', title: 'AI 채점하고 점수 확정하기', dur: '1:26', yt: null,
    mp4: 'video/d2.mp4?v=1', poster: 'video/d2_poster.jpg?v=1', screen: '수행평가 채점', isNew: false,
    summary: '학급 단위로 AI 채점을 돌리고 채점 근거를 읽으며 점수를 고쳐요. 결과가 많이 다르면 재실행하고, 마지막에 점수를 일괄 확정해요.' },
  { id: 'D3', cat: 'grading', art: 'bubble_pen', title: '피드백 다듬고 학생에게 공개하기', dur: '1:19', yt: null,
    mp4: 'video/d3.mp4?v=1', poster: 'video/d3_poster.jpg?v=1', screen: '수행평가 채점', isNew: false,
    summary: 'AI 피드백 초안을 선생님 피드백 칸으로 옮겨 다듬고, 결과 공개에서 학생이 클리포로 볼지 PDF로 받을지 정해요.' },

  // 생기부 — 순서 = 수업 세특 → 다듬기 → 간편 생성기 → 창체 → 행특 (09-25 올립). 초등 교과학습발달상황(E6)은 뺌, NEIS 글자 수(E5)는 E0·E1 안에서
  { id: 'E0', cat: 'record', art: 'notebook', title: '채점 결과로 세특 초안 만들기', dur: '1:15', yt: null,
    mp4: 'video/e0.mp4?v=1', poster: 'video/e0_poster.jpg?v=1', screen: '수행평가 채점 · 세부능력 및 특기사항 지원', isNew: false,
    summary: '세특은 마감한 수행평가로만 만들어요. 채점 목록에서 마감한 뒤 생성 옵션을 정하고, 학생마다 다른 초안을 받아 기록 근거를 보며 고쳐요.' },
  { id: 'E1', cat: 'record', art: 'compass', since: '2026-07-22', title: '세특 초안 다듬기', dur: '0:38', yt: null,
    mp4: 'video/e1.mp4?v=1', poster: 'video/e1_poster.jpg?v=1', screen: '세부능력 및 특기사항 지원 · 세특 간편 생성기', isNew: false,
    summary: 'AI 기록 다듬기에서 학생을 여러 명 고르고 "분량을 줄여 줘"처럼 방향을 적으면 다시 써 줘요. 화살표로 다듬기 전 기록과 비교해요.' },
  { id: 'E2', cat: 'record', art: 'book_tags', title: '채점 없이 세특 만들기 (간편 생성기)', dur: '0:56', yt: null,
    mp4: 'video/e2.mp4?v=1', poster: 'video/e2_poster.jpg?v=1', screen: '세특 간편 생성기', isNew: false,
    summary: '채점한 과제물이 없어도 과목·성취기준과 학생별 키워드·활동, 자기평가서 같은 자료로 세특 초안을 만들어요. 엑셀로 내려받아 나이스에 올려요.' },
  { id: 'E3', cat: 'record', art: 'clipboard', title: '활동지·설문 올려 창체 초안 만들기', dur: '1:10', yt: null,
    mp4: 'video/e3.mp4?v=1', poster: 'video/e3_poster.jpg?v=1', screen: '창의적 체험활동', isNew: false,
    summary: '자율·진로·동아리 활동을 추가하고 학생 자료를 올리면, AI가 분석해 추천한 항목을 골라 초안을 만들어요. 완성한 기록은 엑셀로 내보내요.' },
  { id: 'E4', cat: 'record', art: 'quote', title: '키워드와 일화로 행특 초안 만들기', dur: '1:15', yt: null,
    mp4: 'video/e4.mp4?v=2', poster: 'video/e4_poster.jpg?v=2', screen: '행동특성 및 종합기록 지원', isNew: false,
    summary: '학생 그룹을 만들고 키워드 사전에서 고르거나 일화를 적으면 행특 초안이 나와요. 가져와서 선생님 말로 다듬어 저장하고, 엑셀로 내려받아요.' },

  // 학교 설정 — 제품 메뉴 [학교 설정](학생 · 선생님 · 학교 이용권 · 공유 크레딧). 목록은 다음 차례에 정의
  // 학교 설정 — 화면 탭 순서(학생 → 선생님 → 학교 이용권 → 공유 크레딧) + 소속 변경 (09-25 올립: A4 대표교사 바꾸기는 A5에 합침, 소속 변경 F4는 계정 탭에서 옮김 — 데이터 삭제 정책)
  { id: 'A1', cat: 'school', art: 'sheet', title: '학생 계정 만들기 (한 명씩·엑셀로)', dur: '0:32', yt: null,
    mp4: 'video/a1.mp4?v=1', poster: 'video/a1_poster.jpg?v=1', screen: '학교 설정 · 학생', isNew: false,
    summary: '대표교사가 학교 설정의 학생에서 한 명씩 또는 엑셀 양식으로 학생 계정을 만들어요. 아이디는 자동으로 만들어지고 초기 비밀번호는 영문 학생명이에요.' },
  { id: 'A2', cat: 'school', art: 'lock', title: '학생 비밀번호 바꾸고 정보 고치기', dur: '0:25', yt: null,
    mp4: 'video/a2.mp4?v=1', poster: 'video/a2_poster.jpg?v=1', screen: '학교 설정 · 학생', isNew: false,
    summary: '학생을 체크하고 비밀번호 변경에서 새 비밀번호를 넣어요. 반·번호·이름은 수정에서 고치고, 계정 삭제는 대표교사만 해요.' },
  { id: 'A5', cat: 'school', art: 'stamp', title: '선생님 인증 승인하고 권한 바꾸기', dur: '0:30', yt: null,
    mp4: 'video/a5.mp4?v=1', poster: 'video/a5_poster.jpg?v=1', screen: '학교 설정 · 선생님', isNew: false,
    summary: '대표교사가 인증 대기에서 새 선생님을 승인하거나 거절하고, 권한 변경에서 대표교사·일반교사를 바꿔요. 대표교사는 한 명 이상 필요해요.' },
  { id: 'A10', cat: 'school', art: 'coins', title: '학교 이용권·공유 크레딧 관리하기', dur: '0:31', yt: null,
    mp4: 'video/a10.mp4?v=1', poster: 'video/a10_poster.jpg?v=1', screen: '학교 설정 · 학교 이용권 관리', isNew: false,
    summary: '학교 이용권에 등록된 선생님과 이용 기간을 보고, 추가 충전 크레딧을 학교 선생님들과 나눠 써요. 나눠 준 크레딧은 되돌릴 수 없어요.' },
  { id: 'F4', cat: 'school', art: 'swap_school', title: '학교 옮길 때 소속 바꾸기', dur: '0:36', yt: null,
    mp4: 'video/f4.mp4?v=1', poster: 'video/f4_poster.jpg?v=1', screen: '내 정보', isNew: false,
    summary: '소속을 바꾸면 이전 학교 학생의 평가·기록 데이터가 지워져요. 필요한 자료를 먼저 받아 두고, 내 정보에서 소속을 바꾼 뒤 새 학교에 인증을 요청해요.' },

  // 계정·이용권
  { id: 'F1', cat: 'account', art: 'coins', title: 'AI 크레딧 차감 방식 알아보기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
  { id: 'F2', cat: 'account', art: 'ticket', title: '이용권 사고 쿠폰 등록하기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
  { id: 'F3', cat: 'account', art: 'building', title: '학교 단체로 도입하기', dur: null, yt: null, screen: '요금제 알아보기', isNew: false, summary: '' },
  { id: 'F5', cat: 'account', art: 'receipt', title: '견적서·영수증 받기', dur: null, yt: null, screen: '이용권 관리', isNew: false, summary: '' },
];
