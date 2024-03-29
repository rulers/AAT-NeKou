// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {}, p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        }, q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        }, _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(x(e), n)
            })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
            w = e.document,
            T = 0,
            C = 0,
            N = st(),
            k = st(),
            E = st(),
            S = !1,
            A = function(e, t) {
                return e === t ? (S = !0, 0) : 0
            }, j = typeof t,
            D = 1 << 31,
            L = {}.hasOwnProperty,
            H = [],
            q = H.pop,
            _ = H.push,
            M = H.push,
            O = H.slice,
            F = H.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            W = R.replace("w", "w#"),
            $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
            z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            X = RegExp("^" + P + "*," + P + "*"),
            U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            V = RegExp(P + "*[+~]"),
            Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
            J = RegExp(I),
            G = RegExp("^" + W + "$"),
            Q = {
                ID: RegExp("^#(" + R + ")"),
                CLASS: RegExp("^\\.(" + R + ")"),
                TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + $),
                PSEUDO: RegExp("^" + I),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: RegExp("^(?:" + B + ")$", "i"),
                needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            nt = /'|\\/g,
            rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            it = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h && !i) {
                if (o = Z.exec(e))
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s), !a || !a.parentNode) return n;
                            if (a.id === s) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                    } else {
                        if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                    }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--) c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }
            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function(t) {
                return t = +t, lt(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w,
                i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }), r.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function(e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a) return pt(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function(e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (i) {}
            return at(t, f, null, [e]).length > 0
        }, at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()],
                a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) t === e[o] && (i = n.push(o));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t),
                            a = o.length;
                        while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = [],
                        n = [],
                        r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) o.pseudos[n] = dt(n);

        function gt() {}
        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) return l === !0
                            } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [],
                s = 0,
                l = e.length,
                u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                var u, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : xt(g, f, e, s, l),
                    y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length,
                a = o.relative[e[0].type],
                s = a || o.relative[" "],
                l = a ? 1 : 0,
                c = vt(function(e) {
                    return e === t
                }, s, !0),
                p = vt(function(e) {
                    return F.call(t, e) > -1
                }, s, !0),
                f = [
                    function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                ];
            for (; i > l; l++)
                if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                        for (r = ++l; i > r; r++)
                            if (o.relative[e[r].type]) break;
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0,
                r = t.length > 0,
                a = e.length > 0,
                s = function(s, l, c, p, d) {
                    var h, g, m, y = [],
                        v = 0,
                        b = "0",
                        x = s && [],
                        w = null != d,
                        C = u,
                        N = s || a && o.find.TAG("*", d && l.parentNode || l),
                        k = T += null == C ? 1 : Math.random() || .1;
                    for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                        if (a && h) {
                            g = 0;
                            while (m = e[g++])
                                if (m(h, l, c)) {
                                    p.push(h);
                                    break
                                }
                            w && (T = k, i = ++n)
                        }
                        r && ((h = !m && h) && v--, s && x.push(h))
                    }
                    if (v += b, r && b !== v) {
                        g = 0;
                        while (m = t[g++]) m(x, y, l, c);
                        if (s) {
                            if (v > 0)
                                while (b--) x[b] || y[b] || (y[b] = q.call(p));
                            y = xt(y)
                        }
                        M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                    }
                    return w && (T = k, u = C), x
                };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };

        function Nt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }
        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            }, p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                ["notify", "progress", x.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! o.value, t.optSelected = u.selected, t.enctype = !! a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !! e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
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
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
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
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {}, y = {}, v = {}, b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !! Rn && "withCredentials" in Rn, Rn = x.support.ajax = !! Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Yn.exec(t),
                        o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                        a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {}, p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            }, a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);

// three.js - http://github.com/mrdoob/three.js
'use strict';
var THREE = {
    REVISION: "63"
};
self.console = self.console || {
    info: function() {},
    log: function() {},
    debug: function() {},
    warn: function() {},
    error: function() {}
};
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
};
THREE.extend = function(a, b) {
    if (Object.keys)
        for (var c = Object.keys(b), d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(b, f))
        } else
            for (f in c = {}.hasOwnProperty, b) c.call(b, f) && (a[f] = b[f]);
    return a
};
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !self.requestAnimationFrame; ++c) self.requestAnimationFrame = self[b[c] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[b[c] + "CancelAnimationFrame"] || self[b[c] + "CancelRequestAnimationFrame"];
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function(b) {
        var c = Date.now(),
            f = Math.max(0, 16 - (c - a)),
            h = self.setTimeout(function() {
                b(c + f)
            }, f);
        a = c + f;
        return h
    });
    void 0 === self.cancelAnimationFrame && void 0 !==
        self.clearTimeout && (self.cancelAnimationFrame = function(a) {
            self.clearTimeout(a)
        })
})();
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function() {};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Color = function(a) {
    void 0 !== a && this.set(a);
    return this
};
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(a) {
        a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
        return this
    },
    setHex: function(a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    },
    setRGB: function(a, b, c) {
        this.r = a;
        this.g = b;
        this.b = c;
        return this
    },
    setHSL: function(a, b, c) {
        if (0 === b) this.r = this.g = this.b = c;
        else {
            var d = function(a, b, c) {
                0 > c && (c += 1);
                1 < c && (c -= 1);
                return c < 1 / 6 ? a + 6 * (b - a) *
                    c : 0.5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
            }, b = 0.5 >= c ? c * (1 + b) : c + b - c * b,
                c = 2 * c - b;
            this.r = d(c, b, a + 1 / 3);
            this.g = d(c, b, a);
            this.b = d(c, b, a - 1 / 3)
        }
        return this
    },
    setStyle: function(a) {
        if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a)) return a = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a), this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, this;
        if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a)) return a = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a), this.r =
            Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, this;
        if (/^\#([0-9a-f]{6})$/i.test(a)) return a = /^\#([0-9a-f]{6})$/i.exec(a), this.setHex(parseInt(a[1], 16)), this;
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a), this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)), this;
        if (/^(\w+)$/i.test(a)) return this.setHex(THREE.ColorKeywords[a]), this
    },
    copy: function(a) {
        this.r = a.r;
        this.g =
            a.g;
        this.b = a.b;
        return this
    },
    copyGammaToLinear: function(a) {
        this.r = a.r * a.r;
        this.g = a.g * a.g;
        this.b = a.b * a.b;
        return this
    },
    copyLinearToGamma: function(a) {
        this.r = Math.sqrt(a.r);
        this.g = Math.sqrt(a.g);
        this.b = Math.sqrt(a.b);
        return this
    },
    convertGammaToLinear: function() {
        var a = this.r,
            b = this.g,
            c = this.b;
        this.r = a * a;
        this.g = b * b;
        this.b = c * c;
        return this
    },
    convertLinearToGamma: function() {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g <<
            8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function() {
        var a = {
            h: 0,
            s: 0,
            l: 0
        };
        return function() {
            var b = this.r,
                c = this.g,
                d = this.b,
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                h, g = (f + e) / 2;
            if (f === e) f = h = 0;
            else {
                var i = e - f,
                    f = 0.5 >= g ? i / (e + f) : i / (2 - e - f);
                switch (e) {
                    case b:
                        h = (c - d) / i + (c < d ? 6 : 0);
                        break;
                    case c:
                        h = (d - b) / i + 2;
                        break;
                    case d:
                        h = (b - c) / i + 4
                }
                h /= 6
            }
            a.h = h;
            a.s = f;
            a.l = g;
            return a
        }
    }(),
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(a, b, c) {
        var d = this.getHSL();
        d.h += a;
        d.s += b;
        d.l += c;
        this.setHSL(d.h, d.s, d.l);
        return this
    },
    add: function(a) {
        this.r += a.r;
        this.g += a.g;
        this.b += a.b;
        return this
    },
    addColors: function(a, b) {
        this.r = a.r + b.r;
        this.g = a.g + b.g;
        this.b = a.b + b.b;
        return this
    },
    addScalar: function(a) {
        this.r += a;
        this.g += a;
        this.b += a;
        return this
    },
    multiply: function(a) {
        this.r *= a.r;
        this.g *= a.g;
        this.b *= a.b;
        return this
    },
    multiplyScalar: function(a) {
        this.r *= a;
        this.g *= a;
        this.b *= a;
        return this
    },
    lerp: function(a, b) {
        this.r += (a.r - this.r) * b;
        this.g +=
            (a.g - this.g) * b;
        this.b += (a.b - this.b) * b;
        return this
    },
    equals: function(a) {
        return a.r === this.r && a.g === this.g && a.b === this.b
    },
    fromArray: function(a) {
        this.r = a[0];
        this.g = a[1];
        this.b = a[2];
        return this
    },
    toArray: function() {
        return [this.r, this.g, this.b]
    },
    clone: function() {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
};
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
THREE.Quaternion = function(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    _x: 0,
    _y: 0,
    _z: 0,
    _w: 0,
    _euler: void 0,
    _updateEuler: function() {
        void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1)
    },
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a;
        this._updateEuler()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a;
        this._updateEuler()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a;
        this._updateEuler()
    },
    get w() {
        return this._w
    },
    set w(a) {
        this._w = a;
        this._updateEuler()
    },
    set: function(a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._w = d;
        this._updateEuler();
        return this
    },
    copy: function(a) {
        this._x = a._x;
        this._y = a._y;
        this._z = a._z;
        this._w = a._w;
        this._updateEuler();
        return this
    },
    setFromEuler: function(a, b) {
        if (!1 === a instanceof THREE.Euler) throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
        var c = Math.cos(a._x / 2),
            d = Math.cos(a._y / 2),
            e = Math.cos(a._z / 2),
            f = Math.sin(a._x / 2),
            h = Math.sin(a._y / 2),
            g = Math.sin(a._z / 2);
        "XYZ" === a.order ? (this._x = f * d * e + c * h * g, this._y = c * h *
            e - f * d * g, this._z = c * d * g + f * h * e, this._w = c * d * e - f * h * g) : "YXZ" === a.order ? (this._x = f * d * e + c * h * g, this._y = c * h * e - f * d * g, this._z = c * d * g - f * h * e, this._w = c * d * e + f * h * g) : "ZXY" === a.order ? (this._x = f * d * e - c * h * g, this._y = c * h * e + f * d * g, this._z = c * d * g + f * h * e, this._w = c * d * e - f * h * g) : "ZYX" === a.order ? (this._x = f * d * e - c * h * g, this._y = c * h * e + f * d * g, this._z = c * d * g - f * h * e, this._w = c * d * e + f * h * g) : "YZX" === a.order ? (this._x = f * d * e + c * h * g, this._y = c * h * e + f * d * g, this._z = c * d * g - f * h * e, this._w = c * d * e - f * h * g) : "XZY" === a.order && (this._x = f * d * e - c * h * g, this._y = c * h * e - f * d * g, this._z =
            c * d * g + f * h * e, this._w = c * d * e + f * h * g);
        !1 !== b && this._updateEuler();
        return this
    },
    setFromAxisAngle: function(a, b) {
        var c = b / 2,
            d = Math.sin(c);
        this._x = a.x * d;
        this._y = a.y * d;
        this._z = a.z * d;
        this._w = Math.cos(c);
        this._updateEuler();
        return this
    },
    setFromRotationMatrix: function(a) {
        var b = a.elements,
            c = b[0],
            a = b[4],
            d = b[8],
            e = b[1],
            f = b[5],
            h = b[9],
            g = b[2],
            i = b[6],
            b = b[10],
            k = c + f + b;
        0 < k ? (c = 0.5 / Math.sqrt(k + 1), this._w = 0.25 / c, this._x = (i - h) * c, this._y = (d - g) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (i - h) / c, this._x = 0.25 * c,
            this._y = (a + e) / c, this._z = (d + g) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - g) / c, this._x = (a + e) / c, this._y = 0.25 * c, this._z = (h + i) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + g) / c, this._y = (h + i) / c, this._z = 0.25 * c);
        this._updateEuler();
        return this
    },
    inverse: function() {
        this.conjugate().normalize();
        return this
    },
    conjugate: function() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._updateEuler();
        return this
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x *
            this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var a = this.length();
        0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
        return this
    },
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    },
    multiplyQuaternions: function(a, b) {
        var c = a._x,
            d = a._y,
            e = a._z,
            f =
                a._w,
            h = b._x,
            g = b._y,
            i = b._z,
            k = b._w;
        this._x = c * k + f * h + d * i - e * g;
        this._y = d * k + f * g + e * h - c * i;
        this._z = e * k + f * i + c * g - d * h;
        this._w = f * k - c * h - d * g - e * i;
        this._updateEuler();
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    },
    slerp: function(a, b) {
        var c = this._x,
            d = this._y,
            e = this._z,
            f = this._w,
            h = f * a._w + c * a._x + d * a._y + e * a._z;
        0 > h ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, h = -h) : this.copy(a);
        if (1 <= h) return this._w = f, this._x = c, this._y = d, this._z = e, this;
        var g = Math.acos(h),
            i = Math.sqrt(1 - h * h);
        if (0.0010 > Math.abs(i)) return this._w = 0.5 * (f + this._w), this._x = 0.5 * (c + this._x), this._y = 0.5 * (d + this._y), this._z = 0.5 * (e + this._z), this;
        h = Math.sin((1 - b) * g) / i;
        g = Math.sin(b * g) / i;
        this._w = f * h + this._w * g;
        this._x = c * h + this._x * g;
        this._y = d * h + this._y * g;
        this._z = e * h + this._z * g;
        this._updateEuler();
        return this
    },
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
    },
    fromArray: function(a) {
        this._x = a[0];
        this._y = a[1];
        this._z = a[2];
        this._w = a[3];
        this._updateEuler();
        return this
    },
    toArray: function() {
        return [this._x, this._y, this._z, this._w]
    },
    clone: function() {
        return new THREE.Quaternion(this._x, this._y, this._z, this._w)
    }
};
THREE.Quaternion.slerp = function(a, b, c, d) {
    return c.copy(a).slerp(b, d)
};
THREE.Vector2 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function(a, b) {
        this.x = a;
        this.y = b;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    add: function(a,
        b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -=
            a.y;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (a = 1 / a, this.x *= a, this.y *= a) : this.y = this.x = 0;
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x = a.x);
        this.y > a.y && (this.y = a.y);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y = a.y);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x,
            a = this.y - a.y;
        return b * b + a * a
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a /
            b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y
    },
    fromArray: function(a) {
        this.x = a[0];
        this.y = a[1];
        return this
    },
    toArray: function() {
        return [this.x, this.y]
    },
    clone: function() {
        return new THREE.Vector2(this.x, this.y)
    }
};
THREE.Vector3 = function(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " +
                    a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },
    multiply: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    multiplyVectors: function(a, b) {
        this.x = a.x *
            b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this
    },
    applyMatrix3: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[3] * c + a[6] * d;
        this.y = a[1] * b + a[4] * c + a[7] * d;
        this.z = a[2] * b + a[5] * c + a[8] * d;
        return this
    },
    applyMatrix4: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
        return this
    },
    applyProjection: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements,
            e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
        this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
        this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
        this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
        return this
    },
    applyQuaternion: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            e = a.x,
            f = a.y,
            h = a.z,
            a = a.w,
            g = a * b + f * d - h * c,
            i = a * c + h * b - e * d,
            k = a * d + e * c - f * b,
            b = -e * b - f * c - h * d;
        this.x = g * a + b * -e + i * -h - k * -f;
        this.y = i * a + b * -f + k * -e - g * -h;
        this.z = k * a + b * -h + g * -f - i * -e;
        return this
    },
    transformDirection: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d;
        this.y = a[1] * b + a[5] * c + a[9] * d;
        this.z = a[2] *
            b + a[6] * c + a[10] * d;
        this.normalize();
        return this
    },
    divide: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x = a.x);
        this.y > a.y && (this.y = a.y);
        this.z > a.z && (this.z = a.z);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y = a.y);
        this.z < a.z && (this.z = a.z);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y <
            a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a / b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        return this
    },
    cross: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
        var c = this.x,
            d = this.y,
            e = this.z;
        this.x = d * a.z - e * a.y;
        this.y = e * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    },
    crossVectors: function(a, b) {
        var c =
            a.x,
            d = a.y,
            e = a.z,
            f = b.x,
            h = b.y,
            g = b.z;
        this.x = d * g - e * h;
        this.y = e * f - c * g;
        this.z = c * h - d * f;
        return this
    },
    angleTo: function(a) {
        a = this.dot(a) / (this.length() * a.length());
        return Math.acos(THREE.Math.clamp(a, -1, 1))
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x,
            c = this.y - a.y,
            a = this.z - a.z;
        return b * b + c * c + a * a
    },
    setEulerFromRotationMatrix: function() {
        console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")
    },
    setEulerFromQuaternion: function() {
        console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")
    },
    getPositionFromMatrix: function(a) {
        this.x = a.elements[12];
        this.y = a.elements[13];
        this.z = a.elements[14];
        return this
    },
    getScaleFromMatrix: function(a) {
        var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(),
            c = this.set(a.elements[4], a.elements[5], a.elements[6]).length(),
            a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
        this.x = b;
        this.y = c;
        this.z = a;
        return this
    },
    getColumnFromMatrix: function(a, b) {
        var c = 4 * a,
            d = b.elements;
        this.x = d[c];
        this.y = d[c + 1];
        this.z = d[c + 2];
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    },
    fromArray: function(a) {
        this.x = a[0];
        this.y = a[1];
        this.z = a[2];
        return this
    },
    toArray: function() {
        return [this.x, this.y, this.z]
    },
    clone: function() {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
};
THREE.extend(THREE.Vector3.prototype, {
    applyEuler: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            !1 === b instanceof THREE.Euler && console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
            this.applyQuaternion(a.setFromEuler(b));
            return this
        }
    }(),
    applyAxisAngle: function() {
        var a = new THREE.Quaternion;
        return function(b, c) {
            this.applyQuaternion(a.setFromAxisAngle(b, c));
            return this
        }
    }(),
    projectOnVector: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(b).normalize();
            b = this.dot(a);
            return this.copy(a).multiplyScalar(b)
        }
    }(),
    projectOnPlane: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(this).projectOnVector(b);
            return this.sub(a)
        }
    }(),
    reflect: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(this).projectOnVector(b).multiplyScalar(2);
            return this.subVectors(a, this)
        }
    }()
});
THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setW: function(a) {
        this.w = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = void 0 !== a.w ? a.w : 1;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        this.w += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },
    applyMatrix4: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            e = this.w,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
        this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a) : (this.z = this.y = this.x = 0, this.w = 1);
        return this
    },
    setAxisAngleFromQuaternion: function(a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b,
            this.y = a.y / b, this.z = a.z / b);
        return this
    },
    setAxisAngleFromRotationMatrix: function(a) {
        var b, c, d, a = a.elements,
            e = a[0];
        d = a[4];
        var f = a[8],
            h = a[1],
            g = a[5],
            i = a[9];
        c = a[2];
        b = a[6];
        var k = a[10];
        if (0.01 > Math.abs(d - h) && 0.01 > Math.abs(f - c) && 0.01 > Math.abs(i - b)) {
            if (0.1 > Math.abs(d + h) && 0.1 > Math.abs(f + c) && 0.1 > Math.abs(i + b) && 0.1 > Math.abs(e + g + k - 3)) return this.set(1, 0, 0, 0), this;
            a = Math.PI;
            e = (e + 1) / 2;
            g = (g + 1) / 2;
            k = (k + 1) / 2;
            d = (d + h) / 4;
            f = (f + c) / 4;
            i = (i + b) / 4;
            e > g && e > k ? 0.01 > e ? (b = 0, d = c = 0.707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : g > k ? 0.01 > g ?
                (b = 0.707106781, c = 0, d = 0.707106781) : (c = Math.sqrt(g), b = d / c, d = i / c) : 0.01 > k ? (c = b = 0.707106781, d = 0) : (d = Math.sqrt(k), b = f / d, c = i / d);
            this.set(b, c, d, a);
            return this
        }
        a = Math.sqrt((b - i) * (b - i) + (f - c) * (f - c) + (h - d) * (h - d));
        0.0010 > Math.abs(a) && (a = 1);
        this.x = (b - i) / a;
        this.y = (f - c) / a;
        this.z = (h - d) / a;
        this.w = Math.acos((e + g + k - 1) / 2);
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x = a.x);
        this.y > a.y && (this.y = a.y);
        this.z > a.z && (this.z = a.z);
        this.w > a.w && (this.w = a.w);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y =
            a.y);
        this.z < a.z && (this.z = a.z);
        this.w < a.w && (this.w = a.w);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
        this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x *
            this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a / b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        this.w += (a.w - this.w) * b;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z &&
            a.w === this.w
    },
    fromArray: function(a) {
        this.x = a[0];
        this.y = a[1];
        this.z = a[2];
        this.w = a[3];
        return this
    },
    toArray: function() {
        return [this.x, this.y, this.z, this.w]
    },
    clone: function() {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    }
};
THREE.Euler = function(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || THREE.Euler.DefaultOrder
};
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: THREE.Euler.DefaultOrder,
    _quaternion: void 0,
    _updateQuaternion: function() {
        void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1)
    },
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a;
        this._updateQuaternion()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a;
        this._updateQuaternion()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a;
        this._updateQuaternion()
    },
    get order() {
        return this._order
    },
    set order(a) {
        this._order = a;
        this._updateQuaternion()
    },
    set: function(a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._order = d || this._order;
        this._updateQuaternion();
        return this
    },
    copy: function(a) {
        this._x = a._x;
        this._y = a._y;
        this._z = a._z;
        this._order = a._order;
        this._updateQuaternion();
        return this
    },
    setFromRotationMatrix: function(a, b) {
        function c(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var d = a.elements,
            e = d[0],
            f = d[4],
            h = d[8],
            g = d[1],
            i = d[5],
            k = d[9],
            m = d[2],
            l = d[6],
            d = d[10],
            b = b || this._order;
        "XYZ" === b ? (this._y = Math.asin(c(h)), 0.99999 > Math.abs(h) ? (this._x = Math.atan2(-k, d), this._z =
            Math.atan2(-f, e)) : (this._x = Math.atan2(l, i), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(k)), 0.99999 > Math.abs(k) ? (this._y = Math.atan2(h, d), this._z = Math.atan2(g, i)) : (this._y = Math.atan2(-m, e), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(l)), 0.99999 > Math.abs(l) ? (this._y = Math.atan2(-m, d), this._z = Math.atan2(-f, i)) : (this._y = 0, this._z = Math.atan2(g, e))) : "ZYX" === b ? (this._y = Math.asin(-c(m)), 0.99999 > Math.abs(m) ? (this._x = Math.atan2(l, d), this._z = Math.atan2(g, e)) : (this._x = 0, this._z = Math.atan2(-f, i))) : "YZX" === b ? (this._z =
            Math.asin(c(g)), 0.99999 > Math.abs(g) ? (this._x = Math.atan2(-k, i), this._y = Math.atan2(-m, e)) : (this._x = 0, this._y = Math.atan2(h, d))) : "XZY" === b ? (this._z = Math.asin(-c(f)), 0.99999 > Math.abs(f) ? (this._x = Math.atan2(l, i), this._y = Math.atan2(h, e)) : (this._x = Math.atan2(-k, d), this._y = 0)) : console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + b);
        this._order = b;
        this._updateQuaternion();
        return this
    },
    setFromQuaternion: function(a, b, c) {
        function d(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var e = a.x * a.x,
            f =
                a.y * a.y,
            h = a.z * a.z,
            g = a.w * a.w,
            b = b || this._order;
        "XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), g - e - f + h), this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w))), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g + e - f - h)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z))), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g - e - f + h), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g - e + f - h)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z))), this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), g - e - f + h), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g - e + f - h)) : "ZYX" ===
            b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), g - e - f + h), this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z))), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g + e - f - h)) : "YZX" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.z * a.y), g - e + f - h), this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), g + e - f - h), this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w)))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), g - e + f - h), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g + e - f - h), this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y)))) : console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: " +
                b);
        this._order = b;
        !1 !== c && this._updateQuaternion();
        return this
    },
    reorder: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            a.setFromEuler(this);
            this.setFromQuaternion(a, b)
        }
    }(),
    fromArray: function(a) {
        this._x = a[0];
        this._y = a[1];
        this._z = a[2];
        void 0 !== a[3] && (this._order = a[3]);
        this._updateQuaternion();
        return this
    },
    toArray: function() {
        return [this._x, this._y, this._z, this._order]
    },
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
    },
    clone: function() {
        return new THREE.Euler(this._x,
            this._y, this._z, this._order)
    }
};
THREE.Line3 = function(a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3;
    this.end = void 0 !== b ? b : new THREE.Vector3
};
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(a, b) {
        this.start.copy(a);
        this.end.copy(b);
        return this
    },
    copy: function(a) {
        this.start.copy(a.start);
        this.end.copy(a.end);
        return this
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(0.5)
    },
    delta: function(a) {
        return (a || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(a,
        b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    closestPointToPointParameter: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d) {
            a.subVectors(c, this.start);
            b.subVectors(this.end, this.start);
            var e = b.dot(b),
                e = b.dot(a) / e;
            d && (e = THREE.Math.clamp(e, 0, 1));
            return e
        }
    }(),
    closestPointToPoint: function(a, b, c) {
        a = this.closestPointToPointParameter(a, b);
        c = c || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    applyMatrix4: function(a) {
        this.start.applyMatrix4(a);
        this.end.applyMatrix4(a);
        return this
    },
    equals: function(a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    },
    clone: function() {
        return (new THREE.Line3).copy(this)
    }
};
THREE.Box2 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity)
};
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    setFromPoints: function(a) {
        if (0 < a.length) {
            var b = a[0];
            this.min.copy(b);
            this.max.copy(b);
            for (var c = 1, d = a.length; c < d; c++) b = a[c], b.x < this.min.x ? this.min.x = b.x : b.x > this.max.x && (this.max.x = b.x), b.y < this.min.y ? this.min.y = b.y : b.y > this.max.y && (this.max.y = b.y)
        } else this.makeEmpty();
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector2;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(0.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = Infinity;
        this.max.x = this.max.y = -Infinity;
        return this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(a) {
        return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(a) {
        return (a || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(a) {
        return new THREE.Vector2((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
    },
    isIntersectionBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector2;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    },
    clone: function() {
        return (new THREE.Box2).copy(this)
    }
};
THREE.Box3 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
};
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    addPoint: function(a) {
        a.x < this.min.x ? this.min.x = a.x : a.x > this.max.x && (this.max.x = a.x);
        a.y < this.min.y ? this.min.y = a.y : a.y > this.max.y && (this.max.y = a.y);
        a.z < this.min.z ? this.min.z = a.z : a.z > this.max.z && (this.max.z = a.z)
    },
    setFromPoints: function(a) {
        if (0 < a.length) {
            var b = a[0];
            this.min.copy(b);
            this.max.copy(b);
            for (var b = 1, c = a.length; b < c; b++) this.addPoint(a[b])
        } else this.makeEmpty();
        return this
    },
    setFromCenterAndSize: function() {
        var a =
            new THREE.Vector3;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(0.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    setFromObject: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = this;
            b.updateMatrixWorld(!0);
            this.makeEmpty();
            b.traverse(function(b) {
                if (void 0 !== b.geometry && void 0 !== b.geometry.vertices)
                    for (var e = b.geometry.vertices, f = 0, h = e.length; f < h; f++) a.copy(e[f]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
            });
            return this
        }
    }(),
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(a) {
        return (a || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(a) {
        return new THREE.Vector3((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    },
    isIntersectionBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    getBoundingSphere: function() {
        var a =
            new THREE.Vector3;
        return function(b) {
            b = b || new THREE.Sphere;
            b.center = this.center();
            b.radius = 0.5 * this.size(a).length();
            return b
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    applyMatrix4: function() {
        var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(b) {
            a[0].set(this.min.x, this.min.y,
                this.min.z).applyMatrix4(b);
            a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
            a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
            a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
            a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
            a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
            a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
            a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
            this.makeEmpty();
            this.setFromPoints(a);
            return this
        }
    }(),
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    },
    clone: function() {
        return (new THREE.Box3).copy(this)
    }
};
THREE.Matrix3 = function(a, b, c, d, e, f, h, g, i) {
    this.elements = new Float32Array(9);
    this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, void 0 !== e ? e : 1, f || 0, h || 0, g || 0, void 0 !== i ? i : 1)
};
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(a, b, c, d, e, f, h, g, i) {
        var k = this.elements;
        k[0] = a;
        k[3] = b;
        k[6] = c;
        k[1] = d;
        k[4] = e;
        k[7] = f;
        k[2] = h;
        k[5] = g;
        k[8] = i;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this
    },
    copy: function(a) {
        a = a.elements;
        this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
        return a.applyMatrix3(this)
    },
    multiplyVector3Array: function() {
        var a = new THREE.Vector3;
        return function(b) {
            for (var c = 0, d = b.length; c < d; c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
            return b
        }
    }(),
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[3] *= a;
        b[6] *= a;
        b[1] *= a;
        b[4] *= a;
        b[7] *= a;
        b[2] *= a;
        b[5] *= a;
        b[8] *= a;
        return this
    },
    determinant: function() {
        var a = this.elements,
            b = a[0],
            c = a[1],
            d = a[2],
            e = a[3],
            f = a[4],
            h = a[5],
            g = a[6],
            i = a[7],
            a = a[8];
        return b * f * a - b * h * i - c * e * a + c * h * g + d * e * i - d * f * g
    },
    getInverse: function(a,
        b) {
        var c = a.elements,
            d = this.elements;
        d[0] = c[10] * c[5] - c[6] * c[9];
        d[1] = -c[10] * c[1] + c[2] * c[9];
        d[2] = c[6] * c[1] - c[2] * c[5];
        d[3] = -c[10] * c[4] + c[6] * c[8];
        d[4] = c[10] * c[0] - c[2] * c[8];
        d[5] = -c[6] * c[0] + c[2] * c[4];
        d[6] = c[9] * c[4] - c[5] * c[8];
        d[7] = -c[9] * c[0] + c[1] * c[8];
        d[8] = c[5] * c[0] - c[1] * c[4];
        c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
        if (0 === c) {
            if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 /
            c);
        return this
    },
    transpose: function() {
        var a, b = this.elements;
        a = b[1];
        b[1] = b[3];
        b[3] = a;
        a = b[2];
        b[2] = b[6];
        b[6] = a;
        a = b[5];
        b[5] = b[7];
        b[7] = a;
        return this
    },
    getNormalMatrix: function(a) {
        this.getInverse(a).transpose();
        return this
    },
    transposeIntoArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[3];
        a[2] = b[6];
        a[3] = b[1];
        a[4] = b[4];
        a[5] = b[7];
        a[6] = b[2];
        a[7] = b[5];
        a[8] = b[8];
        return this
    },
    clone: function() {
        var a = this.elements;
        return new THREE.Matrix3(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8])
    }
};
THREE.Matrix4 = function(a, b, c, d, e, f, h, g, i, k, m, l, p, t, s, q) {
    var n = this.elements = new Float32Array(16);
    n[0] = void 0 !== a ? a : 1;
    n[4] = b || 0;
    n[8] = c || 0;
    n[12] = d || 0;
    n[1] = e || 0;
    n[5] = void 0 !== f ? f : 1;
    n[9] = h || 0;
    n[13] = g || 0;
    n[2] = i || 0;
    n[6] = k || 0;
    n[10] = void 0 !== m ? m : 1;
    n[14] = l || 0;
    n[3] = p || 0;
    n[7] = t || 0;
    n[11] = s || 0;
    n[15] = void 0 !== q ? q : 1
};
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(a, b, c, d, e, f, h, g, i, k, m, l, p, t, s, q) {
        var n = this.elements;
        n[0] = a;
        n[4] = b;
        n[8] = c;
        n[12] = d;
        n[1] = e;
        n[5] = f;
        n[9] = h;
        n[13] = g;
        n[2] = i;
        n[6] = k;
        n[10] = m;
        n[14] = l;
        n[3] = p;
        n[7] = t;
        n[11] = s;
        n[15] = q;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    copy: function(a) {
        this.elements.set(a.elements);
        return this
    },
    extractPosition: function(a) {
        console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
        return this.copyPosition(a)
    },
    copyPosition: function(a) {
        var b = this.elements,
            a = a.elements;
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        return this
    },
    extractRotation: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = this.elements,
                b = b.elements,
                d = 1 / a.set(b[0], b[1], b[2]).length(),
                e = 1 / a.set(b[4], b[5], b[6]).length(),
                f = 1 / a.set(b[8], b[9], b[10]).length();
            c[0] = b[0] * d;
            c[1] = b[1] * d;
            c[2] = b[2] * d;
            c[4] = b[4] * e;
            c[5] = b[5] * e;
            c[6] = b[6] * e;
            c[8] = b[8] * f;
            c[9] = b[9] * f;
            c[10] = b[10] * f;
            return this
        }
    }(),
    makeRotationFromEuler: function(a) {
        !1 ===
            a instanceof THREE.Euler && console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
        var b = this.elements,
            c = a.x,
            d = a.y,
            e = a.z,
            f = Math.cos(c),
            c = Math.sin(c),
            h = Math.cos(d),
            d = Math.sin(d),
            g = Math.cos(e),
            e = Math.sin(e);
        if ("XYZ" === a.order) {
            var a = f * g,
                i = f * e,
                k = c * g,
                m = c * e;
            b[0] = h * g;
            b[4] = -h * e;
            b[8] = d;
            b[1] = i + k * d;
            b[5] = a - m * d;
            b[9] = -c * h;
            b[2] = m - a * d;
            b[6] = k + i * d;
            b[10] = f * h
        } else "YXZ" === a.order ? (a = h * g, i = h * e, k = d * g, m = d * e, b[0] = a + m * c, b[4] = k * c - i, b[8] =
            f * d, b[1] = f * e, b[5] = f * g, b[9] = -c, b[2] = i * c - k, b[6] = m + a * c, b[10] = f * h) : "ZXY" === a.order ? (a = h * g, i = h * e, k = d * g, m = d * e, b[0] = a - m * c, b[4] = -f * e, b[8] = k + i * c, b[1] = i + k * c, b[5] = f * g, b[9] = m - a * c, b[2] = -f * d, b[6] = c, b[10] = f * h) : "ZYX" === a.order ? (a = f * g, i = f * e, k = c * g, m = c * e, b[0] = h * g, b[4] = k * d - i, b[8] = a * d + m, b[1] = h * e, b[5] = m * d + a, b[9] = i * d - k, b[2] = -d, b[6] = c * h, b[10] = f * h) : "YZX" === a.order ? (a = f * h, i = f * d, k = c * h, m = c * d, b[0] = h * g, b[4] = m - a * e, b[8] = k * e + i, b[1] = e, b[5] = f * g, b[9] = -c * g, b[2] = -d * g, b[6] = i * e + k, b[10] = a - m * e) : "XZY" === a.order && (a = f * h, i = f * d, k = c * h, m = c * d, b[0] =
            h * g, b[4] = -e, b[8] = d * g, b[1] = a * e + m, b[5] = f * g, b[9] = i * e - k, b[2] = k * e - i, b[6] = c * g, b[10] = m * e + a);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    },
    setRotationFromQuaternion: function(a) {
        console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");
        return this.makeRotationFromQuaternion(a)
    },
    makeRotationFromQuaternion: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            e = a.z,
            f = a.w,
            h = c + c,
            g = d + d,
            i = e + e,
            a = c * h,
            k = c * g,
            c =
                c * i,
            m = d * g,
            d = d * i,
            e = e * i,
            h = f * h,
            g = f * g,
            f = f * i;
        b[0] = 1 - (m + e);
        b[4] = k - f;
        b[8] = c + g;
        b[1] = k + f;
        b[5] = 1 - (a + e);
        b[9] = d - h;
        b[2] = c - g;
        b[6] = d + h;
        b[10] = 1 - (a + m);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    },
    lookAt: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3,
            c = new THREE.Vector3;
        return function(d, e, f) {
            var h = this.elements;
            c.subVectors(d, e).normalize();
            0 === c.length() && (c.z = 1);
            a.crossVectors(f, c).normalize();
            0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize());
            b.crossVectors(c, a);
            h[0] = a.x;
            h[4] = b.x;
            h[8] = c.x;
            h[1] = a.y;
            h[5] = b.y;
            h[9] = c.y;
            h[2] = a.z;
            h[6] = b.z;
            h[10] = c.z;
            return this
        }
    }(),
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    },
    multiplyMatrices: function(a, b) {
        var c = a.elements,
            d = b.elements,
            e = this.elements,
            f = c[0],
            h = c[4],
            g = c[8],
            i = c[12],
            k = c[1],
            m = c[5],
            l = c[9],
            p = c[13],
            t = c[2],
            s = c[6],
            q = c[10],
            n = c[14],
            u = c[3],
            r = c[7],
            v = c[11],
            c = c[15],
            z = d[0],
            G = d[4],
            w = d[8],
            y = d[12],
            E = d[1],
            A = d[5],
            K = d[9],
            D = d[13],
            F = d[2],
            O = d[6],
            x = d[10],
            I = d[14],
            B = d[3],
            M = d[7],
            J = d[11],
            d = d[15];
        e[0] = f * z + h * E + g * F + i * B;
        e[4] = f * G + h * A + g * O + i * M;
        e[8] = f * w + h * K + g * x + i * J;
        e[12] = f * y + h * D + g * I + i * d;
        e[1] = k * z + m * E + l * F + p * B;
        e[5] = k * G + m * A + l * O + p * M;
        e[9] = k * w + m * K + l * x + p * J;
        e[13] = k * y + m * D + l * I + p * d;
        e[2] = t * z + s * E + q * F + n * B;
        e[6] = t * G + s * A + q * O + n * M;
        e[10] = t * w + s * K + q * x + n * J;
        e[14] = t * y + s * D + q * I + n * d;
        e[3] = u * z + r * E + v * F + c * B;
        e[7] = u * G + r * A + v * O + c * M;
        e[11] = u * w + r * K + v * x + c * J;
        e[15] = u * y + r * D + v * I + c * d;
        return this
    },
    multiplyToArray: function(a, b,
        c) {
        var d = this.elements;
        this.multiplyMatrices(a, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this
    },
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[4] *= a;
        b[8] *= a;
        b[12] *= a;
        b[1] *= a;
        b[5] *= a;
        b[9] *= a;
        b[13] *= a;
        b[2] *= a;
        b[6] *= a;
        b[10] *= a;
        b[14] *= a;
        b[3] *= a;
        b[7] *= a;
        b[11] *= a;
        b[15] *= a;
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
        return a.applyProjection(this)
    },
    multiplyVector4: function(a) {
        console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)
    },
    multiplyVector3Array: function() {
        var a = new THREE.Vector3;
        return function(b) {
            for (var c = 0, d = b.length; c < d; c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyProjection(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
            return b
        }
    }(),
    rotateAxis: function(a) {
        console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
        a.transformDirection(this)
    },
    crossVector: function(a) {
        console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)
    },
    determinant: function() {
        var a = this.elements,
            b = a[0],
            c = a[4],
            d = a[8],
            e = a[12],
            f = a[1],
            h = a[5],
            g = a[9],
            i = a[13],
            k = a[2],
            m = a[6],
            l = a[10],
            p = a[14];
        return a[3] * (+e * g * m - d * i * m - e * h * l + c * i * l + d * h * p - c * g * p) + a[7] * (+b * g * p - b * i * l + e * f * l - d * f * p + d * i * k - e * g * k) + a[11] * (+b * i * m - b * h * p - e * f * m + c * f * p + e * h * k - c * i * k) + a[15] * (-d * h * k - b * g * m + b * h * l + d * f * m - c * f *
            l + c * g * k)
    },
    transpose: function() {
        var a = this.elements,
            b;
        b = a[1];
        a[1] = a[4];
        a[4] = b;
        b = a[2];
        a[2] = a[8];
        a[8] = b;
        b = a[6];
        a[6] = a[9];
        a[9] = b;
        b = a[3];
        a[3] = a[12];
        a[12] = b;
        b = a[7];
        a[7] = a[13];
        a[13] = b;
        b = a[11];
        a[11] = a[14];
        a[14] = b;
        return this
    },
    flattenToArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9];
        a[10] = b[10];
        a[11] = b[11];
        a[12] = b[12];
        a[13] = b[13];
        a[14] = b[14];
        a[15] = b[15];
        return a
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        a[b + 9] = c[9];
        a[b + 10] = c[10];
        a[b + 11] = c[11];
        a[b + 12] = c[12];
        a[b + 13] = c[13];
        a[b + 14] = c[14];
        a[b + 15] = c[15];
        return a
    },
    getPosition: function() {
        var a = new THREE.Vector3;
        return function() {
            console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");
            var b = this.elements;
            return a.set(b[12], b[13], b[14])
        }
    }(),
    setPosition: function(a) {
        var b = this.elements;
        b[12] = a.x;
        b[13] = a.y;
        b[14] = a.z;
        return this
    },
    getInverse: function(a, b) {
        var c = this.elements,
            d = a.elements,
            e = d[0],
            f = d[4],
            h = d[8],
            g = d[12],
            i = d[1],
            k = d[5],
            m = d[9],
            l = d[13],
            p = d[2],
            t = d[6],
            s = d[10],
            q = d[14],
            n = d[3],
            u = d[7],
            r = d[11],
            d = d[15];
        c[0] = m * q * u - l * s * u + l * t * r - k * q * r - m * t * d + k * s * d;
        c[4] = g * s * u - h * q * u - g * t * r + f * q * r + h * t * d - f * s * d;
        c[8] = h * l * u - g * m * u + g * k * r - f * l * r - h * k * d + f * m * d;
        c[12] = g * m * t - h * l * t - g * k * s + f * l * s + h * k * q - f * m * q;
        c[1] = l * s * n - m * q * n - l * p * r + i * q * r + m * p * d - i * s * d;
        c[5] = h * q * n - g * s * n + g * p * r - e * q * r - h * p * d + e * s * d;
        c[9] = g * m * n - h * l * n - g * i * r + e * l * r + h * i * d -
            e * m * d;
        c[13] = h * l * p - g * m * p + g * i * s - e * l * s - h * i * q + e * m * q;
        c[2] = k * q * n - l * t * n + l * p * u - i * q * u - k * p * d + i * t * d;
        c[6] = g * t * n - f * q * n - g * p * u + e * q * u + f * p * d - e * t * d;
        c[10] = f * l * n - g * k * n + g * i * u - e * l * u - f * i * d + e * k * d;
        c[14] = g * k * p - f * l * p - g * i * t + e * l * t + f * i * q - e * k * q;
        c[3] = m * t * n - k * s * n - m * p * u + i * s * u + k * p * r - i * t * r;
        c[7] = f * s * n - h * t * n + h * p * u - e * s * u - f * p * r + e * t * r;
        c[11] = h * k * n - f * m * n - h * i * u + e * m * u + f * i * r - e * k * r;
        c[15] = f * m * p - h * k * p + h * i * t - e * m * t - f * i * s + e * k * s;
        c = e * c[0] + i * c[4] + p * c[8] + n * c[12];
        if (0 == c) {
            if (b) throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 / c);
        return this
    },
    translate: function() {
        console.warn("DEPRECATED: Matrix4's .translate() has been removed.")
    },
    rotateX: function() {
        console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")
    },
    rotateY: function() {
        console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")
    },
    rotateZ: function() {
        console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")
    },
    rotateByAxis: function() {
        console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")
    },
    scale: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            a = a.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a;
        return this
    },
    getMaxScaleOnAxis: function() {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
    },
    makeTranslation: function(a, b, c) {
        this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this
    },
    makeRotationX: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(1,
            0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationY: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationZ: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationAxis: function(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b),
            e = 1 - c,
            f = a.x,
            h = a.y,
            g = a.z,
            i = e * f,
            k = e * h;
        this.set(i * f + c, i * h - d * g, i * g + d * h, 0, i * h + d * g, k * h + c, k * g - d * f, 0, i * g - d * h, k * g + d * f, e * g * g + c, 0, 0, 0, 0, 1);
        return this
    },
    makeScale: function(a, b, c) {
        this.set(a,
            0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    compose: function(a, b, c) {
        this.makeRotationFromQuaternion(b);
        this.scale(c);
        this.setPosition(a);
        return this
    },
    decompose: function() {
        var a = new THREE.Vector3,
            b = new THREE.Matrix4;
        return function(c, d, e) {
            var f = this.elements,
                h = a.set(f[0], f[1], f[2]).length(),
                g = a.set(f[4], f[5], f[6]).length(),
                i = a.set(f[8], f[9], f[10]).length();
            c.x = f[12];
            c.y = f[13];
            c.z = f[14];
            b.elements.set(this.elements);
            var c = 1 / h,
                f = 1 / g,
                k = 1 / i;
            b.elements[0] *= c;
            b.elements[1] *= c;
            b.elements[2] *= c;
            b.elements[4] *=
                f;
            b.elements[5] *= f;
            b.elements[6] *= f;
            b.elements[8] *= k;
            b.elements[9] *= k;
            b.elements[10] *= k;
            d.setFromRotationMatrix(b);
            e.x = h;
            e.y = g;
            e.z = i;
            return this
        }
    }(),
    makeFrustum: function(a, b, c, d, e, f) {
        var h = this.elements;
        h[0] = 2 * e / (b - a);
        h[4] = 0;
        h[8] = (b + a) / (b - a);
        h[12] = 0;
        h[1] = 0;
        h[5] = 2 * e / (d - c);
        h[9] = (d + c) / (d - c);
        h[13] = 0;
        h[2] = 0;
        h[6] = 0;
        h[10] = -(f + e) / (f - e);
        h[14] = -2 * f * e / (f - e);
        h[3] = 0;
        h[7] = 0;
        h[11] = -1;
        h[15] = 0;
        return this
    },
    makePerspective: function(a, b, c, d) {
        var a = c * Math.tan(THREE.Math.degToRad(0.5 * a)),
            e = -a;
        return this.makeFrustum(e *
            b, a * b, e, a, c, d)
    },
    makeOrthographic: function(a, b, c, d, e, f) {
        var h = this.elements,
            g = b - a,
            i = c - d,
            k = f - e;
        h[0] = 2 / g;
        h[4] = 0;
        h[8] = 0;
        h[12] = -((b + a) / g);
        h[1] = 0;
        h[5] = 2 / i;
        h[9] = 0;
        h[13] = -((c + d) / i);
        h[2] = 0;
        h[6] = 0;
        h[10] = -2 / k;
        h[14] = -((f + e) / k);
        h[3] = 0;
        h[7] = 0;
        h[11] = 0;
        h[15] = 1;
        return this
    },
    fromArray: function(a) {
        this.elements.set(a);
        return this
    },
    toArray: function() {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
    },
    clone: function() {
        var a = this.elements;
        return new THREE.Matrix4(a[0],
            a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
    }
};
THREE.Ray = function(a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3;
    this.direction = void 0 !== b ? b : new THREE.Vector3
};
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(a, b) {
        this.origin.copy(a);
        this.direction.copy(b);
        return this
    },
    copy: function(a) {
        this.origin.copy(a.origin);
        this.direction.copy(a.direction);
        return this
    },
    at: function(a, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
    },
    recast: function() {
        var a = new THREE.Vector3;
        return function(b) {
            this.origin.copy(this.at(b, a));
            return this
        }
    }(),
    closestPointToPoint: function(a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            if (0 > c) return this.origin.distanceTo(b);
            a.copy(this.direction).multiplyScalar(c).add(this.origin);
            return a.distanceTo(b)
        }
    }(),
    distanceSqToSegment: function(a, b, c, d) {
        var e = a.clone().add(b).multiplyScalar(0.5),
            f = b.clone().sub(a).normalize(),
            h = 0.5 * a.distanceTo(b),
            g = this.origin.clone().sub(e),
            a = -this.direction.dot(f),
            b = g.dot(this.direction),
            i = -g.dot(f),
            k = g.lengthSq(),
            m = Math.abs(1 - a * a),
            l, p;
        0 <= m ? (g = a * i - b, l = a * b - i, p = h * m, 0 <= g ? l >= -p ? l <= p ? (h = 1 / m, g *= h, l *= h, a = g * (g + a * l + 2 * b) + l * (a * g + l + 2 * i) + k) : (l = h, g = Math.max(0, -(a * l + b)), a = -g * g + l * (l + 2 * i) + k) : (l = -h, g = Math.max(0, -(a * l + b)), a = -g * g + l * (l + 2 * i) + k) : l <= -p ? (g = Math.max(0, -(-a * h + b)), l = 0 < g ? -h : Math.min(Math.max(-h, -i), h), a = -g * g + l * (l + 2 * i) + k) : l <= p ? (g = 0, l = Math.min(Math.max(-h, -i), h), a = l * (l + 2 * i) + k) : (g = Math.max(0, -(a * h + b)), l = 0 < g ? h : Math.min(Math.max(-h, -i), h), a = -g * g + l * (l + 2 * i) + k)) : (l = 0 < a ? -h : h, g = Math.max(0, -(a * l + b)), a = -g * g + l * (l + 2 * i) + k);
        c && c.copy(this.direction.clone().multiplyScalar(g).add(this.origin));
        d && d.copy(f.clone().multiplyScalar(l).add(e));
        return a
    },
    isIntersectionSphere: function(a) {
        return this.distanceToPoint(a.center) <= a.radius
    },
    isIntersectionPlane: function(a) {
        var b = a.distanceToPoint(this.origin);
        return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
    },
    distanceToPlane: function(a) {
        var b = a.normal.dot(this.direction);
        if (0 == b) return 0 == a.distanceToPoint(this.origin) ?
            0 : null;
        a = -(this.origin.dot(a.normal) + a.constant) / b;
        return 0 <= a ? a : null
    },
    intersectPlane: function(a, b) {
        var c = this.distanceToPlane(a);
        return null === c ? null : this.at(c, b)
    },
    isIntersectionBox: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return null !== this.intersectBox(b, a)
        }
    }(),
    intersectBox: function(a, b) {
        var c, d, e, f, h;
        d = 1 / this.direction.x;
        f = 1 / this.direction.y;
        h = 1 / this.direction.z;
        var g = this.origin;
        0 <= d ? (c = (a.min.x - g.x) * d, d *= a.max.x - g.x) : (c = (a.max.x - g.x) * d, d *= a.min.x - g.x);
        0 <= f ? (e = (a.min.y - g.y) * f, f *=
            a.max.y - g.y) : (e = (a.max.y - g.y) * f, f *= a.min.y - g.y);
        if (c > f || e > d) return null;
        if (e > c || c !== c) c = e;
        if (f < d || d !== d) d = f;
        0 <= h ? (e = (a.min.z - g.z) * h, h *= a.max.z - g.z) : (e = (a.max.z - g.z) * h, h *= a.min.z - g.z);
        if (c > h || e > d) return null;
        if (e > c || c !== c) c = e;
        if (h < d || d !== d) d = h;
        return 0 > d ? null : this.at(0 <= c ? c : d, b)
    },
    intersectTriangle: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3,
            c = new THREE.Vector3,
            d = new THREE.Vector3;
        return function(e, f, h, g, i) {
            b.subVectors(f, e);
            c.subVectors(h, e);
            d.crossVectors(b, c);
            f = this.direction.dot(d);
            if (0 <
                f) {
                if (g) return null;
                g = 1
            } else if (0 > f) g = -1, f = -f;
            else return null;
            a.subVectors(this.origin, e);
            e = g * this.direction.dot(c.crossVectors(a, c));
            if (0 > e) return null;
            h = g * this.direction.dot(b.cross(a));
            if (0 > h || e + h > f) return null;
            e = -g * a.dot(d);
            return 0 > e ? null : this.at(e / f, i)
        }
    }(),
    applyMatrix4: function(a) {
        this.direction.add(this.origin).applyMatrix4(a);
        this.origin.applyMatrix4(a);
        this.direction.sub(this.origin);
        this.direction.normalize();
        return this
    },
    equals: function(a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    },
    clone: function() {
        return (new THREE.Ray).copy(this)
    }
};
THREE.Sphere = function(a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3;
    this.radius = void 0 !== b ? b : 0
};
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(a, b) {
        this.center.copy(a);
        this.radius = b;
        return this
    },
    setFromPoints: function() {
        var a = new THREE.Box3;
        return function(b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
            for (var e = 0, f = 0, h = b.length; f < h; f++) e = Math.max(e, d.distanceToSquared(b[f]));
            this.radius = Math.sqrt(e);
            return this
        }
    }(),
    copy: function(a) {
        this.center.copy(a.center);
        this.radius = a.radius;
        return this
    },
    empty: function() {
        return 0 >= this.radius
    },
    containsPoint: function(a) {
        return a.distanceToSquared(this.center) <=
            this.radius * this.radius
    },
    distanceToPoint: function(a) {
        return a.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    },
    clampPoint: function(a, b) {
        var c = this.center.distanceToSquared(a),
            d = b || new THREE.Vector3;
        d.copy(a);
        c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
        return d
    },
    getBoundingBox: function(a) {
        a = a || new THREE.Box3;
        a.set(this.center, this.center);
        a.expandByScalar(this.radius);
        return a
    },
    applyMatrix4: function(a) {
        this.center.applyMatrix4(a);
        this.radius *= a.getMaxScaleOnAxis();
        return this
    },
    translate: function(a) {
        this.center.add(a);
        return this
    },
    equals: function(a) {
        return a.center.equals(this.center) && a.radius === this.radius
    },
    clone: function() {
        return (new THREE.Sphere).copy(this)
    }
};
THREE.Frustum = function(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
};
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(a, b, c, d, e, f) {
        var h = this.planes;
        h[0].copy(a);
        h[1].copy(b);
        h[2].copy(c);
        h[3].copy(d);
        h[4].copy(e);
        h[5].copy(f);
        return this
    },
    copy: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
        return this
    },
    setFromMatrix: function(a) {
        var b = this.planes,
            c = a.elements,
            a = c[0],
            d = c[1],
            e = c[2],
            f = c[3],
            h = c[4],
            g = c[5],
            i = c[6],
            k = c[7],
            m = c[8],
            l = c[9],
            p = c[10],
            t = c[11],
            s = c[12],
            q = c[13],
            n = c[14],
            c = c[15];
        b[0].setComponents(f - a, k - h, t - m, c - s).normalize();
        b[1].setComponents(f +
            a, k + h, t + m, c + s).normalize();
        b[2].setComponents(f + d, k + g, t + l, c + q).normalize();
        b[3].setComponents(f - d, k - g, t - l, c - q).normalize();
        b[4].setComponents(f - e, k - i, t - p, c - n).normalize();
        b[5].setComponents(f + e, k + i, t + p, c + n).normalize();
        return this
    },
    intersectsObject: function() {
        var a = new THREE.Sphere;
        return function(b) {
            var c = b.geometry;
            null === c.boundingSphere && c.computeBoundingSphere();
            a.copy(c.boundingSphere);
            a.applyMatrix4(b.matrixWorld);
            return this.intersectsSphere(a)
        }
    }(),
    intersectsSphere: function(a) {
        for (var b = this.planes,
                c = a.center, a = -a.radius, d = 0; 6 > d; d++)
            if (b[d].distanceToPoint(c) < a) return !1;
        return !0
    },
    intersectsBox: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c) {
            for (var d = this.planes, e = 0; 6 > e; e++) {
                var f = d[e];
                a.x = 0 < f.normal.x ? c.min.x : c.max.x;
                b.x = 0 < f.normal.x ? c.max.x : c.min.x;
                a.y = 0 < f.normal.y ? c.min.y : c.max.y;
                b.y = 0 < f.normal.y ? c.max.y : c.min.y;
                a.z = 0 < f.normal.z ? c.min.z : c.max.z;
                b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                var h = f.distanceToPoint(a),
                    f = f.distanceToPoint(b);
                if (0 > h && 0 > f) return !1
            }
            return !0
        }
    }(),
    containsPoint: function(a) {
        for (var b =
            this.planes, c = 0; 6 > c; c++)
            if (0 > b[c].distanceToPoint(a)) return !1;
        return !0
    },
    clone: function() {
        return (new THREE.Frustum).copy(this)
    }
};
THREE.Plane = function(a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
    this.constant = void 0 !== b ? b : 0
};
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(a, b) {
        this.normal.copy(a);
        this.constant = b;
        return this
    },
    setComponents: function(a, b, c, d) {
        this.normal.set(a, b, c);
        this.constant = d;
        return this
    },
    setFromNormalAndCoplanarPoint: function(a, b) {
        this.normal.copy(a);
        this.constant = -b.dot(this.normal);
        return this
    },
    setFromCoplanarPoints: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d, e) {
            d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            this.setFromNormalAndCoplanarPoint(d,
                c);
            return this
        }
    }(),
    copy: function(a) {
        this.normal.copy(a.normal);
        this.constant = a.constant;
        return this
    },
    normalize: function() {
        var a = 1 / this.normal.length();
        this.normal.multiplyScalar(a);
        this.constant *= a;
        return this
    },
    negate: function() {
        this.constant *= -1;
        this.normal.negate();
        return this
    },
    distanceToPoint: function(a) {
        return this.normal.dot(a) + this.constant
    },
    distanceToSphere: function(a) {
        return this.distanceToPoint(a.center) - a.radius
    },
    projectPoint: function(a, b) {
        return this.orthoPoint(a, b).sub(a).negate()
    },
    orthoPoint: function(a,
        b) {
        var c = this.distanceToPoint(a);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
    },
    isIntersectionLine: function(a) {
        var b = this.distanceToPoint(a.start),
            a = this.distanceToPoint(a.end);
        return 0 > b && 0 < a || 0 > a && 0 < b
    },
    intersectLine: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = c || new THREE.Vector3,
                e = b.delta(a),
                f = this.normal.dot(e);
            if (0 == f) {
                if (0 == this.distanceToPoint(b.start)) return d.copy(b.start)
            } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
        }
    }(),
    coplanarPoint: function(a) {
        return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d) {
            var d = d || (new THREE.Matrix3).getNormalMatrix(c),
                e = a.copy(this.normal).applyMatrix3(d),
                f = this.coplanarPoint(b);
            f.applyMatrix4(c);
            this.setFromNormalAndCoplanarPoint(e, f);
            return this
        }
    }(),
    translate: function(a) {
        this.constant -= a.dot(this.normal);
        return this
    },
    equals: function(a) {
        return a.normal.equals(this.normal) &&
            a.constant == this.constant
    },
    clone: function() {
        return (new THREE.Plane).copy(this)
    }
};
THREE.Math = {
    PI2: 2 * Math.PI,
    generateUUID: function() {
        var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            b = Array(36),
            c = 0,
            d;
        return function() {
            for (var e = 0; 36 > e; e++) 8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 == e ? d & 3 | 8 : d]);
            return b.join("")
        }
    }(),
    clamp: function(a, b, c) {
        return a < b ? b : a > c ? c : a
    },
    clampBottom: function(a, b) {
        return a < b ? b : a
    },
    mapLinear: function(a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    },
    smoothstep: function(a,
        b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * (3 - 2 * a)
    },
    smootherstep: function(a, b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * a * (a * (6 * a - 15) + 10)
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randInt: function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    },
    randFloat: function(a, b) {
        return a + Math.random() * (b - a)
    },
    randFloatSpread: function(a) {
        return a * (0.5 - Math.random())
    },
    sign: function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : 0
    },
    degToRad: function() {
        var a = Math.PI /
            180;
        return function(b) {
            return b * a
        }
    }(),
    radToDeg: function() {
        var a = 180 / Math.PI;
        return function(b) {
            return b * a
        }
    }()
};
THREE.Spline = function(a) {
    function b(a, b, c, d, e, f, h) {
        a = 0.5 * (c - a);
        d = 0.5 * (d - b);
        return (2 * (b - c) + a + d) * h + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }
    this.points = a;
    var c = [],
        d = {
            x: 0,
            y: 0,
            z: 0
        }, e, f, h, g, i, k, m, l, p;
    this.initFromArray = function(a) {
        this.points = [];
        for (var b = 0; b < a.length; b++) this.points[b] = {
            x: a[b][0],
            y: a[b][1],
            z: a[b][2]
        }
    };
    this.getPoint = function(a) {
        e = (this.points.length - 1) * a;
        f = Math.floor(e);
        h = e - f;
        c[0] = 0 === f ? f : f - 1;
        c[1] = f;
        c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
        c[3] = f > this.points.length - 3 ? this.points.length - 1 :
            f + 2;
        k = this.points[c[0]];
        m = this.points[c[1]];
        l = this.points[c[2]];
        p = this.points[c[3]];
        g = h * h;
        i = h * g;
        d.x = b(k.x, m.x, l.x, p.x, h, g, i);
        d.y = b(k.y, m.y, l.y, p.y, h, g, i);
        d.z = b(k.z, m.z, l.z, p.z, h, g, i);
        return d
    };
    this.getControlPointsArray = function() {
        var a, b, c = this.points.length,
            d = [];
        for (a = 0; a < c; a++) b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    };
    this.getLength = function(a) {
        var b, c, d, e = b = b = 0,
            f = new THREE.Vector3,
            h = new THREE.Vector3,
            g = [],
            i = 0;
        g[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        f.copy(this.points[0]);
        for (a = 1; a < c; a++) b =
            a / c, d = this.getPoint(b), h.copy(d), i += h.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (g[b] = i, e = b);
        g[g.length] = i;
        return {
            chunks: g,
            total: i
        }
    };
    this.reparametrizeByArcLength = function(a) {
        var b, c, d, e, f, h, g = [],
            i = new THREE.Vector3,
            k = this.getLength();
        g.push(i.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = k.chunks[b] - k.chunks[b - 1];
            h = Math.ceil(a * c / k.total);
            e = (b - 1) / (this.points.length - 1);
            f = b / (this.points.length - 1);
            for (c = 1; c < h - 1; c++) d = e + c * (1 / h) * (f - e), d = this.getPoint(d),
            g.push(i.copy(d).clone());
            g.push(i.copy(this.points[b]).clone())
        }
        this.points = g
    }
};
THREE.Triangle = function(a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3;
    this.b = void 0 !== b ? b : new THREE.Vector3;
    this.c = void 0 !== c ? c : new THREE.Vector3
};
THREE.Triangle.normal = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        e = e || new THREE.Vector3;
        e.subVectors(d, c);
        a.subVectors(b, c);
        e.cross(a);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
    }
}();
THREE.Triangle.barycoordFromPoint = function() {
    var a = new THREE.Vector3,
        b = new THREE.Vector3,
        c = new THREE.Vector3;
    return function(d, e, f, h, g) {
        a.subVectors(h, e);
        b.subVectors(f, e);
        c.subVectors(d, e);
        var d = a.dot(a),
            e = a.dot(b),
            f = a.dot(c),
            i = b.dot(b),
            h = b.dot(c),
            k = d * i - e * e,
            g = g || new THREE.Vector3;
        if (0 == k) return g.set(-2, -1, -1);
        k = 1 / k;
        i = (i * f - e * h) * k;
        d = (d * h - e * f) * k;
        return g.set(1 - i - d, d, i)
    }
}();
THREE.Triangle.containsPoint = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
        return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
    }
}();
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(a, b, c) {
        this.a.copy(a);
        this.b.copy(b);
        this.c.copy(c);
        return this
    },
    setFromPointsAndIndices: function(a, b, c, d) {
        this.a.copy(a[b]);
        this.b.copy(a[c]);
        this.c.copy(a[d]);
        return this
    },
    copy: function(a) {
        this.a.copy(a.a);
        this.b.copy(a.b);
        this.c.copy(a.c);
        return this
    },
    area: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function() {
            a.subVectors(this.c, this.b);
            b.subVectors(this.a, this.b);
            return 0.5 * a.cross(b).length()
        }
    }(),
    midpoint: function(a) {
        return (a ||
            new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    },
    plane: function(a) {
        return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    },
    containsPoint: function(a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    },
    equals: function(a) {
        return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
    },
    clone: function() {
        return (new THREE.Triangle).copy(this)
    }
};
THREE.Vertex = function(a) {
    console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");
    return a
};
THREE.UV = function(a, b) {
    console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");
    return new THREE.Vector2(a, b)
};
THREE.Clock = function(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
};
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime();
        this.running = !1
    },
    getElapsedTime: function() {
        this.getDelta();
        return this.elapsedTime
    },
    getDelta: function() {
        var a = 0;
        this.autoStart && !this.running && this.start();
        if (this.running) {
            var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(),
                a = 0.0010 * (b - this.oldTime);
            this.oldTime = b;
            this.elapsedTime += a
        }
        return a
    }
};
THREE.EventDispatcher = function() {};
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(a) {
        a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
        a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
        a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
        a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    },
    addEventListener: function(a, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a] && (c[a] = []); - 1 === c[a].indexOf(b) &&
            c[a].push(b)
    },
    hasEventListener: function(a, b) {
        if (void 0 === this._listeners) return !1;
        var c = this._listeners;
        return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
    },
    removeEventListener: function(a, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners,
                d = c[a].indexOf(b); - 1 !== d && c[a].splice(d, 1)
        }
    },
    dispatchEvent: function() {
        var a = [];
        return function(b) {
            if (void 0 !== this._listeners) {
                var c = this._listeners[b.type];
                if (void 0 !== c) {
                    b.target = this;
                    for (var d = c.length, e = 0; e < d; e++) a[e] = c[e];
                    for (e = 0; e < d; e++) a[e].call(this, b)
                }
            }
        }
    }()
};
(function(a) {
    a.Raycaster = function(b, c, d, e) {
        this.ray = new a.Ray(b, c);
        this.near = d || 0;
        this.far = e || Infinity
    };
    var b = new a.Sphere,
        c = new a.Ray;
    new a.Plane;
    new a.Vector3;
    var d = new a.Vector3,
        e = new a.Matrix4,
        f = function(a, b) {
            return a.distance - b.distance
        }, h = new a.Vector3,
        g = new a.Vector3,
        i = new a.Vector3,
        k = function(f, m, t) {
            if (f instanceof a.Sprite) {
                d.getPositionFromMatrix(f.matrixWorld);
                var s = m.ray.distanceToPoint(d);
                if (s > f.scale.x) return t;
                t.push({
                    distance: s,
                    point: f.position,
                    face: null,
                    object: f
                })
            } else if (f instanceof a.LOD) d.getPositionFromMatrix(f.matrixWorld), s = m.ray.origin.distanceTo(d), k(f.getObjectForDistance(s), m, t);
            else if (f instanceof a.Mesh) {
                var q = f.geometry;
                null === q.boundingSphere && q.computeBoundingSphere();
                b.copy(q.boundingSphere);
                b.applyMatrix4(f.matrixWorld);
                if (!1 === m.ray.isIntersectionSphere(b)) return t;
                e.getInverse(f.matrixWorld);
                c.copy(m.ray).applyMatrix4(e);
                if (null !== q.boundingBox && !1 === c.isIntersectionBox(q.boundingBox)) return t;
                if (q instanceof a.BufferGeometry) {
                    var n = f.material;
                    if (void 0 ===
                        n || !1 === q.dynamic) return t;
                    var u, r, v = m.precision;
                    if (void 0 !== q.attributes.index)
                        for (var z = q.offsets, G = q.attributes.index.array, w = q.attributes.position.array, y = q.offsets.length, E = q.attributes.index.array.length / 3, E = 0; E < y; ++E)
                            for (var s = z[E].start, A = z[E].index, q = s, K = s + z[E].count; q < K; q += 3) s = A + G[q], u = A + G[q + 1], r = A + G[q + 2], h.set(w[3 * s], w[3 * s + 1], w[3 * s + 2]), g.set(w[3 * u], w[3 * u + 1], w[3 * u + 2]), i.set(w[3 * r], w[3 * r + 1], w[3 * r + 2]), u = n.side === a.BackSide ? c.intersectTriangle(i, g, h, !0) : c.intersectTriangle(h, g, i, n.side !== a.DoubleSide),
                    null !== u && (u.applyMatrix4(f.matrixWorld), s = m.ray.origin.distanceTo(u), s < v || (s < m.near || s > m.far) || t.push({
                        distance: s,
                        point: u,
                        face: null,
                        faceIndex: null,
                        object: f
                    }));
                    else {
                        w = q.attributes.position.array;
                        E = q.attributes.position.array.length;
                        for (q = 0; q < E; q += 3) s = q, u = q + 1, r = q + 2, h.set(w[3 * s], w[3 * s + 1], w[3 * s + 2]), g.set(w[3 * u], w[3 * u + 1], w[3 * u + 2]), i.set(w[3 * r], w[3 * r + 1], w[3 * r + 2]), u = n.side === a.BackSide ? c.intersectTriangle(i, g, h, !0) : c.intersectTriangle(h, g, i, n.side !== a.DoubleSide), null !== u && (u.applyMatrix4(f.matrixWorld),
                            s = m.ray.origin.distanceTo(u), s < v || (s < m.near || s > m.far) || t.push({
                                distance: s,
                                point: u,
                                face: null,
                                faceIndex: null,
                                object: f
                            }))
                    }
                } else if (q instanceof a.Geometry) {
                    G = f.material instanceof a.MeshFaceMaterial;
                    w = !0 === G ? f.material.materials : null;
                    v = m.precision;
                    z = q.vertices;
                    y = 0;
                    for (E = q.faces.length; y < E; y++) A = q.faces[y], n = !0 === G ? w[A.materialIndex] : f.material, void 0 !== n && (s = z[A.a], u = z[A.b], r = z[A.c], u = n.side === a.BackSide ? c.intersectTriangle(r, u, s, !0) : c.intersectTriangle(s, u, r, n.side !== a.DoubleSide), null !== u && (u.applyMatrix4(f.matrixWorld),
                        s = m.ray.origin.distanceTo(u), s < v || (s < m.near || s > m.far) || t.push({
                            distance: s,
                            point: u,
                            face: A,
                            faceIndex: y,
                            object: f
                        })))
                }
            } else if (f instanceof a.Line) {
                v = m.linePrecision;
                n = v * v;
                q = f.geometry;
                null === q.boundingSphere && q.computeBoundingSphere();
                b.copy(q.boundingSphere);
                b.applyMatrix4(f.matrixWorld);
                if (!1 === m.ray.isIntersectionSphere(b)) return t;
                e.getInverse(f.matrixWorld);
                c.copy(m.ray).applyMatrix4(e);
                if (q instanceof a.Geometry) {
                    z = q.vertices;
                    v = z.length;
                    u = new a.Vector3;
                    r = new a.Vector3;
                    E = f.type === a.LineStrip ? 1 :
                        2;
                    for (q = 0; q < v - 1; q += E) c.distanceSqToSegment(z[q], z[q + 1], r, u) > n || (s = c.origin.distanceTo(r), s < m.near || s > m.far || t.push({
                        distance: s,
                        point: u.clone().applyMatrix4(f.matrixWorld),
                        face: null,
                        faceIndex: null,
                        object: f
                    }))
                }
            }
        }, m = function(a, b, c) {
            for (var a = a.getDescendants(), d = 0, e = a.length; d < e; d++) k(a[d], b, c)
        };
    a.Raycaster.prototype.precision = 1E-4;
    a.Raycaster.prototype.linePrecision = 1;
    a.Raycaster.prototype.set = function(a, b) {
        this.ray.set(a, b)
    };
    a.Raycaster.prototype.intersectObject = function(a, b) {
        var c = [];
        !0 === b && m(a,
            this, c);
        k(a, this, c);
        c.sort(f);
        return c
    };
    a.Raycaster.prototype.intersectObjects = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) k(a[d], this, c), !0 === b && m(a[d], this, c);
        c.sort(f);
        return c
    }
})(THREE);
THREE.Object3D = function() {
    this.id = THREE.Object3DIdCount++;
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this._rotation = new THREE.Euler;
    this._quaternion = new THREE.Quaternion;
    this.scale = new THREE.Vector3(1, 1, 1);
    this._rotation._quaternion = this.quaternion;
    this._quaternion._euler = this.rotation;
    this.renderDepth = null;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.visible = this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.userData = {}
};
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get rotation() {
        return this._rotation
    },
    set rotation(a) {
        this._rotation = a;
        this._rotation._quaternion = this._quaternion;
        this._quaternion._euler = this._rotation;
        this._rotation._updateQuaternion()
    },
    get quaternion() {
        return this._quaternion
    },
    set quaternion(a) {
        this._quaternion = a;
        this._quaternion._euler = this._rotation;
        this._rotation._quaternion = this._quaternion;
        this._quaternion._updateEuler()
    },
    get eulerOrder() {
        console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
        return this.rotation.order
    },
    set eulerOrder(a) {
        console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
        this.rotation.order = a
    },
    get useQuaternion() {
        console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set useQuaternion(a) {
        console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    applyMatrix: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            this.matrix.multiplyMatrices(b,
                this.matrix);
            this.position.getPositionFromMatrix(this.matrix);
            this.scale.getScaleFromMatrix(this.matrix);
            a.extractRotation(this.matrix);
            this.quaternion.setFromRotationMatrix(a)
        }
    }(),
    setRotationFromAxisAngle: function(a, b) {
        this.quaternion.setFromAxisAngle(a, b)
    },
    setRotationFromEuler: function(a) {
        this.quaternion.setFromEuler(a, !0)
    },
    setRotationFromMatrix: function(a) {
        this.quaternion.setFromRotationMatrix(a)
    },
    setRotationFromQuaternion: function(a) {
        this.quaternion.copy(a)
    },
    rotateOnAxis: function() {
        var a = new THREE.Quaternion;
        return function(b, c) {
            a.setFromAxisAngle(b, c);
            this.quaternion.multiply(a);
            return this
        }
    }(),
    rotateX: function() {
        var a = new THREE.Vector3(1, 0, 0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateY: function() {
        var a = new THREE.Vector3(0, 1, 0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateZ: function() {
        var a = new THREE.Vector3(0, 0, 1);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    translateOnAxis: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            a.copy(b);
            a.applyQuaternion(this.quaternion);
            this.position.add(a.multiplyScalar(c));
            return this
        }
    }(),
    translate: function(a, b) {
        console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
        return this.translateOnAxis(b, a)
    },
    translateX: function() {
        var a = new THREE.Vector3(1, 0, 0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateY: function() {
        var a = new THREE.Vector3(0, 1, 0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateZ: function() {
        var a =
            new THREE.Vector3(0, 0, 1);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    localToWorld: function(a) {
        return a.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            return b.applyMatrix4(a.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            a.lookAt(b, this.position, this.up);
            this.quaternion.setFromRotationMatrix(a)
        }
    }(),
    add: function(a) {
        if (a === this) console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
        else if (a instanceof THREE.Object3D) {
            void 0 !== a.parent && a.parent.remove(a);
            a.parent = this;
            a.dispatchEvent({
                type: "added"
            });
            this.children.push(a);
            for (var b = this; void 0 !== b.parent;) b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
        }
    },
    remove: function(a) {
        var b = this.children.indexOf(a);
        if (-1 !== b) {
            a.parent = void 0;
            a.dispatchEvent({
                type: "removed"
            });
            this.children.splice(b, 1);
            for (b = this; void 0 !== b.parent;) b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
        }
    },
    traverse: function(a) {
        a(this);
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].traverse(a)
    },
    getObjectById: function(a, b) {
        for (var c = 0, d = this.children.length; c < d; c++) {
            var e = this.children[c];
            if (e.id === a || !0 === b && (e = e.getObjectById(a, b), void 0 !== e)) return e
        }
    },
    getObjectByName: function(a, b) {
        for (var c = 0, d = this.children.length; c < d; c++) {
            var e = this.children[c];
            if (e.name === a || !0 === b && (e = e.getObjectByName(a, b), void 0 !== e)) return e
        }
    },
    getChildByName: function(a, b) {
        console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");
        return this.getObjectByName(a, b)
    },
    getDescendants: function(a) {
        void 0 === a && (a = []);
        Array.prototype.push.apply(a, this.children);
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].getDescendants(a);
        return a
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) :
            this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
    },
    clone: function(a, b) {
        void 0 === a && (a = new THREE.Object3D);
        void 0 === b && (b = !0);
        a.name = this.name;
        a.up.copy(this.up);
        a.position.copy(this.position);
        a.quaternion.copy(this.quaternion);
        a.scale.copy(this.scale);
        a.renderDepth = this.renderDepth;
        a.rotationAutoUpdate = this.rotationAutoUpdate;
        a.matrix.copy(this.matrix);
        a.matrixWorld.copy(this.matrixWorld);
        a.matrixAutoUpdate = this.matrixAutoUpdate;
        a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
        a.visible = this.visible;
        a.castShadow = this.castShadow;
        a.receiveShadow = this.receiveShadow;
        a.frustumCulled = this.frustumCulled;
        a.userData = JSON.parse(JSON.stringify(this.userData));
        if (!0 === b)
            for (var c = 0; c < this.children.length; c++) a.add(this.children[c].clone());
        return a
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;
THREE.Projector = function() {
    function a() {
        if (i === m) {
            var a = new THREE.RenderableVertex;
            k.push(a);
            m++;
            i++;
            return a
        }
        return k[i++]
    }

    function b(a, b) {
        return a.z !== b.z ? b.z - a.z : a.id !== b.id ? a.id - b.id : 0
    }

    function c(a, b) {
        var c = 0,
            d = 1,
            e = a.z + a.w,
            f = b.z + b.w,
            h = -a.z + a.w,
            g = -b.z + b.w;
        if (0 <= e && 0 <= f && 0 <= h && 0 <= g) return !0;
        if (0 > e && 0 > f || 0 > h && 0 > g) return !1;
        0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f)));
        0 > h ? c = Math.max(c, h / (h - g)) : 0 > g && (d = Math.min(d, h / (h - g)));
        if (d < c) return !1;
        a.lerp(b, c);
        b.lerp(a, 1 - d);
        return !0
    }
    var d, e, f = [],
        h =
            0,
        g, i, k = [],
        m = 0,
        l, p, t = [],
        s = 0,
        q, n, u = [],
        r = 0,
        v, z, G = [],
        w = 0,
        y = {
            objects: [],
            sprites: [],
            lights: [],
            elements: []
        }, E = new THREE.Vector3,
        A = new THREE.Vector4,
        K = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)),
        D = new THREE.Box3,
        F = Array(3),
        O = new THREE.Matrix4,
        x = new THREE.Matrix4,
        I, B = new THREE.Matrix4,
        M = new THREE.Matrix3,
        J = new THREE.Matrix3,
        ca = new THREE.Vector3,
        na = new THREE.Frustum,
        pa = new THREE.Vector4,
        C = new THREE.Vector4;
    this.projectVector = function(a, b) {
        b.matrixWorldInverse.getInverse(b.matrixWorld);
        x.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
        return a.applyProjection(x)
    };
    this.unprojectVector = function(a, b) {
        b.projectionMatrixInverse.getInverse(b.projectionMatrix);
        x.multiplyMatrices(b.matrixWorld, b.projectionMatrixInverse);
        return a.applyProjection(x)
    };
    this.pickingRay = function(a, b) {
        a.z = -1;
        var c = new THREE.Vector3(a.x, a.y, 1);
        this.unprojectVector(a, b);
        this.unprojectVector(c, b);
        c.sub(a).normalize();
        return new THREE.Raycaster(a, c)
    };
    var Q = function(a) {
        if (e === h) {
            var b = new THREE.RenderableObject;
            f.push(b);
            h++;
            e++;
            d = b
        } else d = f[e++];
        d.id = a.id;
        d.object = a;
        null !== a.renderDepth ? d.z = a.renderDepth : (E.getPositionFromMatrix(a.matrixWorld), E.applyProjection(x), d.z = E.z);
        return d
    }, R = function(a) {
            if (!1 !== a.visible) {
                a instanceof THREE.Light ? y.lights.push(a) : a instanceof THREE.Mesh || a instanceof THREE.Line ? (!1 === a.frustumCulled || !0 === na.intersectsObject(a)) && y.objects.push(Q(a)) : a instanceof THREE.Sprite && y.sprites.push(Q(a));
                for (var b = 0, c = a.children.length; b < c; b++) R(a.children[b])
            }
        };
    this.projectScene = function(d,
        f, h, m) {
        var E = !1,
            Q, $, ea, V, P, Y, U, ja, sa, ha, Ka, Ga;
        z = n = p = 0;
        y.elements.length = 0;
        !0 === d.autoUpdate && d.updateMatrixWorld();
        void 0 === f.parent && f.updateMatrixWorld();
        O.copy(f.matrixWorldInverse.getInverse(f.matrixWorld));
        x.multiplyMatrices(f.projectionMatrix, O);
        J.getNormalMatrix(O);
        na.setFromMatrix(x);
        e = 0;
        y.objects.length = 0;
        y.sprites.length = 0;
        y.lights.length = 0;
        R(d);
        !0 === h && y.objects.sort(b);
        d = 0;
        for (h = y.objects.length; d < h; d++)
            if (U = y.objects[d].object, I = U.matrixWorld, i = 0, U instanceof THREE.Mesh) {
                ja = U.geometry;
                ea = ja.vertices;
                sa = ja.faces;
                ja = ja.faceVertexUvs;
                M.getNormalMatrix(I);
                Ka = U.material instanceof THREE.MeshFaceMaterial;
                Ga = !0 === Ka ? U.material : null;
                Q = 0;
                for ($ = ea.length; Q < $; Q++) {
                    g = a();
                    g.positionWorld.copy(ea[Q]).applyMatrix4(I);
                    g.positionScreen.copy(g.positionWorld).applyMatrix4(x);
                    var ka = 1 / g.positionScreen.w;
                    g.positionScreen.x *= ka;
                    g.positionScreen.y *= ka;
                    g.positionScreen.z *= ka;
                    g.visible = !(-1 > g.positionScreen.x || 1 < g.positionScreen.x || -1 > g.positionScreen.y || 1 < g.positionScreen.y || -1 > g.positionScreen.z || 1 <
                        g.positionScreen.z)
                }
                ea = 0;
                for (Q = sa.length; ea < Q; ea++)
                    if ($ = sa[ea], ka = !0 === Ka ? Ga.materials[$.materialIndex] : U.material, void 0 !== ka && (Y = ka.side, V = k[$.a], P = k[$.b], ha = k[$.c], F[0] = V.positionScreen, F[1] = P.positionScreen, F[2] = ha.positionScreen, !0 === V.visible || !0 === P.visible || !0 === ha.visible || K.isIntersectionBox(D.setFromPoints(F))))
                        if (E = 0 > (ha.positionScreen.x - V.positionScreen.x) * (P.positionScreen.y - V.positionScreen.y) - (ha.positionScreen.y - V.positionScreen.y) * (P.positionScreen.x - V.positionScreen.x), Y === THREE.DoubleSide ||
                            E === (Y === THREE.FrontSide)) {
                            if (p === s) {
                                var Da = new THREE.RenderableFace3;
                                t.push(Da);
                                s++;
                                p++;
                                l = Da
                            } else l = t[p++];
                            l.id = U.id;
                            l.v1.copy(V);
                            l.v2.copy(P);
                            l.v3.copy(ha);
                            l.normalModel.copy($.normal);
                            !1 === E && (Y === THREE.BackSide || Y === THREE.DoubleSide) && l.normalModel.negate();
                            l.normalModel.applyMatrix3(M).normalize();
                            l.normalModelView.copy(l.normalModel).applyMatrix3(J);
                            l.centroidModel.copy($.centroid).applyMatrix4(I);
                            ha = $.vertexNormals;
                            V = 0;
                            for (P = Math.min(ha.length, 3); V < P; V++) Da = l.vertexNormalsModel[V], Da.copy(ha[V]), !1 === E && (Y === THREE.BackSide || Y === THREE.DoubleSide) && Da.negate(), Da.applyMatrix3(M).normalize(), l.vertexNormalsModelView[V].copy(Da).applyMatrix3(J);
                            l.vertexNormalsLength = ha.length;
                            E = 0;
                            for (V = Math.min(ja.length, 3); E < V; E++)
                                if (ha = ja[E][ea], void 0 !== ha) {
                                    P = 0;
                                    for (Y = ha.length; P < Y; P++) l.uvs[E][P] = ha[P]
                                }
                            l.color = $.color;
                            l.material = ka;
                            ca.copy(l.centroidModel).applyProjection(x);
                            l.z = ca.z;
                            y.elements.push(l)
                        }
            } else if (U instanceof THREE.Line) {
            B.multiplyMatrices(x, I);
            ea = U.geometry.vertices;
            V = a();
            V.positionScreen.copy(ea[0]).applyMatrix4(B);
            sa = U.type === THREE.LinePieces ? 2 : 1;
            Q = 1;
            for ($ = ea.length; Q < $; Q++) V = a(), V.positionScreen.copy(ea[Q]).applyMatrix4(B), 0 < (Q + 1) % sa || (P = k[i - 2], pa.copy(V.positionScreen), C.copy(P.positionScreen), !0 === c(pa, C) && (pa.multiplyScalar(1 / pa.w), C.multiplyScalar(1 / C.w), n === r ? (ja = new THREE.RenderableLine, u.push(ja), r++, n++, q = ja) : q = u[n++], q.id = U.id, q.v1.positionScreen.copy(pa), q.v2.positionScreen.copy(C), q.z = Math.max(pa.z, C.z), q.material = U.material, U.material.vertexColors === THREE.VertexColors && (q.vertexColors[0].copy(U.geometry.colors[Q]),
                q.vertexColors[1].copy(U.geometry.colors[Q - 1])), y.elements.push(q)))
        }
        d = 0;
        for (h = y.sprites.length; d < h; d++) U = y.sprites[d].object, I = U.matrixWorld, U instanceof THREE.Sprite && (A.set(I.elements[12], I.elements[13], I.elements[14], 1), A.applyMatrix4(x), ka = 1 / A.w, A.z *= ka, -1 < A.z && 1 > A.z && (z === w ? (sa = new THREE.RenderableSprite, G.push(sa), w++, z++, v = sa) : v = G[z++], v.id = U.id, v.x = A.x * ka, v.y = A.y * ka, v.z = A.z, v.object = U, v.rotation = U.rotation, v.scale.x = U.scale.x * Math.abs(v.x - (A.x + f.projectionMatrix.elements[0]) / (A.w + f.projectionMatrix.elements[12])),
            v.scale.y = U.scale.y * Math.abs(v.y - (A.y + f.projectionMatrix.elements[5]) / (A.w + f.projectionMatrix.elements[13])), v.material = U.material, y.elements.push(v)));
        !0 === m && y.elements.sort(b);
        return y
    }
};
THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = d instanceof Array ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = e instanceof Array ? e : [];
    this.vertexTangents = [];
    this.materialIndex = void 0 !== f ? f : 0;
    this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        var a = new THREE.Face3(this.a, this.b, this.c);
        a.normal.copy(this.normal);
        a.color.copy(this.color);
        a.centroid.copy(this.centroid);
        a.materialIndex = this.materialIndex;
        var b, c;
        b = 0;
        for (c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
        b = 0;
        for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
        b = 0;
        for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }
};
THREE.Face4 = function(a, b, c, d, e, f, h) {
    console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
    return new THREE.Face3(a, b, c, e, f, h)
};
THREE.Geometry = function() {
    this.id = THREE.GeometryIdCount++;
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.dynamic = !0;
    this.buffersNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate =
        this.elementsNeedUpdate = this.verticesNeedUpdate = !1
};
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a) {
        for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            var e = this.faces[c];
            e.normal.applyMatrix3(b).normalize();
            for (var f = 0, h = e.vertexNormals.length; f < h; f++) e.vertexNormals[f].applyMatrix3(b).normalize();
            e.centroid.applyMatrix4(a)
        }
        this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox();
        this.boundingSphere instanceof
        THREE.Sphere && this.computeBoundingSphere()
    },
    computeCentroids: function() {
        var a, b, c;
        a = 0;
        for (b = this.faces.length; a < b; a++) c = this.faces[a], c.centroid.set(0, 0, 0), c.centroid.add(this.vertices[c.a]), c.centroid.add(this.vertices[c.b]), c.centroid.add(this.vertices[c.c]), c.centroid.divideScalar(3)
    },
    computeFaceNormals: function() {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
            var e = this.faces[c],
                f = this.vertices[e.a],
                h = this.vertices[e.b];
            a.subVectors(this.vertices[e.c], h);
            b.subVectors(f,
                h);
            a.cross(b);
            a.normalize();
            e.normal.copy(a)
        }
    },
    computeVertexNormals: function(a) {
        var b, c, d, e;
        if (void 0 === this.__tmpVertices) {
            e = this.__tmpVertices = Array(this.vertices.length);
            b = 0;
            for (c = this.vertices.length; b < c; b++) e[b] = new THREE.Vector3;
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
        } else {
            e = this.__tmpVertices;
            b = 0;
            for (c = this.vertices.length; b < c; b++) e[b].set(0, 0, 0)
        } if (a) {
            var f, h, g = new THREE.Vector3,
                i = new THREE.Vector3;
            new THREE.Vector3;
            new THREE.Vector3;
            new THREE.Vector3;
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], a = this.vertices[d.a], f = this.vertices[d.b], h = this.vertices[d.c], g.subVectors(h, f), i.subVectors(a, f), g.cross(i), e[d.a].add(g), e[d.b].add(g), e[d.c].add(g)
        } else {
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], e[d.a].add(d.normal), e[d.b].add(d.normal), e[d.c].add(d.normal)
        }
        b = 0;
        for (c = this.vertices.length; b < c; b++) e[b].normalize();
        b = 0;
        for (c = this.faces.length; b < c; b++) d = this.faces[b], d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]),
        d.vertexNormals[2].copy(e[d.c])
    },
    computeMorphNormals: function() {
        var a, b, c, d, e;
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            e = this.faces[c];
            e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone();
            e.__originalVertexNormals || (e.__originalVertexNormals = []);
            a = 0;
            for (b = e.vertexNormals.length; a < b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone()
        }
        var f = new THREE.Geometry;
        f.faces =
            this.faces;
        a = 0;
        for (b = this.morphTargets.length; a < b; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {};
                this.morphNormals[a].faceNormals = [];
                this.morphNormals[a].vertexNormals = [];
                e = this.morphNormals[a].faceNormals;
                var h = this.morphNormals[a].vertexNormals,
                    g, i;
                c = 0;
                for (d = this.faces.length; c < d; c++) g = new THREE.Vector3, i = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, e.push(g), h.push(i)
            }
            h = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices;
            f.computeFaceNormals();
            f.computeVertexNormals();
            c = 0;
            for (d = this.faces.length; c < d; c++) e = this.faces[c], g = h.faceNormals[c], i = h.vertexNormals[c], g.copy(e.normal), i.a.copy(e.vertexNormals[0]), i.b.copy(e.vertexNormals[1]), i.c.copy(e.vertexNormals[2])
        }
        c = 0;
        for (d = this.faces.length; c < d; c++) e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
    },
    computeTangents: function() {
        var a, b, c, d, e, f, h, g, i, k, m, l, p, t, s, q, n, u = [],
            r = [];
        c = new THREE.Vector3;
        var v = new THREE.Vector3,
            z = new THREE.Vector3,
            G = new THREE.Vector3,
            w = new THREE.Vector3;
        a = 0;
        for (b = this.vertices.length; a < b; a++) u[a] = new THREE.Vector3, r[a] = new THREE.Vector3;
        a = 0;
        for (b = this.faces.length; a < b; a++) e = this.faces[a], f = this.faceVertexUvs[0][a], d = e.a, n = e.b, e = e.c, h = this.vertices[d], g = this.vertices[n], i = this.vertices[e], k = f[0], m = f[1], l = f[2], f = g.x - h.x, p = i.x - h.x, t = g.y - h.y, s = i.y - h.y, g = g.z - h.z, h = i.z - h.z, i = m.x - k.x, q = l.x - k.x, m = m.y - k.y, k = l.y - k.y, l = 1 / (i * k - q * m), c.set((k * f - m * p) * l, (k * t - m * s) * l, (k * g - m * h) * l), v.set((i * p - q * f) * l, (i * s - q * t) * l, (i * h - q * g) * l), u[d].add(c), u[n].add(c), u[e].add(c), r[d].add(v),
        r[n].add(v), r[e].add(v);
        v = ["a", "b", "c", "d"];
        a = 0;
        for (b = this.faces.length; a < b; a++) {
            e = this.faces[a];
            for (c = 0; c < Math.min(e.vertexNormals.length, 3); c++) w.copy(e.vertexNormals[c]), d = e[v[c]], n = u[d], z.copy(n), z.sub(w.multiplyScalar(w.dot(n))).normalize(), G.crossVectors(e.vertexNormals[c], n), d = G.dot(r[d]), d = 0 > d ? -1 : 1, e.vertexTangents[c] = new THREE.Vector4(z.x, z.y, z.z, d)
        }
        this.hasTangents = !0
    },
    computeLineDistances: function() {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] =
            a
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
        this.boundingSphere.setFromPoints(this.vertices)
    },
    mergeVertices: function() {
        var a = {}, b = [],
            c = [],
            d, e = Math.pow(10, 4),
            f, h;
        this.__tmpVertices = void 0;
        f = 0;
        for (h = this.vertices.length; f < h; f++) d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z *
            e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
        a = [];
        f = 0;
        for (h = this.faces.length; f < h; f++) {
            e = this.faces[f];
            e.a = c[e.a];
            e.b = c[e.b];
            e.c = c[e.c];
            e = [e.a, e.b, e.c];
            for (d = 0; 3 > d; d++)
                if (e[d] == e[(d + 1) % 3]) {
                    a.push(f);
                    break
                }
        }
        for (f = a.length - 1; 0 <= f; f--) {
            e = a[f];
            this.faces.splice(e, 1);
            c = 0;
            for (h = this.faceVertexUvs.length; c < h; c++) this.faceVertexUvs[c].splice(e, 1)
        }
        f = this.vertices.length - b.length;
        this.vertices = b;
        return f
    },
    clone: function() {
        for (var a = new THREE.Geometry, b = this.vertices, c = 0, d =
                b.length; c < d; c++) a.vertices.push(b[c].clone());
        b = this.faces;
        c = 0;
        for (d = b.length; c < d; c++) a.faces.push(b[c].clone());
        b = this.faceVertexUvs[0];
        c = 0;
        for (d = b.length; c < d; c++) {
            for (var e = b[c], f = [], h = 0, g = e.length; h < g; h++) f.push(new THREE.Vector2(e[h].x, e[h].y));
            a.faceVertexUvs[0].push(f)
        }
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;
THREE.BufferGeometry = function() {
    this.id = THREE.GeometryIdCount++;
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.attributes = {};
    this.dynamic = !0;
    this.offsets = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.morphTargets = []
};
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    addAttribute: function(a, b, c, d) {
        this.attributes[a] = {
            itemSize: d,
            array: new b(c * d)
        }
    },
    applyMatrix: function(a) {
        var b, c;
        this.attributes.position && (b = this.attributes.position.array);
        this.attributes.normal && (c = this.attributes.normal.array);
        void 0 !== b && (a.multiplyVector3Array(b), this.verticesNeedUpdate = !0);
        void 0 !== c && ((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(c), this.normalizeNormals(), this.normalsNeedUpdate = !0)
    },
    computeBoundingBox: function() {
        null ===
            this.boundingBox && (this.boundingBox = new THREE.Box3);
        var a = this.attributes.position.array;
        if (a) {
            var b = this.boundingBox,
                c, d, e;
            3 <= a.length && (b.min.x = b.max.x = a[0], b.min.y = b.max.y = a[1], b.min.z = b.max.z = a[2]);
            for (var f = 3, h = a.length; f < h; f += 3) c = a[f], d = a[f + 1], e = a[f + 2], c < b.min.x ? b.min.x = c : c > b.max.x && (b.max.x = c), d < b.min.y ? b.min.y = d : d > b.max.y && (b.max.y = d), e < b.min.z ? b.min.z = e : e > b.max.z && (b.max.z = e)
        }
        if (void 0 === a || 0 === a.length) this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)
    },
    computeBoundingSphere: function() {
        var a =
            new THREE.Box3,
            b = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position.array;
            if (c) {
                for (var d = this.boundingSphere.center, e = 0, f = c.length; e < f; e += 3) b.set(c[e], c[e + 1], c[e + 2]), a.addPoint(b);
                a.center(d);
                for (var h = 0, e = 0, f = c.length; e < f; e += 3) b.set(c[e], c[e + 1], c[e + 2]), h = Math.max(h, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(h)
            }
        }
    }(),
    computeVertexNormals: function() {
        if (this.attributes.position) {
            var a, b, c, d;
            a = this.attributes.position.array.length;
            if (void 0 === this.attributes.normal) this.attributes.normal = {
                itemSize: 3,
                array: new Float32Array(a)
            };
            else {
                a = 0;
                for (b = this.attributes.normal.array.length; a < b; a++) this.attributes.normal.array[a] = 0
            }
            var e = this.attributes.position.array,
                f = this.attributes.normal.array,
                h, g, i, k, m, l, p = new THREE.Vector3,
                t = new THREE.Vector3,
                s = new THREE.Vector3,
                q = new THREE.Vector3,
                n = new THREE.Vector3;
            if (this.attributes.index) {
                var u = this.attributes.index.array,
                    r = this.offsets;
                c = 0;
                for (d = r.length; c < d; ++c) {
                    b = r[c].start;
                    h = r[c].count;
                    var v =
                        r[c].index;
                    a = b;
                    for (b += h; a < b; a += 3) h = v + u[a], g = v + u[a + 1], i = v + u[a + 2], k = e[3 * h], m = e[3 * h + 1], l = e[3 * h + 2], p.set(k, m, l), k = e[3 * g], m = e[3 * g + 1], l = e[3 * g + 2], t.set(k, m, l), k = e[3 * i], m = e[3 * i + 1], l = e[3 * i + 2], s.set(k, m, l), q.subVectors(s, t), n.subVectors(p, t), q.cross(n), f[3 * h] += q.x, f[3 * h + 1] += q.y, f[3 * h + 2] += q.z, f[3 * g] += q.x, f[3 * g + 1] += q.y, f[3 * g + 2] += q.z, f[3 * i] += q.x, f[3 * i + 1] += q.y, f[3 * i + 2] += q.z
                }
            } else {
                a = 0;
                for (b = e.length; a < b; a += 9) k = e[a], m = e[a + 1], l = e[a + 2], p.set(k, m, l), k = e[a + 3], m = e[a + 4], l = e[a + 5], t.set(k, m, l), k = e[a + 6], m = e[a + 7], l = e[a + 8],
                s.set(k, m, l), q.subVectors(s, t), n.subVectors(p, t), q.cross(n), f[a] = q.x, f[a + 1] = q.y, f[a + 2] = q.z, f[a + 3] = q.x, f[a + 4] = q.y, f[a + 5] = q.z, f[a + 6] = q.x, f[a + 7] = q.y, f[a + 8] = q.z
            }
            this.normalizeNormals();
            this.normalsNeedUpdate = !0
        }
    },
    normalizeNormals: function() {
        for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b
    },
    computeTangents: function() {
        function a(a) {
            na.x = d[3 * a];
            na.y = d[3 * a + 1];
            na.z = d[3 * a + 2];
            pa.copy(na);
            Q = g[a];
            J.copy(Q);
            J.sub(na.multiplyScalar(na.dot(Q))).normalize();
            ca.crossVectors(pa, Q);
            R = ca.dot(i[a]);
            C = 0 > R ? -1 : 1;
            h[4 * a] = J.x;
            h[4 * a + 1] = J.y;
            h[4 * a + 2] = J.z;
            h[4 * a + 3] = C
        }
        if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        else {
            var b = this.attributes.index.array,
                c = this.attributes.position.array,
                d = this.attributes.normal.array,
                e = this.attributes.uv.array,
                f = c.length / 3;
            void 0 === this.attributes.tangent &&
                (this.attributes.tangent = {
                itemSize: 4,
                array: new Float32Array(4 * f)
            });
            for (var h = this.attributes.tangent.array, g = [], i = [], k = 0; k < f; k++) g[k] = new THREE.Vector3, i[k] = new THREE.Vector3;
            var m, l, p, t, s, q, n, u, r, v, z, G, w, y, E, f = new THREE.Vector3,
                k = new THREE.Vector3,
                A, K, D, F, O, x, I, B = this.offsets;
            D = 0;
            for (F = B.length; D < F; ++D) {
                K = B[D].start;
                O = B[D].count;
                var M = B[D].index;
                A = K;
                for (K += O; A < K; A += 3) O = M + b[A], x = M + b[A + 1], I = M + b[A + 2], m = c[3 * O], l = c[3 * O + 1], p = c[3 * O + 2], t = c[3 * x], s = c[3 * x + 1], q = c[3 * x + 2], n = c[3 * I], u = c[3 * I + 1], r = c[3 * I + 2], v = e[2 *
                    O], z = e[2 * O + 1], G = e[2 * x], w = e[2 * x + 1], y = e[2 * I], E = e[2 * I + 1], t -= m, m = n - m, s -= l, l = u - l, q -= p, p = r - p, G -= v, v = y - v, w -= z, z = E - z, E = 1 / (G * z - v * w), f.set((z * t - w * m) * E, (z * s - w * l) * E, (z * q - w * p) * E), k.set((G * m - v * t) * E, (G * l - v * s) * E, (G * p - v * q) * E), g[O].add(f), g[x].add(f), g[I].add(f), i[O].add(k), i[x].add(k), i[I].add(k)
            }
            var J = new THREE.Vector3,
                ca = new THREE.Vector3,
                na = new THREE.Vector3,
                pa = new THREE.Vector3,
                C, Q, R;
            D = 0;
            for (F = B.length; D < F; ++D) {
                K = B[D].start;
                O = B[D].count;
                M = B[D].index;
                A = K;
                for (K += O; A < K; A += 3) O = M + b[A], x = M + b[A + 1], I = M + b[A + 2], a(O), a(x),
                a(I)
            }
            this.tangentsNeedUpdate = this.hasTangents = !0
        }
    },
    clone: function() {
        var a = new THREE.BufferGeometry,
            b = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
            c;
        for (c in this.attributes) {
            for (var d = this.attributes[c], e = d.array, f = {
                    itemSize: d.itemSize,
                    numItems: d.numItems,
                    array: null
                }, d = 0, h = b.length; d < h; d++) {
                var g = b[d];
                if (e instanceof g) {
                    f.array = new g(e);
                    break
                }
            }
            a.attributes[c] = f
        }
        d = 0;
        for (h = this.offsets.length; d < h; d++) b = this.offsets[d], a.offsets.push({
            start: b.start,
            index: b.index,
            count: b.count
        });
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Camera = function() {
    THREE.Object3D.call(this);
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4;
    this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function() {
    var a = new THREE.Matrix4;
    return function(b) {
        a.lookAt(this.position, b, this.up);
        this.quaternion.setFromRotationMatrix(a)
    }
}();
THREE.Camera.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Camera);
    THREE.Object3D.prototype.clone.call(this, a);
    a.matrixWorldInverse.copy(this.matrixWorldInverse);
    a.projectionMatrix.copy(this.projectionMatrix);
    a.projectionMatrixInverse.copy(this.projectionMatrixInverse);
    return a
};
THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this);
    this.left = a;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : 0.1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.OrthographicCamera.prototype.clone = function() {
    var a = new THREE.OrthographicCamera;
    THREE.Camera.prototype.clone.call(this, a);
    a.left = this.left;
    a.right = this.right;
    a.top = this.top;
    a.bottom = this.bottom;
    a.near = this.near;
    a.far = this.far;
    return a
};
THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this);
    this.fov = void 0 !== a ? a : 50;
    this.aspect = void 0 !== b ? b : 1;
    this.near = void 0 !== c ? c : 0.1;
    this.far = void 0 !== d ? d : 2E3;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e, f) {
    this.fullWidth = a;
    this.fullHeight = b;
    this.x = c;
    this.y = d;
    this.width = e;
    this.height = f;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    if (this.fullWidth) {
        var a = this.fullWidth / this.fullHeight,
            b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near,
            c = -b,
            d = a * c,
            a = Math.abs(a * b - d),
            c = Math.abs(b - c);
        this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.PerspectiveCamera.prototype.clone = function() {
    var a = new THREE.PerspectiveCamera;
    THREE.Camera.prototype.clone.call(this, a);
    a.fov = this.fov;
    a.aspect = this.aspect;
    a.near = this.near;
    a.far = this.far;
    return a
};
THREE.Light = function(a) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Light);
    THREE.Object3D.prototype.clone.call(this, a);
    a.color.copy(this.color);
    return a
};
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.clone = function() {
    var a = new THREE.AmbientLight;
    THREE.Light.prototype.clone.call(this, a);
    return a
};
THREE.AreaLight = function(a, b) {
    THREE.Light.call(this, a);
    this.normal = new THREE.Vector3(0, -1, 0);
    this.right = new THREE.Vector3(1, 0, 0);
    this.intensity = void 0 !== b ? b : 1;
    this.height = this.width = 1;
    this.constantAttenuation = 1.5;
    this.linearAttenuation = 0.5;
    this.quadraticAttenuation = 0.1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function(a, b) {
    THREE.Light.call(this, a);
    this.position.set(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraLeft = -500;
    this.shadowCameraTop = this.shadowCameraRight = 500;
    this.shadowCameraBottom = -500;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowCascade = !1;
    this.shadowCascadeOffset = new THREE.Vector3(0,
        0, -1E3);
    this.shadowCascadeCount = 2;
    this.shadowCascadeBias = [0, 0, 0];
    this.shadowCascadeWidth = [512, 512, 512];
    this.shadowCascadeHeight = [512, 512, 512];
    this.shadowCascadeNearZ = [-1, 0.99, 0.998];
    this.shadowCascadeFarZ = [0.99, 0.998, 1];
    this.shadowCascadeArray = [];
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone = function() {
    var a = new THREE.DirectionalLight;
    THREE.Light.prototype.clone.call(this, a);
    a.target = this.target.clone();
    a.intensity = this.intensity;
    a.castShadow = this.castShadow;
    a.onlyShadow = this.onlyShadow;
    return a
};
THREE.HemisphereLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.position.set(0, 100, 0);
    this.groundColor = new THREE.Color(b);
    this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.clone = function() {
    var a = new THREE.HemisphereLight;
    THREE.Light.prototype.clone.call(this, a);
    a.groundColor.copy(this.groundColor);
    a.intensity = this.intensity;
    return a
};
THREE.PointLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.clone = function() {
    var a = new THREE.PointLight;
    THREE.Light.prototype.clone.call(this, a);
    a.intensity = this.intensity;
    a.distance = this.distance;
    return a
};
THREE.SpotLight = function(a, b, c, d, e) {
    THREE.Light.call(this, a);
    this.position.set(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.exponent = void 0 !== e ? e : 10;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraFov = 50;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize =
        this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone = function() {
    var a = new THREE.SpotLight;
    THREE.Light.prototype.clone.call(this, a);
    a.target = this.target.clone();
    a.intensity = this.intensity;
    a.distance = this.distance;
    a.angle = this.angle;
    a.exponent = this.exponent;
    a.castShadow = this.castShadow;
    a.onlyShadow = this.onlyShadow;
    return a
};
THREE.Loader = function(a) {
    this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function() {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function() {}
};
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: "anonymous",
    addStatusElement: function() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.right = "0px";
        a.style.top = "0px";
        a.style.fontSize = "0.8em";
        a.style.textAlign = "left";
        a.style.background = "rgba(0,0,0,0.25)";
        a.style.color = "#fff";
        a.style.width = "120px";
        a.style.padding = "0.5em 0.5em 0.5em 0.5em";
        a.style.zIndex = 1E3;
        a.innerHTML = "Loading ...";
        return a
    },
    updateProgress: function(a) {
        var b = "Loaded ",
            b = a.total ? b + ((100 * a.loaded /
                a.total).toFixed(0) + "%") : b + ((a.loaded / 1E3).toFixed(2) + " KB");
        this.statusDomElement.innerHTML = b
    },
    extractUrlBase: function(a) {
        a = a.split("/");
        a.pop();
        return (1 > a.length ? "." : a.join("/")) + "/"
    },
    initMaterials: function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) c[d] = THREE.Loader.prototype.createMaterial(a[d], b);
        return c
    },
    needsTangents: function(a) {
        for (var b = 0, c = a.length; b < c; b++)
            if (a[b] instanceof THREE.ShaderMaterial) return !0;
        return !1
    },
    createMaterial: function(a, b) {
        function c(a) {
            a = Math.log(a) / Math.LN2;
            return Math.floor(a) ==
                a
        }

        function d(a) {
            a = Math.log(a) / Math.LN2;
            return Math.pow(2, Math.round(a))
        }

        function e(a, e, f, g, i, k, n) {
            var u = /\.dds$/i.test(f),
                r = b + "/" + f;
            if (u) {
                var v = THREE.ImageUtils.loadCompressedTexture(r);
                a[e] = v
            } else v = document.createElement("canvas"), a[e] = new THREE.Texture(v);
            a[e].sourceFile = f;
            g && (a[e].repeat.set(g[0], g[1]), 1 !== g[0] && (a[e].wrapS = THREE.RepeatWrapping), 1 !== g[1] && (a[e].wrapT = THREE.RepeatWrapping));
            i && a[e].offset.set(i[0], i[1]);
            k && (f = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                }, void 0 !==
                f[k[0]] && (a[e].wrapS = f[k[0]]), void 0 !== f[k[1]] && (a[e].wrapT = f[k[1]]));
            n && (a[e].anisotropy = n);
            if (!u) {
                var z = a[e],
                    a = new Image;
                a.onload = function() {
                    if (!c(this.width) || !c(this.height)) {
                        var a = d(this.width),
                            b = d(this.height);
                        z.image.width = a;
                        z.image.height = b;
                        z.image.getContext("2d").drawImage(this, 0, 0, a, b)
                    } else z.image = this;
                    z.needsUpdate = !0
                };
                a.crossOrigin = h.crossOrigin;
                a.src = r
            }
        }

        function f(a) {
            return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
        }
        var h = this,
            g = "MeshLambertMaterial",
            i = {
                color: 15658734,
                opacity: 1,
                map: null,
                lightMap: null,
                normalMap: null,
                bumpMap: null,
                wireframe: !1
            };
        if (a.shading) {
            var k = a.shading.toLowerCase();
            "phong" === k ? g = "MeshPhongMaterial" : "basic" === k && (g = "MeshBasicMaterial")
        }
        void 0 !== a.blending && void 0 !== THREE[a.blending] && (i.blending = THREE[a.blending]);
        if (void 0 !== a.transparent || 1 > a.opacity) i.transparent = a.transparent;
        void 0 !== a.depthTest && (i.depthTest = a.depthTest);
        void 0 !== a.depthWrite && (i.depthWrite = a.depthWrite);
        void 0 !== a.visible && (i.visible = a.visible);
        void 0 !== a.flipSided && (i.side = THREE.BackSide);
        void 0 !== a.doubleSided && (i.side = THREE.DoubleSide);
        void 0 !== a.wireframe && (i.wireframe = a.wireframe);
        void 0 !== a.vertexColors && ("face" === a.vertexColors ? i.vertexColors = THREE.FaceColors : a.vertexColors && (i.vertexColors = THREE.VertexColors));
        a.colorDiffuse ? i.color = f(a.colorDiffuse) : a.DbgColor && (i.color = a.DbgColor);
        a.colorSpecular && (i.specular = f(a.colorSpecular));
        a.colorAmbient && (i.ambient = f(a.colorAmbient));
        a.transparency && (i.opacity = a.transparency);
        a.specularCoef && (i.shininess = a.specularCoef);
        a.mapDiffuse &&
            b && e(i, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy);
        a.mapLight && b && e(i, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
        a.mapBump && b && e(i, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
        a.mapNormal && b && e(i, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
        a.mapSpecular && b && e(i, "specularMap", a.mapSpecular, a.mapSpecularRepeat,
            a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
        a.mapBumpScale && (i.bumpScale = a.mapBumpScale);
        a.mapNormal ? (g = THREE.ShaderLib.normalmap, k = THREE.UniformsUtils.clone(g.uniforms), k.tNormal.value = i.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), i.map && (k.tDiffuse.value = i.map, k.enableDiffuse.value = !0), i.specularMap && (k.tSpecular.value = i.specularMap, k.enableSpecular.value = !0), i.lightMap && (k.tAO.value = i.lightMap, k.enableAO.value = !0), k.uDiffuseColor.value.setHex(i.color),
            k.uSpecularColor.value.setHex(i.specular), k.uAmbientColor.value.setHex(i.ambient), k.uShininess.value = i.shininess, void 0 !== i.opacity && (k.uOpacity.value = i.opacity), g = new THREE.ShaderMaterial({
                fragmentShader: g.fragmentShader,
                vertexShader: g.vertexShader,
                uniforms: k,
                lights: !0,
                fog: !0
            }), i.transparent && (g.transparent = !0)) : g = new THREE[g](i);
        void 0 !== a.DbgName && (g.name = a.DbgName);
        return g
    }
};
THREE.XHRLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(a, b, c, d) {
        var e = this,
            f = new XMLHttpRequest;
        void 0 !== b && f.addEventListener("load", function(c) {
            b(c.target.responseText);
            e.manager.itemEnd(a)
        }, !1);
        void 0 !== c && f.addEventListener("progress", function(a) {
            c(a)
        }, !1);
        void 0 !== d && f.addEventListener("error", function(a) {
            d(a)
        }, !1);
        void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin);
        f.open("GET", a, !0);
        f.send(null);
        e.manager.itemStart(a)
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    }
};
THREE.ImageLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(a, b, c, d) {
        var e = this,
            f = document.createElement("img");
        void 0 !== b && f.addEventListener("load", function() {
            e.manager.itemEnd(a);
            b(this)
        }, !1);
        void 0 !== c && f.addEventListener("progress", function(a) {
            c(a)
        }, !1);
        void 0 !== d && f.addEventListener("error", function(a) {
            d(a)
        }, !1);
        void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin);
        f.src = a;
        e.manager.itemStart(a);
        return f
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    }
};
THREE.JSONLoader = function(a) {
    THREE.Loader.call(this, a);
    this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function(a, b, c) {
    c = c && "string" === typeof c ? c : this.extractUrlBase(a);
    this.onLoadStart();
    this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function(a, b, c, d, e) {
    var f = new XMLHttpRequest,
        h = 0;
    f.onreadystatechange = function() {
        if (f.readyState === f.DONE)
            if (200 === f.status || 0 === f.status) {
                if (f.responseText) {
                    var g = JSON.parse(f.responseText),
                        g = a.parse(g, d);
                    c(g.geometry, g.materials)
                } else console.warn("THREE.JSONLoader: [" + b + "] seems to be unreachable or file there is empty");
                a.onLoadComplete()
            } else console.error("THREE.JSONLoader: Couldn't load [" + b + "] [" + f.status + "]");
            else f.readyState === f.LOADING ? e && (0 === h &&
                (h = f.getResponseHeader("Content-Length")), e({
                    total: h,
                    loaded: f.responseText.length
                })) : f.readyState === f.HEADERS_RECEIVED && void 0 !== e && (h = f.getResponseHeader("Content-Length"))
    };
    f.open("GET", b, !0);
    f.withCredentials = this.withCredentials;
    f.send(null)
};
THREE.JSONLoader.prototype.parse = function(a, b) {
    var c = new THREE.Geometry,
        d = void 0 !== a.scale ? 1 / a.scale : 1,
        e, f, h, g, i, k, m, l, p, t, s, q, n, u, r = a.faces;
    p = a.vertices;
    var v = a.normals,
        z = a.colors,
        G = 0;
    if (void 0 !== a.uvs) {
        for (e = 0; e < a.uvs.length; e++) a.uvs[e].length && G++;
        for (e = 0; e < G; e++) c.faceVertexUvs[e] = []
    }
    g = 0;
    for (i = p.length; g < i;) k = new THREE.Vector3, k.x = p[g++] * d, k.y = p[g++] * d, k.z = p[g++] * d, c.vertices.push(k);
    g = 0;
    for (i = r.length; g < i;)
        if (p = r[g++], t = p & 1, h = p & 2, e = p & 8, m = p & 16, s = p & 32, k = p & 64, p &= 128, t) {
            t = new THREE.Face3;
            t.a = r[g];
            t.b = r[g + 1];
            t.c = r[g + 3];
            q = new THREE.Face3;
            q.a = r[g + 1];
            q.b = r[g + 2];
            q.c = r[g + 3];
            g += 4;
            h && (h = r[g++], t.materialIndex = h, q.materialIndex = h);
            h = c.faces.length;
            if (e)
                for (e = 0; e < G; e++) {
                    n = a.uvs[e];
                    c.faceVertexUvs[e][h] = [];
                    c.faceVertexUvs[e][h + 1] = [];
                    for (f = 0; 4 > f; f++) l = r[g++], u = n[2 * l], l = n[2 * l + 1], u = new THREE.Vector2(u, l), 2 !== f && c.faceVertexUvs[e][h].push(u), 0 !== f && c.faceVertexUvs[e][h + 1].push(u)
                }
            m && (m = 3 * r[g++], t.normal.set(v[m++], v[m++], v[m]), q.normal.copy(t.normal));
            if (s)
                for (e = 0; 4 > e; e++) m = 3 * r[g++], s = new THREE.Vector3(v[m++],
                    v[m++], v[m]), 2 !== e && t.vertexNormals.push(s), 0 !== e && q.vertexNormals.push(s);
            k && (k = r[g++], k = z[k], t.color.setHex(k), q.color.setHex(k));
            if (p)
                for (e = 0; 4 > e; e++) k = r[g++], k = z[k], 2 !== e && t.vertexColors.push(new THREE.Color(k)), 0 !== e && q.vertexColors.push(new THREE.Color(k));
            c.faces.push(t);
            c.faces.push(q)
        } else {
            t = new THREE.Face3;
            t.a = r[g++];
            t.b = r[g++];
            t.c = r[g++];
            h && (h = r[g++], t.materialIndex = h);
            h = c.faces.length;
            if (e)
                for (e = 0; e < G; e++) {
                    n = a.uvs[e];
                    c.faceVertexUvs[e][h] = [];
                    for (f = 0; 3 > f; f++) l = r[g++], u = n[2 * l], l = n[2 * l + 1],
                    u = new THREE.Vector2(u, l), c.faceVertexUvs[e][h].push(u)
                }
            m && (m = 3 * r[g++], t.normal.set(v[m++], v[m++], v[m]));
            if (s)
                for (e = 0; 3 > e; e++) m = 3 * r[g++], s = new THREE.Vector3(v[m++], v[m++], v[m]), t.vertexNormals.push(s);
            k && (k = r[g++], t.color.setHex(z[k]));
            if (p)
                for (e = 0; 3 > e; e++) k = r[g++], t.vertexColors.push(new THREE.Color(z[k]));
            c.faces.push(t)
        }
    if (a.skinWeights) {
        g = 0;
        for (i = a.skinWeights.length; g < i; g += 2) r = a.skinWeights[g], v = a.skinWeights[g + 1], c.skinWeights.push(new THREE.Vector4(r, v, 0, 0))
    }
    if (a.skinIndices) {
        g = 0;
        for (i = a.skinIndices.length; g <
            i; g += 2) r = a.skinIndices[g], v = a.skinIndices[g + 1], c.skinIndices.push(new THREE.Vector4(r, v, 0, 0))
    }
    c.bones = a.bones;
    c.animation = a.animation;
    c.animations = a.animations;
    if (void 0 !== a.morphTargets) {
        g = 0;
        for (i = a.morphTargets.length; g < i; g++) {
            c.morphTargets[g] = {};
            c.morphTargets[g].name = a.morphTargets[g].name;
            c.morphTargets[g].vertices = [];
            z = c.morphTargets[g].vertices;
            G = a.morphTargets[g].vertices;
            r = 0;
            for (v = G.length; r < v; r += 3) p = new THREE.Vector3, p.x = G[r] * d, p.y = G[r + 1] * d, p.z = G[r + 2] * d, z.push(p)
        }
    }
    if (void 0 !== a.morphColors) {
        g =
            0;
        for (i = a.morphColors.length; g < i; g++) {
            c.morphColors[g] = {};
            c.morphColors[g].name = a.morphColors[g].name;
            c.morphColors[g].colors = [];
            v = c.morphColors[g].colors;
            z = a.morphColors[g].colors;
            d = 0;
            for (r = z.length; d < r; d += 3) G = new THREE.Color(16755200), G.setRGB(z[d], z[d + 1], z[d + 2]), v.push(G)
        }
    }
    c.computeCentroids();
    c.computeFaceNormals();
    c.computeBoundingSphere();
    if (void 0 === a.materials) return {
        geometry: c
    };
    d = this.initMaterials(a.materials, b);
    this.needsTangents(d) && c.computeTangents();
    return {
        geometry: c,
        materials: d
    }
};
THREE.LoadingManager = function(a, b, c) {
    var d = this,
        e = 0,
        f = 0;
    this.onLoad = a;
    this.onProgress = b;
    this.onError = c;
    this.itemStart = function() {
        f++
    };
    this.itemEnd = function(a) {
        e++;
        if (void 0 !== d.onProgress) d.onProgress(a, e, f);
        if (e === f && void 0 !== d.onLoad) d.onLoad()
    }
};
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(a, b) {
        var c = this,
            d = new THREE.XHRLoader;
        d.setCrossOrigin(this.crossOrigin);
        d.load(a, function(a) {
            b(c.parse(JSON.parse(a)))
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function(a) {
        var b = new THREE.BufferGeometry,
            c = a.attributes,
            d = a.offsets,
            a = a.boundingSphere,
            e;
        for (e in c) {
            var f = c[e];
            b.attributes[e] = {
                itemSize: f.itemSize,
                array: new self[f.type](f.array)
            }
        }
        void 0 !== d && (b.offsets = JSON.parse(JSON.stringify(d)));
        void 0 !== a && (b.boundingSphere = new THREE.Sphere((new THREE.Vector3).fromArray(void 0 !== a.center ? a.center : [0, 0, 0]), a.radius));
        return b
    }
};
THREE.GeometryLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.GeometryLoader.prototype = {
    constructor: THREE.GeometryLoader,
    load: function(a, b) {
        var c = this,
            d = new THREE.XHRLoader;
        d.setCrossOrigin(this.crossOrigin);
        d.load(a, function(a) {
            b(c.parse(JSON.parse(a)))
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function() {}
};
THREE.MaterialLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(a, b) {
        var c = this,
            d = new THREE.XHRLoader;
        d.setCrossOrigin(this.crossOrigin);
        d.load(a, function(a) {
            b(c.parse(JSON.parse(a)))
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function(a) {
        var b = new THREE[a.type];
        void 0 !== a.color && b.color.setHex(a.color);
        void 0 !== a.ambient && b.ambient.setHex(a.ambient);
        void 0 !== a.emissive && b.emissive.setHex(a.emissive);
        void 0 !== a.specular && b.specular.setHex(a.specular);
        void 0 !== a.shininess &&
            (b.shininess = a.shininess);
        void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
        void 0 !== a.blending && (b.blending = a.blending);
        void 0 !== a.side && (b.side = a.side);
        void 0 !== a.opacity && (b.opacity = a.opacity);
        void 0 !== a.transparent && (b.transparent = a.transparent);
        void 0 !== a.wireframe && (b.wireframe = a.wireframe);
        if (void 0 !== a.materials)
            for (var c = 0, d = a.materials.length; c < d; c++) b.materials.push(this.parse(a.materials[c]));
        return b
    }
};
THREE.ObjectLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(a, b) {
        var c = this,
            d = new THREE.XHRLoader(c.manager);
        d.setCrossOrigin(this.crossOrigin);
        d.load(a, function(a) {
            b(c.parse(JSON.parse(a)))
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function(a) {
        var b = this.parseGeometries(a.geometries),
            c = this.parseMaterials(a.materials);
        return this.parseObject(a.object, b, c)
    },
    parseGeometries: function(a) {
        var b = {};
        if (void 0 !== a)
            for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader,
                    e = 0, f = a.length; e < f; e++) {
                var h, g = a[e];
                switch (g.type) {
                    case "PlaneGeometry":
                        h = new THREE.PlaneGeometry(g.width, g.height, g.widthSegments, g.heightSegments);
                        break;
                    case "CircleGeometry":
                        h = new THREE.CircleGeometry(g.radius, g.segments);
                        break;
                    case "CubeGeometry":
                        h = new THREE.CubeGeometry(g.width, g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments);
                        break;
                    case "CylinderGeometry":
                        h = new THREE.CylinderGeometry(g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded);
                        break;
                    case "SphereGeometry":
                        h =
                            new THREE.SphereGeometry(g.radius, g.widthSegments, g.heightSegments, g.phiStart, g.phiLength, g.thetaStart, g.thetaLength);
                        break;
                    case "IcosahedronGeometry":
                        h = new THREE.IcosahedronGeometry(g.radius, g.detail);
                        break;
                    case "TorusGeometry":
                        h = new THREE.TorusGeometry(g.radius, g.tube, g.radialSegments, g.tubularSegments, g.arc);
                        break;
                    case "TorusKnotGeometry":
                        h = new THREE.TorusKnotGeometry(g.radius, g.tube, g.radialSegments, g.tubularSegments, g.p, g.q, g.heightScale);
                        break;
                    case "BufferGeometry":
                        h = d.parse(g.data);
                        break;
                    case "Geometry":
                        h =
                            c.parse(g.data).geometry
                }
                h.uuid = g.uuid;
                void 0 !== g.name && (h.name = g.name);
                b[g.uuid] = h
            }
        return b
    },
    parseMaterials: function(a) {
        var b = {};
        if (void 0 !== a)
            for (var c = new THREE.MaterialLoader, d = 0, e = a.length; d < e; d++) {
                var f = a[d],
                    h = c.parse(f);
                h.uuid = f.uuid;
                void 0 !== f.name && (h.name = f.name);
                b[f.uuid] = h
            }
        return b
    },
    parseObject: function() {
        var a = new THREE.Matrix4;
        return function(b, c, d) {
            var e;
            switch (b.type) {
                case "Scene":
                    e = new THREE.Scene;
                    break;
                case "PerspectiveCamera":
                    e = new THREE.PerspectiveCamera(b.fov, b.aspect, b.near,
                        b.far);
                    break;
                case "OrthographicCamera":
                    e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
                    break;
                case "AmbientLight":
                    e = new THREE.AmbientLight(b.color);
                    break;
                case "DirectionalLight":
                    e = new THREE.DirectionalLight(b.color, b.intensity);
                    break;
                case "PointLight":
                    e = new THREE.PointLight(b.color, b.intensity, b.distance);
                    break;
                case "SpotLight":
                    e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent);
                    break;
                case "HemisphereLight":
                    e = new THREE.HemisphereLight(b.color, b.groundColor,
                        b.intensity);
                    break;
                case "Mesh":
                    e = c[b.geometry];
                    var f = d[b.material];
                    void 0 === e && console.error("THREE.ObjectLoader: Undefined geometry " + b.geometry);
                    void 0 === f && console.error("THREE.ObjectLoader: Undefined material " + b.material);
                    e = new THREE.Mesh(e, f);
                    break;
                case "Sprite":
                    f = d[b.material];
                    void 0 === f && console.error("THREE.ObjectLoader: Undefined material " + b.material);
                    e = new THREE.Sprite(f);
                    break;
                default:
                    e = new THREE.Object3D
            }
            e.uuid = b.uuid;
            void 0 !== b.name && (e.name = b.name);
            void 0 !== b.matrix ? (a.fromArray(b.matrix),
                a.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale));
            void 0 !== b.visible && (e.visible = b.visible);
            void 0 !== b.userData && (e.userData = b.userData);
            if (void 0 !== b.children)
                for (var h in b.children) e.add(this.parseObject(b.children[h], c, d));
            return e
        }
    }()
};
THREE.SceneLoader = function() {
    this.onLoadStart = function() {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function() {};
    this.callbackSync = function() {};
    this.callbackProgress = function() {};
    this.geometryHandlers = {};
    this.hierarchyHandlers = {};
    this.addGeometryHandler("ascii", THREE.JSONLoader)
};
THREE.SceneLoader.prototype = {
    constructor: THREE.SceneLoader,
    load: function(a, b) {
        var c = this,
            d = new THREE.XHRLoader(c.manager);
        d.setCrossOrigin(this.crossOrigin);
        d.load(a, function(d) {
            c.parse(JSON.parse(d), b, a)
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    addGeometryHandler: function(a, b) {
        this.geometryHandlers[a] = {
            loaderClass: b
        }
    },
    addHierarchyHandler: function(a, b) {
        this.hierarchyHandlers[a] = {
            loaderClass: b
        }
    },
    parse: function(a, b, c) {
        function d(a, b) {
            return "relativeToHTML" == b ? a : p + "/" + a
        }

        function e() {
            f(y.scene,
                A.objects)
        }

        function f(a, b) {
            var c, e, h, i, k, m;
            for (m in b) {
                var p = y.objects[m],
                    n = b[m];
                if (void 0 === p) {
                    if (n.type && n.type in l.hierarchyHandlers) {
                        if (void 0 === n.loading) {
                            c = {
                                type: 1,
                                url: 1,
                                material: 1,
                                position: 1,
                                rotation: 1,
                                scale: 1,
                                visible: 1,
                                children: 1,
                                userData: 1,
                                skin: 1,
                                morph: 1,
                                mirroredLoop: 1,
                                duration: 1
                            };
                            var u = {}, v;
                            for (v in n) v in c || (u[v] = n[v]);
                            s = y.materials[n.material];
                            n.loading = !0;
                            c = l.hierarchyHandlers[n.type].loaderObject;
                            c.options ? c.load(d(n.url, A.urlBaseType), g(m, a, s, n)) : c.load(d(n.url, A.urlBaseType), g(m,
                                a, s, n), u)
                        }
                    } else if (void 0 !== n.geometry) {
                        if (t = y.geometries[n.geometry]) {
                            p = !1;
                            s = y.materials[n.material];
                            p = s instanceof THREE.ShaderMaterial;
                            e = n.position;
                            h = n.rotation;
                            i = n.scale;
                            c = n.matrix;
                            k = n.quaternion;
                            n.material || (s = new THREE.MeshFaceMaterial(y.face_materials[n.geometry]));
                            s instanceof THREE.MeshFaceMaterial && 0 === s.materials.length && (s = new THREE.MeshFaceMaterial(y.face_materials[n.geometry]));
                            if (s instanceof THREE.MeshFaceMaterial)
                                for (u = 0; u < s.materials.length; u++) p = p || s.materials[u] instanceof THREE.ShaderMaterial;
                            p && t.computeTangents();
                            n.skin ? p = new THREE.SkinnedMesh(t, s) : n.morph ? (p = new THREE.MorphAnimMesh(t, s), void 0 !== n.duration && (p.duration = n.duration), void 0 !== n.time && (p.time = n.time), void 0 !== n.mirroredLoop && (p.mirroredLoop = n.mirroredLoop), s.morphNormals && t.computeMorphNormals()) : p = new THREE.Mesh(t, s);
                            p.name = m;
                            c ? (p.matrixAutoUpdate = !1, p.matrix.set(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15])) : (p.position.fromArray(e), k ? p.quaternion.fromArray(k) : p.rotation.fromArray(h),
                                p.scale.fromArray(i));
                            p.visible = n.visible;
                            p.castShadow = n.castShadow;
                            p.receiveShadow = n.receiveShadow;
                            a.add(p);
                            y.objects[m] = p
                        }
                    } else if ("AmbientLight" === n.type || "PointLight" === n.type || "DirectionalLight" === n.type || "SpotLight" === n.type || "HemisphereLight" === n.type || "AreaLight" === n.type) {
                        u = n.color;
                        c = n.intensity;
                        e = n.distance;
                        h = n.position;
                        i = n.rotation;
                        switch (n.type) {
                            case "AmbientLight":
                                r = new THREE.AmbientLight(u);
                                break;
                            case "PointLight":
                                r = new THREE.PointLight(u, c, e);
                                r.position.fromArray(h);
                                break;
                            case "DirectionalLight":
                                r =
                                    new THREE.DirectionalLight(u, c);
                                r.position.fromArray(n.direction);
                                break;
                            case "SpotLight":
                                r = new THREE.SpotLight(u, c, e, 1);
                                r.angle = n.angle;
                                r.position.fromArray(h);
                                r.target.set(h[0], h[1] - e, h[2]);
                                r.target.applyEuler(new THREE.Euler(i[0], i[1], i[2], "XYZ"));
                                break;
                            case "HemisphereLight":
                                r = new THREE.DirectionalLight(u, c, e);
                                r.target.set(h[0], h[1] - e, h[2]);
                                r.target.applyEuler(new THREE.Euler(i[0], i[1], i[2], "XYZ"));
                                break;
                            case "AreaLight":
                                r = new THREE.AreaLight(u, c), r.position.fromArray(h), r.width = n.size, r.height =
                                    n.size_y
                        }
                        a.add(r);
                        r.name = m;
                        y.lights[m] = r;
                        y.objects[m] = r
                    } else "PerspectiveCamera" === n.type || "OrthographicCamera" === n.type ? (e = n.position, h = n.rotation, k = n.quaternion, "PerspectiveCamera" === n.type ? q = new THREE.PerspectiveCamera(n.fov, n.aspect, n.near, n.far) : "OrthographicCamera" === n.type && (q = new THREE.OrthographicCamera(n.left, n.right, n.top, n.bottom, n.near, n.far)), q.name = m, q.position.fromArray(e), void 0 !== k ? q.quaternion.fromArray(k) : void 0 !== h && q.rotation.fromArray(h), a.add(q), y.cameras[m] = q, y.objects[m] =
                        q) : (e = n.position, h = n.rotation, i = n.scale, k = n.quaternion, p = new THREE.Object3D, p.name = m, p.position.fromArray(e), k ? p.quaternion.fromArray(k) : p.rotation.fromArray(h), p.scale.fromArray(i), p.visible = void 0 !== n.visible ? n.visible : !1, a.add(p), y.objects[m] = p, y.empties[m] = p); if (p) {
                        if (void 0 !== n.userData)
                            for (var z in n.userData) p.userData[z] = n.userData[z];
                        if (void 0 !== n.groups)
                            for (u = 0; u < n.groups.length; u++) c = n.groups[u], void 0 === y.groups[c] && (y.groups[c] = []), y.groups[c].push(m)
                    }
                }
                void 0 !== p && void 0 !== n.children &&
                    f(p, n.children)
            }
        }

        function h(a) {
            return function(b, c) {
                b.name = a;
                y.geometries[a] = b;
                y.face_materials[a] = c;
                e();
                v -= 1;
                l.onLoadComplete();
                k()
            }
        }

        function g(a, b, c, d) {
            return function(f) {
                var f = f.content ? f.content : f.dae ? f.scene : f,
                    h = d.rotation,
                    g = d.quaternion,
                    i = d.scale;
                f.position.fromArray(d.position);
                g ? f.quaternion.fromArray(g) : f.rotation.fromArray(h);
                f.scale.fromArray(i);
                c && f.traverse(function(a) {
                    a.material = c
                });
                var m = void 0 !== d.visible ? d.visible : !0;
                f.traverse(function(a) {
                    a.visible = m
                });
                b.add(f);
                f.name = a;
                y.objects[a] =
                    f;
                e();
                v -= 1;
                l.onLoadComplete();
                k()
            }
        }

        function i(a) {
            return function(b, c) {
                b.name = a;
                y.geometries[a] = b;
                y.face_materials[a] = c
            }
        }

        function k() {
            l.callbackProgress({
                totalModels: G,
                totalTextures: w,
                loadedModels: G - v,
                loadedTextures: w - z
            }, y);
            l.onLoadProgress();
            if (0 === v && 0 === z) {
                for (var a = 0; a < E.length; a++) {
                    var c = E[a],
                        d = y.objects[c.targetName];
                    d ? c.object.target = d : (c.object.target = new THREE.Object3D, y.scene.add(c.object.target));
                    c.object.target.userData.targetInverse = c.object
                }
                b(y)
            }
        }

        function m(a, b) {
            b(a);
            if (void 0 !== a.children)
                for (var c in a.children) m(a.children[c],
                    b)
        }
        var l = this,
            p = THREE.Loader.prototype.extractUrlBase(c),
            t, s, q, n, u, r, v, z, G, w, y, E = [],
            A = a,
            K;
        for (K in this.geometryHandlers) a = this.geometryHandlers[K].loaderClass, this.geometryHandlers[K].loaderObject = new a;
        for (K in this.hierarchyHandlers) a = this.hierarchyHandlers[K].loaderClass, this.hierarchyHandlers[K].loaderObject = new a;
        z = v = 0;
        y = {
            scene: new THREE.Scene,
            geometries: {},
            face_materials: {},
            materials: {},
            textures: {},
            objects: {},
            cameras: {},
            lights: {},
            fogs: {},
            empties: {},
            groups: {}
        };
        if (A.transform && (K = A.transform.position,
            a = A.transform.rotation, c = A.transform.scale, K && y.scene.position.fromArray(K), a && y.scene.rotation.fromArray(a), c && y.scene.scale.fromArray(c), K || a || c)) y.scene.updateMatrix(), y.scene.updateMatrixWorld();
        K = function(a) {
            return function() {
                z -= a;
                k();
                l.onLoadComplete()
            }
        };
        for (var D in A.fogs) a = A.fogs[D], "linear" === a.type ? n = new THREE.Fog(0, a.near, a.far) : "exp2" === a.type && (n = new THREE.FogExp2(0, a.density)), a = a.color, n.color.setRGB(a[0], a[1], a[2]), y.fogs[D] = n;
        for (var F in A.geometries) n = A.geometries[F], n.type in
            this.geometryHandlers && (v += 1, l.onLoadStart());
        for (var O in A.objects) m(A.objects[O], function(a) {
            a.type && a.type in l.hierarchyHandlers && (v += 1, l.onLoadStart())
        });
        G = v;
        for (F in A.geometries)
            if (n = A.geometries[F], "cube" === n.type) t = new THREE.CubeGeometry(n.width, n.height, n.depth, n.widthSegments, n.heightSegments, n.depthSegments), t.name = F, y.geometries[F] = t;
            else if ("plane" === n.type) t = new THREE.PlaneGeometry(n.width, n.height, n.widthSegments, n.heightSegments), t.name = F, y.geometries[F] = t;
        else if ("sphere" === n.type) t =
            new THREE.SphereGeometry(n.radius, n.widthSegments, n.heightSegments), t.name = F, y.geometries[F] = t;
        else if ("cylinder" === n.type) t = new THREE.CylinderGeometry(n.topRad, n.botRad, n.height, n.radSegs, n.heightSegs), t.name = F, y.geometries[F] = t;
        else if ("torus" === n.type) t = new THREE.TorusGeometry(n.radius, n.tube, n.segmentsR, n.segmentsT), t.name = F, y.geometries[F] = t;
        else if ("icosahedron" === n.type) t = new THREE.IcosahedronGeometry(n.radius, n.subdivisions), t.name = F, y.geometries[F] = t;
        else if (n.type in this.geometryHandlers) {
            O = {};
            for (u in n) "type" !== u && "url" !== u && (O[u] = n[u]);
            this.geometryHandlers[n.type].loaderObject.load(d(n.url, A.urlBaseType), h(F), O)
        } else "embedded" === n.type && (O = A.embeds[n.id], O.metadata = A.metadata, O && (O = this.geometryHandlers.ascii.loaderObject.parse(O, ""), i(F)(O.geometry, O.materials)));
        for (var x in A.textures)
            if (F = A.textures[x], F.url instanceof Array) {
                z += F.url.length;
                for (u = 0; u < F.url.length; u++) l.onLoadStart()
            } else z += 1, l.onLoadStart();
        w = z;
        for (x in A.textures) {
            F = A.textures[x];
            void 0 !== F.mapping && void 0 !==
                THREE[F.mapping] && (F.mapping = new THREE[F.mapping]);
            if (F.url instanceof Array) {
                O = F.url.length;
                n = [];
                for (u = 0; u < O; u++) n[u] = d(F.url[u], A.urlBaseType);
                u = (u = /\.dds$/i.test(n[0])) ? THREE.ImageUtils.loadCompressedTextureCube(n, F.mapping, K(O)) : THREE.ImageUtils.loadTextureCube(n, F.mapping, K(O))
            } else u = /\.dds$/i.test(F.url), O = d(F.url, A.urlBaseType), n = K(1), u = u ? THREE.ImageUtils.loadCompressedTexture(O, F.mapping, n) : THREE.ImageUtils.loadTexture(O, F.mapping, n), void 0 !== THREE[F.minFilter] && (u.minFilter = THREE[F.minFilter]),
            void 0 !== THREE[F.magFilter] && (u.magFilter = THREE[F.magFilter]), F.anisotropy && (u.anisotropy = F.anisotropy), F.repeat && (u.repeat.set(F.repeat[0], F.repeat[1]), 1 !== F.repeat[0] && (u.wrapS = THREE.RepeatWrapping), 1 !== F.repeat[1] && (u.wrapT = THREE.RepeatWrapping)), F.offset && u.offset.set(F.offset[0], F.offset[1]), F.wrap && (O = {
                repeat: THREE.RepeatWrapping,
                mirror: THREE.MirroredRepeatWrapping
            }, void 0 !== O[F.wrap[0]] && (u.wrapS = O[F.wrap[0]]), void 0 !== O[F.wrap[1]] && (u.wrapT = O[F.wrap[1]]));
            y.textures[x] = u
        }
        var I, B;
        for (I in A.materials) {
            x =
                A.materials[I];
            for (B in x.parameters) "envMap" === B || "map" === B || "lightMap" === B || "bumpMap" === B ? x.parameters[B] = y.textures[x.parameters[B]] : "shading" === B ? x.parameters[B] = "flat" === x.parameters[B] ? THREE.FlatShading : THREE.SmoothShading : "side" === B ? x.parameters[B] = "double" == x.parameters[B] ? THREE.DoubleSide : "back" == x.parameters[B] ? THREE.BackSide : THREE.FrontSide : "blending" === B ? x.parameters[B] = x.parameters[B] in THREE ? THREE[x.parameters[B]] : THREE.NormalBlending : "combine" === B ? x.parameters[B] = x.parameters[B] in THREE ?
                THREE[x.parameters[B]] : THREE.MultiplyOperation : "vertexColors" === B ? "face" == x.parameters[B] ? x.parameters[B] = THREE.FaceColors : x.parameters[B] && (x.parameters[B] = THREE.VertexColors) : "wrapRGB" === B && (K = x.parameters[B], x.parameters[B] = new THREE.Vector3(K[0], K[1], K[2]));
            void 0 !== x.parameters.opacity && 1 > x.parameters.opacity && (x.parameters.transparent = !0);
            x.parameters.normalMap ? (K = THREE.ShaderLib.normalmap, F = THREE.UniformsUtils.clone(K.uniforms), u = x.parameters.color, O = x.parameters.specular, n = x.parameters.ambient,
                D = x.parameters.shininess, F.tNormal.value = y.textures[x.parameters.normalMap], x.parameters.normalScale && F.uNormalScale.value.set(x.parameters.normalScale[0], x.parameters.normalScale[1]), x.parameters.map && (F.tDiffuse.value = x.parameters.map, F.enableDiffuse.value = !0), x.parameters.envMap && (F.tCube.value = x.parameters.envMap, F.enableReflection.value = !0, F.uReflectivity.value = x.parameters.reflectivity), x.parameters.lightMap && (F.tAO.value = x.parameters.lightMap, F.enableAO.value = !0), x.parameters.specularMap &&
                (F.tSpecular.value = y.textures[x.parameters.specularMap], F.enableSpecular.value = !0), x.parameters.displacementMap && (F.tDisplacement.value = y.textures[x.parameters.displacementMap], F.enableDisplacement.value = !0, F.uDisplacementBias.value = x.parameters.displacementBias, F.uDisplacementScale.value = x.parameters.displacementScale), F.uDiffuseColor.value.setHex(u), F.uSpecularColor.value.setHex(O), F.uAmbientColor.value.setHex(n), F.uShininess.value = D, x.parameters.opacity && (F.uOpacity.value = x.parameters.opacity),
                s = new THREE.ShaderMaterial({
                    fragmentShader: K.fragmentShader,
                    vertexShader: K.vertexShader,
                    uniforms: F,
                    lights: !0,
                    fog: !0
                })) : s = new THREE[x.type](x.parameters);
            s.name = I;
            y.materials[I] = s
        }
        for (I in A.materials)
            if (x = A.materials[I], x.parameters.materials) {
                B = [];
                for (u = 0; u < x.parameters.materials.length; u++) B.push(y.materials[x.parameters.materials[u]]);
                y.materials[I].materials = B
            }
        e();
        y.cameras && A.defaults.camera && (y.currentCamera = y.cameras[A.defaults.camera]);
        y.fogs && A.defaults.fog && (y.scene.fog = y.fogs[A.defaults.fog]);
        l.callbackSync(y);
        k()
    }
};
THREE.TextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(a, b) {
        var c = new THREE.ImageLoader(this.manager);
        c.setCrossOrigin(this.crossOrigin);
        c.load(a, function(a) {
            a = new THREE.Texture(a);
            a.needsUpdate = !0;
            void 0 !== b && b(a)
        })
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    }
};
THREE.Material = function() {
    this.id = THREE.MaterialIdCount++;
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.side = THREE.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.blending = THREE.NormalBlending;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.depthWrite = this.depthTest = !0;
    this.polygonOffset = !1;
    this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.needsUpdate = this.visible = !0
};
THREE.Material.prototype = {
    constructor: THREE.Material,
    setValues: function(a) {
        if (void 0 !== a)
            for (var b in a) {
                var c = a[b];
                if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                else if (b in this) {
                    var d = this[b];
                    d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" == b ? Number(c) : c
                }
            }
    },
    clone: function(a) {
        void 0 === a && (a = new THREE.Material);
        a.name = this.name;
        a.side = this.side;
        a.opacity = this.opacity;
        a.transparent = this.transparent;
        a.blending = this.blending;
        a.blendSrc = this.blendSrc;
        a.blendDst = this.blendDst;
        a.blendEquation = this.blendEquation;
        a.depthTest = this.depthTest;
        a.depthWrite = this.depthWrite;
        a.polygonOffset = this.polygonOffset;
        a.polygonOffsetFactor = this.polygonOffsetFactor;
        a.polygonOffsetUnits = this.polygonOffsetUnits;
        a.alphaTest = this.alphaTest;
        a.overdraw = this.overdraw;
        a.visible = this.visible;
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function() {
    var a = new THREE.LineBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.linewidth = this.linewidth;
    a.linecap = this.linecap;
    a.linejoin = this.linejoin;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.LineDashedMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.scale = this.linewidth = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function() {
    var a = new THREE.LineDashedMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.linewidth = this.linewidth;
    a.scale = this.scale;
    a.dashSize = this.dashSize;
    a.gapSize = this.gapSize;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.MeshBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function() {
    var a = new THREE.MeshBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin =
        this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    return a
};
THREE.MeshLambertMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.wrapAround = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap =
        "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function() {
    var a = new THREE.MeshLambertMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshPhongMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.metal = !1;
    this.perPixel = !0;
    this.wrapAround = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.bumpMap = this.lightMap = this.map = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.envMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function() {
    var a = new THREE.MeshPhongMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.specular.copy(this.specular);
    a.shininess = this.shininess;
    a.metal = this.metal;
    a.perPixel = this.perPixel;
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.bumpMap = this.bumpMap;
    a.bumpScale = this.bumpScale;
    a.normalMap = this.normalMap;
    a.normalScale.copy(this.normalScale);
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshDepthMaterial = function(a) {
    THREE.Material.call(this);
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function() {
    var a = new THREE.MeshDepthMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshNormalMaterial = function(a) {
    THREE.Material.call(this, a);
    this.shading = THREE.FlatShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphTargets = !1;
    this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function() {
    var a = new THREE.MeshNormalMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshFaceMaterial = function(a) {
    this.materials = a instanceof Array ? a : []
};
THREE.MeshFaceMaterial.prototype.clone = function() {
    for (var a = new THREE.MeshFaceMaterial, b = 0; b < this.materials.length; b++) a.materials.push(this.materials[b].clone());
    return a
};
THREE.ParticleSystemMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.ParticleSystemMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleSystemMaterial.prototype.clone = function() {
    var a = new THREE.ParticleSystemMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.size = this.size;
    a.sizeAttenuation = this.sizeAttenuation;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.ParticleBasicMaterial = THREE.ParticleSystemMaterial;
THREE.ShaderMaterial = function(a) {
    THREE.Material.call(this);
    this.vertexShader = this.fragmentShader = "void main() {}";
    this.uniforms = {};
    this.defines = {};
    this.attributes = null;
    this.shading = THREE.SmoothShading;
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    };
    this.index0AttributeName = "position";
    this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function() {
    var a = new THREE.ShaderMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.fragmentShader = this.fragmentShader;
    a.vertexShader = this.vertexShader;
    a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
    a.attributes = this.attributes;
    a.defines = this.defines;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.fog = this.fog;
    a.lights = this.lights;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets =
        this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.SpriteMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.rotation = 0;
    this.fog = !1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = new THREE.Vector2(1, 1);
    this.setValues(a)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function() {
    var a = new THREE.SpriteMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.rotation = this.rotation;
    a.uvOffset.copy(this.uvOffset);
    a.uvScale.copy(this.uvScale);
    a.fog = this.fog;
    return a
};
THREE.SpriteCanvasMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.program = function() {};
    this.setValues(a)
};
THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.clone = function() {
    var a = new THREE.SpriteCanvasMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.program = this.program;
    return a
};
THREE.ParticleCanvasMaterial = THREE.SpriteCanvasMaterial;
THREE.Texture = function(a, b, c, d, e, f, h, g, i) {
    this.id = THREE.TextureIdCount++;
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.image = a;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : new THREE.UVMapping;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== i ? i : 1;
    this.format = void 0 !== h ? h : THREE.RGBAFormat;
    this.type = void 0 !== g ? g : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.needsUpdate = !1;
    this.onUpdate = null
};
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function(a) {
        void 0 === a && (a = new THREE.Texture);
        a.image = this.image;
        a.mipmaps = this.mipmaps.slice(0);
        a.mapping = this.mapping;
        a.wrapS = this.wrapS;
        a.wrapT = this.wrapT;
        a.magFilter = this.magFilter;
        a.minFilter = this.minFilter;
        a.anisotropy = this.anisotropy;
        a.format = this.format;
        a.type = this.type;
        a.offset.copy(this.offset);
        a.repeat.copy(this.repeat);
        a.generateMipmaps = this.generateMipmaps;
        a.premultiplyAlpha = this.premultiplyAlpha;
        a.flipY = this.flipY;
        a.unpackAlignment =
            this.unpackAlignment;
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;
THREE.CompressedTexture = function(a, b, c, d, e, f, h, g, i, k, m) {
    THREE.Texture.call(this, null, f, h, g, i, k, d, e, m);
    this.image = {
        width: b,
        height: c
    };
    this.mipmaps = a;
    this.generateMipmaps = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function() {
    var a = new THREE.CompressedTexture;
    THREE.Texture.prototype.clone.call(this, a);
    return a
};
THREE.DataTexture = function(a, b, c, d, e, f, h, g, i, k, m) {
    THREE.Texture.call(this, null, f, h, g, i, k, d, e, m);
    this.image = {
        data: a,
        width: b,
        height: c
    }
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function() {
    var a = new THREE.DataTexture;
    THREE.Texture.prototype.clone.call(this, a);
    return a
};
THREE.ParticleSystem = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.ParticleSystemMaterial({
        color: 16777215 * Math.random()
    });
    this.frustumCulled = this.sortParticles = !1
};
THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.ParticleSystem(this.geometry, this.material));
    a.sortParticles = this.sortParticles;
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Line = function(a, b, c) {
    THREE.Object3D.call(this);
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.type = void 0 !== c ? c : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.type));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Mesh = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.updateMorphTargets()
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
    }
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a) {
    if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
    return 0
};
THREE.Mesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Bone = function(a) {
    THREE.Object3D.call(this);
    this.skin = a;
    this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update = function(a, b) {
    this.matrixAutoUpdate && (b |= this.updateMatrix());
    if (b || this.matrixWorldNeedsUpdate) a ? this.skinMatrix.multiplyMatrices(a, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, b = !0;
    var c, d = this.children.length;
    for (c = 0; c < d; c++) this.children[c].update(this.skinMatrix, b)
};
THREE.SkinnedMesh = function(a, b, c) {
    THREE.Mesh.call(this, a, b);
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var d, e, f;
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (a = 0; a < this.geometry.bones.length; a++) c = this.geometry.bones[a], d = c.pos, e = c.rotq, f = c.scl, b = this.addBone(), b.name = c.name, b.position.set(d[0], d[1], d[2]), b.quaternion.set(e[0], e[1], e[2], e[3]), void 0 !== f ? b.scale.set(f[0], f[1], f[2]) : b.scale.set(1, 1, 1);
        for (a = 0; a < this.bones.length; a++) c =
            this.geometry.bones[a], b = this.bones[a], -1 === c.parent ? this.add(b) : this.bones[c.parent].add(b);
        a = this.bones.length;
        this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < a ? 64 : 64 < a ? 32 : 16 < a ? 16 : 8, this.boneMatrices = new Float32Array(4 * this.boneTextureWidth * this.boneTextureHeight), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter =
            THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * a);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.addBone = function(a) {
    void 0 === a && (a = new THREE.Bone(this));
    this.bones.push(a);
    return a
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function() {
    var a = new THREE.Matrix4;
    return function(b) {
        this.matrixAutoUpdate && this.updateMatrix();
        if (this.matrixWorldNeedsUpdate || b) this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1;
        for (var b = 0, c = this.children.length; b < c; b++) {
            var d = this.children[b];
            d instanceof THREE.Bone ? d.update(this.identityMatrix, !1) : d.updateMatrixWorld(!0)
        }
        if (void 0 == this.boneInverses) {
            this.boneInverses = [];
            b = 0;
            for (c = this.bones.length; b < c; b++) d = new THREE.Matrix4, d.getInverse(this.bones[b].skinMatrix), this.boneInverses.push(d)
        }
        b = 0;
        for (c = this.bones.length; b < c; b++) a.multiplyMatrices(this.bones[b].skinMatrix, this.boneInverses[b]), a.flattenToArrayOffset(this.boneMatrices, 16 * b);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}();
THREE.SkinnedMesh.prototype.pose = function() {
    this.updateMatrixWorld(!0);
    this.normalizeSkinWeights()
};
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry)
        for (var a = 0; a < this.geometry.skinIndices.length; a++) {
            var b = this.geometry.skinWeights[a],
                c = 1 / b.lengthManhattan();
            Infinity !== c ? b.multiplyScalar(c) : b.set(1)
        }
};
THREE.SkinnedMesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
    THREE.Mesh.prototype.clone.call(this, a);
    return a
};
THREE.MorphAnimMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.duration = 1E3;
    this.mirroredLoop = !1;
    this.currentKeyframe = this.lastKeyframe = this.time = 0;
    this.direction = 1;
    this.directionBackwards = !1;
    this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function(a, b) {
    this.startKeyframe = a;
    this.endKeyframe = b;
    this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
    this.direction = 1;
    this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
    this.direction = -1;
    this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function() {
    var a = this.geometry;
    a.animations || (a.animations = {});
    for (var b, c = a.animations, d = /([a-z]+)(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
        var h = a.morphTargets[e].name.match(d);
        if (h && 1 < h.length) {
            h = h[1];
            c[h] || (c[h] = {
                start: Infinity,
                end: -Infinity
            });
            var g = c[h];
            e < g.start && (g.start = e);
            e > g.end && (g.end = e);
            b || (b = h)
        }
    }
    a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function(a, b, c) {
    this.geometry.animations || (this.geometry.animations = {});
    this.geometry.animations[a] = {
        start: b,
        end: c
    }
};
THREE.MorphAnimMesh.prototype.playAnimation = function(a, b) {
    var c = this.geometry.animations[a];
    c ? (this.setFrameRange(c.start, c.end), this.duration = 1E3 * ((c.end - c.start) / b), this.time = 0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function(a) {
    var b = this.duration / this.length;
    this.time += this.direction * a;
    if (this.mirroredLoop) {
        if (this.time > this.duration || 0 > this.time) this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)
    } else this.time %= this.duration, 0 > this.time && (this.time += this.duration);
    a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
    a !== this.currentKeyframe &&
        (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
    b = this.time % b / b;
    this.directionBackwards && (b = 1 - b);
    this.morphTargetInfluences[this.currentKeyframe] = b;
    this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.MorphAnimMesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
    a.duration = this.duration;
    a.mirroredLoop = this.mirroredLoop;
    a.time = this.time;
    a.lastKeyframe = this.lastKeyframe;
    a.currentKeyframe = this.currentKeyframe;
    a.direction = this.direction;
    a.directionBackwards = this.directionBackwards;
    THREE.Mesh.prototype.clone.call(this, a);
    return a
};
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.objects = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function(a, b) {
    void 0 === b && (b = 0);
    for (var b = Math.abs(b), c = 0; c < this.objects.length && !(b < this.objects[c].distance); c++);
    this.objects.splice(c, 0, {
        distance: b,
        object: a
    });
    this.add(a)
};
THREE.LOD.prototype.getObjectForDistance = function(a) {
    for (var b = 1, c = this.objects.length; b < c && !(a < this.objects[b].distance); b++);
    return this.objects[b - 1].object
};
THREE.LOD.prototype.update = function() {
    var a = new THREE.Vector3,
        b = new THREE.Vector3;
    return function(c) {
        if (1 < this.objects.length) {
            a.getPositionFromMatrix(c.matrixWorld);
            b.getPositionFromMatrix(this.matrixWorld);
            c = a.distanceTo(b);
            this.objects[0].object.visible = !0;
            for (var d = 1, e = this.objects.length; d < e; d++)
                if (c >= this.objects[d].distance) this.objects[d - 1].object.visible = !1, this.objects[d].object.visible = !0;
                else break;
            for (; d < e; d++) this.objects[d].object.visible = !1
        }
    }
}();
THREE.LOD.prototype.clone = function() {};
THREE.Sprite = function(a) {
    THREE.Object3D.call(this);
    this.material = void 0 !== a ? a : new THREE.SpriteMaterial
};
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix = function() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = !0
};
THREE.Sprite.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Sprite(this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Particle = THREE.Sprite;
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.overrideMaterial = this.fog = null;
    this.autoUpdate = !0;
    this.matrixAutoUpdate = !1;
    this.__lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function(a) {
    if (a instanceof THREE.Light) - 1 === this.__lights.indexOf(a) && this.__lights.push(a), a.target && void 0 === a.target.parent && this.add(a.target);
    else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone)) {
        this.__objectsAdded.push(a);
        var b = this.__objectsRemoved.indexOf(a); - 1 !== b && this.__objectsRemoved.splice(b, 1)
    }
    for (b = 0; b < a.children.length; b++) this.__addObject(a.children[b])
};
THREE.Scene.prototype.__removeObject = function(a) {
    if (a instanceof THREE.Light) {
        var b = this.__lights.indexOf(a); - 1 !== b && this.__lights.splice(b, 1);
        if (a.shadowCascadeArray)
            for (b = 0; b < a.shadowCascadeArray.length; b++) this.__removeObject(a.shadowCascadeArray[b])
    } else a instanceof THREE.Camera || (this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1));
    for (b = 0; b < a.children.length; b++) this.__removeObject(a.children[b])
};
THREE.Scene.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Scene);
    THREE.Object3D.prototype.clone.call(this, a);
    null !== this.fog && (a.fog = this.fog.clone());
    null !== this.overrideMaterial && (a.overrideMaterial = this.overrideMaterial.clone());
    a.autoUpdate = this.autoUpdate;
    a.matrixAutoUpdate = this.matrixAutoUpdate;
    return a
};
THREE.Fog = function(a, b, c) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3
};
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function(a, b) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.density = void 0 !== b ? b : 2.5E-4
};
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.CanvasRenderer = function(a) {
    function b(a, b, c) {
        for (var d = 0, e = z.length; d < e; d++) {
            var f = z[d];
            Ka.copy(f.color);
            if (f instanceof THREE.DirectionalLight) {
                var h = ta.getPositionFromMatrix(f.matrixWorld).normalize(),
                    g = b.dot(h);
                0 >= g || (g *= f.intensity, c.add(Ka.multiplyScalar(g)))
            } else f instanceof THREE.PointLight && (h = ta.getPositionFromMatrix(f.matrixWorld), g = b.dot(ta.subVectors(h, a).normalize()), 0 >= g || (g *= 0 == f.distance ? 1 : 1 - Math.min(a.distanceTo(h) / f.distance, 1), 0 != g && (g *= f.intensity, c.add(Ka.multiplyScalar(g)))))
        }
    }

    function c(a, b, c, d) {
        m(b);
        l(c);
        p(d);
        t(a.getStyle());
        D.stroke();
        Ea.expandByScalar(2 * b)
    }

    function d(a) {
        s(a.getStyle());
        D.fill()
    }

    function e(a, b, c, e, f, h, g, j, i, k, m, l, n) {
        if (!(n instanceof THREE.DataTexture || void 0 === n.image || 0 === n.image.width)) {
            if (!0 === n.needsUpdate) {
                var p = n.wrapS === THREE.RepeatWrapping,
                    q = n.wrapT === THREE.RepeatWrapping;
                Ga[n.id] = D.createPattern(n.image, !0 === p && !0 === q ? "repeat" : !0 === p && !1 === q ? "repeat-x" : !1 === p && !0 === q ? "repeat-y" : "no-repeat");
                n.needsUpdate = !1
            }
            void 0 === Ga[n.id] ? s("rgba(0,0,0,1)") :
                s(Ga[n.id]);
            var p = n.offset.x / n.repeat.x,
                q = n.offset.y / n.repeat.y,
                t = n.image.width * n.repeat.x,
                r = n.image.height * n.repeat.y,
                g = (g + p) * t,
                j = (1 - j + q) * r,
                c = c - a,
                e = e - b,
                f = f - a,
                h = h - b,
                i = (i + p) * t - g,
                k = (1 - k + q) * r - j,
                m = (m + p) * t - g,
                l = (1 - l + q) * r - j,
                p = i * l - m * k;
            0 === p ? (void 0 === ka[n.id] && (b = document.createElement("canvas"), b.width = n.image.width, b.height = n.image.height, b = b.getContext("2d"), b.drawImage(n.image, 0, 0), ka[n.id] = b.getImageData(0, 0, n.image.width, n.image.height).data), b = ka[n.id], g = 4 * (Math.floor(g) + Math.floor(j) * n.image.width),
                V.setRGB(b[g] / 255, b[g + 1] / 255, b[g + 2] / 255), d(V)) : (p = 1 / p, n = (l * c - k * f) * p, k = (l * e - k * h) * p, c = (i * f - m * c) * p, e = (i * h - m * e) * p, a = a - n * g - c * j, g = b - k * g - e * j, D.save(), D.transform(n, k, c, e, a, g), D.fill(), D.restore())
        }
    }

    function f(a, b, c, d, e, f, h, g, j, i, k, m, n) {
        var l, p;
        l = n.width - 1;
        p = n.height - 1;
        h *= l;
        g *= p;
        c -= a;
        d -= b;
        e -= a;
        f -= b;
        j = j * l - h;
        i = i * p - g;
        k = k * l - h;
        m = m * p - g;
        p = 1 / (j * m - k * i);
        l = (m * c - i * e) * p;
        i = (m * d - i * f) * p;
        c = (j * e - k * c) * p;
        d = (j * f - k * d) * p;
        a = a - l * h - c * g;
        b = b - i * h - d * g;
        D.save();
        D.transform(l, i, c, d, a, b);
        D.clip();
        D.drawImage(n, 0, 0);
        D.restore()
    }

    function h(a,
        b, c, d) {
        ua[0] = 255 * a.r | 0;
        ua[1] = 255 * a.g | 0;
        ua[2] = 255 * a.b | 0;
        ua[4] = 255 * b.r | 0;
        ua[5] = 255 * b.g | 0;
        ua[6] = 255 * b.b | 0;
        ua[8] = 255 * c.r | 0;
        ua[9] = 255 * c.g | 0;
        ua[10] = 255 * c.b | 0;
        ua[12] = 255 * d.r | 0;
        ua[13] = 255 * d.g | 0;
        ua[14] = 255 * d.b | 0;
        j.putImageData(Oa, 0, 0);
        Fa.drawImage(Pa, 0, 0);
        return La
    }

    function g(a, b, c) {
        var d = b.x - a.x,
            e = b.y - a.y,
            f = d * d + e * e;
        0 !== f && (c /= Math.sqrt(f), d *= c, e *= c, b.x += d, b.y += e, a.x -= d, a.y -= e)
    }

    function i(a) {
        x !== a && (x = D.globalAlpha = a)
    }

    function k(a) {
        I !== a && (a === THREE.NormalBlending ? D.globalCompositeOperation = "source-over" :
            a === THREE.AdditiveBlending ? D.globalCompositeOperation = "lighter" : a === THREE.SubtractiveBlending && (D.globalCompositeOperation = "darker"), I = a)
    }

    function m(a) {
        J !== a && (J = D.lineWidth = a)
    }

    function l(a) {
        ca !== a && (ca = D.lineCap = a)
    }

    function p(a) {
        na !== a && (na = D.lineJoin = a)
    }

    function t(a) {
        B !== a && (B = D.strokeStyle = a)
    }

    function s(a) {
        M !== a && (M = D.fillStyle = a)
    }

    function q(a, b) {
        if (pa !== a || C !== b) D.setLineDash([a, b]), pa = a, C = b
    }
    console.log("THREE.CanvasRenderer", THREE.REVISION);
    var n = THREE.Math.smoothstep,
        a = a || {}, u = this,
        r, v, z, G =
            new THREE.Projector,
        w = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
        y = w.width,
        E = w.height,
        A = Math.floor(y / 2),
        K = Math.floor(E / 2),
        D = w.getContext("2d"),
        F = new THREE.Color(0),
        O = 0,
        x = 1,
        I = 0,
        B = null,
        M = null,
        J = null,
        ca = null,
        na = null,
        pa = null,
        C = 0,
        Q, R, L, da;
    new THREE.RenderableVertex;
    new THREE.RenderableVertex;
    var za, Ba, ba, Aa, $, ea, V = new THREE.Color,
        P = new THREE.Color,
        Y = new THREE.Color,
        U = new THREE.Color,
        ja = new THREE.Color,
        sa = new THREE.Color,
        ha = new THREE.Color,
        Ka = new THREE.Color,
        Ga = {}, ka = {}, Da, Ua, Qa, wa, bb,
        cb, Ma, fb, sb, pb, va = new THREE.Box2,
        la = new THREE.Box2,
        Ea = new THREE.Box2,
        gb = new THREE.Color,
        ra = new THREE.Color,
        fa = new THREE.Color,
        ta = new THREE.Vector3,
        Pa, j, Oa, ua, La, Fa, Ra = 16;
    Pa = document.createElement("canvas");
    Pa.width = Pa.height = 2;
    j = Pa.getContext("2d");
    j.fillStyle = "rgba(0,0,0,1)";
    j.fillRect(0, 0, 2, 2);
    Oa = j.getImageData(0, 0, 2, 2);
    ua = Oa.data;
    La = document.createElement("canvas");
    La.width = La.height = Ra;
    Fa = La.getContext("2d");
    Fa.translate(-Ra / 2, -Ra / 2);
    Fa.scale(Ra, Ra);
    Ra--;
    void 0 === D.setLineDash && (D.setLineDash =
        void 0 !== D.mozDash ? function(a) {
            D.mozDash = null !== a[0] ? a : null
        } : function() {});
    this.domElement = w;
    this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    };
    this.supportsVertexTextures = function() {};
    this.setFaceCulling = function() {};
    this.setSize = function(a, b, c) {
        y = a * this.devicePixelRatio;
        E = b * this.devicePixelRatio;
        A = Math.floor(y / 2);
        K = Math.floor(E / 2);
        w.width = y;
        w.height = E;
        1 !== this.devicePixelRatio && !1 !== c && (w.style.width = a + "px", w.style.height = b + "px");
        va.set(new THREE.Vector2(-A, -K), new THREE.Vector2(A, K));
        la.set(new THREE.Vector2(-A, -K), new THREE.Vector2(A, K));
        x = 1;
        I = 0;
        na = ca = J = M = B = null
    };
    this.setClearColor = function(a, b) {
        F.set(a);
        O = void 0 !== b ? b : 1;
        la.set(new THREE.Vector2(-A, -K), new THREE.Vector2(A, K))
    };
    this.setClearColorHex = function(a, b) {
        console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");
        this.setClearColor(a,
            b)
    };
    this.getMaxAnisotropy = function() {
        return 0
    };
    this.clear = function() {
        D.setTransform(1, 0, 0, -1, A, K);
        !1 === la.empty() && (la.intersect(va), la.expandByScalar(2), 1 > O && D.clearRect(la.min.x | 0, la.min.y | 0, la.max.x - la.min.x | 0, la.max.y - la.min.y | 0), 0 < O && (k(THREE.NormalBlending), i(1), s("rgba(" + Math.floor(255 * F.r) + "," + Math.floor(255 * F.g) + "," + Math.floor(255 * F.b) + "," + O + ")"), D.fillRect(la.min.x | 0, la.min.y | 0, la.max.x - la.min.x | 0, la.max.y - la.min.y | 0)), la.makeEmpty())
    };
    this.render = function(a, j) {
        if (!1 === j instanceof THREE.Camera) console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            !0 === this.autoClear && this.clear();
            D.setTransform(1, 0, 0, -1, A, K);
            u.info.render.vertices = 0;
            u.info.render.faces = 0;
            r = G.projectScene(a, j, this.sortObjects, this.sortElements);
            v = r.elements;
            z = r.lights;
            Q = j;
            gb.setRGB(0, 0, 0);
            ra.setRGB(0, 0, 0);
            fa.setRGB(0, 0, 0);
            for (var y = 0, F = z.length; y < F; y++) {
                var B = z[y],
                    E = B.color;
                B instanceof THREE.AmbientLight ? gb.add(E) : B instanceof THREE.DirectionalLight ? ra.add(E) : B instanceof THREE.PointLight && fa.add(E)
            }
            y = 0;
            for (F = v.length; y < F; y++) {
                var x = v[y],
                    w = x.material;
                if (!(void 0 === w || !1 === w.visible)) {
                    Ea.makeEmpty();
                    if (x instanceof THREE.RenderableSprite) {
                        R = x;
                        R.x *= A;
                        R.y *= K;
                        var B = R,
                            E = x,
                            I = w;
                        i(I.opacity);
                        k(I.blending);
                        x = E.scale.x * A;
                        w = E.scale.y * K;
                        Ea.min.set(B.x - 0.5 * x, B.y - 0.5 * w);
                        Ea.max.set(B.x + 0.5 * x, B.y + 0.5 * w);
                        !1 === va.isIntersectionBox(Ea) ? Ea.makeEmpty() : I instanceof THREE.SpriteMaterial || I instanceof THREE.ParticleSystemMaterial ? (null !== I.map ? (E = I.map.image, D.save(), D.translate(B.x, B.y), D.rotate(-I.rotation), D.scale(x, -w), D.drawImage(E, 0, 0, E.width, E.height, -0.5, -0.5, 1, 1)) : (s(I.color.getStyle()),
                            D.save(), D.translate(B.x, B.y), D.rotate(-E.rotation), D.scale(x, w), D.fillRect(-0.5, -0.5, 1, 1)), D.restore()) : I instanceof THREE.SpriteCanvasMaterial && (t(I.color.getStyle()), s(I.color.getStyle()), D.save(), D.translate(B.x, B.y), D.rotate(-E.rotation), D.scale(x, w), I.program(D), D.restore())
                    } else if (x instanceof THREE.RenderableLine) {
                        if (R = x.v1, L = x.v2, R.positionScreen.x *= A, R.positionScreen.y *= K, L.positionScreen.x *= A, L.positionScreen.y *= K, Ea.setFromPoints([R.positionScreen, L.positionScreen]), !0 === va.isIntersectionBox(Ea))
                            if (B =
                                R, E = L, I = x, x = w, i(x.opacity), k(x.blending), D.beginPath(), D.moveTo(B.positionScreen.x, B.positionScreen.y), D.lineTo(E.positionScreen.x, E.positionScreen.y), x instanceof THREE.LineBasicMaterial) {
                                m(x.linewidth);
                                l(x.linecap);
                                p(x.linejoin);
                                if (x.vertexColors !== THREE.VertexColors) t(x.color.getStyle());
                                else if (w = I.vertexColors[0].getStyle(), I = I.vertexColors[1].getStyle(), w === I) t(w);
                                else {
                                    try {
                                        var O = D.createLinearGradient(B.positionScreen.x, B.positionScreen.y, E.positionScreen.x, E.positionScreen.y);
                                        O.addColorStop(0,
                                            w);
                                        O.addColorStop(1, I)
                                    } catch (C) {
                                        O = w
                                    }
                                    t(O)
                                }
                                D.stroke();
                                Ea.expandByScalar(2 * x.linewidth)
                            } else x instanceof THREE.LineDashedMaterial && (m(x.linewidth), l(x.linecap), p(x.linejoin), t(x.color.getStyle()), q(x.dashSize, x.gapSize), D.stroke(), Ea.expandByScalar(2 * x.linewidth), q(null, null))
                    } else if (x instanceof THREE.RenderableFace3) {
                        R = x.v1;
                        L = x.v2;
                        da = x.v3;
                        if (-1 > R.positionScreen.z || 1 < R.positionScreen.z) continue;
                        if (-1 > L.positionScreen.z || 1 < L.positionScreen.z) continue;
                        if (-1 > da.positionScreen.z || 1 < da.positionScreen.z) continue;
                        R.positionScreen.x *= A;
                        R.positionScreen.y *= K;
                        L.positionScreen.x *= A;
                        L.positionScreen.y *= K;
                        da.positionScreen.x *= A;
                        da.positionScreen.y *= K;
                        0 < w.overdraw && (g(R.positionScreen, L.positionScreen, w.overdraw), g(L.positionScreen, da.positionScreen, w.overdraw), g(da.positionScreen, R.positionScreen, w.overdraw));
                        Ea.setFromPoints([R.positionScreen, L.positionScreen, da.positionScreen]);
                        if (!0 === va.isIntersectionBox(Ea)) {
                            B = R;
                            E = L;
                            I = da;
                            u.info.render.vertices += 3;
                            u.info.render.faces++;
                            i(w.opacity);
                            k(w.blending);
                            za = B.positionScreen.x;
                            Ba = B.positionScreen.y;
                            ba = E.positionScreen.x;
                            Aa = E.positionScreen.y;
                            $ = I.positionScreen.x;
                            ea = I.positionScreen.y;
                            var J = za,
                                M = Ba,
                                ca = ba,
                                ka = Aa,
                                na = $,
                                pa = ea;
                            D.beginPath();
                            D.moveTo(J, M);
                            D.lineTo(ca, ka);
                            D.lineTo(na, pa);
                            D.closePath();
                            (w instanceof THREE.MeshLambertMaterial || w instanceof THREE.MeshPhongMaterial) && null === w.map ? (sa.copy(w.color), ha.copy(w.emissive), w.vertexColors === THREE.FaceColors && sa.multiply(x.color), !1 === w.wireframe && w.shading === THREE.SmoothShading && 3 === x.vertexNormalsLength ? (P.copy(gb), Y.copy(gb),
                                U.copy(gb), b(x.v1.positionWorld, x.vertexNormalsModel[0], P), b(x.v2.positionWorld, x.vertexNormalsModel[1], Y), b(x.v3.positionWorld, x.vertexNormalsModel[2], U), P.multiply(sa).add(ha), Y.multiply(sa).add(ha), U.multiply(sa).add(ha), ja.addColors(Y, U).multiplyScalar(0.5), Qa = h(P, Y, U, ja), f(za, Ba, ba, Aa, $, ea, 0, 0, 1, 0, 0, 1, Qa)) : (V.copy(gb), b(x.centroidModel, x.normalModel, V), V.multiply(sa).add(ha), !0 === w.wireframe ? c(V, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : d(V))) : w instanceof THREE.MeshBasicMaterial ||
                                w instanceof THREE.MeshLambertMaterial || w instanceof THREE.MeshPhongMaterial ? null !== w.map ? w.map.mapping instanceof THREE.UVMapping && (wa = x.uvs[0], e(za, Ba, ba, Aa, $, ea, wa[0].x, wa[0].y, wa[1].x, wa[1].y, wa[2].x, wa[2].y, w.map)) : null !== w.envMap ? w.envMap.mapping instanceof THREE.SphericalReflectionMapping && (ta.copy(x.vertexNormalsModelView[0]), bb = 0.5 * ta.x + 0.5, cb = 0.5 * ta.y + 0.5, ta.copy(x.vertexNormalsModelView[1]), Ma = 0.5 * ta.x + 0.5, fb = 0.5 * ta.y + 0.5, ta.copy(x.vertexNormalsModelView[2]), sb = 0.5 * ta.x + 0.5, pb = 0.5 * ta.y +
                                    0.5, e(za, Ba, ba, Aa, $, ea, bb, cb, Ma, fb, sb, pb, w.envMap)) : (V.copy(w.color), w.vertexColors === THREE.FaceColors && V.multiply(x.color), !0 === w.wireframe ? c(V, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : d(V)) : w instanceof THREE.MeshDepthMaterial ? (Da = Q.near, Ua = Q.far, P.r = P.g = P.b = 1 - n(B.positionScreen.z * B.positionScreen.w, Da, Ua), Y.r = Y.g = Y.b = 1 - n(E.positionScreen.z * E.positionScreen.w, Da, Ua), U.r = U.g = U.b = 1 - n(I.positionScreen.z * I.positionScreen.w, Da, Ua), ja.addColors(Y, U).multiplyScalar(0.5), Qa = h(P, Y, U,
                                    ja), f(za, Ba, ba, Aa, $, ea, 0, 0, 1, 0, 0, 1, Qa)) : w instanceof THREE.MeshNormalMaterial && (B = void 0, w.shading === THREE.FlatShading ? (B = x.normalModelView, V.setRGB(B.x, B.y, B.z).multiplyScalar(0.5).addScalar(0.5), !0 === w.wireframe ? c(V, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : d(V)) : w.shading === THREE.SmoothShading && (B = x.vertexNormalsModelView[0], P.setRGB(B.x, B.y, B.z).multiplyScalar(0.5).addScalar(0.5), B = x.vertexNormalsModelView[1], Y.setRGB(B.x, B.y, B.z).multiplyScalar(0.5).addScalar(0.5), B = x.vertexNormalsModelView[2],
                                    U.setRGB(B.x, B.y, B.z).multiplyScalar(0.5).addScalar(0.5), ja.addColors(Y, U).multiplyScalar(0.5), Qa = h(P, Y, U, ja), f(za, Ba, ba, Aa, $, ea, 0, 0, 1, 0, 0, 1, Qa)))
                        }
                    }
                    la.union(Ea)
                }
            }
            D.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
};
THREE.ShaderChunk = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
    envmap_pars_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
    envmap_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",
    map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",
    map_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
    map_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
    map_fragment: "#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
    lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",
    lights_lambert_pars_vertex: "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
    lights_lambert_vertex: "vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
    lights_phong_pars_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
    lights_phong_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
    lights_phong_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_phong_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nuniform int boneTextureWidth;\nuniform int boneTextureHeight;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, float( boneTextureWidth ) );\nfloat y = floor( j / float( boneTextureWidth ) );\nfloat dx = 1.0 / float( boneTextureWidth );\nfloat dy = 1.0 / float( boneTextureHeight );\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
    skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
    default_vertex: "vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",
    defaultnormal_vertex: "vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
    shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",
    linear_to_gamma_fragment: "#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"
};
THREE.UniformsUtils = {
    merge: function(a) {
        var b, c, d, e = {};
        for (b = 0; b < a.length; b++)
            for (c in d = this.clone(a[b]), d) e[c] = d[c];
        return e
    },
    clone: function(a) {
        var b, c, d, e = {};
        for (b in a)
            for (c in e[b] = {}, a[b]) d = a[b][c], e[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
        return e
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        lightMap: {
            type: "t",
            value: null
        },
        specularMap: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        morphTargetInfluences: {
            type: "f",
            value: 0
        }
    },
    bump: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1, 1)
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        hemisphereLightDirection: {
            type: "fv",
            value: []
        },
        hemisphereLightSkyColor: {
            type: "fv",
            value: []
        },
        hemisphereLightGroundColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightColor: {
            type: "fv",
            value: []
        },
        spotLightPosition: {
            type: "fv",
            value: []
        },
        spotLightDirection: {
            type: "fv",
            value: []
        },
        spotLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightAngleCos: {
            type: "fv1",
            value: []
        },
        spotLightExponent: {
            type: "fv1",
            value: []
        }
    },
    particle: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: []
        },
        shadowMapSize: {
            type: "v2v",
            value: []
        },
        shadowBias: {
            type: "fv1",
            value: []
        },
        shadowDarkness: {
            type: "fv1",
            value: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        }
    }
};
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex,
            THREE.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
            THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex,
            THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif", THREE.ShaderChunk.lightmap_fragment,
            THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
            "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex,
            THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment,
            THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
            THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            },
            dashSize: {
                type: "f",
                value: 1
            },
            totalSize: {
                type: "f",
                value: 2
            }
        }]),
        vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvNormal = normalize( normalMatrix * normal );",
            THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"
        ].join("\n"),
        fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"
    },
    normalmap: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            enableAO: {
                type: "i",
                value: 0
            },
            enableDiffuse: {
                type: "i",
                value: 0
            },
            enableSpecular: {
                type: "i",
                value: 0
            },
            enableReflection: {
                type: "i",
                value: 0
            },
            enableDisplacement: {
                type: "i",
                value: 0
            },
            tDisplacement: {
                type: "t",
                value: null
            },
            tDiffuse: {
                type: "t",
                value: null
            },
            tCube: {
                type: "t",
                value: null
            },
            tNormal: {
                type: "t",
                value: null
            },
            tSpecular: {
                type: "t",
                value: null
            },
            tAO: {
                type: "t",
                value: null
            },
            uNormalScale: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            },
            uDisplacementBias: {
                type: "f",
                value: 0
            },
            uDisplacementScale: {
                type: "f",
                value: 1
            },
            uDiffuseColor: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            uSpecularColor: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            uAmbientColor: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            uShininess: {
                type: "f",
                value: 30
            },
            uOpacity: {
                type: "f",
                value: 1
            },
            useRefract: {
                type: "i",
                value: 0
            },
            uRefractionRatio: {
                type: "f",
                value: 0.98
            },
            uReflectivity: {
                type: "f",
                value: 0.5
            },
            uOffset: {
                type: "v2",
                value: new THREE.Vector2(0, 0)
            },
            uRepeat: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
            THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
            THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n"),
        vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
            THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"
        ].join("\n")
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: "varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
        fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"
    }
};
THREE.WebGLRenderer = function(a) {
    function b(a, b) {
        var c = a.vertices.length,
            d = b.material;
        if (d.attributes) {
            void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
            for (var e in d.attributes) {
                var f = d.attributes[e];
                if (!f.__webglInitialized || f.createUniqueBuffers) {
                    f.__webglInitialized = !0;
                    var h = 1;
                    "v2" === f.type ? h = 2 : "v3" === f.type ? h = 3 : "v4" === f.type ? h = 4 : "c" === f.type && (h = 3);
                    f.size = h;
                    f.array = new Float32Array(c * h);
                    f.buffer = j.createBuffer();
                    f.buffer.belongsToAttribute = e;
                    f.needsUpdate = !0
                }
                a.__webglCustomAttributesList.push(f)
            }
        }
    }

    function c(a, b) {
        var c = b.geometry,
            h = a.faces3,
            g = 3 * h.length,
            i = 1 * h.length,
            k = 3 * h.length,
            h = d(b, a),
            m = f(h),
            l = e(h),
            n = h.vertexColors ? h.vertexColors : !1;
        a.__vertexArray = new Float32Array(3 * g);
        l && (a.__normalArray = new Float32Array(3 * g));
        c.hasTangents && (a.__tangentArray = new Float32Array(4 * g));
        n && (a.__colorArray = new Float32Array(3 * g));
        m && (0 < c.faceVertexUvs.length && (a.__uvArray = new Float32Array(2 * g)), 1 < c.faceVertexUvs.length && (a.__uv2Array = new Float32Array(2 * g)));
        b.geometry.skinWeights.length && b.geometry.skinIndices.length &&
            (a.__skinIndexArray = new Float32Array(4 * g), a.__skinWeightArray = new Float32Array(4 * g));
        a.__faceArray = new Uint16Array(3 * i);
        a.__lineArray = new Uint16Array(2 * k);
        if (a.numMorphTargets) {
            a.__morphTargetsArrays = [];
            c = 0;
            for (m = a.numMorphTargets; c < m; c++) a.__morphTargetsArrays.push(new Float32Array(3 * g))
        }
        if (a.numMorphNormals) {
            a.__morphNormalsArrays = [];
            c = 0;
            for (m = a.numMorphNormals; c < m; c++) a.__morphNormalsArrays.push(new Float32Array(3 * g))
        }
        a.__webglFaceCount = 3 * i;
        a.__webglLineCount = 2 * k;
        if (h.attributes) {
            void 0 === a.__webglCustomAttributesList &&
                (a.__webglCustomAttributesList = []);
            for (var p in h.attributes) {
                var i = h.attributes[p],
                    k = {}, q;
                for (q in i) k[q] = i[q];
                if (!k.__webglInitialized || k.createUniqueBuffers) k.__webglInitialized = !0, c = 1, "v2" === k.type ? c = 2 : "v3" === k.type ? c = 3 : "v4" === k.type ? c = 4 : "c" === k.type && (c = 3), k.size = c, k.array = new Float32Array(g * c), k.buffer = j.createBuffer(), k.buffer.belongsToAttribute = p, i.needsUpdate = !0, k.__original = i;
                a.__webglCustomAttributesList.push(k)
            }
        }
        a.__inittedArrays = !0
    }

    function d(a, b) {
        return a.material instanceof THREE.MeshFaceMaterial ?
            a.material.materials[b.materialIndex] : a.material
    }

    function e(a) {
        return a instanceof THREE.MeshBasicMaterial && !a.envMap || a instanceof THREE.MeshDepthMaterial ? !1 : a && void 0 !== a.shading && a.shading === THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
    }

    function f(a) {
        return a.map || a.lightMap || a.bumpMap || a.normalMap || a.specularMap || a instanceof THREE.ShaderMaterial ? !0 : !1
    }

    function h(a) {
        va[a] || (j.enableVertexAttribArray(a), va[a] = !0)
    }

    function g() {
        for (var a in va) va[a] && (j.disableVertexAttribArray(a), va[a] = !1)
    }

    function i(a, b) {
        return a.z !== b.z ? b.z - a.z : a.id - b.id
    }

    function k(a, b) {
        return b[0] - a[0]
    }

    function m(a, b, c) {
        if (a.length)
            for (var d = 0, e = a.length; d < e; d++) ea = Ba = null, Aa = $ = U = Y = ka = Ga = ja = -1, ta = !0, a[d].render(b, c, sb, pb), ea = Ba = null, Aa = $ = U = Y = ka = Ga = ja = -1, ta = !0
    }

    function l(a, b, c, d, e, f, h, g) {
        var j, i, k, m;
        b ? (i = a.length - 1, m = b = -1) : (i = 0, b = a.length, m = 1);
        for (var l = i; l !== b; l += m)
            if (j = a[l], j.render) {
                i = j.object;
                k = j.buffer;
                if (g) j = g;
                else {
                    j = j[c];
                    if (!j) continue;
                    h && L.setBlending(j.blending, j.blendEquation, j.blendSrc, j.blendDst);
                    L.setDepthTest(j.depthTest);
                    L.setDepthWrite(j.depthWrite);
                    A(j.polygonOffset, j.polygonOffsetFactor, j.polygonOffsetUnits)
                }
                L.setMaterialFaces(j);
                k instanceof THREE.BufferGeometry ? L.renderBufferDirect(d, e, f, j, k, i) : L.renderBuffer(d, e, f, j, k, i)
            }
    }

    function p(a, b, c, d, e, f, h) {
        for (var g, j, i = 0, k = a.length; i < k; i++)
            if (g = a[i], j = g.object, j.visible) {
                if (h) g = h;
                else {
                    g = g[b];
                    if (!g) continue;
                    f && L.setBlending(g.blending, g.blendEquation, g.blendSrc, g.blendDst);
                    L.setDepthTest(g.depthTest);
                    L.setDepthWrite(g.depthWrite);
                    A(g.polygonOffset,
                        g.polygonOffsetFactor, g.polygonOffsetUnits)
                }
                L.renderImmediateObject(c, d, e, g, j)
            }
    }

    function t(a, d) {
        var e, f, h, g;
        if (void 0 === a.__webglInit && (a.__webglInit = !0, a._modelViewMatrix = new THREE.Matrix4, a._normalMatrix = new THREE.Matrix3, void 0 !== a.geometry && void 0 === a.geometry.__webglInit && (a.geometry.__webglInit = !0, a.geometry.addEventListener("dispose", Cb)), f = a.geometry, void 0 !== f))
            if (f instanceof THREE.BufferGeometry) {
                var i, k;
                for (i in f.attributes) k = "index" === i ? j.ELEMENT_ARRAY_BUFFER : j.ARRAY_BUFFER, g = f.attributes[i],
                void 0 === g.numItems && (g.numItems = g.array.length), g.buffer = j.createBuffer(), j.bindBuffer(k, g.buffer), j.bufferData(k, g.array, j.STATIC_DRAW)
            } else if (a instanceof THREE.Mesh) {
            h = a.material;
            if (void 0 === f.geometryGroups) {
                i = f;
                var m, l, n;
                k = {};
                var p = i.morphTargets.length,
                    q = i.morphNormals.length,
                    t = h instanceof THREE.MeshFaceMaterial;
                i.geometryGroups = {};
                h = 0;
                for (m = i.faces.length; h < m; h++) l = i.faces[h], l = t ? l.materialIndex : 0, void 0 === k[l] && (k[l] = {
                    hash: l,
                    counter: 0
                }), n = k[l].hash + "_" + k[l].counter, void 0 === i.geometryGroups[n] &&
                    (i.geometryGroups[n] = {
                    faces3: [],
                    materialIndex: l,
                    vertices: 0,
                    numMorphTargets: p,
                    numMorphNormals: q
                }), 65535 < i.geometryGroups[n].vertices + 3 && (k[l].counter += 1, n = k[l].hash + "_" + k[l].counter, void 0 === i.geometryGroups[n] && (i.geometryGroups[n] = {
                    faces3: [],
                    materialIndex: l,
                    vertices: 0,
                    numMorphTargets: p,
                    numMorphNormals: q
                })), i.geometryGroups[n].faces3.push(h), i.geometryGroups[n].vertices += 3;
                i.geometryGroupsList = [];
                for (g in i.geometryGroups) i.geometryGroups[g].id = V++, i.geometryGroupsList.push(i.geometryGroups[g])
            }
            for (e in f.geometryGroups)
                if (g =
                    f.geometryGroups[e], !g.__webglVertexBuffer) {
                    i = g;
                    i.__webglVertexBuffer = j.createBuffer();
                    i.__webglNormalBuffer = j.createBuffer();
                    i.__webglTangentBuffer = j.createBuffer();
                    i.__webglColorBuffer = j.createBuffer();
                    i.__webglUVBuffer = j.createBuffer();
                    i.__webglUV2Buffer = j.createBuffer();
                    i.__webglSkinIndicesBuffer = j.createBuffer();
                    i.__webglSkinWeightsBuffer = j.createBuffer();
                    i.__webglFaceBuffer = j.createBuffer();
                    i.__webglLineBuffer = j.createBuffer();
                    p = k = void 0;
                    if (i.numMorphTargets) {
                        i.__webglMorphTargetsBuffers = [];
                        k = 0;
                        for (p = i.numMorphTargets; k < p; k++) i.__webglMorphTargetsBuffers.push(j.createBuffer())
                    }
                    if (i.numMorphNormals) {
                        i.__webglMorphNormalsBuffers = [];
                        k = 0;
                        for (p = i.numMorphNormals; k < p; k++) i.__webglMorphNormalsBuffers.push(j.createBuffer())
                    }
                    L.info.memory.geometries++;
                    c(g, a);
                    f.verticesNeedUpdate = !0;
                    f.morphTargetsNeedUpdate = !0;
                    f.elementsNeedUpdate = !0;
                    f.uvsNeedUpdate = !0;
                    f.normalsNeedUpdate = !0;
                    f.tangentsNeedUpdate = !0;
                    f.colorsNeedUpdate = !0
                }
        } else a instanceof THREE.Line ? f.__webglVertexBuffer || (g = f, g.__webglVertexBuffer =
            j.createBuffer(), g.__webglColorBuffer = j.createBuffer(), g.__webglLineDistanceBuffer = j.createBuffer(), L.info.memory.geometries++, g = f, i = g.vertices.length, g.__vertexArray = new Float32Array(3 * i), g.__colorArray = new Float32Array(3 * i), g.__lineDistanceArray = new Float32Array(1 * i), g.__webglLineCount = i, b(g, a), f.verticesNeedUpdate = !0, f.colorsNeedUpdate = !0, f.lineDistancesNeedUpdate = !0) : a instanceof THREE.ParticleSystem && !f.__webglVertexBuffer && (g = f, g.__webglVertexBuffer = j.createBuffer(), g.__webglColorBuffer = j.createBuffer(),
            L.info.memory.geometries++, g = f, i = g.vertices.length, g.__vertexArray = new Float32Array(3 * i), g.__colorArray = new Float32Array(3 * i), g.__sortArray = [], g.__webglParticleCount = i, b(g, a), f.verticesNeedUpdate = !0, f.colorsNeedUpdate = !0); if (void 0 === a.__webglActive) {
            if (a instanceof THREE.Mesh)
                if (f = a.geometry, f instanceof THREE.BufferGeometry) s(d.__webglObjects, f, a);
                else {
                    if (f instanceof THREE.Geometry)
                        for (e in f.geometryGroups) g = f.geometryGroups[e], s(d.__webglObjects, g, a)
                } else a instanceof THREE.Line || a instanceof
            THREE.ParticleSystem ? (f = a.geometry, s(d.__webglObjects, f, a)) : a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback ? d.__webglObjectsImmediate.push({
                id: null,
                object: a,
                opaque: null,
                transparent: null,
                z: 0
            }) : a instanceof THREE.Sprite ? d.__webglSprites.push(a) : a instanceof THREE.LensFlare && d.__webglFlares.push(a);
            a.__webglActive = !0
        }
    }

    function s(a, b, c) {
        a.push({
            id: null,
            buffer: b,
            object: c,
            opaque: null,
            transparent: null,
            z: 0
        })
    }

    function q(a) {
        for (var b in a.attributes)
            if (a.attributes[b].needsUpdate) return !0;
        return !1
    }

    function n(a) {
        for (var b in a.attributes) a.attributes[b].needsUpdate = !1
    }

    function u(a, b) {
        a instanceof THREE.Mesh || a instanceof THREE.ParticleSystem || a instanceof THREE.Line ? r(b.__webglObjects, a) : a instanceof THREE.Sprite ? v(b.__webglSprites, a) : a instanceof THREE.LensFlare ? v(b.__webglFlares, a) : (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback) && r(b.__webglObjectsImmediate, a);
        delete a.__webglActive
    }

    function r(a, b) {
        for (var c = a.length - 1; 0 <= c; c--) a[c].object === b && a.splice(c, 1)
    }

    function v(a, b) {
        for (var c = a.length - 1; 0 <= c; c--) a[c] === b && a.splice(c, 1)
    }

    function z(a, b, c, d, e) {
        P = 0;
        d.needsUpdate && (d.program && Gb(d), L.initMaterial(d, b, c, e), d.needsUpdate = !1);
        d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(L.maxMorphTargets));
        var f = !1,
            g = d.program,
            h = g.uniforms,
            i = d.uniforms;
        g !== Ba && (j.useProgram(g), Ba = g, f = !0);
        d.id !== Aa && (Aa = d.id, f = !0);
        if (f || a !== ea) j.uniformMatrix4fv(h.projectionMatrix, !1, a.projectionMatrix.elements), a !== ea && (ea = a);
        if (d.skinning)
            if (yb &&
                e.useVertexTexture) {
                if (null !== h.boneTexture) {
                    var k = G();
                    j.uniform1i(h.boneTexture, k);
                    L.setTexture(e.boneTexture, k)
                }
                null !== h.boneTextureWidth && j.uniform1i(h.boneTextureWidth, e.boneTextureWidth);
                null !== h.boneTextureHeight && j.uniform1i(h.boneTextureHeight, e.boneTextureHeight)
            } else null !== h.boneGlobalMatrices && j.uniformMatrix4fv(h.boneGlobalMatrices, !1, e.boneMatrices);
        if (f) {
            c && d.fog && (i.fogColor.value = c.color, c instanceof THREE.Fog ? (i.fogNear.value = c.near, i.fogFar.value = c.far) : c instanceof THREE.FogExp2 &&
                (i.fogDensity.value = c.density));
            if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
                if (ta) {
                    for (var m, l = k = 0, n = 0, p, q, t, r = Pa, s = r.directional.colors, u = r.directional.positions, v = r.point.colors, z = r.point.positions, x = r.point.distances, A = r.spot.colors, E = r.spot.positions, D = r.spot.distances, K = r.spot.directions, O = r.spot.anglesCos, C = r.spot.exponents, J = r.hemi.skyColors, V = r.hemi.groundColors, M = r.hemi.positions, Q = 0, U = 0, Y = 0, za = 0, $ = 0, dc = 0, X = 0, W = 0, R = m = 0, c = t = R = 0, f = b.length; c < f; c++) m =
                        b[c], m.onlyShadow || (p = m.color, q = m.intensity, t = m.distance, m instanceof THREE.AmbientLight ? m.visible && (L.gammaInput ? (k += p.r * p.r, l += p.g * p.g, n += p.b * p.b) : (k += p.r, l += p.g, n += p.b)) : m instanceof THREE.DirectionalLight ? ($ += 1, m.visible && (fa.getPositionFromMatrix(m.matrixWorld), ra.getPositionFromMatrix(m.target.matrixWorld), fa.sub(ra), fa.normalize(), 0 === fa.x && 0 === fa.y && 0 === fa.z || (m = 3 * Q, u[m] = fa.x, u[m + 1] = fa.y, u[m + 2] = fa.z, L.gammaInput ? w(s, m, p, q * q) : y(s, m, p, q), Q += 1))) : m instanceof THREE.PointLight ? (dc += 1, m.visible &&
                                (R = 3 * U, L.gammaInput ? w(v, R, p, q * q) : y(v, R, p, q), ra.getPositionFromMatrix(m.matrixWorld), z[R] = ra.x, z[R + 1] = ra.y, z[R + 2] = ra.z, x[U] = t, U += 1)) : m instanceof THREE.SpotLight ? (X += 1, m.visible && (R = 3 * Y, L.gammaInput ? w(A, R, p, q * q) : y(A, R, p, q), ra.getPositionFromMatrix(m.matrixWorld), E[R] = ra.x, E[R + 1] = ra.y, E[R + 2] = ra.z, D[Y] = t, fa.copy(ra), ra.getPositionFromMatrix(m.target.matrixWorld), fa.sub(ra), fa.normalize(), K[R] = fa.x, K[R + 1] = fa.y, K[R + 2] = fa.z, O[Y] = Math.cos(m.angle), C[Y] = m.exponent, Y += 1)) : m instanceof THREE.HemisphereLight &&
                            (W += 1, m.visible && (fa.getPositionFromMatrix(m.matrixWorld), fa.normalize(), 0 === fa.x && 0 === fa.y && 0 === fa.z || (t = 3 * za, M[t] = fa.x, M[t + 1] = fa.y, M[t + 2] = fa.z, p = m.color, m = m.groundColor, L.gammaInput ? (q *= q, w(J, t, p, q), w(V, t, m, q)) : (y(J, t, p, q), y(V, t, m, q)), za += 1))));
                    c = 3 * Q;
                    for (f = Math.max(s.length, 3 * $); c < f; c++) s[c] = 0;
                    c = 3 * U;
                    for (f = Math.max(v.length, 3 * dc); c < f; c++) v[c] = 0;
                    c = 3 * Y;
                    for (f = Math.max(A.length, 3 * X); c < f; c++) A[c] = 0;
                    c = 3 * za;
                    for (f = Math.max(J.length, 3 * W); c < f; c++) J[c] = 0;
                    c = 3 * za;
                    for (f = Math.max(V.length, 3 * W); c < f; c++) V[c] = 0;
                    r.directional.length =
                        Q;
                    r.point.length = U;
                    r.spot.length = Y;
                    r.hemi.length = za;
                    r.ambient[0] = k;
                    r.ambient[1] = l;
                    r.ambient[2] = n;
                    ta = !1
                }
                c = Pa;
                i.ambientLightColor.value = c.ambient;
                i.directionalLightColor.value = c.directional.colors;
                i.directionalLightDirection.value = c.directional.positions;
                i.pointLightColor.value = c.point.colors;
                i.pointLightPosition.value = c.point.positions;
                i.pointLightDistance.value = c.point.distances;
                i.spotLightColor.value = c.spot.colors;
                i.spotLightPosition.value = c.spot.positions;
                i.spotLightDistance.value = c.spot.distances;
                i.spotLightDirection.value = c.spot.directions;
                i.spotLightAngleCos.value = c.spot.anglesCos;
                i.spotLightExponent.value = c.spot.exponents;
                i.hemisphereLightSkyColor.value = c.hemi.skyColors;
                i.hemisphereLightGroundColor.value = c.hemi.groundColors;
                i.hemisphereLightDirection.value = c.hemi.positions
            }
            if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
                i.opacity.value = d.opacity;
                L.gammaInput ? i.diffuse.value.copyGammaToLinear(d.color) : i.diffuse.value =
                    d.color;
                i.map.value = d.map;
                i.lightMap.value = d.lightMap;
                i.specularMap.value = d.specularMap;
                d.bumpMap && (i.bumpMap.value = d.bumpMap, i.bumpScale.value = d.bumpScale);
                d.normalMap && (i.normalMap.value = d.normalMap, i.normalScale.value.copy(d.normalScale));
                var ba;
                d.map ? ba = d.map : d.specularMap ? ba = d.specularMap : d.normalMap ? ba = d.normalMap : d.bumpMap && (ba = d.bumpMap);
                void 0 !== ba && (c = ba.offset, ba = ba.repeat, i.offsetRepeat.value.set(c.x, c.y, ba.x, ba.y));
                i.envMap.value = d.envMap;
                i.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ?
                    1 : -1;
                i.reflectivity.value = d.reflectivity;
                i.refractionRatio.value = d.refractionRatio;
                i.combine.value = d.combine;
                i.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
            }
            d instanceof THREE.LineBasicMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity) : d instanceof THREE.LineDashedMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity, i.dashSize.value = d.dashSize, i.totalSize.value = d.dashSize + d.gapSize, i.scale.value = d.scale) : d instanceof THREE.ParticleSystemMaterial ?
                (i.psColor.value = d.color, i.opacity.value = d.opacity, i.size.value = d.size, i.scale.value = B.height / 2, i.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (i.shininess.value = d.shininess, L.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive), i.specular.value.copyGammaToLinear(d.specular)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive, i.specular.value = d.specular), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ?
                (L.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (i.mNear.value = a.near, i.mFar.value = a.far, i.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (i.opacity.value = d.opacity);
            if (e.receiveShadow && !d._shadowPass && i.shadowMatrix) {
                c = ba = 0;
                for (f = b.length; c < f; c++)
                    if (k = b[c], k.castShadow && (k instanceof THREE.SpotLight || k instanceof THREE.DirectionalLight && !k.shadowCascade)) i.shadowMap.value[ba] = k.shadowMap, i.shadowMapSize.value[ba] = k.shadowMapSize, i.shadowMatrix.value[ba] = k.shadowMatrix, i.shadowDarkness.value[ba] = k.shadowDarkness, i.shadowBias.value[ba] = k.shadowBias, ba++
            }
            b = d.uniformsList;
            i = 0;
            for (ba = b.length; i < ba; i++)
                if (f = g.uniforms[b[i][1]])
                    if (c = b[i][0], l = c.type, k = c.value, "i" === l) j.uniform1i(f, k);
                    else if ("f" === l) j.uniform1f(f, k);
            else if ("v2" === l) j.uniform2f(f, k.x, k.y);
            else if ("v3" === l) j.uniform3f(f,
                k.x, k.y, k.z);
            else if ("v4" === l) j.uniform4f(f, k.x, k.y, k.z, k.w);
            else if ("c" === l) j.uniform3f(f, k.r, k.g, k.b);
            else if ("iv1" === l) j.uniform1iv(f, k);
            else if ("iv" === l) j.uniform3iv(f, k);
            else if ("fv1" === l) j.uniform1fv(f, k);
            else if ("fv" === l) j.uniform3fv(f, k);
            else if ("v2v" === l) {
                void 0 === c._array && (c._array = new Float32Array(2 * k.length));
                l = 0;
                for (n = k.length; l < n; l++) r = 2 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y;
                j.uniform2fv(f, c._array)
            } else if ("v3v" === l) {
                void 0 === c._array && (c._array = new Float32Array(3 * k.length));
                l =
                    0;
                for (n = k.length; l < n; l++) r = 3 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y, c._array[r + 2] = k[l].z;
                j.uniform3fv(f, c._array)
            } else if ("v4v" === l) {
                void 0 === c._array && (c._array = new Float32Array(4 * k.length));
                l = 0;
                for (n = k.length; l < n; l++) r = 4 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y, c._array[r + 2] = k[l].z, c._array[r + 3] = k[l].w;
                j.uniform4fv(f, c._array)
            } else if ("m4" === l) void 0 === c._array && (c._array = new Float32Array(16)), k.flattenToArray(c._array), j.uniformMatrix4fv(f, !1, c._array);
            else if ("m4v" === l) {
                void 0 === c._array &&
                    (c._array = new Float32Array(16 * k.length));
                l = 0;
                for (n = k.length; l < n; l++) k[l].flattenToArrayOffset(c._array, 16 * l);
                j.uniformMatrix4fv(f, !1, c._array)
            } else if ("t" === l) {
                if (r = k, k = G(), j.uniform1i(f, k), r)
                    if (r.image instanceof Array && 6 === r.image.length) {
                        if (c = r, f = k, 6 === c.image.length)
                            if (c.needsUpdate) {
                                c.image.__webglTextureCube || (c.addEventListener("dispose", Db), c.image.__webglTextureCube = j.createTexture(), L.info.memory.textures++);
                                j.activeTexture(j.TEXTURE0 + f);
                                j.bindTexture(j.TEXTURE_CUBE_MAP, c.image.__webglTextureCube);
                                j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, c.flipY);
                                f = c instanceof THREE.CompressedTexture;
                                k = [];
                                for (l = 0; 6 > l; l++) L.autoScaleCubemaps && !f ? (n = k, r = l, s = c.image[l], v = ac, s.width <= v && s.height <= v || (z = Math.max(s.width, s.height), u = Math.floor(s.width * v / z), v = Math.floor(s.height * v / z), z = document.createElement("canvas"), z.width = u, z.height = v, z.getContext("2d").drawImage(s, 0, 0, s.width, s.height, 0, 0, u, v), s = z), n[r] = s) : k[l] = c.image[l];
                                l = k[0];
                                n = 0 === (l.width & l.width - 1) && 0 === (l.height & l.height - 1);
                                r = I(c.format);
                                s = I(c.type);
                                F(j.TEXTURE_CUBE_MAP,
                                    c, n);
                                for (l = 0; 6 > l; l++)
                                    if (f) {
                                        v = k[l].mipmaps;
                                        z = 0;
                                        for (x = v.length; z < x; z++) u = v[z], c.format !== THREE.RGBAFormat ? j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + l, z, r, u.width, u.height, 0, u.data) : j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + l, z, r, u.width, u.height, 0, r, s, u.data)
                                    } else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + l, 0, r, r, s, k[l]);
                                c.generateMipmaps && n && j.generateMipmap(j.TEXTURE_CUBE_MAP);
                                c.needsUpdate = !1;
                                if (c.onUpdate) c.onUpdate()
                            } else j.activeTexture(j.TEXTURE0 + f), j.bindTexture(j.TEXTURE_CUBE_MAP,
                                c.image.__webglTextureCube)
                    } else r instanceof THREE.WebGLRenderTargetCube ? (c = r, j.activeTexture(j.TEXTURE0 + k), j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture)) : L.setTexture(r, k)
            } else if ("tv" === l) {
                void 0 === c._array && (c._array = []);
                l = 0;
                for (n = c.value.length; l < n; l++) c._array[l] = G();
                j.uniform1iv(f, c._array);
                l = 0;
                for (n = c.value.length; l < n; l++) r = c.value[l], k = c._array[l], r && L.setTexture(r, k)
            } else console.warn("THREE.WebGLRenderer: Unknown uniform type: " + l); if ((d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== h.cameraPosition) ra.getPositionFromMatrix(a.matrixWorld), j.uniform3f(h.cameraPosition, ra.x, ra.y, ra.z);
            (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== h.viewMatrix && j.uniformMatrix4fv(h.viewMatrix, !1, a.matrixWorldInverse.elements)
        }
        j.uniformMatrix4fv(h.modelViewMatrix, !1, e._modelViewMatrix.elements);
        h.normalMatrix && j.uniformMatrix3fv(h.normalMatrix, !1, e._normalMatrix.elements);
        null !== h.modelMatrix && j.uniformMatrix4fv(h.modelMatrix, !1, e.matrixWorld.elements);
        return g
    }

    function G() {
        var a = P;
        a >= Mb && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + Mb);
        P += 1;
        return a
    }

    function w(a, b, c, d) {
        a[b] = c.r * c.r * d;
        a[b + 1] = c.g * c.g * d;
        a[b + 2] = c.b * c.b * d
    }

    function y(a, b, c, d) {
        a[b] = c.r * d;
        a[b + 1] = c.g * d;
        a[b + 2] = c.b * d
    }

    function E(a) {
        a !== wa && (j.lineWidth(a), wa = a)
    }

    function A(a, b, c) {
        Da !== a && (a ? j.enable(j.POLYGON_OFFSET_FILL) : j.disable(j.POLYGON_OFFSET_FILL), Da = a);
        if (a && (Ua !== b || Qa !== c)) j.polygonOffset(b, c), Ua = b, Qa = c
    }

    function K(a) {
        for (var a = a.split("\n"), b = 0, c = a.length; b < c; b++) a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }

    function D(a, b) {
        var c;
        "fragment" === a ? c = j.createShader(j.FRAGMENT_SHADER) : "vertex" === a && (c = j.createShader(j.VERTEX_SHADER));
        j.shaderSource(c, b);
        j.compileShader(c);
        return !j.getShaderParameter(c, j.COMPILE_STATUS) ? (console.error(j.getShaderInfoLog(c)), console.error(K(b)), null) : c
    }

    function F(a, b, c) {
        c ? (j.texParameteri(a, j.TEXTURE_WRAP_S, I(b.wrapS)), j.texParameteri(a,
            j.TEXTURE_WRAP_T, I(b.wrapT)), j.texParameteri(a, j.TEXTURE_MAG_FILTER, I(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, I(b.minFilter))) : (j.texParameteri(a, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_MAG_FILTER, x(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, x(b.minFilter)));
        if (La && b.type !== THREE.FloatType && (1 < b.anisotropy || b.__oldAnisotropy)) j.texParameterf(a, La.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, Nb)), b.__oldAnisotropy =
            b.anisotropy
    }

    function O(a, b) {
        j.bindRenderbuffer(j.RENDERBUFFER, a);
        b.depthBuffer && !b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_COMPONENT16, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_STENCIL, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a)) : j.renderbufferStorage(j.RENDERBUFFER, j.RGBA4, b.width, b.height)
    }

    function x(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? j.NEAREST : j.LINEAR
    }

    function I(a) {
        if (a === THREE.RepeatWrapping) return j.REPEAT;
        if (a === THREE.ClampToEdgeWrapping) return j.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping) return j.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter) return j.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter) return j.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter) return j.NEAREST_MIPMAP_LINEAR;
        if (a ===
            THREE.LinearFilter) return j.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter) return j.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter) return j.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType) return j.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type) return j.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type) return j.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type) return j.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType) return j.BYTE;
        if (a === THREE.ShortType) return j.SHORT;
        if (a ===
            THREE.UnsignedShortType) return j.UNSIGNED_SHORT;
        if (a === THREE.IntType) return j.INT;
        if (a === THREE.UnsignedIntType) return j.UNSIGNED_INT;
        if (a === THREE.FloatType) return j.FLOAT;
        if (a === THREE.AlphaFormat) return j.ALPHA;
        if (a === THREE.RGBFormat) return j.RGB;
        if (a === THREE.RGBAFormat) return j.RGBA;
        if (a === THREE.LuminanceFormat) return j.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat) return j.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation) return j.FUNC_ADD;
        if (a === THREE.SubtractEquation) return j.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation) return j.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor) return j.ZERO;
        if (a === THREE.OneFactor) return j.ONE;
        if (a === THREE.SrcColorFactor) return j.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor) return j.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor) return j.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor) return j.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor) return j.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor) return j.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor) return j.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor) return j.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor) return j.SRC_ALPHA_SATURATE;
        if (void 0 !== Fa) {
            if (a === THREE.RGB_S3TC_DXT1_Format) return Fa.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format) return Fa.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format) return Fa.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format) return Fa.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    var a = a || {}, B = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
        M = void 0 !== a.precision ? a.precision : "highp",
        J = void 0 !== a.alpha ? a.alpha : !1,
        ca = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
        na = void 0 !== a.antialias ? a.antialias : !1,
        pa = void 0 !== a.stencil ? a.stencil : !0,
        C = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
        Q = new THREE.Color(0),
        R = 0;
    this.domElement = B;
    this.context = null;
    this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
    this.autoUpdateObjects = this.sortObjects = this.autoClearStencil =
        this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.shadowMapEnabled = this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1;
    this.shadowMapAutoUpdate = !0;
    this.shadowMapType = THREE.PCFShadowMap;
    this.shadowMapCullFace = THREE.CullFaceFront;
    this.shadowMapCascade = this.shadowMapDebug = !1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    this.autoScaleCubemaps = !0;
    this.renderPluginsPre = [];
    this.renderPluginsPost = [];
    this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        },
        render: {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        }
    };
    var L = this,
        da = [],
        za = 0,
        Ba = null,
        ba = null,
        Aa = -1,
        $ = null,
        ea = null,
        V = 0,
        P = 0,
        Y = -1,
        U = -1,
        ja = -1,
        sa = -1,
        ha = -1,
        Ka = -1,
        Ga = -1,
        ka = -1,
        Da = null,
        Ua = null,
        Qa = null,
        wa = null,
        bb = 0,
        cb = 0,
        Ma = B.width,
        fb = B.height,
        sb = 0,
        pb = 0,
        va = {}, la = new THREE.Frustum,
        Ea = new THREE.Matrix4,
        gb = new THREE.Matrix4,
        ra = new THREE.Vector3,
        fa = new THREE.Vector3,
        ta = !0,
        Pa = {
            ambient: [0, 0, 0],
            directional: {
                length: 0,
                colors: [],
                positions: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            },
            spot: {
                length: 0,
                colors: [],
                positions: [],
                distances: [],
                directions: [],
                anglesCos: [],
                exponents: []
            },
            hemi: {
                length: 0,
                skyColors: [],
                groundColors: [],
                positions: []
            }
        }, j, Oa, ua, La, Fa;
    try {
        var Ra = {
            alpha: J,
            premultipliedAlpha: ca,
            antialias: na,
            stencil: pa,
            preserveDrawingBuffer: C
        };
        j = B.getContext("webgl", Ra) || B.getContext("experimental-webgl", Ra);
        if (null === j) throw "Error creating WebGL context.";
    } catch (Zb) {
        console.error(Zb)
    }
    Oa = j.getExtension("OES_texture_float");
    j.getExtension("OES_texture_float_linear");
    ua = j.getExtension("OES_standard_derivatives");
    La = j.getExtension("EXT_texture_filter_anisotropic") ||
        j.getExtension("MOZ_EXT_texture_filter_anisotropic") || j.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
    Fa = j.getExtension("WEBGL_compressed_texture_s3tc") || j.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || j.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
    Oa || console.log("THREE.WebGLRenderer: Float textures not supported.");
    ua || console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
    La || console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
    Fa || console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
    void 0 === j.getShaderPrecisionFormat && (j.getShaderPrecisionFormat = function() {
        return {
            rangeMin: 1,
            rangeMax: 1,
            precision: 1
        }
    });
    j.clearColor(0, 0, 0, 1);
    j.clearDepth(1);
    j.clearStencil(0);
    j.enable(j.DEPTH_TEST);
    j.depthFunc(j.LEQUAL);
    j.frontFace(j.CCW);
    j.cullFace(j.BACK);
    j.enable(j.CULL_FACE);
    j.enable(j.BLEND);
    j.blendEquation(j.FUNC_ADD);
    j.blendFunc(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA);
    j.viewport(bb, cb, Ma, fb);
    j.clearColor(Q.r, Q.g, Q.b,
        R);
    this.context = j;
    var Mb = j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),
        $b = j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    j.getParameter(j.MAX_TEXTURE_SIZE);
    var ac = j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),
        Nb = La ? j.getParameter(La.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
        Bb = 0 < $b,
        yb = Bb && Oa;
    Fa && j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);
    var bc = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_FLOAT),
        cc = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_FLOAT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_FLOAT);
    var qc = j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_FLOAT),
        rc = j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_FLOAT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.LOW_FLOAT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_INT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_INT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,
        j.LOW_INT);
    var sc = 0 < bc.precision && 0 < qc.precision,
        Ob = 0 < cc.precision && 0 < rc.precision;
    "highp" === M && !sc && (Ob ? (M = "mediump", console.warn("WebGLRenderer: highp not supported, using mediump")) : (M = "lowp", console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));
    "mediump" === M && !Ob && (M = "lowp", console.warn("WebGLRenderer: mediump not supported, using lowp"));
    this.getContext = function() {
        return j
    };
    this.supportsVertexTextures = function() {
        return Bb
    };
    this.supportsFloatTextures = function() {
        return Oa
    };
    this.supportsStandardDerivatives = function() {
        return ua
    };
    this.supportsCompressedTextureS3TC = function() {
        return Fa
    };
    this.getMaxAnisotropy = function() {
        return Nb
    };
    this.getPrecision = function() {
        return M
    };
    this.setSize = function(a, b, c) {
        B.width = a * this.devicePixelRatio;
        B.height = b * this.devicePixelRatio;
        1 !== this.devicePixelRatio && !1 !== c && (B.style.width = a + "px", B.style.height = b + "px");
        this.setViewport(0, 0, B.width, B.height)
    };
    this.setViewport = function(a, b, c, d) {
        bb = void 0 !== a ? a : 0;
        cb = void 0 !== b ? b : 0;
        Ma = void 0 !== c ? c : B.width;
        fb = void 0 !== d ? d : B.height;
        j.viewport(bb, cb, Ma, fb)
    };
    this.setScissor = function(a, b, c, d) {
        j.scissor(a, b, c, d)
    };
    this.enableScissorTest = function(a) {
        a ? j.enable(j.SCISSOR_TEST) : j.disable(j.SCISSOR_TEST)
    };
    this.setClearColor = function(a, b) {
        Q.set(a);
        R = void 0 !== b ? b : 1;
        j.clearColor(Q.r, Q.g, Q.b, R)
    };
    this.setClearColorHex = function(a, b) {
        console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");
        this.setClearColor(a, b)
    };
    this.getClearColor = function() {
        return Q
    };
    this.getClearAlpha = function() {
        return R
    };
    this.clear = function(a, b, c) {
        var d = 0;
        if (void 0 === a || a) d |= j.COLOR_BUFFER_BIT;
        if (void 0 === b || b) d |= j.DEPTH_BUFFER_BIT;
        if (void 0 === c || c) d |= j.STENCIL_BUFFER_BIT;
        j.clear(d)
    };
    this.clearTarget = function(a, b, c, d) {
        this.setRenderTarget(a);
        this.clear(b, c, d)
    };
    this.addPostPlugin = function(a) {
        a.init(this);
        this.renderPluginsPost.push(a)
    };
    this.addPrePlugin = function(a) {
        a.init(this);
        this.renderPluginsPre.push(a)
    };
    this.updateShadowMap = function(a, b) {
        Ba = null;
        Aa = $ = ka = Ga = ja = -1;
        ta = !0;
        U = Y = -1;
        this.shadowMapPlugin.update(a, b)
    };
    var Cb = function(a) {
        a = a.target;
        a.removeEventListener("dispose", Cb);
        a.__webglInit = void 0;
        if (a instanceof THREE.BufferGeometry) {
            var b = a.attributes,
                c;
            for (c in b) void 0 !== b[c].buffer && j.deleteBuffer(b[c].buffer);
            L.info.memory.geometries--
        } else if (void 0 !== a.geometryGroups)
            for (b in a.geometryGroups) {
                c = a.geometryGroups[b];
                if (void 0 !== c.numMorphTargets)
                    for (var d = 0, e = c.numMorphTargets; d < e; d++) j.deleteBuffer(c.__webglMorphTargetsBuffers[d]);
                if (void 0 !== c.numMorphNormals) {
                    d = 0;
                    for (e = c.numMorphNormals; d < e; d++) j.deleteBuffer(c.__webglMorphNormalsBuffers[d])
                }
                Hb(c)
            } else Hb(a)
    },
        Db = function(a) {
            a = a.target;
            a.removeEventListener("dispose", Db);
            a.image && a.image.__webglTextureCube ? j.deleteTexture(a.image.__webglTextureCube) : a.__webglInit && (a.__webglInit = !1, j.deleteTexture(a.__webglTexture));
            L.info.memory.textures--
        }, Eb = function(a) {
            a = a.target;
            a.removeEventListener("dispose", Eb);
            if (a && a.__webglTexture)
                if (j.deleteTexture(a.__webglTexture), a instanceof THREE.WebGLRenderTargetCube)
                    for (var b = 0; 6 > b; b++) j.deleteFramebuffer(a.__webglFramebuffer[b]), j.deleteRenderbuffer(a.__webglRenderbuffer[b]);
                else j.deleteFramebuffer(a.__webglFramebuffer), j.deleteRenderbuffer(a.__webglRenderbuffer);
            L.info.memory.textures--
        }, Fb = function(a) {
            a = a.target;
            a.removeEventListener("dispose", Fb);
            Gb(a)
        }, Hb = function(a) {
            void 0 !== a.__webglVertexBuffer && j.deleteBuffer(a.__webglVertexBuffer);
            void 0 !== a.__webglNormalBuffer && j.deleteBuffer(a.__webglNormalBuffer);
            void 0 !== a.__webglTangentBuffer && j.deleteBuffer(a.__webglTangentBuffer);
            void 0 !== a.__webglColorBuffer && j.deleteBuffer(a.__webglColorBuffer);
            void 0 !== a.__webglUVBuffer &&
                j.deleteBuffer(a.__webglUVBuffer);
            void 0 !== a.__webglUV2Buffer && j.deleteBuffer(a.__webglUV2Buffer);
            void 0 !== a.__webglSkinIndicesBuffer && j.deleteBuffer(a.__webglSkinIndicesBuffer);
            void 0 !== a.__webglSkinWeightsBuffer && j.deleteBuffer(a.__webglSkinWeightsBuffer);
            void 0 !== a.__webglFaceBuffer && j.deleteBuffer(a.__webglFaceBuffer);
            void 0 !== a.__webglLineBuffer && j.deleteBuffer(a.__webglLineBuffer);
            void 0 !== a.__webglLineDistanceBuffer && j.deleteBuffer(a.__webglLineDistanceBuffer);
            if (void 0 !== a.__webglCustomAttributesList)
                for (var b in a.__webglCustomAttributesList) j.deleteBuffer(a.__webglCustomAttributesList[b].buffer);
            L.info.memory.geometries--
        }, Gb = function(a) {
            var b = a.program;
            if (void 0 !== b) {
                a.program = void 0;
                var c, d, e = !1,
                    a = 0;
                for (c = da.length; a < c; a++)
                    if (d = da[a], d.program === b) {
                        d.usedTimes--;
                        0 === d.usedTimes && (e = !0);
                        break
                    }
                if (!0 === e) {
                    e = [];
                    a = 0;
                    for (c = da.length; a < c; a++) d = da[a], d.program !== b && e.push(d);
                    da = e;
                    j.deleteProgram(b);
                    L.info.memory.programs--
                }
            }
        };
    this.renderBufferImmediate = function(a, b, c) {
        a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = j.createBuffer());
        a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer =
            j.createBuffer());
        a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = j.createBuffer());
        a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = j.createBuffer());
        a.hasPositions && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, a.positionArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.position), j.vertexAttribPointer(b.attributes.position, 3, j.FLOAT, !1, 0, 0));
        if (a.hasNormals) {
            j.bindBuffer(j.ARRAY_BUFFER, a.__webglNormalBuffer);
            if (c.shading === THREE.FlatShading) {
                var d,
                    e, f, h, g, i, k, l, m, n, p, q = 3 * a.count;
                for (p = 0; p < q; p += 9) n = a.normalArray, d = n[p], e = n[p + 1], f = n[p + 2], h = n[p + 3], i = n[p + 4], l = n[p + 5], g = n[p + 6], k = n[p + 7], m = n[p + 8], d = (d + h + g) / 3, e = (e + i + k) / 3, f = (f + l + m) / 3, n[p] = d, n[p + 1] = e, n[p + 2] = f, n[p + 3] = d, n[p + 4] = e, n[p + 5] = f, n[p + 6] = d, n[p + 7] = e, n[p + 8] = f
            }
            j.bufferData(j.ARRAY_BUFFER, a.normalArray, j.DYNAMIC_DRAW);
            j.enableVertexAttribArray(b.attributes.normal);
            j.vertexAttribPointer(b.attributes.normal, 3, j.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglUvBuffer), j.bufferData(j.ARRAY_BUFFER,
            a.uvArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.uv), j.vertexAttribPointer(b.attributes.uv, 2, j.FLOAT, !1, 0, 0));
        a.hasColors && c.vertexColors !== THREE.NoColors && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, a.colorArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.color), j.vertexAttribPointer(b.attributes.color, 3, j.FLOAT, !1, 0, 0));
        j.drawArrays(j.TRIANGLES, 0, a.count);
        a.count = 0
    };
    this.renderBufferDirect = function(a, b, c, d, e, f) {
        if (!1 !== d.visible) {
            var i,
                k, l, m;
            i = z(a, b, c, d, f);
            b = i.attributes;
            a = e.attributes;
            c = !1;
            i = 16777215 * e.id + 2 * i.id + (d.wireframe ? 1 : 0);
            i !== $ && ($ = i, c = !0);
            c && g();
            if (f instanceof THREE.Mesh)
                if (f = a.index) {
                    e = e.offsets;
                    1 < e.length && (c = !0);
                    for (var n = 0, p = e.length; n < p; n++) {
                        var q = e[n].index;
                        if (c) {
                            for (k in b) l = b[k], i = a[k], 0 <= l && (i ? (m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), h(l), j.vertexAttribPointer(l, m, j.FLOAT, !1, 0, 4 * q * m)) : d.defaultAttributeValues && (2 === d.defaultAttributeValues[k].length ? j.vertexAttrib2fv(l, d.defaultAttributeValues[k]) :
                                3 === d.defaultAttributeValues[k].length && j.vertexAttrib3fv(l, d.defaultAttributeValues[k])));
                            j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, f.buffer)
                        }
                        j.drawElements(j.TRIANGLES, e[n].count, j.UNSIGNED_SHORT, 2 * e[n].start);
                        L.info.render.calls++;
                        L.info.render.vertices += e[n].count;
                        L.info.render.faces += e[n].count / 3
                    }
                } else {
                    if (c)
                        for (k in b) "index" !== k && (l = b[k], i = a[k], 0 <= l && (i ? (m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), h(l), j.vertexAttribPointer(l, m, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && d.defaultAttributeValues[k] &&
                            (2 === d.defaultAttributeValues[k].length ? j.vertexAttrib2fv(l, d.defaultAttributeValues[k]) : 3 === d.defaultAttributeValues[k].length && j.vertexAttrib3fv(l, d.defaultAttributeValues[k]))));
                    d = e.attributes.position;
                    j.drawArrays(j.TRIANGLES, 0, d.numItems / 3);
                    L.info.render.calls++;
                    L.info.render.vertices += d.numItems / 3;
                    L.info.render.faces += d.numItems / 3 / 3
                } else if (f instanceof THREE.ParticleSystem) {
                if (c) {
                    for (k in b) l = b[k], i = a[k], 0 <= l && (i ? (m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), h(l), j.vertexAttribPointer(l,
                        m, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && d.defaultAttributeValues[k] && (2 === d.defaultAttributeValues[k].length ? j.vertexAttrib2fv(l, d.defaultAttributeValues[k]) : 3 === d.defaultAttributeValues[k].length && j.vertexAttrib3fv(l, d.defaultAttributeValues[k])));
                    d = a.position;
                    j.drawArrays(j.POINTS, 0, d.numItems / 3);
                    L.info.render.calls++;
                    L.info.render.points += d.numItems / 3
                }
            } else if (f instanceof THREE.Line && c) {
                for (k in b) l = b[k], i = a[k], 0 <= l && (i ? (m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), h(l), j.vertexAttribPointer(l,
                    m, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && d.defaultAttributeValues[k] && (2 === d.defaultAttributeValues[k].length ? j.vertexAttrib2fv(l, d.defaultAttributeValues[k]) : 3 === d.defaultAttributeValues[k].length && j.vertexAttrib3fv(l, d.defaultAttributeValues[k])));
                k = f.type === THREE.LineStrip ? j.LINE_STRIP : j.LINES;
                E(d.linewidth);
                d = a.position;
                j.drawArrays(k, 0, d.numItems / 3);
                L.info.render.calls++;
                L.info.render.points += d.numItems
            }
        }
    };
    this.renderBuffer = function(a, b, c, d, e, f) {
        if (!1 !== d.visible) {
            var i, l, c = z(a, b, c, d, f),
                a = c.attributes,
                b = !1,
                c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
            c !== $ && ($ = c, b = !0);
            b && g();
            if (!d.morphTargets && 0 <= a.position) b && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), h(a.position), j.vertexAttribPointer(a.position, 3, j.FLOAT, !1, 0, 0));
            else if (f.morphTargetBase) {
                c = d.program.attributes; - 1 !== f.morphTargetBase && 0 <= c.position ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), h(c.position), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0)) : 0 <= c.position && (j.bindBuffer(j.ARRAY_BUFFER,
                    e.__webglVertexBuffer), h(c.position), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0));
                if (f.morphTargetForcedOrder.length) {
                    var m = 0;
                    l = f.morphTargetForcedOrder;
                    for (i = f.morphTargetInfluences; m < d.numSupportedMorphTargets && m < l.length;) 0 <= c["morphTarget" + m] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[l[m]]), h(c["morphTarget" + m]), j.vertexAttribPointer(c["morphTarget" + m], 3, j.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + m] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[l[m]]),
                        h(c["morphNormal" + m]), j.vertexAttribPointer(c["morphNormal" + m], 3, j.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[m] = i[l[m]], m++
                } else {
                    l = [];
                    i = f.morphTargetInfluences;
                    var n, p = i.length;
                    for (n = 0; n < p; n++) m = i[n], 0 < m && l.push([m, n]);
                    l.length > d.numSupportedMorphTargets ? (l.sort(k), l.length = d.numSupportedMorphTargets) : l.length > d.numSupportedMorphNormals ? l.sort(k) : 0 === l.length && l.push([0, 0]);
                    for (m = 0; m < d.numSupportedMorphTargets;) l[m] ? (n = l[m][1], 0 <= c["morphTarget" + m] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[n]),
                        h(c["morphTarget" + m]), j.vertexAttribPointer(c["morphTarget" + m], 3, j.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + m] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[n]), h(c["morphNormal" + m]), j.vertexAttribPointer(c["morphNormal" + m], 3, j.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[m] = i[n]) : f.__webglMorphTargetInfluences[m] = 0, m++
                }
                null !== d.program.uniforms.morphTargetInfluences && j.uniform1fv(d.program.uniforms.morphTargetInfluences, f.__webglMorphTargetInfluences)
            }
            if (b) {
                if (e.__webglCustomAttributesList) {
                    i =
                        0;
                    for (l = e.__webglCustomAttributesList.length; i < l; i++) c = e.__webglCustomAttributesList[i], 0 <= a[c.buffer.belongsToAttribute] && (j.bindBuffer(j.ARRAY_BUFFER, c.buffer), h(a[c.buffer.belongsToAttribute]), j.vertexAttribPointer(a[c.buffer.belongsToAttribute], c.size, j.FLOAT, !1, 0, 0))
                }
                0 <= a.color && (0 < f.geometry.colors.length || 0 < f.geometry.faces.length ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglColorBuffer), h(a.color), j.vertexAttribPointer(a.color, 3, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && j.vertexAttrib3fv(a.color,
                    d.defaultAttributeValues.color));
                0 <= a.normal && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglNormalBuffer), h(a.normal), j.vertexAttribPointer(a.normal, 3, j.FLOAT, !1, 0, 0));
                0 <= a.tangent && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglTangentBuffer), h(a.tangent), j.vertexAttribPointer(a.tangent, 4, j.FLOAT, !1, 0, 0));
                0 <= a.uv && (f.geometry.faceVertexUvs[0] ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUVBuffer), h(a.uv), j.vertexAttribPointer(a.uv, 2, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && j.vertexAttrib2fv(a.uv, d.defaultAttributeValues.uv));
                0 <= a.uv2 && (f.geometry.faceVertexUvs[1] ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUV2Buffer), h(a.uv2), j.vertexAttribPointer(a.uv2, 2, j.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && j.vertexAttrib2fv(a.uv2, d.defaultAttributeValues.uv2));
                d.skinning && (0 <= a.skinIndex && 0 <= a.skinWeight) && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), h(a.skinIndex), j.vertexAttribPointer(a.skinIndex, 4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), h(a.skinWeight), j.vertexAttribPointer(a.skinWeight,
                    4, j.FLOAT, !1, 0, 0));
                0 <= a.lineDistance && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglLineDistanceBuffer), h(a.lineDistance), j.vertexAttribPointer(a.lineDistance, 1, j.FLOAT, !1, 0, 0))
            }
            f instanceof THREE.Mesh ? (d.wireframe ? (E(d.wireframeLinewidth), b && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), j.drawElements(j.LINES, e.__webglLineCount, j.UNSIGNED_SHORT, 0)) : (b && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), j.drawElements(j.TRIANGLES, e.__webglFaceCount, j.UNSIGNED_SHORT, 0)), L.info.render.calls++,
                L.info.render.vertices += e.__webglFaceCount, L.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.type === THREE.LineStrip ? j.LINE_STRIP : j.LINES, E(d.linewidth), j.drawArrays(f, 0, e.__webglLineCount), L.info.render.calls++) : f instanceof THREE.ParticleSystem && (j.drawArrays(j.POINTS, 0, e.__webglParticleCount), L.info.render.calls++, L.info.render.points += e.__webglParticleCount)
        }
    };
    this.render = function(a, b, c, d) {
        if (!1 === b instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e, f, h, g, k = a.__lights,
                n = a.fog;
            Aa = -1;
            ta = !0;
            !0 === a.autoUpdate && a.updateMatrixWorld();
            void 0 === b.parent && b.updateMatrixWorld();
            b.matrixWorldInverse.getInverse(b.matrixWorld);
            Ea.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            la.setFromMatrix(Ea);
            this.autoUpdateObjects && this.initWebGLObjects(a);
            m(this.renderPluginsPre, a, b);
            L.info.render.calls = 0;
            L.info.render.vertices = 0;
            L.info.render.faces = 0;
            L.info.render.points = 0;
            this.setRenderTarget(c);
            (this.autoClear || d) && this.clear(this.autoClearColor,
                this.autoClearDepth, this.autoClearStencil);
            g = a.__webglObjects;
            d = 0;
            for (e = g.length; d < e; d++)
                if (f = g[d], h = f.object, f.id = d, f.render = !1, h.visible && (!(h instanceof THREE.Mesh || h instanceof THREE.ParticleSystem) || !h.frustumCulled || la.intersectsObject(h))) {
                    var q = h;
                    q._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, q.matrixWorld);
                    q._normalMatrix.getNormalMatrix(q._modelViewMatrix);
                    var q = f,
                        r = q.buffer,
                        t = void 0,
                        s = t = void 0,
                        s = q.object.material;
                    if (s instanceof THREE.MeshFaceMaterial) t = r.materialIndex, t = s.materials[t],
                    t.transparent ? (q.transparent = t, q.opaque = null) : (q.opaque = t, q.transparent = null);
                    else if (t = s) t.transparent ? (q.transparent = t, q.opaque = null) : (q.opaque = t, q.transparent = null);
                    f.render = !0;
                    !0 === this.sortObjects && (null !== h.renderDepth ? f.z = h.renderDepth : (ra.getPositionFromMatrix(h.matrixWorld), ra.applyProjection(Ea), f.z = ra.z))
                }
            this.sortObjects && g.sort(i);
            g = a.__webglObjectsImmediate;
            d = 0;
            for (e = g.length; d < e; d++) f = g[d], h = f.object, h.visible && (h._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, h.matrixWorld),
                h._normalMatrix.getNormalMatrix(h._modelViewMatrix), h = f.object.material, h.transparent ? (f.transparent = h, f.opaque = null) : (f.opaque = h, f.transparent = null));
            a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), A(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), l(a.__webglObjects, !1, "", b, k, n, !0, d), p(a.__webglObjectsImmediate, "", b, k, n, !1, d)) : (d = null, this.setBlending(THREE.NoBlending),
                l(a.__webglObjects, !0, "opaque", b, k, n, !1, d), p(a.__webglObjectsImmediate, "opaque", b, k, n, !1, d), l(a.__webglObjects, !1, "transparent", b, k, n, !0, d), p(a.__webglObjectsImmediate, "transparent", b, k, n, !0, d));
            m(this.renderPluginsPost, a, b);
            c && (c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter) && (c instanceof THREE.WebGLRenderTargetCube ? (j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture), j.generateMipmap(j.TEXTURE_CUBE_MAP), j.bindTexture(j.TEXTURE_CUBE_MAP, null)) : (j.bindTexture(j.TEXTURE_2D,
                c.__webglTexture), j.generateMipmap(j.TEXTURE_2D), j.bindTexture(j.TEXTURE_2D, null)));
            this.setDepthTest(!0);
            this.setDepthWrite(!0)
        }
    };
    this.renderImmediateObject = function(a, b, c, d, e) {
        var f = z(a, b, c, d, e);
        $ = -1;
        L.setMaterialFaces(d);
        e.immediateRenderCallback ? e.immediateRenderCallback(f, j, la) : e.render(function(a) {
            L.renderBufferImmediate(a, f, d)
        })
    };
    this.initWebGLObjects = function(a) {
        a.__webglObjects || (a.__webglObjects = [], a.__webglObjectsImmediate = [], a.__webglSprites = [], a.__webglFlares = []);
        for (; a.__objectsAdded.length;) t(a.__objectsAdded[0],
            a), a.__objectsAdded.splice(0, 1);
        for (; a.__objectsRemoved.length;) u(a.__objectsRemoved[0], a), a.__objectsRemoved.splice(0, 1);
        for (var b = 0, h = a.__webglObjects.length; b < h; b++) {
            var g = a.__webglObjects[b].object;
            void 0 === g.__webglInit && (void 0 !== g.__webglActive && u(g, a), t(g, a));
            var i = g,
                l = i.geometry,
                m = void 0,
                p = void 0,
                r = void 0;
            if (l instanceof THREE.BufferGeometry) {
                var s = j.DYNAMIC_DRAW,
                    v = !l.dynamic,
                    z = l.attributes,
                    y = void 0,
                    x = void 0;
                for (y in z) x = z[y], x.needsUpdate && ("index" === y ? (j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,
                    x.buffer), j.bufferData(j.ELEMENT_ARRAY_BUFFER, x.array, s)) : (j.bindBuffer(j.ARRAY_BUFFER, x.buffer), j.bufferData(j.ARRAY_BUFFER, x.array, s)), x.needsUpdate = !1), v && !x.dynamic && (x.array = null)
            } else if (i instanceof THREE.Mesh) {
                for (var A = 0, B = l.geometryGroupsList.length; A < B; A++)
                    if (m = l.geometryGroupsList[A], r = d(i, m), l.buffersNeedUpdate && c(m, i), p = r.attributes && q(r), l.verticesNeedUpdate || l.morphTargetsNeedUpdate || l.elementsNeedUpdate || l.uvsNeedUpdate || l.normalsNeedUpdate || l.colorsNeedUpdate || l.tangentsNeedUpdate ||
                        p) {
                        var w = m,
                            E = i,
                            D = j.DYNAMIC_DRAW,
                            G = !l.dynamic,
                            F = r;
                        if (w.__inittedArrays) {
                            var K = e(F),
                                I = F.vertexColors ? F.vertexColors : !1,
                                L = f(F),
                                O = K === THREE.SmoothShading,
                                C = void 0,
                                J = void 0,
                                V = void 0,
                                M = void 0,
                                Q = void 0,
                                U = void 0,
                                ba = void 0,
                                R = void 0,
                                Y = void 0,
                                za = void 0,
                                $ = void 0,
                                P = void 0,
                                X = void 0,
                                W = void 0,
                                Ba = void 0,
                                ea = void 0,
                                Aa = void 0,
                                ca = void 0,
                                da = void 0,
                                ha = void 0,
                                fa = void 0,
                                ja = void 0,
                                ka = void 0,
                                la = void 0,
                                na = void 0,
                                pa = void 0,
                                sa = void 0,
                                ta = void 0,
                                ua = void 0,
                                Ca = void 0,
                                Da = void 0,
                                Ga = void 0,
                                Fa = void 0,
                                Ka = void 0,
                                Sa = void 0,
                                La = void 0,
                                va =
                                    void 0,
                                wa = void 0,
                                Qa = void 0,
                                Ra = void 0,
                                db = 0,
                                eb = 0,
                                Oa = 0,
                                Pa = 0,
                                Ua = 0,
                                hb = 0,
                                Ta = 0,
                                tb = 0,
                                Za = 0,
                                qa = 0,
                                xa = 0,
                                N = 0,
                                Na = void 0,
                                ib = w.__vertexArray,
                                bb = w.__uvArray,
                                cb = w.__uv2Array,
                                Ma = w.__normalArray,
                                Va = w.__tangentArray,
                                jb = w.__colorArray,
                                Wa = w.__skinIndexArray,
                                Xa = w.__skinWeightArray,
                                fb = w.__morphTargetsArrays,
                                sb = w.__morphNormalsArrays,
                                pb = w.__webglCustomAttributesList,
                                H = void 0,
                                Pb = w.__faceArray,
                                vb = w.__lineArray,
                                Ha = E.geometry,
                                Bb = Ha.elementsNeedUpdate,
                                yb = Ha.uvsNeedUpdate,
                                Db = Ha.normalsNeedUpdate,
                                Mb = Ha.tangentsNeedUpdate,
                                Nb = Ha.colorsNeedUpdate,
                                Ob = Ha.morphTargetsNeedUpdate,
                                ec = Ha.vertices,
                                aa = w.faces3,
                                kb = Ha.faces,
                                Cb = Ha.faceVertexUvs[0],
                                Eb = Ha.faceVertexUvs[1],
                                fc = Ha.skinIndices,
                                Qb = Ha.skinWeights,
                                Rb = Ha.morphTargets,
                                Fb = Ha.morphNormals;
                            if (Ha.verticesNeedUpdate) {
                                C = 0;
                                for (J = aa.length; C < J; C++) M = kb[aa[C]], P = ec[M.a], X = ec[M.b], W = ec[M.c], ib[eb] = P.x, ib[eb + 1] = P.y, ib[eb + 2] = P.z, ib[eb + 3] = X.x, ib[eb + 4] = X.y, ib[eb + 5] = X.z, ib[eb + 6] = W.x, ib[eb + 7] = W.y, ib[eb + 8] = W.z, eb += 9;
                                j.bindBuffer(j.ARRAY_BUFFER, w.__webglVertexBuffer);
                                j.bufferData(j.ARRAY_BUFFER, ib, D)
                            }
                            if (Ob) {
                                Sa = 0;
                                for (La = Rb.length; Sa < La; Sa++) {
                                    C = xa = 0;
                                    for (J = aa.length; C < J; C++) Qa = aa[C], M = kb[Qa], P = Rb[Sa].vertices[M.a], X = Rb[Sa].vertices[M.b], W = Rb[Sa].vertices[M.c], va = fb[Sa], va[xa] = P.x, va[xa + 1] = P.y, va[xa + 2] = P.z, va[xa + 3] = X.x, va[xa + 4] = X.y, va[xa + 5] = X.z, va[xa + 6] = W.x, va[xa + 7] = W.y, va[xa + 8] = W.z, F.morphNormals && (O ? (Ra = Fb[Sa].vertexNormals[Qa], ca = Ra.a, da = Ra.b, ha = Ra.c) : ha = da = ca = Fb[Sa].faceNormals[Qa], wa = sb[Sa], wa[xa] = ca.x, wa[xa + 1] = ca.y, wa[xa + 2] = ca.z, wa[xa + 3] = da.x, wa[xa + 4] = da.y, wa[xa + 5] = da.z, wa[xa + 6] = ha.x, wa[xa + 7] = ha.y, wa[xa +
                                        8] = ha.z), xa += 9;
                                    j.bindBuffer(j.ARRAY_BUFFER, w.__webglMorphTargetsBuffers[Sa]);
                                    j.bufferData(j.ARRAY_BUFFER, fb[Sa], D);
                                    F.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, w.__webglMorphNormalsBuffers[Sa]), j.bufferData(j.ARRAY_BUFFER, sb[Sa], D))
                                }
                            }
                            if (Qb.length) {
                                C = 0;
                                for (J = aa.length; C < J; C++) M = kb[aa[C]], la = Qb[M.a], na = Qb[M.b], pa = Qb[M.c], Xa[qa] = la.x, Xa[qa + 1] = la.y, Xa[qa + 2] = la.z, Xa[qa + 3] = la.w, Xa[qa + 4] = na.x, Xa[qa + 5] = na.y, Xa[qa + 6] = na.z, Xa[qa + 7] = na.w, Xa[qa + 8] = pa.x, Xa[qa + 9] = pa.y, Xa[qa + 10] = pa.z, Xa[qa + 11] = pa.w, sa = fc[M.a], ta =
                                    fc[M.b], ua = fc[M.c], Wa[qa] = sa.x, Wa[qa + 1] = sa.y, Wa[qa + 2] = sa.z, Wa[qa + 3] = sa.w, Wa[qa + 4] = ta.x, Wa[qa + 5] = ta.y, Wa[qa + 6] = ta.z, Wa[qa + 7] = ta.w, Wa[qa + 8] = ua.x, Wa[qa + 9] = ua.y, Wa[qa + 10] = ua.z, Wa[qa + 11] = ua.w, qa += 12;
                                0 < qa && (j.bindBuffer(j.ARRAY_BUFFER, w.__webglSkinIndicesBuffer), j.bufferData(j.ARRAY_BUFFER, Wa, D), j.bindBuffer(j.ARRAY_BUFFER, w.__webglSkinWeightsBuffer), j.bufferData(j.ARRAY_BUFFER, Xa, D))
                            }
                            if (Nb && I) {
                                C = 0;
                                for (J = aa.length; C < J; C++) M = kb[aa[C]], ba = M.vertexColors, R = M.color, 3 === ba.length && I === THREE.VertexColors ? (fa =
                                    ba[0], ja = ba[1], ka = ba[2]) : ka = ja = fa = R, jb[Za] = fa.r, jb[Za + 1] = fa.g, jb[Za + 2] = fa.b, jb[Za + 3] = ja.r, jb[Za + 4] = ja.g, jb[Za + 5] = ja.b, jb[Za + 6] = ka.r, jb[Za + 7] = ka.g, jb[Za + 8] = ka.b, Za += 9;
                                0 < Za && (j.bindBuffer(j.ARRAY_BUFFER, w.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, jb, D))
                            }
                            if (Mb && Ha.hasTangents) {
                                C = 0;
                                for (J = aa.length; C < J; C++) M = kb[aa[C]], Y = M.vertexTangents, Ba = Y[0], ea = Y[1], Aa = Y[2], Va[Ta] = Ba.x, Va[Ta + 1] = Ba.y, Va[Ta + 2] = Ba.z, Va[Ta + 3] = Ba.w, Va[Ta + 4] = ea.x, Va[Ta + 5] = ea.y, Va[Ta + 6] = ea.z, Va[Ta + 7] = ea.w, Va[Ta + 8] = Aa.x, Va[Ta + 9] = Aa.y,
                                Va[Ta + 10] = Aa.z, Va[Ta + 11] = Aa.w, Ta += 12;
                                j.bindBuffer(j.ARRAY_BUFFER, w.__webglTangentBuffer);
                                j.bufferData(j.ARRAY_BUFFER, Va, D)
                            }
                            if (Db && K) {
                                C = 0;
                                for (J = aa.length; C < J; C++)
                                    if (M = kb[aa[C]], Q = M.vertexNormals, U = M.normal, 3 === Q.length && O)
                                        for (Ca = 0; 3 > Ca; Ca++) Ga = Q[Ca], Ma[hb] = Ga.x, Ma[hb + 1] = Ga.y, Ma[hb + 2] = Ga.z, hb += 3;
                                    else
                                        for (Ca = 0; 3 > Ca; Ca++) Ma[hb] = U.x, Ma[hb + 1] = U.y, Ma[hb + 2] = U.z, hb += 3;
                                j.bindBuffer(j.ARRAY_BUFFER, w.__webglNormalBuffer);
                                j.bufferData(j.ARRAY_BUFFER, Ma, D)
                            }
                            if (yb && Cb && L) {
                                C = 0;
                                for (J = aa.length; C < J; C++)
                                    if (V = aa[C], za =
                                        Cb[V], void 0 !== za)
                                        for (Ca = 0; 3 > Ca; Ca++) Fa = za[Ca], bb[Oa] = Fa.x, bb[Oa + 1] = Fa.y, Oa += 2;
                                0 < Oa && (j.bindBuffer(j.ARRAY_BUFFER, w.__webglUVBuffer), j.bufferData(j.ARRAY_BUFFER, bb, D))
                            }
                            if (yb && Eb && L) {
                                C = 0;
                                for (J = aa.length; C < J; C++)
                                    if (V = aa[C], $ = Eb[V], void 0 !== $)
                                        for (Ca = 0; 3 > Ca; Ca++) Ka = $[Ca], cb[Pa] = Ka.x, cb[Pa + 1] = Ka.y, Pa += 2;
                                0 < Pa && (j.bindBuffer(j.ARRAY_BUFFER, w.__webglUV2Buffer), j.bufferData(j.ARRAY_BUFFER, cb, D))
                            }
                            if (Bb) {
                                C = 0;
                                for (J = aa.length; C < J; C++) Pb[Ua] = db, Pb[Ua + 1] = db + 1, Pb[Ua + 2] = db + 2, Ua += 3, vb[tb] = db, vb[tb + 1] = db + 1, vb[tb + 2] =
                                    db, vb[tb + 3] = db + 2, vb[tb + 4] = db + 1, vb[tb + 5] = db + 2, tb += 6, db += 3;
                                j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, w.__webglFaceBuffer);
                                j.bufferData(j.ELEMENT_ARRAY_BUFFER, Pb, D);
                                j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, w.__webglLineBuffer);
                                j.bufferData(j.ELEMENT_ARRAY_BUFFER, vb, D)
                            }
                            if (pb) {
                                Ca = 0;
                                for (Da = pb.length; Ca < Da; Ca++)
                                    if (H = pb[Ca], H.__original.needsUpdate) {
                                        N = 0;
                                        if (1 === H.size)
                                            if (void 0 === H.boundTo || "vertices" === H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) M = kb[aa[C]], H.array[N] = H.value[M.a], H.array[N + 1] = H.value[M.b], H.array[N + 2] =
                                                    H.value[M.c], N += 3
                                            } else {
                                                if ("faces" === H.boundTo) {
                                                    C = 0;
                                                    for (J = aa.length; C < J; C++) Na = H.value[aa[C]], H.array[N] = Na, H.array[N + 1] = Na, H.array[N + 2] = Na, N += 3
                                                }
                                            } else if (2 === H.size)
                                            if (void 0 === H.boundTo || "vertices" === H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) M = kb[aa[C]], P = H.value[M.a], X = H.value[M.b], W = H.value[M.c], H.array[N] = P.x, H.array[N + 1] = P.y, H.array[N + 2] = X.x, H.array[N + 3] = X.y, H.array[N + 4] = W.x, H.array[N + 5] = W.y, N += 6
                                            } else {
                                                if ("faces" === H.boundTo) {
                                                    C = 0;
                                                    for (J = aa.length; C < J; C++) W = X = P = Na = H.value[aa[C]], H.array[N] = P.x, H.array[N +
                                                        1] = P.y, H.array[N + 2] = X.x, H.array[N + 3] = X.y, H.array[N + 4] = W.x, H.array[N + 5] = W.y, N += 6
                                                }
                                            } else if (3 === H.size) {
                                            var oa;
                                            oa = "c" === H.type ? ["r", "g", "b"] : ["x", "y", "z"];
                                            if (void 0 === H.boundTo || "vertices" === H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) M = kb[aa[C]], P = H.value[M.a], X = H.value[M.b], W = H.value[M.c], H.array[N] = P[oa[0]], H.array[N + 1] = P[oa[1]], H.array[N + 2] = P[oa[2]], H.array[N + 3] = X[oa[0]], H.array[N + 4] = X[oa[1]], H.array[N + 5] = X[oa[2]], H.array[N + 6] = W[oa[0]], H.array[N + 7] = W[oa[1]], H.array[N + 8] = W[oa[2]], N += 9
                                            } else if ("faces" ===
                                                H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) W = X = P = Na = H.value[aa[C]], H.array[N] = P[oa[0]], H.array[N + 1] = P[oa[1]], H.array[N + 2] = P[oa[2]], H.array[N + 3] = X[oa[0]], H.array[N + 4] = X[oa[1]], H.array[N + 5] = X[oa[2]], H.array[N + 6] = W[oa[0]], H.array[N + 7] = W[oa[1]], H.array[N + 8] = W[oa[2]], N += 9
                                            } else if ("faceVertices" === H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) Na = H.value[aa[C]], P = Na[0], X = Na[1], W = Na[2], H.array[N] = P[oa[0]], H.array[N + 1] = P[oa[1]], H.array[N + 2] = P[oa[2]], H.array[N + 3] = X[oa[0]], H.array[N + 4] = X[oa[1]], H.array[N + 5] = X[oa[2]], H.array[N +
                                                    6] = W[oa[0]], H.array[N + 7] = W[oa[1]], H.array[N + 8] = W[oa[2]], N += 9
                                            }
                                        } else if (4 === H.size)
                                            if (void 0 === H.boundTo || "vertices" === H.boundTo) {
                                                C = 0;
                                                for (J = aa.length; C < J; C++) M = kb[aa[C]], P = H.value[M.a], X = H.value[M.b], W = H.value[M.c], H.array[N] = P.x, H.array[N + 1] = P.y, H.array[N + 2] = P.z, H.array[N + 3] = P.w, H.array[N + 4] = X.x, H.array[N + 5] = X.y, H.array[N + 6] = X.z, H.array[N + 7] = X.w, H.array[N + 8] = W.x, H.array[N + 9] = W.y, H.array[N + 10] = W.z, H.array[N + 11] = W.w, N += 12
                                            } else if ("faces" === H.boundTo) {
                                            C = 0;
                                            for (J = aa.length; C < J; C++) W = X = P = Na = H.value[aa[C]],
                                            H.array[N] = P.x, H.array[N + 1] = P.y, H.array[N + 2] = P.z, H.array[N + 3] = P.w, H.array[N + 4] = X.x, H.array[N + 5] = X.y, H.array[N + 6] = X.z, H.array[N + 7] = X.w, H.array[N + 8] = W.x, H.array[N + 9] = W.y, H.array[N + 10] = W.z, H.array[N + 11] = W.w, N += 12
                                        } else if ("faceVertices" === H.boundTo) {
                                            C = 0;
                                            for (J = aa.length; C < J; C++) Na = H.value[aa[C]], P = Na[0], X = Na[1], W = Na[2], H.array[N] = P.x, H.array[N + 1] = P.y, H.array[N + 2] = P.z, H.array[N + 3] = P.w, H.array[N + 4] = X.x, H.array[N + 5] = X.y, H.array[N + 6] = X.z, H.array[N + 7] = X.w, H.array[N + 8] = W.x, H.array[N + 9] = W.y, H.array[N + 10] = W.z,
                                            H.array[N + 11] = W.w, N += 12
                                        }
                                        j.bindBuffer(j.ARRAY_BUFFER, H.buffer);
                                        j.bufferData(j.ARRAY_BUFFER, H.array, D)
                                    }
                            }
                            G && (delete w.__inittedArrays, delete w.__colorArray, delete w.__normalArray, delete w.__tangentArray, delete w.__uvArray, delete w.__uv2Array, delete w.__faceArray, delete w.__vertexArray, delete w.__lineArray, delete w.__skinIndexArray, delete w.__skinWeightArray)
                        }
                    }
                l.verticesNeedUpdate = !1;
                l.morphTargetsNeedUpdate = !1;
                l.elementsNeedUpdate = !1;
                l.uvsNeedUpdate = !1;
                l.normalsNeedUpdate = !1;
                l.colorsNeedUpdate = !1;
                l.tangentsNeedUpdate = !1;
                l.buffersNeedUpdate = !1;
                r.attributes && n(r)
            } else if (i instanceof THREE.Line) {
                r = d(i, l);
                p = r.attributes && q(r);
                if (l.verticesNeedUpdate || l.colorsNeedUpdate || l.lineDistancesNeedUpdate || p) {
                    var Ya = l,
                        Sb = j.DYNAMIC_DRAW,
                        Ib = void 0,
                        Jb = void 0,
                        Kb = void 0,
                        Tb = void 0,
                        ma = void 0,
                        Ub = void 0,
                        Gb = Ya.vertices,
                        Hb = Ya.colors,
                        kc = Ya.lineDistances,
                        Zb = Gb.length,
                        $b = Hb.length,
                        ac = kc.length,
                        Vb = Ya.__vertexArray,
                        Wb = Ya.__colorArray,
                        lc = Ya.__lineDistanceArray,
                        bc = Ya.colorsNeedUpdate,
                        cc = Ya.lineDistancesNeedUpdate,
                        gc = Ya.__webglCustomAttributesList,
                        Xb = void 0,
                        mc = void 0,
                        ya = void 0,
                        zb = void 0,
                        Ia = void 0,
                        ia = void 0;
                    if (Ya.verticesNeedUpdate) {
                        for (Ib = 0; Ib < Zb; Ib++) Tb = Gb[Ib], ma = 3 * Ib, Vb[ma] = Tb.x, Vb[ma + 1] = Tb.y, Vb[ma + 2] = Tb.z;
                        j.bindBuffer(j.ARRAY_BUFFER, Ya.__webglVertexBuffer);
                        j.bufferData(j.ARRAY_BUFFER, Vb, Sb)
                    }
                    if (bc) {
                        for (Jb = 0; Jb < $b; Jb++) Ub = Hb[Jb], ma = 3 * Jb, Wb[ma] = Ub.r, Wb[ma + 1] = Ub.g, Wb[ma + 2] = Ub.b;
                        j.bindBuffer(j.ARRAY_BUFFER, Ya.__webglColorBuffer);
                        j.bufferData(j.ARRAY_BUFFER, Wb, Sb)
                    }
                    if (cc) {
                        for (Kb = 0; Kb < ac; Kb++) lc[Kb] = kc[Kb];
                        j.bindBuffer(j.ARRAY_BUFFER, Ya.__webglLineDistanceBuffer);
                        j.bufferData(j.ARRAY_BUFFER, lc, Sb)
                    }
                    if (gc) {
                        Xb = 0;
                        for (mc = gc.length; Xb < mc; Xb++)
                            if (ia = gc[Xb], ia.needsUpdate && (void 0 === ia.boundTo || "vertices" === ia.boundTo)) {
                                ma = 0;
                                zb = ia.value.length;
                                if (1 === ia.size)
                                    for (ya = 0; ya < zb; ya++) ia.array[ya] = ia.value[ya];
                                else if (2 === ia.size)
                                    for (ya = 0; ya < zb; ya++) Ia = ia.value[ya], ia.array[ma] = Ia.x, ia.array[ma + 1] = Ia.y, ma += 2;
                                else if (3 === ia.size)
                                    if ("c" === ia.type)
                                        for (ya = 0; ya < zb; ya++) Ia = ia.value[ya], ia.array[ma] = Ia.r, ia.array[ma + 1] = Ia.g, ia.array[ma + 2] = Ia.b, ma += 3;
                                    else
                                        for (ya = 0; ya < zb; ya++) Ia =
                                            ia.value[ya], ia.array[ma] = Ia.x, ia.array[ma + 1] = Ia.y, ia.array[ma + 2] = Ia.z, ma += 3;
                                    else if (4 === ia.size)
                                    for (ya = 0; ya < zb; ya++) Ia = ia.value[ya], ia.array[ma] = Ia.x, ia.array[ma + 1] = Ia.y, ia.array[ma + 2] = Ia.z, ia.array[ma + 3] = Ia.w, ma += 4;
                                j.bindBuffer(j.ARRAY_BUFFER, ia.buffer);
                                j.bufferData(j.ARRAY_BUFFER, ia.array, Sb)
                            }
                    }
                }
                l.verticesNeedUpdate = !1;
                l.colorsNeedUpdate = !1;
                l.lineDistancesNeedUpdate = !1;
                r.attributes && n(r)
            } else if (i instanceof THREE.ParticleSystem) {
                r = d(i, l);
                p = r.attributes && q(r);
                if (l.verticesNeedUpdate || l.colorsNeedUpdate ||
                    i.sortParticles || p) {
                    var lb = l,
                        hc = j.DYNAMIC_DRAW,
                        Lb = i,
                        Ja = void 0,
                        mb = void 0,
                        nb = void 0,
                        T = void 0,
                        ob = void 0,
                        ub = void 0,
                        Yb = lb.vertices,
                        ic = Yb.length,
                        jc = lb.colors,
                        nc = jc.length,
                        wb = lb.__vertexArray,
                        xb = lb.__colorArray,
                        qb = lb.__sortArray,
                        oc = lb.verticesNeedUpdate,
                        pc = lb.colorsNeedUpdate,
                        rb = lb.__webglCustomAttributesList,
                        $a = void 0,
                        Ab = void 0,
                        Z = void 0,
                        ab = void 0,
                        ga = void 0,
                        S = void 0;
                    if (Lb.sortParticles) {
                        gb.copy(Ea);
                        gb.multiply(Lb.matrixWorld);
                        for (Ja = 0; Ja < ic; Ja++) nb = Yb[Ja], ra.copy(nb), ra.applyProjection(gb), qb[Ja] = [ra.z,
                            Ja
                        ];
                        qb.sort(k);
                        for (Ja = 0; Ja < ic; Ja++) nb = Yb[qb[Ja][1]], T = 3 * Ja, wb[T] = nb.x, wb[T + 1] = nb.y, wb[T + 2] = nb.z;
                        for (mb = 0; mb < nc; mb++) T = 3 * mb, ub = jc[qb[mb][1]], xb[T] = ub.r, xb[T + 1] = ub.g, xb[T + 2] = ub.b;
                        if (rb) {
                            $a = 0;
                            for (Ab = rb.length; $a < Ab; $a++)
                                if (S = rb[$a], void 0 === S.boundTo || "vertices" === S.boundTo)
                                    if (T = 0, ab = S.value.length, 1 === S.size)
                                        for (Z = 0; Z < ab; Z++) ob = qb[Z][1], S.array[Z] = S.value[ob];
                                    else if (2 === S.size)
                                for (Z = 0; Z < ab; Z++) ob = qb[Z][1], ga = S.value[ob], S.array[T] = ga.x, S.array[T + 1] = ga.y, T += 2;
                            else if (3 === S.size)
                                if ("c" === S.type)
                                    for (Z =
                                        0; Z < ab; Z++) ob = qb[Z][1], ga = S.value[ob], S.array[T] = ga.r, S.array[T + 1] = ga.g, S.array[T + 2] = ga.b, T += 3;
                                else
                                    for (Z = 0; Z < ab; Z++) ob = qb[Z][1], ga = S.value[ob], S.array[T] = ga.x, S.array[T + 1] = ga.y, S.array[T + 2] = ga.z, T += 3;
                                else if (4 === S.size)
                                for (Z = 0; Z < ab; Z++) ob = qb[Z][1], ga = S.value[ob], S.array[T] = ga.x, S.array[T + 1] = ga.y, S.array[T + 2] = ga.z, S.array[T + 3] = ga.w, T += 4
                        }
                    } else {
                        if (oc)
                            for (Ja = 0; Ja < ic; Ja++) nb = Yb[Ja], T = 3 * Ja, wb[T] = nb.x, wb[T + 1] = nb.y, wb[T + 2] = nb.z;
                        if (pc)
                            for (mb = 0; mb < nc; mb++) ub = jc[mb], T = 3 * mb, xb[T] = ub.r, xb[T + 1] = ub.g, xb[T + 2] = ub.b;
                        if (rb) {
                            $a = 0;
                            for (Ab = rb.length; $a < Ab; $a++)
                                if (S = rb[$a], S.needsUpdate && (void 0 === S.boundTo || "vertices" === S.boundTo))
                                    if (ab = S.value.length, T = 0, 1 === S.size)
                                        for (Z = 0; Z < ab; Z++) S.array[Z] = S.value[Z];
                                    else if (2 === S.size)
                                for (Z = 0; Z < ab; Z++) ga = S.value[Z], S.array[T] = ga.x, S.array[T + 1] = ga.y, T += 2;
                            else if (3 === S.size)
                                if ("c" === S.type)
                                    for (Z = 0; Z < ab; Z++) ga = S.value[Z], S.array[T] = ga.r, S.array[T + 1] = ga.g, S.array[T + 2] = ga.b, T += 3;
                                else
                                    for (Z = 0; Z < ab; Z++) ga = S.value[Z], S.array[T] = ga.x, S.array[T + 1] = ga.y, S.array[T + 2] = ga.z, T += 3;
                                else if (4 ===
                                S.size)
                                for (Z = 0; Z < ab; Z++) ga = S.value[Z], S.array[T] = ga.x, S.array[T + 1] = ga.y, S.array[T + 2] = ga.z, S.array[T + 3] = ga.w, T += 4
                        }
                    } if (oc || Lb.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, lb.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, wb, hc);
                    if (pc || Lb.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, lb.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, xb, hc);
                    if (rb) {
                        $a = 0;
                        for (Ab = rb.length; $a < Ab; $a++)
                            if (S = rb[$a], S.needsUpdate || Lb.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, S.buffer), j.bufferData(j.ARRAY_BUFFER, S.array, hc)
                    }
                }
                l.verticesNeedUpdate = !1;
                l.colorsNeedUpdate = !1;
                r.attributes && n(r)
            }
        }
    };
    this.initMaterial = function(a, b, c, d) {
        var e, f, h, g;
        a.addEventListener("dispose", Fb);
        var i, k, l, m, n;
        a instanceof THREE.MeshDepthMaterial ? n = "depth" : a instanceof THREE.MeshNormalMaterial ? n = "normal" : a instanceof THREE.MeshBasicMaterial ? n = "basic" : a instanceof THREE.MeshLambertMaterial ? n = "lambert" : a instanceof THREE.MeshPhongMaterial ? n = "phong" : a instanceof THREE.LineBasicMaterial ? n = "basic" : a instanceof THREE.LineDashedMaterial ? n = "dashed" : a instanceof THREE.ParticleSystemMaterial &&
            (n = "particle_basic");
        if (n) {
            var p = THREE.ShaderLib[n];
            a.uniforms = THREE.UniformsUtils.clone(p.uniforms);
            a.vertexShader = p.vertexShader;
            a.fragmentShader = p.fragmentShader
        }
        var q = e = 0,
            r = 0,
            t = p = 0;
        for (f = b.length; t < f; t++) h = b[t], h.onlyShadow || (h instanceof THREE.DirectionalLight && e++, h instanceof THREE.PointLight && q++, h instanceof THREE.SpotLight && r++, h instanceof THREE.HemisphereLight && p++);
        f = q;
        h = r;
        g = p;
        r = p = 0;
        for (q = b.length; r < q; r++) t = b[r], t.castShadow && (t instanceof THREE.SpotLight && p++, t instanceof THREE.DirectionalLight && !t.shadowCascade && p++);
        m = p;
        yb && d && d.useVertexTexture ? l = 1024 : (b = j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS), b = Math.floor((b - 20) / 4), void 0 !== d && d instanceof THREE.SkinnedMesh && (b = Math.min(d.bones.length, b), b < d.bones.length && console.warn("WebGLRenderer: too many bones - " + d.bones.length + ", this GPU supports just " + b + " (try OpenGL instead of ANGLE)")), l = b);
        a: {
            var r = a.fragmentShader,
                q = a.vertexShader,
                p = a.uniforms,
                b = a.attributes,
                t = a.defines,
                c = {
                    map: !! a.map,
                    envMap: !! a.envMap,
                    lightMap: !! a.lightMap,
                    bumpMap: !! a.bumpMap,
                    normalMap: !! a.normalMap,
                    specularMap: !! a.specularMap,
                    vertexColors: a.vertexColors,
                    fog: c,
                    useFog: a.fog,
                    fogExp: c instanceof THREE.FogExp2,
                    sizeAttenuation: a.sizeAttenuation,
                    skinning: a.skinning,
                    maxBones: l,
                    useVertexTexture: yb && d && d.useVertexTexture,
                    morphTargets: a.morphTargets,
                    morphNormals: a.morphNormals,
                    maxMorphTargets: this.maxMorphTargets,
                    maxMorphNormals: this.maxMorphNormals,
                    maxDirLights: e,
                    maxPointLights: f,
                    maxSpotLights: h,
                    maxHemiLights: g,
                    maxShadows: m,
                    shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow,
                    shadowMapType: this.shadowMapType,
                    shadowMapDebug: this.shadowMapDebug,
                    shadowMapCascade: this.shadowMapCascade,
                    alphaTest: a.alphaTest,
                    metal: a.metal,
                    perPixel: a.perPixel,
                    wrapAround: a.wrapAround,
                    doubleSided: a.side === THREE.DoubleSide,
                    flipSided: a.side === THREE.BackSide
                }, d = a.index0AttributeName,
                s, u, v;
            e = [];
            n ? e.push(n) : (e.push(r), e.push(q));
            for (u in t) e.push(u), e.push(t[u]);
            for (s in c) e.push(s), e.push(c[s]);
            n = e.join();
            s = 0;
            for (u = da.length; s < u; s++)
                if (e = da[s], e.code === n) {
                    e.usedTimes++;
                    k = e.program;
                    break a
                }
            s = "SHADOWMAP_TYPE_BASIC";
            c.shadowMapType === THREE.PCFShadowMap ? s = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === THREE.PCFSoftShadowMap && (s = "SHADOWMAP_TYPE_PCF_SOFT");
            u = [];
            for (v in t) e = t[v], !1 !== e && (e = "#define " + v + " " + e, u.push(e));
            e = u.join("\n");
            v = j.createProgram();
            u = ["precision " + M + " float;", "precision " + M + " int;", e, Bb ? "#define VERTEX_TEXTURES" : "", L.gammaInput ? "#define GAMMA_INPUT" : "", L.gammaOutput ? "#define GAMMA_OUTPUT" : "", L.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " +
                c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" :
                "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals ? "#define USE_MORPHNORMALS" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + s : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"
            ].join("\n");
            s = ["precision " + M + " float;", "precision " + M + " int;", c.bumpMap || c.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", e, "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", L.gammaInput ? "#define GAMMA_INPUT" : "", L.gammaOutput ? "#define GAMMA_OUTPUT" : "", L.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" :
                "", c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.metal ? "#define METAL" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" :
                "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + s : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
            ].join("\n");
            u = D("vertex", u + q);
            s = D("fragment", s + r);
            j.attachShader(v, u);
            j.attachShader(v, s);
            d && j.bindAttribLocation(v, 0, d);
            j.linkProgram(v);
            j.getProgramParameter(v, j.LINK_STATUS) || (console.error("Could not initialise shader\nVALIDATE_STATUS: " + j.getProgramParameter(v,
                j.VALIDATE_STATUS) + ", gl error [" + j.getError() + "]"), console.error("Program Info Log: " + j.getProgramInfoLog(v)));
            j.deleteShader(s);
            j.deleteShader(u);
            v.uniforms = {};
            v.attributes = {};
            var w;
            s = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");
            c.useVertexTexture ? (s.push("boneTexture"), s.push("boneTextureWidth"), s.push("boneTextureHeight")) : s.push("boneGlobalMatrices");
            for (w in p) s.push(w);
            w = s;
            s = 0;
            for (u = w.length; s < u; s++) p = w[s], v.uniforms[p] =
                j.getUniformLocation(v, p);
            s = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
            for (w = 0; w < c.maxMorphTargets; w++) s.push("morphTarget" + w);
            for (w = 0; w < c.maxMorphNormals; w++) s.push("morphNormal" + w);
            for (k in b) s.push(k);
            k = s;
            w = 0;
            for (b = k.length; w < b; w++) s = k[w], v.attributes[s] = j.getAttribLocation(v, s);
            v.id = za++;
            da.push({
                program: v,
                code: n,
                usedTimes: 1
            });
            L.info.memory.programs = da.length;
            k = v
        }
        a.program = k;
        w = a.program.attributes;
        if (a.morphTargets) {
            a.numSupportedMorphTargets = 0;
            b = "morphTarget";
            for (k = 0; k < this.maxMorphTargets; k++) v = b + k, 0 <= w[v] && a.numSupportedMorphTargets++
        }
        if (a.morphNormals) {
            a.numSupportedMorphNormals = 0;
            b = "morphNormal";
            for (k = 0; k < this.maxMorphNormals; k++) v = b + k, 0 <= w[v] && a.numSupportedMorphNormals++
        }
        a.uniformsList = [];
        for (i in a.uniforms) a.uniformsList.push([a.uniforms[i], i])
    };
    this.setFaceCulling = function(a, b) {
        a === THREE.CullFaceNone ? j.disable(j.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? j.frontFace(j.CW) : j.frontFace(j.CCW), a === THREE.CullFaceBack ? j.cullFace(j.BACK) : a === THREE.CullFaceFront ?
            j.cullFace(j.FRONT) : j.cullFace(j.FRONT_AND_BACK), j.enable(j.CULL_FACE))
    };
    this.setMaterialFaces = function(a) {
        var b = a.side === THREE.DoubleSide,
            a = a.side === THREE.BackSide;
        Y !== b && (b ? j.disable(j.CULL_FACE) : j.enable(j.CULL_FACE), Y = b);
        U !== a && (a ? j.frontFace(j.CW) : j.frontFace(j.CCW), U = a)
    };
    this.setDepthTest = function(a) {
        Ga !== a && (a ? j.enable(j.DEPTH_TEST) : j.disable(j.DEPTH_TEST), Ga = a)
    };
    this.setDepthWrite = function(a) {
        ka !== a && (j.depthMask(a), ka = a)
    };
    this.setBlending = function(a, b, c, d) {
        a !== ja && (a === THREE.NoBlending ? j.disable(j.BLEND) :
            a === THREE.AdditiveBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.SRC_ALPHA, j.ONE)) : a === THREE.SubtractiveBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.SRC_COLOR)) : a === THREE.CustomBlending ? j.enable(j.BLEND) : (j.enable(j.BLEND), j.blendEquationSeparate(j.FUNC_ADD, j.FUNC_ADD), j.blendFuncSeparate(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA, j.ONE,
                j.ONE_MINUS_SRC_ALPHA)), ja = a);
        if (a === THREE.CustomBlending) {
            if (b !== sa && (j.blendEquation(I(b)), sa = b), c !== ha || d !== Ka) j.blendFunc(I(c), I(d)), ha = c, Ka = d
        } else Ka = ha = sa = null
    };
    this.setTexture = function(a, b) {
        if (a.needsUpdate) {
            a.__webglInit || (a.__webglInit = !0, a.addEventListener("dispose", Db), a.__webglTexture = j.createTexture(), L.info.memory.textures++);
            j.activeTexture(j.TEXTURE0 + b);
            j.bindTexture(j.TEXTURE_2D, a.__webglTexture);
            j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, a.flipY);
            j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                a.premultiplyAlpha);
            j.pixelStorei(j.UNPACK_ALIGNMENT, a.unpackAlignment);
            var c = a.image,
                d = 0 === (c.width & c.width - 1) && 0 === (c.height & c.height - 1),
                e = I(a.format),
                f = I(a.type);
            F(j.TEXTURE_2D, a, d);
            var h = a.mipmaps;
            if (a instanceof THREE.DataTexture)
                if (0 < h.length && d) {
                    for (var g = 0, i = h.length; g < i; g++) c = h[g], j.texImage2D(j.TEXTURE_2D, g, e, c.width, c.height, 0, e, f, c.data);
                    a.generateMipmaps = !1
                } else j.texImage2D(j.TEXTURE_2D, 0, e, c.width, c.height, 0, e, f, c.data);
                else if (a instanceof THREE.CompressedTexture) {
                g = 0;
                for (i = h.length; g <
                    i; g++) c = h[g], a.format !== THREE.RGBAFormat ? j.compressedTexImage2D(j.TEXTURE_2D, g, e, c.width, c.height, 0, c.data) : j.texImage2D(j.TEXTURE_2D, g, e, c.width, c.height, 0, e, f, c.data)
            } else if (0 < h.length && d) {
                g = 0;
                for (i = h.length; g < i; g++) c = h[g], j.texImage2D(j.TEXTURE_2D, g, e, e, f, c);
                a.generateMipmaps = !1
            } else j.texImage2D(j.TEXTURE_2D, 0, e, e, f, a.image);
            a.generateMipmaps && d && j.generateMipmap(j.TEXTURE_2D);
            a.needsUpdate = !1;
            if (a.onUpdate) a.onUpdate()
        } else j.activeTexture(j.TEXTURE0 + b), j.bindTexture(j.TEXTURE_2D, a.__webglTexture)
    };
    this.setRenderTarget = function(a) {
        var b = a instanceof THREE.WebGLRenderTargetCube;
        if (a && !a.__webglFramebuffer) {
            void 0 === a.depthBuffer && (a.depthBuffer = !0);
            void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
            a.addEventListener("dispose", Eb);
            a.__webglTexture = j.createTexture();
            L.info.memory.textures++;
            var c = 0 === (a.width & a.width - 1) && 0 === (a.height & a.height - 1),
                d = I(a.format),
                e = I(a.type);
            if (b) {
                a.__webglFramebuffer = [];
                a.__webglRenderbuffer = [];
                j.bindTexture(j.TEXTURE_CUBE_MAP, a.__webglTexture);
                F(j.TEXTURE_CUBE_MAP,
                    a, c);
                for (var f = 0; 6 > f; f++) {
                    a.__webglFramebuffer[f] = j.createFramebuffer();
                    a.__webglRenderbuffer[f] = j.createRenderbuffer();
                    j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
                    var h = a,
                        g = j.TEXTURE_CUBE_MAP_POSITIVE_X + f;
                    j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer[f]);
                    j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, g, h.__webglTexture, 0);
                    O(a.__webglRenderbuffer[f], a)
                }
                c && j.generateMipmap(j.TEXTURE_CUBE_MAP)
            } else a.__webglFramebuffer = j.createFramebuffer(), a.__webglRenderbuffer =
                a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : j.createRenderbuffer(), j.bindTexture(j.TEXTURE_2D, a.__webglTexture), F(j.TEXTURE_2D, a, c), j.texImage2D(j.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = j.TEXTURE_2D, j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer), j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, d, a.__webglTexture, 0), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer &&
                a.stencilBuffer && j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : O(a.__webglRenderbuffer, a), c && j.generateMipmap(j.TEXTURE_2D);
            b ? j.bindTexture(j.TEXTURE_CUBE_MAP, null) : j.bindTexture(j.TEXTURE_2D, null);
            j.bindRenderbuffer(j.RENDERBUFFER, null);
            j.bindFramebuffer(j.FRAMEBUFFER, null)
        }
        a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = Ma, a = fb, d = bb, e = cb);
        b !== ba && (j.bindFramebuffer(j.FRAMEBUFFER, b),
            j.viewport(d, e, c, a), ba = b);
        sb = c;
        pb = a
    };
    this.shadowMapPlugin = new THREE.ShadowMapPlugin;
    this.addPrePlugin(this.shadowMapPlugin);
    this.addPostPlugin(new THREE.SpritePlugin);
    this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function(a, b, c) {
    this.width = a;
    this.height = b;
    c = c || {};
    this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
    this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = void 0 !== c.format ? c.format :
        THREE.RGBAFormat;
    this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.generateMipmaps = !0;
    this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    clone: function() {
        var a = new THREE.WebGLRenderTarget(this.width, this.height);
        a.wrapS = this.wrapS;
        a.wrapT = this.wrapT;
        a.magFilter = this.magFilter;
        a.minFilter = this.minFilter;
        a.anisotropy = this.anisotropy;
        a.offset.copy(this.offset);
        a.repeat.copy(this.repeat);
        a.format = this.format;
        a.type = this.type;
        a.depthBuffer = this.depthBuffer;
        a.stencilBuffer = this.stencilBuffer;
        a.generateMipmaps = this.generateMipmaps;
        a.shareDepthFrom = this.shareDepthFrom;
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube = function(a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c);
    this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(a) {
    this.positionWorld.copy(a.positionWorld);
    this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace3 = function() {
    this.id = 0;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidModel = new THREE.Vector3;
    this.normalModel = new THREE.Vector3;
    this.normalModelView = new THREE.Vector3;
    this.vertexNormalsLength = 0;
    this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.material = this.color = null;
    this.uvs = [
        []
    ];
    this.z =
        0
};
THREE.RenderableObject = function() {
    this.id = 0;
    this.object = null;
    this.z = 0
};
THREE.RenderableSprite = function() {
    this.id = 0;
    this.object = null;
    this.rotation = this.z = this.y = this.x = 0;
    this.scale = new THREE.Vector2;
    this.material = null
};
THREE.RenderableLine = function() {
    this.id = 0;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.vertexColors = [new THREE.Color, new THREE.Color];
    this.material = null;
    this.z = 0
};
THREE.GeometryUtils = {
    merge: function(a, b, c) {
        var d, e, f = a.vertices.length,
            h = b instanceof THREE.Mesh ? b.geometry : b,
            g = a.vertices,
            i = h.vertices,
            k = a.faces,
            m = h.faces,
            a = a.faceVertexUvs[0],
            h = h.faceVertexUvs[0];
        void 0 === c && (c = 0);
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, e = (new THREE.Matrix3).getNormalMatrix(d));
        for (var b = 0, l = i.length; b < l; b++) {
            var p = i[b].clone();
            d && p.applyMatrix4(d);
            g.push(p)
        }
        b = 0;
        for (l = m.length; b < l; b++) {
            var p = m[b],
                t, s, q = p.vertexNormals,
                n = p.vertexColors;
            t = new THREE.Face3(p.a +
                f, p.b + f, p.c + f);
            t.normal.copy(p.normal);
            e && t.normal.applyMatrix3(e).normalize();
            g = 0;
            for (i = q.length; g < i; g++) s = q[g].clone(), e && s.applyMatrix3(e).normalize(), t.vertexNormals.push(s);
            t.color.copy(p.color);
            g = 0;
            for (i = n.length; g < i; g++) s = n[g], t.vertexColors.push(s.clone());
            t.materialIndex = p.materialIndex + c;
            t.centroid.copy(p.centroid);
            d && t.centroid.applyMatrix4(d);
            k.push(t)
        }
        b = 0;
        for (l = h.length; b < l; b++) {
            c = h[b];
            d = [];
            g = 0;
            for (i = c.length; g < i; g++) d.push(new THREE.Vector2(c[g].x, c[g].y));
            a.push(d)
        }
    },
    randomPointInTriangle: function() {
        var a =
            new THREE.Vector3;
        return function(b, c, d) {
            var e = new THREE.Vector3,
                f = THREE.Math.random16(),
                h = THREE.Math.random16();
            1 < f + h && (f = 1 - f, h = 1 - h);
            var g = 1 - f - h;
            e.copy(b);
            e.multiplyScalar(f);
            a.copy(c);
            a.multiplyScalar(h);
            e.add(a);
            a.copy(d);
            a.multiplyScalar(g);
            e.add(a);
            return e
        }
    }(),
    randomPointInFace: function(a, b) {
        return THREE.GeometryUtils.randomPointInTriangle(b.vertices[a.a], b.vertices[a.b], b.vertices[a.c])
    },
    randomPointsInGeometry: function(a, b) {
        function c(a) {
            function b(c, d) {
                if (d < c) return c;
                var e = c + Math.floor((d -
                    c) / 2);
                return k[e] > a ? b(c, e - 1) : k[e] < a ? b(e + 1, d) : e
            }
            return b(0, k.length - 1)
        }
        var d, e, f = a.faces,
            h = a.vertices,
            g = f.length,
            i = 0,
            k = [],
            m, l, p;
        for (e = 0; e < g; e++) d = f[e], m = h[d.a], l = h[d.b], p = h[d.c], d._area = THREE.GeometryUtils.triangleArea(m, l, p), i += d._area, k[e] = i;
        d = [];
        for (e = 0; e < b; e++) h = THREE.Math.random16() * i, h = c(h), d[e] = THREE.GeometryUtils.randomPointInFace(f[h], a, !0);
        return d
    },
    triangleArea: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d, e) {
            a.subVectors(d, c);
            b.subVectors(e, c);
            a.cross(b);
            return 0.5 *
                a.length()
        }
    }(),
    center: function(a) {
        a.computeBoundingBox();
        var b = a.boundingBox,
            c = new THREE.Vector3;
        c.addVectors(b.min, b.max);
        c.multiplyScalar(-0.5);
        a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x, c.y, c.z));
        a.computeBoundingBox();
        return c
    },
    triangulateQuads: function(a) {
        var b, c, d, e, f = [],
            h = [];
        b = 0;
        for (c = a.faceVertexUvs.length; b < c; b++) h[b] = [];
        b = 0;
        for (c = a.faces.length; b < c; b++) {
            f.push(a.faces[b]);
            d = 0;
            for (e = a.faceVertexUvs.length; d < e; d++) h[d].push(a.faceVertexUvs[d][b])
        }
        a.faces = f;
        a.faceVertexUvs = h;
        a.computeCentroids();
        a.computeFaceNormals();
        a.computeVertexNormals();
        a.hasTangents && a.computeTangents()
    }
};
THREE.ImageUtils = {
    crossOrigin: "anonymous",
    loadTexture: function(a, b, c) {
        var d = new THREE.ImageLoader;
        d.crossOrigin = this.crossOrigin;
        var e = new THREE.Texture(void 0, b),
            b = d.load(a, function() {
                e.needsUpdate = !0;
                c && c(e)
            });
        e.image = b;
        e.sourceFile = a;
        return e
    },
    loadCompressedTexture: function(a, b, c, d) {
        var e = new THREE.CompressedTexture;
        e.mapping = b;
        var f = new XMLHttpRequest;
        f.onload = function() {
            var a = THREE.ImageUtils.parseDDS(f.response, !0);
            e.format = a.format;
            e.mipmaps = a.mipmaps;
            e.image.width = a.width;
            e.image.height = a.height;
            e.generateMipmaps = !1;
            e.needsUpdate = !0;
            c && c(e)
        };
        f.onerror = d;
        f.open("GET", a, !0);
        f.responseType = "arraybuffer";
        f.send(null);
        return e
    },
    loadTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.Texture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        for (var b = 0, h = a.length; b < h; ++b) {
            var g = new Image;
            e[b] = g;
            g.onload = function() {
                e.loadCount += 1;
                6 === e.loadCount && (f.needsUpdate = !0, c && c(f))
            };
            g.onerror = d;
            g.crossOrigin = this.crossOrigin;
            g.src = a[b]
        }
        return f
    },
    loadCompressedTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.CompressedTexture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        f.generateMipmaps = !1;
        b = function(a, b) {
            return function() {
                var d = THREE.ImageUtils.parseDDS(a.response, !0);
                b.format = d.format;
                b.mipmaps = d.mipmaps;
                b.width = d.width;
                b.height = d.height;
                e.loadCount += 1;
                6 === e.loadCount && (f.format = d.format, f.needsUpdate = !0, c && c(f))
            }
        };
        if (a instanceof Array)
            for (var h = 0, g = a.length; h < g; ++h) {
                var i = {};
                e[h] = i;
                var k = new XMLHttpRequest;
                k.onload = b(k, i);
                k.onerror = d;
                i = a[h];
                k.open("GET", i, !0);
                k.responseType =
                    "arraybuffer";
                k.send(null)
            } else k = new XMLHttpRequest, k.onload = function() {
                var a = THREE.ImageUtils.parseDDS(k.response, !0);
                if (a.isCubemap) {
                    for (var b = a.mipmaps.length / a.mipmapCount, d = 0; d < b; d++) {
                        e[d] = {
                            mipmaps: []
                        };
                        for (var h = 0; h < a.mipmapCount; h++) e[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + h]), e[d].format = a.format, e[d].width = a.width, e[d].height = a.height
                    }
                    f.format = a.format;
                    f.needsUpdate = !0;
                    c && c(f)
                }
            }, k.onerror = d, k.open("GET", a, !0), k.responseType = "arraybuffer", k.send(null);
        return f
    },
    loadDDSTexture: function(a,
        b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.CompressedTexture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        f.generateMipmaps = !1;
        var h = new XMLHttpRequest;
        h.onload = function() {
            var a = THREE.ImageUtils.parseDDS(h.response, !0);
            if (a.isCubemap)
                for (var b = a.mipmaps.length / a.mipmapCount, d = 0; d < b; d++) {
                    e[d] = {
                        mipmaps: []
                    };
                    for (var m = 0; m < a.mipmapCount; m++) e[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + m]), e[d].format = a.format, e[d].width = a.width, e[d].height = a.height
                } else f.image.width = a.width, f.image.height = a.height,
            f.mipmaps = a.mipmaps;
            f.format = a.format;
            f.needsUpdate = !0;
            c && c(f)
        };
        h.onerror = d;
        h.open("GET", a, !0);
        h.responseType = "arraybuffer";
        h.send(null);
        return f
    },
    parseDDS: function(a, b) {
        function c(a) {
            return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
        }
        var d = {
            mipmaps: [],
            width: 0,
            height: 0,
            format: null,
            mipmapCount: 1
        }, e = c("DXT1"),
            f = c("DXT3"),
            h = c("DXT5"),
            g = new Int32Array(a, 0, 31);
        if (542327876 !== g[0]) return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"), d;
        if (!g[20] &
            4) return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"), d;
        var i = g[21],
            k = !1;
        switch (i) {
            case e:
                e = 8;
                d.format = THREE.RGB_S3TC_DXT1_Format;
                break;
            case f:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT3_Format;
                break;
            case h:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT5_Format;
                break;
            default:
                if (32 == g[22] && g[23] & 16711680 && g[24] & 65280 && g[25] & 255 && g[26] & 4278190080) k = !0, e = 64, d.format = THREE.RGBAFormat;
                else return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ", String.fromCharCode(i &
                    255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255)), d
        }
        d.mipmapCount = 1;
        g[2] & 131072 && !1 !== b && (d.mipmapCount = Math.max(1, g[7]));
        d.isCubemap = g[28] & 512 ? !0 : !1;
        d.width = g[4];
        d.height = g[3];
        for (var g = g[1] + 4, f = d.width, h = d.height, i = d.isCubemap ? 6 : 1, m = 0; m < i; m++) {
            for (var l = 0; l < d.mipmapCount; l++) {
                if (k) {
                    var p;
                    p = f;
                    for (var t = h, s = 4 * p * t, q = new Uint8Array(a, g, s), s = new Uint8Array(s), n = 0, u = 0, r = 0; r < t; r++)
                        for (var v = 0; v < p; v++) {
                            var z = q[u];
                            u++;
                            var G = q[u];
                            u++;
                            var w = q[u];
                            u++;
                            var y = q[u];
                            u++;
                            s[n] = w;
                            n++;
                            s[n] = G;
                            n++;
                            s[n] = z;
                            n++;
                            s[n] = y;
                            n++
                        }
                    p = s;
                    t = p.length
                } else t =
                    Math.max(4, f) / 4 * Math.max(4, h) / 4 * e, p = new Uint8Array(a, g, t);
                d.mipmaps.push({
                    data: p,
                    width: f,
                    height: h
                });
                g += t;
                f = Math.max(0.5 * f, 1);
                h = Math.max(0.5 * h, 1)
            }
            f = d.width;
            h = d.height
        }
        return d
    },
    getNormalMap: function(a, b) {
        var c = function(a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            return [a[0] / b, a[1] / b, a[2] / b]
        }, b = b | 1,
            d = a.width,
            e = a.height,
            f = document.createElement("canvas");
        f.width = d;
        f.height = e;
        var h = f.getContext("2d");
        h.drawImage(a, 0, 0);
        for (var g = h.getImageData(0, 0, d, e).data, i = h.createImageData(d, e), k = i.data, m = 0; m <
            d; m++)
            for (var l = 0; l < e; l++) {
                var p = 0 > l - 1 ? 0 : l - 1,
                    t = l + 1 > e - 1 ? e - 1 : l + 1,
                    s = 0 > m - 1 ? 0 : m - 1,
                    q = m + 1 > d - 1 ? d - 1 : m + 1,
                    n = [],
                    u = [0, 0, g[4 * (l * d + m)] / 255 * b];
                n.push([-1, 0, g[4 * (l * d + s)] / 255 * b]);
                n.push([-1, -1, g[4 * (p * d + s)] / 255 * b]);
                n.push([0, -1, g[4 * (p * d + m)] / 255 * b]);
                n.push([1, -1, g[4 * (p * d + q)] / 255 * b]);
                n.push([1, 0, g[4 * (l * d + q)] / 255 * b]);
                n.push([1, 1, g[4 * (t * d + q)] / 255 * b]);
                n.push([0, 1, g[4 * (t * d + m)] / 255 * b]);
                n.push([-1, 1, g[4 * (t * d + s)] / 255 * b]);
                p = [];
                s = n.length;
                for (t = 0; t < s; t++) {
                    var q = n[t],
                        r = n[(t + 1) % s],
                        q = [q[0] - u[0], q[1] - u[1], q[2] - u[2]],
                        r = [r[0] - u[0],
                            r[1] - u[1], r[2] - u[2]
                        ];
                    p.push(c([q[1] * r[2] - q[2] * r[1], q[2] * r[0] - q[0] * r[2], q[0] * r[1] - q[1] * r[0]]))
                }
                n = [0, 0, 0];
                for (t = 0; t < p.length; t++) n[0] += p[t][0], n[1] += p[t][1], n[2] += p[t][2];
                n[0] /= p.length;
                n[1] /= p.length;
                n[2] /= p.length;
                u = 4 * (l * d + m);
                k[u] = 255 * ((n[0] + 1) / 2) | 0;
                k[u + 1] = 255 * ((n[1] + 1) / 2) | 0;
                k[u + 2] = 255 * n[2] | 0;
                k[u + 3] = 255
            }
        h.putImageData(i, 0, 0);
        return f
    },
    generateDataTexture: function(a, b, c) {
        for (var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), h = Math.floor(255 * c.g), c = Math.floor(255 * c.b), g = 0; g < d; g++) e[3 * g] = f, e[3 * g +
            1] = h, e[3 * g + 2] = c;
        a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
        a.needsUpdate = !0;
        return a
    }
};
THREE.SceneUtils = {
    createMultiMaterialObject: function(a, b) {
        for (var c = new THREE.Object3D, d = 0, e = b.length; d < e; d++) c.add(new THREE.Mesh(a, b[d]));
        return c
    },
    detach: function(a, b, c) {
        a.applyMatrix(b.matrixWorld);
        b.remove(a);
        c.add(a)
    },
    attach: function(a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a.applyMatrix(d);
        b.remove(a);
        c.add(a)
    }
};
THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function() {
        return this.faces[this.face][this.weight][this.style]
    },
    loadFace: function(a) {
        var b = a.familyName.toLowerCase();
        this.faces[b] = this.faces[b] || {};
        this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
        this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
        return this.faces[b][a.cssFontWeight][a.cssFontStyle] = a
    },
    drawText: function(a) {
        for (var b = this.getFace(), c = this.size / b.resolution, d =
                0, e = String(a).split(""), f = e.length, h = [], a = 0; a < f; a++) {
            var g = new THREE.Path,
                g = this.extractGlyphPoints(e[a], b, c, d, g),
                d = d + g.offset;
            h.push(g.path)
        }
        return {
            paths: h,
            offset: d / 2
        }
    },
    extractGlyphPoints: function(a, b, c, d, e) {
        var f = [],
            h, g, i, k, m, l, p, t, s, q, n, u = b.glyphs[a] || b.glyphs["?"];
        if (u) {
            if (u.o) {
                b = u._cachedOutline || (u._cachedOutline = u.o.split(" "));
                k = b.length;
                for (a = 0; a < k;) switch (i = b[a++], i) {
                    case "m":
                        i = b[a++] * c + d;
                        m = b[a++] * c;
                        e.moveTo(i, m);
                        break;
                    case "l":
                        i = b[a++] * c + d;
                        m = b[a++] * c;
                        e.lineTo(i, m);
                        break;
                    case "q":
                        i = b[a++] *
                            c + d;
                        m = b[a++] * c;
                        t = b[a++] * c + d;
                        s = b[a++] * c;
                        e.quadraticCurveTo(t, s, i, m);
                        if (h = f[f.length - 1]) {
                            l = h.x;
                            p = h.y;
                            h = 1;
                            for (g = this.divisions; h <= g; h++) {
                                var r = h / g;
                                THREE.Shape.Utils.b2(r, l, t, i);
                                THREE.Shape.Utils.b2(r, p, s, m)
                            }
                        }
                        break;
                    case "b":
                        if (i = b[a++] * c + d, m = b[a++] * c, t = b[a++] * c + d, s = b[a++] * -c, q = b[a++] * c + d, n = b[a++] * -c, e.bezierCurveTo(i, m, t, s, q, n), h = f[f.length - 1]) {
                            l = h.x;
                            p = h.y;
                            h = 1;
                            for (g = this.divisions; h <= g; h++) r = h / g, THREE.Shape.Utils.b3(r, l, t, q, i), THREE.Shape.Utils.b3(r, p, s, n, m)
                        }
                }
            }
            return {
                offset: u.ha * c,
                path: e
            }
        }
    }
};
THREE.FontUtils.generateShapes = function(a, b) {
    var b = b || {}, c = void 0 !== b.curveSegments ? b.curveSegments : 4,
        d = void 0 !== b.font ? b.font : "helvetiker",
        e = void 0 !== b.weight ? b.weight : "normal",
        f = void 0 !== b.style ? b.style : "normal";
    THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
    THREE.FontUtils.divisions = c;
    THREE.FontUtils.face = d;
    THREE.FontUtils.weight = e;
    THREE.FontUtils.style = f;
    c = THREE.FontUtils.drawText(a).paths;
    d = [];
    e = 0;
    for (f = c.length; e < f; e++) Array.prototype.push.apply(d, c[e].toShapes());
    return d
};
(function(a) {
    var b = function(a) {
        for (var b = a.length, e = 0, f = b - 1, h = 0; h < b; f = h++) e += a[f].x * a[h].y - a[h].x * a[f].y;
        return 0.5 * e
    };
    a.Triangulate = function(a, d) {
        var e = a.length;
        if (3 > e) return null;
        var f = [],
            h = [],
            g = [],
            i, k, m;
        if (0 < b(a))
            for (k = 0; k < e; k++) h[k] = k;
        else
            for (k = 0; k < e; k++) h[k] = e - 1 - k;
        var l = 2 * e;
        for (k = e - 1; 2 < e;) {
            if (0 >= l--) {
                console.log("Warning, unable to triangulate polygon!");
                break
            }
            i = k;
            e <= i && (i = 0);
            k = i + 1;
            e <= k && (k = 0);
            m = k + 1;
            e <= m && (m = 0);
            var p;
            a: {
                var t = p = void 0,
                    s = void 0,
                    q = void 0,
                    n = void 0,
                    u = void 0,
                    r = void 0,
                    v = void 0,
                    z =
                        void 0,
                    t = a[h[i]].x,
                    s = a[h[i]].y,
                    q = a[h[k]].x,
                    n = a[h[k]].y,
                    u = a[h[m]].x,
                    r = a[h[m]].y;
                if (1E-10 > (q - t) * (r - s) - (n - s) * (u - t)) p = !1;
                else {
                    var G = void 0,
                        w = void 0,
                        y = void 0,
                        E = void 0,
                        A = void 0,
                        K = void 0,
                        D = void 0,
                        F = void 0,
                        O = void 0,
                        x = void 0,
                        O = F = D = z = v = void 0,
                        G = u - q,
                        w = r - n,
                        y = t - u,
                        E = s - r,
                        A = q - t,
                        K = n - s;
                    for (p = 0; p < e; p++)
                        if (!(p === i || p === k || p === m))
                            if (v = a[h[p]].x, z = a[h[p]].y, D = v - t, F = z - s, O = v - q, x = z - n, v -= u, z -= r, O = G * x - w * O, D = A * F - K * D, F = y * z - E * v, -1E-10 <= O && -1E-10 <= F && -1E-10 <= D) {
                                p = !1;
                                break a
                            }
                    p = !0
                }
            }
            if (p) {
                f.push([a[h[i]], a[h[k]], a[h[m]]]);
                g.push([h[i],
                    h[k], h[m]
                ]);
                i = k;
                for (m = k + 1; m < e; i++, m++) h[i] = h[m];
                e--;
                l = 2 * e
            }
        }
        return d ? g : f
    };
    a.Triangulate.area = b;
    return a
})(THREE.FontUtils);
self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
};
THREE.typeface_js = self._typeface_js;
THREE.Curve = function() {};
THREE.Curve.prototype.getPoint = function() {
    console.log("Warning, getPoint() not implemented!");
    return null
};
THREE.Curve.prototype.getPointAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++) c.push(this.getPoint(b / a));
    return c
};
THREE.Curve.prototype.getSpacedPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++) c.push(this.getPointAt(b / a));
    return c
};
THREE.Curve.prototype.getLength = function() {
    var a = this.getLengths();
    return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function(a) {
    a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    var b = [],
        c, d = this.getPoint(0),
        e, f = 0;
    b.push(0);
    for (e = 1; e <= a; e++) c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
    return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function() {
    this.needsUpdate = !0;
    this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function(a, b) {
    var c = this.getLengths(),
        d = 0,
        e = c.length,
        f;
    f = b ? b : a * c[e - 1];
    for (var h = 0, g = e - 1, i; h <= g;)
        if (d = Math.floor(h + (g - h) / 2), i = c[d] - f, 0 > i) h = d + 1;
        else if (0 < i) g = d - 1;
    else {
        g = d;
        break
    }
    d = g;
    if (c[d] == f) return d / (e - 1);
    h = c[d];
    return c = (d + (f - h) / (c[d + 1] - h)) / (e - 1)
};
THREE.Curve.prototype.getTangent = function(a) {
    var b = a - 1E-4,
        a = a + 1E-4;
    0 > b && (b = 0);
    1 < a && (a = 1);
    b = this.getPoint(b);
    return this.getPoint(a).clone().sub(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getTangent(a)
};
THREE.Curve.Utils = {
    tangentQuadraticBezier: function(a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    },
    tangentCubicBezier: function(a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    },
    tangentSpline: function(a) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },
    interpolate: function(a, b, c, d, e) {
        var a = 0.5 * (c - a),
            d = 0.5 * (d - b),
            f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }
};
THREE.Curve.create = function(a, b) {
    a.prototype = Object.create(THREE.Curve.prototype);
    a.prototype.getPoint = b;
    return a
};
THREE.CurvePath = function() {
    this.curves = [];
    this.bends = [];
    this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function(a) {
    this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function() {};
THREE.CurvePath.prototype.closePath = function() {
    var a = this.curves[0].getPoint(0),
        b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function(a) {
    for (var b = a * this.getLength(), c = this.getCurveLengths(), a = 0; a < c.length;) {
        if (c[a] >= b) return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
        a++
    }
    return null
};
THREE.CurvePath.prototype.getLength = function() {
    var a = this.getCurveLengths();
    return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
    var a = [],
        b = 0,
        c, d = this.curves.length;
    for (c = 0; c < d; c++) b += this.curves[c].getLength(), a.push(b);
    return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function() {
    var a = this.getPoints(),
        b, c, d, e, f, h;
    b = c = Number.NEGATIVE_INFINITY;
    e = f = Number.POSITIVE_INFINITY;
    var g, i, k, m, l = a[0] instanceof THREE.Vector3;
    m = l ? new THREE.Vector3 : new THREE.Vector2;
    i = 0;
    for (k = a.length; i < k; i++) g = a[i], g.x > b ? b = g.x : g.x < e && (e = g.x), g.y > c ? c = g.y : g.y < f && (f = g.y), l && (g.z > d ? d = g.z : g.z < h && (h = g.z)), m.add(g);
    a = {
        minX: e,
        minY: f,
        maxX: b,
        maxY: c,
        centroid: m.divideScalar(k)
    };
    l && (a.maxZ = d, a.minZ = h);
    return a
};
THREE.CurvePath.prototype.createPointsGeometry = function(a) {
    a = this.getPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a) {
    a = this.getSpacedPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function(a) {
    for (var b = new THREE.Geometry, c = 0; c < a.length; c++) b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
    return b
};
THREE.CurvePath.prototype.addWrapPath = function(a) {
    this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function(a, b) {
    var c = this.getPoints(a),
        d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function(a, b) {
    var c = this.getSpacedPoints(a),
        d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getWrapPoints = function(a, b) {
    var c = this.getBoundingBox(),
        d, e, f, h, g, i;
    d = 0;
    for (e = a.length; d < e; d++) f = a[d], h = f.x, g = f.y, i = h / c.maxX, i = b.getUtoTmapping(i, h), h = b.getPoint(i), g = b.getNormalVector(i).multiplyScalar(g), f.x = h.x + g.x, f.y = h.y + g.y;
    return a
};
THREE.Gyroscope = function() {
    THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function(a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a) this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.quaternionWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.quaternionObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.quaternionObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix),
    this.matrixWorldNeedsUpdate = !1, a = !0;
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.quaternionWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.quaternionObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function(a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse"
};
THREE.Path.prototype.fromPoints = function(a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments);
    this.actions.push({
        action: THREE.PathActions.MOVE_TO,
        args: c
    })
};
THREE.Path.prototype.lineTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments),
        d = this.actions[this.actions.length - 1].args,
        d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
    this.curves.push(d);
    this.actions.push({
        action: THREE.PathActions.LINE_TO,
        args: c
    })
};
THREE.Path.prototype.quadraticCurveTo = function(a, b, c, d) {
    var e = Array.prototype.slice.call(arguments),
        f = this.actions[this.actions.length - 1].args,
        f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
    this.curves.push(f);
    this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: e
    })
};
THREE.Path.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    var h = Array.prototype.slice.call(arguments),
        g = this.actions[this.actions.length - 1].args,
        g = new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length - 2], g[g.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
    this.curves.push(g);
    this.actions.push({
        action: THREE.PathActions.BEZIER_CURVE_TO,
        args: h
    })
};
THREE.Path.prototype.splineThru = function(a) {
    var b = Array.prototype.slice.call(arguments),
        c = this.actions[this.actions.length - 1].args,
        c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
    Array.prototype.push.apply(c, a);
    c = new THREE.SplineCurve(c);
    this.curves.push(c);
    this.actions.push({
        action: THREE.PathActions.CSPLINE_THRU,
        args: b
    })
};
THREE.Path.prototype.arc = function(a, b, c, d, e, f) {
    var h = this.actions[this.actions.length - 1].args;
    this.absarc(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function(a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function(a, b, c, d, e, f, h) {
    var g = this.actions[this.actions.length - 1].args;
    this.absellipse(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f, h)
};
THREE.Path.prototype.absellipse = function(a, b, c, d, e, f, h) {
    var g = Array.prototype.slice.call(arguments),
        i = new THREE.EllipseCurve(a, b, c, d, e, f, h);
    this.curves.push(i);
    i = i.getPoint(1);
    g.push(i.x);
    g.push(i.y);
    this.actions.push({
        action: THREE.PathActions.ELLIPSE,
        args: g
    })
};
THREE.Path.prototype.getSpacedPoints = function(a) {
    a || (a = 40);
    for (var b = [], c = 0; c < a; c++) b.push(this.getPoint(c / a));
    return b
};
THREE.Path.prototype.getPoints = function(a, b) {
    if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(a, b);
    var a = a || 12,
        c = [],
        d, e, f, h, g, i, k, m, l, p, t, s, q;
    d = 0;
    for (e = this.actions.length; d < e; d++) switch (f = this.actions[d], h = f.action, f = f.args, h) {
        case THREE.PathActions.MOVE_TO:
            c.push(new THREE.Vector2(f[0], f[1]));
            break;
        case THREE.PathActions.LINE_TO:
            c.push(new THREE.Vector2(f[0], f[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            g = f[2];
            i = f[3];
            l = f[0];
            p = f[1];
            0 < c.length ? (h = c[c.length - 1], t = h.x,
                s = h.y) : (h = this.actions[d - 1].args, t = h[h.length - 2], s = h[h.length - 1]);
            for (f = 1; f <= a; f++) q = f / a, h = THREE.Shape.Utils.b2(q, t, l, g), q = THREE.Shape.Utils.b2(q, s, p, i), c.push(new THREE.Vector2(h, q));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            g = f[4];
            i = f[5];
            l = f[0];
            p = f[1];
            k = f[2];
            m = f[3];
            0 < c.length ? (h = c[c.length - 1], t = h.x, s = h.y) : (h = this.actions[d - 1].args, t = h[h.length - 2], s = h[h.length - 1]);
            for (f = 1; f <= a; f++) q = f / a, h = THREE.Shape.Utils.b3(q, t, l, k, g), q = THREE.Shape.Utils.b3(q, s, p, m, i), c.push(new THREE.Vector2(h, q));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            h =
                this.actions[d - 1].args;
            q = [new THREE.Vector2(h[h.length - 2], h[h.length - 1])];
            h = a * f[0].length;
            q = q.concat(f[0]);
            q = new THREE.SplineCurve(q);
            for (f = 1; f <= h; f++) c.push(q.getPointAt(f / h));
            break;
        case THREE.PathActions.ARC:
            g = f[0];
            i = f[1];
            p = f[2];
            k = f[3];
            h = f[4];
            l = !! f[5];
            t = h - k;
            s = 2 * a;
            for (f = 1; f <= s; f++) q = f / s, l || (q = 1 - q), q = k + q * t, h = g + p * Math.cos(q), q = i + p * Math.sin(q), c.push(new THREE.Vector2(h, q));
            break;
        case THREE.PathActions.ELLIPSE:
            g = f[0];
            i = f[1];
            p = f[2];
            m = f[3];
            k = f[4];
            h = f[5];
            l = !! f[6];
            t = h - k;
            s = 2 * a;
            for (f = 1; f <= s; f++) q = f / s, l ||
                (q = 1 - q), q = k + q * t, h = g + p * Math.cos(q), q = i + m * Math.sin(q), c.push(new THREE.Vector2(h, q))
    }
    d = c[c.length - 1];
    1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
    b && c.push(c[0]);
    return c
};
THREE.Path.prototype.toShapes = function(a) {
    var b, c, d, e, f = [],
        h = new THREE.Path;
    b = 0;
    for (c = this.actions.length; b < c; b++) d = this.actions[b], e = d.args, d = d.action, d == THREE.PathActions.MOVE_TO && 0 != h.actions.length && (f.push(h), h = new THREE.Path), h[d].apply(h, e);
    0 != h.actions.length && f.push(h);
    if (0 == f.length) return [];
    var g;
    e = [];
    if (1 == f.length) return d = f[0], g = new THREE.Shape, g.actions = d.actions, g.curves = d.curves, e.push(g), e;
    b = !THREE.Shape.Utils.isClockWise(f[0].getPoints());
    if (a ? !b : b) {
        g = new THREE.Shape;
        b = 0;
        for (c =
            f.length; b < c; b++) d = f[b], h = THREE.Shape.Utils.isClockWise(d.getPoints()), (h = a ? !h : h) ? (g.actions = d.actions, g.curves = d.curves, e.push(g), g = new THREE.Shape) : g.holes.push(d)
    } else {
        g = void 0;
        b = 0;
        for (c = f.length; b < c; b++) d = f[b], h = THREE.Shape.Utils.isClockWise(d.getPoints()), (h = a ? !h : h) ? (g && e.push(g), g = new THREE.Shape, g.actions = d.actions, g.curves = d.curves) : g.holes.push(d);
        e.push(g)
    }
    return e
};
THREE.Shape = function() {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function(a) {
    return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function(a) {
    return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function(a) {
    var b, c = this.holes.length,
        d = [];
    for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function(a) {
    var b, c = this.holes.length,
        d = [];
    for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.extractAllPoints = function(a) {
    return {
        shape: this.getTransformedPoints(a),
        holes: this.getPointsHoles(a)
    }
};
THREE.Shape.prototype.extractPoints = function(a) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function(a) {
    return {
        shape: this.getTransformedSpacedPoints(a),
        holes: this.getSpacedPointsHoles(a)
    }
};
THREE.Shape.Utils = {
    removeHoles: function(a, b) {
        var c = a.concat(),
            d = c.concat(),
            e, f, h, g, i, k, m, l, p, t, s = [];
        for (i = 0; i < b.length; i++) {
            k = b[i];
            Array.prototype.push.apply(d, k);
            f = Number.POSITIVE_INFINITY;
            for (e = 0; e < k.length; e++) {
                p = k[e];
                t = [];
                for (l = 0; l < c.length; l++) m = c[l], m = p.distanceToSquared(m), t.push(m), m < f && (f = m, h = e, g = l)
            }
            e = 0 <= g - 1 ? g - 1 : c.length - 1;
            f = 0 <= h - 1 ? h - 1 : k.length - 1;
            var q = [k[h], c[g], c[e]];
            l = THREE.FontUtils.Triangulate.area(q);
            var n = [k[h], k[f], c[g]];
            p = THREE.FontUtils.Triangulate.area(n);
            t = g;
            m = h;
            g += 1;
            h += -1;
            0 >
                g && (g += c.length);
            g %= c.length;
            0 > h && (h += k.length);
            h %= k.length;
            e = 0 <= g - 1 ? g - 1 : c.length - 1;
            f = 0 <= h - 1 ? h - 1 : k.length - 1;
            q = [k[h], c[g], c[e]];
            q = THREE.FontUtils.Triangulate.area(q);
            n = [k[h], k[f], c[g]];
            n = THREE.FontUtils.Triangulate.area(n);
            l + p > q + n && (g = t, h = m, 0 > g && (g += c.length), g %= c.length, 0 > h && (h += k.length), h %= k.length, e = 0 <= g - 1 ? g - 1 : c.length - 1, f = 0 <= h - 1 ? h - 1 : k.length - 1);
            l = c.slice(0, g);
            p = c.slice(g);
            t = k.slice(h);
            m = k.slice(0, h);
            f = [k[h], k[f], c[g]];
            s.push([k[h], c[g], c[e]]);
            s.push(f);
            c = l.concat(t).concat(m).concat(p)
        }
        return {
            shape: c,
            isolatedPts: s,
            allpoints: d
        }
    },
    triangulateShape: function(a, b) {
        var c = THREE.Shape.Utils.removeHoles(a, b),
            d = c.allpoints,
            e = c.isolatedPts,
            c = THREE.FontUtils.Triangulate(c.shape, !1),
            f, h, g, i, k = {};
        f = 0;
        for (h = d.length; f < h; f++) i = d[f].x + ":" + d[f].y, void 0 !== k[i] && console.log("Duplicate point", i), k[i] = f;
        f = 0;
        for (h = c.length; f < h; f++) {
            g = c[f];
            for (d = 0; 3 > d; d++) i = g[d].x + ":" + g[d].y, i = k[i], void 0 !== i && (g[d] = i)
        }
        f = 0;
        for (h = e.length; f < h; f++) {
            g = e[f];
            for (d = 0; 3 > d; d++) i = g[d].x + ":" + g[d].y, i = k[i], void 0 !== i && (g[d] = i)
        }
        return c.concat(e)
    },
    isClockWise: function(a) {
        return 0 > THREE.FontUtils.Triangulate.area(a)
    },
    b2p0: function(a, b) {
        var c = 1 - a;
        return c * c * b
    },
    b2p1: function(a, b) {
        return 2 * (1 - a) * a * b
    },
    b2p2: function(a, b) {
        return a * a * b
    },
    b2: function(a, b, c, d) {
        return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
    },
    b3p0: function(a, b) {
        var c = 1 - a;
        return c * c * c * b
    },
    b3p1: function(a, b) {
        var c = 1 - a;
        return 3 * c * c * a * b
    },
    b3p2: function(a, b) {
        return 3 * (1 - a) * a * a * b
    },
    b3p3: function(a, b) {
        return a * a * a * b
    },
    b3: function(a, b, c, d, e) {
        return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) +
            this.b3p3(a, e)
    }
};
THREE.LineCurve = function(a, b) {
    this.v1 = a;
    this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function(a) {
    var b = this.v2.clone().sub(this.v1);
    b.multiplyScalar(a).add(this.v1);
    return b
};
THREE.LineCurve.prototype.getPointAt = function(a) {
    return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    return new THREE.Vector2(b, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.CubicBezierCurve = function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.SplineCurve = function(a) {
    this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function(a) {
    var b = new THREE.Vector2,
        c = [],
        d = this.points,
        e;
    e = (d.length - 1) * a;
    a = Math.floor(e);
    e -= a;
    c[0] = 0 == a ? a : a - 1;
    c[1] = a;
    c[2] = a > d.length - 2 ? d.length - 1 : a + 1;
    c[3] = a > d.length - 3 ? d.length - 1 : a + 2;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    return b
};
THREE.EllipseCurve = function(a, b, c, d, e, f, h) {
    this.aX = a;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = f;
    this.aClockwise = h
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function(a) {
    var b;
    b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI);
    b > 2 * Math.PI && (b -= 2 * Math.PI);
    b = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
    a = this.aX + this.xRadius * Math.cos(b);
    b = this.aY + this.yRadius * Math.sin(b);
    return new THREE.Vector2(a, b)
};
THREE.ArcCurve = function(a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3 = THREE.Curve.create(function(a, b) {
    this.v1 = a;
    this.v2 = b
}, function(a) {
    var b = new THREE.Vector3;
    b.subVectors(this.v2, this.v1);
    b.multiplyScalar(a);
    b.add(this.v1);
    return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    c = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
    return new THREE.Vector3(b, c, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
    return new THREE.Vector3(b, c, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3,
        c = [],
        d = this.points,
        e, a = (d.length - 1) * a;
    e = Math.floor(a);
    a -= e;
    c[0] = 0 == e ? e : e - 1;
    c[1] = e;
    c[2] = e > d.length - 2 ? d.length - 1 : e + 1;
    c[3] = e > d.length - 3 ? d.length - 1 : e + 2;
    e = d[c[0]];
    var f = d[c[1]],
        h = d[c[2]],
        c = d[c[3]];
    b.x = THREE.Curve.Utils.interpolate(e.x, f.x, h.x, c.x, a);
    b.y = THREE.Curve.Utils.interpolate(e.y, f.y, h.y, c.y, a);
    b.z = THREE.Curve.Utils.interpolate(e.z, f.z, h.z, c.z, a);
    return b
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3,
        c = [],
        d = this.points,
        e;
    e = (d.length - 0) * a;
    a = Math.floor(e);
    e -= a;
    a += 0 < a ? 0 : (Math.floor(Math.abs(a) / d.length) + 1) * d.length;
    c[0] = (a - 1) % d.length;
    c[1] = a % d.length;
    c[2] = (a + 1) % d.length;
    c[3] = (a + 2) % d.length;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    b.z = THREE.Curve.Utils.interpolate(d[c[0]].z,
        d[c[1]].z, d[c[2]].z, d[c[3]].z, e);
    return b
});
THREE.AnimationHandler = function() {
    var a = [],
        b = {}, c = {
            update: function(b) {
                for (var c = 0; c < a.length; c++) a[c].update(b)
            },
            addToUpdate: function(b) {
                -1 === a.indexOf(b) && a.push(b)
            },
            removeFromUpdate: function(b) {
                b = a.indexOf(b); - 1 !== b && a.splice(b, 1)
            },
            add: function(a) {
                void 0 !== b[a.name] && console.log("THREE.AnimationHandler.add: Warning! " + a.name + " already exists in library. Overwriting.");
                b[a.name] = a;
                if (!0 !== a.initialized) {
                    for (var c = 0; c < a.hierarchy.length; c++) {
                        for (var d = 0; d < a.hierarchy[c].keys.length; d++)
                            if (0 > a.hierarchy[c].keys[d].time &&
                                (a.hierarchy[c].keys[d].time = 0), void 0 !== a.hierarchy[c].keys[d].rot && !(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)) {
                                var g = a.hierarchy[c].keys[d].rot;
                                a.hierarchy[c].keys[d].rot = new THREE.Quaternion(g[0], g[1], g[2], g[3])
                            }
                        if (a.hierarchy[c].keys.length && void 0 !== a.hierarchy[c].keys[0].morphTargets) {
                            g = {};
                            for (d = 0; d < a.hierarchy[c].keys.length; d++)
                                for (var i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++) {
                                    var k = a.hierarchy[c].keys[d].morphTargets[i];
                                    g[k] = -1
                                }
                            a.hierarchy[c].usedMorphTargets = g;
                            for (d = 0; d < a.hierarchy[c].keys.length; d++) {
                                var m = {};
                                for (k in g) {
                                    for (i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++)
                                        if (a.hierarchy[c].keys[d].morphTargets[i] === k) {
                                            m[k] = a.hierarchy[c].keys[d].morphTargetsInfluences[i];
                                            break
                                        }
                                    i === a.hierarchy[c].keys[d].morphTargets.length && (m[k] = 0)
                                }
                                a.hierarchy[c].keys[d].morphTargetsInfluences = m
                            }
                        }
                        for (d = 1; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].time === a.hierarchy[c].keys[d - 1].time && (a.hierarchy[c].keys.splice(d, 1), d--);
                        for (d = 0; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].index =
                            d
                    }
                    d = parseInt(a.length * a.fps, 10);
                    a.JIT = {};
                    a.JIT.hierarchy = [];
                    for (c = 0; c < a.hierarchy.length; c++) a.JIT.hierarchy.push(Array(d));
                    a.initialized = !0
                }
            },
            get: function(a) {
                if ("string" === typeof a) {
                    if (b[a]) return b[a];
                    console.log("THREE.AnimationHandler.get: Couldn't find animation " + a);
                    return null
                }
            },
            parse: function(a) {
                var b = [];
                if (a instanceof THREE.SkinnedMesh)
                    for (var c = 0; c < a.bones.length; c++) b.push(a.bones[c]);
                else d(a, b);
                return b
            }
        }, d = function(a, b) {
            b.push(a);
            for (var c = 0; c < a.children.length; c++) d(a.children[c],
                b)
        };
    c.LINEAR = 0;
    c.CATMULLROM = 1;
    c.CATMULLROM_FORWARD = 2;
    return c
}();
THREE.Animation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = void 0 !== c ? c : THREE.AnimationHandler.LINEAR;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(a, b) {
    if (!1 === this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        var c, d = this.hierarchy.length,
            e;
        for (c = 0; c < d; c++) {
            e = this.hierarchy[c];
            e.matrixAutoUpdate = !0;
            void 0 === e.animationCache && (e.animationCache = {}, e.animationCache.prevKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, e.animationCache.nextKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, e.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix : e.matrix);
            var f = e.animationCache.prevKey;
            e = e.animationCache.nextKey;
            f.pos = this.data.hierarchy[c].keys[0];
            f.rot = this.data.hierarchy[c].keys[0];
            f.scl = this.data.hierarchy[c].keys[0];
            e.pos = this.getNextKeyWith("pos", c, 1);
            e.rot = this.getNextKeyWith("rot", c, 1);
            e.scl = this.getNextKeyWith("scl", c, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
    !0 === this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this)
};
THREE.Animation.prototype.update = function(a) {
    if (!1 !== this.isPlaying) {
        var b = ["pos", "rot", "scl"],
            c, d, e, f, h, g, i, k, m;
        m = this.currentTime += a * this.timeScale;
        k = this.currentTime %= this.data.length;
        parseInt(Math.min(k * this.data.fps, this.data.length * this.data.fps), 10);
        for (var l = 0, p = this.hierarchy.length; l < p; l++) {
            a = this.hierarchy[l];
            i = a.animationCache;
            for (var t = 0; 3 > t; t++) {
                c = b[t];
                h = i.prevKey[c];
                g = i.nextKey[c];
                if (g.time <= m) {
                    if (k < m)
                        if (this.loop) {
                            h = this.data.hierarchy[l].keys[0];
                            for (g = this.getNextKeyWith(c, l, 1); g.time <
                                k;) h = g, g = this.getNextKeyWith(c, l, g.index + 1)
                        } else {
                            this.stop();
                            return
                        } else {
                            do h = g, g = this.getNextKeyWith(c, l, g.index + 1); while (g.time < k)
                        }
                    i.prevKey[c] = h;
                    i.nextKey[c] = g
                }
                a.matrixAutoUpdate = !0;
                a.matrixWorldNeedsUpdate = !0;
                d = (k - h.time) / (g.time - h.time);
                e = h[c];
                f = g[c];
                if (0 > d || 1 < d) console.log("THREE.Animation.update: Warning! Scale out of bounds:" + d + " on bone " + l), d = 0 > d ? 0 : 1;
                if ("pos" === c)
                    if (c = a.position, this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] +
                        (f[2] - e[2]) * d;
                    else {
                        if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) this.points[0] = this.getPrevKeyWith("pos", l, h.index - 1).pos, this.points[1] = e, this.points[2] = f, this.points[3] = this.getNextKeyWith("pos", l, g.index + 1).pos, d = 0.33 * d + 0.33, e = this.interpolateCatmullRom(this.points, d), c.x = e[0], c.y = e[1], c.z = e[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (d = this.interpolateCatmullRom(this.points, 1.01 * d),
                            this.target.set(d[0], d[1], d[2]), this.target.sub(c), this.target.y = 0, this.target.normalize(), d = Math.atan2(this.target.x, this.target.z), a.rotation.set(0, d, 0))
                    } else "rot" === c ? THREE.Quaternion.slerp(e, f, a.quaternion, d) : "scl" === c && (c = a.scale, c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] + (f[2] - e[2]) * d)
            }
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function(a, b) {
    var c = [],
        d = [],
        e, f, h, g, i, k;
    e = (a.length - 1) * b;
    f = Math.floor(e);
    e -= f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > a.length - 2 ? f : f + 1;
    c[3] = f > a.length - 3 ? f : f + 2;
    f = a[c[0]];
    g = a[c[1]];
    i = a[c[2]];
    k = a[c[3]];
    c = e * e;
    h = e * c;
    d[0] = this.interpolate(f[0], g[0], i[0], k[0], e, c, h);
    d[1] = this.interpolate(f[1], g[1], i[1], k[1], e, c, h);
    d[2] = this.interpolate(f[2], g[2], i[2], k[2], e, c, h);
    return d
};
THREE.Animation.prototype.interpolate = function(a, b, c, d, e, f, h) {
    a = 0.5 * (c - a);
    d = 0.5 * (d - b);
    return (2 * (b - c) + a + d) * h + (-3 * (b - c) - 2 * a - d) * f + a * e + b
};
THREE.Animation.prototype.getNextKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)
        if (void 0 !== d[c][a]) return d[c];
    return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)
        if (void 0 !== d[c][a]) return d[c];
    return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 0.0010;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.JITCompile = void 0 !== c ? c : !0;
    a = 0;
    for (b = this.hierarchy.length; a < b; a++) {
        var c = this.data.hierarchy[a].sids,
            d = this.hierarchy[a];
        if (this.data.hierarchy[a].keys.length && c) {
            for (var e = 0; e < c.length; e++) {
                var f = c[e],
                    h = this.getNextKeyWith(f, a, 0);
                h && h.apply(f)
            }
            d.matrixAutoUpdate = !1;
            this.data.hierarchy[a].node.updateMatrix();
            d.matrixWorldNeedsUpdate = !0
        }
    }
};
THREE.KeyFrameAnimation.prototype.play = function(a, b) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        this.startTimeMs = b;
        this.startTime = 1E7;
        this.endTime = -this.startTime;
        var c, d = this.hierarchy.length,
            e, f;
        for (c = 0; c < d; c++) e = this.hierarchy[c], f = this.data.hierarchy[c], void 0 === f.animationCache && (f.animationCache = {}, f.animationCache.prevKey = null, f.animationCache.nextKey = null, f.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix : e.matrix), e = this.data.hierarchy[c].keys,
        e.length && (f.animationCache.prevKey = e[0], f.animationCache.nextKey = e[1], this.startTime = Math.min(e[0].time, this.startTime), this.endTime = Math.max(e[e.length - 1].time, this.endTime));
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.KeyFrameAnimation.prototype.pause = function() {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.KeyFrameAnimation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var a = 0; a < this.data.hierarchy.length; a++) {
        var b = this.hierarchy[a],
            c = this.data.hierarchy[a];
        if (void 0 !== c.animationCache) {
            var d = c.animationCache.originalMatrix;
            b instanceof THREE.Bone ? (d.copy(b.skinMatrix), b.skinMatrix = d) : (d.copy(b.matrix), b.matrix = d);
            delete c.animationCache
        }
    }
};
THREE.KeyFrameAnimation.prototype.update = function(a) {
    if (this.isPlaying) {
        var b, c, d, e, f = this.data.JIT.hierarchy,
            h, g, i;
        g = this.currentTime += a * this.timeScale;
        h = this.currentTime %= this.data.length;
        h < this.startTimeMs && (h = this.currentTime = this.startTimeMs + h);
        e = parseInt(Math.min(h * this.data.fps, this.data.length * this.data.fps), 10);
        if ((i = h < g) && !this.loop) {
            for (var a = 0, k = this.hierarchy.length; a < k; a++) {
                var m = this.data.hierarchy[a].keys,
                    f = this.data.hierarchy[a].sids;
                d = m.length - 1;
                e = this.hierarchy[a];
                if (m.length) {
                    for (m =
                        0; m < f.length; m++) h = f[m], (g = this.getPrevKeyWith(h, a, d)) && g.apply(h);
                    this.data.hierarchy[a].node.updateMatrix();
                    e.matrixWorldNeedsUpdate = !0
                }
            }
            this.stop()
        } else if (!(h < this.startTime)) {
            a = 0;
            for (k = this.hierarchy.length; a < k; a++) {
                d = this.hierarchy[a];
                b = this.data.hierarchy[a];
                var m = b.keys,
                    l = b.animationCache;
                if (this.JITCompile && void 0 !== f[a][e]) d instanceof THREE.Bone ? (d.skinMatrix = f[a][e], d.matrixWorldNeedsUpdate = !1) : (d.matrix = f[a][e], d.matrixWorldNeedsUpdate = !0);
                else if (m.length) {
                    this.JITCompile && l && (d instanceof THREE.Bone ? d.skinMatrix = l.originalMatrix : d.matrix = l.originalMatrix);
                    b = l.prevKey;
                    c = l.nextKey;
                    if (b && c) {
                        if (c.time <= g) {
                            if (i && this.loop) {
                                b = m[0];
                                for (c = m[1]; c.time < h;) b = c, c = m[b.index + 1]
                            } else if (!i)
                                for (var p = m.length - 1; c.time < h && c.index !== p;) b = c, c = m[b.index + 1];
                            l.prevKey = b;
                            l.nextKey = c
                        }
                        c.time >= h ? b.interpolate(c, h) : b.interpolate(c, c.time)
                    }
                    this.data.hierarchy[a].node.updateMatrix();
                    d.matrixWorldNeedsUpdate = !0
                }
            }
            if (this.JITCompile && void 0 === f[0][e]) {
                this.hierarchy[0].updateMatrixWorld(!0);
                for (a = 0; a < this.hierarchy.length; a++) f[a][e] =
                    this.hierarchy[a] instanceof THREE.Bone ? this.hierarchy[a].skinMatrix.clone() : this.hierarchy[a].matrix.clone()
            }
        }
    }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c %= b.length; c < b.length; c++)
        if (b[c].hasTarget(a)) return b[c];
    return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c = 0 <= c ? c : c + b.length; 0 <= c; c--)
        if (b[c].hasTarget(a)) return b[c];
    return b[b.length - 1]
};
THREE.CubeCamera = function(a, b, c) {
    THREE.Object3D.call(this);
    var d = new THREE.PerspectiveCamera(90, 1, a, b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1, 0, 0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1, 0, 0));
    this.add(e);
    var f = new THREE.PerspectiveCamera(90, 1, a, b);
    f.up.set(0, 0, 1);
    f.lookAt(new THREE.Vector3(0, 1, 0));
    this.add(f);
    var h = new THREE.PerspectiveCamera(90, 1, a, b);
    h.up.set(0, 0, -1);
    h.lookAt(new THREE.Vector3(0, -1, 0));
    this.add(h);
    var g = new THREE.PerspectiveCamera(90,
        1, a, b);
    g.up.set(0, -1, 0);
    g.lookAt(new THREE.Vector3(0, 0, 1));
    this.add(g);
    var i = new THREE.PerspectiveCamera(90, 1, a, b);
    i.up.set(0, -1, 0);
    i.lookAt(new THREE.Vector3(0, 0, -1));
    this.add(i);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updateCubeMap = function(a, b) {
        var c = this.renderTarget,
            p = c.generateMipmaps;
        c.generateMipmaps = !1;
        c.activeCubeFace = 0;
        a.render(b, d, c);
        c.activeCubeFace = 1;
        a.render(b, e, c);
        c.activeCubeFace =
            2;
        a.render(b, f, c);
        c.activeCubeFace = 3;
        a.render(b, h, c);
        c.activeCubeFace = 4;
        a.render(b, g, c);
        c.generateMipmaps = p;
        c.activeCubeFace = 5;
        a.render(b, i, c)
    }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CombinedCamera = function(a, b, c, d, e, f, h) {
    THREE.Camera.call(this);
    this.fov = c;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2;
    this.cameraO = new THREE.OrthographicCamera(a / -2, a / 2, b / 2, b / -2, f, h);
    this.cameraP = new THREE.PerspectiveCamera(c, a / b, d, e);
    this.zoom = 1;
    this.toPerspective()
};
THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective = function() {
    this.near = this.cameraP.near;
    this.far = this.cameraP.far;
    this.cameraP.fov = this.fov / this.zoom;
    this.cameraP.updateProjectionMatrix();
    this.projectionMatrix = this.cameraP.projectionMatrix;
    this.inPerspectiveMode = !0;
    this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function() {
    var a = this.cameraP.aspect,
        b = (this.cameraP.near + this.cameraP.far) / 2,
        b = Math.tan(this.fov / 2) * b,
        a = 2 * b * a / 2,
        b = b / this.zoom,
        a = a / this.zoom;
    this.cameraO.left = -a;
    this.cameraO.right = a;
    this.cameraO.top = b;
    this.cameraO.bottom = -b;
    this.cameraO.updateProjectionMatrix();
    this.near = this.cameraO.near;
    this.far = this.cameraO.far;
    this.projectionMatrix = this.cameraO.projectionMatrix;
    this.inPerspectiveMode = !1;
    this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setSize = function(a, b) {
    this.cameraP.aspect = a / b;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2
};
THREE.CombinedCamera.prototype.setFov = function(a) {
    this.fov = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.updateProjectionMatrix = function() {
    this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
};
THREE.CombinedCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    var c = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
    this.setFov(c);
    return c
};
THREE.CombinedCamera.prototype.setZoom = function(a) {
    this.zoom = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function() {
    this.rotation.x = 0;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function() {
    this.rotation.x = 0;
    this.rotation.y = -Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function() {
    this.rotation.x = -Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function() {
    this.rotation.x = Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CircleGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.radius = a = a || 50;
    this.segments = b = void 0 !== b ? Math.max(3, b) : 8;
    this.thetaStart = c = void 0 !== c ? c : 0;
    this.thetaLength = d = void 0 !== d ? d : 2 * Math.PI;
    var e, f = [];
    e = new THREE.Vector3;
    var h = new THREE.Vector2(0.5, 0.5);
    this.vertices.push(e);
    f.push(h);
    for (e = 0; e <= b; e++) {
        var g = new THREE.Vector3,
            i = c + e / b * d;
        g.x = a * Math.cos(i);
        g.y = a * Math.sin(i);
        this.vertices.push(g);
        f.push(new THREE.Vector2((g.x / a + 1) / 2, (g.y / a + 1) / 2))
    }
    c = new THREE.Vector3(0, 0, 1);
    for (e = 1; e <= b; e++) this.faces.push(new THREE.Face3(e,
        e + 1, 0, [c.clone(), c.clone(), c.clone()])), this.faceVertexUvs[0].push([f[e].clone(), f[e + 1].clone(), h.clone()]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function(a, b, c, d, e, f) {
    function h(a, b, c, d, e, f, h, q) {
        var n, u = g.widthSegments,
            r = g.heightSegments,
            v = e / 2,
            z = f / 2,
            G = g.vertices.length;
        if ("x" === a && "y" === b || "y" === a && "x" === b) n = "z";
        else if ("x" === a && "z" === b || "z" === a && "x" === b) n = "y", r = g.depthSegments;
        else if ("z" === a && "y" === b || "y" === a && "z" === b) n = "x", u = g.depthSegments;
        var w = u + 1,
            y = r + 1,
            E = e / u,
            A = f / r,
            K = new THREE.Vector3;
        K[n] = 0 < h ? 1 : -1;
        for (e = 0; e < y; e++)
            for (f = 0; f < w; f++) {
                var D = new THREE.Vector3;
                D[a] = (f * E - v) * c;
                D[b] = (e * A - z) * d;
                D[n] = h;
                g.vertices.push(D)
            }
        for (e =
            0; e < r; e++)
            for (f = 0; f < u; f++) z = f + w * e, a = f + w * (e + 1), b = f + 1 + w * (e + 1), c = f + 1 + w * e, d = new THREE.Vector2(f / u, 1 - e / r), h = new THREE.Vector2(f / u, 1 - (e + 1) / r), n = new THREE.Vector2((f + 1) / u, 1 - (e + 1) / r), v = new THREE.Vector2((f + 1) / u, 1 - e / r), z = new THREE.Face3(z + G, a + G, c + G), z.normal.copy(K), z.vertexNormals.push(K.clone(), K.clone(), K.clone()), z.materialIndex = q, g.faces.push(z), g.faceVertexUvs[0].push([d, h, v]), z = new THREE.Face3(a + G, b + G, c + G), z.normal.copy(K), z.vertexNormals.push(K.clone(), K.clone(), K.clone()), z.materialIndex = q, g.faces.push(z),
        g.faceVertexUvs[0].push([h.clone(), n, v.clone()])
    }
    THREE.Geometry.call(this);
    var g = this;
    this.width = a;
    this.height = b;
    this.depth = c;
    this.widthSegments = d || 1;
    this.heightSegments = e || 1;
    this.depthSegments = f || 1;
    a = this.width / 2;
    b = this.height / 2;
    c = this.depth / 2;
    h("z", "y", -1, -1, this.depth, this.height, a, 0);
    h("z", "y", 1, -1, this.depth, this.height, -a, 1);
    h("x", "z", 1, 1, this.width, this.depth, b, 2);
    h("x", "z", 1, -1, this.width, this.depth, -b, 3);
    h("x", "y", 1, -1, this.width, this.height, c, 4);
    h("x", "y", -1, -1, this.width, this.height, -c,
        5);
    this.computeCentroids();
    this.mergeVertices()
};
THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.radiusTop = a = void 0 !== a ? a : 20;
    this.radiusBottom = b = void 0 !== b ? b : 20;
    this.height = c = void 0 !== c ? c : 100;
    this.radialSegments = d = d || 8;
    this.heightSegments = e = e || 1;
    this.openEnded = f = void 0 !== f ? f : !1;
    var h = c / 2,
        g, i, k = [],
        m = [];
    for (i = 0; i <= e; i++) {
        var l = [],
            p = [],
            t = i / e,
            s = t * (b - a) + a;
        for (g = 0; g <= d; g++) {
            var q = g / d,
                n = new THREE.Vector3;
            n.x = s * Math.sin(2 * q * Math.PI);
            n.y = -t * c + h;
            n.z = s * Math.cos(2 * q * Math.PI);
            this.vertices.push(n);
            l.push(this.vertices.length - 1);
            p.push(new THREE.Vector2(q,
                1 - t))
        }
        k.push(l);
        m.push(p)
    }
    c = (b - a) / c;
    for (g = 0; g < d; g++) {
        0 !== a ? (l = this.vertices[k[0][g]].clone(), p = this.vertices[k[0][g + 1]].clone()) : (l = this.vertices[k[1][g]].clone(), p = this.vertices[k[1][g + 1]].clone());
        l.setY(Math.sqrt(l.x * l.x + l.z * l.z) * c).normalize();
        p.setY(Math.sqrt(p.x * p.x + p.z * p.z) * c).normalize();
        for (i = 0; i < e; i++) {
            var t = k[i][g],
                s = k[i + 1][g],
                q = k[i + 1][g + 1],
                n = k[i][g + 1],
                u = l.clone(),
                r = l.clone(),
                v = p.clone(),
                z = p.clone(),
                G = m[i][g].clone(),
                w = m[i + 1][g].clone(),
                y = m[i + 1][g + 1].clone(),
                E = m[i][g + 1].clone();
            this.faces.push(new THREE.Face3(t,
                s, n, [u, r, z]));
            this.faceVertexUvs[0].push([G, w, E]);
            this.faces.push(new THREE.Face3(s, q, n, [r.clone(), v, z.clone()]));
            this.faceVertexUvs[0].push([w.clone(), y, E.clone()])
        }
    }
    if (!1 === f && 0 < a) {
        this.vertices.push(new THREE.Vector3(0, h, 0));
        for (g = 0; g < d; g++) t = k[0][g], s = k[0][g + 1], q = this.vertices.length - 1, u = new THREE.Vector3(0, 1, 0), r = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), G = m[0][g].clone(), w = m[0][g + 1].clone(), y = new THREE.Vector2(w.x, 0), this.faces.push(new THREE.Face3(t, s, q, [u, r, v])), this.faceVertexUvs[0].push([G,
            w, y
        ])
    }
    if (!1 === f && 0 < b) {
        this.vertices.push(new THREE.Vector3(0, -h, 0));
        for (g = 0; g < d; g++) t = k[i][g + 1], s = k[i][g], q = this.vertices.length - 1, u = new THREE.Vector3(0, -1, 0), r = new THREE.Vector3(0, -1, 0), v = new THREE.Vector3(0, -1, 0), G = m[i][g + 1].clone(), w = m[i][g].clone(), y = new THREE.Vector2(w.x, 1), this.faces.push(new THREE.Face3(t, s, q, [u, r, v])), this.faceVertexUvs[0].push([G, w, y])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function(a, b) {
    "undefined" !== typeof a && (THREE.Geometry.call(this), a = a instanceof Array ? a : [a], this.shapebb = a[a.length - 1].getBoundingBox(), this.addShapeList(a, b), this.computeCentroids(), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = a.length, d = 0; d < c; d++) this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function(a, b) {
    function c(a, b, c) {
        b || console.log("die");
        return b.clone().multiplyScalar(c).add(a)
    }

    function d(a, b, c) {
        var d = THREE.ExtrudeGeometry.__v1,
            e = THREE.ExtrudeGeometry.__v2,
            f = THREE.ExtrudeGeometry.__v3,
            g = THREE.ExtrudeGeometry.__v4,
            h = THREE.ExtrudeGeometry.__v5,
            i = THREE.ExtrudeGeometry.__v6;
        d.set(a.x - b.x, a.y - b.y);
        e.set(a.x - c.x, a.y - c.y);
        d = d.normalize();
        e = e.normalize();
        f.set(-d.y, d.x);
        g.set(e.y, -e.x);
        h.copy(a).add(f);
        i.copy(a).add(g);
        if (h.equals(i)) return g.clone();
        h.copy(b).add(f);
        i.copy(c).add(g);
        f = d.dot(g);
        g = i.sub(h).dot(g);
        0 === f && (console.log("Either infinite or no solutions!"), 0 === g ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
        g /= f;
        return 0 > g ? (b = Math.atan2(b.y - a.y, b.x - a.x), a = Math.atan2(c.y - a.y, c.x - a.x), b > a && (a += 2 * Math.PI), c = (b + a) / 2, a = -Math.cos(c), c = -Math.sin(c), new THREE.Vector2(a, c)) : d.multiplyScalar(g).add(h).sub(a).clone()
    }

    function e(c, d) {
        var e, f;
        for (C = c.length; 0 <= --C;) {
            e = C;
            f = C - 1;
            0 > f && (f = c.length - 1);
            for (var g = 0, h = t + 2 * m,
                    g = 0; g < h; g++) {
                var i = ca * g,
                    k = ca * (g + 1),
                    l = d + e + i,
                    i = d + f + i,
                    n = d + f + k,
                    k = d + e + k,
                    p = c,
                    q = g,
                    s = h,
                    u = e,
                    w = f,
                    l = l + F,
                    i = i + F,
                    n = n + F,
                    k = k + F;
                D.faces.push(new THREE.Face3(l, i, k, null, null, r));
                D.faces.push(new THREE.Face3(i, n, k, null, null, r));
                l = v.generateSideWallUV(D, a, p, b, l, i, n, k, q, s, u, w);
                D.faceVertexUvs[0].push([l[0], l[1], l[3]]);
                D.faceVertexUvs[0].push([l[1], l[2], l[3]])
            }
        }
    }

    function f(a, b, c) {
        D.vertices.push(new THREE.Vector3(a, b, c))
    }

    function h(c, d, e, f) {
        c += F;
        d += F;
        e += F;
        D.faces.push(new THREE.Face3(c, d, e, null, null, u));
        c = f ? v.generateBottomUV(D,
            a, b, c, d, e) : v.generateTopUV(D, a, b, c, d, e);
        D.faceVertexUvs[0].push(c)
    }
    var g = void 0 !== b.amount ? b.amount : 100,
        i = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
        k = void 0 !== b.bevelSize ? b.bevelSize : i - 2,
        m = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
        l = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
        p = void 0 !== b.curveSegments ? b.curveSegments : 12,
        t = void 0 !== b.steps ? b.steps : 1,
        s = b.extrudePath,
        q, n = !1,
        u = b.material,
        r = b.extrudeMaterial,
        v = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
        z, G, w, y;
    s && (q =
        s.getSpacedPoints(t), n = !0, l = !1, z = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(s, t, !1), G = new THREE.Vector3, w = new THREE.Vector3, y = new THREE.Vector3);
    l || (k = i = m = 0);
    var E, A, K, D = this,
        F = this.vertices.length,
        p = a.extractPoints(p),
        O = p.shape,
        p = p.holes;
    if (s = !THREE.Shape.Utils.isClockWise(O)) {
        O = O.reverse();
        A = 0;
        for (K = p.length; A < K; A++) E = p[A], THREE.Shape.Utils.isClockWise(E) && (p[A] = E.reverse());
        s = !1
    }
    var x = THREE.Shape.Utils.triangulateShape(O, p),
        s = O;
    A = 0;
    for (K = p.length; A < K; A++) E = p[A], O = O.concat(E);
    var I, B, M, J, ca = O.length,
        na = x.length,
        pa = [],
        C = 0,
        Q = s.length;
    I = Q - 1;
    for (B = C + 1; C < Q; C++, I++, B++) I === Q && (I = 0), B === Q && (B = 0), pa[C] = d(s[C], s[I], s[B]);
    var R = [],
        L, da = pa.concat();
    A = 0;
    for (K = p.length; A < K; A++) {
        E = p[A];
        L = [];
        C = 0;
        Q = E.length;
        I = Q - 1;
        for (B = C + 1; C < Q; C++, I++, B++) I === Q && (I = 0), B === Q && (B = 0), L[C] = d(E[C], E[I], E[B]);
        R.push(L);
        da = da.concat(L)
    }
    for (I = 0; I < m; I++) {
        E = I / m;
        M = i * (1 - E);
        B = k * Math.sin(E * Math.PI / 2);
        C = 0;
        for (Q = s.length; C < Q; C++) J = c(s[C], pa[C], B), f(J.x, J.y, -M);
        A = 0;
        for (K = p.length; A < K; A++) {
            E = p[A];
            L = R[A];
            C = 0;
            for (Q = E.length; C <
                Q; C++) J = c(E[C], L[C], B), f(J.x, J.y, -M)
        }
    }
    B = k;
    for (C = 0; C < ca; C++) J = l ? c(O[C], da[C], B) : O[C], n ? (w.copy(z.normals[0]).multiplyScalar(J.x), G.copy(z.binormals[0]).multiplyScalar(J.y), y.copy(q[0]).add(w).add(G), f(y.x, y.y, y.z)) : f(J.x, J.y, 0);
    for (E = 1; E <= t; E++)
        for (C = 0; C < ca; C++) J = l ? c(O[C], da[C], B) : O[C], n ? (w.copy(z.normals[E]).multiplyScalar(J.x), G.copy(z.binormals[E]).multiplyScalar(J.y), y.copy(q[E]).add(w).add(G), f(y.x, y.y, y.z)) : f(J.x, J.y, g / t * E);
    for (I = m - 1; 0 <= I; I--) {
        E = I / m;
        M = i * (1 - E);
        B = k * Math.sin(E * Math.PI / 2);
        C = 0;
        for (Q =
            s.length; C < Q; C++) J = c(s[C], pa[C], B), f(J.x, J.y, g + M);
        A = 0;
        for (K = p.length; A < K; A++) {
            E = p[A];
            L = R[A];
            C = 0;
            for (Q = E.length; C < Q; C++) J = c(E[C], L[C], B), n ? f(J.x, J.y + q[t - 1].y, q[t - 1].x + M) : f(J.x, J.y, g + M)
        }
    }
    if (l) {
        i = 0 * ca;
        for (C = 0; C < na; C++) g = x[C], h(g[2] + i, g[1] + i, g[0] + i, !0);
        i = ca * (t + 2 * m);
        for (C = 0; C < na; C++) g = x[C], h(g[0] + i, g[1] + i, g[2] + i, !1)
    } else {
        for (C = 0; C < na; C++) g = x[C], h(g[2], g[1], g[0], !0);
        for (C = 0; C < na; C++) g = x[C], h(g[0] + ca * t, g[1] + ca * t, g[2] + ca * t, !1)
    }
    g = 0;
    e(s, g);
    g += s.length;
    A = 0;
    for (K = p.length; A < K; A++) E = p[A], e(E, g), g += E.length
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(a, b, c, d, e, f) {
        b = a.vertices[e].x;
        e = a.vertices[e].y;
        c = a.vertices[f].x;
        f = a.vertices[f].y;
        return [new THREE.Vector2(a.vertices[d].x, a.vertices[d].y), new THREE.Vector2(b, e), new THREE.Vector2(c, f)]
    },
    generateBottomUV: function(a, b, c, d, e, f) {
        return this.generateTopUV(a, b, c, d, e, f)
    },
    generateSideWallUV: function(a, b, c, d, e, f, h, g) {
        var b = a.vertices[e].x,
            c = a.vertices[e].y,
            e = a.vertices[e].z,
            d = a.vertices[f].x,
            i = a.vertices[f].y,
            f = a.vertices[f].z,
            k = a.vertices[h].x,
            m = a.vertices[h].y,
            h = a.vertices[h].z,
            l = a.vertices[g].x,
            p = a.vertices[g].y,
            a = a.vertices[g].z;
        return 0.01 > Math.abs(c - i) ? [new THREE.Vector2(b, 1 - e), new THREE.Vector2(d, 1 - f), new THREE.Vector2(k, 1 - h), new THREE.Vector2(l, 1 - a)] : [new THREE.Vector2(c, 1 - e), new THREE.Vector2(i, 1 - f), new THREE.Vector2(m, 1 - h), new THREE.Vector2(p, 1 - a)]
    }
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function(a, b) {
    THREE.Geometry.call(this);
    !1 === a instanceof Array && (a = [a]);
    this.shapebb = a[a.length - 1].getBoundingBox();
    this.addShapeList(a, b);
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++) this.addShape(a[c], b);
    return this
};
THREE.ShapeGeometry.prototype.addShape = function(a, b) {
    void 0 === b && (b = {});
    var c = b.material,
        d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator,
        e, f, h, g = this.vertices.length;
    e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var i = e.shape,
        k = e.holes;
    if (!THREE.Shape.Utils.isClockWise(i)) {
        i = i.reverse();
        e = 0;
        for (f = k.length; e < f; e++) h = k[e], THREE.Shape.Utils.isClockWise(h) && (k[e] = h.reverse())
    }
    var m = THREE.Shape.Utils.triangulateShape(i, k);
    e = 0;
    for (f = k.length; e < f; e++) h = k[e],
    i = i.concat(h);
    k = i.length;
    f = m.length;
    for (e = 0; e < k; e++) h = i[e], this.vertices.push(new THREE.Vector3(h.x, h.y, 0));
    for (e = 0; e < f; e++) k = m[e], i = k[0] + g, h = k[1] + g, k = k[2] + g, this.faces.push(new THREE.Face3(i, h, k, null, null, c)), this.faceVertexUvs[0].push(d.generateBottomUV(this, a, b, i, h, k))
};
THREE.LatheGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    for (var b = b || 12, c = c || 0, d = d || 2 * Math.PI, e = 1 / (a.length - 1), f = 1 / b, h = 0, g = b; h <= g; h++)
        for (var i = c + h * f * d, k = Math.cos(i), m = Math.sin(i), i = 0, l = a.length; i < l; i++) {
            var p = a[i],
                t = new THREE.Vector3;
            t.x = k * p.x - m * p.y;
            t.y = m * p.x + k * p.y;
            t.z = p.z;
            this.vertices.push(t)
        }
    c = a.length;
    h = 0;
    for (g = b; h < g; h++) {
        i = 0;
        for (l = a.length - 1; i < l; i++) {
            var b = m = i + c * h,
                d = m + c,
                k = m + 1 + c,
                m = m + 1,
                p = h * f,
                t = i * e,
                s = p + f,
                q = t + e;
            this.faces.push(new THREE.Face3(b, d, m));
            this.faceVertexUvs[0].push([new THREE.Vector2(p,
                t), new THREE.Vector2(s, t), new THREE.Vector2(p, q)]);
            this.faces.push(new THREE.Face3(d, k, m));
            this.faceVertexUvs[0].push([new THREE.Vector2(s, t), new THREE.Vector2(s, q), new THREE.Vector2(p, q)])
        }
    }
    this.mergeVertices();
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.width = a;
    this.height = b;
    this.widthSegments = c || 1;
    this.heightSegments = d || 1;
    for (var e = a / 2, f = b / 2, c = this.widthSegments, d = this.heightSegments, h = c + 1, g = d + 1, i = this.width / c, k = this.height / d, m = new THREE.Vector3(0, 0, 1), a = 0; a < g; a++)
        for (b = 0; b < h; b++) this.vertices.push(new THREE.Vector3(b * i - e, -(a * k - f), 0));
    for (a = 0; a < d; a++)
        for (b = 0; b < c; b++) {
            var l = b + h * a,
                e = b + h * (a + 1),
                f = b + 1 + h * (a + 1),
                g = b + 1 + h * a,
                i = new THREE.Vector2(b / c, 1 - a / d),
                k = new THREE.Vector2(b / c, 1 - (a + 1) /
                    d),
                p = new THREE.Vector2((b + 1) / c, 1 - (a + 1) / d),
                t = new THREE.Vector2((b + 1) / c, 1 - a / d),
                l = new THREE.Face3(l, e, g);
            l.normal.copy(m);
            l.vertexNormals.push(m.clone(), m.clone(), m.clone());
            this.faces.push(l);
            this.faceVertexUvs[0].push([i, k, t]);
            l = new THREE.Face3(e, f, g);
            l.normal.copy(m);
            l.vertexNormals.push(m.clone(), m.clone(), m.clone());
            this.faces.push(l);
            this.faceVertexUvs[0].push([k.clone(), p, t.clone()])
        }
    this.computeCentroids()
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    for (var a = a || 0, b = b || 50, e = void 0 !== e ? e : 0, f = void 0 !== f ? f : 2 * Math.PI, c = void 0 !== c ? Math.max(3, c) : 8, d = void 0 !== d ? Math.max(3, d) : 8, h, g = [], i = a, k = (b - a) / d, a = 0; a <= d; a++) {
        for (h = 0; h <= c; h++) {
            var m = new THREE.Vector3,
                l = e + h / c * f;
            m.x = i * Math.cos(l);
            m.y = i * Math.sin(l);
            this.vertices.push(m);
            g.push(new THREE.Vector2((m.x / b + 1) / 2, (m.y / b + 1) / 2))
        }
        i += k
    }
    b = new THREE.Vector3(0, 0, 1);
    for (a = 0; a < d; a++) {
        e = a * c;
        for (h = 0; h <= c; h++) l = h + e, f = l + a, k = l + c + a, m = l + c + 1 + a, this.faces.push(new THREE.Face3(f,
            k, m, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([g[f].clone(), g[k].clone(), g[m].clone()]), f = l + a, k = l + c + 1 + a, m = l + 1 + a, this.faces.push(new THREE.Face3(f, k, m, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([g[f].clone(), g[k].clone(), g[m].clone()])
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, i)
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function(a, b, c, d, e, f, h) {
    THREE.Geometry.call(this);
    this.radius = a = a || 50;
    this.widthSegments = b = Math.max(3, Math.floor(b) || 8);
    this.heightSegments = c = Math.max(2, Math.floor(c) || 6);
    this.phiStart = d = void 0 !== d ? d : 0;
    this.phiLength = e = void 0 !== e ? e : 2 * Math.PI;
    this.thetaStart = f = void 0 !== f ? f : 0;
    this.thetaLength = h = void 0 !== h ? h : Math.PI;
    var g, i, k = [],
        m = [];
    for (i = 0; i <= c; i++) {
        var l = [],
            p = [];
        for (g = 0; g <= b; g++) {
            var t = g / b,
                s = i / c,
                q = new THREE.Vector3;
            q.x = -a * Math.cos(d + t * e) * Math.sin(f + s * h);
            q.y = a * Math.cos(f + s * h);
            q.z = a * Math.sin(d + t * e) * Math.sin(f + s * h);
            this.vertices.push(q);
            l.push(this.vertices.length - 1);
            p.push(new THREE.Vector2(t, 1 - s))
        }
        k.push(l);
        m.push(p)
    }
    for (i = 0; i < this.heightSegments; i++)
        for (g = 0; g < this.widthSegments; g++) {
            var b = k[i][g + 1],
                c = k[i][g],
                d = k[i + 1][g],
                e = k[i + 1][g + 1],
                f = this.vertices[b].clone().normalize(),
                h = this.vertices[c].clone().normalize(),
                l = this.vertices[d].clone().normalize(),
                p = this.vertices[e].clone().normalize(),
                t = m[i][g + 1].clone(),
                s = m[i][g].clone(),
                q = m[i + 1][g].clone(),
                n = m[i + 1][g + 1].clone();
            Math.abs(this.vertices[b].y) ===
                this.radius ? (t.x = (t.x + s.x) / 2, this.faces.push(new THREE.Face3(b, d, e, [f, l, p])), this.faceVertexUvs[0].push([t, q, n])) : Math.abs(this.vertices[d].y) === this.radius ? (q.x = (q.x + n.x) / 2, this.faces.push(new THREE.Face3(b, c, d, [f, h, l])), this.faceVertexUvs[0].push([t, s, q])) : (this.faces.push(new THREE.Face3(b, c, e, [f, h, p])), this.faceVertexUvs[0].push([t, s, n]), this.faces.push(new THREE.Face3(c, d, e, [h.clone(), l, p.clone()])), this.faceVertexUvs[0].push([s.clone(), q, n.clone()]))
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function(a, b) {
    var b = b || {}, c = THREE.FontUtils.generateShapes(a, b);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = b || 40;
    this.radialSegments = c || 8;
    this.tubularSegments = d || 6;
    this.arc = e || 2 * Math.PI;
    e = new THREE.Vector3;
    a = [];
    b = [];
    for (c = 0; c <= this.radialSegments; c++)
        for (d = 0; d <= this.tubularSegments; d++) {
            var f = d / this.tubularSegments * this.arc,
                h = 2 * c / this.radialSegments * Math.PI;
            e.x = this.radius * Math.cos(f);
            e.y = this.radius * Math.sin(f);
            var g = new THREE.Vector3;
            g.x = (this.radius + this.tube * Math.cos(h)) * Math.cos(f);
            g.y = (this.radius + this.tube *
                Math.cos(h)) * Math.sin(f);
            g.z = this.tube * Math.sin(h);
            this.vertices.push(g);
            a.push(new THREE.Vector2(d / this.tubularSegments, c / this.radialSegments));
            b.push(g.clone().sub(e).normalize())
        }
    for (c = 1; c <= this.radialSegments; c++)
        for (d = 1; d <= this.tubularSegments; d++) {
            var e = (this.tubularSegments + 1) * c + d - 1,
                f = (this.tubularSegments + 1) * (c - 1) + d - 1,
                h = (this.tubularSegments + 1) * (c - 1) + d,
                g = (this.tubularSegments + 1) * c + d,
                i = new THREE.Face3(e, f, g, [b[e], b[f], b[g]]);
            i.normal.add(b[e]);
            i.normal.add(b[f]);
            i.normal.add(b[g]);
            i.normal.normalize();
            this.faces.push(i);
            this.faceVertexUvs[0].push([a[e].clone(), a[f].clone(), a[g].clone()]);
            i = new THREE.Face3(f, h, g, [b[f], b[h], b[g]]);
            i.normal.add(b[f]);
            i.normal.add(b[h]);
            i.normal.add(b[g]);
            i.normal.normalize();
            this.faces.push(i);
            this.faceVertexUvs[0].push([a[f].clone(), a[h].clone(), a[g].clone()])
        }
    this.computeCentroids()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function(a, b, c, d, e, f, h) {
    function g(a, b, c, d, e) {
        var f = Math.cos(a),
            g = Math.sin(a),
            a = b / c * a,
            b = Math.cos(a),
            f = 0.5 * (d * (2 + b)) * f,
            g = 0.5 * d * (2 + b) * g,
            d = 0.5 * e * d * Math.sin(a);
        return new THREE.Vector3(f, g, d)
    }
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = b || 40;
    this.radialSegments = c || 64;
    this.tubularSegments = d || 8;
    this.p = e || 2;
    this.q = f || 3;
    this.heightScale = h || 1;
    this.grid = Array(this.radialSegments);
    c = new THREE.Vector3;
    d = new THREE.Vector3;
    e = new THREE.Vector3;
    for (a = 0; a < this.radialSegments; ++a) {
        this.grid[a] =
            Array(this.tubularSegments);
        b = 2 * (a / this.radialSegments) * this.p * Math.PI;
        f = g(b, this.q, this.p, this.radius, this.heightScale);
        b = g(b + 0.01, this.q, this.p, this.radius, this.heightScale);
        c.subVectors(b, f);
        d.addVectors(b, f);
        e.crossVectors(c, d);
        d.crossVectors(e, c);
        e.normalize();
        d.normalize();
        for (b = 0; b < this.tubularSegments; ++b) {
            var i = 2 * (b / this.tubularSegments) * Math.PI,
                h = -this.tube * Math.cos(i),
                i = this.tube * Math.sin(i),
                k = new THREE.Vector3;
            k.x = f.x + h * d.x + i * e.x;
            k.y = f.y + h * d.y + i * e.y;
            k.z = f.z + h * d.z + i * e.z;
            this.grid[a][b] =
                this.vertices.push(k) - 1
        }
    }
    for (a = 0; a < this.radialSegments; ++a)
        for (b = 0; b < this.tubularSegments; ++b) {
            var e = (a + 1) % this.radialSegments,
                f = (b + 1) % this.tubularSegments,
                c = this.grid[a][b],
                d = this.grid[e][b],
                e = this.grid[e][f],
                f = this.grid[a][f],
                h = new THREE.Vector2(a / this.radialSegments, b / this.tubularSegments),
                i = new THREE.Vector2((a + 1) / this.radialSegments, b / this.tubularSegments),
                k = new THREE.Vector2((a + 1) / this.radialSegments, (b + 1) / this.tubularSegments),
                m = new THREE.Vector2(a / this.radialSegments, (b + 1) / this.tubularSegments);
            this.faces.push(new THREE.Face3(c, d, f));
            this.faceVertexUvs[0].push([h, i, m]);
            this.faces.push(new THREE.Face3(d, e, f));
            this.faceVertexUvs[0].push([i.clone(), k, m.clone()])
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.path = a;
    this.segments = b || 64;
    this.radius = c || 1;
    this.radialSegments = d || 8;
    this.closed = e || !1;
    this.grid = [];
    var f, h, d = this.segments + 1,
        g, i, k, e = new THREE.Vector3,
        m, l, b = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed);
    m = b.normals;
    l = b.binormals;
    this.tangents = b.tangents;
    this.normals = m;
    this.binormals = l;
    for (b = 0; b < d; b++) {
        this.grid[b] = [];
        c = b / (d - 1);
        k = a.getPointAt(c);
        f = m[b];
        h = l[b];
        for (c = 0; c < this.radialSegments; c++) g = 2 * (c / this.radialSegments) *
            Math.PI, i = -this.radius * Math.cos(g), g = this.radius * Math.sin(g), e.copy(k), e.x += i * f.x + g * h.x, e.y += i * f.y + g * h.y, e.z += i * f.z + g * h.z, this.grid[b][c] = this.vertices.push(new THREE.Vector3(e.x, e.y, e.z)) - 1
    }
    for (b = 0; b < this.segments; b++)
        for (c = 0; c < this.radialSegments; c++) e = this.closed ? (b + 1) % this.segments : b + 1, m = (c + 1) % this.radialSegments, a = this.grid[b][c], d = this.grid[e][c], e = this.grid[e][m], m = this.grid[b][m], l = new THREE.Vector2(b / this.segments, c / this.radialSegments), f = new THREE.Vector2((b + 1) / this.segments, c / this.radialSegments),
    h = new THREE.Vector2((b + 1) / this.segments, (c + 1) / this.radialSegments), i = new THREE.Vector2(b / this.segments, (c + 1) / this.radialSegments), this.faces.push(new THREE.Face3(a, d, m)), this.faceVertexUvs[0].push([l, f, i]), this.faces.push(new THREE.Face3(d, e, m)), this.faceVertexUvs[0].push([f.clone(), h, i.clone()]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function(a, b, c) {
    new THREE.Vector3;
    var d = new THREE.Vector3;
    new THREE.Vector3;
    var e = [],
        f = [],
        h = [],
        g = new THREE.Vector3,
        i = new THREE.Matrix4,
        b = b + 1,
        k, m, l;
    this.tangents = e;
    this.normals = f;
    this.binormals = h;
    for (k = 0; k < b; k++) m = k / (b - 1), e[k] = a.getTangentAt(m), e[k].normalize();
    f[0] = new THREE.Vector3;
    h[0] = new THREE.Vector3;
    a = Number.MAX_VALUE;
    k = Math.abs(e[0].x);
    m = Math.abs(e[0].y);
    l = Math.abs(e[0].z);
    k <= a && (a = k, d.set(1, 0, 0));
    m <= a && (a = m, d.set(0, 1, 0));
    l <= a && d.set(0, 0, 1);
    g.crossVectors(e[0],
        d).normalize();
    f[0].crossVectors(e[0], g);
    h[0].crossVectors(e[0], f[0]);
    for (k = 1; k < b; k++) f[k] = f[k - 1].clone(), h[k] = h[k - 1].clone(), g.crossVectors(e[k - 1], e[k]), 1E-4 < g.length() && (g.normalize(), d = Math.acos(THREE.Math.clamp(e[k - 1].dot(e[k]), -1, 1)), f[k].applyMatrix4(i.makeRotationAxis(g, d))), h[k].crossVectors(e[k], f[k]);
    if (c) {
        d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1));
        d /= b - 1;
        0 < e[0].dot(g.crossVectors(f[0], f[b - 1])) && (d = -d);
        for (k = 1; k < b; k++) f[k].applyMatrix4(i.makeRotationAxis(e[k], d * k)), h[k].crossVectors(e[k],
            f[k])
    }
};
THREE.PolyhedronGeometry = function(a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = g.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5,
            a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5;
        b.uv = new THREE.Vector2(c, 1 - a);
        return b
    }

    function f(a, b, c) {
        var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
        d.centroid.add(a).add(b).add(c).divideScalar(3);
        g.faces.push(d);
        d = Math.atan2(d.centroid.z, -d.centroid.x);
        g.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d),
            h(c.uv, c, d)
        ])
    }

    function h(a, b, c) {
        0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
        0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + 0.5, a.y));
        return a.clone()
    }
    THREE.Geometry.call(this);
    for (var c = c || 1, d = d || 0, g = this, i = 0, k = a.length; i < k; i++) e(new THREE.Vector3(a[i][0], a[i][1], a[i][2]));
    for (var m = this.vertices, a = [], i = 0, k = b.length; i < k; i++) {
        var l = m[b[i][0]],
            p = m[b[i][1]],
            t = m[b[i][2]];
        a[i] = new THREE.Face3(l.index, p.index, t.index, [l.clone(), p.clone(), t.clone()])
    }
    i = 0;
    for (k = a.length; i < k; i++) {
        p = a[i];
        m = d;
        b = Math.pow(2,
            m);
        Math.pow(4, m);
        for (var m = e(g.vertices[p.a]), l = e(g.vertices[p.b]), s = e(g.vertices[p.c]), p = [], t = 0; t <= b; t++) {
            p[t] = [];
            for (var q = e(m.clone().lerp(s, t / b)), n = e(l.clone().lerp(s, t / b)), u = b - t, r = 0; r <= u; r++) p[t][r] = 0 == r && t == b ? q : e(q.clone().lerp(n, r / u))
        }
        for (t = 0; t < b; t++)
            for (r = 0; r < 2 * (b - t) - 1; r++) m = Math.floor(r / 2), 0 == r % 2 ? f(p[t][m + 1], p[t + 1][m], p[t][m]) : f(p[t][m + 1], p[t + 1][m + 1], p[t + 1][m])
    }
    i = 0;
    for (k = this.faceVertexUvs[0].length; i < k; i++) d = this.faceVertexUvs[0][i], a = d[0].x, b = d[1].x, m = d[2].x, l = Math.max(a, Math.max(b, m)),
    p = Math.min(a, Math.min(b, m)), 0.9 < l && 0.1 > p && (0.2 > a && (d[0].x += 1), 0.2 > b && (d[1].x += 1), 0.2 > m && (d[2].x += 1));
    i = 0;
    for (k = this.vertices.length; i < k; i++) this.vertices[i].multiplyScalar(c);
    this.mergeVertices();
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function(a, b) {
    this.radius = a;
    this.detail = b;
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [
        [-1, c, 0],
        [1, c, 0],
        [-1, -c, 0],
        [1, -c, 0],
        [0, -1, c],
        [0, 1, c],
        [0, -1, -c],
        [0, 1, -c],
        [c, 0, -1],
        [c, 0, 1],
        [-c, 0, -1],
        [-c, 0, 1]
    ], [
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1]
    ], a, b)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
    ], [
        [0, 2, 4],
        [0, 4, 3],
        [0, 3, 5],
        [0, 5, 2],
        [1, 2, 5],
        [1, 5, 3],
        [1, 3, 4],
        [1, 4, 2]
    ], a, b)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [
        [1, 1, 1],
        [-1, -1, 1],
        [-1, 1, -1],
        [1, -1, -1]
    ], [
        [2, 1, 0],
        [0, 3, 2],
        [1, 3, 0],
        [2, 3, 1]
    ], a, b)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function(a, b, c) {
    THREE.Geometry.call(this);
    var d = this.vertices,
        e = this.faces,
        f = this.faceVertexUvs[0],
        h, g, i, k, m = b + 1;
    for (h = 0; h <= c; h++) {
        k = h / c;
        for (g = 0; g <= b; g++) i = g / b, i = a(i, k), d.push(i)
    }
    var l, p, t, s;
    for (h = 0; h < c; h++)
        for (g = 0; g < b; g++) a = h * m + g, d = h * m + g + 1, k = (h + 1) * m + g + 1, i = (h + 1) * m + g, l = new THREE.Vector2(g / b, h / c), p = new THREE.Vector2((g + 1) / b, h / c), t = new THREE.Vector2((g + 1) / b, (h + 1) / c), s = new THREE.Vector2(g / b, (h + 1) / c), e.push(new THREE.Face3(a, d, i)), f.push([l, p, s]), e.push(new THREE.Face3(d, k, i)),
    f.push([p.clone(), t, s.clone()]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function(a) {
    var a = a || 1,
        b = new THREE.Geometry;
    b.vertices.push(new THREE.Vector3, new THREE.Vector3(a, 0, 0), new THREE.Vector3, new THREE.Vector3(0, a, 0), new THREE.Vector3, new THREE.Vector3(0, 0, a));
    b.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775));
    a = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.Line.call(this, b, a, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function(a, b, c, d) {
    THREE.Object3D.call(this);
    void 0 === d && (d = 16776960);
    void 0 === c && (c = 1);
    this.position = b;
    b = new THREE.Geometry;
    b.vertices.push(new THREE.Vector3(0, 0, 0));
    b.vertices.push(new THREE.Vector3(0, 1, 0));
    this.line = new THREE.Line(b, new THREE.LineBasicMaterial({
        color: d
    }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    b = new THREE.CylinderGeometry(0, 0.05, 0.25, 5, 1);
    b.applyMatrix((new THREE.Matrix4).makeTranslation(0, 0.875, 0));
    this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({
        color: d
    }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(a);
    this.setLength(c)
};
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function() {
    var a = new THREE.Vector3,
        b;
    return function(c) {
        0.99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -0.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b))
    }
}();
THREE.ArrowHelper.prototype.setLength = function(a) {
    this.scale.set(a, a, a)
};
THREE.ArrowHelper.prototype.setColor = function(a) {
    this.line.material.color.setHex(a);
    this.cone.material.color.setHex(a)
};
THREE.BoxHelper = function(a) {
    var b = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(-1, -1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, -1, -1)];
    this.vertices = b;
    var c = new THREE.Geometry;
    c.vertices.push(b[0], b[1], b[1], b[2], b[2], b[3], b[3], b[0], b[4], b[5], b[5], b[6], b[6], b[7], b[7], b[4], b[0], b[4], b[1], b[5], b[2], b[6], b[3], b[7]);
    THREE.Line.call(this, c, new THREE.LineBasicMaterial({
        color: 16776960
    }), THREE.LinePieces);
    void 0 !== a && this.update(a)
};
THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update = function(a) {
    var b = a.geometry;
    null === b.boundingBox && b.computeBoundingBox();
    var c = b.boundingBox.min,
        b = b.boundingBox.max,
        d = this.vertices;
    d[0].set(b.x, b.y, b.z);
    d[1].set(c.x, b.y, b.z);
    d[2].set(c.x, c.y, b.z);
    d[3].set(b.x, c.y, b.z);
    d[4].set(b.x, b.y, c.z);
    d[5].set(c.x, b.y, c.z);
    d[6].set(c.x, c.y, c.z);
    d[7].set(b.x, c.y, c.z);
    this.geometry.computeBoundingSphere();
    this.geometry.verticesNeedUpdate = !0;
    this.matrixAutoUpdate = !1;
    this.matrixWorld = a.matrixWorld
};
THREE.BoundingBoxHelper = function(a, b) {
    var c = b || 8947848;
    this.object = a;
    this.box = new THREE.Box3;
    THREE.Mesh.call(this, new THREE.CubeGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0
    }))
};
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object);
    this.box.size(this.scale);
    this.box.center(this.position)
};
THREE.CameraHelper = function(a) {
    function b(a, b, d) {
        c(a, d);
        c(b, d)
    }

    function c(a, b) {
        d.vertices.push(new THREE.Vector3);
        d.colors.push(new THREE.Color(b));
        void 0 === f[a] && (f[a] = []);
        f[a].push(d.vertices.length - 1)
    }
    var d = new THREE.Geometry,
        e = new THREE.LineBasicMaterial({
            color: 16777215,
            vertexColors: THREE.FaceColors
        }),
        f = {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1", "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    THREE.Line.call(this, d, e, THREE.LinePieces);
    this.camera = a;
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = f;
    this.update()
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function() {
    var a = new THREE.Vector3,
        b = new THREE.Camera,
        c = new THREE.Projector;
    return function() {
        function d(d, h, g, i) {
            a.set(h, g, i);
            c.unprojectVector(a, b);
            d = e.pointMap[d];
            if (void 0 !== d) {
                h = 0;
                for (g = d.length; h < g; h++) e.geometry.vertices[d[h]].copy(a)
            }
        }
        var e = this;
        b.projectionMatrix.copy(this.camera.projectionMatrix);
        d("c", 0, 0, -1);
        d("t", 0, 0, 1);
        d("n1", -1, -1, -1);
        d("n2", 1, -1, -1);
        d("n3", -1, 1, -1);
        d("n4", 1, 1, -1);
        d("f1", -1, -1, 1);
        d("f2", 1, -1, 1);
        d("f3", -1, 1, 1);
        d("f4", 1, 1, 1);
        d("u1",
            0.7, 1.1, -1);
        d("u2", -0.7, 1.1, -1);
        d("u3", 0, 2, -1);
        d("cf1", -1, 0, 1);
        d("cf2", 1, 0, 1);
        d("cf3", 0, -1, 1);
        d("cf4", 0, 1, 1);
        d("cn1", -1, 0, -1);
        d("cn2", 1, 0, -1);
        d("cn3", 0, -1, -1);
        d("cn4", 0, 1, -1);
        this.geometry.verticesNeedUpdate = !0
    }
}();
THREE.DirectionalLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    var b = b || 1,
        c = new THREE.PlaneGeometry(b, b),
        d = new THREE.MeshBasicMaterial({
            wireframe: !0,
            fog: !1
        });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.lightPlane = new THREE.Mesh(c, d);
    this.add(this.lightPlane);
    c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3);
    c.vertices.push(new THREE.Vector3);
    d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.targetLine = new THREE.Line(c, d);
    this.add(this.targetLine);
    this.update()
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose()
};
THREE.DirectionalLightHelper.prototype.update = function() {
    var a = new THREE.Vector3,
        b = new THREE.Vector3,
        c = new THREE.Vector3;
    return function() {
        a.getPositionFromMatrix(this.light.matrixWorld);
        b.getPositionFromMatrix(this.light.target.matrixWorld);
        c.subVectors(b, a);
        this.lightPlane.lookAt(c);
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
        this.targetLine.geometry.vertices[1].copy(c);
        this.targetLine.geometry.verticesNeedUpdate = !0;
        this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}();
THREE.FaceNormalsHelper = function(a, b, c, d) {
    this.object = a;
    this.size = b || 1;
    for (var a = c || 16776960, d = d || 1, b = new THREE.Geometry, c = 0, e = this.object.geometry.faces.length; c < e; c++) b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, b, new THREE.LineBasicMaterial({
        color: a,
        linewidth: d
    }), THREE.LinePieces);
    this.matrixAutoUpdate = !1;
    this.normalMatrix = new THREE.Matrix3;
    this.update()
};
THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        this.object.updateMatrixWorld(!0);
        this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
        for (var b = this.geometry.vertices, c = this.object.geometry.faces, d = this.object.matrixWorld, e = 0, f = c.length; e < f; e++) {
            var h = c[e];
            a.copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
            var g = 2 * e;
            b[g].copy(h.centroid).applyMatrix4(d);
            b[g + 1].addVectors(b[g], a)
        }
        this.geometry.verticesNeedUpdate = !0;
        return this
    }
}();
THREE.GridHelper = function(a, b) {
    var c = new THREE.Geometry,
        d = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors
        });
    this.color1 = new THREE.Color(4473924);
    this.color2 = new THREE.Color(8947848);
    for (var e = -a; e <= a; e += b) {
        c.vertices.push(new THREE.Vector3(-a, 0, e), new THREE.Vector3(a, 0, e), new THREE.Vector3(e, 0, -a), new THREE.Vector3(e, 0, a));
        var f = 0 === e ? this.color1 : this.color2;
        c.colors.push(f, f, f, f)
    }
    THREE.Line.call(this, c, d, THREE.LinePieces)
};
THREE.GridHelper.prototype = Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors = function(a, b) {
    this.color1.set(a);
    this.color2.set(b);
    this.geometry.colorsNeedUpdate = !0
};
THREE.HemisphereLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.colors = [new THREE.Color, new THREE.Color];
    var c = new THREE.SphereGeometry(b, 4, 2);
    c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    for (var d = 0; 8 > d; d++) c.faces[d].color = this.colors[4 > d ? 0 : 1];
    d = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    });
    this.lightSphere = new THREE.Mesh(c, d);
    this.add(this.lightSphere);
    this.update()
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose();
    this.lightSphere.material.dispose()
};
THREE.HemisphereLightHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
        this.lightSphere.lookAt(a.getPositionFromMatrix(this.light.matrixWorld).negate());
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}();
THREE.PointLightHelper = function(a, b) {
    this.light = a;
    this.light.updateMatrixWorld();
    var c = new THREE.SphereGeometry(b, 4, 2),
        d = new THREE.MeshBasicMaterial({
            wireframe: !0,
            fog: !1
        });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    THREE.Mesh.call(this, c, d);
    this.matrixWorld = this.light.matrixWorld;
    this.matrixAutoUpdate = !1
};
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose();
    this.material.dispose()
};
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.SpotLightHelper = function(a) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    a = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
    a.applyMatrix((new THREE.Matrix4).makeTranslation(0, -0.5, 0));
    a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    var b = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    this.cone = new THREE.Mesh(a, b);
    this.add(this.cone);
    this.update()
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose();
    this.cone.material.dispose()
};
THREE.SpotLightHelper.prototype.update = function() {
    var a = new THREE.Vector3,
        b = new THREE.Vector3;
    return function() {
        var c = this.light.distance ? this.light.distance : 1E4,
            d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c);
        a.getPositionFromMatrix(this.light.matrixWorld);
        b.getPositionFromMatrix(this.light.target.matrixWorld);
        this.cone.lookAt(b.sub(a));
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}();
THREE.VertexNormalsHelper = function(a, b, c, d) {
    this.object = a;
    this.size = b || 1;
    for (var b = c || 16711680, d = d || 1, c = new THREE.Geometry, a = a.geometry.faces, e = 0, f = a.length; e < f; e++)
        for (var h = 0, g = a[e].vertexNormals.length; h < g; h++) c.vertices.push(new THREE.Vector3), c.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, c, new THREE.LineBasicMaterial({
        color: b,
        linewidth: d
    }), THREE.LinePieces);
    this.matrixAutoUpdate = !1;
    this.normalMatrix = new THREE.Matrix3;
    this.update()
};
THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        var b = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0);
        this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
        for (var c = this.geometry.vertices, d = this.object.geometry.vertices, e = this.object.geometry.faces, f = this.object.matrixWorld, h = 0, g = 0, i = e.length; g < i; g++)
            for (var k = e[g], m = 0, l = k.vertexNormals.length; m < l; m++) {
                var p = k.vertexNormals[m];
                c[h].copy(d[k[b[m]]]).applyMatrix4(f);
                a.copy(p).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
                a.add(c[h]);
                h += 1;
                c[h].copy(a);
                h += 1
            }
        this.geometry.verticesNeedUpdate = !0;
        return this
    }
}();
THREE.VertexTangentsHelper = function(a, b, c, d) {
    this.object = a;
    this.size = b || 1;
    for (var b = c || 255, d = d || 1, c = new THREE.Geometry, a = a.geometry.faces, e = 0, f = a.length; e < f; e++)
        for (var h = 0, g = a[e].vertexTangents.length; h < g; h++) c.vertices.push(new THREE.Vector3), c.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, c, new THREE.LineBasicMaterial({
        color: b,
        linewidth: d
    }), THREE.LinePieces);
    this.matrixAutoUpdate = !1;
    this.update()
};
THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        var b = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0);
        for (var c = this.geometry.vertices, d = this.object.geometry.vertices, e = this.object.geometry.faces, f = this.object.matrixWorld, h = 0, g = 0, i = e.length; g < i; g++)
            for (var k = e[g], m = 0, l = k.vertexTangents.length; m < l; m++) {
                var p = k.vertexTangents[m];
                c[h].copy(d[k[b[m]]]).applyMatrix4(f);
                a.copy(p).transformDirection(f).multiplyScalar(this.size);
                a.add(c[h]);
                h += 1;
                c[h].copy(a);
                h += 1
            }
        this.geometry.verticesNeedUpdate = !0;
        return this
    }
}();
THREE.WireframeHelper = function(a) {
    for (var b = [0, 0], c = {}, d = function(a, b) {
            return a - b
        }, e = ["a", "b", "c", "d"], f = new THREE.Geometry, h = a.geometry.vertices, g = a.geometry.faces, i = 0, k = g.length; i < k; i++)
        for (var m = g[i], l = 0; 3 > l; l++) {
            b[0] = m[e[l]];
            b[1] = m[e[(l + 1) % 3]];
            b.sort(d);
            var p = b.toString();
            void 0 === c[p] && (f.vertices.push(h[b[0]]), f.vertices.push(h[b[1]]), c[p] = !0)
        }
    THREE.Line.call(this, f, new THREE.LineBasicMaterial({
        color: 16777215
    }), THREE.LinePieces);
    this.matrixAutoUpdate = !1;
    this.matrixWorld = a.matrixWorld
};
THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ImmediateRenderObject = function() {
    THREE.Object3D.call(this);
    this.render = function() {}
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function(a, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function(a, b, c, d, e, f) {
    void 0 === b && (b = -1);
    void 0 === c && (c = 0);
    void 0 === f && (f = 1);
    void 0 === e && (e = new THREE.Color(16777215));
    void 0 === d && (d = THREE.NormalBlending);
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: f,
        color: e,
        blending: d
    })
};
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a, b = this.lensFlares.length,
        c, d = 2 * -this.positionScreen.x,
        e = 2 * -this.positionScreen.y;
    for (a = 0; a < b; a++) c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = 0.25 * c.x * Math.PI, c.rotation += 0.25 * (c.wantedRotation - c.rotation)
};
THREE.MorphBlendMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function(a, b, c, d) {
    b = {
        startFrame: b,
        endFrame: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a] = b;
    this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a) {
    for (var b = /([a-z]+)(\d+)/, c, d = {}, e = this.geometry, f = 0, h = e.morphTargets.length; f < h; f++) {
        var g = e.morphTargets[f].name.match(b);
        if (g && 1 < g.length) {
            var i = g[1];
            d[i] || (d[i] = {
                start: Infinity,
                end: -Infinity
            });
            g = d[i];
            f < g.start && (g.start = f);
            f > g.end && (g.end = f);
            c || (c = i)
        }
    }
    for (i in d) g = d[i], this.createAnimation(i, g.start, g.end, a);
    this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a) {
    if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a) {
    if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a) {
    var b = 0;
    if (a = this.animationsMap[a]) b = a.time;
    return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a) {
    var b = -1;
    if (a = this.animationsMap[a]) b = a.duration;
    return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function(a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function(a) {
    if (a = this.animationsMap[a]) a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function(a) {
    for (var b = 0, c = this.animationsList.length; b < c; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
            } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
            var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1),
                h = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * h, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            this.morphTargetInfluences[d.currentFrame] = e * h;
            this.morphTargetInfluences[d.lastFrame] = (1 - e) * h
        }
    }
};
THREE.LensFlarePlugin = function() {
    function a(a, c) {
        var d = b.createProgram(),
            e = b.createShader(b.FRAGMENT_SHADER),
            f = b.createShader(b.VERTEX_SHADER),
            g = "precision " + c + " float;\n";
        b.shaderSource(e, g + a.fragmentShader);
        b.shaderSource(f, g + a.vertexShader);
        b.compileShader(e);
        b.compileShader(f);
        b.attachShader(d, e);
        b.attachShader(d, f);
        b.linkProgram(d);
        return d
    }
    var b, c, d, e, f, h, g, i, k, m, l, p, t;
    this.init = function(s) {
        b = s.context;
        c = s;
        d = s.getPrecision();
        e = new Float32Array(16);
        f = new Uint16Array(6);
        s = 0;
        e[s++] = -1;
        e[s++] = -1;
        e[s++] = 0;
        e[s++] = 0;
        e[s++] = 1;
        e[s++] = -1;
        e[s++] = 1;
        e[s++] = 0;
        e[s++] = 1;
        e[s++] = 1;
        e[s++] = 1;
        e[s++] = 1;
        e[s++] = -1;
        e[s++] = 1;
        e[s++] = 0;
        e[s++] = 1;
        s = 0;
        f[s++] = 0;
        f[s++] = 1;
        f[s++] = 2;
        f[s++] = 0;
        f[s++] = 2;
        f[s++] = 3;
        h = b.createBuffer();
        g = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, h);
        b.bufferData(b.ARRAY_BUFFER, e, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
        i = b.createTexture();
        k = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, i);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16,
            0, b.RGB, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        b.bindTexture(b.TEXTURE_2D, k);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        0 >= b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (m = !1, l = a(THREE.ShaderFlares.lensFlare, d)) : (m = !0, l = a(THREE.ShaderFlares.lensFlareVertexTexture, d));
        p = {};
        t = {};
        p.vertex = b.getAttribLocation(l, "position");
        p.uv = b.getAttribLocation(l, "uv");
        t.renderType = b.getUniformLocation(l, "renderType");
        t.map = b.getUniformLocation(l, "map");
        t.occlusionMap = b.getUniformLocation(l, "occlusionMap");
        t.opacity =
            b.getUniformLocation(l, "opacity");
        t.color = b.getUniformLocation(l, "color");
        t.scale = b.getUniformLocation(l, "scale");
        t.rotation = b.getUniformLocation(l, "rotation");
        t.screenPosition = b.getUniformLocation(l, "screenPosition")
    };
    this.render = function(a, d, e, f) {
        var a = a.__webglFlares,
            r = a.length;
        if (r) {
            var v = new THREE.Vector3,
                z = f / e,
                G = 0.5 * e,
                w = 0.5 * f,
                y = 16 / f,
                E = new THREE.Vector2(y * z, y),
                A = new THREE.Vector3(1, 1, 0),
                K = new THREE.Vector2(1, 1),
                D = t,
                y = p;
            b.useProgram(l);
            b.enableVertexAttribArray(p.vertex);
            b.enableVertexAttribArray(p.uv);
            b.uniform1i(D.occlusionMap, 0);
            b.uniform1i(D.map, 1);
            b.bindBuffer(b.ARRAY_BUFFER, h);
            b.vertexAttribPointer(y.vertex, 2, b.FLOAT, !1, 16, 0);
            b.vertexAttribPointer(y.uv, 2, b.FLOAT, !1, 16, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g);
            b.disable(b.CULL_FACE);
            b.depthMask(!1);
            var F, O, x, I, B;
            for (F = 0; F < r; F++)
                if (y = 16 / f, E.set(y * z, y), I = a[F], v.set(I.matrixWorld.elements[12], I.matrixWorld.elements[13], I.matrixWorld.elements[14]), v.applyMatrix4(d.matrixWorldInverse), v.applyProjection(d.projectionMatrix), A.copy(v), K.x = A.x * G + G,
                    K.y = A.y * w + w, m || 0 < K.x && K.x < e && 0 < K.y && K.y < f) {
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, i);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, K.x - 8, K.y - 8, 16, 16, 0);
                    b.uniform1i(D.renderType, 0);
                    b.uniform2f(D.scale, E.x, E.y);
                    b.uniform3f(D.screenPosition, A.x, A.y, A.z);
                    b.disable(b.BLEND);
                    b.enable(b.DEPTH_TEST);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    b.activeTexture(b.TEXTURE0);
                    b.bindTexture(b.TEXTURE_2D, k);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, K.x - 8, K.y - 8, 16, 16, 0);
                    b.uniform1i(D.renderType, 1);
                    b.disable(b.DEPTH_TEST);
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, i);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    I.positionScreen.copy(A);
                    I.customUpdateCallback ? I.customUpdateCallback(I) : I.updateLensFlares();
                    b.uniform1i(D.renderType, 2);
                    b.enable(b.BLEND);
                    O = 0;
                    for (x = I.lensFlares.length; O < x; O++) B = I.lensFlares[O], 0.0010 < B.opacity && 0.0010 < B.scale && (A.x = B.x, A.y = B.y, A.z = B.z, y = B.size * B.scale / f, E.x = y * z, E.y = y, b.uniform3f(D.screenPosition, A.x, A.y, A.z), b.uniform2f(D.scale, E.x, E.y), b.uniform1f(D.rotation, B.rotation),
                        b.uniform1f(D.opacity, B.opacity), b.uniform3f(D.color, B.color.r, B.color.g, B.color.b), c.setBlending(B.blending, B.blendEquation, B.blendSrc, B.blendDst), c.setTexture(B.texture, 1), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0))
                }
            b.enable(b.CULL_FACE);
            b.enable(b.DEPTH_TEST);
            b.depthMask(!0)
        }
    }
};
THREE.ShadowMapPlugin = function() {
    var a, b, c, d, e, f, h = new THREE.Frustum,
        g = new THREE.Matrix4,
        i = new THREE.Vector3,
        k = new THREE.Vector3,
        m = new THREE.Vector3;
    this.init = function(g) {
        a = g.context;
        b = g;
        var g = THREE.ShaderLib.depthRGBA,
            h = THREE.UniformsUtils.clone(g.uniforms);
        c = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h
        });
        d = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0
        });
        e = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            skinning: !0
        });
        f = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0,
            skinning: !0
        });
        c._shadowPass = !0;
        d._shadowPass = !0;
        e._shadowPass = !0;
        f._shadowPass = !0
    };
    this.render = function(a, c) {
        b.shadowMapEnabled && b.shadowMapAutoUpdate && this.update(a, c)
    };
    this.update = function(l, p) {
        var t, s, q, n, u, r, v, z, G, w = [];
        n = 0;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        a.enable(a.CULL_FACE);
        a.frontFace(a.CCW);
        b.shadowMapCullFace === THREE.CullFaceFront ?
            a.cullFace(a.FRONT) : a.cullFace(a.BACK);
        b.setDepthTest(!0);
        t = 0;
        for (s = l.__lights.length; t < s; t++)
            if (q = l.__lights[t], q.castShadow)
                if (q instanceof THREE.DirectionalLight && q.shadowCascade)
                    for (u = 0; u < q.shadowCascadeCount; u++) {
                        var y;
                        if (q.shadowCascadeArray[u]) y = q.shadowCascadeArray[u];
                        else {
                            G = q;
                            v = u;
                            y = new THREE.DirectionalLight;
                            y.isVirtual = !0;
                            y.onlyShadow = !0;
                            y.castShadow = !0;
                            y.shadowCameraNear = G.shadowCameraNear;
                            y.shadowCameraFar = G.shadowCameraFar;
                            y.shadowCameraLeft = G.shadowCameraLeft;
                            y.shadowCameraRight = G.shadowCameraRight;
                            y.shadowCameraBottom = G.shadowCameraBottom;
                            y.shadowCameraTop = G.shadowCameraTop;
                            y.shadowCameraVisible = G.shadowCameraVisible;
                            y.shadowDarkness = G.shadowDarkness;
                            y.shadowBias = G.shadowCascadeBias[v];
                            y.shadowMapWidth = G.shadowCascadeWidth[v];
                            y.shadowMapHeight = G.shadowCascadeHeight[v];
                            y.pointsWorld = [];
                            y.pointsFrustum = [];
                            z = y.pointsWorld;
                            r = y.pointsFrustum;
                            for (var E = 0; 8 > E; E++) z[E] = new THREE.Vector3, r[E] = new THREE.Vector3;
                            z = G.shadowCascadeNearZ[v];
                            G = G.shadowCascadeFarZ[v];
                            r[0].set(-1, -1, z);
                            r[1].set(1, -1, z);
                            r[2].set(-1,
                                1, z);
                            r[3].set(1, 1, z);
                            r[4].set(-1, -1, G);
                            r[5].set(1, -1, G);
                            r[6].set(-1, 1, G);
                            r[7].set(1, 1, G);
                            y.originalCamera = p;
                            r = new THREE.Gyroscope;
                            r.position = q.shadowCascadeOffset;
                            r.add(y);
                            r.add(y.target);
                            p.add(r);
                            q.shadowCascadeArray[u] = y;
                            console.log("Created virtualLight", y)
                        }
                        v = q;
                        z = u;
                        G = v.shadowCascadeArray[z];
                        G.position.copy(v.position);
                        G.target.position.copy(v.target.position);
                        G.lookAt(G.target);
                        G.shadowCameraVisible = v.shadowCameraVisible;
                        G.shadowDarkness = v.shadowDarkness;
                        G.shadowBias = v.shadowCascadeBias[z];
                        r = v.shadowCascadeNearZ[z];
                        v = v.shadowCascadeFarZ[z];
                        G = G.pointsFrustum;
                        G[0].z = r;
                        G[1].z = r;
                        G[2].z = r;
                        G[3].z = r;
                        G[4].z = v;
                        G[5].z = v;
                        G[6].z = v;
                        G[7].z = v;
                        w[n] = y;
                        n++
                    } else w[n] = q, n++;
        t = 0;
        for (s = w.length; t < s; t++) {
            q = w[t];
            q.shadowMap || (u = THREE.LinearFilter, b.shadowMapType === THREE.PCFSoftShadowMap && (u = THREE.NearestFilter), q.shadowMap = new THREE.WebGLRenderTarget(q.shadowMapWidth, q.shadowMapHeight, {
                minFilter: u,
                magFilter: u,
                format: THREE.RGBAFormat
            }), q.shadowMapSize = new THREE.Vector2(q.shadowMapWidth, q.shadowMapHeight), q.shadowMatrix = new THREE.Matrix4);
            if (!q.shadowCamera) {
                if (q instanceof THREE.SpotLight) q.shadowCamera = new THREE.PerspectiveCamera(q.shadowCameraFov, q.shadowMapWidth / q.shadowMapHeight, q.shadowCameraNear, q.shadowCameraFar);
                else if (q instanceof THREE.DirectionalLight) q.shadowCamera = new THREE.OrthographicCamera(q.shadowCameraLeft, q.shadowCameraRight, q.shadowCameraTop, q.shadowCameraBottom, q.shadowCameraNear, q.shadowCameraFar);
                else {
                    console.error("Unsupported light type for shadow");
                    continue
                }
                l.add(q.shadowCamera);
                !0 === l.autoUpdate && l.updateMatrixWorld()
            }
            q.shadowCameraVisible && !q.cameraHelper && (q.cameraHelper = new THREE.CameraHelper(q.shadowCamera), q.shadowCamera.add(q.cameraHelper));
            if (q.isVirtual && y.originalCamera == p) {
                u = p;
                n = q.shadowCamera;
                r = q.pointsFrustum;
                G = q.pointsWorld;
                i.set(Infinity, Infinity, Infinity);
                k.set(-Infinity, -Infinity, -Infinity);
                for (v = 0; 8 > v; v++) z = G[v], z.copy(r[v]), THREE.ShadowMapPlugin.__projector.unprojectVector(z, u), z.applyMatrix4(n.matrixWorldInverse), z.x < i.x && (i.x = z.x), z.x > k.x && (k.x = z.x), z.y < i.y && (i.y = z.y), z.y > k.y && (k.y = z.y), z.z < i.z && (i.z = z.z), z.z > k.z &&
                    (k.z = z.z);
                n.left = i.x;
                n.right = k.x;
                n.top = k.y;
                n.bottom = i.y;
                n.updateProjectionMatrix()
            }
            n = q.shadowMap;
            r = q.shadowMatrix;
            u = q.shadowCamera;
            u.position.getPositionFromMatrix(q.matrixWorld);
            m.getPositionFromMatrix(q.target.matrixWorld);
            u.lookAt(m);
            u.updateMatrixWorld();
            u.matrixWorldInverse.getInverse(u.matrixWorld);
            q.cameraHelper && (q.cameraHelper.visible = q.shadowCameraVisible);
            q.shadowCameraVisible && q.cameraHelper.update();
            r.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
            r.multiply(u.projectionMatrix);
            r.multiply(u.matrixWorldInverse);
            g.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse);
            h.setFromMatrix(g);
            b.setRenderTarget(n);
            b.clear();
            G = l.__webglObjects;
            q = 0;
            for (n = G.length; q < n; q++)
                if (v = G[q], r = v.object, v.render = !1, r.visible && r.castShadow && (!(r instanceof THREE.Mesh || r instanceof THREE.ParticleSystem) || !r.frustumCulled || h.intersectsObject(r))) r._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse, r.matrixWorld), v.render = !0;
            q = 0;
            for (n = G.length; q < n; q++) v = G[q], v.render && (r = v.object, v = v.buffer, E = r.material instanceof THREE.MeshFaceMaterial ?
                r.material.materials[0] : r.material, z = 0 < r.geometry.morphTargets.length && E.morphTargets, E = r instanceof THREE.SkinnedMesh && E.skinning, z = r.customDepthMaterial ? r.customDepthMaterial : E ? z ? f : e : z ? d : c, v instanceof THREE.BufferGeometry ? b.renderBufferDirect(u, l.__lights, null, z, v, r) : b.renderBuffer(u, l.__lights, null, z, v, r));
            G = l.__webglObjectsImmediate;
            q = 0;
            for (n = G.length; q < n; q++) v = G[q], r = v.object, r.visible && r.castShadow && (r._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse, r.matrixWorld), b.renderImmediateObject(u,
                l.__lights, null, c, r))
        }
        t = b.getClearColor();
        s = b.getClearAlpha();
        a.clearColor(t.r, t.g, t.b, s);
        a.enable(a.BLEND);
        b.shadowMapCullFace === THREE.CullFaceFront && a.cullFace(a.BACK)
    }
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function() {
    var a, b, c, d, e, f, h, g, i, k, m, l, p, t, s, q, n;

    function u(a, b) {
        return a.z !== b.z ? b.z - a.z : b.id - a.id
    }
    var r, v, z, G, w, y, E, A;
    this.init = function(u) {
        r = u.context;
        v = u;
        G = new Float32Array([-0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1, -0.5, 0.5, 0, 1]);
        w = new Uint16Array([0, 1, 2, 0, 2, 3]);
        y = r.createBuffer();
        E = r.createBuffer();
        r.bindBuffer(r.ARRAY_BUFFER, y);
        r.bufferData(r.ARRAY_BUFFER, G, r.STATIC_DRAW);
        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, E);
        r.bufferData(r.ELEMENT_ARRAY_BUFFER, w, r.STATIC_DRAW);
        var u = r.createProgram(),
            D = r.createShader(r.VERTEX_SHADER),
            F = r.createShader(r.FRAGMENT_SHADER);
        r.shaderSource(D, ["precision " + v.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
        r.shaderSource(F, ["precision " + v.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
        r.compileShader(D);
        r.compileShader(F);
        r.attachShader(u, D);
        r.attachShader(u, F);
        r.linkProgram(u);
        A = u;
        q = r.getAttribLocation(A, "position");
        n = r.getAttribLocation(A, "uv");
        a = r.getUniformLocation(A, "uvOffset");
        b = r.getUniformLocation(A, "uvScale");
        c = r.getUniformLocation(A, "rotation");
        d = r.getUniformLocation(A, "scale");
        e = r.getUniformLocation(A, "color");
        f = r.getUniformLocation(A, "map");
        h = r.getUniformLocation(A, "opacity");
        g = r.getUniformLocation(A, "modelViewMatrix");
        i = r.getUniformLocation(A, "projectionMatrix");
        k =
            r.getUniformLocation(A, "fogType");
        m = r.getUniformLocation(A, "fogDensity");
        l = r.getUniformLocation(A, "fogNear");
        p = r.getUniformLocation(A, "fogFar");
        t = r.getUniformLocation(A, "fogColor");
        s = r.getUniformLocation(A, "alphaTest");
        u = document.createElement("canvas");
        u.width = 8;
        u.height = 8;
        D = u.getContext("2d");
        D.fillStyle = "#ffffff";
        D.fillRect(0, 0, u.width, u.height);
        z = new THREE.Texture(u);
        z.needsUpdate = !0
    };
    this.render = function(w, D) {
        var F = w.__webglSprites,
            G = F.length;
        if (G) {
            r.useProgram(A);
            r.enableVertexAttribArray(q);
            r.enableVertexAttribArray(n);
            r.disable(r.CULL_FACE);
            r.enable(r.BLEND);
            r.bindBuffer(r.ARRAY_BUFFER, y);
            r.vertexAttribPointer(q, 2, r.FLOAT, !1, 16, 0);
            r.vertexAttribPointer(n, 2, r.FLOAT, !1, 16, 8);
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, E);
            r.uniformMatrix4fv(i, !1, D.projectionMatrix.elements);
            r.activeTexture(r.TEXTURE0);
            r.uniform1i(f, 0);
            var x = 0,
                I = 0,
                B = w.fog;
            B ? (r.uniform3f(t, B.color.r, B.color.g, B.color.b), B instanceof THREE.Fog ? (r.uniform1f(l, B.near), r.uniform1f(p, B.far), r.uniform1i(k, 1), I = x = 1) : B instanceof THREE.FogExp2 &&
                (r.uniform1f(m, B.density), r.uniform1i(k, 2), I = x = 2)) : (r.uniform1i(k, 0), I = x = 0);
            for (var M, J, ca = [], B = 0; B < G; B++) M = F[B], !1 !== M.visible && (M._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, M.matrixWorld), M.z = -M._modelViewMatrix.elements[14]);
            F.sort(u);
            for (B = 0; B < G; B++) M = F[B], !1 !== M.visible && (J = M.material, r.uniform1f(s, J.alphaTest), r.uniformMatrix4fv(g, !1, M._modelViewMatrix.elements), ca[0] = M.scale.x, ca[1] = M.scale.y, M = w.fog && J.fog ? I : 0, x !== M && (r.uniform1i(k, M), x = M), r.uniform2f(b, J.uvScale.x, J.uvScale.y),
                r.uniform2f(a, J.uvOffset.x, J.uvOffset.y), r.uniform1f(h, J.opacity), r.uniform3f(e, J.color.r, J.color.g, J.color.b), r.uniform1f(c, J.rotation), r.uniform2fv(d, ca), v.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst), v.setDepthTest(J.depthTest), v.setDepthWrite(J.depthWrite), J.map && J.map.image && J.map.image.width ? v.setTexture(J.map, 0) : v.setTexture(z, 0), r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0));
            r.enable(r.CULL_FACE)
        }
    }
};
THREE.DepthPassPlugin = function() {
    this.enabled = !1;
    this.renderTarget = null;
    var a, b, c, d, e, f, h = new THREE.Frustum,
        g = new THREE.Matrix4;
    this.init = function(g) {
        a = g.context;
        b = g;
        var g = THREE.ShaderLib.depthRGBA,
            h = THREE.UniformsUtils.clone(g.uniforms);
        c = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h
        });
        d = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0
        });
        e = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            skinning: !0
        });
        f = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0,
            skinning: !0
        });
        c._shadowPass = !0;
        d._shadowPass = !0;
        e._shadowPass = !0;
        f._shadowPass = !0
    };
    this.render = function(a, b) {
        this.enabled && this.update(a, b)
    };
    this.update = function(i, k) {
        var m, l, p, t, s, q;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        b.setDepthTest(!0);
        !0 === i.autoUpdate && i.updateMatrixWorld();
        k.matrixWorldInverse.getInverse(k.matrixWorld);
        g.multiplyMatrices(k.projectionMatrix,
            k.matrixWorldInverse);
        h.setFromMatrix(g);
        b.setRenderTarget(this.renderTarget);
        b.clear();
        q = i.__webglObjects;
        m = 0;
        for (l = q.length; m < l; m++)
            if (p = q[m], s = p.object, p.render = !1, s.visible && (!(s instanceof THREE.Mesh || s instanceof THREE.ParticleSystem) || !s.frustumCulled || h.intersectsObject(s))) s._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, s.matrixWorld), p.render = !0;
        var n;
        m = 0;
        for (l = q.length; m < l; m++)
            if (p = q[m], p.render && (s = p.object, p = p.buffer, !(s instanceof THREE.ParticleSystem) || s.customDepthMaterial))(n =
                s.material instanceof THREE.MeshFaceMaterial ? s.material.materials[0] : s.material) && b.setMaterialFaces(s.material), t = 0 < s.geometry.morphTargets.length && n.morphTargets, n = s instanceof THREE.SkinnedMesh && n.skinning, t = s.customDepthMaterial ? s.customDepthMaterial : n ? t ? f : e : t ? d : c, p instanceof THREE.BufferGeometry ? b.renderBufferDirect(k, i.__lights, null, t, p, s) : b.renderBuffer(k, i.__lights, null, t, p, s);
        q = i.__webglObjectsImmediate;
        m = 0;
        for (l = q.length; m < l; m++) p = q[m], s = p.object, s.visible && (s._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,
            s.matrixWorld), b.renderImmediateObject(k, i.__lights, null, c, s));
        m = b.getClearColor();
        l = b.getClearAlpha();
        a.clearColor(m.r, m.g, m.b, l);
        a.enable(a.BLEND)
    }
};
THREE.ShaderFlares = {
    lensFlareVertexTexture: {
        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
    },
    lensFlare: {
        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
    }
};

(function() {
    var t = t || {};
    this.Int32Array || (this.Int32Array = Array, this.Float32Array = Array), t.Mat3 = function(t) {
        this.elements = t ? t : [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, t.Mat3.prototype.identity = function() {
        this.elements[0] = 1, this.elements[1] = 0, this.elements[2] = 0, this.elements[3] = 0, this.elements[4] = 1, this.elements[5] = 0, this.elements[6] = 0, this.elements[7] = 0, this.elements[8] = 1
    }, t.Mat3.prototype.setZero = function() {
        var t = this.elements;
        t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0
    }, t.Mat3.prototype.setTrace = function(t) {
        var e = this.elements;
        e[0] = t.x, e[4] = t.y, e[8] = t.z
    }, t.Mat3.prototype.vmult = function(e, i) {
        i = i || new t.Vec3;
        var n = this.elements,
            o = e.x,
            a = e.y,
            s = e.z;
        return i.x = n[0] * o + n[1] * a + n[2] * s, i.y = n[3] * o + n[4] * a + n[5] * s, i.z = n[6] * o + n[7] * a + n[8] * s, i
    }, t.Mat3.prototype.smult = function(t) {
        for (var e = 0; this.elements.length > e; e++) this.elements[e] *= t
    }, t.Mat3.prototype.mmult = function(e) {
        for (var i = new t.Mat3, n = 0; 3 > n; n++)
            for (var o = 0; 3 > o; o++) {
                for (var a = 0, s = 0; 3 > s; s++) a += e.elements[n + 3 * s] * this.elements[s + 3 * o];
                i.elements[n + 3 * o] = a
            }
        return i
    }, t.Mat3.prototype.solve = function(e, i) {
        i = i || new t.Vec3;
        for (var n = 3, o = 4, a = [], s = 0; n * o > s; s++) a.push(0);
        var s, r;
        for (s = 0; 3 > s; s++)
            for (r = 0; 3 > r; r++) a[s + o * r] = this.elements[s + 3 * r];
        a[3] = e.x, a[7] = e.y, a[11] = e.z;
        var h, c, l = 3,
            u = l,
            p = 4;
        do {
            if (s = u - l, 0 === a[s + o * s])
                for (r = s + 1; u > r; r++)
                    if (0 !== a[s + o * r]) {
                        h = p;
                        do c = p - h, a[c + o * s] += a[c + o * r]; while (--h);
                        break
                    }
            if (0 !== a[s + o * s])
                for (r = s + 1; u > r; r++) {
                    var d = a[s + o * r] / a[s + o * s];
                    h = p;
                    do c = p - h, a[c + o * r] = s >= c ? 0 : a[c + o * r] - a[c + o * s] * d; while (--h)
                }
        } while (--l);
        if (i.z = a[2 * o + 3] / a[2 * o + 2], i.y = (a[1 * o + 3] - a[1 * o + 2] * i.z) / a[1 * o + 1], i.x = (a[0 * o + 3] - a[0 * o + 2] * i.z - a[0 * o + 1] * i.y) / a[0 * o + 0], isNaN(i.x) || isNaN(i.y) || isNaN(i.z) || 1 / 0 === i.x || 1 / 0 === i.y || 1 / 0 === i.z) throw "Could not solve equation! Got x=[" + ("" + i) + "], b=[" + ("" + e) + "], A=[" + ("" + this) + "]";
        return i
    }, t.Mat3.prototype.e = function(t, e, i) {
        return void 0 === i ? this.elements[e + 3 * t] : (this.elements[e + 3 * t] = i, void 0)
    }, t.Mat3.prototype.copy = function(e) {
        e = e || new t.Mat3;
        for (var i = 0; this.elements.length > i; i++) e.elements[i] = this.elements[i];
        return e
    }, t.Mat3.prototype.toString = function() {
        for (var t = "", e = ",", i = 0; 9 > i; i++) t += this.elements[i] + e;
        return t
    }, t.Mat3.prototype.reverse = function(e) {
        e = e || new t.Mat3;
        for (var i = 3, n = 6, o = [], a = 0; i * n > a; a++) o.push(0);
        var a, s;
        for (a = 0; 3 > a; a++)
            for (s = 0; 3 > s; s++) o[a + n * s] = this.elements[a + 3 * s];
        o[3] = 1, o[9] = 0, o[15] = 0, o[4] = 0, o[10] = 1, o[16] = 0, o[5] = 0, o[11] = 0, o[17] = 1;
        var r, h, c = 3,
            l = c,
            u = n;
        do {
            if (a = l - c, 0 === o[a + n * a])
                for (s = a + 1; l > s; s++)
                    if (0 !== o[a + n * s]) {
                        r = u;
                        do h = u - r, o[h + n * a] += o[h + n * s]; while (--r);
                        break
                    }
            if (0 !== o[a + n * a])
                for (s = a + 1; l > s; s++) {
                    var p = o[a + n * s] / o[a + n * a];
                    r = u;
                    do h = u - r, o[h + n * s] = a >= h ? 0 : o[h + n * s] - o[h + n * a] * p; while (--r)
                }
        } while (--c);
        a = 2;
        do {
            s = a - 1;
            do {
                var p = o[a + n * s] / o[a + n * a];
                r = n;
                do h = n - r, o[h + n * s] = o[h + n * s] - o[h + n * a] * p; while (--r)
            } while (s--)
        } while (--a);
        a = 2;
        do {
            var p = 1 / o[a + n * a];
            r = n;
            do h = n - r, o[h + n * a] = o[h + n * a] * p; while (--r)
        } while (a--);
        a = 2;
        do {
            s = 2;
            do {
                if (h = o[i + s + n * a], isNaN(h) || 1 / 0 === h) throw "Could not reverse! A=[" + ("" + this) + "]";
                e.e(a, s, h)
            } while (s--)
        } while (a--);
        return e
    }, t.Vec3 = function(t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }, t.Vec3.prototype.cross = function(e, i) {
        var n = e.x,
            o = e.y,
            a = e.z,
            s = this.x,
            r = this.y,
            h = this.z;
        return i = i || new t.Vec3, i.x = r * a - h * o, i.y = h * n - s * a, i.z = s * o - r * n, i
    }, t.Vec3.prototype.set = function(t, e, i) {
        return this.x = t, this.y = e, this.z = i, this
    }, t.Vec3.prototype.vadd = function(e, i) {
        return i ? (i.x = e.x + this.x, i.y = e.y + this.y, i.z = e.z + this.z, void 0) : new t.Vec3(this.x + e.x, this.y + e.y, this.z + e.z)
    }, t.Vec3.prototype.vsub = function(e, i) {
        return i ? (i.x = this.x - e.x, i.y = this.y - e.y, i.z = this.z - e.z, void 0) : new t.Vec3(this.x - e.x, this.y - e.y, this.z - e.z)
    }, t.Vec3.prototype.crossmat = function() {
        return new t.Mat3([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
    }, t.Vec3.prototype.normalize = function() {
        var t = this.x,
            e = this.y,
            i = this.z,
            n = Math.sqrt(t * t + e * e + i * i);
        if (n > 0) {
            var o = 1 / n;
            this.x *= o, this.y *= o, this.z *= o
        } else this.x = 0, this.y = 0, this.z = 0;
        return n
    }, t.Vec3.prototype.unit = function(e) {
        e = e || new t.Vec3;
        var i = this.x,
            n = this.y,
            o = this.z,
            a = Math.sqrt(i * i + n * n + o * o);
        return a > 0 ? (a = 1 / a, e.x = i * a, e.y = n * a, e.z = o * a) : (e.x = 1, e.y = 0, e.z = 0), e
    }, t.Vec3.prototype.norm = function() {
        var t = this.x,
            e = this.y,
            i = this.z;
        return Math.sqrt(t * t + e * e + i * i)
    }, t.Vec3.prototype.norm2 = function() {
        return this.dot(this)
    }, t.Vec3.prototype.distanceTo = function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            o = t.x,
            a = t.y,
            s = t.z;
        return Math.sqrt((o - e) * (o - e) + (a - i) * (a - i) + (s - n) * (s - n))
    }, t.Vec3.prototype.mult = function(e, i) {
        i = i || new t.Vec3;
        var n = this.x,
            o = this.y,
            a = this.z;
        return i.x = e * n, i.y = e * o, i.z = e * a, i
    }, t.Vec3.prototype.dot = function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }, t.Vec3.prototype.isZero = function() {
        return 0 === this.x && 0 === this.y && 0 === this.z
    }, t.Vec3.prototype.negate = function(e) {
        return e = e || new t.Vec3, e.x = -this.x, e.y = -this.y, e.z = -this.z, e
    };
    var e = new t.Vec3,
        i = new t.Vec3;
    t.Vec3.prototype.tangents = function(t, n) {
        var o = this.norm();
        if (o > 0) {
            var a = e,
                s = 1 / o;
            a.set(this.x * s, this.y * s, this.z * s);
            var r = i;.9 > Math.abs(a.x) ? (r.set(1, 0, 0), a.cross(r, t)) : (r.set(0, 1, 0), a.cross(r, t)), a.cross(t, n)
        } else t.set(1, 0, 0).normalize(), n.set(0, 1, 0).normalize()
    }, t.Vec3.prototype.toString = function() {
        return this.x + "," + this.y + "," + this.z
    }, t.Vec3.prototype.copy = function(e) {
        return e = e || new t.Vec3, e.x = this.x, e.y = this.y, e.z = this.z, e
    }, t.Vec3.prototype.lerp = function(t, e, i) {
        var n = this.x,
            o = this.y,
            a = this.z;
        i.x = n + (t.x - n) * e, i.y = o + (t.y - o) * e, i.z = a + (t.z - a) * e
    }, t.Vec3.prototype.almostEquals = function(t, e) {
        return void 0 === e && (e = 1e-6), Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e ? !1 : !0
    }, t.Vec3.prototype.almostZero = function(t) {
        return void 0 === t && (t = 1e-6), Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t ? !1 : !0
    }, t.Quaternion = function(t, e, i, n) {
        this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== i ? i : 0, this.w = void 0 !== n ? n : 1
    }, t.Quaternion.prototype.set = function(t, e, i, n) {
        this.x = t, this.y = e, this.z = i, this.w = n
    }, t.Quaternion.prototype.toString = function() {
        return this.x + "," + this.y + "," + this.z + "," + this.w
    }, t.Quaternion.prototype.setFromAxisAngle = function(t, e) {
        var i = Math.sin(.5 * e);
        this.x = t.x * i, this.y = t.y * i, this.z = t.z * i, this.w = Math.cos(.5 * e)
    }, t.Quaternion.prototype.toAxisAngle = function(e) {
        e = e || new t.Vec3, this.normalize();
        var i = 2 * Math.acos(this.w),
            n = Math.sqrt(1 - this.w * this.w);
        return .001 > n ? (e.x = this.x, e.y = this.y, e.z = this.z) : (e.x = this.x / n, e.y = this.y / n, e.z = this.z / n), [e, i]
    }, t.Quaternion.prototype.setFromVectors = function(t, e) {
        var i = t.cross(e);
        this.x = i.x, this.y = i.y, this.z = i.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e), this.normalize()
    };
    var n = new t.Vec3,
        o = new t.Vec3,
        a = new t.Vec3;
    t.Quaternion.prototype.mult = function(e, i) {
        i = i || new t.Quaternion;
        var s = this.w,
            r = n,
            h = o,
            c = a;
        return r.set(this.x, this.y, this.z), h.set(e.x, e.y, e.z), i.w = s * e.w - r.dot(h), r.cross(h, c), i.x = s * h.x + e.w * r.x + c.x, i.y = s * h.y + e.w * r.y + c.y, i.z = s * h.z + e.w * r.z + c.z, i
    }, t.Quaternion.prototype.inverse = function(e) {
        var i = this.x,
            n = this.y,
            o = this.z,
            a = this.w;
        e = e || new t.Quaternion, this.conjugate(e);
        var s = 1 / (i * i + n * n + o * o + a * a);
        return e.x *= s, e.y *= s, e.z *= s, e.w *= s, e
    }, t.Quaternion.prototype.conjugate = function(e) {
        return e = e || new t.Quaternion, e.x = -this.x, e.y = -this.y, e.z = -this.z, e.w = this.w, e
    }, t.Quaternion.prototype.normalize = function() {
        var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t)
    }, t.Quaternion.prototype.normalizeFast = function() {
        var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
        0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, this.z *= t, this.w *= t)
    }, t.Quaternion.prototype.vmult = function(e, i) {
        if (i = i || new t.Vec3, 0 === this.w) i.x = e.x, i.y = e.y, i.z = e.z;
        else {
            var n = e.x,
                o = e.y,
                a = e.z,
                s = this.x,
                r = this.y,
                h = this.z,
                c = this.w,
                l = c * n + r * a - h * o,
                u = c * o + h * n - s * a,
                p = c * a + s * o - r * n,
                d = -s * n - r * o - h * a;
            i.x = l * c + d * -s + u * -h - p * -r, i.y = u * c + d * -r + p * -s - l * -h, i.z = p * c + d * -h + l * -r - u * -s
        }
        return i
    }, t.Quaternion.prototype.copy = function(t) {
        t.x = this.x, t.y = this.y, t.z = this.z, t.w = this.w
    }, t.Quaternion.prototype.toEuler = function(t, e) {
        e = e || "YZX";
        var i, n, o, a = this.x,
            s = this.y,
            r = this.z,
            h = this.w;
        switch (e) {
            case "YZX":
                var c = a * s + r * h;
                if (c > .499 && (i = 2 * Math.atan2(a, h), n = Math.PI / 2, o = 0), -.499 > c && (i = -2 * Math.atan2(a, h), n = -Math.PI / 2, o = 0), isNaN(i)) {
                    var l = a * a,
                        u = s * s,
                        p = r * r;
                    i = Math.atan2(2 * s * h - 2 * a * r, 1 - 2 * u - 2 * p), n = Math.asin(2 * c), o = Math.atan2(2 * a * h - 2 * s * r, 1 - 2 * l - 2 * p)
                }
                break;
            default:
                throw Error("Euler order " + e + " not supported yet.")
        }
        t.y = i, t.z = n, t.x = o
    }, t.EventTarget = function() {
        var t = {};
        this.addEventListener = function(e, i) {
            void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i)
        }, this.dispatchEvent = function(e) {
            for (var i in t[e.type]) t[e.type][i](e)
        }, this.removeEventListener = function(e, i) {
            var n = t[e].indexOf(i); - 1 !== n && t[e].splice(n, 1)
        }
    }, t.ObjectPool = function() {
        this.objects = [], this.type = Object
    }, t.ObjectPool.prototype.release = function() {
        for (var t = arguments.length, e = 0; e !== t; e++) this.objects.push(arguments[e])
    }, t.ObjectPool.prototype.get = function() {
        return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
    }, t.ObjectPool.prototype.constructObject = function() {
        throw Error("constructObject() not implemented in this ObjectPool subclass yet!")
    }, t.Vec3Pool = function() {
        t.ObjectPool.call(this), this.type = t.Vec3
    }, t.Vec3Pool.prototype = new t.ObjectPool, t.Vec3Pool.prototype.constructObject = function() {
        return new t.Vec3
    }, t.Shape = function() {
        this.type = 0, this.aabbmin = new t.Vec3, this.aabbmax = new t.Vec3, this.boundingSphereRadius = 0, this.boundingSphereRadiusNeedsUpdate = !0
    }, t.Shape.prototype.constructor = t.Shape, t.Shape.prototype.computeBoundingSphereRadius = function() {
        throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
    }, t.Shape.prototype.getBoundingSphereRadius = function() {
        return this.boundingSphereRadiusNeedsUpdate && this.computeBoundingSphereRadius(), this.boundingSphereRadius
    }, t.Shape.prototype.volume = function() {
        throw "volume() not implemented for shape type " + this.type
    }, t.Shape.prototype.calculateLocalInertia = function() {
        throw "calculateLocalInertia() not implemented for shape type " + this.type
    };
    var s = new t.Vec3,
        r = new t.Vec3;
    t.Shape.prototype.calculateTransformedInertia = function(e, i, n) {
        n = n || new t.Vec3;
        var o = s,
            a = r;
        return this.calculateLocalInertia(e, o), i.vmult(o, a), n.x = Math.abs(a.x), n.y = Math.abs(a.y), n.z = Math.abs(a.z), n
    }, t.Shape.calculateLocalAABB = function() {
        throw Error(".calculateLocalAABB is not implemented for this Shape yet!")
    }, t.Shape.types = {
        SPHERE: 1,
        PLANE: 2,
        BOX: 4,
        COMPOUND: 8,
        CONVEXPOLYHEDRON: 16
    }, t.Body = function(e) {
        t.EventTarget.apply(this), this.type = e, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new t.Vec3, this.collisionFilterGroup = 1, this.collisionFilterMask = 1
    }, t.Body.DYNAMIC = 1, t.Body.STATIC = 2, t.Body.KINEMATIC = 4, t.Particle = function(e, i) {
        if ("number" != typeof e) throw Error("Argument 1 (mass) must be a number.");
        if (i !== void 0 && !(i instanceof t.Material)) throw Error("Argument 3 (material) must be an instance of CANNON.Material.");
        t.Body.call(this, "particle"), this.position = new t.Vec3, this.initPosition = new t.Vec3, this.velocity = new t.Vec3, this.initVelocity = new t.Vec3, this.force = new t.Vec3, this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = i, this.linearDamping = .01, this.motionstate = 0 >= e ? t.Body.STATIC : t.Body.DYNAMIC, this.allowSleep = !0, this.sleepState = 0, this.sleepSpeedLimit = .1, this.sleepTimeLimit = 1, this.timeLastSleepy = 0
    }, t.Particle.prototype = new t.Body, t.Particle.prototype.constructor = t.Particle, t.Particle.prototype.isAwake = function() {
        return 0 === this.sleepState
    }, t.Particle.prototype.isSleepy = function() {
        return 1 === this.sleepState
    }, t.Particle.prototype.isSleeping = function() {
        return 2 === this.sleepState
    }, t.Particle.prototype.wakeUp = function() {
        var t = this.sleepState;
        this.sleepState = 0, 2 === t && this.dispatchEvent({
            type: "wakeup"
        })
    }, t.Particle.prototype.sleep = function() {
        this.sleepState = 2
    }, t.Particle.prototype.sleepTick = function(t) {
        if (this.allowSleep) {
            var e = this.sleepState,
                i = this.velocity.norm2(),
                n = Math.pow(this.sleepSpeedLimit, 2);
            0 === e && n > i ? (this.sleepState = 1, this.timeLastSleepy = t, this.dispatchEvent({
                type: "sleepy"
            })) : 1 === e && i > n ? this.wakeUp() : 1 === e && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleepState = 2, this.dispatchEvent({
                type: "sleep"
            }))
        }
    }, t.RigidBody = function(e, i, n) {
        if ("number" != typeof e) throw Error("Argument 1 (mass) must be a number.");
        if (n !== void 0 && !(n instanceof t.Material)) throw Error("Argument 3 (material) must be an instance of CANNON.Material.");
        t.Particle.call(this, e, n), this.tau = new t.Vec3, this.quaternion = new t.Quaternion, this.initQuaternion = new t.Quaternion, this.angularVelocity = new t.Vec3, this.initAngularVelocity = new t.Vec3, this.shape = i, this.inertia = new t.Vec3, i.calculateLocalInertia(e, this.inertia), this.inertiaWorld = new t.Vec3, this.inertia.copy(this.inertiaWorld), this.inertiaWorldAutoUpdate = !1, this.invInertia = new t.Vec3(this.inertia.x > 0 ? 1 / this.inertia.x : 0, this.inertia.y > 0 ? 1 / this.inertia.y : 0, this.inertia.z > 0 ? 1 / this.inertia.z : 0), this.invInertiaWorld = new t.Vec3, this.invInertia.copy(this.invInertiaWorld), this.invInertiaWorldAutoUpdate = !1, this.angularDamping = .01, this.aabbmin = new t.Vec3, this.aabbmax = new t.Vec3, this.aabbNeedsUpdate = !0, this.wlambda = new t.Vec3
    }, t.RigidBody.prototype = new t.Particle(0), t.RigidBody.prototype.constructor = t.RigidBody, t.RigidBody.prototype.computeAABB = function() {
        this.shape.calculateWorldAABB(this.position, this.quaternion, this.aabbmin, this.aabbmax), this.aabbNeedsUpdate = !1
    };
    var h = new t.Vec3,
        c = new t.Vec3;
    t.RigidBody.prototype.applyForce = function(t, e) {
        var i = h;
        e.vsub(this.position, i);
        var n = c;
        i.cross(t, n), this.force.vadd(t, this.force), this.tau.vadd(n, this.tau)
    };
    var l = new t.Vec3,
        u = new t.Vec3,
        p = new t.Vec3;
    t.RigidBody.prototype.applyImpulse = function(t, e) {
        var i = l;
        e.vsub(this.position, i);
        var n = u;
        t.copy(n), n.mult(this.invMass, n), this.velocity.vadd(n, this.velocity);
        var o = p;
        i.cross(t, o), o.x *= this.invInertia.x, o.y *= this.invInertia.y, o.z *= this.invInertia.z, this.angularVelocity.vadd(o, this.angularVelocity)
    }, t.Sphere = function(e) {
        t.Shape.call(this), this.radius = void 0 !== e ? Number(e) : 1, this.type = t.Shape.types.SPHERE
    }, t.Sphere.prototype = new t.Shape, t.Sphere.prototype.constructor = t.Sphere, t.Sphere.prototype.calculateLocalInertia = function(e, i) {
        i = i || new t.Vec3;
        var n = 2 * e * this.radius * this.radius / 5;
        return i.x = n, i.y = n, i.z = n, i
    }, t.Sphere.prototype.volume = function() {
        return 4 * Math.PI * this.radius / 3
    }, t.Sphere.prototype.computeBoundingSphereRadius = function() {
        this.boundingSphereRadiusNeedsUpdate = !1, this.boundingSphereRadius = this.radius
    }, t.Sphere.prototype.calculateWorldAABB = function(t, e, i, n) {
        for (var o = this.radius, a = ["x", "y", "z"], s = 0; a.length > s; s++) {
            var r = a[s];
            i[r] = t[r] - o, n[r] = t[r] + o
        }
    }, t.SPHSystem = function() {
        this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = []
    }, t.SPHSystem.prototype.add = function(t) {
        this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([])
    }, t.SPHSystem.prototype.remove = function(t) {
        var e = this.particles.indexOf(t); - 1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
    };
    var d = new t.Vec3;
    t.SPHSystem.prototype.getNeighbors = function(t, e) {
        for (var i = this.particles.length, n = t.id, o = this.smoothingRadius * this.smoothingRadius, a = d, s = 0; s !== i; s++) {
            var r = this.particles[s];
            r.position.vsub(t.position, a), n !== r.id && o > a.norm2() && e.push(r)
        }
    };
    var v = new t.Vec3,
        y = new t.Vec3,
        f = new t.Vec3,
        m = new t.Vec3,
        w = new t.Vec3,
        b = new t.Vec3;
    t.SPHSystem.prototype.update = function() {
        for (var t = this.particles.length, e = v, i = this.speedOfSound, n = this.eps, o = 0; o !== t; o++) {
            var a = this.particles[o],
                s = this.neighbors[o];
            s.length = 0, this.getNeighbors(a, s), s.push(this.particles[o]);
            for (var r = s.length, h = 0, c = 0; c !== r; c++) {
                a.position.vsub(s[c].position, e);
                var l = e.norm(),
                    u = this.w(l);
                h += s[c].mass * u
            }
            this.densities[o] = h, this.pressures[o] = i * i * (this.densities[o] - this.density)
        }
        for (var p = y, d = f, x = m, g = w, V = b, o = 0; o !== t; o++) {
            var z = this.particles[o];
            p.set(0, 0, 0), d.set(0, 0, 0);
            for (var E, S, s = this.neighbors[o], r = s.length, c = 0; c !== r; c++) {
                var N = s[c];
                z.position.vsub(N.position, g);
                var M = g.norm();
                E = -N.mass * (this.pressures[o] / (this.densities[o] * this.densities[o] + n) + this.pressures[c] / (this.densities[c] * this.densities[c] + n)), this.gradw(g, x), x.mult(E, x), p.vadd(x, p), N.velocity.vsub(z.velocity, V), V.mult(1 / (1e-4 + this.densities[o] * this.densities[c]) * this.viscosity * N.mass, V), S = this.nablaw(M), V.mult(S, V), d.vadd(V, d)
            }
            d.mult(z.mass, d), p.mult(z.mass, p), z.force.vadd(d, z.force), z.force.vadd(p, z.force)
        }
    }, t.SPHSystem.prototype.w = function(t) {
        var e = this.smoothingRadius;
        return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3)
    }, t.SPHSystem.prototype.gradw = function(t, e) {
        var i = t.norm(),
            n = this.smoothingRadius;
        t.mult(945 / (32 * Math.PI * Math.pow(n, 9)) * Math.pow(n * n - i * i, 2), e)
    }, t.SPHSystem.prototype.nablaw = function(t) {
        var e = this.smoothingRadius,
            i = 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e);
        return i
    }, t.Box = function(e) {
        t.Shape.call(this), this.halfExtents = e, this.type = t.Shape.types.BOX, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation()
    }, t.Box.prototype = new t.Shape, t.Box.prototype.constructor = t.Box, t.Box.prototype.updateConvexPolyhedronRepresentation = function() {
        var e = this.halfExtents.x,
            i = this.halfExtents.y,
            n = this.halfExtents.z,
            o = t.Vec3,
            a = new t.ConvexPolyhedron([new o(-e, -i, -n), new o(e, -i, -n), new o(e, i, -n), new o(-e, i, -n), new o(-e, -i, n), new o(e, -i, n), new o(e, i, n), new o(-e, i, n)], [
                [3, 2, 1, 0],
                [4, 5, 6, 7],
                [5, 4, 1, 0],
                [2, 3, 6, 7],
                [0, 4, 7, 3],
                [1, 2, 5, 6]
            ], [new o(0, 0, -1), new o(0, 0, 1), new o(0, -1, 0), new o(0, 1, 0), new o(-1, 0, 0), new o(1, 0, 0)]);
        this.convexPolyhedronRepresentation = a
    }, t.Box.prototype.calculateLocalInertia = function(e, i) {
        i = i || new t.Vec3;
        var n = this.halfExtents;
        return i.x = 1 / 12 * e * (2 * 2 * n.y * n.y + 2 * 2 * n.z * n.z), i.y = 1 / 12 * e * (2 * 2 * n.x * n.x + 2 * 2 * n.z * n.z), i.z = 1 / 12 * e * (2 * 2 * n.y * n.y + 2 * 2 * n.x * n.x), i
    }, t.Box.prototype.getSideNormals = function(t, e) {
        var i = t,
            n = this.halfExtents;
        if (i[0].set(n.x, 0, 0), i[1].set(0, n.y, 0), i[2].set(0, 0, n.z), i[3].set(-n.x, 0, 0), i[4].set(0, -n.y, 0), i[5].set(0, 0, -n.z), void 0 !== e)
            for (var o = 0; o !== i.length; o++) e.vmult(i[o], i[o]);
        return i
    }, t.Box.prototype.volume = function() {
        return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
    }, t.Box.prototype.computeBoundingSphereRadius = function() {
        this.boundingSphereRadius = this.halfExtents.norm(), this.boundingSphereRadiusNeedsUpdate = !1
    };
    var x = new t.Vec3;
    new t.Vec3, t.Box.prototype.forEachWorldCorner = function(t, e, i) {
        for (var n = this.halfExtents, o = [
                [n.x, n.y, n.z],
                [-n.x, n.y, n.z],
                [-n.x, -n.y, n.z],
                [-n.x, -n.y, -n.z],
                [n.x, -n.y, -n.z],
                [n.x, n.y, -n.z],
                [-n.x, n.y, -n.z],
                [n.x, -n.y, n.z]
            ], a = 0; o.length > a; a++) x.set(o[a][0], o[a][1], o[a][2]), e.vmult(x, x), t.vadd(x, x), i(x.x, x.y, x.z)
    }, t.Box.prototype.calculateWorldAABB = function(t, e, i, n) {
        i.set(1 / 0, 1 / 0, 1 / 0), n.set(-1 / 0, -1 / 0, -1 / 0), this.forEachWorldCorner(t, e, function(t, e, o) {
            t > n.x && (n.x = t), e > n.y && (n.y = e), o > n.z && (n.z = o), i.x > t && (i.x = t), i.y > e && (i.y = e), i.z > o && (i.z = o)
        })
    }, t.Plane = function() {
        t.Shape.call(this), this.type = t.Shape.types.PLANE, this.worldNormal = new t.Vec3, this.worldNormalNeedsUpdate = !0
    }, t.Plane.prototype = new t.Shape, t.Plane.prototype.constructor = t.Plane, t.Plane.prototype.computeWorldNormal = function(t) {
        var e = this.worldNormal;
        e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1
    }, t.Plane.prototype.calculateLocalInertia = function(e, i) {
        return i = i || new t.Vec3
    }, t.Plane.prototype.volume = function() {
        return 1 / 0
    };
    var g = new t.Vec3;
    t.Plane.prototype.calculateWorldAABB = function(t, e, i, n) {
        g.set(0, 0, 1), e.vmult(g, g), i.set(-1 / 0, -1 / 0, -1 / 0), n.set(1 / 0, 1 / 0, 1 / 0), 1 === g.x && (n.x = t.x), 1 === g.y && (n.y = t.y), 1 === g.z && (n.z = t.z), -1 === g.x && (i.x = t.x), -1 === g.y && (i.y = t.y), -1 === g.z && (i.z = t.z)
    }, t.Compound = function() {
        t.Shape.call(this), this.type = t.Shape.types.COMPOUND, this.childShapes = [], this.childOffsets = [], this.childOrientations = []
    }, t.Compound.prototype = new t.Shape, t.Compound.prototype.constructor = t.Compound, t.Compound.prototype.addChild = function(e, i, n) {
        i = i || new t.Vec3, n = n || new t.Quaternion, this.childShapes.push(e), this.childOffsets.push(i), this.childOrientations.push(n)
    }, t.Compound.prototype.volume = function() {
        for (var t = 0, e = this.childShapes.length, i = 0; i !== e; i++) t += this.childShapes[i].volume();
        return t
    };
    var V = new t.Vec3,
        z = new t.Vec3;
    t.Compound.prototype.calculateLocalInertia = function(e, i) {
        i = i || new t.Vec3;
        for (var n = this.volume(), o = z, a = 0, s = this.childShapes.length; a !== s; a++) {
            var r = this.childShapes[a],
                h = this.childOffsets[a];
            this.childOrientations[a];
            var c = r.volume() / n * e;
            r.calculateLocalInertia(c, o), i.vadd(o, i);
            var l = V;
            l.set(c * h.x * h.x, c * h.y * h.y, c * h.z * h.z), i.vadd(l, i)
        }
        return i
    }, t.Compound.prototype.computeBoundingSphereRadius = function() {
        for (var t = 0, e = 0; this.childShapes.length > e; e++) {
            var i = this.childShapes[e];
            i.boundingSphereRadiusNeedsUpdate && i.computeBoundingSphereRadius();
            var n = this.childOffsets[e].norm() + i.boundingSphereRadius;
            n > t && (t = n)
        }
        this.boundingSphereRadius = t, this.boundingSphereRadiusNeedsUpdate = !1
    };
    var E = new t.Vec3,
        S = new t.Vec3,
        N = new t.Vec3,
        M = new t.Quaternion;
    t.Compound.prototype.calculateWorldAABB = function(t, e, i, n) {
        var o = this.childShapes.length;
        i.set(1 / 0, 1 / 0, 1 / 0), n.set(-1 / 0, -1 / 0, -1 / 0);
        for (var a = 0; a !== o; a++) this.childOffsets[a].copy(N), e.vmult(N, N), t.vadd(N, N), e.mult(this.childOrientations[a], M), this.childShapes[a].calculateWorldAABB(N, M, S, E), S.x < i.x && (i.x = S.x), S.y < i.y && (i.y = S.y), S.z < i.z && (i.z = S.z), E.x > n.x && (n.x = E.x), E.y > n.y && (n.y = E.y), E.z > n.z && (n.z = E.z)
    }, t.ConvexPolyhedron = function(e, i) {
        function n(t, e, i, n) {
            e.vsub(t, c), i.vsub(e, h), h.cross(c, n), n.isZero() || n.normalize()
        }

        function o(t, e, i, n, o) {
            for (var a = t.vertices.length, s = null, r = null, h = t.vertices, c = 0; a > c; c++) {
                h[c].copy(V), n.vmult(V, V), V.vadd(i, V);
                var l = V.dot(e);
                (null === s || l > s) && (s = l), (null === r || r > l) && (r = l)
            }
            if (r > s) {
                var u = r;
                r = s, s = u
            }
            o[0] = s, o[1] = r
        }

        function a(t, e) {
            var i = r.faces[t],
                o = r.vertices[i[0]],
                a = r.vertices[i[1]],
                s = r.vertices[i[2]];
            return n(o, a, s, e)
        }

        function s(t) {
            var e = r.faces[t],
                i = r.faceNormals[t],
                n = r.vertices[e[0]],
                o = -i.dot(n);
            return o
        }
        var r = this;
        t.Shape.call(this), this.type = t.Shape.types.CONVEXPOLYHEDRON;
        var h = new t.Vec3,
            c = new t.Vec3;
        this.vertices = e || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = i || [], this.faceNormals = [];
        for (var l = 0; this.faces.length > l; l++) {
            for (var u = 0; this.faces[l].length > u; u++)
                if (!this.vertices[this.faces[l][u]]) throw Error("Vertex " + this.faces[l][u] + " not found!");
            var p = new t.Vec3;
            a(l, p), p.negate(p), this.faceNormals.push(p);
            var d = this.vertices[this.faces[l][0]];
            if (0 > p.dot(d)) {
                console.warn("Face normal " + l + " (" + ("" + p) + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                for (var u = 0; this.faces[l].length > u; u++) console.warn("Vertex " + this.faces[l][u] + ": (" + ("" + this.vertices[i[l][u]]) + ")")
            }
        }
        this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = [];
        for (var v = this.vertices.length, y = 0; v > y; y++) {
            var f = this.vertices[y];
            if (!(f instanceof t.Vec3)) throw "Argument 1 must be instance of CANNON.Vec3";
            this.uniqueEdges.push(f)
        }
        for (var l = 0; this.faces.length > l; l++)
            for (var m = this.faces[l].length, w = m, u = 0; w > u; u++) {
                var b = (u + 1) % m,
                    x = new t.Vec3;
                this.vertices[this.faces[l][u]].vsub(this.vertices[this.faces[l][b]], x), x.normalize();
                for (var g = !1, f = 0; this.uniqueEdges.length > f; f++)
                    if (this.uniqueEdges[f].almostEquals(x) || this.uniqueEdges[f].almostEquals(x)) {
                        g = !0;
                        break
                    }
                g || this.uniqueEdges.push(x), x && (x.face1 = l)
            }
        var V = new t.Vec3;
        this.testSepAxis = function(t, e, i, n, a, s) {
            var r = [],
                h = [],
                c = this;
            o(c, t, i, n, r), o(e, t, a, s, h);
            var l = r[0],
                u = r[1],
                p = h[0],
                d = h[1];
            if (d > l || u > p) return !1;
            var v = l - d,
                y = p - u,
                f = y > v ? v : y;
            return f
        };
        var z = new t.Vec3,
            E = new t.Vec3,
            S = new t.Vec3,
            N = new t.Vec3,
            M = new t.Vec3,
            P = new t.Vec3;
        this.findSeparatingAxis = function(t, e, i, n, o, a) {
            for (var s = 1 / 0, r = this, h = 0, c = r.faces.length, l = 0; c > l; l++) {
                r.faceNormals[l].copy(z), i.vmult(z, z);
                var u = r.testSepAxis(z, t, e, i, n, o);
                if (u === !1) return !1;
                s > u && (s = u, z.copy(a))
            }
            for (var p = t.faces.length, l = 0; p > l; l++) {
                t.faceNormals[l].copy(E), o.vmult(E, E), h++;
                var u = r.testSepAxis(E, t, e, i, n, o);
                if (u === !1) return !1;
                s > u && (s = u, E.copy(a))
            }
            for (var d = 0, v = 0; r.uniqueEdges.length > v; v++) {
                r.uniqueEdges[v].copy(N), i.vmult(N, N);
                for (var y = 0; t.uniqueEdges.length > y; y++)
                    if (t.uniqueEdges[y].copy(M), o.vmult(M, M), N.cross(M, P), d++, !P.almostZero()) {
                        P.normalize();
                        var f = r.testSepAxis(P, t, e, i, n, o);
                        if (f === !1) return !1;
                        s > f && (s = f, P.copy(a))
                    }
            }
            return n.vsub(e, S), S.dot(a) > 0 && a.negate(a), !0
        };
        var q = new t.Vec3;
        this.clipAgainstHull = function(e, i, n, o, a, s, r, h, c) {
            if (!(e instanceof t.Vec3)) throw Error("posA must be Vec3");
            if (!(i instanceof t.Quaternion)) throw Error("quatA must be Quaternion");
            for (var l = -1, u = -1 / 0, p = 0; n.faces.length > p; p++) {
                n.faceNormals[p].copy(q), a.vmult(q, q);
                var d = q.dot(s);
                d > u && (u = d, l = p)
            }
            for (var v = [], y = n.faces[l], f = y.length, m = 0; f > m; m++) {
                var w = n.vertices[y[m]],
                    b = new t.Vec3;
                w.copy(b), a.vmult(b, b), o.vadd(b, b), v.push(b)
            }
            l >= 0 && this.clipFaceAgainstHull(s, e, i, v, r, h, c)
        };
        var j = new t.Vec3,
            C = new t.Vec3,
            B = new t.Vec3,
            I = new t.Vec3,
            R = new t.Vec3,
            O = new t.Vec3,
            A = new t.Vec3,
            T = new t.Vec3;
        this.clipFaceAgainstHull = function(e, i, n, o, a, r, h) {
            if (!(e instanceof t.Vec3)) throw Error("sep normal must be vector");
            if (!(o instanceof Array)) throw Error("world verts must be array");
            a = Number(a), r = Number(r);
            for (var c = this, l = [], u = o, p = l, d = -1, v = 1 / 0, y = 0; c.faces.length > y; y++) {
                c.faceNormals[y].copy(j), n.vmult(j, j);
                var f = j.dot(e);
                v > f && (v = f, d = y)
            }
            if (0 > d) return console.log("--- did not find any closest face... ---"), void 0;
            var m = c.faces[d];
            m.connectedFaces = [];
            for (var w = 0; c.faces.length > w; w++)
                for (var b = 0; c.faces[w].length > b; b++) - 1 !== m.indexOf(c.faces[w][b]) && w !== d && -1 === m.connectedFaces.indexOf(w) && m.connectedFaces.push(w);
            u.length;
            for (var x = m.length, g = 0; x > g; g++) {
                var V = c.vertices[m[g]],
                    z = c.vertices[m[(g + 1) % x]];
                V.vsub(z, C), C.copy(B), n.vmult(B, B), i.vadd(B, B), this.faceNormals[d].copy(I), n.vmult(I, I), i.vadd(I, I), B.cross(I, R), R.negate(R), V.copy(O), n.vmult(O, O), i.vadd(O, O);
                var E, S = (-O.dot(R), m.connectedFaces[g]);
                this.faceNormals[S].copy(A);
                var N = s(S);
                A.copy(T), n.vmult(T, T);
                var E = N - T.dot(i);
                for (this.clipFaceAgainstPlane(u, p, T, E); u.length;) u.shift();
                for (; p.length;) u.push(p.shift())
            }
            this.faceNormals[d].copy(A);
            var N = s(d);
            A.copy(T), n.vmult(T, T);
            for (var E = N - T.dot(i), w = 0; u.length > w; w++) {
                var M = T.dot(u[w]) + E;
                if (a >= M && (console.log("clamped: depth=" + M + " to minDist=" + (a + "")), M = a), r >= M) {
                    var P = u[w];
                    if (0 >= M) {
                        var q = {
                            point: P,
                            normal: T,
                            depth: M
                        };
                        h.push(q)
                    }
                }
            }
        }, this.clipFaceAgainstPlane = function(e, i, n, o) {
            if (!(n instanceof t.Vec3)) throw Error("planeNormal must be Vec3, " + n + " given");
            if (!(e instanceof Array)) throw Error("invertices must be Array, " + e + " given");
            if (!(i instanceof Array)) throw Error("outvertices must be Array, " + i + " given");
            var a, s, r = e.length;
            if (2 > r) return i;
            var h = e[e.length - 1],
                c = e[0];
            a = n.dot(h) + o;
            for (var l = 0; r > l; l++) {
                if (c = e[l], s = n.dot(c) + o, 0 > a)
                    if (0 > s) {
                        var u = new t.Vec3;
                        c.copy(u), i.push(u)
                    } else {
                        var u = new t.Vec3;
                        h.lerp(c, a / (a - s), u), i.push(u)
                    } else if (0 > s) {
                    var u = new t.Vec3;
                    h.lerp(c, a / (a - s), u), i.push(u), i.push(c)
                }
                h = c, a = s
            }
            return i
        };
        var r = this;
        this.calculateLocalInertia = function(t, e) {
            r.computeAABB();
            var i = this.aabbmax.x - this.aabbmin.x,
                n = this.aabbmax.y - this.aabbmin.y,
                o = this.aabbmax.z - this.aabbmin.z;
            e.x = 1 / 12 * t * (2 * 2 * n * n + 2 * 2 * o * o), e.y = 1 / 12 * t * (2 * 2 * i * i + 2 * 2 * o * o), e.z = 1 / 12 * t * (2 * 2 * n * n + 2 * 2 * i * i)
        }, new t.Vec3, this.computeAABB = function() {
            var t = this.vertices.length,
                e = this.aabbmin,
                i = this.aabbmax,
                n = this.vertices;
            e.set(1 / 0, 1 / 0, 1 / 0), i.set(-1 / 0, -1 / 0, -1 / 0);
            for (var o = 0; t > o; o++) {
                var a = n[o];
                a.x < e.x ? e.x = a.x : a.x > i.x && (i.x = a.x), a.y < e.y ? e.y = a.y : a.y > i.y && (i.y = a.y), a.z < e.z ? e.z = a.z : a.z > i.z && (i.z = a.z)
            }
        }
    }, t.ConvexPolyhedron.prototype = new t.Shape, t.ConvexPolyhedron.prototype.constructor = t.ConvexPolyhedron, t.ConvexPolyhedron.prototype.computeWorldVertices = function(e, i) {
        for (var n = this.vertices.length; n > this.worldVertices.length;) this.worldVertices.push(new t.Vec3);
        for (var o = this.vertices, a = this.worldVertices, s = 0; s !== n; s++) i.vmult(o[s], a[s]), e.vadd(a[s], a[s]);
        this.worldVerticesNeedsUpdate = !1
    }, t.ConvexPolyhedron.prototype.computeWorldFaceNormals = function(e) {
        for (var i = this.faceNormals.length; i > this.worldFaceNormals.length;) this.worldFaceNormals.push(new t.Vec3);
        for (var n = this.faceNormals, o = this.worldFaceNormals, a = 0; a !== i; a++) e.vmult(n[a], o[a]);
        this.worldFaceNormalsNeedsUpdate = !1
    }, t.ConvexPolyhedron.prototype.computeBoundingSphereRadius = function() {
        for (var t = 0, e = this.vertices, i = 0, n = e.length; i !== n; i++) {
            var o = e[i].norm2();
            o > t && (t = o)
        }
        this.boundingSphereRadius = Math.sqrt(t), this.boundingSphereRadiusNeedsUpdate = !1
    };
    var P = new t.Vec3;
    t.ConvexPolyhedron.prototype.calculateWorldAABB = function(t, e, i, n) {
        for (var o, a, s, r, h, c, l = this.vertices.length, u = this.vertices, p = 0; l > p; p++) {
            u[p].copy(P), e.vmult(P, P), t.vadd(P, P);
            var d = P;
            o > d.x || void 0 === o ? o = d.x : (d.x > r || void 0 === r) && (r = d.x), a > d.y || void 0 === a ? a = d.y : (d.y > h || void 0 === h) && (h = d.y), s > d.z || void 0 === s ? s = d.z : (d.z > c || void 0 === c) && (c = d.z)
        }
        i.set(o, a, s), n.set(r, h, c)
    }, t.ConvexPolyhedron.prototype.volume = function() {
        return this.boundingSphereRadiusNeedsUpdate && this.computeBoundingSphereRadius(), 4 * Math.PI * this.boundingSphereRadius / 3
    }, t.ConvexPolyhedron.prototype.getAveragePointLocal = function(e) {
        e = e || new t.Vec3;
        for (var i = this.vertices.length, n = this.vertices, o = 0; i > o; o++) e.vadd(n[o], e);
        return e.mult(1 / i, e), e
    }, t.ConvexPolyhedron.prototype.transformAllPoints = function(t, e) {
        var i = this.vertices.length,
            n = this.vertices;
        if (e) {
            for (var o = 0; i > o; o++) {
                var a = n[o];
                e.vmult(a, a)
            }
            for (var o = 0; this.faceNormals.length > o; o++) {
                var a = this.faceNormals[o];
                e.vmult(a, a)
            }
        }
        if (t)
            for (var o = 0; i > o; o++) {
                var a = n[o];
                a.vadd(t, a)
            }
    };
    var q = new t.Vec3,
        j = new t.Vec3,
        C = new t.Vec3;
    t.ConvexPolyhedron.prototype.pointIsInside = function(t) {
        var e = this.vertices.length,
            i = this.vertices,
            n = this.faces,
            o = this.faceNormals,
            a = null,
            s = this.faces.length,
            r = q;
        this.getAveragePointLocal(r);
        for (var h = 0; s > h; h++) {
            this.faces[h].length;
            var e = o[h],
                c = i[n[h][0]],
                l = j;
            t.vsub(c, l);
            var u = e.dot(l),
                p = C;
            r.vsub(c, p);
            var d = e.dot(p);
            if (0 > u && d > 0 || u > 0 && 0 > d) return !1
        }
        return a ? 1 : -1
    }, t.Cylinder = function(e, i, n, o) {
        var a = o,
            s = [],
            r = [],
            h = [],
            c = [],
            l = [],
            u = Math.cos,
            p = Math.sin;
        s.push(new t.Vec3(i * u(0), i * p(0), .5 * -n)), c.push(0), s.push(new t.Vec3(e * u(0), e * p(0), .5 * n)), l.push(1);
        for (var d = 0; a > d; d++) {
            var v = 2 * Math.PI / a * (d + 1),
                y = 2 * Math.PI / a * (d + .5);
            a - 1 > d ? (s.push(new t.Vec3(i * u(v), i * p(v), .5 * -n)), c.push(2 * d + 2), s.push(new t.Vec3(e * u(v), e * p(v), .5 * n)), l.push(2 * d + 3), r.push(new t.Vec3(u(y), p(y), 0)), h.push([2 * d + 2, 2 * d + 3, 2 * d + 1, 2 * d])) : (h.push([0, 1, 2 * d + 1, 2 * d]), r.push(new t.Vec3(u(y), p(y), 0)))
        }
        h.push(l), r.push(new t.Vec3(0, 0, 1));
        for (var f = [], d = 0; c.length > d; d++) f.push(c[c.length - d - 1]);
        h.push(f), r.push(new t.Vec3(0, 0, -1)), this.type = t.Shape.types.CONVEXPOLYHEDRON, t.ConvexPolyhedron.call(this, s, h, r)
    }, t.Cylinder.prototype = new t.ConvexPolyhedron, t.Ray = function(e, i) {
        function n(t, e, i) {
            return i.vsub(t, V), p = V.dot(e), e.mult(p, z), z.vadd(t, z), d = i.distanceTo(z)
        }

        function o(t, e, i, n) {
            return n.vsub(e, V), i.vsub(e, E), t.vsub(e, S), v = V.dot(V), y = V.dot(E), f = V.dot(S), m = E.dot(E), w = E.dot(S), b = 1 / (v * m - y * y), x = (m * f - y * w) * b, g = (v * w - y * f) * b, x >= 0 && g >= 0 && 1 > x + g
        }
        this.origin = e || new t.Vec3, this.direction = i || new t.Vec3;
        var a = 1e-4;
        this.setPrecision = function(t) {
            a = t
        };
        var s = new t.Vec3,
            r = new t.Vec3,
            h = new t.Vec3;
        new t.Vec3, new t.Vec3;
        var c = new t.Vec3,
            l = new t.Vec3,
            u = new t.Vec3;
        this.intersectBody = function(e) {
            return e.shape instanceof t.ConvexPolyhedron ? this.intersectShape(e.shape, e.quaternion, e.position, e) : e.shape instanceof t.Box ? this.intersectShape(e.shape.convexPolyhedronRepresentation, e.quaternion, e.position, e) : (console.warn("Ray intersection is this far only implemented for ConvexPolyhedron and Box shapes."), void 0)
        }, this.intersectShape = function(e, i, p, d) {
            var v, y = [];
            if (e instanceof t.ConvexPolyhedron) {
                var f = n(this.origin, this.direction, p);
                if (f > e.getBoundingSphereRadius()) return y;
                for (var m, w, b = e.faces, x = e.vertices, g = e.faceNormals, V = 0; b.length > V; V++) {
                    var z = b[V],
                        E = g[V],
                        S = i,
                        N = p;
                    if (x[z[0]].copy(c), S.vmult(c, c), c.vadd(N, c), c.vsub(this.origin, c), S.vmult(E, l), m = this.direction.dot(l), !(a > Math.abs(m)) && (w = l.dot(c) / m, !(0 > w) && 0 > m)) {
                        this.direction.mult(w, u), u.vadd(this.origin, u), x[z[0]].copy(s), S.vmult(s, s), N.vadd(s, s);
                        for (var M = 1; z.length - 1 > M; M++)
                            if (x[z[M]].copy(r), x[z[M + 1]].copy(h), S.vmult(r, r), S.vmult(h, h), N.vadd(r, r), N.vadd(h, h), o(u, s, r, h)) {
                                v = {
                                    distance: this.origin.distanceTo(u),
                                    point: u.copy(),
                                    face: z,
                                    body: d
                                }, y.push(v);
                                break
                            }
                    }
                }
            }
            return y
        }, this.intersectBodies = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = this.intersectBody(t[i]);
                Array.prototype.push.apply(e, o)
            }
            return e.sort(function(t, e) {
                return t.distance - e.distance
            }), e
        };
        var p, d, v, y, f, m, w, b, x, g, V = new t.Vec3,
            z = new t.Vec3,
            E = new t.Vec3,
            S = new t.Vec3
    }, t.Ray.prototype.constructor = t.Ray, t.Broadphase = function() {
        this.world = null, this.useBoundingBoxes = !1
    }, t.Broadphase.prototype.constructor = t.BroadPhase, t.Broadphase.prototype.collisionPairs = function() {
        throw Error("collisionPairs not implemented for this BroadPhase class!")
    };
    var B = t.Body.STATIC | t.Body.KINEMATIC;
    t.Broadphase.prototype.needBroadphaseCollision = function(e, i) {
        return 0 === (e.collisionFilterGroup & i.collisionFilterMask) || 0 === (i.collisionFilterGroup & e.collisionFilterMask) ? !1 : 0 === (e.motionstate & B) && !e.isSleeping() || 0 === (i.motionstate & B) && !i.isSleeping() ? e.shape || i.shape ? e.shape instanceof t.Plane && i.shape instanceof t.Plane ? !1 : !0 : !1 : !1
    }, t.Broadphase.prototype.intersectionTest = function(t, e, i, n) {
        this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, i, n) : this.doBoundingSphereBroadphase(t, e, i, n)
    };
    var I = new t.Vec3,
        R = new t.Vec3,
        O = (new t.Quaternion, new t.Vec3);
    t.Broadphase.prototype.doBoundingSphereBroadphase = function(e, i, n, o) {
        var a = t.Shape.types,
            s = a.SPHERE | a.BOX | a.COMPOUND | a.CONVEXPOLYHEDRON,
            r = a.PLANE;
        t.Body.STATIC | t.Body.KINEMATIC;
        var h = I,
            c = R,
            l = O,
            u = e.shape,
            p = i.shape;
        if (u && p) {
            var d = u.type,
                v = p.type;
            if (d & s && v & s) {
                i.position.vsub(e.position, h), u.boundingSphereRadiusNeedsUpdate && u.computeBoundingSphereRadius(), p.boundingSphereRadiusNeedsUpdate && p.computeBoundingSphereRadius();
                var y = u.boundingSphereRadius + p.boundingSphereRadius;
                y * y > h.norm2() && (n.push(e), o.push(i))
            } else if (d & s && v & a.PLANE || v & s && d & a.PLANE) {
                var f = d === r ? e : i,
                    m = d !== r ? e : i,
                    w = m.shape,
                    b = f.shape;
                m.position.vsub(f.position, h), b.worldNormalNeedsUpdate && b.computeWorldNormal(f.quaternion), c = b.worldNormal, w.boundingSphereRadiusNeedsUpdate && w.computeBoundingSphereRadius();
                var x = h.dot(c) - w.boundingSphereRadius;
                0 > x && (n.push(e), o.push(i))
            }
        } else if (u || p) {
            var g = u ? i : e,
                V = u ? e : i,
                w = V.shape,
                z = w.type;
            if (z & s) {
                if (z === a.SPHERE) g.position.vsub(V.position, l), w.radius * w.radius >= l.norm2() && (n.push(g), o.push(V));
                else if (z === a.CONVEXPOLYHEDRON || z === a.BOX || z === a.COMPOUND) {
                    w.boundingSphereRadiusNeedsUpdate && w.computeBoundingSphereRadius();
                    var E = w.boundingSphereRadius;
                    g.position.vsub(V.position, l), E * E >= l.norm2() && (n.push(g), o.push(V))
                }
            } else if (z === a.PLANE) {
                var S = V;
                c.set(0, 0, 1), S.quaternion.vmult(c, c), g.position.vsub(S.position, l), 0 >= c.dot(l) && (n.push(g), o.push(V))
            }
        } else;
    }, t.Broadphase.prototype.doBoundingBoxBroadphase = function(e, i, n, o) {
        var a = e.shape,
            s = i.shape;
        if (e.aabbNeedsUpdate && e.computeAABB(), i.aabbNeedsUpdate && i.computeAABB(), a && s) e.aabbmax.x < i.aabbmin.x || e.aabbmax.y < i.aabbmin.y || e.aabbmax.z < i.aabbmin.z || e.aabbmin.x > i.aabbmax.x || e.aabbmin.y > i.aabbmax.y || e.aabbmin.z > i.aabbmax.z || (n.push(e), o.push(i));
        else if (a || s) {
            var r = a ? i : e,
                h = a ? e : i;
            h.shape instanceof t.Plane, r.position.x < h.aabbmin.x || r.position.y < h.aabbmin.y || r.position.z < h.aabbmin.z || r.position.x > h.aabbmax.x || r.position.y > h.aabbmax.y || r.position.z > h.aabbmax.z || (n.push(e), o.push(i))
        } else;
    };
    var A = {}, T = [],
        F = [];
    t.Broadphase.prototype.makePairsUnique = function(t, e) {
        for (var i = A, n = T, o = F, a = t.length, s = 0; s !== a; s++) n[s] = t[s], o[s] = e[s];
        t.length = 0, e.length = 0;
        for (var s = 0; s !== a; s++) {
            var r = n[s].id,
                h = o[s].id,
                c = h > r ? r + "," + h : h + "," + r;
            i[c] = s
        }
        for (var c in i) {
            var s = i[c];
            t.push(n[s]), e.push(o[s]), delete i[c]
        }
    }, t.NaiveBroadphase = function() {
        t.Broadphase.apply(this)
    }, t.NaiveBroadphase.prototype = new t.Broadphase, t.NaiveBroadphase.prototype.constructor = t.NaiveBroadphase, t.NaiveBroadphase.prototype.collisionPairs = function(t, e, i) {
        var n, o, a, s, r = t.bodies,
            h = r.length;
        for (n = 0; n !== h; n++)
            for (o = 0; o !== n; o++) a = r[n], s = r[o], this.needBroadphaseCollision(a, s) && this.intersectionTest(a, s, e, i)
    }, t.GridBroadphase = function(e, i, n, o, a) {
        t.Broadphase.apply(this), this.nx = n || 10, this.ny = o || 10, this.nz = a || 10, this.aabbMin = e || new t.Vec3(100, 100, 100), this.aabbMax = i || new t.Vec3(-100, -100, -100), this.bins = []
    }, t.GridBroadphase.prototype = new t.Broadphase, t.GridBroadphase.prototype.constructor = t.GridBroadphase;
    var k = new t.Vec3,
        U = new t.Vec3;
    t.GridBroadphase.prototype.collisionPairs = function(e, i, n) {
        var o = e.numObjects(),
            a = e.bodies,
            s = this.aabbMax,
            r = this.aabbMin,
            h = this.nx,
            c = this.ny,
            l = this.nz,
            u = s.x,
            p = s.y,
            d = s.z,
            v = r.x,
            y = r.y,
            f = r.z,
            m = h / (u - v),
            w = c / (p - y),
            b = l / (d - f),
            x = (u - v) / h,
            g = (p - y) / c,
            V = (d - f) / l,
            z = t.Shape.types,
            E = z.SPHERE,
            S = z.PLANE;
        z.BOX, z.COMPOUND, z.CONVEXPOLYHEDRON;
        for (var N = this.bins, M = h * c * l, P = N.length - 1; P !== M; P++) N.push([]);
        for (var P = 0; P !== M; P++) N[P].length = 0;
        for (var q = Math.floor, P = 0; P !== o; P++) {
            var j = a[P],
                C = j.shape;
            switch (C.type) {
                case E:
                    for (var B = j.position.x, I = j.position.y, R = j.position.z, O = C.radius, A = q(m * (B - O - v)), T = q(w * (I - O - y)), F = q(b * (R - O - f)), W = q(m * (B + O - v)), L = q(w * (I + O - y)), D = q(b * (R + O - f)), H = A; H !== W + 1; H++)
                        for (var Q = T; Q !== L + 1; Q++)
                            for (var X = F; X !== D + 1; X++) {
                                var G = H,
                                    Y = Q,
                                    Z = X,
                                    _ = G * (c - 1) * (l - 1) + Y * (l - 1) + Z;
                                _ >= 0 && M > _ && N[_].push(j)
                            }
                    break;
                case S:
                    var K = k,
                        J = U,
                        $ = .25 * (x * x + g * g + V * V),
                        te = C.worldNormal;
                    C.worldNormalNeedsUpdate && C.computeWorldNormal(j.quaternion);
                    for (var H = 0; H !== h; H++)
                        for (var Q = 0; Q !== c; Q++)
                            for (var X = 0; X !== l; X++) {
                                var G = H,
                                    Y = Q,
                                    Z = X;
                                if (J.set(G * x + v, Y * g + y, Z * V + f), J.vsub(j.position, K), $ > K.dot(te)) {
                                    var _ = G * (c - 1) * (l - 1) + Y * (l - 1) + Z;
                                    N[_].push(j)
                                }
                            }
                    break;
                default:
                    console.warn("Shape " + C.type + " not supported in GridBroadphase!")
            }
        }
        for (var P = 0; P !== M; P++)
            for (var ee = N[P], H = 0, ie = ee.length; H !== ie; H++)
                for (var j = ee[H], Q = 0; Q !== H; Q++) {
                    var ne = ee[Q];
                    this.needBroadphaseCollision(j, ne) && this.intersectionTest(j, ne, i, n)
                }
        this.makePairsUnique(i, n)
    }, t.Solver = function() {
        this.equations = []
    }, t.Solver.prototype.solve = function() {
        return 0
    }, t.Solver.prototype.addEquation = function(t) {
        this.equations.push(t)
    }, t.Solver.prototype.removeEquation = function(t) {
        var e = this.equations,
            i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
    }, t.Solver.prototype.removeAllEquations = function() {
        this.equations.length = 0
    }, t.GSSolver = function() {
        t.Solver.call(this), this.iterations = 10, this.tolerance = 0
    }, t.GSSolver.prototype = new t.Solver;
    var W = [],
        L = [],
        D = [];
    t.GSSolver.prototype.solve = function(t, e) {
        var i, n, o, a, s, r, h = (this.d, this.k, 0),
            c = this.iterations,
            l = this.tolerance * this.tolerance,
            u = (this.a, this.b),
            p = this.equations,
            d = p.length,
            v = e.bodies,
            y = v.length,
            f = t,
            m = L,
            w = D,
            b = W;
        m.length = 0, w.length = 0, b.length = 0;
        for (var x = 0; x !== d; x++) {
            var g = p[x];
            g.spookParamsNeedsUpdate && (g.updateSpookParams(f), g.spookParamsNeedsUpdate = !1), b[x] = 0, w[x] = g.computeB(f), m[x] = 1 / g.computeC()
        }
        if (0 !== d) {
            for (var x = 0; x !== y; x++) {
                var u = v[x],
                    V = u.vlambda,
                    z = u.wlambda;
                V.set(0, 0, 0), z && z.set(0, 0, 0)
            }
            for (h = 0; h !== c; h++) {
                a = 0;
                for (var E = 0; E !== d; E++) {
                    var g = p[E];
                    i = w[E], n = m[E], r = b[E], s = g.computeGWlambda(), o = n * (i - s - g.eps * r), g.minForce > r + o ? o = g.minForce - r : r + o > g.maxForce && (o = g.maxForce - r), b[E] += o, a += o > 0 ? o : -o, g.addToWlambda(o)
                }
                if (l > a * a) break
            }
            for (var x = 0; x !== y; x++) {
                var u = v[x],
                    S = u.velocity,
                    N = u.angularVelocity;
                S.vadd(u.vlambda, S), N && N.vadd(u.wlambda, N)
            }
        }
        return h
    }, t.SplitSolver = function(e) {
        t.Solver.call(this), this.subsolver = e
    }, t.SplitSolver.prototype = new t.Solver;
    var H = [],
        Q = [],
        X = [],
        G = {
            bodies: null
        };
    t.SplitSolver.prototype.solve = function(e, i) {
        function n(t) {
            for (var e = t.length, i = 0; i !== e; i++) {
                var n = t[i];
                if (!(n.visited || n.body.motionstate & x)) return n
            }
            return !1
        }

        function o(t, e) {
            var i = [];
            for (i.push(t), t.visited = !0, e(t); i.length;)
                for (var o, a = i.pop(); o = n(a.children);) o.visited = !0, e(o), i.push(o)
        }

        function a(t) {
            z.push(t.body);
            for (var e = t.eqs.length, i = 0; i !== e; i++) {
                var n = t.eqs[i]; - 1 === V.indexOf(n) && V.push(n)
            }
        }
        for (var s = H, r = i.bodies, h = this.equations, c = h.length, l = r.length, u = this.subsolver, p = s.length; p !== l; p++) s.push({
            body: r[p],
            children: [],
            eqs: [],
            visited: !1
        });
        for (var p = 0; p !== l; p++) {
            var d = s[p];
            d.body = r[p], d.children.length = 0, d.eqs.length = 0, d.visited = !1
        }
        for (var v = 0; v !== c; v++) {
            var y = h[v],
                p = r.indexOf(y.bi),
                f = r.indexOf(y.bj),
                m = s[p],
                w = s[f];
            m.children.push(w), m.eqs.push(y), w.children.push(m), w.eqs.push(y)
        }
        for (var b, x = t.Body.STATIC, g = 0, V = Q, z = X, E = G; b = n(s);) {
            V.length = 0, z.length = 0, o(b, a);
            for (var S = V.length, p = 0; p !== S; p++) u.addEquation(V[p]);
            E.bodies = z, u.solve(e, E), u.removeAllEquations(), g++
        }
        return g
    }, t.Material = function(t) {
        this.name = t, this.id = -1
    }, t.ContactMaterial = function(t, e, i, n) {
        this.id = -1, this.materials = [t, e], this.friction = void 0 !== i ? Number(i) : .3, this.restitution = void 0 !== n ? Number(n) : .3, this.contactEquationStiffness = 1e7, this.contactEquationRegularizationTime = 3, this.frictionEquationStiffness = 1e7, this.frictionEquationRegularizationTime = 3
    }, t.World = function() {
        t.EventTarget.apply(this), this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.last_dt = this.default_dt, this.nextId = 0, this.gravity = new t.Vec3, this.broadphase = null, this.bodies = [], this.solver = new t.GSSolver, this.constraints = [], this.contactgen = new t.ContactGenerator, this.collisionMatrix = [], this.collisionMatrixPrevious = [], this.materials = [], this.contactmaterials = [], this.mats2cmat = [], this.defaultMaterial = new t.Material("default"), this.defaultContactMaterial = new t.ContactMaterial(this.defaultMaterial, this.defaultMaterial, .3, 0), this.doProfiling = !1, this.profile = {
            solve: 0,
            makeContactConstraints: 0,
            broadphase: 0,
            integrate: 0,
            nearphase: 0
        }, this.subsystems = []
    }, t.World.prototype.getContactMaterial = function(e, i) {
        if (e instanceof t.Material && i instanceof t.Material) {
            var n = e.id,
                o = i.id;
            if (o > n) {
                var a = n;
                n = o, o = a
            }
            return this.contactmaterials[this.mats2cmat[n + o * this.materials.length]]
        }
    }, t.World.prototype.numObjects = function() {
        return this.bodies.length
    }, t.World.prototype.collisionMatrixGet = function(t, e, i) {
        if (e > t) {
            var n = e;
            e = t, t = n
        }
        return t = (t * (t + 1) >> 1) + e - 1, i === void 0 || i ? this.collisionMatrix[t] : this.collisionMatrixPrevious[t]
    }, t.World.prototype.collisionMatrixSet = function(t, e, i, n) {
        if (e > t) {
            var o = e;
            e = t, t = o
        }
        t = (t * (t + 1) >> 1) + e - 1, n === void 0 || n ? this.collisionMatrix[t] = i : this.collisionMatrixPrevious[t] = i
    }, t.World.prototype.collisionMatrixTick = function() {
        var t = this.collisionMatrixPrevious;
        this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t;
        for (var e = 0, i = this.collisionMatrix.length; e !== i; e++) this.collisionMatrix[e] = 0
    }, t.World.prototype.add = function(e) {
        e.id = this.id(), e.index = this.bodies.length, this.bodies.push(e), e.world = this, e.position.copy(e.initPosition), e.velocity.copy(e.initVelocity), e.timeLastSleepy = this.time, e instanceof t.RigidBody && (e.angularVelocity.copy(e.initAngularVelocity), e.quaternion.copy(e.initQuaternion));
        var i = this.numObjects();
        this.collisionMatrix.length = i * (i - 1) >> 1
    }, t.World.prototype.addConstraint = function(t) {
        this.constraints.push(t), t.id = this.id()
    }, t.World.prototype.removeConstraint = function(t) {
        var e = this.constraints.indexOf(t); - 1 !== e && this.constraints.splice(e, 1)
    }, t.World.prototype.id = function() {
        return this.nextId++
    }, t.World.prototype.remove = function(t) {
        t.world = null;
        var e = this.numObjects() - 1,
            i = this.bodies;
        i.splice(t.index, 1);
        for (var n = t.index; e > n; n++) i[n].index = n;
        this.collisionMatrixPrevious.length = this.collisionMatrix.length = e * (e - 1) >> 1
    }, t.World.prototype.addMaterial = function(t) {
        if (-1 === t.id) {
            var e = this.materials.length;
            this.materials.push(t), t.id = this.materials.length - 1;
            for (var i = 0; i !== 2 * e + 1; i++) this.mats2cmat.push(-1)
        }
    }, t.World.prototype.addContactMaterial = function(t) {
        this.addMaterial(t.materials[0]), this.addMaterial(t.materials[1]);
        var e, i;
        t.materials[0].id > t.materials[1].id ? (e = t.materials[0].id, i = t.materials[1].id) : (i = t.materials[0].id, e = t.materials[1].id), this.contactmaterials.push(t), t.id = this.contactmaterials.length - 1, this.mats2cmat[e + this.materials.length * i] = t.id
    }, t.World.prototype._now = function() {
        return window.performance.webkitNow ? window.performance.webkitNow() : Date.now()
    };
    var Y = {
        type: "postStep"
    }, Z = {
            type: "collide",
            "with": null,
            contact: null
        }, _ = [],
        K = [],
        J = [],
        $ = [],
        te = new t.Vec3,
        ee = (new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Quaternion, new t.Quaternion),
        ie = new t.Quaternion;
    t.World.prototype.step = function(e) {
        var i, n = this.contacts,
            o = J,
            a = $,
            s = this.numObjects(),
            r = this.bodies,
            h = this.solver,
            c = this.gravity,
            l = this.doProfiling,
            u = this.profile,
            p = t.Body.DYNAMIC,
            d = this._now,
            v = this.constraints,
            y = t.FrictionEquation,
            f = K,
            m = c.norm(),
            w = c.x,
            b = c.y,
            x = c.z,
            g = 0;
        for (l && (i = d()), void 0 === e && (e = this.last_dt || this.default_dt), g = 0; g !== s; g++) {
            var V = r[g];
            if (V.motionstate & p) {
                var z = V.force,
                    E = V.mass;
                z.x += E * w, z.y += E * b, z.z += E * x
            }
        }
        for (var g = 0, S = this.subsystems.length; g !== S; g++) this.subsystems[g].update();
        l && (i = d()), o.length = 0, a.length = 0, this.broadphase.collisionPairs(this, o, a), l && (u.broadphase = d() - i), this.collisionMatrixTick(), l && (i = d());
        var N = _,
            M = n.length;
        for (g = 0; g !== M; g++) N.push(n[g]);
        n.length = 0, this.contactgen.getContacts(o, a, this, n, N), l && (u.nearphase = d() - i), l && (i = d());
        var P = n.length,
            q = this.frictionEquations.length;
        for (g = 0; g !== q; g++) f.push(this.frictionEquations[g]);
        this.frictionEquations.length = 0;
        for (var j = 0; j !== P; j++) {
            var C = n[j],
                V = C.bi,
                B = C.bj,
                g = r.indexOf(V),
                I = r.indexOf(B),
                R = this.getContactMaterial(V.material, B.material) || this.defaultContactMaterial,
                O = R.friction;
            R.restitution;
            var A = te;
            A.set(B.position.x + C.rj.x - V.position.x - C.ri.x, B.position.y + C.rj.y - V.position.y - C.ri.y, B.position.z + C.rj.z - V.position.z - C.ri.z);
            var T = A.dot(C.ni);
            if (0 > T) {
                if (C.restitution = R.restitution, C.penetration = T, C.stiffness = R.contactEquationStiffness, C.regularizationTime = R.contactEquationRegularizationTime, h.addEquation(C), O > 0) {
                    var F = O * m,
                        k = V.invMass + B.invMass;
                    k > 0 && (k = 1 / k);
                    var U = f,
                        W = U.length ? U.pop() : new y(V, B, F * k),
                        L = U.length ? U.pop() : new y(V, B, F * k);
                    this.frictionEquations.push(W), this.frictionEquations.push(L), W.bi = L.bi = V, W.bj = L.bj = B, W.minForce = L.minForce = -F * k, W.maxForce = L.maxForce = F * k, C.ri.copy(W.ri), C.rj.copy(W.rj), C.ri.copy(L.ri), C.rj.copy(L.rj), C.ni.tangents(W.t, L.t), h.addEquation(W), h.addEquation(L)
                }
                this.collisionMatrixSet(g, I, 1, !0), this.collisionMatrixGet(g, I, !0) !== this.collisionMatrixGet(g, I, !1) && (Z.with = B, Z.contact = C, V.dispatchEvent(Z), Z.with = V, B.dispatchEvent(Z), V.wakeUp(), B.wakeUp())
            }
        }
        l && (u.makeContactConstraints = d() - i), l && (i = d());
        var D = v.length;
        for (g = 0; g !== D; g++) {
            var C = v[g];
            C.update();
            for (var I = 0, H = C.equations.length; I !== H; I++) {
                var Q = C.equations[I];
                h.addEquation(Q)
            }
        }
        h.solve(e, this), l && (u.solve = d() - i), h.removeAllEquations();
        var X = Math.pow;
        for (g = 0; g !== s; g++) {
            var V = r[g];
            if (V.motionstate & p) {
                var G = X(1 - V.linearDamping, e),
                    ne = V.velocity;
                ne.mult(G, ne);
                var oe = V.angularVelocity;
                if (oe) {
                    var ae = X(1 - V.angularDamping, e);
                    oe.mult(ae, oe)
                }
            }
        }
        for (this.dispatchEvent(Y), g = 0; g !== s; g++) {
            var V = r[g];
            V.preStep && V.preStep.call(V)
        }
        l && (i = d());
        var se = ee,
            re = ie,
            he = this.stepnumber,
            ce = t.Body.DYNAMIC | t.Body.KINEMATIC,
            le = 0 === he % (this.quatNormalizeSkip + 1),
            ue = this.quatNormalizeFast,
            pe = .5 * e,
            de = t.Shape.types.PLANE,
            ve = t.Shape.types.CONVEXPOLYHEDRON;
        for (g = 0; g !== s; g++) {
            var ye = r[g],
                fe = ye.shape,
                me = ye.force,
                we = ye.tau;
            if (ye.motionstate & ce) {
                var be = ye.velocity,
                    xe = ye.angularVelocity,
                    ge = ye.position,
                    Ve = ye.quaternion,
                    ze = ye.invMass,
                    Ee = ye.invInertia;
                if (be.x += me.x * ze * e, be.y += me.y * ze * e, be.z += me.z * ze * e, ye.angularVelocity && (xe.x += we.x * Ee.x * e, xe.y += we.y * Ee.y * e, xe.z += we.z * Ee.z * e), ye.isSleeping() || (ge.x += be.x * e, ge.y += be.y * e, ge.z += be.z * e, ye.angularVelocity && (se.set(xe.x, xe.y, xe.z, 0), se.mult(Ve, re), Ve.x += pe * re.x, Ve.y += pe * re.y, Ve.z += pe * re.z, Ve.w += pe * re.w, le && (ue ? Ve.normalizeFast() : Ve.normalize())), ye.aabbmin && (ye.aabbNeedsUpdate = !0)), fe) switch (fe.type) {
                    case de:
                        fe.worldNormalNeedsUpdate = !0;
                        break;
                    case ve:
                        fe.worldFaceNormalsNeedsUpdate = !0, fe.worldVerticesNeedsUpdate = !0
                }
            }
            ye.force.set(0, 0, 0), ye.tau && ye.tau.set(0, 0, 0)
        }
        for (l && (u.integrate = d() - i), this.time += e, this.stepnumber += 1, this.dispatchEvent(Y), g = 0; g !== s; g++) {
            var V = r[g],
                Se = V.postStep;
            Se && Se.call(V)
        }
        for (g = 0; g !== s; g++) {
            var ye = r[g];
            ye.inertiaWorldAutoUpdate && ye.quaternion.vmult(ye.inertia, ye.inertiaWorld), ye.invInertiaWorldAutoUpdate && ye.quaternion.vmult(ye.invInertia, ye.invInertiaWorld)
        }
        if (this.allowSleep)
            for (g = 0; g !== s; g++) r[g].sleepTick(this.time)
    }, t.ContactGenerator = function() {
        function e(e, i) {
            if (f.length) {
                var n = f.pop();
                return n.bi = e, n.bj = i, n
            }
            return new t.ContactEquation(e, i)
        }

        function i(t) {
            var e;
            e = t.ri, t.ri = t.rj, t.rj = e, t.ni.negate(t.ni), e = t.bi, t.bi = t.bj, t.bj = e
        }

        function n(t, i, n, o, a, s, r, h, c) {
            var l = e(h, c);
            c.position.vsub(o, l.ni), l.ni.normalize(), l.ni.copy(l.ri), l.ni.copy(l.rj), l.ri.mult(i.radius, l.ri), l.rj.mult(-n.radius, l.rj), t.push(l)
        }

        function o(t, i, n, o, a, s, r, h, c) {
            var l = e(h, c);
            l.ni.set(0, 0, 1), r.vmult(l.ni, l.ni), l.ni.negate(l.ni), l.ni.normalize(), l.ni.mult(i.radius, l.ri), o.vsub(a, w), l.ni.mult(l.ni.dot(w), b), w.vsub(b, l.rj), b.norm2() <= i.radius * i.radius && t.push(l)
        }

        function a(t, e, i) {
            for (var n = null, o = t.length, a = 0; a !== o; a++) {
                var s = t[a],
                    r = x;
                t[(a + 1) % o].vsub(s, r);
                var h = g;
                r.cross(e, h);
                var c = V;
                i.vsub(s, c);
                var l = h.dot(c);
                if (!(null === n || l > 0 && n === !0 || 0 >= l && n === !1)) return !1;
                null === n && (n = l > 0)
            }
            return !0
        }

        function s(t, i, n, o, a, s, r, h, c) {
            var l = M;
            o.vsub(a, z), n.getSideNormals(l, r);
            for (var u = i.radius, p = !1, d = q, v = j, y = C, f = null, w = 0, b = 0, x = 0, g = null, V = 0, B = l.length; V !== B && p === !1; V++) {
                var I = E;
                l[V].copy(I);
                var R = I.norm();
                I.normalize();
                var O = z.dot(I);
                if (R + u > O && O > 0) {
                    var A = S,
                        T = N;
                    l[(V + 1) % 3].copy(A), l[(V + 2) % 3].copy(T);
                    var F = A.norm(),
                        k = T.norm();
                    A.normalize(), T.normalize();
                    var U = z.dot(A),
                        W = z.dot(T);
                    if (F > U && U > -F && k > W && W > -k) {
                        var L = Math.abs(O - R - u);
                        (null === g || g > L) && (g = L, b = U, x = W, f = R, I.copy(d), A.copy(v), T.copy(y), w++)
                    }
                }
            }
            if (w) {
                p = !0;
                var D = e(h, c);
                d.mult(-u, D.ri), d.copy(D.ni), D.ni.negate(D.ni), d.mult(f, d), v.mult(b, v), d.vadd(v, d), y.mult(x, y), d.vadd(y, D.rj), t.push(D)
            }
            for (var H = m.get(), Q = P, X = 0; 2 !== X && !p; X++)
                for (var G = 0; 2 !== G && !p; G++)
                    for (var Y = 0; 2 !== Y && !p; Y++)
                        if (H.set(0, 0, 0), X ? H.vadd(l[0], H) : H.vsub(l[0], H), G ? H.vadd(l[1], H) : H.vsub(l[1], H), Y ? H.vadd(l[2], H) : H.vsub(l[2], H), a.vadd(H, Q), Q.vsub(o, Q), u * u > Q.norm2()) {
                            p = !0;
                            var D = e(h, c);
                            Q.copy(D.ri), D.ri.normalize(), D.ri.copy(D.ni), D.ri.mult(u, D.ri), H.copy(D.rj), t.push(D)
                        }
            m.release(H), H = null;
            for (var Z = m.get(), _ = m.get(), D = m.get(), K = m.get(), L = m.get(), J = l.length, X = 0; X !== J && !p; X++)
                for (var G = 0; G !== J && !p; G++)
                    if (X % 3 !== G % 3) {
                        l[G].cross(l[X], Z), Z.normalize(), l[X].vadd(l[G], _), o.copy(D), D.vsub(_, D), D.vsub(a, D);
                        var $ = D.dot(Z);
                        Z.mult($, K);
                        for (var Y = 0; Y === X % 3 || Y === G % 3;) Y++;
                        o.copy(L), L.vsub(K, L), L.vsub(_, L), L.vsub(a, L);
                        var te = Math.abs($),
                            ee = L.norm();
                        if (l[Y].norm() > te && u > ee) {
                            p = !0;
                            var ie = e(h, c);
                            _.vadd(K, ie.rj), ie.rj.copy(ie.rj), L.negate(ie.ni), ie.ni.normalize(), ie.rj.copy(ie.ri), ie.ri.vadd(a, ie.ri), ie.ri.vsub(o, ie.ri), ie.ri.normalize(), ie.ri.mult(u, ie.ri), t.push(ie)
                        }
                    }
            m.release(Z, _, D, K, L)
        }

        function r(t, i, n, o, s, r, h, c, l) {
            o.vsub(s, B);
            for (var u = n.faceNormals, p = n.faces, d = n.vertices, v = i.radius, y = 0; y !== d.length; y++) {
                var f = d[y],
                    w = A;
                h.vmult(f, w), s.vadd(w, w);
                var b = O;
                if (w.vsub(o, b), v * v > b.norm2()) {
                    g = !0;
                    var x = e(c, l);
                    return b.copy(x.ri), x.ri.normalize(), x.ri.copy(x.ni), x.ri.mult(v, x.ri), w.vsub(s, x.rj), t.push(x), void 0
                }
            }
            for (var g = !1, y = 0, V = p.length; y !== V && g === !1; y++) {
                var z = u[y],
                    E = p[y],
                    S = T;
                h.vmult(z, S);
                var N = F;
                h.vmult(d[E[0]], N), N.vadd(s, N);
                var M = k;
                S.mult(-v, M), o.vadd(M, M);
                var P = U;
                M.vsub(N, P);
                var q = P.dot(S),
                    j = W;
                if (o.vsub(N, j), 0 > q && j.dot(S) > 0) {
                    for (var C = [], L = 0, D = E.length; L !== D; L++) {
                        var H = m.get();
                        h.vmult(d[E[L]], H), s.vadd(H, H), C.push(H)
                    }
                    if (a(C, S, o)) {
                        g = !0;
                        var x = e(c, l);
                        S.mult(-v, x.ri), S.negate(x.ni);
                        var Q = m.get();
                        S.mult(-q, Q);
                        var X = m.get();
                        S.mult(-v, X), o.vsub(s, x.rj), x.rj.vadd(X, x.rj), x.rj.vadd(Q, x.rj), m.release(Q), m.release(X), t.push(x);
                        for (var L = 0, G = C.length; L !== G; L++) m.release(C[L]);
                        return
                    }
                    for (var L = 0; L !== E.length; L++) {
                        var Y = m.get(),
                            Z = m.get();
                        h.vmult(d[E[(L + 1) % E.length]], Y), h.vmult(d[E[(L + 2) % E.length]], Z), s.vadd(Y, Y), s.vadd(Z, Z);
                        var _ = I;
                        Z.vsub(Y, _);
                        var K = R;
                        _.unit(K);
                        var J = m.get(),
                            $ = m.get();
                        o.vsub(Y, $);
                        var te = $.dot(K);
                        K.mult(te, J), J.vadd(Y, J);
                        var ee = m.get();
                        if (J.vsub(o, ee), te > 0 && _.norm2() > te * te && v * v > ee.norm2()) {
                            var x = e(c, l);
                            J.vsub(s, x.rj), J.vsub(o, x.ni), x.ni.normalize(), x.ni.mult(v, x.ri), t.push(x);
                            for (var L = 0, G = C.length; L !== G; L++) m.release(C[L]);
                            return m.release(Y), m.release(Z), m.release(J), m.release(ee), m.release($), void 0
                        }
                        m.release(Y), m.release(Z), m.release(J), m.release(ee), m.release($)
                    }
                    for (var L = 0, G = C.length; L !== G; L++) m.release(C[L])
                }
            }
        }

        function h(t, e, i, n, o, a, s, r, h) {
            l(t, e, i.convexPolyhedronRepresentation, n, o, a, s, r, h)
        }

        function c(e, i, n, o, a, s, r, h, c) {
            for (var l = L, u = D, p = 0, d = 0, v = n.childShapes.length; d !== v; d++) {
                var f = [],
                    m = u.pop() || new t.Quaternion,
                    w = l.pop() || new t.Vec3;
                r.mult(n.childOrientations[d], m), m.normalize(), r.vmult(n.childOffsets[d], w), a.vadd(w, w), y(f, i, n.childShapes[d], o, w, s, m, h, c), u.push(m);
                var b = w;
                i || (p += f.length);
                for (var x = 0; x !== f.length; x++) r.vmult(n.childOffsets[d], b), f[x].rj.vadd(b, f[x].rj), e.push(f[x]);
                l.push(w)
            }
        }

        function l(t, i, n, o, a, s, r, h, c) {
            var l = H,
                u = Q;
            u.set(0, 0, 1), s.vmult(u, u);
            for (var p = X, d = 0; d !== n.vertices.length; d++) {
                n.vertices[d].copy(l), r.vmult(l, l), a.vadd(l, l), l.vsub(o, p);
                var v = u.dot(p);
                if (0 >= v) {
                    var y = G;
                    u.mult(u.dot(l), y), l.vsub(y, y);
                    var f = e(h, c);
                    u.copy(f.ni), y.copy(f.ri), l.vsub(a, f.rj), t.push(f)
                }
            }
        }

        function u(t, i, n, o, a, s, r, h, c) {
            var l = Y;
            if (i.findSeparatingAxis(n, o, s, a, r, l)) {
                var u = [],
                    p = Z;
                i.clipAgainstHull(o, s, n, a, r, l, -100, 100, u);
                for (var d = 0; d !== u.length; d++) {
                    var v = e(h, c);
                    l.negate(v.ni), u[d].normal.negate(p), p.mult(u[d].depth, p), u[d].point.vadd(p, v.ri), u[d].point.copy(v.rj), v.rj.vsub(a, v.rj), v.ri.vsub(o, v.ri), t.push(v)
                }
            }
        }

        function p(t, i, n, o, a, s, r, h, c) {
            var l = _;
            l.set(0, 0, 1), c.quaternion.vmult(l, l);
            var u = K;
            o.vsub(c.position, u);
            var p = l.dot(u);
            if (0 >= p) {
                var d = e(h, c);
                l.copy(d.ni), d.ni.negate(d.ni), d.ri.set(0, 0, 0);
                var v = J;
                l.mult(l.dot(o), v), o.vsub(v, v), v.copy(d.rj), t.push(d)
            }
        }

        function d(t, i, n, o, a, s, r, h, c) {
            var l = $;
            l.set(0, 0, 1), o.vsub(a, l);
            var u = l.norm2();
            if (n.radius * n.radius >= u) {
                var p = e(h, c);
                l.normalize(), l.copy(p.rj), p.rj.mult(n.radius, p.rj), l.copy(p.ni), p.ni.negate(p.ni), p.ri.set(0, 0, 0), t.push(p)
            }
        }

        function v(t, i, n, o, a, s, r, h, c) {
            var l = -1,
                u = ie,
                p = oe,
                d = null,
                v = 0,
                y = ee;
            if (o.copy(y), y.vsub(a, y), r.conjugate(te), te.vmult(y, y), n.pointIsInside(y)) {
                n.worldVerticesNeedsUpdate && n.computeWorldVertices(a, r), n.worldFaceNormalsNeedsUpdate && n.computeWorldFaceNormals(r);
                for (var f = 0, m = n.faces.length; f !== m; f++) {
                    var w = [n.worldVertices[n.faces[f][0]]],
                        b = n.worldFaceNormals[f];
                    o.vsub(w[0], ne);
                    var x = -b.dot(ne);
                    (null === d || Math.abs(x) < Math.abs(d)) && (d = x, l = f, b.copy(u), v++)
                }
                if (-1 !== l) {
                    var g = e(h, c);
                    u.mult(d, p), p.vadd(o, p), p.vsub(a, p), p.copy(g.rj), u.negate(g.ni), g.ri.set(0, 0, 0), t.push(g)
                } else console.warn("Point found inside convex, but did not find penetrating face!")
            }
        }

        function y(e, a, f, m, w, b, x, g, V) {
            var z = !1,
                E = t.Shape.types,
                S = E.SPHERE,
                N = E.PLANE,
                M = E.BOX,
                P = E.COMPOUND,
                q = E.CONVEXPOLYHEDRON;
            if (a && f) {
                if (a.type > f.type) {
                    var j;
                    j = f, f = a, a = j, j = w, w = m, m = j, j = x, x = b, b = j, j = V, V = g, g = j, z = !0
                }
            } else if (a && !f) {
                var j;
                j = f, f = a, a = j, j = w, w = m, m = j, j = x, x = b, b = j, j = V, V = g, g = j, z = !0
            }
            if (a && f) {
                if (a.type === S) switch (f.type) {
                    case S:
                        n(e, a, f, m, w, b, x, g, V);
                        break;
                    case N:
                        o(e, a, f, m, w, b, x, g, V);
                        break;
                    case M:
                        s(e, a, f, m, w, b, x, g, V);
                        break;
                    case P:
                        c(e, a, f, m, w, b, x, g, V);
                        break;
                    case q:
                        r(e, a, f, m, w, b, x, g, V);
                        break;
                    default:
                        console.warn("Collision between CANNON.Shape.types.SPHERE and " + f.type + " not implemented yet.")
                } else if (a.type === E.PLANE) switch (f.type) {
                    case E.PLANE:
                        throw Error("Plane-plane collision... wait, you did WHAT?");
                    case E.BOX:
                        h(e, a, f, m, w, b, x, g, V);
                        break;
                    case E.COMPOUND:
                        c(e, a, f, m, w, b, x, g, V);
                        break;
                    case E.CONVEXPOLYHEDRON:
                        l(e, a, f, m, w, b, x, g, V);
                        break;
                    default:
                        console.warn("Collision between CANNON.Shape.types.PLANE and " + f.type + " not implemented yet.")
                } else if (a.type === E.BOX) switch (f.type) {
                    case E.BOX:
                        y(e, a.convexPolyhedronRepresentation, f.convexPolyhedronRepresentation, m, w, b, x, g, V);
                        break;
                    case E.COMPOUND:
                        c(e, a, f, m, w, b, x, g, V);
                        break;
                    case E.CONVEXPOLYHEDRON:
                        y(e, a.convexPolyhedronRepresentation, f, m, w, b, x, g, V);
                        break;
                    default:
                        console.warn("Collision between CANNON.Shape.types.BOX and " + f.type + " not implemented yet.")
                } else if (a.type === E.COMPOUND) switch (f.type) {
                    case E.COMPOUND:
                        c(e, a, f, m, w, b, x, g, V);
                        break;
                    case E.CONVEXPOLYHEDRON:
                        var C = [];
                        c(C, f, a, w, m, x, b, V, g);
                        for (var B = 0; B !== C.length; B++) i(C[B]), e.push(C[B]);
                        break;
                    default:
                        console.warn("Collision between CANNON.Shape.types.COMPOUND and " + f.type + " not implemented yet.")
                } else if (a.type === E.CONVEXPOLYHEDRON) switch (f.type) {
                    case E.CONVEXPOLYHEDRON:
                        u(e, a, f, m, w, b, x, g, V);
                        break;
                    default:
                        console.warn("Collision between CANNON.Shape.types.CONVEXPOLYHEDRON and " + f.type + " not implemented yet.")
                }
            } else switch (f.type) {
                case E.PLANE:
                    p(e, a, f, m, w, b, x, g, V);
                    break;
                case E.SPHERE:
                    d(e, a, f, m, w, b, x, g, V);
                    break;
                case E.BOX:
                    v(e, a, f.convexPolyhedronRepresentation, m, w, b, x, g, V);
                    break;
                case E.CONVEXPOLYHEDRON:
                    v(e, a, f, m, w, b, x, g, V);
                    break;
                case E.COMPOUND:
                    c(e, a, f, m, w, b, x, g, V);
                    break;
                default:
                    console.warn("Collision between CANNON.Particle and " + f.type + " not implemented yet.")
            }
            for (var I = 0, R = e.length; z && I !== R; I++) i(e[I])
        }
        this.contactReduction = !1;
        var f = [],
            m = new t.Vec3Pool,
            w = new t.Vec3,
            b = new t.Vec3,
            x = new t.Vec3,
            g = new t.Vec3,
            V = new t.Vec3,
            z = new t.Vec3,
            E = new t.Vec3,
            S = new t.Vec3,
            N = new t.Vec3,
            M = [new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3],
            P = new t.Vec3,
            q = new t.Vec3,
            j = new t.Vec3,
            C = new t.Vec3,
            B = new t.Vec3,
            I = new t.Vec3,
            R = new t.Vec3,
            O = new t.Vec3,
            A = new t.Vec3,
            T = new t.Vec3,
            F = new t.Vec3,
            k = new t.Vec3,
            U = new t.Vec3,
            W = new t.Vec3;
        new t.Vec3, new t.Vec3;
        var L = [],
            D = [],
            H = new t.Vec3,
            Q = new t.Vec3,
            X = new t.Vec3,
            G = new t.Vec3,
            Y = new t.Vec3,
            Z = new t.Vec3,
            _ = new t.Vec3,
            K = new t.Vec3,
            J = new t.Vec3,
            $ = new t.Vec3,
            te = new t.Quaternion,
            ee = new t.Vec3;
        new t.Vec3;
        var ie = new t.Vec3,
            ne = new t.Vec3,
            oe = new t.Vec3;
        this.reduceContacts = function() {}, this.getContacts = function(t, e, i, n, o) {
            f = o;
            for (var a = 0, s = t.length; a !== s; a++) {
                var r = t[a],
                    h = e[a];
                y(n, r.shape, h.shape, r.position, h.position, r.quaternion, h.quaternion, r, h)
            }
        }
    }, t.Equation = function(t, e, i, n) {
        this.id = -1, this.minForce = i === void 0 ? -1e6 : i, this.maxForce = n === void 0 ? 1e6 : n, this.bi = t, this.bj = e, this.stiffness = 1e7, this.regularizationTime = 5, this.a = 0, this.b = 0, this.eps = 0, this.spookParamsNeedsUpdate = !0
    }, t.Equation.prototype.constructor = t.Equation, t.Equation.prototype.updateSpookParams = function(t) {
        var e = this.regularizationTime,
            i = this.stiffness;
        this.a = 4 / (t * (1 + 4 * e)), this.b = 4 * e / (1 + 4 * e), this.eps = 4 / (t * t * i * (1 + 4 * e))
    }, t.ContactEquation = function(e, i) {
        t.Equation.call(this, e, i, 0, 1e6), this.restitution = 0, this.ri = new t.Vec3, this.rj = new t.Vec3, this.penetrationVec = new t.Vec3, this.ni = new t.Vec3, this.rixn = new t.Vec3, this.rjxn = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.biInvInertiaTimesRixn = new t.Vec3, this.bjInvInertiaTimesRjxn = new t.Vec3
    }, t.ContactEquation.prototype = new t.Equation, t.ContactEquation.prototype.constructor = t.ContactEquation, t.ContactEquation.prototype.reset = function() {
        this.invInertiaTimesRxnNeedsUpdate = !0
    };
    var ne = new t.Vec3,
        oe = new t.Vec3,
        ae = new t.Vec3;
    t.ContactEquation.prototype.computeB = function(t) {
        var e = this.a,
            i = this.b,
            n = this.bi,
            o = this.bj,
            a = this.ri,
            s = this.rj,
            r = this.rixn,
            h = this.rjxn,
            c = ae,
            l = n.velocity,
            u = n.angularVelocity ? n.angularVelocity : c,
            p = n.force,
            d = n.tau ? n.tau : c,
            v = o.velocity,
            y = o.angularVelocity ? o.angularVelocity : c,
            f = o.force,
            m = o.tau ? o.tau : c,
            w = this.penetrationVec,
            b = n.invMass,
            x = o.invMass,
            g = this.invIi,
            V = this.invIj;
        n.invInertia ? g.setTrace(n.invInertia) : g.identity(), o.invInertia ? V.setTrace(o.invInertia) : V.identity();
        var z = this.ni;
        a.cross(z, r), s.cross(z, h);
        var w = this.penetrationVec;
        w.set(0, 0, 0), w.vadd(o.position, w), w.vadd(s, w), w.vsub(n.position, w), w.vsub(a, w);
        var E = z.dot(w),
            S = ne,
            N = oe;
        g.vmult(d, S), V.vmult(m, N);
        var M = this.restitution + 1,
            P = M * v.dot(z) - M * l.dot(z) + y.dot(h) - u.dot(r),
            q = f.dot(z) * x - p.dot(z) * b + h.dot(N) - r.dot(S),
            j = -E * e - P * i - t * q;
        return j
    }, new t.Vec3, new t.Vec3, t.ContactEquation.prototype.computeC = function() {
        var t = this.bi,
            e = this.bj,
            i = this.rixn,
            n = this.rjxn,
            o = t.invMass,
            a = e.invMass,
            s = o + a + this.eps,
            r = this.invIi,
            h = this.invIj;
        return r.vmult(i, this.biInvInertiaTimesRixn), h.vmult(n, this.bjInvInertiaTimesRjxn), s += this.biInvInertiaTimesRixn.dot(i), s += this.bjInvInertiaTimesRjxn.dot(n)
    };
    var se = new t.Vec3;
    t.ContactEquation.prototype.computeGWlambda = function() {
        var t = this.bi,
            e = this.bj,
            i = se,
            n = 0;
        return e.vlambda.vsub(t.vlambda, i), n += i.dot(this.ni), t.wlambda && (n -= t.wlambda.dot(this.rixn)), e.wlambda && (n += e.wlambda.dot(this.rjxn)), n
    };
    var re = new t.Vec3,
        he = new t.Vec3;
    t.ContactEquation.prototype.addToWlambda = function(t) {
        var e = this.bi,
            i = this.bj,
            n = (this.rixn, this.rjxn, e.invMass),
            o = i.invMass,
            a = this.ni,
            s = re,
            r = he;
        a.mult(n * t, r), e.vlambda.vsub(r, e.vlambda), a.mult(o * t, r), i.vlambda.vadd(r, i.vlambda), void 0 !== e.wlambda && (this.biInvInertiaTimesRixn.mult(t, s), e.wlambda.vsub(s, e.wlambda)), void 0 !== i.wlambda && (this.bjInvInertiaTimesRjxn.mult(t, s), i.wlambda.vadd(s, i.wlambda))
    }, t.FrictionEquation = function(e, i, n) {
        t.Equation.call(this, e, i, -n, n), this.ri = new t.Vec3, this.rj = new t.Vec3, this.t = new t.Vec3, this.rixt = new t.Vec3, this.rjxt = new t.Vec3, this.wixri = new t.Vec3, this.wjxrj = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.relVel = new t.Vec3, this.relForce = new t.Vec3, this.biInvInertiaTimesRixt = new t.Vec3, this.bjInvInertiaTimesRjxt = new t.Vec3
    }, t.FrictionEquation.prototype = new t.Equation, t.FrictionEquation.prototype.constructor = t.FrictionEquation;
    var ce = new t.Vec3,
        le = new t.Vec3,
        ue = new t.Vec3;
    t.FrictionEquation.prototype.computeB = function(t) {
        var e = this.a,
            i = this.b,
            n = this.bi,
            o = this.bj,
            a = this.ri,
            s = this.rj,
            r = this.rixt,
            h = this.rjxt,
            c = this.wixri,
            l = this.wjxrj,
            u = ue,
            p = n.velocity,
            d = n.angularVelocity ? n.angularVelocity : u,
            v = n.force,
            y = n.tau ? n.tau : u,
            f = o.velocity,
            m = o.angularVelocity ? o.angularVelocity : u,
            w = o.force,
            b = o.tau ? o.tau : u,
            x = (this.relVel, this.relForce, n.invMass),
            g = o.invMass,
            V = this.invIi,
            z = this.invIj,
            E = this.t,
            S = ce,
            N = le;
        n.invInertia && V.setTrace(n.invInertia), o.invInertia && z.setTrace(o.invInertia), a.cross(E, r), s.cross(E, h), d.cross(a, c), m.cross(s, l), V.vmult(y, S), z.vmult(b, N);
        var M = 0,
            P = f.dot(E) - p.dot(E) + l.dot(E) - c.dot(E),
            q = w.dot(E) * g - v.dot(E) * x + h.dot(N) - r.dot(S),
            j = -M * e - P * i - t * q;
        return j
    }, t.FrictionEquation.prototype.computeC = function() {
        var t = this.bi,
            e = this.bj,
            i = this.rixt,
            n = this.rjxt,
            o = t.invMass,
            a = e.invMass,
            s = o + a + this.eps,
            r = this.invIi,
            h = this.invIj;
        return r.vmult(i, this.biInvInertiaTimesRixt), h.vmult(n, this.bjInvInertiaTimesRjxt), s += this.biInvInertiaTimesRixt.dot(i), s += this.bjInvInertiaTimesRjxt.dot(n)
    };
    var pe = new t.Vec3;
    t.FrictionEquation.prototype.computeGWlambda = function() {
        var t = this.bi,
            e = this.bj,
            i = 0,
            n = pe;
        return e.vlambda.vsub(t.vlambda, n), i += n.dot(this.t), t.wlambda && (i -= t.wlambda.dot(this.rixt)), e.wlambda && (i += e.wlambda.dot(this.rjxt)), i
    };
    var de = new t.Vec3;
    t.FrictionEquation.prototype.addToWlambda = function(t) {
        var e = this.bi,
            i = this.bj,
            n = (this.rixt, this.rjxt, e.invMass),
            o = i.invMass,
            a = this.t,
            s = de,
            r = e.wlambda,
            h = i.wlambda;
        a.mult(n * t, s), e.vlambda.vsub(s, e.vlambda), a.mult(o * t, s), i.vlambda.vadd(s, i.vlambda), r && (this.biInvInertiaTimesRixt.mult(t, s), r.vsub(s, r)), h && (this.bjInvInertiaTimesRjxt.mult(t, s), h.vadd(s, h))
    }, t.RotationalEquation = function(e, i) {
        t.Equation.call(this, e, i, -1e6, 1e6), this.ni = new t.Vec3, this.nj = new t.Vec3, this.nixnj = new t.Vec3, this.njxni = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.relVel = new t.Vec3, this.relForce = new t.Vec3
    }, t.RotationalEquation.prototype = new t.Equation, t.RotationalEquation.prototype.constructor = t.RotationalEquation, t.RotationalEquation.prototype.computeB = function(e) {
        var i = this.a,
            n = this.b,
            o = this.bi,
            a = this.bj,
            s = this.ni,
            r = this.nj,
            h = this.nixnj,
            c = this.njxni;
        o.velocity;
        var l = o.angularVelocity ? o.angularVelocity : new t.Vec3;
        o.force, o.tau ? o.tau : new t.Vec3, a.velocity;
        var u = a.angularVelocity ? a.angularVelocity : new t.Vec3;
        a.force, a.tau ? a.tau : new t.Vec3, o.invMass, a.invMass;
        var p = this.invIi,
            d = this.invIj;
        o.invInertia ? p.setTrace(o.invInertia) : p.identity(), a.invInertia ? d.setTrace(a.invInertia) : d.identity(), s.cross(r, h), r.cross(s, c);
        var v = -s.dot(r),
            y = c.dot(l) + h.dot(u),
            f = 0,
            m = -v * i - y * n - e * f;
        return m
    }, t.RotationalEquation.prototype.computeC = function() {
        var t = this.bi,
            e = this.bj,
            i = this.nixnj,
            n = this.njxni;
        t.invMass, e.invMass;
        var o = this.eps,
            a = this.invIi,
            s = this.invIj;
        return t.invInertia ? a.setTrace(t.invInertia) : a.identity(), e.invInertia ? s.setTrace(e.invInertia) : s.identity(), o += a.vmult(n).dot(n), o += s.vmult(i).dot(i)
    };
    var se = new t.Vec3;
    t.RotationalEquation.prototype.computeGWlambda = function() {
        var t = this.bi,
            e = this.bj,
            i = 0;
        return t.wlambda && (i += t.wlambda.dot(this.njxni)), e.wlambda && (i += e.wlambda.dot(this.nixnj)), i
    }, t.RotationalEquation.prototype.addToWlambda = function(t) {
        var e = this.bi,
            i = this.bj,
            n = this.nixnj;
        if (this.njxni, e.invMass, i.invMass, e.wlambda) {
            var o = this.invIi;
            e.wlambda.vsub(o.vmult(n).mult(t), e.wlambda)
        }
        if (i.wlambda) {
            var o = this.invIj;
            i.wlambda.vadd(o.vmult(n).mult(t), i.wlambda)
        }
    }, t.Constraint = function(t, e) {
        this.equations = [], this.bodyA = t, this.bodyB = e
    }, t.Constraint.prototype.update = function() {
        throw Error("method update() not implmemented in this Constraint subclass!")
    }, t.DistanceConstraint = function(e, i, n, o) {
        t.Constraint.call(this, e, i), o === void 0 && (o = 1e6);
        var a = this.equations = [new t.ContactEquation(e, i)],
            s = a[0];
        s.minForce = -o, s.maxForce = o, this.update = function() {
            i.position.vsub(e.position, s.ni), s.ni.normalize(), s.ni.mult(.5 * n, s.ri), s.ni.mult(.5 * -n, s.rj)
        }
    }, t.DistanceConstraint.prototype = new t.Constraint, t.RotationalMotorEquation = function(e, i, n) {
        n = n || 1e6, t.Equation.call(this, e, i, -n, n), this.axisA = new t.Vec3, this.axisB = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.targetVelocity = 0
    }, t.RotationalMotorEquation.prototype = new t.Equation, t.RotationalMotorEquation.prototype.constructor = t.RotationalMotorEquation, t.RotationalMotorEquation.prototype.computeB = function(e) {
        var i = this.a,
            n = this.b,
            o = this.bi,
            a = this.bj,
            s = this.axisA,
            r = this.axisB;
        o.velocity;
        var h = o.angularVelocity ? o.angularVelocity : new t.Vec3;
        o.force, o.tau ? o.tau : new t.Vec3, a.velocity;
        var c = a.angularVelocity ? a.angularVelocity : new t.Vec3;
        a.force, a.tau ? a.tau : new t.Vec3, o.invMass, a.invMass;
        var l = this.invIi,
            u = this.invIj;
        o.invInertia ? l.setTrace(o.invInertia) : l.identity(), a.invInertia ? u.setTrace(a.invInertia) : u.identity();
        var p = 0,
            d = s.dot(h) + r.dot(c) + this.targetVelocity,
            v = 0,
            y = -p * i - d * n - e * v;
        return y
    }, t.RotationalMotorEquation.prototype.computeC = function() {
        var t = this.bi,
            e = this.bj,
            i = this.axisA,
            n = this.axisB;
        t.invMass, e.invMass;
        var o = this.eps,
            a = this.invIi,
            s = this.invIj;
        return t.invInertia ? a.setTrace(t.invInertia) : a.identity(), e.invInertia ? s.setTrace(e.invInertia) : s.identity(), o += a.vmult(i).dot(n), o += s.vmult(n).dot(n)
    };
    var se = new t.Vec3;
    t.RotationalMotorEquation.prototype.computeGWlambda = function() {
        var t = this.bi,
            e = this.bj,
            i = this.axisA,
            n = this.axisB,
            o = 0;
        return t.wlambda && (o += t.wlambda.dot(i)), e.wlambda && (o += e.wlambda.dot(n)), o
    }, t.RotationalMotorEquation.prototype.addToWlambda = function(t) {
        var e = this.bi,
            i = this.bj,
            n = this.axisA,
            o = this.axisB;
        if (e.invMass, i.invMass, e.wlambda) {
            var a = this.invIi;
            e.wlambda.vsub(a.vmult(n).mult(t), e.wlambda)
        }
        if (i.wlambda) {
            var a = this.invIj;
            i.wlambda.vadd(a.vmult(o).mult(t), i.wlambda)
        }
    }, t.HingeConstraint = function(e, i, n, o, a, s, r) {
        t.Constraint.call(this, e, o), r = r || 1e6;
        var h = this,
            c = this.equations = [new t.RotationalEquation(e, o), new t.RotationalEquation(e, o), new t.ContactEquation(e, o), new t.ContactEquation(e, o), new t.ContactEquation(e, o)];
        this.getRotationalEquation1 = function() {
            return c[0]
        }, this.getRotationalEquation2 = function() {
            return c[1]
        }, this.getPointToPointEquation1 = function() {
            return c[2]
        }, this.getPointToPointEquation2 = function() {
            return c[3]
        }, this.getPointToPointEquation3 = function() {
            return c[4]
        };
        var l, u = this.getRotationalEquation1(),
            p = this.getRotationalEquation2(),
            d = this.getPointToPointEquation1(),
            v = this.getPointToPointEquation2(),
            y = this.getPointToPointEquation3();
        v.minForce = y.minForce = d.minForce = -r, v.maxForce = y.maxForce = d.maxForce = r;
        var f = i.unit(),
            m = a.unit(),
            w = new t.Vec3,
            b = new t.Vec3,
            x = new t.Vec3;
        n.cross(f, w), n.cross(w, b), s.cross(m, x), w.normalize(), x.normalize();
        var g = !1;
        this.motorTargetVelocity = 0, this.motorMinForce = -r, this.motorMaxForce = r, this.enableMotor = function() {
            g || (l = new t.RotationalMotorEquation(e, o, r), c.push(l), g = !0)
        }, this.disableMotor = function() {
            g && (g = !1, l = null, c.pop())
        }, this.update = function() {
            d.ni.set(1, 0, 0), v.ni.set(0, 1, 0), y.ni.set(0, 0, 1), e.quaternion.vmult(i, d.ri), o.quaternion.vmult(a, d.rj), d.ri.copy(v.ri), d.rj.copy(v.rj), d.ri.copy(y.ri), d.rj.copy(y.rj), e.quaternion.vmult(w, u.ni), o.quaternion.vmult(s, u.nj), e.quaternion.vmult(b, p.ni), o.quaternion.vmult(s, p.nj), g && (e.quaternion.vmult(n, l.axisA), o.quaternion.vmult(s, l.axisB), l.targetVelocity = h.motorTargetVelocity, l.maxForce = h.motorMaxForce, l.minForce = h.motorMinForce)
        }
    }, t.HingeConstraint.prototype = new t.Constraint, t.PointToPointConstraint = function(e, i, n, o, a) {
        t.Constraint.call(this, e, n);
        var s = this.equations = [new t.ContactEquation(e, n), new t.ContactEquation(e, n), new t.ContactEquation(e, n)],
            r = s[0],
            h = s[1],
            c = s[2];
        h.minForce = c.minForce = r.minForce = -a, h.maxForce = c.maxForce = r.maxForce = a, this.update = function() {
            n.position.vsub(e.position, r.ni), r.ni.normalize(), e.quaternion.vmult(i, r.ri), n.quaternion.vmult(o, r.rj), r.ni.tangents(h.ni, c.ni), r.ri.copy(h.ri), r.rj.copy(h.rj), r.ri.copy(c.ri), r.rj.copy(c.rj)
        }
    }, t.PointToPointConstraint.prototype = new t.Constraint, "undefined" != typeof module ? module.exports = t : this.CANNON = t
}).apply(this);
'use strict';
// Ported from Stefan Gustavson's java implementation
// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// Read Stefan's excellent paper for details on how this code works.
//
// Sean McCullough banksean@gmail.com

/**
 * You can pass in a random number generator object if you like.
 * It is assumed to have a random() method.
 */
var SimplexNoise = (function() {
    var SimplexNoise = function(r) {
        if (r == undefined) r = Math;
        this.grad3 = [
            [1, 1, 0],
            [-1, 1, 0],
            [1, -1, 0],
            [-1, -1, 0],
            [1, 0, 1],
            [-1, 0, 1],
            [1, 0, -1],
            [-1, 0, -1],
            [0, 1, 1],
            [0, -1, 1],
            [0, 1, -1],
            [0, -1, -1]
        ];
        this.p = [];
        for (var i = 0; i < 256; i++) {
            this.p[i] = Math.floor(r.random() * 256);
        }
        // To remove the need for index wrapping, double the permutation table length 
        this.perm = [];
        for (var i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
        }

        // A lookup table to traverse the simplex around a given point in 4D. 
        // Details can be found where this table is used, in the 4D noise method. 
        this.simplex = [
            [0, 1, 2, 3],
            [0, 1, 3, 2],
            [0, 0, 0, 0],
            [0, 2, 3, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 2, 3, 0],
            [0, 2, 1, 3],
            [0, 0, 0, 0],
            [0, 3, 1, 2],
            [0, 3, 2, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 3, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 2, 0, 3],
            [0, 0, 0, 0],
            [1, 3, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 3, 0, 1],
            [2, 3, 1, 0],
            [1, 0, 2, 3],
            [1, 0, 3, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 3, 1],
            [0, 0, 0, 0],
            [2, 1, 3, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 1, 3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [3, 0, 1, 2],
            [3, 0, 2, 1],
            [0, 0, 0, 0],
            [3, 1, 2, 0],
            [2, 1, 0, 3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [3, 1, 0, 2],
            [0, 0, 0, 0],
            [3, 2, 0, 1],
            [3, 2, 1, 0]
        ];
    };

    SimplexNoise.prototype.dot = function(g, x, y) {
        return g[0] * x + g[1] * y;
    };

    SimplexNoise.prototype.noise = function(xin, yin) {
        var n0, n1, n2; // Noise contributions from the three corners 
        // Skew the input space to determine which simplex cell we're in 
        var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
        var s = (xin + yin) * F2; // Hairy factor for 2D 
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
        var t = (i + j) * G2;
        var X0 = i - t; // Unskew the cell origin back to (x,y) space 
        var Y0 = j - t;
        var x0 = xin - X0; // The x,y distances from the cell origin 
        var y0 = yin - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle. 
        // Determine which simplex we are in. 
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords 
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        } // lower triangle, XY order: (0,0)->(1,0)->(1,1) 
        else {
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1) 
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and 
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where 
        // c = (3-sqrt(3))/6 
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords 
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords 
        var y2 = y0 - 1.0 + 2.0 * G2;
        // Work out the hashed gradient indices of the three simplex corners 
        var ii = i & 255;
        var jj = j & 255;
        var gi0 = this.perm[ii + this.perm[jj]] % 12;
        var gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
        var gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
        // Calculate the contribution from the three corners 
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 < 0) n0 = 0.0;
        else {
            t0 *= t0;
            n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0); // (x,y) of grad3 used for 2D gradient 
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 < 0) n1 = 0.0;
        else {
            t1 *= t1;
            n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 < 0) n2 = 0.0;
        else {
            t2 *= t2;
            n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
        }
        // Add contributions from each corner to get the final noise value. 
        // The result is scaled to return values in the interval [-1,1]. 
        return 70.0 * (n0 + n1 + n2);
    };

    // 3D simplex noise 
    SimplexNoise.prototype.noise3d = function(xin, yin, zin) {
        var n0, n1, n2, n3; // Noise contributions from the four corners 
        // Skew the input space to determine which simplex cell we're in 
        var F3 = 1.0 / 3.0;
        var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D 
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var G3 = 1.0 / 6.0; // Very nice and simple unskew factor, too 
        var t = (i + j + k) * G3;
        var X0 = i - t; // Unskew the cell origin back to (x,y,z) space 
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = xin - X0; // The x,y,z distances from the cell origin 
        var y0 = yin - Y0;
        var z0 = zin - Z0;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron. 
        // Determine which simplex we are in. 
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords 
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords 
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // X Y Z order 
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // X Z Y order 
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // Z X Y order 
        } else { // x0<y0 
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Z Y X order 
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Y Z X order 
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // Y X Z order 
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z), 
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and 
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where 
        // c = 1/6.
        var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords 
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords 
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords 
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3;
        // Work out the hashed gradient indices of the four simplex corners 
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var gi0 = this.perm[ii + this.perm[jj + this.perm[kk]]] % 12;
        var gi1 = this.perm[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]] % 12;
        var gi2 = this.perm[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]] % 12;
        var gi3 = this.perm[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]] % 12;
        // Calculate the contribution from the four corners 
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0.0;
        else {
            t0 *= t0;
            n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0, z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0.0;
        else {
            t1 *= t1;
            n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1, z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0.0;
        else {
            t2 *= t2;
            n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2, z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0.0;
        else {
            t3 *= t3;
            n3 = t3 * t3 * this.dot(this.grad3[gi3], x3, y3, z3);
        }
        // Add contributions from each corner to get the final noise value. 
        // The result is scaled to stay just inside [-1,1] 
        return 32.0 * (n0 + n1 + n2 + n3);
    };

    return SimplexNoise;
})();