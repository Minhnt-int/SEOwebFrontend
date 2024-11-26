google.maps.__gjsload__("geometry", function (_) {
  var $pa = function (a, b) {
      return Math.abs(_.wj(b - a, -180, 180));
    },
    aqa = function (a, b, c, d, e) {
      if (!d) {
        c = $pa(a.lng(), c) / $pa(a.lng(), b.lng());
        if (!e)
          return (
            (e = Math.sin(_.Yi(a.lat()))),
            (e = Math.log((1 + e) / (1 - e)) / 2),
            (b = Math.sin(_.Yi(b.lat()))),
            _.Zi(
              2 *
                Math.atan(
                  Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))
                ) -
                Math.PI / 2
            )
          );
        a = e.fromLatLngToPoint(a);
        b = e.fromLatLngToPoint(b);
        return e
          .fromPointToLatLng(
            new _.wl(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))
          )
          .lat();
      }
      e = _.Yi(a.lat());
      a = _.Yi(a.lng());
      d = _.Yi(b.lat());
      b = _.Yi(b.lng());
      c = _.Yi(c);
      return _.wj(
        _.Zi(
          Math.atan2(
            Math.sin(e) * Math.cos(d) * Math.sin(c - b) -
              Math.sin(d) * Math.cos(e) * Math.sin(c - a),
            Math.cos(e) * Math.cos(d) * Math.sin(a - b)
          )
        ),
        -90,
        90
      );
    },
    bqa = function (a, b) {
      a = new _.fk(a, !1);
      b = new _.fk(b, !1);
      return a.equals(b);
    },
    cqa = function (a, b, c) {
      a = _.jk(a);
      c = c || 1e-9;
      const d = _.wj(a.lng(), -180, 180),
        e = b instanceof _.Mn,
        f = !!b.get("geodesic"),
        g = b.get("latLngs");
      b = b.get("map");
      b = !f && b ? b.getProjection() : null;
      for (let t = 0, u = g.getLength(); t < u; ++t) {
        const w = g.getAt(t),
          x = w.getLength(),
          z = e ? x : x - 1;
        for (let B = 0; B < z; ++B) {
          var h = w.getAt(B);
          const D = w.getAt((B + 1) % x);
          if (bqa(h, a) || bqa(D, a)) return !0;
          var k = _.wj(h.lng(), -180, 180),
            m = _.wj(D.lng(), -180, 180);
          const F = Math.max(k, m),
            I = Math.min(k, m);
          if (
            (k =
              Math.abs(_.wj(k - m, -180, 180)) <= 1e-9 &&
              (Math.abs(_.wj(k - d, -180, 180)) <= c ||
                Math.abs(_.wj(m - d, -180, 180)) <= c))
          ) {
            k = a.lat();
            m = Math.min(h.lat(), D.lat()) - c;
            var p = Math.max(h.lat(), D.lat()) + c;
            k = k >= m && k <= p;
          }
          if (k) return !0;
          if (F - I > 180 ? d + c >= F || d - c <= I : d + c >= I && d - c <= F)
            if (((h = aqa(h, D, d, f, b)), Math.abs(h - a.lat()) < c))
              return !0;
        }
      }
      return !1;
    },
    dqa = function (a, b) {
      const c = [];
      let d = [0, 0],
        e;
      for (let f = 0, g = _.sj(a); f < g; ++f)
        (e = b ? b(a[f]) : a[f]),
          kz.hF(e[0] - d[0], c),
          kz.hF(e[1] - d[1], c),
          (d = e);
      return c.join("");
    },
    lz = class {};
  lz.isLocationOnEdge = cqa;
  lz.containsLocation = function (a, b) {
    a = _.jk(a);
    const c = _.wj(a.lng(), -180, 180),
      d = !!b.get("geodesic"),
      e = b.get("latLngs");
    var f = b.get("map");
    f = !d && f ? f.getProjection() : null;
    let g = !1;
    for (let k = 0, m = e.getLength(); k < m; ++k) {
      const p = e.getAt(k);
      for (let t = 0, u = p.getLength(); t < u; ++t) {
        const w = p.getAt(t),
          x = p.getAt((t + 1) % u);
        var h = _.wj(w.lng(), -180, 180);
        const z = _.wj(x.lng(), -180, 180),
          B = Math.max(h, z);
        h = Math.min(h, z);
        (B - h > 180 ? c >= B || c < h : c < B && c >= h) &&
          aqa(w, x, c, d, f) < a.lat() &&
          (g = !g);
      }
    }
    return g || cqa(a, b);
  };
  var kz = {
    decodePath: function (a) {
      const b = _.sj(a),
        c = Array(Math.floor(a.length / 2));
      let d = 0,
        e = 0,
        f = 0,
        g;
      for (g = 0; d < b; ++g) {
        let h = 1,
          k = 0,
          m;
        do (m = a.charCodeAt(d++) - 63 - 1), (h += m << k), (k += 5);
        while (m >= 31);
        e += h & 1 ? ~(h >> 1) : h >> 1;
        h = 1;
        k = 0;
        do (m = a.charCodeAt(d++) - 63 - 1), (h += m << k), (k += 5);
        while (m >= 31);
        f += h & 1 ? ~(h >> 1) : h >> 1;
        c[g] = new _.fk(e * 1e-5, f * 1e-5, !0);
      }
      c.length = g;
      return c;
    },
  };
  _.Fa(
    "module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath",
    kz.decodePath
  );
  kz.encodePath = function (a) {
    a instanceof _.nm && (a = a.getArray());
    a = (0, _.Ok)(a);
    return dqa(a, function (b) {
      return [Math.round(b.lat() * 1e5), Math.round(b.lng() * 1e5)];
    });
  };
  _.Fa(
    "module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath",
    kz.encodePath
  );
  kz.hF = function (a, b) {
    for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32; )
      b.push(String.fromCharCode((32 | (a & 31)) + 63)), (a >>= 5);
    b.push(String.fromCharCode(a + 63));
  };
  var eqa = { encoding: kz, spherical: _.dq, poly: lz };
  _.ra.google.maps.geometry = eqa;
  _.lj("geometry", eqa);
});
