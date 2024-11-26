window.FontAwesomeConfig = {
  asyncEnabled: true,
  autoAccessibility: true,
  useUrl: "use.fontawesome.com",
  code: "826a7e3dce",
  webFontLoaderVersion: "1.6.24",
};
window.FontAwesome || (window.FontAwesome = {}),
  (function () {
    function a(a) {
      this.el = a;
      for (
        var b = a.className.replace(/^\s+|\s+$/g, "").split(/\s+/), c = 0;
        c < b.length;
        c++
      )
        d.call(this, b[c]);
    }
    function b(a, b, c) {
      Object.defineProperty
        ? Object.defineProperty(a, b, { get: c })
        : a.__defineGetter__(b, c);
    }
    if (
      !(
        "undefined" == typeof window.Element ||
        "classList" in document.documentElement
      )
    ) {
      var c = Array.prototype,
        d = c.push,
        e = c.splice,
        f = c.join;
      (a.prototype = {
        add: function (a) {
          this.contains(a) ||
            (d.call(this, a), (this.el.className = this.toString()));
        },
        contains: function (a) {
          return -1 != this.el.className.indexOf(a);
        },
        item: function (a) {
          return this[a] || null;
        },
        remove: function (a) {
          if (this.contains(a)) {
            for (var b = 0; b < this.length && this[b] != a; b++);
            e.call(this, b, 1), (this.el.className = this.toString());
          }
        },
        toString: function () {
          return f.call(this, " ");
        },
        toggle: function (a) {
          return (
            this.contains(a) ? this.remove(a) : this.add(a), this.contains(a)
          );
        },
      }),
        (window.DOMTokenList = a),
        b(Element.prototype, "classList", function () {
          return new a(this);
        });
    }
  })(),
  (function (a, b, c) {
    function d(a) {
      var c,
        d = [],
        e = b,
        f = e.documentElement.doScroll,
        g = "DOMContentLoaded",
        h = (f ? /^loaded|^c/ : /^loaded|^i|^c/).test(e.readyState);
      h ||
        e.addEventListener(
          g,
          (c = function () {
            for (e.removeEventListener(g, c), h = 1; (c = d.shift()); ) c();
          })
        ),
        h ? setTimeout(a, 0) : d.push(a);
    }
    function e() {
      var a,
        c,
        d,
        e = b.querySelectorAll(".fa");
      Array.prototype.forEach.call(e, function (e) {
        (a = e.getAttribute("title")),
          e.setAttribute("aria-hidden", "true"),
          (c = e.nextElementSibling
            ? !e.nextElementSibling.classList.contains("sr-only")
            : !0),
          a &&
            c &&
            ((d = b.createElement("span")),
            (d.innerHTML = a),
            d.classList.add("sr-only"),
            e.parentNode.insertBefore(d, e.nextSibling));
      });
    }
    function f(a) {
      "undefined" != typeof MutationObserver &&
        new MutationObserver(a).observe(b, { childList: !0, subtree: !0 });
    }
    function g() {
      var a = b.createElement("link");
      (a.href = o + "//" + l + "/" + m + ".css"),
        (a.media = "all"),
        (a.rel = "stylesheet"),
        b.getElementsByTagName("head")[0].appendChild(a);
    }
    function h() {
      var c = b.createElement("script"),
        d = {};
      (s = b.scripts[0]),
        a.WebFontConfig || (a.WebFontConfig = {}),
        (d = a.WebFontConfig),
        d.custom || (d.custom = {}),
        d.custom.families || (d.custom.families = []),
        d.custom.urls || (d.custom.urls = []),
        d.custom.families.push("FontAwesome"),
        d.custom.urls.push(o + "//" + l + "/" + m + ".css"),
        (c.src = o + "//" + l + "/webfontloader/" + n + "/webfontloader.js"),
        s.parentNode.insertBefore(c, s);
    }
    function i() {
      return k && (d(e), f(e)), j ? h() : g();
    }
    var j = a.FontAwesomeConfig.asyncEnabled,
      k = a.FontAwesomeConfig.autoAccessibility,
      l = a.FontAwesomeConfig.useUrl,
      m = a.FontAwesomeConfig.code,
      n = a.FontAwesomeConfig.webFontLoaderVersion,
      o = b.location.protocol;
    a.FontAwesome.load = i;
  })(this, document);
try {
  window.FontAwesome.load();
} catch (e) {}
