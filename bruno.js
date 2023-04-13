var _asset_pipeline_loaded_modules = _asset_pipeline_loaded_modules || {}
  , _asset_pipeline_require = function(q) {
    var E = _asset_pipeline_loaded_modules[q];
    if (void 0 != E)
        return E.exports;
    E = _asset_pipeline_modules[q];
    return void 0 != E ? (_asset_pipeline_loaded_modules[q] = E(),
    _asset_pipeline_loaded_modules[q].exports) : null
}
  , _asset_pipeline_modules = _asset_pipeline_modules || {};
_asset_pipeline_modules["jquery/jquery.js"] = function() {
    var q = {
        exports: {}
    }
      , E = E || {};
    E["jquery/jquery.js"] = function() {
        return {
            exports: {}
        }
    }
    ;
    (function(na, E) {
        "object" === typeof q && "object" === typeof q.exports ? q.exports = na.document ? E(na, !0) : function(q) {
            if (!q.document)
                throw Error("jQuery requires a window with a document");
            return E(q)
        }
        : E(na)
    }
    )("undefined" !== typeof window ? window : this, function(q, E) {
        function Za(a) {
            var f = a.length
              , b = e.type(a);
            return "function" === b || e.isWindow(a) ? !1 : 1 === a.nodeType && f ? !0 : "array" === b || 0 === f || "number" === typeof f && 0 < f && f - 1 in a
        }
        function sb(a, f, b) {
            if (e.isFunction(f))
                return e.grep(a, function(a, c) {
                    return !!f.call(a, c, a) !== b
                });
            if (f.nodeType)
                return e.grep(a, function(a) {
                    return a === f !== b
                });
            if ("string" === typeof f) {
                if (x.test(f))
                    return e.filter(f, a, b);
                f = e.filter(f, a)
            }
            return e.grep(a, function(a) {
                return 0 <= e.inArray(a, f) !== b
            })
        }
        function tb(a, f) {
            do
                a = a[f];
            while (a && 1 !== a.nodeType);
            return a
        }
        function ba(a) {
            var f = $b[a] = {};
            e.each(a.match(T) || [], function(a, b) {
                f[b] = !0
            });
            return f
        }
        function ub() {
            w.addEventListener ? (w.removeEventListener("DOMContentLoaded", ca, !1),
            q.removeEventListener("load", ca, !1)) : (w.detachEvent("onreadystatechange", ca),
            q.detachEvent("onload", ca))
        }
        function ca() {
            if (w.addEventListener || "load" === event.type || "complete" === w.readyState)
                ub(),
                e.ready()
        }
        function vb(a, f, b) {
            if (void 0 === b && 1 === a.nodeType)
                if (b = "data-" + f.replace(ya, "-$1").toLowerCase(),
                b = a.getAttribute(b),
                "string" === typeof b) {
                    try {
                        b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : $a.test(b) ? e.parseJSON(b) : b
                    } catch (h) {}
                    e.data(a, f, b)
                } else
                    b = void 0;
            return b
        }
        function ab(a) {
            for (var f in a)
                if (("data" !== f || !e.isEmptyObject(a[f])) && "toJSON" !== f)
                    return !1;
            return !0
        }
        function Oa(a, f, b, h) {
            if (e.acceptData(a)) {
                var c = e.expando
                  , d = a.nodeType
                  , l = d ? e.cache : a
                  , m = d ? a[c] : a[c] && c;
                if (m && l[m] && (h || l[m].data) || void 0 !== b || "string" !== typeof f) {
                    m || (m = d ? a[c] = da.pop() || e.guid++ : c);
                    l[m] || (l[m] = d ? {} : {
                        toJSON: e.noop
                    });
                    if ("object" === typeof f || "function" === typeof f)
                        h ? l[m] = e.extend(l[m], f) : l[m].data = e.extend(l[m].data, f);
                    a = l[m];
                    h || (a.data || (a.data = {}),
                    a = a.data);
                    void 0 !== b && (a[e.camelCase(f)] = b);
                    "string" === typeof f ? (b = a[f],
                    null == b && (b = a[e.camelCase(f)])) : b = a;
                    return b
                }
            }
        }
        function ua(a, f, b) {
            if (e.acceptData(a)) {
                var h, c, d = a.nodeType, l = d ? e.cache : a, m = d ? a[e.expando] : e.expando;
                if (l[m]) {
                    if (f && (h = b ? l[m] : l[m].data)) {
                        e.isArray(f) ? f = f.concat(e.map(f, e.camelCase)) : f in h ? f = [f] : (f = e.camelCase(f),
                        f = f in h ? [f] : f.split(" "));
                        for (c = f.length; c--; )
                            delete h[f[c]];
                        if (b ? !ab(h) : !e.isEmptyObject(h))
                            return
                    }
                    if (!b && (delete l[m].data,
                    !ab(l[m])))
                        return;
                    d ? e.cleanData([a], !0) : v.deleteExpando || l != l.window ? delete l[m] : l[m] = null
                }
            }
        }
        function Pa() {
            return !0
        }
        function za() {
            return !1
        }
        function z() {
            try {
                return w.activeElement
            } catch (a) {}
        }
        function ac(a) {
            var f = wb.split("|");
            a = a.createDocumentFragment();
            if (a.createElement)
                for (; f.length; )
                    a.createElement(f.pop());
            return a
        }
        function O(a, f) {
            var b, h, c = 0, d = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(f || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(f || "*") : void 0;
            if (!d)
                for (d = [],
                b = a.childNodes || a; null != (h = b[c]); c++)
                    !f || e.nodeName(h, f) ? d.push(h) : e.merge(d, O(h, f));
            return void 0 === f || f && e.nodeName(a, f) ? e.merge([a], d) : d
        }
        function bc(a) {
            xb.test(a.type) && (a.defaultChecked = a.checked)
        }
        function yb(a, f) {
            return e.nodeName(a, "table") && e.nodeName(11 !== f.nodeType ? f : f.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function bb(a) {
            a.type = (null !== e.find.attr(a, "type")) + "/" + a.type;
            return a
        }
        function zb(a) {
            var f = ea.exec(a.type);
            f ? a.type = f[1] : a.removeAttribute("type");
            return a
        }
        function cb(a, f) {
            for (var b, h = 0; null != (b = a[h]); h++)
                e._data(b, "globalEval", !f || e._data(f[h], "globalEval"))
        }
        function Ab(a, f) {
            if (1 === f.nodeType && e.hasData(a)) {
                var b, h, c;
                h = e._data(a);
                a = e._data(f, h);
                var d = h.events;
                if (d)
                    for (b in delete a.handle,
                    a.events = {},
                    d)
                        for (h = 0,
                        c = d[b].length; h < c; h++)
                            e.event.add(f, b, d[b][h]);
                a.data && (a.data = e.extend({}, a.data))
            }
        }
        function Bb(a, f) {
            a = e(f.createElement(a)).appendTo(f.body);
            f = q.getDefaultComputedStyle ? q.getDefaultComputedStyle(a[0]).display : e.css(a[0], "display");
            a.detach();
            return f
        }
        function Cb(a) {
            var f = w
              , b = Qa[a];
            b || (b = Bb(a, f),
            "none" !== b && b || (Ha = (Ha || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(f.documentElement),
            f = (Ha[0].contentWindow || Ha[0].contentDocument).document,
            f.write(),
            f.close(),
            b = Bb(a, f),
            Ha.detach()),
            Qa[a] = b);
            return b
        }
        function Db(a, f) {
            return {
                get: function() {
                    var b = a();
                    if (null != b)
                        if (b)
                            delete this.get;
                        else
                            return (this.get = f).apply(this, arguments)
                }
            }
        }
        function Eb(a, f) {
            if (f in a)
                return f;
            for (var b = f.charAt(0).toUpperCase() + f.slice(1), h = f, c = Ra.length; c--; )
                if (f = Ra[c] + b,
                f in a)
                    return f;
            return h
        }
        function Fb(a, f) {
            for (var b, h, c, d = [], l = 0, m = a.length; l < m; l++)
                h = a[l],
                h.style && (d[l] = e._data(h, "olddisplay"),
                b = h.style.display,
                f ? (d[l] || "none" !== b || (h.style.display = ""),
                "" === h.style.display && fa(h) && (d[l] = e._data(h, "olddisplay", Cb(h.nodeName)))) : d[l] || (c = fa(h),
                (b && "none" !== b || !c) && e._data(h, "olddisplay", c ? b : e.css(h, "display"))));
            for (l = 0; l < m; l++)
                h = a[l],
                !h.style || f && "none" !== h.style.display && "" !== h.style.display || (h.style.display = f ? d[l] || "" : "none");
            return a
        }
        function Gb(a, f, b) {
            return (a = Bc.exec(f)) ? Math.max(0, a[1] - (b || 0)) + (a[2] || "px") : f
        }
        function V(a, f, b, c, g) {
            f = b === (c ? "border" : "content") ? 4 : "width" === f ? 1 : 0;
            for (var d = 0; 4 > f; f += 2)
                "margin" === b && (d += e.css(a, b + Z[f], !0, g)),
                c ? ("content" === b && (d -= e.css(a, "padding" + Z[f], !0, g)),
                "margin" !== b && (d -= e.css(a, "border" + Z[f] + "Width", !0, g))) : (d += e.css(a, "padding" + Z[f], !0, g),
                "padding" !== b && (d += e.css(a, "border" + Z[f] + "Width", !0, g)));
            return d
        }
        function Hb(a, f, b) {
            var c = !0
              , g = "width" === f ? a.offsetWidth : a.offsetHeight
              , d = Ca(a)
              , l = v.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, d);
            if (0 >= g || null == g) {
                g = ga(a, f, d);
                if (0 > g || null == g)
                    g = a.style[f];
                if (W.test(g))
                    return g;
                c = l && (v.boxSizingReliable() || g === a.style[f]);
                g = parseFloat(g) || 0
            }
            return g + V(a, f, b || (l ? "border" : "content"), c, d) + "px"
        }
        function R(a, f, b, c, g) {
            return new R.prototype.init(a,f,b,c,g)
        }
        function Ib() {
            setTimeout(function() {
                Ia = void 0
            });
            return Ia = e.now()
        }
        function db(a, f) {
            var b, c = {
                height: a
            }, g = 0;
            for (f = f ? 1 : 0; 4 > g; g += 2 - f)
                b = Z[g],
                c["margin" + b] = c["padding" + b] = a;
            f && (c.opacity = c.width = a);
            return c
        }
        function Jb(a, f, b) {
            for (var c, g = (ha[f] || []).concat(ha["*"]), d = 0, e = g.length; d < e; d++)
                if (c = g[d].call(b, f, a))
                    return c
        }
        function cc(a, f) {
            var b, c, g, d, l;
            for (b in a)
                if (c = e.camelCase(b),
                g = f[c],
                d = a[b],
                e.isArray(d) && (g = d[1],
                d = a[b] = d[0]),
                b !== c && (a[c] = d,
                delete a[b]),
                (l = e.cssHooks[c]) && "expand"in l)
                    for (b in d = l.expand(d),
                    delete a[c],
                    d)
                        b in a || (a[b] = d[b],
                        f[b] = g);
                else
                    f[c] = g
        }
        function Kb(a, f, b) {
            var c, g = 0, d = eb.length, l = e.Deferred().always(function() {
                delete m.elem
            }), m = function() {
                if (c)
                    return !1;
                for (var f = Ia || Ib(), f = Math.max(0, n.startTime + n.duration - f), b = 1 - (f / n.duration || 0), p = 0, g = n.tweens.length; p < g; p++)
                    n.tweens[p].run(b);
                l.notifyWith(a, [n, b, f]);
                if (1 > b && g)
                    return f;
                l.resolveWith(a, [n]);
                return !1
            }, n = l.promise({
                elem: a,
                props: e.extend({}, f),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, b),
                originalProperties: f,
                originalOptions: b,
                startTime: Ia || Ib(),
                duration: b.duration,
                tweens: [],
                createTween: function(f, b) {
                    f = e.Tween(a, n.opts, f, b, n.opts.specialEasing[f] || n.opts.easing);
                    n.tweens.push(f);
                    return f
                },
                stop: function(f) {
                    var b = 0
                      , p = f ? n.tweens.length : 0;
                    if (c)
                        return this;
                    for (c = !0; b < p; b++)
                        n.tweens[b].run(1);
                    f ? l.resolveWith(a, [n, f]) : l.rejectWith(a, [n, f]);
                    return this
                }
            });
            b = n.props;
            for (cc(b, n.opts.specialEasing); g < d; g++)
                if (f = eb[g].call(n, a, b, n.opts))
                    return f;
            e.map(b, Jb, n);
            e.isFunction(n.opts.start) && n.opts.start.call(a, n);
            e.fx.timer(e.extend(m, {
                elem: a,
                anim: n,
                queue: n.opts.queue
            }));
            return n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
        }
        function fb(a) {
            return function(f, b) {
                "string" !== typeof f && (b = f,
                f = "*");
                var c = 0
                  , g = f.toLowerCase().match(T) || [];
                if (e.isFunction(b))
                    for (; f = g[c++]; )
                        "+" === f.charAt(0) ? (f = f.slice(1) || "*",
                        (a[f] = a[f] || []).unshift(b)) : (a[f] = a[f] || []).push(b)
            }
        }
        function gb(a, f, b, c) {
            function g(m) {
                var n;
                d[m] = !0;
                e.each(a[m] || [], function(a, e) {
                    a = e(f, b, c);
                    if ("string" === typeof a && !l && !d[a])
                        return f.dataTypes.unshift(a),
                        g(a),
                        !1;
                    if (l)
                        return !(n = a)
                });
                return n
            }
            var d = {}
              , l = a === Lb;
            return g(f.dataTypes[0]) || !d["*"] && g("*")
        }
        function hb(a, f) {
            var b, c, g = e.ajaxSettings.flatOptions || {};
            for (c in f)
                void 0 !== f[c] && ((g[c] ? a : b || (b = {}))[c] = f[c]);
            b && e.extend(!0, a, b);
            return a
        }
        function ib(a, f, b, c) {
            var g;
            if (e.isArray(f))
                e.each(f, function(f, g) {
                    b || Cc.test(a) ? c(a, g) : ib(a + "[" + ("object" === typeof g ? f : "") + "]", g, b, c)
                });
            else if (b || "object" !== e.type(f))
                c(a, f);
            else
                for (g in f)
                    ib(a + "[" + g + "]", f[g], b, c)
        }
        function ia() {
            try {
                return new q.XMLHttpRequest
            } catch (a) {}
        }
        function oa(a) {
            return e.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var da = []
          , aa = da.slice
          , Mb = da.concat
          , Ja = da.push
          , dc = da.indexOf
          , pa = {}
          , Nb = pa.toString
          , u = pa.hasOwnProperty
          , d = "".trim
          , v = {}
          , e = function(a, f) {
            return new e.fn.init(a,f)
        }
          , Dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , Ec = /^-ms-/
          , Ka = /-([\da-z])/gi
          , ec = function(a, f) {
            return f.toUpperCase()
        };
        e.fn = e.prototype = {
            jquery: "0",
            constructor: e,
            selector: "",
            length: 0,
            toArray: function() {
                return aa.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : aa.call(this)
            },
            pushStack: function(a) {
                a = e.merge(this.constructor(), a);
                a.prevObject = this;
                a.context = this.context;
                return a
            },
            each: function(a, f) {
                return e.each(this, a, f)
            },
            map: function(a) {
                return this.pushStack(e.map(this, function(f, b) {
                    return a.call(f, b, f)
                }))
            },
            slice: function() {
                return this.pushStack(aa.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var f = this.length;
                a = +a + (0 > a ? f : 0);
                return this.pushStack(0 <= a && a < f ? [this[a]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Ja,
            sort: da.sort,
            splice: da.splice
        };
        e.extend = e.fn.extend = function() {
            var a, f, b, c, g, d = arguments[0] || {}, l = 1, m = arguments.length, n = !1;
            "boolean" === typeof d && (n = d,
            d = arguments[l] || {},
            l++);
            "object" === typeof d || e.isFunction(d) || (d = {});
            l === m && (d = this,
            l--);
            for (; l < m; l++)
                if (null != (g = arguments[l]))
                    for (c in g)
                        a = d[c],
                        b = g[c],
                        d !== b && (n && b && (e.isPlainObject(b) || (f = e.isArray(b))) ? (f ? (f = !1,
                        a = a && e.isArray(a) ? a : []) : a = a && e.isPlainObject(a) ? a : {},
                        d[c] = e.extend(n, a, b)) : void 0 !== b && (d[c] = b));
            return d
        }
        ;
        e.extend({
            expando: "jQuery" + Math.random(),
            isReady: !0,
            error: function(a) {
                throw Error(a);
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === e.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === e.type(a)
            }
            ,
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return 0 <= a - parseFloat(a)
            },
            isEmptyObject: function(a) {
                for (var f in a)
                    return !1;
                return !0
            },
            isPlainObject: function(a) {
                var f;
                if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !u.call(a, "constructor") && !u.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (b) {
                    return !1
                }
                if (v.ownLast)
                    for (f in a)
                        return u.call(a, f);
                for (f in a)
                    ;
                return void 0 === f || u.call(a, f)
            },
            type: function(a) {
                return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? pa[Nb.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                a && e.trim(a) && (q.execScript || function(a) {
                    q.eval.call(q, a)
                }
                )(a)
            },
            camelCase: function(a) {
                return a.replace(Ec, "ms-").replace(Ka, ec)
            },
            nodeName: function(a, f) {
                return a.nodeName && a.nodeName.toLowerCase() === f.toLowerCase()
            },
            each: function(a, f, b) {
                var c, d = 0, e = a.length;
                c = Za(a);
                if (b)
                    if (c)
                        for (; d < e && (c = f.apply(a[d], b),
                        !1 !== c); d++)
                            ;
                    else
                        for (d in a) {
                            if (c = f.apply(a[d], b),
                            !1 === c)
                                break
                        }
                else if (c)
                    for (; d < e && (c = f.call(a[d], d, a[d]),
                    !1 !== c); d++)
                        ;
                else
                    for (d in a)
                        if (c = f.call(a[d], d, a[d]),
                        !1 === c)
                            break;
                return a
            },
            trim: d && !d.call("\ufeff\u00a0") ? function(a) {
                return null == a ? "" : d.call(a)
            }
            : function(a) {
                return null == a ? "" : (a + "").replace(Dc, "")
            }
            ,
            makeArray: function(a, f) {
                f = f || [];
                null != a && (Za(Object(a)) ? e.merge(f, "string" === typeof a ? [a] : a) : Ja.call(f, a));
                return f
            },
            inArray: function(a, f, b) {
                var c;
                if (f) {
                    if (dc)
                        return dc.call(f, a, b);
                    c = f.length;
                    for (b = b ? 0 > b ? Math.max(0, c + b) : b : 0; b < c; b++)
                        if (b in f && f[b] === a)
                            return b
                }
                return -1
            },
            merge: function(a, f) {
                for (var b = +f.length, c = 0, d = a.length; c < b; )
                    a[d++] = f[c++];
                if (b !== b)
                    for (; void 0 !== f[c]; )
                        a[d++] = f[c++];
                a.length = d;
                return a
            },
            grep: function(a, f, b) {
                for (var c = [], d = 0, e = a.length, l = !b; d < e; d++)
                    b = !f(a[d], d),
                    b !== l && c.push(a[d]);
                return c
            },
            map: function(a, f, b) {
                var c, d = 0, e = a.length, l = [];
                if (Za(a))
                    for (; d < e; d++)
                        c = f(a[d], d, b),
                        null != c && l.push(c);
                else
                    for (d in a)
                        c = f(a[d], d, b),
                        null != c && l.push(c);
                return Mb.apply([], l)
            },
            guid: 1,
            proxy: function(a, f) {
                var b, c;
                "string" === typeof f && (c = a[f],
                f = a,
                a = c);
                if (e.isFunction(a))
                    return b = aa.call(arguments, 2),
                    c = function() {
                        return a.apply(f || this, b.concat(aa.call(arguments)))
                    }
                    ,
                    c.guid = a.guid = a.guid || e.guid++,
                    c
            },
            now: function() {
                return +new Date
            },
            support: v
        });
        e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, f) {
            pa["[object " + f + "]"] = f.toLowerCase()
        });
        var Da = function(a) {
            function f(a, f, b, c) {
                var p, h, d, g, e;
                (f ? f.ownerDocument || f : Aa) !== F && M(f);
                f = f || F;
                b = b || [];
                if (!a || "string" !== typeof a)
                    return b;
                if (1 !== (g = f.nodeType) && 9 !== g)
                    return [];
                if (K && !c) {
                    if (p = ka.exec(a))
                        if (d = p[1])
                            if (9 === g)
                                if ((h = f.getElementById(d)) && h.parentNode) {
                                    if (h.id === d)
                                        return b.push(h),
                                        b
                                } else
                                    return b;
                            else {
                                if (f.ownerDocument && (h = f.ownerDocument.getElementById(d)) && Q(f, h) && h.id === d)
                                    return b.push(h),
                                    b
                            }
                        else {
                            if (p[2])
                                return la.apply(b, f.getElementsByTagName(a)),
                                b;
                            if ((d = p[3]) && P.getElementsByClassName && f.getElementsByClassName)
                                return la.apply(b, f.getElementsByClassName(d)),
                                b
                        }
                    if (P.qsa && (!D || !D.test(a))) {
                        h = p = I;
                        d = f;
                        e = 9 === g && a;
                        if (1 === g && "object" !== f.nodeName.toLowerCase()) {
                            g = q(a);
                            (p = f.getAttribute("id")) ? h = p.replace(ta, "\\$&") : f.setAttribute("id", h);
                            h = "[id='" + h + "'] ";
                            for (d = g.length; d--; )
                                g[d] = h + u(g[d]);
                            d = va.test(a) && r(f.parentNode) || f;
                            e = g.join(",")
                        }
                        if (e)
                            try {
                                return la.apply(b, d.querySelectorAll(e)),
                                b
                            } catch (k) {} finally {
                                p || f.removeAttribute("id")
                            }
                    }
                }
                var l;
                a: {
                    a = a.replace(ga, "$1");
                    h = q(a);
                    if (!c && 1 === h.length) {
                        p = h[0] = h[0].slice(0);
                        if (2 < p.length && "ID" === (l = p[0]).type && P.getById && 9 === f.nodeType && K && L.relative[p[1].type]) {
                            f = (L.find.ID(l.matches[0].replace(S, ma), f) || [])[0];
                            if (!f) {
                                l = b;
                                break a
                            }
                            a = a.slice(p.shift().value.length)
                        }
                        for (g = U.needsContext.test(a) ? 0 : p.length; g--; ) {
                            l = p[g];
                            if (L.relative[d = l.type])
                                break;
                            if (d = L.find[d])
                                if (c = d(l.matches[0].replace(S, ma), va.test(p[0].type) && r(f.parentNode) || f)) {
                                    p.splice(g, 1);
                                    a = c.length && u(p);
                                    if (!a) {
                                        la.apply(b, c);
                                        l = b;
                                        break a
                                    }
                                    break
                                }
                        }
                    }
                    wa(a, h)(c, f, !K, b, va.test(a) && r(f.parentNode) || f);
                    l = b
                }
                return l
            }
            function b() {
                function a(b, c) {
                    f.push(b + " ") > L.cacheLength && delete a[f.shift()];
                    return a[b + " "] = c
                }
                var f = [];
                return a
            }
            function c(a) {
                a[I] = !0;
                return a
            }
            function d(a) {
                var f = F.createElement("div");
                try {
                    return !!a(f)
                } catch (b) {
                    return !1
                } finally {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }
            function e(a, f) {
                var b = a.split("|");
                for (a = a.length; a--; )
                    L.attrHandle[b[a]] = f
            }
            function l(a, f) {
                var b = f && a
                  , c = b && 1 === a.nodeType && 1 === f.nodeType && (~f.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
                if (c)
                    return c;
                if (b)
                    for (; b = b.nextSibling; )
                        if (b === f)
                            return -1;
                return a ? 1 : -1
            }
            function m(a) {
                return function(f) {
                    return "input" === f.nodeName.toLowerCase() && f.type === a
                }
            }
            function n(a) {
                return function(f) {
                    var b = f.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && f.type === a
                }
            }
            function t(a) {
                return c(function(f) {
                    f = +f;
                    return c(function(b, c) {
                        for (var p, h = a([], b.length, f), d = h.length; d--; )
                            b[p = h[d]] && (b[p] = !(c[p] = b[p]))
                    })
                })
            }
            function r(a) {
                return a && "undefined" !== typeof a.getElementsByTagName && a
            }
            function B() {}
            function q(a, b) {
                var c, p, h, d, g, e, k;
                if (g = X[a + " "])
                    return b ? 0 : g.slice(0);
                g = a;
                e = [];
                for (k = L.preFilter; g; ) {
                    if (!c || (p = ia.exec(g)))
                        p && (g = g.slice(p[0].length) || g),
                        e.push(h = []);
                    c = !1;
                    if (p = oa.exec(g))
                        c = p.shift(),
                        h.push({
                            value: c,
                            type: p[0].replace(ga, " ")
                        }),
                        g = g.slice(c.length);
                    for (d in L.filter)
                        !(p = U[d].exec(g)) || k[d] && !(p = k[d](p)) || (c = p.shift(),
                        h.push({
                            value: c,
                            type: d,
                            matches: p
                        }),
                        g = g.slice(c.length));
                    if (!c)
                        break
                }
                return b ? g.length : g ? f.error(a) : X(a, e).slice(0)
            }
            function u(a) {
                for (var f = 0, b = a.length, c = ""; f < b; f++)
                    c += a[f].value;
                return c
            }
            function v(a, f, b) {
                var c = f.dir
                  , p = b && "parentNode" === c
                  , h = O++;
                return f.first ? function(f, b, h) {
                    for (; f = f[c]; )
                        if (1 === f.nodeType || p)
                            return a(f, b, h)
                }
                : function(f, b, d) {
                    var g, e, k = [z, h];
                    if (d)
                        for (; f = f[c]; ) {
                            if ((1 === f.nodeType || p) && a(f, b, d))
                                return !0
                        }
                    else
                        for (; f = f[c]; )
                            if (1 === f.nodeType || p) {
                                e = f[I] || (f[I] = {});
                                if ((g = e[c]) && g[0] === z && g[1] === h)
                                    return k[2] = g[2];
                                e[c] = k;
                                if (k[2] = a(f, b, d))
                                    return !0
                            }
                }
            }
            function x(a) {
                return 1 < a.length ? function(f, b, c) {
                    for (var p = a.length; p--; )
                        if (!a[p](f, b, c))
                            return !1;
                    return !0
                }
                : a[0]
            }
            function w(a, f, b, c, p) {
                for (var h, d = [], g = 0, e = a.length, k = null != f; g < e; g++)
                    if (h = a[g])
                        if (!b || b(h, c, p))
                            d.push(h),
                            k && f.push(g);
                return d
            }
            function E(a, b, p, d, g, e) {
                d && !d[I] && (d = E(d));
                g && !g[I] && (g = E(g, e));
                return c(function(c, h, e, k) {
                    var l, m, S = [], n = [], ma = h.length, t;
                    if (!(t = c)) {
                        t = b || "*";
                        for (var r = e.nodeType ? [e] : e, B = [], q = 0, y = r.length; q < y; q++)
                            f(t, r[q], B);
                        t = B
                    }
                    t = !a || !c && b ? t : w(t, S, a, e, k);
                    r = p ? g || (c ? a : ma || d) ? [] : h : t;
                    p && p(t, r, e, k);
                    if (d)
                        for (l = w(r, n),
                        d(l, [], e, k),
                        e = l.length; e--; )
                            if (m = l[e])
                                r[n[e]] = !(t[n[e]] = m);
                    if (c) {
                        if (g || a) {
                            if (g) {
                                l = [];
                                for (e = r.length; e--; )
                                    (m = r[e]) && l.push(t[e] = m);
                                g(null, r = [], l, k)
                            }
                            for (e = r.length; e--; )
                                (m = r[e]) && -1 < (l = g ? W.call(c, m) : S[e]) && (c[l] = !(h[l] = m))
                        }
                    } else
                        r = w(r === h ? r.splice(ma, r.length) : r),
                        g ? g(null, h, r, k) : la.apply(h, r)
                })
            }
            function A(a) {
                var f, b, c, p = a.length, h = L.relative[a[0].type];
                b = h || L.relative[" "];
                for (var d = h ? 1 : 0, g = v(function(a) {
                    return a === f
                }, b, !0), e = v(function(a) {
                    return -1 < W.call(f, a)
                }, b, !0), k = [function(a, b, c) {
                    return !h && (c || b !== Ba) || ((f = b).nodeType ? g(a, b, c) : e(a, b, c))
                }
                ]; d < p; d++)
                    if (b = L.relative[a[d].type])
                        k = [v(x(k), b)];
                    else {
                        b = L.filter[a[d].type].apply(null, a[d].matches);
                        if (b[I]) {
                            for (c = ++d; c < p && !L.relative[a[c].type]; c++)
                                ;
                            return E(1 < d && x(k), 1 < d && u(a.slice(0, d - 1).concat({
                                value: " " === a[d - 2].type ? "*" : ""
                            })).replace(ga, "$1"), b, d < c && A(a.slice(d, c)), c < p && A(a = a.slice(c)), c < p && u(a))
                        }
                        k.push(b)
                    }
                return x(k)
            }
            function G(a, b) {
                var p = 0 < b.length
                  , d = 0 < a.length
                  , g = function(c, h, g, e, k) {
                    var l, m, S, n = 0, r = "0", ma = c && [], t = [], B = Ba, Qc = c || d && L.find.TAG("*", k), q = z += null == B ? 1 : Math.random() || .1, y = Qc.length;
                    for (k && (Ba = h !== F && h); r !== y && null != (l = Qc[r]); r++) {
                        if (d && l) {
                            for (m = 0; S = a[m++]; )
                                if (S(l, h, g)) {
                                    e.push(l);
                                    break
                                }
                            k && (z = q)
                        }
                        p && ((l = !S && l) && n--,
                        c && ma.push(l))
                    }
                    n += r;
                    if (p && r !== n) {
                        for (m = 0; S = b[m++]; )
                            S(ma, t, h, g);
                        if (c) {
                            if (0 < n)
                                for (; r--; )
                                    ma[r] || t[r] || (t[r] = T.call(e));
                            t = w(t)
                        }
                        la.apply(e, t);
                        k && !c && 0 < t.length && 1 < n + b.length && f.uniqueSort(e)
                    }
                    k && (z = q,
                    Ba = B);
                    return ma
                };
                return p ? c(g) : g
            }
            var y, P, L, fc, Rc, wa, Ba, ja, N, M, F, C, K, D, Sa, H, Q, I = "sizzle" + -new Date, Aa = a.document, z = 0, O = 0, R = b(), X = b(), V = b(), Y = function(a, f) {
                a === f && (N = !0);
                return 0
            }, Z = {}.hasOwnProperty, J = [], T = J.pop, ea = J.push, la = J.push, ca = J.slice, W = J.indexOf || function(a) {
                for (var f = 0, b = this.length; f < b; f++)
                    if (this[f] === a)
                        return f;
                return -1
            }
            , ha = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ha + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", da = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + aa.replace(3, 8) + ")*)|.*)\\)|)", ga = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ia = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, oa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, pa = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, qa = new RegExp(da), ra = new RegExp("^" + ha + "$"), U = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + aa),
                PSEUDO: new RegExp("^" + da),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, sa = /^(?:input|select|textarea|button)$/i, na = /^h\d$/i, ba = /^[^{]+\{\s*\[native \w/, ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, va = /[+~]/, ta = /'|\\/g, S = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ma = function(a, f, b) {
                a = "0x" + f - 65536;
                return a !== a || b ? f : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            };
            try {
                la.apply(J = ca.call(Aa.childNodes), Aa.childNodes),
                J[Aa.childNodes.length].nodeType
            } catch (Tc) {
                la = {
                    apply: J.length ? function(a, f) {
                        ea.apply(a, ca.call(f))
                    }
                    : function(a, f) {
                        for (var b = a.length, c = 0; a[b++] = f[c++]; )
                            ;
                        a.length = b - 1
                    }
                }
            }
            P = f.support = {};
            Rc = f.isXML = function(a) {
                return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
            }
            ;
            M = f.setDocument = function(a) {
                var f = a ? a.ownerDocument || a : Aa;
                a = f.defaultView;
                if (f === F || 9 !== f.nodeType || !f.documentElement)
                    return F;
                F = f;
                C = f.documentElement;
                K = !Rc(f);
                a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                    M()
                }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                    M()
                }));
                P.attributes = d(function(a) {
                    a.className = "i";
                    return !a.getAttribute("className")
                });
                P.getElementsByTagName = d(function(a) {
                    a.appendChild(f.createComment(""));
                    return !a.getElementsByTagName("*").length
                });
                P.getElementsByClassName = ba.test(f.getElementsByClassName) && d(function(a) {
                    a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    a.firstChild.className = "i";
                    return 2 === a.getElementsByClassName("i").length
                });
                P.getById = d(function(a) {
                    C.appendChild(a).id = I;
                    return !f.getElementsByName || !f.getElementsByName(I).length
                });
                P.getById ? (L.find.ID = function(a, f) {
                    if ("undefined" !== typeof f.getElementById && K)
                        return (a = f.getElementById(a)) && a.parentNode ? [a] : []
                }
                ,
                L.filter.ID = function(a) {
                    var f = a.replace(S, ma);
                    return function(a) {
                        return a.getAttribute("id") === f
                    }
                }
                ) : (delete L.find.ID,
                L.filter.ID = function(a) {
                    var f = a.replace(S, ma);
                    return function(a) {
                        return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === f
                    }
                }
                );
                L.find.TAG = P.getElementsByTagName ? function(a, f) {
                    if ("undefined" !== typeof f.getElementsByTagName)
                        return f.getElementsByTagName(a)
                }
                : function(a, f) {
                    var b = []
                      , c = 0;
                    f = f.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; a = f[c++]; )
                            1 === a.nodeType && b.push(a);
                        return b
                    }
                    return f
                }
                ;
                L.find.CLASS = P.getElementsByClassName && function(a, f) {
                    if ("undefined" !== typeof f.getElementsByClassName && K)
                        return f.getElementsByClassName(a)
                }
                ;
                Sa = [];
                D = [];
                if (P.qsa = ba.test(f.querySelectorAll))
                    d(function(a) {
                        a.innerHTML = "<select t=''><option selected=''></option></select>";
                        a.querySelectorAll("[t^='']").length && D.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || D.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll(":checked").length || D.push(":checked")
                    }),
                    d(function(a) {
                        var b = f.createElement("input");
                        b.setAttribute("type", "hidden");
                        a.appendChild(b).setAttribute("name", "D");
                        a.querySelectorAll("[name=d]").length && D.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        a.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        D.push(",.*:")
                    });
                (P.matchesSelector = ba.test(H = C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && d(function(a) {
                    P.disconnectedMatch = H.call(a, "div");
                    H.call(a, "[s!='']:x");
                    Sa.push("!=", da)
                });
                D = D.length && new RegExp(D.join("|"));
                Sa = Sa.length && new RegExp(Sa.join("|"));
                Q = (a = ba.test(C.compareDocumentPosition)) || ba.test(C.contains) ? function(a, f) {
                    var b = 9 === a.nodeType ? a.documentElement : a;
                    f = f && f.parentNode;
                    return a === f || !!(f && 1 === f.nodeType && (b.contains ? b.contains(f) : a.compareDocumentPosition && a.compareDocumentPosition(f) & 16))
                }
                : function(a, f) {
                    if (f)
                        for (; f = f.parentNode; )
                            if (f === a)
                                return !0;
                    return !1
                }
                ;
                Y = a ? function(a, b) {
                    if (a === b)
                        return N = !0,
                        0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (c)
                        return c;
                    c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    return c & 1 || !P.sortDetached && b.compareDocumentPosition(a) === c ? a === f || a.ownerDocument === Aa && Q(Aa, a) ? -1 : b === f || b.ownerDocument === Aa && Q(Aa, b) ? 1 : ja ? W.call(ja, a) - W.call(ja, b) : 0 : c & 4 ? -1 : 1
                }
                : function(a, b) {
                    if (a === b)
                        return N = !0,
                        0;
                    var c = 0
                      , p = a.parentNode
                      , h = b.parentNode
                      , d = [a]
                      , g = [b];
                    if (!p || !h)
                        return a === f ? -1 : b === f ? 1 : p ? -1 : h ? 1 : ja ? W.call(ja, a) - W.call(ja, b) : 0;
                    if (p === h)
                        return l(a, b);
                    for (; a = a.parentNode; )
                        d.unshift(a);
                    for (a = b; a = a.parentNode; )
                        g.unshift(a);
                    for (; d[c] === g[c]; )
                        c++;
                    return c ? l(d[c], g[c]) : d[c] === Aa ? -1 : g[c] === Aa ? 1 : 0
                }
                ;
                return f
            }
            ;
            f.matches = function(a, b) {
                return f(a, null, null, b)
            }
            ;
            f.matchesSelector = function(a, b) {
                (a.ownerDocument || a) !== F && M(a);
                b = b.replace(pa, "='$1']");
                if (!(!P.matchesSelector || !K || Sa && Sa.test(b) || D && D.test(b)))
                    try {
                        var c = H.call(a, b);
                        if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return c
                    } catch (p) {}
                return 0 < f(b, F, null, [a]).length
            }
            ;
            f.contains = function(a, f) {
                (a.ownerDocument || a) !== F && M(a);
                return Q(a, f)
            }
            ;
            f.attr = function(a, f) {
                (a.ownerDocument || a) !== F && M(a);
                var b = L.attrHandle[f.toLowerCase()]
                  , b = b && Z.call(L.attrHandle, f.toLowerCase()) ? b(a, f, !K) : void 0;
                return void 0 !== b ? b : P.attributes || !K ? a.getAttribute(f) : (b = a.getAttributeNode(f)) && b.specified ? b.value : null
            }
            ;
            f.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a);
            }
            ;
            f.uniqueSort = function(a) {
                var f, b = [], c = 0, p = 0;
                N = !P.detectDuplicates;
                ja = !P.sortStable && a.slice(0);
                a.sort(Y);
                if (N) {
                    for (; f = a[p++]; )
                        f === a[p] && (c = b.push(p));
                    for (; c--; )
                        a.splice(b[c], 1)
                }
                ja = null;
                return a
            }
            ;
            fc = f.getText = function(a) {
                var f, b = "", c = 0;
                f = a.nodeType;
                if (!f)
                    for (; f = a[c++]; )
                        b += fc(f);
                else if (1 === f || 9 === f || 11 === f) {
                    if ("string" === typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        b += fc(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue;
                return b
            }
            ;
            L = f.selectors = {
                cacheLength: 50,
                createPseudo: c,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        a[1] = a[1].replace(S, ma);
                        a[3] = (a[4] || a[5] || "").replace(S, ma);
                        "~=" === a[2] && (a[3] = " " + a[3] + " ");
                        return a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        a[1] = a[1].toLowerCase();
                        "nth" === a[1].slice(0, 3) ? (a[3] || f.error(a[0]),
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && f.error(a[0]);
                        return a
                    },
                    PSEUDO: function(a) {
                        var f, b = !a[5] && a[2];
                        if (U.CHILD.test(a[0]))
                            return null;
                        a[3] && void 0 !== a[4] ? a[2] = a[4] : b && qa.test(b) && (f = q(b, !0)) && (f = b.indexOf(")", b.length - f) - b.length) && (a[0] = a[0].slice(0, f),
                        a[2] = b.slice(0, f));
                        return a.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(a) {
                        var f = a.replace(S, ma).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        }
                        : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === f
                        }
                    },
                    CLASS: function(a) {
                        var f = R[a + " "];
                        return f || (f = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
                        R(a, function(a) {
                            return f.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(a, b, c) {
                        return function(p) {
                            p = f.attr(p, a);
                            if (null == p)
                                return "!=" === b;
                            if (!b)
                                return !0;
                            p += "";
                            return "=" === b ? p === c : "!=" === b ? p !== c : "^=" === b ? c && 0 === p.indexOf(c) : "*=" === b ? c && -1 < p.indexOf(c) : "$=" === b ? c && p.slice(-c.length) === c : "~=" === b ? -1 < (" " + p + " ").indexOf(c) : "|=" === b ? p === c || p.slice(0, c.length + 1) === c + "-" : !1
                        }
                    },
                    CHILD: function(a, f, b, c, p) {
                        var h = "nth" !== a.slice(0, 3)
                          , d = "last" !== a.slice(-4)
                          , g = "of-type" === f;
                        return 1 === c && 0 === p ? function(a) {
                            return !!a.parentNode
                        }
                        : function(f, b, e) {
                            var k, l, m, S, n;
                            b = h !== d ? "nextSibling" : "previousSibling";
                            var r = f.parentNode
                              , t = g && f.nodeName.toLowerCase();
                            e = !e && !g;
                            if (r) {
                                if (h) {
                                    for (; b; ) {
                                        for (l = f; l = l[b]; )
                                            if (g ? l.nodeName.toLowerCase() === t : 1 === l.nodeType)
                                                return !1;
                                        n = b = "only" === a && !n && "nextSibling"
                                    }
                                    return !0
                                }
                                n = [d ? r.firstChild : r.lastChild];
                                if (d && e)
                                    for (e = r[I] || (r[I] = {}),
                                    k = e[a] || [],
                                    S = k[0] === z && k[1],
                                    m = k[0] === z && k[2],
                                    l = S && r.childNodes[S]; l = ++S && l && l[b] || (m = S = 0) || n.pop(); ) {
                                        if (1 === l.nodeType && ++m && l === f) {
                                            e[a] = [z, S, m];
                                            break
                                        }
                                    }
                                else if (e && (k = (f[I] || (f[I] = {}))[a]) && k[0] === z)
                                    m = k[1];
                                else
                                    for (; (l = ++S && l && l[b] || (m = S = 0) || n.pop()) && ((g ? l.nodeName.toLowerCase() !== t : 1 !== l.nodeType) || !++m || (e && ((l[I] || (l[I] = {}))[a] = [z, m]),
                                    l !== f)); )
                                        ;
                                m -= p;
                                return m === c || 0 === m % c && 0 <= m / c
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var p, d = L.pseudos[a] || L.setFilters[a.toLowerCase()] || f.error("unsupported pseudo: " + a);
                        return d[I] ? d(b) : 1 < d.length ? (p = [a, a, "", b],
                        L.setFilters.hasOwnProperty(a.toLowerCase()) ? c(function(a, f) {
                            for (var c, p = d(a, b), h = p.length; h--; )
                                c = W.call(a, p[h]),
                                a[c] = !(f[c] = p[h])
                        }) : function(a) {
                            return d(a, 0, p)
                        }
                        ) : d
                    }
                },
                pseudos: {
                    not: c(function(a) {
                        var f = []
                          , b = []
                          , p = wa(a.replace(ga, "$1"));
                        return p[I] ? c(function(a, f, b, c) {
                            c = p(a, null, c, []);
                            for (var h = a.length; h--; )
                                if (b = c[h])
                                    a[h] = !(f[h] = b)
                        }) : function(a, c, h) {
                            f[0] = a;
                            p(f, null, h, b);
                            return !b.pop()
                        }
                    }),
                    has: c(function(a) {
                        return function(b) {
                            return 0 < f(a, b).length
                        }
                    }),
                    contains: c(function(a) {
                        return function(f) {
                            return -1 < (f.textContent || f.innerText || fc(f)).indexOf(a)
                        }
                    }),
                    lang: c(function(a) {
                        ra.test(a || "") || f.error("unsupported lang: " + a);
                        a = a.replace(S, ma).toLowerCase();
                        return function(f) {
                            var b;
                            do
                                if (b = K ? f.lang : f.getAttribute("xml:lang") || f.getAttribute("lang"))
                                    return b = b.toLowerCase(),
                                    b === a || 0 === b.indexOf(a + "-");
                            while ((f = f.parentNode) && 1 === f.nodeType);
                            return !1
                        }
                    }),
                    target: function(f) {
                        var b = a.location && a.location.hash;
                        return b && b.slice(1) === f.id
                    },
                    root: function(a) {
                        return a === C
                    },
                    focus: function(a) {
                        return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return !1 === a.disabled
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        var f = a.nodeName.toLowerCase();
                        return "input" === f && !!a.checked || "option" === f && !!a.selected
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (6 > a.nodeType)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !L.pseudos.empty(a)
                    },
                    header: function(a) {
                        return na.test(a.nodeName)
                    },
                    input: function(a) {
                        return sa.test(a.nodeName)
                    },
                    button: function(a) {
                        var f = a.nodeName.toLowerCase();
                        return "input" === f && "button" === a.type || "button" === f
                    },
                    text: function(a) {
                        var f;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (f = a.getAttribute("type")) || "text" === f.toLowerCase())
                    },
                    first: t(function() {
                        return [0]
                    }),
                    last: t(function(a, f) {
                        return [f - 1]
                    }),
                    eq: t(function(a, f, b) {
                        return [0 > b ? b + f : b]
                    }),
                    even: t(function(a, f) {
                        for (var b = 0; b < f; b += 2)
                            a.push(b);
                        return a
                    }),
                    odd: t(function(a, f) {
                        for (var b = 1; b < f; b += 2)
                            a.push(b);
                        return a
                    }),
                    lt: t(function(a, f, b) {
                        for (f = 0 > b ? b + f : b; 0 <= --f; )
                            a.push(f);
                        return a
                    }),
                    gt: t(function(a, f, b) {
                        for (b = 0 > b ? b + f : b; ++b < f; )
                            a.push(b);
                        return a
                    })
                }
            };
            L.pseudos.nth = L.pseudos.eq;
            for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                L.pseudos[y] = m(y);
            for (y in {
                submit: !0,
                reset: !0
            })
                L.pseudos[y] = n(y);
            B.prototype = L.filters = L.pseudos;
            L.setFilters = new B;
            wa = f.compile = function(a, f) {
                var b, c = [], p = [], h = V[a + " "];
                if (!h) {
                    f || (f = q(a));
                    for (b = f.length; b--; )
                        h = A(f[b]),
                        h[I] ? c.push(h) : p.push(h);
                    h = V(a, G(p, c))
                }
                return h
            }
            ;
            P.sortStable = I.split("").sort(Y).join("") === I;
            P.detectDuplicates = !!N;
            M();
            P.sortDetached = d(function(a) {
                return a.compareDocumentPosition(F.createElement("div")) & 1
            });
            d(function(a) {
                a.innerHTML = "<a href='#'></a>";
                return "#" === a.firstChild.getAttribute("href")
            }) || e("type|href|height|width", function(a, f, b) {
                if (!b)
                    return a.getAttribute(f, "type" === f.toLowerCase() ? 1 : 2)
            });
            P.attributes && d(function(a) {
                a.innerHTML = "<input/>";
                a.firstChild.setAttribute("value", "");
                return "" === a.firstChild.getAttribute("value")
            }) || e("value", function(a, f, b) {
                if (!b && "input" === a.nodeName.toLowerCase())
                    return a.defaultValue
            });
            d(function(a) {
                return null == a.getAttribute("disabled")
            }) || e("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, f, b) {
                var c;
                if (!b)
                    return !0 === a[f] ? f.toLowerCase() : (c = a.getAttributeNode(f)) && c.specified ? c.value : null
            });
            return f
        }(q);
        e.find = Da;
        e.expr = Da.selectors;
        e.expr[":"] = e.expr.pseudos;
        e.unique = Da.uniqueSort;
        e.text = Da.getText;
        e.isXMLDoc = Da.isXML;
        e.contains = Da.contains;
        var gc = e.expr.match.needsContext
          , La = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
          , x = /^.[^:#\[\.,]*$/;
        e.filter = function(a, f, b) {
            var c = f[0];
            b && (a = ":not(" + a + ")");
            return 1 === f.length && 1 === c.nodeType ? e.find.matchesSelector(c, a) ? [c] : [] : e.find.matches(a, e.grep(f, function(a) {
                return 1 === a.nodeType
            }))
        }
        ;
        e.fn.extend({
            find: function(a) {
                var f, b = [], c = this, d = c.length;
                if ("string" !== typeof a)
                    return this.pushStack(e(a).filter(function() {
                        for (f = 0; f < d; f++)
                            if (e.contains(c[f], this))
                                return !0
                    }));
                for (f = 0; f < d; f++)
                    e.find(a, c[f], b);
                b = this.pushStack(1 < d ? e.unique(b) : b);
                b.selector = this.selector ? this.selector + " " + a : a;
                return b
            },
            filter: function(a) {
                return this.pushStack(sb(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(sb(this, a || [], !0))
            },
            is: function(a) {
                return !!sb(this, "string" === typeof a && gc.test(a) ? e(a) : a || [], !1).length
            }
        });
        var Ta, w = q.document, Fc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (e.fn.init = function(a, f) {
            var b;
            if (!a)
                return this;
            if ("string" === typeof a) {
                b = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Fc.exec(a);
                if (!b || !b[1] && f)
                    return !f || f.jquery ? (f || Ta).find(a) : this.constructor(f).find(a);
                if (b[1]) {
                    if (f = f instanceof e ? f[0] : f,
                    e.merge(this, e.parseHTML(b[1], f && f.nodeType ? f.ownerDocument || f : w, !0)),
                    La.test(b[1]) && e.isPlainObject(f))
                        for (b in f)
                            if (e.isFunction(this[b]))
                                this[b](f[b]);
                            else
                                this.attr(b, f[b])
                } else {
                    if ((f = w.getElementById(b[2])) && f.parentNode) {
                        if (f.id !== b[2])
                            return Ta.find(a);
                        this.length = 1;
                        this[0] = f
                    }
                    this.context = w;
                    this.selector = a
                }
                return this
            }
            if (a.nodeType)
                return this.context = this[0] = a,
                this.length = 1,
                this;
            if (e.isFunction(a))
                return "undefined" !== typeof Ta.ready ? Ta.ready(a) : a(e);
            void 0 !== a.selector && (this.selector = a.selector,
            this.context = a.context);
            return e.makeArray(a, this)
        }
        ).prototype = e.fn;
        Ta = e(w);
        var qa = /^(?:parents|prev(?:Until|All))/
          , hc = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        e.extend({
            dir: function(a, f, b) {
                var c = [];
                for (a = a[f]; a && 9 !== a.nodeType && (void 0 === b || 1 !== a.nodeType || !e(a).is(b)); )
                    1 === a.nodeType && c.push(a),
                    a = a[f];
                return c
            },
            sibling: function(a, f) {
                for (var b = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== f && b.push(a);
                return b
            }
        });
        e.fn.extend({
            has: function(a) {
                var f, b = e(a, this), c = b.length;
                return this.filter(function() {
                    for (f = 0; f < c; f++)
                        if (e.contains(this, b[f]))
                            return !0
                })
            },
            closest: function(a, f) {
                for (var b, c = 0, d = this.length, k = [], l = gc.test(a) || "string" !== typeof a ? e(a, f || this.context) : 0; c < d; c++)
                    for (b = this[c]; b && b !== f; b = b.parentNode)
                        if (11 > b.nodeType && (l ? -1 < l.index(b) : 1 === b.nodeType && e.find.matchesSelector(b, a))) {
                            k.push(b);
                            break
                        }
                return this.pushStack(1 < k.length ? e.unique(k) : k)
            },
            index: function(a) {
                return a ? "string" === typeof a ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, f) {
                return this.pushStack(e.unique(e.merge(this.get(), e(a, f))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });
        e.each({
            parent: function(a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            },
            parents: function(a) {
                return e.dir(a, "parentNode")
            },
            parentsUntil: function(a, f, b) {
                return e.dir(a, "parentNode", b)
            },
            next: function(a) {
                return tb(a, "nextSibling")
            },
            prev: function(a) {
                return tb(a, "previousSibling")
            },
            nextAll: function(a) {
                return e.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return e.dir(a, "previousSibling")
            },
            nextUntil: function(a, f, b) {
                return e.dir(a, "nextSibling", b)
            },
            prevUntil: function(a, f, b) {
                return e.dir(a, "previousSibling", b)
            },
            siblings: function(a) {
                return e.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return e.sibling(a.firstChild)
            },
            contents: function(a) {
                return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.merge([], a.childNodes)
            }
        }, function(a, f) {
            e.fn[a] = function(b, c) {
                var d = e.map(this, f, b);
                "Until" !== a.slice(-5) && (c = b);
                c && "string" === typeof c && (d = e.filter(c, d));
                1 < this.length && (hc[a] || (d = e.unique(d)),
                qa.test(a) && (d = d.reverse()));
                return this.pushStack(d)
            }
        });
        var T = /\S+/g
          , $b = {};
        e.Callbacks = function(a) {
            a = "string" === typeof a ? $b[a] || ba(a) : e.extend({}, a);
            var f, b, c, d, k, l, m = [], n = !a.once && [], t = function(e) {
                b = a.memory && e;
                c = !0;
                k = l || 0;
                l = 0;
                d = m.length;
                for (f = !0; m && k < d; k++)
                    if (!1 === m[k].apply(e[0], e[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                f = !1;
                m && (n ? n.length && t(n.shift()) : b ? m = [] : r.disable())
            }, r = {
                add: function() {
                    if (m) {
                        var c = m.length;
                        (function Sc(f) {
                            e.each(f, function(f, b) {
                                f = e.type(b);
                                "function" === f ? a.unique && r.has(b) || m.push(b) : b && b.length && "string" !== f && Sc(b)
                            })
                        }
                        )(arguments);
                        f ? d = m.length : b && (l = c,
                        t(b))
                    }
                    return this
                },
                remove: function() {
                    m && e.each(arguments, function(a, b) {
                        for (var c; -1 < (c = e.inArray(b, m, c)); )
                            m.splice(c, 1),
                            f && (c <= d && d--,
                            c <= k && k--)
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < e.inArray(a, m) : !(!m || !m.length)
                },
                empty: function() {
                    m = [];
                    d = 0;
                    return this
                },
                disable: function() {
                    m = n = b = void 0;
                    return this
                },
                disabled: function() {
                    return !m
                },
                lock: function() {
                    n = void 0;
                    b || r.disable();
                    return this
                },
                locked: function() {
                    return !n
                },
                fireWith: function(a, b) {
                    !m || c && !n || (b = b || [],
                    b = [a, b.slice ? b.slice() : b],
                    f ? n.push(b) : t(b));
                    return this
                },
                fire: function() {
                    r.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!c
                }
            };
            return r
        }
        ;
        e.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]]
                  , c = "pending"
                  , h = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        d.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return e.Deferred(function(c) {
                            e.each(b, function(b, f) {
                                var p = e.isFunction(a[b]) && a[b];
                                d[f[1]](function() {
                                    var a = p && p.apply(this, arguments);
                                    if (a && e.isFunction(a.promise))
                                        a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                    else
                                        c[f[0] + "With"](this === h ? c.promise() : this, p ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? e.extend(a, h) : h
                    }
                }
                  , d = {};
                h.pipe = h.then;
                e.each(b, function(a, e) {
                    var m = e[2]
                      , n = e[3];
                    h[e[1]] = m.add;
                    n && m.add(function() {
                        c = n
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                    d[e[0]] = function() {
                        d[e[0] + "With"](this === d ? h : this, arguments);
                        return this
                    }
                    ;
                    d[e[0] + "With"] = m.fireWith
                });
                h.promise(d);
                a && a.call(d, d);
                return d
            },
            when: function(a) {
                var b = 0, c = aa.call(arguments), h = c.length, d = 1 !== h || a && e.isFunction(a.promise) ? h : 0, k = 1 === d ? a : e.Deferred(), l = function(a, b, f) {
                    return function(c) {
                        b[a] = this;
                        f[a] = 1 < arguments.length ? aa.call(arguments) : c;
                        f === m ? k.notifyWith(b, f) : --d || k.resolveWith(b, f)
                    }
                }, m, n, t;
                if (1 < h)
                    for (m = Array(h),
                    n = Array(h),
                    t = Array(h); b < h; b++)
                        c[b] && e.isFunction(c[b].promise) ? c[b].promise().done(l(b, t, c)).fail(k.reject).progress(l(b, n, m)) : --d;
                d || k.resolveWith(t, c);
                return k.promise()
            }
        });
        var jb;
        e.fn.ready = function(a) {
            e.ready.promise().done(a);
            return this
        }
        ;
        e.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e.readyWait++ : e.ready(!0)
            },
            ready: function(a) {
                if (!0 === a ? !--e.readyWait : !e.isReady) {
                    if (!w.body)
                        return setTimeout(e.ready);
                    e.isReady = !0;
                    !0 !== a && 0 < --e.readyWait || (jb.resolveWith(w, [e]),
                    e.fn.trigger && e(w).trigger("ready").off("ready"))
                }
            }
        });
        e.ready.promise = function(a) {
            if (!jb)
                if (jb = e.Deferred(),
                "complete" === w.readyState)
                    setTimeout(e.ready);
                else if (w.addEventListener)
                    w.addEventListener("DOMContentLoaded", ca, !1),
                    q.addEventListener("load", ca, !1);
                else {
                    w.attachEvent("onreadystatechange", ca);
                    q.attachEvent("onload", ca);
                    var b = !1;
                    try {
                        b = null == q.frameElement && w.documentElement
                    } catch (c) {}
                    b && b.doScroll && function h() {
                        if (!e.isReady) {
                            try {
                                b.doScroll("left")
                            } catch (a) {
                                return setTimeout(h, 50)
                            }
                            ub();
                            e.ready()
                        }
                    }()
                }
            return jb.promise(a)
        }
        ;
        for (var Gc in e(v))
            break;
        v.ownLast = "0" !== Gc;
        v.inlineBlockNeedsLayout = !1;
        e(function() {
            var a, b, c = w.getElementsByTagName("body")[0];
            c && (a = w.createElement("div"),
            a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            b = w.createElement("div"),
            c.appendChild(a).appendChild(b),
            "undefined" !== typeof b.style.zoom && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
            v.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1),
            c.removeChild(a))
        });
        (function() {
            var a = w.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    v.deleteExpando = !1
                }
            }
        }
        )();
        e.acceptData = function(a) {
            var b = e.noData[(a.nodeName + " ").toLowerCase()]
              , c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
        }
        ;
        var $a = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ya = /([A-Z])/g;
        e.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando];
                return !!a && !ab(a)
            },
            data: function(a, b, c) {
                return Oa(a, b, c)
            },
            removeData: function(a, b) {
                return ua(a, b)
            },
            _data: function(a, b, c) {
                return Oa(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return ua(a, b, !0)
            }
        });
        e.fn.extend({
            data: function(a, b) {
                var c, h, d, k = this[0], l = k && k.attributes;
                if (void 0 === a) {
                    if (this.length && (d = e.data(k),
                    1 === k.nodeType && !e._data(k, "parsedAttrs"))) {
                        for (c = l.length; c--; )
                            h = l[c].name,
                            0 === h.indexOf("data-") && (h = e.camelCase(h.slice(5)),
                            vb(k, h, d[h]));
                        e._data(k, "parsedAttrs", !0)
                    }
                    return d
                }
                return "object" === typeof a ? this.each(function() {
                    e.data(this, a)
                }) : 1 < arguments.length ? this.each(function() {
                    e.data(this, a, b)
                }) : k ? vb(k, a, e.data(k, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    e.removeData(this, a)
                })
            }
        });
        e.extend({
            queue: function(a, b, c) {
                var h;
                if (a)
                    return b = (b || "fx") + "queue",
                    h = e._data(a, b),
                    c && (!h || e.isArray(c) ? h = e._data(a, b, e.makeArray(c)) : h.push(c)),
                    h || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = e.queue(a, b)
                  , h = c.length
                  , d = c.shift()
                  , k = e._queueHooks(a, b)
                  , l = function() {
                    e.dequeue(a, b)
                };
                "inprogress" === d && (d = c.shift(),
                h--);
                d && ("fx" === b && c.unshift("inprogress"),
                delete k.stop,
                d.call(a, l, k));
                !h && k && k.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return e._data(a, c) || e._data(a, c, {
                    empty: e.Callbacks("once memory").add(function() {
                        e._removeData(a, b + "queue");
                        e._removeData(a, c)
                    })
                })
            }
        });
        e.fn.extend({
            queue: function(a, b) {
                var c = 2;
                "string" !== typeof a && (b = a,
                a = "fx",
                c--);
                return arguments.length < c ? e.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = e.queue(this, a, b);
                    e._queueHooks(this, a);
                    "fx" === a && "inprogress" !== c[0] && e.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    e.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, h = 1, d = e.Deferred(), k = this, l = this.length, m = function() {
                    --h || d.resolveWith(k, [k])
                };
                "string" !== typeof a && (b = a,
                a = void 0);
                for (a = a || "fx"; l--; )
                    (c = e._data(k[l], a + "queueHooks")) && c.empty && (h++,
                    c.empty.add(m));
                m();
                return d.promise(b)
            }
        });
        var ka = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Z = ["Top", "Right", "Bottom", "Left"]
          , fa = function(a, b) {
            a = b || a;
            return "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
        }
          , ra = e.access = function(a, b, c, h, d, k, l) {
            var m = 0
              , n = a.length
              , t = null == c;
            if ("object" === e.type(c))
                for (m in d = !0,
                c)
                    e.access(a, b, m, c[m], !0, k, l);
            else if (void 0 !== h && (d = !0,
            e.isFunction(h) || (l = !0),
            t && (l ? (b.call(a, h),
            b = null) : (t = b,
            b = function(a, b, f) {
                return t.call(e(a), f)
            }
            )),
            b))
                for (; m < n; m++)
                    b(a[m], c, l ? h : h.call(a[m], m, b(a[m], c)));
            return d ? a : t ? b.call(a) : n ? b(a[0], c) : k
        }
          , xb = /^(?:checkbox|radio)$/i;
        (function() {
            var a = w.createDocumentFragment()
              , b = w.createElement("div")
              , c = w.createElement("input");
            b.setAttribute("className", "t");
            b.innerHTML = "  <link/><table></table><a href='/a'>a</a>";
            v.leadingWhitespace = 3 === b.firstChild.nodeType;
            v.tbody = !b.getElementsByTagName("tbody").length;
            v.htmlSerialize = !!b.getElementsByTagName("link").length;
            v.html5Clone = "<:nav></:nav>" !== w.createElement("nav").cloneNode(!0).outerHTML;
            c.type = "checkbox";
            c.checked = !0;
            a.appendChild(c);
            v.appendChecked = c.checked;
            b.innerHTML = "<textarea>x</textarea>";
            v.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
            a.appendChild(b);
            b.innerHTML = "<input type='radio' checked='checked' name='t'/>";
            v.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
            v.noCloneEvent = !0;
            b.attachEvent && (b.attachEvent("onclick", function() {
                v.noCloneEvent = !1
            }),
            b.cloneNode(!0).click());
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete b.test
                } catch (h) {
                    v.deleteExpando = !1
                }
            }
            a = b = c = null
        }
        )();
        (function() {
            var a, b, c = w.createElement("div");
            for (a in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                b = "on" + a,
                (v[a + "Bubbles"] = b in q) || (c.setAttribute(b, "t"),
                v[a + "Bubbles"] = !1 === c.attributes[b].expando)
        }
        )();
        var Ob = /^(?:input|select|textarea)$/i
          , ic = /^key/
          , jc = /^(?:mouse|contextmenu)|click/
          , Pb = /^(?:focusinfocus|focusoutblur)$/
          , kc = /^([^.]*)(?:\.(.+)|)$/;
        e.event = {
            global: {},
            add: function(a, b, c, h, d) {
                var k, l, m, n, t, r, B, q, u;
                if (m = e._data(a)) {
                    c.handler && (n = c,
                    c = n.handler,
                    d = n.selector);
                    c.guid || (c.guid = e.guid++);
                    (l = m.events) || (l = m.events = {});
                    (t = m.handle) || (t = m.handle = function(a) {
                        return "undefined" === typeof e || a && e.event.triggered === a.type ? void 0 : e.event.dispatch.apply(t.elem, arguments)
                    }
                    ,
                    t.elem = a);
                    b = (b || "").match(T) || [""];
                    for (m = b.length; m--; )
                        k = kc.exec(b[m]) || [],
                        q = r = k[1],
                        u = (k[2] || "").split(".").sort(),
                        q && (k = e.event.special[q] || {},
                        q = (d ? k.delegateType : k.bindType) || q,
                        k = e.event.special[q] || {},
                        r = e.extend({
                            type: q,
                            origType: r,
                            data: h,
                            handler: c,
                            guid: c.guid,
                            selector: d,
                            needsContext: d && e.expr.match.needsContext.test(d),
                            namespace: u.join(".")
                        }, n),
                        (B = l[q]) || (B = l[q] = [],
                        B.delegateCount = 0,
                        k.setup && !1 !== k.setup.call(a, h, u, t) || (a.addEventListener ? a.addEventListener(q, t, !1) : a.attachEvent && a.attachEvent("on" + q, t))),
                        k.add && (k.add.call(a, r),
                        r.handler.guid || (r.handler.guid = c.guid)),
                        d ? B.splice(B.delegateCount++, 0, r) : B.push(r),
                        e.event.global[q] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, g) {
                var k, l, m, n, t, r, B, q, u, v, w, x = e.hasData(a) && e._data(a);
                if (x && (r = x.events)) {
                    b = (b || "").match(T) || [""];
                    for (t = b.length; t--; )
                        if (m = kc.exec(b[t]) || [],
                        u = w = m[1],
                        v = (m[2] || "").split(".").sort(),
                        u) {
                            B = e.event.special[u] || {};
                            u = (d ? B.delegateType : B.bindType) || u;
                            q = r[u] || [];
                            m = m[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            for (n = k = q.length; k--; )
                                l = q[k],
                                !g && w !== l.origType || c && c.guid !== l.guid || m && !m.test(l.namespace) || d && d !== l.selector && ("**" !== d || !l.selector) || (q.splice(k, 1),
                                l.selector && q.delegateCount--,
                                B.remove && B.remove.call(a, l));
                            n && !q.length && (B.teardown && !1 !== B.teardown.call(a, v, x.handle) || e.removeEvent(a, u, x.handle),
                            delete r[u])
                        } else
                            for (u in r)
                                e.event.remove(a, u + b[t], c, d, !0);
                    e.isEmptyObject(r) && (delete x.handle,
                    e._removeData(a, "events"))
                }
            },
            trigger: function(a, b, c, d) {
                var g, k, l, m, n, t, r = [c || w], B = u.call(a, "type") ? a.type : a;
                n = u.call(a, "namespace") ? a.namespace.split(".") : [];
                l = g = c = c || w;
                if (3 !== c.nodeType && 8 !== c.nodeType && !Pb.test(B + e.event.triggered) && (0 <= B.indexOf(".") && (n = B.split("."),
                B = n.shift(),
                n.sort()),
                k = 0 > B.indexOf(":") && "on" + B,
                a = a[e.expando] ? a : new e.Event(B,"object" === typeof a && a),
                a.isTrigger = d ? 2 : 3,
                a.namespace = n.join("."),
                a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                a.result = void 0,
                a.target || (a.target = c),
                b = null == b ? [a] : e.makeArray(b, [a]),
                n = e.event.special[B] || {},
                d || !n.trigger || !1 !== n.trigger.apply(c, b))) {
                    if (!d && !n.noBubble && !e.isWindow(c)) {
                        m = n.delegateType || B;
                        Pb.test(m + B) || (l = l.parentNode);
                        for (; l; l = l.parentNode)
                            r.push(l),
                            g = l;
                        g === (c.ownerDocument || w) && r.push(g.defaultView || g.parentWindow || q)
                    }
                    for (t = 0; (l = r[t++]) && !a.isPropagationStopped(); )
                        a.type = 1 < t ? m : n.bindType || B,
                        (g = (e._data(l, "events") || {})[a.type] && e._data(l, "handle")) && g.apply(l, b),
                        (g = k && l[k]) && g.apply && e.acceptData(l) && (a.result = g.apply(l, b),
                        !1 === a.result && a.preventDefault());
                    a.type = B;
                    if (!(d || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(r.pop(), b)) && e.acceptData(c) && k && c[B] && !e.isWindow(c)) {
                        (g = c[k]) && (c[k] = null);
                        e.event.triggered = B;
                        try {
                            c[B]()
                        } catch (v) {}
                        e.event.triggered = void 0;
                        g && (c[k] = g)
                    }
                    return a.result
                }
            },
            dispatch: function(a) {
                a = e.event.fix(a);
                var b, c, d, g, k, l = aa.call(arguments);
                b = (e._data(this, "events") || {})[a.type] || [];
                var m = e.event.special[a.type] || {};
                l[0] = a;
                a.delegateTarget = this;
                if (!m.preDispatch || !1 !== m.preDispatch.call(this, a)) {
                    k = e.event.handlers.call(this, a, b);
                    for (b = 0; (d = k[b++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = d.elem,
                        g = 0; (c = d.handlers[g++]) && !a.isImmediatePropagationStopped(); )
                            if (!a.namespace_re || a.namespace_re.test(c.namespace))
                                a.handleObj = c,
                                a.data = c.data,
                                c = ((e.event.special[c.origType] || {}).handle || c.handler).apply(d.elem, l),
                                void 0 !== c && !1 === (a.result = c) && ("touchend" != a.type && a.preventDefault(),
                                a.stopPropagation());
                    m.postDispatch && m.postDispatch.call(this, a);
                    return a.result
                }
            },
            handlers: function(a, b) {
                var c, d, g, k, l = [], m = b.delegateCount, n = a.target;
                if (m && n.nodeType && (!a.button || "click" !== a.type))
                    for (; n != this; n = n.parentNode || this)
                        if (1 === n.nodeType && (!0 !== n.disabled || "click" !== a.type)) {
                            g = [];
                            for (k = 0; k < m; k++)
                                d = b[k],
                                c = d.selector + " ",
                                void 0 === g[c] && (g[c] = d.needsContext ? 0 <= e(c, this).index(n) : e.find(c, this, null, [n]).length),
                                g[c] && g.push(d);
                            g.length && l.push({
                                elem: n,
                                handlers: g
                            })
                        }
                m < b.length && l.push({
                    elem: this,
                    handlers: b.slice(m)
                });
                return l
            },
            fix: function(a) {
                if (a[e.expando])
                    return a;
                var b, c, d;
                b = a.type;
                var g = a
                  , k = this.fixHooks[b];
                k || (this.fixHooks[b] = k = jc.test(b) ? this.mouseHooks : ic.test(b) ? this.keyHooks : {});
                d = k.props ? this.props.concat(k.props) : this.props;
                a = new e.Event(g);
                for (b = d.length; b--; )
                    c = d[b],
                    a[c] = g[c];
                a.target || (a.target = g.srcElement || w);
                3 === a.target.nodeType && (a.target = a.target.parentNode);
                a.metaKey = !!a.metaKey;
                return k.filter ? k.filter(a, g) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function(a, b) {
                    null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e = b.button, k = b.fromElement;
                    null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || w,
                    d = c.documentElement,
                    c = c.body,
                    a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0),
                    a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                    !a.relatedTarget && k && (a.relatedTarget = k === a.target ? b.toElement : k);
                    a.which || void 0 === e || (a.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
                    return a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== z() && this.focus)
                            try {
                                return this.focus(),
                                !1
                            } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === z() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (e.nodeName(this, "input") && "checkbox" === this.type && this.click)
                            return this.click(),
                            !1
                    },
                    _default: function(a) {
                        return e.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                a = e.extend(new e.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? e.event.trigger(a, null, b) : e.event.dispatch.call(b, a);
                a.isDefaultPrevented() && c.preventDefault()
            }
        };
        e.removeEvent = w.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        : function(a, b, c) {
            b = "on" + b;
            a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null),
            a.detachEvent(b, c))
        }
        ;
        e.Event = function(a, b) {
            if (!(this instanceof e.Event))
                return new e.Event(a,b);
            a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? Pa : za) : this.type = a;
            b && e.extend(this, b);
            this.timeStamp = a && a.timeStamp || e.now();
            this[e.expando] = !0
        }
        ;
        e.Event.prototype = {
            isDefaultPrevented: za,
            isPropagationStopped: za,
            isImmediatePropagationStopped: za,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = Pa;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = Pa;
                a && (a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = Pa;
                this.stopPropagation()
            }
        };
        e.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            e.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = a.relatedTarget, k = a.handleObj;
                    if (!d || d !== this && !e.contains(this, d))
                        a.type = k.origType,
                        c = k.handler.apply(this, arguments),
                        a.type = b;
                    return c
                }
            }
        });
        v.submitBubbles || (e.event.special.submit = {
            setup: function() {
                if (e.nodeName(this, "form"))
                    return !1;
                e.event.add(this, "click._submit keypress._submit", function(a) {
                    a = a.target;
                    (a = e.nodeName(a, "input") || e.nodeName(a, "button") ? a.form : void 0) && !e._data(a, "submitBubbles") && (e.event.add(a, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }),
                    e._data(a, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble,
                this.parentNode && !a.isTrigger && e.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (e.nodeName(this, "form"))
                    return !1;
                e.event.remove(this, "._submit")
            }
        });
        v.changeBubbles || (e.event.special.change = {
            setup: function() {
                if (Ob.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" === this.type)
                        e.event.add(this, "propertychange._change", function(a) {
                            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                        }),
                        e.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1);
                            e.event.simulate("change", this, a, !0)
                        });
                    return !1
                }
                e.event.add(this, "beforeactivate._change", function(a) {
                    a = a.target;
                    Ob.test(a.nodeName) && !e._data(a, "changeBubbles") && (e.event.add(a, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || e.event.simulate("change", this.parentNode, a, !0)
                    }),
                    e._data(a, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)
                    return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                e.event.remove(this, "._change");
                return !Ob.test(this.nodeName)
            }
        });
        v.focusinBubbles || e.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                e.event.simulate(b, a.target, e.event.fix(a), !0)
            };
            e.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this
                      , g = e._data(d, b);
                    g || d.addEventListener(a, c, !0);
                    e._data(d, b, (g || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this
                      , g = e._data(d, b) - 1;
                    g ? e._data(d, b, g) : (d.removeEventListener(a, c, !0),
                    e._removeData(d, b))
                }
            }
        });
        e.fn.extend({
            on: function(a, b, c, d, g) {
                var k, l;
                if ("object" === typeof a) {
                    "string" !== typeof b && (c = c || b,
                    b = void 0);
                    for (k in a)
                        this.on(k, b, c, a[k], g);
                    return this
                }
                null == c && null == d ? (d = b,
                c = b = void 0) : null == d && ("string" === typeof b ? (d = c,
                c = void 0) : (d = c,
                c = b,
                b = void 0));
                if (!1 === d)
                    d = za;
                else if (!d)
                    return this;
                1 === g && (l = d,
                d = function(a) {
                    e().off(a);
                    return l.apply(this, arguments)
                }
                ,
                d.guid = l.guid || (l.guid = e.guid++));
                return this.each(function() {
                    e.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                    e(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                    this;
                if ("object" === typeof a) {
                    for (d in a)
                        this.off(d, b, a[d]);
                    return this
                }
                if (!1 === b || "function" === typeof b)
                    c = b,
                    b = void 0;
                !1 === c && (c = za);
                return this.each(function() {
                    e.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    e.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c)
                    return e.event.trigger(a, b, c, !0)
            }
        });
        var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , Qb = / jQuery\d+="(?:null|\d+)"/g
          , Rb = new RegExp("<(?:" + wb + ")[\\s/>]","i")
          , kb = /^\s+/
          , Sb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , lc = /<([\w:]+)/
          , mc = /<tbody/i
          , Hc = /<|&#?\w+;/
          , nc = /<(?:script|style|link)/i
          , Ic = /checked\s*(?:[^=]|=\s*.checked.)/i
          , oc = /^$|\/(?:java|ecma)script/i
          , ea = /^true\/(.*)/
          , Tb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , X = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
          , lb = ac(w).appendChild(w.createElement("div"));
        X.optgroup = X.option;
        X.tbody = X.tfoot = X.colgroup = X.caption = X.thead;
        X.th = X.td;
        e.extend({
            clone: function(a, b, c) {
                var d, g, k, l, m, n = e.contains(a.ownerDocument, a);
                v.html5Clone || e.isXMLDoc(a) || !Rb.test("<" + a.nodeName + ">") ? k = a.cloneNode(!0) : (lb.innerHTML = a.outerHTML,
                lb.removeChild(k = lb.firstChild));
                if (!(v.noCloneEvent && v.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a)))
                    for (d = O(k),
                    m = O(a),
                    l = 0; null != (g = m[l]); ++l)
                        if (d[l]) {
                            var t = d[l], r, B = void 0, q;
                            if (1 === t.nodeType) {
                                r = t.nodeName.toLowerCase();
                                if (!v.noCloneEvent && t[e.expando]) {
                                    q = e._data(t);
                                    for (B in q.events)
                                        e.removeEvent(t, B, q.handle);
                                    t.removeAttribute(e.expando)
                                }
                                if ("script" === r && t.text !== g.text)
                                    bb(t).text = g.text,
                                    zb(t);
                                else if ("object" === r)
                                    t.parentNode && (t.outerHTML = g.outerHTML),
                                    v.html5Clone && g.innerHTML && !e.trim(t.innerHTML) && (t.innerHTML = g.innerHTML);
                                else if ("input" === r && xb.test(g.type))
                                    t.defaultChecked = t.checked = g.checked,
                                    t.value !== g.value && (t.value = g.value);
                                else if ("option" === r)
                                    t.defaultSelected = t.selected = g.defaultSelected;
                                else if ("input" === r || "textarea" === r)
                                    t.defaultValue = g.defaultValue
                            }
                        }
                if (b)
                    if (c)
                        for (m = m || O(a),
                        d = d || O(k),
                        l = 0; null != (g = m[l]); l++)
                            Ab(g, d[l]);
                    else
                        Ab(a, k);
                d = O(k, "script");
                0 < d.length && cb(d, !n && O(a, "script"));
                return k
            },
            buildFragment: function(a, b, c, d) {
                for (var g, k, l, m, n, t, r = a.length, B = ac(b), q = [], u = 0; u < r; u++)
                    if ((k = a[u]) || 0 === k)
                        if ("object" === e.type(k))
                            e.merge(q, k.nodeType ? [k] : k);
                        else if (Hc.test(k)) {
                            l = l || B.appendChild(b.createElement("div"));
                            m = (lc.exec(k) || ["", ""])[1].toLowerCase();
                            t = X[m] || X._default;
                            l.innerHTML = t[1] + k.replace(Sb, "<$1></$2>") + t[2];
                            for (g = t[0]; g--; )
                                l = l.lastChild;
                            !v.leadingWhitespace && kb.test(k) && q.push(b.createTextNode(kb.exec(k)[0]));
                            if (!v.tbody)
                                for (g = (k = "table" !== m || mc.test(k) ? "<table>" !== t[1] || mc.test(k) ? 0 : l : l.firstChild) && k.childNodes.length; g--; )
                                    e.nodeName(n = k.childNodes[g], "tbody") && !n.childNodes.length && k.removeChild(n);
                            e.merge(q, l.childNodes);
                            for (l.textContent = ""; l.firstChild; )
                                l.removeChild(l.firstChild);
                            l = B.lastChild
                        } else
                            q.push(b.createTextNode(k));
                l && B.removeChild(l);
                v.appendChecked || e.grep(O(q, "input"), bc);
                for (u = 0; k = q[u++]; )
                    if (!d || -1 === e.inArray(k, d))
                        if (a = e.contains(k.ownerDocument, k),
                        l = O(B.appendChild(k), "script"),
                        a && cb(l),
                        c)
                            for (g = 0; k = l[g++]; )
                                oc.test(k.type || "") && c.push(k);
                return B
            },
            cleanData: function(a, b) {
                for (var c, d, g, k, l = 0, m = e.expando, n = e.cache, t = v.deleteExpando, r = e.event.special; null != (c = a[l]); l++)
                    if (b || e.acceptData(c))
                        if (k = (g = c[m]) && n[g]) {
                            if (k.events)
                                for (d in k.events)
                                    r[d] ? e.event.remove(c, d) : e.removeEvent(c, d, k.handle);
                            n[g] && (delete n[g],
                            t ? delete c[m] : "undefined" !== typeof c.removeAttribute ? c.removeAttribute(m) : c[m] = null,
                            da.push(g))
                        }
            }
        });
        e.fn.extend({
            text: function(a) {
                return ra(this, function(a) {
                    return void 0 === a ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || yb(this, a).appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = yb(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c = a ? e.filter(a, this) : this, d = 0; null != (a = c[d]); d++)
                    b || 1 !== a.nodeType || e.cleanData(O(a)),
                    a.parentNode && (b && e.contains(a.ownerDocument, a) && cb(O(a, "script")),
                    a.parentNode.removeChild(a));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && e.cleanData(O(a, !1)); a.firstChild; )
                        a.removeChild(a.firstChild);
                    a.options && e.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return e.clone(this, a, b)
                })
            },
            html: function(a) {
                return ra(this, function(a) {
                    var b = this[0] || {}
                      , c = 0
                      , d = this.length;
                    if (void 0 === a)
                        return 1 === b.nodeType ? b.innerHTML.replace(Qb, "") : void 0;
                    if (!("string" !== typeof a || nc.test(a) || !v.htmlSerialize && Rb.test(a) || !v.leadingWhitespace && kb.test(a) || X[(lc.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Sb, "<$1></$2>");
                        try {
                            for (; c < d; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (e.cleanData(O(b, !1)),
                                b.innerHTML = a);
                            b = 0
                        } catch (k) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                this.domManip(arguments, function(b) {
                    a = this.parentNode;
                    e.cleanData(O(this));
                    a && a.replaceChild(b, this)
                });
                return a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = Mb.apply([], a);
                var c, d, g, k, l = 0, m = this.length, n = this, t = m - 1, r = a[0], q = e.isFunction(r);
                if (q || 1 < m && "string" === typeof r && !v.checkClone && Ic.test(r))
                    return this.each(function(c) {
                        var d = n.eq(c);
                        q && (a[0] = r.call(this, c, d.html()));
                        d.domManip(a, b)
                    });
                if (m && (k = e.buildFragment(a, this[0].ownerDocument, !1, this),
                c = k.firstChild,
                1 === k.childNodes.length && (k = c),
                c)) {
                    g = e.map(O(k, "script"), bb);
                    for (d = g.length; l < m; l++)
                        c = k,
                        l !== t && (c = e.clone(c, !0, !0),
                        d && e.merge(g, O(c, "script"))),
                        b.call(this[l], c, l);
                    if (d)
                        for (k = g[g.length - 1].ownerDocument,
                        e.map(g, zb),
                        l = 0; l < d; l++)
                            c = g[l],
                            oc.test(c.type || "") && !e._data(c, "globalEval") && e.contains(k, c) && (c.src ? e._evalUrl && e._evalUrl(c.src) : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Tb, "")));
                    k = c = null
                }
                return this
            }
        });
        e.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            e.fn[a] = function(a) {
                for (var c = 0, d = [], k = e(a), l = k.length - 1; c <= l; c++)
                    a = c === l ? this : this.clone(!0),
                    e(k[c])[b](a),
                    Ja.apply(d, a.get());
                return this.pushStack(d)
            }
        });
        var Ha, Qa = {};
        (function() {
            var a, b, c = w.createElement("div");
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            a = c.getElementsByTagName("a")[0];
            a.style.cssText = "float:left;opacity:.5";
            v.opacity = /^0.5/.test(a.style.opacity);
            v.cssFloat = !!a.style.cssFloat;
            c.style.backgroundClip = "content-box";
            c.cloneNode(!0).style.backgroundClip = "";
            v.clearCloneStyle = "content-box" === c.style.backgroundClip;
            a = c = null;
            v.shrinkWrapBlocks = function() {
                var a, c, d;
                if (null == b) {
                    a = w.getElementsByTagName("body")[0];
                    if (!a)
                        return;
                    c = w.createElement("div");
                    d = w.createElement("div");
                    a.appendChild(c).appendChild(d);
                    b = !1;
                    "undefined" !== typeof d.style.zoom && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
                    d.innerHTML = "<div></div>",
                    d.firstChild.style.width = "5px",
                    b = 3 !== d.offsetWidth);
                    a.removeChild(c)
                }
                return b
            }
        }
        )();
        var ta = /^margin/, W = new RegExp("^(" + ka + ")(?!px)[a-z%]+$","i"), Ca, ga, Jc = /^(top|right|bottom|left)$/;
        q.getComputedStyle ? (Ca = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        }
        ,
        ga = function(a, b, c) {
            var d, g, k = a.style;
            g = (c = c || Ca(a)) ? c.getPropertyValue(b) || c[b] : void 0;
            c && ("" !== g || e.contains(a.ownerDocument, a) || (g = e.style(a, b)),
            W.test(g) && ta.test(b) && (a = k.width,
            b = k.minWidth,
            d = k.maxWidth,
            k.minWidth = k.maxWidth = k.width = g,
            g = c.width,
            k.width = a,
            k.minWidth = b,
            k.maxWidth = d));
            return void 0 === g ? g : g + ""
        }
        ) : w.documentElement.currentStyle && (Ca = function(a) {
            return a.currentStyle
        }
        ,
        ga = function(a, b, c) {
            var d, e, k, l = a.style;
            k = (c = c || Ca(a)) ? c[b] : void 0;
            null == k && l && l[b] && (k = l[b]);
            if (W.test(k) && !Jc.test(b)) {
                c = l.left;
                if (e = (d = a.runtimeStyle) && d.left)
                    d.left = a.currentStyle.left;
                l.left = "fontSize" === b ? "1em" : k;
                k = l.pixelLeft + "px";
                l.left = c;
                e && (d.left = e)
            }
            return void 0 === k ? k : k + "" || "auto"
        }
        );
        (function() {
            function a() {
                var a, b, f = w.getElementsByTagName("body")[0];
                f && (a = w.createElement("div"),
                b = w.createElement("div"),
                a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                f.appendChild(a).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
                e.swap(f, null != f.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    d = 4 === b.offsetWidth
                }),
                g = !0,
                k = !1,
                l = !0,
                q.getComputedStyle && (k = "1%" !== (q.getComputedStyle(b, null) || {}).top,
                g = "4px" === (q.getComputedStyle(b, null) || {
                    width: "4px"
                }).width),
                f.removeChild(a),
                b = f = null)
            }
            var b, c, d, g, k, l, m = w.createElement("div");
            m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            b = m.getElementsByTagName("a")[0];
            b.style.cssText = "float:left;opacity:.5";
            v.opacity = /^0.5/.test(b.style.opacity);
            v.cssFloat = !!b.style.cssFloat;
            m.style.backgroundClip = "content-box";
            m.cloneNode(!0).style.backgroundClip = "";
            v.clearCloneStyle = "content-box" === m.style.backgroundClip;
            b = m = null;
            e.extend(v, {
                reliableHiddenOffsets: function() {
                    if (null != c)
                        return c;
                    var a, b, f;
                    b = w.createElement("div");
                    var d = w.getElementsByTagName("body")[0];
                    if (d)
                        return b.setAttribute("className", "t"),
                        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        a = w.createElement("div"),
                        a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                        d.appendChild(a).appendChild(b),
                        b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        b = b.getElementsByTagName("td"),
                        b[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        f = 0 === b[0].offsetHeight,
                        b[0].style.display = "",
                        b[1].style.display = "none",
                        c = f && 0 === b[0].offsetHeight,
                        d.removeChild(a),
                        c
                },
                boxSizing: function() {
                    null == d && a();
                    return d
                },
                boxSizingReliable: function() {
                    null == g && a();
                    return g
                },
                pixelPosition: function() {
                    null == k && a();
                    return k
                },
                reliableMarginRight: function() {
                    var a, b, f, c;
                    if (null == l && q.getComputedStyle) {
                        a = w.getElementsByTagName("body")[0];
                        if (!a)
                            return;
                        b = w.createElement("div");
                        f = w.createElement("div");
                        b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                        a.appendChild(b).appendChild(f);
                        c = f.appendChild(w.createElement("div"));
                        c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                        c.style.marginRight = c.style.width = "0";
                        f.style.width = "1px";
                        l = !parseFloat((q.getComputedStyle(c, null) || {}).marginRight);
                        a.removeChild(b)
                    }
                    return l
                }
            })
        }
        )();
        e.swap = function(a, b, c, d) {
            var e, k = {};
            for (e in b)
                k[e] = a.style[e],
                a.style[e] = b[e];
            c = c.apply(a, d || []);
            for (e in b)
                a.style[e] = k[e];
            return c
        }
        ;
        var Ub = /alpha\([^)]*\)/i
          , Kc = /opacity\s*=\s*([^)]*)/
          , Lc = /^(none|table(?!-c[ea]).+)/
          , Bc = new RegExp("^(" + ka + ")(.*)$","i")
          , pc = new RegExp("^([+-])=(" + ka + ")","i")
          , qc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ea = {
            letterSpacing: 0,
            fontWeight: 400
        }
          , Ra = ["Webkit", "O", "Moz", "ms"];
        e.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b)
                            return a = ga(a, "opacity"),
                            "" === a ? "1" : a
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": v.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var g, k, l, m = e.camelCase(b), n = a.style;
                    b = e.cssProps[m] || (e.cssProps[m] = Eb(n, m));
                    l = e.cssHooks[b] || e.cssHooks[m];
                    if (void 0 !== c) {
                        if (k = typeof c,
                        "string" === k && (g = pc.exec(c)) && (c = (g[1] + 1) * g[2] + parseFloat(e.css(a, b)),
                        k = "number"),
                        null != c && c === c && ("number" !== k || e.cssNumber[m] || (c += "px"),
                        v.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (n[b] = "inherit"),
                        !(l && "set"in l) || void 0 !== (c = l.set(a, c, d))))
                            try {
                                n[b] = "",
                                n[b] = c
                            } catch (t) {}
                    } else
                        return l && "get"in l && void 0 !== (g = l.get(a, !1, d)) ? g : n[b]
                }
            },
            css: function(a, b, c, d) {
                var g, k;
                k = e.camelCase(b);
                b = e.cssProps[k] || (e.cssProps[k] = Eb(a.style, k));
                (k = e.cssHooks[b] || e.cssHooks[k]) && "get"in k && (g = k.get(a, !0, c));
                void 0 === g && (g = ga(a, b, d));
                "normal" === g && b in Ea && (g = Ea[b]);
                return "" === c || c ? (a = parseFloat(g),
                !0 === c || e.isNumeric(a) ? a || 0 : g) : g
            }
        });
        e.each(["height", "width"], function(a, b) {
            e.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c)
                        return 0 === a.offsetWidth && Lc.test(e.css(a, "display")) ? e.swap(a, qc, function() {
                            return Hb(a, b, d)
                        }) : Hb(a, b, d)
                },
                set: function(a, c, d) {
                    var k = d && Ca(a);
                    return Gb(a, c, d ? V(a, b, d, v.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, k), k) : 0)
                }
            }
        });
        v.opacity || (e.cssHooks.opacity = {
            get: function(a, b) {
                return Kc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style;
                a = a.currentStyle;
                var d = e.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                  , g = a && a.filter || c.filter || "";
                c.zoom = 1;
                if ((1 <= b || "" === b) && "" === e.trim(g.replace(Ub, "")) && c.removeAttribute && (c.removeAttribute("filter"),
                "" === b || a && !a.filter))
                    return;
                c.filter = Ub.test(g) ? g.replace(Ub, d) : g + " " + d
            }
        });
        e.cssHooks.marginRight = Db(v.reliableMarginRight, function(a, b) {
            if (b)
                return e.swap(a, {
                    display: "inline-block"
                }, ga, [a, "marginRight"])
        });
        e.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            e.cssHooks[a + b] = {
                expand: function(c) {
                    var d = 0
                      , e = {};
                    for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + Z[d] + b] = c[d] || c[d - 2] || c[0];
                    return e
                }
            };
            ta.test(a) || (e.cssHooks[a + b].set = Gb)
        });
        e.fn.extend({
            css: function(a, b) {
                return ra(this, function(a, b, f) {
                    var c, d = {}, m = 0;
                    if (e.isArray(b)) {
                        f = Ca(a);
                        for (c = b.length; m < c; m++)
                            d[b[m]] = e.css(a, b[m], !1, f);
                        return d
                    }
                    return void 0 !== f ? e.style(a, b, f) : e.css(a, b)
                }, a, b, 1 < arguments.length)
            },
            show: function() {
                return Fb(this, !0)
            },
            hide: function() {
                return Fb(this)
            },
            toggle: function(a) {
                return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    fa(this) ? e(this).show() : e(this).hide()
                })
            }
        });
        e.Tween = R;
        R.prototype = {
            constructor: R,
            init: function(a, b, c, d, g, k) {
                this.elem = a;
                this.prop = c;
                this.easing = g || "swing";
                this.options = b;
                this.start = this.now = this.cur();
                this.end = d;
                this.unit = k || (e.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = R.propHooks[this.prop];
                return a && a.get ? a.get(this) : R.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = R.propHooks[this.prop];
                this.pos = this.options.duration ? b = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
                this.now = (this.end - this.start) * b + this.start;
                this.options.step && this.options.step.call(this.elem, this.now, this);
                c && c.set ? c.set(this) : R.propHooks._default.set(this);
                return this
            }
        };
        R.prototype.init.prototype = R.prototype;
        R.propHooks = {
            _default: {
                get: function(a) {
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = e.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
                },
                set: function(a) {
                    if (e.fx.step[a.prop])
                        e.fx.step[a.prop](a);
                    else
                        a.elem.style && (null != a.elem.style[e.cssProps[a.prop]] || e.cssHooks[a.prop]) ? e.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        };
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        };
        e.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        };
        e.fx = R.prototype.init;
        e.fx.step = {};
        var Ia, Ua, Mc = /^(?:toggle|show|hide)$/, Va = new RegExp("^(?:([+-])=|)(" + ka + ")([a-z%]*)$","i"), Wa = /queueHooks$/, eb = [function(a, b, c) {
            var d, g, k, l, m, n, t = this, r = {}, q = a.style, u = a.nodeType && fa(a), x = e._data(a, "fxshow");
            c.queue || (l = e._queueHooks(a, "fx"),
            null == l.unqueued && (l.unqueued = 0,
            m = l.empty.fire,
            l.empty.fire = function() {
                l.unqueued || m()
            }
            ),
            l.unqueued++,
            t.always(function() {
                t.always(function() {
                    l.unqueued--;
                    e.queue(a, "fx").length || l.empty.fire()
                })
            }));
            1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [q.overflow, q.overflowX, q.overflowY],
            g = e.css(a, "display"),
            n = Cb(a.nodeName),
            "none" === g && (g = n),
            "inline" === g && "none" === e.css(a, "float") && (v.inlineBlockNeedsLayout && "inline" !== n ? q.zoom = 1 : q.display = "inline-block"));
            c.overflow && (q.overflow = "hidden",
            v.shrinkWrapBlocks() || t.always(function() {
                q.overflow = c.overflow[0];
                q.overflowX = c.overflow[1];
                q.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (g = b[d],
                Mc.exec(g)) {
                    delete b[d];
                    k = k || "toggle" === g;
                    if (g === (u ? "hide" : "show"))
                        if ("show" === g && x && void 0 !== x[d])
                            u = !0;
                        else
                            continue;
                    r[d] = x && x[d] || e.style(a, d)
                }
            if (!e.isEmptyObject(r))
                for (d in x ? "hidden"in x && (u = x.hidden) : x = e._data(a, "fxshow", {}),
                k && (x.hidden = !u),
                u ? e(a).show() : t.done(function() {
                    e(a).hide()
                }),
                t.done(function() {
                    var b;
                    e._removeData(a, "fxshow");
                    for (b in r)
                        e.style(a, b, r[b])
                }),
                r)
                    b = Jb(u ? x[d] : 0, d, t),
                    d in x || (x[d] = b.start,
                    u && (b.end = b.start,
                    b.start = "width" === d || "height" === d ? 1 : 0))
        }
        ], ha = {
            "*": [function(a, b) {
                var c = this.createTween(a, b)
                  , d = c.cur()
                  , g = (b = Va.exec(b)) && b[3] || (e.cssNumber[a] ? "" : "px")
                  , k = (e.cssNumber[a] || "px" !== g && +d) && Va.exec(e.css(c.elem, a))
                  , l = 1
                  , m = 20;
                if (k && k[3] !== g) {
                    g = g || k[3];
                    b = b || [];
                    k = +d || 1;
                    do
                        l = l || ".5",
                        k /= l,
                        e.style(c.elem, a, k + g);
                    while (l !== (l = c.cur() / d) && 1 !== l && --m)
                }
                b && (k = c.start = +k || +d || 0,
                c.unit = g,
                c.end = b[1] ? k + (b[1] + 1) * b[2] : +b[2]);
                return c
            }
            ]
        };
        e.Animation = e.extend(Kb, {
            tweener: function(a, b) {
                e.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, g = a.length; d < g; d++)
                    c = a[d],
                    ha[c] = ha[c] || [],
                    ha[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? eb.unshift(a) : eb.push(a)
            }
        });
        e.speed = function(a, b, c) {
            var d = a && "object" === typeof a ? e.extend({}, a) : {
                complete: c || !c && b || e.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !e.isFunction(b) && b
            };
            d.duration = e.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in e.fx.speeds ? e.fx.speeds[d.duration] : e.fx.speeds._default;
            if (null == d.queue || !0 === d.queue)
                d.queue = "fx";
            d.old = d.complete;
            d.complete = function() {
                e.isFunction(d.old) && d.old.call(this);
                d.queue && e.dequeue(this, d.queue)
            }
            ;
            return d
        }
        ;
        e.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(fa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var g = e.isEmptyObject(a)
                  , k = e.speed(b, c, d);
                b = function() {
                    var b = Kb(this, e.extend({}, a), k);
                    (g || e._data(this, "finish")) && b.stop(!0)
                }
                ;
                b.finish = b;
                return g || !1 === k.queue ? this.each(b) : this.queue(k.queue, b)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop;
                    b(c)
                };
                "string" !== typeof a && (c = b,
                b = a,
                a = void 0);
                b && !1 !== a && this.queue(a || "fx", []);
                return this.each(function() {
                    var b = !0
                      , f = null != a && a + "queueHooks"
                      , l = e.timers
                      , m = e._data(this);
                    if (f)
                        m[f] && m[f].stop && d(m[f]);
                    else
                        for (f in m)
                            m[f] && m[f].stop && Wa.test(f) && d(m[f]);
                    for (f = l.length; f--; )
                        l[f].elem !== this || null != a && l[f].queue !== a || (l[f].anim.stop(c),
                        b = !1,
                        l.splice(f, 1));
                    !b && c || e.dequeue(this, a)
                })
            },
            finish: function(a) {
                !1 !== a && (a = a || "fx");
                return this.each(function() {
                    var b, c = e._data(this), d = c[a + "queue"];
                    b = c[a + "queueHooks"];
                    var g = e.timers
                      , k = d ? d.length : 0;
                    c.finish = !0;
                    e.queue(this, a, []);
                    b && b.stop && b.stop.call(this, !0);
                    for (b = g.length; b--; )
                        g[b].elem === this && g[b].queue === a && (g[b].anim.stop(!0),
                        g.splice(b, 1));
                    for (b = 0; b < k; b++)
                        d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        });
        e.each(["toggle", "show", "hide"], function(a, b) {
            var c = e.fn[b];
            e.fn[b] = function(a, d, e) {
                return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        });
        e.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            e.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        });
        e.timers = [];
        e.fx.tick = function() {
            var a, b = e.timers, c = 0;
            for (Ia = e.now(); c < b.length; c++)
                a = b[c],
                a() || b[c] !== a || b.splice(c--, 1);
            b.length || e.fx.stop();
            Ia = void 0
        }
        ;
        e.fx.timer = function(a) {
            e.timers.push(a);
            a() ? e.fx.start() : e.timers.pop()
        }
        ;
        e.fx.interval = 13;
        e.fx.start = function() {
            Ua || (Ua = setInterval(e.fx.tick, e.fx.interval))
        }
        ;
        e.fx.stop = function() {
            clearInterval(Ua);
            Ua = null
        }
        ;
        e.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        e.fn.delay = function(a, b) {
            a = e.fx ? e.fx.speeds[a] || a : a;
            return this.queue(b || "fx", function(b, c) {
                var f = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(f)
                }
            })
        }
        ;
        (function() {
            var a, b, c, d, e = w.createElement("div");
            e.setAttribute("className", "t");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            a = e.getElementsByTagName("a")[0];
            c = w.createElement("select");
            d = c.appendChild(w.createElement("option"));
            b = e.getElementsByTagName("input")[0];
            a.style.cssText = "top:1px";
            v.getSetAttribute = "t" !== e.className;
            v.style = /top/.test(a.getAttribute("style"));
            v.hrefNormalized = "/a" === a.getAttribute("href");
            v.checkOn = !!b.value;
            v.optSelected = d.selected;
            v.enctype = !!w.createElement("form").enctype;
            c.disabled = !0;
            v.optDisabled = !d.disabled;
            b = w.createElement("input");
            b.setAttribute("value", "");
            v.input = "" === b.getAttribute("value");
            b.value = "t";
            b.setAttribute("type", "radio");
            v.radioValue = "t" === b.value
        }
        )();
        var rc = /\r/g;
        e.fn.extend({
            val: function(a) {
                var b, c, d, g = this[0];
                if (arguments.length)
                    return d = e.isFunction(a),
                    this.each(function(c) {
                        1 === this.nodeType && (c = d ? a.call(this, c, e(this).val()) : a,
                        null == c ? c = "" : "number" === typeof c ? c += "" : e.isArray(c) && (c = e.map(c, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                    });
                if (g) {
                    if ((b = e.valHooks[g.type] || e.valHooks[g.nodeName.toLowerCase()]) && "get"in b && void 0 !== (c = b.get(g, "value")))
                        return c;
                    c = g.value;
                    return "string" === typeof c ? c.replace(rc, "") : null == c ? "" : c
                }
            }
        });
        e.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = e.find.attr(a, "value");
                        return null != b ? b : e.text(a)
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c = a.options, d = a.selectedIndex, g = (a = "select-one" === a.type || 0 > d) ? null : [], k = a ? d + 1 : c.length, l = 0 > d ? k : a ? d : 0; l < k; l++)
                            if (b = c[l],
                            !(!b.selected && l !== d || (v.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && e.nodeName(b.parentNode, "optgroup"))) {
                                b = e(b).val();
                                if (a)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d = a.options, g = e.makeArray(b), k = d.length; k--; )
                            if (b = d[k],
                            0 <= e.inArray(e.valHooks.option.get(b), g))
                                try {
                                    b.selected = c = !0
                                } catch (l) {
                                    b.scrollHeight
                                }
                            else
                                b.selected = !1;
                        c || (a.selectedIndex = -1);
                        return d
                    }
                }
            }
        });
        e.each(["radio", "checkbox"], function() {
            e.valHooks[this] = {
                set: function(a, b) {
                    if (e.isArray(b))
                        return a.checked = 0 <= e.inArray(e(a).val(), b)
                }
            };
            v.checkOn || (e.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
            )
        });
        var J, mb, Y = e.expr.attrHandle, Ma = /^(?:checked|selected)$/i, Fa = v.getSetAttribute, nb = v.input;
        e.fn.extend({
            attr: function(a, b) {
                return ra(this, e.attr, a, b, 1 < arguments.length)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    e.removeAttr(this, a)
                })
            }
        });
        e.extend({
            attr: function(a, b, c) {
                var d, g, k = a.nodeType;
                if (a && 3 !== k && 8 !== k && 2 !== k) {
                    if ("undefined" === typeof a.getAttribute)
                        return e.prop(a, b, c);
                    1 === k && e.isXMLDoc(a) || (b = b.toLowerCase(),
                    d = e.attrHooks[b] || (e.expr.match.bool.test(b) ? mb : J));
                    if (void 0 !== c)
                        if (null === c)
                            e.removeAttr(a, b);
                        else {
                            if (d && "set"in d && void 0 !== (g = d.set(a, c, b)))
                                return g;
                            a.setAttribute(b, c + "");
                            return c
                        }
                    else {
                        if (d && "get"in d && null !== (g = d.get(a, b)))
                            return g;
                        g = e.find.attr(a, b);
                        return null == g ? void 0 : g
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d = 0, g = b && b.match(T);
                if (g && 1 === a.nodeType)
                    for (; b = g[d++]; )
                        c = e.propFix[b] || b,
                        e.expr.match.bool.test(b) ? nb && Fa || !Ma.test(b) ? a[c] = !1 : a[e.camelCase("default-" + b)] = a[c] = !1 : e.attr(a, b, ""),
                        a.removeAttribute(Fa ? b : c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!v.radioValue && "radio" === b && e.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b);
                            c && (a.value = c);
                            return b
                        }
                    }
                }
            }
        });
        mb = {
            set: function(a, b, c) {
                !1 === b ? e.removeAttr(a, c) : nb && Fa || !Ma.test(c) ? a.setAttribute(!Fa && e.propFix[c] || c, c) : a[e.camelCase("default-" + c)] = a[c] = !0;
                return c
            }
        };
        e.each(e.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = Y[b] || e.find.attr;
            Y[b] = nb && Fa || !Ma.test(b) ? function(a, b, f) {
                var d, e;
                f || (e = Y[b],
                Y[b] = d,
                d = null != c(a, b, f) ? b.toLowerCase() : null,
                Y[b] = e);
                return d
            }
            : function(a, b, c) {
                if (!c)
                    return a[e.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        });
        nb && Fa || (e.attrHooks.value = {
            set: function(a, b, c) {
                if (e.nodeName(a, "input"))
                    a.defaultValue = b;
                else
                    return J && J.set(a, b, c)
            }
        });
        Fa || (J = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
                d.value = b += "";
                if ("value" === c || b === a.getAttribute(c))
                    return b
            }
        },
        Y.id = Y.name = Y.coords = function(a, b, c) {
            var d;
            if (!c)
                return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }
        ,
        e.valHooks.button = {
            get: function(a, b) {
                if ((a = a.getAttributeNode(b)) && a.specified)
                    return a.value
            },
            set: J.set
        },
        e.attrHooks.contenteditable = {
            set: function(a, b, c) {
                J.set(a, "" === b ? !1 : b, c)
            }
        },
        e.each(["width", "height"], function(a, b) {
            e.attrHooks[b] = {
                set: function(a, c) {
                    if ("" === c)
                        return a.setAttribute(b, "auto"),
                        c
                }
            }
        }));
        v.style || (e.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Vb = /^(?:input|select|textarea|button|object)$/i
          , Wb = /^(?:a|area)$/i;
        e.fn.extend({
            prop: function(a, b) {
                return ra(this, e.prop, a, b, 1 < arguments.length)
            },
            removeProp: function(a) {
                a = e.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = void 0,
                        delete this[a]
                    } catch (b) {}
                })
            }
        });
        e.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, g, k;
                k = a.nodeType;
                if (a && 3 !== k && 8 !== k && 2 !== k) {
                    if (k = 1 !== k || !e.isXMLDoc(a))
                        b = e.propFix[b] || b,
                        g = e.propHooks[b];
                    return void 0 !== c ? g && "set"in g && void 0 !== (d = g.set(a, c, b)) ? d : a[b] = c : g && "get"in g && null !== (d = g.get(a, b)) ? d : a[b]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = e.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Vb.test(a.nodeName) || Wb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        });
        v.hrefNormalized || e.each(["href", "src"], function(a, b) {
            e.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        });
        v.optSelected || (e.propHooks.selected = {
            get: function(a) {
                if (a = a.parentNode)
                    a.selectedIndex,
                    a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        });
        e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
            e.propFix[this.toLowerCase()] = this
        });
        v.enctype || (e.propFix.enctype = "encoding");
        var Xa = /[\t\r\n\f]/g;
        e.fn.extend({
            addClass: function(a) {
                var b, c, d, g, k, l = 0, m = this.length;
                b = "string" === typeof a && a;
                if (e.isFunction(a))
                    return this.each(function(b) {
                        e(this).addClass(a.call(this, b, this.className))
                    });
                if (b)
                    for (b = (a || "").match(T) || []; l < m; l++)
                        if (c = this[l],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Xa, " ") : " ")) {
                            for (k = 0; g = b[k++]; )
                                0 > d.indexOf(" " + g + " ") && (d += g + " ");
                            d = e.trim(d);
                            c.className !== d && (c.className = d)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, g, k, l = 0, m = this.length;
                b = 0 === arguments.length || "string" === typeof a && a;
                if (e.isFunction(a))
                    return this.each(function(b) {
                        e(this).removeClass(a.call(this, b, this.className))
                    });
                if (b)
                    for (b = (a || "").match(T) || []; l < m; l++)
                        if (c = this[l],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Xa, " ") : "")) {
                            for (k = 0; g = b[k++]; )
                                for (; 0 <= d.indexOf(" " + g + " "); )
                                    d = d.replace(" " + g + " ", " ");
                            d = a ? e.trim(d) : "";
                            c.className !== d && (c.className = d)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function(c) {
                    e(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, f = 0, d = e(this), l = a.match(T) || []; b = l[f++]; )
                            d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                    else if ("undefined" === c || "boolean" === c)
                        this.className && e._data(this, "__className__", this.className),
                        this.className = this.className || !1 === a ? "" : e._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                a = " " + a + " ";
                for (var b = 0, c = this.length; b < c; b++)
                    if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Xa, " ").indexOf(a))
                        return !0;
                return !1
            }
        });
        e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            e.fn[b] = function(a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
        e.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Xb = e.now()
          , U = /\?/
          , xa = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        e.parseJSON = function(a) {
            if (q.JSON && q.JSON.parse)
                return q.JSON.parse(a + "");
            var b, c = null, d = e.trim(a + "");
            return d && !e.trim(d.replace(xa, function(a, d, e, h) {
                b && d && (c = 0);
                if (0 === c)
                    return a;
                b = e || d;
                c += !h - !e;
                return ""
            })) ? Function("return " + d)() : e.error("Invalid JSON: " + a)
        }
        ;
        e.parseXML = function(a) {
            var b, c;
            if (!a || "string" !== typeof a)
                return null;
            try {
                q.DOMParser ? (c = new DOMParser,
                b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"),
                b.async = "false",
                b.loadXML(a))
            } catch (d) {
                b = void 0
            }
            b && b.documentElement && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a);
            return b
        }
        ;
        var Ga, sa, Nc = /#.*$/, sc = /([?&])_=[^&]*/, Oc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, tc = /^(?:GET|HEAD)$/, uc = /^\/\//, ob = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Yb = {}, Lb = {}, vc = "*/".concat("*");
        try {
            sa = location.href
        } catch (a) {
            sa = w.createElement("a"),
            sa.href = "",
            sa = sa.href
        }
        Ga = ob.exec(sa.toLowerCase()) || [];
        e.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: sa,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ga[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": vc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": e.parseJSON,
                    "text xml": e.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? hb(hb(a, e.ajaxSettings), b) : hb(e.ajaxSettings, a)
            },
            ajaxPrefilter: fb(Yb),
            ajaxTransport: fb(Lb),
            ajax: function(a, b) {
                function c(a, b, f, d) {
                    var p, h, t, G;
                    G = b;
                    if (2 !== A) {
                        A = 2;
                        l && clearTimeout(l);
                        n = void 0;
                        k = d || "";
                        y.readyState = 0 < a ? 4 : 0;
                        d = 200 <= a && 300 > a || 304 === a;
                        if (f) {
                            t = r;
                            for (var M = y, F, C, K, D, z = t.contents, H = t.dataTypes; "*" === H[0]; )
                                H.shift(),
                                void 0 === C && (C = t.mimeType || M.getResponseHeader("Content-Type"));
                            if (C)
                                for (D in z)
                                    if (z[D] && z[D].test(C)) {
                                        H.unshift(D);
                                        break
                                    }
                            if (H[0]in f)
                                K = H[0];
                            else {
                                for (D in f) {
                                    if (!H[0] || t.converters[D + " " + H[0]]) {
                                        K = D;
                                        break
                                    }
                                    F || (F = D)
                                }
                                K = K || F
                            }
                            K ? (K !== H[0] && H.unshift(K),
                            t = f[K]) : t = void 0
                        }
                        a: {
                            f = r;
                            F = t;
                            C = y;
                            K = d;
                            var Q, I, E, M = {}, z = f.dataTypes.slice();
                            if (z[1])
                                for (I in f.converters)
                                    M[I.toLowerCase()] = f.converters[I];
                            for (D = z.shift(); D; )
                                if (f.responseFields[D] && (C[f.responseFields[D]] = F),
                                !E && K && f.dataFilter && (F = f.dataFilter(F, f.dataType)),
                                E = D,
                                D = z.shift())
                                    if ("*" === D)
                                        D = E;
                                    else if ("*" !== E && E !== D) {
                                        I = M[E + " " + D] || M["* " + D];
                                        if (!I)
                                            for (Q in M)
                                                if (t = Q.split(" "),
                                                t[1] === D && (I = M[E + " " + t[0]] || M["* " + t[0]])) {
                                                    !0 === I ? I = M[Q] : !0 !== M[Q] && (D = t[0],
                                                    z.unshift(t[1]));
                                                    break
                                                }
                                        if (!0 !== I)
                                            if (I && f["throws"])
                                                F = I(F);
                                            else
                                                try {
                                                    F = I(F)
                                                } catch (J) {
                                                    t = {
                                                        state: "parsererror",
                                                        error: I ? J : "No conversion from " + E + " to " + D
                                                    };
                                                    break a
                                                }
                                    }
                            t = {
                                state: "success",
                                data: F
                            }
                        }
                        if (d)
                            r.ifModified && ((G = y.getResponseHeader("Last-Modified")) && (e.lastModified[g] = G),
                            (G = y.getResponseHeader("etag")) && (e.etag[g] = G)),
                            204 === a || "HEAD" === r.type ? G = "nocontent" : 304 === a ? G = "notmodified" : (G = t.state,
                            p = t.data,
                            h = t.error,
                            d = !h);
                        else if (h = G,
                        a || !G)
                            G = "error",
                            0 > a && (a = 0);
                        y.status = a;
                        y.statusText = (b || G) + "";
                        d ? v.resolveWith(q, [p, G, y]) : v.rejectWith(q, [y, G, h]);
                        y.statusCode(w);
                        w = void 0;
                        m && u.trigger(d ? "ajaxSuccess" : "ajaxError", [y, r, d ? p : h]);
                        x.fireWith(q, [y, G]);
                        m && (u.trigger("ajaxComplete", [y, r]),
                        --e.active || e.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a,
                a = void 0);
                b = b || {};
                var d, g, k, l, m, n, t, r = e.ajaxSetup({}, b), q = r.context || r, u = r.context && (q.nodeType || q.jquery) ? e(q) : e.event, v = e.Deferred(), x = e.Callbacks("once memory"), w = r.statusCode || {}, z = {}, E = {}, A = 0, G = "canceled", y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === A) {
                            if (!t)
                                for (t = {}; b = Oc.exec(k); )
                                    t[b[1].toLowerCase()] = b[2];
                            b = t[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === A ? k : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        A || (a = E[c] = E[c] || a,
                        z[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        A || (r.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > A)
                                for (b in a)
                                    w[b] = [w[b], a[b]];
                            else
                                y.always(a[y.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || G;
                        n && n.abort(a);
                        c(0, a);
                        return this
                    }
                };
                v.promise(y).complete = x.add;
                y.success = y.done;
                y.error = y.fail;
                r.url = ((a || r.url || sa) + "").replace(Nc, "").replace(uc, Ga[1] + "//");
                r.type = b.method || b.type || r.method || r.type;
                r.dataTypes = e.trim(r.dataType || "*").toLowerCase().match(T) || [""];
                null == r.crossDomain && (a = ob.exec(r.url.toLowerCase()),
                r.crossDomain = !(!a || a[1] === Ga[1] && a[2] === Ga[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Ga[3] || ("http:" === Ga[1] ? "80" : "443"))));
                r.data && r.processData && "string" !== typeof r.data && (r.data = e.param(r.data, r.traditional));
                gb(Yb, r, b, y);
                if (2 === A)
                    return y;
                (m = r.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
                r.type = r.type.toUpperCase();
                r.hasContent = !tc.test(r.type);
                g = r.url;
                r.hasContent || (r.data && (g = r.url += (U.test(g) ? "&" : "?") + r.data,
                delete r.data),
                !1 === r.cache && (r.url = sc.test(g) ? g.replace(sc, "$1_=" + Xb++) : g + (U.test(g) ? "&" : "?") + "_=" + Xb++));
                r.ifModified && (e.lastModified[g] && y.setRequestHeader("If-Modified-Since", e.lastModified[g]),
                e.etag[g] && y.setRequestHeader("If-None-Match", e.etag[g]));
                (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && y.setRequestHeader("Content-Type", r.contentType);
                y.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + vc + "; q=0.01" : "") : r.accepts["*"]);
                for (d in r.headers)
                    y.setRequestHeader(d, r.headers[d]);
                if (r.beforeSend && (!1 === r.beforeSend.call(q, y, r) || 2 === A))
                    return y.abort();
                G = "abort";
                for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    y[d](r[d]);
                if (n = gb(Lb, r, b, y)) {
                    y.readyState = 1;
                    m && u.trigger("ajaxSend", [y, r]);
                    r.async && 0 < r.timeout && (l = setTimeout(function() {
                        y.abort("timeout")
                    }, r.timeout));
                    try {
                        A = 1,
                        n.send(z, c)
                    } catch (P) {
                        if (2 > A)
                            c(-1, P);
                        else
                            throw P;
                    }
                } else
                    c(-1, "No Transport");
                return y
            },
            getJSON: function(a, b, c) {
                return e.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return e.get(a, void 0, b, "script")
            }
        });
        e.each(["get", "post"], function(a, b) {
            e[b] = function(a, c, d, k) {
                e.isFunction(c) && (k = k || d,
                d = c,
                c = void 0);
                return e.ajax({
                    url: a,
                    type: b,
                    dataType: k,
                    data: c,
                    success: d
                })
            }
        });
        e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            e.fn[b] = function(a) {
                return this.on(b, a)
            }
        });
        e._evalUrl = function(a) {
            return e.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ;
        e.fn.extend({
            wrapAll: function(a) {
                if (e.isFunction(a))
                    return this.each(function(b) {
                        e(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = e(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                            a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return e.isFunction(a) ? this.each(function(b) {
                    e(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = e(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = e.isFunction(a);
                return this.each(function(c) {
                    e(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        e.expr.filters.hidden = function(a) {
            return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !v.reliableHiddenOffsets() && "none" === (a.style && a.style.display || e.css(a, "display"))
        }
        ;
        e.expr.filters.visible = function(a) {
            return !e.expr.filters.hidden(a)
        }
        ;
        var wc = /%20/g
          , Cc = /\[\]$/
          , xc = /\r?\n/g
          , Pc = /^(?:submit|button|image|reset|file)$/i
          , pb = /^(?:input|select|textarea|keygen)/i;
        e.param = function(a, b) {
            var c, d = [], g = function(a, b) {
                b = e.isFunction(b) ? b() : null == b ? "" : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            void 0 === b && (b = e.ajaxSettings && e.ajaxSettings.traditional);
            if (e.isArray(a) || a.jquery && !e.isPlainObject(a))
                e.each(a, function() {
                    g(this.name, this.value)
                });
            else
                for (c in a)
                    ib(c, a[c], b, g);
            return d.join("&").replace(wc, "+")
        }
        ;
        e.fn.extend({
            serialize: function() {
                return e.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = e.prop(this, "elements");
                    return a ? e.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !e(this).is(":disabled") && pb.test(this.nodeName) && !Pc.test(a) && (this.checked || !xb.test(a))
                }).map(function(a, b) {
                    a = e(this).val();
                    return null == a ? null : e.isArray(a) ? e.map(a, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(xc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    }
                }).get()
            }
        });
        e.ajaxSettings.xhr = void 0 !== q.ActiveXObject ? function() {
            var a;
            if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && ia()))
                a: {
                    try {
                        a = new q.ActiveXObject("Microsoft.XMLHTTP");
                        break a
                    } catch (b) {}
                    a = void 0
                }
            return a
        }
        : ia;
        var qb = 0
          , Ya = {}
          , Na = e.ajaxSettings.xhr();
        if (q.ActiveXObject)
            e(q).on("unload", function() {
                for (var a in Ya)
                    Ya[a](void 0, !0)
            });
        v.cors = !!Na && "withCredentials"in Na;
        (Na = v.ajax = !!Na) && e.ajaxTransport(function(a) {
            if (!a.crossDomain || v.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var g, k = a.xhr(), l = ++qb;
                        k.open(a.type, a.url, a.async, a.username, a.password);
                        if (a.xhrFields)
                            for (g in a.xhrFields)
                                k[g] = a.xhrFields[g];
                        a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType);
                        a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (g in c)
                            void 0 !== c[g] && k.setRequestHeader(g, c[g] + "");
                        k.send(a.hasContent && a.data || null);
                        b = function(c, g) {
                            var p, r, q;
                            if (b && (g || 4 === k.readyState))
                                if (delete Ya[l],
                                b = void 0,
                                k.onreadystatechange = e.noop,
                                g)
                                    4 !== k.readyState && k.abort();
                                else {
                                    q = {};
                                    p = k.status;
                                    "string" === typeof k.responseText && (q.text = k.responseText);
                                    try {
                                        r = k.statusText
                                    } catch (u) {
                                        r = ""
                                    }
                                    p || !a.isLocal || a.crossDomain ? 1223 === p && (p = 204) : p = q.text ? 200 : 404
                                }
                            q && d(p, r, q, k.getAllResponseHeaders())
                        }
                        ;
                        a.async ? 4 === k.readyState ? setTimeout(b) : k.onreadystatechange = Ya[l] = b : b()
                    },
                    abort: function() {
                        b && b(void 0, !0)
                    }
                }
            }
        });
        e.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    e.globalEval(a);
                    return a
                }
            }
        });
        e.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1);
            a.crossDomain && (a.type = "GET",
            a.global = !1)
        });
        e.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = w.head || e("head")[0] || w.documentElement;
                return {
                    send: function(d, e) {
                        b = w.createElement("script");
                        b.async = !0;
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a, c) {
                            if (c || !b.readyState || /loaded|complete/.test(b.readyState))
                                b.onload = b.onreadystatechange = null,
                                b.parentNode && b.parentNode.removeChild(b),
                                b = null,
                                c || e(200, "success")
                        }
                        ;
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        if (b)
                            b.onload(void 0, !0)
                    }
                }
            }
        });
        var Zb = []
          , rb = /(=)\?(?=&|$)|\?\?/;
        e.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Zb.pop() || e.expando + "_" + Xb++;
                this[a] = !0;
                return a
            }
        });
        e.ajaxPrefilter("json jsonp", function(a, b, c) {
            var d, g, k, l = !1 !== a.jsonp && (rb.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && rb.test(a.data) && "data");
            if (l || "jsonp" === a.dataTypes[0])
                return d = a.jsonpCallback = e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                l ? a[l] = a[l].replace(rb, "$1" + d) : !1 !== a.jsonp && (a.url += (U.test(a.url) ? "&" : "?") + a.jsonp + "=" + d),
                a.converters["script json"] = function() {
                    k || e.error(d + " was not called");
                    return k[0]
                }
                ,
                a.dataTypes[0] = "json",
                g = q[d],
                q[d] = function() {
                    k = arguments
                }
                ,
                c.always(function() {
                    q[d] = g;
                    a[d] && (a.jsonpCallback = b.jsonpCallback,
                    Zb.push(d));
                    k && e.isFunction(g) && g(k[0]);
                    k = g = void 0
                }),
                "script"
        });
        e.parseHTML = function(a, b, c) {
            if (!a || "string" !== typeof a)
                return null;
            "boolean" === typeof b && (c = b,
            b = !1);
            b = b || w;
            var d = La.exec(a);
            c = !c && [];
            if (d)
                return [b.createElement(d[1])];
            d = e.buildFragment([a], b, c);
            c && c.length && e(c).remove();
            return e.merge([], d.childNodes)
        }
        ;
        var yc = e.fn.load;
        e.fn.load = function(a, b, c) {
            if ("string" !== typeof a && yc)
                return yc.apply(this, arguments);
            var d, g, k, l = this, m = a.indexOf(" ");
            0 <= m && (d = a.slice(m, a.length),
            a = a.slice(0, m));
            e.isFunction(b) ? (c = b,
            b = void 0) : b && "object" === typeof b && (k = "POST");
            0 < l.length && e.ajax({
                url: a,
                type: k,
                dataType: "html",
                data: b
            }).done(function(a) {
                g = arguments;
                l.html(d ? e("<div>").append(e.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                l.each(c, g || [a.responseText, b, a])
            }
            );
            return this
        }
        ;
        e.expr.filters.animated = function(a) {
            return e.grep(e.timers, function(b) {
                return a === b.elem
            }).length
        }
        ;
        var zc = q.document.documentElement;
        e.offset = {
            setOffset: function(a, b, c) {
                var d, g, k, l = e.css(a, "position"), m = e(a), n = {};
                "static" === l && (a.style.position = "relative");
                k = m.offset();
                g = e.css(a, "top");
                d = e.css(a, "left");
                ("absolute" === l || "fixed" === l) && -1 < e.inArray("auto", [g, d]) ? (d = m.position(),
                g = d.top,
                d = d.left) : (g = parseFloat(g) || 0,
                d = parseFloat(d) || 0);
                e.isFunction(b) && (b = b.call(a, c, k));
                null != b.top && (n.top = b.top - k.top + g);
                null != b.left && (n.left = b.left - k.left + d);
                "using"in b ? b.using.call(a, n) : m.css(n)
            }
        };
        e.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        e.offset.setOffset(this, a, b)
                    });
                var b, c, d = {
                    top: 0,
                    left: 0
                }, g = (c = this[0]) && c.ownerDocument;
                if (g) {
                    b = g.documentElement;
                    if (!e.contains(b, c))
                        return d;
                    "undefined" !== typeof c.getBoundingClientRect && (d = c.getBoundingClientRect());
                    c = oa(g);
                    return {
                        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                    }
                }
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                    "fixed" === e.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                    b = this.offset(),
                    e.nodeName(a[0], "html") || (c = a.offset()),
                    c.top += e.css(a[0], "borderTopWidth", !0),
                    c.left += e.css(a[0], "borderLeftWidth", !0));
                    return {
                        top: b.top - c.top - e.css(d, "marginTop", !0),
                        left: b.left - c.left - e.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || zc; a && !e.nodeName(a, "html") && "static" === e.css(a, "position"); )
                        a = a.offsetParent;
                    return a || zc
                })
            }
        });
        e.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            e.fn[a] = function(d) {
                return ra(this, function(a, d, h) {
                    var m = oa(a);
                    if (void 0 === h)
                        return m ? b in m ? m[b] : m.document.documentElement[d] : a[d];
                    m ? m.scrollTo(c ? e(m).scrollLeft() : h, c ? h : e(m).scrollTop()) : a[d] = h
                }, a, d, arguments.length, null)
            }
        });
        e.each(["top", "left"], function(a, b) {
            e.cssHooks[b] = Db(v.pixelPosition, function(a, c) {
                if (c)
                    return c = ga(a, b),
                    W.test(c) ? e(a).position()[b] + "px" : c
            })
        });
        e.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            e.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                e.fn[d] = function(d, h) {
                    var l = arguments.length && (c || "boolean" !== typeof d)
                      , m = c || (!0 === d || !0 === h ? "margin" : "border");
                    return ra(this, function(b, c, d) {
                        return e.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement,
                        Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? e.css(b, c, m) : e.style(b, c, d, m)
                    }, b, l ? d : void 0, l, null)
                }
            })
        });
        e.fn.size = function() {
            return this.length
        }
        ;
        e.fn.andSelf = e.fn.addBack;
        "function" === typeof define && define.amd && define("jquery", [], function() {
            return e
        });
        var b = q.jQuery
          , c = q.$;
        e.noConflict = function(a) {
            q.$ === e && (q.$ = c);
            a && q.jQuery === e && (q.jQuery = b);
            return e
        }
        ;
        "undefined" === typeof E && (q.jQuery = q.$ = e);
        return e
    });
    return q
}
;
(function(q, E) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = q.document ? E(q, !0) : function(q) {
        if (!q.document)
            throw Error("jQuery requires a window with a document");
        return E(q)
    }
    : E(q)
}
)("undefined" !== typeof window ? window : this, function(q, E) {
    function na(b) {
        var c = b.length
          , a = d.type(b);
        return "function" === a || d.isWindow(b) ? !1 : 1 === b.nodeType && c ? !0 : "array" === a || 0 === c || "number" === typeof c && 0 < c && c - 1 in b
    }
    function Ac(b, c, a) {
        if (d.isFunction(c))
            return d.grep(b, function(b, d) {
                return !!c.call(b, d, b) !== a
            });
        if (c.nodeType)
            return d.grep(b, function(b) {
                return b === c !== a
            });
        if ("string" === typeof c) {
            if (gc.test(c))
                return d.filter(c, b, a);
            c = d.filter(c, b)
        }
        return d.grep(b, function(b) {
            return 0 <= d.inArray(b, c) !== a
        })
    }
    function Za(b, c) {
        do
            b = b[c];
        while (b && 1 !== b.nodeType);
        return b
    }
    function sb(b) {
        var c = hc[b] = {};
        d.each(b.match(qa) || [], function(a, b) {
            c[b] = !0
        });
        return c
    }
    function tb() {
        x.addEventListener ? (x.removeEventListener("DOMContentLoaded", ba, !1),
        q.removeEventListener("load", ba, !1)) : (x.detachEvent("onreadystatechange", ba),
        q.detachEvent("onload", ba))
    }
    function ba() {
        if (x.addEventListener || "load" === event.type || "complete" === x.readyState)
            tb(),
            d.ready()
    }
    function ub(b, c, a) {
        if (void 0 === a && 1 === b.nodeType)
            if (a = "data-" + c.replace(Gc, "-$1").toLowerCase(),
            a = b.getAttribute(a),
            "string" === typeof a) {
                try {
                    a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : jb.test(a) ? d.parseJSON(a) : a
                } catch (f) {}
                d.data(b, c, a)
            } else
                a = void 0;
        return a
    }
    function ca(b) {
        for (var c in b)
            if (("data" !== c || !d.isEmptyObject(b[c])) && "toJSON" !== c)
                return !1;
        return !0
    }
    function vb(b, c, a, f) {
        if (d.acceptData(b)) {
            var e = d.expando
              , h = b.nodeType
              , g = h ? d.cache : b
              , k = h ? b[e] : b[e] && e;
            if (k && g[k] && (f || g[k].data) || void 0 !== a || "string" !== typeof c) {
                k || (k = h ? b[e] = ia.pop() || d.guid++ : e);
                g[k] || (g[k] = h ? {} : {
                    toJSON: d.noop
                });
                if ("object" === typeof c || "function" === typeof c)
                    f ? g[k] = d.extend(g[k], c) : g[k].data = d.extend(g[k].data, c);
                b = g[k];
                f || (b.data || (b.data = {}),
                b = b.data);
                void 0 !== a && (b[d.camelCase(c)] = a);
                "string" === typeof c ? (a = b[c],
                null == a && (a = b[d.camelCase(c)])) : a = b;
                return a
            }
        }
    }
    function ab(b, c, a) {
        if (d.acceptData(b)) {
            var f, e, h = b.nodeType, g = h ? d.cache : b, k = h ? b[d.expando] : d.expando;
            if (g[k]) {
                if (c && (f = a ? g[k] : g[k].data)) {
                    d.isArray(c) ? c = c.concat(d.map(c, d.camelCase)) : c in f ? c = [c] : (c = d.camelCase(c),
                    c = c in f ? [c] : c.split(" "));
                    for (e = c.length; e--; )
                        delete f[c[e]];
                    if (a ? !ca(f) : !d.isEmptyObject(f))
                        return
                }
                if (!a && (delete g[k].data,
                !ca(g[k])))
                    return;
                h ? d.cleanData([b], !0) : u.deleteExpando || g != g.window ? delete g[k] : g[k] = null
            }
        }
    }
    function Oa() {
        return !0
    }
    function ua() {
        return !1
    }
    function Pa() {
        try {
            return x.activeElement
        } catch (b) {}
    }
    function za(b) {
        var c = Pb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length; )
                b.createElement(c.pop());
        return b
    }
    function z(b, c) {
        var a, f, e = 0, h = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" !== typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : void 0;
        if (!h)
            for (h = [],
            a = b.childNodes || b; null != (f = a[e]); e++)
                !c || d.nodeName(f, c) ? h.push(f) : d.merge(h, z(f, c));
        return void 0 === c || c && d.nodeName(b, c) ? d.merge([b], h) : h
    }
    function ac(b) {
        fa.test(b.type) && (b.defaultChecked = b.checked)
    }
    function O(b, c) {
        return d.nodeName(b, "table") && d.nodeName(11 !== c.nodeType ? c : c.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }
    function bc(b) {
        b.type = (null !== d.find.attr(b, "type")) + "/" + b.type;
        return b
    }
    function yb(b) {
        var c = Ic.exec(b.type);
        c ? b.type = c[1] : b.removeAttribute("type");
        return b
    }
    function bb(b, c) {
        for (var a, f = 0; null != (a = b[f]); f++)
            d._data(a, "globalEval", !c || d._data(c[f], "globalEval"))
    }
    function zb(b, c) {
        if (1 === c.nodeType && d.hasData(b)) {
            var a, f, e;
            f = d._data(b);
            b = d._data(c, f);
            var h = f.events;
            if (h)
                for (a in delete b.handle,
                b.events = {},
                h)
                    for (f = 0,
                    e = h[a].length; f < e; f++)
                        d.event.add(c, a, h[a][f]);
            b.data && (b.data = d.extend({}, b.data))
        }
    }
    function cb(b, c) {
        b = d(c.createElement(b)).appendTo(c.body);
        c = q.getDefaultComputedStyle ? q.getDefaultComputedStyle(b[0]).display : d.css(b[0], "display");
        b.detach();
        return c
    }
    function Ab(b) {
        var c = x
          , a = lb[b];
        a || (a = cb(b, c),
        "none" !== a && a || (X = (X || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(c.documentElement),
        c = (X[0].contentWindow || X[0].contentDocument).document,
        c.write(),
        c.close(),
        a = cb(b, c),
        X.detach()),
        lb[b] = a);
        return a
    }
    function Bb(b, c) {
        return {
            get: function() {
                var a = b();
                if (null != a)
                    if (a)
                        delete this.get;
                    else
                        return (this.get = c).apply(this, arguments)
            }
        }
    }
    function Cb(b, c) {
        if (c in b)
            return c;
        for (var a = c.charAt(0).toUpperCase() + c.slice(1), d = c, e = qc.length; e--; )
            if (c = qc[e] + a,
            c in b)
                return c;
        return d
    }
    function Db(b, c) {
        for (var a, f, e, h = [], g = 0, k = b.length; g < k; g++)
            f = b[g],
            f.style && (h[g] = d._data(f, "olddisplay"),
            a = f.style.display,
            c ? (h[g] || "none" !== a || (f.style.display = ""),
            "" === f.style.display && ka(f) && (h[g] = d._data(f, "olddisplay", Ab(f.nodeName)))) : h[g] || (e = ka(f),
            (a && "none" !== a || !e) && d._data(f, "olddisplay", e ? a : d.css(f, "display"))));
        for (g = 0; g < k; g++)
            f = b[g],
            !f.style || c && "none" !== f.style.display && "" !== f.style.display || (f.style.display = c ? h[g] || "" : "none");
        return b
    }
    function Eb(b, c, a) {
        return (b = Kc.exec(c)) ? Math.max(0, b[1] - (a || 0)) + (b[2] || "px") : c
    }
    function Fb(b, c, a, f, e) {
        c = a === (f ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var h = 0; 4 > c; c += 2)
            "margin" === a && (h += d.css(b, a + ya[c], !0, e)),
            f ? ("content" === a && (h -= d.css(b, "padding" + ya[c], !0, e)),
            "margin" !== a && (h -= d.css(b, "border" + ya[c] + "Width", !0, e))) : (h += d.css(b, "padding" + ya[c], !0, e),
            "padding" !== a && (h += d.css(b, "border" + ya[c] + "Width", !0, e)));
        return h
    }
    function Gb(b, c, a) {
        var f = !0
          , e = "width" === c ? b.offsetWidth : b.offsetHeight
          , h = ta(b)
          , g = u.boxSizing() && "border-box" === d.css(b, "boxSizing", !1, h);
        if (0 >= e || null == e) {
            e = W(b, c, h);
            if (0 > e || null == e)
                e = b.style[c];
            if (Qa.test(e))
                return e;
            f = g && (u.boxSizingReliable() || e === b.style[c]);
            e = parseFloat(e) || 0
        }
        return e + Fb(b, c, a || (g ? "border" : "content"), f, h) + "px"
    }
    function V(b, c, a, d, e) {
        return new V.prototype.init(b,c,a,d,e)
    }
    function Hb() {
        setTimeout(function() {
            Ea = void 0
        });
        return Ea = d.now()
    }
    function R(b, c) {
        var a, d = {
            height: b
        }, e = 0;
        for (c = c ? 1 : 0; 4 > e; e += 2 - c)
            a = ya[e],
            d["margin" + a] = d["padding" + a] = b;
        c && (d.opacity = d.width = b);
        return d
    }
    function Ib(b, c, a) {
        for (var d, e = (Wa[c] || []).concat(Wa["*"]), h = 0, g = e.length; h < g; h++)
            if (d = e[h].call(a, c, b))
                return d
    }
    function db(b, c) {
        var a, f, e, h, g;
        for (a in b)
            if (f = d.camelCase(a),
            e = c[f],
            h = b[a],
            d.isArray(h) && (e = h[1],
            h = b[a] = h[0]),
            a !== f && (b[f] = h,
            delete b[a]),
            (g = d.cssHooks[f]) && "expand"in g)
                for (a in h = g.expand(h),
                delete b[f],
                h)
                    a in b || (b[a] = h[a],
                    c[a] = e);
            else
                c[f] = e
    }
    function Jb(b, c, a) {
        var f, e = 0, h = Va.length, g = d.Deferred().always(function() {
            delete k.elem
        }), k = function() {
            if (f)
                return !1;
            for (var a = Ea || Hb(), a = Math.max(0, l.startTime + l.duration - a), c = 1 - (a / l.duration || 0), d = 0, e = l.tweens.length; d < e; d++)
                l.tweens[d].run(c);
            g.notifyWith(b, [l, c, a]);
            if (1 > c && e)
                return a;
            g.resolveWith(b, [l]);
            return !1
        }, l = g.promise({
            elem: b,
            props: d.extend({}, c),
            opts: d.extend(!0, {
                specialEasing: {}
            }, a),
            originalProperties: c,
            originalOptions: a,
            startTime: Ea || Hb(),
            duration: a.duration,
            tweens: [],
            createTween: function(a, c) {
                a = d.Tween(b, l.opts, a, c, l.opts.specialEasing[a] || l.opts.easing);
                l.tweens.push(a);
                return a
            },
            stop: function(a) {
                var c = 0
                  , d = a ? l.tweens.length : 0;
                if (f)
                    return this;
                for (f = !0; c < d; c++)
                    l.tweens[c].run(1);
                a ? g.resolveWith(b, [l, a]) : g.rejectWith(b, [l, a]);
                return this
            }
        });
        a = l.props;
        for (db(a, l.opts.specialEasing); e < h; e++)
            if (c = Va[e].call(l, b, a, l.opts))
                return c;
        d.map(a, Ib, l);
        d.isFunction(l.opts.start) && l.opts.start.call(b, l);
        d.fx.timer(d.extend(k, {
            elem: b,
            anim: l,
            queue: l.opts.queue
        }));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function cc(b) {
        return function(c, a) {
            "string" !== typeof c && (a = c,
            c = "*");
            var f = 0
              , e = c.toLowerCase().match(qa) || [];
            if (d.isFunction(a))
                for (; c = e[f++]; )
                    "+" === c.charAt(0) ? (c = c.slice(1) || "*",
                    (b[c] = b[c] || []).unshift(a)) : (b[c] = b[c] || []).push(a)
        }
    }
    function Kb(b, c, a, f) {
        function e(k) {
            var l;
            h[k] = !0;
            d.each(b[k] || [], function(b, d) {
                b = d(c, a, f);
                if ("string" === typeof b && !g && !h[b])
                    return c.dataTypes.unshift(b),
                    e(b),
                    !1;
                if (g)
                    return !(l = b)
            });
            return l
        }
        var h = {}
          , g = b === ob;
        return e(c.dataTypes[0]) || !h["*"] && e("*")
    }
    function fb(b, c) {
        var a, f, e = d.ajaxSettings.flatOptions || {};
        for (f in c)
            void 0 !== c[f] && ((e[f] ? b : a || (a = {}))[f] = c[f]);
        a && d.extend(!0, b, a);
        return b
    }
    function gb(b, c, a, f) {
        var e;
        if (d.isArray(c))
            d.each(c, function(c, d) {
                a || vc.test(b) ? f(b, d) : gb(b + "[" + ("object" === typeof d ? c : "") + "]", d, a, f)
            });
        else if (a || "object" !== d.type(c))
            f(b, c);
        else
            for (e in c)
                gb(b + "[" + e + "]", c[e], a, f)
    }
    function hb() {
        try {
            return new q.XMLHttpRequest
        } catch (b) {}
    }
    function ib(b) {
        return d.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var ia = []
      , oa = ia.slice
      , da = ia.concat
      , aa = ia.push
      , Mb = ia.indexOf
      , Ja = {}
      , dc = Ja.toString
      , pa = Ja.hasOwnProperty
      , Nb = "".trim
      , u = {}
      , d = function(b, c) {
        return new d.fn.init(b,c)
    }
      , v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , e = /^-ms-/
      , Dc = /-([\da-z])/gi
      , Ec = function(b, c) {
        return c.toUpperCase()
    };
    d.fn = d.prototype = {
        jquery: "0",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return oa.call(this)
        },
        get: function(b) {
            return null != b ? 0 > b ? this[b + this.length] : this[b] : oa.call(this)
        },
        pushStack: function(b) {
            b = d.merge(this.constructor(), b);
            b.prevObject = this;
            b.context = this.context;
            return b
        },
        each: function(b, c) {
            return d.each(this, b, c)
        },
        map: function(b) {
            return this.pushStack(d.map(this, function(c, a) {
                return b.call(c, a, c)
            }))
        },
        slice: function() {
            return this.pushStack(oa.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var c = this.length;
            b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: aa,
        sort: ia.sort,
        splice: ia.splice
    };
    d.extend = d.fn.extend = function() {
        var b, c, a, f, e, h = arguments[0] || {}, g = 1, k = arguments.length, l = !1;
        "boolean" === typeof h && (l = h,
        h = arguments[g] || {},
        g++);
        "object" === typeof h || d.isFunction(h) || (h = {});
        g === k && (h = this,
        g--);
        for (; g < k; g++)
            if (null != (e = arguments[g]))
                for (f in e)
                    b = h[f],
                    a = e[f],
                    h !== a && (l && a && (d.isPlainObject(a) || (c = d.isArray(a))) ? (c ? (c = !1,
                    b = b && d.isArray(b) ? b : []) : b = b && d.isPlainObject(b) ? b : {},
                    h[f] = d.extend(l, b, a)) : void 0 !== a && (h[f] = a));
        return h
    }
    ;
    d.extend({
        expando: "jQuery" + Math.random(),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === d.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === d.type(b)
        }
        ,
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return 0 <= b - parseFloat(b)
        },
        isEmptyObject: function(b) {
            for (var c in b)
                return !1;
            return !0
        },
        isPlainObject: function(b) {
            var c;
            if (!b || "object" !== d.type(b) || b.nodeType || d.isWindow(b))
                return !1;
            try {
                if (b.constructor && !pa.call(b, "constructor") && !pa.call(b.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (a) {
                return !1
            }
            if (u.ownLast)
                for (c in b)
                    return pa.call(b, c);
            for (c in b)
                ;
            return void 0 === c || pa.call(b, c)
        },
        type: function(b) {
            return null == b ? b + "" : "object" === typeof b || "function" === typeof b ? Ja[dc.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            b && d.trim(b) && (q.execScript || function(b) {
                q.eval.call(q, b)
            }
            )(b)
        },
        camelCase: function(b) {
            return b.replace(e, "ms-").replace(Dc, Ec)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, c, a) {
            var d, e = 0, h = b.length;
            d = na(b);
            if (a)
                if (d)
                    for (; e < h && (d = c.apply(b[e], a),
                    !1 !== d); e++)
                        ;
                else
                    for (e in b) {
                        if (d = c.apply(b[e], a),
                        !1 === d)
                            break
                    }
            else if (d)
                for (; e < h && (d = c.call(b[e], e, b[e]),
                !1 !== d); e++)
                    ;
            else
                for (e in b)
                    if (d = c.call(b[e], e, b[e]),
                    !1 === d)
                        break;
            return b
        },
        trim: Nb && !Nb.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : Nb.call(b)
        }
        : function(b) {
            return null == b ? "" : (b + "").replace(v, "")
        }
        ,
        makeArray: function(b, c) {
            c = c || [];
            null != b && (na(Object(b)) ? d.merge(c, "string" === typeof b ? [b] : b) : aa.call(c, b));
            return c
        },
        inArray: function(b, c, a) {
            var d;
            if (c) {
                if (Mb)
                    return Mb.call(c, b, a);
                d = c.length;
                for (a = a ? 0 > a ? Math.max(0, d + a) : a : 0; a < d; a++)
                    if (a in c && c[a] === b)
                        return a
            }
            return -1
        },
        merge: function(b, c) {
            for (var a = +c.length, d = 0, e = b.length; d < a; )
                b[e++] = c[d++];
            if (a !== a)
                for (; void 0 !== c[d]; )
                    b[e++] = c[d++];
            b.length = e;
            return b
        },
        grep: function(b, c, a) {
            for (var d = [], e = 0, h = b.length, g = !a; e < h; e++)
                a = !c(b[e], e),
                a !== g && d.push(b[e]);
            return d
        },
        map: function(b, c, a) {
            var d, e = 0, h = b.length, g = [];
            if (na(b))
                for (; e < h; e++)
                    d = c(b[e], e, a),
                    null != d && g.push(d);
            else
                for (e in b)
                    d = c(b[e], e, a),
                    null != d && g.push(d);
            return da.apply([], g)
        },
        guid: 1,
        proxy: function(b, c) {
            var a, f;
            "string" === typeof c && (f = b[c],
            c = b,
            b = f);
            if (d.isFunction(b))
                return a = oa.call(arguments, 2),
                f = function() {
                    return b.apply(c || this, a.concat(oa.call(arguments)))
                }
                ,
                f.guid = b.guid = b.guid || d.guid++,
                f
        },
        now: function() {
            return +new Date
        },
        support: u
    });
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b, c) {
        Ja["[object " + c + "]"] = c.toLowerCase()
    });
    var Ka = function(b) {
        function c(a, b, c, d) {
            var f, e, g, h, k;
            (b ? b.ownerDocument || b : Q) !== N && ja(b);
            b = b || N;
            c = c || [];
            if (!a || "string" !== typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (F && !d) {
                if (f = ya.exec(a))
                    if (g = f[1])
                        if (9 === h)
                            if ((e = b.getElementById(g)) && e.parentNode) {
                                if (e.id === g)
                                    return c.push(e),
                                    c
                            } else
                                return c;
                        else {
                            if (b.ownerDocument && (e = b.ownerDocument.getElementById(g)) && O(b, e) && e.id === g)
                                return c.push(e),
                                c
                        }
                    else {
                        if (f[2])
                            return U.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = f[3]) && G.getElementsByClassName && b.getElementsByClassName)
                            return U.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (G.qsa && (!C || !C.test(a))) {
                    e = f = H;
                    g = b;
                    k = 9 === h && a;
                    if (1 === h && "object" !== b.nodeName.toLowerCase()) {
                        h = r(a);
                        (f = b.getAttribute("id")) ? e = f.replace(za, "\\$&") : b.setAttribute("id", e);
                        e = "[id='" + e + "'] ";
                        for (g = h.length; g--; )
                            h[g] = e + q(h[g]);
                        g = ua.test(a) && n(b.parentNode) || b;
                        k = h.join(",")
                    }
                    if (k)
                        try {
                            return U.apply(c, g.querySelectorAll(k)),
                            c
                        } catch (p) {} finally {
                            f || b.removeAttribute("id")
                        }
                }
            }
            var l;
            a: {
                a = a.replace(ia, "$1");
                e = r(a);
                if (!d && 1 === e.length) {
                    f = e[0] = e[0].slice(0);
                    if (2 < f.length && "ID" === (l = f[0]).type && G.getById && 9 === b.nodeType && F && y.relative[f[1].type]) {
                        b = (y.find.ID(l.matches[0].replace(va, fa), b) || [])[0];
                        if (!b) {
                            l = c;
                            break a
                        }
                        a = a.slice(f.shift().value.length)
                    }
                    for (h = ka.needsContext.test(a) ? 0 : f.length; h--; ) {
                        l = f[h];
                        if (y.relative[g = l.type])
                            break;
                        if (g = y.find[g])
                            if (d = g(l.matches[0].replace(va, fa), ua.test(f[0].type) && n(b.parentNode) || b)) {
                                f.splice(h, 1);
                                a = d.length && q(f);
                                if (!a) {
                                    U.apply(c, d);
                                    l = c;
                                    break a
                                }
                                break
                            }
                    }
                }
                J(a, e)(d, b, !F, c, ua.test(a) && n(b.parentNode) || b);
                l = c
            }
            return l
        }
        function a() {
            function a(c, d) {
                b.push(c + " ") > y.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            a[H] = !0;
            return a
        }
        function e(a) {
            var b = N.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function h(a, b) {
            var c = a.split("|");
            for (a = a.length; a--; )
                y.attrHandle[c[a]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function k(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function l(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function m(a) {
            return d(function(b) {
                b = +b;
                return d(function(c, d) {
                    for (var f, e = a([], c.length, b), g = e.length; g--; )
                        c[f = e[g]] && (c[f] = !(d[f] = c[f]))
                })
            })
        }
        function n(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }
        function t() {}
        function r(a, b) {
            var d, f, e, g, h, k, p;
            if (h = W[a + " "])
                return b ? 0 : h.slice(0);
            h = a;
            k = [];
            for (p = y.preFilter; h; ) {
                if (!d || (f = oa.exec(h)))
                    f && (h = h.slice(f[0].length) || h),
                    k.push(e = []);
                d = !1;
                if (f = pa.exec(h))
                    d = f.shift(),
                    e.push({
                        value: d,
                        type: f[0].replace(ia, " ")
                    }),
                    h = h.slice(d.length);
                for (g in y.filter)
                    !(f = ka[g].exec(h)) || p[g] && !(f = p[g](f)) || (d = f.shift(),
                    e.push({
                        value: d,
                        type: g,
                        matches: f
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return b ? h.length : h ? c.error(a) : W(a, k).slice(0)
        }
        function q(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function u(a, b, c) {
            var d = b.dir
              , f = c && "parentNode" === d
              , e = X++;
            return b.first ? function(b, c, e) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || f)
                        return a(b, c, e)
            }
            : function(b, c, g) {
                var h, k, p = [I, e];
                if (g)
                    for (; b = b[d]; ) {
                        if ((1 === b.nodeType || f) && a(b, c, g))
                            return !0
                    }
                else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || f) {
                            k = b[H] || (b[H] = {});
                            if ((h = k[d]) && h[0] === I && h[1] === e)
                                return p[2] = h[2];
                            k[d] = p;
                            if (p[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function v(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var f = a.length; f--; )
                    if (!a[f](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function x(a, b, c, d, f) {
            for (var e, g = [], h = 0, k = a.length, p = null != b; h < k; h++)
                if (e = a[h])
                    if (!c || c(e, d, f))
                        g.push(e),
                        p && b.push(h);
            return g
        }
        function w(a, b, e, g, h, k) {
            g && !g[H] && (g = w(g));
            h && !h[H] && (h = w(h, k));
            return d(function(d, f, k, p) {
                var l, m, n = [], r = [], t = f.length, q;
                if (!(q = d)) {
                    q = b || "*";
                    for (var u = k.nodeType ? [k] : k, v = [], B = 0, y = u.length; B < y; B++)
                        c(q, u[B], v);
                    q = v
                }
                q = !a || !d && b ? q : x(q, n, a, k, p);
                u = e ? h || (d ? a : t || g) ? [] : f : q;
                e && e(q, u, k, p);
                if (g)
                    for (l = x(u, r),
                    g(l, [], k, p),
                    k = l.length; k--; )
                        if (m = l[k])
                            u[r[k]] = !(q[r[k]] = m);
                if (d) {
                    if (h || a) {
                        if (h) {
                            l = [];
                            for (k = u.length; k--; )
                                (m = u[k]) && l.push(q[k] = m);
                            h(null, u = [], l, p)
                        }
                        for (k = u.length; k--; )
                            (m = u[k]) && -1 < (l = h ? la.call(d, m) : n[k]) && (d[l] = !(f[l] = m))
                    }
                } else
                    u = x(u === f ? u.splice(t, u.length) : u),
                    h ? h(null, f, u, p) : U.apply(f, u)
            })
        }
        function z(a) {
            var b, c, d, f = a.length, e = y.relative[a[0].type];
            c = e || y.relative[" "];
            for (var g = e ? 1 : 0, h = u(function(a) {
                return a === b
            }, c, !0), k = u(function(a) {
                return -1 < la.call(b, a)
            }, c, !0), p = [function(a, c, d) {
                return !e && (d || c !== R) || ((b = c).nodeType ? h(a, c, d) : k(a, c, d))
            }
            ]; g < f; g++)
                if (c = y.relative[a[g].type])
                    p = [u(v(p), c)];
                else {
                    c = y.filter[a[g].type].apply(null, a[g].matches);
                    if (c[H]) {
                        for (d = ++g; d < f && !y.relative[a[d].type]; d++)
                            ;
                        return w(1 < g && v(p), 1 < g && q(a.slice(0, g - 1).concat({
                            value: " " === a[g - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, g < d && z(a.slice(g, d)), d < f && z(a = a.slice(d)), d < f && q(a))
                    }
                    p.push(c)
                }
            return v(p)
        }
        function E(a, b) {
            var e = 0 < b.length
              , g = 0 < a.length
              , h = function(d, f, h, k, p) {
                var l, m, n, r = 0, t = "0", q = d && [], u = [], B = R, v = d || g && y.find.TAG("*", p), w = I += null == B ? 1 : Math.random() || .1, G = v.length;
                for (p && (R = f !== N && f); t !== G && null != (l = v[t]); t++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; )
                            if (n(l, f, h)) {
                                k.push(l);
                                break
                            }
                        p && (I = w)
                    }
                    e && ((l = !n && l) && r--,
                    d && q.push(l))
                }
                r += t;
                if (e && t !== r) {
                    for (m = 0; n = b[m++]; )
                        n(q, u, f, h);
                    if (d) {
                        if (0 < r)
                            for (; t--; )
                                q[t] || u[t] || (u[t] = ea.call(k));
                        u = x(u)
                    }
                    U.apply(k, u);
                    p && !d && 0 < u.length && 1 < r + b.length && c.uniqueSort(k)
                }
                p && (I = w,
                R = B);
                return q
            };
            return e ? d(h) : h
        }
        var A, G, y, P, L, J, R, wa, Ba, ja, N, M, F, C, K, D, O, H = "sizzle" + -new Date, Q = b.document, I = 0, X = 0, V = a(), W = a(), Y = a(), Z = function(a, b) {
            a === b && (Ba = !0);
            return 0
        }, ba = {}.hasOwnProperty, T = [], ea = T.pop, ga = T.push, U = T.push, ca = T.slice, la = T.indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ha = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + da + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", aa = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ha.replace(3, 8) + ")*)|.*)\\)|)", ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, oa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, pa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, qa = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, ra = new RegExp(aa), sa = new RegExp("^" + da + "$"), ka = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ha),
            PSEUDO: new RegExp("^" + aa),
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, ta = /^(?:input|select|textarea|button)$/i, xa = /^h\d$/i, na = /^[^{]+\{\s*\[native \w/, ya = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ua = /[+~]/, za = /'|\\/g, va = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, fa = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        };
        try {
            U.apply(T = ca.call(Q.childNodes), Q.childNodes),
            T[Q.childNodes.length].nodeType
        } catch (S) {
            U = {
                apply: T.length ? function(a, b) {
                    ga.apply(a, ca.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        G = c.support = {};
        L = c.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        }
        ;
        ja = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : Q;
            a = b.defaultView;
            if (b === N || 9 !== b.nodeType || !b.documentElement)
                return N;
            N = b;
            M = b.documentElement;
            F = !L(b);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                ja()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                ja()
            }));
            G.attributes = e(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            G.getElementsByTagName = e(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            G.getElementsByClassName = na.test(b.getElementsByClassName) && e(function(a) {
                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return 2 === a.getElementsByClassName("i").length
            });
            G.getById = e(function(a) {
                M.appendChild(a).id = H;
                return !b.getElementsByName || !b.getElementsByName(H).length
            });
            G.getById ? (y.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && F)
                    return (a = b.getElementById(a)) && a.parentNode ? [a] : []
            }
            ,
            y.filter.ID = function(a) {
                var b = a.replace(va, fa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete y.find.ID,
            y.filter.ID = function(a) {
                var b = a.replace(va, fa);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }
            );
            y.find.TAG = G.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName)
                    return b.getElementsByTagName(a)
            }
            : function(a, b) {
                var c = []
                  , d = 0;
                b = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = b[d++]; )
                        1 === a.nodeType && c.push(a);
                    return c
                }
                return b
            }
            ;
            y.find.CLASS = G.getElementsByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && F)
                    return b.getElementsByClassName(a)
            }
            ;
            K = [];
            C = [];
            if (G.qsa = na.test(b.querySelectorAll))
                e(function(a) {
                    a.innerHTML = "<select t=''><option selected=''></option></select>";
                    a.querySelectorAll("[t^='']").length && C.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || C.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll(":checked").length || C.push(":checked")
                }),
                e(function(a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden");
                    a.appendChild(c).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && C.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || C.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    C.push(",.*:")
                });
            (G.matchesSelector = na.test(D = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && e(function(a) {
                G.disconnectedMatch = D.call(a, "div");
                D.call(a, "[s!='']:x");
                K.push("!=", aa)
            });
            C = C.length && new RegExp(C.join("|"));
            K = K.length && new RegExp(K.join("|"));
            O = (a = na.test(M.compareDocumentPosition)) || na.test(M.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a;
                b = b && b.parentNode;
                return a === b || !!(b && 1 === b.nodeType && (c.contains ? c.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ;
            Z = a ? function(a, c) {
                if (a === c)
                    return Ba = !0,
                    0;
                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
                if (d)
                    return d;
                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
                return d & 1 || !G.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === Q && O(Q, a) ? -1 : c === b || c.ownerDocument === Q && O(Q, c) ? 1 : wa ? la.call(wa, a) - la.call(wa, c) : 0 : d & 4 ? -1 : 1
            }
            : function(a, c) {
                if (a === c)
                    return Ba = !0,
                    0;
                var d = 0
                  , f = a.parentNode
                  , e = c.parentNode
                  , h = [a]
                  , k = [c];
                if (!f || !e)
                    return a === b ? -1 : c === b ? 1 : f ? -1 : e ? 1 : wa ? la.call(wa, a) - la.call(wa, c) : 0;
                if (f === e)
                    return g(a, c);
                for (; a = a.parentNode; )
                    h.unshift(a);
                for (a = c; a = a.parentNode; )
                    k.unshift(a);
                for (; h[d] === k[d]; )
                    d++;
                return d ? g(h[d], k[d]) : h[d] === Q ? -1 : k[d] === Q ? 1 : 0
            }
            ;
            return b
        }
        ;
        c.matches = function(a, b) {
            return c(a, null, null, b)
        }
        ;
        c.matchesSelector = function(a, b) {
            (a.ownerDocument || a) !== N && ja(a);
            b = b.replace(qa, "='$1']");
            if (!(!G.matchesSelector || !F || K && K.test(b) || C && C.test(b)))
                try {
                    var d = D.call(a, b);
                    if (d || G.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (f) {}
            return 0 < c(b, N, null, [a]).length
        }
        ;
        c.contains = function(a, b) {
            (a.ownerDocument || a) !== N && ja(a);
            return O(a, b)
        }
        ;
        c.attr = function(a, b) {
            (a.ownerDocument || a) !== N && ja(a);
            var c = y.attrHandle[b.toLowerCase()]
              , c = c && ba.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !F) : void 0;
            return void 0 !== c ? c : G.attributes || !F ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        }
        ;
        c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }
        ;
        c.uniqueSort = function(a) {
            var b, c = [], d = 0, f = 0;
            Ba = !G.detectDuplicates;
            wa = !G.sortStable && a.slice(0);
            a.sort(Z);
            if (Ba) {
                for (; b = a[f++]; )
                    b === a[f] && (d = c.push(f));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            wa = null;
            return a
        }
        ;
        P = c.getText = function(a) {
            var b, c = "", d = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[d++]; )
                    c += P(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent)
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    c += P(a)
            } else if (3 === b || 4 === b)
                return a.nodeValue;
            return c
        }
        ;
        y = c.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ka,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(va, fa);
                    a[3] = (a[4] || a[5] || "").replace(va, fa);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    if (ka.CHILD.test(a[0]))
                        return null;
                    a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ra.test(c) && (b = r(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, fa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = V[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
                    V(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, b, d) {
                    return function(f) {
                        f = c.attr(f, a);
                        if (null == f)
                            return "!=" === b;
                        if (!b)
                            return !0;
                        f += "";
                        return "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && -1 < f.indexOf(d) : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? -1 < (" " + f + " ").indexOf(d) : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, f) {
                    var e = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === f ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, k) {
                        var p, l, m, n, r;
                        c = e !== g ? "nextSibling" : "previousSibling";
                        var t = b.parentNode
                          , q = h && b.nodeName.toLowerCase();
                        k = !k && !h;
                        if (t) {
                            if (e) {
                                for (; c; ) {
                                    for (l = b; l = l[c]; )
                                        if (h ? l.nodeName.toLowerCase() === q : 1 === l.nodeType)
                                            return !1;
                                    r = c = "only" === a && !r && "nextSibling"
                                }
                                return !0
                            }
                            r = [g ? t.firstChild : t.lastChild];
                            if (g && k)
                                for (k = t[H] || (t[H] = {}),
                                p = k[a] || [],
                                n = p[0] === I && p[1],
                                m = p[0] === I && p[2],
                                l = n && t.childNodes[n]; l = ++n && l && l[c] || (m = n = 0) || r.pop(); ) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [I, n, m];
                                        break
                                    }
                                }
                            else if (k && (p = (b[H] || (b[H] = {}))[a]) && p[0] === I)
                                m = p[1];
                            else
                                for (; (l = ++n && l && l[c] || (m = n = 0) || r.pop()) && ((h ? l.nodeName.toLowerCase() !== q : 1 !== l.nodeType) || !++m || (k && ((l[H] || (l[H] = {}))[a] = [I, m]),
                                l !== b)); )
                                    ;
                            m -= f;
                            return m === d || 0 === m % d && 0 <= m / d
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var e, g = y.pseudos[a] || y.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return g[H] ? g(b) : 1 < g.length ? (e = [a, a, "", b],
                    y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, c) {
                        for (var d, f = g(a, b), e = f.length; e--; )
                            d = la.call(a, f[e]),
                            a[d] = !(c[d] = f[e])
                    }) : function(a) {
                        return g(a, 0, e)
                    }
                    ) : g
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = J(a.replace(ia, "$1"));
                    return e[H] ? d(function(a, b, c, d) {
                        d = e(a, null, d, []);
                        for (var f = a.length; f--; )
                            if (c = d[f])
                                a[f] = !(b[f] = c)
                    }) : function(a, d, f) {
                        b[0] = a;
                        e(b, null, f, c);
                        return !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(b) {
                        return 0 < c(a, b).length
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || P(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    sa.test(a || "") || c.error("unsupported lang: " + a);
                    a = a.replace(va, fa).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = F ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(a) {
                    var c = b.location && b.location.hash;
                    return c && c.slice(1) === a.id
                },
                root: function(a) {
                    return a === M
                },
                focus: function(a) {
                    return a === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !y.pseudos.empty(a)
                },
                header: function(a) {
                    return xa.test(a.nodeName)
                },
                input: function(a) {
                    return ta.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: m(function() {
                    return [0]
                }),
                last: m(function(a, b) {
                    return [b - 1]
                }),
                eq: m(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: m(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: m(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: m(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b; )
                        a.push(b);
                    return a
                }),
                gt: m(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b; )
                        a.push(c);
                    return a
                })
            }
        };
        y.pseudos.nth = y.pseudos.eq;
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            y.pseudos[A] = k(A);
        for (A in {
            submit: !0,
            reset: !0
        })
            y.pseudos[A] = l(A);
        t.prototype = y.filters = y.pseudos;
        y.setFilters = new t;
        J = c.compile = function(a, b) {
            var c, d = [], f = [], e = Y[a + " "];
            if (!e) {
                b || (b = r(a));
                for (c = b.length; c--; )
                    e = z(b[c]),
                    e[H] ? d.push(e) : f.push(e);
                e = Y(a, E(f, d))
            }
            return e
        }
        ;
        G.sortStable = H.split("").sort(Z).join("") === H;
        G.detectDuplicates = !!Ba;
        ja();
        G.sortDetached = e(function(a) {
            return a.compareDocumentPosition(N.createElement("div")) & 1
        });
        e(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || h("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        G.attributes && e(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || h("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        });
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var d;
            if (!c)
                return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        });
        return c
    }(q);
    d.find = Ka;
    d.expr = Ka.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = Ka.uniqueSort;
    d.text = Ka.getText;
    d.isXMLDoc = Ka.isXML;
    d.contains = Ka.contains;
    var ec = d.expr.match.needsContext
      , Da = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , gc = /^.[^:#\[\.,]*$/;
    d.filter = function(b, c, a) {
        var f = c[0];
        a && (b = ":not(" + b + ")");
        return 1 === c.length && 1 === f.nodeType ? d.find.matchesSelector(f, b) ? [f] : [] : d.find.matches(b, d.grep(c, function(a) {
            return 1 === a.nodeType
        }))
    }
    ;
    d.fn.extend({
        find: function(b) {
            var c, a = [], f = this, e = f.length;
            if ("string" !== typeof b)
                return this.pushStack(d(b).filter(function() {
                    for (c = 0; c < e; c++)
                        if (d.contains(f[c], this))
                            return !0
                }));
            for (c = 0; c < e; c++)
                d.find(b, f[c], a);
            a = this.pushStack(1 < e ? d.unique(a) : a);
            a.selector = this.selector ? this.selector + " " + b : b;
            return a
        },
        filter: function(b) {
            return this.pushStack(Ac(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(Ac(this, b || [], !0))
        },
        is: function(b) {
            return !!Ac(this, "string" === typeof b && ec.test(b) ? d(b) : b || [], !1).length
        }
    });
    var La, x = q.document, Ta = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(b, c) {
        var a;
        if (!b)
            return this;
        if ("string" === typeof b) {
            a = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? [null, b, null] : Ta.exec(b);
            if (!a || !a[1] && c)
                return !c || c.jquery ? (c || La).find(b) : this.constructor(c).find(b);
            if (a[1]) {
                if (c = c instanceof d ? c[0] : c,
                d.merge(this, d.parseHTML(a[1], c && c.nodeType ? c.ownerDocument || c : x, !0)),
                Da.test(a[1]) && d.isPlainObject(c))
                    for (a in c)
                        if (d.isFunction(this[a]))
                            this[a](c[a]);
                        else
                            this.attr(a, c[a])
            } else {
                if ((c = x.getElementById(a[2])) && c.parentNode) {
                    if (c.id !== a[2])
                        return La.find(b);
                    this.length = 1;
                    this[0] = c
                }
                this.context = x;
                this.selector = b
            }
            return this
        }
        if (b.nodeType)
            return this.context = this[0] = b,
            this.length = 1,
            this;
        if (d.isFunction(b))
            return "undefined" !== typeof La.ready ? La.ready(b) : b(d);
        void 0 !== b.selector && (this.selector = b.selector,
        this.context = b.context);
        return d.makeArray(b, this)
    }
    ).prototype = d.fn;
    La = d(x);
    var w = /^(?:parents|prev(?:Until|All))/
      , Fc = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.extend({
        dir: function(b, c, a) {
            var f = [];
            for (b = b[c]; b && 9 !== b.nodeType && (void 0 === a || 1 !== b.nodeType || !d(b).is(a)); )
                1 === b.nodeType && f.push(b),
                b = b[c];
            return f
        },
        sibling: function(b, c) {
            for (var a = []; b; b = b.nextSibling)
                1 === b.nodeType && b !== c && a.push(b);
            return a
        }
    });
    d.fn.extend({
        has: function(b) {
            var c, a = d(b, this), f = a.length;
            return this.filter(function() {
                for (c = 0; c < f; c++)
                    if (d.contains(this, a[c]))
                        return !0
            })
        },
        closest: function(b, c) {
            for (var a, f = 0, e = this.length, h = [], g = ec.test(b) || "string" !== typeof b ? d(b, c || this.context) : 0; f < e; f++)
                for (a = this[f]; a && a !== c; a = a.parentNode)
                    if (11 > a.nodeType && (g ? -1 < g.index(a) : 1 === a.nodeType && d.find.matchesSelector(a, b))) {
                        h.push(a);
                        break
                    }
            return this.pushStack(1 < h.length ? d.unique(h) : h)
        },
        index: function(b) {
            return b ? "string" === typeof b ? d.inArray(this[0], d(b)) : d.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(d.unique(d.merge(this.get(), d(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    d.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return d.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, a) {
            return d.dir(b, "parentNode", a)
        },
        next: function(b) {
            return Za(b, "nextSibling")
        },
        prev: function(b) {
            return Za(b, "previousSibling")
        },
        nextAll: function(b) {
            return d.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return d.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, a) {
            return d.dir(b, "nextSibling", a)
        },
        prevUntil: function(b, c, a) {
            return d.dir(b, "previousSibling", a)
        },
        siblings: function(b) {
            return d.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return d.sibling(b.firstChild)
        },
        contents: function(b) {
            return d.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : d.merge([], b.childNodes)
        }
    }, function(b, c) {
        d.fn[b] = function(a, f) {
            var e = d.map(this, c, a);
            "Until" !== b.slice(-5) && (f = a);
            f && "string" === typeof f && (e = d.filter(f, e));
            1 < this.length && (Fc[b] || (e = d.unique(e)),
            w.test(b) && (e = e.reverse()));
            return this.pushStack(e)
        }
    });
    var qa = /\S+/g
      , hc = {};
    d.Callbacks = function(b) {
        b = "string" === typeof b ? hc[b] || sb(b) : d.extend({}, b);
        var c, a, f, e, h, g, k = [], l = !b.once && [], m = function(d) {
            a = b.memory && d;
            f = !0;
            h = g || 0;
            g = 0;
            e = k.length;
            for (c = !0; k && h < e; h++)
                if (!1 === k[h].apply(d[0], d[1]) && b.stopOnFalse) {
                    a = !1;
                    break
                }
            c = !1;
            k && (l ? l.length && m(l.shift()) : a ? k = [] : n.disable())
        }, n = {
            add: function() {
                if (k) {
                    var f = k.length;
                    (function B(a) {
                        d.each(a, function(a, c) {
                            a = d.type(c);
                            "function" === a ? b.unique && n.has(c) || k.push(c) : c && c.length && "string" !== a && B(c)
                        })
                    }
                    )(arguments);
                    c ? e = k.length : a && (g = f,
                    m(a))
                }
                return this
            },
            remove: function() {
                k && d.each(arguments, function(a, b) {
                    for (var f; -1 < (f = d.inArray(b, k, f)); )
                        k.splice(f, 1),
                        c && (f <= e && e--,
                        f <= h && h--)
                });
                return this
            },
            has: function(a) {
                return a ? -1 < d.inArray(a, k) : !(!k || !k.length)
            },
            empty: function() {
                k = [];
                e = 0;
                return this
            },
            disable: function() {
                k = l = a = void 0;
                return this
            },
            disabled: function() {
                return !k
            },
            lock: function() {
                l = void 0;
                a || n.disable();
                return this
            },
            locked: function() {
                return !l
            },
            fireWith: function(a, b) {
                !k || f && !l || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                c ? l.push(b) : m(b));
                return this
            },
            fire: function() {
                n.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!f
            }
        };
        return n
    }
    ;
    d.extend({
        Deferred: function(b) {
            var c = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]]
              , a = "pending"
              , f = {
                state: function() {
                    return a
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var a = arguments;
                    return d.Deferred(function(b) {
                        d.each(c, function(c, l) {
                            var m = d.isFunction(a[c]) && a[c];
                            e[l[1]](function() {
                                var a = m && m.apply(this, arguments);
                                if (a && d.isFunction(a.promise))
                                    a.promise().done(b.resolve).fail(b.reject).progress(b.notify);
                                else
                                    b[l[0] + "With"](this === f ? b.promise() : this, m ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? d.extend(a, f) : f
                }
            }
              , e = {};
            f.pipe = f.then;
            d.each(c, function(b, d) {
                var k = d[2]
                  , l = d[3];
                f[d[1]] = k.add;
                l && k.add(function() {
                    a = l
                }, c[b ^ 1][2].disable, c[2][2].lock);
                e[d[0]] = function() {
                    e[d[0] + "With"](this === e ? f : this, arguments);
                    return this
                }
                ;
                e[d[0] + "With"] = k.fireWith
            });
            f.promise(e);
            b && b.call(e, e);
            return e
        },
        when: function(b) {
            var c = 0, a = oa.call(arguments), f = a.length, e = 1 !== f || b && d.isFunction(b.promise) ? f : 0, h = 1 === e ? b : d.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? oa.call(arguments) : d;
                    c === k ? h.notifyWith(b, c) : --e || h.resolveWith(b, c)
                }
            }, k, l, m;
            if (1 < f)
                for (k = Array(f),
                l = Array(f),
                m = Array(f); c < f; c++)
                    a[c] && d.isFunction(a[c].promise) ? a[c].promise().done(g(c, m, a)).fail(h.reject).progress(g(c, l, k)) : --e;
            e || h.resolveWith(m, a);
            return h.promise()
        }
    });
    var T;
    d.fn.ready = function(b) {
        d.ready.promise().done(b);
        return this
    }
    ;
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? d.readyWait++ : d.ready(!0)
        },
        ready: function(b) {
            if (!0 === b ? !--d.readyWait : !d.isReady) {
                if (!x.body)
                    return setTimeout(d.ready);
                d.isReady = !0;
                !0 !== b && 0 < --d.readyWait || (T.resolveWith(x, [d]),
                d.fn.trigger && d(x).trigger("ready").off("ready"))
            }
        }
    });
    d.ready.promise = function(b) {
        if (!T)
            if (T = d.Deferred(),
            "complete" === x.readyState)
                setTimeout(d.ready);
            else if (x.addEventListener)
                x.addEventListener("DOMContentLoaded", ba, !1),
                q.addEventListener("load", ba, !1);
            else {
                x.attachEvent("onreadystatechange", ba);
                q.attachEvent("onload", ba);
                var c = !1;
                try {
                    c = null == q.frameElement && x.documentElement
                } catch (a) {}
                c && c.doScroll && function f() {
                    if (!d.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(f, 50)
                        }
                        tb();
                        d.ready()
                    }
                }()
            }
        return T.promise(b)
    }
    ;
    for (var $b in d(u))
        break;
    u.ownLast = "0" !== $b;
    u.inlineBlockNeedsLayout = !1;
    d(function() {
        var b, c, a = x.getElementsByTagName("body")[0];
        a && (b = x.createElement("div"),
        b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        c = x.createElement("div"),
        a.appendChild(b).appendChild(c),
        "undefined" !== typeof c.style.zoom && (c.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        u.inlineBlockNeedsLayout = 3 === c.offsetWidth) && (a.style.zoom = 1),
        a.removeChild(b))
    });
    (function() {
        var b = x.createElement("div");
        if (null == u.deleteExpando) {
            u.deleteExpando = !0;
            try {
                delete b.test
            } catch (c) {
                u.deleteExpando = !1
            }
        }
    }
    )();
    d.acceptData = function(b) {
        var c = d.noData[(b.nodeName + " ").toLowerCase()]
          , a = +b.nodeType || 1;
        return 1 !== a && 9 !== a ? !1 : !c || !0 !== c && b.getAttribute("classid") === c
    }
    ;
    var jb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Gc = /([A-Z])/g;
    d.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(b) {
            b = b.nodeType ? d.cache[b[d.expando]] : b[d.expando];
            return !!b && !ca(b)
        },
        data: function(b, c, a) {
            return vb(b, c, a)
        },
        removeData: function(b, c) {
            return ab(b, c)
        },
        _data: function(b, c, a) {
            return vb(b, c, a, !0)
        },
        _removeData: function(b, c) {
            return ab(b, c, !0)
        }
    });
    d.fn.extend({
        data: function(b, c) {
            var a, f, e, h = this[0], g = h && h.attributes;
            if (void 0 === b) {
                if (this.length && (e = d.data(h),
                1 === h.nodeType && !d._data(h, "parsedAttrs"))) {
                    for (a = g.length; a--; )
                        f = g[a].name,
                        0 === f.indexOf("data-") && (f = d.camelCase(f.slice(5)),
                        ub(h, f, e[f]));
                    d._data(h, "parsedAttrs", !0)
                }
                return e
            }
            return "object" === typeof b ? this.each(function() {
                d.data(this, b)
            }) : 1 < arguments.length ? this.each(function() {
                d.data(this, b, c)
            }) : h ? ub(h, b, d.data(h, b)) : void 0
        },
        removeData: function(b) {
            return this.each(function() {
                d.removeData(this, b)
            })
        }
    });
    d.extend({
        queue: function(b, c, a) {
            var f;
            if (b)
                return c = (c || "fx") + "queue",
                f = d._data(b, c),
                a && (!f || d.isArray(a) ? f = d._data(b, c, d.makeArray(a)) : f.push(a)),
                f || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var a = d.queue(b, c)
              , f = a.length
              , e = a.shift()
              , h = d._queueHooks(b, c)
              , g = function() {
                d.dequeue(b, c)
            };
            "inprogress" === e && (e = a.shift(),
            f--);
            e && ("fx" === c && a.unshift("inprogress"),
            delete h.stop,
            e.call(b, g, h));
            !f && h && h.empty.fire()
        },
        _queueHooks: function(b, c) {
            var a = c + "queueHooks";
            return d._data(b, a) || d._data(b, a, {
                empty: d.Callbacks("once memory").add(function() {
                    d._removeData(b, c + "queue");
                    d._removeData(b, a)
                })
            })
        }
    });
    d.fn.extend({
        queue: function(b, c) {
            var a = 2;
            "string" !== typeof b && (c = b,
            b = "fx",
            a--);
            return arguments.length < a ? d.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var a = d.queue(this, b, c);
                d._queueHooks(this, b);
                "fx" === b && "inprogress" !== a[0] && d.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                d.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var a, f = 1, e = d.Deferred(), h = this, g = this.length, k = function() {
                --f || e.resolveWith(h, [h])
            };
            "string" !== typeof b && (c = b,
            b = void 0);
            for (b = b || "fx"; g--; )
                (a = d._data(h[g], b + "queueHooks")) && a.empty && (f++,
                a.empty.add(k));
            k();
            return e.promise(c)
        }
    });
    var $a = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ya = ["Top", "Right", "Bottom", "Left"]
      , ka = function(b, c) {
        b = c || b;
        return "none" === d.css(b, "display") || !d.contains(b.ownerDocument, b)
    }
      , Z = d.access = function(b, c, a, f, e, h, g) {
        var k = 0
          , l = b.length
          , m = null == a;
        if ("object" === d.type(a))
            for (k in e = !0,
            a)
                d.access(b, c, k, a[k], !0, h, g);
        else if (void 0 !== f && (e = !0,
        d.isFunction(f) || (g = !0),
        m && (g ? (c.call(b, f),
        c = null) : (m = c,
        c = function(a, b, c) {
            return m.call(d(a), c)
        }
        )),
        c))
            for (; k < l; k++)
                c(b[k], a, g ? f : f.call(b[k], k, c(b[k], a)));
        return e ? b : m ? c.call(b) : l ? c(b[0], a) : h
    }
      , fa = /^(?:checkbox|radio)$/i;
    (function() {
        var b = x.createDocumentFragment()
          , c = x.createElement("div")
          , a = x.createElement("input");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a>";
        u.leadingWhitespace = 3 === c.firstChild.nodeType;
        u.tbody = !c.getElementsByTagName("tbody").length;
        u.htmlSerialize = !!c.getElementsByTagName("link").length;
        u.html5Clone = "<:nav></:nav>" !== x.createElement("nav").cloneNode(!0).outerHTML;
        a.type = "checkbox";
        a.checked = !0;
        b.appendChild(a);
        u.appendChecked = a.checked;
        c.innerHTML = "<textarea>x</textarea>";
        u.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue;
        b.appendChild(c);
        c.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.noCloneEvent = !0;
        c.attachEvent && (c.attachEvent("onclick", function() {
            u.noCloneEvent = !1
        }),
        c.cloneNode(!0).click());
        if (null == u.deleteExpando) {
            u.deleteExpando = !0;
            try {
                delete c.test
            } catch (d) {
                u.deleteExpando = !1
            }
        }
        b = c = a = null
    }
    )();
    (function() {
        var b, c, a = x.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (u[b + "Bubbles"] = c in q) || (a.setAttribute(c, "t"),
            u[b + "Bubbles"] = !1 === a.attributes[c].expando)
    }
    )();
    var ra = /^(?:input|select|textarea)$/i
      , xb = /^key/
      , Ob = /^(?:mouse|contextmenu)|click/
      , ic = /^(?:focusinfocus|focusoutblur)$/
      , jc = /^([^.]*)(?:\.(.+)|)$/;
    d.event = {
        global: {},
        add: function(b, c, a, f, e) {
            var h, g, k, l, m, n, t, r, q;
            if (k = d._data(b)) {
                a.handler && (l = a,
                a = l.handler,
                e = l.selector);
                a.guid || (a.guid = d.guid++);
                (g = k.events) || (g = k.events = {});
                (m = k.handle) || (m = k.handle = function(a) {
                    return "undefined" === typeof d || a && d.event.triggered === a.type ? void 0 : d.event.dispatch.apply(m.elem, arguments)
                }
                ,
                m.elem = b);
                c = (c || "").match(qa) || [""];
                for (k = c.length; k--; )
                    h = jc.exec(c[k]) || [],
                    r = n = h[1],
                    q = (h[2] || "").split(".").sort(),
                    r && (h = d.event.special[r] || {},
                    r = (e ? h.delegateType : h.bindType) || r,
                    h = d.event.special[r] || {},
                    n = d.extend({
                        type: r,
                        origType: n,
                        data: f,
                        handler: a,
                        guid: a.guid,
                        selector: e,
                        needsContext: e && d.expr.match.needsContext.test(e),
                        namespace: q.join(".")
                    }, l),
                    (t = g[r]) || (t = g[r] = [],
                    t.delegateCount = 0,
                    h.setup && !1 !== h.setup.call(b, f, q, m) || (b.addEventListener ? b.addEventListener(r, m, !1) : b.attachEvent && b.attachEvent("on" + r, m))),
                    h.add && (h.add.call(b, n),
                    n.handler.guid || (n.handler.guid = a.guid)),
                    e ? t.splice(t.delegateCount++, 0, n) : t.push(n),
                    d.event.global[r] = !0);
                b = null
            }
        },
        remove: function(b, c, a, f, e) {
            var h, g, k, l, m, n, t, r, q, u, v, x = d.hasData(b) && d._data(b);
            if (x && (n = x.events)) {
                c = (c || "").match(qa) || [""];
                for (m = c.length; m--; )
                    if (k = jc.exec(c[m]) || [],
                    q = v = k[1],
                    u = (k[2] || "").split(".").sort(),
                    q) {
                        t = d.event.special[q] || {};
                        q = (f ? t.delegateType : t.bindType) || q;
                        r = n[q] || [];
                        k = k[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (l = h = r.length; h--; )
                            g = r[h],
                            !e && v !== g.origType || a && a.guid !== g.guid || k && !k.test(g.namespace) || f && f !== g.selector && ("**" !== f || !g.selector) || (r.splice(h, 1),
                            g.selector && r.delegateCount--,
                            t.remove && t.remove.call(b, g));
                        l && !r.length && (t.teardown && !1 !== t.teardown.call(b, u, x.handle) || d.removeEvent(b, q, x.handle),
                        delete n[q])
                    } else
                        for (q in n)
                            d.event.remove(b, q + c[m], a, f, !0);
                d.isEmptyObject(n) && (delete x.handle,
                d._removeData(b, "events"))
            }
        },
        trigger: function(b, c, a, f) {
            var e, h, g, k, l, m, n = [a || x], t = pa.call(b, "type") ? b.type : b;
            l = pa.call(b, "namespace") ? b.namespace.split(".") : [];
            g = e = a = a || x;
            if (3 !== a.nodeType && 8 !== a.nodeType && !ic.test(t + d.event.triggered) && (0 <= t.indexOf(".") && (l = t.split("."),
            t = l.shift(),
            l.sort()),
            h = 0 > t.indexOf(":") && "on" + t,
            b = b[d.expando] ? b : new d.Event(t,"object" === typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = l.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = a),
            c = null == c ? [b] : d.makeArray(c, [b]),
            l = d.event.special[t] || {},
            f || !l.trigger || !1 !== l.trigger.apply(a, c))) {
                if (!f && !l.noBubble && !d.isWindow(a)) {
                    k = l.delegateType || t;
                    ic.test(k + t) || (g = g.parentNode);
                    for (; g; g = g.parentNode)
                        n.push(g),
                        e = g;
                    e === (a.ownerDocument || x) && n.push(e.defaultView || e.parentWindow || q)
                }
                for (m = 0; (g = n[m++]) && !b.isPropagationStopped(); )
                    b.type = 1 < m ? k : l.bindType || t,
                    (e = (d._data(g, "events") || {})[b.type] && d._data(g, "handle")) && e.apply(g, c),
                    (e = h && g[h]) && e.apply && d.acceptData(g) && (b.result = e.apply(g, c),
                    !1 === b.result && b.preventDefault());
                b.type = t;
                if (!(f || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(n.pop(), c)) && d.acceptData(a) && h && a[t] && !d.isWindow(a)) {
                    (e = a[h]) && (a[h] = null);
                    d.event.triggered = t;
                    try {
                        a[t]()
                    } catch (r) {}
                    d.event.triggered = void 0;
                    e && (a[h] = e)
                }
                return b.result
            }
        },
        dispatch: function(b) {
            b = d.event.fix(b);
            var c, a, f, e, h, g = oa.call(arguments);
            c = (d._data(this, "events") || {})[b.type] || [];
            var k = d.event.special[b.type] || {};
            g[0] = b;
            b.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, b)) {
                h = d.event.handlers.call(this, b, c);
                for (c = 0; (f = h[c++]) && !b.isPropagationStopped(); )
                    for (b.currentTarget = f.elem,
                    e = 0; (a = f.handlers[e++]) && !b.isImmediatePropagationStopped(); )
                        if (!b.namespace_re || b.namespace_re.test(a.namespace))
                            b.handleObj = a,
                            b.data = a.data,
                            a = ((d.event.special[a.origType] || {}).handle || a.handler).apply(f.elem, g),
                            void 0 !== a && !1 === (b.result = a) && ("touchend" != b.type && b.preventDefault(),
                            b.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, b);
                return b.result
            }
        },
        handlers: function(b, c) {
            var a, f, e, h, g = [], k = c.delegateCount, l = b.target;
            if (k && l.nodeType && (!b.button || "click" !== b.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== b.type)) {
                        e = [];
                        for (h = 0; h < k; h++)
                            f = c[h],
                            a = f.selector + " ",
                            void 0 === e[a] && (e[a] = f.needsContext ? 0 <= d(a, this).index(l) : d.find(a, this, null, [l]).length),
                            e[a] && e.push(f);
                        e.length && g.push({
                            elem: l,
                            handlers: e
                        })
                    }
            k < c.length && g.push({
                elem: this,
                handlers: c.slice(k)
            });
            return g
        },
        fix: function(b) {
            if (b[d.expando])
                return b;
            var c, a, f;
            c = b.type;
            var e = b
              , h = this.fixHooks[c];
            h || (this.fixHooks[c] = h = Ob.test(c) ? this.mouseHooks : xb.test(c) ? this.keyHooks : {});
            f = h.props ? this.props.concat(h.props) : this.props;
            b = new d.Event(e);
            for (c = f.length; c--; )
                a = f[c],
                b[a] = e[a];
            b.target || (b.target = e.srcElement || x);
            3 === b.target.nodeType && (b.target = b.target.parentNode);
            b.metaKey = !!b.metaKey;
            return h.filter ? h.filter(b, e) : b
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode);
                return b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, c) {
                var a, d, e = c.button, h = c.fromElement;
                null == b.pageX && null != c.clientX && (a = b.target.ownerDocument || x,
                d = a.documentElement,
                a = a.body,
                b.pageX = c.clientX + (d && d.scrollLeft || a && a.scrollLeft || 0) - (d && d.clientLeft || a && a.clientLeft || 0),
                b.pageY = c.clientY + (d && d.scrollTop || a && a.scrollTop || 0) - (d && d.clientTop || a && a.clientTop || 0));
                !b.relatedTarget && h && (b.relatedTarget = h === b.target ? c.toElement : h);
                b.which || void 0 === e || (b.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
                return b
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Pa() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (b) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Pa() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (d.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(b) {
                    return d.nodeName(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && (b.originalEvent.returnValue = b.result)
                }
            }
        },
        simulate: function(b, c, a, f) {
            b = d.extend(new d.Event, a, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            f ? d.event.trigger(b, null, c) : d.event.dispatch.call(c, b);
            b.isDefaultPrevented() && a.preventDefault()
        }
    };
    d.removeEvent = x.removeEventListener ? function(b, c, a) {
        b.removeEventListener && b.removeEventListener(c, a, !1)
    }
    : function(b, c, a) {
        c = "on" + c;
        b.detachEvent && ("undefined" === typeof b[c] && (b[c] = null),
        b.detachEvent(c, a))
    }
    ;
    d.Event = function(b, c) {
        if (!(this instanceof d.Event))
            return new d.Event(b,c);
        b && b.type ? (this.originalEvent = b,
        this.type = b.type,
        this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && (!1 === b.returnValue || b.getPreventDefault && b.getPreventDefault()) ? Oa : ua) : this.type = b;
        c && d.extend(this, c);
        this.timeStamp = b && b.timeStamp || d.now();
        this[d.expando] = !0
    }
    ;
    d.Event.prototype = {
        isDefaultPrevented: ua,
        isPropagationStopped: ua,
        isImmediatePropagationStopped: ua,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = Oa;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = Oa;
            b && (b.stopPropagation && b.stopPropagation(),
            b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Oa;
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        d.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(a) {
                var b, e = a.relatedTarget, h = a.handleObj;
                if (!e || e !== this && !d.contains(this, e))
                    a.type = h.origType,
                    b = h.handler.apply(this, arguments),
                    a.type = c;
                return b
            }
        }
    });
    u.submitBubbles || (d.event.special.submit = {
        setup: function() {
            if (d.nodeName(this, "form"))
                return !1;
            d.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.form : void 0) && !d._data(b, "submitBubbles") && (d.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }),
                d._data(b, "submitBubbles", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble,
            this.parentNode && !b.isTrigger && d.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (d.nodeName(this, "form"))
                return !1;
            d.event.remove(this, "._submit")
        }
    });
    u.changeBubbles || (d.event.special.change = {
        setup: function() {
            if (ra.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    d.event.add(this, "propertychange._change", function(b) {
                        "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    d.event.add(this, "click._change", function(b) {
                        this._just_changed && !b.isTrigger && (this._just_changed = !1);
                        d.event.simulate("change", this, b, !0)
                    });
                return !1
            }
            d.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                ra.test(b.nodeName) && !d._data(b, "changeBubbles") && (d.event.add(b, "change._change", function(b) {
                    !this.parentNode || b.isSimulated || b.isTrigger || d.event.simulate("change", this.parentNode, b, !0)
                }),
                d._data(b, "changeBubbles", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type)
                return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            d.event.remove(this, "._change");
            return !ra.test(this.nodeName)
        }
    });
    u.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var a = function(a) {
            d.event.simulate(c, a.target, d.event.fix(a), !0)
        };
        d.event.special[c] = {
            setup: function() {
                var f = this.ownerDocument || this
                  , e = d._data(f, c);
                e || f.addEventListener(b, a, !0);
                d._data(f, c, (e || 0) + 1)
            },
            teardown: function() {
                var f = this.ownerDocument || this
                  , e = d._data(f, c) - 1;
                e ? d._data(f, c, e) : (f.removeEventListener(b, a, !0),
                d._removeData(f, c))
            }
        }
    });
    d.fn.extend({
        on: function(b, c, a, f, e) {
            var h, g;
            if ("object" === typeof b) {
                "string" !== typeof c && (a = a || c,
                c = void 0);
                for (h in b)
                    this.on(h, c, a, b[h], e);
                return this
            }
            null == a && null == f ? (f = c,
            a = c = void 0) : null == f && ("string" === typeof c ? (f = a,
            a = void 0) : (f = a,
            a = c,
            c = void 0));
            if (!1 === f)
                f = ua;
            else if (!f)
                return this;
            1 === e && (g = f,
            f = function(a) {
                d().off(a);
                return g.apply(this, arguments)
            }
            ,
            f.guid = g.guid || (g.guid = d.guid++));
            return this.each(function() {
                d.event.add(this, b, f, a, c)
            })
        },
        one: function(b, c, a, d) {
            return this.on(b, c, a, d, 1)
        },
        off: function(b, c, a) {
            var f;
            if (b && b.preventDefault && b.handleObj)
                return f = b.handleObj,
                d(b.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if ("object" === typeof b) {
                for (f in b)
                    this.off(f, c, b[f]);
                return this
            }
            if (!1 === c || "function" === typeof c)
                a = c,
                c = void 0;
            !1 === a && (a = ua);
            return this.each(function() {
                d.event.remove(this, b, a, c)
            })
        },
        trigger: function(b, c) {
            return this.each(function() {
                d.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var a = this[0];
            if (a)
                return d.event.trigger(b, c, a, !0)
        }
    });
    var Pb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , kc = / jQuery\d+="(?:null|\d+)"/g
      , wb = new RegExp("<(?:" + Pb + ")[\\s/>]","i")
      , Qb = /^\s+/
      , Rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , kb = /<([\w:]+)/
      , Sb = /<tbody/i
      , lc = /<|&#?\w+;/
      , mc = /<(?:script|style|link)/i
      , Hc = /checked\s*(?:[^=]|=\s*.checked.)/i
      , nc = /^$|\/(?:java|ecma)script/i
      , Ic = /^true\/(.*)/
      , oc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ea = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Tb = za(x).appendChild(x.createElement("div"));
    ea.optgroup = ea.option;
    ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
    ea.th = ea.td;
    d.extend({
        clone: function(b, c, a) {
            var f, e, h, g, k, l = d.contains(b.ownerDocument, b);
            u.html5Clone || d.isXMLDoc(b) || !wb.test("<" + b.nodeName + ">") ? h = b.cloneNode(!0) : (Tb.innerHTML = b.outerHTML,
            Tb.removeChild(h = Tb.firstChild));
            if (!(u.noCloneEvent && u.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || d.isXMLDoc(b)))
                for (f = z(h),
                k = z(b),
                g = 0; null != (e = k[g]); ++g)
                    if (f[g]) {
                        var m = f[g], n, t = void 0, r;
                        if (1 === m.nodeType) {
                            n = m.nodeName.toLowerCase();
                            if (!u.noCloneEvent && m[d.expando]) {
                                r = d._data(m);
                                for (t in r.events)
                                    d.removeEvent(m, t, r.handle);
                                m.removeAttribute(d.expando)
                            }
                            if ("script" === n && m.text !== e.text)
                                bc(m).text = e.text,
                                yb(m);
                            else if ("object" === n)
                                m.parentNode && (m.outerHTML = e.outerHTML),
                                u.html5Clone && e.innerHTML && !d.trim(m.innerHTML) && (m.innerHTML = e.innerHTML);
                            else if ("input" === n && fa.test(e.type))
                                m.defaultChecked = m.checked = e.checked,
                                m.value !== e.value && (m.value = e.value);
                            else if ("option" === n)
                                m.defaultSelected = m.selected = e.defaultSelected;
                            else if ("input" === n || "textarea" === n)
                                m.defaultValue = e.defaultValue
                        }
                    }
            if (c)
                if (a)
                    for (k = k || z(b),
                    f = f || z(h),
                    g = 0; null != (e = k[g]); g++)
                        zb(e, f[g]);
                else
                    zb(b, h);
            f = z(h, "script");
            0 < f.length && bb(f, !l && z(b, "script"));
            return h
        },
        buildFragment: function(b, c, a, f) {
            for (var e, h, g, k, l, m, n = b.length, t = za(c), r = [], q = 0; q < n; q++)
                if ((h = b[q]) || 0 === h)
                    if ("object" === d.type(h))
                        d.merge(r, h.nodeType ? [h] : h);
                    else if (lc.test(h)) {
                        g = g || t.appendChild(c.createElement("div"));
                        k = (kb.exec(h) || ["", ""])[1].toLowerCase();
                        m = ea[k] || ea._default;
                        g.innerHTML = m[1] + h.replace(Rb, "<$1></$2>") + m[2];
                        for (e = m[0]; e--; )
                            g = g.lastChild;
                        !u.leadingWhitespace && Qb.test(h) && r.push(c.createTextNode(Qb.exec(h)[0]));
                        if (!u.tbody)
                            for (e = (h = "table" !== k || Sb.test(h) ? "<table>" !== m[1] || Sb.test(h) ? 0 : g : g.firstChild) && h.childNodes.length; e--; )
                                d.nodeName(l = h.childNodes[e], "tbody") && !l.childNodes.length && h.removeChild(l);
                        d.merge(r, g.childNodes);
                        for (g.textContent = ""; g.firstChild; )
                            g.removeChild(g.firstChild);
                        g = t.lastChild
                    } else
                        r.push(c.createTextNode(h));
            g && t.removeChild(g);
            u.appendChecked || d.grep(z(r, "input"), ac);
            for (q = 0; h = r[q++]; )
                if (!f || -1 === d.inArray(h, f))
                    if (b = d.contains(h.ownerDocument, h),
                    g = z(t.appendChild(h), "script"),
                    b && bb(g),
                    a)
                        for (e = 0; h = g[e++]; )
                            nc.test(h.type || "") && a.push(h);
            return t
        },
        cleanData: function(b, c) {
            for (var a, f, e, h, g = 0, k = d.expando, l = d.cache, m = u.deleteExpando, n = d.event.special; null != (a = b[g]); g++)
                if (c || d.acceptData(a))
                    if (h = (e = a[k]) && l[e]) {
                        if (h.events)
                            for (f in h.events)
                                n[f] ? d.event.remove(a, f) : d.removeEvent(a, f, h.handle);
                        l[e] && (delete l[e],
                        m ? delete a[k] : "undefined" !== typeof a.removeAttribute ? a.removeAttribute(k) : a[k] = null,
                        ia.push(e))
                    }
        }
    });
    d.fn.extend({
        text: function(b) {
            return Z(this, function(b) {
                return void 0 === b ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(b))
            }, null, b, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(b) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || O(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = O(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        remove: function(b, c) {
            for (var a = b ? d.filter(b, this) : this, f = 0; null != (b = a[f]); f++)
                c || 1 !== b.nodeType || d.cleanData(z(b)),
                b.parentNode && (c && d.contains(b.ownerDocument, b) && bb(z(b, "script")),
                b.parentNode.removeChild(b));
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) {
                for (1 === b.nodeType && d.cleanData(z(b, !1)); b.firstChild; )
                    b.removeChild(b.firstChild);
                b.options && d.nodeName(b, "select") && (b.options.length = 0)
            }
            return this
        },
        clone: function(b, c) {
            b = null == b ? !1 : b;
            c = null == c ? b : c;
            return this.map(function() {
                return d.clone(this, b, c)
            })
        },
        html: function(b) {
            return Z(this, function(b) {
                var a = this[0] || {}
                  , f = 0
                  , e = this.length;
                if (void 0 === b)
                    return 1 === a.nodeType ? a.innerHTML.replace(kc, "") : void 0;
                if (!("string" !== typeof b || mc.test(b) || !u.htmlSerialize && wb.test(b) || !u.leadingWhitespace && Qb.test(b) || ea[(kb.exec(b) || ["", ""])[1].toLowerCase()])) {
                    b = b.replace(Rb, "<$1></$2>");
                    try {
                        for (; f < e; f++)
                            a = this[f] || {},
                            1 === a.nodeType && (d.cleanData(z(a, !1)),
                            a.innerHTML = b);
                        a = 0
                    } catch (h) {}
                }
                a && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = arguments[0];
            this.domManip(arguments, function(c) {
                b = this.parentNode;
                d.cleanData(z(this));
                b && b.replaceChild(c, this)
            });
            return b && (b.length || b.nodeType) ? this : this.remove()
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, c) {
            b = da.apply([], b);
            var a, f, e, h, g = 0, k = this.length, l = this, m = k - 1, n = b[0], t = d.isFunction(n);
            if (t || 1 < k && "string" === typeof n && !u.checkClone && Hc.test(n))
                return this.each(function(a) {
                    var d = l.eq(a);
                    t && (b[0] = n.call(this, a, d.html()));
                    d.domManip(b, c)
                });
            if (k && (h = d.buildFragment(b, this[0].ownerDocument, !1, this),
            a = h.firstChild,
            1 === h.childNodes.length && (h = a),
            a)) {
                e = d.map(z(h, "script"), bc);
                for (f = e.length; g < k; g++)
                    a = h,
                    g !== m && (a = d.clone(a, !0, !0),
                    f && d.merge(e, z(a, "script"))),
                    c.call(this[g], a, g);
                if (f)
                    for (h = e[e.length - 1].ownerDocument,
                    d.map(e, yb),
                    g = 0; g < f; g++)
                        a = e[g],
                        nc.test(a.type || "") && !d._data(a, "globalEval") && d.contains(h, a) && (a.src ? d._evalUrl && d._evalUrl(a.src) : d.globalEval((a.text || a.textContent || a.innerHTML || "").replace(oc, "")));
                h = a = null
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        d.fn[b] = function(a) {
            for (var b = 0, e = [], h = d(a), g = h.length - 1; b <= g; b++)
                a = b === g ? this : this.clone(!0),
                d(h[b])[c](a),
                aa.apply(e, a.get());
            return this.pushStack(e)
        }
    });
    var X, lb = {};
    (function() {
        var b, c, a = x.createElement("div");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        b = a.getElementsByTagName("a")[0];
        b.style.cssText = "float:left;opacity:.5";
        u.opacity = /^0.5/.test(b.style.opacity);
        u.cssFloat = !!b.style.cssFloat;
        a.style.backgroundClip = "content-box";
        a.cloneNode(!0).style.backgroundClip = "";
        u.clearCloneStyle = "content-box" === a.style.backgroundClip;
        b = a = null;
        u.shrinkWrapBlocks = function() {
            var a, b, d;
            if (null == c) {
                a = x.getElementsByTagName("body")[0];
                if (!a)
                    return;
                b = x.createElement("div");
                d = x.createElement("div");
                a.appendChild(b).appendChild(d);
                c = !1;
                "undefined" !== typeof d.style.zoom && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
                d.innerHTML = "<div></div>",
                d.firstChild.style.width = "5px",
                c = 3 !== d.offsetWidth);
                a.removeChild(b)
            }
            return c
        }
    }
    )();
    var Ha = /^margin/, Qa = new RegExp("^(" + $a + ")(?!px)[a-z%]+$","i"), ta, W, Ca = /^(top|right|bottom|left)$/;
    q.getComputedStyle ? (ta = function(b) {
        return b.ownerDocument.defaultView.getComputedStyle(b, null)
    }
    ,
    W = function(b, c, a) {
        var f, e, h = b.style;
        e = (a = a || ta(b)) ? a.getPropertyValue(c) || a[c] : void 0;
        a && ("" !== e || d.contains(b.ownerDocument, b) || (e = d.style(b, c)),
        Qa.test(e) && Ha.test(c) && (b = h.width,
        c = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = e,
        e = a.width,
        h.width = b,
        h.minWidth = c,
        h.maxWidth = f));
        return void 0 === e ? e : e + ""
    }
    ) : x.documentElement.currentStyle && (ta = function(b) {
        return b.currentStyle
    }
    ,
    W = function(b, c, a) {
        var d, e, h, g = b.style;
        h = (a = a || ta(b)) ? a[c] : void 0;
        null == h && g && g[c] && (h = g[c]);
        if (Qa.test(h) && !Ca.test(c)) {
            a = g.left;
            if (e = (d = b.runtimeStyle) && d.left)
                d.left = b.currentStyle.left;
            g.left = "fontSize" === c ? "1em" : h;
            h = g.pixelLeft + "px";
            g.left = a;
            e && (d.left = e)
        }
        return void 0 === h ? h : h + "" || "auto"
    }
    );
    (function() {
        function b() {
            var a, b, c = x.getElementsByTagName("body")[0];
            c && (a = x.createElement("div"),
            b = x.createElement("div"),
            a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            c.appendChild(a).appendChild(b),
            b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
            d.swap(c, null != c.style.zoom ? {
                zoom: 1
            } : {}, function() {
                f = 4 === b.offsetWidth
            }),
            e = !0,
            h = !1,
            g = !0,
            q.getComputedStyle && (h = "1%" !== (q.getComputedStyle(b, null) || {}).top,
            e = "4px" === (q.getComputedStyle(b, null) || {
                width: "4px"
            }).width),
            c.removeChild(a),
            b = c = null)
        }
        var c, a, f, e, h, g, k = x.createElement("div");
        k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = k.getElementsByTagName("a")[0];
        c.style.cssText = "float:left;opacity:.5";
        u.opacity = /^0.5/.test(c.style.opacity);
        u.cssFloat = !!c.style.cssFloat;
        k.style.backgroundClip = "content-box";
        k.cloneNode(!0).style.backgroundClip = "";
        u.clearCloneStyle = "content-box" === k.style.backgroundClip;
        c = k = null;
        d.extend(u, {
            reliableHiddenOffsets: function() {
                if (null != a)
                    return a;
                var b, c, d;
                c = x.createElement("div");
                var f = x.getElementsByTagName("body")[0];
                if (f)
                    return c.setAttribute("className", "t"),
                    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    b = x.createElement("div"),
                    b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                    f.appendChild(b).appendChild(c),
                    c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    c = c.getElementsByTagName("td"),
                    c[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    d = 0 === c[0].offsetHeight,
                    c[0].style.display = "",
                    c[1].style.display = "none",
                    a = d && 0 === c[0].offsetHeight,
                    f.removeChild(b),
                    a
            },
            boxSizing: function() {
                null == f && b();
                return f
            },
            boxSizingReliable: function() {
                null == e && b();
                return e
            },
            pixelPosition: function() {
                null == h && b();
                return h
            },
            reliableMarginRight: function() {
                var a, b, c, d;
                if (null == g && q.getComputedStyle) {
                    a = x.getElementsByTagName("body")[0];
                    if (!a)
                        return;
                    b = x.createElement("div");
                    c = x.createElement("div");
                    b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                    a.appendChild(b).appendChild(c);
                    d = c.appendChild(x.createElement("div"));
                    d.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                    d.style.marginRight = d.style.width = "0";
                    c.style.width = "1px";
                    g = !parseFloat((q.getComputedStyle(d, null) || {}).marginRight);
                    a.removeChild(b)
                }
                return g
            }
        })
    }
    )();
    d.swap = function(b, c, a, d) {
        var e, h = {};
        for (e in c)
            h[e] = b.style[e],
            b.style[e] = c[e];
        a = a.apply(b, d || []);
        for (e in c)
            b.style[e] = h[e];
        return a
    }
    ;
    var ga = /alpha\([^)]*\)/i
      , Jc = /opacity\s*=\s*([^)]*)/
      , Ub = /^(none|table(?!-c[ea]).+)/
      , Kc = new RegExp("^(" + $a + ")(.*)$","i")
      , Lc = new RegExp("^([+-])=(" + $a + ")","i")
      , Bc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , pc = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , qc = ["Webkit", "O", "Moz", "ms"];
    d.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c)
                        return b = W(b, "opacity"),
                        "" === b ? "1" : b
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": u.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, c, a, f) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var e, h, g, k = d.camelCase(c), l = b.style;
                c = d.cssProps[k] || (d.cssProps[k] = Cb(l, k));
                g = d.cssHooks[c] || d.cssHooks[k];
                if (void 0 !== a) {
                    if (h = typeof a,
                    "string" === h && (e = Lc.exec(a)) && (a = (e[1] + 1) * e[2] + parseFloat(d.css(b, c)),
                    h = "number"),
                    null != a && a === a && ("number" !== h || d.cssNumber[k] || (a += "px"),
                    u.clearCloneStyle || "" !== a || 0 !== c.indexOf("background") || (l[c] = "inherit"),
                    !(g && "set"in g) || void 0 !== (a = g.set(b, a, f))))
                        try {
                            l[c] = "",
                            l[c] = a
                        } catch (m) {}
                } else
                    return g && "get"in g && void 0 !== (e = g.get(b, !1, f)) ? e : l[c]
            }
        },
        css: function(b, c, a, f) {
            var e, h;
            h = d.camelCase(c);
            c = d.cssProps[h] || (d.cssProps[h] = Cb(b.style, h));
            (h = d.cssHooks[c] || d.cssHooks[h]) && "get"in h && (e = h.get(b, !0, a));
            void 0 === e && (e = W(b, c, f));
            "normal" === e && c in pc && (e = pc[c]);
            return "" === a || a ? (b = parseFloat(e),
            !0 === a || d.isNumeric(b) ? b || 0 : e) : e
        }
    });
    d.each(["height", "width"], function(b, c) {
        d.cssHooks[c] = {
            get: function(a, b, e) {
                if (b)
                    return 0 === a.offsetWidth && Ub.test(d.css(a, "display")) ? d.swap(a, Bc, function() {
                        return Gb(a, c, e)
                    }) : Gb(a, c, e)
            },
            set: function(a, b, e) {
                var h = e && ta(a);
                return Eb(a, b, e ? Fb(a, c, e, u.boxSizing() && "border-box" === d.css(a, "boxSizing", !1, h), h) : 0)
            }
        }
    });
    u.opacity || (d.cssHooks.opacity = {
        get: function(b, c) {
            return Jc.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var a = b.style;
            b = b.currentStyle;
            var f = d.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : ""
              , e = b && b.filter || a.filter || "";
            a.zoom = 1;
            if ((1 <= c || "" === c) && "" === d.trim(e.replace(ga, "")) && a.removeAttribute && (a.removeAttribute("filter"),
            "" === c || b && !b.filter))
                return;
            a.filter = ga.test(e) ? e.replace(ga, f) : e + " " + f
        }
    });
    d.cssHooks.marginRight = Bb(u.reliableMarginRight, function(b, c) {
        if (c)
            return d.swap(b, {
                display: "inline-block"
            }, W, [b, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        d.cssHooks[b + c] = {
            expand: function(a) {
                var d = 0
                  , e = {};
                for (a = "string" === typeof a ? a.split(" ") : [a]; 4 > d; d++)
                    e[b + ya[d] + c] = a[d] || a[d - 2] || a[0];
                return e
            }
        };
        Ha.test(b) || (d.cssHooks[b + c].set = Eb)
    });
    d.fn.extend({
        css: function(b, c) {
            return Z(this, function(a, b, c) {
                var e, g = {}, k = 0;
                if (d.isArray(b)) {
                    c = ta(a);
                    for (e = b.length; k < e; k++)
                        g[b[k]] = d.css(a, b[k], !1, c);
                    return g
                }
                return void 0 !== c ? d.style(a, b, c) : d.css(a, b)
            }, b, c, 1 < arguments.length)
        },
        show: function() {
            return Db(this, !0)
        },
        hide: function() {
            return Db(this)
        },
        toggle: function(b) {
            return "boolean" === typeof b ? b ? this.show() : this.hide() : this.each(function() {
                ka(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = V;
    V.prototype = {
        constructor: V,
        init: function(b, c, a, f, e, h) {
            this.elem = b;
            this.prop = a;
            this.easing = e || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = f;
            this.unit = h || (d.cssNumber[a] ? "" : "px")
        },
        cur: function() {
            var b = V.propHooks[this.prop];
            return b && b.get ? b.get(this) : V.propHooks._default.get(this)
        },
        run: function(b) {
            var c, a = V.propHooks[this.prop];
            this.pos = this.options.duration ? c = d.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : c = b;
            this.now = (this.end - this.start) * c + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            a && a.set ? a.set(this) : V.propHooks._default.set(this);
            return this
        }
    };
    V.prototype.init.prototype = V.prototype;
    V.propHooks = {
        _default: {
            get: function(b) {
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (b = d.css(b.elem, b.prop, "")) && "auto" !== b ? b : 0 : b.elem[b.prop]
            },
            set: function(b) {
                if (d.fx.step[b.prop])
                    d.fx.step[b.prop](b);
                else
                    b.elem.style && (null != b.elem.style[d.cssProps[b.prop]] || d.cssHooks[b.prop]) ? d.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    V.propHooks.scrollTop = V.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    d.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return .5 - Math.cos(b * Math.PI) / 2
        }
    };
    d.fx = V.prototype.init;
    d.fx.step = {};
    var Ea, Ra, Ia = /^(?:toggle|show|hide)$/, Ua = new RegExp("^(?:([+-])=|)(" + $a + ")([a-z%]*)$","i"), Mc = /queueHooks$/, Va = [function(b, c, a) {
        var f, e, h, g, k, l, m = this, n = {}, q = b.style, r = b.nodeType && ka(b), v = d._data(b, "fxshow");
        a.queue || (g = d._queueHooks(b, "fx"),
        null == g.unqueued && (g.unqueued = 0,
        k = g.empty.fire,
        g.empty.fire = function() {
            g.unqueued || k()
        }
        ),
        g.unqueued++,
        m.always(function() {
            m.always(function() {
                g.unqueued--;
                d.queue(b, "fx").length || g.empty.fire()
            })
        }));
        1 === b.nodeType && ("height"in c || "width"in c) && (a.overflow = [q.overflow, q.overflowX, q.overflowY],
        e = d.css(b, "display"),
        l = Ab(b.nodeName),
        "none" === e && (e = l),
        "inline" === e && "none" === d.css(b, "float") && (u.inlineBlockNeedsLayout && "inline" !== l ? q.zoom = 1 : q.display = "inline-block"));
        a.overflow && (q.overflow = "hidden",
        u.shrinkWrapBlocks() || m.always(function() {
            q.overflow = a.overflow[0];
            q.overflowX = a.overflow[1];
            q.overflowY = a.overflow[2]
        }));
        for (f in c)
            if (e = c[f],
            Ia.exec(e)) {
                delete c[f];
                h = h || "toggle" === e;
                if (e === (r ? "hide" : "show"))
                    if ("show" === e && v && void 0 !== v[f])
                        r = !0;
                    else
                        continue;
                n[f] = v && v[f] || d.style(b, f)
            }
        if (!d.isEmptyObject(n))
            for (f in v ? "hidden"in v && (r = v.hidden) : v = d._data(b, "fxshow", {}),
            h && (v.hidden = !r),
            r ? d(b).show() : m.done(function() {
                d(b).hide()
            }),
            m.done(function() {
                var a;
                d._removeData(b, "fxshow");
                for (a in n)
                    d.style(b, a, n[a])
            }),
            n)
                c = Ib(r ? v[f] : 0, f, m),
                f in v || (v[f] = c.start,
                r && (c.end = c.start,
                c.start = "width" === f || "height" === f ? 1 : 0))
    }
    ], Wa = {
        "*": [function(b, c) {
            var a = this.createTween(b, c)
              , e = a.cur()
              , p = (c = Ua.exec(c)) && c[3] || (d.cssNumber[b] ? "" : "px")
              , h = (d.cssNumber[b] || "px" !== p && +e) && Ua.exec(d.css(a.elem, b))
              , g = 1
              , k = 20;
            if (h && h[3] !== p) {
                p = p || h[3];
                c = c || [];
                h = +e || 1;
                do
                    g = g || ".5",
                    h /= g,
                    d.style(a.elem, b, h + p);
                while (g !== (g = a.cur() / e) && 1 !== g && --k)
            }
            c && (h = a.start = +h || +e || 0,
            a.unit = p,
            a.end = c[1] ? h + (c[1] + 1) * c[2] : +c[2]);
            return a
        }
        ]
    };
    d.Animation = d.extend(Jb, {
        tweener: function(b, c) {
            d.isFunction(b) ? (c = b,
            b = ["*"]) : b = b.split(" ");
            for (var a, e = 0, p = b.length; e < p; e++)
                a = b[e],
                Wa[a] = Wa[a] || [],
                Wa[a].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Va.unshift(b) : Va.push(b)
        }
    });
    d.speed = function(b, c, a) {
        var e = b && "object" === typeof b ? d.extend({}, b) : {
            complete: a || !a && c || d.isFunction(b) && b,
            duration: b,
            easing: a && c || c && !d.isFunction(c) && c
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue || !0 === e.queue)
            e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        }
        ;
        return e
    }
    ;
    d.fn.extend({
        fadeTo: function(b, c, a, d) {
            return this.filter(ka).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, a, d)
        },
        animate: function(b, c, a, e) {
            var p = d.isEmptyObject(b)
              , h = d.speed(c, a, e);
            c = function() {
                var a = Jb(this, d.extend({}, b), h);
                (p || d._data(this, "finish")) && a.stop(!0)
            }
            ;
            c.finish = c;
            return p || !1 === h.queue ? this.each(c) : this.queue(h.queue, c)
        },
        stop: function(b, c, a) {
            var e = function(b) {
                var c = b.stop;
                delete b.stop;
                c(a)
            };
            "string" !== typeof b && (a = c,
            c = b,
            b = void 0);
            c && !1 !== b && this.queue(b || "fx", []);
            return this.each(function() {
                var c = !0
                  , h = null != b && b + "queueHooks"
                  , g = d.timers
                  , k = d._data(this);
                if (h)
                    k[h] && k[h].stop && e(k[h]);
                else
                    for (h in k)
                        k[h] && k[h].stop && Mc.test(h) && e(k[h]);
                for (h = g.length; h--; )
                    g[h].elem !== this || null != b && g[h].queue !== b || (g[h].anim.stop(a),
                    c = !1,
                    g.splice(h, 1));
                !c && a || d.dequeue(this, b)
            })
        },
        finish: function(b) {
            !1 !== b && (b = b || "fx");
            return this.each(function() {
                var c, a = d._data(this), e = a[b + "queue"];
                c = a[b + "queueHooks"];
                var p = d.timers
                  , h = e ? e.length : 0;
                a.finish = !0;
                d.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = p.length; c--; )
                    p[c].elem === this && p[c].queue === b && (p[c].anim.stop(!0),
                    p.splice(c, 1));
                for (c = 0; c < h; c++)
                    e[c] && e[c].finish && e[c].finish.call(this);
                delete a.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(b, c) {
        var a = d.fn[c];
        d.fn[c] = function(b, d, e) {
            return null == b || "boolean" === typeof b ? a.apply(this, arguments) : this.animate(R(c, !0), b, d, e)
        }
    });
    d.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        d.fn[b] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var b, c = d.timers, a = 0;
        for (Ea = d.now(); a < c.length; a++)
            b = c[a],
            b() || c[a] !== b || c.splice(a--, 1);
        c.length || d.fx.stop();
        Ea = void 0
    }
    ;
    d.fx.timer = function(b) {
        d.timers.push(b);
        b() ? d.fx.start() : d.timers.pop()
    }
    ;
    d.fx.interval = 13;
    d.fx.start = function() {
        Ra || (Ra = setInterval(d.fx.tick, d.fx.interval))
    }
    ;
    d.fx.stop = function() {
        clearInterval(Ra);
        Ra = null
    }
    ;
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(b, c) {
        b = d.fx ? d.fx.speeds[b] || b : b;
        return this.queue(c || "fx", function(a, c) {
            var d = setTimeout(a, b);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ;
    (function() {
        var b, c, a, d, e = x.createElement("div");
        e.setAttribute("className", "t");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        b = e.getElementsByTagName("a")[0];
        a = x.createElement("select");
        d = a.appendChild(x.createElement("option"));
        c = e.getElementsByTagName("input")[0];
        b.style.cssText = "top:1px";
        u.getSetAttribute = "t" !== e.className;
        u.style = /top/.test(b.getAttribute("style"));
        u.hrefNormalized = "/a" === b.getAttribute("href");
        u.checkOn = !!c.value;
        u.optSelected = d.selected;
        u.enctype = !!x.createElement("form").enctype;
        a.disabled = !0;
        u.optDisabled = !d.disabled;
        c = x.createElement("input");
        c.setAttribute("value", "");
        u.input = "" === c.getAttribute("value");
        c.value = "t";
        c.setAttribute("type", "radio");
        u.radioValue = "t" === c.value
    }
    )();
    var eb = /\r/g;
    d.fn.extend({
        val: function(b) {
            var c, a, e, p = this[0];
            if (arguments.length)
                return e = d.isFunction(b),
                this.each(function(a) {
                    1 === this.nodeType && (a = e ? b.call(this, a, d(this).val()) : b,
                    null == a ? a = "" : "number" === typeof a ? a += "" : d.isArray(a) && (a = d.map(a, function(a) {
                        return null == a ? "" : a + ""
                    })),
                    c = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()],
                    c && "set"in c && void 0 !== c.set(this, a, "value") || (this.value = a))
                });
            if (p) {
                if ((c = d.valHooks[p.type] || d.valHooks[p.nodeName.toLowerCase()]) && "get"in c && void 0 !== (a = c.get(p, "value")))
                    return a;
                a = p.value;
                return "string" === typeof a ? a.replace(eb, "") : null == a ? "" : a
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = d.find.attr(b, "value");
                    return null != c ? c : d.text(b)
                }
            },
            select: {
                get: function(b) {
                    for (var c, a = b.options, e = b.selectedIndex, p = (b = "select-one" === b.type || 0 > e) ? null : [], h = b ? e + 1 : a.length, g = 0 > e ? h : b ? e : 0; g < h; g++)
                        if (c = a[g],
                        !(!c.selected && g !== e || (u.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && d.nodeName(c.parentNode, "optgroup"))) {
                            c = d(c).val();
                            if (b)
                                return c;
                            p.push(c)
                        }
                    return p
                },
                set: function(b, c) {
                    for (var a, e = b.options, p = d.makeArray(c), h = e.length; h--; )
                        if (c = e[h],
                        0 <= d.inArray(d.valHooks.option.get(c), p))
                            try {
                                c.selected = a = !0
                            } catch (g) {
                                c.scrollHeight
                            }
                        else
                            c.selected = !1;
                    a || (b.selectedIndex = -1);
                    return e
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(b, c) {
                if (d.isArray(c))
                    return b.checked = 0 <= d.inArray(d(b).val(), c)
            }
        };
        u.checkOn || (d.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        }
        )
    });
    var ha, rc, J = d.expr.attrHandle, mb = /^(?:checked|selected)$/i, Y = u.getSetAttribute, Ma = u.input;
    d.fn.extend({
        attr: function(b, c) {
            return Z(this, d.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                d.removeAttr(this, b)
            })
        }
    });
    d.extend({
        attr: function(b, c, a) {
            var e, p, h = b.nodeType;
            if (b && 3 !== h && 8 !== h && 2 !== h) {
                if ("undefined" === typeof b.getAttribute)
                    return d.prop(b, c, a);
                1 === h && d.isXMLDoc(b) || (c = c.toLowerCase(),
                e = d.attrHooks[c] || (d.expr.match.bool.test(c) ? rc : ha));
                if (void 0 !== a)
                    if (null === a)
                        d.removeAttr(b, c);
                    else {
                        if (e && "set"in e && void 0 !== (p = e.set(b, a, c)))
                            return p;
                        b.setAttribute(c, a + "");
                        return a
                    }
                else {
                    if (e && "get"in e && null !== (p = e.get(b, c)))
                        return p;
                    p = d.find.attr(b, c);
                    return null == p ? void 0 : p
                }
            }
        },
        removeAttr: function(b, c) {
            var a, e = 0, p = c && c.match(qa);
            if (p && 1 === b.nodeType)
                for (; c = p[e++]; )
                    a = d.propFix[c] || c,
                    d.expr.match.bool.test(c) ? Ma && Y || !mb.test(c) ? b[a] = !1 : b[d.camelCase("default-" + c)] = b[a] = !1 : d.attr(b, c, ""),
                    b.removeAttribute(Y ? c : a)
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!u.radioValue && "radio" === c && d.nodeName(b, "input")) {
                        var a = b.value;
                        b.setAttribute("type", c);
                        a && (b.value = a);
                        return c
                    }
                }
            }
        }
    });
    rc = {
        set: function(b, c, a) {
            !1 === c ? d.removeAttr(b, a) : Ma && Y || !mb.test(a) ? b.setAttribute(!Y && d.propFix[a] || a, a) : b[d.camelCase("default-" + a)] = b[a] = !0;
            return a
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var a = J[c] || d.find.attr;
        J[c] = Ma && Y || !mb.test(c) ? function(b, c, d) {
            var e, k;
            d || (k = J[c],
            J[c] = e,
            e = null != a(b, c, d) ? c.toLowerCase() : null,
            J[c] = k);
            return e
        }
        : function(a, b, c) {
            if (!c)
                return a[d.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Ma && Y || (d.attrHooks.value = {
        set: function(b, c, a) {
            if (d.nodeName(b, "input"))
                b.defaultValue = c;
            else
                return ha && ha.set(b, c, a)
        }
    });
    Y || (ha = {
        set: function(b, c, a) {
            var d = b.getAttributeNode(a);
            d || b.setAttributeNode(d = b.ownerDocument.createAttribute(a));
            d.value = c += "";
            if ("value" === a || c === b.getAttribute(a))
                return c
        }
    },
    J.id = J.name = J.coords = function(b, c, a) {
        var d;
        if (!a)
            return (d = b.getAttributeNode(c)) && "" !== d.value ? d.value : null
    }
    ,
    d.valHooks.button = {
        get: function(b, c) {
            if ((b = b.getAttributeNode(c)) && b.specified)
                return b.value
        },
        set: ha.set
    },
    d.attrHooks.contenteditable = {
        set: function(b, c, a) {
            ha.set(b, "" === c ? !1 : c, a)
        }
    },
    d.each(["width", "height"], function(b, c) {
        d.attrHooks[c] = {
            set: function(a, b) {
                if ("" === b)
                    return a.setAttribute(c, "auto"),
                    b
            }
        }
    }));
    u.style || (d.attrHooks.style = {
        get: function(b) {
            return b.style.cssText || void 0
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    var Fa = /^(?:input|select|textarea|button|object)$/i
      , nb = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(b, c) {
            return Z(this, d.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            b = d.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = void 0,
                    delete this[b]
                } catch (c) {}
            })
        }
    });
    d.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(b, c, a) {
            var e, p, h;
            h = b.nodeType;
            if (b && 3 !== h && 8 !== h && 2 !== h) {
                if (h = 1 !== h || !d.isXMLDoc(b))
                    c = d.propFix[c] || c,
                    p = d.propHooks[c];
                return void 0 !== a ? p && "set"in p && void 0 !== (e = p.set(b, a, c)) ? e : b[c] = a : p && "get"in p && null !== (e = p.get(b, c)) ? e : b[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = d.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : Fa.test(b.nodeName) || nb.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        }
    });
    u.hrefNormalized || d.each(["href", "src"], function(b, c) {
        d.propHooks[c] = {
            get: function(a) {
                return a.getAttribute(c, 4)
            }
        }
    });
    u.optSelected || (d.propHooks.selected = {
        get: function(b) {
            if (b = b.parentNode)
                b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex;
            return null
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        d.propFix[this.toLowerCase()] = this
    });
    u.enctype || (d.propFix.enctype = "encoding");
    var Vb = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(b) {
            var c, a, e, p, h, g = 0, k = this.length;
            c = "string" === typeof b && b;
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).addClass(b.call(this, a, this.className))
                });
            if (c)
                for (c = (b || "").match(qa) || []; g < k; g++)
                    if (a = this[g],
                    e = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(Vb, " ") : " ")) {
                        for (h = 0; p = c[h++]; )
                            0 > e.indexOf(" " + p + " ") && (e += p + " ");
                        e = d.trim(e);
                        a.className !== e && (a.className = e)
                    }
            return this
        },
        removeClass: function(b) {
            var c, a, e, p, h, g = 0, k = this.length;
            c = 0 === arguments.length || "string" === typeof b && b;
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).removeClass(b.call(this, a, this.className))
                });
            if (c)
                for (c = (b || "").match(qa) || []; g < k; g++)
                    if (a = this[g],
                    e = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(Vb, " ") : "")) {
                        for (h = 0; p = c[h++]; )
                            for (; 0 <= e.indexOf(" " + p + " "); )
                                e = e.replace(" " + p + " ", " ");
                        e = b ? d.trim(e) : "";
                        a.className !== e && (a.className = e)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var a = typeof b;
            return "boolean" === typeof c && "string" === a ? c ? this.addClass(b) : this.removeClass(b) : d.isFunction(b) ? this.each(function(a) {
                d(this).toggleClass(b.call(this, a, this.className, c), c)
            }) : this.each(function() {
                if ("string" === a)
                    for (var c, e = 0, h = d(this), g = b.match(qa) || []; c = g[e++]; )
                        h.hasClass(c) ? h.removeClass(c) : h.addClass(c);
                else if ("undefined" === a || "boolean" === a)
                    this.className && d._data(this, "__className__", this.className),
                    this.className = this.className || !1 === b ? "" : d._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, a = this.length; c < a; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Vb, " ").indexOf(b))
                    return !0;
            return !1
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        d.fn[c] = function(a, b) {
            return 0 < arguments.length ? this.on(c, null, a, b) : this.trigger(c)
        }
    });
    d.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        },
        bind: function(b, c, a) {
            return this.on(b, null, c, a)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, a, d) {
            return this.on(c, b, a, d)
        },
        undelegate: function(b, c, a) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", a)
        }
    });
    var Wb = d.now()
      , Xa = /\?/
      , Xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function(b) {
        if (q.JSON && q.JSON.parse)
            return q.JSON.parse(b + "");
        var c, a = null, e = d.trim(b + "");
        return e && !d.trim(e.replace(Xb, function(b, d, e, f) {
            c && d && (a = 0);
            if (0 === a)
                return b;
            c = e || d;
            a += !f - !e;
            return ""
        })) ? Function("return " + e)() : d.error("Invalid JSON: " + b)
    }
    ;
    d.parseXML = function(b) {
        var c, a;
        if (!b || "string" !== typeof b)
            return null;
        try {
            q.DOMParser ? (a = new DOMParser,
            c = a.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        c && c.documentElement && !c.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + b);
        return c
    }
    ;
    var U, xa, Ga = /#.*$/, sa = /([?&])_=[^&]*/, Nc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, sc = /^(?:GET|HEAD)$/, Oc = /^\/\//, tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, uc = {}, ob = {}, Yb = "*/".concat("*");
    try {
        xa = location.href
    } catch (b) {
        xa = x.createElement("a"),
        xa.href = "",
        xa = xa.href
    }
    U = tc.exec(xa.toLowerCase()) || [];
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(U[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? fb(fb(b, d.ajaxSettings), c) : fb(d.ajaxSettings, b)
        },
        ajaxPrefilter: cc(uc),
        ajaxTransport: cc(ob),
        ajax: function(b, c) {
            function a(a, b, c, e) {
                var f, m, w, z;
                z = b;
                if (2 !== E) {
                    E = 2;
                    g && clearTimeout(g);
                    l = void 0;
                    h = e || "";
                    A.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        w = n;
                        for (var J = A, N, M, F, C, K = w.contents, D = w.dataTypes; "*" === D[0]; )
                            D.shift(),
                            void 0 === M && (M = w.mimeType || J.getResponseHeader("Content-Type"));
                        if (M)
                            for (C in K)
                                if (K[C] && K[C].test(M)) {
                                    D.unshift(C);
                                    break
                                }
                        if (D[0]in c)
                            F = D[0];
                        else {
                            for (C in c) {
                                if (!D[0] || w.converters[C + " " + D[0]]) {
                                    F = C;
                                    break
                                }
                                N || (N = C)
                            }
                            F = F || N
                        }
                        F ? (F !== D[0] && D.unshift(F),
                        w = c[F]) : w = void 0
                    }
                    a: {
                        c = n;
                        N = w;
                        M = A;
                        F = e;
                        var O, H, Q, J = {}, K = c.dataTypes.slice();
                        if (K[1])
                            for (H in c.converters)
                                J[H.toLowerCase()] = c.converters[H];
                        for (C = K.shift(); C; )
                            if (c.responseFields[C] && (M[c.responseFields[C]] = N),
                            !Q && F && c.dataFilter && (N = c.dataFilter(N, c.dataType)),
                            Q = C,
                            C = K.shift())
                                if ("*" === C)
                                    C = Q;
                                else if ("*" !== Q && Q !== C) {
                                    H = J[Q + " " + C] || J["* " + C];
                                    if (!H)
                                        for (O in J)
                                            if (w = O.split(" "),
                                            w[1] === C && (H = J[Q + " " + w[0]] || J["* " + w[0]])) {
                                                !0 === H ? H = J[O] : !0 !== J[O] && (C = w[0],
                                                K.unshift(w[1]));
                                                break
                                            }
                                    if (!0 !== H)
                                        if (H && c["throws"])
                                            N = H(N);
                                        else
                                            try {
                                                N = H(N)
                                            } catch (I) {
                                                w = {
                                                    state: "parsererror",
                                                    error: H ? I : "No conversion from " + Q + " to " + C
                                                };
                                                break a
                                            }
                                }
                        w = {
                            state: "success",
                            data: N
                        }
                    }
                    if (e)
                        n.ifModified && ((z = A.getResponseHeader("Last-Modified")) && (d.lastModified[p] = z),
                        (z = A.getResponseHeader("etag")) && (d.etag[p] = z)),
                        204 === a || "HEAD" === n.type ? z = "nocontent" : 304 === a ? z = "notmodified" : (z = w.state,
                        f = w.data,
                        m = w.error,
                        e = !m);
                    else if (m = z,
                    a || !z)
                        z = "error",
                        0 > a && (a = 0);
                    A.status = a;
                    A.statusText = (b || z) + "";
                    e ? u.resolveWith(q, [f, z, A]) : u.rejectWith(q, [A, z, m]);
                    A.statusCode(x);
                    x = void 0;
                    k && r.trigger(e ? "ajaxSuccess" : "ajaxError", [A, n, e ? f : m]);
                    v.fireWith(q, [A, z]);
                    k && (r.trigger("ajaxComplete", [A, n]),
                    --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof b && (c = b,
            b = void 0);
            c = c || {};
            var e, p, h, g, k, l, m, n = d.ajaxSetup({}, c), q = n.context || n, r = n.context && (q.nodeType || q.jquery) ? d(q) : d.event, u = d.Deferred(), v = d.Callbacks("once memory"), x = n.statusCode || {}, w = {}, z = {}, E = 0, J = "canceled", A = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === E) {
                        if (!m)
                            for (m = {}; b = Nc.exec(h); )
                                m[b[1].toLowerCase()] = b[2];
                        b = m[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? h : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    E || (a = z[c] = z[c] || a,
                    w[a] = b);
                    return this
                },
                overrideMimeType: function(a) {
                    E || (n.mimeType = a);
                    return this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > E)
                            for (b in a)
                                x[b] = [x[b], a[b]];
                        else
                            A.always(a[A.status]);
                    return this
                },
                abort: function(b) {
                    b = b || J;
                    l && l.abort(b);
                    a(0, b);
                    return this
                }
            };
            u.promise(A).complete = v.add;
            A.success = A.done;
            A.error = A.fail;
            n.url = ((b || n.url || xa) + "").replace(Ga, "").replace(Oc, U[1] + "//");
            n.type = c.method || c.type || n.method || n.type;
            n.dataTypes = d.trim(n.dataType || "*").toLowerCase().match(qa) || [""];
            null == n.crossDomain && (b = tc.exec(n.url.toLowerCase()),
            n.crossDomain = !(!b || b[1] === U[1] && b[2] === U[2] && (b[3] || ("http:" === b[1] ? "80" : "443")) === (U[3] || ("http:" === U[1] ? "80" : "443"))));
            n.data && n.processData && "string" !== typeof n.data && (n.data = d.param(n.data, n.traditional));
            Kb(uc, n, c, A);
            if (2 === E)
                return A;
            (k = n.global) && 0 === d.active++ && d.event.trigger("ajaxStart");
            n.type = n.type.toUpperCase();
            n.hasContent = !sc.test(n.type);
            p = n.url;
            n.hasContent || (n.data && (p = n.url += (Xa.test(p) ? "&" : "?") + n.data,
            delete n.data),
            !1 === n.cache && (n.url = sa.test(p) ? p.replace(sa, "$1_=" + Wb++) : p + (Xa.test(p) ? "&" : "?") + "_=" + Wb++));
            n.ifModified && (d.lastModified[p] && A.setRequestHeader("If-Modified-Since", d.lastModified[p]),
            d.etag[p] && A.setRequestHeader("If-None-Match", d.etag[p]));
            (n.data && n.hasContent && !1 !== n.contentType || c.contentType) && A.setRequestHeader("Content-Type", n.contentType);
            A.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Yb + "; q=0.01" : "") : n.accepts["*"]);
            for (e in n.headers)
                A.setRequestHeader(e, n.headers[e]);
            if (n.beforeSend && (!1 === n.beforeSend.call(q, A, n) || 2 === E))
                return A.abort();
            J = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                A[e](n[e]);
            if (l = Kb(ob, n, c, A)) {
                A.readyState = 1;
                k && r.trigger("ajaxSend", [A, n]);
                n.async && 0 < n.timeout && (g = setTimeout(function() {
                    A.abort("timeout")
                }, n.timeout));
                try {
                    E = 1,
                    l.send(w, a)
                } catch (G) {
                    if (2 > E)
                        a(-1, G);
                    else
                        throw G;
                }
            } else
                a(-1, "No Transport");
            return A
        },
        getJSON: function(b, c, a) {
            return d.get(b, c, a, "json")
        },
        getScript: function(b, c) {
            return d.get(b, void 0, c, "script")
        }
    });
    d.each(["get", "post"], function(b, c) {
        d[c] = function(a, b, e, h) {
            d.isFunction(b) && (h = h || e,
            e = b,
            b = void 0);
            return d.ajax({
                url: a,
                type: c,
                dataType: h,
                data: b,
                success: e
            })
        }
    });
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        d.fn[c] = function(a) {
            return this.on(c, a)
        }
    });
    d._evalUrl = function(b) {
        return d.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    d.fn.extend({
        wrapAll: function(b) {
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).wrapAll(b.call(this, a))
                });
            if (this[0]) {
                var c = d(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return d.isFunction(b) ? this.each(function(c) {
                d(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = d(this)
                  , a = c.contents();
                a.length ? a.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = d.isFunction(b);
            return this.each(function(a) {
                d(this).wrapAll(c ? b.call(this, a) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(b) {
        return 0 >= b.offsetWidth && 0 >= b.offsetHeight || !u.reliableHiddenOffsets() && "none" === (b.style && b.style.display || d.css(b, "display"))
    }
    ;
    d.expr.filters.visible = function(b) {
        return !d.expr.filters.hidden(b)
    }
    ;
    var Lb = /%20/g
      , vc = /\[\]$/
      , wc = /\r?\n/g
      , Cc = /^(?:submit|button|image|reset|file)$/i
      , xc = /^(?:input|select|textarea|keygen)/i;
    d.param = function(b, c) {
        var a, e = [], p = function(a, b) {
            b = d.isFunction(b) ? b() : null == b ? "" : b;
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        void 0 === c && (c = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(b) || b.jquery && !d.isPlainObject(b))
            d.each(b, function() {
                p(this.name, this.value)
            });
        else
            for (a in b)
                gb(a, b[a], c, p);
        return e.join("&").replace(Lb, "+")
    }
    ;
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = d.prop(this, "elements");
                return b ? d.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !d(this).is(":disabled") && xc.test(this.nodeName) && !Cc.test(b) && (this.checked || !fa.test(b))
            }).map(function(b, c) {
                b = d(this).val();
                return null == b ? null : d.isArray(b) ? d.map(b, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(wc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(wc, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = void 0 !== q.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && hb()))
            a: {
                try {
                    b = new q.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (c) {}
                b = void 0
            }
        return b
    }
    : hb;
    var Pc = 0
      , pb = {}
      , qb = d.ajaxSettings.xhr();
    if (q.ActiveXObject)
        d(q).on("unload", function() {
            for (var b in pb)
                pb[b](void 0, !0)
        });
    u.cors = !!qb && "withCredentials"in qb;
    (qb = u.ajax = !!qb) && d.ajaxTransport(function(b) {
        if (!b.crossDomain || u.cors) {
            var c;
            return {
                send: function(a, e) {
                    var p, h = b.xhr(), g = ++Pc;
                    h.open(b.type, b.url, b.async, b.username, b.password);
                    if (b.xhrFields)
                        for (p in b.xhrFields)
                            h[p] = b.xhrFields[p];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType);
                    b.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                    for (p in a)
                        void 0 !== a[p] && h.setRequestHeader(p, a[p] + "");
                    h.send(b.hasContent && b.data || null);
                    c = function(a, l) {
                        var m, n, p;
                        if (c && (l || 4 === h.readyState))
                            if (delete pb[g],
                            c = void 0,
                            h.onreadystatechange = d.noop,
                            l)
                                4 !== h.readyState && h.abort();
                            else {
                                p = {};
                                m = h.status;
                                "string" === typeof h.responseText && (p.text = h.responseText);
                                try {
                                    n = h.statusText
                                } catch (q) {
                                    n = ""
                                }
                                m || !b.isLocal || b.crossDomain ? 1223 === m && (m = 204) : m = p.text ? 200 : 404
                            }
                        p && e(m, n, p, h.getAllResponseHeaders())
                    }
                    ;
                    b.async ? 4 === h.readyState ? setTimeout(c) : h.onreadystatechange = pb[g] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(b) {
                d.globalEval(b);
                return b
            }
        }
    });
    d.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET",
        b.global = !1)
    });
    d.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, a = x.head || d("head")[0] || x.documentElement;
            return {
                send: function(d, e) {
                    c = x.createElement("script");
                    c.async = !0;
                    b.scriptCharset && (c.charset = b.scriptCharset);
                    c.src = b.url;
                    c.onload = c.onreadystatechange = function(a, b) {
                        if (b || !c.readyState || /loaded|complete/.test(c.readyState))
                            c.onload = c.onreadystatechange = null,
                            c.parentNode && c.parentNode.removeChild(c),
                            c = null,
                            b || e(200, "success")
                    }
                    ;
                    a.insertBefore(c, a.firstChild)
                },
                abort: function() {
                    if (c)
                        c.onload(void 0, !0)
                }
            }
        }
    });
    var Ya = []
      , Na = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = Ya.pop() || d.expando + "_" + Wb++;
            this[b] = !0;
            return b
        }
    });
    d.ajaxPrefilter("json jsonp", function(b, c, a) {
        var e, p, h, g = !1 !== b.jsonp && (Na.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Na.test(b.data) && "data");
        if (g || "jsonp" === b.dataTypes[0])
            return e = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            g ? b[g] = b[g].replace(Na, "$1" + e) : !1 !== b.jsonp && (b.url += (Xa.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                h || d.error(e + " was not called");
                return h[0]
            }
            ,
            b.dataTypes[0] = "json",
            p = q[e],
            q[e] = function() {
                h = arguments
            }
            ,
            a.always(function() {
                q[e] = p;
                b[e] && (b.jsonpCallback = c.jsonpCallback,
                Ya.push(e));
                h && d.isFunction(p) && p(h[0]);
                h = p = void 0
            }),
            "script"
    });
    d.parseHTML = function(b, c, a) {
        if (!b || "string" !== typeof b)
            return null;
        "boolean" === typeof c && (a = c,
        c = !1);
        c = c || x;
        var e = Da.exec(b);
        a = !a && [];
        if (e)
            return [c.createElement(e[1])];
        e = d.buildFragment([b], c, a);
        a && a.length && d(a).remove();
        return d.merge([], e.childNodes)
    }
    ;
    var Zb = d.fn.load;
    d.fn.load = function(b, c, a) {
        if ("string" !== typeof b && Zb)
            return Zb.apply(this, arguments);
        var e, p, h, g = this, k = b.indexOf(" ");
        0 <= k && (e = b.slice(k, b.length),
        b = b.slice(0, k));
        d.isFunction(c) ? (a = c,
        c = void 0) : c && "object" === typeof c && (h = "POST");
        0 < g.length && d.ajax({
            url: b,
            type: h,
            dataType: "html",
            data: c
        }).done(function(a) {
            p = arguments;
            g.html(e ? d("<div>").append(d.parseHTML(a)).find(e) : a)
        }).complete(a && function(b, c) {
            g.each(a, p || [b.responseText, c, b])
        }
        );
        return this
    }
    ;
    d.expr.filters.animated = function(b) {
        return d.grep(d.timers, function(c) {
            return b === c.elem
        }).length
    }
    ;
    var rb = q.document.documentElement;
    d.offset = {
        setOffset: function(b, c, a) {
            var e, p, h, g = d.css(b, "position"), k = d(b), l = {};
            "static" === g && (b.style.position = "relative");
            h = k.offset();
            p = d.css(b, "top");
            e = d.css(b, "left");
            ("absolute" === g || "fixed" === g) && -1 < d.inArray("auto", [p, e]) ? (e = k.position(),
            p = e.top,
            e = e.left) : (p = parseFloat(p) || 0,
            e = parseFloat(e) || 0);
            d.isFunction(c) && (c = c.call(b, a, h));
            null != c.top && (l.top = c.top - h.top + p);
            null != c.left && (l.left = c.left - h.left + e);
            "using"in c ? c.using.call(b, l) : k.css(l)
        }
    };
    d.fn.extend({
        offset: function(b) {
            if (arguments.length)
                return void 0 === b ? this : this.each(function(a) {
                    d.offset.setOffset(this, b, a)
                });
            var c, a, e = {
                top: 0,
                left: 0
            }, p = (a = this[0]) && a.ownerDocument;
            if (p) {
                c = p.documentElement;
                if (!d.contains(c, a))
                    return e;
                "undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
                a = ib(p);
                return {
                    top: e.top + (a.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                    left: e.left + (a.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var b, c, a = {
                    top: 0,
                    left: 0
                }, e = this[0];
                "fixed" === d.css(e, "position") ? c = e.getBoundingClientRect() : (b = this.offsetParent(),
                c = this.offset(),
                d.nodeName(b[0], "html") || (a = b.offset()),
                a.top += d.css(b[0], "borderTopWidth", !0),
                a.left += d.css(b[0], "borderLeftWidth", !0));
                return {
                    top: c.top - a.top - d.css(e, "marginTop", !0),
                    left: c.left - a.left - d.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || rb; b && !d.nodeName(b, "html") && "static" === d.css(b, "position"); )
                    b = b.offsetParent;
                return b || rb
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var a = /Y/.test(c);
        d.fn[b] = function(e) {
            return Z(this, function(b, e, f) {
                var k = ib(b);
                if (void 0 === f)
                    return k ? c in k ? k[c] : k.document.documentElement[e] : b[e];
                k ? k.scrollTo(a ? d(k).scrollLeft() : f, a ? f : d(k).scrollTop()) : b[e] = f
            }, b, e, arguments.length, null)
        }
    });
    d.each(["top", "left"], function(b, c) {
        d.cssHooks[c] = Bb(u.pixelPosition, function(a, b) {
            if (b)
                return b = W(a, c),
                Qa.test(b) ? d(a).position()[c] + "px" : b
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        d.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(a, e) {
            d.fn[e] = function(e, f) {
                var g = arguments.length && (a || "boolean" !== typeof e)
                  , k = a || (!0 === e || !0 === f ? "margin" : "border");
                return Z(this, function(a, c, e) {
                    return d.isWindow(a) ? a.document.documentElement["client" + b] : 9 === a.nodeType ? (c = a.documentElement,
                    Math.max(a.body["scroll" + b], c["scroll" + b], a.body["offset" + b], c["offset" + b], c["client" + b])) : void 0 === e ? d.css(a, c, k) : d.style(a, c, e, k)
                }, c, g ? e : void 0, g, null)
            }
        })
    });
    d.fn.size = function() {
        return this.length
    }
    ;
    d.fn.andSelf = d.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var yc = q.jQuery
      , zc = q.$;
    d.noConflict = function(b) {
        q.$ === d && (q.$ = zc);
        b && q.jQuery === d && (q.jQuery = yc);
        return d
    }
    ;
    "undefined" === typeof E && (q.jQuery = q.$ = d);
    return d
});
