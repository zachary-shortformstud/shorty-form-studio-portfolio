(function (v, i, d, a, l, y, t, c, s) {
  y = "_" + d.toLowerCase();
  c = d + "L";

  if (!v[d]) v[d] = {};
  if (!v[c]) v[c] = {};
  if (!v[y]) v[y] = {};

  var vl = "Loader";
  var vli = v[y][vl];
  var vsl = v[c][vl + "Script"];
  var vlf = v[c][vl + "Loaded"];
  var ve = "Embed";

  if (!vsl) {
    vsl = function (u, cb) {
      if (t) {
        cb();
        return;
      }

      s = i.createElement("script");
      s.type = "text/javascript";
      s.async = 1;
      s.src = u;

      if (s.readyState) {
        s.onreadystatechange = function () {
          if (s.readyState === "loaded" || s.readyState === "complete") {
            s.onreadystatechange = null;
            vlf = 1;
            cb();
          }
        };
      } else {
        s.onload = function () {
          vlf = 1;
          cb();
        };
      }

      i.getElementsByTagName("head")[0].appendChild(s);
    };
  }

  vsl(l + "loader.min.js", function () {
    if (!vli) {
      var vlc = v[c][vl];
      vli = new vlc();
    }

    vli.loadScript(l + "player.min.js", function () {
      var vec = v[d][ve];
      t = new vec();
      t.run(a);
    });
  });
})(
  window,
  document,
  "Vidalytics",
  "vidalytics_embed_ZLALbFSXcYMKRhCD",
  "https://fast.vidalytics.com/embeds/RxSTyjkB/ZLALbFSXcYMKRhCD/"
);

(function () {
  var container = document.querySelector(".tools-marquee");
  if (!container) return;

  var items = container.querySelectorAll("li");
  var maxDist = 150;

  function update() {
    var rect = container.getBoundingClientRect();
    var centerY = rect.top + rect.height / 2;

    items.forEach(function (li) {
      var r = li.getBoundingClientRect();
      var itemCenter = r.top + r.height / 2;
      var d = Math.abs(itemCenter - centerY);
      var t = Math.max(0, 1 - d / maxDist);

      var rr = Math.round(26 + (238 - 26) * t);
      var gg = Math.round(20 + (106 - 20) * t);
      var bb = Math.round(16 + (26 - 16) * t);
      var aa = (0.08 + (1 - 0.08) * t).toFixed(3);

      li.style.color = "rgba(" + rr + "," + gg + "," + bb + "," + aa + ")";
    });

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
})();

(function () {
  function closeModal() {
    var o = document.getElementById("optin");

    if (o) {
      o.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  document.addEventListener("click", function (e) {
    var t = e.target;

    if (t.closest && t.closest("a.btn, a.build-next__card")) {
      e.preventDefault();

      var o = document.getElementById("optin");

      if (o) {
        o.classList.add("open");
        document.body.style.overflow = "hidden";
      }

      return;
    }

    if (t.closest && t.closest("#optinClose")) {
      closeModal();
      return;
    }

    if (t.id === "optin") {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
})();

const gallery = document.querySelector("[data-build-next-viewport]");
const track = gallery?.querySelector(".build-next__track");
const previousButton = document.querySelector("[data-build-next-prev]");
const nextButton = document.querySelector("[data-build-next-next]");

if (gallery && track && previousButton && nextButton) {
  const updateButtons = () => {
    previousButton.disabled = gallery.scrollLeft <= 0;
    nextButton.disabled =
      gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 1;
  };

  const scrollGallery = (direction) => {
    const card = track.querySelector(".build-next__card");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 24;

    gallery.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });
  };

  previousButton.addEventListener("click", () => scrollGallery(-1));
  nextButton.addEventListener("click", () => scrollGallery(1));
  gallery.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);

  updateButtons();
}

const galleryVideos = document.querySelectorAll(".build-next__video");

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.25 }
  );

  galleryVideos.forEach((video) => videoObserver.observe(video));
}