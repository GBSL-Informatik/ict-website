"use strict";(self.webpackChunkict=self.webpackChunkict||[]).push([[3723],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r,a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],p={tags:["vuepress","vuejs"],sidebar_custom_props:{source:"gym-kirchenfeld",path:"/docs/dokumentation/md-extensions.md"}},s="Markdown-Extensions",m={unversionedId:"dokumentation/md-extensions",id:"dokumentation/md-extensions",title:"Markdown-Extensions",description:"is-gui",source:"@site/docs/dokumentation/md-extensions.md",sourceDirName:"dokumentation",slug:"/dokumentation/md-extensions",permalink:"/dokumentation/md-extensions",draft:!1,editUrl:"https://github.com/gbsl-informatik/ict-website/edit/main/docs/dokumentation/md-extensions.md",tags:[{label:"vuepress",permalink:"/tags/vuepress"},{label:"vuejs",permalink:"/tags/vuejs"}],version:"current",lastUpdatedAt:1655487024,formattedLastUpdatedAt:"17.6.2022",frontMatter:{tags:["vuepress","vuejs"],sidebar_custom_props:{source:"gym-kirchenfeld",path:"/docs/dokumentation/md-extensions.md"}},sidebar:"dokumentation",previous:{title:"Markdown",permalink:"/dokumentation/markdown"}},d={},c=[{value:"is-gui",id:"is-gui",level:2},{value:"multimd-table",id:"multimd-table",level:2},{value:"implicit-figures",id:"implicit-figures",level:2},{value:"Icons (MDI)",id:"icons-mdi",level:2},{value:"deflist",id:"deflist",level:2},{value:"kbd",id:"kbd",level:2},{value:"decorate",id:"decorate",level:2}],u=(r="Figure",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:c};function g(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-extensions"},"Markdown-Extensions"),(0,o.kt)("h2",{id:"is-gui"},"is-gui"),(0,o.kt)("p",null,"im Tab ",(0,o.kt)("em",{parentName:"p"},"Einstellungen"),"\nW\xe4hle den Men\xfcpunkt ",(0,o.kt)("strong",{parentName:"p",className:"underline"},"Datei")," ",(0,o.kt)("span",{parentName:"p",className:"mdi-chevron-right mdi"})," ",(0,o.kt)("strong",{parentName:"p",className:"underline"},"\xd6ffnen")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"im Tab _Einstellungen_\nW\xe4hle den Men\xfcpunkt __Datei__ :mdi-chevron-right: __\xd6ffnen__\n")),(0,o.kt)("h2",{id:"multimd-table"},"multimd-table"),(0,o.kt)("p",null,"|             |          Grouping           | |\n| First Header | Second Header | Third Header |\n| :----------- | :-----------: | -----------: |\n| Content      |  ",(0,o.kt)("em",{parentName:"p"},"Long Cell"),"  |              |\n| Content      |   ",(0,o.kt)("strong",{parentName:"p"},"Cell"),"    |         Cell |"),(0,o.kt)("p",null,"New section   |     More      |         Data |\nAnd more      | With an escaped '","\\","|'       ||\n","[Prototype table]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"|             |          Grouping           ||\n| First Header | Second Header | Third Header |\n| ------------ | :-----------: | -----------: |\n| Content      |  *Long Cell*  |              |\n| Content      |   **Cell**    |         Cell |\n\nNew section   |     More      |         Data |\nAnd more      | With an escaped '\\\\|'       ||\n[Prototype table]\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdown-it-multimd-table"},"https://www.npmjs.com/package/markdown-it-multimd-table")),(0,o.kt)("h2",{id:"implicit-figures"},"implicit-figures"),(0,o.kt)(u,{mdxType:"Figure"},(0,o.kt)("img",{alt:"Stormtroopocat",src:n(77429).Z,width:"704",height:"676"}),(0,o.kt)("figcaption",{parentName:"Figure"},"Stormtroopocat")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Stormtroopocat](./images/stormtroopocat.jpg)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdown-it-implicit-figures"},"https://www.npmjs.com/package/markdown-it-implicit-figures")),(0,o.kt)("h2",{id:"icons-mdi"},"Icons (MDI)"),(0,o.kt)("span",{style:{fontSize:"3rem"}},":mdi-island: :mdi-soccer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"<span style={{fontSize: '3rem'}}>:mdi-island: :mdi-soccer:</span>\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdown-it-mdi"},"https://www.npmjs.com/package/markdown-it-mdi")),(0,o.kt)("h2",{id:"deflist"},"deflist"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},"Definition 1\n"),(0,o.kt)("dd",{parentName:"dl"},"Erkl\xe4rung 1a"),(0,o.kt)("dd",{parentName:"dl"},"Erkl\xe4rung 1b"),(0,o.kt)("dt",{parentName:"dl"},"Definition 2\n"),(0,o.kt)("dd",{parentName:"dl"},"Erkl\xe4rung 2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Definition 1\n: Erkl\xe4rung 1a\n: Erkl\xe4rung 1b\n\nDefinition 2\n: Erkl\xe4rung 2\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/markdown-it/markdown-it-deflist"},"https://github.com/markdown-it/markdown-it-deflist")),(0,o.kt)("h2",{id:"kbd"},"kbd"),(0,o.kt)("p",null,(0,o.kt)("kbd",{parentName:"p"},"Ctrl")," + ",(0,o.kt)("kbd",{parentName:"p"},"x")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[[Ctrl]] + [[x]]\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdown-it-kbd"},"https://www.npmjs.com/package/markdown-it-kbd")),(0,o.kt)("h2",{id:"decorate"},"decorate"),(0,o.kt)(u,{mdxType:"Figure"},(0,o.kt)("img",{alt:"Minion",src:n(70998).Z,width:"896",height:"896"}),(0,o.kt)("figcaption",{parentName:"Figure"},"Minion")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Minion](./images/minion.png)\x3c!-- {.small} --\x3e\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/markdown-it-decorate"},"https://github.com/rstacruz/markdown-it-decorate")))}g.isMDXComponent=!0},70998:function(e,t,n){t.Z=n.p+"assets/images/minion-c14c8d75537e6ac7332d324019cace03.png"},77429:function(e,t,n){t.Z=n.p+"assets/images/stormtroopocat-15a6c64031c7b2dad4d7b88a914a6333.jpg"}}]);