/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = window, J = O.ShadowRoot && (O.ShadyCSS === void 0 || O.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = Symbol(), Q = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== F)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (J && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = Q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && Q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const _t = (n) => new ht(typeof n == "string" ? n : n + "", void 0, F), ft = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new ht(e, n, F);
}, mt = (n, t) => {
  J ? n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const s = document.createElement("style"), i = O.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  });
}, X = J ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return _t(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const R = window, Y = R.trustedTypes, yt = Y ? Y.emptyScript : "", tt = R.reactiveElementPolyfillSupport, q = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? yt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, ct = (n, t) => t !== n && (t == t || n == n), L = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: ct }, K = "finalized";
let g = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, s) => {
      const i = this._$Ep(s, e);
      i !== void 0 && (this._$Ev.set(i, s), t.push(i));
    }), t;
  }
  static createProperty(t, e = L) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(i) {
      const o = this[t];
      this[e] = i, this.requestUpdate(t, o, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || L;
  }
  static finalize() {
    if (this.hasOwnProperty(K))
      return !1;
    this[K] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(X(i));
    } else
      t !== void 0 && e.push(X(t));
    return e;
  }
  static _$Ep(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return mt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = L) {
    var i;
    const o = this.constructor._$Ep(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const r = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : q).toAttribute(e, s.type);
      this._$El = t, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$El = null;
    }
  }
  _$AK(t, e) {
    var s;
    const i = this.constructor, o = i._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const r = i.getPropertyOptions(o), h = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((s = r.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? r.converter : q;
      this._$El = o, this[o] = h.fromAttribute(e, r.type), this._$El = null;
    }
  }
  requestUpdate(t, e, s) {
    let i = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || ct)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, o) => this[o] = i), this._$Ei = void 0);
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
        var o;
        return (o = i.hostUpdate) === null || o === void 0 ? void 0 : o.call(i);
      }), this.update(s)) : this._$Ek();
    } catch (i) {
      throw e = !1, this._$Ek(), i;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
g[K] = !0, g.elementProperties = /* @__PURE__ */ new Map(), g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, tt == null || tt({ ReactiveElement: g }), ((z = R.reactiveElementVersions) !== null && z !== void 0 ? z : R.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D;
const k = window, A = k.trustedTypes, et = A ? A.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Z = "$lit$", v = `lit$${(Math.random() + "").slice(9)}$`, dt = "?" + v, gt = `<${dt}>`, m = document, C = () => m.createComment(""), P = (n) => n === null || typeof n != "object" && typeof n != "function", ut = Array.isArray, At = (n) => ut(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", B = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, st = /-->/g, it = />/g, _ = RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, ot = /"/g, pt = /^(?:script|style|textarea|title)$/i, St = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), bt = St(1), S = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), f = m.createTreeWalker(m, 129, null, !1);
function $t(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(t) : t;
}
const Et = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = E;
  for (let h = 0; h < e; h++) {
    const l = n[h];
    let a, c, d = -1, p = 0;
    for (; p < l.length && (r.lastIndex = p, c = r.exec(l), c !== null); )
      p = r.lastIndex, r === E ? c[1] === "!--" ? r = st : c[1] !== void 0 ? r = it : c[2] !== void 0 ? (pt.test(c[2]) && (i = RegExp("</" + c[2], "g")), r = _) : c[3] !== void 0 && (r = _) : r === _ ? c[0] === ">" ? (r = i ?? E, d = -1) : c[1] === void 0 ? d = -2 : (d = r.lastIndex - c[2].length, a = c[1], r = c[3] === void 0 ? _ : c[3] === '"' ? ot : nt) : r === ot || r === nt ? r = _ : r === st || r === it ? r = E : (r = _, i = void 0);
    const $ = r === _ && n[h + 1].startsWith("/>") ? " " : "";
    o += r === E ? l + gt : d >= 0 ? (s.push(a), l.slice(0, d) + Z + l.slice(d) + v + $) : l + v + (d === -2 ? (s.push(void 0), h) : $);
  }
  return [$t(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class x {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const h = t.length - 1, l = this.parts, [a, c] = Et(t, e);
    if (this.el = x.createElement(a, s), f.currentNode = this.el.content, e === 2) {
      const d = this.el.content, p = d.firstChild;
      p.remove(), d.append(...p.childNodes);
    }
    for (; (i = f.nextNode()) !== null && l.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const d = [];
          for (const p of i.getAttributeNames())
            if (p.endsWith(Z) || p.startsWith(v)) {
              const $ = c[r++];
              if (d.push(p), $ !== void 0) {
                const vt = i.getAttribute($.toLowerCase() + Z).split(v), H = /([.?@])?(.*)/.exec($);
                l.push({ type: 1, index: o, name: H[2], strings: vt, ctor: H[1] === "." ? Ct : H[1] === "?" ? xt : H[1] === "@" ? Ut : N });
              } else
                l.push({ type: 6, index: o });
            }
          for (const p of d)
            i.removeAttribute(p);
        }
        if (pt.test(i.tagName)) {
          const d = i.textContent.split(v), p = d.length - 1;
          if (p > 0) {
            i.textContent = A ? A.emptyScript : "";
            for (let $ = 0; $ < p; $++)
              i.append(d[$], C()), f.nextNode(), l.push({ type: 2, index: ++o });
            i.append(d[p], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === dt)
          l.push({ type: 2, index: o });
        else {
          let d = -1;
          for (; (d = i.data.indexOf(v, d + 1)) !== -1; )
            l.push({ type: 7, index: o }), d += v.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = m.createElement("template");
    return s.innerHTML = t, s;
  }
}
function b(n, t, e = n, s) {
  var i, o, r, h;
  if (t === S)
    return t;
  let l = s !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[s] : e._$Cl;
  const a = P(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== a && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), a === void 0 ? l = void 0 : (l = new a(n), l._$AT(n, e, s)), s !== void 0 ? ((r = (h = e)._$Co) !== null && r !== void 0 ? r : h._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = b(n, l._$AS(n, t.values), l, s)), t;
}
class wt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: s }, parts: i } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : m).importNode(s, !0);
    f.currentNode = o;
    let r = f.nextNode(), h = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (h === a.index) {
        let c;
        a.type === 2 ? c = new U(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new Ht(r, this, t)), this._$AV.push(c), a = i[++l];
      }
      h !== (a == null ? void 0 : a.index) && (r = f.nextNode(), h++);
    }
    return f.currentNode = m, o;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class U {
  constructor(t, e, s, i) {
    var o;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cp = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = b(this, t, e), P(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== S && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : At(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== u && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(m.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = x.createElement($t(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(s);
    else {
      const r = new wt(o, this), h = r.u(this.options);
      r.v(s), this.$(h), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, e = new x(t)), e;
  }
  T(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new U(this.k(C()), this.k(C()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class N {
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = b(this, t, e, 0), r = !P(t) || t !== this._$AH && t !== S, r && (this._$AH = t);
    else {
      const h = t;
      let l, a;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        a = b(this, h[s + l], e, l), a === S && (a = this._$AH[l]), r || (r = !P(a) || a !== this._$AH[l]), a === u ? t = u : t !== u && (t += (a ?? "") + o[l + 1]), this._$AH[l] = a;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Pt = A ? A.emptyScript : "";
class xt extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, Pt) : this.element.removeAttribute(this.name);
  }
}
class Ut extends N {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = b(this, t, e, 0)) !== null && s !== void 0 ? s : u) === S)
      return;
    const i = this._$AH, o = t === u && i !== u || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== u && (i === u || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    b(this, t);
  }
}
const lt = k.litHtmlPolyfillSupport;
lt == null || lt(x, U), ((D = k.litHtmlVersions) !== null && D !== void 0 ? D : k.litHtmlVersions = []).push("2.7.5");
const Ot = (n, t, e) => {
  var s, i;
  const o = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let r = o._$litPart$;
  if (r === void 0) {
    const h = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = r = new U(t.insertBefore(C(), h), h, void 0, e ?? {});
  }
  return r._$AI(n), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var I, V;
class w extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ot(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return S;
  }
}
w.finalized = !0, w._$litElement$ = !0, (I = globalThis.litElementHydrateSupport) === null || I === void 0 || I.call(globalThis, { LitElement: w });
const at = globalThis.litElementPolyfillSupport;
at == null || at({ LitElement: w });
((V = globalThis.litElementVersions) !== null && V !== void 0 ? V : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = (n, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, n);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, n);
} }, kt = (n, t, e) => {
  t.constructor.createProperty(e, n);
};
function T(n) {
  return (t, e) => e !== void 0 ? kt(n, t, e) : Rt(n, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W;
((W = window.HTMLSlotElement) === null || W === void 0 ? void 0 : W.prototype.assignedElements) != null;
const Nt = `.time{display:flex;align-items:center;justify-content:center;--step: 60s;font-family:Consolas,Monaco,monospace;font-size:1em}.split{animation:shark 1s step-end infinite}.hour:before{counter-reset:hour var(--h);content:counter(hour,decimal-leading-zero);animation:hour calc(var(--step) * 60 * 24) infinite steps(24);animation-delay:calc(-1 * var(--step) * var(--dh) * 60)}.hour:after{content:attr(data-split)}.minitus:before{counter-reset:minitus var(--m);content:counter(minitus,decimal-leading-zero);animation:minitus calc(var(--step) * 60) infinite steps(60);animation-delay:calc(-1 * var(--step) * var(--dm))}.minitus:after{content:attr(data-split)}.seconds:before{counter-reset:seconds var(--s);content:counter(seconds,decimal-leading-zero);animation:seconds var(--step) infinite steps(60);animation-delay:calc(-1 * var(--step) * var(--ds) / 60)}@keyframes hour{to{--h: 24}}@keyframes minitus{to{--m: 60}}@keyframes seconds{to{--s: 60}}@keyframes shark{0%,to{opacity:1}50%{opacity:0}}
`;
var M = globalThis && globalThis.__decorate || function(n, t, e, s) {
  var i = arguments.length, o = i < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, e) : s, r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, t, e, s);
  else
    for (var h = n.length - 1; h >= 0; h--)
      (r = n[h]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, e, o) : r(t, e)) || o);
  return i > 3 && o && Object.defineProperty(t, e, o), o;
}, j = globalThis && globalThis.__metadata || function(n, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(n, t);
};
const G = class G extends w {
  constructor() {
    super(), this.__shadowRoot = null, this.header = "Hey there", this.counter = 5, this.split = ":", this.sort = "asc", this.__shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    super.connectedCallback();
    const t = new CSSStyleSheet();
    t.replaceSync(Nt), this.__shadowRoot.adoptedStyleSheets.push(t), ["--h", "--s", "--m"].forEach((s) => {
      CSS.registerProperty({
        name: s,
        syntax: "<integer>",
        inherits: !1,
        initialValue: "0"
      });
    });
  }
  attributeChangedCallback(t, e, s) {
    super.attributeChangedCallback(t, e, s);
  }
  __increment() {
    this.counter += 1;
  }
  firstUpdated() {
    const t = this.shadowRoot.querySelector(".time"), e = /* @__PURE__ */ new Date(), s = e.getHours(), i = e.getMinutes(), o = e.getSeconds();
    t && t.setAttribute("style", `--ds: ${o};--dm: ${i + o / 60};--dh: ${s + i / 60 + o / 3600};`);
  }
  render() {
    return bt`
      <div class="time" id="time">
        <span class="hour" data-split="${this.split}"></span>
        <span class="minitus" data-split="${this.split}"></span>
        <span class="seconds"></span>
      </div>
    `;
  }
};
G.styles = ft`
    :host {
      display: inline-block;
      color: var(--text-color, #000);
    }
  `;
let y = G;
M([
  T({ type: String }),
  j("design:type", Object)
], y.prototype, "header", void 0);
M([
  T({ type: Number }),
  j("design:type", Object)
], y.prototype, "counter", void 0);
M([
  T({ type: String }),
  j("design:type", Object)
], y.prototype, "split", void 0);
M([
  T({ type: String }),
  j("design:type", Object)
], y.prototype, "sort", void 0);
window.customElements.define("wc-timer", y);
export {
  y as TimeCount
};
