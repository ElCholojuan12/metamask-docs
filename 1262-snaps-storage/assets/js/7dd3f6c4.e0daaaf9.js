"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9944],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(a),d=r,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return a?t.createElement(m,s(s({ref:n},c),{},{components:a})):t.createElement(m,s({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92035:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const i={description:"Learn about best practices for creating secure and reliable Snaps.",sidebar_position:2},s="Snaps security guidelines",o={unversionedId:"learn/best-practices/security-guidelines",id:"learn/best-practices/security-guidelines",title:"Snaps security guidelines",description:"Learn about best practices for creating secure and reliable Snaps.",source:"@site/snaps/learn/best-practices/security-guidelines.md",sourceDirName:"learn/best-practices",slug:"/learn/best-practices/security-guidelines",permalink:"/1262-snaps-storage/snaps/learn/best-practices/security-guidelines",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/best-practices/security-guidelines.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about best practices for creating secure and reliable Snaps.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps design guidelines",permalink:"/1262-snaps-storage/snaps/learn/best-practices/design-guidelines"},next:{title:"Features",permalink:"/1262-snaps-storage/snaps/features"}},p={},l=[{value:"Manage permissions",id:"manage-permissions",level:2},{value:"Handle transactions securely",id:"handle-transactions-securely",level:2},{value:"Notify users",id:"notify-users",level:2},{value:"Secure sensitive information",id:"secure-sensitive-information",level:2},{value:"Validate parameters",id:"validate-parameters",level:2},{value:"Avoid using deprecated methods",id:"avoid-using-deprecated-methods",level:2},{value:"Coding best practices",id:"coding-best-practices",level:2},{value:"Manage dependencies",id:"manage-dependencies",level:2},{value:"Publish and serve your Snap",id:"publish-and-serve-your-snap",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:l},g="wrapper";function u(e){let{components:n,...i}=e;return(0,r.yg)(g,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-security-guidelines"},"Snaps security guidelines"),(0,r.yg)("p",null,"This page outlines essential principles for builders to develop secure and reliable Snaps.\nUse these guidelines when creating your Snap to ensure it is safe for users."),(0,r.yg)("h2",{id:"manage-permissions"},"Manage permissions"),(0,r.yg)("p",null,"The following are guidelines for ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/how-to/request-permissions"},"managing permissions")," in the Snap manifest file."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Minimum permissions")," - Follow the principle of least authority by only adding the minimum\npermissions needed by your Snap in the manifest file.\nBefore publishing your Snap, check the permissions again and remove any unused permissions.\nYou can validate your permissions using the ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator Manifest\nValidator"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Minimum RPC access")," - When adding the ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions#endowmentrpc"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:rpc")),"\npermission for Snaps or dapps, ask yourself if both are necessary.\nFor example, if permission is granted to communicate with Snaps, it means other Snaps can call\nyour Snap's sensitive RPC methods.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Minimum network access")," - Only add the ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions#endowmentnetwork-access"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission if it's absolutely necessary, such as when needing to communicate with a remote API\nthat is part of your Snap's functionality.\nThis to mitigate users' concern about sharing wallet usage to remote servers.\nIf your Snap needs this permission, inform the user before communicating with remote servers and\ninclude a privacy policy in your Snap that explains how data is shared."))),(0,r.yg)("h2",{id:"handle-transactions-securely"},"Handle transactions securely"),(0,r.yg)("p",null,"The following are guidelines for handling and signing transactions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Transaction details")," - When handling transactions, provide a prompt displaying\nall transaction details, including the receiver address, chain ID, network, and amount.\nDisplay the originating site's domain name and the target blockchain.\nEnsure the user verifies the receiver address to avoid sending funds to an incorrect destination.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Transparent signing")," - Display the message to be signed by the user in the Snap confirmation flow.\nDo not rely on the requesting site to display this message, as it might choose not to, leading to the Snap signing the message silently.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Consentful confirmations")," - Before signing a transaction, display a user confirmation prompt\nwith all the transaction details as previously mentioned."))),(0,r.yg)("h2",{id:"notify-users"},"Notify users"),(0,r.yg)("p",null,"The following are guidelines for user notifications and authorizations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Transparent and consentful actions")," - Before performing any of the following actions, provide a\nprompt that displays detailed information about the action and asks the user to reject or accept it:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Modifying or reading state.")," (In general, notify the user about any state changes.)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Switching networks or accounts.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Deriving or generating key pairs, accounts, or smart contracts.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Signing transactions.")," (If your Snap is designed to allow automatic transactions, prompt the\nuser before enabling this and make sure they know how it works.\nAlso provide a way to disable it.)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Protect user keys")," - Do not allow your Snap to return all user wallet addresses to the\nsite, even public keys.\nUsers should choose and authorize the addresses to expose.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Limit access to sensitive methods"),' - When building a Snap with sensitive RPC methods,\nuse a companion dapp as an "admin interface" to interact with your Snap\'s sensitive methods.\nThere are two ways to do this:'),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restrict the ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions#endowmentrpc"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission to specific\nURLs using the ",(0,r.yg)("inlineCode",{parentName:"p"},"allowedOrigins")," caveat.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Filter specific methods to specific URLs using the built-in ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL"},"URL\nlibrary"),": "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'const referrer = new URL(origin);\n\nif(referrer.protocol === "https:" && \n    (referrer.host.endsWith(".metamask.io") || referrer.host === "metamask.io")) { \n        console.log("URL is valid"); \n}\nelse { \n    console.log("URL is NOT valid"); \n}\n')),(0,r.yg)("p",{parentName:"li"},"In this example, the RPC method can be restricted when the origin matches ",(0,r.yg)("inlineCode",{parentName:"p"},"https://metamask.io"),"\nor any subdomain.\nThis check can be used on any RPC method that should not be callable by all sites."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Avoid using regular expressions or string matching to filter URLs.\nThe URL library provides a much more reliable interface for matching URLs.")))))),(0,r.yg)("h2",{id:"secure-sensitive-information"},"Secure sensitive information"),(0,r.yg)("p",null,"The following are guidelines for handling sensitive or personally identifiable information such as\nuser IPs, emails, passwords, and private keys:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Logging")," - Remove all logs to the JavaScript console that contain sensitive information.\nDisable all logging before publishing your Snap.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Errors")," - Review parts of your code where errors and exceptions can be raised.\nIn some cases, error stacks can be written to the console with sensitive information.\nThis information can be captured in data logs, or a malicious actor can phish the user into\ncopying and sending the error.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Private keys")," - Avoid retrieving the user's private key from the Snap unless\nabsolutely necessary, such as to sign a transaction.\nIf you only need the user's public key, use ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_getbip32publickey"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip32PublicKey")),"\ninstead of deriving it from the private key.\nNever return the private key in an RPC method to a dapp or another Snap.\nTo give users a way to view their private key, display it in a dialog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Limit exposure")," - Avoid accidentally returning sensitive information from a method.\nFor example, you might have a method that intends to return sensitive information only in specific\ncases, but due to a typo or bad logic, it returns the information incorrectly, leaking data.\nEven if you have a legitimate reason for allowing a user to export sensitive information, you\nshould prevent that information from being revealed carelessly (similar to how MetaMask makes it\ndifficult to reveal a Secret Recovery Phrase and for an observer looking over a user's shoulder to\nsee it)."))),(0,r.yg)("p",null,"When in doubt, choose friction over convenience for sensitive information."),(0,r.yg)("h2",{id:"validate-parameters"},"Validate parameters"),(0,r.yg)("p",null,"The following are guidelines for validating RPC parameters and handling values:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Validate user inputs")," - Validate and sanitize user inputs coming into the Snap-exposed RPC methods.\nNever assume a parameter is safe to use.\nIf unvalidated user inputs are used inside the logic of your Snap methods, a dapp or a user can\nexploit that logic in an unsafe way.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Get values from MetaMask")," - Get values such as chain ID or address from MetaMask instead\nof the dapp.\nA dapp can accidentally or maliciously display incorrect values, tricking users into performing\ncertain actions (for example, signing a transaction for a network to which they didn't intend to\nbroadcast the transaction).\nIf a dapp provides values that do not match the values from MetaMask, warn the user in your\nconfirmation flow.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Use ",(0,r.yg)("inlineCode",{parentName:"strong"},"copyable")," for safe disclosures")," - When displaying arbitrary content in a Snap dialog, such\nas for signing a message, use the ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/features/custom-ui/#copyable"},(0,r.yg)("inlineCode",{parentName:"a"},"copyable"))," user\ninterface component instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),".\nWhen using dialogs, the input may contain special characters that render as Markdown and can\nmislead the user.\nFor example: "),(0,r.yg)("img",{src:a(26157).A,alt:"Example not using copyable with Markdown rendering",style:{border:"1px solid #DCDCDC"}}),(0,r.yg)("p",{parentName:"li"},"The special characters ",(0,r.yg)("inlineCode",{parentName:"p"},"*")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"_")," render Markdown formatting, so what the user sees does not\nmatch the content.\nTo avoid this, use ",(0,r.yg)("inlineCode",{parentName:"p"},"copyable")," instead:"),(0,r.yg)("img",{src:a(94390).A,alt:"Example using copyable with clean rendering",style:{border:"1px solid #DCDCDC"}}),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"copyable")," does not render Markdown and has the added benefit that the user can select to copy the content.\nAlso, the formatting provides a visual delineator to separate arbitrary input or fields from user\ninterface text.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Check transaction data size")," - Check the size of the ABI-encoded transaction data's function arguments.\nThe ABI specification requires all arguments, regardless of their type, to be 32 bytes.\nIf an argument is not 32 bytes, the calling contract's behavior might depend on the contract\ncompiler version.\nFor example, Solidity 0.5.0 treats these non-aligned arguments as invalid and reverts the function call.\nOlder Solidity versions automatically append zeros at the end of the transaction data to ensure\nall arguments are 32 bytes.\nAn attacker can exploit this feature to bypass security checks implemented in the corresponding\ncontract function that reads those function arguments."))),(0,r.yg)("h2",{id:"avoid-using-deprecated-methods"},"Avoid using deprecated methods"),(0,r.yg)("p",null,"Avoid using the following deprecated methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"wallet_enable"),", which is deprecated in favor of\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"snap_confirm"),", which is deprecated in favor of ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"endowment:long-running"),", which is deprecated for MetaMask stable but still allowed in MetaMask Flask."))),(0,r.yg)("h2",{id:"coding-best-practices"},"Coding best practices"),(0,r.yg)("p",null,"The following are coding security tips and warnings:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SES compatibility")," - Use packages or libraries compatible with SES (hardened JavaScript).\nIf you don't, you might encounter errors that require ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/how-to/debug-a-snap/common-issues#patch-dependencies"},"patching a specific\ndependency")," to fix.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Timers and side-channel attacks")," - Certain JavaScript features such as timers (for example,\n",(0,r.yg)("inlineCode",{parentName:"p"},"Date.now"),") can expose critical system information, making a user vulnerable to\n",(0,r.yg)("a",{parentName:"p",href:"https://www.rambus.com/blogs/side-channel-attacks/"},"side-channel attacks"),".\nIn the Snaps execution environment, the precision of these timers has been reduced to prevent this.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Unsafe cryptographic libraries")," - Avoid using unsafe cryptographic libraries.\nDo not use ",(0,r.yg)("inlineCode",{parentName:"p"},"Math.random"),", which is not sufficiently random for generating cryptographic hashes and\ncan expose a user to reverse engineering or brute-forcing keys in the future.\nDo not use insufficient hashing algorithms such as ",(0,r.yg)("inlineCode",{parentName:"p"},"md5")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"sha2"),".\nDo not roll your own cryptography or use custom or unproven cryptography methods or libraries."),(0,r.yg)("p",{parentName:"li"},"We recommend using ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_getentropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getEntropy"))," for entropy, the\nbuilt-in ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API")," or\n",(0,r.yg)("a",{parentName:"p",href:"https://paulmillr.com/noble/"},"Noble cryptography libraries"),", and safe hashing algorithms such as ",(0,r.yg)("inlineCode",{parentName:"p"},"sha256"),".\nChoose audited, widely used libraries over obscure, untested implementations."))),(0,r.yg)("h2",{id:"manage-dependencies"},"Manage dependencies"),(0,r.yg)("p",null,"The following are guidelines for securing your supply chain:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Pin npm package dependencies")," - Pin all npm package dependencies in the Snap's dependency tree\nto exact versions.\nIf you don't, a supply chain attacker can trick you into including a malicious version of a\npackage instead of the original, legitimate one.\nYou can quickly check the status of your dependencies by running ",(0,r.yg)("inlineCode",{parentName:"p"},"npm audit")," in your Snap directory.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Secure your stack")," - Your Snap companion dapp and any remote servers are part of your security model.\nWe recommend using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/LavaMoat/LavaMoat"},"LavaMoat")," to secure relevant parts of\nyour stack and following security best practices for your dapp or server."))),(0,r.yg)("h2",{id:"publish-and-serve-your-snap"},"Publish and serve your Snap"),(0,r.yg)("p",null,"The following are guidelines for making your Snap available to users safely:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Snap updates")," - When serving a Snap from a dapp, make sure users are getting the latest version\nof your Snap.\nDo not allow any actions on the dapp before reconnecting it to MetaMask and loading a new or\nupdated version of the Snap.\nThis prevents users from using outdated versions of the Snap that may have potential bugs and\nsecurity issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Snap publication")," - Ensure correct publication of the Snap.\nOnly publish the ",(0,r.yg)("inlineCode",{parentName:"p"},"packages/snap")," folder, and not the entire GitHub repository for a project.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Other wallet extensions")," - Be aware that if the user has other wallet browser extensions\ninstalled, a call to the MetaMask provider ",(0,r.yg)("inlineCode",{parentName:"p"},"window.ethereum")," can be overridden.\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/discussions/2001"},"Connect to Snaps using EIP-6963")," to reliably\naccess the MetaMask provider."))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In general, when developing Snaps, put yourself in the user's shoes and consider how they use MetaMask.\nAlways prioritize their privacy and the security of their assets."),(0,r.yg)("p",null,"If you have any questions or a security best practice not listed here, post it in the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/discussions"},"Snaps GitHub discussions"),"."))}u.isMDXComponent=!0},26157:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/copyable-example-1-19ebcec288d171780516abf6c11460c2.png"},94390:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/copyable-example-2-619a18d7220bdfd794ad81f1c8f9d4ea.png"}}]);