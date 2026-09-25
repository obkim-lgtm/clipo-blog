// 배우기 카드 스티커 그림 라이브러리. 96×96, 선 5px, 흰 채움, currentColor = 묶음 색.
// 영상 데이터의 art 키로 고른다. 없으면 cat_<묶음> 기본 그림.
(function () {
  var W = function (inner) { return '<svg viewBox="0 0 96 96" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="#fff">' + inner + '</g></svg>'; };
  var SOLID = ' fill="currentColor" stroke="none"';
  window.ART = {
    // ---- 묶음 기본 ----
    cat_start:   W('<path d="M14 60L84 20 62 84 48 58z"/><path d="M48 58L84 20"/><circle cx="22" cy="22" r="6"' + SOLID + ' opacity=".35"/>'),
    cat_class:   W('<circle cx="36" cy="36" r="14"/><circle cx="66" cy="42" r="11"/><path d="M12 82c2-16 12-24 24-24s22 8 24 24"/><path d="M60 82c1-10 7-17 16-19 8 1 12 8 12 19"/>'),
    cat_design:  W('<rect x="14" y="54" width="68" height="22" rx="6"/><path d="M26 54v10M38 54v7M50 54v10M62 54v7M74 54v10" stroke-width="4"/><path d="M58 16l16 16-30 30-20 4 4-20z"/>'),
    cat_files:   W('<rect x="26" y="26" width="48" height="58" rx="8"/><rect x="18" y="16" width="48" height="58" rx="8"/><path d="M30 36h24M30 48h24M30 60h14" stroke-width="4" opacity=".6"/>'),
    cat_grading: W('<circle cx="48" cy="42" r="26"/><path d="M36 42l9 9 17-18" stroke-width="6"/><path d="M34 64l-6 22 20-10 20 10-6-22"/>'),
    cat_record:  W('<rect x="18" y="14" width="56" height="68" rx="8"/><path d="M18 30h56"/><path d="M32 46h28M32 58h28M32 70h16" stroke-width="4" opacity=".6"/><path d="M70 44l12 12-22 22-14 2 2-14z"/>'),
    cat_school:  W('<rect x="18" y="26" width="60" height="58" rx="4"/><path d="M12 26h72M40 14h16v12H40z"/><path d="M30 42h8M44 42h8M58 42h8M30 56h8M44 56h8M58 56h8M42 84V70h12v14"/>'),
    cat_account: W('<rect x="12" y="26" width="72" height="46" rx="10"/><path d="M12 40h72"/><rect x="22" y="50" width="20" height="10" rx="3"' + SOLID + ' opacity=".5"/><circle cx="70" cy="56" r="7"' + SOLID + ' opacity=".35"/>'),

    // ---- 시작하기 ----
    intro:       W('<rect x="12" y="18" width="72" height="50" rx="10"/><path d="M40 32l18 11-18 11z"' + SOLID + '/><path d="M36 82h24M48 68v14"/>'),
    signup:      W('<circle cx="36" cy="42" r="17"/><circle cx="36" cy="42" r="5"' + SOLID + ' opacity=".4"/><path d="M48 52l32 30"/><path d="M66 70l8-8M74 78l8-8"/>'),
    people_plus: W('<circle cx="38" cy="36" r="13"/><path d="M14 80c2-15 11-22 24-22s22 7 24 22"/><path d="M74 28v22M63 39h22"/>'),
    ruler_pen:   W('<rect x="14" y="54" width="68" height="22" rx="6"/><path d="M26 54v10M38 54v7M50 54v10M62 54v7M74 54v10" stroke-width="4"/><path d="M58 16l16 16-30 30-20 4 4-20z"/>'),
    paths:       W('<circle cx="18" cy="48" r="8"/><path d="M26 48h14"/><path d="M40 48c10 0 10-22 20-22h12M40 48h32M40 48c10 0 10 22 20 22h12"/><circle cx="80" cy="26" r="7"' + SOLID + ' opacity=".45"/><circle cx="80" cy="48" r="7"' + SOLID + ' opacity=".45"/><circle cx="80" cy="70" r="7"' + SOLID + ' opacity=".45"/>'),
    medal:       W('<circle cx="48" cy="42" r="26"/><path d="M36 42l9 9 17-18" stroke-width="6"/><path d="M34 64l-6 22 20-10 20 10-6-22"/>'),
    notebook:    W('<rect x="18" y="14" width="56" height="68" rx="8"/><path d="M18 30h56"/><path d="M32 46h28M32 58h28M32 70h16" stroke-width="4" opacity=".6"/><path d="M70 44l12 12-22 22-14 2 2-14z"/>'),

    // ---- 수업·학생 ----
    sheet:       W('<rect x="14" y="20" width="68" height="56" rx="8"/><path d="M14 38h68M14 56h68M38 20v56M60 20v56"/>'),
    lock:        W('<rect x="22" y="42" width="52" height="40" rx="8"/><path d="M34 42V32a14 14 0 0128 0v10"/><circle cx="48" cy="62" r="5"' + SOLID + '/>'),
    stairs:      W('<path d="M12 80h20V60h20V40h20V20h12"/><path d="M66 12l12 8-6 12" opacity=".5"/>'),
    crown:       W('<path d="M16 66L22 30l18 16 8-22 8 22 18-16 6 36z"/><path d="M16 66h64v12H16z"/>'),
    stamp:       W('<rect x="18" y="62" width="60" height="16" rx="4"/><path d="M40 62V46a8 8 0 0116 0v16"/><circle cx="48" cy="28" r="10"/>'),
    phone:       W('<rect x="30" y="12" width="36" height="72" rx="8"/><path d="M44 72h8"/><path d="M10 46h28M28 36l10 10-10 10"/>'),
    box:         W('<rect x="14" y="26" width="68" height="16" rx="4"/><path d="M20 42v34a6 6 0 006 6h44a6 6 0 006-6V42"/><path d="M40 56h16"/>'),

    // ---- 수행평가 설계 ----
    target:      W('<circle cx="48" cy="48" r="30"/><circle cx="48" cy="48" r="18"/><circle cx="48" cy="48" r="6"' + SOLID + '/>'),
    tags:        W('<path d="M14 22h26l38 38-26 26-38-38z"/><circle cx="26" cy="34" r="5"' + SOLID + '/>'),
    checklist:   W('<rect x="16" y="14" width="64" height="68" rx="8"/><path d="M28 34l6 6 10-10M28 56l6 6 10-10M54 34h14M54 58h14"/>'),
    camera:      W('<rect x="12" y="30" width="72" height="50" rx="10"/><path d="M34 30l6-10h16l6 10"/><circle cx="48" cy="55" r="13"/>'),
    keyboard:    W('<rect x="10" y="30" width="76" height="40" rx="8"/><path d="M22 42h4M34 42h4M46 42h4M58 42h4M70 42h4M28 58h40"/>'),
    writing_log: W('<rect x="12" y="12" width="54" height="66" rx="8"/><path d="M24 28h30M24 40h22M24 52h14" stroke-width="4" opacity=".6"/><circle cx="66" cy="64" r="19"/><path d="M66 53v11l7 5"/>'),

    // ---- 과제물 관리 ----
    upload_one:  W('<rect x="22" y="14" width="52" height="68" rx="8"/><path d="M48 66V38M36 50l12-12 12 12"/>'),
    upload_many: W('<rect x="30" y="26" width="48" height="56" rx="8"/><rect x="18" y="14" width="48" height="56" rx="8"/><path d="M42 58V34M32 44l10-10 10 10"/>'),
    scanner:     W('<rect x="14" y="44" width="68" height="30" rx="8"/><path d="M26 44V20h44v24"/><path d="M22 58h52" stroke-dasharray="6 6"/>'),
    send:        W('<path d="M14 60L84 20 62 84 48 58z"/><path d="M48 58L84 20"/>'),

    // ---- 수행평가 채점 ----
    magnifier:   W('<circle cx="42" cy="42" r="22"/><path d="M58 58l22 22" stroke-width="7"/><path d="M34 42h16M42 34v16"/>'),
    bubble_score: W('<path d="M16 20h64v44H44L26 80V64H16z"/><text x="48" y="53" text-anchor="middle" font-size="24" font-weight="800" font-family="Pretendard GOV,sans-serif"' + SOLID + '>92</text>'),
    bubble_pen:  W('<path d="M16 20h64v44H44L26 80V64H16z"/><path d="M36 50l18-18 6 6-18 18-8 2z"' + SOLID + ' opacity=".5"/>'),
    refresh:     W('<path d="M74 40a28 28 0 10 6 20"/><path d="M78 16v24H54"/>'),
    export:      W('<path d="M20 60v14a6 6 0 006 6h44a6 6 0 006-6V60"/><path d="M48 14v44M32 42l16 16 16-16"/>'),

    // ---- 생기부 ----
    compass:     W('<circle cx="48" cy="48" r="30"/><path d="M62 34L54 54l-20 8 8-20z"' + SOLID + ' opacity=".5"/><circle cx="48" cy="48" r="4"' + SOLID + '/>'),
    book_tags:   W('<rect x="16" y="16" width="56" height="66" rx="8"/><path d="M16 30h56"/><rect x="28" y="44" width="20" height="10" rx="5"' + SOLID + ' opacity=".5"/><rect x="28" y="60" width="30" height="10" rx="5"' + SOLID + ' opacity=".3"/>'),
    clipboard:   W('<rect x="20" y="20" width="56" height="64" rx="8"/><rect x="36" y="12" width="24" height="14" rx="5"/><path d="M32 46h32M32 60h20"/>'),
    quote:       W('<path d="M22 60c0-14 6-24 18-30M56 60c0-14 6-24 18-30"/><circle cx="24" cy="62" r="8"' + SOLID + '/><circle cx="58" cy="62" r="8"' + SOLID + '/>'),
    byte_ruler:  W('<rect x="12" y="34" width="72" height="28" rx="6"/><path d="M24 34v10M36 34v6M48 34v10M60 34v6M72 34v10" stroke-width="4"/><path d="M20 74h56" stroke-dasharray="8 6"/>'),
    apple:       W('<path d="M48 36c-16-9-30 3-28 21s14 30 22 28c4-1 8-1 12 0 8 2 22-10 22-28S64 27 48 36z"/><path d="M48 36c0-8 4-14 10-16"/><path d="M40 20c6 0 10 4 10 10-6 0-10-4-10-10z"' + SOLID + ' opacity=".6"/>'),

    // ---- 계정·이용권 ----
    coins:       W('<ellipse cx="40" cy="30" rx="24" ry="10"/><path d="M16 30v14c0 6 11 10 24 10s24-4 24-10V30"/><path d="M16 44v14c0 6 11 10 24 10s24-4 24-10V44"/><circle cx="74" cy="68" r="12"' + SOLID + ' opacity=".35"/>'),
    ticket:      W('<path d="M14 30h68v14a8 8 0 000 16v14H14V60a8 8 0 000-16z"/><path d="M40 30v52" stroke-dasharray="6 6"/>'),
    building:    W('<rect x="18" y="26" width="60" height="58" rx="4"/><path d="M12 26h72M40 14h16v12H40z"/><path d="M30 42h8M44 42h8M58 42h8M30 56h8M44 56h8M58 56h8M42 84V70h12v14"/>'),
    swap_school: W('<rect x="10" y="42" width="30" height="34" rx="4"/><rect x="56" y="42" width="30" height="34" rx="4"/><path d="M10 42l15-12 15 12M56 42l15-12 15 12"/><path d="M38 20h20M50 12l8 8-8 8"/>'),
    receipt:     W('<path d="M22 14h52v70l-8-6-9 6-9-6-9 6-9-6-8 6z"/><path d="M34 34h28M34 48h28M34 62h16"/>')
  };
})();
