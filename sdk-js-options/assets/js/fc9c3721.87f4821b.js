"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(k,s(s({ref:t},l),{},{components:a})):r.createElement(k,s({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Pure JavaScript",sidebar_position:2},s="Use MetaMask SDK with pure JavaScript",i={unversionedId:"how-to/connect/set-up-sdk/javascript/pure-js",id:"how-to/connect/set-up-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"You can import MetaMask SDK into your pure JavaScript dapp to enable",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/pure-js.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/pure-js",permalink:"/sdk-js-options/wallet/how-to/connect/set-up-sdk/javascript/pure-js",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/pure-js.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/sdk-js-options/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/sdk-js-options/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.kt)("p",null,"You can import ",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/concepts/sdk/"},"MetaMask SDK")," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.kt)("admonition",{title:"example",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript"},"pure JavaScript SDK example"),"\nfor advanced use cases.")),(0,n.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"<head>\n...\n\n<script src=\"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js\"><\/script>\n\n<script>\n\n    const MMSDK = new MetaMaskSDK.MetaMaskSDK()\n    // Because init process of the MetaMaskSDK is async.\n    setTimeout(() => {\n        const ethereum = MMSDK.getProvider() // You can also access via window.ethereum\n\n        ethereum.request({ method: 'eth_requestAccounts' })\n    }, 0)\n\n<\/script>\n\n...\n</head>\n")),(0,n.kt)("p",null,"You can configure the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."),(0,n.kt)("admonition",{title:"Important SDK options",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/sdk-js-options/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/sdk-js-options/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," to customize the logic and UI of\nthe displayed modals."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/sdk-js-options/wallet/reference/sdk-js-options#infuraapikey"},(0,n.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.kt)("a",{parentName:"li",href:"/sdk-js-options/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"make read-only RPC requests")," from your dapp."))))}d.isMDXComponent=!0}}]);