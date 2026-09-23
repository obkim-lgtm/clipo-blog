/* 클리포 블로그 뼈대 — 데이터(data/*.js)를 읽어 각 페이지를 그린다. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var TRI = '<svg class="tri" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M0 0l10 6-10 6z"/></svg>';
  var PLAY = '<svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M7 4l12 8-12 8z"/></svg>';

  var fmtShort = function (iso) { var d = new Date(iso); return (d.getMonth() + 1) + '.' + d.getDate(); };
  var fmtDate = function (iso) { var d = new Date(iso); return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0'); };
  var byId = function (id) { for (var i = 0; i < VIDEOS.length; i++) if (VIDEOS[i].id === id) return VIDEOS[i]; return null; };
  var qs = function (k) { return new URLSearchParams(location.search).get(k); };
  if (/[?&]draft/.test(location.search)) document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]'); if (!a) return; var h = a.getAttribute('href');
    if (/^(post|news|learn|video|training|index)\.html/.test(h) && h.indexOf('draft') < 0) a.setAttribute('href', h + (h.indexOf('?') > -1 ? '&' : '?') + 'draft=1');
  }, true);

  /* ---------- 공용 렌더 ---------- */
  function vcard(v) {
    var foot = v.since ? '<span class="badge upd">' + fmtShort(v.since) + ' 업데이트</span>' : (v.isNew ? '<span class="badge new">신규</span>' : '<span></span>');
    foot += v.dur ? '<span class="badge dur">' + TRI + ' ' + esc(v.dur) + '</span>' : '<span class="badge soon">준비 중</span>';
    return '<a class="vcard" href="video.html?v=' + v.id + '" data-cat="' + v.cat + '" data-title="' + esc(v.title) + '">'
      + '<div class="art">' + ((v.art && ART[v.art]) || ART['cat_' + v.cat]) + '</div>'
      + '<div class="cat">' + esc(CATS[v.cat].name) + '</div><div class="t">' + esc(v.title) + '</div>'
      + '<div class="foot">' + foot + '</div></a>';
  }
  function pcard(p) {
    return '<a class="pcard" href="' + (p.link || ('post.html?p=' + p.id)) + '" data-tag="' + esc(p.tag || '') + '">'
      + '<div class="thumb">' + (p.thumb ? '<img src="' + p.thumb + '" alt="" loading="lazy">' : '') + '</div><div class="in">'
      + '<div class="meta"><span class="kind ' + p.type + '" data-tag="' + esc(p.tag || '') + '">' + kindOf(p) + '</span>' + fmtDate(p.date) + '</div>'
      + '<div class="t">' + esc(p.title) + '</div><div class="d">' + esc(p.summary) + '</div></div></a>';
  }
  // 연수 카드 메타 한 줄: 아이콘 + 글. 아이콘은 그릴 때 바로 넣는다(탭을 바꿔 다시 그려도 빠지지 않게)
  function metaRow(ic, text) { return '<div><span class="ico">' + ((window.ICONS && ICONS[ic]) || '') + '</span><span>' + text + '</span></div>'; }
  function tcard(t) {
    var past = new Date(t.date) < new Date();
    var d = new Date(t.date);
    var days = ['일', '월', '화', '수', '목', '금', '토'];
    var when = (d.getMonth() + 1) + '월 ' + d.getDate() + '일(' + days[d.getDay()] + ') ' + (d.getHours() >= 12 ? '오후 ' + (d.getHours() - 12 || 12) : '오전 ' + d.getHours()) + ':' + String(d.getMinutes()).padStart(2, '0') + (t.dur ? ' · ' + t.dur : '');
    var acts = past
      ? (t.replay ? '<a class="btn-o sm" href="' + t.replay + '" target="_blank" rel="noopener">다시 보기 ↗</a>' : '<span class="badge soon">다시 보기 준비 중</span>')
      : '<a class="btn" href="' + t.form + '" target="_blank" rel="noopener">신청 ↗</a><span class="tc-hint">구글 설문 · 30초</span>';
    return '<div class="tcard' + (past ? ' closed' : '') + '"><div class="day"><b>' + d.getDate() + '</b><span>' + (d.getMonth() + 1) + '월 ' + days[d.getDay()] + '</span></div><div>'
      + '<span class="tc-badge' + (past ? ' closed' : '') + '">' + (past ? '지난 연수' : '모집 중') + '</span>'
      + '<div class="tc-title">' + esc(t.title) + '</div>'
      + '<div class="tc-meta">' + metaRow('calendar', when) + metaRow(/온라인|zoom|줌/i.test(t.place || '') ? 'online' : 'school', esc(t.place)) + metaRow('person', esc(t.speaker)) + '</div>'
      + (t.topic ? '<div class="tc-topic">' + esc(t.topic) + '</div>' : '')
      + '<div class="tc-actions">' + acts + '</div></div></div>';
  }
  function acard(t) {
    var vid = /영상/.test(t.badge || '');
    return '<div class="acard" data-subj="' + esc(t.tag || '') + '"><div class="thumb">' + (t.thumb ? '<img src="' + t.thumb + '" alt="" loading="lazy">' : '')
      + (t.badge ? '<span class="badge ' + (vid ? 'dur' : 'soon') + '">' + esc(t.badge) + '</span>' : '') + '</div><div class="in">'
      + (t.tag ? '<span class="tag" data-subj="' + esc(t.tag) + '">' + esc(t.tag) + '</span>' : '') + '<div class="t">' + esc(t.title) + '</div>'
      + '<div class="m">' + fmtDate(t.date) + ' · ' + esc(t.speaker) + '</div><div class="d">' + esc(t.topic) + '</div>'
      + (t.materials ? '<div class="a"><a class="btn-o sm" href="' + t.materials + '" target="_blank" rel="noopener">연수 자료 보기 ↗</a></div>' : '') + '</div></div>';
  }
  function kindOf(p) { return p.type === 'update' ? '업데이트' : (p.tag || '이야기'); }
  function metaTags(p) {
    var t = '';
    if (p.version) t += '<span class="ver">' + esc(p.version) + '</span>';
    if (new Date(p.date) > new Date()) t += '<span class="soonlbl">예정</span>';
    else if (p.draft) t += '<span class="soonlbl">초안</span>';
    return t;
  }
  function releaseItem(p) {
    // 영상 연결(videos)은 데이터에 남기되, 게시된 영상(dur 있음)만 화면에 보인다
    var tags = (p.videos || []).map(function (id) { var v = byId(id); return v && v.dur ? '<a class="chip" href="video.html?v=' + v.id + '">' + TRI + ' ' + esc(v.title) + '</a>' : ''; }).join('');
    return '<li class="rel"><div class="date-row"><span class="date">' + fmtDate(p.date) + '</span>' + metaTags(p) + '</div>'
      + '<h3><a href="post.html?p=' + p.id + '">' + esc(p.title) + '</a></h3>'
      + '<p class="sum">' + esc(p.summary) + '</p>' + (tags ? '<div class="tags">' + tags + '</div>' : '') + '</li>';
  }
  var SHOW_DRAFTS = /[?&]draft/.test(location.search); // 초안(draft)은 숨김. 주소에 ?draft=1 을 붙이면 미리보기
  var published = function (list) { return list.filter(function (p) { return SHOW_DRAFTS || !p.draft; }); };

  /* ---------- 페이지별 ---------- */
  var page = document.body.getAttribute('data-page');

  if (page === 'home') {
    var open = TRAININGS.filter(function (t) { return t.form && new Date(t.date) >= new Date(); }).sort(function (a, b) { return a.date > b.date ? 1 : -1; });
    $('#home-training').innerHTML = open.length ? '<div class="tlist">' + open.slice(0, 1).map(tcard).join('') + '</div>' : '<div class="empty">지금 모집 중인 연수가 없어요. 다음 연수는 소식에서 먼저 알려 드릴게요.</div>';
    if (open.length > 1) $('#home-training').previousElementSibling.querySelector('a').textContent = '모집 중 ' + open.length + '개 모두 보기 ›';
    // 게시된 영상 먼저, 3장이 안 차면 시작하기 예정 영상으로 채운다
    // 히어로 버튼이 이미 트는 소개 영상(S0)은 여기서 뺀다 — 같은 화면에 같은 영상이 두 번 보이지 않게
    var vids = VIDEOS.filter(function (v) { return v.dur && v.id !== 'S0'; }).concat(VIDEOS.filter(function (v) { return !v.dur && v.cat === 'start'; }));
    $('#home-videos').innerHTML = '<div class="grid">' + vids.slice(0, 3).map(vcard).join('') + '</div>';
    var ups = published(POSTS).filter(function (p) { return p.type === 'update'; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    // 소식 열은 소식 탭의 두 갈래(업데이트 / 이야기)를 그대로: 업데이트 2건 + 최신 이야기 1건(작은 썸네일 줄)
    var stories = published(POSTS).filter(function (p) { return p.type === 'story'; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 2);
    var storyRow = stories.length ? '<div class="nb-cap">이야기</div>' + stories.map(function (story) {
      return '<a class="srow" href="' + (story.link || ('post.html?p=' + story.id)) + '">'
        + '<span class="srow-th">' + (story.thumb ? '<img src="' + story.thumb + '" alt="" loading="lazy">' : '') + '</span>'
        + '<span class="srow-in"><span class="meta"><span class="kind story" data-tag="' + esc(story.tag || '') + '">' + kindOf(story) + '</span>' + fmtDate(story.date) + '</span>'
        + '<span class="srow-t">' + esc(story.title) + '</span></span></a>'; }).join('') : '';
    $('#home-updates').innerHTML = '<div class="newsbox">'
      + (ups.length ? '<div class="nb-cap">업데이트</div><ul class="timeline">' + ups.slice(0, 2).map(releaseItem).join('') + '</ul>' : '<div class="empty">업데이트 소식이 아직 없어요.</div>')
      + storyRow + '</div>';
  }

  if (page === 'learn') {
    var side = $('#side-cats'), main = $('#learn-main');
    var keys = Object.keys(CATS);
    side.innerHTML = keys.map(function (k) {
      var n = VIDEOS.filter(function (v) { return v.cat === k; }).length;
      return '<a href="#' + k + '" data-cat="' + k + '"><span class="ico" data-ic="' + k + '" style="color:var(--i-' + k + ')"></span>' + esc(CATS[k].name) + '<span class="n">' + n + '</span></a>';
    }).join('');

    // 추천 재생목록 = 시작하기
    var start = VIDEOS.filter(function (v) { return v.cat === 'start'; });
    var first = start[0];
    var html = '<section class="featured" id="start"><div class="player" id="player">' + playerInner(first) + '</div>'
      + '<div class="playlist"><h2>' + esc(CATS.start.name) + '<small>동영상 ' + start.length + '개</small></h2><ul>'
      + start.map(function (v, i) { return '<li><a href="video.html?v=' + v.id + '" data-pl="' + v.id + '"' + (i === 0 ? ' class="on"' : '') + '>' + TRI + '<span>' + esc(v.title) + '</span><span class="dur">' + (v.dur ? esc(v.dur) : '준비 중') + '</span></a></li>'; }).join('')
      + '</ul></div></section>';

    // 최근 업데이트된 기능 (since가 90일 이내) — 갈래가 아니라 구분 섹션
    var cut = Date.now() - 90 * 864e5;
    var recent = VIDEOS.filter(function (v) { return v.since && new Date(v.since).getTime() >= cut; }).sort(function (a, b) { return a.since < b.since ? 1 : -1; });
    if (recent.length) {
      var startLink = side.querySelector('a[data-cat="start"]');
      startLink.insertAdjacentHTML('afterend', '<a href="#recent" data-cat="recent"><span class="ico" data-ic="recent" style="color:var(--blue)"></span>새 기능<span class="n">' + recent.length + '</span></a>');
    }
    if (recent.length) html += '<section class="sec recent" id="recent"><div class="sec-h"><h2>새 기능<small>' + recent.length + '개</small></h2><a href="news.html#update">업데이트 소식 보기 ›</a></div>'
      + '<div class="grid">' + recent.map(vcard).join('') + '</div></section>';

    keys.slice(1).forEach(function (k) {
      var list = VIDEOS.filter(function (v) { return v.cat === k; });
      html += '<section class="sec" id="' + k + '"><div class="sec-h"><h2>' + esc(CATS[k].name) + '<small>동영상 ' + list.length + '개</small></h2></div>'
        + '<div class="grid">' + list.map(vcard).join('') + '</div></section>';
    });
    main.innerHTML = html;

    // 재생목록 높이 = 플레이어 높이 (넘치면 목록 안에서 스크롤)
    var fit = function () { var pl = $('#player'), box = $('.playlist'); if (pl && box) box.style.height = pl.offsetHeight + 'px'; };
    fit(); window.addEventListener('resize', fit);
    if (window.matchMedia('(max-width:900px)').matches) $('.playlist').style.height = '';
    window.matchMedia('(max-width:900px)').addEventListener('change', function (e) { if (e.matches) $('.playlist').style.height = ''; else fit(); });

    // 검색: 제목 부분 일치
    var q = $('#q');
    q.addEventListener('input', function () {
      var s = q.value.trim().toLowerCase();
      document.querySelectorAll('.vcard').forEach(function (c) { c.classList.toggle('hidden', s && c.getAttribute('data-title').toLowerCase().indexOf(s) < 0); });
      document.querySelectorAll('#learn-main .sec').forEach(function (sec) {
        var vis = sec.querySelectorAll('.vcard:not(.hidden)').length;
        sec.style.display = vis ? '' : 'none';
      });
      $('#start').style.display = s ? 'none' : '';
    });
    // 사이드 활성 표시
    var mark = function () { var h = location.hash.replace('#', '') || 'start'; side.querySelectorAll('a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-cat') === h); }); };
    window.addEventListener('hashchange', mark); mark();
  }

  if (page === 'training') {
    var now = new Date();
    var openT = TRAININGS.filter(function (t) { return t.form && new Date(t.date) >= now; }).sort(function (a, b) { return a.date > b.date ? 1 : -1; });
    var pastT = TRAININGS.filter(function (t) { return !t.form || new Date(t.date) < now; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    $('#t-open').innerHTML = openT.length ? '<div class="tlist">' + openT.map(tcard).join('') + '</div>' : '<div class="empty">지금 모집 중인 연수가 없어요. 다음 연수는 소식에서 먼저 알려 드릴게요.</div>';
    $('#t-past').innerHTML = pastT.length ? '<div class="grid">' + pastT.map(acard).join('') + '</div>' : '<div class="empty">지난 연수 자료가 아직 없어요.</div>';
    $('#n-open').textContent = openT.length; $('#n-past').textContent = pastT.length;
    // 과목 필터 (지난 연수)
    var subjects = [];
    pastT.forEach(function (t) { if (t.tag && subjects.indexOf(t.tag) < 0) subjects.push(t.tag); });
    var fl = $('#t-filter');
    if (fl && subjects.length) {
      fl.innerHTML = '<a class="chip on" href="#past" data-f="">전체<span class="n">' + pastT.length + '</span></a>' + subjects.map(function (sj) {
        var n = pastT.filter(function (t) { return t.tag === sj; }).length;
        return '<a class="chip" href="#past" data-f="' + esc(sj) + '" data-subj="' + esc(sj) + '">' + esc(sj) + '<span class="n">' + n + '</span></a>';
      }).join('');
      fl.addEventListener('click', function (e) {
        var c = e.target.closest('.chip'); if (!c) return;
        e.preventDefault();
        var f = c.getAttribute('data-f');
        fl.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === c); });
        document.querySelectorAll('#t-past .acard').forEach(function (card) { card.classList.toggle('hidden', !!f && card.getAttribute('data-subj') !== f); });
      });
    }
    var R = window.REVIEWS;
    if (R) $('#t-reviews').innerHTML = '<div class="stats"><div class="hd"><b>' + esc(R.headline) + '</b><span>' + esc(R.note) + '</span></div><div class="st">'
      + R.stats.map(function (x) { return '<div><b>' + x[0] + '</b><span>' + esc(x[1]) + '</span></div>'; }).join('') + '</div></div>'
      + '<ul class="quotes">' + R.quotes.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>';
    // 특징 카드·혜택 배너에 스티커 그림
    document.querySelectorAll('[data-art]').forEach(function (el) {
      var t = el.getAttribute('data-tint') || 'grading', art = ART[el.getAttribute('data-art')] || '';
      if (el.classList.contains('fi')) { el.style.setProperty('--t', 'var(--t-' + t + ')'); el.style.setProperty('--i', 'var(--i-' + t + ')'); el.innerHTML = art; return; }
      el.insertAdjacentHTML('afterbegin', '<div class="fi" style="--t:var(--t-' + t + ');--i:var(--i-' + t + ')">' + art + '</div>');
    });
    subtabs(['open', 'past', 'school', 'instructor']);
  }

  if (page === 'news') {
    var ups2 = published(POSTS).filter(function (p) { return p.type === 'update'; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var st = published(POSTS).filter(function (p) { return p.type === 'story'; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    $('#n-update').innerHTML = ups2.length ? '<ul class="timeline">' + ups2.map(releaseItem).join('') + '</ul>' : '<div class="empty">업데이트 소식이 아직 없어요.</div>';
    $('#n-story').innerHTML = st.length ? '<div class="grid">' + st.map(pcard).join('') + '</div>' : '<div class="empty">이야기가 아직 없어요.</div>';
    $('#c-update').textContent = ups2.length; $('#c-story').textContent = st.length;
    // 이야기 태그 필터
    var tags = []; st.forEach(function (p) { if (p.tag && tags.indexOf(p.tag) < 0) tags.push(p.tag); });
    var nf = $('#n-filter');
    if (nf && tags.length > 1) {
      nf.innerHTML = '<a class="chip on" href="#story" data-f="">전체<span class="n">' + st.length + '</span></a>' + tags.map(function (t) {
        return '<a class="chip" href="#story" data-f="' + esc(t) + '" data-tag="' + esc(t) + '">#' + esc(t) + '<span class="n">' + st.filter(function (p) { return p.tag === t; }).length + '</span></a>';
      }).join('');
      nf.addEventListener('click', function (e) {
        var c = e.target.closest('.chip'); if (!c) return; e.preventDefault();
        var f = c.getAttribute('data-f');
        nf.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === c); });
        document.querySelectorAll('#n-story .pcard').forEach(function (card) { card.style.display = (!f || card.getAttribute('data-tag') === f) ? '' : 'none'; });
      });
    }
    subtabs(['update', 'story']);
  }

  if (page === 'video') {
    var v = byId(qs('v')) || VIDEOS[0];
    document.title = v.title + ' · 클리포 블로그';
    $('#crumb').innerHTML = '<a href="learn.html">배우기</a> › <a href="learn.html#' + v.cat + '">' + esc(CATS[v.cat].name) + '</a>';
    $('#player').innerHTML = playerInner(v);
    $('#v-title').textContent = v.title;
    $('#v-meta').innerHTML = '<span class="kind">' + esc(CATS[v.cat].name) + '</span><span>' + (v.dur ? esc(v.dur) : '준비 중') + '</span><span>관련 화면: ' + esc(v.screen) + '</span>';
    $('#v-body').innerHTML = v.summary ? '<p>' + esc(v.summary) + '</p>' : '<p>영상 요약은 대본이 확정되면 들어가요.</p>';
    var rel = VIDEOS.filter(function (x) { return x.cat === v.cat && x.id !== v.id; }).slice(0, 4);
    $('#v-related').innerHTML = rel.map(function (x) { return '<li><a href="video.html?v=' + x.id + '">' + TRI + '<span>' + esc(x.title) + '</span><span class="dur">' + (x.dur ? esc(x.dur) : '준비 중') + '</span></a></li>'; }).join('') || '<li><span class="empty">같은 묶음의 다른 영상이 없어요.</span></li>';
    var posts = published(POSTS).filter(function (p) { return (p.videos || []).indexOf(v.id) > -1; });
    $('#v-posts').innerHTML = posts.length ? posts.map(function (p) { return '<li><a href="post.html?p=' + p.id + '"><span class="kind ' + p.type + '">' + kindOf(p) + '</span><span>' + esc(p.title) + '</span></a></li>'; }).join('') : '<li><span style="color:var(--mute);font-size:14px">관련 글이 없어요.</span></li>';
    var gch = v.guide || (window.GUIDE_BY_CAT || {})[v.cat];
    if (gch && window.GUIDE_CH && GUIDE_CH[gch]) {
      var g = $('#v-guide'); g.style.display = '';
      g.innerHTML = '<span class="ic">ⓘ</span><span>원리와 요령은 AI 채점 가이드 <a href="guide/' + gch + '">' + esc(GUIDE_CH[gch]) + ' ›</a>에서 더 자세히 볼 수 있어요.</span>';
    }
  }

  if (page === 'post') {
    var p = null; for (var i = 0; i < POSTS.length; i++) if (POSTS[i].id === qs('p')) p = POSTS[i];
    p = p || POSTS[0];
    document.title = p.title + ' · 클리포 블로그';
    var kindName = p.type === 'update' ? '업데이트' : '이야기';
    $('#crumb').innerHTML = '<a href="news.html">소식</a> › <a href="news.html#' + p.type + '">' + kindName + '</a>';
    $('#p-title').textContent = p.title;
    $('#p-meta').innerHTML = '<span class="kind ' + p.type + '" data-tag="' + esc(p.tag || '') + '">' + kindOf(p) + '</span><span>' + fmtDate(p.date) + '</span>' + metaTags(p)
      + (p.notice ? '<a class="chip" href="' + p.notice + '" target="_blank" rel="noopener">서비스 공지 보기 ↗</a>' : '');
    $('#p-lead').textContent = p.summary || '';
    $('#p-body').innerHTML = (p.body || []).join('');
    var pics = p.photos || (p.hero ? [p.hero] : []); // 실제 사진만. 수치 카드 썸네일은 제목과 겹쳐서 상세엔 안 보인다
    if (pics.length) {
      var h = $('#p-hero'); h.style.display = '';
      h.innerHTML = pics.map(function (src, i) { return '<img src="' + src + '" alt="" class="' + (i ? '' : 'on') + '"' + (i ? ' loading="lazy"' : '') + '>'; }).join('')
        + (pics.length > 1 ? '<div class="dots">' + pics.map(function (_, i) { return '<button type="button" aria-label="' + (i + 1) + '번째 사진" class="' + (i ? '' : 'on') + '"></button>'; }).join('') + '</div>' : '');
      if (pics.length > 1) {
        var cur = 0, imgs = h.querySelectorAll('img'), dots = h.querySelectorAll('.dots button'), timer = null;
        var show = function (n) { cur = (n + imgs.length) % imgs.length; imgs.forEach(function (el, i) { el.classList.toggle('on', i === cur); }); dots.forEach(function (el, i) { el.classList.toggle('on', i === cur); }); };
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var play = function () { if (!reduce) { clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 4000); } };
        dots.forEach(function (d, i) { d.addEventListener('click', function () { show(i); play(); }); });
        play();
      }
    }
    // 이어서 보기: 게시된 관련 영상(dur 있음) 먼저, 남는 자리는 같은 갈래의 다른 글(같은 태그 우선, 최신순)로 3장
    var pv = (p.videos || []).map(byId).filter(function (x) { return x && x.dur; });
    var others = published(POSTS).filter(function (x) { return x.type === p.type && x.id !== p.id; })
      .sort(function (a, b) {
        var ta = (p.tag && a.tag === p.tag) ? 1 : 0, tb = (p.tag && b.tag === p.tag) ? 1 : 0;
        return tb - ta || (a.date < b.date ? 1 : -1);
      });
    var items = pv.slice(0, 3).map(vcard).concat(others.slice(0, Math.max(0, 3 - pv.length)).map(pcard));
    if (items.length) {
      $('#p-more-list').innerHTML = items.join('');
      $('#p-more-all').href = 'news.html#' + p.type;
      $('#p-more').style.display = '';
    }
  }

  // 왼쪽 열 아이콘 채우기
  function fillIcons() { if (!window.ICONS) return; document.querySelectorAll('.ico[data-ic]').forEach(function (el) { if (!el.firstChild && ICONS[el.getAttribute('data-ic')]) el.innerHTML = ICONS[el.getAttribute('data-ic')]; }); }
  fillIcons();

  function playerInner(v) {
    if (v && v.mp4) return '<video controls preload="metadata" playsinline' + (v.poster ? ' poster="' + v.poster + '"' : '') + ' style="position:absolute;inset:0;width:100%;height:100%;background:#000"><source src="' + v.mp4 + '" type="video/mp4"></video>';
    if (v && v.yt) return '<iframe src="https://www.youtube.com/embed/' + v.yt + '" title="' + esc(v.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    return '<div class="ico">' + PLAY + '</div><div>' + (v ? esc(v.title) : '') + '</div><div style="font-size:13px;opacity:.7">영상 준비 중</div>';
  }
  function subtabs(keys) {
    var show = function () {
      var h = location.hash.replace('#', '');
      if (keys.indexOf(h) < 0) h = keys[0];
      keys.forEach(function (k) {
        $('#pane-' + k).style.display = k === h ? '' : 'none';
        $('[data-sub="' + k + '"]').classList.toggle('on', k === h);
      });
    };
    window.addEventListener('hashchange', show); show();
  }
})();
