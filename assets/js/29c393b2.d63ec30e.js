"use strict";(self.webpackChunkict=self.webpackChunkict||[]).push([[192],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],s={title:"Formatvorlagen",description:"Was sind Formatvorlagen? Wie funktionieren sie?",apps:["Microsoft Word","LibreOffice Writer"],sort:2},o=void 0,u={unversionedId:"allgemein/formatvorlagen/README",id:"allgemein/formatvorlagen/README",title:"Formatvorlagen",description:"Was sind Formatvorlagen? Wie funktionieren sie?",source:"@site/docs/textverarbeitung/allgemein/formatvorlagen/README.md",sourceDirName:"allgemein/formatvorlagen",slug:"/allgemein/formatvorlagen/",permalink:"/textverarbeitung/allgemein/formatvorlagen/",draft:!1,tags:[],version:"current",lastUpdatedAt:1654776466,formattedLastUpdatedAt:"9.6.2022",frontMatter:{title:"Formatvorlagen",description:"Was sind Formatvorlagen? Wie funktionieren sie?",apps:["Microsoft Word","LibreOffice Writer"],sort:2},sidebar:"tutorialSidebar",previous:{title:"Absatz- vs. Zeilenwechsel",permalink:"/textverarbeitung/allgemein/absatz-vs-zeilenwechsel/"},next:{title:"Word Basis",permalink:"/textverarbeitung/word-1/"}},c={},f=[{value:"Textstruktur",id:"textstruktur",level:2},{value:"Formatvorlagen",id:"formatvorlagen",level:2},{value:"Stufe \xabZeichen\xbb",id:"stufe-zeichen",level:2},{value:"Stufe \xabAbsatz\xbb",id:"stufe-absatz",level:2},{value:"Weitere Formatvorlagen",id:"weitere-formatvorlagen",level:2}],d={toc:f};function m(e){var t=e.components,s=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"textstruktur"},"Textstruktur"),(0,a.kt)("p",null,"Eine gute Struktur eines Textdokumentes dient nicht nur der besseren Lesbarkeit."),(0,a.kt)("p",null,"\xdcberschriften werden normalerweise gr\xf6sser dargestellt als der restliche Text. Dadurch f\xe4llt es dem Betrachter leichter, die Struktur eines Textes zu erkennen: Der Beginn eines Kapitels sticht hervor, ein Abschnitt wird eindeutig als Unterkapitel identifiziert."),(0,a.kt)("p",null,"Die Software hingegen erkennt eine \xdcberschrift nicht an Hand ihrer Darstellung. Umgekehrt allerdings kann die Software eine \xdcberschrift entsprechend als solche darstellen."),(0,a.kt)("p",null,"Deshalb empfiehlt es sich, ein Dokument zu strukturieren, indem man \xdcberschriften als solche auszeichnet und sie nicht einfach fett und gr\xf6sser formatiert. Dasselbe gilt f\xfcr weitere Textelemente wie Abs\xe4tze, Fussnoten, ..."),(0,a.kt)("p",null,"Die Textverarbeitungssoftware kann dann in der sogenannten ",(0,a.kt)("em",{parentName:"p"},"Formatvorlage")," nachschauen gehen, wie eine \xdcberschrift formatiert wird. F\xfcgt man nun eine weitere \xdcberschrift hinzu, hat diese bereits die korrekte Darstellung. Zudem kann man an einem zentralen Ort die Darstellung s\xe4mtlicher \xdcberschriften anpassen."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27616).Z,width:"1603",height:"962"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Durch diese Textstruktur er\xf6ffnen sich weitere M\xf6glichkeiten"),(0,a.kt)("p",null,"Inhaltsverzeichnis\n: Die Textverarbeitungssoftware kann ein automatisches Inhaltsverzeichnis erstellen, indem sie alle Stellen, die mit der Formatvorlage \xab\xdcberschrift\xbb gekennzeichnet sind, als Kapitel\xfcberschrift ins Inhaltsverzeichnis kopiert und evtl. zus\xe4tzlich die Seitenzahl daneben schreibt."),(0,a.kt)("p",null,"Screenreader\n: Dieser liest Dokumente vor (z.B. f\xfcr Blinde, Sehbehinderte, aber auch Leute, die nicht lesen k\xf6nnen oder wollen). Der Screenreader kann nun die zus\xe4tzlichen Informationen wiedergeben, indem er sagt: \xabTitel: Die Ziege im Garten \u2013 Untertitel: eine Geschichte von Hansjakob Bauer \u2013 Erstes Kapitel: Graue Gans \u2013 Die Ziege lebte\u2026\xbb"),(0,a.kt)("h2",{id:"formatvorlagen"},"Formatvorlagen"),(0,a.kt)("p",null,"Formatvorlagen geben dem Dokument eine Struktur: Durch Kennzeichnen von \xdcberschriften k\xf6nnen Kapitel erstellt werden und Abs\xe4tze strukturieren den Text. Daneben werden Formatvorlagen aber auch verwendet, um das Aussehen des Dokumentes zu gestalten. Wir unterscheiden Formatvorlagen auf zwei Stufen:"),(0,a.kt)("h2",{id:"stufe-zeichen"},"Stufe \xabZeichen\xbb"),(0,a.kt)("p",null,"Hier k\xf6nnen alle Einstellungen, die f\xfcr einzelne Zeichen gelten, gesetzt werden. Also etwa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schriftart, -gr\xf6sse, -farbe"),(0,a.kt)("li",{parentName:"ul"},"Schriftvariante (kursiv, fett)"),(0,a.kt)("li",{parentName:"ul"},"Dekoration (unterstrichen, durchgestrichen)"),(0,a.kt)("li",{parentName:"ul"},"Zeichenfarbe"),(0,a.kt)("li",{parentName:"ul"},"\u2026")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formate Stufe Zeichen",src:n(57554).Z,width:"380",height:"380"})),(0,a.kt)("h2",{id:"stufe-absatz"},"Stufe \xabAbsatz\xbb"),(0,a.kt)("p",null,"Hier werden alle Einstellungen, die f\xfcr ganze Abs\xe4tze gelten, gesetzt. Also etwa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Einzug links/rechts"),(0,a.kt)("li",{parentName:"ul"},"Abstand vor oder nach Absatz"),(0,a.kt)("li",{parentName:"ul"},"Zeilenabstand"),(0,a.kt)("li",{parentName:"ul"},"Ausrichtung (links, rechts, zentriert, block)"),(0,a.kt)("li",{parentName:"ul"},"Schriftfarbe"),(0,a.kt)("li",{parentName:"ul"},"Rahmen"),(0,a.kt)("li",{parentName:"ul"},"\u2026")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formate Stufe Absatz",src:n(29209).Z,width:"380",height:"380"})),(0,a.kt)("p",null,"H\xe4ufig setzt man in den Formatvorlagen auf Stufe \xabAbsatz\xbb gleich auch die Einstellungen f\xfcr einzelne Zeichen. Diese Einstellungen k\xf6nnten aber im Text \u2013 durch Anwenden einer Formatvorlage der Stufe \xabZeichen\xbb \u2013 f\xfcr einzelne Buchstaben/W\xf6rter \xfcberschrieben werden (z.B. zum Hervorheben eines wichtigen Begriffs)."),(0,a.kt)("h2",{id:"weitere-formatvorlagen"},"Weitere Formatvorlagen"),(0,a.kt)("p",null,"Je nach Textverarbeitungsprogramm existieren weitere Formatvorlagen f\xfcr andere Elemente des Dokumentes, z.B. f\xfcr Listen oder Tabellen."))}m.isMDXComponent=!0},29209:function(e,t,n){t.Z=n.p+"assets/images/format-stufe-absatz-768b5c7b7ddff57915cc1d71eaa36bf9.png"},57554:function(e,t,n){t.Z=n.p+"assets/images/format-stufe-zeichen-984d95adc555c2684469dbaee809712f.png"},27616:function(e,t,n){t.Z=n.p+"assets/images/textstruktur-4907afafacb40cfa82ff5d3f1e53b55d.png"}}]);