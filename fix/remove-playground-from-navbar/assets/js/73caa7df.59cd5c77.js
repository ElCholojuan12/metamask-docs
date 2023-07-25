/*! For license information please see 73caa7df.59cd5c77.js.LICENSE.txt */
"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3793],{6022:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function _(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var E=v.prototype=new _;E.constructor=v,b(E,h.prototype),E.isPureReactComponent=!0;var k=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var a,l={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)g.call(t,a)&&!C.hasOwnProperty(a)&&(l[a]=t[a]);var c=arguments.length-2;if(1===c)l.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===l[a]&&(l[a]=c[a]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:S.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,a,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return o=o(c=e),e=""===l?"."+Z(c,0):l,k(o)?(a="",null!=e&&(a=e.replace(x,"$&/")+"/"),N(o,t,a,"",(function(e){return e}))):null!=o&&(I(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(c=0,l=""===l?".":l+":",k(e))for(var u=0;u<e.length;u++){var s=l+Z(i=e[u],u);c+=N(i,t,a,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(i=e.next()).done;)c+=N(i=i.value,t,a,s=l+Z(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},P={transition:null},A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:P,ReactCurrentOwner:S};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=l,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=b({},e.props),l=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=S.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)g.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){c=Array(u);for(var s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}return{$$typeof:n,type:e.type,key:l,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},397:(e,t,n)=>{e.exports=n(6022)},8612:(e,t,n)=>{n.d(t,{Z:()=>J});var r=n(7294),a=n(7524),l=n(6010),o=n(6668),i=n(1327),c=n(5999),u=n(6023);const s="collapseSidebarButton_PEFL",d="collapseSidebarButtonIcon_kv0_";function f(e){let{onClick:t}=e;return r.createElement("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",s),onClick:t},r.createElement(u.Z,{className:d}))}var m=n(5281),p=n(9689),b=n(2466),y=n(7462),h=n(902);const _=Symbol("EmptyContext"),v=r.createContext(_);function E(e){let{children:t}=e;const[n,a]=(0,r.useState)(null),l=(0,r.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return r.createElement(v.Provider,{value:l},t)}var k=n(6043),g=n(3438),S=n(8596),C=n(9960),w=n(2389);function I(e){let{categoryLabel:t,onClick:n}=e;return r.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function x(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...u}=e;const{items:s,label:d,collapsible:f,className:p,href:b}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,o.L)(),x=function(e){const t=(0,w.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,g.Wl)(e):void 0),[e,t])}(t),Z=(0,g._F)(t,a),N=(0,S.Mg)(b,a),{collapsed:R,setCollapsed:L}=(0,k.u)({initialState:()=>!!f&&(!Z&&t.collapsed)}),{expandedItem:$,setExpandedItem:P}=function(){const e=(0,r.useContext)(v);if(e===_)throw new h.i6("DocSidebarItemsExpandedStateProvider");return e}(),A=function(e){void 0===e&&(e=!R),P(e?null:c),L(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const l=(0,h.D9)(t);(0,r.useEffect)((()=>{t&&!l&&n&&a(!1)}),[t,l,n,a])}({isActive:Z,collapsed:R,updateCollapsed:A}),(0,r.useEffect)((()=>{f&&null!=$&&$!==c&&E&&L(!0)}),[f,$,c,L,E]),r.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemCategory,m.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":R},p)},r.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":N})},r.createElement(C.Z,(0,y.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":f,"menu__link--sublist-caret":!b&&f,"menu__link--active":Z}),onClick:f?e=>{n?.(t),b?A(!1):(e.preventDefault(),A())}:()=>{n?.(t)},"aria-current":N?"page":void 0,"aria-expanded":f?!R:void 0,href:f?x??"#":x},u),d),b&&f&&r.createElement(I,{categoryLabel:d,onClick:e=>{e.preventDefault(),A()}})),r.createElement(k.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:R},r.createElement(M,{items:s,tabIndex:R?-1:0,onItemClick:n,activePath:a,level:i+1})))}var Z=n(3919),N=n(9471);const R="menuExternalLink_NmtK";function L(e){let{item:t,onItemClick:n,activePath:a,level:o,index:i,...c}=e;const{href:u,label:s,className:d,autoAddBaseUrl:f}=t,p=(0,g._F)(t,a),b=(0,Z.Z)(u);return r.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:s},r.createElement(C.Z,(0,y.Z)({className:(0,l.Z)("menu__link",!b&&R,{"menu__link--active":p}),autoAddBaseUrl:f,"aria-current":p?"page":void 0,to:u},b&&{onClick:n?()=>n(t):void 0},c),s,!b&&r.createElement(N.Z,null)))}const $="menuHtmlItem_M9Kj";function P(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:i,className:c}=t;return r.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(n),i&&[$,"menu__list-item"],c),key:a,dangerouslySetInnerHTML:{__html:o}})}function A(e){let{item:t,...n}=e;switch(t.type){case"category":return r.createElement(x,(0,y.Z)({item:t},n));case"html":return r.createElement(P,(0,y.Z)({item:t},n));default:return r.createElement(L,(0,y.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return r.createElement(E,null,t.map(((e,t)=>r.createElement(A,(0,y.Z)({key:t,item:e,index:t},n)))))}const M=(0,r.memo)(j),O="menu_SIkG",T="menuWithAnnouncementBar_GW3s";function D(e){let{path:t,sidebar:n,className:a}=e;const o=function(){const{isActive:e}=(0,p.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((t=>{let{scrollY:r}=t;e&&n(0===r)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",O,o&&T,a)},r.createElement("ul",{className:(0,l.Z)(m.k.docs.docSidebarMenu,"menu__list")},r.createElement(M,{items:n,activePath:t,level:1})))}const F="sidebar_njMd",H="sidebarWithHideableNavbar_wUlq",U="sidebarHidden_VK0M",B="sidebarLogo_isFc";function V(e){let{path:t,sidebar:n,onCollapse:a,isHidden:c}=e;const{navbar:{hideOnScroll:u},docs:{sidebar:{hideable:s}}}=(0,o.L)();return r.createElement("div",{className:(0,l.Z)(F,u&&H,c&&U)},u&&r.createElement(i.Z,{tabIndex:-1,className:B}),r.createElement(D,{path:t,sidebar:n}),s&&r.createElement(f,{onClick:a}))}const q=r.memo(V);var z=n(3102),W=n(3163);const G=e=>{let{sidebar:t,path:n}=e;const a=(0,W.e)();return r.createElement("ul",{className:(0,l.Z)(m.k.docs.docSidebarMenu,"menu__list")},r.createElement(M,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function K(e){return r.createElement(z.Zo,{component:G,props:e})}const Y=r.memo(K);function J(e){const t=(0,a.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(q,e),l&&r.createElement(Y,e))}},6023:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7462),a=n(7294);function l(e){return a.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},8104:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(397)),l=n(8612).Z,o=r(n(7452)),i=n(5042).Z;t.default=function(e){const t=[{label:"OpenRPC",description:"OpenRPC is a specification for machine-readable JSON-RPC services. It allows for automatic code generation, documentation, and discovery.",items:e.openrpcDocument.methods.map((e=>({type:"link",label:e.name,href:`/api-playground#${e.name.toLowerCase()}`}))),type:"category",collapsed:!1,collapsible:!0}];return a.default.createElement(o.default,null,a.default.createElement("div",{style:{display:"flex",width:"100%",flex:"1 0"}},a.default.createElement("aside",{style:{display:"block",width:"var(--doc-sidebar-width)",marginTop:"calc(-1 * var(--ifm-navbar-height))",borderRight:"1px solid var(--ifm-toc-border-color)",willChange:"width",transition:"width var(--ifm-transition-fast) ease",clipPath:"inset(0)"},className:"theme-doc-sidebar-container"},a.default.createElement("div",{style:{top:0,position:"sticky",height:"100%",maxHeight:"100vh"}},a.default.createElement(l,{path:e.route.path,sidebar:t}))),a.default.createElement("main",{style:{flexGrow:1,maxWidth:"calc(100% - var(--doc-sidebar-width))"}},a.default.createElement("div",{className:"container padding-top--md padding-bottom--lg"},a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col col--12"},a.default.createElement(i,null,a.default.createElement(e.openrpcMarkdown,null))))))))}},255:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6010),a=n(7294);const l={pill:"pill_TFFj","pill--green":"pill--green_r196","pill--red":"pill--red_AgbU","pill--blue":"pill--blue_wiL1","pill--yellow":"pill--yellow_HHCe"},o=new Set(["green","red","yellow","blue"]);const i={...n(2195).Z,Pill:function(e){let{color:t,children:n}=e;if(!o.has(t))throw new Error(`Invalid color: ${t}. Available colors are: ${Array.from(o).join(", ")}`);return a.createElement("mark",{role:"note",className:(0,r.Z)(l.pill,l[`pill--${t}`])},n)}}}}]);