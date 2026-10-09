/* UE11 own analytics: cookie-free, no personal data. Anonymous daily counters only. Honors Do Not Track / GPC. */
(function (w, d) {
  var C = { on: true, api: "https://abacus.jasoncameron.dev/hit/", ns: "ue11creative-site" };
  var n = navigator, L = location, q = new URLSearchParams(L.search), test = q.has("ue11t");
  if (!C.on || n.doNotTrack == "1" || w.doNotTrack == "1" || n.globalPrivacyControl) return;
  if (!/github\.io$/.test(L.hostname) || test) { if (!test && L.hostname) return; C.ns = "ue11creative-test"; }
  else if (n.webdriver) return;
  var S = w.sessionStorage, day = new Date().toISOString().slice(0, 10), sent = {};
  function ss(k, v) { try { if (v === undefined) return S.getItem(k); S.setItem(k, v); } catch (e) {} }
  function hit(k, once) {
    if (once && (sent[k] || ss("u1" + k + day))) return; sent[k] = 1; if (once) ss("u1" + k + day, 1);
    try { fetch(C.api + C.ns + "/" + (k + "." + day).slice(0, 64), { keepalive: true, mode: "no-cors" }); } catch (e) {}
  }
  function cl(s, re, dflt) { s = String(s || "").toLowerCase(); for (var i = 0; i < re.length; i++) if (s.indexOf(re[i]) > -1) return re[i].replace(/\W.*/, ""); return dflt; }
  hit("pv");
  if (!ss("ue11s")) {
    ss("ue11s", 1); hit("uv");
    var r = ""; try { r = d.referrer ? new URL(d.referrer).hostname : ""; } catch (e) {}
    hit("ref." + (!r || r == L.hostname ? "direct" : r == "t.co" ? "x" : cl(r, ["google", "bing", "duckduckgo", "x.com", "twitter", "reddit", "discord", "youtube", "instagram", "facebook", "tiktok", "twitch", "github", "gumroad", "pinterest", "threads", "bsky", "linktr"], "other")));
    var u = q.get("utm_source"); if (u) hit("utm." + cl(u, ["x", "twitter", "discord", "reddit", "instagram", "tiktok", "youtube", "twitch", "bsky", "email", "bio", "gumroad"], "other"));
    hit("dev." + (/iPad|Tablet/i.test(n.userAgent) ? "tablet" : /Mobi|Android/i.test(n.userAgent) ? "mobile" : "desktop"));
    var tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    hit("geo." + cl(tz, ["america", "europe", "asia", "africa", "australia", "pacific"], "other"));
  }
  function slugOf(h) { var m = /gumroad\.com\/l\/([\w-]+)/.exec(h); return m ? m[1] : "shop"; }
  function tag(a, e) {
    var h = a.href; if (!/unifiedenergy11\.gumroad\.com/.test(h)) return;
    var s = slugOf(h), ctx = a.closest("#lightbox") ? "lightbox" : a.closest(".card") ? "card" : "page";
    try { var x = new URL(h); x.searchParams.set("utm_source", "ue11site"); x.searchParams.set("utm_medium", "website"); x.searchParams.set("utm_campaign", s); x.searchParams.set("utm_content", ctx); a.href = x.href; } catch (er) {}
    if (e && e.type == "click") { hit("buy." + s); hit("buyctx." + ctx); }
  }
  ["pointerdown", "click"].forEach(function (t) { d.addEventListener(t, function (e) { var a = e.target.closest && e.target.closest("a[href]"); if (a) tag(a, e); }, true); });
  d.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".card-art[data-slug],.lb-arrow");
    if (b) setTimeout(function () { var a = d.getElementById("lb-buy"); if (a && a.closest("dialog").open) hit("lb." + slugOf(a.href)); }, 50);
  });
  var io = w.IntersectionObserver && new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { io.unobserve(x.target); hit("view." + x.target.dataset.slug, 1); } }); }, { threshold: 0.6 });
  function scan() { if (io) d.querySelectorAll(".card-art[data-slug]").forEach(function (el) { io.observe(el); }); }
  w.addEventListener("load", scan); d.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".filter,[data-jump]")) setTimeout(scan, 100); });
  var mx = 0; w.addEventListener("scroll", function () {
    var de = d.documentElement, p = (w.scrollY + w.innerHeight) / de.scrollHeight * 100;
    [25, 50, 75, 100].forEach(function (s) { if (p >= s - 1 && mx < s) { mx = s; hit("scroll." + s, 1); } });
  }, { passive: true });
})(window, document);
