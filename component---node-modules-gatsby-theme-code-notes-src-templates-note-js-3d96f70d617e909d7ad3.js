(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),a=n("2OiF"),c=n("y3w9"),i=n("0/R4"),u=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,s=u((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),p=!u((function(){f((function(){}))}));r(r.S+r.F*(s||p),"Reflect",{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(p&&!s)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,m=o(i(u)?u:Object.prototype),y=Function.apply.call(e,m,t);return i(y)?y:m}})},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),a=n("vhPU"),c=/"/g,i=function(e,t,n,r){var o=String(a(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Ubkt:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return m}));n("tUrg");var r=n("A2+M"),o=n("q1tI"),a=n.n(o),c=n("izhR"),i=n("voR5"),u=function(e){var t=e.items;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement(l,{key:e.url+"-item",item:e})})))},l=function(e){var t=e.item;return a.a.createElement("li",null,a.a.createElement(c.j,{href:t.url},t.title),t.items&&t.items.length&&a.a.createElement(u,{key:t.url+"-list",items:t.items}))},f=function(e){var t=e.toc;return t.items?a.a.createElement(c.b,{as:"details",sx:{my:4}},a.a.createElement("summary",null,"Table of contents"),a.a.createElement(u,{items:t.items,key:"toc-list"})):null},s=(n("lazi"),n("Gr+A")),p=n("46ic"),m=(t.default=function(e){var t=e.data,n=e.pageContext,o=e.location;if(!t)return null;var u=t.mdx,l=u.frontmatter,m=l.title,y=l.tags,b=l.emoji,h=l.link,d=u.fields.dateModified,v=u.body,g=u.parent.relativePath,O=u.tableOfContents,E=Object(i.a)().gitRepoContentPath,w=!(!h&&!d);return a.a.createElement(s.a,{hasUntagged:n.hasUntagged,basePath:n.basePath,path:o.pathname,title:m},a.a.createElement("article",null,a.a.createElement(c.b,{as:"header",mb:4},b&&a.a.createElement(c.b,{sx:{fontSize:7,lineHeight:1,mb:3}},a.a.createElement("span",{role:"img"},b)),a.a.createElement(c.f,{as:"h1",variant:"noteTitle"},m),w&&a.a.createElement(c.e,{sx:{mb:3}},h&&a.a.createElement(c.j,{href:h,sx:{mr:3,fontFamily:"monospace",fontSize:0}},h),!1),y&&a.a.createElement(c.e,null,a.a.createElement(p.a,{tags:y}))),a.a.createElement(f,{toc:O}),a.a.createElement(r.MDXRenderer,null,v),a.a.createElement(c.b,{sx:{mt:6,pt:4,borderTop:"2px solid",borderTopColor:"background"}},E&&a.a.createElement(c.j,{href:""+E+g},"Edit this page"))))},"3473246744")},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=n("q1tI"),p=n("7ljp"),m=p.useMDXComponents,y=p.mdx,b=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=m(n),u=b(t),f=s.useMemo((function(){if(!o)return null;var e=l({React:s,mdx:y},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,t]);return s.createElement(f,l({components:i},a))}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-code-notes-src-templates-note-js-3d96f70d617e909d7ad3.js.map