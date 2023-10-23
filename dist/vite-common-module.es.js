import * as U from "react";
import Dn, { useContext as Fn, createContext as zo, useState as zt, useEffect as Wo, forwardRef as Yo } from "react";
import { DataGridPro as Bo, GridToolbarContainer as qo, GridToolbarColumnsButton as Ko, GridToolbarDensitySelector as Go, GridToolbarFilterButton as Ho } from "@mui/x-data-grid-pro";
import { Typography as ot, Button as Jo, Box as Kr } from "@mui/material";
function Xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Zo(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var yr = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function Qo() {
  if (Wt)
    return nr;
  Wt = 1;
  var e = Dn, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, l) {
    var f, m = {}, p = null, v = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (f in u)
      n.call(u, f) && !i.hasOwnProperty(f) && (m[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        m[f] === void 0 && (m[f] = u[f]);
    return { $$typeof: r, type: c, key: p, ref: v, props: m, _owner: o.current };
  }
  return nr.Fragment = t, nr.jsx = a, nr.jsxs = a, nr;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function ei() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Dn, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = Symbol.iterator, d = "@@iterator";
    function h(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = b && s[b] || s[d];
      return typeof g == "function" ? g : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(s) {
      {
        for (var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), P = 1; P < g; P++)
          _[P - 1] = arguments[P];
        C("error", s, _);
      }
    }
    function C(s, g, _) {
      {
        var P = S.ReactDebugCurrentFrame, K = P.getStackAddendum();
        K !== "" && (g += "%s", _ = _.concat([K]));
        var te = _.map(function(Y) {
          return String(Y);
        });
        te.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, te);
      }
    }
    var R = !1, y = !1, q = !1, A = !1, we = !1, me;
    me = Symbol.for("react.module.reference");
    function $(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || we || s === o || s === l || s === f || A || s === v || R || y || q || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === m || s.$$typeof === a || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === me || s.getModuleId !== void 0));
    }
    function ie(s, g, _) {
      var P = s.displayName;
      if (P)
        return P;
      var K = g.displayName || g.name || "";
      return K !== "" ? _ + "(" + K + ")" : _;
    }
    function de(s) {
      return s.displayName || "Context";
    }
    function ce(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var g = s;
            return de(g) + ".Consumer";
          case a:
            var _ = s;
            return de(_._context) + ".Provider";
          case u:
            return ie(s, s.render, "ForwardRef");
          case m:
            var P = s.displayName || null;
            return P !== null ? P : ce(s.type) || "Memo";
          case p: {
            var K = s, te = K._payload, Y = K._init;
            try {
              return ce(Y(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, ge = 0, he, Te, ke, je, E, w, M;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function k() {
      {
        if (ge === 0) {
          he = console.log, Te = console.info, ke = console.warn, je = console.error, E = console.group, w = console.groupCollapsed, M = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ge++;
      }
    }
    function L() {
      {
        if (ge--, ge === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, s, {
              value: he
            }),
            info: ne({}, s, {
              value: Te
            }),
            warn: ne({}, s, {
              value: ke
            }),
            error: ne({}, s, {
              value: je
            }),
            group: ne({}, s, {
              value: E
            }),
            groupCollapsed: ne({}, s, {
              value: w
            }),
            groupEnd: ne({}, s, {
              value: M
            })
          });
        }
        ge < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = S.ReactCurrentDispatcher, N;
    function D(s, g, _) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (K) {
            var P = K.stack.trim().match(/\n( *(at )?)/);
            N = P && P[1] || "";
          }
        return `
` + N + s;
      }
    }
    var z = !1, F;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      F = new pe();
    }
    function x(s, g) {
      if (!s || z)
        return "";
      {
        var _ = F.get(s);
        if (_ !== void 0)
          return _;
      }
      var P;
      z = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = I.current, I.current = null, k();
      try {
        if (g) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (De) {
              P = De;
            }
            Reflect.construct(s, [], Y);
          } else {
            try {
              Y.call();
            } catch (De) {
              P = De;
            }
            s.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            P = De;
          }
          s();
        }
      } catch (De) {
        if (De && P && typeof De.stack == "string") {
          for (var V = De.stack.split(`
`), be = P.stack.split(`
`), ue = V.length - 1, le = be.length - 1; ue >= 1 && le >= 0 && V[ue] !== be[le]; )
            le--;
          for (; ue >= 1 && le >= 0; ue--, le--)
            if (V[ue] !== be[le]) {
              if (ue !== 1 || le !== 1)
                do
                  if (ue--, le--, le < 0 || V[ue] !== be[le]) {
                    var Oe = `
` + V[ue].replace(" at new ", " at ");
                    return s.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", s.displayName)), typeof s == "function" && F.set(s, Oe), Oe;
                  }
                while (ue >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        z = !1, I.current = te, L(), Error.prepareStackTrace = K;
      }
      var We = s ? s.displayName || s.name : "", Ut = We ? D(We) : "";
      return typeof s == "function" && F.set(s, Ut), Ut;
    }
    function Ee(s, g, _) {
      return x(s, !1);
    }
    function T(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function Re(s, g, _) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return x(s, T(s));
      if (typeof s == "string")
        return D(s);
      switch (s) {
        case l:
          return D("Suspense");
        case f:
          return D("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return Ee(s.render);
          case m:
            return Re(s.type, g, _);
          case p: {
            var P = s, K = P._payload, te = P._init;
            try {
              return Re(te(K), g, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, rr = {}, $t = S.ReactDebugCurrentFrame;
    function hr(s) {
      if (s) {
        var g = s._owner, _ = Re(s.type, s._source, g ? g.type : null);
        $t.setExtraStackFrame(_);
      } else
        $t.setExtraStackFrame(null);
    }
    function _o(s, g, _, P, K) {
      {
        var te = Function.call.bind(Me);
        for (var Y in s)
          if (te(s, Y)) {
            var V = void 0;
            try {
              if (typeof s[Y] != "function") {
                var be = Error((P || "React class") + ": " + _ + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              V = s[Y](g, Y, P, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              V = ue;
            }
            V && !(V instanceof Error) && (hr(K), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", _, Y, typeof V), hr(null)), V instanceof Error && !(V.message in rr) && (rr[V.message] = !0, hr(K), O("Failed %s type: %s", _, V.message), hr(null));
          }
      }
    }
    var So = Array.isArray;
    function zr(s) {
      return So(s);
    }
    function wo(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, _ = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return _;
      }
    }
    function To(s) {
      try {
        return kt(s), !1;
      } catch {
        return !0;
      }
    }
    function kt(s) {
      return "" + s;
    }
    function At(s) {
      if (To(s))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wo(s)), kt(s);
    }
    var tr = S.ReactCurrentOwner, Oo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Nt, Wr;
    Wr = {};
    function Ro(s) {
      if (Me.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Co(s) {
      if (Me.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Po(s, g) {
      if (typeof s.ref == "string" && tr.current && g && tr.current.stateNode !== g) {
        var _ = ce(tr.current.type);
        Wr[_] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ce(tr.current.type), s.ref), Wr[_] = !0);
      }
    }
    function $o(s, g) {
      {
        var _ = function() {
          It || (It = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function ko(s, g) {
      {
        var _ = function() {
          Nt || (Nt = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Ao = function(s, g, _, P, K, te, Y) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: _,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Io(s, g, _, P, K) {
      {
        var te, Y = {}, V = null, be = null;
        _ !== void 0 && (At(_), V = "" + _), Co(g) && (At(g.key), V = "" + g.key), Ro(g) && (be = g.ref, Po(g, K));
        for (te in g)
          Me.call(g, te) && !Oo.hasOwnProperty(te) && (Y[te] = g[te]);
        if (s && s.defaultProps) {
          var ue = s.defaultProps;
          for (te in ue)
            Y[te] === void 0 && (Y[te] = ue[te]);
        }
        if (V || be) {
          var le = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          V && $o(Y, le), be && ko(Y, le);
        }
        return Ao(s, V, be, K, P, tr.current, Y);
      }
    }
    var Yr = S.ReactCurrentOwner, jt = S.ReactDebugCurrentFrame;
    function ze(s) {
      if (s) {
        var g = s._owner, _ = Re(s.type, s._source, g ? g.type : null);
        jt.setExtraStackFrame(_);
      } else
        jt.setExtraStackFrame(null);
    }
    var Br;
    Br = !1;
    function qr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function Mt() {
      {
        if (Yr.current) {
          var s = ce(Yr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function No(s) {
      {
        if (s !== void 0) {
          var g = s.fileName.replace(/^.*[\\\/]/, ""), _ = s.lineNumber;
          return `

Check your code at ` + g + ":" + _ + ".";
        }
        return "";
      }
    }
    var Dt = {};
    function jo(s) {
      {
        var g = Mt();
        if (!g) {
          var _ = typeof s == "string" ? s : s.displayName || s.name;
          _ && (g = `

Check the top-level render call using <` + _ + ">.");
        }
        return g;
      }
    }
    function Ft(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var _ = jo(g);
        if (Dt[_])
          return;
        Dt[_] = !0;
        var P = "";
        s && s._owner && s._owner !== Yr.current && (P = " It was passed a child from " + ce(s._owner.type) + "."), ze(s), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, P), ze(null);
      }
    }
    function Lt(s, g) {
      {
        if (typeof s != "object")
          return;
        if (zr(s))
          for (var _ = 0; _ < s.length; _++) {
            var P = s[_];
            qr(P) && Ft(P, g);
          }
        else if (qr(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var K = h(s);
          if (typeof K == "function" && K !== s.entries)
            for (var te = K.call(s), Y; !(Y = te.next()).done; )
              qr(Y.value) && Ft(Y.value, g);
        }
      }
    }
    function Mo(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var _;
        if (typeof g == "function")
          _ = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === m))
          _ = g.propTypes;
        else
          return;
        if (_) {
          var P = ce(g);
          _o(_, s.props, "prop", P, s);
        } else if (g.PropTypes !== void 0 && !Br) {
          Br = !0;
          var K = ce(g);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Do(s) {
      {
        for (var g = Object.keys(s.props), _ = 0; _ < g.length; _++) {
          var P = g[_];
          if (P !== "children" && P !== "key") {
            ze(s), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), ze(null);
            break;
          }
        }
        s.ref !== null && (ze(s), O("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function Vt(s, g, _, P, K, te) {
      {
        var Y = $(s);
        if (!Y) {
          var V = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = No(K);
          be ? V += be : V += Mt();
          var ue;
          s === null ? ue = "null" : zr(s) ? ue = "array" : s !== void 0 && s.$$typeof === r ? (ue = "<" + (ce(s.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof s, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, V);
        }
        var le = Io(s, g, _, K, te);
        if (le == null)
          return le;
        if (Y) {
          var Oe = g.children;
          if (Oe !== void 0)
            if (P)
              if (zr(Oe)) {
                for (var We = 0; We < Oe.length; We++)
                  Lt(Oe[We], s);
                Object.freeze && Object.freeze(Oe);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lt(Oe, s);
        }
        return s === n ? Do(le) : Mo(le), le;
      }
    }
    function Fo(s, g, _) {
      return Vt(s, g, _, !0);
    }
    function Lo(s, g, _) {
      return Vt(s, g, _, !1);
    }
    var Vo = Lo, Uo = Fo;
    or.Fragment = n, or.jsx = Vo, or.jsxs = Uo;
  }()), or;
}
var Bt;
function Ln() {
  return Bt || (Bt = 1, process.env.NODE_ENV === "production" ? yr.exports = Qo() : yr.exports = ei()), yr.exports;
}
var B = Ln();
const fu = (e) => {
  const { data: r, columns: t, loading: n, CustomToolbar: o } = e, i = () => /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs(qo, { sx: { marginBottom: "25px" }, children: [
    /* @__PURE__ */ B.jsx(Ko, {}),
    /* @__PURE__ */ B.jsx(Go, {}),
    /* @__PURE__ */ B.jsx(Ho, {})
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsx(
    Bo,
    {
      loading: n,
      rows: r || [],
      columns: t,
      style: { padding: "30px 16px 4px 16px", margin: "12px 26px" },
      getRowId: (a) => a.id,
      slots: {
        toolbar: o ? i : null
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
function du() {
  return /* @__PURE__ */ B.jsx("div", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit nisi autem ipsa veritatis corrupti fugiat commodi repudiandae neque a quaerat laborum perspiciatis deleniti aspernatur ratione, alias aut laudantium asperiores ut eligendi consequuntur deserunt." });
}
const dt = () => {
  const { activePage: e, goToPage: r, allPages: t, pageId: n } = Fn(Vn);
  return { activePage: e, goToPage: r, allPages: t, pageId: n };
}, Vn = zo(
  {}
), pu = ({
  children: e,
  pages: r
}) => {
  const t = atob(
    decodeURIComponent(window.location.hash.slice(1))
  ), n = t && JSON.parse(t), o = r.find(
    (m) => n && m.portlet === n.portlet
  ), [i, a] = zt(
    o || r[0]
  ), [c, u] = zt(
    (n == null ? void 0 : n.id) || void 0
  ), l = (m) => {
    const p = atob(
      decodeURIComponent(window.location.hash.slice(1))
    ), v = p && JSON.parse(p), b = r.find((d) => v && d.portlet === v.portlet);
    a(b || i), u((v == null ? void 0 : v.id) ?? c);
  };
  Wo(() => (window.addEventListener("hashchange", l), () => window.removeEventListener("hashchange", l)), []);
  const f = (m) => {
    const p = r.find((v) => v.portlet === m.portlet);
    a(p || r[0]), u((v) => (m == null ? void 0 : m.id) || v), m.hasOwnProperty("id") || (m.id = c), window.location = "#" + encodeURIComponent(btoa(JSON.stringify(m)));
  };
  return /* @__PURE__ */ B.jsx(
    Vn.Provider,
    {
      value: { goToPage: f, activePage: i, allPages: r, pageId: c },
      children: e
    }
  );
}, mu = (e) => {
  const { goToPage: r } = dt(), { pageobj: t, children: n } = e, o = (i, a) => {
    e.onClick && e.onClick(i), r(a);
  };
  return /* @__PURE__ */ B.jsx(
    ot,
    {
      ...e,
      onClick: (i) => o(i, t),
      variant: "body1",
      style: { cursor: "pointer", color: "#1976D2", padding: "14px 0px" },
      children: n
    }
  );
}, hu = (e) => {
  const { goToPage: r } = dt(), { pageobj: t, children: n } = e, o = (i, a) => {
    e.onClick && e.onClick(i), r(a);
  };
  return /* @__PURE__ */ B.jsx(Jo, { ...e, onClick: (i) => o(i, t), children: n });
}, yu = () => {
  const { activePage: e } = dt();
  return (e == null ? void 0 : e.element) ?? /* @__PURE__ */ B.jsx(B.Fragment, { children: "Page not found" });
};
function gu() {
  return /* @__PURE__ */ B.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      children: [
        /* @__PURE__ */ B.jsx("rect", { width: "32", height: "32", rx: "16", fill: "#1976D2" }),
        /* @__PURE__ */ B.jsx(
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
function vu() {
  return /* @__PURE__ */ B.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      children: [
        /* @__PURE__ */ B.jsx("rect", { width: "32", height: "32", rx: "16", fill: "#2E7D32" }),
        /* @__PURE__ */ B.jsx(
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
function ri() {
  return /* @__PURE__ */ B.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8",
      height: "12",
      viewBox: "0 0 8 12",
      fill: "none",
      children: /* @__PURE__ */ B.jsx(
        "path",
        {
          d: "M1.89626 0.5L0.60376 1.7925L4.80209 6L0.60376 10.2075L1.89626 11.5L7.39626 6L1.89626 0.5Z",
          fill: "#0288D1"
        }
      )
    }
  );
}
var pt = {}, Un = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Un);
var ti = Un.exports, Gr = {};
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, W.apply(this, arguments);
}
function Ve(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function zn(e) {
  if (!Ve(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = zn(e[t]);
  }), r;
}
function Pe(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? W({}, e) : e;
  return Ve(e) && Ve(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (Ve(r[o]) && o in e && Ve(e[o]) ? n[o] = Pe(e[o], r[o], t) : t.clone ? n[o] = Ve(r[o]) ? zn(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
var it = { exports: {} }, gr = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function ni() {
  if (qt)
    return J;
  qt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var q = y.$$typeof;
      switch (q) {
        case r:
          switch (y = y.type, y) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case f:
                case b:
                case v:
                case a:
                  return y;
                default:
                  return q;
              }
          }
        case t:
          return q;
      }
    }
  }
  function R(y) {
    return C(y) === l;
  }
  return J.AsyncMode = u, J.ConcurrentMode = l, J.ContextConsumer = c, J.ContextProvider = a, J.Element = r, J.ForwardRef = f, J.Fragment = n, J.Lazy = b, J.Memo = v, J.Portal = t, J.Profiler = i, J.StrictMode = o, J.Suspense = m, J.isAsyncMode = function(y) {
    return R(y) || C(y) === u;
  }, J.isConcurrentMode = R, J.isContextConsumer = function(y) {
    return C(y) === c;
  }, J.isContextProvider = function(y) {
    return C(y) === a;
  }, J.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }, J.isForwardRef = function(y) {
    return C(y) === f;
  }, J.isFragment = function(y) {
    return C(y) === n;
  }, J.isLazy = function(y) {
    return C(y) === b;
  }, J.isMemo = function(y) {
    return C(y) === v;
  }, J.isPortal = function(y) {
    return C(y) === t;
  }, J.isProfiler = function(y) {
    return C(y) === i;
  }, J.isStrictMode = function(y) {
    return C(y) === o;
  }, J.isSuspense = function(y) {
    return C(y) === m;
  }, J.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === l || y === i || y === o || y === m || y === p || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === v || y.$$typeof === a || y.$$typeof === c || y.$$typeof === f || y.$$typeof === h || y.$$typeof === S || y.$$typeof === O || y.$$typeof === d);
  }, J.typeOf = C, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function oi() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function C(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === l || x === i || x === o || x === m || x === p || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === v || x.$$typeof === a || x.$$typeof === c || x.$$typeof === f || x.$$typeof === h || x.$$typeof === S || x.$$typeof === O || x.$$typeof === d);
    }
    function R(x) {
      if (typeof x == "object" && x !== null) {
        var Ee = x.$$typeof;
        switch (Ee) {
          case r:
            var T = x.type;
            switch (T) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case m:
                return T;
              default:
                var Re = T && T.$$typeof;
                switch (Re) {
                  case c:
                  case f:
                  case b:
                  case v:
                  case a:
                    return Re;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var y = u, q = l, A = c, we = a, me = r, $ = f, ie = n, de = b, ce = v, ne = t, ge = i, he = o, Te = m, ke = !1;
    function je(x) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(x) || R(x) === u;
    }
    function E(x) {
      return R(x) === l;
    }
    function w(x) {
      return R(x) === c;
    }
    function M(x) {
      return R(x) === a;
    }
    function j(x) {
      return typeof x == "object" && x !== null && x.$$typeof === r;
    }
    function k(x) {
      return R(x) === f;
    }
    function L(x) {
      return R(x) === n;
    }
    function I(x) {
      return R(x) === b;
    }
    function N(x) {
      return R(x) === v;
    }
    function D(x) {
      return R(x) === t;
    }
    function z(x) {
      return R(x) === i;
    }
    function F(x) {
      return R(x) === o;
    }
    function pe(x) {
      return R(x) === m;
    }
    X.AsyncMode = y, X.ConcurrentMode = q, X.ContextConsumer = A, X.ContextProvider = we, X.Element = me, X.ForwardRef = $, X.Fragment = ie, X.Lazy = de, X.Memo = ce, X.Portal = ne, X.Profiler = ge, X.StrictMode = he, X.Suspense = Te, X.isAsyncMode = je, X.isConcurrentMode = E, X.isContextConsumer = w, X.isContextProvider = M, X.isElement = j, X.isForwardRef = k, X.isFragment = L, X.isLazy = I, X.isMemo = N, X.isPortal = D, X.isProfiler = z, X.isStrictMode = F, X.isSuspense = pe, X.isValidElementType = C, X.typeOf = R;
  }()), X;
}
var Gt;
function Wn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? gr.exports = ni() : gr.exports = oi()), gr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Hr, Ht;
function ii() {
  if (Ht)
    return Hr;
  Ht = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Hr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), l, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var m in c)
        r.call(c, m) && (u[m] = c[m]);
      if (e) {
        l = e(c);
        for (var p = 0; p < l.length; p++)
          t.call(c, l[p]) && (u[l[p]] = c[l[p]]);
      }
    }
    return u;
  }, Hr;
}
var Jr, Jt;
function mt() {
  if (Jt)
    return Jr;
  Jt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = e, Jr;
}
var Xr, Xt;
function Yn() {
  return Xt || (Xt = 1, Xr = Function.call.bind(Object.prototype.hasOwnProperty)), Xr;
}
var Zr, Zt;
function ai() {
  if (Zt)
    return Zr;
  Zt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = mt(), t = {}, n = Yn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var p = Error(
                (u || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[f](a, f, u, c, null, r);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + c + " type: " + m.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Zr = o, Zr;
}
var Qr, Qt;
function si() {
  if (Qt)
    return Qr;
  Qt = 1;
  var e = Wn(), r = ii(), t = mt(), n = Yn(), o = ai(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Qr = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(E) {
      var w = E && (l && E[l] || E[f]);
      if (typeof w == "function")
        return w;
    }
    var p = "<<anonymous>>", v = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: O(),
      arrayOf: C,
      element: R(),
      elementType: y(),
      instanceOf: q,
      node: $(),
      objectOf: we,
      oneOf: A,
      oneOfType: me,
      shape: de,
      exact: ce
    };
    function b(E, w) {
      return E === w ? E !== 0 || 1 / E === 1 / w : E !== E && w !== w;
    }
    function d(E, w) {
      this.message = E, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function h(E) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, M = 0;
      function j(L, I, N, D, z, F, pe) {
        if (D = D || p, F = F || N, pe !== t) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = D + ":" + N;
            !w[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[Ee] = !0, M++);
          }
        }
        return I[N] == null ? L ? I[N] === null ? new d("The " + z + " `" + F + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new d("The " + z + " `" + F + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : E(I, N, D, z, F);
      }
      var k = j.bind(null, !1);
      return k.isRequired = j.bind(null, !0), k;
    }
    function S(E) {
      function w(M, j, k, L, I, N) {
        var D = M[j], z = he(D);
        if (z !== E) {
          var F = Te(D);
          return new d(
            "Invalid " + L + " `" + I + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return h(w);
    }
    function O() {
      return h(a);
    }
    function C(E) {
      function w(M, j, k, L, I) {
        if (typeof E != "function")
          return new d("Property `" + I + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var N = M[j];
        if (!Array.isArray(N)) {
          var D = he(N);
          return new d("Invalid " + L + " `" + I + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected an array."));
        }
        for (var z = 0; z < N.length; z++) {
          var F = E(N, z, k, L, I + "[" + z + "]", t);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return h(w);
    }
    function R() {
      function E(w, M, j, k, L) {
        var I = w[M];
        if (!c(I)) {
          var N = he(I);
          return new d("Invalid " + k + " `" + L + "` of type " + ("`" + N + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(E);
    }
    function y() {
      function E(w, M, j, k, L) {
        var I = w[M];
        if (!e.isValidElementType(I)) {
          var N = he(I);
          return new d("Invalid " + k + " `" + L + "` of type " + ("`" + N + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(E);
    }
    function q(E) {
      function w(M, j, k, L, I) {
        if (!(M[j] instanceof E)) {
          var N = E.name || p, D = je(M[j]);
          return new d("Invalid " + L + " `" + I + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return h(w);
    }
    function A(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function w(M, j, k, L, I) {
        for (var N = M[j], D = 0; D < E.length; D++)
          if (b(N, E[D]))
            return null;
        var z = JSON.stringify(E, function(pe, x) {
          var Ee = Te(x);
          return Ee === "symbol" ? String(x) : x;
        });
        return new d("Invalid " + L + " `" + I + "` of value `" + String(N) + "` " + ("supplied to `" + k + "`, expected one of " + z + "."));
      }
      return h(w);
    }
    function we(E) {
      function w(M, j, k, L, I) {
        if (typeof E != "function")
          return new d("Property `" + I + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var N = M[j], D = he(N);
        if (D !== "object")
          return new d("Invalid " + L + " `" + I + "` of type " + ("`" + D + "` supplied to `" + k + "`, expected an object."));
        for (var z in N)
          if (n(N, z)) {
            var F = E(N, z, k, L, I + "." + z, t);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return h(w);
    }
    function me(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var w = 0; w < E.length; w++) {
        var M = E[w];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(M) + " at index " + w + "."
          ), a;
      }
      function j(k, L, I, N, D) {
        for (var z = [], F = 0; F < E.length; F++) {
          var pe = E[F], x = pe(k, L, I, N, D, t);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && z.push(x.data.expectedType);
        }
        var Ee = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new d("Invalid " + N + " `" + D + "` supplied to " + ("`" + I + "`" + Ee + "."));
      }
      return h(j);
    }
    function $() {
      function E(w, M, j, k, L) {
        return ne(w[M]) ? null : new d("Invalid " + k + " `" + L + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return h(E);
    }
    function ie(E, w, M, j, k) {
      return new d(
        (E || "React class") + ": " + w + " type `" + M + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function de(E) {
      function w(M, j, k, L, I) {
        var N = M[j], D = he(N);
        if (D !== "object")
          return new d("Invalid " + L + " `" + I + "` of type `" + D + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var z in E) {
          var F = E[z];
          if (typeof F != "function")
            return ie(k, L, I, z, Te(F));
          var pe = F(N, z, k, L, I + "." + z, t);
          if (pe)
            return pe;
        }
        return null;
      }
      return h(w);
    }
    function ce(E) {
      function w(M, j, k, L, I) {
        var N = M[j], D = he(N);
        if (D !== "object")
          return new d("Invalid " + L + " `" + I + "` of type `" + D + "` " + ("supplied to `" + k + "`, expected `object`."));
        var z = r({}, M[j], E);
        for (var F in z) {
          var pe = E[F];
          if (n(E, F) && typeof pe != "function")
            return ie(k, L, I, F, Te(pe));
          if (!pe)
            return new d(
              "Invalid " + L + " `" + I + "` key `" + F + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(M[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var x = pe(N, F, k, L, I + "." + F, t);
          if (x)
            return x;
        }
        return null;
      }
      return h(w);
    }
    function ne(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(ne);
          if (E === null || c(E))
            return !0;
          var w = m(E);
          if (w) {
            var M = w.call(E), j;
            if (w !== E.entries) {
              for (; !(j = M.next()).done; )
                if (!ne(j.value))
                  return !1;
            } else
              for (; !(j = M.next()).done; ) {
                var k = j.value;
                if (k && !ne(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ge(E, w) {
      return E === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function he(E) {
      var w = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ge(w, E) ? "symbol" : w;
    }
    function Te(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var w = he(E);
      if (w === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function ke(E) {
      var w = Te(E);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function je(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Qr;
}
var et, en;
function ci() {
  if (en)
    return et;
  en = 1;
  var e = mt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, et = function() {
    function n(a, c, u, l, f, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, et;
}
if (process.env.NODE_ENV !== "production") {
  var ui = Wn(), li = !0;
  it.exports = si()(ui.isElement, li);
} else
  it.exports = ci()();
var fi = it.exports;
const re = /* @__PURE__ */ Xo(fi);
function Xe(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var at = { exports: {} }, Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function di() {
  if (rn)
    return Z;
  rn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function d(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case u:
                case p:
                case m:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return Z.ContextConsumer = a, Z.ContextProvider = i, Z.Element = e, Z.ForwardRef = u, Z.Fragment = t, Z.Lazy = p, Z.Memo = m, Z.Portal = r, Z.Profiler = o, Z.StrictMode = n, Z.Suspense = l, Z.SuspenseList = f, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(h) {
    return d(h) === a;
  }, Z.isContextProvider = function(h) {
    return d(h) === i;
  }, Z.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Z.isForwardRef = function(h) {
    return d(h) === u;
  }, Z.isFragment = function(h) {
    return d(h) === t;
  }, Z.isLazy = function(h) {
    return d(h) === p;
  }, Z.isMemo = function(h) {
    return d(h) === m;
  }, Z.isPortal = function(h) {
    return d(h) === r;
  }, Z.isProfiler = function(h) {
    return d(h) === o;
  }, Z.isStrictMode = function(h) {
    return d(h) === n;
  }, Z.isSuspense = function(h) {
    return d(h) === l;
  }, Z.isSuspenseList = function(h) {
    return d(h) === f;
  }, Z.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === l || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === i || h.$$typeof === a || h.$$typeof === u || h.$$typeof === b || h.getModuleId !== void 0);
  }, Z.typeOf = d, Z;
}
var Q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function pi() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = !1, d = !1, h = !1, S = !1, O = !1, C;
    C = Symbol.for("react.module.reference");
    function R(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === t || T === o || O || T === n || T === l || T === f || S || T === v || b || d || h || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === m || T.$$typeof === i || T.$$typeof === a || T.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === C || T.getModuleId !== void 0));
    }
    function y(T) {
      if (typeof T == "object" && T !== null) {
        var Re = T.$$typeof;
        switch (Re) {
          case e:
            var Me = T.type;
            switch (Me) {
              case t:
              case o:
              case n:
              case l:
              case f:
                return Me;
              default:
                var rr = Me && Me.$$typeof;
                switch (rr) {
                  case c:
                  case a:
                  case u:
                  case p:
                  case m:
                  case i:
                    return rr;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var q = a, A = i, we = e, me = u, $ = t, ie = p, de = m, ce = r, ne = o, ge = n, he = l, Te = f, ke = !1, je = !1;
    function E(T) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function w(T) {
      return je || (je = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(T) {
      return y(T) === a;
    }
    function j(T) {
      return y(T) === i;
    }
    function k(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function L(T) {
      return y(T) === u;
    }
    function I(T) {
      return y(T) === t;
    }
    function N(T) {
      return y(T) === p;
    }
    function D(T) {
      return y(T) === m;
    }
    function z(T) {
      return y(T) === r;
    }
    function F(T) {
      return y(T) === o;
    }
    function pe(T) {
      return y(T) === n;
    }
    function x(T) {
      return y(T) === l;
    }
    function Ee(T) {
      return y(T) === f;
    }
    Q.ContextConsumer = q, Q.ContextProvider = A, Q.Element = we, Q.ForwardRef = me, Q.Fragment = $, Q.Lazy = ie, Q.Memo = de, Q.Portal = ce, Q.Profiler = ne, Q.StrictMode = ge, Q.Suspense = he, Q.SuspenseList = Te, Q.isAsyncMode = E, Q.isConcurrentMode = w, Q.isContextConsumer = M, Q.isContextProvider = j, Q.isElement = k, Q.isForwardRef = L, Q.isFragment = I, Q.isLazy = N, Q.isMemo = D, Q.isPortal = z, Q.isProfiler = F, Q.isStrictMode = pe, Q.isSuspense = x, Q.isSuspenseList = Ee, Q.isValidElementType = R, Q.typeOf = y;
  }()), Q;
}
process.env.NODE_ENV === "production" ? at.exports = di() : at.exports = pi();
var nn = at.exports;
const mi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function hi(e) {
  const r = `${e}`.match(mi);
  return r && r[1] || "";
}
function Bn(e, r = "") {
  return e.displayName || e.name || hi(e) || r;
}
function on(e, r, t) {
  const n = Bn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function yi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Bn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case nn.ForwardRef:
          return on(e, e.render, "ForwardRef");
        case nn.Memo:
          return on(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $e(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Xe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function gi(...e) {
  return e.reduce((r, t) => t == null ? r : function(...o) {
    r.apply(this, o), t.apply(this, o);
  }, () => {
  });
}
function vi(e, r = 166) {
  let t;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(t), t = setTimeout(i, r);
  }
  return n.clear = () => {
    clearTimeout(t);
  }, n;
}
function bi(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : (t, n, o, i, a) => {
    const c = o || "<<anonymous>>", u = a || n;
    return typeof t[n] < "u" ? new Error(`The ${i} \`${u}\` of \`${c}\` is deprecated. ${r}`) : null;
  };
}
function Ei(e, r) {
  var t, n;
  return /* @__PURE__ */ U.isValidElement(e) && r.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (t = e.type.muiName) != null ? t : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function qn(e) {
  return e && e.ownerDocument || document;
}
function xi(e) {
  return qn(e).defaultView || window;
}
function _i(e, r) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const t = r ? W({}, r.propTypes) : null;
  return (o) => (i, a, c, u, l, ...f) => {
    const m = l || a, p = t == null ? void 0 : t[m];
    if (p) {
      const v = p(i, a, c, u, l, ...f);
      if (v)
        return v;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Kn(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Si = typeof window < "u" ? U.useLayoutEffect : U.useEffect, Gn = Si;
let an = 0;
function wi(e) {
  const [r, t] = U.useState(e), n = e || r;
  return U.useEffect(() => {
    r == null && (an += 1, t(`mui-${an}`));
  }, [r]), n;
}
const sn = U["useId".toString()];
function Ti(e) {
  if (sn !== void 0) {
    const r = sn();
    return e ?? r;
  }
  return wi(e);
}
function Oi(e, r, t, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || r;
  return typeof e[r] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Ri({
  controlled: e,
  default: r,
  name: t,
  state: n = "value"
}) {
  const {
    current: o
  } = U.useRef(e !== void 0), [i, a] = U.useState(r), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    U.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${t} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${t} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, t, e]);
    const {
      current: l
    } = U.useRef(r);
    U.useEffect(() => {
      !o && l !== r && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${t} after being initialized. To suppress this warning opt to use a controlled ${t}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const u = U.useCallback((l) => {
    o || a(l);
  }, []);
  return [c, u];
}
function Ci(e) {
  const r = U.useRef(e);
  return Gn(() => {
    r.current = e;
  }), U.useCallback((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  ), []);
}
function Pi(...e) {
  return U.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Kn(t, r);
    });
  }, e);
}
let Pr = !0, st = !1, cn;
const $i = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function ki(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && $i[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ai(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Pr = !0);
}
function rt() {
  Pr = !1;
}
function Ii() {
  this.visibilityState === "hidden" && st && (Pr = !0);
}
function Ni(e) {
  e.addEventListener("keydown", Ai, !0), e.addEventListener("mousedown", rt, !0), e.addEventListener("pointerdown", rt, !0), e.addEventListener("touchstart", rt, !0), e.addEventListener("visibilitychange", Ii, !0);
}
function ji(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return Pr || ki(r);
}
function Mi() {
  const e = U.useCallback((o) => {
    o != null && Ni(o.ownerDocument);
  }, []), r = U.useRef(!1);
  function t() {
    return r.current ? (st = !0, window.clearTimeout(cn), cn = window.setTimeout(() => {
      st = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(o) {
    return ji(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function Hn(e, r) {
  const t = W({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = W({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = W({}, i), Object.keys(o).forEach((a) => {
        t[n][a] = Hn(o[a], i[a]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Di(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = r(a);
          c !== "" && i.push(c), t && t[a] && i.push(t[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const un = (e) => e, Fi = () => {
  let e = un;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = un;
    }
  };
}, Li = Fi(), Jn = Li, Vi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ht(e, r, t = "Mui") {
  const n = Vi[r];
  return n ? `${t}-${n}` : `${Jn.generate(e)}-${r}`;
}
function Ui(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = ht(e, o, t);
  }), n;
}
function Le(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Xn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Xn(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function zi() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Xn(e)) && (n && (n += " "), n += r);
  return n;
}
function Zn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Wi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yi = /* @__PURE__ */ Zn(
  function(e) {
    return Wi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Bi(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function qi(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ki = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qi(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = Bi(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ve = "-ms-", wr = "-moz-", G = "-webkit-", yt = "comm", gt = "rule", vt = "decl", Gi = "@import", Qn = "@keyframes", Hi = "@layer", Ji = Math.abs, $r = String.fromCharCode, Xi = Object.assign;
function Zi(e, r) {
  return ye(e, 0) ^ 45 ? (((r << 2 ^ ye(e, 0)) << 2 ^ ye(e, 1)) << 2 ^ ye(e, 2)) << 2 ^ ye(e, 3) : 0;
}
function eo(e) {
  return e.trim();
}
function Qi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function H(e, r, t) {
  return e.replace(r, t);
}
function ct(e, r) {
  return e.indexOf(r);
}
function ye(e, r) {
  return e.charCodeAt(r) | 0;
}
function cr(e, r, t) {
  return e.slice(r, t);
}
function Ae(e) {
  return e.length;
}
function bt(e) {
  return e.length;
}
function vr(e, r) {
  return r.push(e), e;
}
function ea(e, r) {
  return e.map(r).join("");
}
var kr = 1, Ze = 1, ro = 0, xe = 0, fe = 0, er = "";
function Ar(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: kr, column: Ze, length: a, return: "" };
}
function ir(e, r) {
  return Xi(Ar("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ra() {
  return fe;
}
function ta() {
  return fe = xe > 0 ? ye(er, --xe) : 0, Ze--, fe === 10 && (Ze = 1, kr--), fe;
}
function Se() {
  return fe = xe < ro ? ye(er, xe++) : 0, Ze++, fe === 10 && (Ze = 1, kr++), fe;
}
function Ne() {
  return ye(er, xe);
}
function br() {
  return xe;
}
function dr(e, r) {
  return cr(er, e, r);
}
function ur(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function to(e) {
  return kr = Ze = 1, ro = Ae(er = e), xe = 0, [];
}
function no(e) {
  return er = "", e;
}
function Er(e) {
  return eo(dr(xe - 1, ut(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function na(e) {
  for (; (fe = Ne()) && fe < 33; )
    Se();
  return ur(e) > 2 || ur(fe) > 3 ? "" : " ";
}
function oa(e, r) {
  for (; --r && Se() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97); )
    ;
  return dr(e, br() + (r < 6 && Ne() == 32 && Se() == 32));
}
function ut(e) {
  for (; Se(); )
    switch (fe) {
      case e:
        return xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ut(fe);
        break;
      case 40:
        e === 41 && ut(e);
        break;
      case 92:
        Se();
        break;
    }
  return xe;
}
function ia(e, r) {
  for (; Se() && e + fe !== 47 + 10; )
    if (e + fe === 42 + 42 && Ne() === 47)
      break;
  return "/*" + dr(r, xe - 1) + "*" + $r(e === 47 ? e : Se());
}
function aa(e) {
  for (; !ur(Ne()); )
    Se();
  return dr(e, xe);
}
function sa(e) {
  return no(xr("", null, null, null, [""], e = to(e), 0, [0], e));
}
function xr(e, r, t, n, o, i, a, c, u) {
  for (var l = 0, f = 0, m = a, p = 0, v = 0, b = 0, d = 1, h = 1, S = 1, O = 0, C = "", R = o, y = i, q = n, A = C; h; )
    switch (b = O, O = Se()) {
      case 40:
        if (b != 108 && ye(A, m - 1) == 58) {
          ct(A += H(Er(O), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Er(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += na(b);
        break;
      case 92:
        A += oa(br() - 1, 7);
        continue;
      case 47:
        switch (Ne()) {
          case 42:
          case 47:
            vr(ca(ia(Se(), br()), r, t), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * d:
        c[l++] = Ae(A) * S;
      case 125 * d:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            h = 0;
          case 59 + f:
            S == -1 && (A = H(A, /\f/g, "")), v > 0 && Ae(A) - m && vr(v > 32 ? fn(A + ";", n, t, m - 1) : fn(H(A, " ", "") + ";", n, t, m - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (vr(q = ln(A, r, t, l, f, o, c, C, R = [], y = [], m), i), O === 123)
              if (f === 0)
                xr(A, r, q, q, R, i, m, c, y);
              else
                switch (p === 99 && ye(A, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xr(e, q, q, n && vr(ln(e, q, q, 0, 0, o, c, C, o, R = [], m), y), o, y, m, c, n ? R : y);
                    break;
                  default:
                    xr(A, q, q, q, [""], y, 0, c, y);
                }
        }
        l = f = v = 0, d = S = 1, C = A = "", m = a;
        break;
      case 58:
        m = 1 + Ae(A), v = b;
      default:
        if (d < 1) {
          if (O == 123)
            --d;
          else if (O == 125 && d++ == 0 && ta() == 125)
            continue;
        }
        switch (A += $r(O), O * d) {
          case 38:
            S = f > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            c[l++] = (Ae(A) - 1) * S, S = 1;
            break;
          case 64:
            Ne() === 45 && (A += Er(Se())), p = Ne(), f = m = Ae(C = A += aa(br())), O++;
            break;
          case 45:
            b === 45 && Ae(A) == 2 && (d = 0);
        }
    }
  return i;
}
function ln(e, r, t, n, o, i, a, c, u, l, f) {
  for (var m = o - 1, p = o === 0 ? i : [""], v = bt(p), b = 0, d = 0, h = 0; b < n; ++b)
    for (var S = 0, O = cr(e, m + 1, m = Ji(d = a[b])), C = e; S < v; ++S)
      (C = eo(d > 0 ? p[S] + " " + O : H(O, /&\f/g, p[S]))) && (u[h++] = C);
  return Ar(e, r, t, o === 0 ? gt : c, u, l, f);
}
function ca(e, r, t) {
  return Ar(e, r, t, yt, $r(ra()), cr(e, 2, -2), 0);
}
function fn(e, r, t, n) {
  return Ar(e, r, t, vt, cr(e, 0, n), cr(e, n + 1, -1), n);
}
function He(e, r) {
  for (var t = "", n = bt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function ua(e, r, t, n) {
  switch (e.type) {
    case Hi:
      if (e.children.length)
        break;
    case Gi:
    case vt:
      return e.return = e.return || e.value;
    case yt:
      return "";
    case Qn:
      return e.return = e.value + "{" + He(e.children, n) + "}";
    case gt:
      e.value = e.props.join(",");
  }
  return Ae(t = He(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function la(e) {
  var r = bt(e);
  return function(t, n, o, i) {
    for (var a = "", c = 0; c < r; c++)
      a += e[c](t, n, o, i) || "";
    return a;
  };
}
function fa(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var da = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ne(), o === 38 && i === 12 && (t[n] = 1), !ur(i); )
    Se();
  return dr(r, xe);
}, pa = function(r, t) {
  var n = -1, o = 44;
  do
    switch (ur(o)) {
      case 0:
        o === 38 && Ne() === 12 && (t[n] = 1), r[n] += da(xe - 1, t, n);
        break;
      case 2:
        r[n] += Er(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ne() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += $r(o);
    }
  while (o = Se());
  return r;
}, ma = function(r, t) {
  return no(pa(to(r), t));
}, dn = /* @__PURE__ */ new WeakMap(), ha = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !dn.get(n)) && !o) {
      dn.set(r, !0);
      for (var i = [], a = ma(t, i), c = n.props, u = 0, l = 0; u < a.length; u++)
        for (var f = 0; f < c.length; f++, l++)
          r.props[l] = i[u] ? a[u].replace(/&\f/g, c[f]) : c[f] + " " + a[u];
    }
  }
}, ya = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ga = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", va = function(r) {
  return r.type === "comm" && r.children.indexOf(ga) > -1;
}, ba = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!t.parent, c = a ? t.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var l = c[u];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (va(l))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, oo = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Ea = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!oo(t[n]))
      return !0;
  return !1;
}, pn = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, xa = function(r, t, n) {
  oo(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), pn(r)) : Ea(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), pn(r)));
};
function io(e, r) {
  switch (Zi(e, r)) {
    case 5103:
      return G + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + wr + e + ve + e + e;
    case 6828:
    case 4268:
      return G + e + ve + e + e;
    case 6165:
      return G + e + ve + "flex-" + e + e;
    case 5187:
      return G + e + H(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return G + e + ve + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return G + e + ve + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return G + e + ve + H(e, "shrink", "negative") + e;
    case 5292:
      return G + e + ve + H(e, "basis", "preferred-size") + e;
    case 6060:
      return G + "box-" + H(e, "-grow", "") + G + e + ve + H(e, "grow", "positive") + e;
    case 4554:
      return G + H(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, G + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ae(e) - 1 - r > 6)
        switch (ye(e, r + 1)) {
          case 109:
            if (ye(e, r + 4) !== 45)
              break;
          case 102:
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + wr + (ye(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ct(e, "stretch") ? io(H(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (ye(e, r + 1) !== 115)
        break;
    case 6444:
      switch (ye(e, Ae(e) - 3 - (~ct(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + G) + e;
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ye(e, r + 11)) {
        case 114:
          return G + e + ve + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + ve + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + ve + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + ve + e + e;
  }
  return e;
}
var _a = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case vt:
        r.return = io(r.value, r.length);
        break;
      case Qn:
        return He([ir(r, {
          value: H(r.value, "@", "@" + G)
        })], o);
      case gt:
        if (r.length)
          return ea(r.props, function(i) {
            switch (Qi(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return He([ir(r, {
                  props: [H(i, /:(read-\w+)/, ":" + wr + "$1")]
                })], o);
              case "::placeholder":
                return He([ir(r, {
                  props: [H(i, /:(plac\w+)/, ":" + G + "input-$1")]
                }), ir(r, {
                  props: [H(i, /:(plac\w+)/, ":" + wr + "$1")]
                }), ir(r, {
                  props: [H(i, /:(plac\w+)/, ve + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Sa = [_a], wa = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var h = d.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Sa;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, a, c = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var h = d.getAttribute("data-emotion").split(" "), S = 1; S < h.length; S++)
        i[h[S]] = !0;
      c.push(d);
    }
  );
  var u, l = [ha, ya];
  process.env.NODE_ENV !== "production" && l.push(ba({
    get compat() {
      return b.compat;
    }
  }), xa);
  {
    var f, m = [ua, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? f.insert(d.return) : d.value && d.type !== yt && f.insert(d.value + "{}"));
    } : fa(function(d) {
      f.insert(d);
    })], p = la(l.concat(o, m)), v = function(h) {
      return He(sa(h), p);
    };
    u = function(h, S, O, C) {
      f = O, process.env.NODE_ENV !== "production" && S.map !== void 0 && (f = {
        insert: function(y) {
          O.insert(y + S.map);
        }
      }), v(h ? h + "{" + S.styles + "}" : S.styles), C && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Ki({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return b.sheet.hydrate(c), b;
}, Ta = !0;
function ao(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Et = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ta === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, so = function(r, t, n) {
  Et(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Oa(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Ra = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, mn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ca = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Pa = /[A-Z]|^ms/g, co = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xt = function(r) {
  return r.charCodeAt(1) === 45;
}, hn = function(r) {
  return r != null && typeof r != "boolean";
}, tt = /* @__PURE__ */ Zn(function(e) {
  return xt(e) ? e : e.replace(Pa, "-$&").toLowerCase();
}), Tr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(co, function(n, o, i) {
          return Ce = {
            name: o,
            styles: i,
            next: Ce
          }, o;
        });
  }
  return Ra[r] !== 1 && !xt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var $a = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ka = ["normal", "none", "initial", "inherit", "unset"], Aa = Tr, Ia = /^-ms-/, Na = /-(.)/g, yn = {};
  Tr = function(r, t) {
    if (r === "content" && (typeof t != "string" || ka.indexOf(t) === -1 && !$a.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Aa(r, t);
    return n !== "" && !xt(r) && r.indexOf("-") !== -1 && yn[r] === void 0 && (yn[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ia, "ms-").replace(Na, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var uo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function lr(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(uo);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Ce = {
          name: t.name,
          styles: t.styles,
          next: Ce
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ce = {
              name: n.name,
              styles: n.styles,
              next: Ce
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ja(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ce, a = t(e);
        return Ce = i, lr(e, r, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(co, function(f, m, p) {
          var v = "animation" + c.length;
          return c.push("const " + v + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var l = r[t];
  return l !== void 0 ? l : t;
}
function ja(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += lr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object")
        r != null && r[a] !== void 0 ? n += i + "{" + r[a] + "}" : hn(a) && (n += tt(i) + ":" + Tr(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(uo);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            hn(a[c]) && (n += tt(i) + ":" + Tr(i, a[c]) + ";");
        else {
          var u = lr(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += tt(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Ca), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var gn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, lo;
process.env.NODE_ENV !== "production" && (lo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ce, lt = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  Ce = void 0;
  var a = r[0];
  a == null || a.raw === void 0 ? (o = !1, i += lr(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(mn), i += a[0]);
  for (var c = 1; c < r.length; c++)
    i += lr(n, t, r[c]), o && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(mn), i += a[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(lo, function(p) {
    return u = p, "";
  })), gn.lastIndex = 0;
  for (var l = "", f; (f = gn.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    f[1];
  var m = Oa(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: u,
    next: Ce,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: Ce
  };
}, Ma = function(r) {
  return r();
}, Da = U["useInsertionEffect"] ? U["useInsertionEffect"] : !1, fo = Da || Ma, Fa = {}.hasOwnProperty, _t = /* @__PURE__ */ U.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wa({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (_t.displayName = "EmotionCacheContext");
_t.Provider;
var po = function(r) {
  return /* @__PURE__ */ Yo(function(t, n) {
    var o = Fn(_t);
    return r(t, o, n);
  });
}, Ir = /* @__PURE__ */ U.createContext({});
process.env.NODE_ENV !== "production" && (Ir.displayName = "EmotionThemeContext");
var vn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", bn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", La = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Et(t, n, o), fo(function() {
    return so(t, n, o);
  }), null;
}, Va = /* @__PURE__ */ po(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[vn], i = [n], a = "";
  typeof e.className == "string" ? a = ao(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = lt(i, void 0, U.useContext(Ir));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[bn];
    u && (c = lt([c, "label:" + u + ";"]));
  }
  a += r.key + "-" + c.name;
  var l = {};
  for (var f in e)
    Fa.call(e, f) && f !== "css" && f !== vn && (process.env.NODE_ENV === "production" || f !== bn) && (l[f] = e[f]);
  return l.ref = t, l.className = a, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(La, {
    cache: r,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ U.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (Va.displayName = "EmotionCssPropInternal");
var Ua = Yi, za = function(r) {
  return r !== "theme";
}, En = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ua : za;
}, xn = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, _n = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Wa = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Et(t, n, o), fo(function() {
    return so(t, n, o);
  }), null;
}, Ya = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var c = xn(r, t, n), u = c || En(o), l = !u("as");
  return function() {
    var f = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(_n), m.push(f[0][0]);
      for (var p = f.length, v = 1; v < p; v++)
        process.env.NODE_ENV !== "production" && f[0][v] === void 0 && console.error(_n), m.push(f[v], f[0][v]);
    }
    var b = po(function(d, h, S) {
      var O = l && d.as || o, C = "", R = [], y = d;
      if (d.theme == null) {
        y = {};
        for (var q in d)
          y[q] = d[q];
        y.theme = U.useContext(Ir);
      }
      typeof d.className == "string" ? C = ao(h.registered, R, d.className) : d.className != null && (C = d.className + " ");
      var A = lt(m.concat(R), h.registered, y);
      C += h.key + "-" + A.name, a !== void 0 && (C += " " + a);
      var we = l && c === void 0 ? En(O) : u, me = {};
      for (var $ in d)
        l && $ === "as" || // $FlowFixMe
        we($) && (me[$] = d[$]);
      return me.className = C, me.ref = S, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(Wa, {
        cache: h,
        serialized: A,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ U.createElement(O, me));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = r.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = c, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(d, h) {
      return e(d, W({}, t, h, {
        shouldForwardProp: xn(b, h, !0)
      })).apply(void 0, m);
    }, b;
  };
}, Ba = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ft = Ya.bind();
Ba.forEach(function(e) {
  ft[e] = ft(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qa(e, r) {
  const t = ft(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Ka = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Ga = ["values", "unit", "step"], Ha = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => W({}, t, {
    [n.key]: n.val
  }), {});
};
function Ja(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Le(e, Ga), i = Ha(r), a = Object.keys(i);
  function c(p) {
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t})`;
  }
  function u(p) {
    return `@media (max-width:${(typeof r[p] == "number" ? r[p] : p) - n / 100}${t})`;
  }
  function l(p, v) {
    const b = a.indexOf(v);
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t}) and (max-width:${(b !== -1 && typeof r[a[b]] == "number" ? r[a[b]] : v) - n / 100}${t})`;
  }
  function f(p) {
    return a.indexOf(p) + 1 < a.length ? l(p, a[a.indexOf(p) + 1]) : c(p);
  }
  function m(p) {
    const v = a.indexOf(p);
    return v === 0 ? c(a[1]) : v === a.length - 1 ? u(a[v]) : l(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return W({
    keys: a,
    values: i,
    up: c,
    down: u,
    between: l,
    only: f,
    not: m,
    unit: t
  }, o);
}
const Xa = {
  borderRadius: 4
}, Za = Xa, Qa = process.env.NODE_ENV !== "production" ? re.oneOfType([re.number, re.string, re.object, re.array]) : {}, Ue = Qa;
function sr(e, r) {
  return r ? Pe(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const St = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Sn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${St[e]}px)`
};
function Fe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Sn;
    return r.reduce((a, c, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Sn;
    return Object.keys(r).reduce((a, c) => {
      if (Object.keys(i.values || St).indexOf(c) !== -1) {
        const u = i.up(c);
        a[u] = t(r[c], c);
      } else {
        const u = c;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function es(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function rs(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Nr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Or(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Nr(e, t) || n, r && (o = r(o, n, e)), o;
}
function ee(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], u = a.theme, l = Nr(u, n) || {};
    return Fe(a, c, (m) => {
      let p = Or(l, o, m);
      return m === p && typeof m == "string" && (p = Or(l, o, `${r}${m === "default" ? "" : $e(m)}`, m)), t === !1 ? p : {
        [t]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Ue
  } : {}, i.filterProps = [r], i;
}
function ts(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const ns = {
  m: "margin",
  p: "padding"
}, os = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, wn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, is = ts((e) => {
  if (e.length > 2)
    if (wn[e])
      e = wn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = ns[r], o = os[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), jr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Mr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], as = [...jr, ...Mr];
function pr(e, r, t, n) {
  var o;
  const i = (o = Nr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function mo(e) {
  return pr(e, "spacing", 8, "spacing");
}
function mr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ss(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = mr(r, t), n), {});
}
function cs(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = is(t), i = ss(o, n), a = e[t];
  return Fe(e, a, i);
}
function ho(e, r) {
  const t = mo(e.theme);
  return Object.keys(e).map((n) => cs(e, r, n, t)).reduce(sr, {});
}
function ae(e) {
  return ho(e, jr);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? jr.reduce((e, r) => (e[r] = Ue, e), {}) : {};
ae.filterProps = jr;
function se(e) {
  return ho(e, Mr);
}
se.propTypes = process.env.NODE_ENV !== "production" ? Mr.reduce((e, r) => (e[r] = Ue, e), {}) : {};
se.filterProps = Mr;
process.env.NODE_ENV !== "production" && as.reduce((e, r) => (e[r] = Ue, e), {});
function us(e = 8) {
  if (e.mui)
    return e;
  const r = mo({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function Dr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? sr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ie(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const ls = ee({
  prop: "border",
  themeKey: "borders",
  transform: Ie
}), fs = ee({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ie
}), ds = ee({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ie
}), ps = ee({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ie
}), ms = ee({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ie
}), hs = ee({
  prop: "borderColor",
  themeKey: "palette"
}), ys = ee({
  prop: "borderTopColor",
  themeKey: "palette"
}), gs = ee({
  prop: "borderRightColor",
  themeKey: "palette"
}), vs = ee({
  prop: "borderBottomColor",
  themeKey: "palette"
}), bs = ee({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Fr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = pr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: mr(r, n)
    });
    return Fe(e, e.borderRadius, t);
  }
  return null;
};
Fr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ue
} : {};
Fr.filterProps = ["borderRadius"];
Dr(ls, fs, ds, ps, ms, hs, ys, gs, vs, bs, Fr);
const Lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = pr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: mr(r, n)
    });
    return Fe(e, e.gap, t);
  }
  return null;
};
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ue
} : {};
Lr.filterProps = ["gap"];
const Vr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = pr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: mr(r, n)
    });
    return Fe(e, e.columnGap, t);
  }
  return null;
};
Vr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ue
} : {};
Vr.filterProps = ["columnGap"];
const Ur = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = pr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: mr(r, n)
    });
    return Fe(e, e.rowGap, t);
  }
  return null;
};
Ur.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ue
} : {};
Ur.filterProps = ["rowGap"];
const Es = ee({
  prop: "gridColumn"
}), xs = ee({
  prop: "gridRow"
}), _s = ee({
  prop: "gridAutoFlow"
}), Ss = ee({
  prop: "gridAutoColumns"
}), ws = ee({
  prop: "gridAutoRows"
}), Ts = ee({
  prop: "gridTemplateColumns"
}), Os = ee({
  prop: "gridTemplateRows"
}), Rs = ee({
  prop: "gridTemplateAreas"
}), Cs = ee({
  prop: "gridArea"
});
Dr(Lr, Vr, Ur, Es, xs, _s, Ss, ws, Ts, Os, Rs, Cs);
function Je(e, r) {
  return r === "grey" ? r : e;
}
const Ps = ee({
  prop: "color",
  themeKey: "palette",
  transform: Je
}), $s = ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Je
}), ks = ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Je
});
Dr(Ps, $s, ks);
function _e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const As = ee({
  prop: "width",
  transform: _e
}), wt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || St[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: _e(t)
      };
    };
    return Fe(e, e.maxWidth, r);
  }
  return null;
};
wt.filterProps = ["maxWidth"];
const Is = ee({
  prop: "minWidth",
  transform: _e
}), Ns = ee({
  prop: "height",
  transform: _e
}), js = ee({
  prop: "maxHeight",
  transform: _e
}), Ms = ee({
  prop: "minHeight",
  transform: _e
});
ee({
  prop: "size",
  cssProperty: "width",
  transform: _e
});
ee({
  prop: "size",
  cssProperty: "height",
  transform: _e
});
const Ds = ee({
  prop: "boxSizing"
});
Dr(As, wt, Is, Ns, js, Ms, Ds);
const Fs = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ie
  },
  borderTop: {
    themeKey: "borders",
    transform: Ie
  },
  borderRight: {
    themeKey: "borders",
    transform: Ie
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ie
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ie
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Fr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Je
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Je
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Je
  },
  // spacing
  p: {
    style: se
  },
  pt: {
    style: se
  },
  pr: {
    style: se
  },
  pb: {
    style: se
  },
  pl: {
    style: se
  },
  px: {
    style: se
  },
  py: {
    style: se
  },
  padding: {
    style: se
  },
  paddingTop: {
    style: se
  },
  paddingRight: {
    style: se
  },
  paddingBottom: {
    style: se
  },
  paddingLeft: {
    style: se
  },
  paddingX: {
    style: se
  },
  paddingY: {
    style: se
  },
  paddingInline: {
    style: se
  },
  paddingInlineStart: {
    style: se
  },
  paddingInlineEnd: {
    style: se
  },
  paddingBlock: {
    style: se
  },
  paddingBlockStart: {
    style: se
  },
  paddingBlockEnd: {
    style: se
  },
  m: {
    style: ae
  },
  mt: {
    style: ae
  },
  mr: {
    style: ae
  },
  mb: {
    style: ae
  },
  ml: {
    style: ae
  },
  mx: {
    style: ae
  },
  my: {
    style: ae
  },
  margin: {
    style: ae
  },
  marginTop: {
    style: ae
  },
  marginRight: {
    style: ae
  },
  marginBottom: {
    style: ae
  },
  marginLeft: {
    style: ae
  },
  marginX: {
    style: ae
  },
  marginY: {
    style: ae
  },
  marginInline: {
    style: ae
  },
  marginInlineStart: {
    style: ae
  },
  marginInlineEnd: {
    style: ae
  },
  marginBlock: {
    style: ae
  },
  marginBlockStart: {
    style: ae
  },
  marginBlockEnd: {
    style: ae
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Lr
  },
  rowGap: {
    style: Ur
  },
  columnGap: {
    style: Vr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: _e
  },
  maxWidth: {
    style: wt
  },
  minWidth: {
    transform: _e
  },
  height: {
    transform: _e
  },
  maxHeight: {
    transform: _e
  },
  minHeight: {
    transform: _e
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Tt = Fs;
function Ls(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Vs(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Us() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: l,
      transform: f,
      style: m
    } = c;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const p = Nr(o, l) || {};
    return m ? m(a) : Fe(a, n, (b) => {
      let d = Or(p, f, b);
      return b === d && typeof b == "string" && (d = Or(p, f, `${t}${b === "default" ? "" : $e(b)}`, b)), u === !1 ? d : {
        [u]: d
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Tt;
    function c(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = es(i.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((v) => {
        const b = Vs(l[v], i);
        if (b != null)
          if (typeof b == "object")
            if (a[v])
              p = sr(p, e(v, b, i, a));
            else {
              const d = Fe({
                theme: i
              }, b, (h) => ({
                [v]: h
              }));
              Ls(d, b) ? p[v] = r({
                sx: b,
                theme: i
              }) : p = sr(p, d);
            }
          else
            p = sr(p, e(v, b, i, a));
      }), rs(m, p);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const yo = Us();
yo.filterProps = ["sx"];
const Ot = yo, zs = ["breakpoints", "palette", "spacing", "shape"];
function Rt(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = Le(e, zs), c = Ja(t), u = us(o);
  let l = Pe({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: W({
      mode: "light"
    }, n),
    spacing: u,
    shape: W({}, Za, i)
  }, a);
  return l = r.reduce((f, m) => Pe(f, m), l), l.unstable_sxConfig = W({}, Tt, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(m) {
    return Ot({
      sx: m,
      theme: this
    });
  }, l;
}
function Ws(e) {
  return Object.keys(e).length === 0;
}
function Ys(e = null) {
  const r = U.useContext(Ir);
  return !r || Ws(r) ? e : r;
}
const Bs = Rt();
function qs(e = Bs) {
  return Ys(e);
}
const Ks = ["variant"];
function Tn(e) {
  return e.length === 0;
}
function go(e) {
  const {
    variant: r
  } = e, t = Le(e, Ks);
  let n = r || "";
  return Object.keys(t).sort().forEach((o) => {
    o === "color" ? n += Tn(n) ? e[o] : $e(e[o]) : n += `${Tn(n) ? o : $e(o)}${$e(e[o].toString())}`;
  }), n;
}
const Gs = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Hs(e) {
  return Object.keys(e).length === 0;
}
function Js(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Xs = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Rr = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = go(t.props);
    r[n] = t.style;
  }), r;
}, Zs = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), Rr(t);
}, Cr = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  return t && t.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((c) => {
      n[c] !== i.props[c] && e[c] !== i.props[c] && (a = !1);
    }), a && o.push(r[go(i.props)]);
  }), o;
}, Qs = (e, r, t, n) => {
  var o;
  const i = t == null || (o = t.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return Cr(e, r, i);
};
function _r(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ec = Rt(), On = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Sr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Hs(r) ? e : r[t] || r;
}
function rc(e) {
  return e ? (r, t) => t[e] : null;
}
const Rn = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const o = e(W({}, r, {
    theme: Sr(W({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = Cr(r, Rr(i), i);
    return [o, ...a];
  }
  return o;
};
function tc(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = ec,
    rootShouldForwardProp: n = _r,
    slotShouldForwardProp: o = _r
  } = e, i = (a) => Ot(W({}, a, {
    theme: Sr(W({}, a, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    Ka(a, (R) => R.filter((y) => !(y != null && y.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = rc(On(l))
    } = c, v = Le(c, Gs), b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && u && (h = `${u}-${On(l || "Root")}`);
    let S = _r;
    l === "Root" || l === "root" ? S = n : l ? S = o : Js(a) && (S = void 0);
    const O = qa(a, W({
      shouldForwardProp: S,
      label: h
    }, v)), C = (R, ...y) => {
      const q = y ? y.map(($) => {
        if (typeof $ == "function" && $.__emotion_real !== $)
          return (ie) => Rn({
            styledArg: $,
            props: ie,
            defaultTheme: t,
            themeId: r
          });
        if (Ve($)) {
          let ie = $, de;
          return $ && $.variants && (de = $.variants, delete ie.variants, ie = (ce) => {
            let ne = $;
            return Cr(ce, Rr(de), de).forEach((he) => {
              ne = Pe(ne, he);
            }), ne;
          }), ie;
        }
        return $;
      }) : [];
      let A = R;
      if (Ve(R)) {
        let $;
        R && R.variants && ($ = R.variants, delete A.variants, A = (ie) => {
          let de = R;
          return Cr(ie, Rr($), $).forEach((ne) => {
            de = Pe(de, ne);
          }), de;
        });
      } else
        typeof R == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        R.__emotion_real !== R && (A = ($) => Rn({
          styledArg: R,
          props: $,
          defaultTheme: t,
          themeId: r
        }));
      u && p && q.push(($) => {
        const ie = Sr(W({}, $, {
          defaultTheme: t,
          themeId: r
        })), de = Xs(u, ie);
        if (de) {
          const ce = {};
          return Object.entries(de).forEach(([ne, ge]) => {
            ce[ne] = typeof ge == "function" ? ge(W({}, $, {
              theme: ie
            })) : ge;
          }), p($, ce);
        }
        return null;
      }), u && !b && q.push(($) => {
        const ie = Sr(W({}, $, {
          defaultTheme: t,
          themeId: r
        }));
        return Qs($, Zs(u, ie), ie, u);
      }), d || q.push(i);
      const we = q.length - y.length;
      if (Array.isArray(R) && we > 0) {
        const $ = new Array(we).fill("");
        A = [...R, ...$], A.raw = [...R.raw, ...$];
      }
      const me = O(A, ...q);
      if (process.env.NODE_ENV !== "production") {
        let $;
        u && ($ = `${u}${$e(l || "")}`), $ === void 0 && ($ = `Styled(${yi(a)})`), me.displayName = $;
      }
      return a.muiName && (me.muiName = a.muiName), me;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function nc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Hn(r.components[t].defaultProps, n);
}
function oc({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = qs(t);
  return n && (o = o[n] || o), nc({
    theme: o,
    name: r,
    props: e
  });
}
function vo(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function ic(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qe(ic(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Xe(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Xe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
function Ct(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function ac(e) {
  e = Qe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (l, f = (l + t / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), Ct({
    type: c,
    values: u
  });
}
function Cn(e) {
  e = Qe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Qe(ac(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Pn(e, r) {
  const t = Cn(e), n = Cn(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function sc(e, r) {
  if (e = Qe(e), r = vo(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ct(e);
}
function cc(e, r) {
  if (e = Qe(e), r = vo(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ct(e);
}
function uc(e, r) {
  return W({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const lc = {
  black: "#000",
  white: "#fff"
}, fr = lc, fc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, dc = fc, pc = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ye = pc, mc = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Be = mc, hc = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ar = hc, yc = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, qe = yc, gc = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Ke = gc, vc = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ge = vc, bc = ["mode", "contrastThreshold", "tonalOffset"], $n = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: fr.white,
    default: fr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, nt = {
  text: {
    primary: fr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: fr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function kn(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = cc(e.main, o) : r === "dark" && (e.dark = sc(e.main, i)));
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: qe[200],
    light: qe[50],
    dark: qe[400]
  } : {
    main: qe[700],
    light: qe[400],
    dark: qe[800]
  };
}
function xc(e = "light") {
  return e === "dark" ? {
    main: Ye[200],
    light: Ye[50],
    dark: Ye[400]
  } : {
    main: Ye[500],
    light: Ye[300],
    dark: Ye[700]
  };
}
function _c(e = "light") {
  return e === "dark" ? {
    main: Be[500],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[500],
    dark: Ke[900]
  };
}
function wc(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: Ge[800],
    light: Ge[500],
    dark: Ge[900]
  };
}
function Tc(e = "light") {
  return e === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ar[500],
    dark: ar[900]
  };
}
function Oc(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Le(e, bc), i = e.primary || Ec(r), a = e.secondary || xc(r), c = e.error || _c(r), u = e.info || Sc(r), l = e.success || wc(r), f = e.warning || Tc(r);
  function m(d) {
    const h = Pn(d, nt.text.primary) >= t ? nt.text.primary : $n.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Pn(d, h);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${h} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const p = ({
    color: d,
    name: h,
    mainShade: S = 500,
    lightShade: O = 300,
    darkShade: C = 700
  }) => {
    if (d = W({}, d), !d.main && d[S] && (d.main = d[S]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : Xe(11, h ? ` (${h})` : "", S));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Xe(12, h ? ` (${h})` : "", JSON.stringify(d.main)));
    return kn(d, "light", O, n), kn(d, "dark", C, n), d.contrastText || (d.contrastText = m(d.main)), d;
  }, v = {
    dark: nt,
    light: $n
  };
  return process.env.NODE_ENV !== "production" && (v[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Pe(W({
    // A collection of common colors.
    common: W({}, fr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: dc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, v[r]), o);
}
const Rc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Cc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const An = {
  textTransform: "uppercase"
}, In = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pc(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = In,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m
  } = t, p = Le(t, Rc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, b = m || ((S) => `${S / l * v}rem`), d = (S, O, C, R, y) => W({
    fontFamily: n,
    fontWeight: S,
    fontSize: b(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === In ? {
    letterSpacing: `${Cc(R / O)}em`
  } : {}, y, f), h = {
    h1: d(i, 96, 1.167, -1.5),
    h2: d(i, 60, 1.2, -0.5),
    h3: d(a, 48, 1.167, 0),
    h4: d(a, 34, 1.235, 0.25),
    h5: d(a, 24, 1.334, 0),
    h6: d(c, 20, 1.6, 0.15),
    subtitle1: d(a, 16, 1.75, 0.15),
    subtitle2: d(c, 14, 1.57, 0.1),
    body1: d(a, 16, 1.5, 0.15),
    body2: d(a, 14, 1.43, 0.15),
    button: d(c, 14, 1.75, 0.4, An),
    caption: d(a, 12, 1.66, 0.4),
    overline: d(a, 12, 2.66, 1, An),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Pe(W({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: u
  }, h), p, {
    clone: !1
    // No need to clone deep
  });
}
const $c = 0.2, kc = 0.14, Ac = 0.12;
function oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${$c})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ac})`].join(",");
}
const Ic = ["none", oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Nc = Ic, jc = ["duration", "easing", "delay"], Mc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Dc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Nn(e) {
  return `${Math.round(e)}ms`;
}
function Fc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Lc(e) {
  const r = W({}, Mc, e.easing), t = W({}, Dc, e.duration);
  return W({
    getAutoHeightDuration: Fc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0
      } = i, l = Le(i, jc);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : Nn(a)} ${c} ${typeof u == "string" ? u : Nn(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Vc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Uc = Vc, zc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Wc(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = Le(e, zc);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Xe(18));
  const c = Oc(n), u = Rt(e);
  let l = Pe(u, {
    mixins: uc(u.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Nc.slice(),
    typography: Pc(c, i),
    transitions: Lc(o),
    zIndex: W({}, Uc)
  });
  if (l = Pe(l, a), l = r.reduce((f, m) => Pe(f, m), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, v) => {
      let b;
      for (b in p) {
        const d = p[b];
        if (f.indexOf(b) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = ht("", b);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((p) => {
      const v = l.components[p].styleOverrides;
      v && p.indexOf("Mui") === 0 && m(v, p);
    });
  }
  return l.unstable_sxConfig = W({}, Tt, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(m) {
    return Ot({
      sx: m,
      theme: this
    });
  }, l;
}
const Yc = Wc(), bo = Yc, Eo = "$$material";
function Bc({
  props: e,
  name: r
}) {
  return oc({
    props: e,
    name: r,
    defaultTheme: bo,
    themeId: Eo
  });
}
const qc = (e) => _r(e) && e !== "classes", Kc = tc({
  themeId: Eo,
  defaultTheme: bo,
  rootShouldForwardProp: qc
}), Gc = Kc;
function Hc(e) {
  return ht("MuiSvgIcon", e);
}
Ui("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Jc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Xc = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${$e(r)}`, `fontSize${$e(t)}`]
  };
  return Di(o, Hc, n);
}, Zc = Gc("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${$e(t.color)}`], r[`fontSize${$e(t.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n, o, i, a, c, u, l, f, m, p, v, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: r.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (t = e.transitions) == null || (n = t.create) == null ? void 0 : n.call(t, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 35)) || "2.1875rem"
    }[r.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (p = (e.vars || e).palette) == null || (p = p[r.color]) == null ? void 0 : p.main) != null ? m : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[r.color]
  };
}), Pt = /* @__PURE__ */ U.forwardRef(function(r, t) {
  const n = Bc({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: l,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = n, v = Le(n, Jc), b = /* @__PURE__ */ U.isValidElement(o) && o.type === "svg", d = W({}, n, {
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: r.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: b
  }), h = {};
  f || (h.viewBox = p);
  const S = Xc(d);
  return /* @__PURE__ */ B.jsxs(Zc, W({
    as: c,
    className: zi(S.root, i),
    focusable: "false",
    color: l,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: t
  }, h, v, b && o.props, {
    ownerState: d,
    children: [b ? o.props.children : o, m ? /* @__PURE__ */ B.jsx("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Pt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: re.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: re.object,
  /**
   * @ignore
   */
  className: re.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: re.oneOfType([re.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), re.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: re.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: re.oneOfType([re.oneOf(["inherit", "large", "medium", "small"]), re.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: re.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: re.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: re.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: re.oneOfType([re.arrayOf(re.oneOfType([re.func, re.object, re.bool])), re.func, re.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: re.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: re.string
});
Pt.muiName = "SvgIcon";
const jn = Pt;
function Qc(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ B.jsx(jn, W({
      "data-testid": `${r}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = jn.muiName, /* @__PURE__ */ U.memo(/* @__PURE__ */ U.forwardRef(t));
}
const eu = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Jn.configure(e);
  }
}, ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: $e,
  createChainedFunction: gi,
  createSvgIcon: Qc,
  debounce: vi,
  deprecatedPropType: bi,
  isMuiElement: Ei,
  ownerDocument: qn,
  ownerWindow: xi,
  requirePropFactory: _i,
  setRef: Kn,
  unstable_ClassNameGenerator: eu,
  unstable_useEnhancedEffect: Gn,
  unstable_useId: Ti,
  unsupportedProp: Oi,
  useControlled: Ri,
  useEventCallback: Ci,
  useForkRef: Pi,
  useIsFocusVisible: Mi
}, Symbol.toStringTag, { value: "Module" })), tu = /* @__PURE__ */ Zo(ru);
var Mn;
function nu() {
  return Mn || (Mn = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r.createSvgIcon;
      }
    });
    var r = tu;
  }(Gr)), Gr;
}
var ou = ti;
Object.defineProperty(pt, "__esModule", {
  value: !0
});
var xo = pt.default = void 0, iu = ou(nu()), au = Ln(), su = (0, iu.default)(/* @__PURE__ */ (0, au.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "CheckCircleOutline");
xo = pt.default = su;
const bu = ({
  StatusSymbol: e,
  StatusTitle: r,
  StatusBlog: t
}) => {
  const n = e ? "#2E7D32" : "#0288D1";
  return /* @__PURE__ */ B.jsxs(
    Kr,
    {
      sx: {
        width: "380px",
        p: 1,
        border: `1px solid ${n}`,
        borderRadius: "3px",
        display: "flex"
      },
      children: [
        /* @__PURE__ */ B.jsx(Kr, { sx: { display: "flex", flexDirection: "column", p: 2 }, children: e ? /* @__PURE__ */ B.jsx(xo, { sx: { color: "#2E7D32" } }) : /* @__PURE__ */ B.jsx(ri, {}) }),
        /* @__PURE__ */ B.jsxs(Kr, { sx: { display: "flex", flexDirection: "column", p: 2 }, children: [
          /* @__PURE__ */ B.jsx(ot, { component: "div", variant: "subtitle1", children: r }),
          /* @__PURE__ */ B.jsx(ot, { variant: "subtitle1", component: "div", children: t })
        ] })
      ]
    }
  );
};
export {
  fu as FormComponent,
  du as Lorem,
  vu as MusicIcon,
  Vn as PageContext,
  pu as PageProvider,
  hu as PagingButton,
  mu as PagingLink,
  yu as RenderedPage,
  gu as RightArrowIcon,
  bu as Status
};
