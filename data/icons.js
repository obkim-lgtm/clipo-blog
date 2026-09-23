// 왼쪽 열 선 아이콘 (Tabler 계열 outline, 24 격자, 선 2). 색은 currentColor.
// 쓰는 곳: <span class="ico" data-ic="이름"></span> → app.js 가 채운다. 가이드 목록은 build_guide.py 가 같은 모양을 쓴다.
(function () {
  var S = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; };
  window.ICONS = {
    // 배우기 묶음
    start:   S('<path d="M5 4l14 8-14 8z"/>'),
    recent:  S('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 17v4M17 19h4"/>'),
    class:   S('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M21.5 20c-.4-2.4-1.8-4.2-3.8-5"/>'),
    design:  S('<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/><path d="M4 20h16"/>'),
    files:   S('<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/><path d="M12 17v-6M9.5 13.5L12 11l2.5 2.5"/>'),
    grading: S('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>'),
    record:  S('<path d="M6 3h11a2 2 0 012 2v14a2 2 0 01-2 2H6z"/><path d="M6 3a2 2 0 00-2 2v14a2 2 0 002 2"/><path d="M9 8h7M9 12h7M9 16h4"/>'),
    account: S('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18M7 15h4"/>'),
    // 연수
    calendar: S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    person:  S('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>'),
    online:  S('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M10.5 8.5l3.5 1.5-3.5 1.5z"/>'),
    past:    S('<rect x="3" y="4" width="18" height="4" rx="1.5"/><path d="M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"/><path d="M10 12h4"/>'),
    school:  S('<path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M10 21v-5h4v5"/><path d="M10 11h4"/>'),
    lead:    S('<path d="M3 11l14-6v14L3 13z"/><path d="M7 12.5V17a2 2 0 002 2h1"/><path d="M20 9v6"/>'),
    // 소식
    update:  S('<path d="M20 11a8 8 0 10-2.3 5.7"/><path d="M20 5v6h-6"/>'),
    story:   S('<path d="M5 4h11a2 2 0 012 2v13a1 1 0 01-1 1H6a2 2 0 01-2-2V5a1 1 0 011-1z"/><path d="M18 8h2v10a2 2 0 01-2 2"/><path d="M8 8h6M8 12h6M8 16h3"/>'),
    // 가이드
    home:    S('<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>'),
    book:    S('<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 23H20v-5"/><path d="M9 7h7"/>'),
    bulb:    S('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.9c.9.7 1.5 1.7 1.5 2.8V17h4v-.3c0-1.1.6-2.1 1.5-2.8A6 6 0 0012 3z"/>')
  };
})();
