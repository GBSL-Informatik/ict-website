"use strict";(self.webpackChunkict=self.webpackChunkict||[]).push([[9929],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35414:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],o={description:"Eine Zelle kann unterschiedliche Arten von Werten enthalten. In der Informatik spricht man dabei von <strong>Datentypen</strong>",apps:["Microsoft Excel","LibreOffice Calc"],sidebar_position:2,sidebar_custom_props:{icon:"mdi-percent",source:"gym-kirchenfeld",path:"/docs/tabellenkalkulation/allgemein/zellinhalt/README.md"},draft:!1},p="Datentypen",d={unversionedId:"tabellenkalkulation/allgemein/zellinhalt/README",id:"tabellenkalkulation/allgemein/zellinhalt/README",title:"Datentypen",description:"Eine Zelle kann unterschiedliche Arten von Werten enthalten. In der Informatik spricht man dabei von <strong>Datentypen</strong>",source:"@site/docs/tabellenkalkulation/allgemein/zellinhalt/README.md",sourceDirName:"tabellenkalkulation/allgemein/zellinhalt",slug:"/tabellenkalkulation/allgemein/zellinhalt/",permalink:"/tabellenkalkulation/allgemein/zellinhalt/",draft:!1,editUrl:"https://github.com/gbsl-informatik/ict-website/edit/main/docs/tabellenkalkulation/allgemein/zellinhalt/README.md",tags:[],version:"current",lastUpdatedAt:1693300213,formattedLastUpdatedAt:"29. Aug. 2023",sidebarPosition:2,frontMatter:{description:"Eine Zelle kann unterschiedliche Arten von Werten enthalten. In der Informatik spricht man dabei von <strong>Datentypen</strong>",apps:["Microsoft Excel","LibreOffice Calc"],sidebar_position:2,sidebar_custom_props:{icon:"mdi-percent",source:"gym-kirchenfeld",path:"/docs/tabellenkalkulation/allgemein/zellinhalt/README.md"},draft:!1},sidebar:"sidebar",previous:{title:"Arbeitsmappe",permalink:"/tabellenkalkulation/allgemein/arbeitsmappe/"},next:{title:"Datum und Zeit",permalink:"/tabellenkalkulation/allgemein/datum-zeit/"}},u={},s=[{value:"Zuordnung des Datentyps bei der Eingabe",id:"zuordnung-des-datentyps-bei-der-eingabe",level:2},{value:"Datentyp Text erzwingen",id:"datentyp-text-erzwingen",level:2}],m={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datentypen"},"Datentypen"),(0,i.kt)("p",null,"Eine Zelle kann drei unterschiedliche Arten von Werten enthalten:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zahlen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Formeln"))),(0,i.kt)("p",null,"Dieser Unterschied ist zentral, da die Tabellenkalkulation nur mit Zahlen rechnen kann. Wird in einer Formel eine Zelle verwendet, die einen Text enth\xe4lt, so kann kein Wert berechnet werden. Ausserdem werden Zahlen und Texte anders sortiert."),(0,i.kt)("p",null,"Die Unterscheidung zwischen Text und Zahl ist jedoch nicht trivial. Beispielsweise k\xf6nnen ",(0,i.kt)("inlineCode",{parentName:"p"},"42")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," entweder Zahl oder als Text behandelt werden. Beim Sortieren von Zahlen steht ",(0,i.kt)("inlineCode",{parentName:"p"},"42")," vor ",(0,i.kt)("inlineCode",{parentName:"p"},"123"),", beim Sortieren von Text jedoch ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," vor ",(0,i.kt)("inlineCode",{parentName:"p"},"42"),"."),(0,i.kt)("p",null,"Dies ist ein Beispiel f\xfcr ",(0,i.kt)("strong",{parentName:"p"},"Datentypen"),", ein grundlegendes Konzept in der Informatik. Dabei geh\xf6rt zu jedem Wert ein ",(0,i.kt)("strong",{parentName:"p"},"Typ"),", welcher gewisse Eigenschaften des Werts festlegt."),(0,i.kt)("h2",{id:"zuordnung-des-datentyps-bei-der-eingabe"},"Zuordnung des Datentyps bei der Eingabe"),(0,i.kt)("p",null,"Normalerweise wird den folgenden Eingaben automatisch der Typ ",(0,i.kt)("em",{parentName:"p"},"Zahl")," zugeordnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zahlen: ",(0,i.kt)("inlineCode",{parentName:"li"},"42"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3.14159"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-1e6")),(0,i.kt)("li",{parentName:"ul"},"Prozentwerten: ",(0,i.kt)("inlineCode",{parentName:"li"},"39%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-150%")),(0,i.kt)("li",{parentName:"ul"},"Daten: ",(0,i.kt)("inlineCode",{parentName:"li"},"1.1.2018"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"29.02.2000")),(0,i.kt)("li",{parentName:"ul"},"Zeiten: ",(0,i.kt)("inlineCode",{parentName:"li"},"12:15"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"In Excel sind nur Daten ab dem 1.1.1900 g\xfcltig.")),(0,i.kt)("p",null,"Allen anderen Eingaben wird automatisch der Typ ",(0,i.kt)("em",{parentName:"p"},"Text")," zugeordnet, insbesondere auch ung\xfcltigen Daten wie ",(0,i.kt)("inlineCode",{parentName:"p"},"31.01.2001")," oder bei der Verwendung eines falschen Dezimaltrennzeichens (z.B. Komma statt Punkt in der Schweiz)."),(0,i.kt)("h2",{id:"datentyp-text-erzwingen"},"Datentyp Text erzwingen"),(0,i.kt)("p",null,"Um den Datentyp ",(0,i.kt)("em",{parentName:"p"},"Text")," zu erzwingen, kann dem Wert ein Apostroph  ",(0,i.kt)("kbd",{parentName:"p"},"'")," vorangestellt werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'42\n'1.1.2018\n")),(0,i.kt)("admonition",{title:"Grundlegendes Konzept",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Daten wird ein ",(0,i.kt)("strong",{parentName:"p"},"Typ")," zugeordnet, um festzulegen, welche ",(0,i.kt)("strong",{parentName:"p"},"Operationen")," mit den Daten m\xf6glich sind und wie sich die Daten ",(0,i.kt)("strong",{parentName:"p"},"verhalten"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Beispiele")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Zahlen und Text als Zellinhalt in Tabellenkalkulationsprogrammen"),(0,i.kt)("li",{parentName:"ul"},"Dateitypen (XLSX-Dateien, PDF-Dateien, ...)"),(0,i.kt)("li",{parentName:"ul"},"Datentypen in Programmiersprachen"))))}c.isMDXComponent=!0}}]);