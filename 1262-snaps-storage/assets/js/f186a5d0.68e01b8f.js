"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[736],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:2},i="Add a network",s={unversionedId:"how-to/manage-networks/add-network",id:"how-to/manage-networks/add-network",title:"Add a network",description:"Prompt a user to add or switch to an Ethereum network.",source:"@site/wallet/how-to/manage-networks/add-network.md",sourceDirName:"how-to/manage-networks",slug:"/how-to/manage-networks/add-network",permalink:"/1262-snaps-storage/wallet/how-to/manage-networks/add-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-networks/add-network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Detect a user's network",permalink:"/1262-snaps-storage/wallet/how-to/manage-networks/detect-network"},next:{title:"Send transactions",permalink:"/1262-snaps-storage/wallet/how-to/send-transactions"}},c={},l=[{value:"Example",id:"example",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"add-a-network"},"Add a network"),(0,a.yg)("p",null,"In some cases, such as when ",(0,a.yg)("a",{parentName:"p",href:"/1262-snaps-storage/wallet/concepts/smart-contracts"},"interacting with smart contracts"),",\nyour dapp must connect a user to a new network in MetaMask.\nInstead of the user ",(0,a.yg)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5"},"adding a new network manually"),",\nwhich requires them to configure RPC URLs and chain IDs, your dapp can use the\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,a.yg)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," and\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,a.yg)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," RPC methods to prompt\nthe user to add a specific, pre-configured network to their MetaMask wallet."),(0,a.yg)("p",null,"These methods are specified by ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085")," and\n",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3326"},"EIP-3326"),", and we recommend using them together."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")," creates a confirmation asking the user to add the specified network to MetaMask."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")," creates a confirmation asking the user to switch to the specified network.")),(0,a.yg)("p",null,"The confirmations look like the following:"),(0,a.yg)("div",{class:"row"},(0,a.yg)("div",{class:"column"},(0,a.yg)("img",{src:n(66365).A,alt:"Add network confirmation",style:{border:"1px solid #DCDCDC"}})),(0,a.yg)("div",{class:"column"},(0,a.yg)("img",{src:n(19404).A,alt:"Switch network confirmation",style:{border:"1px solid #DCDCDC"}}))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"The following is an example of using ",(0,a.yg)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain")," to\nprompt a user to add and switch to a new network:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'try {\n    await provider // Or window.ethereum if you don\'t support EIP-6963.\n        .request({\n            method: "wallet_switchEthereumChain",\n            params: [{ chainId: "0xf00" }],\n        });\n} catch (switchError) {\n    // This error code indicates that the chain has not been added to MetaMask.\n    if (switchError.code === 4902) {\n        try {\n            await provider // Or window.ethereum if you don\'t support EIP-6963.\n                .request({\n                    method: "wallet_addEthereumChain",\n                    params: [\n                        {\n                            chainId: "0xf00",\n                            chainName: "...",\n                            rpcUrls: ["https://..."] /* ... */,\n                        },\n                    ],\n                });\n        } catch (addError) {\n            // Handle "add" error.\n        }\n    }\n    // Handle other "switch" errors.\n}\n')))}m.isMDXComponent=!0},66365:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/add-network-b50a7e5fc0b9fd187d45f0070c071aa8.png"},19404:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/switch-network-fa13b71d966a9c048bc069d39047a5b9.png"}}]);