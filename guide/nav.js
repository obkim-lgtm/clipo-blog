// 상단 바·왼쪽 문서 목록·오른쪽 페이지 목차를 모든 페이지에 공통으로 그린다.
// 왼쪽 목록은 **지금 보는 문서의 소제목만** 펼친다. 모든 장의 소제목을 늘 펼치면 목록이 서른 줄이 된다.
// 소제목은 각 페이지의 h3[id]에서 직접 읽는다. 여기에 따로 적어 두면 본문을 고칠 때마다 어긋난다.
const PAGES=[
 {file:'index.html',num:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/></svg>',title:'시작하기'},
 {file:'ch1.html',num:1,title:'AI는 이렇게 채점해요'},
 {file:'ch2.html',num:2,title:'채점기준은 이렇게 써요'},
 {file:'ch3.html',num:3,title:'과제물은 이렇게 준비해요'},
 {file:'ch4.html',num:4,title:'이런 답안까지 채점돼요'},
 {file:'ch5.html',num:5,title:'결과가 다를 땐 이렇게 해요'},
 {file:'ch6.html',num:6,title:'자주 묻는 질문'},
];
// 순서대로 읽는 흐름 밖에 있는 참고 문서
const REFS=[
 {file:'examples.html',num:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 23H20v-5"/><path d="M9 7h7"/></svg>',title:'과목별 채점 예시'},   // 번호 대신 홈 카드와 같은 표시
 {file:'contest.html',num:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.9c.9.7 1.5 1.7 1.5 2.8V17h4v-.3c0-1.1.6-2.1 1.5-2.8A6 6 0 0012 3z"/></svg>',title:'에크연 × 클리포 연구 사례'},
];
// 연구 사례는 소제목 대신 사례 목록을 하위로 펼친다
const CASES=[
 {file:'contest_1.html',title:'1등 · 중학교 영어'},
 {file:'contest_2.html',title:'2등 · 중학교 역사'},
 {file:'contest_3.html',title:'2등 · 고등학교 미술'},
 {file:'contest_4.html',title:'3등 · 초등학교 사회'},
 {file:'contest_5.html',title:'3등 · 중학교 수학'},
];
(function(){
  const here=location.pathname.split('/').pop()||'index.html';
  // 연구 사례 개별 페이지(contest_1.html …)는 목록에 따로 두지 않고 표지(contest.html)가 켜진 것으로 본다
  const hereDoc=here.startsWith('contest_')?'contest.html':here;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
  // 현재 페이지의 소제목(h3) → 오른쪽 목차 + 왼쪽 트리 하위 항목
  const heads=[...document.querySelectorAll('.doc-body h3[id]')];
  // 문서 목록 접힘 상태 (기기별로 기억, 휴대폰은 기본 접힘)
  const SIDE_KEY='clipo-guide-side';
  const isPhone=()=>matchMedia('(max-width:640px)').matches;
  // 휴대폰에서는 목록이 본문을 덮으므로 저장값과 무관하게 늘 접고 시작한다
  let closed=true;
  if(!isPhone()){
    try{ closed = localStorage.getItem(SIDE_KEY)==='closed'; }catch(e){ closed=false; }
  }
  // 상단 바
  document.body.insertAdjacentHTML('afterbegin',`
  <header class="hdr blog-hdr"><div class="bh-in"><button class="menu-btn" id="menuBtn" aria-label="문서 목록 접기·펼치기" aria-expanded="${closed?'false':'true'}"><i></i></button><a class="bh-brand" href="../index.html"><img src="clipo_wordmark.svg" alt="CLIPO"><span>블로그</span></a><nav class="bh-nav"><a href="../index.html">홈</a><a href="../learn.html">배우기</a><a class="on" href="index.html">AI 채점 가이드</a><a href="../training.html">연수</a><a href="../news.html">소식</a></nav><div class="bh-r"><a class="bh-cta" href="https://clipo.ai" target="_blank" rel="noopener">CLIPO 바로가기</a></div></div></header>`);
  // 왼쪽 문서 목록
  const subList=heads.length?`<ul>${heads.map(h=>`<li><a href="#${h.id}" data-sub="${h.id}">${esc(h.textContent)}</a></li>`).join('')}</ul>`:'';
  const item=p=>{
    const on=hereDoc===p.file;
    const num=p.num!==undefined&&p.num!==''?`<span class="num${/^\d+$/.test(p.num)?'':' emoji'}">${p.num}</span>`:'<span class="num blank"></span>';
    let sub=on?subList:'';
    if(on&&p.file==='contest.html') sub=`<ul>${CASES.map(c=>c.file?`<li><a href="${c.file}"${here===c.file?' class="active"':''}>${esc(c.title)}</a></li>`:`<li><span class="soon">${esc(c.title)}</span></li>`).join('')}</ul>`;
    return `<li><a href="${p.file}"${on?' class="active"':''}>${num}${esc(p.title)}</a>${sub}</li>`;
  };
  // 시작하기(홈)는 가이드·사례 모음을 모두 안내하는 문서라 그룹 밖 맨 위에 둔다
  let tree=`<ul>${PAGES.map(item).join('')}</ul>`;
  tree+=`<div class="grp">예시와 사례</div><ul>${REFS.map(item).join('')}</ul>`;
  document.querySelector('.wrap').insertAdjacentHTML('afterbegin',`<aside class="side${closed?' closed':''}" id="side">${tree}</aside>`);
  if(closed) document.body.classList.add('side-closed');
  // 오른쪽 목차. 소제목이 없는 문서도 **빈 칸을 그대로 둔다** —
  // 그래야 시작하기·과목별 예시로 오갈 때 본문 시작점이 흔들리지 않는다.
  const items=heads.map(h=>`<li><a href="#${h.id}" data-sub="${h.id}">${esc(h.textContent)}</a></li>`).join('');
  const inner=heads.length?`<div class="ttl">이 페이지에서</div><ul>${items}</ul><button class="top" id="topBtn">맨 위로 ↑</button>`:'';
  document.querySelector('.wrap').insertAdjacentHTML('beforeend',`<nav class="toc" id="toc">${inner}</nav>`);
  if(heads.length) document.getElementById('topBtn').addEventListener('click',()=>window.scrollTo(0,0));
  // 스크롤 스파이
  const links=[...document.querySelectorAll('a[data-sub]')].filter(a=>a.dataset.sub);
  const paint=id=>links.forEach(a=>a.classList.toggle('active',a.dataset.sub===id));
  // 목차를 눌렀을 때는 누른 절을 그대로 표시한다. 페이지 끝이라 그 절이 화면 위까지 못 올라와도 마찬가지
  let pinned=null, pinnedY=0;
  function pin(id){ if(!heads.some(h=>h.id===id)) return; pinned=id; pinnedY=window.scrollY; paint(id); }
  links.forEach(a=>a.addEventListener('click',()=>setTimeout(()=>pin(a.dataset.sub),0)));
  window.addEventListener('hashchange',()=>setTimeout(()=>pin(location.hash.slice(1)),0));
  function spy(){
    if(!heads.length) return;
    if(pinned){
      if(Math.abs(window.scrollY-pinnedY)<40){ paint(pinned); return; }   // 사용자가 직접 움직이면 놓아준다
      pinned=null;
    }
    let c=null;
    for(const h of heads){ if(h.getBoundingClientRect().top<=140) c=h; }
    // 맨 아래에서는 남은 절들이 기준선까지 올라오지 못한다. 바닥에 닿으면 화면 위쪽 절반의 마지막 절로 본다
    const doc=document.documentElement;
    if(window.innerHeight+window.scrollY>=doc.scrollHeight-2){
      const shown=heads.filter(h=>h.getBoundingClientRect().top<window.innerHeight/2);
      c=shown.length?shown[shown.length-1]:heads[heads.length-1];
    }
    if(!c && window.scrollY<80) c=null;
    paint(c?c.id:null);
  }
  window.addEventListener('scroll',spy,{passive:true}); window.addEventListener('load',spy); spy();
  if(location.hash) setTimeout(()=>pin(location.hash.slice(1)),0);
  // 문서 목록 접기 (모든 화면 폭에서. 버튼으로 접은 것만 기억한다)
  const side=document.getElementById('side');
  const menuBtn=document.getElementById('menuBtn');
  function setClosed(v,remember){
    side.classList.toggle('closed',v);
    document.body.classList.toggle('side-closed',v);
    menuBtn.setAttribute('aria-expanded',v?'false':'true');
    if(remember){ try{ localStorage.setItem(SIDE_KEY,v?'closed':'open'); }catch(e){} }
  }
  requestAnimationFrame(()=>side.classList.add('ready'));   // 첫 그림에서 접힘 애니메이션이 보이지 않게
  menuBtn.addEventListener('click',()=>setClosed(!side.classList.contains('closed'),true));
  side.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ if(isPhone()) setClosed(true,false); }));
})();

// 연구 사례 세트 탭: 평가 설계 · 과제물 · 채점 예시. 학생을 고르면 과제물과 채점 예시가 같은 학생으로 함께 바뀐다
document.querySelectorAll('.cs').forEach(cs=>{
  const tab=t=>{
    cs.querySelectorAll('.cs-tabs button').forEach(b=>{const on=b.dataset.t===t;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});
    cs.querySelectorAll('.cs-p').forEach(p=>p.hidden=p.dataset.p!==t);
  };
  const stu=i=>{
    cs.querySelectorAll('.cs-stu button').forEach(b=>b.classList.toggle('on',b.dataset.s===i));
    cs.querySelectorAll('.cs-s').forEach(d=>d.hidden=d.dataset.s!==i);
  };
  cs.querySelectorAll('.cs-tabs button').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.t)));
  cs.querySelectorAll('.cs-stu button').forEach(b=>b.addEventListener('click',()=>stu(b.dataset.s)));
  cs.querySelectorAll('.cs-go').forEach(b=>b.addEventListener('click',()=>{tab(b.dataset.go);cs.scrollIntoView({block:'start'})}));
});
// 세트 탭 끝
