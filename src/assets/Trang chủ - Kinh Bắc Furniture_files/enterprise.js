/* PLEASE DO NOT COPY AND PASTE THIS CODE. */ (function () {
  var w = window,
    C = "___grecaptcha_cfg",
    cfg = (w[C] = w[C] || {}),
    N = "grecaptcha";
  var E = "enterprise",
    a = (w[N] = w[N] || {}),
    gr = (a[E] = a[E] || {});
  gr.ready =
    gr.ready ||
    function (f) {
      (cfg["fns"] = cfg["fns"] || []).push(f);
    };
  w["__recaptcha_api"] = "https://www.google.com/recaptcha/enterprise/";
  (cfg["enterprise"] = cfg["enterprise"] || []).push(true);
  (cfg["enterprise2fa"] = cfg["enterprise2fa"] || []).push(true);
  (cfg["render"] = cfg["render"] || []).push(
    "6Ld8PnonAAAAABZBJx0HdKu9b6_pdgiMBc2BPKsY"
  );
  w["__google_recaptcha_client"] = true;
  var d = document,
    po = d.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.charset = "utf-8";
  po.src =
    "https://www.gstatic.com/recaptcha/releases/-ZG7BC9TxCVEbzIO2m429usb/recaptcha__en.js";
  po.crossOrigin = "anonymous";
  po.integrity =
    "sha384-gaZtYaI7oJHEOo1YO6VuoCE4iZ5fMV9mYHP0BHf+r2ttABnpWWCIkgI6ItNW4ZdO";
  var e = d.querySelector("script[nonce]"),
    n = e && (e["nonce"] || e.getAttribute("nonce"));
  if (n) {
    po.setAttribute("nonce", n);
  }
  var s = d.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);
})();
