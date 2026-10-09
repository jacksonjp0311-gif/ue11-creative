(function () {
  "use strict";
  var SHOP = window.UE11_SHOP || "https://unifiedenergy11.gumroad.com";
  var ALL = window.UE11_PRODUCTS || [];
  var LINES = window.UE11_LINES || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function isLive(p) { return p.status === "live" && /^https:\/\/unifiedenergy11\.gumroad\.com\/l\//.test(p.url || ""); }

  var LIVE = ALL.filter(isLive), SOON = ALL.filter(function (p) { return !isLive(p); });
  var WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
  function word(n) { return WORDS[n] || String(n); }

  /* ── counts, all derived from products.js ── */
  var counts = {
    "live-words": word(LIVE.length), "live-words-lc": word(LIVE.length),
    "soon-words": word(SOON.length),
    "min-price": LIVE.length ? Math.min.apply(null, LIVE.map(function (p) { return p.price; })) : ""
  };
  document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = counts[el.dataset.count]; });
  document.querySelectorAll("[data-line-count]").forEach(function (el) {
    el.textContent = ALL.filter(function (p) { return p.line === el.dataset.lineCount; }).length;
  });
  function nLive(line) { return LIVE.filter(function (p) { return line === "all" || p.line === line; }).length; }
  function nSoon(line) { return SOON.filter(function (p) { return line === "all" || p.line === line; }).length; }
  function chipCount(line) { var s = nSoon(line); return nLive(line) + " live" + (s ? " · " + s + " soon" : ""); }

  /* ── halloween highlight: live = price + buy link, soon = "Dropping today", no link ── */
  var FEAT = window.UE11_FEATURE || [], featEl = $("feature");
  if (featEl && FEAT.length) {
    var anySoon = false, anyLive = false;
    featEl.innerHTML = FEAT.map(function (f, i) {
      var p = ALL.filter(function (q) { return q.slug === f.slug; })[0]; if (!p) return "";
      var live = isLive(p); if (live) anyLive = true; else anySoon = true;
      var img = '<img src="' + esc(f.art) + '" width="' + f.w + '" height="' + f.h + '" loading="' + (i ? "lazy" : "eager") + '" decoding="async" alt="' + esc(p.title) + '">' +
        '<span class="feat-jp" lang="ja" aria-hidden="true">' + esc(p.jp) + '</span>';
      return '<article class="feat ' + (i ? "feat-side" : "feat-main") + '">' +
        (live ? '<a class="feat-art" href="' + esc(p.url) + '" tabindex="-1" aria-hidden="true">' + img + '</a>' : '<div class="feat-art">' + img + '</div>') +
        '<div class="feat-cap">' +
          '<p class="label-shu">' + esc(f.kicker) + '</p>' +
          '<h3>' + esc(p.name) + '</h3>' + (live ? '<span class="price">$' + p.price + '</span>' : '') +
          '<p class="feat-tag">' + esc(f.tagline) + '</p>' +
          '<p class="hook">' + esc(f.blurb) + '</p>' +
          '<div class="feat-cta">' + (live
            ? '<a class="card-buy" href="' + esc(p.url) + '">Get it on Gumroad <span aria-hidden="true">→</span></a>'
            : '<span class="drop-badge"><span lang="ja">近日</span> Dropping today</span>') + '</div>' +
        '</div></article>';
    }).join("");
    var st = document.querySelector("[data-feature-state]");
    if (st) st.textContent = anySoon ? (anyLive ? "· live & dropping today" : "drop today") : "· live now";
  }

  /* ── filters ── */
  var filtersEl = $("filters"), current = "all";
  if (filtersEl) {
    var html = '<button class="filter" type="button" data-line="all" aria-pressed="true">All<small>' + chipCount("all") + '</small></button>';
    Object.keys(LINES).forEach(function (k) {
      var n = ALL.filter(function (p) { return p.line === k; }).length; if (!n) return;
      html += '<button class="filter" type="button" data-line="' + k + '" aria-pressed="false"><span lang="ja">' + esc(LINES[k].jp) + '</span>' + esc(LINES[k].name) + '<small>' + chipCount(k) + '</small></button>';
    });
    filtersEl.innerHTML = html;
    filtersEl.addEventListener("click", function (e) { var b = e.target.closest(".filter"); if (b) setFilter(b.dataset.line); });
  }

  /* ── live grid, closed by one end tile (coming soon, or a way back to the shop) ── */
  var grid = $("grid"), shown = LIVE.slice();
  function lineName(p) { return (LINES[p.line] || {}).name || ""; }
  function ocHtml(p) { return p.oc ? "Starring " + esc(p.oc) + (p.line === "samurai" ? '<span lang="ja">' + esc(p.jp) + "</span>" : "") : ""; }
  function liveCard(p, i) {
    return '<article class="card" style="--i:' + i + ';--tilt:' + (i % 2 ? 1.6 : -1.6) + 'deg">' +
      '<button class="card-art" type="button" data-slug="' + p.slug + '" aria-label="Details and samples: ' + esc(p.name) + ' (' + esc(p.title) + ')">' +
        '<img src="' + esc(p.art) + '" width="800" height="800" ' + (i < 4 ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" alt="' + esc(p.title) + '">' +
        '<span class="card-view" aria-hidden="true">Samples &amp; zip list</span>' +
      '</button>' +
      '<div class="card-cap">' +
        '<p class="label-shu">' + esc(lineName(p)) + '</p>' +
        '<h3>' + esc(p.name) + (p.line === "samurai" && p.jp ? '<span class="h3-jp" lang="ja">' + esc(p.jp) + '</span>' : '') + '</h3><span class="price">$' + p.price + '</span>' +
        (p.oc && p.name !== p.oc ? '<p class="oc">' + ocHtml(p) + '</p>' : '') +
        '<p class="hook">' + esc(p.hook) + '</p>' +
        '<a class="card-buy" href="' + esc(p.url) + '">Get it on Gumroad <span aria-hidden="true">→</span></a>' +
      '</div></article>';
  }
  function endTile(soonList) {
    if (soonList.length) {
      return '<aside class="end-tile end-soon" aria-labelledby="end-title">' +
        '<p class="end-k" id="end-title"><span lang="ja">近日</span> Coming soon</p>' +
        '<p class="end-note">' + word(soonList.length) + (soonList.length === 1 ? ' more pack is' : ' more packs are') + ' on the way to the shop.</p>' +
        '<ul class="end-thumbs">' + soonList.map(function (p) {
          return '<li><img src="' + esc(p.art) + '" width="800" height="800" loading="lazy" decoding="async" alt="' + esc(p.title) + ', coming soon"><span>' + esc(p.name) + '</span></li>';
        }).join("") + '</ul>' +
        '<a class="end-link" href="https://x.com/unifiedenergy11">Follow @unifiedenergy11 <span aria-hidden="true">→</span></a>' +
      '</aside>';
    }
    return '<aside class="end-tile end-shop" aria-labelledby="end-title">' +
      '<p class="end-k" id="end-title"><span lang="ja">店</span> The whole shop</p>' +
      '<p class="end-note">Every pack, and every new drop, lives on Gumroad.</p>' +
      '<a class="end-link" href="' + esc(SHOP) + '">Browse the shop <span aria-hidden="true">→</span></a>' +
    '</aside>';
  }
  function render() {
    var f = function (p) { return current === "all" || p.line === current; };
    shown = LIVE.filter(f);
    var soonList = SOON.filter(f);
    var e = $("empty"); if (e) e.hidden = shown.length > 0 || soonList.length > 0;
    if (grid) grid.innerHTML = shown.map(liveCard).join("") + endTile(soonList);
  }
  function setFilter(line) {
    current = line;
    document.querySelectorAll(".filter").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.line === line)); });
    render();
  }
  document.querySelectorAll("[data-jump]").forEach(function (a) { a.addEventListener("click", function () { setFilter(a.dataset.jump); }); });
  render();

  /* ── lightbox ── */
  var lb = $("lightbox"), cur = 0;
  /* the gallery art's ground colour per line (tools/build_art.py BG), so the full-height image column has no seam */
  var ART_BG = { samurai: "#14110e", kawaii: "#f0e9db", yokai: "#181b38", halloween: "#160e1c", stream: "#0e1a1c" };
  function openAt(idx) {
    if (!shown.length) return;
    cur = (idx + shown.length) % shown.length;
    var p = shown[cur];
    var img = $("lb-img"); img.src = p.art; img.alt = p.title;
    $("lb-count").textContent = (cur + 1) + " / " + shown.length;
    $("lb-line").textContent = lineName(p);
    $("lb-title").textContent = p.title;
    $("lb-oc").innerHTML = ocHtml(p); $("lb-oc").hidden = !p.oc;
    $("lb-hook").textContent = p.hook;
    $("lb-price").textContent = "$" + p.price;
    $("lb-buy").href = p.url;
    var emote = p.sampleKind === "emote", box = $("lb-samples");
    $("lb-samples-label").textContent = emote ? "Sample emotes · real 112 px files" : "From the pack";
    box.className = "lb-samples" + (emote ? "" : " thumbs");
    box.innerHTML = (p.samples || []).map(function (s) {
      var n = s.split("/").pop().replace(/\.\w+$/, "").replace(/[-_]/g, " ");
      return '<figure><img src="' + esc(s) + '" alt="' + esc(n) + '" loading="lazy"><figcaption>' + esc(n) + "</figcaption></figure>";
    }).join("");
    $("lb-contents").innerHTML = (p.contents || []).map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
    var fig = lb.querySelector(".lb-fig"); if (fig) fig.style.backgroundColor = p.slug === "golden-hour-atmosphere" ? "#0c0a09" : (ART_BG[p.line] || "");
    var inner = lb.querySelector(".lb-inner"), body = lb.querySelector(".lb-body");
    if (inner) inner.scrollTop = 0; if (body) body.scrollTop = 0;
    if (!lb.open) { if (lb.showModal) lb.showModal(); else window.location.href = p.url; }
  }
  if (grid && lb) {
    grid.addEventListener("click", function (e) {
      var b = e.target.closest(".card-art"); if (!b) return;
      openAt(shown.findIndex(function (p) { return p.slug === b.dataset.slug; }));
    });
    lb.querySelector(".lb-close").addEventListener("click", function () { lb.close(); });
    lb.querySelector(".lb-prev").addEventListener("click", function () { openAt(cur - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { openAt(cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") openAt(cur + 1); if (e.key === "ArrowLeft") openAt(cur - 1); });
    var sx = 0, sy = 0, fig = lb.querySelector(".lb-fig");
    fig.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    fig.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) openAt(cur + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }
  var yr = $("yr"); if (yr) yr.textContent = new Date().getFullYear();

  /* ── hero motion ── */
  var hero = document.querySelector(".hero");
  if (!hero || reduce) return;
  hero.classList.add("is-stamped");
  var layers = Array.prototype.map.call(hero.querySelectorAll("[data-depth]"), function (el) {
    return { el: el, d: parseFloat(el.dataset.depth) || .3, base: el.classList.contains("hero-kanji") ? "translate(-50%,-50%) " : "" };
  });
  var mx = 0, my = 0, tx = 0, ty = 0, sy2 = 0, raf = null;
  function tick() {
    tx += (mx - tx) * .06; ty += (my - ty) * .06;
    layers.forEach(function (L) {
      L.el.style.transform = L.base + "translate3d(" + (tx * 40 * L.d).toFixed(1) + "px," + (ty * 30 * L.d - sy2 * L.d * .3).toFixed(1) + "px,0)";
    });
    raf = (Math.abs(mx - tx) > .001 || Math.abs(my - ty) > .001) ? requestAnimationFrame(tick) : null;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  if (finePointer) hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; kick();
  });
  window.addEventListener("scroll", function () { sy2 = Math.min(window.scrollY, window.innerHeight); kick(); }, { passive: true });

  var cv = hero.querySelector(".petals"), ctx = cv && cv.getContext("2d");
  if (!ctx) return;
  var W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), petals = [], px = -999, py = -999, running = true;
  function size() { var r = hero.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function spawn(init) {
    return { x: Math.random() * W, y: init ? Math.random() * H : -20, s: 4 + Math.random() * 7, vx: .2 + Math.random() * .45, vy: .3 + Math.random() * .55,
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .03, w: Math.random() * 6.28, a: .25 + Math.random() * .4 };
  }
  size();
  for (var i = 0, N = W < 700 ? 10 : 22; i < N; i++) petals.push(spawn(true));
  window.addEventListener("resize", size);
  if (finePointer) hero.addEventListener("pointermove", function (e) { var r = hero.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; });
  hero.addEventListener("pointerleave", function () { px = py = -999; });
  new IntersectionObserver(function (en) { running = en[0].isIntersecting; if (running) requestAnimationFrame(draw); }).observe(hero);
  function petal(p) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(1, .55 + .45 * Math.sin(p.w));
    ctx.globalAlpha = p.a; ctx.fillStyle = "#f3a9bc";
    ctx.beginPath(); ctx.moveTo(0, -p.s);
    ctx.bezierCurveTo(p.s * .9, -p.s * .7, p.s * .7, p.s * .7, 0, p.s);
    ctx.bezierCurveTo(-p.s * .7, p.s * .7, -p.s * .9, -p.s * .7, -p.s * .18, -p.s * .82);
    ctx.lineTo(0, -p.s * .55); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < petals.length; i++) {
      var p = petals[i], dx = p.x - px, dy = p.y - py, d2 = dx * dx + dy * dy;
      if (d2 < 16000) { var f = (16000 - d2) / 16000 * 2.2, d = Math.sqrt(d2) || 1; p.x += dx / d * f; p.y += dy / d * f; p.vr += .002 * f; }
      p.x += p.vx + Math.sin(p.w) * .3; p.y += p.vy; p.r += p.vr; p.w += .02; p.vr *= .99;
      if (p.y > H + 20 || p.x > W + 20) { petals[i] = spawn(false); petals[i].x = Math.random() * W * 1.2 - W * .2; }
      petal(p);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
