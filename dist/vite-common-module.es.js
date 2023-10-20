import * as T from "react";
import ze, { forwardRef as Qs, useContext as ea, Children as ta, isValidElement as fn, cloneElement as dn, useState as na, useEffect as ra } from "react";
import { Box as ao, Button as oa, Typography as ia } from "@mui/material";
import { DataGridPro as sa, GridToolbarContainer as aa, GridToolbarColumnsButton as ca, GridToolbarDensitySelector as la, GridToolbarFilterButton as ua } from "@mui/x-data-grid-pro";
import * as fa from "react-dom";
import cn from "react-dom";
function da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function pa(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var dr = { exports: {} }, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function ma() {
  if (co)
    return Bt;
  co = 1;
  var e = ze, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var f, h = {}, g = null, b = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (f in l)
      r.call(l, f) && !i.hasOwnProperty(f) && (h[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        h[f] === void 0 && (h[f] = l[f]);
    return { $$typeof: t, type: c, key: g, ref: b, props: h, _owner: o.current };
  }
  return Bt.Fragment = n, Bt.jsx = s, Bt.jsxs = s, Bt;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function ha() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ze, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function d(m) {
      if (m === null || typeof m != "object")
        return null;
      var $ = v && m[v] || m[y];
      return typeof $ == "function" ? $ : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(m) {
      {
        for (var $ = arguments.length, I = new Array($ > 1 ? $ - 1 : 0), ne = 1; ne < $; ne++)
          I[ne - 1] = arguments[ne];
        E("error", m, I);
      }
    }
    function E(m, $, I) {
      {
        var ne = C.ReactDebugCurrentFrame, ce = ne.getStackAddendum();
        ce !== "" && ($ += "%s", I = I.concat([ce]));
        var Te = I.map(function(ae) {
          return String(ae);
        });
        Te.unshift("Warning: " + $), Function.prototype.apply.call(console[m], console, Te);
      }
    }
    var x = !1, p = !1, N = !1, O = !1, Q = !1, ee;
    ee = Symbol.for("react.module.reference");
    function M(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || Q || m === o || m === u || m === f || O || m === b || x || p || N || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === h || m.$$typeof === s || m.$$typeof === c || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === ee || m.getModuleId !== void 0));
    }
    function G(m, $, I) {
      var ne = m.displayName;
      if (ne)
        return ne;
      var ce = $.displayName || $.name || "";
      return ce !== "" ? I + "(" + ce + ")" : I;
    }
    function U(m) {
      return m.displayName || "Context";
    }
    function K(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var $ = m;
            return U($) + ".Consumer";
          case s:
            var I = m;
            return U(I._context) + ".Provider";
          case l:
            return G(m, m.render, "ForwardRef");
          case h:
            var ne = m.displayName || null;
            return ne !== null ? ne : K(m.type) || "Memo";
          case g: {
            var ce = m, Te = ce._payload, ae = ce._init;
            try {
              return K(ae(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, D = 0, A, B, te, re, _, k, V;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function F() {
      {
        if (D === 0) {
          A = console.log, B = console.info, te = console.warn, re = console.error, _ = console.group, k = console.groupCollapsed, V = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        D++;
      }
    }
    function Y() {
      {
        if (D--, D === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, m, {
              value: A
            }),
            info: j({}, m, {
              value: B
            }),
            warn: j({}, m, {
              value: te
            }),
            error: j({}, m, {
              value: re
            }),
            group: j({}, m, {
              value: _
            }),
            groupCollapsed: j({}, m, {
              value: k
            }),
            groupEnd: j({}, m, {
              value: V
            })
          });
        }
        D < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = C.ReactCurrentDispatcher, W;
    function H(m, $, I) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ne = ce.stack.trim().match(/\n( *(at )?)/);
            W = ne && ne[1] || "";
          }
        return `
` + W + m;
      }
    }
    var q = !1, J;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ee();
    }
    function S(m, $) {
      if (!m || q)
        return "";
      {
        var I = J.get(m);
        if (I !== void 0)
          return I;
      }
      var ne;
      q = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = z.current, z.current = null, F();
      try {
        if ($) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (ot) {
              ne = ot;
            }
            Reflect.construct(m, [], ae);
          } else {
            try {
              ae.call();
            } catch (ot) {
              ne = ot;
            }
            m.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            ne = ot;
          }
          m();
        }
      } catch (ot) {
        if (ot && ne && typeof ot.stack == "string") {
          for (var ie = ot.stack.split(`
`), De = ne.stack.split(`
`), we = ie.length - 1, Pe = De.length - 1; we >= 1 && Pe >= 0 && ie[we] !== De[Pe]; )
            Pe--;
          for (; we >= 1 && Pe >= 0; we--, Pe--)
            if (ie[we] !== De[Pe]) {
              if (we !== 1 || Pe !== 1)
                do
                  if (we--, Pe--, Pe < 0 || ie[we] !== De[Pe]) {
                    var Ye = `
` + ie[we].replace(" at new ", " at ");
                    return m.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", m.displayName)), typeof m == "function" && J.set(m, Ye), Ye;
                  }
                while (we >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        q = !1, z.current = Te, Y(), Error.prepareStackTrace = ce;
      }
      var xt = m ? m.displayName || m.name : "", so = xt ? H(xt) : "";
      return typeof m == "function" && J.set(m, so), so;
    }
    function Z(m, $, I) {
      return S(m, !1);
    }
    function R(m) {
      var $ = m.prototype;
      return !!($ && $.isReactComponent);
    }
    function se(m, $, I) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return S(m, R(m));
      if (typeof m == "string")
        return H(m);
      switch (m) {
        case u:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return Z(m.render);
          case h:
            return se(m.type, $, I);
          case g: {
            var ne = m, ce = ne._payload, Te = ne._init;
            try {
              return se(Te(ce), $, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Me = {}, He = C.ReactDebugCurrentFrame;
    function rt(m) {
      if (m) {
        var $ = m._owner, I = se(m.type, m._source, $ ? $.type : null);
        He.setExtraStackFrame(I);
      } else
        He.setExtraStackFrame(null);
    }
    function at(m, $, I, ne, ce) {
      {
        var Te = Function.call.bind(Re);
        for (var ae in m)
          if (Te(m, ae)) {
            var ie = void 0;
            try {
              if (typeof m[ae] != "function") {
                var De = Error((ne || "React class") + ": " + I + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw De.name = "Invariant Violation", De;
              }
              ie = m[ae]($, ae, ne, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              ie = we;
            }
            ie && !(ie instanceof Error) && (rt(ce), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", I, ae, typeof ie), rt(null)), ie instanceof Error && !(ie.message in Me) && (Me[ie.message] = !0, rt(ce), P("Failed %s type: %s", I, ie.message), rt(null));
          }
      }
    }
    var ct = Array.isArray;
    function Ge(m) {
      return ct(m);
    }
    function bt(m) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, I = $ && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return I;
      }
    }
    function Ne(m) {
      try {
        return lt(m), !1;
      } catch {
        return !0;
      }
    }
    function lt(m) {
      return "" + m;
    }
    function sn(m) {
      if (Ne(m))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(m)), lt(m);
    }
    var ut = C.ReactCurrentOwner, Hn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oe, Vt, zt;
    zt = {};
    function an(m) {
      if (Re.call(m, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(m, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Qr(m) {
      if (Re.call(m, "key")) {
        var $ = Object.getOwnPropertyDescriptor(m, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Vs(m, $) {
      if (typeof m.ref == "string" && ut.current && $ && ut.current.stateNode !== $) {
        var I = K(ut.current.type);
        zt[I] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ut.current.type), m.ref), zt[I] = !0);
      }
    }
    function zs(m, $) {
      {
        var I = function() {
          oe || (oe = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        I.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Bs(m, $) {
      {
        var I = function() {
          Vt || (Vt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        I.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Us = function(m, $, I, ne, ce, Te, ae) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: $,
        ref: I,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function Ys(m, $, I, ne, ce) {
      {
        var Te, ae = {}, ie = null, De = null;
        I !== void 0 && (sn(I), ie = "" + I), Qr($) && (sn($.key), ie = "" + $.key), an($) && (De = $.ref, Vs($, ce));
        for (Te in $)
          Re.call($, Te) && !Hn.hasOwnProperty(Te) && (ae[Te] = $[Te]);
        if (m && m.defaultProps) {
          var we = m.defaultProps;
          for (Te in we)
            ae[Te] === void 0 && (ae[Te] = we[Te]);
        }
        if (ie || De) {
          var Pe = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ie && zs(ae, Pe), De && Bs(ae, Pe);
        }
        return Us(m, ie, De, ce, ne, ut.current, ae);
      }
    }
    var Gn = C.ReactCurrentOwner, eo = C.ReactDebugCurrentFrame;
    function Et(m) {
      if (m) {
        var $ = m._owner, I = se(m.type, m._source, $ ? $.type : null);
        eo.setExtraStackFrame(I);
      } else
        eo.setExtraStackFrame(null);
    }
    var Xn;
    Xn = !1;
    function Jn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function to() {
      {
        if (Gn.current) {
          var m = K(Gn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ws(m) {
      {
        if (m !== void 0) {
          var $ = m.fileName.replace(/^.*[\\\/]/, ""), I = m.lineNumber;
          return `

Check your code at ` + $ + ":" + I + ".";
        }
        return "";
      }
    }
    var no = {};
    function qs(m) {
      {
        var $ = to();
        if (!$) {
          var I = typeof m == "string" ? m : m.displayName || m.name;
          I && ($ = `

Check the top-level render call using <` + I + ">.");
        }
        return $;
      }
    }
    function ro(m, $) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var I = qs($);
        if (no[I])
          return;
        no[I] = !0;
        var ne = "";
        m && m._owner && m._owner !== Gn.current && (ne = " It was passed a child from " + K(m._owner.type) + "."), Et(m), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, ne), Et(null);
      }
    }
    function oo(m, $) {
      {
        if (typeof m != "object")
          return;
        if (Ge(m))
          for (var I = 0; I < m.length; I++) {
            var ne = m[I];
            Jn(ne) && ro(ne, $);
          }
        else if (Jn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ce = d(m);
          if (typeof ce == "function" && ce !== m.entries)
            for (var Te = ce.call(m), ae; !(ae = Te.next()).done; )
              Jn(ae.value) && ro(ae.value, $);
        }
      }
    }
    function Ks(m) {
      {
        var $ = m.type;
        if ($ == null || typeof $ == "string")
          return;
        var I;
        if (typeof $ == "function")
          I = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === h))
          I = $.propTypes;
        else
          return;
        if (I) {
          var ne = K($);
          at(I, m.props, "prop", ne, m);
        } else if ($.PropTypes !== void 0 && !Xn) {
          Xn = !0;
          var ce = K($);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hs(m) {
      {
        for (var $ = Object.keys(m.props), I = 0; I < $.length; I++) {
          var ne = $[I];
          if (ne !== "children" && ne !== "key") {
            Et(m), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Et(null);
            break;
          }
        }
        m.ref !== null && (Et(m), P("Invalid attribute `ref` supplied to `React.Fragment`."), Et(null));
      }
    }
    function io(m, $, I, ne, ce, Te) {
      {
        var ae = M(m);
        if (!ae) {
          var ie = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = Ws(ce);
          De ? ie += De : ie += to();
          var we;
          m === null ? we = "null" : Ge(m) ? we = "array" : m !== void 0 && m.$$typeof === t ? (we = "<" + (K(m.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : we = typeof m, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ie);
        }
        var Pe = Ys(m, $, I, ce, Te);
        if (Pe == null)
          return Pe;
        if (ae) {
          var Ye = $.children;
          if (Ye !== void 0)
            if (ne)
              if (Ge(Ye)) {
                for (var xt = 0; xt < Ye.length; xt++)
                  oo(Ye[xt], m);
                Object.freeze && Object.freeze(Ye);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              oo(Ye, m);
        }
        return m === r ? Hs(Pe) : Ks(Pe), Pe;
      }
    }
    function Gs(m, $, I) {
      return io(m, $, I, !0);
    }
    function Xs(m, $, I) {
      return io(m, $, I, !1);
    }
    var Js = Xs, Zs = Gs;
    Ut.Fragment = r, Ut.jsx = Js, Ut.jsxs = Zs;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? dr.exports = ma() : dr.exports = ha();
var L = dr.exports;
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, w.apply(this, arguments);
}
function xe(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var pr = { exports: {} }, fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function ya() {
  if (uo)
    return fe;
  uo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(d) {
    if (typeof d == "object" && d !== null) {
      var C = d.$$typeof;
      switch (C) {
        case e:
          switch (d = d.type, d) {
            case n:
            case o:
            case r:
            case u:
            case f:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case s:
                case l:
                case g:
                case h:
                case i:
                  return d;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return fe.ContextConsumer = s, fe.ContextProvider = i, fe.Element = e, fe.ForwardRef = l, fe.Fragment = n, fe.Lazy = g, fe.Memo = h, fe.Portal = t, fe.Profiler = o, fe.StrictMode = r, fe.Suspense = u, fe.SuspenseList = f, fe.isAsyncMode = function() {
    return !1;
  }, fe.isConcurrentMode = function() {
    return !1;
  }, fe.isContextConsumer = function(d) {
    return y(d) === s;
  }, fe.isContextProvider = function(d) {
    return y(d) === i;
  }, fe.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, fe.isForwardRef = function(d) {
    return y(d) === l;
  }, fe.isFragment = function(d) {
    return y(d) === n;
  }, fe.isLazy = function(d) {
    return y(d) === g;
  }, fe.isMemo = function(d) {
    return y(d) === h;
  }, fe.isPortal = function(d) {
    return y(d) === t;
  }, fe.isProfiler = function(d) {
    return y(d) === o;
  }, fe.isStrictMode = function(d) {
    return y(d) === r;
  }, fe.isSuspense = function(d) {
    return y(d) === u;
  }, fe.isSuspenseList = function(d) {
    return y(d) === f;
  }, fe.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === o || d === r || d === u || d === f || d === b || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === h || d.$$typeof === i || d.$$typeof === s || d.$$typeof === l || d.$$typeof === v || d.getModuleId !== void 0);
  }, fe.typeOf = y, fe;
}
var de = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function va() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, y = !1, d = !1, C = !1, P = !1, E;
    E = Symbol.for("react.module.reference");
    function x(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || P || R === r || R === u || R === f || C || R === b || v || y || d || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === h || R.$$typeof === i || R.$$typeof === s || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === E || R.getModuleId !== void 0));
    }
    function p(R) {
      if (typeof R == "object" && R !== null) {
        var se = R.$$typeof;
        switch (se) {
          case e:
            var Re = R.type;
            switch (Re) {
              case n:
              case o:
              case r:
              case u:
              case f:
                return Re;
              default:
                var Me = Re && Re.$$typeof;
                switch (Me) {
                  case c:
                  case s:
                  case l:
                  case g:
                  case h:
                  case i:
                    return Me;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var N = s, O = i, Q = e, ee = l, M = n, G = g, U = h, K = t, j = o, D = r, A = u, B = f, te = !1, re = !1;
    function _(R) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(R) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(R) {
      return p(R) === s;
    }
    function X(R) {
      return p(R) === i;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Y(R) {
      return p(R) === l;
    }
    function z(R) {
      return p(R) === n;
    }
    function W(R) {
      return p(R) === g;
    }
    function H(R) {
      return p(R) === h;
    }
    function q(R) {
      return p(R) === t;
    }
    function J(R) {
      return p(R) === o;
    }
    function Ee(R) {
      return p(R) === r;
    }
    function S(R) {
      return p(R) === u;
    }
    function Z(R) {
      return p(R) === f;
    }
    de.ContextConsumer = N, de.ContextProvider = O, de.Element = Q, de.ForwardRef = ee, de.Fragment = M, de.Lazy = G, de.Memo = U, de.Portal = K, de.Profiler = j, de.StrictMode = D, de.Suspense = A, de.SuspenseList = B, de.isAsyncMode = _, de.isConcurrentMode = k, de.isContextConsumer = V, de.isContextProvider = X, de.isElement = F, de.isForwardRef = Y, de.isFragment = z, de.isLazy = W, de.isMemo = H, de.isPortal = q, de.isProfiler = J, de.isStrictMode = Ee, de.isSuspense = S, de.isSuspenseList = Z, de.isValidElementType = x, de.typeOf = p;
  }()), de;
}
process.env.NODE_ENV === "production" ? pr.exports = ya() : pr.exports = va();
var wi = pr.exports, mr = { exports: {} }, ln = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function ga() {
  if (po)
    return pe;
  po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function E(p) {
    if (typeof p == "object" && p !== null) {
      var N = p.$$typeof;
      switch (N) {
        case t:
          switch (p = p.type, p) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case f:
                case v:
                case b:
                case s:
                  return p;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function x(p) {
    return E(p) === u;
  }
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = f, pe.Fragment = r, pe.Lazy = v, pe.Memo = b, pe.Portal = n, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = h, pe.isAsyncMode = function(p) {
    return x(p) || E(p) === l;
  }, pe.isConcurrentMode = x, pe.isContextConsumer = function(p) {
    return E(p) === c;
  }, pe.isContextProvider = function(p) {
    return E(p) === s;
  }, pe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, pe.isForwardRef = function(p) {
    return E(p) === f;
  }, pe.isFragment = function(p) {
    return E(p) === r;
  }, pe.isLazy = function(p) {
    return E(p) === v;
  }, pe.isMemo = function(p) {
    return E(p) === b;
  }, pe.isPortal = function(p) {
    return E(p) === n;
  }, pe.isProfiler = function(p) {
    return E(p) === i;
  }, pe.isStrictMode = function(p) {
    return E(p) === o;
  }, pe.isSuspense = function(p) {
    return E(p) === h;
  }, pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === u || p === i || p === o || p === h || p === g || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === b || p.$$typeof === s || p.$$typeof === c || p.$$typeof === f || p.$$typeof === d || p.$$typeof === C || p.$$typeof === P || p.$$typeof === y);
  }, pe.typeOf = E, pe;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function ba() {
  return mo || (mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === i || S === o || S === h || S === g || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === b || S.$$typeof === s || S.$$typeof === c || S.$$typeof === f || S.$$typeof === d || S.$$typeof === C || S.$$typeof === P || S.$$typeof === y);
    }
    function x(S) {
      if (typeof S == "object" && S !== null) {
        var Z = S.$$typeof;
        switch (Z) {
          case t:
            var R = S.type;
            switch (R) {
              case l:
              case u:
              case r:
              case i:
              case o:
              case h:
                return R;
              default:
                var se = R && R.$$typeof;
                switch (se) {
                  case c:
                  case f:
                  case v:
                  case b:
                  case s:
                    return se;
                  default:
                    return Z;
                }
            }
          case n:
            return Z;
        }
      }
    }
    var p = l, N = u, O = c, Q = s, ee = t, M = f, G = r, U = v, K = b, j = n, D = i, A = o, B = h, te = !1;
    function re(S) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || x(S) === l;
    }
    function _(S) {
      return x(S) === u;
    }
    function k(S) {
      return x(S) === c;
    }
    function V(S) {
      return x(S) === s;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function F(S) {
      return x(S) === f;
    }
    function Y(S) {
      return x(S) === r;
    }
    function z(S) {
      return x(S) === v;
    }
    function W(S) {
      return x(S) === b;
    }
    function H(S) {
      return x(S) === n;
    }
    function q(S) {
      return x(S) === i;
    }
    function J(S) {
      return x(S) === o;
    }
    function Ee(S) {
      return x(S) === h;
    }
    me.AsyncMode = p, me.ConcurrentMode = N, me.ContextConsumer = O, me.ContextProvider = Q, me.Element = ee, me.ForwardRef = M, me.Fragment = G, me.Lazy = U, me.Memo = K, me.Portal = j, me.Profiler = D, me.StrictMode = A, me.Suspense = B, me.isAsyncMode = re, me.isConcurrentMode = _, me.isContextConsumer = k, me.isContextProvider = V, me.isElement = X, me.isForwardRef = F, me.isFragment = Y, me.isLazy = z, me.isMemo = W, me.isPortal = H, me.isProfiler = q, me.isStrictMode = J, me.isSuspense = Ee, me.isValidElementType = E, me.typeOf = x;
  }()), me;
}
var ho;
function Pi() {
  return ho || (ho = 1, process.env.NODE_ENV === "production" ? ln.exports = ga() : ln.exports = ba()), ln.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zn, yo;
function Ea() {
  if (yo)
    return Zn;
  yo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zn = o() ? Object.assign : function(i, s) {
    for (var c, l = r(i), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        u = e(c);
        for (var g = 0; g < u.length; g++)
          n.call(c, u[g]) && (l[u[g]] = c[u[g]]);
      }
    }
    return l;
  }, Zn;
}
var Qn, vo;
function wr() {
  if (vo)
    return Qn;
  vo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = e, Qn;
}
var er, go;
function $i() {
  return go || (go = 1, er = Function.call.bind(Object.prototype.hasOwnProperty)), er;
}
var tr, bo;
function xa() {
  if (bo)
    return tr;
  bo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = wr(), n = {}, r = $i();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (r(i, f)) {
          var h;
          try {
            if (typeof i[f] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[f](s, f, l, c, null, t);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, tr = o, tr;
}
var nr, Eo;
function Ta() {
  if (Eo)
    return nr;
  Eo = 1;
  var e = Pi(), t = Ea(), n = wr(), r = $i(), o = xa(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return nr = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(_) {
      var k = _ && (u && _[u] || _[f]);
      if (typeof k == "function")
        return k;
    }
    var g = "<<anonymous>>", b = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: P(),
      arrayOf: E,
      element: x(),
      elementType: p(),
      instanceOf: N,
      node: M(),
      objectOf: Q,
      oneOf: O,
      oneOfType: ee,
      shape: U,
      exact: K
    };
    function v(_, k) {
      return _ === k ? _ !== 0 || 1 / _ === 1 / k : _ !== _ && k !== k;
    }
    function y(_, k) {
      this.message = _, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function d(_) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, V = 0;
      function X(Y, z, W, H, q, J, Ee) {
        if (H = H || g, J = J || W, Ee !== n) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = H + ":" + W;
            !k[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Z] = !0, V++);
          }
        }
        return z[W] == null ? Y ? z[W] === null ? new y("The " + q + " `" + J + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new y("The " + q + " `" + J + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : _(z, W, H, q, J);
      }
      var F = X.bind(null, !1);
      return F.isRequired = X.bind(null, !0), F;
    }
    function C(_) {
      function k(V, X, F, Y, z, W) {
        var H = V[X], q = A(H);
        if (q !== _) {
          var J = B(H);
          return new y(
            "Invalid " + Y + " `" + z + "` of type " + ("`" + J + "` supplied to `" + F + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return d(k);
    }
    function P() {
      return d(s);
    }
    function E(_) {
      function k(V, X, F, Y, z) {
        if (typeof _ != "function")
          return new y("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = V[X];
        if (!Array.isArray(W)) {
          var H = A(W);
          return new y("Invalid " + Y + " `" + z + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an array."));
        }
        for (var q = 0; q < W.length; q++) {
          var J = _(W, q, F, Y, z + "[" + q + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return d(k);
    }
    function x() {
      function _(k, V, X, F, Y) {
        var z = k[V];
        if (!c(z)) {
          var W = A(z);
          return new y("Invalid " + F + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return d(_);
    }
    function p() {
      function _(k, V, X, F, Y) {
        var z = k[V];
        if (!e.isValidElementType(z)) {
          var W = A(z);
          return new y("Invalid " + F + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return d(_);
    }
    function N(_) {
      function k(V, X, F, Y, z) {
        if (!(V[X] instanceof _)) {
          var W = _.name || g, H = re(V[X]);
          return new y("Invalid " + Y + " `" + z + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return d(k);
    }
    function O(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(V, X, F, Y, z) {
        for (var W = V[X], H = 0; H < _.length; H++)
          if (v(W, _[H]))
            return null;
        var q = JSON.stringify(_, function(Ee, S) {
          var Z = B(S);
          return Z === "symbol" ? String(S) : S;
        });
        return new y("Invalid " + Y + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + q + "."));
      }
      return d(k);
    }
    function Q(_) {
      function k(V, X, F, Y, z) {
        if (typeof _ != "function")
          return new y("Property `" + z + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = V[X], H = A(W);
        if (H !== "object")
          return new y("Invalid " + Y + " `" + z + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an object."));
        for (var q in W)
          if (r(W, q)) {
            var J = _(W, q, F, Y, z + "." + q, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return d(k);
    }
    function ee(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < _.length; k++) {
        var V = _[k];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(V) + " at index " + k + "."
          ), s;
      }
      function X(F, Y, z, W, H) {
        for (var q = [], J = 0; J < _.length; J++) {
          var Ee = _[J], S = Ee(F, Y, z, W, H, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && q.push(S.data.expectedType);
        }
        var Z = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + W + " `" + H + "` supplied to " + ("`" + z + "`" + Z + "."));
      }
      return d(X);
    }
    function M() {
      function _(k, V, X, F, Y) {
        return j(k[V]) ? null : new y("Invalid " + F + " `" + Y + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return d(_);
    }
    function G(_, k, V, X, F) {
      return new y(
        (_ || "React class") + ": " + k + " type `" + V + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function U(_) {
      function k(V, X, F, Y, z) {
        var W = V[X], H = A(W);
        if (H !== "object")
          return new y("Invalid " + Y + " `" + z + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var q in _) {
          var J = _[q];
          if (typeof J != "function")
            return G(F, Y, z, q, B(J));
          var Ee = J(W, q, F, Y, z + "." + q, n);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return d(k);
    }
    function K(_) {
      function k(V, X, F, Y, z) {
        var W = V[X], H = A(W);
        if (H !== "object")
          return new y("Invalid " + Y + " `" + z + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        var q = t({}, V[X], _);
        for (var J in q) {
          var Ee = _[J];
          if (r(_, J) && typeof Ee != "function")
            return G(F, Y, z, J, B(Ee));
          if (!Ee)
            return new y(
              "Invalid " + Y + " `" + z + "` key `" + J + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(V[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var S = Ee(W, J, F, Y, z + "." + J, n);
          if (S)
            return S;
        }
        return null;
      }
      return d(k);
    }
    function j(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(j);
          if (_ === null || c(_))
            return !0;
          var k = h(_);
          if (k) {
            var V = k.call(_), X;
            if (k !== _.entries) {
              for (; !(X = V.next()).done; )
                if (!j(X.value))
                  return !1;
            } else
              for (; !(X = V.next()).done; ) {
                var F = X.value;
                if (F && !j(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(_, k) {
      return _ === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function A(_) {
      var k = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : D(k, _) ? "symbol" : k;
    }
    function B(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var k = A(_);
      if (k === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function te(_) {
      var k = B(_);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function re(_) {
      return !_.constructor || !_.constructor.name ? g : _.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, nr;
}
var rr, xo;
function Ra() {
  if (xo)
    return rr;
  xo = 1;
  var e = wr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rr = function() {
    function r(s, c, l, u, f, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, rr;
}
if (process.env.NODE_ENV !== "production") {
  var Sa = Pi(), Ca = !0;
  mr.exports = Ta()(Sa.isElement, Ca);
} else
  mr.exports = Ra()();
var _a = mr.exports;
const a = /* @__PURE__ */ da(_a);
function Ni(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ni(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ni(e)) && (r && (r += " "), r += t);
  return r;
}
function Dt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ft(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Mi(e) {
  if (!ft(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Mi(e[n]);
  }), t;
}
function Je(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? w({}, e) : e;
  return ft(e) && ft(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (ft(t[o]) && o in e && ft(e[o]) ? r[o] = Je(e[o], t[o], n) : n.clone ? r[o] = ft(t[o]) ? Mi(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Oa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ki(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Oa(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ii = Dt(a.element, ki);
Ii.isRequired = Dt(a.element.isRequired, ki);
const Pn = Ii;
function wa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Pa(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !wa(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ai = Dt(a.elementType, Pa), $a = "exact-prop: ​";
function ji(e) {
  return process.env.NODE_ENV === "production" ? e : w({}, e, {
    [$a]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Nt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var hr = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Na() {
  if (To)
    return he;
  To = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(d) {
    if (typeof d == "object" && d !== null) {
      var C = d.$$typeof;
      switch (C) {
        case e:
          switch (d = d.type, d) {
            case n:
            case o:
            case r:
            case u:
            case f:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case s:
                case l:
                case g:
                case h:
                case i:
                  return d;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return he.ContextConsumer = s, he.ContextProvider = i, he.Element = e, he.ForwardRef = l, he.Fragment = n, he.Lazy = g, he.Memo = h, he.Portal = t, he.Profiler = o, he.StrictMode = r, he.Suspense = u, he.SuspenseList = f, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(d) {
    return y(d) === s;
  }, he.isContextProvider = function(d) {
    return y(d) === i;
  }, he.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, he.isForwardRef = function(d) {
    return y(d) === l;
  }, he.isFragment = function(d) {
    return y(d) === n;
  }, he.isLazy = function(d) {
    return y(d) === g;
  }, he.isMemo = function(d) {
    return y(d) === h;
  }, he.isPortal = function(d) {
    return y(d) === t;
  }, he.isProfiler = function(d) {
    return y(d) === o;
  }, he.isStrictMode = function(d) {
    return y(d) === r;
  }, he.isSuspense = function(d) {
    return y(d) === u;
  }, he.isSuspenseList = function(d) {
    return y(d) === f;
  }, he.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === o || d === r || d === u || d === f || d === b || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === h || d.$$typeof === i || d.$$typeof === s || d.$$typeof === l || d.$$typeof === v || d.getModuleId !== void 0);
  }, he.typeOf = y, he;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function Ma() {
  return Ro || (Ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, y = !1, d = !1, C = !1, P = !1, E;
    E = Symbol.for("react.module.reference");
    function x(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || P || R === r || R === u || R === f || C || R === b || v || y || d || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === h || R.$$typeof === i || R.$$typeof === s || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === E || R.getModuleId !== void 0));
    }
    function p(R) {
      if (typeof R == "object" && R !== null) {
        var se = R.$$typeof;
        switch (se) {
          case e:
            var Re = R.type;
            switch (Re) {
              case n:
              case o:
              case r:
              case u:
              case f:
                return Re;
              default:
                var Me = Re && Re.$$typeof;
                switch (Me) {
                  case c:
                  case s:
                  case l:
                  case g:
                  case h:
                  case i:
                    return Me;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var N = s, O = i, Q = e, ee = l, M = n, G = g, U = h, K = t, j = o, D = r, A = u, B = f, te = !1, re = !1;
    function _(R) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(R) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(R) {
      return p(R) === s;
    }
    function X(R) {
      return p(R) === i;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Y(R) {
      return p(R) === l;
    }
    function z(R) {
      return p(R) === n;
    }
    function W(R) {
      return p(R) === g;
    }
    function H(R) {
      return p(R) === h;
    }
    function q(R) {
      return p(R) === t;
    }
    function J(R) {
      return p(R) === o;
    }
    function Ee(R) {
      return p(R) === r;
    }
    function S(R) {
      return p(R) === u;
    }
    function Z(R) {
      return p(R) === f;
    }
    ye.ContextConsumer = N, ye.ContextProvider = O, ye.Element = Q, ye.ForwardRef = ee, ye.Fragment = M, ye.Lazy = G, ye.Memo = U, ye.Portal = K, ye.Profiler = j, ye.StrictMode = D, ye.Suspense = A, ye.SuspenseList = B, ye.isAsyncMode = _, ye.isConcurrentMode = k, ye.isContextConsumer = V, ye.isContextProvider = X, ye.isElement = F, ye.isForwardRef = Y, ye.isFragment = z, ye.isLazy = W, ye.isMemo = H, ye.isPortal = q, ye.isProfiler = J, ye.isStrictMode = Ee, ye.isSuspense = S, ye.isSuspenseList = Z, ye.isValidElementType = x, ye.typeOf = p;
  }()), ye;
}
process.env.NODE_ENV === "production" ? hr.exports = Na() : hr.exports = Ma();
var So = hr.exports;
const ka = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ia(e) {
  const t = `${e}`.match(ka);
  return t && t[1] || "";
}
function Di(e, t = "") {
  return e.displayName || e.name || Ia(e) || t;
}
function Co(e, t, n) {
  const r = Di(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Aa(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Di(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case So.ForwardRef:
          return Co(e, e.render, "ForwardRef");
        case So.Memo:
          return Co(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Jt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const ja = a.oneOfType([a.func, a.object]), Fi = ja;
function Ie(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function yr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Li(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Da(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, o, i, s) => {
    const c = o || "<<anonymous>>", l = s || r;
    return typeof n[r] < "u" ? new Error(`The ${i} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function Fa(e, t) {
  var n, r;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Be(e) {
  return e && e.ownerDocument || document;
}
function Mt(e) {
  return Be(e).defaultView || window;
}
function La(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? w({}, t.propTypes) : null;
  return (o) => (i, s, c, l, u, ...f) => {
    const h = u || s, g = n == null ? void 0 : n[h];
    if (g) {
      const b = g(i, s, c, l, u, ...f);
      if (b)
        return b;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${h}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function bn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Va = typeof window < "u" ? T.useLayoutEffect : T.useEffect, kt = Va;
let _o = 0;
function za(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (_o += 1, n(`mui-${_o}`));
  }, [t]), r;
}
const Oo = T["useId".toString()];
function Ba(e) {
  if (Oo !== void 0) {
    const t = Oo();
    return e ?? t;
  }
  return za(e);
}
function Ua(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Ya({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = T.useRef(e !== void 0), [i, s] = T.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = T.useRef(t);
    T.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = T.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function yt(e) {
  const t = T.useRef(e);
  return kt(() => {
    t.current = e;
  }), T.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function qe(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      bn(n, t);
    });
  }, e);
}
let $n = !0, vr = !1, wo;
const Wa = {
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
function qa(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Wa[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ka(e) {
  e.metaKey || e.altKey || e.ctrlKey || ($n = !0);
}
function or() {
  $n = !1;
}
function Ha() {
  this.visibilityState === "hidden" && vr && ($n = !0);
}
function Ga(e) {
  e.addEventListener("keydown", Ka, !0), e.addEventListener("mousedown", or, !0), e.addEventListener("pointerdown", or, !0), e.addEventListener("touchstart", or, !0), e.addEventListener("visibilitychange", Ha, !0);
}
function Xa(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return $n || qa(t);
}
function Vi() {
  const e = T.useCallback((o) => {
    o != null && Ga(o.ownerDocument);
  }, []), t = T.useRef(!1);
  function n() {
    return t.current ? (vr = !0, window.clearTimeout(wo), wo = window.setTimeout(() => {
      vr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Xa(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function zi(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Ja(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Za(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Qa = Number.isInteger || Za;
function Bi(e, t, n, r) {
  const o = e[t];
  if (o == null || !Qa(o)) {
    const i = Ja(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ui(e, t, ...n) {
  return e[t] === void 0 ? null : Bi(e, t, ...n);
}
function gr() {
  return null;
}
Ui.isRequired = Bi;
gr.isRequired = gr;
const Yi = process.env.NODE_ENV === "production" ? gr : Ui;
function Wi(e, t) {
  const n = w({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = w({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = w({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = Wi(o[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function nt(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, s) => {
        if (s) {
          const c = t(s);
          c !== "" && i.push(c), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const Po = (e) => e, ec = () => {
  let e = Po;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Po;
    }
  };
}, tc = ec(), qi = tc, nc = {
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
function Ke(e, t, n = "Mui") {
  const r = nc[t];
  return r ? `${n}-${r}` : `${qi.generate(e)}-${t}`;
}
function Le(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ke(e, o, n);
  }), r;
}
function Ki(e) {
  return typeof e == "string";
}
function rc(e, t, n) {
  return e === void 0 || Ki(e) ? t : w({}, t, {
    ownerState: w({}, t.ownerState, n)
  });
}
function Hi(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function oc(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Gi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Gi(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function $o() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Gi(e)) && (r && (r += " "), r += t);
  return r;
}
function No(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ic(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = $o(o == null ? void 0 : o.className, r == null ? void 0 : r.className, i, n == null ? void 0 : n.className), v = w({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), y = w({}, n, o, r);
    return b.length > 0 && (y.className = b), Object.keys(v).length > 0 && (y.style = v), {
      props: y,
      internalRef: void 0
    };
  }
  const s = Hi(w({}, o, r)), c = No(r), l = No(o), u = t(s), f = $o(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = w({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), g = w({}, u, n, l, c);
  return f.length > 0 && (g.className = f), Object.keys(h).length > 0 && (g.style = h), {
    props: g,
    internalRef: u.ref
  };
}
const sc = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function It(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = xe(e, sc), c = i ? {} : oc(r, o), {
    props: l,
    internalRef: u
  } = ic(w({}, s, {
    externalSlotProps: c
  })), f = qe(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return rc(n, w({}, l, {
    ref: f
  }), o);
}
function Xi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ac = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cc = /* @__PURE__ */ Xi(
  function(e) {
    return ac.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function lc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function uc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var fc = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uc(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = lc(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ae = "-ms-", En = "-moz-", le = "-webkit-", Pr = "comm", $r = "rule", Nr = "decl", dc = "@import", Ji = "@keyframes", pc = "@layer", mc = Math.abs, Nn = String.fromCharCode, hc = Object.assign;
function yc(e, t) {
  return ke(e, 0) ^ 45 ? (((t << 2 ^ ke(e, 0)) << 2 ^ ke(e, 1)) << 2 ^ ke(e, 2)) << 2 ^ ke(e, 3) : 0;
}
function Zi(e) {
  return e.trim();
}
function vc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ue(e, t, n) {
  return e.replace(t, n);
}
function br(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zt(e, t, n) {
  return e.slice(t, n);
}
function Qe(e) {
  return e.length;
}
function Mr(e) {
  return e.length;
}
function un(e, t) {
  return t.push(e), e;
}
function gc(e, t) {
  return e.map(t).join("");
}
var Mn = 1, At = 1, Qi = 0, Fe = 0, $e = 0, Ft = "";
function kn(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Mn, column: At, length: s, return: "" };
}
function Yt(e, t) {
  return hc(kn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function bc() {
  return $e;
}
function Ec() {
  return $e = Fe > 0 ? ke(Ft, --Fe) : 0, At--, $e === 10 && (At = 1, Mn--), $e;
}
function Ue() {
  return $e = Fe < Qi ? ke(Ft, Fe++) : 0, At++, $e === 10 && (At = 1, Mn++), $e;
}
function tt() {
  return ke(Ft, Fe);
}
function pn() {
  return Fe;
}
function nn(e, t) {
  return Zt(Ft, e, t);
}
function Qt(e) {
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
function es(e) {
  return Mn = At = 1, Qi = Qe(Ft = e), Fe = 0, [];
}
function ts(e) {
  return Ft = "", e;
}
function mn(e) {
  return Zi(nn(Fe - 1, Er(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xc(e) {
  for (; ($e = tt()) && $e < 33; )
    Ue();
  return Qt(e) > 2 || Qt($e) > 3 ? "" : " ";
}
function Tc(e, t) {
  for (; --t && Ue() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97); )
    ;
  return nn(e, pn() + (t < 6 && tt() == 32 && Ue() == 32));
}
function Er(e) {
  for (; Ue(); )
    switch ($e) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Er($e);
        break;
      case 40:
        e === 41 && Er(e);
        break;
      case 92:
        Ue();
        break;
    }
  return Fe;
}
function Rc(e, t) {
  for (; Ue() && e + $e !== 47 + 10; )
    if (e + $e === 42 + 42 && tt() === 47)
      break;
  return "/*" + nn(t, Fe - 1) + "*" + Nn(e === 47 ? e : Ue());
}
function Sc(e) {
  for (; !Qt(tt()); )
    Ue();
  return nn(e, Fe);
}
function Cc(e) {
  return ts(hn("", null, null, null, [""], e = es(e), 0, [0], e));
}
function hn(e, t, n, r, o, i, s, c, l) {
  for (var u = 0, f = 0, h = s, g = 0, b = 0, v = 0, y = 1, d = 1, C = 1, P = 0, E = "", x = o, p = i, N = r, O = E; d; )
    switch (v = P, P = Ue()) {
      case 40:
        if (v != 108 && ke(O, h - 1) == 58) {
          br(O += ue(mn(P), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += mn(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += xc(v);
        break;
      case 92:
        O += Tc(pn() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            un(_c(Rc(Ue(), pn()), t, n), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * y:
        c[u++] = Qe(O) * C;
      case 125 * y:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            d = 0;
          case 59 + f:
            C == -1 && (O = ue(O, /\f/g, "")), b > 0 && Qe(O) - h && un(b > 32 ? ko(O + ";", r, n, h - 1) : ko(ue(O, " ", "") + ";", r, n, h - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (un(N = Mo(O, t, n, u, f, o, c, E, x = [], p = [], h), i), P === 123)
              if (f === 0)
                hn(O, t, N, N, x, i, h, c, p);
              else
                switch (g === 99 && ke(O, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hn(e, N, N, r && un(Mo(e, N, N, 0, 0, o, c, E, o, x = [], h), p), o, p, h, c, r ? x : p);
                    break;
                  default:
                    hn(O, N, N, N, [""], p, 0, c, p);
                }
        }
        u = f = b = 0, y = C = 1, E = O = "", h = s;
        break;
      case 58:
        h = 1 + Qe(O), b = v;
      default:
        if (y < 1) {
          if (P == 123)
            --y;
          else if (P == 125 && y++ == 0 && Ec() == 125)
            continue;
        }
        switch (O += Nn(P), P * y) {
          case 38:
            C = f > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            c[u++] = (Qe(O) - 1) * C, C = 1;
            break;
          case 64:
            tt() === 45 && (O += mn(Ue())), g = tt(), f = h = Qe(E = O += Sc(pn())), P++;
            break;
          case 45:
            v === 45 && Qe(O) == 2 && (y = 0);
        }
    }
  return i;
}
function Mo(e, t, n, r, o, i, s, c, l, u, f) {
  for (var h = o - 1, g = o === 0 ? i : [""], b = Mr(g), v = 0, y = 0, d = 0; v < r; ++v)
    for (var C = 0, P = Zt(e, h + 1, h = mc(y = s[v])), E = e; C < b; ++C)
      (E = Zi(y > 0 ? g[C] + " " + P : ue(P, /&\f/g, g[C]))) && (l[d++] = E);
  return kn(e, t, n, o === 0 ? $r : c, l, u, f);
}
function _c(e, t, n) {
  return kn(e, t, n, Pr, Nn(bc()), Zt(e, 2, -2), 0);
}
function ko(e, t, n, r) {
  return kn(e, t, n, Nr, Zt(e, 0, r), Zt(e, r + 1, -1), r);
}
function Pt(e, t) {
  for (var n = "", r = Mr(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Oc(e, t, n, r) {
  switch (e.type) {
    case pc:
      if (e.children.length)
        break;
    case dc:
    case Nr:
      return e.return = e.return || e.value;
    case Pr:
      return "";
    case Ji:
      return e.return = e.value + "{" + Pt(e.children, r) + "}";
    case $r:
      e.value = e.props.join(",");
  }
  return Qe(n = Pt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function wc(e) {
  var t = Mr(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function Pc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var $c = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = tt(), o === 38 && i === 12 && (n[r] = 1), !Qt(i); )
    Ue();
  return nn(t, Fe);
}, Nc = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Qt(o)) {
      case 0:
        o === 38 && tt() === 12 && (n[r] = 1), t[r] += $c(Fe - 1, n, r);
        break;
      case 2:
        t[r] += mn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = tt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Nn(o);
    }
  while (o = Ue());
  return t;
}, Mc = function(t, n) {
  return ts(Nc(es(t), n));
}, Io = /* @__PURE__ */ new WeakMap(), kc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Io.get(r)) && !o) {
      Io.set(t, !0);
      for (var i = [], s = Mc(n, i), c = r.props, l = 0, u = 0; l < s.length; l++)
        for (var f = 0; f < c.length; f++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[f]) : c[f] + " " + s[l];
    }
  }
}, Ic = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ac = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", jc = function(t) {
  return t.type === "comm" && t.children.indexOf(Ac) > -1;
}, Dc = function(t) {
  return function(n, r, o) {
    if (!(n.type !== "rule" || t.compat)) {
      var i = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!n.parent, c = s ? n.parent.children : (
          // global rule at the root level
          o
        ), l = c.length - 1; l >= 0; l--) {
          var u = c[l];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (jc(u))
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
}, ns = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Fc = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!ns(n[r]))
      return !0;
  return !1;
}, Ao = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Lc = function(t, n, r) {
  ns(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ao(t)) : Fc(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ao(t)));
};
function rs(e, t) {
  switch (yc(e, t)) {
    case 5103:
      return le + "print-" + e + e;
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
      return le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + e + En + e + Ae + e + e;
    case 6828:
    case 4268:
      return le + e + Ae + e + e;
    case 6165:
      return le + e + Ae + "flex-" + e + e;
    case 5187:
      return le + e + ue(e, /(\w+).+(:[^]+)/, le + "box-$1$2" + Ae + "flex-$1$2") + e;
    case 5443:
      return le + e + Ae + "flex-item-" + ue(e, /flex-|-self/, "") + e;
    case 4675:
      return le + e + Ae + "flex-line-pack" + ue(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return le + e + Ae + ue(e, "shrink", "negative") + e;
    case 5292:
      return le + e + Ae + ue(e, "basis", "preferred-size") + e;
    case 6060:
      return le + "box-" + ue(e, "-grow", "") + le + e + Ae + ue(e, "grow", "positive") + e;
    case 4554:
      return le + ue(e, /([^-])(transform)/g, "$1" + le + "$2") + e;
    case 6187:
      return ue(ue(ue(e, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return ue(ue(e, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + le + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, le + "$1$2") + e;
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
      if (Qe(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45)
              break;
          case 102:
            return ue(e, /(.+:)(.+)-([^]+)/, "$1" + le + "$2-$3$1" + En + (ke(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~br(e, "stretch") ? rs(ue(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ke(e, Qe(e) - 3 - (~br(e, "!important") && 10))) {
        case 107:
          return ue(e, ":", ":" + le) + e;
        case 101:
          return ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + le + (ke(e, 14) === 45 ? "inline-" : "") + "box$3$1" + le + "$2$3$1" + Ae + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return le + e + Ae + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return le + e + Ae + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return le + e + Ae + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return le + e + Ae + e + e;
  }
  return e;
}
var Vc = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Nr:
        t.return = rs(t.value, t.length);
        break;
      case Ji:
        return Pt([Yt(t, {
          value: ue(t.value, "@", "@" + le)
        })], o);
      case $r:
        if (t.length)
          return gc(t.props, function(i) {
            switch (vc(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Pt([Yt(t, {
                  props: [ue(i, /:(read-\w+)/, ":" + En + "$1")]
                })], o);
              case "::placeholder":
                return Pt([Yt(t, {
                  props: [ue(i, /:(plac\w+)/, ":" + le + "input-$1")]
                }), Yt(t, {
                  props: [ue(i, /:(plac\w+)/, ":" + En + "$1")]
                }), Yt(t, {
                  props: [ue(i, /:(plac\w+)/, Ae + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, zc = [Vc], Bc = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var d = y.getAttribute("data-emotion");
      d.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || zc;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var d = y.getAttribute("data-emotion").split(" "), C = 1; C < d.length; C++)
        i[d[C]] = !0;
      c.push(y);
    }
  );
  var l, u = [kc, Ic];
  process.env.NODE_ENV !== "production" && u.push(Dc({
    get compat() {
      return v.compat;
    }
  }), Lc);
  {
    var f, h = [Oc, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? f.insert(y.return) : y.value && y.type !== Pr && f.insert(y.value + "{}"));
    } : Pc(function(y) {
      f.insert(y);
    })], g = wc(u.concat(o, h)), b = function(d) {
      return Pt(Cc(d), g);
    };
    l = function(d, C, P, E) {
      f = P, process.env.NODE_ENV !== "production" && C.map !== void 0 && (f = {
        insert: function(p) {
          P.insert(p + C.map);
        }
      }), b(d ? d + "{" + C.styles + "}" : C.styles), E && (v.inserted[C.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new fc({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return v.sheet.hydrate(c), v;
}, xr = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Uc() {
  if (jo)
    return ve;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function E(p) {
    if (typeof p == "object" && p !== null) {
      var N = p.$$typeof;
      switch (N) {
        case t:
          switch (p = p.type, p) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case f:
                case v:
                case b:
                case s:
                  return p;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function x(p) {
    return E(p) === u;
  }
  return ve.AsyncMode = l, ve.ConcurrentMode = u, ve.ContextConsumer = c, ve.ContextProvider = s, ve.Element = t, ve.ForwardRef = f, ve.Fragment = r, ve.Lazy = v, ve.Memo = b, ve.Portal = n, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = h, ve.isAsyncMode = function(p) {
    return x(p) || E(p) === l;
  }, ve.isConcurrentMode = x, ve.isContextConsumer = function(p) {
    return E(p) === c;
  }, ve.isContextProvider = function(p) {
    return E(p) === s;
  }, ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ve.isForwardRef = function(p) {
    return E(p) === f;
  }, ve.isFragment = function(p) {
    return E(p) === r;
  }, ve.isLazy = function(p) {
    return E(p) === v;
  }, ve.isMemo = function(p) {
    return E(p) === b;
  }, ve.isPortal = function(p) {
    return E(p) === n;
  }, ve.isProfiler = function(p) {
    return E(p) === i;
  }, ve.isStrictMode = function(p) {
    return E(p) === o;
  }, ve.isSuspense = function(p) {
    return E(p) === h;
  }, ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === u || p === i || p === o || p === h || p === g || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === b || p.$$typeof === s || p.$$typeof === c || p.$$typeof === f || p.$$typeof === d || p.$$typeof === C || p.$$typeof === P || p.$$typeof === y);
  }, ve.typeOf = E, ve;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function Yc() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === i || S === o || S === h || S === g || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === b || S.$$typeof === s || S.$$typeof === c || S.$$typeof === f || S.$$typeof === d || S.$$typeof === C || S.$$typeof === P || S.$$typeof === y);
    }
    function x(S) {
      if (typeof S == "object" && S !== null) {
        var Z = S.$$typeof;
        switch (Z) {
          case t:
            var R = S.type;
            switch (R) {
              case l:
              case u:
              case r:
              case i:
              case o:
              case h:
                return R;
              default:
                var se = R && R.$$typeof;
                switch (se) {
                  case c:
                  case f:
                  case v:
                  case b:
                  case s:
                    return se;
                  default:
                    return Z;
                }
            }
          case n:
            return Z;
        }
      }
    }
    var p = l, N = u, O = c, Q = s, ee = t, M = f, G = r, U = v, K = b, j = n, D = i, A = o, B = h, te = !1;
    function re(S) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || x(S) === l;
    }
    function _(S) {
      return x(S) === u;
    }
    function k(S) {
      return x(S) === c;
    }
    function V(S) {
      return x(S) === s;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function F(S) {
      return x(S) === f;
    }
    function Y(S) {
      return x(S) === r;
    }
    function z(S) {
      return x(S) === v;
    }
    function W(S) {
      return x(S) === b;
    }
    function H(S) {
      return x(S) === n;
    }
    function q(S) {
      return x(S) === i;
    }
    function J(S) {
      return x(S) === o;
    }
    function Ee(S) {
      return x(S) === h;
    }
    ge.AsyncMode = p, ge.ConcurrentMode = N, ge.ContextConsumer = O, ge.ContextProvider = Q, ge.Element = ee, ge.ForwardRef = M, ge.Fragment = G, ge.Lazy = U, ge.Memo = K, ge.Portal = j, ge.Profiler = D, ge.StrictMode = A, ge.Suspense = B, ge.isAsyncMode = re, ge.isConcurrentMode = _, ge.isContextConsumer = k, ge.isContextProvider = V, ge.isElement = X, ge.isForwardRef = F, ge.isFragment = Y, ge.isLazy = z, ge.isMemo = W, ge.isPortal = H, ge.isProfiler = q, ge.isStrictMode = J, ge.isSuspense = Ee, ge.isValidElementType = E, ge.typeOf = x;
  }()), ge;
}
process.env.NODE_ENV === "production" ? xr.exports = Uc() : xr.exports = Yc();
var Wc = xr.exports, os = Wc, qc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, is = {};
is[os.ForwardRef] = qc;
is[os.Memo] = Kc;
var Hc = !0;
function kr(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var In = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Hc === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, An = function(t, n, r) {
  In(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Gc(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Xc = {
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
}, Fo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Jc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Zc = /[A-Z]|^ms/g, ss = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ir = function(t) {
  return t.charCodeAt(1) === 45;
}, Lo = function(t) {
  return t != null && typeof t != "boolean";
}, ir = /* @__PURE__ */ Xi(function(e) {
  return Ir(e) ? e : e.replace(Zc, "-$&").toLowerCase();
}), xn = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ss, function(r, o, i) {
          return Xe = {
            name: o,
            styles: i,
            next: Xe
          }, o;
        });
  }
  return Xc[t] !== 1 && !Ir(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Qc = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, el = ["normal", "none", "initial", "inherit", "unset"], tl = xn, nl = /^-ms-/, rl = /-(.)/g, Vo = {};
  xn = function(t, n) {
    if (t === "content" && (typeof n != "string" || el.indexOf(n) === -1 && !Qc.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = tl(t, n);
    return r !== "" && !Ir(t) && t.indexOf("-") !== -1 && Vo[t] === void 0 && (Vo[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(nl, "ms-").replace(rl, function(o, i) {
      return i.toUpperCase();
    }) + "?")), r;
  };
}
var as = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function en(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(as);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Xe = {
          name: n.name,
          styles: n.styles,
          next: Xe
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Xe = {
              name: r.name,
              styles: r.styles,
              next: Xe
            }, r = r.next;
        var o = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (o += n.map), o;
      }
      return ol(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Xe, s = n(e);
        return Xe = i, en(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = n.replace(ss, function(f, h, g) {
          var b = "animation" + c.length;
          return c.push("const " + b + " = keyframes`" + g.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function ol(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += en(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Lo(s) && (r += ir(i) + ":" + xn(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(as);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Lo(s[c]) && (r += ir(i) + ":" + xn(i, s[c]) + ";");
        else {
          var l = en(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += ir(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Jc), r += i + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var zo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, cs;
process.env.NODE_ENV !== "production" && (cs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Xe, jt = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Xe = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += en(r, n, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Fo), i += s[0]);
  for (var c = 1; c < t.length; c++)
    i += en(r, n, t[c]), o && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(Fo), i += s[c]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(cs, function(g) {
    return l = g, "";
  })), zo.lastIndex = 0;
  for (var u = "", f; (f = zo.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var h = Gc(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: h,
    styles: i,
    map: l,
    next: Xe,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: h,
    styles: i,
    next: Xe
  };
}, il = function(t) {
  return t();
}, ls = T["useInsertionEffect"] ? T["useInsertionEffect"] : !1, Ar = ls || il, Bo = ls || T.useLayoutEffect, sl = {}.hasOwnProperty, jr = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Bc({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (jr.displayName = "EmotionCacheContext");
jr.Provider;
var jn = function(t) {
  return /* @__PURE__ */ Qs(function(n, r) {
    var o = ea(jr);
    return t(n, o, r);
  });
}, Lt = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Lt.displayName = "EmotionThemeContext");
var Uo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Yo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", al = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return In(n, r, o), Ar(function() {
    return An(n, r, o);
  }), null;
}, cl = /* @__PURE__ */ jn(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Uo], i = [r], s = "";
  typeof e.className == "string" ? s = kr(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = jt(i, void 0, T.useContext(Lt));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[Yo];
    l && (c = jt([c, "label:" + l + ";"]));
  }
  s += t.key + "-" + c.name;
  var u = {};
  for (var f in e)
    sl.call(e, f) && f !== "css" && f !== Uo && (process.env.NODE_ENV === "production" || f !== Yo) && (u[f] = e[f]);
  return u.ref = n, u.className = s, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(al, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ T.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (cl.displayName = "EmotionCssPropInternal");
var ll = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Wo = !1, ul = /* @__PURE__ */ jn(function(e, t) {
  process.env.NODE_ENV !== "production" && !Wo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Wo = !0);
  var n = e.styles, r = jt([n], void 0, T.useContext(Lt)), o = T.useRef();
  return Bo(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), Bo(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && An(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (ul.displayName = "EmotionGlobal");
function fl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return jt(t);
}
var Dr = function() {
  var t = fl.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, dl = function e(t) {
  for (var n = t.length, r = 0, o = ""; r < n; r++) {
    var i = t[r];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var c in i)
              i[c] && c && (s && (s += " "), s += c);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function pl(e, t, n) {
  var r = [], o = kr(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var ml = function(t) {
  var n = t.cache, r = t.serializedArr;
  return Ar(function() {
    for (var o = 0; o < r.length; o++)
      An(n, r[o], !1);
  }), null;
}, hl = /* @__PURE__ */ jn(function(e, t) {
  var n = !1, r = [], o = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), h = 0; h < u; h++)
      f[h] = arguments[h];
    var g = jt(f, t.registered);
    return r.push(g), In(t, g, !1), t.key + "-" + g.name;
  }, i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), h = 0; h < u; h++)
      f[h] = arguments[h];
    return pl(t.registered, o, dl(f));
  }, s = {
    css: o,
    cx: i,
    theme: T.useContext(Lt)
  }, c = e.children(s);
  return n = !0, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(ml, {
    cache: t,
    serializedArr: r
  }), c);
});
process.env.NODE_ENV !== "production" && (hl.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var qo = !0, yl = typeof jest < "u" || typeof vi < "u";
  if (qo && !yl) {
    var Ko = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : qo ? window : global
    ), Ho = "__EMOTION_REACT_" + ll.version.split(".")[0] + "__";
    Ko[Ho] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ko[Ho] = !0;
  }
}
var vl = cc, gl = function(t) {
  return t !== "theme";
}, Go = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? vl : gl;
}, Xo = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Jo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, bl = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return In(n, r, o), Ar(function() {
    return An(n, r, o);
  }), null;
}, El = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var c = Xo(t, n, r), l = c || Go(o), u = !l("as");
  return function() {
    var f = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      h.push.apply(h, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(Jo), h.push(f[0][0]);
      for (var g = f.length, b = 1; b < g; b++)
        process.env.NODE_ENV !== "production" && f[0][b] === void 0 && console.error(Jo), h.push(f[b], f[0][b]);
    }
    var v = jn(function(y, d, C) {
      var P = u && y.as || o, E = "", x = [], p = y;
      if (y.theme == null) {
        p = {};
        for (var N in y)
          p[N] = y[N];
        p.theme = T.useContext(Lt);
      }
      typeof y.className == "string" ? E = kr(d.registered, x, y.className) : y.className != null && (E = y.className + " ");
      var O = jt(h.concat(x), d.registered, p);
      E += d.key + "-" + O.name, s !== void 0 && (E += " " + s);
      var Q = u && c === void 0 ? Go(P) : l, ee = {};
      for (var M in y)
        u && M === "as" || // $FlowFixMe
        Q(M) && (ee[M] = y[M]);
      return ee.className = E, ee.ref = C, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(bl, {
        cache: d,
        serialized: O,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ T.createElement(P, ee));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = h, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(y, d) {
      return e(y, w({}, n, d, {
        shouldForwardProp: Xo(v, d, !0)
      })).apply(void 0, h);
    }, v;
  };
}, xl = [
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
], Tr = El.bind();
xl.forEach(function(e) {
  Tr[e] = Tr(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Tl(e, t) {
  const n = Tr(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Rl = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Sl = ["values", "unit", "step"], Cl = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => w({}, n, {
    [r.key]: r.val
  }), {});
};
function _l(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: n = "px",
    step: r = 5
  } = e, o = xe(e, Sl), i = Cl(t), s = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${n})`;
  }
  function u(g, b) {
    const v = s.indexOf(b);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : b) - r / 100}${n})`;
  }
  function f(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : c(g);
  }
  function h(g) {
    const b = s.indexOf(g);
    return b === 0 ? c(s[1]) : b === s.length - 1 ? l(s[b]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return w({
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: f,
    not: h,
    unit: n
  }, o);
}
const Ol = {
  borderRadius: 4
}, wl = Ol, Pl = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, pt = Pl;
function Gt(e, t) {
  return t ? Je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Fr = {
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
}, Zo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Fr[e]}px)`
};
function it(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Zo;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Zo;
    return Object.keys(t).reduce((s, c) => {
      if (Object.keys(i.values || Fr).indexOf(c) !== -1) {
        const l = i.up(c);
        s[l] = n(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function $l(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Nl(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Dn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Tn(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Dn(e, n) || r, t && (o = t(o, r, e)), o;
}
function be(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = Dn(l, r) || {};
    return it(s, c, (h) => {
      let g = Tn(u, o, h);
      return h === g && typeof h == "string" && (g = Tn(u, o, `${t}${h === "default" ? "" : Ie(h)}`, h)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: pt
  } : {}, i.filterProps = [t], i;
}
function Ml(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const kl = {
  m: "margin",
  p: "padding"
}, Il = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Al = Ml((e) => {
  if (e.length > 2)
    if (Qo[e])
      e = Qo[e];
    else
      return [e];
  const [t, n] = e.split(""), r = kl[t], o = Il[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Fn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ln = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], jl = [...Fn, ...Ln];
function rn(e, t, n, r) {
  var o;
  const i = (o = Dn(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function us(e) {
  return rn(e, "spacing", 8, "spacing");
}
function on(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Dl(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = on(t, n), r), {});
}
function Fl(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Al(n), i = Dl(o, r), s = e[n];
  return it(e, s, i);
}
function fs(e, t) {
  const n = us(e.theme);
  return Object.keys(e).map((r) => Fl(e, t, r, n)).reduce(Gt, {});
}
function Ce(e) {
  return fs(e, Fn);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? Fn.reduce((e, t) => (e[t] = pt, e), {}) : {};
Ce.filterProps = Fn;
function _e(e) {
  return fs(e, Ln);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Ln.reduce((e, t) => (e[t] = pt, e), {}) : {};
_e.filterProps = Ln;
process.env.NODE_ENV !== "production" && jl.reduce((e, t) => (e[t] = pt, e), {});
function Ll(e = 8) {
  if (e.mui)
    return e;
  const t = us({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Vn(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Gt(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function et(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Vl = be({
  prop: "border",
  themeKey: "borders",
  transform: et
}), zl = be({
  prop: "borderTop",
  themeKey: "borders",
  transform: et
}), Bl = be({
  prop: "borderRight",
  themeKey: "borders",
  transform: et
}), Ul = be({
  prop: "borderBottom",
  themeKey: "borders",
  transform: et
}), Yl = be({
  prop: "borderLeft",
  themeKey: "borders",
  transform: et
}), Wl = be({
  prop: "borderColor",
  themeKey: "palette"
}), ql = be({
  prop: "borderTopColor",
  themeKey: "palette"
}), Kl = be({
  prop: "borderRightColor",
  themeKey: "palette"
}), Hl = be({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Gl = be({
  prop: "borderLeftColor",
  themeKey: "palette"
}), zn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = rn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: on(t, r)
    });
    return it(e, e.borderRadius, n);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pt
} : {};
zn.filterProps = ["borderRadius"];
Vn(Vl, zl, Bl, Ul, Yl, Wl, ql, Kl, Hl, Gl, zn);
const Bn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = rn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: on(t, r)
    });
    return it(e, e.gap, n);
  }
  return null;
};
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pt
} : {};
Bn.filterProps = ["gap"];
const Un = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = rn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: on(t, r)
    });
    return it(e, e.columnGap, n);
  }
  return null;
};
Un.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pt
} : {};
Un.filterProps = ["columnGap"];
const Yn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = rn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: on(t, r)
    });
    return it(e, e.rowGap, n);
  }
  return null;
};
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pt
} : {};
Yn.filterProps = ["rowGap"];
const Xl = be({
  prop: "gridColumn"
}), Jl = be({
  prop: "gridRow"
}), Zl = be({
  prop: "gridAutoFlow"
}), Ql = be({
  prop: "gridAutoColumns"
}), eu = be({
  prop: "gridAutoRows"
}), tu = be({
  prop: "gridTemplateColumns"
}), nu = be({
  prop: "gridTemplateRows"
}), ru = be({
  prop: "gridTemplateAreas"
}), ou = be({
  prop: "gridArea"
});
Vn(Bn, Un, Yn, Xl, Jl, Zl, Ql, eu, tu, nu, ru, ou);
function $t(e, t) {
  return t === "grey" ? t : e;
}
const iu = be({
  prop: "color",
  themeKey: "palette",
  transform: $t
}), su = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: $t
}), au = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: $t
});
Vn(iu, su, au);
function Ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const cu = be({
  prop: "width",
  transform: Ve
}), Lr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Fr[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ve(n)
      };
    };
    return it(e, e.maxWidth, t);
  }
  return null;
};
Lr.filterProps = ["maxWidth"];
const lu = be({
  prop: "minWidth",
  transform: Ve
}), uu = be({
  prop: "height",
  transform: Ve
}), fu = be({
  prop: "maxHeight",
  transform: Ve
}), du = be({
  prop: "minHeight",
  transform: Ve
});
be({
  prop: "size",
  cssProperty: "width",
  transform: Ve
});
be({
  prop: "size",
  cssProperty: "height",
  transform: Ve
});
const pu = be({
  prop: "boxSizing"
});
Vn(cu, Lr, lu, uu, fu, du, pu);
const mu = {
  // borders
  border: {
    themeKey: "borders",
    transform: et
  },
  borderTop: {
    themeKey: "borders",
    transform: et
  },
  borderRight: {
    themeKey: "borders",
    transform: et
  },
  borderBottom: {
    themeKey: "borders",
    transform: et
  },
  borderLeft: {
    themeKey: "borders",
    transform: et
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
    style: zn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: $t
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: $t
  },
  backgroundColor: {
    themeKey: "palette",
    transform: $t
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Ce
  },
  mt: {
    style: Ce
  },
  mr: {
    style: Ce
  },
  mb: {
    style: Ce
  },
  ml: {
    style: Ce
  },
  mx: {
    style: Ce
  },
  my: {
    style: Ce
  },
  margin: {
    style: Ce
  },
  marginTop: {
    style: Ce
  },
  marginRight: {
    style: Ce
  },
  marginBottom: {
    style: Ce
  },
  marginLeft: {
    style: Ce
  },
  marginX: {
    style: Ce
  },
  marginY: {
    style: Ce
  },
  marginInline: {
    style: Ce
  },
  marginInlineStart: {
    style: Ce
  },
  marginInlineEnd: {
    style: Ce
  },
  marginBlock: {
    style: Ce
  },
  marginBlockStart: {
    style: Ce
  },
  marginBlockEnd: {
    style: Ce
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
    style: Bn
  },
  rowGap: {
    style: Yn
  },
  columnGap: {
    style: Un
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
    transform: Ve
  },
  maxWidth: {
    style: Lr
  },
  minWidth: {
    transform: Ve
  },
  height: {
    transform: Ve
  },
  maxHeight: {
    transform: Ve
  },
  minHeight: {
    transform: Ve
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
}, Vr = mu;
function hu(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function yu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vu() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, c = i[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: f,
      style: h
    } = c;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const g = Dn(o, u) || {};
    return h ? h(s) : it(s, r, (v) => {
      let y = Tn(g, f, v);
      return v === y && typeof v == "string" && (y = Tn(g, f, `${n}${v === "default" ? "" : Ie(v)}`, v)), l === !1 ? y : {
        [l]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Vr;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = $l(i.breakpoints), h = Object.keys(f);
      let g = f;
      return Object.keys(u).forEach((b) => {
        const v = yu(u[b], i);
        if (v != null)
          if (typeof v == "object")
            if (s[b])
              g = Gt(g, e(b, v, i, s));
            else {
              const y = it({
                theme: i
              }, v, (d) => ({
                [b]: d
              }));
              hu(y, v) ? g[b] = t({
                sx: v,
                theme: i
              }) : g = Gt(g, y);
            }
          else
            g = Gt(g, e(b, v, i, s));
      }), Nl(h, g);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const ds = vu();
ds.filterProps = ["sx"];
const zr = ds, gu = ["breakpoints", "palette", "spacing", "shape"];
function Br(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = xe(e, gu), c = _l(n), l = Ll(o);
  let u = Je({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: w({
      mode: "light"
    }, r),
    spacing: l,
    shape: w({}, wl, i)
  }, s);
  return u = t.reduce((f, h) => Je(f, h), u), u.unstable_sxConfig = w({}, Vr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(h) {
    return zr({
      sx: h,
      theme: this
    });
  }, u;
}
function bu(e) {
  return Object.keys(e).length === 0;
}
function Eu(e = null) {
  const t = T.useContext(Lt);
  return !t || bu(t) ? e : t;
}
const xu = Br();
function ps(e = xu) {
  return Eu(e);
}
const Tu = ["variant"];
function ei(e) {
  return e.length === 0;
}
function ms(e) {
  const {
    variant: t
  } = e, n = xe(e, Tu);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += ei(r) ? e[o] : Ie(e[o]) : r += `${ei(r) ? o : Ie(o)}${Ie(e[o].toString())}`;
  }), r;
}
const Ru = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Su(e) {
  return Object.keys(e).length === 0;
}
function Cu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const _u = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Rn = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = ms(n.props);
    t[r] = n.style;
  }), t;
}, Ou = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Rn(n);
}, Sn = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let s = !0;
    Object.keys(i.props).forEach((c) => {
      r[c] !== i.props[c] && e[c] !== i.props[c] && (s = !1);
    }), s && o.push(t[ms(i.props)]);
  }), o;
}, wu = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return Sn(e, t, i);
};
function yn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Pu = Br(), ti = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function vn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Su(t) ? e : t[n] || t;
}
function $u(e) {
  return e ? (t, n) => n[e] : null;
}
const ni = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(w({}, t, {
    theme: vn(w({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = Sn(t, Rn(i), i);
    return [o, ...s];
  }
  return o;
};
function Nu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Pu,
    rootShouldForwardProp: r = yn,
    slotShouldForwardProp: o = yn
  } = e, i = (s) => zr(w({}, s, {
    theme: vn(w({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, c = {}) => {
    Rl(s, (x) => x.filter((p) => !(p != null && p.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = $u(ti(u))
    } = c, b = xe(c, Ru), v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = h || !1;
    let d;
    process.env.NODE_ENV !== "production" && l && (d = `${l}-${ti(u || "Root")}`);
    let C = yn;
    u === "Root" || u === "root" ? C = r : u ? C = o : Cu(s) && (C = void 0);
    const P = Tl(s, w({
      shouldForwardProp: C,
      label: d
    }, b)), E = (x, ...p) => {
      const N = p ? p.map((M) => {
        if (typeof M == "function" && M.__emotion_real !== M)
          return (G) => ni({
            styledArg: M,
            props: G,
            defaultTheme: n,
            themeId: t
          });
        if (ft(M)) {
          let G = M, U;
          return M && M.variants && (U = M.variants, delete G.variants, G = (K) => {
            let j = M;
            return Sn(K, Rn(U), U).forEach((A) => {
              j = Je(j, A);
            }), j;
          }), G;
        }
        return M;
      }) : [];
      let O = x;
      if (ft(x)) {
        let M;
        x && x.variants && (M = x.variants, delete O.variants, O = (G) => {
          let U = x;
          return Sn(G, Rn(M), M).forEach((j) => {
            U = Je(U, j);
          }), U;
        });
      } else
        typeof x == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        x.__emotion_real !== x && (O = (M) => ni({
          styledArg: x,
          props: M,
          defaultTheme: n,
          themeId: t
        }));
      l && g && N.push((M) => {
        const G = vn(w({}, M, {
          defaultTheme: n,
          themeId: t
        })), U = _u(l, G);
        if (U) {
          const K = {};
          return Object.entries(U).forEach(([j, D]) => {
            K[j] = typeof D == "function" ? D(w({}, M, {
              theme: G
            })) : D;
          }), g(M, K);
        }
        return null;
      }), l && !v && N.push((M) => {
        const G = vn(w({}, M, {
          defaultTheme: n,
          themeId: t
        }));
        return wu(M, Ou(l, G), G, l);
      }), y || N.push(i);
      const Q = N.length - p.length;
      if (Array.isArray(x) && Q > 0) {
        const M = new Array(Q).fill("");
        O = [...x, ...M], O.raw = [...x.raw, ...M];
      }
      const ee = P(O, ...N);
      if (process.env.NODE_ENV !== "production") {
        let M;
        l && (M = `${l}${Ie(u || "")}`), M === void 0 && (M = `Styled(${Aa(s)})`), ee.displayName = M;
      }
      return s.muiName && (ee.muiName = s.muiName), ee;
    };
    return P.withConfig && (E.withConfig = P.withConfig), E;
  };
}
function Mu(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Wi(t.components[n].defaultProps, r);
}
function ku({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ps(n);
  return r && (o = o[r] || o), Mu({
    theme: o,
    name: t,
    props: e
  });
}
function Ur(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function Iu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function gt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return gt(Iu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Wn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Au(e) {
  e = gt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Wn({
    type: c,
    values: l
  });
}
function ri(e) {
  e = gt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? gt(Au(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oi(e, t) {
  const n = ri(e), r = ri(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function dt(e, t) {
  return e = gt(e), t = Ur(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Wn(e);
}
function ju(e, t) {
  if (e = gt(e), t = Ur(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Wn(e);
}
function Du(e, t) {
  if (e = gt(e), t = Ur(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Wn(e);
}
function Fu(e, t) {
  return w({
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
  }, t);
}
const Lu = {
  black: "#000",
  white: "#fff"
}, tn = Lu, Vu = {
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
}, zu = Vu, Bu = {
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
}, Tt = Bu, Uu = {
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
}, Rt = Uu, Yu = {
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
}, Wt = Yu, Wu = {
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
}, St = Wu, qu = {
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
}, Ct = qu, Ku = {
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
}, _t = Ku, Hu = ["mode", "contrastThreshold", "tonalOffset"], ii = {
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
    paper: tn.white,
    default: tn.white
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
}, sr = {
  text: {
    primary: tn.white,
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
    active: tn.white,
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
function si(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Du(e.main, o) : t === "dark" && (e.dark = ju(e.main, i)));
}
function Gu(e = "light") {
  return e === "dark" ? {
    main: St[200],
    light: St[50],
    dark: St[400]
  } : {
    main: St[700],
    light: St[400],
    dark: St[800]
  };
}
function Xu(e = "light") {
  return e === "dark" ? {
    main: Tt[200],
    light: Tt[50],
    dark: Tt[400]
  } : {
    main: Tt[500],
    light: Tt[300],
    dark: Tt[700]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: Rt[500],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: Rt[700],
    light: Rt[400],
    dark: Rt[800]
  };
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: Ct[400],
    light: Ct[300],
    dark: Ct[700]
  } : {
    main: Ct[700],
    light: Ct[500],
    dark: Ct[900]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: _t[800],
    light: _t[500],
    dark: _t[900]
  };
}
function ef(e = "light") {
  return e === "dark" ? {
    main: Wt[400],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Wt[500],
    dark: Wt[900]
  };
}
function tf(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = xe(e, Hu), i = e.primary || Gu(t), s = e.secondary || Xu(t), c = e.error || Ju(t), l = e.info || Zu(t), u = e.success || Qu(t), f = e.warning || ef(t);
  function h(y) {
    const d = oi(y, sr.text.primary) >= n ? sr.text.primary : ii.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = oi(y, d);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${d} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return d;
  }
  const g = ({
    color: y,
    name: d,
    mainShade: C = 500,
    lightShade: P = 300,
    darkShade: E = 700
  }) => {
    if (y = w({}, y), !y.main && y[C] && (y.main = y[C]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${d ? ` (${d})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Nt(11, d ? ` (${d})` : "", C));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${d ? ` (${d})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Nt(12, d ? ` (${d})` : "", JSON.stringify(y.main)));
    return si(y, "light", P, r), si(y, "dark", E, r), y.contrastText || (y.contrastText = h(y.main)), y;
  }, b = {
    dark: sr,
    light: ii
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Je(w({
    // A collection of common colors.
    common: w({}, tn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: zu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), o);
}
const nf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function rf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ai = {
  textTransform: "uppercase"
}, ci = '"Roboto", "Helvetica", "Arial", sans-serif';
function of(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ci,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h
  } = n, g = xe(n, nf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = h || ((C) => `${C / u * b}rem`), y = (C, P, E, x, p) => w({
    fontFamily: r,
    fontWeight: C,
    fontSize: v(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E
  }, r === ci ? {
    letterSpacing: `${rf(x / P)}em`
  } : {}, p, f), d = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(c, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(c, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(c, 14, 1.75, 0.4, ai),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, ai),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Je(w({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: l
  }, d), g, {
    clone: !1
    // No need to clone deep
  });
}
const sf = 0.2, af = 0.14, cf = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${af})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cf})`].join(",");
}
const lf = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], uf = lf, ff = ["duration", "easing", "delay"], df = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, pf = {
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
function li(e) {
  return `${Math.round(e)}ms`;
}
function mf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function hf(e) {
  const t = w({}, df, e.easing), n = w({}, pf, e.duration);
  return w({
    getAutoHeightDuration: mf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, u = xe(i, ff);
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", h = (g) => !isNaN(parseFloat(g));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : li(s)} ${c} ${typeof l == "string" ? l : li(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const yf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, vf = yf, gf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function bf(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = xe(e, gf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nt(18));
  const c = tf(r), l = Br(e);
  let u = Je(l, {
    mixins: Fu(l.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: uf.slice(),
    typography: of(c, i),
    transitions: hf(o),
    zIndex: w({}, vf)
  });
  if (u = Je(u, s), u = t.reduce((f, h) => Je(f, h), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (g, b) => {
      let v;
      for (v in g) {
        const y = g[v];
        if (f.indexOf(v) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const d = Ke("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${d}' syntax:`, JSON.stringify({
              root: {
                [`&.${d}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((g) => {
      const b = u.components[g].styleOverrides;
      b && g.indexOf("Mui") === 0 && h(b, g);
    });
  }
  return u.unstable_sxConfig = w({}, Vr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(h) {
    return zr({
      sx: h,
      theme: this
    });
  }, u;
}
const Ef = bf(), Yr = Ef, Wr = "$$material", qr = (e) => yn(e) && e !== "classes", xf = Nu({
  themeId: Wr,
  defaultTheme: Yr,
  rootShouldForwardProp: qr
}), je = xf;
function Ze({
  props: e,
  name: t
}) {
  return ku({
    props: e,
    name: t,
    defaultTheme: Yr,
    themeId: Wr
  });
}
const hs = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (hs.displayName = "ListContext");
const Rr = hs;
function Tf(e) {
  return Ke("MuiList", e);
}
Le("MuiList", ["root", "padding", "dense", "subheader"]);
const Rf = ["children", "className", "component", "dense", "disablePadding", "subheader"], Sf = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return nt({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Tf, t);
}, Cf = je("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => w({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), ys = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, f = xe(r, Rf), h = T.useMemo(() => ({
    dense: c
  }), [c]), g = w({}, r, {
    component: s,
    dense: c,
    disablePadding: l
  }), b = Sf(g);
  return /* @__PURE__ */ L.jsx(Rr.Provider, {
    value: h,
    children: /* @__PURE__ */ L.jsxs(Cf, w({
      as: s,
      className: Oe(b.root, i),
      ref: n,
      ownerState: g
    }, f, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: a.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: a.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const _f = ys, Of = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function ar(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ui(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function vs(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function qt(e, t, n, r, o, i) {
  let s = !1, c = o(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !vs(c, i) || l)
      c = o(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const gs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: f,
    variant: h = "selectedMenu"
  } = t, g = xe(t, Of), b = T.useRef(null), v = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kt(() => {
    o && b.current.focus();
  }, [o]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, x) => {
      const p = !b.current.style.width;
      if (E.clientHeight < b.current.clientHeight && p) {
        const N = `${zi(Be(E))}px`;
        b.current.style[x.direction === "rtl" ? "paddingLeft" : "paddingRight"] = N, b.current.style.width = `calc(100% + ${N})`;
      }
      return b.current;
    }
  }), []);
  const y = (E) => {
    const x = b.current, p = E.key, N = Be(x).activeElement;
    if (p === "ArrowDown")
      E.preventDefault(), qt(x, N, u, l, ar);
    else if (p === "ArrowUp")
      E.preventDefault(), qt(x, N, u, l, ui);
    else if (p === "Home")
      E.preventDefault(), qt(x, null, u, l, ar);
    else if (p === "End")
      E.preventDefault(), qt(x, null, u, l, ui);
    else if (p.length === 1) {
      const O = v.current, Q = p.toLowerCase(), ee = performance.now();
      O.keys.length > 0 && (ee - O.lastTime > 500 ? (O.keys = [], O.repeating = !0, O.previousKeyMatched = !0) : O.repeating && Q !== O.keys[0] && (O.repeating = !1)), O.lastTime = ee, O.keys.push(Q);
      const M = N && !O.repeating && vs(N, O);
      O.previousKeyMatched && (M || qt(x, N, !1, l, ar, O)) ? E.preventDefault() : O.previousKeyMatched = !1;
    }
    f && f(E);
  }, d = qe(b, n);
  let C = -1;
  T.Children.forEach(s, (E, x) => {
    if (!/* @__PURE__ */ T.isValidElement(E)) {
      C === x && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && wi.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (h === "selectedMenu" && E.props.selected || C === -1) && (C = x), C === x && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const P = T.Children.map(s, (E, x) => {
    if (x === C) {
      const p = {};
      return i && (p.autoFocus = !0), E.props.tabIndex === void 0 && h === "selectedMenu" && (p.tabIndex = 0), /* @__PURE__ */ T.cloneElement(E, p);
    }
    return E;
  });
  return /* @__PURE__ */ L.jsx(_f, w({
    role: "menu",
    ref: d,
    className: c,
    onKeyDown: y,
    tabIndex: o ? 0 : -1
  }, g, {
    children: P
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: a.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: a.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: a.node,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: a.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: a.bool,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: a.oneOf(["menu", "selectedMenu"])
});
const wf = gs, Pf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function $f(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Nf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Mf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Nf(e));
}
function kf(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Pf)).forEach((r, o) => {
    const i = $f(r);
    i === -1 || !Mf(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function If() {
  return !0;
}
function Cn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = kf,
    isEnabled: s = If,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), f = T.useRef(null), h = T.useRef(null), g = T.useRef(null), b = T.useRef(!1), v = T.useRef(null), y = qe(t.ref, v), d = T.useRef(null);
  T.useEffect(() => {
    !c || !v.current || (b.current = !n);
  }, [n, c]), T.useEffect(() => {
    if (!c || !v.current)
      return;
    const E = Be(v.current);
    return v.current.contains(E.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      o || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !v.current)
      return;
    const E = Be(v.current), x = (O) => {
      d.current = O, !(r || !s() || O.key !== "Tab") && E.activeElement === v.current && O.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, p = () => {
      const O = v.current;
      if (O === null)
        return;
      if (!E.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (O.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== f.current)
        return;
      if (E.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!b.current)
        return;
      let Q = [];
      if ((E.activeElement === u.current || E.activeElement === f.current) && (Q = i(v.current)), Q.length > 0) {
        var ee, M;
        const G = !!((ee = d.current) != null && ee.shiftKey && ((M = d.current) == null ? void 0 : M.key) === "Tab"), U = Q[0], K = Q[Q.length - 1];
        typeof U != "string" && typeof K != "string" && (G ? K.focus() : U.focus());
      } else
        O.focus();
    };
    E.addEventListener("focusin", p), E.addEventListener("keydown", x, !0);
    const N = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && p();
    }, 50);
    return () => {
      clearInterval(N), E.removeEventListener("focusin", p), E.removeEventListener("keydown", x, !0);
    };
  }, [n, r, o, s, c, i]);
  const C = (E) => {
    h.current === null && (h.current = E.relatedTarget), b.current = !0, g.current = E.target;
    const x = t.props.onFocus;
    x && x(E);
  }, P = (E) => {
    h.current === null && (h.current = E.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ L.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ L.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: y,
      onFocus: C
    }), /* @__PURE__ */ L.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Pn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: a.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: a.func,
  /**
   * If `true`, focus is locked.
   */
  open: a.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Cn["propTypes"] = ji(Cn.propTypes));
function Af(e) {
  return typeof e == "function" ? e() : e;
}
const _n = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = T.useState(null), l = qe(/* @__PURE__ */ T.isValidElement(r) ? r.ref : null, n);
  if (kt(() => {
    i || c(Af(o) || document.body);
  }, [o, i]), kt(() => {
    if (s && !i)
      return bn(n, s), () => {
        bn(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ T.cloneElement(r, u);
    }
    return /* @__PURE__ */ L.jsx(T.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ L.jsx(T.Fragment, {
    children: s && /* @__PURE__ */ fa.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: a.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Jt, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (_n["propTypes"] = ji(_n.propTypes));
function jf(e) {
  const t = Be(e);
  return t.body === e ? Mt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Xt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function fi(e) {
  return parseInt(Mt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Df(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function di(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const c = i.indexOf(s) === -1, l = !Df(s);
    c && l && Xt(s, o);
  });
}
function cr(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ff(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (jf(r)) {
      const s = zi(Be(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${fi(r) + s}px`;
      const c = Be(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${fi(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Be(r).body;
    else {
      const s = r.parentElement, c = Mt(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && c.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: c
    }) => {
      i ? s.style.setProperty(c, i) : s.style.removeProperty(c);
    });
  };
}
function Lf(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Vf {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Xt(t.modalRef, !1);
    const o = Lf(n);
    di(n, t.mount, t.modalRef, o, !0);
    const i = cr(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = cr(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Ff(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = cr(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Xt(t.modalRef, n), di(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Xt(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function zf(e) {
  return typeof e == "function" ? e() : e;
}
function Bf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Uf = new Vf();
function Yf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Uf,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: f,
    rootRef: h
  } = e, g = T.useRef({}), b = T.useRef(null), v = T.useRef(null), y = qe(v, h), [d, C] = T.useState(!f), P = Bf(l);
  let E = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (E = !1);
  const x = () => Be(b.current), p = () => (g.current.modalRef = v.current, g.current.mount = b.current, g.current), N = () => {
    o.mount(p(), {
      disableScrollLock: r
    }), v.current && (v.current.scrollTop = 0);
  }, O = yt(() => {
    const A = zf(t) || x().body;
    o.add(p(), A), v.current && N();
  }), Q = T.useCallback(() => o.isTopModal(p()), [o]), ee = yt((A) => {
    b.current = A, A && (f && Q() ? N() : v.current && Xt(v.current, E));
  }), M = T.useCallback(() => {
    o.remove(p(), E);
  }, [E, o]);
  T.useEffect(() => () => {
    M();
  }, [M]), T.useEffect(() => {
    f ? O() : (!P || !i) && M();
  }, [f, M, P, i, O]);
  const G = (A) => (B) => {
    var te;
    (te = A.onKeyDown) == null || te.call(A, B), !(B.key !== "Escape" || !Q()) && (n || (B.stopPropagation(), u && u(B, "escapeKeyDown")));
  }, U = (A) => (B) => {
    var te;
    (te = A.onClick) == null || te.call(A, B), B.target === B.currentTarget && u && u(B, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const B = Hi(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const te = w({}, B, A);
      return w({
        role: "presentation"
      }, te, {
        onKeyDown: G(te),
        ref: y
      });
    },
    getBackdropProps: (A = {}) => {
      const B = A;
      return w({
        "aria-hidden": !0
      }, B, {
        onClick: U(B),
        open: f
      });
    },
    getTransitionProps: () => {
      const A = () => {
        C(!1), s && s();
      }, B = () => {
        C(!0), c && c(), i && M();
      };
      return {
        onEnter: yr(A, l == null ? void 0 : l.props.onEnter),
        onExited: yr(B, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: ee,
    isTopModal: Q,
    exited: d,
    hasTransition: P
  };
}
function Sr(e, t) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Sr(e, t);
}
function bs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sr(e, t);
}
const pi = {
  disabled: !1
};
var Wf = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const On = ze.createContext(null);
var qf = function(t) {
  return t.scrollTop;
}, Ht = "unmounted", mt = "exited", ht = "entering", wt = "entered", Cr = "exiting", st = /* @__PURE__ */ function(e) {
  bs(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, c = s && !s.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? c ? (l = mt, i.appearStatus = ht) : l = wt : r.unmountOnExit || r.mountOnEnter ? l = Ht : l = mt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Ht ? {
      status: mt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ht && s !== wt && (i = ht) : (s === ht || s === wt) && (i = Cr);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, c;
    return i = s = c = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, c = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: c
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : cn.findDOMNode(this);
          s && qf(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === mt && this.setState({
        status: Ht
      });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [cn.findDOMNode(this), c], u = l[0], f = l[1], h = this.getTimeouts(), g = c ? h.appear : h.enter;
    if (!o && !s || pi.disabled) {
      this.safeSetState({
        status: wt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: ht
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: wt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : cn.findDOMNode(this);
    if (!i || pi.disabled) {
      this.safeSetState({
        status: mt
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Cr
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: mt
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : cn.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Ht)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = xe(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ze.createElement(On.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : ze.cloneElement(ze.Children.only(s), c))
    );
  }, t;
}(ze.Component);
st.contextType = On;
st.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Wf;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function Ot() {
}
st.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ot,
  onEntering: Ot,
  onEntered: Ot,
  onExit: Ot,
  onExiting: Ot,
  onExited: Ot
};
st.UNMOUNTED = Ht;
st.EXITED = mt;
st.ENTERING = ht;
st.ENTERED = wt;
st.EXITING = Cr;
const Es = st;
function Kf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kr(e, t) {
  var n = function(i) {
    return t && fn(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && ta.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Hf(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        c[r[l][s]] = n(u);
      }
    c[l] = n(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = n(o[s]);
  return c;
}
function vt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Gf(e, t) {
  return Kr(e.children, function(n) {
    return dn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: vt(n, "appear", e),
      enter: vt(n, "enter", e),
      exit: vt(n, "exit", e)
    });
  });
}
function Xf(e, t, n) {
  var r = Kr(e.children), o = Hf(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (fn(s)) {
      var c = i in t, l = i in r, u = t[i], f = fn(u) && !u.props.in;
      l && (!c || f) ? o[i] = dn(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: vt(s, "exit", e),
        enter: vt(s, "enter", e)
      }) : !l && c && !f ? o[i] = dn(s, {
        in: !1
      }) : l && c && fn(u) && (o[i] = dn(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: vt(s, "exit", e),
        enter: vt(s, "enter", e)
      }));
    }
  }), o;
}
var Jf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Zf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Hr = /* @__PURE__ */ function(e) {
  bs(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(Kf(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Gf(o, c) : Xf(o, s, c),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Kr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = w({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = xe(o, ["component", "childFactory"]), l = this.state.contextValue, u = Jf(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ze.createElement(On.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ze.createElement(On.Provider, {
      value: l
    }, /* @__PURE__ */ ze.createElement(i, c, u));
  }, t;
}(ze.Component);
Hr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: a.func
} : {};
Hr.defaultProps = Zf;
const Qf = Hr;
function qn() {
  const e = ps(Yr);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Wr] || e;
}
const xs = (e) => e.scrollTop;
function wn(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
const ed = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function _r(e) {
  return `scale(${e}, ${e ** 2})`;
}
const td = {
  entering: {
    opacity: 1,
    transform: _r(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, lr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Gr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: f,
    onExit: h,
    onExited: g,
    onExiting: b,
    style: v,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: d = Es
  } = t, C = xe(t, ed), P = T.useRef(), E = T.useRef(), x = qn(), p = T.useRef(null), N = qe(p, i.ref, n), O = (D) => (A) => {
    if (D) {
      const B = p.current;
      A === void 0 ? D(B) : D(B, A);
    }
  }, Q = O(f), ee = O((D, A) => {
    xs(D);
    const {
      duration: B,
      delay: te,
      easing: re
    } = wn({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let _;
    y === "auto" ? (_ = x.transitions.getAutoHeightDuration(D.clientHeight), E.current = _) : _ = B, D.style.transition = [x.transitions.create("opacity", {
      duration: _,
      delay: te
    }), x.transitions.create("transform", {
      duration: lr ? _ : _ * 0.666,
      delay: te,
      easing: re
    })].join(","), l && l(D, A);
  }), M = O(u), G = O(b), U = O((D) => {
    const {
      duration: A,
      delay: B,
      easing: te
    } = wn({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let re;
    y === "auto" ? (re = x.transitions.getAutoHeightDuration(D.clientHeight), E.current = re) : re = A, D.style.transition = [x.transitions.create("opacity", {
      duration: re,
      delay: B
    }), x.transitions.create("transform", {
      duration: lr ? re : re * 0.666,
      delay: lr ? B : B || re * 0.333,
      easing: te
    })].join(","), D.style.opacity = 0, D.style.transform = _r(0.75), h && h(D);
  }), K = O(g), j = (D) => {
    y === "auto" && (P.current = setTimeout(D, E.current || 0)), r && r(p.current, D);
  };
  return T.useEffect(() => () => {
    clearTimeout(P.current);
  }, []), /* @__PURE__ */ L.jsx(d, w({
    appear: o,
    in: c,
    nodeRef: p,
    onEnter: ee,
    onEntered: M,
    onEntering: Q,
    onExit: U,
    onExited: K,
    onExiting: G,
    addEndListener: j,
    timeout: y === "auto" ? null : y
  }, C, {
    children: (D, A) => /* @__PURE__ */ T.cloneElement(i, w({
      style: w({
        opacity: 0,
        transform: _r(0.75),
        visibility: D === "exited" && !c ? "hidden" : void 0
      }, td[D], v, i.props.style),
      ref: N
    }, A))
  }));
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Pn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
Gr.muiSupportAuto = !0;
const nd = Gr, rd = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], od = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ts = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = qn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: f,
    onEntered: h,
    onEntering: g,
    onExit: b,
    onExited: v,
    onExiting: y,
    style: d,
    timeout: C = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = Es
  } = t, E = xe(t, rd), x = T.useRef(null), p = qe(x, c.ref, n), N = (j) => (D) => {
    if (j) {
      const A = x.current;
      D === void 0 ? j(A) : j(A, D);
    }
  }, O = N(g), Q = N((j, D) => {
    xs(j);
    const A = wn({
      style: d,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = r.transitions.create("opacity", A), j.style.transition = r.transitions.create("opacity", A), f && f(j, D);
  }), ee = N(h), M = N(y), G = N((j) => {
    const D = wn({
      style: d,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = r.transitions.create("opacity", D), j.style.transition = r.transitions.create("opacity", D), b && b(j);
  }), U = N(v), K = (j) => {
    i && i(x.current, j);
  };
  return /* @__PURE__ */ L.jsx(P, w({
    appear: s,
    in: u,
    nodeRef: x,
    onEnter: Q,
    onEntered: ee,
    onEntering: O,
    onExit: G,
    onExited: U,
    onExiting: M,
    addEndListener: K,
    timeout: C
  }, E, {
    children: (j, D) => /* @__PURE__ */ T.cloneElement(c, w({
      style: w({
        opacity: 0,
        visibility: j === "exited" && !u ? "hidden" : void 0
      }, od[j], d, c.props.style),
      ref: p
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Pn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const id = Ts;
function sd(e) {
  return Ke("MuiBackdrop", e);
}
Le("MuiBackdrop", ["root", "invisible"]);
const ad = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], cd = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return nt({
    root: ["root", n && "invisible"]
  }, sd, t);
}, ld = je("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => w({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Rs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, i;
  const s = Ze({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: f = {},
    componentsProps: h = {},
    invisible: g = !1,
    open: b,
    slotProps: v = {},
    slots: y = {},
    TransitionComponent: d = id,
    transitionDuration: C
  } = s, P = xe(s, ad), E = w({}, s, {
    component: u,
    invisible: g
  }), x = cd(E), p = (r = v.root) != null ? r : h.root;
  return /* @__PURE__ */ L.jsx(d, w({
    in: b,
    timeout: C
  }, P, {
    children: /* @__PURE__ */ L.jsx(ld, w({
      "aria-hidden": !0
    }, p, {
      as: (o = (i = y.root) != null ? i : f.Root) != null ? o : u,
      className: Oe(x.root, l, p == null ? void 0 : p.className),
      ownerState: w({}, E, p == null ? void 0 : p.ownerState),
      classes: x,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: a.bool,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: a.shape({
    root: a.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const ud = Rs;
function fd(e) {
  return Ke("MuiModal", e);
}
Le("MuiModal", ["root", "hidden", "backdrop"]);
const dd = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], pd = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return nt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, fd, r);
}, md = je("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), hd = je(ud, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ss = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, i, s, c, l;
  const u = Ze({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = hd,
    BackdropProps: h,
    className: g,
    closeAfterTransition: b = !1,
    children: v,
    container: y,
    component: d,
    components: C = {},
    componentsProps: P = {},
    disableAutoFocus: E = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: p = !1,
    disablePortal: N = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: Q = !1,
    hideBackdrop: ee = !1,
    keepMounted: M = !1,
    onBackdropClick: G,
    open: U,
    slotProps: K,
    slots: j
    // eslint-disable-next-line react/prop-types
  } = u, D = xe(u, dd), A = w({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: E,
    disableEnforceFocus: x,
    disableEscapeKeyDown: p,
    disablePortal: N,
    disableRestoreFocus: O,
    disableScrollLock: Q,
    hideBackdrop: ee,
    keepMounted: M
  }), {
    getRootProps: B,
    getBackdropProps: te,
    getTransitionProps: re,
    portalRef: _,
    isTopModal: k,
    exited: V,
    hasTransition: X
  } = Yf(w({}, A, {
    rootRef: n
  })), F = w({}, A, {
    exited: V
  }), Y = pd(F), z = {};
  if (v.props.tabIndex === void 0 && (z.tabIndex = "-1"), X) {
    const {
      onEnter: Z,
      onExited: R
    } = re();
    z.onEnter = Z, z.onExited = R;
  }
  const W = (r = (o = j == null ? void 0 : j.root) != null ? o : C.Root) != null ? r : md, H = (i = (s = j == null ? void 0 : j.backdrop) != null ? s : C.Backdrop) != null ? i : f, q = (c = K == null ? void 0 : K.root) != null ? c : P.root, J = (l = K == null ? void 0 : K.backdrop) != null ? l : P.backdrop, Ee = It({
    elementType: W,
    externalSlotProps: q,
    externalForwardedProps: D,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: d
    },
    ownerState: F,
    className: Oe(g, q == null ? void 0 : q.className, Y == null ? void 0 : Y.root, !F.open && F.exited && (Y == null ? void 0 : Y.hidden))
  }), S = It({
    elementType: H,
    externalSlotProps: J,
    additionalProps: h,
    getSlotProps: (Z) => te(w({}, Z, {
      onClick: (R) => {
        G && G(R), Z != null && Z.onClick && Z.onClick(R);
      }
    })),
    className: Oe(J == null ? void 0 : J.className, h == null ? void 0 : h.className, Y == null ? void 0 : Y.backdrop),
    ownerState: F
  });
  return !M && !U && (!X || V) ? null : /* @__PURE__ */ L.jsx(_n, {
    ref: _,
    container: y,
    disablePortal: N,
    children: /* @__PURE__ */ L.jsxs(W, w({}, Ee, {
      children: [!ee && f ? /* @__PURE__ */ L.jsx(H, w({}, S)) : null, /* @__PURE__ */ L.jsx(Cn, {
        disableEnforceFocus: x,
        disableAutoFocus: E,
        disableRestoreFocus: O,
        isEnabled: k,
        open: U,
        children: /* @__PURE__ */ T.cloneElement(v, z)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * A single child content element.
   */
  children: Pn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: a.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Backdrop: a.elementType,
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Jt, a.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: a.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: a.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const yd = Ss, vd = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, mi = vd;
function gd(e) {
  return Ke("MuiPaper", e);
}
Le("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const bd = ["className", "component", "elevation", "square", "variant"], Ed = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return nt(i, gd, o);
}, xd = je("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return w({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && w({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${dt("#fff", mi(t.elevation))}, ${dt("#fff", mi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Cs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = xe(r, bd), f = w({}, r, {
    component: i,
    elevation: s,
    square: c,
    variant: l
  }), h = Ed(f);
  return process.env.NODE_ENV !== "production" && qn().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ L.jsx(xd, w({
    as: i,
    ownerState: f,
    className: Oe(h.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Dt(Yi, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: a.oneOfType([a.oneOf(["elevation", "outlined"]), a.string])
});
const Td = Cs;
function Rd(e) {
  return Ke("MuiPopover", e);
}
Le("MuiPopover", ["root", "paper"]);
const Sd = ["onEntering"], Cd = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _d = ["slotProps"];
function hi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function yi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function gi(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function gn(e) {
  return typeof e == "function" ? e() : e;
}
const Od = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"],
    paper: ["paper"]
  }, Rd, t);
}, wd = je(yd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _s = je(Td, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Os = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, i;
  const s = Ze({
    props: t,
    name: "MuiPopover"
  }), {
    action: c,
    anchorEl: l,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: f,
    anchorReference: h = "anchorEl",
    children: g,
    className: b,
    container: v,
    elevation: y = 8,
    marginThreshold: d = 16,
    open: C,
    PaperProps: P = {},
    slots: E,
    slotProps: x,
    transformOrigin: p = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: N = nd,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: Q
    } = {},
    disableScrollLock: ee = !1
  } = s, M = xe(s.TransitionProps, Sd), G = xe(s, Cd), U = (r = x == null ? void 0 : x.paper) != null ? r : P, K = T.useRef(), j = qe(K, U.ref), D = w({}, s, {
    anchorOrigin: u,
    anchorReference: h,
    elevation: y,
    marginThreshold: d,
    externalPaperSlotProps: U,
    transformOrigin: p,
    TransitionComponent: N,
    transitionDuration: O,
    TransitionProps: M
  }), A = Od(D), B = T.useCallback(() => {
    if (h === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (f || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), f;
    const Z = gn(l), R = Z && Z.nodeType === 1 ? Z : Be(K.current).body, se = R.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Re = R.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Re.top === 0 && Re.left === 0 && Re.right === 0 && Re.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: se.top + hi(se, u.vertical),
      left: se.left + yi(se, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, f, h]), te = T.useCallback((Z) => ({
    vertical: hi(Z, p.vertical),
    horizontal: yi(Z, p.horizontal)
  }), [p.horizontal, p.vertical]), re = T.useCallback((Z) => {
    const R = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, se = te(R);
    if (h === "none")
      return {
        top: null,
        left: null,
        transformOrigin: gi(se)
      };
    const Re = B();
    let Me = Re.top - se.vertical, He = Re.left - se.horizontal;
    const rt = Me + R.height, at = He + R.width, ct = Mt(gn(l)), Ge = ct.innerHeight - d, bt = ct.innerWidth - d;
    if (d !== null && Me < d) {
      const Ne = Me - d;
      Me -= Ne, se.vertical += Ne;
    } else if (d !== null && rt > Ge) {
      const Ne = rt - Ge;
      Me -= Ne, se.vertical += Ne;
    }
    if (process.env.NODE_ENV !== "production" && R.height > Ge && R.height && Ge && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${R.height - Ge}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), d !== null && He < d) {
      const Ne = He - d;
      He -= Ne, se.horizontal += Ne;
    } else if (at > bt) {
      const Ne = at - bt;
      He -= Ne, se.horizontal += Ne;
    }
    return {
      top: `${Math.round(Me)}px`,
      left: `${Math.round(He)}px`,
      transformOrigin: gi(se)
    };
  }, [l, h, B, te, d]), [_, k] = T.useState(C), V = T.useCallback(() => {
    const Z = K.current;
    if (!Z)
      return;
    const R = re(Z);
    R.top !== null && (Z.style.top = R.top), R.left !== null && (Z.style.left = R.left), Z.style.transformOrigin = R.transformOrigin, k(!0);
  }, [re]);
  T.useEffect(() => (ee && window.addEventListener("scroll", V), () => window.removeEventListener("scroll", V)), [l, ee, V]);
  const X = (Z, R) => {
    Q && Q(Z, R), V();
  }, F = () => {
    k(!1);
  };
  T.useEffect(() => {
    C && V();
  }), T.useImperativeHandle(c, () => C ? {
    updatePosition: () => {
      V();
    }
  } : null, [C, V]), T.useEffect(() => {
    if (!C)
      return;
    const Z = Li(() => {
      V();
    }), R = Mt(l);
    return R.addEventListener("resize", Z), () => {
      Z.clear(), R.removeEventListener("resize", Z);
    };
  }, [l, C, V]);
  let Y = O;
  O === "auto" && !N.muiSupportAuto && (Y = void 0);
  const z = v || (l ? Be(gn(l)).body : void 0), W = (o = E == null ? void 0 : E.root) != null ? o : wd, H = (i = E == null ? void 0 : E.paper) != null ? i : _s, q = It({
    elementType: H,
    externalSlotProps: w({}, U, {
      style: _ ? U.style : w({}, U.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: y,
      ref: j
    },
    ownerState: D,
    className: Oe(A.paper, U == null ? void 0 : U.className)
  }), J = It({
    elementType: W,
    externalSlotProps: (x == null ? void 0 : x.root) || {},
    externalForwardedProps: G,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: z,
      open: C
    },
    ownerState: D,
    className: Oe(A.root, b)
  }), {
    slotProps: Ee
  } = J, S = xe(J, _d);
  return /* @__PURE__ */ L.jsx(W, w({}, S, !Ki(W) && {
    slotProps: Ee,
    disableScrollLock: ee
  }, {
    children: /* @__PURE__ */ L.jsx(N, w({
      appear: !0,
      in: C,
      onEntering: X,
      onExited: F,
      timeout: Y
    }, M, {
      children: /* @__PURE__ */ L.jsx(H, w({}, q, {
        children: g
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Fi,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Dt(a.oneOfType([Jt, a.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = gn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: a.shape({
    horizontal: a.oneOfType([a.oneOf(["center", "left", "right"]), a.number]).isRequired,
    vertical: a.oneOfType([a.oneOf(["bottom", "center", "top"]), a.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: a.shape({
    left: a.number.isRequired,
    top: a.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: a.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Jt, a.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Yi,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: a.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: a.shape({
    component: Ai
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: a.shape({
    paper: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: a.shape({
    paper: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: a.shape({
    horizontal: a.oneOfType([a.oneOf(["center", "left", "right"]), a.number]).isRequired,
    vertical: a.oneOfType([a.oneOf(["bottom", "center", "top"]), a.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: a.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: a.object
});
const Pd = Os;
function $d(e) {
  return Ke("MuiMenu", e);
}
Le("MuiMenu", ["root", "paper", "list"]);
const Nd = ["onEntering"], Md = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], kd = {
  vertical: "top",
  horizontal: "right"
}, Id = {
  vertical: "top",
  horizontal: "left"
}, Ad = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, $d, t);
}, jd = je(Pd, {
  shouldForwardProp: (e) => qr(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Dd = je(_s, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Fd = je(wf, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ws = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o;
  const i = Ze({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: c,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: f = {},
    onClose: h,
    open: g,
    PaperProps: b = {},
    PopoverClasses: v,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: d
    } = {},
    variant: C = "selectedMenu",
    slots: P = {},
    slotProps: E = {}
  } = i, x = xe(i.TransitionProps, Nd), p = xe(i, Md), N = qn(), O = N.direction === "rtl", Q = w({}, i, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: f,
    onEntering: d,
    PaperProps: b,
    transitionDuration: y,
    TransitionProps: x,
    variant: C
  }), ee = Ad(Q), M = s && !u && g, G = T.useRef(null), U = (re, _) => {
    G.current && G.current.adjustStyleForScrollbar(re, N), d && d(re, _);
  }, K = (re) => {
    re.key === "Tab" && (re.preventDefault(), h && h(re, "tabKeyDown"));
  };
  let j = -1;
  T.Children.map(c, (re, _) => {
    /* @__PURE__ */ T.isValidElement(re) && (process.env.NODE_ENV !== "production" && wi.isFragment(re) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), re.props.disabled || (C === "selectedMenu" && re.props.selected || j === -1) && (j = _));
  });
  const D = (r = P.paper) != null ? r : Dd, A = (o = E.paper) != null ? o : b, B = It({
    elementType: P.root,
    externalSlotProps: E.root,
    ownerState: Q,
    className: [ee.root, l]
  }), te = It({
    elementType: D,
    externalSlotProps: A,
    ownerState: Q,
    className: ee.paper
  });
  return /* @__PURE__ */ L.jsx(jd, w({
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? kd : Id,
    slots: {
      paper: D,
      root: P.root
    },
    slotProps: {
      root: B,
      paper: te
    },
    open: g,
    ref: n,
    transitionDuration: y,
    TransitionProps: w({
      onEntering: U
    }, x),
    ownerState: Q
  }, p, {
    classes: v,
    children: /* @__PURE__ */ L.jsx(Fd, w({
      onKeyDown: K,
      actions: G,
      autoFocus: s && (j === -1 || u),
      autoFocusItem: M,
      variant: C
    }, f, {
      className: Oe(ee.list, f.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: a.oneOfType([Jt, a.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: a.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: a.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: a.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: a.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: a.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: a.shape({
    paper: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: a.shape({
    paper: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: a.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: a.oneOf(["menu", "selectedMenu"])
});
const Ld = ws;
function Ps(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: u
  } = e, [f, h] = T.useState(!1), g = Oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = Oe(n.child, f && n.childLeaving, r && n.childPulsate);
  return !c && !f && h(!0), T.useEffect(() => {
    if (!c && l != null) {
      const y = setTimeout(l, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ L.jsx("span", {
    className: g,
    style: b,
    children: /* @__PURE__ */ L.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const Vd = Le("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), We = Vd, zd = ["center", "classes", "className"];
let Kn = (e) => e, bi, Ei, xi, Ti;
const Or = 550, Bd = 80, Ud = Dr(bi || (bi = Kn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Yd = Dr(Ei || (Ei = Kn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Wd = Dr(xi || (xi = Kn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), qd = je("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Kd = je(Ps, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ti || (Ti = Kn`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), We.rippleVisible, Ud, Or, ({
  theme: e
}) => e.transitions.easing.easeInOut, We.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, We.child, We.childLeaving, Yd, Or, ({
  theme: e
}) => e.transitions.easing.easeInOut, We.childPulsate, Wd, ({
  theme: e
}) => e.transitions.easing.easeInOut), $s = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = r, c = xe(r, zd), [l, u] = T.useState([]), f = T.useRef(0), h = T.useRef(null);
  T.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const g = T.useRef(!1), b = T.useRef(0), v = T.useRef(null), y = T.useRef(null);
  T.useEffect(() => () => {
    b.current && clearTimeout(b.current);
  }, []);
  const d = T.useCallback((x) => {
    const {
      pulsate: p,
      rippleX: N,
      rippleY: O,
      rippleSize: Q,
      cb: ee
    } = x;
    u((M) => [...M, /* @__PURE__ */ L.jsx(Kd, {
      classes: {
        ripple: Oe(i.ripple, We.ripple),
        rippleVisible: Oe(i.rippleVisible, We.rippleVisible),
        ripplePulsate: Oe(i.ripplePulsate, We.ripplePulsate),
        child: Oe(i.child, We.child),
        childLeaving: Oe(i.childLeaving, We.childLeaving),
        childPulsate: Oe(i.childPulsate, We.childPulsate)
      },
      timeout: Or,
      pulsate: p,
      rippleX: N,
      rippleY: O,
      rippleSize: Q
    }, f.current)]), f.current += 1, h.current = ee;
  }, [i]), C = T.useCallback((x = {}, p = {}, N = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: Q = o || p.pulsate,
      fakeElement: ee = !1
      // For test purposes
    } = p;
    if ((x == null ? void 0 : x.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (g.current = !0);
    const M = ee ? null : y.current, G = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let U, K, j;
    if (Q || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      U = Math.round(G.width / 2), K = Math.round(G.height / 2);
    else {
      const {
        clientX: D,
        clientY: A
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      U = Math.round(D - G.left), K = Math.round(A - G.top);
    }
    if (Q)
      j = Math.sqrt((2 * G.width ** 2 + G.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const D = Math.max(Math.abs((M ? M.clientWidth : 0) - U), U) * 2 + 2, A = Math.max(Math.abs((M ? M.clientHeight : 0) - K), K) * 2 + 2;
      j = Math.sqrt(D ** 2 + A ** 2);
    }
    x != null && x.touches ? v.current === null && (v.current = () => {
      d({
        pulsate: O,
        rippleX: U,
        rippleY: K,
        rippleSize: j,
        cb: N
      });
    }, b.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, Bd)) : d({
      pulsate: O,
      rippleX: U,
      rippleY: K,
      rippleSize: j,
      cb: N
    });
  }, [o, d]), P = T.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), E = T.useCallback((x, p) => {
    if (clearTimeout(b.current), (x == null ? void 0 : x.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.current = setTimeout(() => {
        E(x, p);
      });
      return;
    }
    v.current = null, u((N) => N.length > 0 ? N.slice(1) : N), h.current = p;
  }, []);
  return T.useImperativeHandle(n, () => ({
    pulsate: P,
    start: C,
    stop: E
  }), [P, C, E]), /* @__PURE__ */ L.jsx(qd, w({
    className: Oe(We.root, i.root, s),
    ref: y
  }, c, {
    children: /* @__PURE__ */ L.jsx(Qf, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
const Hd = $s;
function Gd(e) {
  return Ke("MuiButtonBase", e);
}
const Xd = Le("MuiButtonBase", ["root", "disabled", "focusVisible"]), Jd = Xd, Zd = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Qd = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = nt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Gd, o);
  return n && r && (s.root += ` ${r}`), s;
}, ep = je("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Jd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ns = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    LinkComponent: b = "a",
    onBlur: v,
    onClick: y,
    onContextMenu: d,
    onDragLeave: C,
    onFocus: P,
    onFocusVisible: E,
    onKeyDown: x,
    onKeyUp: p,
    onMouseDown: N,
    onMouseLeave: O,
    onMouseUp: Q,
    onTouchEnd: ee,
    onTouchMove: M,
    onTouchStart: G,
    tabIndex: U = 0,
    TouchRippleProps: K,
    touchRippleRef: j,
    type: D
  } = r, A = xe(r, Zd), B = T.useRef(null), te = T.useRef(null), re = qe(te, j), {
    isFocusVisibleRef: _,
    onFocus: k,
    onBlur: V,
    ref: X
  } = Vi(), [F, Y] = T.useState(!1);
  u && F && Y(!1), T.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Y(!0), B.current.focus();
    }
  }), []);
  const [z, W] = T.useState(!1);
  T.useEffect(() => {
    W(!0);
  }, []);
  const H = z && !f && !u;
  T.useEffect(() => {
    F && g && !f && z && te.current.pulsate();
  }, [f, g, F, z]);
  function q(oe, Vt, zt = h) {
    return yt((an) => (Vt && Vt(an), !zt && te.current && te.current[oe](an), !0));
  }
  const J = q("start", N), Ee = q("stop", d), S = q("stop", C), Z = q("stop", Q), R = q("stop", (oe) => {
    F && oe.preventDefault(), O && O(oe);
  }), se = q("start", G), Re = q("stop", ee), Me = q("stop", M), He = q("stop", (oe) => {
    V(oe), _.current === !1 && Y(!1), v && v(oe);
  }, !1), rt = yt((oe) => {
    B.current || (B.current = oe.currentTarget), k(oe), _.current === !0 && (Y(!0), E && E(oe)), P && P(oe);
  }), at = () => {
    const oe = B.current;
    return l && l !== "button" && !(oe.tagName === "A" && oe.href);
  }, ct = T.useRef(!1), Ge = yt((oe) => {
    g && !ct.current && F && te.current && oe.key === " " && (ct.current = !0, te.current.stop(oe, () => {
      te.current.start(oe);
    })), oe.target === oe.currentTarget && at() && oe.key === " " && oe.preventDefault(), x && x(oe), oe.target === oe.currentTarget && at() && oe.key === "Enter" && !u && (oe.preventDefault(), y && y(oe));
  }), bt = yt((oe) => {
    g && oe.key === " " && te.current && F && !oe.defaultPrevented && (ct.current = !1, te.current.stop(oe, () => {
      te.current.pulsate(oe);
    })), p && p(oe), y && oe.target === oe.currentTarget && at() && oe.key === " " && !oe.defaultPrevented && y(oe);
  });
  let Ne = l;
  Ne === "button" && (A.href || A.to) && (Ne = b);
  const lt = {};
  Ne === "button" ? (lt.type = D === void 0 ? "button" : D, lt.disabled = u) : (!A.href && !A.to && (lt.role = "button"), u && (lt["aria-disabled"] = u));
  const sn = qe(n, X, B);
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    H && !te.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [H]);
  const ut = w({}, r, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: U,
    focusVisible: F
  }), Hn = Qd(ut);
  return /* @__PURE__ */ L.jsxs(ep, w({
    as: Ne,
    className: Oe(Hn.root, c),
    ownerState: ut,
    onBlur: He,
    onClick: y,
    onContextMenu: Ee,
    onFocus: rt,
    onKeyDown: Ge,
    onKeyUp: bt,
    onMouseDown: J,
    onMouseLeave: R,
    onMouseUp: Z,
    onDragLeave: S,
    onTouchEnd: Re,
    onTouchMove: Me,
    onTouchStart: se,
    ref: sn,
    tabIndex: u ? -1 : U,
    type: D
  }, lt, A, {
    children: [s, H ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ L.jsx(Hd, w({
        ref: re,
        center: i
      }, K))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Fi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ai,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
const Ms = Ns, tp = Le("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Ri = tp, np = Le("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Si = np, rp = Le("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ci = rp;
function op(e) {
  return Ke("MuiMenuItem", e);
}
const ip = Le("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Kt = ip, sp = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ap = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, cp = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, l = nt({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, op, s);
  return w({}, s, l);
}, lp = je(Ms, {
  shouldForwardProp: (e) => qr(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ap
})(({
  theme: e,
  ownerState: t
}) => w({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Kt.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : dt(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Kt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : dt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Kt.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : dt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : dt(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Kt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Kt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Ri.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Ri.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ci.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ci.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Si.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && w({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Si.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), ks = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: f = "menuitem",
    tabIndex: h,
    className: g
  } = r, b = xe(r, sp), v = T.useContext(Rr), y = T.useMemo(() => ({
    dense: s || v.dense || !1,
    disableGutters: l
  }), [v.dense, s, l]), d = T.useRef(null);
  kt(() => {
    o && (d.current ? d.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const C = w({}, r, {
    dense: y.dense,
    divider: c,
    disableGutters: l
  }), P = cp(r), E = qe(d, n);
  let x;
  return r.disabled || (x = h !== void 0 ? h : -1), /* @__PURE__ */ L.jsx(Rr.Provider, {
    value: y,
    children: /* @__PURE__ */ L.jsx(lp, w({
      ref: E,
      role: f,
      tabIndex: x,
      component: i,
      focusVisibleClassName: Oe(P.focusVisible, u),
      className: Oe(P.root, g)
    }, b, {
      ownerState: C,
      classes: P
    }))
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: a.bool,
  /**
   * @ignore
   */
  disabled: a.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  role: a.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number
});
const up = ks;
function fp(e) {
  return Ke("MuiIconButton", e);
}
const dp = Le("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), pp = dp, mp = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], hp = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${Ie(r)}`, o && `edge${Ie(o)}`, `size${Ie(i)}`]
  };
  return nt(s, fp, t);
}, yp = je(Ms, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${Ie(n.color)}`], n.edge && t[`edge${Ie(n.edge)}`], t[`size${Ie(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return w({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && w({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": w({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${pp.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Is = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = r, h = xe(r, mp), g = w({}, r, {
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: f
  }), b = hp(g);
  return /* @__PURE__ */ L.jsx(yp, w({
    className: Oe(b.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ownerState: g
  }, h, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Dt(a.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: a.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const vp = Is;
var Xr = {}, As = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(As);
var js = As.exports, ur = {};
function gp(e) {
  return Ke("MuiSvgIcon", e);
}
Le("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Ep = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ie(t)}`, `fontSize${Ie(n)}`]
  };
  return nt(o, gp, r);
}, xp = je("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Ie(n.color)}`], t[`fontSize${Ie(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, s, c, l, u, f, h, g, b, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (g = (e.vars || e).palette) == null || (g = g[t.color]) == null ? void 0 : g.main) != null ? h : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Jr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: h,
    viewBox: g = "0 0 24 24"
  } = r, b = xe(r, bp), v = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", y = w({}, r, {
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: g,
    hasSvgAsChild: v
  }), d = {};
  f || (d.viewBox = g);
  const C = Ep(y);
  return /* @__PURE__ */ L.jsxs(xp, w({
    as: c,
    className: Oe(C.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n
  }, d, b, v && o.props, {
    ownerState: y,
    children: [v ? o.props.children : o, h ? /* @__PURE__ */ L.jsx("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: a.oneOfType([a.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: a.oneOfType([a.oneOf(["inherit", "large", "medium", "small"]), a.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: a.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: a.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: a.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: a.string
});
Jr.muiName = "SvgIcon";
const _i = Jr;
function Tp(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ L.jsx(_i, w({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = _i.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const Rp = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), qi.configure(e);
  }
}, Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Ie,
  createChainedFunction: yr,
  createSvgIcon: Tp,
  debounce: Li,
  deprecatedPropType: Da,
  isMuiElement: Fa,
  ownerDocument: Be,
  ownerWindow: Mt,
  requirePropFactory: La,
  setRef: bn,
  unstable_ClassNameGenerator: Rp,
  unstable_useEnhancedEffect: kt,
  unstable_useId: Ba,
  unsupportedProp: Ua,
  useControlled: Ya,
  useEventCallback: yt,
  useForkRef: qe,
  useIsFocusVisible: Vi
}, Symbol.toStringTag, { value: "Module" })), Cp = /* @__PURE__ */ pa(Sp);
var Oi;
function Ds() {
  return Oi || (Oi = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Cp;
  }(ur)), ur;
}
var _p = js;
Object.defineProperty(Xr, "__esModule", {
  value: !0
});
var Fs = Xr.default = void 0, Op = _p(Ds()), wp = L, Pp = (0, Op.default)(/* @__PURE__ */ (0, wp.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
Fs = Xr.default = Pp;
var Zr = {}, $p = js;
Object.defineProperty(Zr, "__esModule", {
  value: !0
});
var Ls = Zr.default = void 0, Np = $p(Ds()), Mp = L, kp = (0, Np.default)(/* @__PURE__ */ (0, Mp.jsx)("path", {
  d: "M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ExpandCircleDownOutlined");
Ls = Zr.default = kp;
const fr = window.Liferay, Ip = window.location, Lp = () => {
  const [e, t] = na([]), [n, r] = ze.useState({}), [o, i] = ze.useState(null), s = !!o, c = () => /* @__PURE__ */ L.jsx(L.Fragment, { children: /* @__PURE__ */ L.jsxs(aa, { sx: { marginBottom: "25px" }, children: [
    /* @__PURE__ */ L.jsx(ca, {}),
    /* @__PURE__ */ L.jsx(la, {}),
    /* @__PURE__ */ L.jsx(ua, {})
  ] }) });
  ra(() => {
    fr.fire("HeaderChange", "dashboard");
  }, []);
  const l = (v) => {
    fr.fire("NewClientFireEvent", "");
  }, u = (v) => {
    i(null);
  };
  function f(v, y) {
    let d = "";
    try {
      switch (v[y]) {
        case 2:
          break;
        case 1:
          break;
      }
    } catch {
    }
    return d;
  }
  function h(v) {
    fr.fire("HeaderChange", "summary", v.id, v.clientName);
  }
  function g(v) {
    h(v);
    const y = encodeURIComponent(
      btoa(
        JSON.stringify({
          params: { id: v.id },
          portlet: "summary"
        })
      )
    );
    Ip.href = `#${y}`;
  }
  const b = [
    {
      field: "clientName",
      headerName: "Client Service",
      minWidth: 285,
      flex: 1,
      renderCell: (v) => /* @__PURE__ */ L.jsx(L.Fragment, { children: /* @__PURE__ */ L.jsx(
        ao,
        {
          "data-testElementId": `datagrid-title-${v.row.id}`,
          onClick: () => h(v.row)
        }
      ) })
    },
    {
      field: "kickoff",
      headerName: "Kickoff",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "kickoff")
    },
    {
      field: "clientConfig",
      headerName: "Client Config",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "clientConfig")
    },
    {
      field: "cLM",
      headerName: "CLM",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "cLM")
    },
    {
      field: "firstBatchLicenses",
      headerName: "License Templates",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "firstBatchLicenses")
    },
    {
      field: "sxMx",
      headerName: "SxMx",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "sxMx")
    },
    {
      field: "lSR",
      headerName: "LSR",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "lSR")
    },
    {
      field: "lDR",
      headerName: "LDR",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "lDR")
    },
    {
      field: "usage",
      headerName: "Usage",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "usage")
    },
    {
      field: "mRVR",
      headerName: "MRVR",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "mRVR")
    },
    {
      field: "statements",
      headerName: "Statements",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "statements")
    },
    {
      field: "iTCloseout",
      headerName: "IT Closeout",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "iTCloseout")
    },
    {
      field: "monitorRA",
      headerName: "Monitor RA",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => f(v.row, "monitorRA")
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      flex: 1,
      renderCell: (v) => {
        const y = v.row, d = (P) => {
          r((E) => ({
            ...E,
            [y.id]: P.currentTarget
          }));
        }, C = () => {
          r((P) => ({
            ...P,
            [y.id]: null
          }));
        };
        return /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
          /* @__PURE__ */ L.jsx(
            vp,
            {
              onClick: d,
              "data-testElementId": `datagrid-action-${y.id}`,
              size: "small",
              "aria-controls": s ? "actions-menu" : void 0,
              "aria-haspopup": "true",
              "aria-expanded": s ? "true" : void 0,
              children: /* @__PURE__ */ L.jsx(Ls, {})
            }
          ),
          /* @__PURE__ */ L.jsx(
            Ld,
            {
              anchorEl: n[y.id],
              open: !!n[y.id],
              onClose: C,
              onClick: u,
              transformOrigin: { horizontal: "right", vertical: "top" },
              anchorOrigin: { horizontal: "right", vertical: "bottom" },
              children: /* @__PURE__ */ L.jsx(
                up,
                {
                  onClick: () => {
                    g(y), C();
                  },
                  children: /* @__PURE__ */ L.jsx(ia, { variant: "inherit", children: "View Details" })
                }
              )
            }
          )
        ] });
      }
    }
  ];
  return /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
    /* @__PURE__ */ L.jsx(ao, { children: /* @__PURE__ */ L.jsx(
      oa,
      {
        className: "clientRegistrationButton",
        sx: {
          m: 3,
          display: "flex",
          alignItems: "flex-end",
          marginLeft: "auto"
        },
        "data-testelementid": "add-new-client-registration-form",
        variant: "contained",
        onClick: l,
        endIcon: /* @__PURE__ */ L.jsx(Fs, {}),
        children: "PROVISION NEW CLIENT SERVICE"
      }
    ) }),
    /* @__PURE__ */ L.jsx(
      sa,
      {
        ...e,
        columns: b,
        rows: e || [],
        style: { padding: "30px 16px 4px 16px" },
        getRowId: (v) => v.id,
        slots: {
          toolbar: c
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
    )
  ] });
};
function Vp() {
  return /* @__PURE__ */ L.jsx("div", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit nisi autem ipsa veritatis corrupti fugiat commodi repudiandae neque a quaerat laborum perspiciatis deleniti aspernatur ratione, alias aut laudantium asperiores ut eligendi consequuntur deserunt." });
}
export {
  Lp as FormComponent,
  Vp as Lorem
};
