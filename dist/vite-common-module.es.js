import Oe, { useContext as cr, createContext as fr, useState as Ce, useEffect as dr } from "react";
import { DataGridPro as vr, GridToolbarContainer as pr, GridToolbarColumnsButton as gr, GridToolbarDensitySelector as mr, GridToolbarFilterButton as hr } from "@mui/x-data-grid-pro";
import { Typography as br, Button as yr } from "@mui/material";
var Q = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Rr() {
  if (xe)
    return L;
  xe = 1;
  var s = Oe, l = Symbol.for("react.element"), R = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, T = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(x, p, w) {
    var m, d = {}, P = null, _ = null;
    w !== void 0 && (P = "" + w), p.key !== void 0 && (P = "" + p.key), p.ref !== void 0 && (_ = p.ref);
    for (m in p)
      f.call(p, m) && !g.hasOwnProperty(m) && (d[m] = p[m]);
    if (x && x.defaultProps)
      for (m in p = x.defaultProps, p)
        d[m] === void 0 && (d[m] = p[m]);
    return { $$typeof: l, type: x, key: P, ref: _, props: d, _owner: T.current };
  }
  return L.Fragment = R, L.jsx = E, L.jsxs = E, L;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Er() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Oe, l = Symbol.for("react.element"), R = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), x = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), W = Symbol.iterator, B = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[B];
      return typeof r == "function" ? r : null;
    }
    var k = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Fe = !1, De = !1, Ae = !1, Ie = !1, Le = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === g || Le || e === T || e === w || e === m || Ie || e === _ || Fe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === d || e.$$typeof === E || e.$$typeof === x || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case R:
          return "Portal";
        case g:
          return "Profiler";
        case T:
          return "StrictMode";
        case w:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return te(r) + ".Consumer";
          case E:
            var t = e;
            return te(t._context) + ".Provider";
          case p:
            return We(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case P: {
            var i = e, u = i._payload, o = i._init;
            try {
              return O(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, A = 0, ne, ae, oe, ie, ue, se, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ne() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: ae
            }),
            warn: j({}, e, {
              value: oe
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: ue
            }),
            groupCollapsed: j({}, e, {
              value: se
            }),
            groupEnd: j({}, e, {
              value: le
            })
          });
        }
        A < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, G;
    function Y(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var J = !1, N;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ue();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var a = S.stack.split(`
`), b = n.stack.split(`
`), c = a.length - 1, v = b.length - 1; c >= 1 && v >= 0 && a[c] !== b[v]; )
            v--;
          for (; c >= 1 && v >= 0; c--, v--)
            if (a[c] !== b[v]) {
              if (c !== 1 || v !== 1)
                do
                  if (c--, v--, v < 0 || a[c] !== b[v]) {
                    var C = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, C), C;
                  }
                while (c >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Pe = D ? Y(D) : "";
      return typeof e == "function" && N.set(e, Pe), Pe;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case w:
          return Y("Suspense");
        case m:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Me(e.render);
          case d:
            return U(e.type, r, t);
          case P: {
            var n = e, i = n._payload, u = n._init;
            try {
              return U(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(M);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (V(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, V(i), h("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Je(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var I = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, he, H;
    H = {};
    function He(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = O(I.current.type);
        H[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(I.current.type), e.ref), H[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          me || (me = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, b = null;
        t !== void 0 && (ge(t), a = "" + t), Ke(r) && (ge(r.key), a = "" + r.key), He(r) && (b = r.ref, Xe(r, i));
        for (u in r)
          M.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || b) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, v), b && Qe(o, v);
        }
        return er(e, a, b, i, n, I.current, o);
      }
    }
    var K = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ye() {
      {
        if (K.current) {
          var e = O(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Ee(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Ee(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = O(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Te(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = tr(i);
          b ? a += b : a += ye();
          var c;
          e === null ? c = "null" : z(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var v = rr(e, r, t, i, u);
        if (v == null)
          return v;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (z(C)) {
                for (var D = 0; D < C.length; D++)
                  _e(C[D], e);
                Object.freeze && Object.freeze(C);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(C, e);
        }
        return e === f ? or(v) : ar(v), v;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    $.Fragment = f, $.jsx = sr, $.jsxs = lr;
  }()), $;
}
process.env.NODE_ENV === "production" ? Q.exports = Rr() : Q.exports = Er();
var y = Q.exports;
const Cr = (s) => {
  const { data: l, columns: R, loading: f, CustomToolbar: T } = s, g = () => /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs(pr, { sx: { marginBottom: "25px" }, children: [
    /* @__PURE__ */ y.jsx(gr, {}),
    /* @__PURE__ */ y.jsx(mr, {}),
    /* @__PURE__ */ y.jsx(hr, {})
  ] }) });
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx(
    vr,
    {
      loading: f,
      rows: l || [],
      columns: R,
      style: { padding: "30px 16px 4px 16px", margin: "12px 26px" },
      getRowId: (E) => E.id,
      slots: {
        toolbar: T ? g : null
      },
      initialState: {
        pinnedColumns: { right: ["actions"] },
        pagination: { paginationModel: { pageSize: 10 } }
      },
      getRowHeight: () => "auto",
      sx: {
        ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel": { marginTop: "1em", marginBottom: "1em" }
      },
      disableColumnMenu: !0,
      pagination: !0,
      pageSizeOptions: [10, 20, 30, 40, 50]
    }
  ) });
};
function xr() {
  return /* @__PURE__ */ y.jsx("div", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit nisi autem ipsa veritatis corrupti fugiat commodi repudiandae neque a quaerat laborum perspiciatis deleniti aspernatur ratione, alias aut laudantium asperiores ut eligendi consequuntur deserunt." });
}
const ee = () => {
  const { activePage: s, goToPage: l, allPages: R, pageId: f } = cr(Se);
  return { activePage: s, goToPage: l, allPages: R, pageId: f };
}, Se = fr(
  {}
), wr = ({
  children: s,
  pages: l
}) => {
  const R = atob(
    decodeURIComponent(window.location.hash.slice(1))
  ), f = R && JSON.parse(R), T = l.find(
    (d) => f && d.portlet === f.portlet
  ), [g, E] = Ce(
    T || l[0]
  ), [x, p] = Ce(
    (f == null ? void 0 : f.id) || void 0
  ), w = (d) => {
    const P = atob(
      decodeURIComponent(window.location.hash.slice(1))
    ), _ = P && JSON.parse(P), W = l.find((B) => _ && B.portlet === _.portlet);
    E(W || g), p((_ == null ? void 0 : _.id) ?? x);
  };
  dr(() => (window.addEventListener("hashchange", w), () => window.removeEventListener("hashchange", w)), []);
  const m = (d) => {
    const P = l.find((_) => _.portlet === d.portlet);
    E(P || l[0]), p((_) => (d == null ? void 0 : d.id) || _), d.hasOwnProperty("id") || (d.id = x), window.location = "#" + encodeURIComponent(btoa(JSON.stringify(d)));
  };
  return /* @__PURE__ */ y.jsx(
    Se.Provider,
    {
      value: { goToPage: m, activePage: g, allPages: l, pageId: x },
      children: s
    }
  );
}, Or = (s) => {
  const { goToPage: l } = ee(), { pageobj: R, children: f } = s, T = (g, E) => {
    s.onClick && s.onClick(g), l(E);
  };
  return /* @__PURE__ */ y.jsx(
    br,
    {
      ...s,
      onClick: (g) => T(g, R),
      variant: "body1",
      style: { cursor: "pointer", color: "#1976D2", padding: "14px 0px" },
      children: f
    }
  );
}, Sr = (s) => {
  const { goToPage: l } = ee(), { pageobj: R, children: f } = s, T = (g, E) => {
    s.onClick && s.onClick(g), l(E);
  };
  return /* @__PURE__ */ y.jsx(yr, { ...s, onClick: (g) => T(g, R), children: f });
}, jr = () => {
  const { activePage: s } = ee();
  return (s == null ? void 0 : s.element) ?? /* @__PURE__ */ y.jsx(y.Fragment, { children: "Page not found" });
};
export {
  Cr as FormComponent,
  xr as Lorem,
  Se as PageContext,
  wr as PageProvider,
  Sr as PagingButton,
  Or as PagingLink,
  jr as RenderedPage
};
