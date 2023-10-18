(function(b,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],_):(b=typeof globalThis<"u"?globalThis:b||self,_(b["vite-common-module"]={},b.React))})(this,function(b,_){"use strict";var M={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return w;Q=1;var U=_,x=Symbol.for("react.element"),q=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,A=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function k(y,l,O){var v,m={},E=null,W=null;O!==void 0&&(E=""+O),l.key!==void 0&&(E=""+l.key),l.ref!==void 0&&(W=l.ref);for(v in l)T.call(l,v)&&!I.hasOwnProperty(v)&&(m[v]=l[v]);if(y&&y.defaultProps)for(v in l=y.defaultProps,l)m[v]===void 0&&(m[v]=l[v]);return{$$typeof:x,type:y,key:E,ref:W,props:m,_owner:A.current}}return w.Fragment=q,w.jsx=k,w.jsxs=k,w}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function we(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var U=_,x=Symbol.for("react.element"),q=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),y=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),te=Symbol.iterator,ke="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[ke];return typeof r=="function"?r:null}var C=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];De("error",e,t)}}function De(e,r,t){{var n=C.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ae=!1,Ie=!1,We=!1,Ye=!1,Le=!1,ne;ne=Symbol.for("react.module.reference");function $e(e){return!!(typeof e=="string"||typeof e=="function"||e===T||e===I||Le||e===A||e===O||e===v||Ye||e===W||Ae||Ie||We||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===m||e.$$typeof===k||e.$$typeof===y||e.$$typeof===l||e.$$typeof===ne||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ae(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case q:return"Portal";case I:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return ae(r)+".Consumer";case k:var t=e;return ae(t._context)+".Provider";case l:return Ne(e,e.render,"ForwardRef");case m:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case E:{var o=e,u=o._payload,i=o._init;try{return g(i(u))}catch{return null}}}return null}var R=Object.assign,F=0,ie,oe,ue,se,fe,le,ce;function de(){}de.__reactDisabledLog=!0;function Ve(){{if(F===0){ie=console.log,oe=console.info,ue=console.warn,se=console.error,fe=console.group,le=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Me(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ie}),info:R({},e,{value:oe}),warn:R({},e,{value:ue}),error:R({},e,{value:se}),group:R({},e,{value:fe}),groupCollapsed:R({},e,{value:le}),groupEnd:R({},e,{value:ce})})}F<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=C.ReactCurrentDispatcher,J;function Y(e,r,t){{if(J===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,L;{var Ue=typeof WeakMap=="function"?WeakMap:Map;L=new Ue}function ve(e,r){if(!e||G)return"";{var t=L.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=B.current,B.current=null,Ve();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(h){n=h}Reflect.construct(e,[],i)}else{try{i.call()}catch(h){n=h}e.call(i.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,B.current=u,Me(),Error.prepareStackTrace=o}var P=e?e.displayName||e.name:"",Se=P?Y(P):"";return typeof e=="function"&&L.set(e,Se),Se}function qe(e,r,t){return ve(e,!1)}function Be(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Be(e));if(typeof e=="string")return Y(e);switch(e){case O:return Y("Suspense");case v:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return qe(e.render);case m:return $(e.type,r,t);case E:{var n=e,o=n._payload,u=n._init;try{return $(u(o),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,pe={},me=C.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function Je(e,r,t,n,o){{var u=Function.call.bind(N);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),V(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,V(o),c("Failed %s type: %s",t,a.message),V(null))}}}var Ge=Array.isArray;function z(e){return Ge(e)}function ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function he(e){if(He(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ze(e)),ge(e)}var D=C.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0},be,ye,H;H={};function Xe(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Qe(e,r){if(typeof e.ref=="string"&&D.current&&r&&D.current.stateNode!==r){var t=g(D.current.type);H[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(D.current.type),e.ref),H[t]=!0)}}function er(e,r){{var t=function(){be||(be=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function rr(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var tr=function(e,r,t,n,o,u,i){var a={$$typeof:x,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function nr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(he(t),a=""+t),Ze(r)&&(he(r.key),a=""+r.key),Xe(r)&&(d=r.ref,Qe(r,o));for(u in r)N.call(r,u)&&!Ke.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&er(i,f),d&&rr(i,f)}return tr(e,a,d,o,n,D.current,i)}}var K=C.ReactCurrentOwner,Ee=C.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function Re(){{if(K.current){var e=g(K.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ar(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function ir(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==K.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),S(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Oe(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Te(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=Fe(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&Te(i.value,r)}}}function or(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===m))t=r.propTypes;else return;if(t){var n=g(r);Je(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function Ce(e,r,t,n,o,u){{var i=$e(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ar(o);d?a+=d:a+=Re();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===x?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=nr(e,r,t,o,u);if(f==null)return f;if(i){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var P=0;P<p.length;P++)Oe(p[P],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(p,e)}return e===T?ur(f):or(f),f}}function sr(e,r,t){return Ce(e,r,t,!0)}function fr(e,r,t){return Ce(e,r,t,!1)}var lr=fr,cr=sr;j.Fragment=T,j.jsx=lr,j.jsxs=cr}()),j}process.env.NODE_ENV==="production"?M.exports=Pe():M.exports=we();var re=M.exports;function je(){return re.jsx("div",{children:"Hola!!!!"})}function xe(){return re.jsx("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit nisi autem ipsa veritatis corrupti fugiat commodi repudiandae neque a quaerat laborum perspiciatis deleniti aspernatur ratione, alias aut laudantium asperiores ut eligendi consequuntur deserunt."})}b.FormComponent=je,b.Lorem=xe,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
