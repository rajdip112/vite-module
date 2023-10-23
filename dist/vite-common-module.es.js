import Oe, { useContext as cr, createContext as fr, useState as Ce, useEffect as dr } from "react";
import { DataGridPro as vr, GridToolbarContainer as pr, GridToolbarColumnsButton as gr, GridToolbarDensitySelector as hr, GridToolbarFilterButton as mr } from "@mui/x-data-grid-pro";
import { Typography as br, Button as yr } from "@mui/material";
var Q = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Rr() {
  if (Te)
    return A;
  Te = 1;
  var s = Oe, l = Symbol.for("react.element"), R = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, w = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(T, g, P) {
    var m, v = {}, x = null, _ = null;
    P !== void 0 && (x = "" + P), g.key !== void 0 && (x = "" + g.key), g.ref !== void 0 && (_ = g.ref);
    for (m in g)
      d.call(g, m) && !h.hasOwnProperty(m) && (v[m] = g[m]);
    if (T && T.defaultProps)
      for (m in g = T.defaultProps, g)
        v[m] === void 0 && (v[m] = g[m]);
    return { $$typeof: l, type: T, key: x, ref: _, props: v, _owner: w.current };
  }
  return A.Fragment = R, A.jsx = E, A.jsxs = E, A;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Er() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Oe, l = Symbol.for("react.element"), R = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), T = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = Symbol.iterator, B = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[B];
      return typeof r == "function" ? r : null;
    }
    var k = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
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
    var Fe = !1, De = !1, Le = !1, Ie = !1, Ae = !1, re;
    re = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === h || Ae || e === w || e === P || e === m || Ie || e === _ || Fe || De || Le || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === v || e.$$typeof === E || e.$$typeof === T || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
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
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case R:
          return "Portal";
        case h:
          return "Profiler";
        case w:
          return "StrictMode";
        case P:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return te(r) + ".Consumer";
          case E:
            var t = e;
            return te(t._context) + ".Provider";
          case g:
            return $e(e, e.render, "ForwardRef");
          case v:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case x: {
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
    var j = Object.assign, L = 0, ne, ae, oe, ie, ue, se, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function We() {
      {
        if (L === 0) {
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
        L++;
      }
    }
    function Ye() {
      {
        if (L--, L === 0) {
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
        L < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, G;
    function W(e, r, t) {
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
    var J = !1, Y;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ne();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, We();
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
`), y = n.stack.split(`
`), c = a.length - 1, p = y.length - 1; c >= 1 && p >= 0 && a[c] !== y[p]; )
            p--;
          for (; c >= 1 && p >= 0; c--, p--)
            if (a[c] !== y[p]) {
              if (c !== 1 || p !== 1)
                do
                  if (c--, p--, p < 0 || a[c] !== y[p]) {
                    var C = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, C), C;
                  }
                while (c >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = u, Ye(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", xe = D ? W(D) : "";
      return typeof e == "function" && Y.set(e, xe), xe;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case m:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ue(e.render);
          case v:
            return N(e.type, r, t);
          case x: {
            var n = e, i = n._payload, u = n._init;
            try {
              return N(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(U);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (V(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, V(i), b("Failed %s type: %s", t, a.message), V(null));
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var I = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, Z;
    Z = {};
    function Ze(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = O(I.current.type);
        Z[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(I.current.type), e.ref), Z[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          he || (he = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          me || (me = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        var u, o = {}, a = null, y = null;
        t !== void 0 && (ge(t), a = "" + t), He(r) && (ge(r.key), a = "" + r.key), Ze(r) && (y = r.ref, Ke(r, i));
        for (u in r)
          U.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, p), y && Qe(o, p);
        }
        return er(e, a, y, i, n, I.current, o);
      }
    }
    var H = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ye() {
      {
        if (H.current) {
          var e = O(H.current.type);
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
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              X(o.value) && Ee(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = O(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function we(e, r, t, n, i, u) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr(i);
          y ? a += y : a += ye();
          var c;
          e === null ? c = "null" : z(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var p = rr(e, r, t, i, u);
        if (p == null)
          return p;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (z(C)) {
                for (var D = 0; D < C.length; D++)
                  _e(C[D], e);
                Object.freeze && Object.freeze(C);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(C, e);
        }
        return e === d ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function ur(e, r, t) {
      return we(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    M.Fragment = d, M.jsx = sr, M.jsxs = lr;
  }()), M;
}
process.env.NODE_ENV === "production" ? Q.exports = Rr() : Q.exports = Er();
var f = Q.exports;
const Cr = (s) => {
  const { data: l, columns: R, loading: d, CustomToolbar: w } = s, h = () => /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(pr, { sx: { marginBottom: "25px" }, children: [
    /* @__PURE__ */ f.jsx(gr, {}),
    /* @__PURE__ */ f.jsx(hr, {}),
    /* @__PURE__ */ f.jsx(mr, {})
  ] }) });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(
    vr,
    {
      loading: d,
      rows: l || [],
      columns: R,
      style: { padding: "30px 16px 4px 16px", margin: "12px 26px" },
      getRowId: (E) => E.id,
      slots: {
        toolbar: w ? h : null
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
function Tr() {
  return /* @__PURE__ */ f.jsx("div", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit nisi autem ipsa veritatis corrupti fugiat commodi repudiandae neque a quaerat laborum perspiciatis deleniti aspernatur ratione, alias aut laudantium asperiores ut eligendi consequuntur deserunt." });
}
const ee = () => {
  const { activePage: s, goToPage: l, allPages: R, pageId: d } = cr(Se);
  return { activePage: s, goToPage: l, allPages: R, pageId: d };
}, Se = fr(
  {}
), Pr = ({
  children: s,
  pages: l
}) => {
  const R = atob(
    decodeURIComponent(window.location.hash.slice(1))
  ), d = R && JSON.parse(R), w = l.find(
    (v) => d && v.portlet === d.portlet
  ), [h, E] = Ce(
    w || l[0]
  ), [T, g] = Ce(
    (d == null ? void 0 : d.id) || void 0
  ), P = (v) => {
    const x = atob(
      decodeURIComponent(window.location.hash.slice(1))
    ), _ = x && JSON.parse(x), $ = l.find((B) => _ && B.portlet === _.portlet);
    E($ || h), g((_ == null ? void 0 : _.id) ?? T);
  };
  dr(() => (window.addEventListener("hashchange", P), () => window.removeEventListener("hashchange", P)), []);
  const m = (v) => {
    const x = l.find((_) => _.portlet === v.portlet);
    E(x || l[0]), g((_) => (v == null ? void 0 : v.id) || _), v.hasOwnProperty("id") || (v.id = T), window.location = "#" + encodeURIComponent(btoa(JSON.stringify(v)));
  };
  return /* @__PURE__ */ f.jsx(
    Se.Provider,
    {
      value: { goToPage: m, activePage: h, allPages: l, pageId: T },
      children: s
    }
  );
}, Or = (s) => {
  const { goToPage: l } = ee(), { pageobj: R, children: d } = s, w = (h, E) => {
    s.onClick && s.onClick(h), l(E);
  };
  return /* @__PURE__ */ f.jsx(
    br,
    {
      ...s,
      onClick: (h) => w(h, R),
      variant: "body1",
      style: { cursor: "pointer", color: "#1976D2", padding: "14px 0px" },
      children: d
    }
  );
}, Sr = (s) => {
  const { goToPage: l } = ee(), { pageobj: R, children: d } = s, w = (h, E) => {
    s.onClick && s.onClick(h), l(E);
  };
  return /* @__PURE__ */ f.jsx(yr, { ...s, onClick: (h) => w(h, R), children: d });
}, jr = () => {
  const { activePage: s } = ee();
  return (s == null ? void 0 : s.element) ?? /* @__PURE__ */ f.jsx(f.Fragment, { children: "Page not found" });
};
function kr() {
  return /* @__PURE__ */ f.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      children: [
        /* @__PURE__ */ f.jsx("rect", { width: "32", height: "32", rx: "16", fill: "#1976D2" }),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            d: "M14 10L12.59 11.41L17.17 16L12.59 20.59L14 22L20 16L14 10Z",
            fill: "white"
          }
        )
      ]
    }
  );
}
function Fr() {
  return /* @__PURE__ */ f.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      children: [
        /* @__PURE__ */ f.jsx("rect", { width: "32", height: "32", rx: "16", fill: "#2E7D32" }),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            d: "M20.59 11.58L14 18.17L10.41 14.59L9 16L14 21L22 13L20.59 11.58ZM16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 24C11.58 24 8 20.42 8 16C8 11.58 11.58 8 16 8C20.42 8 24 11.58 24 16C24 20.42 20.42 24 16 24Z",
            fill: "white"
          }
        )
      ]
    }
  );
}
export {
  Cr as FormComponent,
  Tr as Lorem,
  Fr as MusicIcon,
  Se as PageContext,
  Pr as PageProvider,
  Sr as PagingButton,
  Or as PagingLink,
  jr as RenderedPage,
  kr as RightArrowIcon
};
