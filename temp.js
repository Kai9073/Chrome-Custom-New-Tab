(function() {
  var e = {
      exports: {}
  };
  e.exports = (e => {
      var t = {};

      function n(o) {
          if (t[o]) return t[o].exports;
          var a = t[o] = {
              i: o,
              l: !1,
              exports: {}
          };
          return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
      }
      return n.m = e, n.c = t, n.d = (e, t, o) => {
          n.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: o
          })
      }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, n.t = (e, t) => {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & t && "string" != typeof e)
              for (var a in e) n.d(o, a, (t => e[t]).bind(null, a));
          return o
      }, n.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, "a", t), t
      }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.p = "", n(n.s = 15)
  })([function(e, t, n) {
      "use strict";
      (e => {
          n.d(t, "b", () => r), n.d(t, "h", () => c), n.d(t, "i", () => l), n.d(t, "j", () => s), n.d(t, "k", () => i), n.d(t, "p", () => d), n.d(t, "r", () => u), n.d(t, "f", () => p), n.d(t, "v", () => f), n.d(t, "q", () => m), n.d(t, "c", () => y), n.d(t, "t", () => h), n.d(t, "d", () => v), n.d(t, "s", () => w), n.d(t, "u", () => g), n.d(t, "g", () => j), n.d(t, "o", () => O), n.d(t, "a", () => M), n.d(t, "m", () => _), n.d(t, "l", () => E), n.d(t, "n", () => G), n.d(t, "e", () => A);
          var o = n(8),
              a = n(1);
          const {
              Promise: r
          } = e, {
              filter: c,
              forEach: l,
              includes: s,
              join: i,
              map: d,
              push: u
          } = Array.prototype, {
              charCodeAt: p,
              slice: f,
              replace: b
          } = String.prototype, {
              toString: m
          } = Object.prototype, {
              addEventListener: y,
              removeEventListener: h
          } = EventTarget.prototype, {
              append: v,
              remove: w,
              setAttribute: g
          } = Element.prototype, {
              createElementNS: j
          } = Document.prototype, O = Object(a.a)({}, console), M = "http://www.w3.org/1999/xhtml", {
              Boolean: x,
              Uint8Array: S,
              isFinite: k
          } = e, {
              fromCharCode: T
          } = String, C = {
              '"': '\\"',
              "\\": "\\\\",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t"
          }, R = /[\\"\u0000-\u001F\u2028\u2029]/g, I = e => {
              var t;
              return C[e] || `\\u${(t=(t=p.call(e,0)+65536,o.c).call(t,16),f).call(t,1)}`
          }, _ = JSON.parse;

          function E(e) {
              if (null == e) return "null";
              const t = typeof e;
              if ("number" === t) return k(e) ? `${e}` : "null";
              if ("boolean" === t) return `${e}`;
              if ("object" === t) {
                  var n;
                  if ((r = e) && "number" == typeof r.length && "function" == typeof r.splice) return `[${(n=d.call(e,E),i).call(n,",")}]`;
                  if ("[object Object]" === m.call(e)) {
                      var o;
                      const t = (o = Object(a.g)(e), d).call(o, t => {
                          const n = e[t];
                          return void 0 !== n && `${E(t)}:${E(n)}`
                      });
                      return `{${(o=c.call(t,x),i).call(o,",")}}`
                  }
              }
              var r;
              return `"${b.call(e,R,I)}"`
          }

          function G(e, t, ...n) {
              var o;
              const a = ["Violentmonkey"];
              t && u.call(a, ...t);
              const r = (o = d.call(a, e => `[${e}]`), i).call(o, "");
              O[e](r, ...n)
          }

          function A(e) {
              const t = e.byteLength,
                  n = [];
              for (let o = 0; o < t; o += 1e4) {
                  const a = new S(e, o, Math.min(1e4, t - o));
                  u.call(n, T(...a))
              }
              return i.call(n, "")
          }
      }).call(this, n(7))
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", () => o), n.d(t, "c", () => a), n.d(t, "d", () => r), n.d(t, "f", () => c), n.d(t, "g", () => l), n.d(t, "i", () => s), n.d(t, "h", () => u), n.d(t, "e", () => f), n.d(t, "b", () => b);
      const {
          assign: o,
          defineProperty: a,
          getOwnPropertyDescriptor: r,
          entries: c,
          keys: l,
          values: s
      } = Object, {
          forEach: i,
          reduce: d
      } = Array.prototype;

      function u(e, t, n) {
          return d.call(t, (t, o) => {
              let a = null == e ? void 0 : e[o];
              return n && (a = n(a)), null != a && (t[o] = a), t
          }, {})
      }

      function p(e) {
          var t;
          return (t = c(this), d).call(t, (t, n, o, a) => (t[n[0]] = e(n, o, a), t), {})
      }

      function f(e) {
          var t;
          this && (t = c(this), i).call(t, e)
      }

      function b(e) {
          return e && (Array.isArray(e) && e.map(b) || "object" == typeof e && p.call(e, ([, e]) => b(e))) || e
      }
  }, (e, t, n) => {
      "use strict";
      var o = n(8),
          a = n(1),
          r = n(0);
      const c = {},
          l = {},
          s = {
              callbacks: l,
              load: () => {},
              addHandlers(e) {
                  Object(a.a)(c, e)
              },
              onHandle({
                  cmd: e,
                  data: t
              }) {
                  var n;
                  null == (n = c[e]) || n.call(c, t)
              },
              send: (e, t) => new r.b(n => {
                  i(e, t, n)
              }),
              sendSync(e, t) {
                  let n;
                  return i(e, t, e => {
                      n = e
                  }), n
              }
          };

      function i(e, t, n) {
          const a = Object(o.a)();
          l[a] = e => {
              delete l[a], n(e)
          }, s.post(e, {
              callbackId: a,
              payload: t
          })
      }
      t.a = s
  }, function(e, t, n) {
      "use strict";
      (e => {
          n.d(t, "b", () => o), n.d(t, "a", () => a), n.d(t, "c", () => r);
          const o = "page",
              a = "content",
              {
                  browser: r
              } = e
      }).call(this, n(7))
  }, function(e, t, n) {
      "use strict";
      (e => {
          n.d(t, "a", () => s), n.d(t, "d", () => d), n.d(t, "c", () => u), n.d(t, "b", () => p);
          var o = n(1),
              a = n(2),
              r = n(5),
              c = n(0);
          const {
              Number: l
          } = e, s = {}, i = {
              o: c.m,
              n: l,
              b: e => "true" === e
          };

          function d(e) {
              return r.a.values[e]
          }

          function u(e, t, n, o, r) {
              if (a.a.post("UpdateValue", {
                      id: e,
                      key: t,
                      value: o
                  }), o !== r) {
                  var c;
                  const a = null == (c = s[e]) ? void 0 : c[t];
                  a && f(a, t, n, o, r)
              }
          }

          function p(e) {
              const t = e[0],
                  n = i[t];
              let o = c.v.call(e, 1);
              try {
                  n && (o = n(o))
              } catch (e) {}
              return o
          }

          function f(e, t, n, a, r, l = !1) {
              var s;
              const i = r ? p(r) : void 0,
                  d = void 0 === n && a ? p(a) : n;
              (s = Object(o.i)(e), c.i).call(s, e => ((e, ...t) => {
                  try {
                      e(...t)
                  } catch (e) {
                      Object(c.n)("error", ["GM_addValueChangeListener", "callback"], e)
                  }
              })(e, t, i, d, l))
          }
          a.a.addHandlers({
              UpdatedValues(e) {
                  const {
                      partial: t
                  } = e;
                  o.e.call(e, ([e, n]) => {
                      const a = r.a.values[e];
                      if (a) {
                          const c = s[e];
                          c && ((e, t, n) => {
                              o.e.call(n, ([n, o]) => {
                                  const a = e[n];
                                  if (a) {
                                      o || (o = void 0);
                                      const e = t[n];
                                      e !== o && (t[n] = o, f(a, n, void 0, o, e, !0))
                                  }
                              })
                          })(c, a, n), t ? ((e, t) => {
                              o.e.call(t, ([t, n]) => {
                                  n ? e[t] = n : delete e[t]
                              })
                          })(a, n) : r.a.values[e] = n
                      }
                  })
              }
          })
      }).call(this, n(7))
  }, (e, t, n) => {
      "use strict";
      t.a = {
          commands: {},
          values: {},
          state: 0
      }
  }, (e, t, n) => {
      "use strict";
      n.d(t, "f", () => c), n.d(t, "e", () => l), n.d(t, "b", () => s), n.d(t, "c", () => i), n.d(t, "d", () => d), n.d(t, "a", () => p), n(3);
      const o = performance.now.bind(performance),
          {
              random: a,
              floor: r
          } = Math,
          {
              toString: c
          } = Number.prototype;

      function l() {}

      function s(e = "VM") {
          var t;
          const n = o();
          return e + (t = r(1e12 * (n - r(n))), c).call(t, 36) + (t = r(1e12 * a()), c).call(t, 36)
      }
      const {
          hasOwnProperty: i
      } = Object.prototype;

      function d(e) {
          for (const t in e)
              if (i.call(e, t)) return !1;
          return !0
      }
      const u = {
          string: "s",
          number: "n",
          boolean: "b"
      };

      function p(e, t = JSON.stringify) {
          if (void 0 !== e) {
              const n = u[typeof e];
              return `${n||"o"}${n?e:t(e)}`
          }
      }
  }, function(e, t) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || new Function("return this")()
      } catch (e) {
          "object" == typeof window && (n = window)
      }
      e.exports = n
  }, (e, t, n) => {
      "use strict";
      n(3), n(1);
      var o = n(6);
      n.d(t, "a", () => o.b), n.d(t, "b", () => o.c), n.d(t, "c", () => o.f)
  }, function(e, t, n) {
      "use strict";
      (function(e) {
          n.d(t, "b", () => C), n.d(t, "a", () => R);
          var o = n(6),
              a = n(1),
              r = n(2),
              c = n(5),
              l = n(11),
              s = n(10),
              i = n(12),
              d = n(4),
              u = n(0);
          const {
              atob: p,
              setTimeout: f,
              Blob: b,
              Error: m,
              TextDecoder: y,
              Uint8Array: h,
              Array: {
                  prototype: {
                      findIndex: v,
                      indexOf: w
                  }
              },
              Document: {
                  prototype: {
                      getElementById: g
                  }
              },
              HTMLElement: {
                  prototype: {
                      click: j
                  }
              },
              String: {
                  prototype: {
                      lastIndexOf: O
                  }
              },
              TextDecoder: {
                  prototype: {
                      decode: M
                  }
              },
              URL: {
                  createObjectURL: x,
                  revokeObjectURL: S
              }
          } = e, {
              get: k
          } = Object(a.d)(Document.prototype, "documentElement"), T = () => "[Violentmonkey property]", C = (e, t) => (Object(a.c)(e, "toString", {
              value: t || T
          }), e);

          function R() {
              return [{
                  GM_deleteValue(e) {
                      const {
                          id: t
                      } = this, n = Object(d.d)(t), o = n[e];
                      delete n[e], Object(d.c)(t, e, void 0, null, o)
                  },
                  GM_getValue(e, t) {
                      const n = Object(d.d)(this.id)[e];
                      return n ? Object(d.b)(n) : t
                  },
                  GM_listValues() {
                      return Object(a.g)(Object(d.d)(this.id))
                  },
                  GM_setValue(e, t) {
                      const {
                          id: n
                      } = this, a = Object(o.a)(t, u.l) || null, r = Object(d.d)(n), c = r[e];
                      r[e] = a, Object(d.c)(n, e, t, a, c)
                  },
                  GM_addValueChangeListener(e, t) {
                      var n;
                      if ("string" != typeof e && (e = `${e}`), "function" != typeof t) return;
                      const r = d.a[this.id] || (d.a[this.id] = {}),
                          c = r[e] || (r[e] = {}),
                          l = (n = Object(a.i)(c), w).call(n, t);
                      let s = l >= 0 && Object(a.g)(c)[l];
                      return s || (s = Object(o.b)("VMvc"), c[s] = t), s
                  },
                  GM_removeValueChangeListener(e) {
                      var t;
                      const n = d.a[this.id];
                      n && ((t = Object(a.f)(n), v).call(t, ([t, a]) => {
                          if (e in a) return delete a[e], Object(o.d)(a) && delete n[t], !0
                      }), Object(o.d)(n) && delete d.a[this.id])
                  },
                  GM_getResourceText(e) {
                      return I(this, e)
                  },
                  GM_getResourceURL(e) {
                      return I(this, e, !0)
                  },
                  GM_registerMenuCommand(e, t) {
                      const {
                          id: n
                      } = this, o = `${n}:${e}`;
                      return c.a.commands[o] = t, r.a.post("RegisterMenu", [n, e]), e
                  },
                  GM_unregisterMenuCommand(e) {
                      const {
                          id: t
                      } = this, n = `${t}:${e}`;
                      delete c.a.commands[n], r.a.post("UnregisterMenu", [t, e])
                  },
                  GM_download(e, t) {
                      let n, o = {};
                      if ("string" == typeof e ? o = {
                              url: e,
                              name: t
                          } : e && (t = e.name, n = e.onload, o = Object(a.h)(e, ["url", "headers", "timeout", "onerror", "onprogress", "ontimeout"])), !t || "string" != typeof t) throw new m('Required parameter "name" is missing or not a string.');
                      return Object(a.a)(o, {
                          context: {
                              name: t,
                              onload: n
                          },
                          method: "GET",
                          responseType: "blob",
                          overrideMimeType: "application/octet-stream",
                          onload: _
                      }), Object(s.a)(o, this.id)
                  },
                  GM_xmlhttpRequest(e) {
                      return Object(s.a)(e, this.id)
                  },
                  GM_addStyle(e) {
                      var t;
                      const n = r.a.sendSync("AddStyle", e),
                          o = (t = document, g).call(t, n);
                      return o.then = e => {
                          delete o.then, e(o)
                      }, o
                  },
                  GM_openInTab(e, t) {
                      const n = t && "object" == typeof t ? t : {
                          active: !t
                      };
                      return n.url = e, Object(l.a)(n)
                  },
                  GM_notification(e, t, n, o) {
                      const a = "object" == typeof e ? e : {
                          text: e,
                          title: t,
                          image: n,
                          onclick: o
                      };
                      if (!a.text) throw new m("GM_notification: `text` is required!");
                      const c = Object(i.a)(a);
                      return {
                          remove: C(() => r.a.send("RemoveNotification", c))
                      }
                  },
                  GM_setClipboard(e, t) {
                      r.a.post("SetClipboard", {
                          data: e,
                          type: t
                      })
                  },
                  GM_log: u.o.log
              }, {
                  getResourceURL: {
                      async: !0
                  },
                  getValue: {
                      async: !0
                  },
                  deleteValue: {
                      async: !0
                  },
                  setValue: {
                      async: !0
                  },
                  listValues: {
                      async: !0
                  },
                  xmlHttpRequest: {
                      alias: "xmlhttpRequest"
                  },
                  notification: !0,
                  openInTab: !0,
                  setClipboard: !0,
                  addStyle: !0
              }]
          }

          function I(e, t, n) {
              const o = e.resources[t];
              if (o) {
                  let t = n && e.urls[o];
                  if (!t) {
                      const r = c.a.cache[e.pathMap[o] || o];
                      if (r) {
                          const c = O.call(r, ","),
                              l = p(c < 0 ? r : u.v.call(r, c + 1)),
                              s = l.length,
                              i = new h(s);
                          for (let e = 0; e < s; e += 1) i[e] = u.f.call(l, e);
                          if (n) {
                              const n = c < 0 ? "" : u.v.call(r, 0, c);
                              t = x(new b([i], {
                                  type: n
                              })), e.urls[o] = t
                          } else {
                              var a;
                              t = (a = new y, M).call(a, i)
                          }
                      } else n && (t = o)
                  }
                  return t
              }
          }

          function _(e) {
              var t;
              const {
                  context: {
                      name: n,
                      onload: o
                  },
                  response: a
              } = e, r = x(a), c = (t = document, u.g).call(t, u.a, "a");
              u.u.call(c, "hidden", ""), u.u.call(c, "href", r), n && u.u.call(c, "download", n), (t = (t = document, k).call(t), u.d).call(t, c), j.call(c), f(() => {
                  u.s.call(c, c), S(r), null == o || o(e)
              }, 3e3)
          }
      }).call(this, n(7))
  }, function(e, t, n) {
      "use strict";
      (function(e) {
          n.d(t, "a", () => m);
          var o = n(1),
              a = n(0),
              r = n(2);
          const c = {},
              {
                  Blob: l,
                  DOMParser: s,
                  Error: i,
                  Uint8Array: d
              } = e,
              {
                  parseFromString: u
              } = s.prototype,
              {
                  then: p
              } = a.b.prototype,
              {
                  toLowerCase: f
              } = String.prototype,
              {
                  get: b
              } = Object(o.d)(HTMLAnchorElement.prototype, "href");

          function m(e, t) {
              var n;
              if (!e.url) throw new i('Required parameter "url" is missing.');
              const l = {
                  scriptId: t,
                  details: e,
                  req: {
                      abort() {
                          r.a.post("AbortRequest", l.id)
                      }
                  }
              };
              return e.url = (e => {
                  var t;
                  const n = (t = document, a.g).call(t, a.a, "a");
                  return a.u.call(n, "href", e), b.call(n)
              })(e.url), (n = r.a.send("GetRequestId", {
                  eventsToNotify: (n = ["abort", "error", "load", "loadend", "loadstart", "progress", "readystatechange", "timeout"], a.h).call(n, t => "function" == typeof e[`on${t}`]),
                  wantsBlob: "blob" === e.responseType
              }), p).call(n, e => (async (e, t) => {
                  const {
                      details: n,
                      scriptId: l
                  } = e, {
                      withCredentials: s = !0,
                      anonymous: i = !s
                  } = n, d = Object(o.a)({
                      id: t,
                      scriptId: l,
                      anonymous: i
                  }, Object(o.h)(n, ["headers", "method", "overrideMimeType", "password", "timeout", "url", "user"]));
                  e.id = t, c[t] = e;
                  const {
                      responseType: u
                  } = n;
                  var p;
                  u && ((p = ["arraybuffer", "blob"], a.j).call(p, u) ? d.chunkType = "blob" : (p = ["document", "json", "text"], a.j).call(p, u) || Object(a.n)("warn", null, `Unknown responseType "${u}", see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.`)), d.data = n.binary ? {
                      value: `${n.data}`,
                      cls: "blob"
                  } : await g(n.data), r.a.post("HttpRequest", d)
              })(l, e)), l.req
          }
          r.a.addHandlers({
              HttpRequested(e) {
                  const t = c[e.id];
                  t && async function(e, t) {
                      if (t.chunk) return ((e, {
                          chunk: t,
                          isLastChunk: n
                      }) => {
                          const {
                              chunks: o
                          } = e;
                          a.r.call(o, t), n && (delete e.chunksPromise, delete e.chunks, e.resolve(a.k.call(o, "")))
                      })(e, t);
                      const {
                          chunksPromise: n,
                          details: r
                      } = e, i = r[`on${t.type}`];
                      if (n && await n, i) {
                          var p;
                          const {
                              data: n
                          } = t, {
                              response: c,
                              responseHeaders: f,
                              responseText: b
                          } = n;
                          !("rawResponse" in e) && "text" !== (r.responseType || "text") && c && (e.rawResponse = t.numChunks > 1 ? ((e, t) => (e.chunks = [t], e.chunksPromise = new a.b(t => {
                              e.resolve = t
                          }), e.chunksPromise))(e, c, t.numChunks) : c), (null == (p = e.rawResponse) ? void 0 : p.then) && (e.rawResponse = await e.rawResponse), "rawResponse" in e && Object(o.c)(n, "response", {
                              configurable: !0,
                              get() {
                                  const n = ((e, t, n) => {
                                      const {
                                          responseType: o
                                      } = n;
                                      if ("json" === o) return Object(a.m)(e);
                                      if ("document" === o) {
                                          var r;
                                          const n = t.contentType.split(";", 1)[0] || "text/html";
                                          return (r = new s, u).call(r, e, n)
                                      }
                                      if ("arraybuffer" === t.chunkType) {
                                          const n = e.length,
                                              r = new d(n);
                                          for (let t = 0; t < n; t += 1) r[t] = a.f.call(e, t);
                                          return "blob" === o ? new l([r], {
                                              type: t.contentType
                                          }) : r.buffer
                                      }
                                      return e
                                  })(e.rawResponse, t, r);
                                  return Object(o.c)(this, "response", {
                                      value: n
                                  }), n
                              }
                          }), null != f && (e.headers = f), null != b && (e.text = "same" === b[0] ? c : b), n.context = r.context, n.responseHeaders = e.headers, n.responseText = e.text, i(n)
                      }
                      "loadend" === t.type && delete c[e.id]
                  }(t, e)
              }
          });
          const {
              keys: y,
              getAll: h
          } = FormData.prototype, {
              FileReader: v
          } = e, {
              readAsArrayBuffer: w
          } = v.prototype;
          async function g(e) {
              const t = (e => {
                  var t;
                  const n = typeof e;
                  if ("object" !== n) return n;
                  const o = a.q.call(e);
                  return (t = a.v.call(o, 8, -1), f).call(t)
              })(e);
              switch (t) {
                  case "formdata": {
                      var n;
                      const o = {},
                          r = async t => {
                              var n;
                              const r = (n = h.call(e, t), a.p).call(n, g);
                              o[t] = await a.b.all(r)
                          };
                      return await a.b.all((n = [...y.call(e)], a.p).call(n, r)), {
                          cls: t,
                          value: o
                      }
                  }
                  case "blob":
                  case "file":
                      return new a.b(n => {
                          const o = new v;
                          o.onload = () => n({
                              cls: t,
                              value: Object(a.e)(o.result),
                              type: e.type,
                              name: e.name,
                              lastModified: e.lastModified
                          }), w.call(o, e)
                      });
                  default:
                      if (e) return {
                          cls: t,
                          value: Object(a.l)(e)
                      }
              }
          }
      }).call(this, n(7))
  }, (e, t, n) => {
      "use strict";
      n.d(t, "a", () => c);
      var o = n(2);
      let a = 0;
      const r = {};

      function c(e) {
          a += 1;
          const t = a,
              n = {
                  onclose: null,
                  closed: !1,
                  close() {
                      o.a.post("TabClose", t)
                  }
              };
          return r[t] = n, o.a.post("TabOpen", {
              key: t,
              data: e
          }), n
      }
      o.a.addHandlers({
          TabClosed(e) {
              const t = r[e];
              t && (t.closed = !0, null == t.onclose || t.onclose(), delete r[e])
          }
      })
  }, (e, t, n) => {
      "use strict";
      n.d(t, "a", () => c);
      var o = n(2);
      let a = 0;
      const r = {};

      function c(e) {
          return a += 1, r[a] = e, o.a.post("Notification", {
              id: a,
              text: e.text,
              title: e.title,
              image: e.image
          }), a
      }
      o.a.addHandlers({
          NotificationClicked(e) {
              var t;
              null == (t = r[e]) || null == t.onclick || t.onclick()
          },
          NotificationClosed(e) {
              const t = r[e];
              t && (delete r[e], null == t.ondone || t.ondone())
          }
      })
  }, function(e, t, n) {
      "use strict";
      (e => {
          n.d(t, "a", () => c);
          var o = n(0);
          n(8);
          const {
              CustomEvent: a
          } = e, {
              dispatchEvent: r
          } = EventTarget.prototype;

          function c(e, t, n, c) {
              var l;
              (l = document, o.c).call(l, e, e => n(e.detail));
              const s = c && document.defaultView;
              return (e, n) => {
                  var o;
                  const l = {
                          cmd: e,
                          data: n
                      },
                      i = c ? c(l, s) : l,
                      d = new a(t, {
                          detail: i
                      });
                  (o = document, r).call(o, d)
              }
          }
      }).call(this, n(7))
  }, function(e, t, n) {
      "use strict";
      (function(e) {
          n.d(t, "a", () => I);
          var o = n(8),
              a = n(3),
              r = n(1),
              c = n(2),
              l = n(0),
              s = n(9);
          const {
              Proxy: i,
              Set: d,
              Symbol: {
                  toStringTag: u,
                  iterator: p
              },
              Array: {
                  prototype: {
                      concat: f,
                      slice: b
                  }
              },
              Function: {
                  prototype: {
                      bind: m
                  }
              },
              Map: {
                  prototype: {
                      get: y,
                      has: h,
                      [p]: v
                  }
              },
              Set: {
                  prototype: {
                      delete: w,
                      has: g,
                      [p]: j
                  }
              },
              Object: {
                  getOwnPropertyNames: O,
                  getOwnPropertySymbols: M
              },
              String: {
                  prototype: {
                      startsWith: x
                  }
              }
          } = e;
          let S, k, T;
          const C = o.b,
              R = window.top === window;

          function I(t) {
              const n = t.meta.grant || [];
              1 === n.length && "none" === n[0] && (n.length = 0);
              const o = t.props.id,
                  y = t.meta.resources || {},
                  h = {
                      id: o,
                      script: t,
                      resources: y,
                      pathMap: t.custom.pathMap || {},
                      urls: {}
                  },
                  v = ((e, t) => {
                      var n;
                      const {
                          meta: o
                      } = e, a = {};
                      return (n = Object(r.g)(o), l.i).call(n, e => {
                          var t;
                          let n = o[e];
                          switch (e) {
                              case "match":
                              case "excludeMatch":
                                  e += "e";
                              case "exclude":
                              case "include":
                                  e += "s", n = (t = n, b).call(t)
                          }
                          a[e] = n
                      }), (n = ["description", "name", "namespace", "runAt", "version"], l.i).call(n, e => {
                          a[e] || (a[e] = "")
                      }), a.resources = (n = Object(r.g)(t), l.p).call(n, e => ({
                          name: e,
                          url: t[e]
                      })), a.unwrap = !1, {
                          uuid: e.props.uuid,
                          scriptMetaStr: e.metaStr,
                          scriptWillUpdate: !!e.config.shouldUpdate,
                          scriptHandler: "Violentmonkey",
                          version: "2.12.9",
                          injectInto: c.a.mode,
                          platform: Object(r.a)({}, c.a.ua),
                          script: a
                      }
                  })(t, y),
                  I = {
                      GM: {
                          info: v
                      },
                      GM_info: v,
                      unsafeWindow: e
                  };
              return T || (T = (() => {
                  const t = c.a.mode === a.a && e;
                  return {
                      cloneInto: t.cloneInto || Object(s.b)(e => e),
                      createObjectIn: t.createObjectIn || Object(s.b)((e, {
                          defineAs: t
                      } = {}) => {
                          const n = {};
                          return t && (e[t] = n), n
                      }),
                      exportFunction: t.exportFunction || Object(s.b)((e, t, {
                          defineAs: n
                      } = {}) => (n && (t[n] = e), e))
                  }
              })()), Object(r.a)(I, T), R && l.j.call(n, "window.close") && (I.close = Object(s.b)(() => c.a.post("TabClose"))), S || ([S, k] = Object(s.a)()), l.i.call(n, e => {
                  const t = x.call(e, "GM.") && l.v.call(e, 3),
                      n = k[t],
                      o = S[n ? `GM_${n.alias||t}` : e];
                  if (o) {
                      const a = ((e, t, n) => e === S.GM_log ? e : Object(s.b)(n ? async (...n) => e.call(t, ...n): m.call(e, t)))(o, h, null == n ? void 0 : n.async);
                      n ? I.GM[t] = a : I[e] = a
                  }
              }), n.length ? (t => {
                  const n = {},
                      o = Symbol.unscopables,
                      a = new d(_);
                  a[p] = j, a.delete = w, a.has = g;
                  const c = new d(G);
                  c.delete = w, c.has = g, Object(r.c)(t, u, {
                      get: () => "Window"
                  });
                  const s = new i(t, {
                      defineProperty(e, n, o) {
                          const a = "string" == typeof n;
                          return P(n, a) || (Object(r.c)(t, n, o), a && y(n), c.delete(n)), !0
                      },
                      deleteProperty: (e, n) => !A.has(n) && delete t[n] && a.delete(n),
                      get(n, r) {
                          if ("undefined" !== r && r !== o) {
                              const n = t[r];
                              return void 0 !== n || C.call(t, r) ? n : (n => {
                                  let o = L.get(n);
                                  const r = o || E.has(n) || a.has(n);
                                  return o || !r && !P(n, "string" == typeof n) || (o = e[n]), o === window && (o = s), r && ("function" == typeof o || "object" == typeof o && o) && (t[n] = o), o
                              })(r)
                          }
                      },
                      getOwnPropertyDescriptor(n, o) {
                          const c = Object(r.d)(t, o),
                              l = c || a.has(o) && Object(r.d)(e, o);
                          if (l) {
                              if (l.value === window && (l.value = s), !c && !l.configurable) {
                                  const {
                                      get: n
                                  } = l;
                                  "function" == typeof n && (l.get = m.call(n, e)), Object(r.c)(t, o, b(l))
                              }
                              return l
                          }
                      },
                      has: (e, n) => "undefined" === n || C.call(t, n) || a.has(n),
                      ownKeys() {
                          var e;
                          return (e = [...a], f).call(e, (e = O(t), l.h).call(e, V, a), (e = M(t), l.h).call(e, V, a))
                      },
                      preventExtensions() {},
                      set(e, n, o) {
                          const a = "string" == typeof n;
                          return c.has(n) || P(n, a) || (t[n] = o, a && y(n, o)), !0
                      }
                  });
                  for (const [e, n] of A)("window" === e || "top" === e && R) && (delete n.get, delete n.set, n.value = s), Object(r.c)(t, e, b(n));

                  function b(e) {
                      return e && e.value === window && ((e = Object(r.a)({}, e)).value = s), e
                  }

                  function y(e, t) {
                      var o, r;
                      (o = e, x).call(o, "on") && a.has(e) && (e = (o = e, l.v).call(o, 2), (o = window, l.t).call(o, e, n[e]), "function" == typeof t ? (r = window, l.c).call(r, e, n[e] = m.call(t, window)) : delete n[e])
                  }
                  return s
              })(I) : I
          }
          const _ = O(window).filter(e => !P(e, !0));
          if (e !== window) {
              const t = new d(_);
              O(e).forEach(e => {
                  P(e) || t.has(e) || _.push(e)
              })
          }
          e.wrappedJSObject && _.push("wrappedJSObject");
          const E = new d([...O(EventTarget.prototype), ...O(Object.prototype)]);
          E.has = g;
          const G = ["applicationCache", "caches", "closed", "crossOriginIsolated", "crypto", "customElements", "frameElement", "history", "indexedDB", "isSecureContext", "localStorage", "mozInnerScreenX", "mozInnerScreenY", "navigator", "sessionStorage", "speechSynthesis", "styleMedia", "trustedTypes"].filter(t => t in e),
              A = new Map(["Infinity", "NaN", "document", "location", "top", "undefined", "window"].map(t => {
                  let n;
                  const o = Object(r.d)(n = e, t) || Object(r.d)(n = window, t);
                  var a;
                  return o && (o.get && (o.get = (a = o.get, m).call(a, n)), o.set && (o.set = (a = o.set, m).call(a, n))), o && [t, o]
              }).filter(Boolean));
          A.has = h, A[p] = v;
          const L = new Map(["addEventListener", "alert", "atob", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "dispatchEvent", "dump", "fetch", "find", "focus", "getComputedStyle", "getDefaultComputedStyle", "getSelection", "matchMedia", "moveBy", "moveTo", "open", "openDatabase", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents", "removeEventListener", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollByLines", "scrollByPages", "scrollTo", "setInterval", "setResizable", "setTimeout", "sizeToContent", "stop", "updateCommands", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL"].map(t => {
              const n = e[t];
              return "function" == typeof n && [t, m.call(n, e)]
          }).filter(Boolean));

          function P(e, t) {
              return t && e >= 0 && e <= 4294967294 && e === `${+e}`
          }

          function V(e) {
              return !this.has(e)
          }
          L.get = y
      }).call(this, n(7))
  }, function(e, t, n) {
      "use strict";
      n.r(t), (e => {
          n.d(t, "default", () => p);
          var o = n(3),
              a = n(1),
              r = n(13),
              c = n(0),
              l = n(2),
              s = n(14),
              i = n(5);
          n(4), n(12), n(10), n(11);
          const {
              document: d
          } = e, {
              get: u
          } = Object(a.d)(Document.prototype, "currentScript");

          function p(t, n, a) {
              let s;
              return a ? (l.a.mode = o.a, l.a.post = (e, t) => a({
                  cmd: e,
                  data: t
              }, o.a), s = (e, t) => l.a.onHandle({
                  cmd: e,
                  data: t
              }), e.chrome = void 0, e.browser = void 0) : (l.a.mode = o.b, l.a.post = Object(r.a)(t, n, l.a.onHandle), l.a.addHandlers({
                  Ping() {
                      l.a.post("Pong")
                  }
              })), l.a.load = new c.b(e => {
                  l.a.loadResolve = async () => await 1 && e(1), d.addEventListener("DOMContentLoaded", l.a.loadResolve, {
                      once: !0
                  })
              }), s
          }

          function f(e) {
              const {
                  dataKey: t,
                  values: n
              } = e;
              i.a.values[e.props.id] = n, window[t] ? b(e, window[t]) : Object(a.c)(window, t, {
                  configurable: !0,
                  set: t => b(e, t)
              })
          }
          async function b(e, t) {
              var n;
              delete window[e.dataKey];
              const o = u.call(d);
              o && c.s.call(o), "wait" === e.action && await l.a.load, (n = Object(s.a)(e), t).call(n, c.o.error)
          }
          l.a.addHandlers({
              Command(e) {
                  var t, n;
                  null == (t = (n = i.a.commands)[e]) || t.call(n)
              },
              Callback({
                  callbackId: e,
                  payload: t
              }) {
                  var n, o;
                  null == (n = (o = l.a.callbacks)[e]) || n.call(o, t)
              },
              ScriptData({
                  info: e,
                  items: t,
                  runAt: n
              }) {
                  e && (l.a.isFirefox = e.isFirefox, l.a.ua = e.ua, i.a.cache = e.cache), t && (c.i.call(t, f), l.a.isFirefox && l.a.mode === o.b && l.a.post("InjectList", n))
              },
              Expose() {
                  const e = {};
                  Object(a.c)(e, "version", {
                      value: "2.12.9"
                  }), Object(a.c)(e, "isInstalled", {
                      value: (e, t) => l.a.send("CheckScript", {
                          name: e,
                          namespace: t
                      })
                  }), Object(a.c)(window.external, "Violentmonkey", {
                      value: e
                  })
              }
          })
      }).call(this, n(7))
  }]);
  var t = e.exports;
  return t.__esModule ? t.default : t
}())('VM561yj3o86iqatxbq', 'VM4wv73f1x2fb6prkh')