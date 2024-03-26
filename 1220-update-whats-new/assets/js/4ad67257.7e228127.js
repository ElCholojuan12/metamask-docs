"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8301],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(k,o(o({ref:a},u),{},{components:t})):n.createElement(k,o({ref:a},u))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),l=t(67294),r=t(86010),o=t(12466),i=t(70989),s=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==i&&(d(a),s(n))},k=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:k,onClick:m},o,{className:(0,r.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function c(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function d(e){const a=(0,i.Y)(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},l.createElement(u,(0,n.Z)({},e,a)),l.createElement(c,(0,n.Z)({},e,a)))}function m(e){const a=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},70989:(e,a,t)=>{t.d(a,{Y:()=>d});var n=t(67294),l=t(16550),r=t(91980),o=t(67392),i=t(50012);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??s(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:t}=e;const o=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,r._X)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(o.location.search);a.set(i,e),o.replace({...o.location,search:a.toString()})}),[i,o])]}function d(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,r=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[d,m]=c({queryString:t,groupId:l}),[k,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,i.Nk)(t);return[l,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),b=(()=>{const e=d??k;return u({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),h(e)}),[m,h,r]),tabValues:r}}},80387:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),r=t(65488),o=t(85162);const i={description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},s="JavaScript SDK options",p={unversionedId:"reference/sdk-js-options",id:"reference/sdk-js-options",title:"JavaScript SDK options",description:"See the JavaScript SDK options reference.",source:"@site/wallet/reference/sdk-js-options.md",sourceDirName:"reference",slug:"/reference/sdk-js-options",permalink:"/1220-update-whats-new/wallet/reference/sdk-js-options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-js-options.md",tags:[{label:"JavaScript SDK",permalink:"/1220-update-whats-new/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Reference",permalink:"/1220-update-whats-new/wallet/reference"},next:{title:"Unity SDK API",permalink:"/1220-update-whats-new/wallet/reference/sdk-unity-api"}},u={},c=[{value:"<code>checkInstallationImmediately</code>",id:"checkinstallationimmediately",level:3},{value:"<code>checkInstallationOnAllCalls</code>",id:"checkinstallationonallcalls",level:3},{value:"<code>communicationLayerPreference</code>",id:"communicationlayerpreference",level:3},{value:"<code>communicationServerUrl</code>",id:"communicationserverurl",level:3},{value:"<code>dappMetadata</code>",id:"dappmetadata",level:3},{value:"<code>defaultReadOnlyChainId</code>",id:"defaultreadonlychainid",level:3},{value:"<code>enableDebug</code>",id:"enabledebug",level:3},{value:"<code>extensionOnly</code>",id:"extensiononly",level:3},{value:"<code>infuraAPIKey</code>",id:"infuraapikey",level:3},{value:"<code>modals</code>",id:"modals",level:3},{value:"<code>openDeeplink</code>",id:"opendeeplink",level:3},{value:"<code>preferDesktop</code>",id:"preferdesktop",level:3},{value:"<code>readonlyRPCMap</code>",id:"readonlyrpcmap",level:3},{value:"<code>shouldShimWeb3</code>",id:"shouldshimweb3",level:3},{value:"<code>timer</code>",id:"timer",level:3},{value:"<code>transports</code>",id:"transports",level:3},{value:"<code>ui</code>",id:"ui",level:3},{value:"<code>useDeeplink</code>",id:"usedeeplink",level:3},{value:"<code>wakeLockType</code>",id:"wakelocktype",level:3}],d={toc:c},m="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript-sdk-options"},"JavaScript SDK options"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/1220-update-whats-new/wallet/how-to/use-sdk/javascript/"},"JavaScript version of MetaMask SDK")," takes the\nfollowing options."),(0,l.kt)("h3",{id:"checkinstallationimmediately"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkInstallationImmediately")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationImmediately: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationImmediately: true\n")))),(0,l.kt)("p",null,"Enables or disables immediately checking if MetaMask is installed on the user's browser.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the SDK checks for installation upon page load and sends a connection request, prompting\nthe user to install MetaMask if it's not already installed.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", the SDK waits for the connect method to be called to check for installation."),(0,l.kt)("p",null,"The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"checkinstallationonallcalls"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkInstallationOnAllCalls")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationOnAllCalls: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationOnAllCalls: true\n")))),(0,l.kt)("p",null,"Enables or disables checking if MetaMask is installed on the user's browser before each RPC request.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"communicationlayerpreference"},(0,l.kt)("inlineCode",{parentName:"h3"},"communicationLayerPreference")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"communicationLayerPreference: <type>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"communicationLayerPreference: SOCKET\n")))),(0,l.kt)("p",null,"The preferred communication layer to use.\nThe default and only option is ",(0,l.kt)("inlineCode",{parentName:"p"},"SOCKET")," for ",(0,l.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/"},"Socket.IO"),"."),(0,l.kt)("h3",{id:"communicationserverurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"communicationServerUrl")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"communicationServerUrl: <string>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'communicationServerUrl: "https://metamask-sdk-socket.metafi.codefi.network/"\n')))),(0,l.kt)("p",null,"The URL of the communication server to use.\nThis option is mainly used for debugging and testing the SDK."),(0,l.kt)("h3",{id:"dappmetadata"},(0,l.kt)("inlineCode",{parentName:"h3"},"dappMetadata")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"dappMetadata: {\n    name: <string>,\n    url: <string>,\n    base64Icon: <string>,\n}\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'dappMetadata: {\n    name: "My Dapp",\n    url: "https://mydapp.com",\n    base64Icon: "data:image/png;base64,...",\n}\n')))),(0,l.kt)("p",null,"Metadata about the dapp using the SDK.\nThe metadata options are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - Name of the dapp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url")," - URL of the dapp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"base64Icon")," - A base64-encoded icon")),(0,l.kt)("admonition",{title:"important",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"dappMetaData")," creates a clear and trustworthy user experience when connecting your dapp to\nMetaMask Mobile.\nMetaMask Mobile displays this metadata in the connection modal to help users identify and verify the\nconnection request.")),(0,l.kt)("h3",{id:"defaultreadonlychainid"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultReadOnlyChainId")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"defaultReadOnlyChainId: <number or hexadecimal string>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'defaultReadOnlyChainId: "0x1"\n')))),(0,l.kt)("p",null,"Enables sending ",(0,l.kt)("a",{parentName:"p",href:"/1220-update-whats-new/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"read-only RPC requests")," to\nthis chain ID before the user connects to MetaMask.\nThe value is automatically updated to the chain ID used in MetaMask once connected."),(0,l.kt)("h3",{id:"enabledebug"},(0,l.kt)("inlineCode",{parentName:"h3"},"enableDebug")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"enableDebug: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"enableDebug: false\n")))),(0,l.kt)("p",null,"Enables or disables sending anonymous analytics to MetaMask to help improve the SDK.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h3",{id:"extensiononly"},(0,l.kt)("inlineCode",{parentName:"h3"},"extensionOnly")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"extensionOnly: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"extensionOnly: true\n")))),(0,l.kt)("p",null,"Enables or disables automatically using the MetaMask browser extension if it's detected.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"infuraapikey"},(0,l.kt)("inlineCode",{parentName:"h3"},"infuraAPIKey")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"infuraAPIKey: <string>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"infuraAPIKey: process.env.INFURA_API_KEY\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"Infura API key")," to\nuse for RPC requests.\nConfigure this option to ",(0,l.kt)("a",{parentName:"p",href:"/1220-update-whats-new/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests from your dapp"),"."),(0,l.kt)("admonition",{title:"important",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Use ",(0,l.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"Infura allowlists"),"\nto protect against other people submitting requests to your API key.\nYou can restrict interactions to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp.")),(0,l.kt)("h3",{id:"modals"},(0,l.kt)("inlineCode",{parentName:"h3"},"modals")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"modals: <object>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"modals: {\n    onPendingModalDisconnect: () => {\n        // Custom logic for pending modal disconnect\n    },\n    install: (params) => {\n        // Custom install modal logic\n        const { link, debug, installer, terminate, connectWithExtension } = params;\n        return {\n            mount: (link) => { /* custom mount logic */ },\n            unmount: (shouldTerminate) => { /* custom unmount logic */ },\n        };\n    },\n    otp: ({ debug, onDisconnect }) => {\n        // Custom OTP modal logic\n        return {\n            mount: () => { /* custom mount logic */ },\n            updateOTPValue: (otpValue) => { /* custom OTP value update logic */ },\n            unmount: () => { /* custom unmount logic */ },\n        };\n    },\n}\n")))),(0,l.kt)("p",null,"An object that allows you to ",(0,l.kt)("a",{parentName:"p",href:"/1220-update-whats-new/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of the displayed modals"),".\nThis is useful if your dapp requires a custom way to handle connection and reconnection scenarios."),(0,l.kt)("h3",{id:"opendeeplink"},(0,l.kt)("inlineCode",{parentName:"h3"},"openDeeplink")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"openDeeplink: <function>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"openDeeplink: (link: string) => {\n    if (canOpenLink) {\n        Linking.openURL(link);\n    }\n}\n")))),(0,l.kt)("p",null,"A function that is called to open a deeplink to the MetaMask Mobile app."),(0,l.kt)("h3",{id:"preferdesktop"},(0,l.kt)("inlineCode",{parentName:"h3"},"preferDesktop")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"preferDesktop: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"preferDesktop: true\n")))),(0,l.kt)("p",null,"Enables or disables preferring the MetaMask browser extension over MetaMask Mobile.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"readonlyrpcmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"readonlyRPCMap")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"readonlyRPCMap: <map>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'readonlyRPCMap: {\n    "0x539": "http://localhost:8545",\n}\n')))),(0,l.kt)("p",null,"A map of RPC URLs to use for ",(0,l.kt)("a",{parentName:"p",href:"/1220-update-whats-new/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"read-only RPC requests"),"."),(0,l.kt)("h3",{id:"shouldshimweb3"},(0,l.kt)("inlineCode",{parentName:"h3"},"shouldShimWeb3")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"shouldShimWeb3: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"shouldShimWeb3: false\n")))),(0,l.kt)("p",null,"Enables or disables shimming the ",(0,l.kt)("inlineCode",{parentName:"p"},"window.web3")," object with the Ethereum provider returned by the SDK\n(useful for compatibility with older browsers).\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h3",{id:"timer"},(0,l.kt)("inlineCode",{parentName:"h3"},"timer")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"timer: BackgroundTimer\n")))),(0,l.kt)("p",null,"Used by React Native dapps to keep the dapp alive while using\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ocetnik/react-native-background-timer"},(0,l.kt)("inlineCode",{parentName:"a"},"react-native-background-timer")),"."),(0,l.kt)("h3",{id:"transports"},(0,l.kt)("inlineCode",{parentName:"h3"},"transports")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"transports: <array of strings>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'transports: ["websocket", "polling"]\n')))),(0,l.kt)("p",null,"Sets the preference on ",(0,l.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/"},"Socket.IO")," transports."),(0,l.kt)("h3",{id:"ui"},(0,l.kt)("inlineCode",{parentName:"h3"},"ui")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"ui: {\n    installer: <function>,\n    confirm: <function>,\n}\n")))),(0,l.kt)("p",null,"Options for customizing the SDK UI."),(0,l.kt)("h3",{id:"usedeeplink"},(0,l.kt)("inlineCode",{parentName:"h3"},"useDeeplink")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"useDeeplink: <boolean>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"useDeeplink: true\n")))),(0,l.kt)("p",null,"Enables or disables using deeplinks to connect with MetaMask Mobile.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", the SDK uses universal links instead.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"wakelocktype"},(0,l.kt)("inlineCode",{parentName:"h3"},"wakeLockType")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"wakeLockType: <type>\n"))),(0,l.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"wakeLockType: Temporary\n")))),(0,l.kt)("p",null,"The type of wake lock to use when the SDK is running in the background.\nOptions are ",(0,l.kt)("inlineCode",{parentName:"p"},"Disabled"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Temporary"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"UntilResponse"),"."))}k.isMDXComponent=!0}}]);