google.maps.__gjsload__("map", function (_) {
  var xta = function (a) {
      try {
        return _.ra.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    yta = function () {
      var a = _.Yq();
      return _.Ci(a.Gg, 18);
    },
    zta = function () {
      var a = _.Yq();
      return _.H(a.Gg, 17);
    },
    Ata = function (a, b) {
      return a.Eg ? new _.wm(b.Eg, b.Fg) : _.xm(a, _.fr(_.gr(a, b)));
    },
    Bta = function (a) {
      if (!a.getDiv().hasAttribute("dir")) return !1;
      const b = a.getDiv().dir;
      return b === "rtl"
        ? !0
        : b === "ltr"
        ? !1
        : window.getComputedStyle(a.getDiv()).direction === "rtl";
    },
    Cta = function (a) {
      return new Promise((b, c) => {
        window.requestAnimationFrame(() => {
          try {
            a
              ? _.fn(a, !1)
                ? b()
                : c(
                    Error(
                      "Error focusing element: The element is not focused after the focus attempt."
                    )
                  )
              : c(
                  Error(
                    "Error focusing element: null element cannot be focused"
                  )
                );
          } catch (d) {
            c(d);
          }
        });
      });
    },
    Dta = function (a, b) {
      a.Fg.has(b);
      return new _.Hoa(() => {
        Date.now() >= a.Ig && a.reset();
        a.Eg.has(b) || a.Hg.has(b)
          ? a.Eg.has(b) && !a.Hg.has(b) && a.Eg.set(b, "over_ttl")
          : (a.Eg.set(b, _.eo()), a.Hg.add(b));
        return a.Eg.get(b);
      });
    },
    hB = function (a, b) {
      return _.Os(b).filter((c) =>
        (0, _.poa)(c)
          ? c === a.Eg ||
            c === a.Fg ||
            (c.offsetWidth &&
              c.offsetHeight &&
              window.getComputedStyle(c).visibility !== "hidden")
          : !1
      );
    },
    Eta = function (a, b) {
      const c = b.filter((g) => a.ownerElement.contains(g)),
        d = b.indexOf(c[0]),
        e = b.indexOf(a.Eg, d),
        f = b.indexOf(a.Fg, e);
      b = b.indexOf(c[c.length - 1], f);
      if (!(a.ownerElement.getRootNode() instanceof ShadowRoot))
        for (const g of [d, e, f, b]);
      return { DJ: d, CA: e, rE: f, EJ: b };
    },
    iB = function (a) {
      Cta(a).catch(() => {});
    },
    jB = function (a) {
      a = a.ownerElement.getRootNode();
      return a instanceof ShadowRoot
        ? a.activeElement || document.activeElement
        : document.activeElement;
    },
    Fta = function (a) {
      const b = document.createElement("div"),
        c = document.createElement("div"),
        d = document.createElement("div"),
        e = document.createElement("h2"),
        f = new _.wy({
          Eq: new _.wl(0, 0),
          Yr: new _.yl(24, 24),
          label: "\u0110o\u0301ng h\u00f4\u0323p thoa\u0323i",
          offset: new _.wl(24, 24),
          ownerElement: a.ownerElement,
        });
      e.textContent = a.title;
      f.element.style.position = "static";
      f.element.addEventListener("click", () => {
        a.Jj();
      });
      d.appendChild(e);
      d.appendChild(f.element);
      c.appendChild(a.content);
      b.appendChild(d);
      b.appendChild(c);
      _.Cl(d, "dialog-view--header");
      _.Cl(b, "dialog-view--content");
      _.Cl(c, "dialog-view--inner-content");
      return b;
    },
    Gta = function (a) {
      return a.Eg && a.Rn()
        ? _.Wq(a.Eg)
          ? _.Sq(_.Xq(a.Eg).Gg, 3) > 0
          : !1
        : !1;
    },
    Hta = function (a) {
      if (!a.Eg || !a.Rn()) return null;
      const b = _.L(a.Eg.Gg, 3) || null;
      if (_.Wq(a.Eg)) {
        a = _.Vq(_.Xq(a.Eg));
        if (!a || !_.Y(a.Gg, 3)) return null;
        a = _.J(a.Gg, 3, _.mla);
        for (let c = 0; c < _.vi(a.Gg, 1); c++) {
          const d = _.Tq(a.Gg, 1, _.nla, c);
          if (d.getType() === 26)
            for (let e = 0; e < _.vi(d.Gg, 2); e++) {
              const f = _.Tq(d.Gg, 2, _.ola, e);
              if (f.getKey() === "styles") return f.getValue();
            }
        }
      }
      return b;
    },
    kB = function (a) {
      return (a = _.Xq(a.Eg)) &&
        _.Y(a.Gg, 2) &&
        _.Y(_.J(a.Gg, 2, Ita).Gg, 3, Jta)
        ? _.J(_.J(a.Gg, 2, Ita).Gg, 3, Kta, Jta)
        : null;
    },
    Lta = function (a) {
      if (!a.Eg) return null;
      let b = _.Y(a.Eg.Gg, 4) ? _.Ci(a.Eg.Gg, 4) : null;
      !b && _.Wq(a.Eg) && (a = kB(a)) && (b = _.Ci(a.Gg, 1));
      return b;
    },
    Mta = function (a) {
      _.Bw(a.request);
      for (let b = _.zw(a.request) - 1; b > 0; --b)
        _.Ys(_.Aw(a.request, b), _.Aw(a.request, b - 1));
      a = _.Aw(a.request, 0);
      _.kw(a, 1);
      _.Xg(a.Gg, 2);
      _.Xg(a.Gg, 3);
    },
    lB = function (a) {
      const b = _.vi(a.Gg, 1),
        c = [];
      for (let d = 0; d < b; d++) c.push(a.getUrl(d));
      return c;
    },
    Nta = function (a, b) {
      a = lB(_.J(a.Eg.Gg, 8, _.qx));
      return _.lr(a, (c) => `${c}deg=${b}&`);
    },
    Ota = function (a, b) {
      const c = a.length,
        d = typeof a === "string" ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && !b.call(void 0, d[e], e, a)) return !1;
      return !0;
    },
    Pta = function (a, b) {
      const c = a.length,
        d = typeof a === "string" ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) return e;
      return -1;
    },
    Qta = function (a) {
      var b = _.eja(a);
      if (typeof b == "undefined") throw Error("Keys are undefined");
      var c = new _.Dr(null);
      a = _.dja(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? c.setValues(e, f) : c.add(e, f);
      }
      return c;
    },
    Rta = function (a, b) {
      var c = _.Aj(void 0, 0);
      const d = _.Aj(void 0, _.sj(b));
      for (; c < d; ++c) a.push(b[c]);
    },
    Sta = function (a, b, c) {
      let d = a.ei.lo,
        e = a.ei.hi,
        f = a.Gh.lo,
        g = a.Gh.hi;
      var h = a.toSpan();
      const k = h.lat();
      h = h.lng();
      _.Zk(a.Gh) && (g += 360);
      d -= b * k;
      e += b * k;
      f -= b * h;
      g += b * h;
      c &&
        ((a = Math.min(k, h) / c),
        (a = Math.max(1e-6, a)),
        (d = a * Math.floor(d / a)),
        (e = a * Math.ceil(e / a)),
        (f = a * Math.floor(f / a)),
        (g = a * Math.ceil(g / a)));
      if ((a = g - f >= 360)) (f = -180), (g = 180);
      return new _.cl(new _.fk(d, f, a), new _.fk(e, g, a));
    },
    Tta = function (a, b, c, d) {
      function e(f, g, h) {
        {
          const t = a.getCenter(),
            u = a.getZoom(),
            w = a.getProjection();
          if (t && u != null && w) {
            var k = a.getTilt() || 0,
              m = a.getHeading() || 0,
              p = _.vm(u, k, m);
            f = {
              center: _.cr(_.ts(t, w), _.xm(p, { hh: f, kh: g })),
              zoom: u,
              heading: m,
              tilt: k,
            };
          } else f = void 0;
        }
        f && c.ak(f, h);
      }
      _.tk(b, "panby", (f, g) => {
        e(f, g, !0);
      });
      _.tk(b, "panbynow", (f, g) => {
        e(f, g, !1);
      });
      _.tk(b, "panbyfraction", (f, g) => {
        const h = c.getBoundingClientRect();
        f *= h.right - h.left;
        g *= h.bottom - h.top;
        e(f, g, !0);
      });
      _.tk(b, "pantolatlngbounds", (f, g) => {
        (0, _.Sma.bF)(a, c, f, g);
      });
      _.tk(b, "panto", (f) => {
        if (f instanceof _.fk) {
          var g = a.getCenter();
          const h = a.getZoom(),
            k = a.getProjection();
          g && h != null && k
            ? ((f = _.ts(f, k)),
              (g = _.ts(g, k)),
              d.ak({
                center: _.er(d.ah.Gj, f, g),
                zoom: h,
                heading: a.getHeading() || 0,
                tilt: a.getTilt() || 0,
              }))
            : a.setCenter(f);
        } else throw Error("panTo: latLng must be of type LatLng");
      });
    },
    Uta = function (a, b, c) {
      _.tk(b, "tiltrotatebynow", (d, e) => {
        const f = a.getCenter(),
          g = a.getZoom(),
          h = a.getProjection();
        if (f && g != null && h) {
          var k = a.getTilt() || 0,
            m = a.getHeading() || 0;
          c.ak(
            { center: _.ts(f, h), zoom: g, heading: m + d, tilt: k + e },
            !1
          );
        }
      });
    },
    Xta = function (a) {
      if (!a) return null;
      a = a.toLowerCase();
      return Vta.hasOwnProperty(a)
        ? Vta[a]
        : Wta.hasOwnProperty(a)
        ? Wta[a]
        : null;
    },
    Yta = function (a, b) {
      let c = null;
      a &&
        a.some((d) => {
          (d = d.Ct(b)) && d.getType() === 68 && (c = d);
          return !!c;
        });
      return c;
    },
    Zta = function (a, b, c) {
      let d = null;
      if ((b = Yta(b, c))) d = b;
      else if (a && ((d = new _.iw()), _.$v(d, a.type), a.params))
        for (const e of Object.keys(a.params))
          (b = _.bw(d)), _.Yv(b, e), (c = a.params[e]) && _.Zv(b, c);
      return d;
    },
    $ta = function (a, b, c, d, e, f, g, h, k = !1, m = !1) {
      const p = new _.My();
      p.initialize(a, b, c != "hybrid");
      (c === "satellite" || (c === "hybrid" && !m)) && Mta(p);
      c !== "satellite" && _.Vla(p, c, 0, d);
      g && c !== "satellite" && g.forEach((t) => p.Ii(t, c, !1));
      e && _.Kb(e, (t) => _.Pw(p, t));
      f && _.nw(f, _.tw(_.Dw(p.request)));
      h && _.Yla(p, h);
      k || _.Ow(p, [47083502]);
      return p.request;
    },
    aua = function (a, b, c, d, e, f, g, h, k, m, p, t = !1) {
      const u = [];
      (e = Zta(e, k, c)) && u.push(e);
      e = new _.iw();
      _.$v(e, 37);
      _.Yv(_.bw(e), "smartmaps");
      u.push(e);
      return { Lm: $ta(a, b, c, d, u, f, k, p, m, t), wo: g, scale: h };
    },
    cua = function (a, b, c, d, e) {
      let f = [];
      const g = [];
      (b = Zta(b, d, a)) && f.push(b);
      let h;
      c && ((h = _.nw(c)), f.push(h));
      let k;
      const m = new Set();
      let p, t, u;
      d &&
        d.forEach((w) => {
          const x = _.xla(w);
          x &&
            (g.push(x),
            w.searchPipeMetadata && (p = w.searchPipeMetadata),
            w.travelMapRequest && (t = w.travelMapRequest),
            w.clientSignalPipeMetadata && (u = w.clientSignalPipeMetadata),
            w.paintExperimentIds?.forEach((z) => {
              m.add(z);
            }));
        });
      if (e) {
        e.xx && (k = e.xx);
        e.paintExperimentIds?.forEach((x) => {
          m.add(x);
        });
        if ((c = e.LF) && !_.yf(c)) {
          h || ((h = new _.iw()), _.$v(h, 26), f.push(h));
          for (const [x, z] of Object.entries(c))
            (c = x), (d = z), (b = _.bw(h)), _.Yv(b, c), _.Zv(b, d);
        }
        const w = e.stylers;
        w &&
          w.length &&
          ((f = f.filter((x) => !w.some((z) => z.getType() === x.getType()))),
          f.push(...w));
      }
      return {
        mapTypes: bua[a],
        stylers: f,
        th: g,
        paintExperimentIds: [...m],
        Km: k,
        searchPipeMetadata: p,
        travelMapRequest: t,
        clientSignalPipeMetadata: u,
      };
    },
    mB = function (a, b, c, d = { dk: null }) {
      const e = d.heading;
      var f = d.zH;
      const g = d.dk;
      d = d.Pu;
      const h = _.yj(e);
      f = !h && f !== !1;
      if (b === "satellite" && h) {
        var k;
        h ? (k = Nta(a.Ig, e || 0)) : (k = lB(_.J(a.Ig.Eg.Gg, 2, _.qx)));
        b = new _.yy({ hh: 256, kh: 256 }, h ? 45 : 0, e || 0);
        return new dua(
          k,
          f && _.Yn() > 1,
          _.ix(e),
          (g && g.scale) || null,
          b,
          h ? a.Lg : null,
          !!d,
          a.Jg
        );
      }
      return new _.Py(
        _.fx(a.Ig),
        "Xin l\u1ed7i, ch\u00fang t\u00f4i kh\u00f4ng c\u00f3 h\u00ecnh \u1ea3nh \u1edf \u0111\u00e2y.",
        f && _.Yn() > 1,
        _.ix(e),
        c,
        g,
        e,
        a.Jg,
        a.Kg,
        !!d
      );
    },
    gua = function (a) {
      function b(c, d) {
        if (!d || !d.Lm) return d;
        const e = d.Lm.clone();
        _.$v(_.tw(_.Dw(e)), c);
        return { scale: d.scale, wo: d.wo, Lm: e };
      }
      return (c) => {
        var d = mB(a, "roadmap", a.Eg, { zH: !1, dk: b(3, c.dk().get()) });
        const e = mB(a, "roadmap", a.Eg, { dk: b(18, c.dk().get()) });
        d = new eua([d, e]);
        c = mB(a, "roadmap", a.Eg, { dk: c.dk().get() });
        return new fua(d, c);
      };
    },
    hua = function (a) {
      return (b, c) => {
        const d = b.dk().get();
        if (_.yj(b.heading)) {
          const e = mB(a, "satellite", null, {
            heading: b.heading,
            dk: d,
            Pu: !1,
          });
          b = mB(a, "hybrid", a.Eg, { heading: b.heading, dk: d });
          return new eua([e, b], c);
        }
        return mB(a, "hybrid", a.Eg, { heading: b.heading, dk: d, Pu: c });
      };
    },
    iua = function (a, b) {
      return new nB(
        hua(a),
        a.Eg,
        typeof b === "number" ? new _.gm(b) : a.projection,
        typeof b === "number" ? 21 : 22,
        "K\u1ebft h\u1ee3p",
        "Hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u00f3 t\u00ean ph\u1ed1",
        _.yx.hybrid,
        `m@${a.Hg}`,
        { type: 68, params: { set: "RoadmapSatellite" } },
        "hybrid",
        !1,
        a.Fg,
        a.language,
        a.region,
        b,
        a.map
      );
    },
    jua = function (a) {
      return (b, c) =>
        mB(a, "satellite", null, {
          heading: b.heading,
          dk: b.dk().get(),
          Pu: c,
        });
    },
    kua = function (a, b) {
      const c = typeof b === "number";
      return new nB(
        jua(a),
        null,
        typeof b === "number" ? new _.gm(b) : a.projection,
        c ? 21 : 22,
        "V\u1ec7 tinh",
        "Hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh qua v\u1ec7 tinh",
        c ? "a" : _.yx.satellite,
        null,
        null,
        "satellite",
        !1,
        a.Fg,
        a.language,
        a.region,
        b,
        a.map
      );
    },
    lua = function (a, b) {
      return (c) => mB(a, b, a.Eg, { dk: c.dk().get() });
    },
    mua = function (a, b, c, d = {}) {
      const e = [0, 90, 180, 270];
      d = d.AI;
      if (b === "hybrid") {
        b = iua(a);
        b.Fg = {};
        for (const f of e) b.Fg[f] = iua(a, f);
      } else if (b === "satellite") {
        b = kua(a);
        b.Fg = {};
        for (const f of e) b.Fg[f] = kua(a, f);
      } else
        b =
          b === "roadmap" && _.Yn() > 1 && d
            ? new nB(
                gua(a),
                a.Eg,
                a.projection,
                22,
                "B\u1ea3n \u0111\u1ed3",
                "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1",
                _.yx.roadmap,
                `m@${a.Hg}`,
                { type: 68, params: { set: "Roadmap" } },
                "roadmap",
                !1,
                a.Fg,
                a.language,
                a.region,
                void 0,
                a.map
              )
            : b === "terrain"
            ? new nB(
                lua(a, "terrain"),
                a.Eg,
                a.projection,
                21,
                "\u0110\u1ecba h\u00ecnh",
                "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1 v\u1edbi \u0111\u1ecba h\u00ecnh",
                _.yx.terrain,
                `r@${a.Hg}`,
                { type: 68, params: { set: c ? "TerrainDark" : "Terrain" } },
                "terrain",
                c,
                a.Fg,
                a.language,
                a.region,
                void 0,
                a.map
              )
            : new nB(
                lua(a, "roadmap"),
                a.Eg,
                a.projection,
                22,
                "B\u1ea3n \u0111\u1ed3",
                "Hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 ph\u1ed1",
                _.yx.roadmap,
                `m@${a.Hg}`,
                { type: 68, params: { set: c ? "RoadmapDark" : "Roadmap" } },
                "roadmap",
                c,
                a.Fg,
                a.language,
                a.region,
                void 0,
                a.map
              );
      return b;
    },
    nua = function (a, b = !1) {
      const c = _.cn.Pg
        ? "S\u1eed d\u1ee5ng \u2318 + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3"
        : "S\u1eed d\u1ee5ng ctrl + cu\u1ed9n \u0111\u1ec3 thu ph\u00f3ng b\u1ea3n \u0111\u1ed3";
      a.Ng.textContent = b
        ? c
        : "S\u1eed d\u1ee5ng hai ng\u00f3n tay \u0111\u1ec3 di chuy\u1ec3n b\u1ea3n \u0111\u1ed3";
      a.Zg.style.transitionDuration = "0.3s";
      a.Zg.style.opacity = "1";
      a.Zg.style.display = "";
    },
    oua = function (a) {
      a.Zg.style.transitionDuration = "0.8s";
      a.Zg.style.opacity = "0";
      a.Zg.style.display = "none";
    },
    pua = function () {
      var a = window.innerWidth / (document.body.scrollWidth + 1);
      if (
        !(a =
          window.innerHeight / (document.body.scrollHeight + 1) < 0.95 ||
          a < 0.95)
      )
        try {
          a = window.self !== window.top;
        } catch (b) {
          a = !0;
        }
      return a;
    },
    qua = function (a, b, c, d = pua) {
      return a === !1
        ? "none"
        : b === "none" || b === "greedy" || b === "zoomaroundcenter"
        ? b
        : c
        ? "greedy"
        : b === "cooperative" || d()
        ? "cooperative"
        : "greedy";
    },
    rua = function (a) {
      return new _.ry([a.draggable, a.kI, a.Dk], qua);
    },
    oB = function (a, b, c, d, e) {
      sua(a);
      tua(a, b, c, d, e);
    },
    tua = function (a, b, c, d, e) {
      var f = e || d,
        g = a.ah.Fl(c);
      const h = _.im(g, a.map.getProjection()),
        k = a.Ig.getBoundingClientRect();
      c = new _.ty(
        h,
        f,
        new _.wl(c.clientX - k.left, c.clientY - k.top),
        new _.wl(g.Eg, g.Fg)
      );
      f = !!d && d.pointerType === "touch";
      g =
        !!d &&
        !!window.MSPointerEvent &&
        d.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_TOUCH;
      if (a.map.__gm.Kg.Lz(b, c, (!!d && !!d.touches) || f || g))
        d && e && _.Nq(e) && _.rk(d);
      else {
        a.map.__gm.set("cursor", a.map.get("draggableCursor"));
        (b !== "dragstart" && b !== "drag" && b !== "dragend") ||
          _.Fk(a.map.__gm, b, c);
        if (a.Jg.get() === "none") {
          if (b === "dragstart" || b === "dragend") return;
          b === "drag" && (b = "mousemove");
        }
        b === "dragstart" || b === "drag" || b === "dragend"
          ? _.Fk(a.map, b)
          : _.Fk(a.map, b, c);
      }
    },
    sua = function (a) {
      if (a.Fg) {
        const b = a.Fg;
        tua(a, "mousemove", b.coords, b.Eg);
        a.Fg = null;
        a.Hg = Date.now();
      }
    },
    vua = async function (a, b) {
      const [, c, d] = _.L(_.Xi(_.Ni).Gg, 2).split(".");
      var e = {
        language: _.Ni.Eg().Eg(),
        region: _.Ni.Eg().Fg(),
        alt: "protojson",
      };
      e = Qta(e);
      c && e.add("major_version", c);
      d && e.add("minor_version", d);
      b && e.add("map_ids", b);
      e.add("map_type", 1);
      try {
        var f =
          (window.sessionStorage &&
            window.sessionStorage.getItem("MapConfigBaseUrl")) ||
          "https://maps.googleapis.com/maps/api/mapsjs/mapConfigs:batchGet";
      } catch (m) {
        f = "https://maps.googleapis.com/maps/api/mapsjs/mapConfigs:batchGet";
      }
      const g = `${f}?${e.toString()}`,
        h = `Google Maps JavaScript API: Unable to fetch configuration for mapId ${b}`,
        k = a.Fg();
      return new Promise((m) => {
        _.gg(k, "complete", () => {
          if (_.vg(k)) {
            if (k.Eg)
              b: {
                var p = k.Eg.responseText;
                if (_.ra.JSON)
                  try {
                    var t = _.ra.JSON.parse(p);
                    break b;
                  } catch (u) {}
                t = xta(p);
              }
            else t = void 0;
            t = new uua(t);
            [p] = _.Ur(t.Gg, 1, _.px);
            a.Kj = _.Zq(t.Gg, 2);
            p && p.Mh().length ? (a.Eg = p) : (console.error(h), (a.Eg = null));
          } else console.error(h), (a.Eg = null), (a.Kj = null);
          m();
        });
        k.send(g);
      });
    },
    wua = function (a) {
      a.ph.ip((b) => {
        b(null);
      });
    },
    xua = function (a, b) {
      return (a.get("featureRects") || []).some((c) => c.contains(b));
    },
    pB = function (a, b, c) {
      function d() {
        var k = a.__gm,
          m = k.get("baseMapType");
        m &&
          !m.Op &&
          (a.getTilt() !== 0 && a.setTilt(0),
          a.getHeading() !== 0 && a.setHeading(0));
        var p = pB.WI(a.getDiv());
        p.width -= e;
        p.width = Math.max(1, p.width);
        p.height -= f;
        p.height = Math.max(1, p.height);
        m = a.getProjection();
        const t = pB.XI(m, b, p, a.get("isFractionalZoomEnabled"));
        var u = pB.fJ(b, m);
        if (_.yj(t) && u) {
          p = _.vm(t, a.getTilt() || 0, a.getHeading() || 0);
          var w = _.xm(p, { hh: g / 2, kh: h / 2 });
          u = _.dr(_.ts(u, m), w);
          (u = _.im(u, m)) ||
            console.warn("Unable to calculate new map center.");
          w = a.getCenter();
          k.get("isInitialized") && u && w && t && t === a.getZoom()
            ? ((k = _.gr(p, _.ts(w, m))),
              (m = _.gr(p, _.ts(u, m))),
              a.panBy(m.hh - k.hh, m.kh - k.kh))
            : (a.setCenter(u), a.setZoom(t));
        }
      }
      let e = 80,
        f = 80,
        g = 0,
        h = 0;
      if (typeof c === "number") e = f = 2 * c - 0.01;
      else if (c) {
        const k = c.left || 0,
          m = c.right || 0,
          p = c.bottom || 0;
        c = c.top || 0;
        e = k + m - 0.01;
        f = c + p - 0.01;
        h = c - p;
        g = k - m;
      }
      a.getProjection() ? d() : _.Ck(a, "projection_changed", d);
    },
    zua = function (a, b, c, d, e, f) {
      new yua(a, b, c, d, e, f);
    },
    Aua = function (a) {
      const b = a.Eg.length;
      for (let c = 0; c < b; ++c) _.hu(a.Eg[c], qB(a, a.mapTypes.getAt(c)));
    },
    Dua = function (a, b) {
      const c = a.mapTypes.getAt(b);
      Bua(a, c);
      const d = a.Hg(a.Ig, b, a.ah, (e) => {
        const f = a.mapTypes.getAt(b);
        !e && f && _.Fk(f, "tilesloaded");
      });
      _.hu(d, qB(a, c));
      a.Eg.splice(b, 0, d);
      Cua(a, b);
    },
    qB = function (a, b) {
      return b ? (b instanceof _.Qn ? b.Eg(a.Fg.get()) : new _.Ay(b)) : null;
    },
    Bua = function (a, b) {
      if (b) {
        var c = "Oto",
          d = 150781;
        switch (b.mapTypeId) {
          case "roadmap":
            c = "Otm";
            d = 150777;
            break;
          case "satellite":
            c = "Otk";
            d = 150778;
            break;
          case "hybrid":
            c = "Oth";
            d = 150779;
            break;
          case "terrain":
            (c = "Otr"), (d = 150780);
        }
        b instanceof _.Rn && ((c = "Ots"), (d = 150782));
        a.Jg(c, d);
      }
    },
    Cua = function (a, b) {
      for (let c = 0; c < a.Eg.length; ++c) c !== b && a.Eg[c].setZIndex(c);
    },
    Eua = function (a, b, c, d) {
      return new _.xy((e, f) => {
        e = new _.Cy(a, b, c, _.nu(e), f, { wx: !0 });
        c.Ii(e);
        return e;
      }, d);
    },
    Fua = function (a, b, c, d, e) {
      return d
        ? new rB(a, () => e)
        : _.an[23]
        ? new rB(a, (f) => {
            const g = c.get("scale");
            return g === 2 || g === 4 ? b : f;
          })
        : a;
    },
    Gua = function (a) {
      switch (a.mapTypeId) {
        case "roadmap":
          return "Tm";
        case "satellite":
          return a.Op ? "Ta" : "Tk";
        case "hybrid":
          return a.Op ? "Ta" : "Th";
        case "terrain":
          return "Tr";
        default:
          return "To";
      }
    },
    Hua = function (a) {
      switch (a.mapTypeId) {
        case "roadmap":
          return 149879;
        case "satellite":
          return a.Op ? 149882 : 149880;
        case "hybrid":
          return a.Op ? 149882 : 149877;
        case "terrain":
          return 149881;
        default:
          return 149878;
      }
    },
    Iua = function (a) {
      if (_.Ds(a.getDiv()) && _.Ns()) {
        _.ql(a, "Tdev");
        _.M(a, 149876);
        var b = document.querySelector('meta[name="viewport"]');
        (b = b && b.content) &&
          b.match(/width=device-width/) &&
          (_.ql(a, "Mfp"), _.M(a, 149875));
      }
    },
    sB = function (a) {
      let b = null,
        c = null;
      switch (a) {
        case 0:
          c = 165752;
          b = "Pmmi";
          break;
        case 1:
          c = 165753;
          b = "Zmmi";
          break;
        case 2:
          c = 165754;
          b = "Tmmi";
          break;
        case 3:
          c = 165755;
          b = "Rmmi";
          break;
        case 4:
          sB(0);
          c = 165753;
          b = "Zmmi";
          break;
        case 5:
          sB(2), (c = 165755), (b = "Rmmi");
      }
      c && b && (_.M(window, c), _.ql(window, b));
    },
    tB = function (a, b, c) {
      a.map.__gm.dh(new _.Apa(b, c));
    },
    Jua = async function (a) {
      const b = a.map.__gm;
      var c = b.get("blockingLayerCount") || 0;
      b.set("blockingLayerCount", c + 1);
      await vua(a.Eg, a.mapId);
      c = a.Eg.Eg;
      const d = a.Eg.Kj;
      c ? tB(a, c, d) : tB(a, null, null);
      await b.Lg;
      a = b.get("blockingLayerCount") || 0;
      b.set("blockingLayerCount", a - 1);
    },
    Kua = function () {
      let a = null,
        b = null,
        c = !1;
      return (d, e, f) => {
        if (f) return null;
        if (b === d && c === e) return a;
        b = d;
        c = e;
        a = null;
        d instanceof _.Qn ? (a = d.Eg(e)) : d && (a = new _.Ay(d));
        return a;
      };
    },
    Mua = function (a, b) {
      const c = a.__gm;
      b = new Lua(a.mapTypes, c.gk, b, c.Fp, a);
      b.bindTo("heading", a);
      b.bindTo("mapTypeId", a);
      _.an[23] && b.bindTo("scale", a);
      b.bindTo("apistyle", c);
      b.bindTo("authUser", c);
      b.bindTo("tilt", c);
      b.bindTo("blockingLayerCount", c);
      return b;
    },
    Nua = function (a, b) {
      if ((a.Ig = b))
        a.Lg && a.set("heading", a.Lg), (b = a.get("mapTypeId")), a.Fg(b);
    },
    Oua = function (a) {
      return a >= 15.5
        ? 67.5
        : a > 14
        ? 45 + ((a - 14) * 22.5) / 1.5
        : a > 10
        ? 30 + ((a - 10) * 15) / 4
        : 30;
    },
    uB = function (a) {
      if (a.get("mapTypeId")) {
        var b = a.set;
        {
          var c = a.get("zoom") || 0;
          const f = a.get("desiredTilt");
          if (a.Eg) {
            var d = f || 0;
            var e = Oua(c);
            d = d > e ? e : d;
          } else
            (d = Pua(a)),
              d == null
                ? (d = null)
                : ((e = _.yj(f) && f > 22.5),
                  (c = !_.yj(f) && c >= 18),
                  (d = d && (e || c) ? 45 : 0));
        }
        b.call(a, "actualTilt", d);
        a.set("aerialAvailableAtZoom", Pua(a));
      }
    },
    Qua = function (a, b) {
      (a.Eg = b) && uB(a);
    },
    Pua = function (a) {
      const b = a.get("mapTypeId"),
        c = a.get("zoom");
      return (
        !a.Eg &&
        (b == "satellite" || b == "hybrid") &&
        c >= 12 &&
        a.get("aerial")
      );
    },
    Rua = function (a, b, c) {
      function d(m) {
        _.ql(b, m.dn);
        m.Xt && _.M(b, m.Xt);
      }
      if (!a.isEmpty()) {
        var e = Gta(a),
          f = Hta(a);
        e
          ? d({ dn: "MIdLs", Xt: 186363 })
          : f && d({ dn: "MIdRs", Xt: 149835 });
        var g = _.jla(a, d),
          h = _.pla(a);
        if ((a = a.Tk())) c.Pr.style.backgroundColor = a;
        var k = h;
        h && h.stylers && (k = { ...h, stylers: [] });
        (e || f || g.length || h) &&
          _.Dk(b, "maptypeid_changed", () => {
            let m = c.gk.get();
            if (b.get("mapTypeId") === "roadmap") {
              c.set("apistyle", f || null);
              c.set("hasCustomStyles", e || !!f);
              g.forEach((t) => {
                m = _.ir(m, t);
              });
              c.gk.set(m);
              let p = h;
              e && (c.set("isLegendary", !0), (p = { ...h, stylers: null }));
              c.Fp.set(p);
            } else
              c.set("apistyle", null),
                c.set("hasCustomStyles", !1),
                g.forEach((p) => {
                  m = m.ao(p);
                }),
                c.gk.set(m),
                c.Fp.set(k);
          });
      }
    },
    Sua = function (a) {
      if (!a.Hg) {
        a.Hg = !0;
        var b = () => {
          a.ah.Px() ? _.lu(b) : ((a.Hg = !1), _.Fk(a.map, "idle"));
        };
        _.lu(b);
      }
    },
    vB = function (a) {
      if (!a.Jg) {
        a.Fg();
        var b = a.ah.zk(),
          c = a.map.getTilt() || 0,
          d = !b || b.tilt !== c,
          e = a.map.getHeading() || 0,
          f = !b || b.heading !== e;
        if (a.Ig ? !a.Eg : !a.Eg || d || f) {
          a.Jg = !0;
          try {
            const k = a.map.getProjection(),
              m = a.map.getCenter(),
              p = a.map.getZoom();
            a.map.get("isFractionalZoomEnabled") ||
              Math.round(p) === p ||
              typeof p !== "number" ||
              (_.ql(a.map, "BSzwf"), _.M(a.map, 149837));
            if (k && m && p != null && !isNaN(m.lat()) && !isNaN(m.lng())) {
              var g = _.ts(m, k),
                h = !b || b.zoom !== p || d || f;
              a.ah.ak({ center: g, zoom: p, tilt: c, heading: e }, a.Kg && h);
            }
          } finally {
            a.Jg = !1;
          }
        }
      }
    },
    Vua = function (a) {
      if (!a) return "";
      var b = [];
      for (const g of a) {
        var c = g.featureType,
          d = g.elementType,
          e = g.stylers,
          f = [];
        const h = Xta(c);
        h && f.push(`s.t:${h}`);
        c != null &&
          h == null &&
          _.Oj(_.Nj(`invalid style feature type: ${c}`, null));
        c = d && Tua[d.toLowerCase()];
        (c = c != null ? c : null) && f.push(`s.e:${c}`);
        d != null &&
          c == null &&
          _.Oj(_.Nj(`invalid style element type: ${d}`, null));
        if (e)
          for (const k of e) {
            a: {
              d = k;
              for (const m of Object.keys(d))
                if (
                  ((e = d[m]),
                  (c = (m && Uua[m.toLowerCase()]) || null) &&
                    (_.yj(e) || _.Cj(e) || _.Dj(e)) &&
                    e)
                ) {
                  d = `p.${c}:${e}`;
                  break a;
                }
              d = void 0;
            }
            d && f.push(d);
          }
        (f = f.join("|")) && b.push(f);
      }
      b = b.join(",");
      return b.length > (_.an[131] ? 12288 : 1e3)
        ? (_.Gj("Custom style string for " + a.toString()), "")
        : b;
    },
    Wua = function (a, b) {
      const c = [];
      !a.get("isLegendary") &&
        _.an[13] &&
        c.push({
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        });
      Rta(c, b);
      b = a.get("uDS")
        ? a.get("mapTypeId") === "hybrid"
          ? ""
          : "p.s:-60|p.l:-60"
        : Vua(c);
      b !== a.Eg && ((a.Eg = b), a.notify("apistyle"));
      if (c.length && (!b || b.length > 1e3)) {
        const d = b ? b.length : 0;
        _.Lm(() => {
          _.Fk(a, "styleerror", d);
        });
      }
    },
    Zua = async function (a, b) {
      b = Xua(b.ui());
      a = a.Eg;
      a = await a.Eg.Eg(
        a.Fg +
          "/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo",
        b,
        {},
        _.Ona
      );
      return _.Rr(a.ui(), Yua);
    },
    $ua = function (a) {
      const b = _.J(a.Gg, 1, _.Vs);
      a = _.J(a.Gg, 2, _.Vs);
      return _.jl(_.Ps(b.Gg, 1), _.Ps(b.Gg, 2), _.Ps(a.Gg, 1), _.Ps(a.Gg, 2));
    },
    gva = function (a) {
      const b = a.get("bounds"),
        c = a.map.__gm.Qg;
      if (!b || _.ar(b).equals(_.$q(b))) _.Hm(c, "MAP_INITIALIZATION");
      else {
        (b.ei.hi !== b.ei.lo && b.Gh.hi !== b.Gh.lo) ||
          _.Hm(c, "MAP_INITIALIZATION");
        a.Lg.set("latLng", b && b.getCenter());
        for (var d in a.Eg) a.Eg[d].set("viewport", b);
        d = a.Hg;
        var e = (a.Hg = ava(a));
        if (!e) a.set("attributionText", "");
        else if (e !== d || bva(a)) {
          for (var f in a.Eg) a.Eg[f].set("featureRects", void 0);
          var g = ++a.Mg,
            h = a.getMapTypeId();
          f = cva(a);
          d = dva(a);
          if (_.yj(f) && _.yj(d)) {
            var k = eva(a, b, f, d);
            Zua(a.Rg, k)
              .then((m) => {
                _.H(m.Gg, 8) === 1 && m.getStatus() !== 0 && _.Gm(c, 14);
                try {
                  fva(a, g, h, m);
                } catch (p) {
                  _.H(m.Gg, 8) === 1 && _.Gm(c, 13);
                }
              })
              .catch(() => {
                _.H(k.Gg, 12) === 1 && _.Gm(c, 9);
              });
          }
        }
      }
    },
    hva = function (a) {
      let b;
      const c = a.getMapTypeId();
      if (c === "hybrid" || c === "satellite") b = a.Pg;
      a.Lg.set("maxZoomRects", b);
    },
    dva = function (a) {
      a = a.get("zoom");
      return _.yj(a) ? Math.round(a) : null;
    },
    ava = function (a) {
      var b = dva(a);
      const c = a.get("bounds"),
        d = a.getMapTypeId();
      if (!_.yj(b) || !c || !d) return null;
      b = d + "|" + b;
      iva(a) && (b += "|" + (a.get("heading") || 0));
      return b;
    },
    bva = function (a) {
      const b = a.get("bounds");
      return b ? (a.Fg ? !a.Fg.containsBounds(b) : !0) : !1;
    },
    cva = function (a) {
      a = a.get("baseMapType");
      if (!a) return null;
      switch (a.mapTypeId) {
        case "roadmap":
          return 0;
        case "terrain":
          return 4;
        case "hybrid":
          return 3;
        case "satellite":
          return a.Op ? 5 : 2;
        default:
          return null;
      }
    },
    eva = function (a, b, c, d) {
      const e = new jva();
      if (a.map.get("mapId")) {
        var f = a.map.get("mapId");
        _.Yg(e.Gg, 16, f);
      }
      _.Yg(e.Gg, 4, a.language);
      e.setZoom(d);
      _.Gi(e.Gg, 5, c);
      c = iva(a);
      _.Di(e.Gg, 7, c);
      c = (c && a.get("heading")) || 0;
      _.Gi(e.Gg, 8, c);
      _.an[43] ? _.Gi(e.Gg, 11, 78) : _.an[35] && _.Gi(e.Gg, 11, 289);
      (c = a.get("baseMapType")) && c.Zt && a.Ig && _.Yg(e.Gg, 6, c.Zt);
      a.Fg = Sta(b, 1, 10);
      b = a.Fg;
      c = _.Ii(e.Gg, 1, _.Cx);
      d = _.Ws(c);
      _.Ts(d, b.getSouthWest().lat());
      _.Us(d, b.getSouthWest().lng());
      c = _.Xs(c);
      _.Ts(c, b.getNorthEast().lat());
      _.Us(c, b.getNorthEast().lng());
      a.Kg
        ? ((a.Kg = !1),
          _.Gi(e.Gg, 12, 1),
          e.setUrl(a.Qg.substring(0, 1024)),
          _.Di(e.Gg, 14, !0),
          a.map.Eg || ((a = Dta(_.Xja(), a.map).toString()), _.Yg(e.Gg, 17, a)))
        : _.Gi(e.Gg, 12, 2);
      return e;
    },
    fva = function (a, b, c, d) {
      if ((_.H(d.Gg, 8) !== 1 || kva(a, d)) && b === a.Mg) {
        if (a.getMapTypeId() === c)
          try {
            var e = decodeURIComponent(d.getAttribution());
            a.set("attributionText", e);
          } catch (h) {
            _.M(window, 154953), _.ql(window, "Ape");
          }
        a.Ig && lva(a.Ig, _.J(d.Gg, 4, mva));
        var f = {};
        for (let h = 0, k = _.vi(d.Gg, 2); h < k; ++h)
          (c = _.Tq(d.Gg, 2, nva, h)),
            (b = c.getFeatureName()),
            (c = _.J(c.Gg, 2, _.Cx)),
            (c = $ua(c)),
            (f[b] = f[b] || []),
            f[b].push(c);
        _.xf(a.Eg, (h, k) => {
          h.set("featureRects", f[k] || []);
        });
        b = _.vi(d.Gg, 3);
        c = Array(b);
        a.Pg = c;
        for (e = 0; e < b; ++e) {
          var g = _.Tq(d.Gg, 3, ova, e);
          const h = _.Ti(g.Gg, 1);
          g = $ua(_.J(g.Gg, 2, _.Cx));
          c[e] = { bounds: g, maxZoom: h };
        }
        hva(a);
      }
    },
    iva = function (a) {
      return a.get("tilt") == 45 && !a.Jg;
    },
    kva = function (a, b) {
      _.qs = !0;
      const c = _.J(b.Gg, 9, _.jn).getStatus();
      if (c !== 1 && c !== 2)
        return (
          _.Sw(),
          (b = _.Y(_.J(b.Gg, 9, _.jn).Gg, 3)
            ? _.L(_.J(b.Gg, 9, _.jn).Gg, 3)
            : _.Qw()),
          _.Gj(b),
          _.ra.gm_authFailure && _.ra.gm_authFailure(),
          _.ss(),
          _.Hm(a.map.__gm.Qg, "MAP_INITIALIZATION"),
          !1
        );
      c === 2 &&
        (a.Ng(), (a = _.L(_.J(b.Gg, 9, _.jn).Gg, 3) || _.Qw()), _.Gj(a));
      _.ss();
      return !0;
    },
    wB = function (a, b = -Infinity, c = Infinity) {
      return b > c ? (b + c) / 2 : Math.max(Math.min(a, c), b);
    },
    zB = function (a, b) {
      if (!a.Hg || a.Hg === b) {
        var c = b === a.Fg;
        const d = b.sp();
        d && a.Eg.has(d)
          ? xB(a, b, c)
          : (yB(a, b, c), (b = a.Eg.values().next().value), xB(a, b, c));
      }
    },
    AB = function (a, b) {
      if (b.targetElement) {
        b.targetElement.removeEventListener("keydown", a.Qg);
        b.targetElement.removeEventListener("focusin", a.Ng);
        b.targetElement.removeEventListener("focusout", a.Pg);
        for (const c of a.Lg) c.remove();
        a.Lg = [];
        b.sp().setAttribute("tabindex", "-1");
        a.ty(b);
        a.Eg.delete(b.targetElement);
      }
    },
    xB = function (a, b, c = !1) {
      if (b && b.targetElement) {
        var d = b.sp();
        d.setAttribute("tabindex", "0");
        var e =
          document.activeElement && document.activeElement !== document.body;
        c && !e && d.focus({ preventScroll: !0 });
        a.Hg = b;
      }
    },
    yB = function (a, b, c = !1) {
      b &&
        b.targetElement &&
        ((b = b.sp()),
        b.setAttribute("tabindex", "-1"),
        c && b.blur(),
        (a.Hg = null),
        (a.Fg = null));
    },
    BB = function (a) {
      this.Eg = a;
    },
    pva = function (a, b) {
      const c = a.__gm;
      var d = b.bv();
      b = b.Fg();
      const e = b.map((g) => _.L(g.Gg, 2));
      for (var f of c.Ig.keys()) c.Ig.get(f).isEnabled = d.includes(f);
      for (const [g, h] of c.Mg) {
        const k = g;
        f = h;
        e.includes(k)
          ? ((f.isEnabled = !0),
            (f.st = _.L(b.find((m) => _.L(m.Gg, 2) === k).Gg, 1)))
          : (f.isEnabled = !1);
      }
      for (const g of d)
        c.Ig.has(g) || c.Ig.set(g, new _.nq({ map: a, featureType: g }));
      for (const g of b)
        (d = _.L(g.Gg, 2)),
          c.Mg.has(d) ||
            c.Mg.set(
              d,
              new _.nq({
                map: a,
                datasetId: d,
                st: _.L(g.Gg, 1),
                featureType: "DATASET",
              })
            );
      c.Tg = !0;
    },
    qva = function (a, b) {
      function c(d) {
        const e = b.getAt(d);
        if (e instanceof _.Rn) {
          d = e.get("styles");
          const f = Vua(d);
          e.Eg = (g) => {
            const h = g ? (e.Fg === "hybrid" ? "" : "p.s:-60|p.l:-60") : f;
            var k = mua(a, e.Fg, !1);
            return new CB(k, h, null, null, null, null).Eg(g);
          };
        }
      }
      _.tk(b, "insert_at", c);
      _.tk(b, "set_at", c);
      b.forEach((d, e) => {
        c(e);
      });
    },
    lva = function (a, b) {
      if (_.vi(b.Gg, 1)) {
        a.Fg = {};
        a.Eg = {};
        for (let e = 0; e < _.vi(b.Gg, 1); ++e) {
          var c = _.Tq(b.Gg, 1, rva, e),
            d = _.J(c.Gg, 2, _.uw);
          const f = d.getZoom(),
            g = _.H(d.Gg, 2);
          d = _.H(d.Gg, 3);
          c = c.Zl();
          const h = a.Fg;
          h[f] = h[f] || {};
          h[f][g] = h[f][g] || {};
          h[f][g][d] = c;
          a.Eg[f] = Math.max(a.Eg[f] || 0, c);
        }
        wua(a.Hg);
      }
    },
    tva = function (a, b) {
      if (!_.Nq(b)) {
        var c = a.enabled();
        if (c !== !1) {
          var d =
            c == null && !b.ctrlKey && !b.altKey && !b.metaKey && !b.buttons;
          c = a.Kg(d ? 1 : 4);
          if (
            c !== "none" &&
            (c !== "cooperative" || !d) &&
            (_.pk(b), (d = a.ah.zk()))
          ) {
            var e =
                (b.deltaY || b.wheelDelta || 0) * (b.deltaMode === 1 ? 16 : 1),
              f = a.Jg();
            !f && ((e > 0 && e < a.Fg) || (e < 0 && e > a.Fg))
              ? (a.Fg = e)
              : ((a.Fg = e),
                (a.Eg += e),
                a.Ig.qr(),
                (!f && Math.abs(a.Eg) < 16) ||
                  (f
                    ? (Math.abs(a.Eg) > 16 &&
                        (a.Eg = _.Zr(a.Eg < 0 ? -16 : 16, a.Eg, 0.01)),
                      (e = -(a.Eg / 16) / 5))
                    : (e = -Math.sign(a.Eg)),
                  (a.Eg = 0),
                  (b = c === "zoomaroundcenter" ? d.center : a.ah.Fl(b)),
                  f
                    ? a.ah.mG(e, b)
                    : ((c = Math.round(d.zoom + e)),
                      a.Hg !== c &&
                        (sva(a.ah, c, b, () => {
                          a.Hg = null;
                        }),
                        (a.Hg = c))),
                  a.Jm(1)));
          }
        }
      }
    },
    uva = function (a, b) {
      return { yi: a.ah.Fl(b.yi), radius: b.radius, zoom: a.ah.zk().zoom };
    },
    zva = function (
      a,
      b,
      c,
      d = () => "greedy",
      {
        vI: e = () => !0,
        wO: f = !1,
        CL: g = () => null,
        hC: h = !1,
        Jm: k = () => {},
      } = {}
    ) {
      h = {
        hC: h,
        Ll({ coords: u, event: w, Hq: x }) {
          if (x) {
            x = t;
            var z = w.button === 3;
            if (x.enabled() && ((w = x.Fg(4)), w !== "none")) {
              var B = x.ah.zk();
              B &&
                ((z = B.zoom + (z ? -1 : 1)),
                x.Eg() || (z = Math.round(z)),
                (u = w === "zoomaroundcenter" ? x.ah.zk().center : x.ah.Fl(u)),
                sva(x.ah, z, u),
                x.Jm(1));
            }
          }
        },
      };
      const m = _.fu(b.Pn, h),
        p = () => (a.Sw !== void 0 ? a.Sw() : !1);
      new vva(b.Pn, a, d, g, p, k);
      const t = new wva(a, d, e, p, k);
      h.sq = new xva(a, d, m, c, k);
      f && (h.wI = new yva(a, m, c, k));
      return m;
    },
    DB = function (a, b, c) {
      const d = Math.cos((-b * Math.PI) / 180);
      b = Math.sin((-b * Math.PI) / 180);
      c = _.dr(c, a);
      return new _.wm(c.Eg * d - c.Fg * b + a.Eg, c.Eg * b + c.Fg * d + a.Fg);
    },
    EB = function (a, b) {
      const c = a.ah.zk();
      return {
        yi: b.yi,
        gx: a.ah.Fl(b.yi),
        radius: b.radius,
        Gm: b.Gm,
        vo: b.vo,
        Jr: b.Jr,
        zoom: c.zoom,
        heading: c.heading,
        tilt: c.tilt,
        center: c.center,
      };
    },
    Ava = function (a, b) {
      return { yi: b.yi, TK: a.ah.zk().tilt, SK: a.ah.zk().heading };
    },
    Bva = function ({ width: a, height: b }) {
      return { width: a || 1, height: b || 1 };
    },
    Cva = function (a, b = () => {}) {
      return {
        Xj: { Zh: a, ji: () => a, keyFrames: [], bj: 0 },
        ji: () => ({ camera: a, done: 0 }),
        Ml: b,
      };
    },
    Dva = function (a) {
      var b = Date.now();
      return a.instructions ? a.instructions.ji(b).camera : null;
    },
    Eva = function (a) {
      return a.instructions ? a.instructions.type : void 0;
    },
    FB = function (a) {
      a.Kg ||
        ((a.Kg = !0),
        a.requestAnimationFrame((b) => {
          a.Kg = !1;
          if (a.instructions) {
            const d = a.instructions;
            var c = d.ji(b);
            const e = c.done;
            c = c.camera;
            e === 0 && ((a.instructions = null), d.Ml && d.Ml());
            c ? (a.camera = c = a.Eg.Vt(c)) : (c = a.camera);
            c &&
              (e === 0 && a.Ig
                ? Fva(a.th, c, b, !1)
                : (a.th.Wh(c, b, d.Xj), (e !== 1 && e !== 0) || FB(a)));
            c && !d.Xj && a.Hg(c);
          } else a.camera && Fva(a.th, a.camera, b, !0);
          a.Ig = !1;
        }));
    },
    Fva = function (a, b, c, d) {
      var e = b.center;
      const f = b.heading,
        g = b.tilt,
        h = _.vm(b.zoom, g, f, a.Fg);
      a.Eg = { center: e, scale: h };
      b = a.getBounds(b);
      e = a.origin = Ata(h, e);
      a.offset = { hh: 0, kh: 0 };
      var k = a.Kg;
      k &&
        (a.Hg.style[k] = a.Ig.style[k] =
          `translate(${a.offset.hh}px,${a.offset.kh}px)`);
      a.options.Zx || (a.Hg.style.willChange = a.Ig.style.willChange = "");
      k = a.getBoundingClientRect(!0);
      for (const m of Object.values(a.th))
        m.Wh(
          b,
          a.origin,
          h,
          f,
          g,
          e,
          { hh: k.width, kh: k.height },
          { KJ: d, yp: !0, timestamp: c }
        );
    },
    GB = function (a, b, c) {
      return {
        center: _.cr(
          c,
          _.xm(
            _.vm(b, a.tilt, a.heading),
            _.gr(_.vm(a.zoom, a.tilt, a.heading), _.dr(a.center, c))
          )
        ),
        zoom: b,
        heading: a.heading,
        tilt: a.tilt,
      };
    },
    Gva = function (a, b, c) {
      return a.Eg.camera.heading !== b.heading && c
        ? 3
        : a.Ig
        ? a.Eg.camera.zoom !== b.zoom && c
          ? 2
          : 1
        : 0;
    },
    Lva = function (a, b, c = {}) {
      const d = c.AH !== !1,
        e = !!c.Zx;
      return new Hva(
        (f) => new Iva(a, f, { Zx: e }),
        (f, g, h, k) =>
          new Jva(new Kva(f, g, h), { Ml: k, maxDistance: d ? 1.5 : 0 }),
        b
      );
    },
    sva = function (a, b, c, d = () => {}) {
      const e = a.controller.ov(),
        f = a.zk();
      b = Math.min(b, e.max);
      b = Math.max(b, e.min);
      f &&
        ((b = GB(f, b, c)),
        (d = a.Hg(a.Eg.getBoundingClientRect(!0), f, b, d)),
        a.controller.Fg(d));
    },
    HB = function (a, b) {
      const c = a.zk();
      if (!c) return null;
      b = new Mva(
        c,
        b,
        () => {
          FB(a.controller);
        },
        (d) => {
          a.controller.Fg(d);
        },
        a.Sw !== void 0 ? a.Sw() : !1
      );
      a.controller.Fg(b);
      return b;
    },
    Nva = function (a, b) {
      a.Sw = b;
    },
    Ova = function (a, b, c, d) {
      _.tj(_.Vo, (e, f) => {
        c.set(f, mua(a, f, b, { AI: d }));
      });
    },
    Pva = function (a, b) {
      _.Dk(b, "basemaptype_changed", () => {
        var d = b.get("baseMapType");
        a && d && (_.ql(a, Gua(d)), _.M(a, Hua(d)));
      });
      const c = a.__gm;
      _.Dk(c, "hascustomstyles_changed", () => {
        c.get("hasCustomStyles") && (_.ql(a, "Ts"), _.M(a, 149885));
      });
    },
    Tva = function () {
      const a = new Qva(Rva()),
        b = {};
      b.obliques = new Qva(Sva());
      b.report_map_issue = a;
      return b;
    },
    Uva = function (a) {
      const b = a.get("embedReportOnceLog");
      if (b) {
        const c = function () {
          for (; b.getLength(); ) {
            const d = b.pop();
            typeof d === "string"
              ? _.ql(a, d)
              : typeof d === "number" && _.M(a, d);
          }
        };
        _.tk(b, "insert_at", c);
        c();
      } else
        _.Ck(a, "embedreportoncelog_changed", function () {
          Uva(a);
        });
    },
    Vva = function (a) {
      const b = a.get("embedFeatureLog");
      if (b) {
        const c = function () {
          for (; b.getLength(); ) {
            const d = b.pop();
            _.ps(a, d);
            let e;
            switch (d) {
              case "Ed":
                e = 161519;
                break;
              case "Eo":
                e = 161520;
                break;
              case "El":
                e = 161517;
                break;
              case "Er":
                e = 161518;
                break;
              case "Ep":
                e = 161516;
                break;
              case "Ee":
                e = 161513;
                break;
              case "En":
                e = 161514;
                break;
              case "Eq":
                e = 161515;
            }
            e && _.as(e);
          }
        };
        _.tk(b, "insert_at", c);
        c();
      } else
        _.Ck(a, "embedfeaturelog_changed", function () {
          Vva(a);
        });
    },
    Wva = function (a, b) {
      a.get("tiltInteractionEnabled") != null
        ? (b = a.get("tiltInteractionEnabled"))
        : (b.Eg
            ? ((a = _.Y(b.Eg.Gg, 10) ? _.Ci(b.Eg.Gg, 10) : null),
              !a && _.Wq(b.Eg) && (b = kB(b)) && (a = _.Ci(b.Gg, 3)),
              (b = a))
            : (b = null),
          (b = b ?? !1));
      return b;
    },
    Xva = function (a, b) {
      a.get("headingInteractionEnabled") != null
        ? (b = a.get("headingInteractionEnabled"))
        : (b.Eg
            ? ((a = _.Y(b.Eg.Gg, 9) ? _.Ci(b.Eg.Gg, 9) : null),
              !a && _.Wq(b.Eg) && (b = kB(b)) && (a = _.Ci(b.Gg, 2)),
              (b = a))
            : (b = null),
          (b = b ?? !1));
      return b;
    },
    qwa = function (a, b, c, d, e, f) {
      const g = _.Ni.Eg().Eg(),
        h = a.__gm,
        k = h.Qg;
      h.set("mapHasBeenAbleToBeDrawn", !1);
      e = new Promise((Ga) => {
        const pb = _.Dk(a, "bounds_changed", async () => {
          const qb = a.get("bounds");
          qb &&
            !_.ar(qb).equals(_.$q(qb)) &&
            (pb.remove(), await 0, h.set("mapHasBeenAbleToBeDrawn", !0), Ga());
        });
      });
      var m = a.getDiv();
      if (m)
        if (Array.from(new Set([42]))[0] !== 42) _.Rw(m);
        else {
          _.Ak(
            c,
            "mousedown",
            function () {
              _.ql(a, "Mi");
              _.M(a, 149886);
            },
            !0
          );
          var p = !1;
          if (
            h.colorScheme === "DARK" ||
            (h.colorScheme === "FOLLOW_SYSTEM" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          )
            p = !0;
          h.set("darkThemeEnabled", p);
          var t = new _.Wpa({
              Zg: c,
              BD: m,
              rD: !0,
              uE: p,
              backgroundColor: b.backgroundColor,
              YB: !0,
              OJ: _.kr(a),
              cG: !a.Eg,
            }),
            u = t.Vn,
            w = new _.Ik(),
            x = _.Qba("DIV");
          x.id = _.eo();
          x.style.display = "none";
          t.Tj.appendChild(x);
          t.Tj.setAttribute("aria-describedby", x.id);
          var z = document.createElement("span");
          z.textContent =
            "\u0110\u1ec3 di chuy\u1ec3n b\u1ea3n \u0111\u1ed3 b\u1eb1ng c\u1eed ch\u1ec9 ch\u1ea1m, h\u00e3y nh\u1ea5n \u0111\u00fap v\u00e0 gi\u1eef ng\u00f3n tay c\u1ee7a b\u1ea1n tr\u00ean b\u1ea3n \u0111\u1ed3, sau \u0111\u00f3 k\u00e9o b\u1ea3n \u0111\u1ed3.";
          _.Dk(a, "gesturehandling_changed", () => {
            _.Ns() && a.get("gestureHandling") !== "none"
              ? x.prepend(z)
              : z.remove();
          });
          _.Js(t.Eg, 0);
          h.set("panes", t.Nl);
          h.set("innerContainer", t.Pn);
          h.set("interactiveContainer", t.Tj);
          h.set("outerContainer", t.Eg);
          h.set("configVersion", "");
          h.Sg = new Yva(c);
          h.Sg.Rg = t.Nl.overlayMouseTarget;
          h.sh = function () {
            (Zva || (Zva = new $va())).show(a);
          };
          a.addListener("keyboardshortcuts_changed", () => {
            const Ga = _.kr(a);
            t.Tj.tabIndex = Ga ? 0 : -1;
          });
          var B = new awa(),
            D = Tva(),
            F,
            I,
            T = _.H(_.Yq().Gg, 15);
          m = zta();
          var V = m > 0 ? m : T,
            qa = a.get("noPerTile") && _.an[15];
          h.set("roadmapEpoch", V);
          e.then(() => {
            a.get("mapId") &&
              (_.ql(a, "MId"),
              _.M(a, 150505),
              a.get("mapId") === _.pga && (_.ql(a, "MDId"), _.M(a, 168942)));
          });
          var C = () => {
            _.kj("util").then((Ga) => {
              const pb = new _.jn();
              _.Gi(pb.Gg, 1, 2);
              Ga.Ro.Ig(pb);
            });
          };
          (function () {
            const Ga = new bwa();
            F = Fua(Ga, T, a, qa, V);
            I = new cwa(g, B, D, qa ? null : Ga, _.Ms(), C, a);
          })();
          I.bindTo("tilt", a);
          I.bindTo("heading", a);
          I.bindTo("bounds", a);
          I.bindTo("zoom", a);
          m = new dwa(
            _.Ii(_.Ni.Gg, 2, _.dx),
            _.Yq(),
            _.Ni.Eg(),
            a,
            F,
            D.obliques,
            h.Eg
          );
          Ova(m, p, a.mapTypes, b.enableSplitTiles);
          h.set("eventCapturer", t.Iq);
          h.set("messageOverlay", t.Fg);
          var Aa = _.Gl(!1),
            Ha = Mua(a, Aa);
          I.bindTo("baseMapType", Ha);
          b = h.Ar = Ha.Kg;
          var Ca = rua({
              draggable: _.jw(a, "draggable"),
              kI: _.jw(a, "gestureHandling"),
              Dk: h.Jl,
            }),
            wb = !_.an[20] || a.get("animatedZoom") != 0,
            fb = null,
            ib = !1,
            lb = null,
            dc = new ewa(a, (Ga) => Lva(t, Ga, { AH: wb, Zx: !0 })),
            Sb = dc.ah,
            Ff = () => {
              ib ||
                ((ib = !0),
                fb && fb(),
                d && d.Fg && _.mn(d.Fg),
                lb && (Sb.ql(lb), (lb = null)),
                k.wm(122447, 0));
            },
            uc = (Ga) => {
              a.get("tilesloading") != Ga && a.set("tilesloading", Ga);
              Ga || (Ff(), _.Fk(a, "tilesloaded"));
            },
            Me = (Ga) => {
              uc(!Ga.pz);
              Ga.pz && k.wm(211242, 0);
              Ga.UD && k.wm(211243, 0);
              Ga.UC && k.wm(213337, 0);
              Ga.TD && k.wm(213338, 0);
            },
            ud = new _.xy(
              (Ga, pb) => {
                Ga = new _.Cy(u, 0, Sb, _.nu(Ga), pb, { wx: !0 });
                Sb.Ii(Ga);
                return Ga;
              },
              (Ga) => {
                uc(Ga);
              }
            ),
            Dd = _.ex();
          e.then(() => {
            new fwa(a, a.get("mapId"), Dd);
          });
          h.Lg.then((Ga) => {
            Rua(Ga, a, h);
          });
          Promise.all([h.Lg, h.Eg.TA]).then(([Ga]) => {
            Ga.bv().length > 0 && h.Eg.Rn() && _.gma();
          });
          h.Lg.then((Ga) => {
            pva(a, Ga);
            _.gda(a, !0);
          });
          h.Lg.then((Ga) => {
            let pb = a.get("renderingType");
            pb === "VECTOR"
              ? _.M(a, 206144)
              : pb === "RASTER"
              ? _.M(a, 206145)
              : (pb = Lta(Ga) ? "VECTOR" : "RASTER");
            pb === "VECTOR"
              ? (_.ql(a, "Wma"),
                _.M(a, 150152),
                _.kj("webgl").then((qb) => {
                  let Xb,
                    Db = !1;
                  var Ab = Ga.isEmpty() ? _.Zq(_.Ni.Gg, 41) : Ga.Kj;
                  const Kc = _.pj(185393),
                    Ud = () => {
                      _.ql(a, "Wvtle");
                      _.M(a, 189527);
                    },
                    Qb = () => {
                      _.Hm(k, "VECTOR_MAP_INITIALIZATION");
                    };
                  let Bb = V;
                  yta() && ((Ab = null), (Bb = void 0));
                  try {
                    Xb = qb.Mg(
                      t.Pn,
                      Me,
                      Sb,
                      Ha.Hg,
                      Ga,
                      _.Ni.Eg(),
                      Ab,
                      _.fx(Dd, !0),
                      lB(_.J(Dd.Eg.Gg, 2, _.qx)),
                      a,
                      Bb,
                      Ud,
                      Qb
                    );
                  } catch (dd) {
                    let Nb = dd.cause;
                    dd instanceof _.Upa &&
                      (Nb = 1e3 + (_.yj(dd.cause) ? dd.cause : -1));
                    _.qj(Kc, Nb != null ? Nb : 2);
                    Db = !0;
                  } finally {
                    Db
                      ? (h.iw(!1),
                        _.Gj(
                          "Attempted to load a Vector Map, but failed. Falling back to Raster. Please see https://developers.google.com/maps/documentation/javascript/webgl/support for more info"
                        ))
                      : (_.qj(Kc, 0),
                        (0, _.Opa)() || _.M(a, 212143),
                        h.iw(!0),
                        (h.Yi = Xb),
                        h.set("configVersion", Xb.Ng()),
                        Sb.UB(Xb.Pg()));
                  }
                }))
              : h.iw(!1);
          });
          h.Hg.then((Ga) => {
            Ga
              ? (_.ql(a, "Wms"), _.M(a, 150937))
              : _.Hm(k, "VECTOR_MAP_INITIALIZATION");
            Ga && (dc.Ig = !0);
            I.Jg = Ga;
            Nua(Ha, Ga);
            if (Ga)
              _.br(Ha.Hg, (pb) => {
                pb ? ud.clear() : _.hu(ud, Ha.Kg.get());
              });
            else {
              let pb = null;
              _.br(Ha.Kg, (qb) => {
                pb != qb && ((pb = qb), _.hu(ud, qb));
              });
            }
          });
          h.set("cursor", a.get("draggableCursor"));
          new gwa(a, Sb, t, Ca);
          e = _.jw(a, "draggingCursor");
          m = _.jw(h, "cursor");
          var Ze = new hwa(h.get("messageOverlay")),
            Va = new _.Qy(t.Pn, e, m, Ca),
            xa = function (Ga) {
              const pb = Ca.get();
              Ze.Eg(pb == "cooperative" ? Ga : 4);
              return pb;
            },
            hb = zva(Sb, t, Va, xa, {
              hC: !0,
              vI: function () {
                return !a.get("disableDoubleClickZoom");
              },
              CL: function () {
                return a.get("scrollwheel");
              },
              Jm: sB,
            });
          _.br(Ca, (Ga) => {
            hb.Ds(Ga == "cooperative" || Ga == "none");
          });
          f({ map: a, ah: Sb, Ar: b, Nl: t.Nl });
          h.Hg.then((Ga) => {
            Ga ||
              _.kj("onion").then((pb) => {
                pb.Fg(a, F);
              });
          });
          _.an[35] && (Uva(a), Vva(a));
          var hd = new iwa();
          hd.bindTo("tilt", a);
          hd.bindTo("zoom", a);
          hd.bindTo("mapTypeId", a);
          hd.bindTo("aerial", D.obliques, "available");
          Promise.all([h.Hg, h.Lg]).then(([Ga, pb]) => {
            Qua(hd, Ga);
            a.get("isFractionalZoomEnabled") == null &&
              a.set("isFractionalZoomEnabled", Ga);
            Nva(Sb, () => a.get("isFractionalZoomEnabled"));
            const qb = () => {
              const Xb = Ga && Wva(a, pb),
                Db = Ga && Xva(a, pb);
              Ga ||
                (!a.get("tiltInteractionEnabled") &&
                  !a.get("headingInteractionEnabled")) ||
                _.nk(
                  "tiltInteractionEnabled and headingInteractionEnabled only have an effect on vector maps."
                );
              a.get("tiltInteractionEnabled") == null &&
                a.set("tiltInteractionEnabled", Xb);
              a.get("headingInteractionEnabled") == null &&
                a.set("headingInteractionEnabled", Db);
              Xb && (_.ql(a, "Wte"), _.M(a, 150939));
              Db && (_.ql(a, "Wre"), _.M(a, 150938));
              hb.wi.sq = new jwa(Sb, xa, hb, Xb, Db, Va, sB);
              Xb || Db
                ? (hb.wi.yF = new kwa(Sb, hb, Xb, Db, Va, sB))
                : (hb.wi.yF = void 0);
            };
            qb();
            a.addListener("tiltinteractionenabled_changed", qb);
            a.addListener("headinginteractionenabled_changed", qb);
          });
          h.bindTo("tilt", hd, "actualTilt");
          _.tk(I, "attributiontext_changed", () => {
            a.set("mapDataProviders", I.get("attributionText"));
          });
          var P = new lwa();
          _.kj("util").then((Ga) => {
            Ga.Ro.Eg(() => {
              Aa.set(!0);
              P.set("uDS", !0);
            });
          });
          P.bindTo("styles", a);
          P.bindTo("mapTypeId", Ha);
          P.bindTo("mapTypeStyles", Ha, "styles");
          h.bindTo("apistyle", P);
          h.bindTo("isLegendary", P);
          h.bindTo("hasCustomStyles", P);
          _.Ek(P, "styleerror", a);
          f = new mwa(h.gk);
          f.bindTo("tileMapType", Ha);
          h.bindTo("style", f);
          var na = new _.qy(a, Sb, function () {
              var Ga = h.set,
                pb;
              if (na.bounds && na.origin && na.scale && na.center && na.size) {
                if ((pb = na.scale.Eg)) {
                  var qb = pb.lm(
                    na.origin,
                    na.center,
                    _.hr(na.scale),
                    na.scale.tilt,
                    na.scale.heading,
                    na.size
                  );
                  pb = new _.wl(-qb[0], -qb[1]);
                  qb = new _.wl(na.size.hh - qb[0], na.size.kh - qb[1]);
                } else
                  (pb = _.gr(na.scale, _.dr(na.bounds.min, na.origin))),
                    (qb = _.gr(na.scale, _.dr(na.bounds.max, na.origin))),
                    (pb = new _.wl(pb.hh, pb.kh)),
                    (qb = new _.wl(qb.hh, qb.kh));
                pb = new _.om([pb, qb]);
              } else pb = null;
              Ga.call(h, "pixelBounds", pb);
            }),
            sa = na;
          Sb.Ii(na);
          h.set("projectionController", na);
          h.set("mouseEventTarget", {});
          new nwa(t.Pn).bindTo("title", h);
          d &&
            (_.br(d.Hg, function () {
              const Ga = d.Hg.get();
              lb ||
                !Ga ||
                ib ||
                ((lb = new _.Xpa(u, -1, Ga, Sb.Gj)),
                d.Fg && _.mn(d.Fg),
                Sb.Ii(lb));
            }),
            d.bindTo("tilt", h),
            d.bindTo("size", h));
          h.bindTo("zoom", a);
          h.bindTo("center", a);
          h.bindTo("size", w);
          h.bindTo("baseMapType", Ha);
          a.set("tosUrl", _.Xy);
          f = new BB({ projection: 1 });
          f.bindTo("immutable", h, "baseMapType");
          e = new _.$w({ projection: new _.bq() });
          e.bindTo("projection", f);
          a.bindTo("projection", e);
          Tta(a, h, Sb, dc);
          Uta(a, h, Sb);
          var Qc = new owa(a, Sb);
          _.tk(h, "movecamera", function (Ga) {
            Qc.moveCamera(Ga);
          });
          h.Hg.then((Ga) => {
            Qc.Hg = Ga ? 2 : 1;
            if (Qc.Fg !== void 0 || Qc.Eg !== void 0)
              Qc.moveCamera({ tilt: Qc.Fg, heading: Qc.Eg }),
                (Qc.Fg = void 0),
                (Qc.Eg = void 0);
          });
          var Jd = new pwa(Sb, a);
          Jd.bindTo("mapTypeMaxZoom", Ha, "maxZoom");
          Jd.bindTo("mapTypeMinZoom", Ha, "minZoom");
          Jd.bindTo("maxZoom", a);
          Jd.bindTo("minZoom", a);
          Jd.bindTo("trackerMaxZoom", B, "maxZoom");
          Jd.bindTo("restriction", a);
          Jd.bindTo("projection", a);
          h.Hg.then((Ga) => {
            Jd.Eg = Ga;
            Jd.update();
          });
          var Ne = new _.Fpa(_.Ds(c));
          h.bindTo("fontLoaded", Ne);
          f = h.Jg;
          f.bindTo("scrollwheel", a);
          f.bindTo("disableDoubleClickZoom", a);
          f.__gm.set("focusFallbackElement", t.Tj);
          f = function () {
            const Ga = a.get("streetView");
            Ga
              ? (a.bindTo("svClient", Ga, "client"),
                Ga.__gm.bindTo("fontLoaded", Ne))
              : (a.unbind("svClient"), a.set("svClient", null));
          };
          f();
          _.tk(a, "streetview_changed", f);
          a.Eg ||
            ((fb = function () {
              fb = null;
              Promise.all([_.kj("controls"), h.Hg, h.Lg]).then(
                ([Ga, pb, qb]) => {
                  const Xb = t.Eg,
                    Db = new Ga.IC(Xb, Bta(a));
                  _.tk(a, "shouldUseRTLControlsChange", () => {
                    Db.set("isRTL", Bta(a));
                  });
                  h.set("layoutManager", Db);
                  const Ab = pb && Wva(a, qb);
                  qb = pb && Xva(a, qb);
                  Ga.dK(
                    Db,
                    a,
                    Ha,
                    Xb,
                    I,
                    D.report_map_issue,
                    Jd,
                    hd,
                    t.Iq,
                    c,
                    h.Jl,
                    F,
                    sa,
                    Sb,
                    pb,
                    Ab,
                    qb,
                    p
                  );
                  Ga.eK(a, t.Tj, Xb, x, Ab, qb);
                  Ga.bC(c);
                }
              );
            }),
            _.ql(a, "Mm"),
            _.M(a, 150182),
            Pva(a, Ha),
            Iua(a),
            _.Fk(h, "mapbindingcomplete"));
          f = new dwa(
            _.Ii(_.Ni.Gg, 2, _.dx),
            _.Yq(),
            _.Ni.Eg(),
            a,
            new rB(F, function (Ga) {
              return qa ? V : Ga || T;
            }),
            D.obliques,
            h.Eg
          );
          qva(f, a.overlayMapTypes);
          zua(
            (Ga, pb) => {
              _.ql(a, Ga);
              _.M(a, pb);
            },
            t.Nl.mapPane,
            a.overlayMapTypes,
            Sb,
            b,
            Aa
          );
          _.an[35] && h.bindTo("card", a);
          _.an[15] && h.bindTo("authUser", a);
          var af = 0,
            Wc = 0,
            le = function () {
              const Ga = t.Eg.clientWidth,
                pb = t.Eg.clientHeight;
              if (af != Ga || Wc != pb)
                (af = Ga),
                  (Wc = pb),
                  Sb && Sb.Mv(),
                  w.set("size", new _.yl(Ga, pb)),
                  Jd.update();
            },
            tc = document.createElement("iframe");
          tc.setAttribute("aria-hidden", "true");
          tc.frameBorder = "0";
          tc.tabIndex = -1;
          tc.style.cssText =
            "z-index: -1; position: absolute; width: 100%;height: 100%; top: 0; left: 0; border: none; opacity: 0";
          _.zk(tc, "load", () => {
            le();
            _.zk(tc.contentWindow, "resize", le);
          });
          t.Eg.appendChild(tc);
          b = _.Fda(t.Tj, void 0, !0);
          t.Eg.appendChild(b);
        }
      else _.Hm(k, "MAP_INITIALIZATION");
    };
  _.ln.prototype.Lz = _.da(10, function (a, b, c) {
    const d = this.Ig;
    let e, f;
    const g = b.domEvent && _.Nq(b.domEvent);
    if (this.Eg) (e = this.Eg), (f = this.Hg);
    else if (a == "mouseout" || g) f = e = null;
    else {
      for (var h = 0; (e = d[h++]); ) {
        var k = b.mi;
        const m = b.latLng;
        (f = e.Ps(b, !1)) &&
          !e.Hs(a, f) &&
          ((f = null), (b.mi = k), (b.latLng = m));
        if (f) break;
      }
      if (!f && c)
        for (
          c = 0;
          (e = d[c++]) &&
          ((h = b.mi),
          (k = b.latLng),
          (f = e.Ps(b, !0)) &&
            !e.Hs(a, f) &&
            ((f = null), (b.mi = h), (b.latLng = k)),
          !f);

        );
    }
    if (e != this.Fg || f != this.Jg)
      this.Fg && this.Fg.handleEvent("mouseout", b, this.Jg),
        (this.Fg = e),
        (this.Jg = f),
        e && e.handleEvent("mouseover", b, f);
    if (!e) return !!g;
    if (a == "mouseover" || a == "mouseout") return !1;
    e.handleEvent(a, b, f);
    return !0;
  });
  var Kta = class extends _.W {
      constructor(a) {
        super(a);
      }
    },
    Ita = class extends _.W {
      constructor(a) {
        super(a);
      }
    },
    Jta = _.Rq(1, 2, 3, 4),
    rwa = class extends _.yq {
      constructor(a) {
        super(a);
        this.Ig = this.Hg = this.Kg = null;
        this.ownerElement = a.ownerElement;
        this.content = a.content;
        this.Or = a.Or;
        this.Lo = a.Lo;
        this.label = a.label;
        this.Xx = a.Xx;
        this.Hy = a.Hy;
        this.role = a.role || "dialog";
        this.Eg = document.createElement("div");
        this.Eg.tabIndex = 0;
        this.Eg.setAttribute("aria-hidden", "true");
        this.Fg = this.Eg.cloneNode(!0);
        _.Bq(_.Voa, this.element);
        _.Cl(this.element, "modal-overlay-view");
        this.element.setAttribute("role", this.role);
        (this.Xx && this.label) ||
          (this.Xx
            ? this.element.setAttribute("aria-labelledby", this.Xx)
            : this.label &&
              this.element.setAttribute("aria-label", this.label));
        this.content.tabIndex = this.content.tabIndex;
        _.Ym(this.content);
        this.element.appendChild(this.Eg);
        this.element.appendChild(this.content);
        this.element.appendChild(this.Fg);
        this.element.style.display = "none";
        this.Jg = new _.Qq(this);
        this.element.addEventListener("click", (b) => {
          (this.content.contains(b.target) && b.target !== b.currentTarget) ||
            this.Jj();
        });
        this.Hy && _.Ek(this, "hide", this.Hy);
        this.xj(a, rwa, "ModalOverlayView");
      }
      Mg(a) {
        this.Hg = a.relatedTarget;
        if (this.ownerElement.contains(this.element)) {
          hB(this, this.content);
          var b = hB(this, document.body),
            c = a.target,
            d = Eta(this, b);
          a.target === this.Eg
            ? ((c = d.DJ),
              (a = d.CA),
              (d = d.rE),
              this.element.contains(this.Hg)
                ? (--c, c >= 0 ? iB(b[c]) : iB(b[d - 1]))
                : iB(b[a + 1]))
            : a.target === this.Fg
            ? ((c = d.CA),
              (a = d.rE),
              (d = d.EJ),
              this.element.contains(this.Hg)
                ? ((d += 1), d < b.length ? iB(b[d]) : iB(b[c + 1]))
                : iB(b[a - 1]))
            : ((d = d.CA),
              this.ownerElement.contains(c) &&
                !this.element.contains(c) &&
                iB(b[d + 1]));
        }
      }
      Lg(a) {
        (a.key === "Escape" || a.key === "Esc") &&
          this.ownerElement.contains(this.element) &&
          this.element.style.display !== "none" &&
          this.element.contains(jB(this)) &&
          jB(this) &&
          (this.Jj(), a.stopPropagation());
      }
      show(a) {
        this.Kg = jB(this);
        this.element.style.display = "";
        this.Lo && this.Lo.setAttribute("aria-hidden", "true");
        a ? a() : ((a = hB(this, this.content)), iB(a[0]));
        this.Ig = _.os(this.ownerElement, "focus", this, this.Mg, !0);
        _.Pq(this.Jg, this.element, "keydown", this.Lg);
      }
      Jj() {
        this.element.style.display !== "none" &&
          (this.Lo && this.Lo.removeAttribute("aria-hidden"),
          _.Fk(this, "hide", void 0),
          this.Ig && this.Ig.remove(),
          _.Ria(this.Jg),
          (this.element.style.display = "none"),
          Cta(this.Kg).catch(() => {
            this.Or && this.Or();
          }));
      }
    },
    swa = class extends _.yq {
      constructor(a) {
        super(a);
        this.content = a.content;
        this.Or = a.Or;
        this.Lo = a.Lo;
        this.ownerElement = a.ownerElement;
        this.title = a.title;
        this.role = a.role;
        _.Bq(_.Uoa, this.element);
        _.Cl(this.element, "dialog-view");
        const b = Fta(this);
        this.Eg = new rwa({
          label: this.title,
          content: b,
          ownerElement: this.ownerElement,
          element: this.element,
          Lo: this.Lo,
          Hy: this,
          Or: this.Or,
          role: this.role,
        });
        this.xj(a, swa, "DialogView");
      }
      show() {
        this.Eg.show();
      }
      Jj() {
        this.Eg.Jj();
      }
    },
    Vta = {
      all: 0,
      administrative: 1,
      "administrative.country": 17,
      "administrative.province": 18,
      "administrative.locality": 19,
      "administrative.neighborhood": 20,
      "administrative.land_parcel": 21,
      poi: 2,
      "poi.business": 33,
      "poi.government": 34,
      "poi.school": 35,
      "poi.medical": 36,
      "poi.attraction": 37,
      "poi.place_of_worship": 38,
      "poi.sports_complex": 39,
      "poi.park": 40,
      road: 3,
      "road.highway": 49,
      "road.highway.controlled_access": 785,
      "road.arterial": 50,
      "road.local": 51,
      "road.local.drivable": 817,
      "road.local.trail": 818,
      transit: 4,
      "transit.line": 65,
      "transit.line.rail": 1041,
      "transit.line.ferry": 1042,
      "transit.line.transit_layer": 1043,
      "transit.station": 66,
      "transit.station.rail": 1057,
      "transit.station.bus": 1058,
      "transit.station.airport": 1059,
      "transit.station.ferry": 1060,
      landscape: 5,
      "landscape.man_made": 81,
      "landscape.man_made.building": 1297,
      "landscape.man_made.business_corridor": 1299,
      "landscape.natural": 82,
      "landscape.natural.landcover": 1313,
      "landscape.natural.terrain": 1314,
      water: 6,
    },
    Wta = {
      "poi.business.shopping": 529,
      "poi.business.food_and_drink": 530,
      "poi.business.gas_station": 531,
      "poi.business.car_rental": 532,
      "poi.business.lodging": 533,
      "landscape.man_made.business_corridor": 1299,
      "landscape.man_made.building": 1297,
    },
    Tua = {
      all: "",
      geometry: "g",
      "geometry.fill": "g.f",
      "geometry.stroke": "g.s",
      labels: "l",
      "labels.icon": "l.i",
      "labels.text": "l.t",
      "labels.text.fill": "l.t.f",
      "labels.text.stroke": "l.t.s",
    },
    Xua = _.uf(_.Wx),
    bua = { roadmap: [0], satellite: [1], hybrid: [1, 0], terrain: [2, 0] },
    nB = class extends _.Qn {
      constructor(a, b, c, d, e, f, g, h, k, m, p, t, u, w, x, z = null) {
        super();
        this.Ig = a;
        this.Ng = b;
        this.projection = c;
        this.maxZoom = d;
        this.tileSize = new _.yl(256, 256);
        this.name = e;
        this.alt = f;
        this.Pg = g;
        this.heading = x;
        this.Op = _.yj(x);
        this.Zt = h;
        this.__gmsd = k;
        this.mapTypeId = m;
        this.zi = p;
        this.Jg = z;
        this.Fg = null;
        this.Og = t;
        this.Lg = u;
        this.Mg = w;
        this.triggersTileLoadEvent = !0;
        this.Hg = _.Gl({});
        this.Kg = null;
      }
      Eg(a = !1) {
        return this.Ig(this, a);
      }
      dk() {
        return this.Hg;
      }
    },
    CB = class extends nB {
      constructor(a, b, c, d, e, f) {
        super(
          a.Ig,
          a.Ng,
          a.projection,
          a.maxZoom,
          a.name,
          a.alt,
          a.Pg,
          a.Zt,
          a.__gmsd,
          a.mapTypeId,
          a.zi,
          a.Og,
          a.Lg,
          a.Mg,
          a.heading,
          a.Jg
        );
        this.Kg = cua(this.mapTypeId, this.__gmsd, b, e, f);
        (this.Op && this.mapTypeId === "satellite") ||
          this.Hg.set(
            aua(
              this.Lg,
              this.Mg,
              this.mapTypeId,
              this.Og,
              this.__gmsd,
              b,
              c,
              d,
              e,
              !!this.Jg?.get("mapId"),
              f,
              this.Op
            )
          );
      }
    },
    twa = class {
      constructor(a, b, c, d, e = {}) {
        this.Eg = a;
        this.Fg = b.slice(0);
        this.Hg = e.Ti || (() => {});
        this.loaded = Promise.all(b.map((f) => f.loaded)).then(() => {});
        d && _.gx(this.Eg, c.hh, c.kh);
      }
      Ei() {
        return this.Eg;
      }
      bm() {
        return Ota(this.Fg, (a) => a.bm());
      }
      release() {
        for (const a of this.Fg) a.release();
        this.Hg();
      }
    },
    eua = class {
      constructor(a, b = !1) {
        this.Fg = a;
        this.Eg = b;
        this.Dh = a[0].Dh;
        this.kl = a[0].kl;
      }
      Mk(a, b = {}) {
        const c = _.aj("DIV"),
          d = _.lr(this.Fg, (e, f) => {
            e = e.Mk(a);
            const g = e.Ei();
            g.style.position = "absolute";
            g.style.zIndex = f;
            c.appendChild(g);
            return e;
          });
        return new twa(c, d, this.Dh.size, this.Eg, { Ti: b.Ti });
      }
    },
    uwa = class {
      constructor(a, b, c, d, e, f, g, h) {
        this.Eg = a;
        this.Jg = c;
        this.Ig = d;
        this.scale = e;
        this.Dh = f;
        this.Rg = g;
        this.loaded = new Promise((k) => {
          this.nl = k;
        });
        this.Fg = !1;
        this.Hg = (b || []).map((k) => k.replace(/&$/, ""));
        h && ((a = this.Ei()), _.gx(a, f.size.hh, f.size.kh));
        this.initialize();
      }
      Ei() {
        return this.Eg.Ei();
      }
      bm() {
        return !this.Fg && this.Eg.bm();
      }
      release() {
        this.Eg.release();
      }
      initialize() {
        var a = this.Eg.ki.qh;
        const b = this.Eg.ki.rh,
          c = this.Eg.ki.Ah;
        if (this.Rg) {
          var d = _.im(
            _.iu(this.Dh, { qh: a + 0.5, rh: b + 0.5, Ah: c }),
            null
          );
          if (!xua(this.Rg, d)) {
            this.Fg = !0;
            this.Rg.Hk().addListenerOnce(() => {
              this.initialize();
            });
            return;
          }
        }
        this.Fg = !1;
        d = this.scale === 2 || this.scale === 4 ? this.scale : 1;
        d = Math.min(1 << c, d);
        const e = this.Jg && d !== 4;
        let f = c;
        for (let g = d; g > 1; g /= 2) f--;
        (a = this.Ig({ qh: a, rh: b, Ah: c }))
          ? ((a = new _.Ir(_.lma(this.Hg, a))
              .Es("x", a.qh)
              .Es("y", a.rh)
              .Es("z", f)),
            d !== 1 && a.Es("w", this.Dh.size.hh / d),
            e && (d *= 2),
            d !== 1 && a.Es("scale", d),
            this.Eg.setUrl(a.toString()).then(this.nl))
          : this.Eg.setUrl("").then(this.nl);
      }
    },
    dua = class {
      constructor(a, b, c, d, e, f, g = !1, h) {
        this.errorMessage =
          "Xin l\u1ed7i, ch\u00fang t\u00f4i kh\u00f4ng c\u00f3 h\u00ecnh \u1ea3nh \u1edf \u0111\u00e2y.";
        this.Jg = b;
        this.Fg = c;
        this.scale = d;
        this.Dh = e;
        this.Rg = f;
        this.Hg = g;
        this.Ig = h;
        this.size = new _.yl(this.Dh.size.hh, this.Dh.size.kh);
        this.kl = 1;
        this.Eg = a || [];
      }
      Mk(a, b) {
        const c = _.aj("DIV");
        a = new _.Oy(a, this.size, c, {
          errorMessage: this.errorMessage || void 0,
          Ti: b && b.Ti,
          Pv: this.Ig || void 0,
        });
        return new uwa(
          a,
          this.Eg,
          this.Jg,
          this.Fg,
          this.scale,
          this.Dh,
          this.Rg,
          this.Hg
        );
      }
    },
    vwa = [
      { Py: 108.25, Oy: 109.625, Sy: 49, Ry: 51.5 },
      { Py: 109.625, Oy: 109.75, Sy: 49, Ry: 50.875 },
      { Py: 109.75, Oy: 110.5, Sy: 49, Ry: 50.625 },
      { Py: 110.5, Oy: 110.625, Sy: 49, Ry: 49.75 },
    ],
    fua = class {
      constructor(a, b) {
        this.Fg = a;
        this.Eg = b;
        this.Dh = _.zy;
        this.kl = 1;
      }
      Mk(a, b) {
        a: {
          var c = a.Ah;
          if (!(c < 7)) {
            var d = 1 << (c - 7);
            c = a.qh / d;
            d = a.rh / d;
            for (e of vwa)
              if (c >= e.Py && c <= e.Oy && d >= e.Sy && d <= e.Ry) {
                var e = !0;
                break a;
              }
          }
          e = !1;
        }
        return e ? this.Eg.Mk(a, b) : this.Fg.Mk(a, b);
      }
    },
    dwa = class {
      constructor(a, b, c, d, e, f, g) {
        this.map = d;
        this.Eg = e;
        this.Lg = f;
        this.Kg = g;
        this.projection = new _.bq();
        this.language = c.Eg();
        this.region = c.Fg();
        this.Hg = _.H(b.Gg, 15);
        this.Fg = _.H(b.Gg, 16);
        this.Ig = new _.kma(a, b, c);
        this.Jg = () => {
          const { Qg: h } = d.__gm;
          _.Gm(h, 2);
          _.ql(d, "Sni");
          _.M(d, 148280);
        };
      }
    };
  var uua = class extends _.W {
    constructor(a) {
      super(a);
    }
  };
  var jva = class extends _.W {
    constructor() {
      super();
    }
    getZoom() {
      return _.Ti(this.Gg, 2);
    }
    setZoom(a) {
      _.Vi(this.Gg, 2, a);
    }
    Ri() {
      return _.H(this.Gg, 5);
    }
    Io() {
      return _.H(this.Gg, 11);
    }
    Bk() {
      return _.Y(this.Gg, 13);
    }
    getUrl() {
      return _.L(this.Gg, 13);
    }
    setUrl(a) {
      _.Yg(this.Gg, 13, a);
    }
  };
  var nva = class extends _.W {
    constructor(a) {
      super(a);
    }
    getFeatureName() {
      return _.L(this.Gg, 1);
    }
    clearRect() {
      _.Xg(this.Gg, 2);
    }
  };
  var ova = class extends _.W {
    constructor(a) {
      super(a);
    }
    clearRect() {
      _.Xg(this.Gg, 2);
    }
  };
  var rva = class extends _.W {
    constructor(a) {
      super(a);
    }
    getTile() {
      return _.Hi(this.Gg, 2, _.uw);
    }
    Zl() {
      return _.H(this.Gg, 3);
    }
  };
  var mva = class extends _.W {
    constructor(a) {
      super(a);
    }
  };
  var Yua = class extends _.W {
    constructor(a) {
      super(a);
    }
    getAttribution() {
      return _.L(this.Gg, 1);
    }
    setAttribution(a) {
      _.Yg(this.Gg, 1, a);
    }
    getStatus() {
      return _.H(this.Gg, 5, -1);
    }
  };
  var wwa = (0,
  _.Tf)`.gm-style-moc{background-color:rgba(0,0,0,.45);pointer-events:none;text-align:center;-webkit-transition:opacity ease-in-out;transition:opacity ease-in-out}.gm-style-mot{color:white;font-family:Roboto,Arial,sans-serif;font-size:22px;margin:0;position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%)}sentinel{}\n`;
  var hwa = class {
    constructor(a) {
      this.Zg = a;
      this.Fg = 0;
      this.Ng = _.Is("p", a);
      _.Cs(a, "gm-style-moc");
      _.Cs(this.Ng, "gm-style-mot");
      _.Bq(wwa, a);
      a.style.transitionProperty = "opacity, display";
      a.style.Fg = "allow-discrete";
      a.style.transitionDuration = "0";
      a.style.opacity = "0";
      a.style.display = "none";
      _.Ls(a);
    }
    Eg(a) {
      clearTimeout(this.Fg);
      a === 1
        ? (nua(this, !0),
          (this.Fg = setTimeout(() => {
            oua(this);
          }, 1500)))
        : a === 2
        ? nua(this, !1)
        : a === 3
        ? oua(this)
        : a === 4 &&
          ((this.Zg.style.transitionDuration = "0.2s"),
          (this.Zg.style.opacity = "0"),
          (this.Zg.style.display = "none"));
    }
  };
  var gwa = class {
    constructor(a, b, c, d) {
      this.map = a;
      this.ah = b;
      this.Jg = d;
      this.Hg = 0;
      this.Fg = null;
      this.Eg = !1;
      this.Kg = c.Tj;
      this.Ig = c.Pn;
      _.fu(c.Iq, {
        lk: (e) => {
          oB(this, "mousedown", e.coords, e.Eg);
        },
        Mq: (e) => {
          this.ah.Px() ||
            ((this.Fg = e), Date.now() - this.Hg > 5 && sua(this));
        },
        Fk: (e) => {
          oB(this, "mouseup", e.coords, e.Eg);
          this.Kg?.focus({ preventScroll: !0 });
        },
        Ll: ({ coords: e, event: f, Hq: g }) => {
          f.button === 3
            ? g || oB(this, "rightclick", e, f.Eg)
            : g
            ? oB(this, "dblclick", e, f.Eg, _.Pt("dblclick", e, f.Eg))
            : oB(this, "click", e, f.Eg, _.Pt("click", e, f.Eg));
        },
        sq: {
          gm: (e, f) => {
            this.Eg || ((this.Eg = !0), oB(this, "dragstart", e.yi, f.Eg));
          },
          kn: (e, f) => {
            const g = this.Eg ? "drag" : "mousemove";
            oB(this, g, e.yi, f.Eg, _.Pt(g, e.yi, f.Eg));
          },
          Hm: (e, f) => {
            this.Eg && ((this.Eg = !1), oB(this, "dragend", e, f.Eg));
          },
        },
        Pt: (e) => {
          _.Ut(e);
          oB(this, "contextmenu", e.coords, e.Eg);
        },
      }).Ds(!0);
      new _.sy(c.Pn, c.Iq, {
        ss: (e) => {
          oB(this, "mouseout", e, e);
        },
        us: (e) => {
          oB(this, "mouseover", e, e);
        },
      });
    }
  };
  var xwa = class {
    constructor(a = () => new _.rg()) {
      this.Kj = this.Eg = null;
      this.Fg = a;
    }
  };
  var Zva = null,
    $va = class {
      constructor() {
        this.Eg = new Set();
      }
      show(a) {
        const b = _.Ba(a);
        if (!this.Eg.has(b)) {
          var c = document.createElement("div"),
            d = document.createElement("div");
          d.style.fontSize = "14px";
          d.style.color = "rgba(0,0,0,0.87)";
          d.style.marginBottom = "15px";
          d.textContent =
            "Trang n\u00e0y kh\u00f4ng th\u1ec3 t\u1ea3i Google Maps \u0111\u00fang c\u00e1ch.";
          var e = document.createElement("div"),
            f = document.createElement("a");
          _.Cr(
            f,
            "https://developers.google.com/maps/documentation/javascript/error-messages"
          );
          f.textContent =
            "B\u1ea1n c\u00f3 s\u1edf h\u1eefu trang web n\u00e0y kh\u00f4ng?";
          f.target = "_blank";
          f.rel = "noopener";
          f.style.color = "rgba(0, 0, 0, 0.54)";
          f.style.fontSize = "12px";
          e.append(f);
          c.append(d, e);
          d = a.__gm.get("outerContainer");
          a = a.getDiv();
          var g = new swa({
            content: c,
            Lo: d,
            ownerElement: a,
            role: "alertdialog",
            title: "L\u1ed7i",
          });
          _.Cl(g.element, "degraded-map-dialog-view");
          g.addListener("hide", () => {
            g.element.remove();
            this.Eg.delete(b);
          });
          a.appendChild(g.element);
          g.show();
          this.Eg.add(b);
        }
      }
    };
  var ywa = class {
    constructor() {
      this.ph = new _.Jga();
    }
    addListener(a, b) {
      this.ph.addListener(a, b);
    }
    addListenerOnce(a, b) {
      this.ph.addListenerOnce(a, b);
    }
    removeListener(a, b) {
      this.ph.removeListener(a, b);
    }
  };
  var Qva = class extends _.Ik {
      constructor(a) {
        super();
        this.Eg = new ywa();
        this.Fg = a;
      }
      Hk() {
        return this.Eg;
      }
      changed(a) {
        if (a != "available") {
          a == "featureRects" && wua(this.Eg);
          a = this.get("viewport");
          var b = this.get("featureRects");
          a = this.Fg(a, b);
          a != null && a != this.get("available") && this.set("available", a);
        }
      }
    },
    Rva = () => (a, b) => {
      if (a && b) return 0.9 <= IB(a, b);
    },
    Sva = () => {
      var a = zwa;
      let b = !1;
      return (c, d) => {
        if (c && d) {
          if (0.999999 > IB(c, d)) return (b = !1);
          c = Sta(c, (a - 1) / 2);
          return 0.999999 < IB(c, d) ? (b = !0) : b;
        }
      };
    },
    IB = (a, b) => {
      if (!b) return 0;
      let c = 0;
      const d = a.ei,
        e = a.Gh;
      for (const g of b)
        if (a.intersects(g)) {
          b = g.ei;
          var f = g.Gh;
          if (g.containsBounds(a)) return 1;
          f =
            e.contains(f.lo) && f.contains(e.lo) && !e.equals(f)
              ? _.Yk(f.lo, e.hi) + _.Yk(e.lo, f.hi)
              : _.Yk(
                  e.contains(f.lo) ? f.lo : e.lo,
                  e.contains(f.hi) ? f.hi : e.hi
                );
          c += f * (Math.min(d.hi, b.hi) - Math.max(d.lo, b.lo));
        }
      return (c /= d.span() * e.span());
    };
  pB.WI = _.en;
  pB.XI = function (a, b, c, d = !1) {
    var e = b.getSouthWest();
    b = b.getNorthEast();
    const f = e.lng(),
      g = b.lng();
    f > g && (e = new _.fk(e.lat(), f - 360, !0));
    e = a.fromLatLngToPoint(e);
    b = a.fromLatLngToPoint(b);
    a = Math.max(e.x, b.x) - Math.min(e.x, b.x);
    e = Math.max(e.y, b.y) - Math.min(e.y, b.y);
    if (a > c.width || e > c.height) return 0;
    c = Math.min(
      _.bs(c.width + 1e-12) - _.bs(a + 1e-12),
      _.bs(c.height + 1e-12) - _.bs(e + 1e-12)
    );
    d || (c = Math.floor(c));
    return c;
  };
  pB.fJ = function (a, b) {
    a = _.ws(b, a, 0);
    return _.vs(b, new _.wl((a.minX + a.maxX) / 2, (a.minY + a.maxY) / 2), 0);
  };
  var yua = class {
    constructor(a, b, c, d, e, f) {
      var g = Eua;
      this.Ig = b;
      this.mapTypes = c;
      this.ah = d;
      this.Hg = g;
      this.Eg = [];
      this.Jg = a;
      e.addListener(() => {
        Aua(this);
      });
      f.addListener(() => {
        Aua(this);
      });
      this.Fg = f;
      _.tk(c, "insert_at", (h) => {
        Dua(this, h);
      });
      _.tk(c, "remove_at", (h) => {
        const k = this.Eg[h];
        k && (this.Eg.splice(h, 1), Cua(this), k.clear());
      });
      _.tk(c, "set_at", (h) => {
        var k = this.mapTypes.getAt(h);
        Bua(this, k);
        h = this.Eg[h];
        (k = qB(this, k)) ? _.hu(h, k) : h.clear();
      });
      this.mapTypes.forEach((h, k) => {
        Dua(this, k);
      });
    }
  };
  var rB = class {
    constructor(a, b) {
      this.Eg = a;
      this.transform = b;
    }
    SA(a) {
      return this.transform(this.Eg.SA(a));
    }
    eA(a) {
      return this.transform(this.Eg.eA(a));
    }
    Hk() {
      return this.Eg.Hk();
    }
  };
  var fwa = class {
    constructor(a, b, c) {
      this.map = a;
      this.mapId = b;
      this.Eg = new xwa(() => new _.rg());
      b
        ? (a = b ? c.Hg[b] || null : null)
          ? tB(this, a, _.Zq(_.Ni.Gg, 41))
          : Jua(this)
        : tB(this, null, null);
    }
  };
  var Lua = class extends _.Ik {
    constructor(a, b, c, d, e) {
      super();
      this.Gv = a;
      this.Jg = this.Mg = null;
      this.Ig = !1;
      this.Eg = this.Lg = null;
      const f = _.jw(this, "apistyle"),
        g = _.jw(this, "authUser"),
        h = _.jw(this, "baseMapType"),
        k = _.jw(this, "scale"),
        m = _.jw(this, "tilt");
      a = _.jw(this, "blockingLayerCount");
      this.Hg = new _.Fl(null);
      var p = this.Og.bind(this);
      b = new _.ry([f, g, b, h, k, m, d], p);
      _.qla(this, "tileMapType", b);
      this.Kg = new _.ry([b, c, a], Kua());
      this.map = e;
    }
    mapTypeId_changed() {
      const a = this.get("mapTypeId");
      this.Fg(a);
    }
    heading_changed() {
      if (!this.Ig) {
        var a = this.get("heading");
        if (typeof a === "number") {
          var b = _.wj(Math.round(a / 90) * 90, 0, 360);
          a !== b
            ? (this.set("heading", b), (this.Lg = a))
            : ((a = this.get("mapTypeId")), this.Fg(a));
        }
      }
    }
    tilt_changed() {
      if (!this.Ig) {
        var a = this.get("mapTypeId");
        this.Fg(a);
      }
    }
    setMapTypeId(a) {
      this.Fg(a);
      this.set("mapTypeId", a);
    }
    Fg(a) {
      const b = this.get("heading") || 0;
      let c = this.Gv.get(a || "");
      if (a && !c) {
        var { Qg: d } = this.map.__gm;
        _.Hm(d, "MAP_INITIALIZATION");
      }
      d = this.get("tilt");
      const e = this.Ig;
      if (
        this.get("tilt") &&
        !this.Ig &&
        c &&
        c instanceof nB &&
        c.Fg &&
        c.Fg[b]
      )
        c = c.Fg[b];
      else if (d === 0 && b !== 0 && !e) {
        this.set("heading", 0);
        return;
      }
      (c && c === this.Mg) ||
        (this.Jg && (_.vk(this.Jg), (this.Jg = null)),
        a &&
          (this.Jg = _.tk(
            this.Gv,
            a.toLowerCase() + "_changed",
            this.Fg.bind(this, a)
          )),
        c && c instanceof _.Rn
          ? ((a = c.Fg),
            this.set("styles", c.get("styles")),
            this.set("baseMapType", this.Gv.get(a)))
          : (this.set("styles", null), this.set("baseMapType", c)),
        this.set("maxZoom", c && c.maxZoom),
        this.set("minZoom", c && c.minZoom),
        (this.Mg = c));
    }
    Og(a, b, c, d, e, f, g) {
      if (f === void 0) return null;
      if (d instanceof nB) {
        d = new CB(d, a, b, e, c, g);
        if ((a = this.Eg instanceof CB))
          if (((a = this.Eg), a == d)) a = !0;
          else if (a && d) {
            if (
              (b =
                a.heading == d.heading &&
                a.projection == d.projection &&
                a.Zt == d.Zt)
            )
              (a = a.Hg.get()),
                (b = d.Hg.get()),
                (b =
                  a == b
                    ? !0
                    : a && b
                    ? a.scale == b.scale &&
                      a.wo == b.wo &&
                      (a.Lm == b.Lm
                        ? !0
                        : a.Lm && b.Lm
                        ? a.Lm.equals(b.Lm)
                        : !1)
                    : !1);
            a = b;
          } else a = !1;
        a || ((this.Eg = d), this.Hg.set(d.Kg));
      } else
        (a = this.Eg !== d),
          (this.Eg = d),
          (this.Hg.get() || a) && this.Hg.set(null);
      return this.Eg;
    }
  };
  var awa = class extends _.Ik {
    changed(a) {
      if (a === "maxZoomRects" || a === "latLng") {
        a = this.get("latLng");
        const b = this.get("maxZoomRects");
        if (a && b) {
          let c = void 0;
          for (let d = 0, e; (e = b[d++]); )
            a && e.bounds.contains(a) && (c = Math.max(c || 0, e.maxZoom));
          a = c;
          a !== this.get("maxZoom") && this.set("maxZoom", a);
        } else this.get("maxZoom") !== void 0 && this.set("maxZoom", void 0);
      }
    }
  };
  var owa = class {
    constructor(a, b) {
      this.map = a;
      this.ah = b;
      this.Eg = this.Fg = void 0;
      this.Hg = 0;
    }
    moveCamera(a) {
      var b = this.map.getCenter(),
        c = this.map.getZoom();
      const d = this.map.getProjection();
      var e = c != null || a.zoom != null;
      if ((b || a.center) && e && d) {
        e = a.center ? _.jk(a.center) : b;
        c = a.zoom != null ? a.zoom : c;
        var f = this.map.getTilt() || 0,
          g = this.map.getHeading() || 0;
        this.Hg === 2
          ? ((f = a.tilt != null ? a.tilt : f),
            (g = a.heading != null ? a.heading : g))
          : this.Hg === 0
          ? ((this.Fg = a.tilt), (this.Eg = a.heading))
          : (a.tilt || a.heading) &&
            _.nk(
              "google.maps.moveCamera() CameraOptions includes tilt or heading, which are not supported on raster maps"
            );
        a = _.ts(e, d);
        b && b !== e && ((b = _.ts(b, d)), (a = _.er(this.ah.Gj, a, b)));
        this.ah.ak({ center: a, zoom: c, heading: g, tilt: f }, !1);
      }
    }
  };
  var iwa = class extends _.Ik {
    constructor() {
      super();
      this.Eg = this.Fg = !1;
    }
    actualTilt_changed() {
      const a = this.get("actualTilt");
      if (a != null && a !== this.get("tilt")) {
        this.Fg = !0;
        try {
          this.set("tilt", a);
        } finally {
          this.Fg = !1;
        }
      }
    }
    tilt_changed() {
      if (!this.Fg) {
        var a = this.get("tilt");
        a !== this.get("desiredTilt")
          ? this.set("desiredTilt", a)
          : a !== this.get("actualTilt") &&
            this.set("actualTilt", this.get("actualTilt"));
      }
    }
    aerial_changed() {
      uB(this);
    }
    mapTypeId_changed() {
      uB(this);
    }
    zoom_changed() {
      uB(this);
    }
    desiredTilt_changed() {
      uB(this);
    }
  };
  var ewa = class extends _.Ik {
    constructor(a, b) {
      super();
      this.map = a;
      this.Kg = this.Hg = !1;
      this.nu = null;
      this.Ig = this.Eg = this.Jg = !1;
      const c = new _.Nm(() => {
        this.notify("bounds");
        Sua(this);
      }, 0);
      this.Fg = () => {
        _.Om(c);
      };
      this.ah = b((d, e) => {
        this.Kg = !0;
        const f = this.map.getProjection();
        (this.nu && e.min.equals(this.nu.min) && e.max.equals(this.nu.max)) ||
          ((this.nu = e), this.Fg());
        if (!this.Eg) {
          this.Eg = !0;
          try {
            const g = _.im(d.center, f, !0),
              h = this.map.getCenter();
            !g || (h && g.equals(h)) || this.map.setCenter(g);
            const k = this.map.get("isFractionalZoomEnabled")
              ? d.zoom
              : Math.round(d.zoom);
            this.map.getZoom() !== k && this.map.setZoom(k);
            this.Ig &&
              (this.map.getHeading() !== d.heading &&
                this.map.setHeading(d.heading),
              this.map.getTilt() !== d.tilt && this.map.setTilt(d.tilt));
          } finally {
            this.Eg = !1;
          }
        }
      });
      a.bindTo("bounds", this, void 0, !0);
      a.addListener("center_changed", () => {
        vB(this);
      });
      a.addListener("zoom_changed", () => {
        vB(this);
      });
      a.addListener("projection_changed", () => {
        vB(this);
      });
      a.addListener("tilt_changed", () => {
        vB(this);
      });
      a.addListener("heading_changed", () => {
        vB(this);
      });
      vB(this);
    }
    ak(a) {
      this.ah.ak(a, !0);
      this.Fg();
    }
    getBounds() {
      {
        const d = this.map.get("center"),
          e = this.map.get("zoom");
        if (d && e != null) {
          var a = this.map.get("tilt") || 0,
            b = this.map.get("heading") || 0;
          var c = this.map.getProjection();
          a = { center: _.ts(d, c), zoom: e, tilt: a, heading: b };
          a = this.ah.Yz(a);
          c = _.sja(a, c, !0);
        } else c = null;
      }
      return c;
    }
  };
  var Awa = {
    administrative: 150147,
    "administrative.country": 150146,
    "administrative.province": 150151,
    "administrative.locality": 150149,
    "administrative.neighborhood": 150150,
    "administrative.land_parcel": 150148,
    poi: 150161,
    "poi.business": 150160,
    "poi.government": 150162,
    "poi.school": 150166,
    "poi.medical": 150163,
    "poi.attraction": 150184,
    "poi.place_of_worship": 150165,
    "poi.sports_complex": 150167,
    "poi.park": 150164,
    road: 150168,
    "road.highway": 150169,
    "road.highway.controlled_access": 150170,
    "road.arterial": 150171,
    "road.local": 150185,
    "road.local.drivable": 150186,
    "road.local.trail": 150187,
    transit: 150172,
    "transit.line": 150173,
    "transit.line.rail": 150175,
    "transit.line.ferry": 150174,
    "transit.line.transit_layer": 150176,
    "transit.station": 150177,
    "transit.station.rail": 150178,
    "transit.station.bus": 150180,
    "transit.station.airport": 150181,
    "transit.station.ferry": 150179,
    landscape: 150153,
    "landscape.man_made": 150154,
    "landscape.man_made.building": 150155,
    "landscape.man_made.business_corridor": 150156,
    "landscape.natural": 150157,
    "landscape.natural.landcover": 150158,
    "landscape.natural.terrain": 150159,
    water: 150183,
  };
  var Uua = {
    hue: "h",
    saturation: "s",
    lightness: "l",
    gamma: "g",
    invert_lightness: "il",
    visibility: "v",
    color: "c",
    weight: "w",
  };
  var lwa = class extends _.Ik {
    changed(a) {
      if (a !== "apistyle" && a !== "hasCustomStyles") {
        var b = this.get("mapTypeStyles") || this.get("styles");
        this.set("hasCustomStyles", this.get("isLegendary") || _.sj(b) > 0);
        Wua(this, b);
        if (a === "styles")
          try {
            if (b)
              for (const c of b)
                c &&
                  c.featureType &&
                  Xta(c.featureType) &&
                  (_.ql(this, c.featureType),
                  c.featureType in Awa && _.M(this, Awa[c.featureType]));
          } catch (c) {}
      }
    }
    getApistyle() {
      return this.Eg;
    }
  };
  var Bwa = class extends _.Ny {
    constructor() {
      super([new _.Bpa()]);
    }
  };
  var cwa = class extends _.Ik {
    constructor(a, b, c, d, e, f, g) {
      super();
      this.language = a;
      this.Lg = b;
      this.Eg = c;
      this.Ig = d;
      this.Qg = e;
      this.Ng = f;
      this.map = g;
      this.Fg = this.Hg = null;
      this.Jg = !1;
      this.Mg = 1;
      this.Kg = !0;
      this.Og = new _.Nm(() => {
        gva(this);
      }, 0);
      this.Rg = new Bwa();
    }
    changed(a) {
      a !== "attributionText" &&
        (a === "baseMapType" && (hva(this), (this.Hg = null)), _.Om(this.Og));
    }
    getMapTypeId() {
      const a = this.get("baseMapType");
      return a && a.mapTypeId;
    }
  };
  var Cwa = class {
    constructor(a, b, c, d, e = !1) {
      this.Fg = c;
      this.Hg = d;
      this.bounds = a && {
        min: a.min,
        max: a.min.Eg <= a.max.Eg ? a.max : new _.wm(a.max.Eg + 256, a.max.Fg),
        jP: a.max.Eg - a.min.Eg,
        kP: a.max.Fg - a.min.Fg,
      };
      (d = this.bounds) && c.width && c.height
        ? ((a = Math.log2(c.width / (d.max.Eg - d.min.Eg))),
          (c = Math.log2(c.height / (d.max.Fg - d.min.Fg))),
          (e = Math.max(
            b ? b.min : 0,
            e
              ? Math.max(Math.ceil(a), Math.ceil(c))
              : Math.min(Math.floor(a), Math.floor(c))
          )))
        : (e = b ? b.min : 0);
      this.Eg = { min: e, max: Math.min(b ? b.max : Infinity, 30) };
      this.Eg.max = Math.max(this.Eg.min, this.Eg.max);
    }
    Vt(a) {
      let { zoom: b, tilt: c, heading: d, center: e } = a;
      b = wB(b, this.Eg.min, this.Eg.max);
      this.Hg && (c = wB(c, 0, Oua(b)));
      d = ((d % 360) + 360) % 360;
      if (!this.bounds || !this.Fg.width || !this.Fg.height)
        return { center: e, zoom: b, heading: d, tilt: c };
      a = this.Fg.width / Math.pow(2, b);
      const f = this.Fg.height / Math.pow(2, b);
      e = new _.wm(
        wB(e.Eg, this.bounds.min.Eg + a / 2, this.bounds.max.Eg - a / 2),
        wB(e.Fg, this.bounds.min.Fg + f / 2, this.bounds.max.Fg - f / 2)
      );
      return { center: e, zoom: b, heading: d, tilt: c };
    }
    ov() {
      return { min: this.Eg.min, max: this.Eg.max };
    }
  };
  var pwa = class extends _.Ik {
    constructor(a, b) {
      super();
      this.ah = a;
      this.map = b;
      this.Eg = !1;
      this.update();
    }
    changed(a) {
      a !== "zoomRange" && a !== "boundsRange" && this.update();
    }
    update() {
      var a = null,
        b = this.get("restriction");
      b && (_.ql(this.map, "Mbr"), _.M(this.map, 149850));
      var c = this.get("projection");
      if (b) {
        a = _.ts(b.latLngBounds.getSouthWest(), c);
        var d = _.ts(b.latLngBounds.getNorthEast(), c);
        a = {
          min: new _.wm(_.$k(b.latLngBounds.Gh) ? -Infinity : a.Eg, d.Fg),
          max: new _.wm(_.$k(b.latLngBounds.Gh) ? Infinity : d.Eg, a.Fg),
        };
        d = b.strictBounds == 1;
      }
      b = new _.Goa(this.get("minZoom") || 0, this.get("maxZoom") || 30);
      c = this.get("mapTypeMinZoom");
      const e = this.get("mapTypeMaxZoom"),
        f = this.get("trackerMaxZoom");
      _.yj(c) && (b.min = Math.max(b.min, c));
      _.yj(f)
        ? (b.max = Math.min(b.max, f))
        : _.yj(e) && (b.max = Math.min(b.max, e));
      _.Uj((k) => k.min <= k.max, "minZoom cannot exceed maxZoom")(b);
      const { width: g, height: h } = this.ah.getBoundingClientRect();
      d = new Cwa(a, b, { width: g, height: h }, this.Eg, d);
      this.ah.NB(d);
      this.set("zoomRange", b);
      this.set("boundsRange", a);
    }
  };
  var Yva = class {
    constructor(a) {
      this.Ep = a;
      this.Ig = new WeakMap();
      this.Eg = new Map();
      this.Fg = this.Hg = null;
      this.Jg = _.eo();
      this.Ng = (d) => {
        d = this.Eg.get(d.currentTarget) || null;
        yB(this, this.Hg);
        xB(this, d);
        this.Fg = d;
      };
      this.Pg = (d) => {
        (d = this.Eg.get(d.currentTarget)) && this.Fg === d && (this.Fg = null);
      };
      this.Qg = (d) => {
        const e = d.currentTarget,
          f = this.Eg.get(e);
        if (f.Ck) d.key === "Escape" && f.Mx(d);
        else {
          var g = !1,
            h = null;
          if (_.Uw(d) || _.Vw(d))
            this.Eg.size <= 1
              ? (h = null)
              : ((g = [...this.Eg.keys()]),
                (h = g.length),
                (h = g[(g.indexOf(e) - 1 + h) % h])),
              (g = !0);
          else if (_.Ww(d) || _.Xw(d))
            this.Eg.size <= 1
              ? (h = null)
              : ((g = [...this.Eg.keys()]),
                (h = g[(g.indexOf(e) + 1) % g.length])),
              (g = !0);
          d.altKey && (_.Tw(d) || d.key === _.Cpa)
            ? f.Js(d)
            : !d.altKey && _.Tw(d) && ((g = !0), f.Nx(d));
          h &&
            h !== e &&
            (yB(this, this.Eg.get(e) || null, !0),
            xB(this, this.Eg.get(h) || null, !0),
            _.M(window, 171221),
            _.ql(window, "Mkn"));
          g && (d.preventDefault(), d.stopPropagation());
        }
      };
      this.Lg = [];
      this.Kg = new Set();
      const b = _.Yw(),
        c = () => {
          for (let e of this.Kg) {
            var d = e;
            AB(this, d);
            d.targetElement &&
              (d.xm &&
                (d.vE(this.Ep) || d.Ck) &&
                (d.targetElement.addEventListener("focusin", this.Ng),
                d.targetElement.addEventListener("focusout", this.Pg),
                d.targetElement.addEventListener("keydown", this.Qg),
                this.Qw(d),
                this.Eg.set(d.targetElement, d)),
              d.hw(),
              (this.Lg = _.Ym(d.sp())));
            zB(this, e);
          }
          this.Kg.clear();
        };
      this.Og = (d) => {
        this.Kg.add(d);
        _.Zw(b, c, this, this);
      };
    }
    set Rg(a) {
      const b = document.createElement("span");
      b.id = this.Jg;
      b.textContent =
        "\u0110\u1ec3 \u0111i theo ch\u1ec9 d\u1eabn, h\u00e3y nh\u1ea5n c\u00e1c ph\u00edm m\u0169i t\u00ean.";
      b.style.display = "none";
      a.appendChild(b);
      a.addEventListener("click", (c) => {
        const d = c.target;
        _.ns(c) || _.Nq(c) || !this.Eg.has(d) || this.Eg.get(d).Lx(c);
      });
    }
    Mg(a) {
      if (!this.Ig.has(a)) {
        var b = [];
        b.push(
          _.tk(a, "CLEAR_TARGET", () => {
            AB(this, a);
          })
        );
        b.push(
          _.tk(a, "UPDATE_FOCUS", () => {
            this.Og(a);
          })
        );
        b.push(
          _.tk(a, "REMOVE_FOCUS", () => {
            a.hw();
            AB(this, a);
            zB(this, a);
            const c = this.Ig.get(a);
            if (c) for (const d of c) d.remove();
            this.Ig.delete(a);
          })
        );
        b.push(
          _.tk(a, "ELEMENTS_REMOVED", () => {
            AB(this, a);
            zB(this, a);
          })
        );
        this.Ig.set(a, b);
      }
    }
    Sg(a) {
      this.Mg(a);
      this.Og(a);
    }
    Qw(a) {
      var b = a.targetElement.getAttribute("aria-describedby");
      b = b ? b.split(" ") : [];
      b.unshift(this.Jg);
      a.targetElement.setAttribute("aria-describedby", b.join(" "));
    }
    ty(a) {
      var b = a.targetElement.getAttribute("aria-describedby");
      b = (b ? b.split(" ") : []).filter((c) => c !== this.Jg);
      b.length > 0
        ? a.targetElement.setAttribute("aria-describedby", b.join(" "))
        : a.targetElement.removeAttribute("aria-describedby");
    }
  };
  _.Ia(BB, _.Ik);
  BB.prototype.immutable_changed = function () {
    var a = this,
      b = a.get("immutable"),
      c = a.Fg;
    b != c &&
      (_.tj(a.Eg, function (d) {
        (c && c[d]) !== (b && b[d]) && a.set(d, b && b[d]);
      }),
      (a.Fg = b));
  };
  var bwa = class {
    constructor() {
      this.Fg = {};
      this.Eg = {};
      this.Hg = new ywa();
    }
    SA(a) {
      const b = this.Fg,
        c = a.qh,
        d = a.rh;
      a = a.Ah;
      return (b[a] && b[a][c] && b[a][c][d]) || 0;
    }
    eA(a) {
      return this.Eg[a] || 0;
    }
    Hk() {
      return this.Hg;
    }
  };
  var mwa = class extends _.Ik {
    constructor(a) {
      super();
      this.th = a;
      a.addListener(() => {
        this.notify("style");
      });
    }
    changed(a) {
      a !== "tileMapType" && a !== "style" && this.notify("style");
    }
    getStyle() {
      const a = [];
      var b = this.get("tileMapType");
      if (b instanceof nB && (b = b.__gmsd)) {
        const d = new _.iw();
        _.$v(d, b.type);
        if (b.params)
          for (var c in b.params) {
            if (!b.params.hasOwnProperty(c)) continue;
            const e = _.bw(d);
            _.Yv(e, c);
            const f = b.params[c];
            f && _.Zv(e, f);
          }
        a.push(d);
      }
      c = new _.iw();
      _.$v(c, 37);
      _.Yv(_.bw(c), "smartmaps");
      a.push(c);
      this.th.get().forEach((d) => {
        d.styler && a.push(d.styler);
      });
      return a;
    }
  };
  var nwa = class extends _.Ik {
    constructor(a) {
      var b = _.cn.Hg;
      super();
      this.Kg = b;
      this.Hg = this.Ig = this.Eg = null;
      b &&
        ((this.Eg = _.Ds(this.Fg).createElement("div")),
        (this.Eg.style.width = "1px"),
        (this.Eg.style.height = "1px"),
        _.Js(this.Eg, 1e3));
      this.Fg = a;
      this.Hg && (_.vk(this.Hg), (this.Hg = null));
      this.Kg && a && (this.Hg = _.zk(a, "mousemove", this.Jg.bind(this), !0));
      this.title_changed();
    }
    title_changed() {
      if (this.Fg) {
        var a = this.get("title");
        a ? this.Fg.setAttribute("title", a) : this.Fg.removeAttribute("title");
        if (this.Eg && this.Ig) {
          a = this.Fg;
          if (a.nodeType == 1) {
            try {
              var b = a.getBoundingClientRect();
            } catch (c) {
              b = { left: 0, top: 0, right: 0, bottom: 0 };
            }
            b = new _.$r(b.left, b.top);
          } else
            (b = a.changedTouches ? a.changedTouches[0] : a),
              (b = new _.$r(b.clientX, b.clientY));
          _.Hs(this.Eg, new _.wl(this.Ig.clientX - b.x, this.Ig.clientY - b.y));
          this.Fg.appendChild(this.Eg);
        }
      }
    }
    Jg(a) {
      this.Ig = { clientX: a.clientX, clientY: a.clientY };
    }
  };
  var wva = class {
    constructor(a, b, c, d, e = () => {}) {
      this.ah = a;
      this.Fg = b;
      this.enabled = c;
      this.Eg = d;
      this.Jm = e;
    }
  };
  var vva = class {
    constructor(a, b, c, d, e, f = () => {}) {
      this.ah = b;
      this.Kg = c;
      this.enabled = d;
      this.Jg = e;
      this.Jm = f;
      this.Hg = null;
      this.Fg = this.Eg = 0;
      this.Ig = new _.Qm(() => {
        this.Fg = this.Eg = 0;
      }, 1e3);
      new _.Vm(a, "wheel", (g) => {
        tva(this, g);
      });
    }
  };
  var yva = class {
    constructor(a, b, c = null, d = () => {}) {
      this.ah = a;
      this.Yj = b;
      this.cursor = c;
      this.Jm = d;
      this.active = null;
    }
    gm(a, b) {
      b.stop();
      if (!this.active) {
        this.cursor && _.kx(this.cursor, !0);
        var c = HB(this.ah, () => {
          this.active = null;
          this.Yj.reset(b);
        });
        c
          ? (this.active = { origin: a.yi, UK: this.ah.zk().zoom, zn: c })
          : this.Yj.reset(b);
      }
    }
    kn(a) {
      if (this.active) {
        a = this.active.UK + (a.yi.clientY - this.active.origin.clientY) / 128;
        var { center: b, heading: c, tilt: d } = this.ah.zk();
        this.active.zn.updateCamera({
          center: b,
          zoom: a,
          heading: c,
          tilt: d,
        });
      }
    }
    Hm() {
      this.cursor && _.kx(this.cursor, !1);
      this.active && (this.active.zn.release(), this.Jm(1));
      this.active = null;
    }
  };
  var xva = class {
    constructor(a, b, c, d = null, e = () => {}) {
      this.ah = a;
      this.Eg = b;
      this.Yj = c;
      this.cursor = d;
      this.Jm = e;
      this.active = null;
    }
    gm(a, b) {
      var c = !this.active && b.button === 1 && a.Gm === 1;
      const d = this.Eg(c ? 2 : 4);
      d === "none" ||
        (d === "cooperative" && c) ||
        (b.stop(),
        this.active
          ? (this.active.nn = uva(this, a))
          : (this.cursor && _.kx(this.cursor, !0),
            (c = HB(this.ah, () => {
              this.active = null;
              this.Yj.reset(b);
            }))
              ? (this.active = { nn: uva(this, a), zn: c })
              : this.Yj.reset(b)));
    }
    kn(a) {
      if (this.active) {
        var b = this.Eg(4);
        if (b !== "none") {
          var c = this.ah.zk();
          b =
            b === "zoomaroundcenter" && a.Gm > 1
              ? c.center
              : _.dr(_.cr(c.center, this.active.nn.yi), this.ah.Fl(a.yi));
          this.active.zn.updateCamera({
            center: b,
            zoom:
              this.active.nn.zoom +
              Math.log(a.radius / this.active.nn.radius) / Math.LN2,
            heading: c.heading,
            tilt: c.tilt,
          });
        }
      }
    }
    Hm() {
      this.Eg(3);
      this.cursor && _.kx(this.cursor, !1);
      this.active && (this.active.zn.release(), this.Jm(4));
      this.active = null;
    }
  };
  var jwa = class {
    constructor(a, b, c, d, e, f = null, g = () => {}) {
      this.ah = a;
      this.Ig = b;
      this.Yj = c;
      this.Kg = d;
      this.Jg = e;
      this.cursor = f;
      this.Jm = g;
      this.Eg = this.active = null;
      this.Hg = this.Fg = 0;
    }
    gm(a, b) {
      var c = !this.active && b.button === 1 && a.Gm === 1,
        d = this.Ig(c ? 2 : 4);
      if (d !== "none" && (d !== "cooperative" || !c))
        if ((b.stop(), this.active)) {
          if (
            ((c = EB(this, a)),
            (this.Eg = this.active.nn = c),
            (this.Hg = 0),
            (this.Fg = a.vo),
            this.active.Kr === 2 || this.active.Kr === 3)
          )
            this.active.Kr = 0;
        } else
          this.cursor && _.kx(this.cursor, !0),
            (c = HB(this.ah, () => {
              this.active = null;
              this.Yj.reset(b);
            }))
              ? ((d = EB(this, a)),
                (this.active = { nn: d, zn: c, Kr: 0 }),
                (this.Eg = d),
                (this.Hg = 0),
                (this.Fg = a.vo))
              : this.Yj.reset(b);
    }
    kn(a) {
      if (this.active) {
        var b = this.Ig(4);
        if (b !== "none") {
          var c = this.ah.zk(),
            d = this.Fg - a.vo;
          Math.round(Math.abs(d)) >= 179 &&
            ((this.Fg = this.Fg < a.vo ? this.Fg + 360 : this.Fg - 360),
            (d = this.Fg - a.vo));
          this.Hg += d;
          var e = this.active.Kr;
          d = this.active.nn;
          var f = Math.abs(this.Hg);
          if (e === 1 || e === 2 || e === 3) d = e;
          else if (
            (a.Gm < 2
              ? (e = !1)
              : ((e = Math.abs(d.radius - a.radius)),
                (e = f < 10 && e >= (b === "cooperative" ? 20 : 10))),
            e)
          )
            d = 1;
          else {
            if ((e = this.Jg))
              a.Gm !== 2
                ? (e = !1)
                : ((e = Math.abs(d.Jr - a.Jr) || 1e-10),
                  (e =
                    f >= (b === "cooperative" ? 10 : 5) &&
                    a.Jr >= 50 &&
                    f / e >= 0.9
                      ? !0
                      : !1));
            d = e
              ? 3
              : this.Kg &&
                ((b === "cooperative" && a.Gm !== 3) ||
                (b === "greedy" && a.Gm !== 2)
                  ? 0
                  : Math.abs(d.yi.clientY - a.yi.clientY) >= 15 && f <= 20)
              ? 2
              : 0;
          }
          d !== this.active.Kr &&
            ((this.active.Kr = d), (this.Eg = EB(this, a)), (this.Hg = 0));
          f = c.center;
          e = c.zoom;
          var g = c.heading,
            h = c.tilt;
          switch (d) {
            case 2:
              h = this.Eg.tilt + (this.Eg.yi.clientY - a.yi.clientY) / 1.5;
              break;
            case 3:
              g = this.Eg.heading - this.Hg;
              f = DB(this.Eg.gx, this.Hg, this.Eg.center);
              break;
            case 1:
              f =
                b === "zoomaroundcenter" && a.Gm > 1
                  ? c.center
                  : _.dr(_.cr(c.center, this.Eg.gx), this.ah.Fl(a.yi));
              e = this.Eg.zoom + Math.log(a.radius / this.Eg.radius) / Math.LN2;
              break;
            case 0:
              f =
                b === "zoomaroundcenter" && a.Gm > 1
                  ? c.center
                  : _.dr(_.cr(c.center, this.Eg.gx), this.ah.Fl(a.yi));
          }
          this.Fg = a.vo;
          this.active.zn.updateCamera({
            center: f,
            zoom: e,
            heading: g,
            tilt: h,
          });
        }
      }
    }
    Hm() {
      this.Ig(3);
      this.cursor && _.kx(this.cursor, !1);
      this.active &&
        (this.Jm(this.active.Kr),
        this.active.zn.release(this.Eg ? this.Eg.gx : void 0));
      this.Eg = this.active = null;
      this.Hg = this.Fg = 0;
    }
  };
  var kwa = class {
    constructor(a, b, c, d, e = null, f = () => {}) {
      this.ah = a;
      this.Yj = b;
      this.Fg = c;
      this.Eg = d;
      this.cursor = e;
      this.Jm = f;
      this.active = null;
    }
    gm(a, b) {
      b.stop();
      if (this.active) this.active.nn = Ava(this, a);
      else {
        this.cursor && _.kx(this.cursor, !0);
        var c = HB(this.ah, () => {
          this.active = null;
          this.Yj.reset(b);
        });
        c ? (this.active = { nn: Ava(this, a), zn: c }) : this.Yj.reset(b);
      }
    }
    kn(a) {
      if (this.active) {
        var b = this.ah.zk(),
          c = this.active.nn.yi,
          d = this.active.nn.SK,
          e = this.active.nn.TK,
          f = c.clientX - a.yi.clientX;
        a = c.clientY - a.yi.clientY;
        c = b.heading;
        var g = b.tilt;
        this.Eg && (c = d - f / 3);
        this.Fg && (g = e + a / 3);
        this.active.zn.updateCamera({
          center: b.center,
          zoom: b.zoom,
          heading: c,
          tilt: g,
        });
      }
    }
    Hm() {
      this.cursor && _.kx(this.cursor, !1);
      this.active && (this.active.zn.release(), this.Jm(5));
      this.active = null;
    }
  };
  var Dwa = class {
      constructor(a, b, c) {
        this.Fg = a;
        this.Hg = b;
        this.Eg = c;
      }
    },
    Kva = class {
      constructor(a, b, c) {
        this.Eg = b;
        this.Zh = c;
        this.keyFrames = [];
        this.Fg = b.heading + 360 * Math.round((c.heading - b.heading) / 360);
        const { width: d, height: e } = Bva(a);
        a = new Dwa(
          b.center.Eg / d,
          b.center.Fg / e,
          0.5 * Math.pow(2, -b.zoom)
        );
        const f = new Dwa(
          c.center.Eg / d,
          c.center.Fg / e,
          0.5 * Math.pow(2, -c.zoom)
        );
        this.gamma = (f.Eg - a.Eg) / a.Eg;
        this.bj = Math.hypot(
          (0.5 *
            Math.hypot(f.Fg - a.Fg, f.Hg - a.Hg, f.Eg - a.Eg) *
            (this.gamma ? Math.log1p(this.gamma) / this.gamma : 1)) /
            a.Eg,
          0.005 * (c.tilt - b.tilt),
          0.007 * (c.heading - this.Fg)
        );
        b = this.Eg.zoom;
        if (this.Eg.zoom < this.Zh.zoom)
          for (;;) {
            b = 3 * Math.floor(b / 3 + 1);
            if (b >= this.Zh.zoom) break;
            this.keyFrames.push(
              (Math.abs(b - this.Eg.zoom) /
                Math.abs(this.Zh.zoom - this.Eg.zoom)) *
                this.bj
            );
          }
        else if (this.Eg.zoom > this.Zh.zoom)
          for (;;) {
            b = 3 * Math.ceil(b / 3 - 1);
            if (b <= this.Zh.zoom) break;
            this.keyFrames.push(
              (Math.abs(b - this.Eg.zoom) /
                Math.abs(this.Zh.zoom - this.Eg.zoom)) *
                this.bj
            );
          }
      }
      ji(a) {
        if (a <= 0) return this.Eg;
        if (a >= this.bj) return this.Zh;
        a /= this.bj;
        const b = this.gamma
          ? Math.expm1(a * Math.log1p(this.gamma)) / this.gamma
          : a;
        return {
          center: new _.wm(
            this.Eg.center.Eg * (1 - b) + this.Zh.center.Eg * b,
            this.Eg.center.Fg * (1 - b) + this.Zh.center.Fg * b
          ),
          zoom: this.Eg.zoom * (1 - a) + this.Zh.zoom * a,
          heading: this.Fg * (1 - a) + this.Zh.heading * a,
          tilt: this.Eg.tilt * (1 - a) + this.Zh.tilt * a,
        };
      }
    };
  var Jva = class {
      constructor(
        a,
        {
          xO: b = 300,
          maxDistance: c = Infinity,
          Ml: d = () => {},
          speed: e = 1.5,
        } = {}
      ) {
        this.Xj = a;
        this.Ml = d;
        this.easing = new Ewa(e / 1e3, b);
        this.Eg = a.bj <= c ? 0 : -1;
      }
      ji(a) {
        if (!this.Eg) {
          var b = this.easing,
            c = this.Xj.bj;
          this.Eg =
            a +
            (c < b.Fg
              ? Math.acos(1 - (c / b.speed) * b.Eg) / b.Eg
              : b.Hg + (c - b.Fg) / b.speed);
          return { done: 1, camera: this.Xj.ji(0) };
        }
        a >= this.Eg
          ? (a = { done: 0, camera: this.Xj.Zh })
          : ((b = this.easing),
            (a = this.Eg - a),
            (a = {
              done: 1,
              camera: this.Xj.ji(
                this.Xj.bj -
                  (a < b.Hg
                    ? ((1 - Math.cos(a * b.Eg)) * b.speed) / b.Eg
                    : b.Fg + b.speed * (a - b.Hg))
              ),
            }));
        return a;
      }
    },
    Ewa = class {
      constructor(a, b) {
        this.speed = a;
        this.Hg = b;
        this.Eg = Math.PI / 2 / b;
        this.Fg = a / this.Eg;
      }
    };
  var Fwa = class {
    constructor(a, b, c, d) {
      this.th = a;
      this.Lg = b;
      this.Eg = c;
      this.Hg = d;
      this.requestAnimationFrame = _.lu;
      this.camera = null;
      this.Kg = !1;
      this.instructions = null;
      this.Ig = !0;
    }
    zk() {
      return this.camera;
    }
    ak(a, b, c = () => {}) {
      a = this.Eg.Vt(a);
      this.camera && b
        ? this.Fg(this.Lg(this.th.getBoundingClientRect(!0), this.camera, a, c))
        : this.Fg(Cva(a, c));
    }
    Jg() {
      return this.instructions
        ? this.instructions.Xj
          ? this.instructions.Xj.Zh
          : null
        : this.camera;
    }
    Px() {
      return !!this.instructions;
    }
    NB(a) {
      this.Eg = a;
      !this.instructions &&
        this.camera &&
        ((a = this.Eg.Vt(this.camera)),
        (a.center === this.camera.center &&
          a.zoom === this.camera.zoom &&
          a.heading === this.camera.heading &&
          a.tilt === this.camera.tilt) ||
          this.Fg(Cva(a)));
    }
    ov() {
      return this.Eg.ov();
    }
    UB(a) {
      this.requestAnimationFrame = a;
    }
    Fg(a) {
      this.instructions && this.instructions.Ml && this.instructions.Ml();
      this.instructions = a;
      this.Ig = !0;
      (a = a.Xj) && this.Hg(this.Eg.Vt(a.Zh));
      FB(this);
    }
    Mv() {
      this.th.Mv();
      this.instructions && this.instructions.Xj
        ? this.Hg(this.Eg.Vt(this.instructions.Xj.Zh))
        : this.camera && this.Hg(this.camera);
    }
  };
  var Iva = class {
    constructor(a, b, c) {
      this.Mg = b;
      this.options = c;
      this.th = {};
      this.offset = this.Eg = null;
      this.origin = new _.wm(0, 0);
      this.boundingClientRect = null;
      this.Jg = a.Pn;
      this.Ig = a.Vn;
      this.Hg = a.Fo;
      this.Kg = _.mu();
      this.options.Zx &&
        (this.Hg.style.willChange = this.Ig.style.willChange = "transform");
    }
    Ii(a) {
      const b = _.Ba(a);
      if (!this.th[b]) {
        if (a.hJ) {
          const c = a.Yp;
          c && ((this.Fg = c), (this.Lg = b));
        }
        this.th[b] = a;
        this.Mg();
      }
    }
    ql(a) {
      const b = _.Ba(a);
      this.th[b] &&
        (b === this.Lg && (this.Lg = this.Fg = void 0),
        a.dispose(),
        delete this.th[b]);
    }
    Mv() {
      this.boundingClientRect = null;
      this.Mg();
    }
    getBoundingClientRect(a = !1) {
      if (a && this.boundingClientRect) return this.boundingClientRect;
      a = this.Jg.getBoundingClientRect();
      return (this.boundingClientRect = {
        top: a.top,
        right: a.right,
        bottom: a.bottom,
        left: a.left,
        width: this.Jg.clientWidth,
        height: this.Jg.clientHeight,
        x: a.x,
        y: a.y,
      });
    }
    getBounds(
      a,
      { top: b = 0, left: c = 0, bottom: d = 0, right: e = 0 } = {}
    ) {
      var f = this.getBoundingClientRect(!0);
      c -= f.width / 2;
      e = f.width / 2 - e;
      c > e && (c = e = (c + e) / 2);
      let g = b - f.height / 2;
      d = f.height / 2 - d;
      g > d && (g = d = (g + d) / 2);
      if (this.Fg) {
        var h = { hh: f.width, kh: f.height };
        const k = a.center,
          m = a.zoom,
          p = a.tilt;
        a = a.heading;
        c += f.width / 2;
        e += f.width / 2;
        g += f.height / 2;
        d += f.height / 2;
        f = this.Fg.Wt(c, g, k, m, p, a, h);
        b = this.Fg.Wt(c, d, k, m, p, a, h);
        c = this.Fg.Wt(e, g, k, m, p, a, h);
        e = this.Fg.Wt(e, d, k, m, p, a, h);
      } else
        (h = _.vm(a.zoom, a.tilt, a.heading)),
          (f = _.cr(a.center, _.xm(h, { hh: c, kh: g }))),
          (b = _.cr(a.center, _.xm(h, { hh: e, kh: g }))),
          (e = _.cr(a.center, _.xm(h, { hh: e, kh: d }))),
          (c = _.cr(a.center, _.xm(h, { hh: c, kh: d })));
      return {
        min: new _.wm(
          Math.min(f.Eg, b.Eg, e.Eg, c.Eg),
          Math.min(f.Fg, b.Fg, e.Fg, c.Fg)
        ),
        max: new _.wm(
          Math.max(f.Eg, b.Eg, e.Eg, c.Eg),
          Math.max(f.Fg, b.Fg, e.Fg, c.Fg)
        ),
      };
    }
    Fl(a) {
      const b = this.getBoundingClientRect(void 0);
      if (this.Eg) {
        const c = { hh: b.width, kh: b.height };
        return this.Fg
          ? this.Fg.Wt(
              a.clientX - b.left,
              a.clientY - b.top,
              this.Eg.center,
              _.hr(this.Eg.scale),
              this.Eg.scale.tilt,
              this.Eg.scale.heading,
              c
            )
          : _.cr(
              this.Eg.center,
              _.xm(this.Eg.scale, {
                hh: a.clientX - (b.left + b.right) / 2,
                kh: a.clientY - (b.top + b.bottom) / 2,
              })
            );
      }
      return new _.wm(0, 0);
    }
    mC(a) {
      if (!this.Eg) return { clientX: 0, clientY: 0 };
      const b = this.getBoundingClientRect();
      if (this.Fg)
        return (
          (a = this.Fg.lm(
            a,
            this.Eg.center,
            _.hr(this.Eg.scale),
            this.Eg.scale.tilt,
            this.Eg.scale.heading,
            { hh: b.width, kh: b.height }
          )),
          { clientX: b.left + a[0], clientY: b.top + a[1] }
        );
      const { hh: c, kh: d } = _.gr(this.Eg.scale, _.dr(a, this.Eg.center));
      return {
        clientX: (b.left + b.right) / 2 + c,
        clientY: (b.top + b.bottom) / 2 + d,
      };
    }
    Wh(a, b, c) {
      var d = a.center;
      const e = _.vm(a.zoom, a.tilt, a.heading, this.Fg);
      var f = !e.equals(this.Eg && this.Eg.scale);
      this.Eg = { scale: e, center: d };
      if ((f || this.Fg) && this.offset)
        this.origin = Ata(e, _.cr(d, _.xm(e, this.offset)));
      else if (
        ((this.offset = _.fr(_.gr(e, _.dr(this.origin, d)))), (d = this.Kg))
      )
        (this.Hg.style[d] = this.Ig.style[d] =
          `translate(${this.offset.hh}px,${this.offset.kh}px)`),
          (this.Hg.style.willChange = this.Ig.style.willChange = "transform");
      d = _.dr(this.origin, _.xm(e, this.offset));
      f = this.getBounds(a);
      const g = this.getBoundingClientRect(!0);
      for (const h of Object.values(this.th))
        h.Wh(
          f,
          this.origin,
          e,
          a.heading,
          a.tilt,
          d,
          { hh: g.width, kh: g.height },
          { KJ: !0, yp: !1, Xj: c, timestamp: b }
        );
    }
  };
  var Mva = class {
      constructor(a, b, c, d, e) {
        this.camera = a;
        this.Hg = c;
        this.Jg = d;
        this.Ig = e;
        this.Fg = [];
        this.Eg = null;
        this.Ti = b;
      }
      Ml() {
        this.Ti && (this.Ti(), (this.Ti = null));
      }
      ji() {
        return { camera: this.camera, done: this.Ti ? 2 : 0 };
      }
      updateCamera(a) {
        this.camera = a;
        this.Hg();
        const b = _.ku ? _.ra.performance.now() : Date.now();
        this.Eg = { aj: b, camera: a };
        (this.Fg.length > 0 && b - this.Fg.slice(-1)[0].aj < 10) ||
          (this.Fg.push({ aj: b, camera: a }),
          this.Fg.length > 10 && this.Fg.splice(0, 1));
      }
      release(a) {
        const b = _.ku ? _.ra.performance.now() : Date.now();
        if (!(this.Fg.length <= 0) && this.Eg) {
          var c = Pta(
            this.Fg,
            (e) => b - e.aj < 125 && this.Eg.aj - e.aj >= 10
          );
          c = c < 0 ? this.Eg : this.Fg[c];
          var d = this.Eg.aj - c.aj;
          switch (Gva(this, c.camera, a)) {
            case 3:
              a = new Gwa(
                this.Eg.camera,
                -180 +
                  _.Yr(this.Eg.camera.heading - c.camera.heading - -180, 360),
                d,
                b,
                a || this.Eg.camera.center
              );
              break;
            case 2:
              a = new Hwa(
                this.Eg.camera,
                c.camera,
                d,
                a || this.Eg.camera.center
              );
              break;
            case 1:
              a = new Iwa(this.Eg.camera, c.camera, d);
              break;
            default:
              a = new Jwa(this.Eg.camera, c.camera, d, b);
          }
          this.Jg(new Kwa(a, b));
        }
      }
    },
    Kwa = class {
      constructor(a, b) {
        this.Xj = a;
        this.startTime = b;
      }
      Ml() {}
      ji(a) {
        a -= this.startTime;
        return { camera: this.Xj.ji(a), done: a < this.Xj.bj ? 1 : 0 };
      }
    },
    Jwa = class {
      constructor(a, b, c, d) {
        this.keyFrames = [];
        var e = a.zoom - b.zoom;
        let f = a.zoom;
        f = e < -0.1 ? Math.floor(f) : e > 0.1 ? Math.ceil(f) : Math.round(f);
        e =
          d +
          (1e3 *
            Math.sqrt(
              (Math.hypot(
                a.center.Eg - b.center.Eg,
                a.center.Fg - b.center.Fg
              ) *
                Math.pow(2, a.zoom)) /
                c
            )) /
            3.2;
        const g = d + (1e3 * (0.5 - Math.abs((a.zoom % 1) - 0.5))) / 2;
        this.bj = (c <= 0 ? g : Math.max(g, e)) - d;
        d = c <= 0 ? 0 : (a.center.Eg - b.center.Eg) / c;
        b = c <= 0 ? 0 : (a.center.Fg - b.center.Fg) / c;
        this.Eg = 0.5 * this.bj * d;
        this.Fg = 0.5 * this.bj * b;
        this.Hg = a;
        this.Zh = {
          center: _.cr(
            a.center,
            new _.wm((this.bj * d) / 2, (this.bj * b) / 2)
          ),
          heading: a.heading,
          tilt: a.tilt,
          zoom: f,
        };
      }
      ji(a) {
        if (a >= this.bj) return this.Zh;
        a = Math.min(1, 1 - a / this.bj);
        return {
          center: _.dr(
            this.Zh.center,
            new _.wm(this.Eg * a * a * a, this.Fg * a * a * a)
          ),
          zoom: this.Zh.zoom - a * (this.Zh.zoom - this.Hg.zoom),
          tilt: this.Zh.tilt,
          heading: this.Zh.heading,
        };
      }
    },
    Hwa = class {
      constructor(a, b, c, d) {
        this.keyFrames = [];
        b = a.zoom - b.zoom;
        c = c <= 0 ? 0 : b / c;
        this.bj = (1e3 * Math.sqrt(Math.abs(c))) / 0.4;
        this.Eg = (this.bj * c) / 2;
        c = a.zoom + this.Eg;
        b = GB(a, c, d).center;
        this.Hg = a;
        this.Fg = d;
        this.Zh = { center: b, heading: a.heading, tilt: a.tilt, zoom: c };
      }
      ji(a) {
        if (a >= this.bj) return this.Zh;
        a = Math.min(1, 1 - a / this.bj);
        a = this.Zh.zoom - a * a * a * this.Eg;
        return {
          center: GB(this.Hg, a, this.Fg).center,
          zoom: a,
          tilt: this.Zh.tilt,
          heading: this.Zh.heading,
        };
      }
    },
    Iwa = class {
      constructor(a, b, c) {
        this.keyFrames = [];
        var d =
          Math.hypot(a.center.Eg - b.center.Eg, a.center.Fg - b.center.Fg) *
          Math.pow(2, a.zoom);
        this.bj = (1e3 * Math.sqrt(c <= 0 ? 0 : d / c)) / 3.2;
        d = c <= 0 ? 0 : (a.center.Fg - b.center.Fg) / c;
        this.Eg =
          (this.bj * (c <= 0 ? 0 : (a.center.Eg - b.center.Eg) / c)) / 2;
        this.Fg = (this.bj * d) / 2;
        this.Zh = {
          center: _.cr(a.center, new _.wm(this.Eg, this.Fg)),
          heading: a.heading,
          tilt: a.tilt,
          zoom: a.zoom,
        };
      }
      ji(a) {
        if (a >= this.bj) return this.Zh;
        a = Math.min(1, 1 - a / this.bj);
        return {
          center: _.dr(
            this.Zh.center,
            new _.wm(this.Eg * a * a * a, this.Fg * a * a * a)
          ),
          zoom: this.Zh.zoom,
          tilt: this.Zh.tilt,
          heading: this.Zh.heading,
        };
      }
    },
    Gwa = class {
      constructor(a, b, c, d, e) {
        this.keyFrames = [];
        c = c <= 0 ? 0 : b / c;
        b = d + Math.min(1e3 * Math.sqrt(Math.abs(c)), 1e3) / 2;
        c = ((b - d) * c) / 2;
        const f = DB(e, -c, a.center);
        this.bj = b - d;
        this.Fg = c;
        this.Eg = e;
        this.Zh = {
          center: f,
          heading: a.heading + c,
          tilt: a.tilt,
          zoom: a.zoom,
        };
      }
      ji(a) {
        if (a >= this.bj) return this.Zh;
        a = Math.min(1, 1 - a / this.bj);
        a *= this.Fg * a * a;
        return {
          center: DB(this.Eg, a, this.Zh.center),
          zoom: this.Zh.zoom,
          tilt: this.Zh.tilt,
          heading: this.Zh.heading - a,
        };
      }
    };
  var Hva = class {
    constructor(a, b, c) {
      this.Hg = b;
      this.Gj = _.xha;
      this.Eg = a(() => {
        FB(this.controller);
      });
      this.controller = new Fwa(
        this.Eg,
        b,
        { Vt: (d) => d, ov: () => ({ min: 0, max: 1e3 }) },
        (d) => {
          c(d, this.Eg.getBounds(d));
        }
      );
    }
    Ii(a) {
      this.Eg.Ii(a);
    }
    ql(a) {
      this.Eg.ql(a);
    }
    getBoundingClientRect() {
      return this.Eg.getBoundingClientRect();
    }
    Fl(a) {
      return this.Eg.Fl(a);
    }
    mC(a) {
      return this.Eg.mC(a);
    }
    zk() {
      return this.controller.zk();
    }
    Yz(a, b) {
      return this.Eg.getBounds(a, b);
    }
    Jg() {
      return this.controller.Jg();
    }
    refresh() {
      FB(this.controller);
    }
    ak(a, b, c) {
      this.controller.ak(a, b, c);
    }
    Fg(a) {
      this.controller.Fg(a);
    }
    mG(a, b) {
      var c = () => {};
      let d;
      if ((d = Eva(this.controller) === 0 ? Dva(this.controller) : this.zk())) {
        a = d.zoom + a;
        var e = this.controller.ov();
        a = Math.min(a, e.max);
        a = Math.max(a, e.min);
        e = this.Jg();
        (e && e.zoom === a) ||
          ((b = GB(d, a, b)),
          (c = this.Hg(this.Eg.getBoundingClientRect(!0), d, b, c)),
          (c.type = 0),
          this.controller.Fg(c));
      }
    }
    NB(a) {
      this.controller.NB(a);
    }
    UB(a) {
      this.controller.UB(a);
    }
    Px() {
      return this.controller.Px();
    }
    Mv() {
      this.controller.Mv();
    }
  };
  var zwa = Math.sqrt(2);
  var Lwa = class {
    constructor() {
      this.xF = qwa;
      this.fitBounds = pB;
    }
    gK(a, b, c, d, e) {
      a = new _.Oy(a, b, c, {});
      a.setUrl(d).then(e);
      return a;
    }
  };
  _.lj("map", new Lwa());
});
