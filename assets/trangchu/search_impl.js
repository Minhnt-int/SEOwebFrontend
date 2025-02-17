google.maps.__gjsload__("search_impl", function (_) {
  var ryb = function (a, b) {
      _.Yg(a.Gg, 1, b);
    },
    syb = function (a, b) {
      _.Yg(a.Gg, 3, b);
    },
    wyb = function (a, b, c) {
      var d = new tyb();
      d = _.OG(d);
      c.Mr = d.load.bind(d);
      c.clickable = a.get("clickable") !== !1;
      _.zYa(c, _.qQ(b));
      b = [];
      b.push(_.tk(c, "click", uyb.bind(null, a)));
      for (const e of ["mouseover", "mouseout", "mousemove"])
        b.push(_.tk(c, e, vyb.bind(null, a, e)));
      b.push(
        _.tk(a, "clickable_changed", () => {
          a.Eg.clickable = a.get("clickable") !== !1;
        })
      );
      a.Fg = b;
    },
    uyb = function (a, b, c, d, e) {
      let f = null;
      if (e && ((f = { status: e.getStatus() }), e.getStatus() === 0)) {
        f.location = _.Y(e.Gg, 2)
          ? new _.fk(
              _.Ps(_.J(e.Gg, 2, _.Vs).Gg, 1),
              _.Ps(_.J(e.Gg, 2, _.Vs).Gg, 2)
            )
          : null;
        const g = {};
        f.fields = g;
        const h = _.vi(e.Gg, 3);
        for (let k = 0; k < h; ++k) {
          const m = _.Tq(e.Gg, 3, _.AQ, k);
          g[m.getKey()] = m.getValue();
        }
      }
      _.Fk(a, "click", b, c, d, f);
    },
    vyb = function (a, b, c, d, e, f, g) {
      let h = null;
      f && (h = { title: f[1].title, snippet: f[1].snippet });
      _.Fk(a, b, c, d, e, h, g);
    },
    xyb = function () {},
    yyb = class {},
    zyb = class extends _.W {
      constructor() {
        super();
      }
      gj() {
        return _.L(this.Gg, 2);
      }
    },
    Ayb = [_.N, , , _.Qo, _.QZa];
  var Byb = class extends _.W {
    constructor(a) {
      super(a);
    }
    getStatus() {
      return _.H(this.Gg, 1, -1);
    }
    getLocation() {
      return _.Hi(this.Gg, 2, _.Vs);
    }
  };
  var tyb = class {
    constructor() {
      var a = _.ho,
        b = _.go;
      this.Eg = _.Ni;
      this.fetch = _.lx.bind(
        yyb,
        a,
        _.iy + "/maps/api/js/LayersService.GetFeature",
        b
      );
    }
    load(a, b) {
      function c(e) {
        b(new Byb(e));
      }
      const d = new zyb();
      ryb(d, a.layerId.split("|")[0]);
      _.Yg(d.Gg, 2, a.featureId);
      syb(d, this.Eg.Eg().Eg());
      for (const e in a.parameters) {
        const f = _.Ki(d.Gg, 4, _.AQ);
        _.Yg(f.Gg, 1, e);
        _.Yg(f.Gg, 2, a.parameters[e]);
      }
      a = _.Ai(d, Ayb, 1);
      this.fetch(a, c, c);
      return a;
    }
    cancel() {
      throw Error("Not implemented");
    }
  };
  xyb.prototype.rH = function (a) {
    if (_.an[15]) {
      var b = a.Kl;
      const c = (a.Kl = a.getMap());
      b &&
        a.Eg &&
        (a.Hg
          ? ((b = b.__gm.gk), b.set(b.get().ao(a.Eg)))
          : a.Eg &&
            _.aZa(a.Eg, b) &&
            ((a.Fg || []).forEach(_.vk), (a.Fg = null)));
      if (c) {
        b = new _.cw();
        const d = a.get("layerId").split("|");
        b.layerId = d[0];
        for (let e = 1; e < d.length; ++e) {
          const [f, ...g] = d[e].split(":");
          b.parameters[f] = g.join(":");
        }
        a.get("spotlightDescription") &&
          (b.spotlightDescription = new _.qw(a.get("spotlightDescription")));
        a.get("paintExperimentIds") &&
          (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
        a.get("styler") && (b.styler = new _.iw(a.get("styler")));
        a.get("roadmapStyler") &&
          (b.roadmapStyler = new _.iw(a.get("roadmapStyler")));
        a.get("travelMapRequest") &&
          (b.travelMapRequest = new _.xpa(a.get("travelMapRequest")));
        a.get("mapsApiLayer") &&
          (b.mapsApiLayer = new _.dw(a.get("mapsApiLayer")));
        a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
        a.get("clickableCities") &&
          (b.clickableCities = a.get("clickableCities"));
        a.get("searchPipeMetadata") &&
          (b.searchPipeMetadata = new _.Nx(a.get("searchPipeMetadata")));
        a.get("gmmContextPipeMetadata") &&
          (b.gmmContextPipeMetadata = new _.rna(
            a.get("gmmContextPipeMetadata")
          ));
        a.get("overlayLayer") &&
          (b.overlayLayer = new _.rw(a.get("overlayLayer")));
        a.get("caseExperimentIds") &&
          (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
        a.get("boostMapExperimentIds") &&
          (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
        a.get("airQualityPipeMetadata") &&
          (b.airQualityPipeMetadata = new _.bpa(
            a.get("airQualityPipeMetadata")
          ));
        a.get("directionsPipeParameters") &&
          (b.directionsPipeParameters = new _.Fy(
            a.get("directionsPipeParameters")
          ));
        a.get("clientSignalPipeMetadata") &&
          (b.clientSignalPipeMetadata = new _.Zma(
            a.get("clientSignalPipeMetadata")
          ));
        b.darkLaunch = !!a.get("darkLaunch");
        a.Eg = b;
        a.Hg = a.get("renderOnBaseMap");
        a.Hg ? ((a = c.__gm.gk), a.set(_.ir(a.get(), b))) : wyb(a, c, b);
        _.ql(c, "Lg");
        _.M(c, 148282);
      }
    }
  };
  _.lj("search_impl", new xyb());
});
