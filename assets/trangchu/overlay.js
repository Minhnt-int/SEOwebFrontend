google.maps.__gjsload__("overlay", function (_) {
  var Mwa = function () {},
    JB = function (a) {
      a.hB = a.hB || new Mwa();
      return a.hB;
    },
    Nwa = function (a) {
      this.Eg = new _.Nm(() => {
        const b = a.hB;
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.Hg && a.onAdd) a.onAdd();
            b.Hg = !0;
            a.draw();
          }
        } else {
          if (b.Hg)
            if (a.onRemove) a.onRemove();
            else a.remove();
          b.Hg = !1;
        }
      }, 0);
    },
    Pwa = function (a, b) {
      const c = JB(a);
      let d = c.Fg;
      d || (d = c.Fg = new Nwa(a));
      _.Kb(c.Eg || [], _.vk);
      var e = (c.Ig = c.Ig || new _.Ypa());
      const f = b.__gm;
      e.bindTo("zoom", f);
      e.bindTo("offset", f);
      e.bindTo("center", f, "projectionCenterQ");
      e.bindTo("projection", b);
      e.bindTo("projectionTopLeft", f);
      e = c.Kg = c.Kg || new Owa(e);
      e.bindTo("zoom", f);
      e.bindTo("offset", f);
      e.bindTo("projection", b);
      e.bindTo("projectionTopLeft", f);
      a.bindTo("projection", e, "outProjection");
      a.bindTo("panes", f);
      e = () => _.Om(d.Eg);
      c.Eg = [
        _.tk(a, "panes_changed", e),
        _.tk(f, "zoom_changed", e),
        _.tk(f, "offset_changed", e),
        _.tk(b, "projection_changed", e),
        _.tk(f, "projectioncenterq_changed", e),
      ];
      _.Om(d.Eg);
      b instanceof _.Xk
        ? (_.ql(b, "Ox"), _.M(b, 148440))
        : b instanceof _.Hl && (_.ql(b, "Oxs"), _.M(b, 181451));
    },
    Qwa = function (a) {
      const b = JB(a);
      var c = b.Ig;
      c && c.unbindAll();
      (c = b.Kg) && c.unbindAll();
      a.unbindAll();
      a.set("panes", null);
      a.set("projection", null);
      b.Eg &&
        b.Eg.forEach((d) => {
          _.vk(d);
        });
      b.Eg = null;
      b.Fg && (_.Pm(b.Fg.Eg), (b.Fg = null));
    },
    Vwa = function (a) {
      if (a) {
        var b = a.getMap();
        if (Rwa(a) !== b && b && b instanceof _.Xk) {
          const c = b.__gm;
          c.overlayLayer
            ? (a.__gmop = new Swa(b, a, c.overlayLayer))
            : c.Fg.then(({ ah: d }) => {
                const e = new Twa(b, d);
                d.Ii(e);
                c.overlayLayer = e;
                Uwa(a);
                Vwa(a);
              });
        }
      }
    },
    Uwa = function (a) {
      if (a) {
        var b = a.__gmop;
        b &&
          ((a.__gmop = null),
          b.Eg.unbindAll(),
          b.Eg.set("panes", null),
          b.Eg.set("projection", null),
          b.Hg.Ql(b),
          b.Fg &&
            ((b.Fg = !1), b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()));
      }
    },
    Rwa = function (a) {
      return (a = a.__gmop) ? a.map : null;
    },
    Wwa = function (a, b) {
      a.Eg.get("projection") != b &&
        (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b));
    };
  var Owa = class extends _.Ik {
    constructor(a) {
      super();
      this.projection = a;
    }
    changed(a) {
      a !== "outProjection" &&
        ((a = !!(
          this.get("offset") &&
          this.get("projectionTopLeft") &&
          this.get("projection") &&
          _.yj(this.get("zoom"))
        )),
        a === !this.get("outProjection") &&
          this.set("outProjection", a ? this.projection : null));
    }
  };
  var KB = {};
  _.Ia(Nwa, _.Ik);
  KB.Ul = function (a) {
    if (a) {
      var b = a.getMap();
      (JB(a).Jg || null) !== b && (b && Pwa(a, b), (JB(a).Jg = b));
    }
  };
  KB.Ql = function (a) {
    Qwa(a);
    delete JB(a).Jg;
  };
  KB.GN = Mwa;
  var LB = {},
    Swa = class {
      constructor(a, b, c) {
        this.map = a;
        this.Eg = b;
        this.Hg = c;
        this.Fg = !1;
        _.ql(this.map, "Ox");
        _.M(this.map, 148440);
        c.Ul(this);
      }
      draw() {
        this.Fg || ((this.Fg = !0), this.Eg.onAdd && this.Eg.onAdd());
        this.Eg.draw && this.Eg.draw();
      }
    },
    Twa = class {
      constructor(a, b) {
        this.Ig = a;
        this.Hg = b;
        this.Eg = null;
        this.Fg = [];
      }
      dispose() {}
      Wh(a, b, c, d, e, f, g, h) {
        const k = (this.Eg = this.Eg || new _.qy(this.Ig, this.Hg, () => {}));
        k.Wh(a, b, c, d, e, f, g, h);
        for (const m of this.Fg) Wwa(m, k), m.draw();
      }
      Ul(a) {
        this.Fg.push(a);
        this.Eg && Wwa(a, this.Eg);
        this.Hg.refresh();
      }
      Ql(a) {
        _.Tb(this.Fg, a);
      }
    };
  LB.Ul = Vwa;
  LB.Ql = Uwa;
  _.lj("overlay", {
    SC: function (a) {
      if (a) {
        (0, KB.Ql)(a);
        (0, LB.Ql)(a);
        var b = a.getMap();
        b && (b instanceof _.Xk ? (0, LB.Ul)(a) : (0, KB.Ul)(a));
      }
    },
    preventMapHitsFrom: (a) => {
      _.fu(a, {
        Ll: ({ event: b }) => {
          _.ms(b.Eg);
        },
        lk: (b) => _.Rt(b),
        Mq: (b) => _.St(b),
        ol: (b) => _.St(b),
        Fk: (b) => _.Tt(b),
      }).Ds(!0);
    },
    preventMapHitsAndGesturesFrom: (a) => {
      a.addEventListener("click", _.rk);
      a.addEventListener("contextmenu", _.rk);
      a.addEventListener("dblclick", _.rk);
      a.addEventListener("mousedown", _.rk);
      a.addEventListener("mousemove", _.rk);
      a.addEventListener("MSPointerDown", _.rk);
      a.addEventListener("pointerdown", _.rk);
      a.addEventListener("touchstart", _.rk);
      a.addEventListener("wheel", _.rk);
    },
  });
});
