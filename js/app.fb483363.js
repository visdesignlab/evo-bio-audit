!function(e){function t(t){for(var r,i,c=t[0],l=t[1],p=t[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var u=l;a.push([139,1]),n()}({139:function(e,t,n){"use strict";n.r(t);n(17);var r=n(4);const o=n(77);function a(e,t,n){t.append("h3").text(n),r.a(e).then(e=>{e.forEach(e=>{let n=new o(e).format("bibliography",{format:"html",template:"apa",lang:"en-US"});t.append("div").classed("citation",!0).html(n)})})}function i(){r.b("#main").selectAll("*").remove();let e=r.b("#main").append("div").classed("citation-wrap",!0),t=r.b("#main").append("div").classed("citation-wrap",!0),n=r.b("#main").append("div").classed("citation-wrap",!0);a("public/data/domain-citations.json",e,"Domain References"),a("public/data/process-citations.json",t,"Process References"),a("public/data/related-citations.json",n,"Related Work")}function c(){r.b("#main").selectAll("*").remove(),r.b("#main").append("h3").text("BACKGROUND AND MOTIVATION")}function l(e,t,n){e.append("button").text(t).classed("btn btn--stripe",!0).on("click",()=>n())}!function(){let e=r.b("#header").append("div").classed("button-wrap",!0);r.b("#header").select("h1").on("click",()=>c()),l(e,"Timeline",i),l(e,"References",i)}(),c()},17:function(e,t,n){}});
//# sourceMappingURL=app.fb483363.js.map