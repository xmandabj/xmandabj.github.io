/* =========================================================================
   BEN · CLASSIFIED DOSSIER — interactions
   ========================================================================= */
(function () {
  "use strict";

  /* ---- live clock (surveillance timestamp) ---- */
  var clocks = document.querySelectorAll("[data-clock]");
  function tick() {
    var d = new Date();
    var p = function (n) { return String(n).padStart(2, "0"); };
    var s = d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) +
            " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    clocks.forEach(function (el) { el.textContent = s; });
  }
  tick(); setInterval(tick, 1000);

  /* ---- pseudo QR ---- */
  document.querySelectorAll(".qr").forEach(function (qr) {
    var N = 21, seed = 7;
    qr.style.gridTemplateColumns = "repeat(" + N + ",1fr)";
    function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
    function finder(r, c) { return (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7); }
    for (var r = 0; r < N; r++) {
      for (var c = 0; c < N; c++) {
        var on;
        if (finder(r, c)) {
          var rr = r % (N - 7), cc = c % (N - 7);
          var lr = r < 7 ? r : r - (N - 7), lc = c < 7 ? c : c - (N - 7);
          on = (lr === 0 || lr === 6 || lc === 0 || lc === 6 || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4));
        } else { on = rnd() > 0.52; }
        var cell = document.createElement("div");
        if (on) cell.className = "qr-cell";
        qr.appendChild(cell);
      }
    }
  });

  /* ---- topbar scroll + progress ---- */
  var tb = document.querySelector(".topbar");
  var pr = document.querySelector(".progress");
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (tb) tb.classList.toggle("scrolled", y > 30);
    if (pr) { var h = document.documentElement.scrollHeight - innerHeight; pr.style.width = (h > 0 ? y / h * 100 : 0) + "%"; }
    var pill = document.querySelector(".hire-pill");
    if (pill && !pill.dataset.dismissed) pill.classList.toggle("show", y > innerHeight * 0.9);
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- reveal ---- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
  document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });

  /* ---- active nav ---- */
  var links = [].slice.call(document.querySelectorAll(".tb-nav a"));
  var map = {};
  links.forEach(function (a) { var h = a.getAttribute("href"); if (h && h[0] === "#") map[h.slice(1)] = a; });
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { links.forEach(function (l) { l.classList.remove("active"); }); if (map[e.target.id]) map[e.target.id].classList.add("active"); }
    });
  }, { threshold: 0.4, rootMargin: "-25% 0px -55% 0px" });
  document.querySelectorAll("section[id]").forEach(function (s) { so.observe(s); });

  /* ---- operation cards: toggle (multi-open, default open) ---- */
  document.querySelectorAll(".op-head").forEach(function (h) {
    h.addEventListener("click", function () { h.closest(".op").classList.toggle("open"); });
  });

  /* ---- hire pill dismiss ---- */
  var px = document.querySelector(".hp-x");
  if (px) px.addEventListener("click", function () { var p = document.querySelector(".hire-pill"); p.dataset.dismissed = "1"; p.classList.remove("show"); });

  /* ---- mobile menu ---- */
  var burger = document.querySelector(".tb-burger");
  var mm = document.querySelector(".mmenu");
  var sc = document.querySelector(".mscrim");
  function setM(o) { if (!mm) return; mm.classList.toggle("open", o); sc.classList.toggle("open", o); document.body.style.overflow = o ? "hidden" : ""; }
  if (burger) burger.addEventListener("click", function () { setM(!mm.classList.contains("open")); });
  if (sc) sc.addEventListener("click", function () { setM(false); });
  if (mm) mm.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setM(false); }); });

  /* ---- live website embeds: scale to fit + framing fallback ---- */
  function fitEmbeds() {
    document.querySelectorAll(".site-embed").forEach(function (box) {
      var f = box.querySelector("iframe");
      if (!f) return;
      var base = parseFloat(f.getAttribute("data-w")) || 1280;
      var s = box.clientWidth / base;
      f.style.transform = "scale(" + s + ")";
    });
  }
  addEventListener("resize", fitEmbeds);
  fitEmbeds();
  document.querySelectorAll(".site-embed").forEach(function (box) {
    var f = box.querySelector("iframe");
    var fb = box.querySelector(".embed-fallback");
    if (!f || !fb) return;
    var loaded = false;
    f.addEventListener("load", function () { loaded = true; });
    setTimeout(function () {
      if (!loaded) { fb.style.display = "flex"; f.style.visibility = "hidden"; }
    }, 4500);
  });

  /* ---- smooth anchor scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) { var t = document.querySelector(id); if (t) { e.preventDefault(); var top = t.getBoundingClientRect().top + (scrollY || document.documentElement.scrollTop) - 64; scrollTo({ top: top, behavior: "smooth" }); } }
    });
  });
})();
