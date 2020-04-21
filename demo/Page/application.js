!
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(_, t) {
    function u(t) {
        var e = !!t && "length" in t && t.length,
        n = dt.type(t);
        return "function" !== n && !dt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    function e(t, n, r) {
        if (dt.isFunction(n)) return dt.grep(t,
        function(t, e) {
            return !! n.call(t, e, t) !== r
        });
        if (n.nodeType) return dt.grep(t,
        function(t) {
            return t === n !== r
        });
        if ("string" == typeof n) {
            if (_t.test(n)) return dt.filter(n, t, r);
            n = dt.filter(n, t)
        }
        return dt.grep(t,
        function(t) {
            return - 1 < dt.inArray(t, n) !== r
        })
    }
    function n(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    function c(t) {
        var n = {};
        return dt.each(t.match(At) || [],
        function(t, e) {
            n[e] = !0
        }),
        n
    }
    function i() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", o), _.removeEventListener("load", o)) : (rt.detachEvent("onreadystatechange", o), _.detachEvent("onload", o))
    }
    function o() { (rt.addEventListener || "load" === _.event.type || "complete" === rt.readyState) && (i(), dt.ready())
    }
    function s(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var r = "data-" + e.replace(Lt, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: qt.test(n) ? dt.parseJSON(n) : n)
                } catch(i) {}
                dt.data(t, e, n)
            } else n = undefined
        }
        return n
    }
    function l(t) {
        var e;
        for (e in t) if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function r(t, e, n, r) {
        if (Dt(t)) {
            var i, o, a = dt.expando,
            u = t.nodeType,
            s = u ? dt.cache: t,
            l = u ? t[a] : t[a] && a;
            if (l && s[l] && (r || s[l].data) || n !== undefined || "string" != typeof e) return l || (l = u ? t[a] = nt.pop() || dt.guid++:a),
            s[l] || (s[l] = u ? {}: {
                toJSON: dt.noop
            }),
            "object" != typeof e && "function" != typeof e || (r ? s[l] = dt.extend(s[l], e) : s[l].data = dt.extend(s[l].data, e)),
            o = s[l],
            r || (o.data || (o.data = {}), o = o.data),
            n !== undefined && (o[dt.camelCase(e)] = n),
            "string" == typeof e ? null == (i = o[e]) && (i = o[dt.camelCase(e)]) : i = o,
            i
        }
    }
    function a(t, e, n) {
        if (Dt(t)) {
            var r, i, o = t.nodeType,
            a = o ? dt.cache: t,
            u = o ? t[dt.expando] : dt.expando;
            if (a[u]) {
                if (e && (r = n ? a[u] : a[u].data)) {
                    i = (e = dt.isArray(e) ? e.concat(dt.map(e, dt.camelCase)) : e in r ? [e] : (e = dt.camelCase(e)) in r ? [e] : e.split(" ")).length;
                    for (; i--;) delete r[e[i]];
                    if (n ? !l(r) : !dt.isEmptyObject(r)) return
                } (n || (delete a[u].data, l(a[u]))) && (o ? dt.cleanData([t], !0) : ft.deleteExpando || a != a.window ? delete a[u] : a[u] = undefined)
            }
        }
    }
    function f(t, e, n, r) {
        var i, o = 1,
        a = 20,
        u = r ?
        function() {
            return r.cur()
        }: function() {
            return dt.css(t, e, "")
        },
        s = u(),
        l = n && n[3] || (dt.cssNumber[e] ? "": "px"),
        c = (dt.cssNumber[e] || "px" !== l && +s) && zt.exec(dt.css(t, e));
        if (c && c[3] !== l) for (l = l || c[3], n = n || [], c = +s || 1; c /= o = o || ".5", dt.style(t, e, c + l), o !== (o = u() / s) && 1 !== o && --a;);
        return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
        i
    }
    function m(t) {
        var e = Yt.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement) for (; e.length;) n.createElement(e.pop());
        return n
    }
    function v(t, e) {
        var n, r, i = 0,
        o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o) for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) ! e || dt.nodeName(r, e) ? o.push(r) : dt.merge(o, v(r, e));
        return e === undefined || e && dt.nodeName(t, e) ? dt.merge([t], o) : o
    }
    function y(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++) dt._data(n, "globalEval", !e || dt._data(e[r], "globalEval"))
    }
    function b(t) {
        Bt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function g(t, e, n, r, i) {
        for (var o, a, u, s, l, c, f, h = t.length,
        d = m(e), p = [], g = 0; g < h; g++) if ((a = t[g]) || 0 === a) if ("object" === dt.type(a)) dt.merge(p, a.nodeType ? [a] : a);
        else if (Gt.test(a)) {
            for (s = s || d.appendChild(e.createElement("div")), l = (Wt.exec(a) || ["", ""])[1].toLowerCase(), f = Vt[l] || Vt._default, s.innerHTML = f[1] + dt.htmlPrefilter(a) + f[2], o = f[0]; o--;) s = s.lastChild;
            if (!ft.leadingWhitespace && Xt.test(a) && p.push(e.createTextNode(Xt.exec(a)[0])), !ft.tbody) for (o = (a = "table" !== l || Jt.test(a) ? "<table>" !== f[1] || Jt.test(a) ? 0 : s: s.firstChild) && a.childNodes.length; o--;) dt.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (dt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
            s = d.lastChild
        } else p.push(e.createTextNode(a));
        for (s && d.removeChild(s), ft.appendChecked || dt.grep(v(p, "input"), b), g = 0; a = p[g++];) if (r && -1 < dt.inArray(a, r)) i && i.push(a);
        else if (u = dt.contains(a.ownerDocument, a), s = v(d.appendChild(a), "script"), u && y(s), n) for (o = 0; a = s[o++];) Ut.test(a.type || "") && n.push(a);
        return s = null,
        d
    }
    function h() {
        return ! 0
    }
    function d() {
        return ! 1
    }
    function p() {
        try {
            return rt.activeElement
        } catch(t) {}
    }
    function x(t, e, n, r, i, o) {
        var a, u;
        if ("object" == typeof e) {
            for (u in "string" != typeof n && (r = r || n, n = undefined), e) x(t, u, n, r, e[u], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = d;
        else if (!i) return t;
        return 1 === o && (a = i, (i = function(t) {
            return dt().off(t),
            a.apply(this, arguments)
        }).guid = a.guid || (a.guid = dt.guid++)),
        t.each(function() {
            dt.event.add(this, e, i, r, n)
        })
    }
    function M(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function w(t) {
        return t.type = (null !== dt.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function E(t) {
        var e = ue.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function k(t, e) {
        if (1 === e.nodeType && dt.hasData(t)) {
            var n, r, i, o = dt._data(t),
            a = dt._data(e, o),
            u = o.events;
            if (u) for (n in delete a.handle, a.events = {},
            u) for (r = 0, i = u[n].length; r < i; r++) dt.event.add(e, n, u[n][r]);
            a.data && (a.data = dt.extend({},
            a.data))
        }
    }
    function S(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ft.noCloneEvent && e[dt.expando]) {
                for (r in (i = dt._data(e)).events) dt.removeEvent(e, r, i.handle);
                e.removeAttribute(dt.expando)
            }
            "script" === n && e.text !== t.text ? (w(e).text = t.text, E(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ft.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Bt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function T(n, r, i, o) {
        r = ot.apply([], r);
        var t, e, a, u, s, l, c = 0,
        f = n.length,
        h = f - 1,
        d = r[0],
        p = dt.isFunction(d);
        if (p || 1 < f && "string" == typeof d && !ft.checkClone && ae.test(d)) return n.each(function(t) {
            var e = n.eq(t);
            p && (r[0] = d.call(this, t, e.html())),
            T(e, r, i, o)
        });
        if (f && (t = (l = g(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = t), t || o)) {
            for (a = (u = dt.map(v(l, "script"), w)).length; c < f; c++) e = l,
            c !== h && (e = dt.clone(e, !0, !0), a && dt.merge(u, v(e, "script"))),
            i.call(n[c], e, c);
            if (a) for (s = u[u.length - 1].ownerDocument, dt.map(u, E), c = 0; c < a; c++) e = u[c],
            Ut.test(e.type || "") && !dt._data(e, "globalEval") && dt.contains(s, e) && (e.src ? dt._evalUrl && dt._evalUrl(e.src) : dt.globalEval((e.text || e.textContent || e.innerHTML || "").replace(se, "")));
            l = t = null
        }
        return n
    }
    function C(t, e, n) {
        for (var r, i = e ? dt.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || dt.cleanData(v(r)),
        r.parentNode && (n && dt.contains(r.ownerDocument, r) && y(v(r, "script")), r.parentNode.removeChild(r));
        return t
    }
    function N(t, e) {
        var n = dt(e.createElement(t)).appendTo(e.body),
        r = dt.css(n[0], "display");
        return n.detach(),
        r
    }
    function A(t) {
        var e = rt,
        n = fe[t];
        return n || ("none" !== (n = N(t, e)) && n || ((e = ((ce = (ce || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(), e.close(), n = N(t, e), ce.detach()), fe[t] = n),
        n
    }
    function j(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function D(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--;) if ((t = ke[n] + e) in Se) return t
    }
    function q(t, e) {
        for (var n, r, i, o = [], a = 0, u = t.length; a < u; a++)(r = t[a]).style && (o[a] = dt._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && $t(r) && (o[a] = dt._data(r, "olddisplay", A(r.nodeName)))) : (i = $t(r), (n && "none" !== n || !i) && dt._data(r, "olddisplay", i ? n: dt.css(r, "display"))));
        for (a = 0; a < u; a++)(r = t[a]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "": "none"));
        return t
    }
    function L(t, e, n) {
        var r = we.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function H(t, e, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += dt.css(t, n + Pt[o], !0, i)),
        r ? ("content" === n && (a -= dt.css(t, "padding" + Pt[o], !0, i)), "margin" !== n && (a -= dt.css(t, "border" + Pt[o] + "Width", !0, i))) : (a += dt.css(t, "padding" + Pt[o], !0, i), "padding" !== n && (a += dt.css(t, "border" + Pt[o] + "Width", !0, i)));
        return a
    }
    function F(t, e, n) {
        var r = !0,
        i = "width" === e ? t.offsetWidth: t.offsetHeight,
        o = me(t),
        a = ft.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = ve(t, e, o)) < 0 || null == i) && (i = t.style[e]), de.test(i)) return i;
            r = a && (ft.boxSizingReliable() || i === t.style[e]),
            i = parseFloat(i) || 0
        }
        return i + H(t, e, n || (a ? "border": "content"), r, o) + "px"
    }
    function R(t, e, n, r, i) {
        return new R.prototype.init(t, e, n, r, i)
    }
    function O() {
        return _.setTimeout(function() {
            Te = undefined
        }),
        Te = dt.now()
    }
    function z(t, e) {
        var n, r = {
            height: t
        },
        i = 0;
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = Pt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function P(t, e, n) {
        for (var r, i = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, e, t)) return r
    }
    function $(e, t, n) {
        var r, i, o, a, u, s, l, c = this,
        f = {},
        h = e.style,
        d = e.nodeType && $t(e),
        p = dt._data(e, "fxshow");
        for (r in n.queue || (null == (u = dt._queueHooks(e, "fx")).unqueued && (u.unqueued = 0, s = u.empty.fire, u.empty.fire = function() {
            u.unqueued || s()
        }), u.unqueued++, c.always(function() {
            c.always(function() {
                u.unqueued--,
                dt.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (l = dt.css(e, "display")) ? dt._data(e, "olddisplay") || A(e.nodeName) : l) && "none" === dt.css(e, "float") && (ft.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ft.shrinkWrapBlocks() || c.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        })), t) if (i = t[r], Le.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (d ? "hide": "show")) {
                if ("show" !== i || !p || p[r] === undefined) continue;
                d = !0
            }
            f[r] = p && p[r] || dt.style(e, r)
        } else l = undefined;
        if (dt.isEmptyObject(f))"inline" === ("none" === l ? A(e.nodeName) : l) && (h.display = l);
        else for (r in p ? "hidden" in p && (d = p.hidden) : p = dt._data(e, "fxshow", {}), o && (p.hidden = !d), d ? dt(e).show() : c.done(function() {
            dt(e).hide()
        }), c.done(function() {
            var t;
            for (t in dt._removeData(e, "fxshow"), f) dt.style(e, t, f[t])
        }), f) a = P(d ? p[r] : 0, r, c),
        r in p || (p[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }
    function I(t, e) {
        var n, r, i, o, a;
        for (n in t) if (i = e[r = dt.camelCase(n)], o = t[n], dt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = dt.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
        else e[r] = i
    }
    function B(o, t, e) {
        var n, a, r = 0,
        i = B.prefilters.length,
        u = dt.Deferred().always(function() {
            delete s.elem
        }),
        s = function() {
            if (a) return ! 1;
            for (var t = Te || O(), e = Math.max(0, l.startTime + l.duration - t), n = 1 - (e / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return u.notifyWith(o, [l, n, e]),
            n < 1 && i ? e: (u.resolveWith(o, [l]), !1)
        },
        l = u.promise({
            elem: o,
            props: dt.extend({},
            t),
            opts: dt.extend(!0, {
                specialEasing: {},
                easing: dt.easing._default
            },
            e),
            originalProperties: t,
            originalOptions: e,
            startTime: Te || O(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                var n = dt.Tween(o, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(t) {
                var e = 0,
                n = t ? l.tweens.length: 0;
                if (a) return this;
                for (a = !0; e < n; e++) l.tweens[e].run(1);
                return t ? (u.notifyWith(o, [l, 1, 0]), u.resolveWith(o, [l, t])) : u.rejectWith(o, [l, t]),
                this
            }
        }),
        c = l.props;
        for (I(c, l.opts.specialEasing); r < i; r++) if (n = B.prefilters[r].call(l, o, c, l.opts)) return dt.isFunction(n.stop) && (dt._queueHooks(l.elem, l.opts.queue).stop = dt.proxy(n.stop, n)),
        n;
        return dt.map(c, P, l),
        dt.isFunction(l.opts.start) && l.opts.start.call(o, l),
        dt.fx.timer(dt.extend(s, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function W(t) {
        return dt.attr(t, "class") || ""
    }
    function U(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, r = 0,
            i = t.toLowerCase().match(At) || [];
            if (dt.isFunction(e)) for (; n = i[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function X(e, i, o, a) {
        function u(t) {
            var r;
            return s[t] = !0,
            dt.each(e[t] || [],
            function(t, e) {
                var n = e(i, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }),
            r
        }
        var s = {},
        l = e === an;
        return u(i.dataTypes[0]) || !s["*"] && u("*")
    }
    function Y(t, e) {
        var n, r, i = dt.ajaxSettings.flatOptions || {};
        for (r in e) e[r] !== undefined && ((i[r] ? t: n || (n = {}))[r] = e[r]);
        return n && dt.extend(!0, t, n),
        t
    }
    function V(t, e, n) {
        for (var r, i, o, a, u = t.contents,
        s = t.dataTypes;
        "*" === s[0];) s.shift(),
        i === undefined && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i) for (a in u) if (u[a] && u[a].test(i)) {
            s.unshift(a);
            break
        }
        if (s[0] in n) o = s[0];
        else {
            for (a in n) {
                if (!s[0] || t.converters[a + " " + s[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o) return o !== s[0] && s.unshift(o),
        n[o]
    }
    function G(t, e, n, r) {
        var i, o, a, u, s, l = {},
        c = t.dataTypes.slice();
        if (c[1]) for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = o, o = c.shift()) if ("*" === o) o = s;
        else if ("*" !== s && s !== o) {
            if (! (a = l[s + " " + o] || l["* " + o])) for (i in l) if ((u = i.split(" "))[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) { ! 0 === a ? a = l[i] : !0 !== l[i] && (o = u[0], c.unshift(u[1]));
                break
            }
            if (!0 !== a) if (a && t["throws"]) e = a(e);
            else try {
                e = a(e)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: a ? f: "No conversion from " + s + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function J(t) {
        return t.style && t.style.display || dt.css(t, "display")
    }
    function Z(t) {
        if (!dt.contains(t.ownerDocument || rt, t)) return ! 0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === J(t) || "hidden" === t.type) return ! 0;
            t = t.parentNode
        }
        return ! 1
    }
    function K(n, t, r, i) {
        var e;
        if (dt.isArray(t)) dt.each(t,
        function(t, e) {
            r || fn.test(n) ? i(n, e) : K(n + "[" + ("object" == typeof e && null != e ? t: "") + "]", e, r, i)
        });
        else if (r || "object" !== dt.type(t)) i(n, t);
        else for (e in t) K(n + "[" + e + "]", t[e], r, i)
    }
    function Q() {
        try {
            return new _.XMLHttpRequest
        } catch(t) {}
    }
    function tt() {
        try {
            return new _.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function et(t) {
        return dt.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
    rt = _.document,
    it = nt.slice,
    ot = nt.concat,
    at = nt.push,
    ut = nt.indexOf,
    st = {},
    lt = st.toString,
    ct = st.hasOwnProperty,
    ft = {},
    ht = "1.12.4",
    dt = function(t, e) {
        return new dt.fn.init(t, e)
    },
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    gt = /^-ms-/,
    mt = /-([\da-z])/gi,
    vt = function(t, e) {
        return e.toUpperCase()
    };
    dt.fn = dt.prototype = {
        jquery: ht,
        constructor: dt,
        selector: "",
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : it.call(this)
        },
        pushStack: function(t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return dt.each(this, t)
        },
        map: function(n) {
            return this.pushStack(dt.map(this,
            function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            n = +t + (t < 0 ? e: 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    },
    dt.extend = dt.fn.extend = function(t) {
        var e, n, r, i, o, a, u = t || {},
        s = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof u && (c = u, u = arguments[s] || {},
        s++), "object" == typeof u || dt.isFunction(u) || (u = {}), s === l && (u = this, s--); s < l; s++) if (null != (o = arguments[s])) for (i in o) e = u[i],
        u !== (r = o[i]) && (c && r && (dt.isPlainObject(r) || (n = dt.isArray(r))) ? (n ? (n = !1, a = e && dt.isArray(e) ? e: []) : a = e && dt.isPlainObject(e) ? e: {},
        u[i] = dt.extend(c, a, r)) : r !== undefined && (u[i] = r));
        return u
    },
    dt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === dt.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === dt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return ! dt.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (!ft.ownFirst) for (e in t) return ct.call(t, e);
            for (e in t);
            return e === undefined || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? st[lt.call(t)] || "object": typeof t
        },
        globalEval: function(t) {
            t && dt.trim(t) && (_.execScript ||
            function(t) {
                _.eval.call(_, t)
            })(t)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(mt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (u(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(pt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (u(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            var r;
            if (e) {
                if (ut) return ut.call(e, t, n);
                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n: 0; n < r; n++) if (n in e && e[n] === t) return n
            }
            return - 1
        },
        merge: function(t, e) {
            for (var n = +e.length,
            r = 0,
            i = t.length; r < n;) t[i++] = e[r++];
            if (n != n) for (; e[r] !== undefined;) t[i++] = e[r++];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) ! e(t[i], i) !== a && r.push(t[i]);
            return r
        },
        map: function(t, e, n) {
            var r, i, o = 0,
            a = [];
            if (u(t)) for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
            else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (i = t[e], e = t, t = i),
            dt.isFunction(t) ? (n = it.call(arguments, 2), (r = function() {
                return t.apply(e || this, n.concat(it.call(arguments)))
            }).guid = t.guid = t.guid || dt.guid++, r) : undefined
        },
        now: function() {
            return + new Date
        },
        support: ft
    }),
    "function" == typeof Symbol && (dt.fn[Symbol.iterator] = nt[Symbol.iterator]),
    dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(t, e) {
        st["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(n) {
        function x(t, e, n, r) {
            var i, o, a, u, s, l, c, f, h = e && e.ownerDocument,
            d = e ? e.nodeType: 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((e ? e.ownerDocument || e: P) !== D && j(e), e = e || D, L)) {
                if (11 !== d && (l = vt.exec(t))) if (i = l[1]) {
                    if (9 === d) {
                        if (! (a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a),
                        n
                    } else if (h && (a = h.getElementById(i)) && O(e, a) && a.id === i) return n.push(a),
                    n
                } else {
                    if (l[2]) return K.apply(n, e.getElementsByTagName(t)),
                    n;
                    if ((i = l[3]) && v.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(i)),
                    n
                }
                if (v.qsa && !U[t + " "] && (!H || !H.test(t))) {
                    if (1 !== d) h = e,
                    f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(bt, "\\$&") : e.setAttribute("id", u = z), o = (c = k(t)).length, s = ht.test(u) ? "#" + u: "[id='" + u + "']"; o--;) c[o] = s + " " + m(c[o]);
                        f = c.join(","),
                        h = yt.test(t) && g(e.parentNode) || e
                    }
                    if (f) try {
                        return K.apply(n, h.querySelectorAll(f)),
                        n
                    } catch(p) {} finally {
                        u === z && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(ut, "$1"), e, n, r)
        }
        function t() {
            function n(t, e) {
                return r.push(t + " ") > w.cacheLength && delete n[r.shift()],
                n[t + " "] = e
            }
            var r = [];
            return n
        }
        function s(t) {
            return t[z] = !0,
            t
        }
        function i(t) {
            var e = D.createElement("div");
            try {
                return !! t(e)
            } catch(n) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function e(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = e
        }
        function l(t, e) {
            var n = e && t,
            r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
            return t ? 1 : -1
        }
        function r(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function o(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }
        function a(a) {
            return s(function(o) {
                return o = +o,
                s(function(t, e) {
                    for (var n, r = a([], t.length, o), i = r.length; i--;) t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }
        function g(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function u() {}
        function m(t) {
            for (var e = 0,
            n = t.length,
            r = ""; e < n; e++) r += t[e].value;
            return r
        }
        function f(u, t, e) {
            var s = t.dir,
            l = e && "parentNode" === s,
            c = I++;
            return t.first ?
            function(t, e, n) {
                for (; t = t[s];) if (1 === t.nodeType || l) return u(t, e, n)
            }: function(t, e, n) {
                var r, i, o, a = [$, c];
                if (n) {
                    for (; t = t[s];) if ((1 === t.nodeType || l) && u(t, e, n)) return ! 0
                } else for (; t = t[s];) if (1 === t.nodeType || l) {
                    if ((r = (i = (o = t[z] || (t[z] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[s]) && r[0] === $ && r[1] === c) return a[2] = r[2];
                    if ((i[s] = a)[2] = u(t, e, n)) return ! 0
                }
            }
        }
        function h(i) {
            return 1 < i.length ?
            function(t, e, n) {
                for (var r = i.length; r--;) if (!i[r](t, e, n)) return ! 1;
                return ! 0
            }: i[0]
        }
        function y(t, e, n) {
            for (var r = 0,
            i = e.length; r < i; r++) x(t, e[r], n);
            return n
        }
        function M(t, e, n, r, i) {
            for (var o, a = [], u = 0, s = t.length, l = null != e; u < s; u++)(o = t[u]) && (n && !n(o, r, i) || (a.push(o), l && e.push(u)));
            return a
        }
        function b(d, p, g, m, v, t) {
            return m && !m[z] && (m = b(m)),
            v && !v[z] && (v = b(v, t)),
            s(function(t, e, n, r) {
                var i, o, a, u = [],
                s = [],
                l = e.length,
                c = t || y(p || "*", n.nodeType ? [n] : n, []),
                f = !d || !t && p ? c: M(c, u, d, n, r),
                h = g ? v || (t ? d: l || m) ? [] : e: f;
                if (g && g(f, h, n, r), m) for (i = M(h, s), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (h[s[o]] = !(f[s[o]] = a));
                if (t) {
                    if (v || d) {
                        if (v) {
                            for (i = [], o = h.length; o--;)(a = h[o]) && i.push(f[o] = a);
                            v(null, h = [], i, r)
                        }
                        for (o = h.length; o--;)(a = h[o]) && -1 < (i = v ? tt(t, a) : u[o]) && (t[i] = !(e[i] = a))
                    }
                } else h = M(h === e ? h.splice(l, h.length) : h),
                v ? v(null, e, h, r) : K.apply(e, h)
            })
        }
        function d(t) {
            for (var i, e, n, r = t.length,
            o = w.relative[t[0].type], a = o || w.relative[" "], u = o ? 1 : 0, s = f(function(t) {
                return t === i
            },
            a, !0), l = f(function(t) {
                return - 1 < tt(i, t)
            },
            a, !0), c = [function(t, e, n) {
                var r = !o && (n || e !== C) || ((i = e).nodeType ? s(t, e, n) : l(t, e, n));
                return i = null,
                r
            }]; u < r; u++) if (e = w.relative[t[u].type]) c = [f(h(c), e)];
            else {
                if ((e = w.filter[t[u].type].apply(null, t[u].matches))[z]) {
                    for (n = ++u; n < r && !w.relative[t[n].type]; n++);
                    return b(1 < u && h(c), 1 < u && m(t.slice(0, u - 1).concat({
                        value: " " === t[u - 2].type ? "*": ""
                    })).replace(ut, "$1"), e, u < n && d(t.slice(u, n)), n < r && d(t = t.slice(n)), n < r && m(t))
                }
                c.push(e)
            }
            return h(c)
        }
        function c(m, v) {
            var y = 0 < v.length,
            b = 0 < m.length,
            t = function(t, e, n, r, i) {
                var o, a, u, s = 0,
                l = "0",
                c = t && [],
                f = [],
                h = C,
                d = t || b && w.find.TAG("*", i),
                p = $ += null == h ? 1 : Math.random() || .1,
                g = d.length;
                for (i && (C = e === D || e || i); l !== g && null != (o = d[l]); l++) {
                    if (b && o) {
                        for (a = 0, e || o.ownerDocument === D || (j(o), n = !L); u = m[a++];) if (u(o, e || D, n)) {
                            r.push(o);
                            break
                        }
                        i && ($ = p)
                    }
                    y && ((o = !u && o) && s--, t && c.push(o))
                }
                if (s += l, y && l !== s) {
                    for (a = 0; u = v[a++];) u(c, f, e, n);
                    if (t) {
                        if (0 < s) for (; l--;) c[l] || f[l] || (f[l] = J.call(r));
                        f = M(f)
                    }
                    K.apply(r, f),
                    i && !t && 0 < f.length && 1 < s + v.length && x.uniqueSort(r)
                }
                return i && ($ = p, C = h),
                c
            };
            return y ? s(t) : t
        }
        var p, v, w, _, E, k, S, T, C, N, A, j, D, q, L, H, F, R, O, z = "sizzle" + 1 * new Date,
        P = n.document,
        $ = 0,
        I = 0,
        B = t(),
        W = t(),
        U = t(),
        X = function(t, e) {
            return t === e && (A = !0),
            0
        },
        Y = 1 << 31,
        V = {}.hasOwnProperty,
        G = [],
        J = G.pop,
        Z = G.push,
        K = G.push,
        Q = G.slice,
        tt = function(t, e) {
            for (var n = 0,
            r = t.length; n < r; n++) if (t[n] === e) return n;
            return - 1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
        ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        st = new RegExp("^" + nt + "*," + nt + "*"),
        lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        ft = new RegExp(ot),
        ht = new RegExp("^" + rt + "$"),
        dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        pt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        Mt = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r != r || n ? e: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        wt = function() {
            j()
        };
        try {
            K.apply(G = Q.call(P.childNodes), P.childNodes),
            G[P.childNodes.length].nodeType
        } catch(_t) {
            K = {
                apply: G.length ?
                function(t, e) {
                    Z.apply(t, Q.call(e))
                }: function(t, e) {
                    for (var n = t.length,
                    r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        for (p in v = x.support = {},
        E = x.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !! e && "HTML" !== e.nodeName
        },
        j = x.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t: P;
            return r !== D && 9 === r.nodeType && r.documentElement && (q = (D = r).documentElement, L = !E(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), v.attributes = i(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), v.getElementsByTagName = i(function(t) {
                return t.appendChild(D.createComment("")),
                !t.getElementsByTagName("*").length
            }), v.getElementsByClassName = mt.test(D.getElementsByClassName), v.getById = i(function(t) {
                return q.appendChild(t).id = z,
                !D.getElementsByName || !D.getElementsByName(z).length
            }), v.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            },
            w.filter.ID = function(t) {
                var e = t.replace(xt, Mt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var n = t.replace(xt, Mt);
                return function(t) {
                    var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === n
                }
            }), w.find.TAG = v.getElementsByTagName ?
            function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var n, r = [],
                i = 0,
                o = e.getElementsByTagName(t);
                if ("*" !== t) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            },
            w.find.CLASS = v.getElementsByClassName &&
            function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && L) return e.getElementsByClassName(t)
            },
            F = [], H = [], (v.qsa = mt.test(D.querySelectorAll)) && (i(function(t) {
                q.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + z + "-]").length || H.push("~="),
                t.querySelectorAll(":checked").length || H.push(":checked"),
                t.querySelectorAll("a#" + z + "+*").length || H.push(".#.+[+~]")
            }), i(function(t) {
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                H.push(",.*:")
            })), (v.matchesSelector = mt.test(R = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(t) {
                v.disconnectedMatch = R.call(t, "div"),
                R.call(t, "[s!='']:x"),
                F.push("!=", ot)
            }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), e = mt.test(q.compareDocumentPosition), O = e || mt.test(q.contains) ?
            function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t,
                r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            X = e ?
            function(t, e) {
                if (t === e) return A = !0,
                0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === P && O(P, t) ? -1 : e === D || e.ownerDocument === P && O(P, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            }: function(t, e) {
                if (t === e) return A = !0,
                0;
                var n, r = 0,
                i = t.parentNode,
                o = e.parentNode,
                a = [t],
                u = [e];
                if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (i === o) return l(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? l(a[r], u[r]) : a[r] === P ? -1 : u[r] === P ? 1 : 0
            }),
            D
        },
        x.matches = function(t, e) {
            return x(t, null, null, e)
        },
        x.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== D && j(t), e = e.replace(ct, "='$1']"), v.matchesSelector && L && !U[e + " "] && (!F || !F.test(e)) && (!H || !H.test(e))) try {
                var n = R.call(t, e);
                if (n || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch(_t) {}
            return 0 < x(e, D, null, [t]).length
        },
        x.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && j(t),
            O(t, e)
        },
        x.attr = function(t, e) { (t.ownerDocument || t) !== D && j(t);
            var n = w.attrHandle[e.toLowerCase()],
            r = n && V.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !L) : undefined;
            return r !== undefined ? r: v.attributes || !L ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
        },
        x.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        x.uniqueSort = function(t) {
            var e, n = [],
            r = 0,
            i = 0;
            if (A = !v.detectDuplicates, N = !v.sortStable && t.slice(0), t.sort(X), A) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return N = null,
            t
        },
        _ = x.getText = function(t) {
            var e, n = "",
            r = 0,
            i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else for (; e = t[r++];) n += _(e);
            return n
        },
        (w = x.selectors = {
            cacheLength: 50,
            createPseudo: s,
            match: dt,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, Mt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Mt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || x.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && x.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && ft.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, Mt).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(t) {
                        var e = x.attr(t, n);
                        return null == e ? "!=" === r: !r || (e += "", "=" === r ? e === i: "!=" === r ? e !== i: "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice( - i.length) === i: "~=" === r ? -1 < (" " + e.replace(at, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, t, e, g, m) {
                    var v = "nth" !== p.slice(0, 3),
                    y = "last" !== p.slice( - 4),
                    b = "of-type" === t;
                    return 1 === g && 0 === m ?
                    function(t) {
                        return !! t.parentNode
                    }: function(t, e, n) {
                        var r, i, o, a, u, s, l = v !== y ? "nextSibling": "previousSibling",
                        c = t.parentNode,
                        f = b && t.nodeName.toLowerCase(),
                        h = !n && !b,
                        d = !1;
                        if (c) {
                            if (v) {
                                for (; l;) {
                                    for (a = t; a = a[l];) if (b ? a.nodeName.toLowerCase() === f: 1 === a.nodeType) return ! 1;
                                    s = l = "only" === p && !s && "nextSibling"
                                }
                                return ! 0
                            }
                            if (s = [y ? c.firstChild: c.lastChild], y && h) {
                                for (d = (u = (r = (i = (o = (a = c)[z] || (a[z] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === $ && r[1]) && r[2], a = u && c.childNodes[u]; a = ++u && a && a[l] || (d = u = 0) || s.pop();) if (1 === a.nodeType && ++d && a === t) {
                                    i[p] = [$, u, d];
                                    break
                                }
                            } else if (h && (d = u = (r = (i = (o = (a = t)[z] || (a[z] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === $ && r[1]), !1 === d) for (; (a = ++u && a && a[l] || (d = u = 0) || s.pop()) && ((b ? a.nodeName.toLowerCase() !== f: 1 !== a.nodeType) || !++d || (h && ((i = (o = a[z] || (a[z] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [$, d]), a !== t)););
                            return (d -= m) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || x.error("unsupported pseudo: " + t);
                    return a[z] ? a(o) : 1 < a.length ? (e = [t, t, "", o], w.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, e) {
                        for (var n, r = a(t, o), i = r.length; i--;) t[n = tt(t, r[i])] = !(e[n] = r[i])
                    }) : function(t) {
                        return a(t, 0, e)
                    }) : a
                }
            },
            pseudos: {
                not: s(function(t) {
                    var r = [],
                    i = [],
                    u = S(t.replace(ut, "$1"));
                    return u[z] ? s(function(t, e, n, r) {
                        for (var i, o = u(t, null, r, []), a = t.length; a--;)(i = o[a]) && (t[a] = !(e[a] = i))
                    }) : function(t, e, n) {
                        return r[0] = t,
                        u(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: s(function(e) {
                    return function(t) {
                        return 0 < x(e, t).length
                    }
                }),
                contains: s(function(e) {
                    return e = e.replace(xt, Mt),
                    function(t) {
                        return - 1 < (t.textContent || t.innerText || _(t)).indexOf(e)
                    }
                }),
                lang: s(function(n) {
                    return ht.test(n || "") || x.error("unsupported lang: " + n),
                    n = n.replace(xt, Mt).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = L ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === q
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return ! 1 === t.disabled
                },
                disabled: function(t) {
                    return ! 0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! w.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, n) {
                    return [n < 0 ? n + e: n]
                }),
                even: a(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: a(function(t, e, n) {
                    for (var r = n < 0 ? n + e: n; 0 <= --r;) t.push(r);
                    return t
                }),
                gt: a(function(t, e, n) {
                    for (var r = n < 0 ? n + e: n; ++r < e;) t.push(r);
                    return t
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[p] = r(p);
        for (p in {
            submit: !0,
            reset: !0
        }) w.pseudos[p] = o(p);
        return u.prototype = w.filters = w.pseudos,
        w.setFilters = new u,
        k = x.tokenize = function(t, e) {
            var n, r, i, o, a, u, s, l = W[t + " "];
            if (l) return e ? 0 : l.slice(0);
            for (a = t, u = [], s = w.preFilter; a;) {
                for (o in n && !(r = st.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(i = [])), n = !1, (r = lt.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(ut, " ")
                }), a = a.slice(n.length)), w.filter) ! (r = dt[o].exec(a)) || s[o] && !(r = s[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length: a ? x.error(t) : W(t, u).slice(0)
        },
        S = x.compile = function(t, e) {
            var n, r = [],
            i = [],
            o = U[t + " "];
            if (!o) {
                for (e || (e = k(t)), n = e.length; n--;)(o = d(e[n]))[z] ? r.push(o) : i.push(o); (o = U(t, c(i, r))).selector = t
            }
            return o
        },
        T = x.select = function(t, e, n, r) {
            var i, o, a, u, s, l = "function" == typeof t && t,
            c = !r && k(t = l.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && v.getById && 9 === e.nodeType && L && w.relative[o[1].type]) {
                    if (! (e = (w.find.ID(a.matches[0].replace(xt, Mt), e) || [])[0])) return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(t) ? 0 : o.length; i--&&(a = o[i], !w.relative[u = a.type]);) if ((s = w.find[u]) && (r = s(a.matches[0].replace(xt, Mt), yt.test(o[0].type) && g(e.parentNode) || e))) {
                    if (o.splice(i, 1), !(t = r.length && m(o))) return K.apply(n, r),
                    n;
                    break
                }
            }
            return (l || S(t, c))(r, e, !L, n, !e || yt.test(t) && g(e.parentNode) || e),
            n
        },
        v.sortStable = z.split("").sort(X).join("") === z,
        v.detectDuplicates = !!A,
        j(),
        v.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }),
        i(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width",
        function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        v.attributes && i(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || e("value",
        function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }),
        i(function(t) {
            return null == t.getAttribute("disabled")
        }) || e(et,
        function(t, e, n) {
            var r;
            if (!n) return ! 0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
        }),
        x
    } (_);
    dt.find = yt,
    dt.expr = yt.selectors,
    dt.expr[":"] = dt.expr.pseudos,
    dt.uniqueSort = dt.unique = yt.uniqueSort,
    dt.text = yt.getText,
    dt.isXMLDoc = yt.isXML,
    dt.contains = yt.contains;
    var bt = function(t, e, n) {
        for (var r = [], i = n !== undefined; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (i && dt(t).is(n)) break;
            r.push(t)
        }
        return r
    },
    xt = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    },
    Mt = dt.expr.match.needsContext,
    wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    _t = /^.[^:#\[\.,]*$/;
    dt.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? dt.find.matchesSelector(r, t) ? [r] : [] : dt.find.matches(t, dt.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    dt.fn.extend({
        find: function(t) {
            var e, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                for (e = 0; e < i; e++) if (dt.contains(r[e], this)) return ! 0
            }));
            for (e = 0; e < i; e++) dt.find(t, r[e], n);
            return (n = this.pushStack(1 < i ? dt.unique(n) : n)).selector = this.selector ? this.selector + " " + t: t,
            n
        },
        filter: function(t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function(t) {
            return !! e(this, "string" == typeof t && Mt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var Et, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (dt.fn.init = function(t, e, n) {
        var r, i;
        if (!t) return this;
        if (n = n || Et, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : dt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(dt) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), dt.makeArray(t, this));
        if (! (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : kt.exec(t)) || !r[1] && e) return ! e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (r[1]) {
            if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e: rt, !0)), wt.test(r[1]) && dt.isPlainObject(e)) for (r in e) dt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
            return this
        }
        if ((i = rt.getElementById(r[2])) && i.parentNode) {
            if (i.id !== r[2]) return Et.find(t);
            this.length = 1,
            this[0] = i
        }
        return this.context = rt,
        this.selector = t,
        this
    }).prototype = dt.fn,
    Et = dt(rt);
    var St = /^(?:parents|prev(?:Until|All))/,
    Tt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    dt.fn.extend({
        has: function(t) {
            var e, n = dt(t, this),
            r = n.length;
            return this.filter(function() {
                for (e = 0; e < r; e++) if (dt.contains(this, n[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = Mt.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? dt.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    dt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return n(t, "nextSibling")
        },
        prev: function(t) {
            return n(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: dt.merge([], t.childNodes)
        }
    },
    function(r, i) {
        dt.fn[r] = function(t, e) {
            var n = dt.map(this, i, t);
            return "Until" !== r.slice( - 5) && (e = t),
            e && "string" == typeof e && (n = dt.filter(e, n)),
            1 < this.length && (Tt[r] || (n = dt.uniqueSort(n)), St.test(r) && (n = n.reverse())),
            this.pushStack(n)
        }
    });
    var Ct, Nt, At = /\S+/g;
    for (Nt in dt.Callbacks = function(r) {
        r = "string" == typeof r ? c(r) : dt.extend({},
        r);
        var i, t, e, n, o = [],
        a = [],
        u = -1,
        s = function() {
            for (n = r.once, e = i = !0; a.length; u = -1) for (t = a.shift(); ++u < o.length;) ! 1 === o[u].apply(t[0], t[1]) && r.stopOnFalse && (u = o.length, t = !1);
            r.memory || (t = !1),
            i = !1,
            n && (o = t ? [] : "")
        },
        l = {
            add: function() {
                return o && (t && !i && (u = o.length - 1, a.push(t)),
                function n(t) {
                    dt.each(t,
                    function(t, e) {
                        dt.isFunction(e) ? r.unique && l.has(e) || o.push(e) : e && e.length && "string" !== dt.type(e) && n(e)
                    })
                } (arguments), t && !i && s()),
                this
            },
            remove: function() {
                return dt.each(arguments,
                function(t, e) {
                    for (var n; - 1 < (n = dt.inArray(e, o, n));) o.splice(n, 1),
                    n <= u && u--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < dt.inArray(t, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return n = a = [],
                o = t = "",
                this
            },
            disabled: function() {
                return ! o
            },
            lock: function() {
                return n = !0,
                t || l.disable(),
                this
            },
            locked: function() {
                return !! n
            },
            fireWith: function(t, e) {
                return n || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), i || s()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! e
            }
        };
        return l
    },
    dt.extend({
        Deferred: function(t) {
            var o = [["resolve", "done", dt.Callbacks("once memory"), "resolved"], ["reject", "fail", dt.Callbacks("once memory"), "rejected"], ["notify", "progress", dt.Callbacks("memory")]],
            i = "pending",
            a = {
                state: function() {
                    return i
                },
                always: function() {
                    return u.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var i = arguments;
                    return dt.Deferred(function(r) {
                        dt.each(o,
                        function(t, e) {
                            var n = dt.isFunction(i[t]) && i[t];
                            u[e[1]](function() {
                                var t = n && n.apply(this, arguments);
                                t && dt.isFunction(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this === a ? r.promise() : this, n ? [t] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? dt.extend(t, a) : a
                }
            },
            u = {};
            return a.pipe = a.then,
            dt.each(o,
            function(t, e) {
                var n = e[2],
                r = e[3];
                a[e[1]] = n.add,
                r && n.add(function() {
                    i = r
                },
                o[1 ^ t][2].disable, o[2][2].lock),
                u[e[0]] = function() {
                    return u[e[0] + "With"](this === u ? a: this, arguments),
                    this
                },
                u[e[0] + "With"] = n.fireWith
            }),
            a.promise(u),
            t && t.call(u, u),
            u
        },
        when: function(t) {
            var i, e, n, r = 0,
            o = it.call(arguments),
            a = o.length,
            u = 1 !== a || t && dt.isFunction(t.promise) ? a: 0,
            s = 1 === u ? t: dt.Deferred(),
            l = function(e, n, r) {
                return function(t) {
                    n[e] = this,
                    r[e] = 1 < arguments.length ? it.call(arguments) : t,
                    r === i ? s.notifyWith(n, r) : --u || s.resolveWith(n, r)
                }
            };
            if (1 < a) for (i = new Array(a), e = new Array(a), n = new Array(a); r < a; r++) o[r] && dt.isFunction(o[r].promise) ? o[r].promise().progress(l(r, e, i)).done(l(r, n, o)).fail(s.reject) : --u;
            return u || s.resolveWith(n, o),
            s.promise()
        }
    }), dt.fn.ready = function(t) {
        return dt.ready.promise().done(t),
        this
    },
    dt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? dt.readyWait++:dt.ready(!0)
        },
        ready: function(t) { (!0 === t ? --dt.readyWait: dt.isReady) || (dt.isReady = !0) !== t && 0 < --dt.readyWait || (Ct.resolveWith(rt, [dt]), dt.fn.triggerHandler && (dt(rt).triggerHandler("ready"), dt(rt).off("ready")))
        }
    }), dt.ready.promise = function(t) {
        if (!Ct) if (Ct = dt.Deferred(), "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll) _.setTimeout(dt.ready);
        else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", o),
        _.addEventListener("load", o);
        else {
            rt.attachEvent("onreadystatechange", o),
            _.attachEvent("onload", o);
            var e = !1;
            try {
                e = null == _.frameElement && rt.documentElement
            } catch(n) {}
            e && e.doScroll &&
            function r() {
                if (!dt.isReady) {
                    try {
                        e.doScroll("left")
                    } catch(n) {
                        return _.setTimeout(r, 50)
                    }
                    i(),
                    dt.ready()
                }
            } ()
        }
        return Ct.promise(t)
    },
    dt.ready.promise(), dt(ft)) break;
    ft.ownFirst = "0" === Nt,
    ft.inlineBlockNeedsLayout = !1,
    dt(function() {
        var t, e, n, r; (n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"), (r = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ft.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function() {
        var t = rt.createElement("div");
        ft.deleteExpando = !0;
        try {
            delete t.test
        } catch(e) {
            ft.deleteExpando = !1
        }
        t = null
    } ();
    var jt, Dt = function(t) {
        var e = dt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    },
    qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Lt = /([A-Z])/g;
    dt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !! (t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando]) && !l(t)
        },
        data: function(t, e, n) {
            return r(t, e, n)
        },
        removeData: function(t, e) {
            return a(t, e)
        },
        _data: function(t, e, n) {
            return r(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return a(t, e, !0)
        }
    }),
    dt.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
            a = o && o.attributes;
            if (t !== undefined) return "object" == typeof t ? this.each(function() {
                dt.data(this, t)
            }) : 1 < arguments.length ? this.each(function() {
                dt.data(this, t, e)
            }) : o ? s(o, t, dt.data(o, t)) : undefined;
            if (this.length && (i = dt.data(o), 1 === o.nodeType && !dt._data(o, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && s(o, r = dt.camelCase(r.slice(5)), i[r]);
                dt._data(o, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(t) {
            return this.each(function() {
                dt.removeData(this, t)
            })
        }
    }),
    dt.extend({
        queue: function(t, e, n) {
            var r;
            if (t) return e = (e || "fx") + "queue",
            r = dt._data(t, e),
            n && (!r || dt.isArray(n) ? r = dt._data(t, e, dt.makeArray(n)) : r.push(n)),
            r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = dt.queue(t, e),
            r = n.length,
            i = n.shift(),
            o = dt._queueHooks(t, e),
            a = function() {
                dt.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return dt._data(t, n) || dt._data(t, n, {
                empty: dt.Callbacks("once memory").add(function() {
                    dt._removeData(t, e + "queue"),
                    dt._removeData(t, n)
                })
            })
        }
    }),
    dt.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--),
            arguments.length < t ? dt.queue(this[0], e) : n === undefined ? this: this.each(function() {
                var t = dt.queue(this, e, n);
                dt._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && dt.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                dt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
            i = dt.Deferred(),
            o = this,
            a = this.length,
            u = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; a--;)(n = dt._data(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(u));
            return u(),
            i.promise(e)
        }
    }),
    ft.shrinkWrapBlocks = function() {
        return null != jt ? jt: (jt = !1, (e = rt.getElementsByTagName("body")[0]) && e.style ? (t = rt.createElement("div"), (n = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(rt.createElement("div")).style.width = "5px", jt = 3 !== t.offsetWidth), e.removeChild(n), jt) : void 0);
        var t, e, n
    };
    var Ht, Ft, Rt, Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    zt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"),
    Pt = ["Top", "Right", "Bottom", "Left"],
    $t = function(t, e) {
        return t = e || t,
        "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t)
    },
    It = function(t, e, n, r, i, o, a) {
        var u = 0,
        s = t.length,
        l = null == n;
        if ("object" === dt.type(n)) for (u in i = !0, n) It(t, e, u, n[u], !0, o, a);
        else if (r !== undefined && (i = !0, dt.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
            return l.call(dt(t), n)
        })), e)) for (; u < s; u++) e(t[u], n, a ? r: r.call(t[u], u, e(t[u], n)));
        return i ? t: l ? e.call(t) : s ? e(t[0], n) : o
    },
    Bt = /^(?:checkbox|radio)$/i,
    Wt = /<([\w:-]+)/,
    Ut = /^$|\/(?:java|ecma)script/i,
    Xt = /^\s+/,
    Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Ht = rt.createElement("div"),
    Ft = rt.createDocumentFragment(),
    Rt = rt.createElement("input"),
    Ht.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    ft.leadingWhitespace = 3 === Ht.firstChild.nodeType,
    ft.tbody = !Ht.getElementsByTagName("tbody").length,
    ft.htmlSerialize = !!Ht.getElementsByTagName("link").length,
    ft.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
    Rt.type = "checkbox",
    Rt.checked = !0,
    Ft.appendChild(Rt),
    ft.appendChecked = Rt.checked,
    Ht.innerHTML = "<textarea>x</textarea>",
    ft.noCloneChecked = !!Ht.cloneNode(!0).lastChild.defaultValue,
    Ft.appendChild(Ht),
    (Rt = rt.createElement("input")).setAttribute("type", "radio"),
    Rt.setAttribute("checked", "checked"),
    Rt.setAttribute("name", "t"),
    Ht.appendChild(Rt),
    ft.checkClone = Ht.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ft.noCloneEvent = !!Ht.addEventListener,
    Ht[dt.expando] = 1,
    ft.attributes = !Ht.getAttribute(dt.expando);
    var Vt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ft.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Vt.optgroup = Vt.option,
    Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead,
    Vt.th = Vt.td;
    var Gt = /<|&#?\w+;/,
    Jt = /<tbody/i; !
    function() {
        var t, e, n = rt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) e = "on" + t,
        (ft[t] = e in _) || (n.setAttribute(e, "t"), ft[t] = !1 === n.attributes[e].expando);
        n = null
    } ();
    var Zt = /^(?:input|select|textarea)$/i,
    Kt = /^key/,
    Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    te = /^(?:focusinfocus|focusoutblur)$/,
    ee = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, u, s, l, c, f, h, d, p, g, m = dt._data(t);
            if (m) {
                for (n.handler && (n = (s = n).handler, i = s.selector), n.guid || (n.guid = dt.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function(t) {
                    return void 0 === dt || t && dt.event.triggered === t.type ? undefined: dt.event.dispatch.apply(c.elem, arguments)
                }).elem = t), u = (e = (e || "").match(At) || [""]).length; u--;) d = g = (o = ee.exec(e[u]) || [])[1],
                p = (o[2] || "").split(".").sort(),
                d && (l = dt.event.special[d] || {},
                d = (i ? l.delegateType: l.bindType) || d, l = dt.event.special[d] || {},
                f = dt.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && dt.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                },
                s), (h = a[d]) || ((h = a[d] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(t, r, p, c) || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), l.add && (l.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, f) : h.push(f), dt.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, n, r, i) {
            var o, a, u, s, l, c, f, h, d, p, g, m = dt.hasData(t) && dt._data(t);
            if (m && (c = m.events)) {
                for (l = (e = (e || "").match(At) || [""]).length; l--;) if (d = g = (u = ee.exec(e[l]) || [])[1], p = (u[2] || "").split(".").sort(), d) {
                    for (f = dt.event.special[d] || {},
                    h = c[d = (r ? f.delegateType: f.bindType) || d] || [], u = u[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) a = h[o],
                    !i && g !== a.origType || n && n.guid !== a.guid || u && !u.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, f.remove && f.remove.call(t, a));
                    s && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || dt.removeEvent(t, d, m.handle), delete c[d])
                } else for (d in c) dt.event.remove(t, d + e[l], n, r, !0);
                dt.isEmptyObject(c) && (delete m.handle, dt._removeData(t, "events"))
            }
        },
        trigger: function(t, e, n, r) {
            var i, o, a, u, s, l, c, f = [n || rt],
            h = ct.call(t, "type") ? t.type: t,
            d = ct.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = n = n || rt, 3 !== n.nodeType && 8 !== n.nodeType && !te.test(h + dt.event.triggered) && ( - 1 < h.indexOf(".") && (h = (d = h.split(".")).shift(), d.sort()), o = h.indexOf(":") < 0 && "on" + h, (t = t[dt.expando] ? t: new dt.Event(h, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), e = null == e ? [t] : dt.makeArray(e, [t]), s = dt.event.special[h] || {},
            r || !s.trigger || !1 !== s.trigger.apply(n, e))) {
                if (!r && !s.noBubble && !dt.isWindow(n)) {
                    for (u = s.delegateType || h, te.test(u + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                    l = a;
                    l === (n.ownerDocument || rt) && f.push(l.defaultView || l.parentWindow || _)
                }
                for (c = 0; (a = f[c++]) && !t.isPropagationStopped();) t.type = 1 < c ? u: s.bindType || h,
                (i = (dt._data(a, "events") || {})[t.type] && dt._data(a, "handle")) && i.apply(a, e),
                (i = o && a[o]) && i.apply && Dt(a) && (t.result = i.apply(a, e), !1 === t.result && t.preventDefault());
                if (t.type = h, !r && !t.isDefaultPrevented() && (!s._default || !1 === s._default.apply(f.pop(), e)) && Dt(n) && o && n[h] && !dt.isWindow(n)) { (l = n[o]) && (n[o] = null),
                    dt.event.triggered = h;
                    try {
                        n[h]()
                    } catch(p) {}
                    dt.event.triggered = undefined,
                    l && (n[o] = l)
                }
                return t.result
            }
        },
        dispatch: function(t) {
            t = dt.event.fix(t);
            var e, n, r, i, o, a = [],
            u = it.call(arguments),
            s = (dt._data(this, "events") || {})[t.type] || [],
            l = dt.event.special[t.type] || {};
            if ((u[0] = t).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (a = dt.event.handlers.call(this, t, s), e = 0; (i = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, (r = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) !== undefined && !1 === (t.result = r) && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, a = [],
            u = e.delegateCount,
            s = t.target;
            if (u && s.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; s != this; s = s.parentNode || this) if (1 === s.nodeType && (!0 !== s.disabled || "click" !== t.type)) {
                for (r = [], n = 0; n < u; n++) r[i = (o = e[n]).selector + " "] === undefined && (r[i] = o.needsContext ? -1 < dt(i, this).index(s) : dt.find(i, this, null, [s]).length),
                r[i] && r.push(o);
                r.length && a.push({
                    elem: s,
                    handlers: r
                })
            }
            return u < e.length && a.push({
                elem: this,
                handlers: e.slice(u)
            }),
            a
        },
        fix: function(t) {
            if (t[dt.expando]) return t;
            var e, n, r, i = t.type,
            o = t,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Qt.test(i) ? this.mouseHooks: Kt.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, t = new dt.Event(o), e = r.length; e--;) t[n = r[e]] = o[n];
            return t.target || (t.target = o.srcElement || rt),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button,
                a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = (r = t.target.ownerDocument || rt).documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement: a),
                t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === p() && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (dt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                    !1
                },
                _default: function(t) {
                    return dt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var r = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(r, null, e),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    dt.removeEvent = rt.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }: function(t, e, n) {
        var r = "on" + e;
        t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null), t.detachEvent(r, n))
    },
    dt.Event = function(t, e) {
        if (! (this instanceof dt.Event)) return new dt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? h: d) : this.type = t,
        e && dt.extend(this, e),
        this.timeStamp = t && t.timeStamp || dt.now(),
        this[dt.expando] = !0
    },
    dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, o) {
        dt.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function(t) {
                var e, n = this,
                r = t.relatedTarget,
                i = t.handleObj;
                return r && (r === n || dt.contains(n, r)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o),
                e
            }
        }
    }),
    ft.submit || (dt.event.special.submit = {
        setup: function() {
            if (dt.nodeName(this, "form")) return ! 1;
            dt.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                n = dt.nodeName(e, "input") || dt.nodeName(e, "button") ? dt.prop(e, "form") : undefined;
                n && !dt._data(n, "submit") && (dt.event.add(n, "submit._submit",
                function(t) {
                    t._submitBubble = !0
                }), dt._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            if (dt.nodeName(this, "form")) return ! 1;
            dt.event.remove(this, "._submit")
        }
    }),
    ft.change || (dt.event.special.change = {
        setup: function() {
            if (Zt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (dt.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), dt.event.add(this, "click._change",
            function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                dt.event.simulate("change", this, t)
            })),
            !1;
            dt.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                Zt.test(e.nodeName) && !dt._data(e, "change") && (dt.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t)
                }), dt._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return dt.event.remove(this, "._change"),
            !Zt.test(this.nodeName)
        }
    }),
    ft.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(n, r) {
        var i = function(t) {
            dt.event.simulate(r, t.target, dt.event.fix(t))
        };
        dt.event.special[r] = {
            setup: function() {
                var t = this.ownerDocument || this,
                e = dt._data(t, r);
                e || t.addEventListener(n, i, !0),
                dt._data(t, r, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                e = dt._data(t, r) - 1;
                e ? dt._data(t, r, e) : (t.removeEventListener(n, i, !0), dt._removeData(t, r))
            }
        }
    }),
    dt.fn.extend({
        on: function(t, e, n, r) {
            return x(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return x(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj,
            dt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" != typeof t) return ! 1 !== e && "function" != typeof e || (n = e, e = undefined),
            !1 === n && (n = d),
            this.each(function() {
                dt.event.remove(this, t, n, e)
            });
            for (i in t) this.off(i, e, t[i]);
            return this
        },
        trigger: function(t, e) {
            return this.each(function() {
                dt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return dt.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
    re = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
    ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    oe = /<script|<style|<link/i,
    ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ue = /^true\/(.*)/,
    se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    le = m(rt).appendChild(rt.createElement("div"));
    dt.extend({
        htmlPrefilter: function(t) {
            return t.replace(ie, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, a, u, s = dt.contains(t.ownerDocument, t);
            if (ft.html5Clone || dt.isXMLDoc(t) || !re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(o = le.firstChild)), !(ft.noCloneEvent && ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t))) for (r = v(o), u = v(t), a = 0; null != (i = u[a]); ++a) r[a] && S(i, r[a]);
            if (e) if (n) for (u = u || v(t), r = r || v(o), a = 0; null != (i = u[a]); a++) k(i, r[a]);
            else k(t, o);
            return 0 < (r = v(o, "script")).length && y(r, !s && v(t, "script")),
            r = u = i = null,
            o
        },
        cleanData: function(t, e) {
            for (var n, r, i, o, a = 0,
            u = dt.expando,
            s = dt.cache,
            l = ft.attributes,
            c = dt.event.special; null != (n = t[a]); a++) if ((e || Dt(n)) && (o = (i = n[u]) && s[i])) {
                if (o.events) for (r in o.events) c[r] ? dt.event.remove(n, r) : dt.removeEvent(n, r, o.handle);
                s[i] && (delete s[i], l || "undefined" == typeof n.removeAttribute ? n[u] = undefined: n.removeAttribute(u), nt.push(i))
            }
        }
    }),
    dt.fn.extend({
        domManip: T,
        detach: function(t) {
            return C(this, t, !0)
        },
        remove: function(t) {
            return C(this, t)
        },
        text: function(t) {
            return It(this,
            function(t) {
                return t === undefined ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return T(this, arguments,
            function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return T(this, arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = M(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return T(this, arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && dt.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && dt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t: e,
            this.map(function() {
                return dt.clone(this, t, e)
            })
        },
        html: function(t) {
            return It(this,
            function(t) {
                var e = this[0] || {},
                n = 0,
                r = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !oe.test(t) && (ft.htmlSerialize || !re.test(t)) && (ft.leadingWhitespace || !Xt.test(t)) && !Vt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (dt.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(i) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return T(this, arguments,
            function(t) {
                var e = this.parentNode;
                dt.inArray(this, n) < 0 && (dt.cleanData(v(this)), e && e.replaceChild(t, this))
            },
            n)
        }
    }),
    dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, a) {
        dt.fn[t] = function(t) {
            for (var e, n = 0,
            r = [], i = dt(t), o = i.length - 1; n <= o; n++) e = n === o ? this: this.clone(!0),
            dt(i[n])[a](e),
            at.apply(r, e.get());
            return this.pushStack(r)
        }
    });
    var ce, fe = {
        HTML: "block",
        BODY: "block"
    },
    he = /^margin/,
    de = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"),
    pe = function(t, e, n, r) {
        var i, o, a = {};
        for (o in e) a[o] = t.style[o],
        t.style[o] = e[o];
        for (o in i = n.apply(t, r || []), e) t.style[o] = a[o];
        return i
    },
    ge = rt.documentElement; !
    function() {
        function t() {
            var t, e, n = rt.documentElement;
            n.appendChild(l),
            c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            r = o = s = !1,
            i = u = !0,
            _.getComputedStyle && (e = _.getComputedStyle(c), r = "1%" !== (e || {}).top, s = "2px" === (e || {}).marginLeft, o = "4px" === (e || {
                width: "4px"
            }).width, c.style.marginRight = "50%", i = "4px" === (e || {
                marginRight: "4px"
            }).marginRight, (t = c.appendChild(rt.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", u = !parseFloat((_.getComputedStyle(t) || {}).marginRight), c.removeChild(t)),
            c.style.display = "none",
            (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)),
            n.removeChild(l)
        }
        var r, i, o, a, u, s, l = rt.createElement("div"),
        c = rt.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", ft.opacity = "0.5" === c.style.opacity, ft.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ft.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = rt.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ft.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, dt.extend(ft, {
            reliableHiddenOffsets: function() {
                return null == r && t(),
                a
            },
            boxSizingReliable: function() {
                return null == r && t(),
                o
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            pixelPosition: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                return null == r && t(),
                u
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                s
            }
        }))
    } ();
    var me, ve, ye = /^(top|right|bottom|left)$/;
    _.getComputedStyle ? (me = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = _),
        e.getComputedStyle(t)
    },
    ve = function(t, e, n) {
        var r, i, o, a, u = t.style;
        return "" !== (a = (n = n || me(t)) ? n.getPropertyValue(e) || n[e] : undefined) && a !== undefined || dt.contains(t.ownerDocument, t) || (a = dt.style(t, e)),
        n && !ft.pixelMarginRight() && de.test(a) && he.test(e) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o),
        a === undefined ? a: a + ""
    }) : ge.currentStyle && (me = function(t) {
        return t.currentStyle
    },
    ve = function(t, e, n) {
        var r, i, o, a, u = t.style;
        return null == (a = (n = n || me(t)) ? n[e] : undefined) && u && u[e] && (a = u[e]),
        de.test(a) && !ye.test(e) && (r = u.left, (o = (i = t.runtimeStyle) && i.left) && (i.left = t.currentStyle.left), u.left = "fontSize" === e ? "1em": a, a = u.pixelLeft + "px", u.left = r, o && (i.left = o)),
        a === undefined ? a: a + "" || "auto"
    });
    var be = /alpha\([^)]*\)/i,
    xe = /opacity\s*=\s*([^)]*)/i,
    Me = /^(none|table(?!-c[ea]).+)/,
    we = new RegExp("^(" + Ot + ")(.*)$", "i"),
    _e = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ee = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    ke = ["Webkit", "O", "Moz", "ms"],
    Se = rt.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ve(t, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            "float": ft.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, u = dt.camelCase(e),
                s = t.style;
                if (e = dt.cssProps[u] || (dt.cssProps[u] = D(u) || u), a = dt.cssHooks[e] || dt.cssHooks[u], n === undefined) return a && "get" in a && (i = a.get(t, !1, r)) !== undefined ? i: s[e];
                if ("string" === (o = typeof n) && (i = zt.exec(n)) && i[1] && (n = f(t, e, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (dt.cssNumber[u] ? "": "px")), ft.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (s[e] = "inherit"), !(a && "set" in a && (n = a.set(t, n, r)) === undefined))) try {
                    s[e] = n
                } catch(l) {}
            }
        },
        css: function(t, e, n, r) {
            var i, o, a, u = dt.camelCase(e);
            return e = dt.cssProps[u] || (dt.cssProps[u] = D(u) || u),
            (a = dt.cssHooks[e] || dt.cssHooks[u]) && "get" in a && (o = a.get(t, !0, n)),
            o === undefined && (o = ve(t, e, r)),
            "normal" === o && e in Ee && (o = Ee[e]),
            "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    dt.each(["height", "width"],
    function(t, i) {
        dt.cssHooks[i] = {
            get: function(t, e, n) {
                if (e) return Me.test(dt.css(t, "display")) && 0 === t.offsetWidth ? pe(t, _e,
                function() {
                    return F(t, i, n)
                }) : F(t, i, n)
            },
            set: function(t, e, n) {
                var r = n && me(t);
                return L(t, e, n ? H(t, i, n, ft.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    ft.opacity || (dt.cssHooks.opacity = {
        get: function(t, e) {
            return xe.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var n = t.style,
            r = t.currentStyle,
            i = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = r && r.filter || n.filter || ""; ((n.zoom = 1) <= e || "" === e) && "" === dt.trim(o.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = be.test(o) ? o.replace(be, i) : o + " " + i)
        }
    }),
    dt.cssHooks.marginRight = j(ft.reliableMarginRight,
    function(t, e) {
        if (e) return pe(t, {
            display: "inline-block"
        },
        ve, [t, "marginRight"])
    }),
    dt.cssHooks.marginLeft = j(ft.reliableMarginLeft,
    function(t, e) {
        if (e) return (parseFloat(ve(t, "marginLeft")) || (dt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
            marginLeft: 0
        },
        function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }),
    dt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(i, o) {
        dt.cssHooks[i + o] = {
            expand: function(t) {
                for (var e = 0,
                n = {},
                r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[i + Pt[e] + o] = r[e] || r[e - 2] || r[0];
                return n
            }
        },
        he.test(i) || (dt.cssHooks[i + o].set = L)
    }),
    dt.fn.extend({
        css: function(t, e) {
            return It(this,
            function(t, e, n) {
                var r, i, o = {},
                a = 0;
                if (dt.isArray(e)) {
                    for (r = me(t), i = e.length; a < i; a++) o[e[a]] = dt.css(t, e[a], !1, r);
                    return o
                }
                return n !== undefined ? dt.style(t, e, n) : dt.css(t, e)
            },
            t, e, 1 < arguments.length)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                $t(this) ? dt(this).show() : dt(this).hide()
            })
        }
    }),
    (dt.Tween = R).prototype = {
        constructor: R,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || dt.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (dt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var t = R.propHooks[this.prop];
            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, "")) && "auto" !== e ? e: 0
            },
            set: function(t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now: dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    dt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    dt.fx = R.prototype.init,
    dt.fx.step = {};
    var Te, Ce, Ne, Ae, je, De, qe, Le = /^(?:toggle|show|hide)$/,
    He = /queueHooks$/;
    dt.Animation = dt.extend(B, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return f(n.elem, t, zt.exec(e), n),
                n
            }]
        },
        tweener: function(t, e) {
            dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
            for (var n, r = 0,
            i = t.length; r < i; r++) n = t[r],
            B.tweeners[n] = B.tweeners[n] || [],
            B.tweeners[n].unshift(e)
        },
        prefilters: [$],
        prefilter: function(t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }),
    dt.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? dt.extend({},
        t) : {
            complete: n || !n && e || dt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !dt.isFunction(e) && e
        };
        return r.duration = dt.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in dt.fx.speeds ? dt.fx.speeds[r.duration] : dt.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            dt.isFunction(r.old) && r.old.call(this),
            r.queue && dt.dequeue(this, r.queue)
        },
        r
    },
    dt.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter($t).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, n, r)
        },
        animate: function(e, t, n, r) {
            var i = dt.isEmptyObject(e),
            o = dt.speed(t, n, r),
            a = function() {
                var t = B(this, dt.extend({},
                e), o); (i || dt._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, t, o) {
            var a = function(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            };
            return "string" != typeof i && (o = t, t = i, i = undefined),
            t && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var t = !0,
                e = null != i && i + "queueHooks",
                n = dt.timers,
                r = dt._data(this);
                if (e) r[e] && r[e].stop && a(r[e]);
                else for (e in r) r[e] && r[e].stop && He.test(e) && a(r[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != i && n[e].queue !== i || (n[e].anim.stop(o), t = !1, n.splice(e, 1)); ! t && o || dt.dequeue(this, i)
            })
        },
        finish: function(a) {
            return ! 1 !== a && (a = a || "fx"),
            this.each(function() {
                var t, e = dt._data(this),
                n = e[a + "queue"],
                r = e[a + "queueHooks"],
                i = dt.timers,
                o = n ? n.length: 0;
                for (e.finish = !0, dt.queue(this, a, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === a && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    dt.each(["toggle", "show", "hide"],
    function(t, r) {
        var i = dt.fn[r];
        dt.fn[r] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(z(r, !0), t, e, n)
        }
    }),
    dt.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, r) {
        dt.fn[t] = function(t, e, n) {
            return this.animate(r, t, e, n)
        }
    }),
    dt.timers = [],
    dt.fx.tick = function() {
        var t, e = dt.timers,
        n = 0;
        for (Te = dt.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || dt.fx.stop(),
        Te = undefined
    },
    dt.fx.timer = function(t) {
        dt.timers.push(t),
        t() ? dt.fx.start() : dt.timers.pop()
    },
    dt.fx.interval = 13,
    dt.fx.start = function() {
        Ce || (Ce = _.setInterval(dt.fx.tick, dt.fx.interval))
    },
    dt.fx.stop = function() {
        _.clearInterval(Ce),
        Ce = null
    },
    dt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    dt.fn.delay = function(r, t) {
        return r = dt.fx && dt.fx.speeds[r] || r,
        t = t || "fx",
        this.queue(t,
        function(t, e) {
            var n = _.setTimeout(t, r);
            e.stop = function() {
                _.clearTimeout(n)
            }
        })
    },
    Ae = rt.createElement("input"),
    je = rt.createElement("div"),
    De = rt.createElement("select"),
    qe = De.appendChild(rt.createElement("option")),
    (je = rt.createElement("div")).setAttribute("className", "t"),
    je.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    Ne = je.getElementsByTagName("a")[0],
    Ae.setAttribute("type", "checkbox"),
    je.appendChild(Ae),
    (Ne = je.getElementsByTagName("a")[0]).style.cssText = "top:1px",
    ft.getSetAttribute = "t" !== je.className,
    ft.style = /top/.test(Ne.getAttribute("style")),
    ft.hrefNormalized = "/a" === Ne.getAttribute("href"),
    ft.checkOn = !!Ae.value,
    ft.optSelected = qe.selected,
    ft.enctype = !!rt.createElement("form").enctype,
    De.disabled = !0,
    ft.optDisabled = !qe.disabled,
    (Ae = rt.createElement("input")).setAttribute("value", ""),
    ft.input = "" === Ae.getAttribute("value"),
    Ae.value = "t",
    Ae.setAttribute("type", "radio"),
    ft.radioValue = "t" === Ae.value;
    var Fe = /\r/g,
    Re = /[\x20\t\r\n\f]+/g;
    dt.fn.extend({
        val: function(n) {
            var r, t, i, e = this[0];
            return arguments.length ? (i = dt.isFunction(n), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = i ? n.call(this, t, dt(this).val()) : n) ? e = "": "number" == typeof e ? e += "": dt.isArray(e) && (e = dt.map(e,
                function(t) {
                    return null == t ? "": t + ""
                })), (r = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, e, "value") !== undefined || (this.value = e))
            })) : e ? (r = dt.valHooks[e.type] || dt.valHooks[e.nodeName.toLowerCase()]) && "get" in r && (t = r.get(e, "value")) !== undefined ? t: "string" == typeof(t = e.value) ? t.replace(Fe, "") : null == t ? "": t: void 0
        }
    }),
    dt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e: dt.trim(dt.text(t)).replace(Re, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options,
                    i = t.selectedIndex,
                    o = "select-one" === t.type || i < 0,
                    a = o ? null: [], u = o ? i + 1 : r.length, s = i < 0 ? u: o ? i: 0; s < u; s++) if (((n = r[s]).selected || s === i) && (ft.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                        if (e = dt(n).val(), o) return e;
                        a.push(e)
                    }
                    return a
                },
                set: function(t, e) {
                    for (var n, r, i = t.options,
                    o = dt.makeArray(e), a = i.length; a--;) if (r = i[a], -1 < dt.inArray(dt.valHooks.option.get(r), o)) try {
                        r.selected = n = !0
                    } catch(u) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (t.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    dt.each(["radio", "checkbox"],
    function() {
        dt.valHooks[this] = {
            set: function(t, e) {
                if (dt.isArray(e)) return t.checked = -1 < dt.inArray(dt(t).val(), e)
            }
        },
        ft.checkOn || (dt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var Oe, ze, Pe = dt.expr.attrHandle,
    $e = /^(?:checked|selected)$/i,
    Ie = ft.getSetAttribute,
    Be = ft.input;
    dt.fn.extend({
        attr: function(t, e) {
            return It(this, dt.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                dt.removeAttr(this, t)
            })
        }
    }),
    dt.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === o && dt.isXMLDoc(t) || (e = e.toLowerCase(), i = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? ze: Oe)), n !== undefined ? null === n ? void dt.removeAttr(t, e) : i && "set" in i && (r = i.set(t, n, e)) !== undefined ? r: (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r: null == (r = dt.find.attr(t, e)) ? undefined: r)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ft.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
            o = e && e.match(At);
            if (o && 1 === t.nodeType) for (; n = o[i++];) r = dt.propFix[n] || n,
            dt.expr.match.bool.test(n) ? Be && Ie || !$e.test(n) ? t[r] = !1 : t[dt.camelCase("default-" + n)] = t[r] = !1 : dt.attr(t, n, ""),
            t.removeAttribute(Ie ? n: r)
        }
    }),
    ze = {
        set: function(t, e, n) {
            return ! 1 === e ? dt.removeAttr(t, n) : Be && Ie || !$e.test(n) ? t.setAttribute(!Ie && dt.propFix[n] || n, n) : t[dt.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    dt.each(dt.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var o = Pe[e] || dt.find.attr;
        Be && Ie || !$e.test(e) ? Pe[e] = function(t, e, n) {
            var r, i;
            return n || (i = Pe[e], Pe[e] = r, r = null != o(t, e, n) ? e.toLowerCase() : null, Pe[e] = i),
            r
        }: Pe[e] = function(t, e, n) {
            if (!n) return t[dt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Be && Ie || (dt.attrHooks.value = {
        set: function(t, e, n) {
            if (!dt.nodeName(t, "input")) return Oe && Oe.set(t, e, n);
            t.defaultValue = e
        }
    }),
    Ie || (Oe = {
        set: function(t, e, n) {
            var r = t.getAttributeNode(n);
            if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    },
    Pe.id = Pe.name = Pe.coords = function(t, e, n) {
        var r;
        if (!n) return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value: null
    },
    dt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: Oe.set
    },
    dt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Oe.set(t, "" !== e && e, n)
        }
    },
    dt.each(["width", "height"],
    function(t, n) {
        dt.attrHooks[n] = {
            set: function(t, e) {
                if ("" === e) return t.setAttribute(n, "auto"),
                e
            }
        }
    })),
    ft.style || (dt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || undefined
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var We = /^(?:input|select|textarea|button|object)$/i,
    Ue = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function(t, e) {
            return It(this, dt.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = dt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = undefined,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    dt.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, i = dt.propHooks[e]),
            n !== undefined ? i && "set" in i && (r = i.set(t, n, e)) !== undefined ? r: t[e] = n: i && "get" in i && null !== (r = i.get(t, e)) ? r: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : We.test(t.nodeName) || Ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ft.hrefNormalized || dt.each(["href", "src"],
    function(t, e) {
        dt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ft.optSelected || (dt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        dt.propFix[this.toLowerCase()] = this
    }),
    ft.enctype || (dt.propFix.enctype = "encoding");
    var Xe = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (dt.isFunction(e)) return this.each(function(t) {
                dt(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(At) || []; n = this[s++];) if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(Xe, " ")) {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (u = dt.trim(r)) && dt.attr(n, "class", u)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (dt.isFunction(e)) return this.each(function(t) {
                dt(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(At) || []; n = this[s++];) if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(Xe, " ")) {
                for (a = 0; o = t[a++];) for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                i !== (u = dt.trim(r)) && dt.attr(n, "class", u)
            }
            return this
        },
        toggleClass: function(i, e) {
            var o = typeof i;
            return "boolean" == typeof e && "string" === o ? e ? this.addClass(i) : this.removeClass(i) : dt.isFunction(i) ? this.each(function(t) {
                dt(this).toggleClass(i.call(this, t, W(this), e), e)
            }) : this.each(function() {
                var t, e, n, r;
                if ("string" === o) for (e = 0, n = dt(this), r = i.match(At) || []; t = r[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else i !== undefined && "boolean" !== o || ((t = W(this)) && dt._data(this, "__className__", t), dt.attr(this, "class", t || !1 === i ? "": dt._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + W(n) + " ").replace(Xe, " ").indexOf(e)) return ! 0;
            return ! 1
        }
    }),
    dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, n) {
        dt.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }),
    dt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Ye = _.location,
    Ve = dt.now(),
    Ge = /\?/,
    Je = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    dt.parseJSON = function(t) {
        if (_.JSON && _.JSON.parse) return _.JSON.parse(t + "");
        var i, o = null,
        e = dt.trim(t + "");
        return e && !dt.trim(e.replace(Je,
        function(t, e, n, r) {
            return i && e && (o = 0),
            0 === o ? t: (i = n || e, o += !r - !n, "")
        })) ? Function("return " + e)() : dt.error("Invalid JSON: " + t)
    },
    dt.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            _.DOMParser ? e = (new _.DOMParser).parseFromString(t, "text/xml") : ((e = new _.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
        } catch(n) {
            e = undefined
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + t),
        e
    };
    var Ze = /#.*$/,
    Ke = /([?&])_=[^&]*/,
    Qe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    en = /^(?:GET|HEAD)$/,
    nn = /^\/\//,
    rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    on = {},
    an = {},
    un = "*/".concat("*"),
    sn = Ye.href,
    ln = rn.exec(sn.toLowerCase()) || [];
    dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: sn,
            type: "GET",
            isLocal: tn.test(ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": dt.parseJSON,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Y(Y(t, dt.ajaxSettings), e) : Y(dt.ajaxSettings, t)
        },
        ajaxPrefilter: U(on),
        ajaxTransport: U(an),
        ajax: function(t, e) {
            function n(t, e, n, r) {
                var i, o, a, u, s, l = e;
                2 !== M && (M = 2, h && _.clearTimeout(h), p = undefined, f = r || "", w.readyState = 0 < t ? 4 : 0, i = 200 <= t && t < 300 || 304 === t, n && (u = V(g, w, n)), u = G(g, u, w, i), i ? (g.ifModified && ((s = w.getResponseHeader("Last-Modified")) && (dt.lastModified[c] = s), (s = w.getResponseHeader("etag")) && (dt.etag[c] = s)), 204 === t || "HEAD" === g.type ? l = "nocontent": 304 === t ? l = "notmodified": (l = u.state, o = u.data, i = !(a = u.error))) : (a = l, !t && l || (l = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || l) + "", i ? y.resolveWith(m, [o, l, w]) : y.rejectWith(m, [w, l, a]), w.statusCode(x), x = undefined, d && v.trigger(i ? "ajaxSuccess": "ajaxError", [w, g, i ? o: a]), b.fireWith(m, [w, l]), d && (v.trigger("ajaxComplete", [w, g]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = undefined),
            e = e || {};
            var r, i, c, f, h, d, p, o, g = dt.ajaxSetup({},
            e),
            m = g.context || g,
            v = g.context && (m.nodeType || m.jquery) ? dt(m) : dt.event,
            y = dt.Deferred(),
            b = dt.Callbacks("once memory"),
            x = g.statusCode || {},
            a = {},
            u = {},
            M = 0,
            s = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === M) {
                        if (!o) for (o = {}; e = Qe.exec(f);) o[e[1].toLowerCase()] = e[2];
                        e = o[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === M ? f: null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return M || (t = u[n] = u[n] || t, a[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return M || (g.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (M < 2) for (e in t) x[e] = [x[e], t[e]];
                    else w.always(t[w.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || s;
                    return p && p.abort(e),
                    n(0, e),
                    this
                }
            };
            if (y.promise(w).complete = b.add, w.success = w.done, w.error = w.fail, g.url = ((t || g.url || sn) + "").replace(Ze, "").replace(nn, ln[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = dt.trim(g.dataType || "*").toLowerCase().match(At) || [""], null == g.crossDomain && (r = rn.exec(g.url.toLowerCase()), g.crossDomain = !(!r || r[1] === ln[1] && r[2] === ln[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (ln[3] || ("http:" === ln[1] ? "80": "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = dt.param(g.data, g.traditional)), X(on, g, e, w), 2 === M) return w;
            for (i in (d = dt.event && g.global) && 0 == dt.active++&&dt.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !en.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Ge.test(c) ? "&": "?") + g.data, delete g.data), !1 === g.cache && (g.url = Ke.test(c) ? c.replace(Ke, "$1_=" + Ve++) : c + (Ge.test(c) ? "&": "?") + "_=" + Ve++)), g.ifModified && (dt.lastModified[c] && w.setRequestHeader("If-Modified-Since", dt.lastModified[c]), dt.etag[c] && w.setRequestHeader("If-None-Match", dt.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + un + "; q=0.01": "") : g.accepts["*"]), g.headers) w.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, w, g) || 2 === M)) return w.abort();
            for (i in s = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) w[i](g[i]);
            if (p = X(an, g, e, w)) {
                if (w.readyState = 1, d && v.trigger("ajaxSend", [w, g]), 2 === M) return w;
                g.async && 0 < g.timeout && (h = _.setTimeout(function() {
                    w.abort("timeout")
                },
                g.timeout));
                try {
                    M = 1,
                    p.send(a, n)
                } catch(l) {
                    if (! (M < 2)) throw l;
                    n( - 1, l)
                }
            } else n( - 1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return dt.get(t, undefined, e, "script")
        }
    }),
    dt.each(["get", "post"],
    function(t, i) {
        dt[i] = function(t, e, n, r) {
            return dt.isFunction(e) && (r = r || n, n = e, e = undefined),
            dt.ajax(dt.extend({
                url: t,
                type: i,
                dataType: r,
                data: e,
                success: n
            },
            dt.isPlainObject(t) && t))
        }
    }),
    dt._evalUrl = function(t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    dt.fn.extend({
        wrapAll: function(e) {
            if (dt.isFunction(e)) return this.each(function(t) {
                dt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = dt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return dt.isFunction(n) ? this.each(function(t) {
                dt(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = dt(this),
                e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = dt.isFunction(e);
            return this.each(function(t) {
                dt(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    dt.expr.filters.hidden = function(t) {
        return ft.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length: Z(t)
    },
    dt.expr.filters.visible = function(t) {
        return ! dt.expr.filters.hidden(t)
    };
    var cn = /%20/g,
    fn = /\[\]$/,
    hn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    pn = /^(?:input|select|textarea|keygen)/i;
    dt.param = function(t, e) {
        var n, r = [],
        i = function(t, e) {
            e = dt.isFunction(e) ? e() : null == e ? "": e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (e === undefined && (e = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t,
        function() {
            i(this.name, this.value)
        });
        else for (n in t) K(n, t[n], e, i);
        return r.join("&").replace(cn, "+")
    },
    dt.fn.extend({
        serialize: function() {
            return dt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && pn.test(this.nodeName) && !dn.test(t) && (this.checked || !Bt.test(t))
            }).map(function(t, e) {
                var n = dt(this).val();
                return null == n ? null: dt.isArray(n) ? dt.map(n,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(hn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }),
    dt.ajaxSettings.xhr = _.ActiveXObject !== undefined ?
    function() {
        return this.isLocal ? tt() : 8 < rt.documentMode ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || tt()
    }: Q;
    var gn = 0,
    mn = {},
    vn = dt.ajaxSettings.xhr();
    _.attachEvent && _.attachEvent("onunload",
    function() {
        for (var t in mn) mn[t](undefined, !0)
    }),
    ft.cors = !!vn && "withCredentials" in vn,
    (vn = ft.ajax = !!vn) && dt.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || ft.cors) return {
            send: function(t, a) {
                var e, u = l.xhr(),
                s = ++gn;
                if (u.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (e in l.xhrFields) u[e] = l.xhrFields[e];
                for (e in l.mimeType && u.overrideMimeType && u.overrideMimeType(l.mimeType), l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) t[e] !== undefined && u.setRequestHeader(e, t[e] + "");
                u.send(l.hasContent && l.data || null),
                c = function(t, e) {
                    var n, r, i;
                    if (c && (e || 4 === u.readyState)) if (delete mn[s], c = undefined, u.onreadystatechange = dt.noop, e) 4 !== u.readyState && u.abort();
                    else {
                        i = {},
                        n = u.status,
                        "string" == typeof u.responseText && (i.text = u.responseText);
                        try {
                            r = u.statusText
                        } catch(o) {
                            r = ""
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                    }
                    i && a(n, r, i, u.getAllResponseHeaders())
                },
                l.async ? 4 === u.readyState ? _.setTimeout(c) : u.onreadystatechange = mn[s] = c: c()
            },
            abort: function() {
                c && c(undefined, !0)
            }
        }
    }),
    dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return dt.globalEval(t),
                t
            }
        }
    }),
    dt.ajaxPrefilter("script",
    function(t) {
        t.cache === undefined && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    dt.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var r, i = rt.head || dt("head")[0] || rt.documentElement;
            return {
                send: function(t, n) { (r = rt.createElement("script")).async = !0,
                    e.scriptCharset && (r.charset = e.scriptCharset),
                    r.src = e.url,
                    r.onload = r.onreadystatechange = function(t, e) { (e || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, e || n(200, "success"))
                    },
                    i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
    bn = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = yn.pop() || dt.expando + "_" + Ve++;
            return this[t] = !0,
            t
        }
    }),
    dt.ajaxPrefilter("json jsonp",
    function(t, e, n) {
        var r, i, o, a = !1 !== t.jsonp && (bn.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = dt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(bn, "$1" + r) : !1 !== t.jsonp && (t.url += (Ge.test(t.url) ? "&": "?") + t.jsonp + "=" + r),
        t.converters["script json"] = function() {
            return o || dt.error(r + " was not called"),
            o[0]
        },
        t.dataTypes[0] = "json",
        i = _[r],
        _[r] = function() {
            o = arguments
        },
        n.always(function() {
            i === undefined ? dt(_).removeProp(r) : _[r] = i,
            t[r] && (t.jsonpCallback = e.jsonpCallback, yn.push(r)),
            o && dt.isFunction(i) && i(o[0]),
            o = i = undefined
        }),
        "script"
    }),
    dt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || rt;
        var r = wt.exec(t),
        i = !n && [];
        return r ? [e.createElement(r[1])] : (r = g([t], e, i), i && i.length && dt(i).remove(), dt.merge([], r.childNodes))
    };
    var xn = dt.fn.load;
    dt.fn.load = function(t, e, n) {
        if ("string" != typeof t && xn) return xn.apply(this, arguments);
        var r, i, o, a = this,
        u = t.indexOf(" ");
        return - 1 < u && (r = dt.trim(t.slice(u, t.length)), t = t.slice(0, u)),
        dt.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (i = "POST"),
        0 < a.length && dt.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            a.html(r ? dt("<div>").append(dt.parseHTML(t)).find(r) : t)
        }).always(n &&
        function(t, e) {
            a.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }),
        this
    },
    dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        dt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    dt.expr.filters.animated = function(e) {
        return dt.grep(dt.timers,
        function(t) {
            return e === t.elem
        }).length
    },
    dt.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, a, u, s, l = dt.css(t, "position"),
            c = dt(t),
            f = {};
            "static" === l && (t.style.position = "relative"),
            u = c.offset(),
            o = dt.css(t, "top"),
            s = dt.css(t, "left"),
            ("absolute" === l || "fixed" === l) && -1 < dt.inArray("auto", [o, s]) ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0),
            dt.isFunction(e) && (e = e.call(t, n, dt.extend({},
            u))),
            null != e.top && (f.top = e.top - u.top + a),
            null != e.left && (f.left = e.left - u.left + i),
            "using" in e ? e.using.call(t, f) : c.css(f)
        }
    },
    dt.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this: this.each(function(t) {
                dt.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            return o ? (t = o.documentElement, dt.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = et(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === dt.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (n = t.offset()), n.top += dt.css(t[0], "borderTopWidth", !0), n.left += dt.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - dt.css(r, "marginTop", !0),
                    left: e.left - n.left - dt.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || ge
            })
        }
    }),
    dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, i) {
        var o = /Y/.test(i);
        dt.fn[e] = function(t) {
            return It(this,
            function(t, e, n) {
                var r = et(t);
                if (n === undefined) return r ? i in r ? r[i] : r.document.documentElement[e] : t[e];
                r ? r.scrollTo(o ? dt(r).scrollLeft() : n, o ? n: dt(r).scrollTop()) : t[e] = n
            },
            e, t, arguments.length, null)
        }
    }),
    dt.each(["top", "left"],
    function(t, n) {
        dt.cssHooks[n] = j(ft.pixelPosition,
        function(t, e) {
            if (e) return e = ve(t, n),
            de.test(e) ? dt(t).position()[n] + "px": e
        })
    }),
    dt.each({
        Height: "height",
        Width: "width"
    },
    function(o, a) {
        dt.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        },
        function(r, t) {
            dt.fn[t] = function(t, e) {
                var n = arguments.length && (r || "boolean" != typeof t),
                i = r || (!0 === t || !0 === e ? "margin": "border");
                return It(this,
                function(t, e, n) {
                    var r;
                    return dt.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + o], r["scroll" + o], t.body["offset" + o], r["offset" + o], r["client" + o])) : n === undefined ? dt.css(t, e, i) : dt.style(t, e, n, i)
                },
                a, n ? t: undefined, n, null)
            }
        })
    }),
    dt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    dt.fn.size = function() {
        return this.length
    },
    dt.fn.andSelf = dt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return dt
    });
    var Mn = _.jQuery,
    wn = _.$;
    return dt.noConflict = function(t) {
        return _.$ === dt && (_.$ = wn),
        t && _.jQuery === dt && (_.jQuery = Mn),
        dt
    },
    t || (_.jQuery = _.$ = dt),
    dt
}),
function(c, s) {
    "use strict";
    var l;
    c.rails !== s && c.error("jquery-ujs has already been loaded!");
    var t = c(document);
    c.rails = l = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return c("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return c("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = l.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            c('form input[name="' + l.csrfParam() + '"]').val(l.csrfToken())
        },
        fire: function(t, e, n) {
            var r = c.Event(e);
            return t.trigger(r, n),
            !1 !== r.result
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(t) {
            return c.ajax(t)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== s && !1 !== t.data("remote")
        },
        handleRemote: function(r) {
            var t, e, n, i, o, a;
            if (l.fire(r, "ajax:before")) {
                if (i = r.data("with-credentials") || null, o = r.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, r.is("form")) {
                    t = r.data("ujs:submit-button-formmethod") || r.attr("method"),
                    e = r.data("ujs:submit-button-formaction") || r.attr("action"),
                    n = c(r[0]).serializeArray();
                    var u = r.data("ujs:submit-button");
                    u && (n.push(u), r.data("ujs:submit-button", null)),
                    r.data("ujs:submit-button-formmethod", null),
                    r.data("ujs:submit-button-formaction", null)
                } else r.is(l.inputChangeSelector) ? (t = r.data("method"), e = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : r.is(l.buttonClickSelector) ? (t = r.data("method") || "get", e = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : (t = r.data("method"), e = l.href(r), n = r.data("params") || null);
                return a = {
                    type: t || "GET",
                    data: n,
                    dataType: o,
                    beforeSend: function(t, e) {
                        if (e.dataType === s && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !l.fire(r, "ajax:beforeSend", [t, e])) return ! 1;
                        r.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        r.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        r.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        r.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: l.isCrossDomain(e)
                },
                i && (a.xhrFields = {
                    withCredentials: i
                }),
                e && (a.url = e),
                l.ajax(a)
            }
            return ! 1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch(r) {
                return ! 0
            }
        },
        handleMethod: function(t) {
            var e = l.href(t),
            n = t.data("method"),
            r = t.attr("target"),
            i = l.csrfToken(),
            o = l.csrfParam(),
            a = c('<form method="post" action="' + e + '"></form>'),
            u = '<input name="_method" value="' + n + '" type="hidden" />';
            o === s || i === s || l.isCrossDomain(e) || (u += '<input name="' + o + '" value="' + i + '" type="hidden" />'),
            r && a.attr("target", r),
            a.hide().append(u).appendTo("body"),
            a.submit()
        },
        formElements: function(t, e) {
            return t.is("form") ? c(t[0].elements).filter(e) : t.find(e)
        },
        disableFormElements: function(t) {
            l.formElements(t, l.disableSelector).each(function() {
                l.disableFormElement(c(this))
            })
        },
        disableFormElement: function(t) {
            var e, n;
            e = t.is("button") ? "html": "val",
            (n = t.data("disable-with")) !== s && (t.data("ujs:enable-with", t[e]()), t[e](n)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            l.formElements(t, l.enableSelector).each(function() {
                l.enableFormElement(c(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html": "val";
            t.data("ujs:enable-with") !== s && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
            r = !1;
            if (!n) return ! 0;
            if (l.fire(t, "confirm")) {
                try {
                    r = l.confirm(n)
                } catch(i) { (console.error || console.log).call(console, i.stack || i)
                }
                e = l.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(t, e, n) {
            var r, i, o, a = c(),
            u = e || "input,textarea",
            s = t.find(u),
            l = {};
            return s.each(function() { (r = c(this)).is("input[type=radio]") ? (o = r.attr("name"), l[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (i = t.find('input[type=radio][name="' + o + '"]'), a = a.add(i)), l[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === n && (a = a.add(r))
            }),
            !!a.length && a
        },
        nonBlankInputs: function(t, e) {
            return l.blankInputs(t, e, !0)
        },
        stopEverything: function(t) {
            return c(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(t) {
            var e = t.data("disable-with");
            e !== s && (t.data("ujs:enable-with", t.html()), t.html(e)),
            t.bind("click.railsDisable",
            function(t) {
                return l.stopEverything(t)
            }),
            t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== s && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled")
        }
    },
    l.fire(t, "rails:attachBindings") && (c.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || l.CSRFProtection(n)
    }), c(window).on("pageshow.rails",
    function() {
        c(c.rails.enableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableFormElement(t)
        }),
        c(c.rails.linkDisableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableElement(t)
        })
    }), t.on("ajax:complete", l.linkDisableSelector,
    function() {
        l.enableElement(c(this))
    }), t.on("ajax:complete", l.buttonDisableSelector,
    function() {
        l.enableFormElement(c(this))
    }), t.on("click.rails", l.linkClickSelector,
    function(t) {
        var e = c(this),
        n = e.data("method"),
        r = e.data("params"),
        i = t.metaKey || t.ctrlKey;
        if (!l.allowAction(e)) return l.stopEverything(t);
        if (!i && e.is(l.linkDisableSelector) && l.disableElement(e), l.isRemote(e)) {
            if (i && (!n || "GET" === n) && !r) return ! 0;
            var o = l.handleRemote(e);
            return ! 1 === o ? l.enableElement(e) : o.fail(function() {
                l.enableElement(e)
            }),
            !1
        }
        return n ? (l.handleMethod(e), !1) : void 0
    }), t.on("click.rails", l.buttonClickSelector,
    function(t) {
        var e = c(this);
        if (!l.allowAction(e) || !l.isRemote(e)) return l.stopEverything(t);
        e.is(l.buttonDisableSelector) && l.disableFormElement(e);
        var n = l.handleRemote(e);
        return ! 1 === n ? l.enableFormElement(e) : n.fail(function() {
            l.enableFormElement(e)
        }),
        !1
    }), t.on("change.rails", l.inputChangeSelector,
    function(t) {
        var e = c(this);
        return l.allowAction(e) && l.isRemote(e) ? (l.handleRemote(e), !1) : l.stopEverything(t)
    }), t.on("submit.rails", l.formSubmitSelector,
    function(t) {
        var e, n, r = c(this),
        i = l.isRemote(r);
        if (!l.allowAction(r)) return l.stopEverything(t);
        if (r.attr("novalidate") === s) if (r.data("ujs:formnovalidate-button") === s) {
            if ((e = l.blankInputs(r, l.requiredInputSelector, !1)) && l.fire(r, "ajax:aborted:required", [e])) return l.stopEverything(t)
        } else r.data("ujs:formnovalidate-button", s);
        if (i) {
            if (n = l.nonBlankInputs(r, l.fileInputSelector)) {
                setTimeout(function() {
                    l.disableFormElements(r)
                },
                13);
                var o = l.fire(r, "ajax:aborted:file", [n]);
                return o || setTimeout(function() {
                    l.enableFormElements(r)
                },
                13),
                o
            }
            return l.handleRemote(r),
            !1
        }
        setTimeout(function() {
            l.disableFormElements(r)
        },
        13)
    }), t.on("click.rails", l.formInputClickSelector,
    function(t) {
        var e = c(this);
        if (!l.allowAction(e)) return l.stopEverything(t);
        var n = e.attr("name"),
        r = n ? {
            name: n,
            value: e.val()
        }: null,
        i = e.closest("form");
        0 === i.length && (i = c("#" + e.attr("form"))),
        i.data("ujs:submit-button", r),
        i.data("ujs:formnovalidate-button", e.attr("formnovalidate")),
        i.data("ujs:submit-button-formaction", e.attr("formaction")),
        i.data("ujs:submit-button-formmethod", e.attr("formmethod"))
    }), t.on("ajax:send.rails", l.formSubmitSelector,
    function(t) {
        this === t.target && l.disableFormElements(c(this))
    }), t.on("ajax:complete.rails", l.formSubmitSelector,
    function(t) {
        this === t.target && l.enableFormElements(c(this))
    }), c(function() {
        l.refreshCSRFTokens()
    }))
} (jQuery),
d3 = function() {
    function u(t) {
        return null != t && !isNaN(t)
    }
    function a(t) {
        return t.length
    }
    function s(t) {
        for (var e = 1; t * e % 1;) e *= 10;
        return e
    }
    function t(t, e) {
        try {
            for (var n in e) Object.defineProperty(t.prototype, n, {
                value: e[n],
                enumerable: !1
            })
        } catch(r) {
            t.prototype = e
        }
    }
    function x() {}
    function c() {}
    function o(e, n, r) {
        return function() {
            var t = r.apply(n, arguments);
            return t === n ? e: t
        }
    }
    function r() {}
    function l(i) {
        function t() {
            for (var t, e = o,
            n = -1,
            r = e.length; ++n < r;)(t = e[n].on) && t.apply(this, arguments);
            return i
        }
        var o = [],
        a = new x;
        return t.on = function(t, e) {
            var n, r = a.get(t);
            return arguments.length < 2 ? r && r.on: (r && (r.on = null, o = o.slice(0, n = o.indexOf(r)).concat(o.slice(n + 1)), a.remove(t)), e && o.push(a.set(t, {
                on: e
            })), i)
        },
        t
    }
    function N() {
        so.event.stopPropagation(),
        so.event.preventDefault()
    }
    function e() {
        for (var t, e = so.event; t = e.sourceEvent;) e = t;
        return e
    }
    function E(t, e) {
        function n() {
            t.on(e, null)
        }
        t.on(e,
        function() {
            N(),
            n()
        },
        !0),
        setTimeout(n, 0)
    }
    function A(i) {
        for (var o = new r,
        t = 0,
        e = arguments.length; ++t < e;) o[arguments[t]] = l(o);
        return o.of = function(n, r) {
            return function(t) {
                try {
                    var e = t.sourceEvent = so.event;
                    t.target = i,
                    so.event = t,
                    o[t.type].apply(n, r)
                } finally {
                    so.event = e
                }
            }
        },
        o
    }
    function i(t, e) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            if (vo < 0 && (co.scrollX || co.scrollY)) {
                var i = (n = so.select(lo.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0))[0][0].getScreenCTM();
                vo = !(i.f || i.e),
                n.remove()
            }
            return vo ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
        }
        var o = t.getBoundingClientRect();
        return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
    }
    function n(t) {
        for (var e = -1,
        n = t.length,
        r = []; ++e < n;) r.push(t[e]);
        return r
    }
    function f(t) {
        return Array.prototype.slice.call(t)
    }
    function h(t) {
        return bo(t, ko),
        t
    }
    function d(t) {
        return function() {
            return xo(t, this)
        }
    }
    function g(t) {
        return function() {
            return Mo(t, this)
        }
    }
    function p(e, n) {
        function t() {
            this.removeAttribute(e)
        }
        function r() {
            this.removeAttributeNS(e.space, e.local)
        }
        function i() {
            this.setAttribute(e, n)
        }
        function o() {
            this.setAttributeNS(e.space, e.local, n)
        }
        function a() {
            var t = n.apply(this, arguments);
            null == t ? this.removeAttribute(e) : this.setAttribute(e, t)
        }
        function u() {
            var t = n.apply(this, arguments);
            null == t ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t)
        }
        return e = so.ns.qualify(e),
        null == n ? e.local ? r: t: "function" == typeof n ? e.local ? u: a: e.local ? o: i
    }
    function m(t) {
        return t.trim().replace(/\s+/g, " ")
    }
    function v(t) {
        return new RegExp("(?:^|\\s+)" + so.requote(t) + "(?:\\s+|$)", "g")
    }
    function y(n, r) {
        function t() {
            for (var t = -1; ++t < i;) n[t](this, r)
        }
        function e() {
            for (var t = -1,
            e = r.apply(this, arguments); ++t < i;) n[t](this, e)
        }
        var i = (n = n.trim().split(/\s+/).map(M)).length;
        return "function" == typeof r ? e: t
    }
    function M(r) {
        var i = v(r);
        return function(t, e) {
            if (n = t.classList) return e ? n.add(r) : n.remove(r);
            var n = t.getAttribute("class") || "";
            e ? (i.lastIndex = 0, i.test(n) || t.setAttribute("class", m(n + " " + r))) : t.setAttribute("class", m(n.replace(i, " ")))
        }
    }
    function w(e, n, r) {
        function t() {
            this.style.removeProperty(e)
        }
        function i() {
            this.style.setProperty(e, n, r)
        }
        function o() {
            var t = n.apply(this, arguments);
            null == t ? this.style.removeProperty(e) : this.style.setProperty(e, t, r)
        }
        return null == n ? t: "function" == typeof n ? o: i
    }
    function _(e, n) {
        function t() {
            delete this[e]
        }
        function r() {
            this[e] = n
        }
        function i() {
            var t = n.apply(this, arguments);
            null == t ? delete this[e] : this[e] = t
        }
        return null == n ? t: "function" == typeof n ? i: r
    }
    function k(t) {
        return {
            __data__: t
        }
    }
    function S(t) {
        return function() {
            return Eo(this, t)
        }
    }
    function T(n) {
        return arguments.length || (n = so.ascending),
        function(t, e) {
            return ! t - !e || n(t.__data__, e.__data__)
        }
    }
    function C() {}
    function j(i, e, n) {
        function r() {
            var t = this[a];
            t && (this.removeEventListener(i, t, t.$), delete this[a])
        }
        function t() {
            var t = s(e, yo(arguments));
            r.call(this),
            this.addEventListener(i, this[a] = t, t.$ = n),
            t._ = e
        }
        function o() {
            var t, e = new RegExp("^__on([^.]+)" + so.requote(i) + "$");
            for (var n in this) if (t = n.match(e)) {
                var r = this[n];
                this.removeEventListener(t[1], r, r.$),
                delete this[n]
            }
        }
        var a = "__on" + i,
        u = i.indexOf("."),
        s = D;
        0 < u && (i = i.substring(0, u));
        var l = Co.get(i);
        return l && (i = l, s = q),
        u ? e ? t: r: e ? C: o
    }
    function D(n, r) {
        return function(t) {
            var e = so.event;
            so.event = t,
            r[0] = this.__data__;
            try {
                n.apply(this, r)
            } finally {
                so.event = e
            }
        }
    }
    function q(t, e) {
        var r = D(t, e);
        return function(t) {
            var e = this,
            n = t.relatedTarget;
            n && (n === e || 8 & n.compareDocumentPosition(e)) || r.call(e, t)
        }
    }
    function L(t, e) {
        for (var n = 0,
        r = t.length; n < r; n++) for (var i, o = t[n], a = 0, u = o.length; a < u; a++)(i = o[a]) && e(i, a, n);
        return t
    }
    function H(t) {
        return bo(t, No),
        t
    }
    function F() {}
    function R(t, e, n) {
        return new O(t, e, n)
    }
    function O(t, e, n) {
        this.h = t,
        this.s = e,
        this.l = n
    }
    function z(t, e, n) {
        function r(t) {
            return 360 < t ? t -= 360 : t < 0 && (t += 360),
            t < 60 ? o + (a - o) * t / 60 : t < 180 ? a: t < 240 ? o + (a - o) * (240 - t) / 60 : o
        }
        function i(t) {
            return Math.round(255 * r(t))
        }
        var o, a;
        return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t,
        e = isNaN(e) ? 0 : e < 0 ? 0 : 1 < e ? 1 : e,
        o = 2 * (n = n < 0 ? 0 : 1 < n ? 1 : n) - (a = n <= .5 ? n * (1 + e) : n + e - n * e),
        nt(i(t + 120), i(t), i(t - 120))
    }
    function P(t) {
        return 0 < t ? 1 : t < 0 ? -1 : 0
    }
    function $(t) {
        return Math.acos(Math.max( - 1, Math.min(1, t)))
    }
    function I(t) {
        return 1 < t ? Ho / 2 : t < -1 ? -Ho / 2 : Math.asin(t)
    }
    function B(t) {
        return (Math.exp(t) - Math.exp( - t)) / 2
    }
    function W(t) {
        return (Math.exp(t) + Math.exp( - t)) / 2
    }
    function U(t) {
        return (t = Math.sin(t / 2)) * t
    }
    function X(t, e, n) {
        return new Y(t, e, n)
    }
    function Y(t, e, n) {
        this.h = t,
        this.c = e,
        this.l = n
    }
    function V(t, e, n) {
        return isNaN(t) && (t = 0),
        isNaN(e) && (e = 0),
        G(n, Math.cos(t *= Ro) * e, Math.sin(t) * e)
    }
    function G(t, e, n) {
        return new J(t, e, n)
    }
    function J(t, e, n) {
        this.l = t,
        this.a = e,
        this.b = n
    }
    function Z(t, e, n) {
        var r = (t + 16) / 116,
        i = r + e / 500,
        o = r - n / 200;
        return nt(et(3.2404542 * (i = Q(i) * $o) - 1.5371385 * (r = Q(r) * Io) - .4985314 * (o = Q(o) * Bo)), et( - .969266 * i + 1.8760108 * r + .041556 * o), et(.0556434 * i - .2040259 * r + 1.0572252 * o))
    }
    function K(t, e, n) {
        return 0 < t ? X(Math.atan2(n, e) * Oo, Math.sqrt(e * e + n * n), t) : X(NaN, NaN, t)
    }
    function Q(t) {
        return.206893034 < t ? t * t * t: (t - 4 / 29) / 7.787037
    }
    function tt(t) {
        return.008856 < t ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }
    function et(t) {
        return Math.round(255 * (t <= .00304 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }
    function nt(t, e, n) {
        return new rt(t, e, n)
    }
    function rt(t, e, n) {
        this.r = t,
        this.g = e,
        this.b = n
    }
    function it(t) {
        return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }
    function ot(t, e, n) {
        var r, i, o, a = 0,
        u = 0,
        s = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1]) {
        case "hsl":
            return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
        case "rgb":
            return e(lt(i[0]), lt(i[1]), lt(i[2]))
        }
        return (o = Xo.get(t)) ? e(o.r, o.g, o.b) : (null != t && "#" === t.charAt(0) && (4 === t.length ? (a = t.charAt(1), a += a, u = t.charAt(2), u += u, s = t.charAt(3), s += s) : 7 === t.length && (a = t.substring(1, 3), u = t.substring(3, 5), s = t.substring(5, 7)), a = parseInt(a, 16), u = parseInt(u, 16), s = parseInt(s, 16)), e(a, u, s))
    }
    function at(t, e, n) {
        var r, i, o = Math.min(t /= 255, e /= 255, n /= 255),
        a = Math.max(t, e, n),
        u = a - o,
        s = (a + o) / 2;
        return u ? (i = s < .5 ? u / (a + o) : u / (2 - a - o), r = t == a ? (e - n) / u + (e < n ? 6 : 0) : e == a ? (n - t) / u + 2 : (t - e) / u + 4, r *= 60) : (r = NaN, i = 0 < s && s < 1 ? 0 : r),
        R(r, i, s)
    }
    function ut(t, e, n) {
        var r = tt((.4124564 * (t = st(t)) + .3575761 * (e = st(e)) + .1804375 * (n = st(n))) / $o),
        i = tt((.2126729 * t + .7151522 * e + .072175 * n) / Io);
        return G(116 * i - 16, 500 * (r - i), 200 * (i - tt((.0193339 * t + .119192 * e + .9503041 * n) / Bo)))
    }
    function st(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function lt(t) {
        var e = parseFloat(t);
        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
    }
    function ct(t) {
        return "function" == typeof t ? t: function() {
            return t
        }
    }
    function ft(t) {
        return t
    }
    function ht(n) {
        return 1 === n.length ?
        function(t, e) {
            n(null == t ? e: null)
        }: n
    }
    function dt(i, o) {
        function a(t, e, n) {
            arguments.length < 3 && (n = e, e = null);
            var r = so.xhr(t, o, n);
            return r.row = function(t) {
                return arguments.length ? r.response(null == (e = t) ? u: s(t)) : e
            },
            r.row(e)
        }
        function u(t) {
            return a.parse(t.responseText)
        }
        function s(e) {
            return function(t) {
                return a.parse(t.responseText, e)
            }
        }
        function e(t) {
            return t.map(l).join(i)
        }
        function l(t) {
            return n.test(t) ? '"' + t.replace(/\"/g, '""') + '"': t
        }
        var n = new RegExp('["' + i + "\n]"),
        h = i.charCodeAt(0);
        return a.parse = function(t, r) {
            var i;
            return a.parseRows(t,
            function(t, e) {
                if (i) return i(t, e - 1);
                var n = new Function("d", "return {" + t.map(function(t, e) {
                    return JSON.stringify(t) + ": d[" + e + "]"
                }).join(",") + "}");
                i = r ?
                function(t, e) {
                    return r(n(t), e)
                }: n
            })
        },
        a.parseRows = function(i, t) {
            function e() {
                if (s <= l) return u;
                if (o) return o = !1,
                a;
                var t = l;
                if (34 === i.charCodeAt(t)) {
                    for (var e = t; e++<s;) if (34 === i.charCodeAt(e)) {
                        if (34 !== i.charCodeAt(e + 1)) break; ++e
                    }
                    return l = e + 2,
                    13 === (n = i.charCodeAt(e + 1)) ? (o = !0, 10 === i.charCodeAt(e + 2) && ++l) : 10 === n && (o = !0),
                    i.substring(t + 1, e).replace(/""/g, '"')
                }
                for (; l < s;) {
                    var n, r = 1;
                    if (10 === (n = i.charCodeAt(l++))) o = !0;
                    else if (13 === n) o = !0,
                    10 === i.charCodeAt(l) && (++l, ++r);
                    else if (n !== h) continue;
                    return i.substring(t, l - r)
                }
                return i.substring(t)
            }
            for (var n, o, a = {},
            u = {},
            r = [], s = i.length, l = 0, c = 0; (n = e()) !== u;) {
                for (var f = []; n !== a && n !== u;) f.push(n),
                n = e();
                t && !(f = t(f, c++)) || r.push(f)
            }
            return r
        },
        a.format = function(t) {
            if (Array.isArray(t[0])) return a.formatRows(t);
            var n = new c,
            r = [];
            return t.forEach(function(t) {
                for (var e in t) n.has(e) || r.push(n.add(e))
            }),
            [r.map(l).join(i)].concat(t.map(function(e) {
                return r.map(function(t) {
                    return l(e[t])
                }).join(i)
            })).join("\n")
        },
        a.formatRows = function(t) {
            return t.map(e).join("\n")
        },
        a
    }
    function pt() {
        for (var t, e = Date.now(), n = Zo; n;)(t = e - n.then) >= n.delay && (n.flush = n.callback(t)),
        n = n.next;
        var r = gt() - e;
        24 < r ? (isFinite(r) && (clearTimeout(Vo), Vo = setTimeout(pt, r)), Yo = 0) : (Yo = 1, Ko(pt))
    }
    function gt() {
        for (var t = null,
        e = Zo,
        n = Infinity; e;) e.flush ? (delete Jo[e.callback.id], e = t ? t.next = e.next: Zo = e.next) : (n = Math.min(n, e.then + e.delay), e = (t = e).next);
        return n
    }
    function mt(t, e) {
        var n = Math.pow(10, 3 * Math.abs(8 - e));
        return {
            scale: 8 < e ?
            function(t) {
                return t / n
            }: function(t) {
                return t * n
            },
            symbol: t
        }
    }
    function vt(t, e) {
        return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
    }
    function yt(t) {
        return t + ""
    }
    function bt(t, e) {
        t && fa.hasOwnProperty(t.type) && fa[t.type](t, e)
    }
    function xt(t, e, n) {
        var r, i = -1,
        o = t.length - n;
        for (e.lineStart(); ++i < o;) r = t[i],
        e.point(r[0], r[1]);
        e.lineEnd()
    }
    function Mt(t, e) {
        var n = -1,
        r = t.length;
        for (e.polygonStart(); ++n < r;) xt(t[n], e, 1);
        e.polygonEnd()
    }
    function wt() {
        function n(t, e) {
            e = e * Ro / 2 + Ho / 4;
            var n = (t *= Ro) - c,
            r = Math.cos(e),
            i = Math.sin(e),
            o = h * i,
            a = sa,
            u = la,
            s = f * r + o * Math.cos(n),
            l = o * Math.sin(n);
            sa = a * s - u * l,
            la = u * s + a * l,
            c = t,
            f = r,
            h = i
        }
        var r, i, c, f, h;
        va.point = function(t, e) {
            va.point = n,
            c = (r = t) * Ro,
            f = Math.cos(e = (i = e) * Ro / 2 + Ho / 4),
            h = Math.sin(e)
        },
        va.lineEnd = function() {
            n(r, i)
        }
    }
    function _t(e) {
        function t(t, e) {
            t < r && (r = t),
            o < t && (o = t),
            e < i && (i = e),
            a < e && (a = e)
        }
        function n() {
            u.point = u.lineEnd = C
        }
        var r, i, o, a, u = {
            point: t,
            lineStart: C,
            lineEnd: C,
            polygonStart: function() {
                u.lineEnd = n
            },
            polygonEnd: function() {
                u.point = t
            }
        };
        return function(t) {
            return a = o = -(r = i = Infinity),
            so.geo.stream(t, e(u)),
            [[r, i], [o, a]]
        }
    }
    function Et(t, e) {
        if (!ha) {++da,
            t *= Ro;
            var n = Math.cos(e *= Ro);
            pa += (n * Math.cos(t) - pa) / da,
            ga += (n * Math.sin(t) - ga) / da,
            ma += (Math.sin(e) - ma) / da
        }
    }
    function kt() {
        var n, r;
        ha = 1,
        St(),
        ha = 2;
        var i = ba.point;
        ba.point = function(t, e) {
            i(n = t, r = e)
        },
        ba.lineEnd = function() {
            ba.point(n, r),
            Tt(),
            ba.lineEnd = Tt
        }
    }
    function St() {
        function r(t, e) {
            t *= Ro;
            var n = Math.cos(e *= Ro),
            r = n * Math.cos(t),
            i = n * Math.sin(t),
            o = Math.sin(e),
            a = Math.atan2(Math.sqrt((a = s * o - l * i) * a + (a = l * r - u * o) * a + (a = u * i - s * r) * a), u * r + s * i + l * o);
            da += a,
            pa += a * (u + (u = r)),
            ga += a * (s + (s = i)),
            ma += a * (l + (l = o))
        }
        var u, s, l;
        1 < ha || (ha < 1 && (ha = 1, da = pa = ga = ma = 0), ba.point = function(t, e) {
            t *= Ro;
            var n = Math.cos(e *= Ro);
            u = n * Math.cos(t),
            s = n * Math.sin(t),
            l = Math.sin(e),
            ba.point = r
        })
    }
    function Tt() {
        ba.point = Et
    }
    function Ct(t) {
        var e = t[0],
        n = t[1],
        r = Math.cos(n);
        return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
    }
    function Nt(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function At(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }
    function jt(t, e) {
        t[0] += e[0],
        t[1] += e[1],
        t[2] += e[2]
    }
    function Dt(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e]
    }
    function qt(t) {
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e,
        t[1] /= e,
        t[2] /= e
    }
    function Lt() {
        return ! 0
    }
    function Ht(t) {
        return [Math.atan2(t[1], t[0]), Math.asin(Math.max( - 1, Math.min(1, t[2])))]
    }
    function Ft(t, e) {
        return Math.abs(t[0] - e[0]) < Fo && Math.abs(t[1] - e[1]) < Fo
    }
    function Rt(t, e, n, r, u) {
        var s = [],
        l = [];
        if (t.forEach(function(t) {
            if (! ((e = t.length - 1) <= 0)) {
                var e, n = t[0],
                r = t[e];
                if (Ft(n, r)) {
                    u.lineStart();
                    for (var i = 0; i < e; ++i) u.point((n = t[i])[0], n[1]);
                    u.lineEnd()
                } else {
                    var o = {
                        point: n,
                        points: t,
                        other: null,
                        visited: !1,
                        entry: !0,
                        subject: !0
                    },
                    a = {
                        point: n,
                        points: [n],
                        other: o,
                        visited: !1,
                        entry: !1,
                        subject: !1
                    };
                    o.other = a,
                    s.push(o),
                    l.push(a),
                    a = {
                        point: r,
                        points: [r],
                        other: o = {
                            point: r,
                            points: [r],
                            other: null,
                            visited: !1,
                            entry: !1,
                            subject: !0
                        },
                        visited: !1,
                        entry: !0,
                        subject: !1
                    },
                    o.other = a,
                    s.push(o),
                    l.push(a)
                }
            }
        }), l.sort(e), Ot(s), Ot(l), s.length) {
            if (n) for (var i = 1,
            o = !n(l[0].point), a = l.length; i < a; ++i) l[i].entry = o = !o;
            for (var c, f, h, d = s[0];;) {
                for (c = d; c.visited;) if ((c = c.next) === d) return;
                f = c.points,
                u.lineStart();
                do {
                    if (c.visited = c.other.visited = !0, c.entry) {
                        if (c.subject) for (i = 0; i < f.length; i++) u.point((h = f[i])[0], h[1]);
                        else r(c.point, c.next.point, 1, u);
                        c = c.next
                    } else {
                        if (c.subject) for (i = (f = c.prev.points).length; 0 <= --i;) u.point((h = f[i])[0], h[1]);
                        else r(c.point, c.prev.point, -1, u);
                        c = c.prev
                    }
                    f = (c = c.other).points
                } while (! c . visited );
                u.lineEnd()
            }
        }
    }
    function Ot(t) {
        if (e = t.length) {
            for (var e, n, r = 0,
            i = t[0]; ++r < e;) i.next = n = t[r],
            n.prev = i,
            i = n;
            i.next = n = t[0],
            n.prev = i
        }
    }
    function zt(v, y, b) {
        return function(a) {
            function t(t, e) {
                v(t, e) && a.point(t, e)
            }
            function e(t, e) {
                d.point(t, e)
            }
            function n() {
                p.point = e,
                d.lineStart()
            }
            function r() {
                p.point = t,
                d.lineEnd()
            }
            function u(t, e) {
                m.point(t, e),
                h.push([t, e])
            }
            function i() {
                m.lineStart(),
                h = []
            }
            function o() {
                u(h[0][0], h[0][1]),
                m.lineEnd();
                var t, e = m.clean(),
                n = g.buffer();
                if (! (i = n.length)) return f = !0,
                c += It(h, -1),
                void(h = null);
                if (h = null, 1 & e) {
                    t = n[0],
                    l += It(t, 1);
                    var r, i = t.length - 1,
                    o = -1;
                    for (a.lineStart(); ++o < i;) a.point((r = t[o])[0], r[1]);
                    a.lineEnd()
                } else 1 < i && 2 & e && n.push(n.pop().concat(n.shift())),
                s.push(n.filter(Pt))
            }
            var s, l, c, f, h, d = y(a),
            p = {
                point: t,
                lineStart: n,
                lineEnd: r,
                polygonStart: function() {
                    p.point = u,
                    p.lineStart = i,
                    p.lineEnd = o,
                    f = !1,
                    c = l = 0,
                    s = [],
                    a.polygonStart()
                },
                polygonEnd: function() {
                    p.point = t,
                    p.lineStart = n,
                    p.lineEnd = r,
                    (s = so.merge(s)).length ? Rt(s, Bt, null, b, a) : (l < -Fo || f && c < -Fo) && (a.lineStart(), b(null, null, 1, a), a.lineEnd()),
                    a.polygonEnd(),
                    s = null
                },
                sphere: function() {
                    a.polygonStart(),
                    a.lineStart(),
                    b(null, null, 1, a),
                    a.lineEnd(),
                    a.polygonEnd()
                }
            },
            g = $t(),
            m = y(g);
            return p
        }
    }
    function Pt(t) {
        return 1 < t.length
    }
    function $t() {
        var n, e = [];
        return {
            lineStart: function() {
                e.push(n = [])
            },
            point: function(t, e) {
                n.push([t, e])
            },
            lineEnd: C,
            buffer: function() {
                var t = e;
                return e = [],
                n = null,
                t
            },
            rejoin: function() {
                1 < e.length && e.push(e.pop().concat(e.shift()))
            }
        }
    }
    function It(t, e) {
        if (! (n = t.length)) return 0;
        for (var n, r, i, o = 0,
        a = 0,
        u = t[0], s = u[0], l = u[1], c = Math.cos(l), f = Math.atan2(e * Math.sin(s) * c, Math.sin(l)), h = 1 - e * Math.cos(s) * c, d = f; ++o < n;) u = t[o],
        c = Math.cos(l = u[1]),
        r = Math.atan2(e * Math.sin(s = u[0]) * c, Math.sin(l)),
        i = 1 - e * Math.cos(s) * c,
        Math.abs(h - 2) < Fo && Math.abs(i - 2) < Fo || (Math.abs(i) < Fo || Math.abs(h) < Fo || (Math.abs(Math.abs(r - f) - Ho) < Fo ? 2 < i + h && (a += 4 * (r - f)) : Math.abs(h - 2) < Fo ? a += 4 * (r - d) : a += ((3 * Ho + r - f) % (2 * Ho) - Ho) * (h + i)), d = f, f = r, h = i);
        return a
    }
    function Bt(t, e) {
        return ((t = t.point)[0] < 0 ? t[1] - Ho / 2 - Fo: Ho / 2 - t[1]) - ((e = e.point)[0] < 0 ? e[1] - Ho / 2 - Fo: Ho / 2 - e[1])
    }
    function Wt(i) {
        var o, a = NaN,
        u = NaN,
        s = NaN;
        return {
            lineStart: function() {
                i.lineStart(),
                o = 1
            },
            point: function(t, e) {
                var n = 0 < t ? Ho: -Ho,
                r = Math.abs(t - a);
                Math.abs(r - Ho) < Fo ? (i.point(a, u = 0 < (u + e) / 2 ? Ho / 2 : -Ho / 2), i.point(s, u), i.lineEnd(), i.lineStart(), i.point(n, u), i.point(t, u), o = 0) : s !== n && Ho <= r && (Math.abs(a - s) < Fo && (a -= s * Fo), Math.abs(t - n) < Fo && (t -= n * Fo), u = Ut(a, u, t, e), i.point(s, u), i.lineEnd(), i.lineStart(), i.point(n, u), o = 0),
                i.point(a = t, u = e),
                s = n
            },
            lineEnd: function() {
                i.lineEnd(),
                a = u = NaN
            },
            clean: function() {
                return 2 - o
            }
        }
    }
    function Ut(t, e, n, r) {
        var i, o, a = Math.sin(t - n);
        return Math.abs(a) > Fo ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * o * a)) : (e + r) / 2
    }
    function Xt(t, e, n, r) {
        var i;
        if (null == t) i = n * Ho / 2,
        r.point( - Ho, i),
        r.point(0, i),
        r.point(Ho, i),
        r.point(Ho, 0),
        r.point(Ho, -i),
        r.point(0, -i),
        r.point( - Ho, -i),
        r.point( - Ho, 0),
        r.point( - Ho, i);
        else if (Math.abs(t[0] - e[0]) > Fo) {
            var o = (t[0] < e[0] ? 1 : -1) * Ho;
            i = n * o / 2,
            r.point( - o, i),
            r.point(0, i),
            r.point(o, i)
        } else r.point(e[0], e[1])
    }
    function Yt(i) {
        function d(t, e) {
            return Math.cos(t) * Math.cos(e) > S
        }
        function t(u) {
            var s, l, c, f, h;
            return {
                lineStart: function() {
                    f = c = !1,
                    h = 1
                },
                point: function(t, e) {
                    var n, r = [t, e],
                    i = d(t, e),
                    o = m ? i ? 0 : g(t, e) : i ? g(t + (t < 0 ? Ho: -Ho), e) : 0;
                    if (!s && (f = c = i) && u.lineStart(), i !== c && (n = p(s, r), (Ft(s, n) || Ft(r, n)) && (r[0] += Fo, r[1] += Fo, i = d(r[0], r[1]))), i !== c) h = 0,
                    i ? (u.lineStart(), n = p(r, s), u.point(n[0], n[1])) : (n = p(s, r), u.point(n[0], n[1]), u.lineEnd()),
                    s = n;
                    else if (v && s && m ^ i) {
                        var a;
                        o & l || !(a = p(r, s, !0)) || (h = 0, m ? (u.lineStart(), u.point(a[0][0], a[0][1]), u.point(a[1][0], a[1][1]), u.lineEnd()) : (u.point(a[1][0], a[1][1]), u.lineEnd(), u.lineStart(), u.point(a[0][0], a[0][1])))
                    } ! i || s && Ft(s, r) || u.point(r[0], r[1]),
                    s = r,
                    c = i,
                    l = o
                },
                lineEnd: function() {
                    c && u.lineEnd(),
                    s = null
                },
                clean: function() {
                    return h | (f && c) << 1
                }
            }
        }
        function p(t, e, n) {
            var r = [1, 0, 0],
            i = At(Ct(t), Ct(e)),
            o = Nt(i, i),
            a = i[0],
            u = o - a * a;
            if (!u) return ! n && t;
            var s = S * o / u,
            l = -S * a / u,
            c = At(r, i),
            f = Dt(r, s);
            jt(f, Dt(i, l));
            var h = c,
            d = Nt(f, h),
            p = Nt(h, h),
            g = d * d - p * (Nt(f, f) - 1);
            if (! (g < 0)) {
                var m = Math.sqrt(g),
                v = Dt(h, ( - d - m) / p);
                if (jt(v, f), v = Ht(v), !n) return v;
                var y, b = t[0],
                x = e[0],
                M = t[1],
                w = e[1];
                x < b && (y = b, b = x, x = y);
                var _ = x - b,
                E = Math.abs(_ - Ho) < Fo;
                if (!E && w < M && (y = M, M = w, w = y), E || _ < Fo ? E ? 0 < M + w ^ v[1] < (Math.abs(v[0] - b) < Fo ? M: w) : M <= v[1] && v[1] <= w: Ho < _ ^ (b <= v[0] && v[0] <= x)) {
                    var k = Dt(h, ( - d + m) / p);
                    return jt(k, f),
                    [v, Ht(k)]
                }
            }
        }
        function g(t, e) {
            var n = m ? i: Ho - i,
            r = 0;
            return t < -n ? r |= 1 : n < t && (r |= 2),
            e < -n ? r |= 4 : n < e && (r |= 8),
            r
        }
        var S = Math.cos(i),
        m = 0 < S,
        v = Math.abs(S) > Fo;
        return zt(d, t, ae(i, 6 * Ro))
    }
    function Vt(E, k, S, T) {
        function C(t, e) {
            return Math.abs(t[0] - E) < Fo ? 0 < e ? 0 : 3 : Math.abs(t[0] - S) < Fo ? 0 < e ? 2 : 1 : Math.abs(t[1] - k) < Fo ? 0 < e ? 1 : 0 : 0 < e ? 3 : 2
        }
        function N(t, e) {
            return A(t.point, e.point)
        }
        function A(t, e) {
            var n = C(t, 1),
            r = C(e, 1);
            return n !== r ? n - r: 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
        }
        function j(t, e) {
            var n = e[0] - t[0],
            r = e[1] - t[1],
            i = [0, 1];
            return Math.abs(n) < Fo && Math.abs(r) < Fo ? E <= t[0] && t[0] <= S && k <= t[1] && t[1] <= T: !!(Gt(E - t[0], n, i) && Gt(t[0] - S, -n, i) && Gt(k - t[1], r, i) && Gt(t[1] - T, -r, i)) && (i[1] < 1 && (e[0] = t[0] + i[1] * n, e[1] = t[1] + i[1] * r), 0 < i[0] && (t[0] += i[0] * n, t[1] += i[0] * r), !0)
        }
        return function(o) {
            function t(t) {
                var e = C(t, -1);
                return n([0 === e || 3 === e ? E: S, 1 < e ? T: k])
            }
            function n(t) {
                for (var e = 0,
                n = f.length,
                r = t[1], i = 0; i < n; ++i) for (var o = 1,
                a = f[i], u = a.length, s = a[0]; o < u; ++o) b = a[o],
                s[1] <= r ? b[1] > r && 0 < l(s, b, t) && ++e: b[1] <= r && l(s, b, t) < 0 && --e,
                s = b;
                return 0 !== e
            }
            function l(t, e, n) {
                return (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1])
            }
            function e(t, e, n, r) {
                var i = 0,
                o = 0;
                if (null == t || (i = C(t, n)) !== (o = C(e, n)) || A(t, e) < 0 ^ 0 < n) for (; r.point(0 === i || 3 === i ? E: S, 1 < i ? T: k), (i = (i + n + 4) % 4) !== o;);
                else r.point(e[0], e[1])
            }
            function a(t, e) {
                return E <= t && t <= S && k <= e && e <= T
            }
            function r(t, e) {
                a(t, e) && o.point(t, e)
            }
            function i() {
                _.point = s,
                f && f.push(h = []),
                y = !(x = !0),
                m = v = NaN
            }
            function u() {
                c && (s(d, p), g && y && w.rejoin(), c.push(w.buffer())),
                _.point = r,
                y && o.lineEnd()
            }
            function s(t, e) {
                var n = a(t = Math.max( - Ma, Math.min(Ma, t)), e = Math.max( - Ma, Math.min(Ma, e)));
                if (f && h.push([t, e]), x) d = t,
                p = e,
                x = !1,
                (g = n) && (o.lineStart(), o.point(t, e));
                else if (n && y) o.point(t, e);
                else {
                    var r = [m, v],
                    i = [t, e];
                    j(r, i) ? (y || (o.lineStart(), o.point(r[0], r[1])), o.point(i[0], i[1]), n || o.lineEnd()) : (o.lineStart(), o.point(t, e))
                }
                m = t,
                v = e,
                y = n
            }
            var c, f, h, d, p, g, m, v, y, x, M = o,
            w = $t(),
            _ = {
                point: r,
                lineStart: i,
                lineEnd: u,
                polygonStart: function() {
                    o = w,
                    c = [],
                    f = []
                },
                polygonEnd: function() {
                    o = M,
                    (c = so.merge(c)).length ? (o.polygonStart(), Rt(c, N, t, e, o), o.polygonEnd()) : n([E, k]) && (o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()),
                    c = f = h = null
                }
            };
            return _
        }
    }
    function Gt(t, e, n) {
        if (Math.abs(e) < Fo) return t <= 0;
        var r = t / e;
        if (0 < e) {
            if (r > n[1]) return ! 1;
            r > n[0] && (n[0] = r)
        } else {
            if (r < n[0]) return ! 1;
            r < n[1] && (n[1] = r)
        }
        return ! 0
    }
    function Jt(n, r) {
        function t(t, e) {
            return t = n(t, e),
            r(t[0], t[1])
        }
        return n.invert && r.invert && (t.invert = function(t, e) {
            return (t = r.invert(t, e)) && n.invert(t[0], t[1])
        }),
        t
    }
    function Zt(N) {
        function e(s) {
            function t(t, e) {
                t = N(t, e),
                s.point(t[0], t[1])
            }
            function e() {
                h = NaN,
                v.point = l,
                s.lineStart()
            }
            function l(t, e) {
                var n = Ct([t, e]),
                r = N(t, e);
                A(h, d, f, p, g, m, h = r[0], d = r[1], f = t, p = n[0], g = n[1], m = n[2], y, s),
                s.point(h, d)
            }
            function c() {
                v.point = t,
                s.lineEnd()
            }
            function n() {
                var n, r, i, o, a, u;
                e(),
                v.point = function(t, e) {
                    l(n = t, e),
                    r = h,
                    i = d,
                    o = p,
                    a = g,
                    u = m,
                    v.point = l
                },
                v.lineEnd = function() {
                    A(h, d, f, p, g, m, r, i, n, o, a, u, y, s),
                    (v.lineEnd = c)()
                }
            }
            var f, h, d, p, g, m, v = {
                point: t,
                lineStart: e,
                lineEnd: c,
                polygonStart: function() {
                    s.polygonStart(),
                    v.lineStart = n
                },
                polygonEnd: function() {
                    s.polygonEnd(),
                    v.lineStart = e
                }
            };
            return v
        }
        function A(t, e, n, r, i, o, a, u, s, l, c, f, h, d) {
            var p = a - t,
            g = u - e,
            m = p * p + g * g;
            if (4 * j < m && h--) {
                var v = r + l,
                y = i + c,
                b = o + f,
                x = Math.sqrt(v * v + y * y + b * b),
                M = Math.asin(b /= x),
                w = Math.abs(Math.abs(b) - 1) < Fo ? (n + s) / 2 : Math.atan2(y, v),
                _ = N(w, M),
                E = _[0],
                k = _[1],
                S = E - t,
                T = k - e,
                C = g * S - p * T; (j < C * C / m || .3 < Math.abs((p * S + g * T) / m - .5)) && (A(t, e, n, r, i, o, E, k, w, v /= x, y /= x, b, h, d), d.point(E, k), A(E, k, w, v, y, b, a, u, s, l, c, f, h, d))
            }
        }
        var j = .5,
        y = 16;
        return e.precision = function(t) {
            return arguments.length ? (y = 0 < (j = t * t) && 16, e) : Math.sqrt(j)
        },
        e
    }
    function Kt(t) {
        return Qt(function() {
            return t
        })()
    }
    function Qt(t) {
        function e(t) {
            return [(t = a(t[0] * Ro, t[1] * Ro))[0] * c + u, s - t[1] * c]
        }
        function n(t) {
            return (t = a.invert((t[0] - u) / c, (s - t[1]) / c)) && [t[0] * Oo, t[1] * Oo]
        }
        function r() {
            a = Jt(o = ne(g, m, v), i);
            var t = i(d, p);
            return u = f - t[0] * c,
            s = h + t[1] * c,
            e
        }
        var i, o, a, u, s, l = Zt(function(t, e) {
            return [(t = i(t, e))[0] * c + u, s - t[1] * c]
        }),
        c = 150,
        f = 480,
        h = 250,
        d = 0,
        p = 0,
        g = 0,
        m = 0,
        v = 0,
        y = xa,
        b = ft,
        x = null,
        M = null;
        return e.stream = function(t) {
            return te(o, y(l(b(t))))
        },
        e.clipAngle = function(t) {
            return arguments.length ? (y = null == t ? (x = t, xa) : Yt((x = +t) * Ro), e) : x
        },
        e.clipExtent = function(t) {
            return arguments.length ? (b = null == (M = t) ? ft: Vt(t[0][0], t[0][1], t[1][0], t[1][1]), e) : M
        },
        e.scale = function(t) {
            return arguments.length ? (c = +t, r()) : c
        },
        e.translate = function(t) {
            return arguments.length ? (f = +t[0], h = +t[1], r()) : [f, h]
        },
        e.center = function(t) {
            return arguments.length ? (d = t[0] % 360 * Ro, p = t[1] % 360 * Ro, r()) : [d * Oo, p * Oo]
        },
        e.rotate = function(t) {
            return arguments.length ? (g = t[0] % 360 * Ro, m = t[1] % 360 * Ro, v = 2 < t.length ? t[2] % 360 * Ro: 0, r()) : [g * Oo, m * Oo, v * Oo]
        },
        so.rebind(e, l, "precision"),
        function() {
            return i = t.apply(this, arguments),
            e.invert = i.invert && n,
            r()
        }
    }
    function te(n, r) {
        return {
            point: function(t, e) {
                t = (e = n(t * Ro, e * Ro))[0],
                r.point(Ho < t ? t - 2 * Ho: t < -Ho ? t + 2 * Ho: t, e[1])
            },
            sphere: function() {
                r.sphere()
            },
            lineStart: function() {
                r.lineStart()
            },
            lineEnd: function() {
                r.lineEnd()
            },
            polygonStart: function() {
                r.polygonStart()
            },
            polygonEnd: function() {
                r.polygonEnd()
            }
        }
    }
    function ee(t, e) {
        return [t, e]
    }
    function ne(t, e, n) {
        return t ? e || n ? Jt(ie(t), oe(e, n)) : ie(t) : e || n ? oe(e, n) : ee
    }
    function re(n) {
        return function(t, e) {
            return [Ho < (t += n) ? t - 2 * Ho: t < -Ho ? t + 2 * Ho: t, e]
        }
    }
    function ie(t) {
        var e = re(t);
        return e.invert = re( - t),
        e
    }
    function oe(t, e) {
        function n(t, e) {
            var n = Math.cos(e),
            r = Math.cos(t) * n,
            i = Math.sin(t) * n,
            o = Math.sin(e),
            a = o * u + r * s;
            return [Math.atan2(i * l - a * c, r * u - o * s), Math.asin(Math.max( - 1, Math.min(1, a * l + i * c)))]
        }
        var u = Math.cos(t),
        s = Math.sin(t),
        l = Math.cos(e),
        c = Math.sin(e);
        return n.invert = function(t, e) {
            var n = Math.cos(e),
            r = Math.cos(t) * n,
            i = Math.sin(t) * n,
            o = Math.sin(e),
            a = o * l - i * c;
            return [Math.atan2(i * l + o * c, r * u + a * s), Math.asin(Math.max( - 1, Math.min(1, a * u - r * s)))]
        },
        n
    }
    function ae(u, s) {
        var l = Math.cos(u),
        c = Math.sin(u);
        return function(t, e, n, r) {
            var i;
            null != t ? (t = ue(l, t), e = ue(l, e), (0 < n ? t < e: e < t) && (t += 2 * n * Ho)) : (t = u + 2 * n * Ho, e = u);
            for (var o = n * s,
            a = t; 0 < n ? e < a: a < e; a -= o) r.point((i = Ht([l, -c * Math.cos(a), -c * Math.sin(a)]))[0], i[1])
        }
    }
    function ue(t, e) {
        var n = Ct(e);
        n[0] -= t,
        qt(n);
        var r = $( - n[1]);
        return (( - n[2] < 0 ? -r: r) + 2 * Math.PI - Fo) % (2 * Math.PI)
    }
    function se(t, e, n) {
        var r = so.range(t, e - Fo, n).concat(e);
        return function(e) {
            return r.map(function(t) {
                return [e, t]
            })
        }
    }
    function le(t, e, n) {
        var r = so.range(t, e - Fo, n).concat(e);
        return function(e) {
            return r.map(function(t) {
                return [t, e]
            })
        }
    }
    function ce(t) {
        return t.source
    }
    function fe(t) {
        return t.target
    }
    function he(t, e, n, r) {
        var i = Math.cos(e),
        a = Math.sin(e),
        o = Math.cos(r),
        u = Math.sin(r),
        s = i * Math.cos(t),
        l = i * Math.sin(t),
        c = o * Math.cos(n),
        f = o * Math.sin(n),
        h = 2 * Math.asin(Math.sqrt(U(r - e) + i * o * U(n - t))),
        d = 1 / Math.sin(h),
        p = h ?
        function(t) {
            var e = Math.sin(t *= h) * d,
            n = Math.sin(h - t) * d,
            r = n * s + e * c,
            i = n * l + e * f,
            o = n * a + e * u;
            return [Math.atan2(i, r) * Oo, Math.atan2(o, Math.sqrt(r * r + i * i)) * Oo]
        }: function() {
            return [t * Oo, e * Oo]
        };
        return p.distance = h,
        p
    }
    function de() {
        function n(t, e) {
            var n = Math.sin(e *= Ro),
            r = Math.cos(e),
            i = Math.abs((t *= Ro) - a),
            o = Math.cos(i);
            ya += Math.atan2(Math.sqrt((i = r * Math.sin(i)) * i + (i = s * n - u * r * o) * i), u * n + s * r * o),
            a = t,
            u = n,
            s = r
        }
        var a, u, s;
        wa.point = function(t, e) {
            a = t * Ro,
            u = Math.sin(e *= Ro),
            s = Math.cos(e),
            wa.point = n
        },
        wa.lineEnd = function() {
            wa.point = wa.lineEnd = C
        }
    }
    function pe(t) {
        var e = 0,
        n = Ho / 3,
        r = Qt(t),
        i = r(e, n);
        return i.parallels = function(t) {
            return arguments.length ? r(e = t[0] * Ho / 180, n = t[1] * Ho / 180) : [e / Ho * 180, n / Ho * 180]
        },
        i
    }
    function ge(t, e) {
        function n(t, e) {
            var n = Math.sqrt(o - 2 * i * Math.sin(e)) / i;
            return [n * Math.sin(t *= i), a - n * Math.cos(t)]
        }
        var r = Math.sin(t),
        i = (r + Math.sin(e)) / 2,
        o = 1 + r * (2 * i - r),
        a = Math.sqrt(o) / i;
        return n.invert = function(t, e) {
            var n = a - e;
            return [Math.atan2(t, n) / i, Math.asin((o - (t * t + n * n) * i * i) / (2 * i))]
        },
        n
    }
    function me(o, t) {
        var e = o(t[0]),
        n = o([.5 * (t[0][0] + t[1][0]), t[0][1]]),
        r = o([t[1][0], t[0][1]]),
        i = o(t[1]),
        a = (n[1] - e[1]) / (n[0] - e[0]),
        u = (r[1] - n[1]) / (r[0] - n[0]),
        s = .5 * (a * u * (e[1] - r[1]) + u * (e[0] + n[0]) - a * (n[0] + r[0])) / (u - a),
        l = (.5 * (e[0] + n[0]) - s) / a + .5 * (e[1] + n[1]),
        c = i[0] - s,
        f = i[1] - l,
        h = e[0] - s,
        d = e[1] - l,
        p = c * c + f * f,
        g = h * h + d * d,
        m = Math.atan2(f, c),
        v = Math.atan2(d, h);
        return function(t) {
            var e = t[0] - s,
            n = t[1] - l,
            r = e * e + n * n,
            i = Math.atan2(n, e);
            if (p < r && r < g && m < i && i < v) return o.invert(t)
        }
    }
    function ve() {
        function n(t, e) {
            Ea += a * t - o * e,
            o = t,
            a = e
        }
        var r, i, o, a;
        ka.point = function(t, e) {
            ka.point = n,
            r = o = t,
            i = a = e
        },
        ka.lineEnd = function() {
            n(r, i)
        }
    }
    function ye() {
        function t(t, e) {
            a.push("M", t, ",", e, o)
        }
        function e(t, e) {
            a.push("M", t, ",", e),
            u.point = n
        }
        function n(t, e) {
            a.push("L", t, ",", e)
        }
        function r() {
            u.point = t
        }
        function i() {
            a.push("Z")
        }
        var o = Ee(4.5),
        a = [],
        u = {
            point: t,
            lineStart: function() {
                u.point = e
            },
            lineEnd: r,
            polygonStart: function() {
                u.lineEnd = i
            },
            polygonEnd: function() {
                u.lineEnd = r,
                u.point = t
            },
            pointRadius: function(t) {
                return o = Ee(t),
                u
            },
            result: function() {
                if (a.length) {
                    var t = a.join("");
                    return a = [],
                    t
                }
            }
        };
        return u
    }
    function be(t, e) {
        ha || (pa += t, ga += e, ++ma)
    }
    function xe() {
        function n(t, e) {
            var n = t - o,
            r = e - a,
            i = Math.sqrt(n * n + r * r);
            pa += i * (o + t) / 2,
            ga += i * (a + e) / 2,
            ma += i,
            o = t,
            a = e
        }
        var o, a;
        if (1 !== ha) {
            if (! (ha < 1)) return;
            ha = 1,
            pa = ga = ma = 0
        }
        Sa.point = function(t, e) {
            Sa.point = n,
            o = t,
            a = e
        }
    }
    function Me() {
        Sa.point = be
    }
    function we() {
        function n(t, e) {
            var n = a * t - o * e;
            pa += n * (o + t),
            ga += n * (a + e),
            ma += 3 * n,
            o = t,
            a = e
        }
        var r, i, o, a;
        ha < 2 && (ha = 2, pa = ga = ma = 0),
        Sa.point = function(t, e) {
            Sa.point = n,
            r = o = t,
            i = a = e
        },
        Sa.lineEnd = function() {
            n(r, i)
        }
    }
    function _e(n) {
        function t(t, e) {
            n.moveTo(t, e),
            n.arc(t, e, a, 0, 2 * Ho)
        }
        function e(t, e) {
            n.moveTo(t, e),
            u.point = r
        }
        function r(t, e) {
            n.lineTo(t, e)
        }
        function i() {
            u.point = t
        }
        function o() {
            n.closePath()
        }
        var a = 4.5,
        u = {
            point: t,
            lineStart: function() {
                u.point = e
            },
            lineEnd: i,
            polygonStart: function() {
                u.lineEnd = o
            },
            polygonEnd: function() {
                u.lineEnd = i,
                u.point = t
            },
            pointRadius: function(t) {
                return a = t,
                u
            },
            result: C
        };
        return u
    }
    function Ee(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    function ke(n) {
        var t = Zt(function(t, e) {
            return n([t * Oo, e * Oo])
        });
        return function(n) {
            return n = t(n),
            {
                point: function(t, e) {
                    n.point(t * Ro, e * Ro)
                },
                sphere: function() {
                    n.sphere()
                },
                lineStart: function() {
                    n.lineStart()
                },
                lineEnd: function() {
                    n.lineEnd()
                },
                polygonStart: function() {
                    n.polygonStart()
                },
                polygonEnd: function() {
                    n.polygonEnd()
                }
            }
        }
    }
    function Se(o, a) {
        function t(t, e) {
            var n = Math.cos(t),
            r = Math.cos(e),
            i = o(n * r);
            return [i * r * Math.sin(t), i * Math.sin(e)]
        }
        return t.invert = function(t, e) {
            var n = Math.sqrt(t * t + e * e),
            r = a(n),
            i = Math.sin(r),
            o = Math.cos(r);
            return [Math.atan2(t * i, n * o), Math.asin(n && e * i / n)]
        },
        t
    }
    function Te(t, e) {
        function n(t, e) {
            var n = Math.abs(Math.abs(e) - Ho / 2) < Fo ? 0 : a / Math.pow(i(e), o);
            return [n * Math.sin(o * t), a - n * Math.cos(o * t)]
        }
        var r = Math.cos(t),
        i = function(t) {
            return Math.tan(Ho / 4 + t / 2)
        },
        o = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(i(e) / i(t)),
        a = r * Math.pow(i(t), o) / o;
        return o ? (n.invert = function(t, e) {
            var n = a - e,
            r = P(o) * Math.sqrt(t * t + n * n);
            return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - Ho / 2]
        },
        n) : Ne
    }
    function Ce(t, e) {
        function n(t, e) {
            var n = o - e;
            return [n * Math.sin(i * t), o - n * Math.cos(i * t)]
        }
        var r = Math.cos(t),
        i = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t),
        o = r / i + t;
        return Math.abs(i) < Fo ? ee: (n.invert = function(t, e) {
            var n = o - e;
            return [Math.atan2(t, n) / i, o - P(i) * Math.sqrt(t * t + n * n)]
        },
        n)
    }
    function Ne(t, e) {
        return [t, Math.log(Math.tan(Ho / 4 + e / 2))]
    }
    function Ae(t) {
        var i, o = Kt(t),
        a = o.scale,
        u = o.translate,
        s = o.clipExtent;
        return o.scale = function() {
            var t = a.apply(o, arguments);
            return t === o ? i ? o.clipExtent(null) : o: t
        },
        o.translate = function() {
            var t = u.apply(o, arguments);
            return t === o ? i ? o.clipExtent(null) : o: t
        },
        o.clipExtent = function(t) {
            var e = s.apply(o, arguments);
            if (e === o) {
                if (i = null == t) {
                    var n = Ho * a(),
                    r = u();
                    s([[r[0] - n, r[1] - n], [r[0] + n, r[1] + n]])
                }
            } else i && (e = null);
            return e
        },
        o.clipExtent(null)
    }
    function je(t, e) {
        var n = Math.cos(e) * Math.sin(t);
        return [Math.log((1 + n) / (1 - n)) / 2, Math.atan2(Math.tan(e), Math.cos(t))]
    }
    function De(l) {
        function e(t) {
            function e() {
                r.push("M", d(l(i), p))
            }
            for (var n, r = [], i = [], o = -1, a = t.length, u = ct(c), s = ct(f); ++o < a;) h.call(this, n = t[o], o) ? i.push([ + u.call(this, n, o), +s.call(this, n, o)]) : i.length && (e(), i = []);
            return i.length && e(),
            r.length ? r.join("") : null
        }
        var c = qe,
        f = Le,
        h = Lt,
        d = He,
        n = d.key,
        p = .7;
        return e.x = function(t) {
            return arguments.length ? (c = t, e) : c
        },
        e.y = function(t) {
            return arguments.length ? (f = t, e) : f
        },
        e.defined = function(t) {
            return arguments.length ? (h = t, e) : h
        },
        e.interpolate = function(t) {
            return arguments.length ? (n = "function" == typeof t ? d = t: (d = Da.get(t) || He).key, e) : n
        },
        e.tension = function(t) {
            return arguments.length ? (p = t, e) : p
        },
        e
    }
    function qe(t) {
        return t[0]
    }
    function Le(t) {
        return t[1]
    }
    function He(t) {
        return t.join("L")
    }
    function Fe(t) {
        return He(t) + "Z"
    }
    function Re(t) {
        for (var e = 0,
        n = t.length,
        r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
        return i.join("")
    }
    function Oe(t) {
        for (var e = 0,
        n = t.length,
        r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
        return i.join("")
    }
    function ze(t, e) {
        return t.length < 4 ? He(t) : t[1] + Ie(t.slice(1, t.length - 1), Be(t, e))
    }
    function Pe(t, e) {
        return t.length < 3 ? He(t) : t[0] + Ie((t.push(t[0]), t), Be([t[t.length - 2]].concat(t, [t[1]]), e))
    }
    function $e(t, e) {
        return t.length < 3 ? He(t) : t[0] + Ie(t, Be(t, e))
    }
    function Ie(t, e) {
        if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return He(t);
        var n = t.length != e.length,
        r = "",
        i = t[0],
        o = t[1],
        a = e[0],
        u = a,
        s = 1;
        if (n && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), 1 < e.length) {
            u = e[1],
            o = t[s],
            s++,
            r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1];
            for (var l = 2; l < e.length; l++, s++) o = t[s],
            u = e[l],
            r += "S" + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1]
        }
        if (n) {
            var c = t[s];
            r += "Q" + (o[0] + 2 * u[0] / 3) + "," + (o[1] + 2 * u[1] / 3) + "," + c[0] + "," + c[1]
        }
        return r
    }
    function Be(t, e) {
        for (var n, r = [], i = (1 - e) / 2, o = t[0], a = t[1], u = 1, s = t.length; ++u < s;) n = o,
        o = a,
        a = t[u],
        r.push([i * (a[0] - n[0]), i * (a[1] - n[1])]);
        return r
    }
    function We(t) {
        if (t.length < 3) return He(t);
        var e = 1,
        n = t.length,
        r = t[0],
        i = r[0],
        o = r[1],
        a = [i, i, i, (r = t[1])[0]],
        u = [o, o, o, r[1]],
        s = [i, ",", o];
        for (Ge(s, a, u); ++e < n;) r = t[e],
        a.shift(),
        a.push(r[0]),
        u.shift(),
        u.push(r[1]),
        Ge(s, a, u);
        for (e = -1; ++e < 2;) a.shift(),
        a.push(r[0]),
        u.shift(),
        u.push(r[1]),
        Ge(s, a, u);
        return s.join("")
    }
    function Ue(t) {
        if (t.length < 4) return He(t);
        for (var e, n = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) e = t[r],
        o.push(e[0]),
        a.push(e[1]);
        for (n.push(Ve(Ha, o) + "," + Ve(Ha, a)), --r; ++r < i;) e = t[r],
        o.shift(),
        o.push(e[0]),
        a.shift(),
        a.push(e[1]),
        Ge(n, o, a);
        return n.join("")
    }
    function Xe(t) {
        for (var e, n, r = -1,
        i = t.length,
        o = i + 4,
        a = [], u = []; ++r < 4;) n = t[r % i],
        a.push(n[0]),
        u.push(n[1]);
        for (e = [Ve(Ha, a), ",", Ve(Ha, u)], --r; ++r < o;) n = t[r % i],
        a.shift(),
        a.push(n[0]),
        u.shift(),
        u.push(n[1]),
        Ge(e, a, u);
        return e.join("")
    }
    function Ye(t, e) {
        var n = t.length - 1;
        if (n) for (var r, i, o = t[0][0], a = t[0][1], u = t[n][0] - o, s = t[n][1] - a, l = -1; ++l <= n;) i = l / n,
        (r = t[l])[0] = e * r[0] + (1 - e) * (o + i * u),
        r[1] = e * r[1] + (1 - e) * (a + i * s);
        return We(t)
    }
    function Ve(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }
    function Ge(t, e, n) {
        t.push("C", Ve(qa, e), ",", Ve(qa, n), ",", Ve(La, e), ",", Ve(La, n), ",", Ve(Ha, e), ",", Ve(Ha, n))
    }
    function Je(t, e) {
        return (e[1] - t[1]) / (e[0] - t[0])
    }
    function Ze(t) {
        for (var e = 0,
        n = t.length - 1,
        r = [], i = t[0], o = t[1], a = r[0] = Je(i, o); ++e < n;) r[e] = (a + (a = Je(i = o, o = t[e + 1]))) / 2;
        return r[e] = a,
        r
    }
    function Ke(t) {
        for (var e, n, r, i, o = [], a = Ze(t), u = -1, s = t.length - 1; ++u < s;) e = Je(t[u], t[u + 1]),
        Math.abs(e) < 1e-6 ? a[u] = a[u + 1] = 0 : 9 < (i = (n = a[u] / e) * n + (r = a[u + 1] / e) * r) && (i = 3 * e / Math.sqrt(i), a[u] = i * n, a[u + 1] = i * r);
        for (u = -1; ++u <= s;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])),
        o.push([i || 0, a[u] * i || 0]);
        return o
    }
    function Qe(t) {
        return t.length < 3 ? He(t) : t[0] + Ie(t, Ke(t))
    }
    function tn(t, e, n, r) {
        var i, o, a, u, s, l;
        return o = (i = r[t])[0],
        a = i[1],
        u = (i = r[e])[0],
        s = i[1],
        l = (i = r[n])[0],
        0 < (i[1] - a) * (u - o) - (s - a) * (l - o)
    }
    function en(t, e, n) {
        return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
    }
    function nn(t, e, n, r) {
        var i = t[0],
        o = n[0],
        a = e[0] - i,
        u = r[0] - o,
        s = t[1],
        l = n[1],
        c = e[1] - s,
        f = r[1] - l,
        h = (u * (s - l) - f * (i - o)) / (f * a - u * c);
        return [i + h * a, s + h * c]
    }
    function rn(t, r) {
        var e = {
            list: t.map(function(t, e) {
                return {
                    index: e,
                    x: t[0],
                    y: t[1]
                }
            }).sort(function(t, e) {
                return t.y < e.y ? -1 : t.y > e.y ? 1 : t.x < e.x ? -1 : t.x > e.x ? 1 : 0
            }),
            bottomSite: null
        },
        n = {
            list: [],
            leftEnd: null,
            rightEnd: null,
            init: function() {
                n.leftEnd = n.createHalfEdge(null, "l"),
                n.rightEnd = n.createHalfEdge(null, "l"),
                n.leftEnd.r = n.rightEnd,
                n.rightEnd.l = n.leftEnd,
                n.list.unshift(n.leftEnd, n.rightEnd)
            },
            createHalfEdge: function(t, e) {
                return {
                    edge: t,
                    side: e,
                    vertex: null,
                    l: null,
                    r: null
                }
            },
            insert: function(t, e) {
                e.l = t,
                e.r = t.r,
                t.r.l = e,
                t.r = e
            },
            leftBound: function(t) {
                for (var e = n.leftEnd; (e = e.r) != n.rightEnd && i.rightOf(e, t););
                return e = e.l
            },
            del: function(t) {
                t.l.r = t.r,
                t.r.l = t.l,
                t.edge = null
            },
            right: function(t) {
                return t.r
            },
            left: function(t) {
                return t.l
            },
            leftRegion: function(t) {
                return null == t.edge ? e.bottomSite: t.edge.region[t.side]
            },
            rightRegion: function(t) {
                return null == t.edge ? e.bottomSite: t.edge.region[Fa[t.side]]
            }
        },
        i = {
            bisect: function(t, e) {
                var n = {
                    region: {
                        l: t,
                        r: e
                    },
                    ep: {
                        l: null,
                        r: null
                    }
                },
                r = e.x - t.x,
                i = e.y - t.y,
                o = 0 < r ? r: -r,
                a = 0 < i ? i: -i;
                return n.c = t.x * r + t.y * i + .5 * (r * r + i * i),
                a < o ? (n.a = 1, n.b = i / r, n.c /= r) : (n.b = 1, n.a = r / i, n.c /= i),
                n
            },
            intersect: function(t, e) {
                var n = t.edge,
                r = e.edge;
                if (!n || !r || n.region.r == r.region.r) return null;
                var i = n.a * r.b - n.b * r.a;
                if (Math.abs(i) < 1e-10) return null;
                var o, a, u = (n.c * r.b - r.c * n.b) / i,
                s = (r.c * n.a - n.c * r.a) / i,
                l = n.region.r,
                c = r.region.r;
                l.y < c.y || l.y == c.y && l.x < c.x ? (o = t, a = n) : (o = e, a = r);
                var f = u >= a.region.r.x;
                return f && "l" === o.side || !f && "r" === o.side ? null: {
                    x: u,
                    y: s
                }
            },
            rightOf: function(t, e) {
                var n = t.edge,
                r = n.region.r,
                i = e.x > r.x;
                if (i && "l" === t.side) return 1;
                if (!i && "r" === t.side) return 0;
                if (1 === n.a) {
                    var o = e.y - r.y,
                    a = e.x - r.x,
                    u = 0,
                    s = 0;
                    if (!i && n.b < 0 || i && 0 <= n.b ? s = u = o >= n.b * a: (s = e.x + e.y * n.b > n.c, n.b < 0 && (s = !s), s || (u = 1)), !u) {
                        var l = r.x - n.region.l.x;
                        s = n.b * (a * a - o * o) < l * o * (1 + 2 * a / l + n.b * n.b),
                        n.b < 0 && (s = !s)
                    }
                } else {
                    var c = n.c - n.a * e.x,
                    f = e.y - c,
                    h = e.x - r.x,
                    d = c - r.y;
                    s = h * h + d * d < f * f
                }
                return "l" === t.side ? s: !s
            },
            endPoint: function(t, e, n) {
                t.ep[e] = n,
                t.ep[Fa[e]] && r(t)
            },
            distance: function(t, e) {
                var n = t.x - e.x,
                r = t.y - e.y;
                return Math.sqrt(n * n + r * r)
            }
        },
        u = {
            list: [],
            insert: function(t, e, n) {
                t.vertex = e,
                t.ystar = e.y + n;
                for (var r = 0,
                i = u.list,
                o = i.length; r < o; r++) {
                    var a = i[r];
                    if (! (t.ystar > a.ystar || t.ystar == a.ystar && e.x > a.vertex.x)) break
                }
                i.splice(r, 0, t)
            },
            del: function(t) {
                for (var e = 0,
                n = u.list,
                r = n.length; e < r && n[e] != t; ++e);
                n.splice(e, 1)
            },
            empty: function() {
                return 0 === u.list.length
            },
            nextEvent: function(t) {
                for (var e = 0,
                n = u.list,
                r = n.length; e < r; ++e) if (n[e] == t) return n[e + 1];
                return null
            },
            min: function() {
                var t = u.list[0];
                return {
                    x: t.vertex.x,
                    y: t.ystar
                }
            },
            extractMin: function() {
                return u.list.shift()
            }
        };
        n.init(),
        e.bottomSite = e.list.shift();
        for (var o, a, s, l, c, f, h, d, p, g, m, v, y, b = e.list.shift();;) if (u.empty() || (o = u.min()), b && (u.empty() || b.y < o.y || b.y == o.y && b.x < o.x)) a = n.leftBound(b),
        s = n.right(a),
        h = n.rightRegion(a),
        v = i.bisect(h, b),
        f = n.createHalfEdge(v, "l"),
        n.insert(a, f),
        (g = i.intersect(a, f)) && (u.del(a), u.insert(a, g, i.distance(g, b))),
        a = f,
        f = n.createHalfEdge(v, "r"),
        n.insert(a, f),
        (g = i.intersect(f, s)) && u.insert(f, g, i.distance(g, b)),
        b = e.list.shift();
        else {
            if (u.empty()) break;
            a = u.extractMin(),
            l = n.left(a),
            s = n.right(a),
            c = n.right(s),
            h = n.leftRegion(a),
            d = n.rightRegion(s),
            m = a.vertex,
            i.endPoint(a.edge, a.side, m),
            i.endPoint(s.edge, s.side, m),
            n.del(a),
            u.del(s),
            n.del(s),
            y = "l",
            h.y > d.y && (p = h, h = d, d = p, y = "r"),
            v = i.bisect(h, d),
            f = n.createHalfEdge(v, y),
            n.insert(l, f),
            i.endPoint(v, Fa[y], m),
            (g = i.intersect(l, f)) && (u.del(l), u.insert(l, g, i.distance(g, h))),
            (g = i.intersect(f, c)) && u.insert(f, g, i.distance(g, h))
        }
        for (a = n.right(n.leftEnd); a != n.rightEnd; a = n.right(a)) r(a.edge)
    }
    function on(t) {
        return t.x
    }
    function an(t) {
        return t.y
    }
    function un() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }
    function sn(t, e, n, r, i, o) {
        if (!t(e, n, r, i, o)) {
            var a = .5 * (n + i),
            u = .5 * (r + o),
            s = e.nodes;
            s[0] && sn(t, s[0], n, r, a, u),
            s[1] && sn(t, s[1], a, r, i, u),
            s[2] && sn(t, s[2], n, u, a, o),
            s[3] && sn(t, s[3], a, u, i, o)
        }
    }
    function ln(t, e) {
        t = so.rgb(t),
        e = so.rgb(e);
        var n = t.r,
        r = t.g,
        i = t.b,
        o = e.r - n,
        a = e.g - r,
        u = e.b - i;
        return function(t) {
            return "#" + it(Math.round(n + o * t)) + it(Math.round(r + a * t)) + it(Math.round(i + u * t))
        }
    }
    function cn(t) {
        var e = [t.a, t.b],
        n = [t.c, t.d],
        r = hn(e),
        i = fn(e, n),
        o = hn(dn(n, e, -i)) || 0;
        e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, i *= -1),
        this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2( - n[0], n[1])) * Oo,
        this.translate = [t.e, t.f],
        this.scale = [r, o],
        this.skew = o ? Math.atan2(i, o) * Oo: 0
    }
    function fn(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }
    function hn(t) {
        var e = Math.sqrt(fn(t, t));
        return e && (t[0] /= e, t[1] /= e),
        e
    }
    function dn(t, e, n) {
        return t[0] += n * e[0],
        t[1] += n * e[1],
        t
    }
    function pn(e, n) {
        return n -= e = +e,
        function(t) {
            return e + n * t
        }
    }
    function gn(t, e) {
        var r, i = [],
        o = [],
        n = so.transform(t),
        a = so.transform(e),
        u = n.translate,
        s = a.translate,
        l = n.rotate,
        c = a.rotate,
        f = n.skew,
        h = a.skew,
        d = n.scale,
        p = a.scale;
        return u[0] != s[0] || u[1] != s[1] ? (i.push("translate(", null, ",", null, ")"), o.push({
            i: 1,
            x: pn(u[0], s[0])
        },
        {
            i: 3,
            x: pn(u[1], s[1])
        })) : s[0] || s[1] ? i.push("translate(" + s + ")") : i.push(""),
        l != c ? (180 < l - c ? c += 360 : 180 < c - l && (l += 360), o.push({
            i: i.push(i.pop() + "rotate(", null, ")") - 2,
            x: pn(l, c)
        })) : c && i.push(i.pop() + "rotate(" + c + ")"),
        f != h ? o.push({
            i: i.push(i.pop() + "skewX(", null, ")") - 2,
            x: pn(f, h)
        }) : h && i.push(i.pop() + "skewX(" + h + ")"),
        d[0] != p[0] || d[1] != p[1] ? (r = i.push(i.pop() + "scale(", null, ",", null, ")"), o.push({
            i: r - 4,
            x: pn(d[0], p[0])
        },
        {
            i: r - 2,
            x: pn(d[1], p[1])
        })) : 1 == p[0] && 1 == p[1] || i.push(i.pop() + "scale(" + p + ")"),
        r = o.length,
        function(t) {
            for (var e, n = -1; ++n < r;) i[(e = o[n]).i] = e.x(t);
            return i.join("")
        }
    }
    function mn(t, e) {
        var n, r = {},
        i = {};
        for (n in t) n in e ? r[n] = bn(n)(t[n], e[n]) : i[n] = t[n];
        for (n in e) n in t || (i[n] = e[n]);
        return function(t) {
            for (n in r) i[n] = r[n](t);
            return i
        }
    }
    function vn(t, e) {
        var n, r, i, o, a, u = 0,
        s = [],
        l = [];
        for (t += "", e += "", Oa.lastIndex = 0, r = 0; n = Oa.exec(e); ++r) n.index && s.push(e.substring(u, n.index)),
        l.push({
            i: s.length,
            x: n[0]
        }),
        s.push(null),
        u = Oa.lastIndex;
        for (u < e.length && s.push(e.substring(u)), r = 0, o = l.length; (n = Oa.exec(t)) && r < o; ++r) if ((a = l[r]).x == n[0]) {
            if (a.i) if (null == s[a.i + 1]) for (s[a.i - 1] += a.x, s.splice(a.i, 1), i = r + 1; i < o; ++i) l[i].i--;
            else for (s[a.i - 1] += a.x + s[a.i + 1], s.splice(a.i, 2), i = r + 1; i < o; ++i) l[i].i -= 2;
            else if (null == s[a.i + 1]) s[a.i] = a.x;
            else for (s[a.i] = a.x + s[a.i + 1], s.splice(a.i + 1, 1), i = r + 1; i < o; ++i) l[i].i--;
            l.splice(r, 1),
            o--,
            r--
        } else a.x = pn(parseFloat(n[0]), parseFloat(a.x));
        for (; r < o;) a = l.pop(),
        null == s[a.i + 1] ? s[a.i] = a.x: (s[a.i] = a.x + s[a.i + 1], s.splice(a.i + 1, 1)),
        o--;
        return 1 === s.length ? null == s[0] ? l[0].x: function() {
            return e
        }: function(t) {
            for (r = 0; r < o; ++r) s[(a = l[r]).i] = a.x(t);
            return s.join("")
        }
    }
    function yn(t, e) {
        for (var n, r = so.interpolators.length; 0 <= --r && !(n = so.interpolators[r](t, e)););
        return n
    }
    function bn(t) {
        return "transform" == t ? gn: yn
    }
    function xn(t, e) {
        var n, r = [],
        i = [],
        o = t.length,
        a = e.length,
        u = Math.min(t.length, e.length);
        for (n = 0; n < u; ++n) r.push(yn(t[n], e[n]));
        for (; n < o; ++n) i[n] = t[n];
        for (; n < a; ++n) i[n] = e[n];
        return function(t) {
            for (n = 0; n < u; ++n) i[n] = r[n](t);
            return i
        }
    }
    function Mn(e) {
        return function(t) {
            return t <= 0 ? 0 : 1 <= t ? 1 : e(t)
        }
    }
    function wn(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }
    function _n(e) {
        return function(t) {
            return.5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
        }
    }
    function En(t) {
        return t * t
    }
    function kn(t) {
        return t * t * t
    }
    function Sn(t) {
        if (t <= 0) return 0;
        if (1 <= t) return 1;
        var e = t * t,
        n = e * t;
        return 4 * (t < .5 ? n: 3 * (t - e) + n - .75)
    }
    function Tn(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }
    function Cn(t) {
        return 1 - Math.cos(t * Ho / 2)
    }
    function Nn(t) {
        return Math.pow(2, 10 * (t - 1))
    }
    function An(t) {
        return 1 - Math.sqrt(1 - t * t)
    }
    function jn(e, n) {
        var r;
        return arguments.length < 2 && (n = .45),
        arguments.length ? r = n / (2 * Ho) * Math.asin(1 / e) : (e = 1, r = n / 4),
        function(t) {
            return 1 + e * Math.pow(2, 10 * -t) * Math.sin(2 * (t - r) * Ho / n)
        }
    }
    function Dn(e) {
        return e || (e = 1.70158),
        function(t) {
            return t * t * ((e + 1) * t - e)
        }
    }
    function qn(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t: t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }
    function Ln(t, e) {
        t = so.hcl(t),
        e = so.hcl(e);
        var n = t.h,
        r = t.c,
        i = t.l,
        o = e.h - n,
        a = e.c - r,
        u = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.c: r),
        isNaN(o) ? (o = 0, n = isNaN(n) ? e.h: n) : 180 < o ? o -= 360 : o < -180 && (o += 360),
        function(t) {
            return V(n + o * t, r + a * t, i + u * t) + ""
        }
    }
    function Hn(t, e) {
        t = so.hsl(t),
        e = so.hsl(e);
        var n = t.h,
        r = t.s,
        i = t.l,
        o = e.h - n,
        a = e.s - r,
        u = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.s: r),
        isNaN(o) ? (o = 0, n = isNaN(n) ? e.h: n) : 180 < o ? o -= 360 : o < -180 && (o += 360),
        function(t) {
            return z(n + o * t, r + a * t, i + u * t) + ""
        }
    }
    function Fn(t, e) {
        t = so.lab(t),
        e = so.lab(e);
        var n = t.l,
        r = t.a,
        i = t.b,
        o = e.l - n,
        a = e.a - r,
        u = e.b - i;
        return function(t) {
            return Z(n + o * t, r + a * t, i + u * t) + ""
        }
    }
    function Rn(e, n) {
        return n -= e,
        function(t) {
            return Math.round(e + n * t)
        }
    }
    function On(e, n) {
        return n = n - (e = +e) ? 1 / (n - e) : 0,
        function(t) {
            return (t - e) * n
        }
    }
    function zn(e, n) {
        return n = n - (e = +e) ? 1 / (n - e) : 0,
        function(t) {
            return Math.max(0, Math.min(1, (t - e) * n))
        }
    }
    function Pn(t) {
        for (var e = t.source,
        n = t.target,
        r = In(e, n), i = [e]; e !== r;) e = e.parent,
        i.push(e);
        for (var o = i.length; n !== r;) i.splice(o, 0, n),
        n = n.parent;
        return i
    }
    function $n(t) {
        for (var e = [], n = t.parent; null != n;) e.push(t),
        n = (t = n).parent;
        return e.push(t),
        e
    }
    function In(t, e) {
        if (t === e) return t;
        for (var n = $n(t), r = $n(e), i = n.pop(), o = r.pop(), a = null; i === o;) a = i,
        i = n.pop(),
        o = r.pop();
        return a
    }
    function Bn(t) {
        t.fixed |= 2
    }
    function Wn(t) {
        t.fixed &= -7
    }
    function Un(t) {
        t.fixed |= 4,
        t.px = t.x,
        t.py = t.y
    }
    function Xn(t) {
        t.fixed &= -5
    }
    function Yn(t, e, n) {
        var r = 0,
        i = 0;
        if (t.charge = 0, !t.leaf) for (var o, a = t.nodes,
        u = a.length,
        s = -1; ++s < u;) null != (o = a[s]) && (Yn(o, e, n), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var l = e * n[t.point.index];
            t.charge += t.pointCharge = l,
            r += l * t.point.x,
            i += l * t.point.y
        }
        t.cx = r / t.charge,
        t.cy = i / t.charge
    }
    function Vn(t, e) {
        return so.rebind(t, e, "sort", "children", "value"),
        (t.nodes = t).links = Kn,
        t
    }
    function Gn(t) {
        return t.children
    }
    function Jn(t) {
        return t.value
    }
    function Zn(t, e) {
        return e.value - t.value
    }
    function Kn(t) {
        return so.merge(t.map(function(e) {
            return (e.children || []).map(function(t) {
                return {
                    source: e,
                    target: t
                }
            })
        }))
    }
    function Qn(t) {
        return t.x
    }
    function tr(t) {
        return t.y
    }
    function er(t, e, n) {
        t.y0 = e,
        t.y = n
    }
    function nr(t) {
        return so.range(t.length)
    }
    function rr(t) {
        for (var e = -1,
        n = t[0].length, r = []; ++e < n;) r[e] = 0;
        return r
    }
    function ir(t) {
        for (var e, n = 1,
        r = 0,
        i = t[0][1], o = t.length; n < o; ++n)(e = t[n][1]) > i && (r = n, i = e);
        return r
    }
    function or(t) {
        return t.reduce(ar, 0)
    }
    function ar(t, e) {
        return t + e[1]
    }
    function ur(t, e) {
        return sr(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
    }
    function sr(t, e) {
        for (var n = -1,
        r = +t[0], i = (t[1] - r) / e, o = []; ++n <= e;) o[n] = i * n + r;
        return o
    }
    function lr(t) {
        return [so.min(t), so.max(t)]
    }
    function cr(t, e) {
        return t.parent == e.parent ? 1 : 2
    }
    function fr(t) {
        var e = t.children;
        return e && e.length ? e[0] : t._tree.thread
    }
    function hr(t) {
        var e, n = t.children;
        return n && (e = n.length) ? n[e - 1] : t._tree.thread
    }
    function dr(t, e) {
        var n = t.children;
        if (n && (i = n.length)) for (var r, i, o = -1; ++o < i;) 0 < e(r = dr(n[o], e), t) && (t = r);
        return t
    }
    function pr(t, e) {
        return t.x - e.x
    }
    function gr(t, e) {
        return e.x - t.x
    }
    function mr(t, e) {
        return t.depth - e.depth
    }
    function vr(t, u) {
        function s(t, e) {
            var n = t.children;
            if (n && (i = n.length)) for (var r, i, o = null,
            a = -1; ++a < i;) s(r = n[a], o),
            o = r;
            u(t, e)
        }
        s(t, null)
    }
    function yr(t) {
        for (var e, n = 0,
        r = 0,
        i = t.children,
        o = i.length; 0 <= --o;)(e = i[o]._tree).prelim += n,
        e.mod += n,
        n += e.shift + (r += e.change)
    }
    function br(t, e, n) {
        t = t._tree;
        var r = n / ((e = e._tree).number - t.number);
        t.change += r,
        e.change -= r,
        e.shift += n,
        e.prelim += n,
        e.mod += n
    }
    function xr(t, e, n) {
        return t._tree.ancestor.parent == e.parent ? t._tree.ancestor: n
    }
    function Mr(t, e) {
        return t.value - e.value
    }
    function wr(t, e) {
        var n = t._pack_next; (t._pack_next = e)._pack_prev = t,
        (e._pack_next = n)._pack_prev = e
    }
    function _r(t, e) { (t._pack_next = e)._pack_prev = t
    }
    function Er(t, e) {
        var n = e.x - t.x,
        r = e.y - t.y,
        i = t.r + e.r;
        return.001 < i * i - n * n - r * r
    }
    function kr(t) {
        function e(t) {
            c = Math.min(t.x - t.r, c),
            f = Math.max(t.x + t.r, f),
            h = Math.min(t.y - t.r, h),
            d = Math.max(t.y + t.r, d)
        }
        if ((n = t.children) && (l = n.length)) {
            var n, r, i, o, a, u, s, l, c = Infinity,
            f = -Infinity,
            h = Infinity,
            d = -Infinity;
            if (n.forEach(Sr), (r = n[0]).x = -r.r, r.y = 0, e(r), 1 < l && ((i = n[1]).x = i.r, i.y = 0, e(i), 2 < l)) for (Nr(r, i, o = n[2]), e(o), wr(r, o), wr(r._pack_prev = o, i), i = r._pack_next, a = 3; a < l; a++) {
                Nr(r, i, o = n[a]);
                var p = 0,
                g = 1,
                m = 1;
                for (u = i._pack_next; u !== i; u = u._pack_next, g++) if (Er(u, o)) {
                    p = 1;
                    break
                }
                if (1 == p) for (s = r._pack_prev; s !== u._pack_prev && !Er(s, o); s = s._pack_prev, m++);
                p ? (g < m || g == m && i.r < r.r ? _r(r, i = u) : _r(r = s, i), a--) : (wr(r, o), e(i = o))
            }
            var v = (c + f) / 2,
            y = (h + d) / 2,
            b = 0;
            for (a = 0; a < l; a++)(o = n[a]).x -= v,
            o.y -= y,
            b = Math.max(b, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
            t.r = b,
            n.forEach(Tr)
        }
    }
    function Sr(t) {
        t._pack_next = t._pack_prev = t
    }
    function Tr(t) {
        delete t._pack_next,
        delete t._pack_prev
    }
    function Cr(t, e, n, r) {
        var i = t.children;
        if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i) for (var o = -1,
        a = i.length; ++o < a;) Cr(i[o], e, n, r)
    }
    function Nr(t, e, n) {
        var r = t.r + n.r,
        i = e.x - t.x,
        o = e.y - t.y;
        if (r && (i || o)) {
            var a = e.r + n.r,
            u = i * i + o * o,
            s = .5 + ((r *= r) - (a *= a)) / (2 * u),
            l = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
            n.x = t.x + s * i + l * o,
            n.y = t.y + s * o - l * i
        } else n.x = t.x + r,
        n.y = t.y
    }
    function Ar(t) {
        return 1 + so.max(t,
        function(t) {
            return t.y
        })
    }
    function jr(t) {
        return t.reduce(function(t, e) {
            return t + e.x
        },
        0) / t.length
    }
    function Dr(t) {
        var e = t.children;
        return e && e.length ? Dr(e[0]) : t
    }
    function qr(t) {
        var e, n = t.children;
        return n && (e = n.length) ? qr(n[e - 1]) : t
    }
    function Lr(t) {
        return {
            x: t.x,
            y: t.y,
            dx: t.dx,
            dy: t.dy
        }
    }
    function Hr(t, e) {
        var n = t.x + e[3],
        r = t.y + e[0],
        i = t.dx - e[1] - e[3],
        o = t.dy - e[0] - e[2];
        return i < 0 && (n += i / 2, i = 0),
        o < 0 && (r += o / 2, o = 0),
        {
            x: n,
            y: r,
            dx: i,
            dy: o
        }
    }
    function Fr(t) {
        var e = t[0],
        n = t[t.length - 1];
        return e < n ? [e, n] : [n, e]
    }
    function Rr(t) {
        return t.rangeExtent ? t.rangeExtent() : Fr(t.range())
    }
    function Or(t, e, n, r) {
        var i = n(t[0], t[1]),
        o = r(e[0], e[1]);
        return function(t) {
            return o(i(t))
        }
    }
    function zr(t, e) {
        var n, r = 0,
        i = t.length - 1,
        o = t[r],
        a = t[i];
        return a < o && (n = r, r = i, i = n, n = o, o = a, a = n),
        (e = e(a - o)) && (t[r] = e.floor(o), t[i] = e.ceil(a)),
        t
    }
    function Pr(n, t, e, r) {
        var i = [],
        o = [],
        a = 0,
        u = Math.min(n.length, t.length) - 1;
        for (n[u] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= u;) i.push(e(n[a - 1], n[a])),
        o.push(r(t[a - 1], t[a]));
        return function(t) {
            var e = so.bisect(n, t, 1, u) - 1;
            return o[e](i[e](t))
        }
    }
    function $r(n, r, i, o) {
        function e() {
            var t = 2 < Math.min(n.length, r.length) ? Pr: Or,
            e = o ? zn: On;
            return u = t(n, r, e, i),
            s = t(r, n, e, yn),
            a
        }
        function a(t) {
            return u(t)
        }
        var u, s;
        return a.invert = function(t) {
            return s(t)
        },
        a.domain = function(t) {
            return arguments.length ? (n = t.map(Number), e()) : n
        },
        a.range = function(t) {
            return arguments.length ? (r = t, e()) : r
        },
        a.rangeRound = function(t) {
            return a.range(t).interpolate(Rn)
        },
        a.clamp = function(t) {
            return arguments.length ? (o = t, e()) : o
        },
        a.interpolate = function(t) {
            return arguments.length ? (i = t, e()) : i
        },
        a.ticks = function(t) {
            return Ur(n, t)
        },
        a.tickFormat = function(t, e) {
            return Xr(n, t, e)
        },
        a.nice = function() {
            return zr(n, Br),
            e()
        },
        a.copy = function() {
            return $r(n, r, i, o)
        },
        e()
    }
    function Ir(t, e) {
        return so.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
    }
    function Br(e) {
        return (e = Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1)) && {
            floor: function(t) {
                return Math.floor(t / e) * e
            },
            ceil: function(t) {
                return Math.ceil(t / e) * e
            }
        }
    }
    function Wr(t, e) {
        var n = Fr(t),
        r = n[1] - n[0],
        i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
        o = e / r * i;
        return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2),
        n[0] = Math.ceil(n[0] / i) * i,
        n[1] = Math.floor(n[1] / i) * i + .5 * i,
        n[2] = i,
        n
    }
    function Ur(t, e) {
        return so.range.apply(so, Wr(t, e))
    }
    function Xr(t, e, n) {
        var c = -Math.floor(Math.log(Wr(t, e)[2]) / Math.LN10 + .01);
        return so.format(n ? n.replace(ra,
        function(t, e, n, r, i, o, a, u, s, l) {
            return [e, n, r, i, o, a, u, s || "." + (c - 2 * ("%" === l)), l].join("")
        }) : ",." + c + "f")
    }
    function Yr(l, c, f, h) {
        function a(t) {
            return l(f(t))
        }
        return a.invert = function(t) {
            return h(l.invert(t))
        },
        a.domain = function(t) {
            return arguments.length ? (t[0] < 0 ? (f = Jr, h = Zr) : (f = Vr, h = Gr), l.domain(t.map(f)), a) : l.domain().map(h)
        },
        a.base = function(t) {
            return arguments.length ? (c = +t, a) : c
        },
        a.nice = function() {
            return l.domain(zr(l.domain(), Kr(c))),
            a
        },
        a.ticks = function() {
            var t = Fr(l.domain()),
            e = [];
            if (t.every(isFinite)) {
                var n = Math.log(c),
                r = Math.floor(t[0] / n),
                i = Math.ceil(t[1] / n),
                o = h(t[0]),
                a = h(t[1]),
                u = c % 1 ? 2 : c;
                if (f === Jr) for (e.push( - Math.pow(c, -r)); r++<i;) for (var s = u - 1; 0 < s; s--) e.push( - Math.pow(c, -r) * s);
                else {
                    for (; r < i; r++) for (s = 1; s < u; s++) e.push(Math.pow(c, r) * s);
                    e.push(Math.pow(c, r))
                }
                for (r = 0; e[r] < o; r++);
                for (i = e.length; e[i - 1] > a; i--);
                e = e.slice(r, i)
            }
            return e
        },
        a.tickFormat = function(t, e) {
            if (arguments.length < 2 && (e = Ya), !arguments.length) return e;
            var n, r = Math.log(c),
            i = Math.max(.1, t / a.ticks().length),
            o = f === Jr ? (n = -1e-12, Math.floor) : (n = 1e-12, Math.ceil);
            return function(t) {
                return t / h(r * o(f(t) / r + n)) <= i ? e(t) : ""
            }
        },
        a.copy = function() {
            return Yr(l.copy(), c, f, h)
        },
        Ir(a, l)
    }
    function Vr(t) {
        return Math.log(t < 0 ? 0 : t)
    }
    function Gr(t) {
        return Math.exp(t)
    }
    function Jr(t) {
        return - Math.log(0 < t ? 0 : -t)
    }
    function Zr(t) {
        return - Math.exp( - t)
    }
    function Kr(e) {
        e = Math.log(e);
        var t = {
            floor: function(t) {
                return Math.floor(t / e) * e
            },
            ceil: function(t) {
                return Math.ceil(t / e) * e
            }
        };
        return function() {
            return t
        }
    }
    function Qr(e, n) {
        function r(t) {
            return e(i(t))
        }
        var i = ti(n),
        o = ti(1 / n);
        return r.invert = function(t) {
            return o(e.invert(t))
        },
        r.domain = function(t) {
            return arguments.length ? (e.domain(t.map(i)), r) : e.domain().map(o)
        },
        r.ticks = function(t) {
            return Ur(r.domain(), t)
        },
        r.tickFormat = function(t, e) {
            return Xr(r.domain(), t, e)
        },
        r.nice = function() {
            return r.domain(zr(r.domain(), Br))
        },
        r.exponent = function(t) {
            if (!arguments.length) return n;
            var e = r.domain();
            return i = ti(n = t),
            o = ti(1 / n),
            r.domain(e)
        },
        r.copy = function() {
            return Qr(e.copy(), n)
        },
        Ir(r, e)
    }
    function ti(e) {
        return function(t) {
            return t < 0 ? -Math.pow( - t, e) : Math.pow(t, e)
        }
    }
    function ei(s, l) {
        function c(t) {
            return h[((i.get(t) || i.set(t, s.push(t))) - 1) % h.length]
        }
        function f(e, n) {
            return so.range(s.length).map(function(t) {
                return e + n * t
            })
        }
        var i, h, d;
        return c.domain = function(t) {
            if (!arguments.length) return s;
            s = [],
            i = new x;
            for (var e, n = -1,
            r = t.length; ++n < r;) i.has(e = t[n]) || i.set(e, s.push(e));
            return c[l.t].apply(c, l.a)
        },
        c.range = function(t) {
            return arguments.length ? (h = t, d = 0, l = {
                t: "range",
                a: arguments
            },
            c) : h
        },
        c.rangePoints = function(t, e) {
            arguments.length < 2 && (e = 0);
            var n = t[0],
            r = t[1],
            i = (r - n) / (Math.max(1, s.length - 1) + e);
            return h = f(s.length < 2 ? (n + r) / 2 : n + i * e / 2, i),
            d = 0,
            l = {
                t: "rangePoints",
                a: arguments
            },
            c
        },
        c.rangeBands = function(t, e, n) {
            arguments.length < 2 && (e = 0),
            arguments.length < 3 && (n = e);
            var r = t[1] < t[0],
            i = t[r - 0],
            o = (t[1 - r] - i) / (s.length - e + 2 * n);
            return h = f(i + o * n, o),
            r && h.reverse(),
            d = o * (1 - e),
            l = {
                t: "rangeBands",
                a: arguments
            },
            c
        },
        c.rangeRoundBands = function(t, e, n) {
            arguments.length < 2 && (e = 0),
            arguments.length < 3 && (n = e);
            var r = t[1] < t[0],
            i = t[r - 0],
            o = t[1 - r],
            a = Math.floor((o - i) / (s.length - e + 2 * n)),
            u = o - i - (s.length - e) * a;
            return h = f(i + Math.round(u / 2), a),
            r && h.reverse(),
            d = Math.round(a * (1 - e)),
            l = {
                t: "rangeRoundBands",
                a: arguments
            },
            c
        },
        c.rangeBand = function() {
            return d
        },
        c.rangeExtent = function() {
            return Fr(l.a[0])
        },
        c.copy = function() {
            return ei(s, l)
        },
        c.domain(s)
    }
    function ni(n, r) {
        function e() {
            var t = 0,
            e = r.length;
            for (o = []; ++t < e;) o[t - 1] = so.quantile(n, t / e);
            return i
        }
        function i(t) {
            return isNaN(t = +t) ? NaN: r[so.bisect(o, t)]
        }
        var o;
        return i.domain = function(t) {
            return arguments.length ? (n = t.filter(function(t) {
                return ! isNaN(t)
            }).sort(so.ascending), e()) : n
        },
        i.range = function(t) {
            return arguments.length ? (r = t, e()) : r
        },
        i.quantiles = function() {
            return o
        },
        i.copy = function() {
            return ni(n, r)
        },
        e()
    }
    function ri(e, n, r) {
        function t(t) {
            return r[Math.max(0, Math.min(a, Math.floor(o * (t - e))))]
        }
        function i() {
            return o = r.length / (n - e),
            a = r.length - 1,
            t
        }
        var o, a;
        return t.domain = function(t) {
            return arguments.length ? (e = +t[0], n = +t[t.length - 1], i()) : [e, n]
        },
        t.range = function(t) {
            return arguments.length ? (r = t, i()) : r
        },
        t.copy = function() {
            return ri(e, n, r)
        },
        i()
    }
    function ii(e, n) {
        function r(t) {
            return n[so.bisect(e, t)]
        }
        return r.domain = function(t) {
            return arguments.length ? (e = t, r) : e
        },
        r.range = function(t) {
            return arguments.length ? (n = t, r) : n
        },
        r.copy = function() {
            return ii(e, n)
        },
        r
    }
    function oi(n) {
        function e(t) {
            return + t
        }
        return (e.invert = e).domain = e.range = function(t) {
            return arguments.length ? (n = t.map(e), e) : n
        },
        e.ticks = function(t) {
            return Ur(n, t)
        },
        e.tickFormat = function(t, e) {
            return Xr(n, t, e)
        },
        e.copy = function() {
            return oi(n)
        },
        e
    }
    function ai(t) {
        return t.innerRadius
    }
    function ui(t) {
        return t.outerRadius
    }
    function si(t) {
        return t.startAngle
    }
    function li(t) {
        return t.endAngle
    }
    function ci(t) {
        for (var e, n, r, i = -1,
        o = t.length; ++i < o;) n = (e = t[i])[0],
        r = e[1] + Ka,
        e[0] = n * Math.cos(r),
        e[1] = n * Math.sin(r);
        return t
    }
    function fi(p) {
        function e(t) {
            function e() {
                o.push("M", x(p(u), _), w, M(p(a.reverse()), _), "Z")
            }
            for (var n, r, i, o = [], a = [], u = [], s = -1, l = t.length, c = ct(g), f = ct(v), h = g === m ?
            function() {
                return r
            }: ct(m), d = v === y ?
            function() {
                return i
            }: ct(y); ++s < l;) b.call(this, n = t[s], s) ? (a.push([r = +c.call(this, n, s), i = +f.call(this, n, s)]), u.push([ + h.call(this, n, s), +d.call(this, n, s)])) : a.length && (e(), a = [], u = []);
            return a.length && e(),
            o.length ? o.join("") : null
        }
        var g = qe,
        m = qe,
        v = 0,
        y = Le,
        b = Lt,
        x = He,
        n = x.key,
        M = x,
        w = "L",
        _ = .7;
        return e.x = function(t) {
            return arguments.length ? (g = m = t, e) : m
        },
        e.x0 = function(t) {
            return arguments.length ? (g = t, e) : g
        },
        e.x1 = function(t) {
            return arguments.length ? (m = t, e) : m
        },
        e.y = function(t) {
            return arguments.length ? (v = y = t, e) : y
        },
        e.y0 = function(t) {
            return arguments.length ? (v = t, e) : v
        },
        e.y1 = function(t) {
            return arguments.length ? (y = t, e) : y
        },
        e.defined = function(t) {
            return arguments.length ? (b = t, e) : b
        },
        e.interpolate = function(t) {
            return arguments.length ? (n = "function" == typeof t ? x = t: (x = Da.get(t) || He).key, M = x.reverse || x, w = x.closed ? "M": "L", e) : n
        },
        e.tension = function(t) {
            return arguments.length ? (_ = t, e) : _
        },
        e
    }
    function hi(t) {
        return t.radius
    }
    function di(t) {
        return [t.x, t.y]
    }
    function pi(r) {
        return function() {
            var t = r.apply(this, arguments),
            e = t[0],
            n = t[1] + Ka;
            return [e * Math.cos(n), e * Math.sin(n)]
        }
    }
    function gi() {
        return 64
    }
    function mi() {
        return "circle"
    }
    function vi(t) {
        var e = Math.sqrt(t / Ho);
        return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
    }
    function yi(t, e) {
        return bo(t, iu),
        t.id = e,
        t
    }
    function bi(t, r, i, o) {
        var a = t.id;
        return L(t, "function" == typeof i ?
        function(t, e, n) {
            t.__transition__[a].tween.set(r, o(i.call(t, t.__data__, e, n)))
        }: (i = o(i),
        function(t) {
            t.__transition__[a].tween.set(r, i)
        }))
    }
    function xi(t) {
        return null == t && (t = ""),
        function() {
            this.textContent = t
        }
    }
    function Mi(f, h, d, t) {
        var p = f.__transition__ || (f.__transition__ = {
            active: 0,
            count: 0
        }),
        r = p[d];
        if (!r) {
            var g = t.time;
            return r = p[d] = {
                tween: new x,
                event: so.dispatch("start", "end"),
                time: g,
                ease: t.ease,
                delay: t.delay,
                duration: t.duration
            },
            ++p.count,
            so.timer(function(t) {
                function e(t) {
                    return p.active > d ? i() : (p.active = d, u.start.call(f, o, h), r.tween.forEach(function(t, e) { (e = e.call(f, o, h)) && c.push(e)
                    }), n(t) || so.timer(n, 0, g), 1)
                }
                function n(t) {
                    if (p.active !== d) return i();
                    for (var e = (t - s) / l, n = a(e), r = c.length; 0 < r;) c[--r].call(f, n);
                    return 1 <= e ? (i(), u.end.call(f, o, h), 1) : void 0
                }
                function i() {
                    return--p.count ? delete p[d] : delete f.__transition__,
                    1
                }
                var o = f.__data__,
                a = r.ease,
                u = r.event,
                s = r.delay,
                l = r.duration,
                c = [];
                return s <= t ? e(t) : so.timer(e, s, g),
                1
            },
            0, g),
            r
        }
    }
    function wi(t, e) {
        t.attr("transform",
        function(t) {
            return "translate(" + e(t) + ",0)"
        })
    }
    function _i(t, e) {
        t.attr("transform",
        function(t) {
            return "translate(0," + e(t) + ")"
        })
    }
    function Ei(t, e, n) {
        if (r = [], n && 1 < e.length) {
            for (var r, i, o, a = Fr(t.domain()), u = -1, s = e.length, l = (e[1] - e[0]) / ++n; ++u < s;) for (i = n; 0 < --i;)(o = +e[u] - i * l) >= a[0] && r.push(o);
            for (--u, i = 0; ++i < n && (o = +e[u] + i * l) < a[1];) r.push(o)
        }
        return r
    }
    function ki(t) {
        this._ = new Date(1 < arguments.length ? Date.UTC.apply(this, arguments) : t)
    }
    function Si(r, o, a) {
        function t(t) {
            var e = r(t),
            n = i(e, 1);
            return t - e < n - t ? e: n
        }
        function u(t) {
            return o(t = r(new fu(t - 1)), 1),
            t
        }
        function i(t, e) {
            return o(t = new fu( + t), e),
            t
        }
        function s(t, e, n) {
            var r = u(t),
            i = [];
            if (1 < n) for (; r < e;) a(r) % n || i.push(new Date( + r)),
            o(r, 1);
            else for (; r < e;) i.push(new Date( + r)),
            o(r, 1);
            return i
        }
        function e(t, e, n) {
            try {
                var r = new(fu = ki);
                return r._ = t,
                s(r, e, n)
            } finally {
                fu = Date
            }
        } (r.floor = r).round = t,
        r.ceil = u,
        r.offset = i,
        r.range = s;
        var n = r.utc = Ti(r);
        return (n.floor = n).round = Ti(t),
        n.ceil = Ti(u),
        n.offset = Ti(i),
        n.range = e,
        r
    }
    function Ti(r) {
        return function(t, e) {
            try {
                var n = new(fu = ki);
                return n._ = t,
                r(n, e)._
            } finally {
                fu = Date
            }
        }
    }
    function Ci(t, e, n, r) {
        for (var i, o, a = 0,
        u = e.length,
        s = n.length; a < u;) {
            if (s <= r) return - 1;
            if (37 === (i = e.charCodeAt(a++))) {
                if (! (o = Nu[e.charAt(a++)]) || (r = o(t, n, r)) < 0) return - 1
            } else if (i != n.charCodeAt(r++)) return - 1
        }
        return r
    }
    function Ni(t) {
        return new RegExp("^(?:" + t.map(so.requote).join("|") + ")", "i")
    }
    function Ai(t) {
        for (var e = new x,
        n = -1,
        r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
        return e
    }
    function ji(t, e, n) {
        var r = (t += "").length;
        return r < n ? new Array(n - r + 1).join(e) + t: t
    }
    function Di(t, e, n) {
        wu.lastIndex = 0;
        var r = wu.exec(e.substring(n));
        return r ? n += r[0].length: -1
    }
    function qi(t, e, n) {
        Mu.lastIndex = 0;
        var r = Mu.exec(e.substring(n));
        return r ? n += r[0].length: -1
    }
    function Li(t, e, n) {
        ku.lastIndex = 0;
        var r = ku.exec(e.substring(n));
        return r ? (t.m = Su.get(r[0].toLowerCase()), n += r[0].length) : -1
    }
    function Hi(t, e, n) {
        _u.lastIndex = 0;
        var r = _u.exec(e.substring(n));
        return r ? (t.m = Eu.get(r[0].toLowerCase()), n += r[0].length) : -1
    }
    function Fi(t, e, n) {
        return Ci(t, Cu.c.toString(), e, n)
    }
    function Ri(t, e, n) {
        return Ci(t, Cu.x.toString(), e, n)
    }
    function Oi(t, e, n) {
        return Ci(t, Cu.X.toString(), e, n)
    }
    function zi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 4));
        return r ? (t.y = +r[0], n += r[0].length) : -1
    }
    function Pi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.y = $i( + r[0]), n += r[0].length) : -1
    }
    function $i(t) {
        return t + (68 < t ? 1900 : 2e3)
    }
    function Ii(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.m = r[0] - 1, n += r[0].length) : -1
    }
    function Bi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.d = +r[0], n += r[0].length) : -1
    }
    function Wi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.H = +r[0], n += r[0].length) : -1
    }
    function Ui(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.M = +r[0], n += r[0].length) : -1
    }
    function Xi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 2));
        return r ? (t.S = +r[0], n += r[0].length) : -1
    }
    function Yi(t, e, n) {
        Au.lastIndex = 0;
        var r = Au.exec(e.substring(n, n + 3));
        return r ? (t.L = +r[0], n += r[0].length) : -1
    }
    function Vi(t, e, n) {
        var r = ju.get(e.substring(n, n += 2).toLowerCase());
        return null == r ? -1 : (t.p = r, n)
    }
    function Gi(t) {
        var e = t.getTimezoneOffset(),
        n = 0 < e ? "-": "+",
        r = ~~ (Math.abs(e) / 60),
        i = Math.abs(e) % 60;
        return n + ji(r, "0", 2) + ji(i, "0", 2)
    }
    function Ji(t) {
        return t.toISOString()
    }
    function Zi(o, a, t) {
        function u(t) {
            return o(t)
        }
        return u.invert = function(t) {
            return Ki(o.invert(t))
        },
        u.domain = function(t) {
            return arguments.length ? (o.domain(t), u) : o.domain().map(Ki)
        },
        u.nice = function(t) {
            return u.domain(zr(u.domain(),
            function() {
                return t
            }))
        },
        u.ticks = function(t, e) {
            var n = Fr(u.domain());
            if ("function" != typeof t) {
                var r = (n[1] - n[0]) / t,
                i = so.bisect(qu, r);
                if (i == qu.length) return a.year(n, t);
                if (!i) return o.ticks(t).map(Ki);
                Math.log(r / qu[i - 1]) < Math.log(qu[i] / r) && --i,
                e = (t = a[i])[1],
                t = t[0].range
            }
            return t(n[0], new Date( + n[1] + 1), e)
        },
        u.tickFormat = function() {
            return t
        },
        u.copy = function() {
            return Zi(o.copy(), a, t)
        },
        Ir(u, o)
    }
    function Ki(t) {
        return new Date(t)
    }
    function Qi(r) {
        return function(t) {
            for (var e = r.length - 1,
            n = r[e]; ! n[1](t);) n = r[--e];
            return n[0](t)
        }
    }
    function to(t) {
        var e = new Date(t, 0, 1);
        return e.setFullYear(t),
        e
    }
    function eo(t) {
        var e = t.getFullYear(),
        n = to(e);
        return e + (t - n) / (to(e + 1) - n)
    }
    function no(t) {
        var e = new Date(Date.UTC(t, 0, 1));
        return e.setUTCFullYear(t),
        e
    }
    function ro(t) {
        var e = t.getUTCFullYear(),
        n = no(e);
        return e + (t - n) / (no(e + 1) - n)
    }
    function io(t) {
        return t.responseText
    }
    function oo(t) {
        return JSON.parse(t.responseText)
    }
    function ao(t) {
        var e = lo.createRange();
        return e.selectNode(lo.body),
        e.createContextualFragment(t.responseText)
    }
    function uo(t) {
        return t.responseXML
    }
    var so = {
        version: "3.1.6"
    };
    Date.now || (Date.now = function() {
        return + new Date
    });
    var lo = document,
    co = window;
    try {
        lo.createElement("div").style.setProperty("opacity", 0, "")
    } catch(Pu) {
        var fo = co.CSSStyleDeclaration.prototype,
        ho = fo.setProperty;
        fo.setProperty = function(t, e, n) {
            ho.call(this, t, e + "", n)
        }
    }
    so.ascending = function(t, e) {
        return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
    },
    so.descending = function(t, e) {
        return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN
    },
    so.min = function(t, e) {
        var n, r, i = -1,
        o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o && (null == (n = t[i]) || n != n);) n = undefined;
            for (; ++i < o;) null != (r = t[i]) && r < n && (n = r)
        } else {
            for (; ++i < o && (null == (n = e.call(t, t[i], i)) || n != n);) n = undefined;
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && r < n && (n = r)
        }
        return n
    },
    so.max = function(t, e) {
        var n, r, i = -1,
        o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o && (null == (n = t[i]) || n != n);) n = undefined;
            for (; ++i < o;) null != (r = t[i]) && n < r && (n = r)
        } else {
            for (; ++i < o && (null == (n = e.call(t, t[i], i)) || n != n);) n = undefined;
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && n < r && (n = r)
        }
        return n
    },
    so.extent = function(t, e) {
        var n, r, i, o = -1,
        a = t.length;
        if (1 === arguments.length) {
            for (; ++o < a && (null == (n = i = t[o]) || n != n);) n = i = undefined;
            for (; ++o < a;) null != (r = t[o]) && (r < n && (n = r), i < r && (i = r))
        } else {
            for (; ++o < a && (null == (n = i = e.call(t, t[o], o)) || n != n);) n = undefined;
            for (; ++o < a;) null != (r = e.call(t, t[o], o)) && (r < n && (n = r), i < r && (i = r))
        }
        return [n, i]
    },
    so.sum = function(t, e) {
        var n, r = 0,
        i = t.length,
        o = -1;
        if (1 === arguments.length) for (; ++o < i;) isNaN(n = +t[o]) || (r += n);
        else for (; ++o < i;) isNaN(n = +e.call(t, t[o], o)) || (r += n);
        return r
    },
    so.mean = function(t, e) {
        var n, r = t.length,
        i = 0,
        o = -1,
        a = 0;
        if (1 === arguments.length) for (; ++o < r;) u(n = t[o]) && (i += (n - i) / ++a);
        else for (; ++o < r;) u(n = e.call(t, t[o], o)) && (i += (n - i) / ++a);
        return a ? i: undefined
    },
    so.quantile = function(t, e) {
        var n = (t.length - 1) * e + 1,
        r = Math.floor(n),
        i = +t[r - 1],
        o = n - r;
        return o ? i + o * (t[r] - i) : i
    },
    so.median = function(t, e) {
        return 1 < arguments.length && (t = t.map(e)),
        (t = t.filter(u)).length ? so.quantile(t.sort(so.ascending), .5) : undefined
    },
    so.bisector = function(o) {
        return {
            left: function(t, e, n, r) {
                for (arguments.length < 3 && (n = 0), arguments.length < 4 && (r = t.length); n < r;) {
                    var i = n + r >>> 1;
                    o.call(t, t[i], i) < e ? n = i + 1 : r = i
                }
                return n
            },
            right: function(t, e, n, r) {
                for (arguments.length < 3 && (n = 0), arguments.length < 4 && (r = t.length); n < r;) {
                    var i = n + r >>> 1;
                    e < o.call(t, t[i], i) ? r = i: n = i + 1
                }
                return n
            }
        }
    };
    var po = so.bisector(function(t) {
        return t
    });
    so.bisectLeft = po.left,
    so.bisect = so.bisectRight = po.right,
    so.shuffle = function(t) {
        for (var e, n, r = t.length; r;) n = Math.random() * r--|0,
        e = t[r],
        t[r] = t[n],
        t[n] = e;
        return t
    },
    so.permute = function(t, e) {
        for (var n = [], r = -1, i = e.length; ++r < i;) n[r] = t[e[r]];
        return n
    },
    so.zip = function() {
        if (! (r = arguments.length)) return [];
        for (var t = -1,
        e = so.min(arguments, a), n = new Array(e); ++t < e;) for (var r, i = -1,
        o = n[t] = new Array(r); ++i < r;) o[i] = arguments[i][t];
        return n
    },
    so.transpose = function(t) {
        return so.zip.apply(so, t)
    },
    so.keys = function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    },
    so.values = function(t) {
        var e = [];
        for (var n in t) e.push(t[n]);
        return e
    },
    so.entries = function(t) {
        var e = [];
        for (var n in t) e.push({
            key: n,
            value: t[n]
        });
        return e
    },
    so.merge = function(t) {
        return Array.prototype.concat.apply([], t)
    },
    so.range = function(t, e, n) {
        if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n === Infinity) throw new Error("infinite range");
        var r, i = [],
        o = s(Math.abs(n)),
        a = -1;
        if (t *= o, e *= o, (n *= o) < 0) for (; (r = t + n * ++a) > e;) i.push(r / o);
        else for (; (r = t + n * ++a) < e;) i.push(r / o);
        return i
    },
    so.map = function(t) {
        var e = new x;
        for (var n in t) e.set(n, t[n]);
        return e
    },
    t(x, {
        has: function(t) {
            return go + t in this
        },
        get: function(t) {
            return this[go + t]
        },
        set: function(t, e) {
            return this[go + t] = e
        },
        remove: function(t) {
            return (t = go + t) in this && delete this[t]
        },
        keys: function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }),
            e
        },
        values: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push(e)
            }),
            n
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push({
                    key: t,
                    value: e
                })
            }),
            n
        },
        forEach: function(t) {
            for (var e in this) e.charCodeAt(0) === mo && t.call(this, e.substring(1), this[e])
        }
    });
    var go = "\0",
    mo = go.charCodeAt(0);
    so.nest = function() {
        function f(n, t, r) {
            if (r >= g.length) return d ? d.call(p, t) : h ? t.sort(h) : t;
            for (var e, i, o, a, u = -1,
            s = t.length,
            l = g[r++], c = new x; ++u < s;)(a = c.get(e = l(i = t[u]))) ? a.push(i) : c.set(e, [i]);
            return n ? (i = n(), o = function(t, e) {
                i.set(t, f(n, e, r))
            }) : (i = {},
            o = function(t, e) {
                i[t] = f(n, e, r)
            }),
            c.forEach(o),
            i
        }
        function o(t, n) {
            if (n >= g.length) return t;
            var r = [],
            i = e[n++];
            return t.forEach(function(t, e) {
                r.push({
                    key: t,
                    values: o(e, n)
                })
            }),
            i ? r.sort(function(t, e) {
                return i(t.key, e.key)
            }) : r
        }
        var h, d, p = {},
        g = [],
        e = [];
        return p.map = function(t, e) {
            return f(e, t, 0)
        },
        p.entries = function(t) {
            return o(f(so.map, t, 0), 0)
        },
        p.key = function(t) {
            return g.push(t),
            p
        },
        p.sortKeys = function(t) {
            return e[g.length - 1] = t,
            p
        },
        p.sortValues = function(t) {
            return h = t,
            p
        },
        p.rollup = function(t) {
            return d = t,
            p
        },
        p
    },
    so.set = function(t) {
        var e = new c;
        if (t) for (var n = 0; n < t.length; n++) e.add(t[n]);
        return e
    },
    t(c, {
        has: function(t) {
            return go + t in this
        },
        add: function(t) {
            return this[go + t] = !0,
            t
        },
        remove: function(t) {
            return (t = go + t) in this && delete this[t]
        },
        values: function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }),
            e
        },
        forEach: function(t) {
            for (var e in this) e.charCodeAt(0) === mo && t.call(this, e.substring(1))
        }
    }),
    so.behavior = {},
    so.rebind = function(t, e) {
        for (var n, r = 1,
        i = arguments.length; ++r < i;) t[n = arguments[r]] = o(t, e, e[n]);
        return t
    },
    so.dispatch = function() {
        for (var t = new r,
        e = -1,
        n = arguments.length; ++e < n;) t[arguments[e]] = l(t);
        return t
    },
    r.prototype.on = function(t, e) {
        var n = t.indexOf("."),
        r = "";
        if (0 <= n && (r = t.substring(n + 1), t = t.substring(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
        if (2 === arguments.length) {
            if (null == e) for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
            return this
        }
    },
    so.event = null,
    so.mouse = function(t) {
        return i(t, e())
    };
    var vo = /WebKit/.test(co.navigator.userAgent) ? -1 : 0,
    yo = f;
    try {
        yo(lo.documentElement.childNodes)[0].nodeType
    } catch($u) {
        yo = n
    }
    var bo = [].__proto__ ?
    function(t, e) {
        t.__proto__ = e
    }: function(t, e) {
        for (var n in e) t[n] = e[n]
    };
    so.touches = function(n, t) {
        return arguments.length < 2 && (t = e().touches),
        t ? yo(t).map(function(t) {
            var e = i(n, t);
            return e.identifier = t.identifier,
            e
        }) : []
    },
    so.behavior.drag = function() {
        function e() {
            this.on("mousedown.drag", t).on("touchstart.drag", t)
        }
        function t() {
            function r() {
                var t = a.parentNode;
                return null != n ? so.touches(t).filter(function(t) {
                    return t.identifier === n
                })[0] : so.mouse(t)
            }
            function t() {
                if (!a.parentNode) return i();
                var t = r(),
                e = t[0] - s[0],
                n = t[1] - s[1];
                l |= e | n,
                s = t,
                N(),
                u({
                    type: "drag",
                    x: t[0] + o[0],
                    y: t[1] + o[1],
                    dx: e,
                    dy: n
                })
            }
            function i() {
                u({
                    type: "dragend"
                }),
                l && (N(), so.event.target === e && E(c, "click")),
                c.on(null != n ? "touchmove.drag-" + n: "mousemove.drag", null).on(null != n ? "touchend.drag-" + n: "mouseup.drag", null)
            }
            var o, a = this,
            u = f.of(a, arguments),
            e = so.event.target,
            n = so.event.touches ? so.event.changedTouches[0].identifier: null,
            s = r(),
            l = 0,
            c = so.select(co).on(null != n ? "touchmove.drag-" + n: "mousemove.drag", t).on(null != n ? "touchend.drag-" + n: "mouseup.drag", i, !0);
            o = h ? [(o = h.apply(a, arguments)).x - s[0], o.y - s[1]] : [0, 0],
            null == n && N(),
            u({
                type: "dragstart"
            })
        }
        var f = A(e, "drag", "dragstart", "dragend"),
        h = null;
        return e.origin = function(t) {
            return arguments.length ? (h = t, e) : h
        },
        so.rebind(e, f, "on")
    };
    var xo = function(t, e) {
        return e.querySelector(t)
    },
    Mo = function(t, e) {
        return e.querySelectorAll(t)
    },
    wo = lo.documentElement,
    _o = wo.matchesSelector || wo.webkitMatchesSelector || wo.mozMatchesSelector || wo.msMatchesSelector || wo.oMatchesSelector,
    Eo = function(t, e) {
        return _o.call(t, e)
    };
    "function" == typeof Sizzle && (xo = function(t, e) {
        return Sizzle(t, e)[0] || null
    },
    Mo = function(t, e) {
        return Sizzle.uniqueSort(Sizzle(t, e))
    },
    Eo = Sizzle.matchesSelector),
    so.selection = function() {
        return Ao
    };
    var ko = so.selection.prototype = [];
    ko.select = function(t) {
        var e, n, r, i, o = [];
        "function" != typeof t && (t = d(t));
        for (var a = -1,
        u = this.length; ++a < u;) {
            o.push(e = []),
            e.parentNode = (r = this[a]).parentNode;
            for (var s = -1,
            l = r.length; ++s < l;)(i = r[s]) ? (e.push(n = t.call(i, i.__data__, s)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
        }
        return h(o)
    },
    ko.selectAll = function(t) {
        var e, n, r = [];
        "function" != typeof t && (t = g(t));
        for (var i = -1,
        o = this.length; ++i < o;) for (var a = this[i], u = -1, s = a.length; ++u < s;)(n = a[u]) && (r.push(e = yo(t.call(n, n.__data__, u))), e.parentNode = n);
        return h(r)
    };
    var So = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    so.ns = {
        prefix: So,
        qualify: function(t) {
            var e = t.indexOf(":"),
            n = t;
            return 0 <= e && (n = t.substring(0, e), t = t.substring(e + 1)),
            So.hasOwnProperty(n) ? {
                space: So[n],
                local: t
            }: t
        }
    },
    ko.attr = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node();
                return (t = so.ns.qualify(t)).local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
            }
            for (e in t) this.each(p(e, t[e]));
            return this
        }
        return this.each(p(t, e))
    },
    so.requote = function(t) {
        return t.replace(To, "\\$&")
    };
    var To = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    ko.classed = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node(),
                r = (t = t.trim().split(/^|\s+/g)).length,
                i = -1;
                if (e = n.classList) {
                    for (; ++i < r;) if (!e.contains(t[i])) return ! 1
                } else for (e = n.getAttribute("class"); ++i < r;) if (!v(t[i]).test(e)) return ! 1;
                return ! 0
            }
            for (e in t) this.each(y(e, t[e]));
            return this
        }
        return this.each(y(t, e))
    },
    ko.style = function(t, e, n) {
        var r = arguments.length;
        if (r < 3) {
            if ("string" != typeof t) {
                for (n in r < 2 && (e = ""), t) this.each(w(n, t[n], e));
                return this
            }
            if (r < 2) return co.getComputedStyle(this.node(), null).getPropertyValue(t);
            n = ""
        }
        return this.each(w(t, e, n))
    },
    ko.property = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) return this.node()[t];
            for (e in t) this.each(_(e, t[e]));
            return this
        }
        return this.each(_(t, e))
    },
    ko.text = function(e) {
        return arguments.length ? this.each("function" == typeof e ?
        function() {
            var t = e.apply(this, arguments);
            this.textContent = null == t ? "": t
        }: null == e ?
        function() {
            this.textContent = ""
        }: function() {
            this.textContent = e
        }) : this.node().textContent
    },
    ko.html = function(e) {
        return arguments.length ? this.each("function" == typeof e ?
        function() {
            var t = e.apply(this, arguments);
            this.innerHTML = null == t ? "": t
        }: null == e ?
        function() {
            this.innerHTML = ""
        }: function() {
            this.innerHTML = e
        }) : this.node().innerHTML
    },
    ko.append = function(t) {
        function e() {
            return this.appendChild(lo.createElementNS(this.namespaceURI, t))
        }
        function n() {
            return this.appendChild(lo.createElementNS(t.space, t.local))
        }
        return t = so.ns.qualify(t),
        this.select(t.local ? n: e)
    },
    ko.insert = function(n, r) {
        function t(t, e) {
            return this.insertBefore(lo.createElementNS(this.namespaceURI, n), r.call(this, t, e))
        }
        function e(t, e) {
            return this.insertBefore(lo.createElementNS(n.space, n.local), r.call(this, t, e))
        }
        return n = so.ns.qualify(n),
        "function" != typeof r && (r = d(r)),
        this.select(n.local ? e: t)
    },
    ko.remove = function() {
        return this.each(function() {
            var t = this.parentNode;
            t && t.removeChild(this)
        })
    },
    ko.data = function(t, g) {
        function e(t, e) {
            var n, r, i, o = t.length,
            a = e.length,
            u = Math.min(o, a),
            s = new Array(a),
            l = new Array(a),
            c = new Array(o);
            if (g) {
                var f, h = new x,
                d = new x,
                p = [];
                for (n = -1; ++n < o;) f = g.call(r = t[n], r.__data__, n),
                h.has(f) ? c[n] = r: h.set(f, r),
                p.push(f);
                for (n = -1; ++n < a;) f = g.call(e, i = e[n], n),
                (r = h.get(f)) ? (s[n] = r).__data__ = i: d.has(f) || (l[n] = k(i)),
                d.set(f, i),
                h.remove(f);
                for (n = -1; ++n < o;) h.has(p[n]) && (c[n] = t[n])
            } else {
                for (n = -1; ++n < u;) r = t[n],
                i = e[n],
                r ? (r.__data__ = i, s[n] = r) : l[n] = k(i);
                for (; n < a; ++n) l[n] = k(e[n]);
                for (; n < o; ++n) c[n] = t[n]
            }
            l.update = s,
            l.parentNode = s.parentNode = c.parentNode = t.parentNode,
            m.push(l),
            v.push(s),
            y.push(c)
        }
        var n, r, i = -1,
        o = this.length;
        if (!arguments.length) {
            for (t = new Array(o = (n = this[0]).length); ++i < o;)(r = n[i]) && (t[i] = r.__data__);
            return t
        }
        var m = H([]),
        v = h([]),
        y = h([]);
        if ("function" == typeof t) for (; ++i < o;) e(n = this[i], t.call(n, n.parentNode.__data__, i));
        else for (; ++i < o;) e(n = this[i], t);
        return v.enter = function() {
            return m
        },
        v.exit = function() {
            return y
        },
        v
    },
    ko.datum = function(t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    },
    ko.filter = function(t) {
        var e, n, r, i = [];
        "function" != typeof t && (t = S(t));
        for (var o = 0,
        a = this.length; o < a; o++) {
            i.push(e = []),
            e.parentNode = (n = this[o]).parentNode;
            for (var u = 0,
            s = n.length; u < s; u++)(r = n[u]) && t.call(r, r.__data__, u) && e.push(r)
        }
        return h(i)
    },
    ko.order = function() {
        for (var t = -1,
        e = this.length; ++t < e;) for (var n, r = this[t], i = r.length - 1, o = r[i]; 0 <= --i;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
        return this
    },
    ko.sort = function(t) {
        t = T.apply(this, arguments);
        for (var e = -1,
        n = this.length; ++e < n;) this[e].sort(t);
        return this.order()
    },
    ko.on = function(t, e, n) {
        var r = arguments.length;
        if (r < 3) {
            if ("string" != typeof t) {
                for (n in r < 2 && (e = !1), t) this.each(j(n, t[n], e));
                return this
            }
            if (r < 2) return (r = this.node()["__on" + t]) && r._;
            n = !1
        }
        return this.each(j(t, e, n))
    };
    var Co = so.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Co.forEach(function(t) {
        "on" + t in lo && Co.remove(t)
    }),
    ko.each = function(r) {
        return L(this,
        function(t, e, n) {
            r.call(t, t.__data__, e, n)
        })
    },
    ko.call = function(t) {
        var e = yo(arguments);
        return t.apply(e[0] = this, e),
        this
    },
    ko.empty = function() {
        return ! this.node()
    },
    ko.node = function() {
        for (var t = 0,
        e = this.length; t < e; t++) for (var n = this[t], r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            if (o) return o
        }
        return null
    };
    var No = [];
    so.selection.enter = H,
    (so.selection.enter.prototype = No).append = ko.append,
    No.insert = ko.insert,
    No.empty = ko.empty,
    No.node = ko.node,
    No.select = function(t) {
        for (var e, n, r, i, o, a = [], u = -1, s = this.length; ++u < s;) {
            r = (i = this[u]).update,
            a.push(e = []),
            e.parentNode = i.parentNode;
            for (var l = -1,
            c = i.length; ++l < c;)(o = i[l]) ? (e.push(r[l] = n = t.call(i.parentNode, o.__data__, l)), n.__data__ = o.__data__) : e.push(null)
        }
        return h(a)
    },
    ko.transition = function() {
        var t, e, n = eu || ++ou,
        r = [],
        i = Object.create(au);
        i.time = Date.now();
        for (var o = -1,
        a = this.length; ++o < a;) {
            r.push(t = []);
            for (var u = this[o], s = -1, l = u.length; ++s < l;)(e = u[s]) && Mi(e, s, n, i),
            t.push(e)
        }
        return yi(r, n)
    },
    so.select = function(t) {
        var e = ["string" == typeof t ? xo(t, lo) : t];
        return e.parentNode = wo,
        h([e])
    },
    so.selectAll = function(t) {
        var e = yo("string" == typeof t ? Mo(t, lo) : t);
        return e.parentNode = wo,
        h([e])
    };
    var Ao = so.select(wo);
    so.behavior.zoom = function() {
        function e() {
            this.on("mousedown.zoom", t).on("mousemove.zoom", a).on(qo + ".zoom", i).on("dblclick.zoom", u).on("touchstart.zoom", f).on("touchmove.zoom", h).on("touchend.zoom", f)
        }
        function s(t) {
            return [(t[0] - x[0]) / M, (t[1] - x[1]) / M]
        }
        function n(t) {
            return [t[0] * M + x[0], t[1] * M + x[1]]
        }
        function o(t) {
            M = Math.max(w[0], Math.min(w[1], t))
        }
        function l(t, e) {
            e = n(e),
            x[0] += t[0] - e[0],
            x[1] += t[1] - e[1]
        }
        function r() {
            m && m.domain(g.range().map(function(t) {
                return (t - x[0]) / M
            }).map(g.invert)),
            y && y.domain(v.range().map(function(t) {
                return (t - x[1]) / M
            }).map(v.invert))
        }
        function c(t) {
            r(),
            so.event.preventDefault(),
            t({
                type: "zoom",
                scale: M,
                translate: x
            })
        }
        function t() {
            function t() {
                o = 1,
                l(so.mouse(n), u),
                c(r)
            }
            function e() {
                o && N(),
                a.on("mousemove.zoom", null).on("mouseup.zoom", null),
                o && so.event.target === i && E(a, "click.zoom")
            }
            var n = this,
            r = _.of(n, arguments),
            i = so.event.target,
            o = 0,
            a = so.select(co).on("mousemove.zoom", t).on("mouseup.zoom", e),
            u = s(so.mouse(n));
            co.focus(),
            N()
        }
        function i() {
            d || (d = s(so.mouse(this))),
            o(Math.pow(2, .002 * jo()) * M),
            l(so.mouse(this), d),
            c(_.of(this, arguments))
        }
        function a() {
            d = null
        }
        function u() {
            var t = so.mouse(this),
            e = s(t),
            n = Math.log(M) / Math.LN2;
            o(Math.pow(2, so.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1)),
            l(t, e),
            c(_.of(this, arguments))
        }
        function f() {
            var t = so.touches(this),
            e = Date.now();
            if (p = M, d = {},
            t.forEach(function(t) {
                d[t.identifier] = s(t)
            }), N(), 1 === t.length) {
                if (e - b < 500) {
                    var n = t[0],
                    r = s(t[0]);
                    o(2 * M),
                    l(n, r),
                    c(_.of(this, arguments))
                }
                b = e
            }
        }
        function h() {
            var t = so.touches(this),
            e = t[0],
            n = d[e.identifier];
            if (r = t[1]) {
                var r, i = d[r.identifier];
                e = [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2],
                n = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
                o(so.event.scale * p)
            }
            l(e, n),
            b = null,
            c(_.of(this, arguments))
        }
        var d, p, g, m, v, y, b, x = [0, 0],
        M = 1,
        w = Do,
        _ = A(e, "zoom");
        return e.translate = function(t) {
            return arguments.length ? (x = t.map(Number), r(), e) : x
        },
        e.scale = function(t) {
            return arguments.length ? (M = +t, r(), e) : M
        },
        e.scaleExtent = function(t) {
            return arguments.length ? (w = null == t ? Do: t.map(Number), e) : w
        },
        e.x = function(t) {
            return arguments.length ? (g = (m = t).copy(), x = [0, 0], M = 1, e) : m
        },
        e.y = function(t) {
            return arguments.length ? (v = (y = t).copy(), x = [0, 0], M = 1, e) : y
        },
        so.rebind(e, _, "on")
    };
    var jo, Do = [0, Infinity],
    qo = "onwheel" in lo ? (jo = function() {
        return - so.event.deltaY * (so.event.deltaMode ? 120 : 1)
    },
    "wheel") : "onmousewheel" in lo ? (jo = function() {
        return so.event.wheelDelta
    },
    "mousewheel") : (jo = function() {
        return - so.event.detail
    },
    "MozMousePixelScroll");
    F.prototype.toString = function() {
        return this.rgb() + ""
    },
    so.hsl = function(t, e, n) {
        return 1 === arguments.length ? t instanceof O ? R(t.h, t.s, t.l) : ot("" + t, at, R) : R( + t, +e, +n)
    };
    var Lo = O.prototype = new F;
    Lo.brighter = function(t) {
        return t = Math.pow(.7, arguments.length ? t: 1),
        R(this.h, this.s, this.l / t)
    },
    Lo.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t: 1),
        R(this.h, this.s, t * this.l)
    },
    Lo.rgb = function() {
        return z(this.h, this.s, this.l)
    };
    var Ho = Math.PI,
    Fo = 1e-6,
    Ro = Ho / 180,
    Oo = 180 / Ho;
    so.hcl = function(t, e, n) {
        return 1 === arguments.length ? t instanceof Y ? X(t.h, t.c, t.l) : K(t instanceof J ? t.l: (t = ut((t = so.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : X( + t, +e, +n)
    };
    var zo = Y.prototype = new F;
    zo.brighter = function(t) {
        return X(this.h, this.c, Math.min(100, this.l + Po * (arguments.length ? t: 1)))
    },
    zo.darker = function(t) {
        return X(this.h, this.c, Math.max(0, this.l - Po * (arguments.length ? t: 1)))
    },
    zo.rgb = function() {
        return V(this.h, this.c, this.l).rgb()
    },
    so.lab = function(t, e, n) {
        return 1 === arguments.length ? t instanceof J ? G(t.l, t.a, t.b) : t instanceof Y ? V(t.l, t.c, t.h) : ut((t = so.rgb(t)).r, t.g, t.b) : G( + t, +e, +n)
    };
    var Po = 18,
    $o = .95047,
    Io = 1,
    Bo = 1.08883,
    Wo = J.prototype = new F;
    Wo.brighter = function(t) {
        return G(Math.min(100, this.l + Po * (arguments.length ? t: 1)), this.a, this.b)
    },
    Wo.darker = function(t) {
        return G(Math.max(0, this.l - Po * (arguments.length ? t: 1)), this.a, this.b)
    },
    Wo.rgb = function() {
        return Z(this.l, this.a, this.b)
    },
    so.rgb = function(t, e, n) {
        return 1 === arguments.length ? t instanceof rt ? nt(t.r, t.g, t.b) : ot("" + t, nt, z) : nt(~~t, ~~e, ~~n)
    };
    var Uo = rt.prototype = new F;
    Uo.brighter = function(t) {
        t = Math.pow(.7, arguments.length ? t: 1);
        var e = this.r,
        n = this.g,
        r = this.b,
        i = 30;
        return e || n || r ? (e && e < i && (e = i), n && n < i && (n = i), r && r < i && (r = i), nt(Math.min(255, Math.floor(e / t)), Math.min(255, Math.floor(n / t)), Math.min(255, Math.floor(r / t)))) : nt(i, i, i)
    },
    Uo.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t: 1),
        nt(Math.floor(t * this.r), Math.floor(t * this.g), Math.floor(t * this.b))
    },
    Uo.hsl = function() {
        return at(this.r, this.g, this.b)
    },
    Uo.toString = function() {
        return "#" + it(this.r) + it(this.g) + it(this.b)
    };
    var Xo = so.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    Xo.forEach(function(t, e) {
        Xo.set(t, ot(e, nt, z))
    }),
    so.functor = ct,
    so.xhr = function(i, o, t) {
        function e() {
            var t = s.status; ! t && s.responseText || 200 <= t && t < 300 || 304 === t ? n.load.call(a, r.call(a, s)) : n.error.call(a, s)
        }
        var a = {},
        n = so.dispatch("progress", "load", "error"),
        u = {},
        r = ft,
        s = new(co.XDomainRequest && /^(http(s)?:)?\/\//.test(i) ? XDomainRequest: XMLHttpRequest);
        return "onload" in s ? s.onload = s.onerror = e: s.onreadystatechange = function() {
            3 < s.readyState && e()
        },
        s.onprogress = function(t) {
            var e = so.event;
            so.event = t;
            try {
                n.progress.call(a, s)
            } finally {
                so.event = e
            }
        },
        a.header = function(t, e) {
            return t = (t + "").toLowerCase(),
            arguments.length < 2 ? u[t] : (null == e ? delete u[t] : u[t] = e + "", a)
        },
        a.mimeType = function(t) {
            return arguments.length ? (o = null == t ? null: t + "", a) : o
        },
        a.response = function(t) {
            return r = t,
            a
        },
        ["get", "post"].forEach(function(t) {
            a[t] = function() {
                return a.send.apply(a, [t].concat(yo(arguments)))
            }
        }),
        a.send = function(t, e, n) {
            if (2 === arguments.length && "function" == typeof e && (n = e, e = null), s.open(t, i, !0), null == o || "accept" in u || (u.accept = o + ",*/*"), s.setRequestHeader) for (var r in u) s.setRequestHeader(r, u[r]);
            return null != o && s.overrideMimeType && s.overrideMimeType(o),
            null != n && a.on("error", n).on("load",
            function(t) {
                n(null, t)
            }),
            s.send(null == e ? null: e),
            a
        },
        a.abort = function() {
            return s.abort(),
            a
        },
        so.rebind(a, n, "on"),
        2 === arguments.length && "function" == typeof o && (t = o, o = null),
        null == t ? a: a.get(ht(t))
    },
    so.csv = dt(",", "text/csv"),
    so.tsv = dt("\t", "text/tab-separated-values");
    var Yo, Vo, Go = 0,
    Jo = {},
    Zo = null;
    so.timer = function(t, e, n) {
        if (arguments.length < 3) {
            if (arguments.length < 2) e = 0;
            else if (!isFinite(e)) return;
            n = Date.now()
        }
        var r = Jo[t.id];
        r && r.callback === t ? (r.then = n, r.delay = e) : Jo[t.id = ++Go] = Zo = {
            callback: t,
            then: n,
            delay: e,
            next: Zo
        },
        Yo || (Vo = clearTimeout(Vo), Yo = 1, Ko(pt))
    },
    so.timer.flush = function() {
        for (var t, e = Date.now(), n = Zo; n;) t = e - n.then,
        n.delay || (n.flush = n.callback(t)),
        n = n.next;
        gt()
    };
    var Ko = co.requestAnimationFrame || co.webkitRequestAnimationFrame || co.mozRequestAnimationFrame || co.oRequestAnimationFrame || co.msRequestAnimationFrame ||
    function(t) {
        setTimeout(t, 17)
    },
    Qo = ".",
    ta = ",",
    ea = [3, 3],
    na = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(mt);
    so.formatPrefix = function(t, e) {
        var n = 0;
        return t && (t < 0 && (t *= -1), e && (t = so.round(t, vt(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max( - 24, Math.min(24, 3 * Math.floor((n <= 0 ? n + 1 : n - 1) / 3)))),
        na[8 + n / 3]
    },
    so.round = function(t, e) {
        return e ? Math.round(t * (e = Math.pow(10, e))) / e: Math.round(t)
    },
    so.format = function(t) {
        var e = ra.exec(t),
        o = e[1] || " ",
        a = e[2] || ">",
        u = e[3] || "",
        s = e[4] || "",
        l = e[5],
        c = +e[6],
        f = e[7],
        h = e[8],
        d = e[9],
        p = 1,
        g = "",
        m = !1;
        switch (h && (h = +h.substring(1)), (l || "0" === o && "=" === a) && (l = o = "0", a = "=", f && (c -= Math.floor((c - 1) / 4))), d) {
        case "n":
            f = !0,
            d = "g";
            break;
        case "%":
            p = 100,
            g = "%",
            d = "f";
            break;
        case "p":
            p = 100,
            g = "%",
            d = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X":
            s && (s = "0" + d.toLowerCase());
        case "c":
        case "d":
            m = !0,
            h = 0;
            break;
        case "s":
            p = -1,
            d = "r"
        }
        "#" === s && (s = ""),
        "r" != d || h || (d = "g"),
        null != h && ("g" == d ? h = Math.max(1, Math.min(21, h)) : "e" != d && "f" != d || (h = Math.max(0, Math.min(20, h)))),
        d = ia.get(d) || yt;
        var v = l && f;
        return function(t) {
            if (m && t % 1) return "";
            var e = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : u;
            if (p < 0) {
                var n = so.formatPrefix(t, h);
                t = n.scale(t),
                g = n.symbol
            } else t *= p;
            t = d(t, h),
            !l && f && (t = oa(t));
            var r = s.length + t.length + (v ? 0 : e.length),
            i = r < c ? new Array(r = c - r + 1).join(o) : "";
            return v && (t = oa(i + t)),
            Qo && t.replace(".", Qo),
            e += s,
            ("<" === a ? e + t + i: ">" === a ? i + e + t: "^" === a ? i.substring(0, r >>= 1) + e + t + i.substring(r) : e + (v ? t: i + t)) + g
        }
    };
    var ra = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
    ia = so.map({
        b: function(t) {
            return t.toString(2)
        },
        c: function(t) {
            return String.fromCharCode(t)
        },
        o: function(t) {
            return t.toString(8)
        },
        x: function(t) {
            return t.toString(16)
        },
        X: function(t) {
            return t.toString(16).toUpperCase()
        },
        g: function(t, e) {
            return t.toPrecision(e)
        },
        e: function(t, e) {
            return t.toExponential(e)
        },
        f: function(t, e) {
            return t.toFixed(e)
        },
        r: function(t, e) {
            return (t = so.round(t, vt(t, e))).toFixed(Math.max(0, Math.min(20, vt(t * (1 + 1e-15), e))))
        }
    }),
    oa = ft;
    if (ea) {
        var aa = ea.length;
        oa = function(t) {
            for (var e = t.lastIndexOf("."), n = 0 <= e ? "." + t.substring(e + 1) : (e = t.length, ""), r = [], i = 0, o = ea[0]; 0 < e && 0 < o;) r.push(t.substring(e -= o, e + o)),
            o = ea[i = (i + 1) % aa];
            return r.reverse().join(ta || "") + n
        }
    }
    so.geo = {},
    so.geo.stream = function(t, e) {
        t && ca.hasOwnProperty(t.type) ? ca[t.type](t, e) : bt(t, e)
    };
    var ua, sa, la, ca = {
        Feature: function(t, e) {
            bt(t.geometry, e)
        },
        FeatureCollection: function(t, e) {
            for (var n = t.features,
            r = -1,
            i = n.length; ++r < i;) bt(n[r].geometry, e)
        }
    },
    fa = {
        Sphere: function(t, e) {
            e.sphere()
        },
        Point: function(t, e) {
            var n = t.coordinates;
            e.point(n[0], n[1])
        },
        MultiPoint: function(t, e) {
            for (var n, r = t.coordinates,
            i = -1,
            o = r.length; ++i < o;) n = r[i],
            e.point(n[0], n[1])
        },
        LineString: function(t, e) {
            xt(t.coordinates, e, 0)
        },
        MultiLineString: function(t, e) {
            for (var n = t.coordinates,
            r = -1,
            i = n.length; ++r < i;) xt(n[r], e, 0)
        },
        Polygon: function(t, e) {
            Mt(t.coordinates, e)
        },
        MultiPolygon: function(t, e) {
            for (var n = t.coordinates,
            r = -1,
            i = n.length; ++r < i;) Mt(n[r], e)
        },
        GeometryCollection: function(t, e) {
            for (var n = t.geometries,
            r = -1,
            i = n.length; ++r < i;) bt(n[r], e)
        }
    };
    so.geo.area = function(t) {
        return ua = 0,
        so.geo.stream(t, va),
        ua
    };
    var ha, da, pa, ga, ma, va = {
        sphere: function() {
            ua += 4 * Ho
        },
        point: C,
        lineStart: C,
        lineEnd: C,
        polygonStart: function() {
            sa = 1,
            la = 0,
            va.lineStart = wt
        },
        polygonEnd: function() {
            var t = 2 * Math.atan2(la, sa);
            ua += t < 0 ? 4 * Ho + t: t,
            va.lineStart = va.lineEnd = va.point = C
        }
    };
    so.geo.bounds = _t(ft),
    so.geo.centroid = function(t) {
        var e;
        if (ha = da = pa = ga = ma = 0, so.geo.stream(t, ba), da && Math.abs(e = Math.sqrt(pa * pa + ga * ga + ma * ma)) > Fo) return [Math.atan2(ga, pa) * Oo, Math.asin(Math.max( - 1, Math.min(1, ma / e))) * Oo]
    };
    var ya, ba = {
        sphere: function() {
            ha < 2 && (ha = 2, da = pa = ga = ma = 0)
        },
        point: Et,
        lineStart: St,
        lineEnd: Tt,
        polygonStart: function() {
            ha < 2 && (ha = 2, da = pa = ga = ma = 0),
            ba.lineStart = kt
        },
        polygonEnd: function() {
            ba.lineStart = St
        }
    },
    xa = zt(Lt, Wt, Xt),
    Ma = 1e9;
    so.geo.projection = Kt,
    so.geo.projectionMutator = Qt,
    (so.geo.equirectangular = function() {
        return Kt(ee)
    }).raw = ee.invert = ee,
    so.geo.rotation = function(e) {
        function t(t) {
            return (t = e(t[0] * Ro, t[1] * Ro))[0] *= Oo,
            t[1] *= Oo,
            t
        }
        return e = ne(e[0] % 360 * Ro, e[1] * Ro, 2 < e.length ? e[2] * Ro: 0),
        t.invert = function(t) {
            return (t = e.invert(t[0] * Ro, t[1] * Ro))[0] *= Oo,
            t[1] *= Oo,
            t
        },
        t
    },
    so.geo.circle = function() {
        function e() {
            var t = "function" == typeof o ? o.apply(this, arguments) : o,
            n = ne( - t[0] * Ro, -t[1] * Ro, 0).invert,
            r = [];
            return i(null, null, 1, {
                point: function(t, e) {
                    r.push(t = n(t, e)),
                    t[0] *= Oo,
                    t[1] *= Oo
                }
            }),
            {
                type: "Polygon",
                coordinates: [r]
            }
        }
        var n, i, o = [0, 0],
        r = 6;
        return e.origin = function(t) {
            return arguments.length ? (o = t, e) : o
        },
        e.angle = function(t) {
            return arguments.length ? (i = ae((n = +t) * Ro, r * Ro), e) : n
        },
        e.precision = function(t) {
            return arguments.length ? (i = ae(n * Ro, (r = +t) * Ro), e) : r
        },
        e.angle(90)
    },
    so.geo.distance = function(t, e) {
        var n, r = (e[0] - t[0]) * Ro,
        i = t[1] * Ro,
        o = e[1] * Ro,
        a = Math.sin(r),
        u = Math.cos(r),
        s = Math.sin(i),
        l = Math.cos(i),
        c = Math.sin(o),
        f = Math.cos(o);
        return Math.atan2(Math.sqrt((n = f * a) * n + (n = l * c - s * f * u) * n), s * c + l * f * u)
    },
    so.geo.graticule = function() {
        function e() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }
        function t() {
            return so.range(Math.ceil(o / m) * m, i, m).map(h).concat(so.range(Math.ceil(l / v) * v, s, v).map(d)).concat(so.range(Math.ceil(r / p) * p, n, p).filter(function(t) {
                return Math.abs(t % m) > Fo
            }).map(c)).concat(so.range(Math.ceil(u / g) * g, a, g).filter(function(t) {
                return Math.abs(t % v) > Fo
            }).map(f))
        }
        var n, r, i, o, a, u, s, l, c, f, h, d, p = 10,
        g = p,
        m = 90,
        v = 360,
        y = 2.5;
        return e.lines = function() {
            return t().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        },
        e.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(o).concat(d(s).slice(1), h(i).reverse().slice(1), d(l).reverse().slice(1))]
            }
        },
        e.extent = function(t) {
            return arguments.length ? e.majorExtent(t).minorExtent(t) : e.minorExtent()
        },
        e.majorExtent = function(t) {
            return arguments.length ? (o = +t[0][0], i = +t[1][0], l = +t[0][1], s = +t[1][1], i < o && (t = o, o = i, i = t), s < l && (t = l, l = s, s = t), e.precision(y)) : [[o, l], [i, s]]
        },
        e.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], n = +t[1][0], u = +t[0][1], a = +t[1][1], n < r && (t = r, r = n, n = t), a < u && (t = u, u = a, a = t), e.precision(y)) : [[r, u], [n, a]]
        },
        e.step = function(t) {
            return arguments.length ? e.majorStep(t).minorStep(t) : e.minorStep()
        },
        e.majorStep = function(t) {
            return arguments.length ? (m = +t[0], v = +t[1], e) : [m, v]
        },
        e.minorStep = function(t) {
            return arguments.length ? (p = +t[0], g = +t[1], e) : [p, g]
        },
        e.precision = function(t) {
            return arguments.length ? (y = +t, c = se(u, a, 90), f = le(r, n, y), h = se(l, s, 90), d = le(o, i, y), e) : y
        },
        e.majorExtent([[ - 180, -90 + Fo], [180, 90 - Fo]]).minorExtent([[ - 180, -80 - Fo], [180, 80 + Fo]])
    },
    so.geo.greatArc = function() {
        function e() {
            return {
                type: "LineString",
                coordinates: [n || i.apply(this, arguments), r || o.apply(this, arguments)]
            }
        }
        var n, r, i = ce,
        o = fe;
        return e.distance = function() {
            return so.geo.distance(n || i.apply(this, arguments), r || o.apply(this, arguments))
        },
        e.source = function(t) {
            return arguments.length ? (n = "function" == typeof(i = t) ? null: t, e) : i
        },
        e.target = function(t) {
            return arguments.length ? (r = "function" == typeof(o = t) ? null: t, e) : o
        },
        e.precision = function() {
            return arguments.length ? e: 0
        },
        e
    },
    so.geo.interpolate = function(t, e) {
        return he(t[0] * Ro, t[1] * Ro, e[0] * Ro, e[1] * Ro)
    },
    so.geo.length = function(t) {
        return ya = 0,
        so.geo.stream(t, wa),
        ya
    };
    var wa = {
        sphere: C,
        point: C,
        lineStart: de,
        lineEnd: C,
        polygonStart: C,
        polygonEnd: C
    }; (so.geo.conicEqualArea = function() {
        return pe(ge)
    }).raw = ge,
    so.geo.albersUsa = function() {
        function i(t) {
            return e(t)(t)
        }
        function e(t) {
            var e = t[0],
            n = t[1];
            return 50 < n ? l: e < -140 ? c: n < 21 ? f: s
        }
        var o, a, u, s = so.geo.conicEqualArea().rotate([98, 0]).center([0, 38]).parallels([29.5, 45.5]),
        l = so.geo.conicEqualArea().rotate([160, 0]).center([0, 60]).parallels([55, 65]),
        c = so.geo.conicEqualArea().rotate([160, 0]).center([0, 20]).parallels([8, 18]),
        f = so.geo.conicEqualArea().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
        return i.invert = function(t) {
            return o(t) || a(t) || u(t) || s.invert(t)
        },
        i.scale = function(t) {
            return arguments.length ? (s.scale(t), l.scale(.6 * t), c.scale(t), f.scale(1.5 * t), i.translate(s.translate())) : s.scale()
        },
        i.translate = function(t) {
            if (!arguments.length) return s.translate();
            var e = s.scale(),
            n = t[0],
            r = t[1];
            return s.translate(t),
            l.translate([n - .4 * e, r + .17 * e]),
            c.translate([n - .19 * e, r + .2 * e]),
            f.translate([n + .58 * e, r + .43 * e]),
            o = me(l, [[ - 180, 50], [ - 130, 72]]),
            a = me(c, [[ - 164, 18], [ - 154, 24]]),
            u = me(f, [[ - 67.5, 17.5], [ - 65, 19]]),
            i
        },
        i.scale(1e3)
    };
    var _a, Ea, ka = {
        point: C,
        lineStart: C,
        lineEnd: C,
        polygonStart: function() {
            Ea = 0,
            ka.lineStart = ve
        },
        polygonEnd: function() {
            ka.lineStart = ka.lineEnd = ka.point = C,
            _a += Math.abs(Ea / 2)
        }
    },
    Sa = {
        point: be,
        lineStart: xe,
        lineEnd: Me,
        polygonStart: function() {
            Sa.lineStart = we
        },
        polygonEnd: function() {
            Sa.point = be,
            Sa.lineStart = xe,
            Sa.lineEnd = Me
        }
    };
    so.geo.path = function() {
        function e(t) {
            return t && so.geo.stream(t, i(o.pointRadius("function" == typeof a ? +a.apply(this, arguments) : a))),
            o.result()
        }
        var n, r, i, o, a = 4.5;
        return e.area = function(t) {
            return _a = 0,
            so.geo.stream(t, i(ka)),
            _a
        },
        e.centroid = function(t) {
            return ha = pa = ga = ma = 0,
            so.geo.stream(t, i(Sa)),
            ma ? [pa / ma, ga / ma] : undefined
        },
        e.bounds = function(t) {
            return _t(i)(t)
        },
        e.projection = function(t) {
            return arguments.length ? (i = (n = t) ? t.stream || ke(t) : ft, e) : n
        },
        e.context = function(t) {
            return arguments.length ? (o = null == (r = t) ? new ye: new _e(t), e) : r
        },
        e.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t: +t, e) : a
        },
        e.projection(so.geo.albersUsa()).context(null)
    },
    so.geo.albers = function() {
        return so.geo.conicEqualArea().parallels([29.5, 45.5]).rotate([98, 0]).center([0, 38]).scale(1e3)
    };
    var Ta = Se(function(t) {
        return Math.sqrt(2 / (1 + t))
    },
    function(t) {
        return 2 * Math.asin(t / 2)
    }); (so.geo.azimuthalEqualArea = function() {
        return Kt(Ta)
    }).raw = Ta;
    var Ca = Se(function(t) {
        var e = Math.acos(t);
        return e && e / Math.sin(e)
    },
    ft); (so.geo.azimuthalEquidistant = function() {
        return Kt(Ca)
    }).raw = Ca,
    (so.geo.conicConformal = function() {
        return pe(Te)
    }).raw = Te,
    (so.geo.conicEquidistant = function() {
        return pe(Ce)
    }).raw = Ce;
    var Na = Se(function(t) {
        return 1 / t
    },
    Math.atan); (so.geo.gnomonic = function() {
        return Kt(Na)
    }).raw = Na,
    Ne.invert = function(t, e) {
        return [t, 2 * Math.atan(Math.exp(e)) - Ho / 2]
    },
    (so.geo.mercator = function() {
        return Ae(Ne)
    }).raw = Ne;
    var Aa = Se(function() {
        return 1
    },
    Math.asin); (so.geo.orthographic = function() {
        return Kt(Aa)
    }).raw = Aa;
    var ja = Se(function(t) {
        return 1 / (1 + t)
    },
    function(t) {
        return 2 * Math.atan(t)
    }); (so.geo.stereographic = function() {
        return Kt(ja)
    }).raw = ja,
    je.invert = function(t, e) {
        return [Math.atan2(B(t), Math.cos(e)), I(Math.sin(e) / W(t))]
    },
    (so.geo.transverseMercator = function() {
        return Ae(je)
    }).raw = je,
    so.geom = {},
    so.svg = {},
    so.svg.line = function() {
        return De(ft)
    };
    var Da = so.map({
        linear: He,
        "linear-closed": Fe,
        "step-before": Re,
        "step-after": Oe,
        basis: We,
        "basis-open": Ue,
        "basis-closed": Xe,
        bundle: Ye,
        cardinal: $e,
        "cardinal-open": ze,
        "cardinal-closed": Pe,
        monotone: Qe
    });
    Da.forEach(function(t, e) {
        e.key = t,
        e.closed = /-closed$/.test(t)
    });
    var qa = [0, 2 / 3, 1 / 3, 0],
    La = [0, 1 / 3, 2 / 3, 0],
    Ha = [0, 1 / 6, 2 / 3, 1 / 6];
    so.geom.hull = function(t) {
        function e(t) {
            if (t.length < 3) return [];
            var e, n, r, i, o, a, u, s, l, c, f, h, d = ct(M),
            p = ct(w),
            g = t.length,
            m = g - 1,
            v = [],
            y = [],
            b = 0;
            if (d === qe && w === Le) e = t;
            else for (r = 0, e = []; r < g; ++r) e.push([ + d.call(this, n = t[r], r), +p.call(this, n, r)]);
            for (r = 1; r < g; ++r)(e[r][1] < e[b][1] || e[r][1] == e[b][1] && e[r][0] < e[b][0]) && (b = r);
            for (r = 0; r < g; ++r) r !== b && (a = e[r][1] - e[b][1], o = e[r][0] - e[b][0], v.push({
                angle: Math.atan2(a, o),
                index: r
            }));
            for (v.sort(function(t, e) {
                return t.angle - e.angle
            }), f = v[0].angle, c = v[0].index, l = 0, r = 1; r < m; ++r) {
                if (i = v[r].index, f == v[r].angle) {
                    if (o = e[c][0] - e[b][0], a = e[c][1] - e[b][1], (u = e[i][0] - e[b][0]) * u + (s = e[i][1] - e[b][1]) * s <= o * o + a * a) {
                        v[r].index = -1;
                        continue
                    }
                    v[l].index = -1
                }
                f = v[r].angle,
                l = r,
                c = i
            }
            for (y.push(b), i = r = 0; r < 2; ++i) - 1 < v[i].index && (y.push(v[i].index), r++);
            for (h = y.length; i < m; ++i) if (! (v[i].index < 0)) {
                for (; ! tn(y[h - 2], y[h - 1], v[i].index, e);)--h;
                y[h++] = v[i].index
            }
            var x = [];
            for (r = h - 1; 0 <= r; --r) x.push(t[y[r]]);
            return x
        }
        var M = qe,
        w = Le;
        return arguments.length ? e(t) : (e.x = function(t) {
            return arguments.length ? (M = t, e) : M
        },
        e.y = function(t) {
            return arguments.length ? (w = t, e) : w
        },
        e)
    },
    so.geom.polygon = function(c) {
        return c.area = function() {
            for (var t = 0,
            e = c.length,
            n = c[e - 1][1] * c[0][0] - c[e - 1][0] * c[0][1]; ++t < e;) n += c[t - 1][1] * c[t][0] - c[t - 1][0] * c[t][1];
            return.5 * n
        },
        c.centroid = function(t) {
            var e, n, r = -1,
            i = c.length,
            o = 0,
            a = 0,
            u = c[i - 1];
            for (arguments.length || (t = -1 / (6 * c.area())); ++r < i;) e = u,
            u = c[r],
            n = e[0] * u[1] - u[0] * e[1],
            o += (e[0] + u[0]) * n,
            a += (e[1] + u[1]) * n;
            return [o * t, a * t]
        },
        c.clip = function(t) {
            for (var e, n, r, i, o, a, u = -1,
            s = c.length,
            l = c[s - 1]; ++u < s;) {
                for (e = t.slice(), t.length = 0, i = c[u], o = e[(r = e.length) - 1], n = -1; ++n < r;) en(a = e[n], l, i) ? (en(o, l, i) || t.push(nn(o, a, l, i)), t.push(a)) : en(o, l, i) && t.push(nn(o, a, l, i)),
                o = a;
                l = i
            }
            return t
        },
        c
    },
    so.geom.delaunay = function(u) {
        var e = u.map(function() {
            return []
        }),
        s = [];
        return rn(u,
        function(t) {
            e[t.region.l.index].push(u[t.region.r.index])
        }),
        e.forEach(function(t, e) {
            var n = u[e],
            r = n[0],
            i = n[1];
            t.forEach(function(t) {
                t.angle = Math.atan2(t[0] - r, t[1] - i)
            }),
            t.sort(function(t, e) {
                return t.angle - e.angle
            });
            for (var o = 0,
            a = t.length - 1; o < a; o++) s.push([n, t[o], t[o + 1]])
        }),
        s
    },
    so.geom.voronoi = function(t) {
        function e(t) {
            var v, e, n, l = t.map(function() {
                return []
            }),
            r = ct(c),
            i = ct(f),
            o = t.length,
            y = 1e6;
            if (r === qe && i === Le) v = t;
            else for (v = [], n = 0; n < o; ++n) v.push([ + r.call(this, e = t[n], n), +i.call(this, e, n)]);
            if (rn(v,
            function(t) {
                var e, n, r, i, o, a;
                1 === t.a && 0 <= t.b ? (e = t.ep.r, n = t.ep.l) : (e = t.ep.l, n = t.ep.r),
                1 === t.a ? (o = e ? e.y: -y, r = t.c - t.b * o, a = n ? n.y: y, i = t.c - t.b * a) : (r = e ? e.x: -y, o = t.c - t.a * r, i = n ? n.x: y, a = t.c - t.a * i);
                var u = [r, o],
                s = [i, a];
                l[t.region.l.index].push(u, s),
                l[t.region.r.index].push(u, s)
            }), (l = l.map(function(e, t) {
                var n = v[t][0],
                r = v[t][1],
                i = e.map(function(t) {
                    return Math.atan2(t[0] - n, t[1] - r)
                }),
                o = so.range(e.length).sort(function(t, e) {
                    return i[t] - i[e]
                });
                return o.filter(function(t, e) {
                    return ! e || i[t] - i[o[e - 1]] > Fo
                }).map(function(t) {
                    return e[t]
                })
            })).forEach(function(t, e) {
                var n = t.length;
                if (!n) return t.push([ - y, -y], [ - y, y], [y, y], [y, -y]);
                if (! (2 < n)) {
                    var r = v[e],
                    i = t[0],
                    o = t[1],
                    a = r[0],
                    u = r[1],
                    s = i[0],
                    l = i[1],
                    c = o[0],
                    f = o[1],
                    h = Math.abs(c - s),
                    d = f - l;
                    if (Math.abs(d) < Fo) {
                        var p = u < l ? -y: y;
                        t.push([ - y, p], [y, p])
                    } else if (h < Fo) {
                        var g = a < s ? -y: y;
                        t.push([g, -y], [g, y])
                    } else {
                        p = (c - s) * (l - u) < (s - a) * (f - l) ? y: -y;
                        var m = Math.abs(d) - h;
                        Math.abs(m) < Fo ? t.push([d < 0 ? p: -p, p]) : (0 < m && (p *= -1), t.push([ - y, p], [y, p]))
                    }
                }
            }), a) for (n = 0; n < o; ++n) a(l[n]);
            for (n = 0; n < o; ++n) l[n].point = t[n];
            return l
        }
        var a, n = null,
        c = qe,
        f = Le;
        return arguments.length ? e(t) : (e.x = function(t) {
            return arguments.length ? (c = t, e) : c
        },
        e.y = function(t) {
            return arguments.length ? (f = t, e) : f
        },
        e.size = function(t) {
            return arguments.length ? (null == t ? a = null: (n = [ + t[0], +t[1]], a = so.geom.polygon([[0, 0], [0, n[1]], n, [n[0], 0]]).clip), e) : n
        },
        e.links = function(r) {
            var t, e, n, i = r.map(function() {
                return []
            }),
            o = [],
            a = ct(c),
            u = ct(f),
            s = r.length;
            if (a === qe && u === Le) t = r;
            else for (n = 0; n < s; ++n) t.push([ + a.call(this, e = r[n], n), +u.call(this, e, n)]);
            return rn(t,
            function(t) {
                var e = t.region.l.index,
                n = t.region.r.index;
                i[e][n] || (i[e][n] = i[n][e] = !0, o.push({
                    source: r[e],
                    target: r[n]
                }))
            }),
            o
        },
        e.triangles = function(t) {
            if (c === qe && f === Le) return so.geom.delaunay(t);
            var e, n, r, i, o, a = ct(c),
            u = ct(f);
            for (i = 0, e = [], o = t.length; i < o; ++i)(n = [ + a.call(this, r = t[i], i), +u.call(this, r, i)]).data = r,
            e.push(n);
            return so.geom.delaunay(e).map(function(t) {
                return t.map(function(t) {
                    return t.data
                })
            })
        },
        e)
    };
    var Fa = {
        l: "r",
        r: "l"
    };
    so.geom.quadtree = function(t, b, x, M, w) {
        function e(t) {
            function d(t, e, n, r, i, o, a, u) {
                if (!isNaN(n) && !isNaN(r)) if (t.leaf) {
                    var s = t.x,
                    l = t.y;
                    if (null != s) if (Math.abs(s - n) + Math.abs(l - r) < .01) f(t, e, n, r, i, o, a, u);
                    else {
                        var c = t.point;
                        t.x = t.y = t.point = null,
                        f(t, c, s, l, i, o, a, u),
                        f(t, e, n, r, i, o, a, u)
                    } else t.x = n,
                    t.y = r,
                    t.point = e
                } else f(t, e, n, r, i, o, a, u)
            }
            function f(t, e, n, r, i, o, a, u) {
                var s = .5 * (i + a),
                l = .5 * (o + u),
                c = s <= n,
                f = l <= r,
                h = (f << 1) + c;
                t.leaf = !1,
                c ? i = s: a = s,
                f ? o = l: u = l,
                d(t = t.nodes[h] || (t.nodes[h] = un()), e, n, r, i, o, a, u)
            }
            var e, n, r, i, o, a, u, s, l, c = ct(E),
            h = ct(k);
            if (null != b) a = b,
            u = x,
            s = M,
            l = w;
            else if (s = l = -(a = u = Infinity), n = [], r = [], o = t.length, _) for (i = 0; i < o; ++i)(e = t[i]).x < a && (a = e.x),
            e.y < u && (u = e.y),
            e.x > s && (s = e.x),
            e.y > l && (l = e.y),
            n.push(e.x),
            r.push(e.y);
            else for (i = 0; i < o; ++i) {
                var p = +c(e = t[i], i),
                g = +h(e, i);
                p < a && (a = p),
                g < u && (u = g),
                s < p && (s = p),
                l < g && (l = g),
                n.push(p),
                r.push(g)
            }
            var m = s - a,
            v = l - u;
            v < m ? l = u + m: s = a + v;
            var y = un();
            if (y.add = function(t) {
                d(y, t, +c(t, ++i), +h(t, i), a, u, s, l)
            },
            y.visit = function(t) {
                sn(t, y, a, u, s, l)
            },
            i = -1, null == b) {
                for (; ++i < o;) d(y, t[i], n[i], r[i], a, u, s, l); --i
            } else t.forEach(y.add);
            return n = r = t = e = null,
            y
        }
        var _, E = qe,
        k = Le;
        return (_ = arguments.length) ? (E = on, k = an, 3 === _ && (w = x, M = b, x = b = 0), e(t)) : (e.x = function(t) {
            return arguments.length ? (E = t, e) : E
        },
        e.y = function(t) {
            return arguments.length ? (k = t, e) : k
        },
        e.size = function(t) {
            return arguments.length ? (null == t ? b = x = M = w = null: (b = x = 0, M = +t[0], w = +t[1]), e) : null == b ? null: [M, w]
        },
        e)
    },
    so.interpolateRgb = ln,
    so.transform = function(t) {
        var n = lo.createElementNS(so.ns.prefix.svg, "g");
        return (so.transform = function(t) {
            n.setAttribute("transform", t);
            var e = n.transform.baseVal.consolidate();
            return new cn(e ? e.matrix: Ra)
        })(t)
    },
    cn.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var Ra = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    so.interpolateNumber = pn,
    so.interpolateTransform = gn,
    so.interpolateObject = mn,
    so.interpolateString = vn;
    var Oa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    so.interpolate = yn,
    so.interpolators = [function(t, e) {
        var n = typeof e;
        return ("string" === n || n !== typeof t ? Xo.has(e) || /^(#|rgb\(|hsl\()/.test(e) ? ln: vn: e instanceof F ? ln: "object" === n ? Array.isArray(e) ? xn: mn: pn)(t, e)
    }],
    so.interpolateArray = xn;
    var za = function() {
        return ft
    },
    Pa = so.map({
        linear: za,
        poly: Tn,
        quad: function() {
            return En
        },
        cubic: function() {
            return kn
        },
        sin: function() {
            return Cn
        },
        exp: function() {
            return Nn
        },
        circle: function() {
            return An
        },
        elastic: jn,
        back: Dn,
        bounce: function() {
            return qn
        }
    }),
    $a = so.map({
        "in": ft,
        out: wn,
        "in-out": _n,
        "out-in": function(t) {
            return _n(wn(t))
        }
    });
    so.ease = function(t) {
        var e = t.indexOf("-"),
        n = 0 <= e ? t.substring(0, e) : t,
        r = 0 <= e ? t.substring(e + 1) : "in";
        return n = Pa.get(n) || za,
        Mn((r = $a.get(r) || ft)(n.apply(null, Array.prototype.slice.call(arguments, 1))))
    },
    so.interpolateHcl = Ln,
    so.interpolateHsl = Hn,
    so.interpolateLab = Fn,
    so.interpolateRound = Rn,
    so.layout = {},
    so.layout.bundle = function() {
        return function(t) {
            for (var e = [], n = -1, r = t.length; ++n < r;) e.push(Pn(t[n]));
            return e
        }
    },
    so.layout.chord = function() {
        function t() {
            var t, e, n, r, i, o = {},
            a = [],
            u = so.range(x),
            s = [];
            for (v = [], y = [], t = 0, r = -1; ++r < x;) {
                for (e = 0, i = -1; ++i < x;) e += b[r][i];
                a.push(e),
                s.push(so.range(x)),
                t += e
            }
            for (M && u.sort(function(t, e) {
                return M(a[t], a[e])
            }), w && s.forEach(function(t, n) {
                t.sort(function(t, e) {
                    return w(b[n][t], b[n][e])
                })
            }), t = (2 * Ho - E * x) / t, e = 0, r = -1; ++r < x;) {
                for (n = e, i = -1; ++i < x;) {
                    var l = u[r],
                    c = s[l][i],
                    f = b[l][c],
                    h = e,
                    d = e += f * t;
                    o[l + "-" + c] = {
                        index: l,
                        subindex: c,
                        startAngle: h,
                        endAngle: d,
                        value: f
                    }
                }
                y[l] = {
                    index: l,
                    startAngle: n,
                    endAngle: e,
                    value: (e - n) / t
                },
                e += E
            }
            for (r = -1; ++r < x;) for (i = r - 1; ++i < x;) {
                var p = o[r + "-" + i],
                g = o[i + "-" + r]; (p.value || g.value) && v.push(p.value < g.value ? {
                    source: g,
                    target: p
                }: {
                    source: p,
                    target: g
                })
            }
            _ && m()
        }
        function m() {
            v.sort(function(t, e) {
                return _((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
            })
        }
        var v, y, b, x, M, w, _, e = {},
        E = 0;
        return e.matrix = function(t) {
            return arguments.length ? (x = (b = t) && b.length, v = y = null, e) : b
        },
        e.padding = function(t) {
            return arguments.length ? (E = t, v = y = null, e) : E
        },
        e.sortGroups = function(t) {
            return arguments.length ? (M = t, v = y = null, e) : M
        },
        e.sortSubgroups = function(t) {
            return arguments.length ? (w = t, v = null, e) : w
        },
        e.sortChords = function(t) {
            return arguments.length ? (_ = t, v && m(), e) : _
        },
        e.chords = function() {
            return v || t(),
            v
        },
        e.groups = function() {
            return y || t(),
            y
        },
        e
    },
    so.layout.force = function() {
        function f(s) {
            return function(t, e, n, r) {
                if (t.point !== s) {
                    var i = t.cx - s.x,
                    o = t.cy - s.y,
                    a = 1 / Math.sqrt(i * i + o * o);
                    if ((r - e) * a < l) {
                        var u = t.charge * a * a;
                        return s.px -= i * u,
                        s.py -= o * u,
                        !0
                    }
                    if (t.point && isFinite(a)) {
                        u = t.pointCharge * a * a;
                        s.px -= i * u,
                        s.py -= o * u
                    }
                }
                return ! t.charge
            }
        }
        function t(t) {
            t.px = so.event.x,
            t.py = so.event.y,
            c.resume()
        }
        var e, h, d, p, g, c = {},
        m = so.dispatch("start", "tick", "end"),
        v = [1, 1],
        y = .9,
        b = Ia,
        x = Ba,
        M = -30,
        w = .1,
        l = .8,
        _ = [],
        E = [];
        return c.tick = function() {
            if ((h *= .99) < .005) return m.end({
                type: "end",
                alpha: h = 0
            }),
            !0;
            var t, e, n, r, i, o, a, u, s, l = _.length,
            c = E.length;
            for (e = 0; e < c; ++e) r = (n = E[e]).source,
            (o = (u = (i = n.target).x - r.x) * u + (s = i.y - r.y) * s) && (u *= o = h * p[e] * ((o = Math.sqrt(o)) - d[e]) / o, s *= o, i.x -= u * (a = r.weight / (i.weight + r.weight)), i.y -= s * a, r.x += u * (a = 1 - a), r.y += s * a);
            if ((a = h * w) && (u = v[0] / 2, s = v[1] / 2, e = -1, a)) for (; ++e < l;)(n = _[e]).x += (u - n.x) * a,
            n.y += (s - n.y) * a;
            if (M) for (Yn(t = so.geom.quadtree(_), h, g), e = -1; ++e < l;)(n = _[e]).fixed || t.visit(f(n));
            for (e = -1; ++e < l;)(n = _[e]).fixed ? (n.x = n.px, n.y = n.py) : (n.x -= (n.px - (n.px = n.x)) * y, n.y -= (n.py - (n.py = n.y)) * y);
            m.tick({
                type: "tick",
                alpha: h
            })
        },
        c.nodes = function(t) {
            return arguments.length ? (_ = t, c) : _
        },
        c.links = function(t) {
            return arguments.length ? (E = t, c) : E
        },
        c.size = function(t) {
            return arguments.length ? (v = t, c) : v
        },
        c.linkDistance = function(t) {
            return arguments.length ? (b = "function" == typeof t ? t: +t, c) : b
        },
        c.distance = c.linkDistance,
        c.linkStrength = function(t) {
            return arguments.length ? (x = "function" == typeof t ? t: +t, c) : x
        },
        c.friction = function(t) {
            return arguments.length ? (y = +t, c) : y
        },
        c.charge = function(t) {
            return arguments.length ? (M = "function" == typeof t ? t: +t, c) : M
        },
        c.gravity = function(t) {
            return arguments.length ? (w = +t, c) : w
        },
        c.theta = function(t) {
            return arguments.length ? (l = +t, c) : l
        },
        c.alpha = function(t) {
            return arguments.length ? (t = +t, h ? h = 0 < t ? t: 0 : 0 < t && (m.start({
                type: "start",
                alpha: h = t
            }), so.timer(c.tick)), c) : h
        },
        c.start = function() {
            function t(t, e) {
                for (var n, r = a(u), i = -1, o = r.length; ++i < o;) if (!isNaN(n = r[i][t])) return n;
                return Math.random() * e
            }
            function a() {
                if (!n) {
                    for (n = [], e = 0; e < i; ++e) n[e] = [];
                    for (e = 0; e < o; ++e) {
                        var t = E[e];
                        n[t.source.index].push(t.target),
                        n[t.target.index].push(t.source)
                    }
                }
                return n[u]
            }
            var u, e, n, r, i = _.length,
            o = E.length,
            s = v[0],
            l = v[1];
            for (u = 0; u < i; ++u)(r = _[u]).index = u,
            r.weight = 0;
            for (u = 0; u < o; ++u)"number" == typeof(r = E[u]).source && (r.source = _[r.source]),
            "number" == typeof r.target && (r.target = _[r.target]),
            ++r.source.weight,
            ++r.target.weight;
            for (u = 0; u < i; ++u) r = _[u],
            isNaN(r.x) && (r.x = t("x", s)),
            isNaN(r.y) && (r.y = t("y", l)),
            isNaN(r.px) && (r.px = r.x),
            isNaN(r.py) && (r.py = r.y);
            if (d = [], "function" == typeof b) for (u = 0; u < o; ++u) d[u] = +b.call(this, E[u], u);
            else for (u = 0; u < o; ++u) d[u] = b;
            if (p = [], "function" == typeof x) for (u = 0; u < o; ++u) p[u] = +x.call(this, E[u], u);
            else for (u = 0; u < o; ++u) p[u] = x;
            if (g = [], "function" == typeof M) for (u = 0; u < i; ++u) g[u] = +M.call(this, _[u], u);
            else for (u = 0; u < i; ++u) g[u] = M;
            return c.resume()
        },
        c.resume = function() {
            return c.alpha(.1)
        },
        c.stop = function() {
            return c.alpha(0)
        },
        c.drag = function() {
            if (e || (e = so.behavior.drag().origin(ft).on("dragstart.force", Bn).on("drag.force", t).on("dragend.force", Wn)), !arguments.length) return e;
            this.on("mouseover.force", Un).on("mouseout.force", Xn).call(e)
        },
        so.rebind(c, m, "on")
    };
    var Ia = 20,
    Ba = 1;
    so.layout.hierarchy = function() {
        function c(t, e, n) {
            var r = d.call(f, t, e);
            if (t.depth = e, n.push(t), r && (i = r.length)) {
                for (var i, o, a = -1,
                u = t.children = [], s = 0, l = e + 1; ++a < i;)(o = c(r[a], l, n)).parent = t,
                u.push(o),
                s += o.value;
                h && u.sort(h),
                p && (t.value = s)
            } else p && (t.value = +p.call(f, t, e) || 0);
            return t
        }
        function u(t, e) {
            var n = t.children,
            r = 0;
            if (n && (i = n.length)) for (var i, o = -1,
            a = e + 1; ++o < i;) r += u(n[o], a);
            else p && (r = +p.call(f, t, e) || 0);
            return p && (t.value = r),
            r
        }
        function f(t) {
            var e = [];
            return c(t, 0, e),
            e
        }
        var h = Zn,
        d = Gn,
        p = Jn;
        return f.sort = function(t) {
            return arguments.length ? (h = t, f) : h
        },
        f.children = function(t) {
            return arguments.length ? (d = t, f) : d
        },
        f.value = function(t) {
            return arguments.length ? (p = t, f) : p
        },
        f.revalue = function(t) {
            return u(t, 0),
            t
        },
        f
    },
    so.layout.partition = function() {
        function l(t, e, n, r) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * r, t.dx = n, t.dy = r, i && (o = i.length)) {
                var o, a, u, s = -1;
                for (n = t.value ? n / t.value: 0; ++s < o;) l(a = i[s], e, u = a.value * n, r),
                e += u
            }
        }
        function o(t) {
            var e = t.children,
            n = 0;
            if (e && (r = e.length)) for (var r, i = -1; ++i < r;) n = Math.max(n, o(e[i]));
            return 1 + n
        }
        function e(t, e) {
            var n = r.call(this, t, e);
            return l(n[0], 0, i[0], i[1] / o(n[0])),
            n
        }
        var r = so.layout.hierarchy(),
        i = [1, 1];
        return e.size = function(t) {
            return arguments.length ? (i = t, e) : i
        },
        Vn(e, r)
    },
    so.layout.pie = function() {
        function u(n) {
            var r = n.map(function(t, e) {
                return + s.call(u, t, e)
            }),
            i = +("function" == typeof e ? e.apply(this, arguments) : e),
            o = (("function" == typeof c ? c.apply(this, arguments) : c) - i) / so.sum(r),
            t = so.range(n.length);
            null != l && t.sort(l === Wa ?
            function(t, e) {
                return r[e] - r[t]
            }: function(t, e) {
                return l(n[t], n[e])
            });
            var a = [];
            return t.forEach(function(t) {
                var e;
                a[t] = {
                    data: n[t],
                    value: e = r[t],
                    startAngle: i,
                    endAngle: i += e * o
                }
            }),
            a
        }
        var s = Number,
        l = Wa,
        e = 0,
        c = 2 * Ho;
        return u.value = function(t) {
            return arguments.length ? (s = t, u) : s
        },
        u.sort = function(t) {
            return arguments.length ? (l = t, u) : l
        },
        u.startAngle = function(t) {
            return arguments.length ? (e = t, u) : e
        },
        u.endAngle = function(t) {
            return arguments.length ? (c = t, u) : c
        },
        u
    };
    var Wa = {};
    so.layout.stack = function() {
        function f(t, e) {
            var n = t.map(function(t, e) {
                return h.call(f, t, e)
            }),
            r = n.map(function(t) {
                return t.map(function(t, e) {
                    return [m.call(f, t, e), v.call(f, t, e)]
                })
            }),
            i = d.call(f, r, e);
            n = so.permute(n, i),
            r = so.permute(r, i);
            var o, a, u, s = p.call(f, r, e),
            l = n.length,
            c = n[0].length;
            for (a = 0; a < c; ++a) for (g.call(f, n[0][a], u = s[a], r[0][a][1]), o = 1; o < l; ++o) g.call(f, n[o][a], u += r[o - 1][a][1], r[o][a][1]);
            return t
        }
        var h = ft,
        d = nr,
        p = rr,
        g = er,
        m = Qn,
        v = tr;
        return f.values = function(t) {
            return arguments.length ? (h = t, f) : h
        },
        f.order = function(t) {
            return arguments.length ? (d = "function" == typeof t ? t: Ua.get(t) || nr, f) : d
        },
        f.offset = function(t) {
            return arguments.length ? (p = "function" == typeof t ? t: Xa.get(t) || rr, f) : p
        },
        f.x = function(t) {
            return arguments.length ? (m = t, f) : m
        },
        f.y = function(t) {
            return arguments.length ? (v = t, f) : v
        },
        f.out = function(t) {
            return arguments.length ? (g = t, f) : g
        },
        f
    };
    var Ua = so.map({
        "inside-out": function(t) {
            var e, n, r = t.length,
            i = t.map(ir),
            o = t.map(or),
            a = so.range(r).sort(function(t, e) {
                return i[t] - i[e]
            }),
            u = 0,
            s = 0,
            l = [],
            c = [];
            for (e = 0; e < r; ++e) n = a[e],
            u < s ? (u += o[n], l.push(n)) : (s += o[n], c.push(n));
            return c.reverse().concat(l)
        },
        reverse: function(t) {
            return so.range(t.length).reverse()
        },
        "default": nr
    }),
    Xa = so.map({
        silhouette: function(t) {
            var e, n, r, i = t.length,
            o = t[0].length,
            a = [],
            u = 0,
            s = [];
            for (n = 0; n < o; ++n) {
                for (r = e = 0; e < i; e++) r += t[e][n][1];
                u < r && (u = r),
                a.push(r)
            }
            for (n = 0; n < o; ++n) s[n] = (u - a[n]) / 2;
            return s
        },
        wiggle: function(t) {
            var e, n, r, i, o, a, u, s, l, c = t.length,
            f = t[0],
            h = f.length,
            d = [];
            for (d[0] = s = l = 0, n = 1; n < h; ++n) {
                for (i = e = 0; e < c; ++e) i += t[e][n][1];
                for (o = e = 0, u = f[n][0] - f[n - 1][0]; e < c; ++e) {
                    for (r = 0, a = (t[e][n][1] - t[e][n - 1][1]) / (2 * u); r < e; ++r) a += (t[r][n][1] - t[r][n - 1][1]) / u;
                    o += a * t[e][n][1]
                }
                d[n] = s -= i ? o / i * u: 0,
                s < l && (l = s)
            }
            for (n = 0; n < h; ++n) d[n] -= l;
            return d
        },
        expand: function(t) {
            var e, n, r, i = t.length,
            o = t[0].length,
            a = 1 / i,
            u = [];
            for (n = 0; n < o; ++n) {
                for (r = e = 0; e < i; e++) r += t[e][n][1];
                if (r) for (e = 0; e < i; e++) t[e][n][1] /= r;
                else for (e = 0; e < i; e++) t[e][n][1] = a
            }
            for (n = 0; n < o; ++n) u[n] = 0;
            return u
        },
        zero: rr
    });
    so.layout.histogram = function() {
        function n(t, e) {
            for (var n, r, i = [], o = t.map(h, this), a = d.call(this, o, e), u = p.call(this, a, o, e), s = (e = -1, o.length), l = u.length - 1, c = f ? 1 : 1 / s; ++e < l;)(n = i[e] = []).dx = u[e + 1] - (n.x = u[e]),
            n.y = 0;
            if (0 < l) for (e = -1; ++e < s;)(r = o[e]) >= a[0] && r <= a[1] && ((n = i[so.bisect(u, r, 1, l) - 1]).y += c, n.push(t[e]));
            return i
        }
        var f = !0,
        h = Number,
        d = lr,
        p = ur;
        return n.value = function(t) {
            return arguments.length ? (h = t, n) : h
        },
        n.range = function(t) {
            return arguments.length ? (d = ct(t), n) : d
        },
        n.bins = function(e) {
            return arguments.length ? (p = "number" == typeof e ?
            function(t) {
                return sr(t, e)
            }: ct(e), n) : p
        },
        n.frequency = function(t) {
            return arguments.length ? (f = !!t, n) : f
        },
        n
    },
    so.layout.tree = function() {
        function e(t, e) {
            function f(t, e) {
                var n = t.children,
                r = t._tree;
                if (n && (i = n.length)) {
                    for (var i, o, a, u = n[0], s = u, l = -1; ++l < i;) f(a = n[l], o),
                    s = h(a, o, s),
                    o = a;
                    yr(t);
                    var c = .5 * (u._tree.prelim + a._tree.prelim);
                    e ? (r.prelim = e._tree.prelim + p(t, e), r.mod = r.prelim - c) : r.prelim = c
                } else e && (r.prelim = e._tree.prelim + p(t, e))
            }
            function o(t, e) {
                t.x = t._tree.prelim + e;
                var n = t.children;
                if (n && (r = n.length)) {
                    var r, i = -1;
                    for (e += t._tree.mod; ++i < r;) o(n[i], e)
                }
            }
            function h(t, e, n) {
                if (e) {
                    for (var r, i = t,
                    o = t,
                    a = e,
                    u = t.parent.children[0], s = i._tree.mod, l = o._tree.mod, c = a._tree.mod, f = u._tree.mod; a = hr(a), i = fr(i), a && i;) u = fr(u),
                    (o = hr(o))._tree.ancestor = t,
                    0 < (r = a._tree.prelim + c - i._tree.prelim - s + p(a, i)) && (br(xr(a, t, n), t, r), s += r, l += r),
                    c += a._tree.mod,
                    s += i._tree.mod,
                    f += u._tree.mod,
                    l += o._tree.mod;
                    a && !hr(o) && (o._tree.thread = a, o._tree.mod += c - l),
                    i && !fr(u) && (u._tree.thread = i, u._tree.mod += s - f, n = t)
                }
                return n
            }
            var n = d.call(this, t, e),
            r = n[0];
            vr(r,
            function(t, e) {
                t._tree = {
                    ancestor: t,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: e ? e._tree.number + 1 : 0
                }
            }),
            f(r),
            o(r, -r._tree.prelim);
            var i = dr(r, gr),
            a = dr(r, pr),
            u = dr(r, mr),
            s = i.x - p(i, a) / 2,
            l = a.x + p(a, i) / 2,
            c = u.depth || 1;
            return vr(r,
            function(t) {
                t.x = (t.x - s) / (l - s) * g[0],
                t.y = t.depth / c * g[1],
                delete t._tree
            }),
            n
        }
        var d = so.layout.hierarchy().sort(null).value(null),
        p = cr,
        g = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (p = t, e) : p
        },
        e.size = function(t) {
            return arguments.length ? (g = t, e) : g
        },
        Vn(e, d)
    },
    so.layout.pack = function() {
        function e(t, e) {
            var n = s.call(this, t, e),
            r = n[0];
            r.x = 0,
            r.y = 0,
            vr(r,
            function(t) {
                t.r = Math.sqrt(t.value)
            }),
            vr(r, kr);
            var i = c[0],
            o = c[1],
            a = Math.max(2 * r.r / i, 2 * r.r / o);
            if (0 < l) {
                var u = l * a / 2;
                vr(r,
                function(t) {
                    t.r += u
                }),
                vr(r, kr),
                vr(r,
                function(t) {
                    t.r -= u
                }),
                a = Math.max(2 * r.r / i, 2 * r.r / o)
            }
            return Cr(r, i / 2, o / 2, 1 / a),
            n
        }
        var s = so.layout.hierarchy().sort(Mr),
        l = 0,
        c = [1, 1];
        return e.size = function(t) {
            return arguments.length ? (c = t, e) : c
        },
        e.padding = function(t) {
            return arguments.length ? (l = +t, e) : l
        },
        Vn(e, s)
    },
    so.layout.cluster = function() {
        function e(t, e) {
            var n, r = c.call(this, t, e),
            i = r[0],
            o = 0;
            vr(i,
            function(t) {
                var e = t.children;
                e && e.length ? (t.x = jr(e), t.y = Ar(e)) : (t.x = n ? o += f(t, n) : 0, t.y = 0, n = t)
            });
            var a = Dr(i),
            u = qr(i),
            s = a.x - f(a, u) / 2,
            l = u.x + f(u, a) / 2;
            return vr(i,
            function(t) {
                t.x = (t.x - s) / (l - s) * h[0],
                t.y = (1 - (i.y ? t.y / i.y: 1)) * h[1]
            }),
            r
        }
        var c = so.layout.hierarchy().sort(null).value(null),
        f = cr,
        h = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (f = t, e) : f
        },
        e.size = function(t) {
            return arguments.length ? (h = t, e) : h
        },
        Vn(e, c)
    },
    so.layout.treemap = function() {
        function c(t, e) {
            for (var n, r, i = -1,
            o = t.length; ++i < o;) r = (n = t[i]).value * (e < 0 ? 0 : e),
            n.area = isNaN(r) || r <= 0 ? 0 : r
        }
        function f(t) {
            var e = t.children;
            if (e && e.length) {
                var n, r, i, o = g(t),
                a = [],
                u = e.slice(),
                s = Infinity,
                l = "slice" === m ? o.dx: "dice" === m ? o.dy: "slice-dice" === m ? 1 & t.depth ? o.dy: o.dx: Math.min(o.dx, o.dy);
                for (c(u, o.dx * o.dy / t.value), a.area = 0; 0 < (i = u.length);) a.push(n = u[i - 1]),
                a.area += n.area,
                "squarify" !== m || (r = h(a, l)) <= s ? (u.pop(), s = r) : (a.area -= a.pop().area, d(a, l, o, !1), l = Math.min(o.dx, o.dy), a.length = a.area = 0, s = Infinity);
                a.length && (d(a, l, o, !0), a.length = a.area = 0),
                e.forEach(f)
            }
        }
        function a(t) {
            var e = t.children;
            if (e && e.length) {
                var n, r = g(t),
                i = e.slice(),
                o = [];
                for (c(i, r.dx * r.dy / t.value), o.area = 0; n = i.pop();) o.push(n),
                o.area += n.area,
                null != n.z && (d(o, n.z ? r.dx: r.dy, r, !i.length), o.length = o.area = 0);
                e.forEach(a)
            }
        }
        function h(t, e) {
            for (var n, r = t.area,
            i = 0,
            o = Infinity,
            a = -1,
            u = t.length; ++a < u;)(n = t[a].area) && (n < o && (o = n), i < n && (i = n));
            return e *= e,
            (r *= r) ? Math.max(e * i * v / r, r / (e * o * v)) : Infinity
        }
        function d(t, e, n, r) {
            var i, o = -1,
            a = t.length,
            u = n.x,
            s = n.y,
            l = e ? p(t.area / e) : 0;
            if (e == n.dx) {
                for ((r || l > n.dy) && (l = n.dy); ++o < a;)(i = t[o]).x = u,
                i.y = s,
                i.dy = l,
                u += i.dx = Math.min(n.x + n.dx - u, l ? p(i.area / l) : 0);
                i.z = !0,
                i.dx += n.x + n.dx - u,
                n.y += l,
                n.dy -= l
            } else {
                for ((r || l > n.dx) && (l = n.dx); ++o < a;)(i = t[o]).x = u,
                i.y = s,
                i.dx = l,
                s += i.dy = Math.min(n.y + n.dy - s, l ? p(i.area / l) : 0);
                i.z = !1,
                i.dy += n.y + n.dy - s,
                n.x += l,
                n.dx -= l
            }
        }
        function i(t) {
            var e = r || o(t),
            n = e[0];
            return n.x = 0,
            n.y = 0,
            n.dx = u[0],
            n.dy = u[1],
            r && o.revalue(n),
            c([n], n.dx * n.dy / n.value),
            (r ? a: f)(n),
            l && (r = e),
            e
        }
        var r, o = so.layout.hierarchy(),
        p = Math.round,
        u = [1, 1],
        s = null,
        g = Lr,
        l = !1,
        m = "squarify",
        v = .5 * (1 + Math.sqrt(5));
        return i.size = function(t) {
            return arguments.length ? (u = t, i) : u
        },
        i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Lr(t) : Hr(t, "number" == typeof e ? [e, e, e, e] : e)
            }
            function e(t) {
                return Hr(t, n)
            }
            return arguments.length ? (g = null == (s = n) ? Lr: "function" == (r = typeof n) ? t: ("number" === r && (n = [n, n, n, n]), e), i) : s;
            var r
        }, i.round = function(t) {
            return arguments.length ? (p = t ? Math.round: Number, i) : p != Number
        },
        i.sticky = function(t) {
            return arguments.length ? (l = t, r = null, i) : l
        },
        i.ratio = function(t) {
            return arguments.length ? (v = t, i) : v
        },
        i.mode = function(t) {
            return arguments.length ? (m = t + "", i) : m
        },
        Vn(i, o)
    },
    so.random = {
        normal: function(r, i) {
            var t = arguments.length;
            return t < 2 && (i = 1),
            t < 1 && (r = 0),
            function() {
                for (var t, e, n; ! (n = (t = 2 * Math.random() - 1) * t + (e = 2 * Math.random() - 1) * e) || 1 < n;);
                return r + i * t * Math.sqrt( - 2 * Math.log(n) / n)
            }
        },
        logNormal: function() {
            var t = so.random.normal.apply(so, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0,
                e = 0; e < n; e++) t += Math.random();
                return t / n
            }
        }
    },
    so.scale = {},
    so.scale.linear = function() {
        return $r([0, 1], [0, 1], yn, !1)
    },
    so.scale.log = function() {
        return Yr(so.scale.linear().domain([0, Math.LN10]), 10, Vr, Gr)
    };
    var Ya = so.format(".0e");
    so.scale.pow = function() {
        return Qr(so.scale.linear(), 1)
    },
    so.scale.sqrt = function() {
        return so.scale.pow().exponent(.5)
    },
    so.scale.ordinal = function() {
        return ei([], {
            t: "range",
            a: [[]]
        })
    },
    so.scale.category10 = function() {
        return so.scale.ordinal().range(Va)
    },
    so.scale.category20 = function() {
        return so.scale.ordinal().range(Ga)
    },
    so.scale.category20b = function() {
        return so.scale.ordinal().range(Ja)
    },
    so.scale.category20c = function() {
        return so.scale.ordinal().range(Za)
    };
    var Va = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
    Ga = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
    Ja = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
    Za = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    so.scale.quantile = function() {
        return ni([], [])
    },
    so.scale.quantize = function() {
        return ri(0, 1, [0, 1])
    },
    so.scale.threshold = function() {
        return ii([.5], [0, 1])
    },
    so.scale.identity = function() {
        return oi([0, 1])
    },
    so.svg.arc = function() {
        function e() {
            var t = c.apply(this, arguments),
            e = f.apply(this, arguments),
            n = h.apply(this, arguments) + Ka,
            r = d.apply(this, arguments) + Ka,
            i = (r < n && (i = n, n = r, r = i), r - n),
            o = i < Ho ? "0": "1",
            a = Math.cos(n),
            u = Math.sin(n),
            s = Math.cos(r),
            l = Math.sin(r);
            return Qa <= i ? t ? "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z": "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z": t ? "M" + e * a + "," + e * u + "A" + e + "," + e + " 0 " + o + ",1 " + e * s + "," + e * l + "L" + t * s + "," + t * l + "A" + t + "," + t + " 0 " + o + ",0 " + t * a + "," + t * u + "Z": "M" + e * a + "," + e * u + "A" + e + "," + e + " 0 " + o + ",1 " + e * s + "," + e * l + "L0,0Z"
        }
        var c = ai,
        f = ui,
        h = si,
        d = li;
        return e.innerRadius = function(t) {
            return arguments.length ? (c = ct(t), e) : c
        },
        e.outerRadius = function(t) {
            return arguments.length ? (f = ct(t), e) : f
        },
        e.startAngle = function(t) {
            return arguments.length ? (h = ct(t), e) : h
        },
        e.endAngle = function(t) {
            return arguments.length ? (d = ct(t), e) : d
        },
        e.centroid = function() {
            var t = (c.apply(this, arguments) + f.apply(this, arguments)) / 2,
            e = (h.apply(this, arguments) + d.apply(this, arguments)) / 2 + Ka;
            return [Math.cos(e) * t, Math.sin(e) * t]
        },
        e
    };
    var Ka = -Ho / 2,
    Qa = 2 * Ho - 1e-6;
    so.svg.line.radial = function() {
        var t = De(ci);
        return t.radius = t.x,
        delete t.x,
        t.angle = t.y,
        delete t.y,
        t
    },
    (Re.reverse = Oe).reverse = Re,
    so.svg.area = function() {
        return fi(ft)
    },
    so.svg.area.radial = function() {
        var t = fi(ci);
        return t.radius = t.x,
        delete t.x,
        t.innerRadius = t.x0,
        delete t.x0,
        t.outerRadius = t.x1,
        delete t.x1,
        t.angle = t.y,
        delete t.y,
        t.startAngle = t.y0,
        delete t.y0,
        t.endAngle = t.y1,
        delete t.y1,
        t
    },
    so.svg.chord = function() {
        function e(t, e) {
            var n = i(this, s, t, e),
            r = i(this, l, t, e);
            return "M" + n.p0 + a(n.r, n.p1, n.a1 - n.a0) + (o(n, r) ? u(n.r, n.p1, n.r, n.p0) : u(n.r, n.p1, r.r, r.p0) + a(r.r, r.p1, r.a1 - r.a0) + u(r.r, r.p1, n.r, n.p0)) + "Z"
        }
        function i(t, e, n, r) {
            var i = e.call(t, n, r),
            o = c.call(t, i, r),
            a = f.call(t, i, r) + Ka,
            u = h.call(t, i, r) + Ka;
            return {
                r: o,
                a0: a,
                a1: u,
                p0: [o * Math.cos(a), o * Math.sin(a)],
                p1: [o * Math.cos(u), o * Math.sin(u)]
            }
        }
        function o(t, e) {
            return t.a0 == e.a0 && t.a1 == e.a1
        }
        function a(t, e, n) {
            return "A" + t + "," + t + " 0 " + +(Ho < n) + ",1 " + e
        }
        function u(t, e, n, r) {
            return "Q 0,0 " + r
        }
        var s = ce,
        l = fe,
        c = hi,
        f = si,
        h = li;
        return e.radius = function(t) {
            return arguments.length ? (c = ct(t), e) : c
        },
        e.source = function(t) {
            return arguments.length ? (s = ct(t), e) : s
        },
        e.target = function(t) {
            return arguments.length ? (l = ct(t), e) : l
        },
        e.startAngle = function(t) {
            return arguments.length ? (f = ct(t), e) : f
        },
        e.endAngle = function(t) {
            return arguments.length ? (h = ct(t), e) : h
        },
        e
    },
    so.svg.diagonal = function() {
        function e(t, e) {
            var n = a.call(this, t, e),
            r = u.call(this, t, e),
            i = (n.y + r.y) / 2,
            o = [n, {
                x: n.x,
                y: i
            },
            {
                x: r.x,
                y: i
            },
            r];
            return "M" + (o = o.map(s))[0] + "C" + o[1] + " " + o[2] + " " + o[3]
        }
        var a = ce,
        u = fe,
        s = di;
        return e.source = function(t) {
            return arguments.length ? (a = ct(t), e) : a
        },
        e.target = function(t) {
            return arguments.length ? (u = ct(t), e) : u
        },
        e.projection = function(t) {
            return arguments.length ? (s = t, e) : s
        },
        e
    },
    so.svg.diagonal.radial = function() {
        var t = so.svg.diagonal(),
        e = di,
        n = t.projection;
        return t.projection = function(t) {
            return arguments.length ? n(pi(e = t)) : e
        },
        t
    },
    so.svg.symbol = function() {
        function e(t, e) {
            return (tu.get(n.call(this, t, e)) || vi)(r.call(this, t, e))
        }
        var n = mi,
        r = gi;
        return e.type = function(t) {
            return arguments.length ? (n = ct(t), e) : n
        },
        e.size = function(t) {
            return arguments.length ? (r = ct(t), e) : r
        },
        e
    };
    var tu = so.map({
        circle: vi,
        cross: function(t) {
            var e = Math.sqrt(t / 5) / 2;
            return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
        },
        diamond: function(t) {
            var e = Math.sqrt(t / (2 * ru)),
            n = e * ru;
            return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
        },
        square: function(t) {
            var e = Math.sqrt(t) / 2;
            return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
        },
        "triangle-down": function(t) {
            var e = Math.sqrt(t / nu),
            n = e * nu / 2;
            return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
        },
        "triangle-up": function(t) {
            var e = Math.sqrt(t / nu),
            n = e * nu / 2;
            return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
        }
    });
    so.svg.symbolTypes = tu.keys();
    var eu, nu = Math.sqrt(3),
    ru = Math.tan(30 * Ro),
    iu = [],
    ou = 0,
    au = {
        ease: Sn,
        delay: 0,
        duration: 250
    };
    iu.call = ko.call,
    iu.empty = ko.empty,
    iu.node = ko.node,
    so.transition = function(t) {
        return arguments.length ? eu ? t.transition() : t: Ao.transition()
    },
    (so.transition.prototype = iu).select = function(t) {
        var e, n, r, i = this.id,
        o = [];
        "function" != typeof t && (t = d(t));
        for (var a = -1,
        u = this.length; ++a < u;) {
            o.push(e = []);
            for (var s = this[a], l = -1, c = s.length; ++l < c;)(r = s[l]) && (n = t.call(r, r.__data__, l)) ? ("__data__" in r && (n.__data__ = r.__data__), Mi(n, l, i, r.__transition__[i]), e.push(n)) : e.push(null)
        }
        return yi(o, i)
    },
    iu.selectAll = function(t) {
        var e, n, r, i, o, a = this.id,
        u = [];
        "function" != typeof t && (t = g(t));
        for (var s = -1,
        l = this.length; ++s < l;) for (var c = this[s], f = -1, h = c.length; ++f < h;) if (r = c[f]) {
            o = r.__transition__[a],
            n = t.call(r, r.__data__, f),
            u.push(e = []);
            for (var d = -1,
            p = n.length; ++d < p;) Mi(i = n[d], d, a, o),
            e.push(i)
        }
        return yi(u, a)
    },
    iu.filter = function(t) {
        var e, n, r = [];
        "function" != typeof t && (t = S(t));
        for (var i = 0,
        o = this.length; i < o; i++) {
            r.push(e = []);
            for (var a, u = 0,
            s = (a = this[i]).length; u < s; u++)(n = a[u]) && t.call(n, n.__data__, u) && e.push(n)
        }
        return yi(r, this.id, this.time).ease(this.ease())
    },
    iu.tween = function(e, n) {
        var r = this.id;
        return arguments.length < 2 ? this.node().__transition__[r].tween.get(e) : L(this, null == n ?
        function(t) {
            t.__transition__[r].tween.remove(e)
        }: function(t) {
            t.__transition__[r].tween.set(e, n)
        })
    },
    iu.attr = function(t, e) {
        function r() {
            this.removeAttribute(u)
        }
        function i() {
            this.removeAttributeNS(u.space, u.local)
        }
        function n(n) {
            return null == n ? r: (n += "",
            function() {
                var e, t = this.getAttribute(u);
                return t !== n && (e = a(t, n),
                function(t) {
                    this.setAttribute(u, e(t))
                })
            })
        }
        function o(n) {
            return null == n ? i: (n += "",
            function() {
                var e, t = this.getAttributeNS(u.space, u.local);
                return t !== n && (e = a(t, n),
                function(t) {
                    this.setAttributeNS(u.space, u.local, e(t))
                })
            })
        }
        if (arguments.length < 2) {
            for (e in t) this.attr(e, t[e]);
            return this
        }
        var a = bn(t),
        u = so.ns.qualify(t);
        return bi(this, "attr." + t, e, u.local ? o: n)
    },
    iu.attrTween = function(t, r) {
        function e(t, e) {
            var n = r.call(this, t, e, this.getAttribute(i));
            return n &&
            function(t) {
                this.setAttribute(i, n(t))
            }
        }
        function n(t, e) {
            var n = r.call(this, t, e, this.getAttributeNS(i.space, i.local));
            return n &&
            function(t) {
                this.setAttributeNS(i.space, i.local, n(t))
            }
        }
        var i = so.ns.qualify(t);
        return this.tween("attr." + t, i.local ? n: e)
    },
    iu.style = function(r, t, i) {
        function e() {
            this.style.removeProperty(r)
        }
        function n(n) {
            return null == n ? e: (n += "",
            function() {
                var e, t = co.getComputedStyle(this, null).getPropertyValue(r);
                return t !== n && (e = a(t, n),
                function(t) {
                    this.style.setProperty(r, e(t), i)
                })
            })
        }
        var o = arguments.length;
        if (o < 3) {
            if ("string" != typeof r) {
                for (i in o < 2 && (t = ""), r) this.style(i, r[i], t);
                return this
            }
            i = ""
        }
        var a = bn(r);
        return bi(this, "style." + r, t, n)
    },
    iu.styleTween = function(r, i, o) {
        function t(t, e) {
            var n = i.call(this, t, e, co.getComputedStyle(this, null).getPropertyValue(r));
            return n &&
            function(t) {
                this.style.setProperty(r, n(t), o)
            }
        }
        return arguments.length < 3 && (o = ""),
        this.tween("style." + r, t)
    },
    iu.text = function(t) {
        return bi(this, "text", t, xi)
    },
    iu.remove = function() {
        return this.each("end.transition",
        function() {
            var t; ! this.__transition__ && (t = this.parentNode) && t.removeChild(this)
        })
    },
    iu.ease = function(e) {
        var n = this.id;
        return arguments.length < 1 ? this.node().__transition__[n].ease: ("function" != typeof e && (e = so.ease.apply(so, arguments)), L(this,
        function(t) {
            t.__transition__[n].ease = e
        }))
    },
    iu.delay = function(r) {
        var i = this.id;
        return L(this, "function" == typeof r ?
        function(t, e, n) {
            t.__transition__[i].delay = 0 | r.call(t, t.__data__, e, n)
        }: (r |= 0,
        function(t) {
            t.__transition__[i].delay = r
        }))
    },
    iu.duration = function(r) {
        var i = this.id;
        return L(this, "function" == typeof r ?
        function(t, e, n) {
            t.__transition__[i].duration = Math.max(1, 0 | r.call(t, t.__data__, e, n))
        }: (r = Math.max(1, 0 | r),
        function(t) {
            t.__transition__[i].duration = r
        }))
    },
    iu.each = function(r, e) {
        var i = this.id;
        if (arguments.length < 2) {
            var t = au,
            n = eu;
            eu = i,
            L(this,
            function(t, e, n) {
                au = t.__transition__[i],
                r.call(t, t.__data__, e, n)
            }),
            au = t,
            eu = n
        } else L(this,
        function(t) {
            t.__transition__[i].event.on(r, e)
        });
        return this
    },
    iu.transition = function() {
        for (var t, e, n, r = this.id,
        i = ++ou,
        o = [], a = 0, u = this.length; a < u; a++) {
            o.push(t = []);
            for (var s, l = 0,
            c = (s = this[a]).length; l < c; l++)(e = s[l]) && ((n = Object.create(e.__transition__[r])).delay += n.duration, Mi(e, l, i, n)),
            t.push(e)
        }
        return yi(o, i)
    },
    so.svg.axis = function() {
        function r(t) {
            t.each(function() {
                var t, e = so.select(this),
                n = null == q ? S.ticks ? S.ticks.apply(S, D) : S.domain() : q,
                r = null == k ? S.tickFormat ? S.tickFormat.apply(S, D) : String: k,
                i = Ei(S, n, L),
                o = e.selectAll(".tick.minor").data(i, String),
                a = o.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6),
                u = so.transition(o.exit()).style("opacity", 1e-6).remove(),
                s = so.transition(o).style("opacity", 1),
                l = e.selectAll(".tick.major").data(n, String),
                c = l.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6),
                f = so.transition(l.exit()).style("opacity", 1e-6).remove(),
                h = so.transition(l).style("opacity", 1),
                d = Rr(S),
                p = e.selectAll(".domain").data([0]),
                g = (p.enter().append("path").attr("class", "domain"), so.transition(p)),
                m = S.copy(),
                v = this.__chart__ || m;
                this.__chart__ = m,
                c.append("line"),
                c.append("text");
                var y = c.select("line"),
                b = h.select("line"),
                x = l.select("text").text(r),
                M = c.select("text"),
                w = h.select("text");
                switch (T) {
                case "bottom":
                    t = wi,
                    a.attr("y2", N),
                    s.attr("x2", 0).attr("y2", N),
                    y.attr("y2", C),
                    M.attr("y", Math.max(C, 0) + j),
                    b.attr("x2", 0).attr("y2", C),
                    w.attr("x", 0).attr("y", Math.max(C, 0) + j),
                    x.attr("dy", ".71em").style("text-anchor", "middle"),
                    g.attr("d", "M" + d[0] + "," + A + "V0H" + d[1] + "V" + A);
                    break;
                case "top":
                    t = wi,
                    a.attr("y2", -N),
                    s.attr("x2", 0).attr("y2", -N),
                    y.attr("y2", -C),
                    M.attr("y", -(Math.max(C, 0) + j)),
                    b.attr("x2", 0).attr("y2", -C),
                    w.attr("x", 0).attr("y", -(Math.max(C, 0) + j)),
                    x.attr("dy", "0em").style("text-anchor", "middle"),
                    g.attr("d", "M" + d[0] + "," + -A + "V0H" + d[1] + "V" + -A);
                    break;
                case "left":
                    t = _i,
                    a.attr("x2", -N),
                    s.attr("x2", -N).attr("y2", 0),
                    y.attr("x2", -C),
                    M.attr("x", -(Math.max(C, 0) + j)),
                    b.attr("x2", -C).attr("y2", 0),
                    w.attr("x", -(Math.max(C, 0) + j)).attr("y", 0),
                    x.attr("dy", ".32em").style("text-anchor", "end"),
                    g.attr("d", "M" + -A + "," + d[0] + "H0V" + d[1] + "H" + -A);
                    break;
                case "right":
                    t = _i,
                    a.attr("x2", N),
                    s.attr("x2", N).attr("y2", 0),
                    y.attr("x2", C),
                    M.attr("x", Math.max(C, 0) + j),
                    b.attr("x2", C).attr("y2", 0),
                    w.attr("x", Math.max(C, 0) + j).attr("y", 0),
                    x.attr("dy", ".32em").style("text-anchor", "start"),
                    g.attr("d", "M" + A + "," + d[0] + "H0V" + d[1] + "H" + A)
                }
                if (S.ticks) c.call(t, v),
                h.call(t, m),
                f.call(t, m),
                a.call(t, v),
                s.call(t, m),
                u.call(t, m);
                else {
                    var _ = m.rangeBand() / 2,
                    E = function(t) {
                        return m(t) + _
                    };
                    c.call(t, E),
                    h.call(t, E)
                }
            })
        }
        var k, S = so.scale.linear(),
        T = uu,
        C = 6,
        N = 6,
        A = 6,
        j = 3,
        D = [10],
        q = null,
        L = 0;
        return r.scale = function(t) {
            return arguments.length ? (S = t, r) : S
        },
        r.orient = function(t) {
            return arguments.length ? (T = t in su ? t + "": uu, r) : T
        },
        r.ticks = function() {
            return arguments.length ? (D = arguments, r) : D
        },
        r.tickValues = function(t) {
            return arguments.length ? (q = t, r) : q
        },
        r.tickFormat = function(t) {
            return arguments.length ? (k = t, r) : k
        },
        r.tickSize = function(t, e) {
            if (!arguments.length) return C;
            var n = arguments.length - 1;
            return C = +t,
            N = 1 < n ? +e: C,
            A = 0 < n ? +arguments[n] : C,
            r
        },
        r.tickPadding = function(t) {
            return arguments.length ? (j = +t, r) : j
        },
        r.tickSubdivide = function(t) {
            return arguments.length ? (L = +t, r) : L
        },
        r
    };
    var uu = "bottom",
    su = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    so.svg.brush = function() {
        function x(t) {
            t.each(function() {
                var t, e = so.select(this),
                n = e.selectAll(".background").data([0]),
                r = e.selectAll(".extent").data([0]),
                i = e.selectAll(".resize").data(a, String);
                e.style("pointer-events", "all").on("mousedown.brush", o).on("touchstart.brush", o),
                n.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                r.enter().append("rect").attr("class", "extent").style("cursor", "move"),
                i.enter().append("g").attr("class",
                function(t) {
                    return "resize " + t
                }).style("cursor",
                function(t) {
                    return lu[t]
                }).append("rect").attr("x",
                function(t) {
                    return /[ew]$/.test(t) ? -3 : null
                }).attr("y",
                function(t) {
                    return /^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                i.style("display", x.empty() ? "none": null),
                i.exit().remove(),
                S && (t = Rr(S), n.attr("x", t[0]).attr("width", t[1] - t[0]), w(e)),
                T && (t = Rr(T), n.attr("y", t[0]).attr("height", t[1] - t[0]), _(e)),
                M(e)
            })
        }
        function M(t) {
            t.selectAll(".resize").attr("transform",
            function(t) {
                return "translate(" + C[ + /e$/.test(t)][0] + "," + C[ + /^s/.test(t)][1] + ")"
            })
        }
        function w(t) {
            t.select(".extent").attr("x", C[0][0]),
            t.selectAll(".extent,.n>rect,.s>rect").attr("width", C[1][0] - C[0][0])
        }
        function _(t) {
            t.select(".extent").attr("y", C[0][1]),
            t.selectAll(".extent,.e>rect,.w>rect").attr("height", C[1][1] - C[0][1])
        }
        function o() {
            function n() {
                var t = so.event.changedTouches;
                return t ? so.touches(u, t)[0] : so.mouse(u)
            }
            function t() {
                32 == so.event.keyCode && (g || (c = null, m[0] -= C[1][0], m[1] -= C[1][1], g = 2), N())
            }
            function e() {
                32 == so.event.keyCode && 2 == g && (m[0] += C[1][0], m[1] += C[1][1], g = 0, N())
            }
            function r() {
                var t = n(),
                e = !1;
                a && (t[0] += a[0], t[1] += a[1]),
                g || (so.event.altKey ? (c || (c = [(C[0][0] + C[1][0]) / 2, (C[0][1] + C[1][1]) / 2]), m[0] = C[ + (t[0] < c[0])][0], m[1] = C[ + (t[1] < c[1])][1]) : c = null),
                d && i(t, S, 0) && (w(f), e = !0),
                p && i(t, T, 1) && (_(f), e = !0),
                e && (M(f), l({
                    type: "brush",
                    mode: g ? "move": "resize"
                }))
            }
            function i(t, e, n) {
                var r, i, o = Rr(e),
                a = o[0],
                u = o[1],
                s = m[n],
                l = C[1][n] - C[0][n];
                if (g && (a -= s, u -= l + s), r = Math.max(a, Math.min(u, t[n])), g ? i = (r += s) + l: (c && (s = Math.max(a, Math.min(u, 2 * c[n] - r))), s < r ? (i = r, r = s) : i = s), C[0][n] !== r || C[1][n] !== i) return E = null,
                C[0][n] = r,
                C[1][n] = i,
                !0
            }
            function o() {
                r(),
                f.style("pointer-events", "all").selectAll(".resize").style("display", x.empty() ? "none": null),
                so.select("body").style("cursor", null),
                v.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null),
                l({
                    type: "brushend"
                }),
                N()
            }
            var c, a, u = this,
            s = so.select(so.event.target),
            l = k.of(u, arguments),
            f = so.select(u),
            h = s.datum(),
            d = !/^(n|s)$/.test(h) && S,
            p = !/^(e|w)$/.test(h) && T,
            g = s.classed("extent"),
            m = n(),
            v = so.select(co).on("mousemove.brush", r).on("mouseup.brush", o).on("touchmove.brush", r).on("touchend.brush", o).on("keydown.brush", t).on("keyup.brush", e);
            if (g) m[0] = C[0][0] - m[0],
            m[1] = C[0][1] - m[1];
            else if (h) {
                var y = +/w$/.test(h),
                b = +/^n/.test(h);
                a = [C[1 - y][0] - m[0], C[1 - b][1] - m[1]],
                m[0] = C[y][0],
                m[1] = C[b][1]
            } else so.event.altKey && (c = m.slice());
            f.style("pointer-events", "none").selectAll(".resize").style("display", null),
            so.select("body").style("cursor", s.style("cursor")),
            l({
                type: "brushstart"
            }),
            r(),
            N()
        }
        var E, k = A(x, "brushstart", "brush", "brushend"),
        S = null,
        T = null,
        a = cu[0],
        C = [[0, 0], [0, 0]];
        return x.x = function(t) {
            return arguments.length ? (a = cu[!(S = t) << 1 | !T], x) : S
        },
        x.y = function(t) {
            return arguments.length ? (a = cu[!S << 1 | !(T = t)], x) : T
        },
        x.extent = function(t) {
            var e, n, r, i, o;
            return arguments.length ? (E = [[0, 0], [0, 0]], S && (e = t[0], n = t[1], T && (e = e[0], n = n[0]), E[0][0] = e, E[1][0] = n, S.invert && (e = S(e), n = S(n)), n < e && (o = e, e = n, n = o), C[0][0] = 0 | e, C[1][0] = 0 | n), T && (r = t[0], i = t[1], S && (r = r[1], i = i[1]), E[0][1] = r, E[1][1] = i, T.invert && (r = T(r), i = T(i)), i < r && (o = r, r = i, i = o), C[0][1] = 0 | r, C[1][1] = 0 | i), x) : (t = E || C, S && (e = t[0][0], n = t[1][0], E || (e = C[0][0], n = C[1][0], S.invert && (e = S.invert(e), n = S.invert(n)), n < e && (o = e, e = n, n = o))), T && (r = t[0][1], i = t[1][1], E || (r = C[0][1], i = C[1][1], T.invert && (r = T.invert(r), i = T.invert(i)), i < r && (o = r, r = i, i = o))), S && T ? [[e, r], [n, i]] : S ? [e, n] : T && [r, i])
        },
        x.clear = function() {
            return E = null,
            C[0][0] = C[0][1] = C[1][0] = C[1][1] = 0,
            x
        },
        x.empty = function() {
            return S && C[0][0] === C[1][0] || T && C[0][1] === C[1][1]
        },
        so.rebind(x, k, "on")
    };
    var lu = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    },
    cu = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    so.time = {};
    var fu = Date,
    hu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    ki.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            du.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            du.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            du.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            du.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            du.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            du.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            du.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            du.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            du.setTime.apply(this._, arguments)
        }
    };
    var du = Date.prototype,
    pu = "%a %b %e %X %Y",
    gu = "%m/%d/%Y",
    mu = "%H:%M:%S",
    vu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    yu = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    bu = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    xu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    so.time.year = Si(function(t) {
        return (t = so.time.day(t)).setMonth(0, 1),
        t
    },
    function(t, e) {
        t.setFullYear(t.getFullYear() + e)
    },
    function(t) {
        return t.getFullYear()
    }),
    so.time.years = so.time.year.range,
    so.time.years.utc = so.time.year.utc.range,
    so.time.day = Si(function(t) {
        var e = new fu(1970, 0);
        return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
        e
    },
    function(t, e) {
        t.setDate(t.getDate() + e)
    },
    function(t) {
        return t.getDate() - 1
    }),
    so.time.days = so.time.day.range,
    so.time.days.utc = so.time.day.utc.range,
    so.time.dayOfYear = function(t) {
        var e = so.time.year(t);
        return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
    },
    hu.forEach(function(t, n) {
        t = t.toLowerCase(),
        n = 7 - n;
        var e = so.time[t] = Si(function(t) {
            return (t = so.time.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7),
            t
        },
        function(t, e) {
            t.setDate(t.getDate() + 7 * Math.floor(e))
        },
        function(t) {
            var e = so.time.year(t).getDay();
            return Math.floor((so.time.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
        });
        so.time[t + "s"] = e.range,
        so.time[t + "s"].utc = e.utc.range,
        so.time[t + "OfYear"] = function(t) {
            var e = so.time.year(t).getDay();
            return Math.floor((so.time.dayOfYear(t) + (e + n) % 7) / 7)
        }
    }),
    so.time.week = so.time.sunday,
    so.time.weeks = so.time.sunday.range,
    so.time.weeks.utc = so.time.sunday.utc.range,
    so.time.weekOfYear = so.time.sundayOfYear,
    so.time.format = function(u) {
        function t(t) {
            for (var e, n, r, i = [], o = -1, a = 0; ++o < s;) 37 === u.charCodeAt(o) && (i.push(u.substring(a, o)), null != (n = Tu[e = u.charAt(++o)]) && (e = u.charAt(++o)), (r = Cu[e]) && (e = r(t, null == n ? "e" === e ? " ": "0": n)), i.push(e), a = o + 1);
            return i.push(u.substring(a, o)),
            i.join("")
        }
        var s = u.length;
        return t.parse = function(t) {
            var e = {
                y: 1900,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            };
            if (Ci(e, u, t, 0) != t.length) return null;
            "p" in e && (e.H = e.H % 12 + 12 * e.p);
            var n = new fu;
            return n.setFullYear(e.y, e.m, e.d),
            n.setHours(e.H, e.M, e.S, e.L),
            n
        },
        t.toString = function() {
            return u
        },
        t
    };
    var Mu = Ni(vu),
    wu = Ni(yu),
    _u = Ni(bu),
    Eu = Ai(bu),
    ku = Ni(xu),
    Su = Ai(xu),
    Tu = {
        "-": "",
        _: " ",
        0 : "0"
    },
    Cu = {
        a: function(t) {
            return yu[t.getDay()]
        },
        A: function(t) {
            return vu[t.getDay()]
        },
        b: function(t) {
            return xu[t.getMonth()]
        },
        B: function(t) {
            return bu[t.getMonth()]
        },
        c: so.time.format(pu),
        d: function(t, e) {
            return ji(t.getDate(), e, 2)
        },
        e: function(t, e) {
            return ji(t.getDate(), e, 2)
        },
        H: function(t, e) {
            return ji(t.getHours(), e, 2)
        },
        I: function(t, e) {
            return ji(t.getHours() % 12 || 12, e, 2)
        },
        j: function(t, e) {
            return ji(1 + so.time.dayOfYear(t), e, 3)
        },
        L: function(t, e) {
            return ji(t.getMilliseconds(), e, 3)
        },
        m: function(t, e) {
            return ji(t.getMonth() + 1, e, 2)
        },
        M: function(t, e) {
            return ji(t.getMinutes(), e, 2)
        },
        p: function(t) {
            return 12 <= t.getHours() ? "PM": "AM"
        },
        S: function(t, e) {
            return ji(t.getSeconds(), e, 2)
        },
        U: function(t, e) {
            return ji(so.time.sundayOfYear(t), e, 2)
        },
        w: function(t) {
            return t.getDay()
        },
        W: function(t, e) {
            return ji(so.time.mondayOfYear(t), e, 2)
        },
        x: so.time.format(gu),
        X: so.time.format(mu),
        y: function(t, e) {
            return ji(t.getFullYear() % 100, e, 2)
        },
        Y: function(t, e) {
            return ji(t.getFullYear() % 1e4, e, 4)
        },
        Z: Gi,
        "%": function() {
            return "%"
        }
    },
    Nu = {
        a: Di,
        A: qi,
        b: Li,
        B: Hi,
        c: Fi,
        d: Bi,
        e: Bi,
        H: Wi,
        I: Wi,
        L: Yi,
        m: Ii,
        M: Ui,
        p: Vi,
        S: Xi,
        x: Ri,
        X: Oi,
        y: Pi,
        Y: zi
    },
    Au = /^\s*\d+/,
    ju = so.map({
        am: 0,
        pm: 1
    });
    so.time.format.utc = function(t) {
        function e(t) {
            try {
                var e = new(fu = ki);
                return e._ = t,
                n(e)
            } finally {
                fu = Date
            }
        }
        var n = so.time.format(t);
        return e.parse = function(t) {
            try {
                fu = ki;
                var e = n.parse(t);
                return e && e._
            } finally {
                fu = Date
            }
        },
        e.toString = n.toString,
        e
    };
    var Du = so.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    so.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ji: Du,
    Ji.parse = function(t) {
        var e = new Date(t);
        return isNaN(e) ? null: e
    },
    Ji.toString = Du.toString,
    so.time.second = Si(function(t) {
        return new fu(1e3 * Math.floor(t / 1e3))
    },
    function(t, e) {
        t.setTime(t.getTime() + 1e3 * Math.floor(e))
    },
    function(t) {
        return t.getSeconds()
    }),
    so.time.seconds = so.time.second.range,
    so.time.seconds.utc = so.time.second.utc.range,
    so.time.minute = Si(function(t) {
        return new fu(6e4 * Math.floor(t / 6e4))
    },
    function(t, e) {
        t.setTime(t.getTime() + 6e4 * Math.floor(e))
    },
    function(t) {
        return t.getMinutes()
    }),
    so.time.minutes = so.time.minute.range,
    so.time.minutes.utc = so.time.minute.utc.range,
    so.time.hour = Si(function(t) {
        var e = t.getTimezoneOffset() / 60;
        return new fu(36e5 * (Math.floor(t / 36e5 - e) + e))
    },
    function(t, e) {
        t.setTime(t.getTime() + 36e5 * Math.floor(e))
    },
    function(t) {
        return t.getHours()
    }),
    so.time.hours = so.time.hour.range,
    so.time.hours.utc = so.time.hour.utc.range,
    so.time.month = Si(function(t) {
        return (t = so.time.day(t)).setDate(1),
        t
    },
    function(t, e) {
        t.setMonth(t.getMonth() + e)
    },
    function(t) {
        return t.getMonth()
    }),
    so.time.months = so.time.month.range,
    so.time.months.utc = so.time.month.utc.range;
    var qu = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
    Lu = [[so.time.second, 1], [so.time.second, 5], [so.time.second, 15], [so.time.second, 30], [so.time.minute, 1], [so.time.minute, 5], [so.time.minute, 15], [so.time.minute, 30], [so.time.hour, 1], [so.time.hour, 3], [so.time.hour, 6], [so.time.hour, 12], [so.time.day, 1], [so.time.day, 2], [so.time.week, 1], [so.time.month, 1], [so.time.month, 3], [so.time.year, 1]],
    Hu = [[so.time.format("%Y"), Lt], [so.time.format("%B"),
    function(t) {
        return t.getMonth()
    }], [so.time.format("%b %d"),
    function(t) {
        return 1 != t.getDate()
    }], [so.time.format("%a %d"),
    function(t) {
        return t.getDay() && 1 != t.getDate()
    }], [so.time.format("%I %p"),
    function(t) {
        return t.getHours()
    }], [so.time.format("%I:%M"),
    function(t) {
        return t.getMinutes()
    }], [so.time.format(":%S"),
    function(t) {
        return t.getSeconds()
    }], [so.time.format(".%L"),
    function(t) {
        return t.getMilliseconds()
    }]],
    Fu = so.scale.linear(),
    Ru = Qi(Hu);
    Lu.year = function(t, e) {
        return Fu.domain(t.map(eo)).ticks(e).map(to)
    },
    so.time.scale = function() {
        return Zi(so.scale.linear(), Lu, Ru)
    };
    var Ou = Lu.map(function(t) {
        return [t[0].utc, t[1]]
    }),
    zu = Qi([[so.time.format.utc("%Y"), Lt], [so.time.format.utc("%B"),
    function(t) {
        return t.getUTCMonth()
    }], [so.time.format.utc("%b %d"),
    function(t) {
        return 1 != t.getUTCDate()
    }], [so.time.format.utc("%a %d"),
    function(t) {
        return t.getUTCDay() && 1 != t.getUTCDate()
    }], [so.time.format.utc("%I %p"),
    function(t) {
        return t.getUTCHours()
    }], [so.time.format.utc("%I:%M"),
    function(t) {
        return t.getUTCMinutes()
    }], [so.time.format.utc(":%S"),
    function(t) {
        return t.getUTCSeconds()
    }], [so.time.format.utc(".%L"),
    function(t) {
        return t.getUTCMilliseconds()
    }]]);
    return Ou.year = function(t, e) {
        return Fu.domain(t.map(ro)).ticks(e).map(no)
    },
    so.time.scale.utc = function() {
        return Zi(so.scale.linear(), Ou, zu)
    },
    so.text = function() {
        return so.xhr.apply(so, arguments).response(io)
    },
    so.json = function(t, e) {
        return so.xhr(t, "application/json", e).response(oo)
    },
    so.html = function(t, e) {
        return so.xhr(t, "text/html", e).response(ao)
    },
    so.xml = function() {
        return so.xhr.apply(so, arguments).response(uo)
    },
    so
} (),
$(document).ready(function() {
    $("form[method=get] input[name=utf8]").attr("disabled", "disabled"),
    $("#user").click(function() {
        $("#userbar").toggle("fast")
    })
}),
$(document).ready(function() {
    $(".submenu").hide(),
    current = location.pathname.replace("/", ""),
    -1 != current.indexOf("/") && (current = current.substring(0, current.indexOf("/"))),
    id = current,
    0 != id.length && "coursesurveys" != id && 0 != $("#" + id).length ? ($("#" + id).addClass("current"), $("." + current + "_submenu").show()) : ($($(".navigation_toplevel_item")[0]).addClass("current"), $("#submenu .submenu").first().show(), $("#submenu-thin .submenu").first().show()),
    $(".navigation_toplevel_item").click(function(t) {
        $(this).hasClass("navigation_ext_link") || (t.preventDefault(), $(".navigation_toplevel_item").removeClass("current"), $(this).addClass("current"), $(this).blur(), $(".submenu").hide(), id = $(this).attr("id") + "_submenu", $("." + id).show())
    }),
    $("#userbar").click(function() {
        return $("#user-dropdown").toggle(300),
        !1
    })
}),
$(document).ready(function() {
    $("li.event").on("click", "a[href$='new']",
    function() {
        return enclosing_event = $(this).parent().parent().parent(),
        enclosing_event.find(".rsvp_message").slideToggle(function() {
            enclosing_event.find(".rsvp_message").remove()
        }),
        0 == enclosing_event.find(".quick-rsvp").size() ? (enclosing_event.append("<div class='quick-rsvp' style='display:none;'></div>"), $.get($(this).attr("href") + " #new_rsvp",
        function(t) {
            0 == $(t).find("#new_rsvp").length ? enclosing_event.find(".quick-rsvp").html($(t).find("#messages")) : (enclosing_event.find(".quick-rsvp").html($(t).find("#new_rsvp")), $("#rsvp_comment").css("width", "100%"), enclosing_event.find(".field-submit").append("<input type='submit' id='cancel-quick-rsvp' value='Cancel' />"), enclosing_event.find(".field:first").remove(), enclosing_event.find(".field:first").remove()),
            enclosing_event.find(".quick-rsvp").slideToggle()
        })) : enclosing_event.find(".quick-rsvp").slideToggle(),
        !1
    }),
    $("li.event").on("click", "a[href$='edit']",
    function() {
        return enclosing_event = $(this).parent().parent().parent(),
        enclosing_event.find(".rsvp_message").slideToggle(function() {
            enclosing_event.find(".rsvp_message").remove()
        }),
        0 == enclosing_event.find(".quick-rsvp").size() ? (enclosing_event.append("<div class='quick-rsvp' style='display:none;'></div>"), rsvp_id = $(this).data("rsvp_id"), edit_rsvp_str = "#edit_rsvp_" + rsvp_id, $.get($(this).attr("href") + " " + edit_rsvp_str,
        function(t) {
            0 == $(t).find(edit_rsvp_str).length ? enclosing_event.find(".quick-rsvp").html($(t).find("#messages")) : (enclosing_event.find(".quick-rsvp").html($(t).find(edit_rsvp_str)), $("#rsvp_comment").css("width", "100%"), enclosing_event.find(".field-submit").append("<input type='submit' id='cancel-quick-rsvp' value='Cancel' />"), enclosing_event.find(".field:first").remove(), enclosing_event.find(".field:first").remove()),
            enclosing_event.find(".quick-rsvp").slideToggle()
        })) : enclosing_event.find(".quick-rsvp").slideToggle(),
        !1
    }),
    $("li.event").on("click", "#cancel-quick-rsvp",
    function() {
        return $(this).parent().parent().parent().slideToggle(),
        !1
    }),
    $("li.event").on("submit", "form",
    function() {
        return enclosing_event = $(this).parent().parent(),
        $.post($(this).attr("action"), $(this).serialize(),
        function(t) {
            enclosing_event.append("<div class='rsvp_message'></div>"),
            enclosing_event.find(".rsvp_message").html($(t).find("#messages")),
            enclosing_event.find(".quick-rsvp").remove(),
            enclosing_event.find(".rsvp_link").html('[<a data-rsvp_id="' + $(t).find("#edit_rsvp").data("rsvp_id") + '" href="' + $(t).find("#edit_rsvp").attr("href") + "\">RSVP'ed</a>]")
        }),
        !1
    })
});
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-38933740-1"]),
_gaq.push(["_trackPageview"]),
function() {
    var t = document.createElement("script");
    t.type = "text/javascript",
    t.async = !0,
    t.src = ("https:" == document.location.protocol ? "https://ssl": "http://www") + ".google-analytics.com/ga.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
} (),
$(document).ready(function() {
    $(".datetimepicker.depttourpicker").datetimepicker({
        beforeShowDay: function(t) {
            var e = t.getDay();
            return [0 != e && 6 != e, "", ""]
        },
        hourMin: 11,
        hourMax: 16,
        minTime: "11:00 am",
        maxTime: "4:00 pm",
        minDate: new Date,
        dateFormat: "yy-mm-dd",
        timeFormat: "hh:mm tt",
        stepHour: 1,
        stepMinute: 5,
        hourGrid: 1,
        minuteGrid: 15,
        showOn: "button",
        buttonImage: "/assets/icons/calendar-d8ca06c8fb76d3ca25449e22b535b7a311b8fc613a43711bed1f4a14978b0b46.gif",
        buttonImageOnly: !0,
        buttonText: "Show calendar"
    }),
    $(".datetimepicker.eventpicker").datetimepicker({
        dateFormat: "yy-mm-dd",
        timeFormat: "hh:mm tt",
        stepHour: 1,
        stepMinute: 5,
        hourGrid: 6,
        minuteGrid: 15,
        showOn: "button",
        buttonImage: "/assets/icons/calendar-d8ca06c8fb76d3ca25449e22b535b7a311b8fc613a43711bed1f4a14978b0b46.gif",
        buttonImageOnly: !0,
        buttonText: "Show calendar"
    })
});