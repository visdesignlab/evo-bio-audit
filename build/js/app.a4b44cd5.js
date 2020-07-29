!function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],p=0,h=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);h.length;)h.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={0:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([137,1]),a()}({137:function(e,t,a){"use strict";a.r(t);a(7);var n=a(1);const i=a(77);function o(e,t,a){t.append("h2").text(a),n.b(e).then(e=>{e.forEach(e=>{let a=new i(e).format("bibliography",{format:"html",template:"apa",lang:"en-US"});t.append("div").classed("citation",!0).html(a)})})}function r(){n.g("#main").selectAll("*").remove();let e=n.g("#main").append("div").classed("citation-wrap",!0),t=n.g("#main").append("div").classed("citation-wrap",!0),a=n.g("#main").append("div").classed("citation-wrap",!0);o("public/data/domain-citations.json",e,"Domain References"),o("public/data/process-citations.json",t,"Process References"),o("public/data/related-citations.json",a,"Related Work")}function s(){n.g("#main").selectAll("*").remove(),function(){let e=l(n.g("#main"),"Domain Space","section");e.append("div").classed("text-block",!0).append("text").text("This project was a collaboration with researchers in the").append("a").attr("href","http://lukejharmon.github.io/").text(" Harmon Lab at the University of Idaho."),l(e,"Background","sub-section").append("div").classed("text-block",!0).append("text").text("Evolution is the process of change in a given trait or function spanning \n    generations. To better understand the evolutionary process, it is important to determine when a given trait or functionality evolved and whether is was a result \n    of ancestry, or another force. Evolutionary biologists use comparative methods to identify the potential underlying forces that are driving evolution in a given \n    sample of organisms. Tasks include measuring rates of evolution, comparing patterns across characters or clades, looking for characters that influence speciation, \n    and inferring adaption. \n     ").append("a").attr("href","https://docs.google.com/document/d/10RTCADqT9jAUqPXiK4QYDSqmpMUTrk2Y87A00swkjgQ/edit#").text("(Read about the background and abstraction.)");l(e,"Tasks and Requirements","sub-section");let t=l(n.g("#main"),"Functionlity","section");t.append("div").append("text").text("\n        We have documented our process and design rationale for our exploratory visual tool developed for evolutionary biologists at the Univeristy of Idaho.\n    ");let a=l(t,"Summary View","sub-section");a.append("h4").text("Discrete Summary");let i=document.createElement("img");a.node().appendChild(i),i.src="public/assets/discrete-summary-breakdown.jpg",a.select("img").style("width","1100px"),a.append("h4").text("Continuous Summary");let o=document.createElement("img");a.node().appendChild(o),o.src="public/assets/continuous-summary.png",n.g(o).style("width","1100px");let r=l(t,"Pair-Wise Trait Comparison","sub-section"),s=document.createElement("img");r.node().appendChild(s),s.src="public/assets/pair-diagram.jpg",l(t,"Path View","sub-section").append("text").text("Description of path View geos here")}()}function l(e,t,a){let n=e.append("div").classed(a,!0);return"section"===a?n.append("h1").text(t):n.append("h2").text(t),n}var c=a(141);const d=[null];async function p(e){n.g("#main").selectAll("*").remove();let t=n.g("#main").append("div").classed("label-wrap-div",!0),a=n.g("#main").append("svg").classed("timeline",!0),i=await n.a("public/data/timeline.csv"),o=n.i("%m/%d/%Y"),r=i.map(e=>{var t=e.Date_Range,a=(t=t.split("-"))[0]+"/"+t[1]+"/"+t[2];return e.date=new Date(a).getTime(),e}),s=["#e74c3c","#884ea0","#e67e22","#FF008B","#85c1e9","#FFC300","#28B463","#5D6D7E","#A3E4D7","#E74C3C","#9B59B6","#1D8348","#1A5276","#0B5345","#FAD7A0","#FAA0F5","#F0FF00","#2AFF00"],l=Array.from(new Set([...i.filter(e=>"phase"!=e.tag1&&"event"!=e.tag1)].map(e=>e.tag1))).map((e,t)=>({tag:e,color:s[t]})),d=Array.from(c.a(r.filter(e=>"phase"!=e.tag1&&"event"!=e.tag1),e=>o(e.date))),p=Array.from(c.a(r.filter(e=>"phase"===e.tag1||"event"===e.tag1),e=>e.Event)),g=(a.node().getBoundingClientRect().width,40*r.length+50);a.attr("height",g);let u=t.append("svg").append("g").attr("transform","translate(100, 10)").selectAll(".tag-label").data(l).join("g").classed("tag-label",!0);u.attr("transform",(e,t)=>`translate(${100*t}, 0)`),u.append("rect").attr("width",95).attr("height",20).attr("fill",e=>e.color).attr("opacity",.6),u.append("text").text(e=>e.tag).style("font-size",10).attr("y",12).attr("x",3),u.on("click",e=>{console.log("tag",e)});let v=n.f().domain([n.d(r.map(e=>e.date)),n.c(r.map(e=>e.date))]).range([0,g-100]).clamp(!0),m=n.e().domain([1,15]).range([3,10]),y=(a.selectAll("rect.visit").data(p.filter(e=>e[1].length>1)).join("rect").classed("visit",!0).attr("width",2e3).attr("height",e=>(console.log("d",v(new Date(e[1][1].Date_Range))-v(new Date(e[1][0].Date_Range))+50),v(new Date(e[1][1].Date_Range))-v(new Date(e[1][0].Date_Range))+20)).attr("y",e=>v(new Date(e[1][0].Date_Range))+10).attr("x",30).attr("fill","gray").attr("opacity",.1),a.selectAll("g.milestone").data(p).join("g").classed("milestone",!0));y.attr("transform",e=>`translate(0, ${v(new Date(e[1][0].Date_Range))+10})`),y.append("line").attr("y1",0).attr("y2",0).attr("x1",0).attr("x2",650).style("stroke-width","0.5px").style("stroke-dasharray","4").style("stroke","gray"),y.append("text").text(e=>e[0]).attr("x",654).attr("y",2).style("font-size","11px").attr("fill","gray");let b=a.append("g").classed("time-wrap",!0).attr("transform","translate(10, 20)"),w=(b.append("line").attr("y1",0).attr("y2",g-100).attr("x1",100).attr("x2",100).style("stroke-width","1px").style("stroke","gray"),b.selectAll("g.event").data(d).join("g").classed("event",!0).attr("transform",(e,t)=>`translate(100, ${v(e[1][0].date)})`)),x=(w.selectAll("circle").data(e=>[e]).join("circle").attr("r",e=>m(e[1].length)),w.selectAll(".event-sq").data(e=>e[1]).join("g").classed("event-sq",!0));x.attr("transform",(e,t)=>`translate(${13+12*t}, -5)`),x.append("rect").attr("width",10).attr("height",10).attr("fill",(e,t)=>l.filter(t=>t.tag===e.tag1)[0].color).attr("opacity",.6),x.filter(e=>"sketch"===e.tag1||"view"===e.tag1||"pivot"===e.tag1).append("rect").attr("width",10).attr("height",10).style("fill",(e,t)=>l.filter(t=>t.tag===e.tag1)[0].color).attr("opacity",.6);let A=n.g("body").append("div");A.attr("id","sidebox-wrap");let k=f(A.append("div").attr("id","side-button"),"Explore This",null);k.style("opacity","0");let T=A.append("div").attr("id","sidebox");x.on("click",(e,t,a)=>{n.g("#tooltip").style("opacity",0);T.selectAll("*").remove(),h(e.index_id,T,k)});w.selectAll("text.event-label").data(e=>[e]).join("text").classed("event-label",!0).text(e=>{let t="";return e[1].forEach((e,a,n)=>t=a===n.length-1?t.concat(e.Event):t.concat(e.Event+", ")),t}).attr("x",e=>11+13*e[1].length).attr("y",5).style("font-size","10px").attr("fill","#B2BABB"),w.selectAll("text.date").data(e=>[e]).join("text").classed("date",!0).text(e=>e[0]).attr("x",-13).attr("y",e=>3*e[1].length/2).style("text-anchor","end").style("font-size","10px").attr("fill","#5D6D7E");e&&h(e,T,k)}function h(e,t,a){a.style("opacity","1.0");let i=n.h(".event-sq").filter(t=>t.index_id===e).style("opacity",1);console.log(i,i.data());let o=i.data()[0];if(d[d.length-1]!=o.Date_Range+"_"+o.Event){d.push(o.Date_Range+"_"+o.Event);let i=n.h(".event-sq").filter(t=>t.index_id!=e).style("opacity",.2),r=[o.tag1,o.tag2,o.tag3].filter(e=>""!=e).toString();console.log("testing",e,t,a,r),t.append("h6").text(`${o.Event} ${o.date}`),t.append("h5").text(`Type: ${r}`),t.append("h5").text("Tags: ");let s=o.highlighted.split(",").filter(e=>" "!=e).concat(o["highlighted domain"].split(",").filter(e=>" "!=e)),l=t.append("div").selectAll(".badge").data(s).join("span").classed("badge badge-secondary",!0);l.text(e=>e),l.on("click",(e,t,a)=>{n.h(a).filter((e,a)=>a!=t).attr("class","badge badge-secondary"),n.g(a[t]).attr("class","badge badge-warning"),n.h(".event-sq.trace").style("opacity",.2),n.h(".event-sq.trace").selectAll("rect").style("fill",(e,t)=>tags.filter(t=>t.tag===e.tag1)[0].color),n.h(".event-sq.trace").classed("trace",!1);e.split(" ").flatMap(e=>{let t=i.filter(t=>{return t.highlighted.split(",").filter(e=>" "!=e).concat(t["highlighted domain"].split(",").filter(e=>" "!=e)).filter(t=>t.includes(e)).length>0});return t.classed("trace",!0),n.h(".event-sq.trace").style("opacity",1),n.h(".event-sq.trace").selectAll("rect").style("fill","red"),t})}),a.on("click",()=>{window.open(o.embed_link,"_blank")});let c=o.type;if("email/text"===c||"notes"===c||"pdf"===c)t.append("iframe").style("width","650px").attr("src",o.embed_link).attr("frameborder",0);else{t.style("overflow: auto;"),t.append("svg").style("width","650px").style("height","600px").append("svg:image").classed("sketch",!0).style("width","650px").attr("y",0).attr("x",0).attr("xlink:href",o.embed_link)}}else console.log("does this work"),a.style("opacity",0),n.h(".event-sq").style("opacity",1)}async function g(){console.log(u.split("/")),n.g("#main").selectAll("*").remove(),n.g("#main").append("div").classed("case-wrap",!0).append("html").html(u)}const u='\n<p><strong>Anoles</strong>, small active lizards native to the Americas and the Caribbean, have become a <strong>model system</strong> in both ecology and evolution. \nThese lizards have been studied intensively over the past 50 years, and serve as a canonical example of an <strong>adaptive radiation</strong>, where a diverse group of species, \nall occupying a wide range of ecological roles, can evolve. One of the main reasons that anoles are well-known in evolutionary circles is because different lineages of anoles have predictably \nand repeatedly evolved into a particular set of habitat specialist types, called <strong>ecomorphs</strong>. For example, one ecomorph of anoles, called grass-bush, includes species that are small and short-limbed, \nand prefer to hide on the fine tips of grass stalks and on the narrow branches of bushes. Species from the grass-bush ecomorph, highly specialized to this particular lifestyle, have evolved \nrepeatedly across the larger islands in the Caribbean. The anole ecomorphs represent a primary example of <strong>convergent evolution</strong>, where species, starting from distinct ancestors, evolve the same \nmorphology. The complicated mixture of divergence during adaptive radiation and predictable convergence to certain ecomorphs has made anoles a textbook example of <strong>macroevolutionary processes.</strong></P>\n\n<p>Untangling the complex interplay of divergence and convergence during adaptive radiation has proven challenging. Most insights come from combining data on species’ traits with information from \nphylogenetic trees, which show the branching patterns of common ancestry and relatedness among species. For example, divergence can be identified when close relatives are more different in their \ntraits than one might expect. Likewise, convergence is seen when species have highly different ancestors but share key similarities in the present day. The MultiNet tool provides an ideal \nframework for visualizing patterns of evolution using these data, and for identifying cases of exceptional evolution.</p>\n\n<p>One primary challenge in the early stages of a phylogenetic analysis of trait evolution is <strong>detecting outliers</strong>. These could represent errors in data entry, in matching species between the tree \nand trait matrix, or simply species that have exceptionally unusual traits. The MultiNet summary view provides an ideal way to detect such outliers. For example, by looking at the summary view \nof snout-vent length (SVL: a measure of body size), we can see that Anolis equestris is exceptionally large. This is in line with our expectations, as A. equestris is a member of the Crown \nGiant ecomorphs, a group of particularly large bodied anoles that also exhibit outlying body size measurements (Figure 1A & 1B).</p>\n\n<img src="public/assets/figure-1-case.png">\n<div class="figure-blurb">\nFigure 1. Visualization of trait distribution and evolutionary trajectories using Trevo. A. Distribution of body size across contemporary species of Anolis lizards using the Summary View. \nSeveral outlying species of exceptionally large anoles are brushed in red. B. One species of exceptionally large anoles, A. equestris, which is in the uppermost tail of the body size \ndistribution shown in A, is highlighted on the phylogeny. C. Path view for A. equestris. On the top, Circles represent internal nodes of the phylogeny along the path of A. equestris \nfrom the root node to the leaf node, with size proportional to the number of other species sharing that node. The box to the left summarizes the trajectory of paths for each trait. \nIndividual paths for snout-vent-length (SVL), a commonly used measure of body size, and limb length are plotted. As above, each bar corresponds to an internal node, with the height of the bar corresponding to the value of the measurement. As the values at internal nodes are obtained with uncertainty, the span along the Y-axis for each bar is proportional to the extent of uncertainty of measurement. Boxes on the right illustrate the overall trend observed for each path. \n</div>\n\n<p>Once we have a dataset with species traits and phylogenetic relationships, the MultiNet path view allows visualization of the evolutionary trajectories reconstructed for species from the past to \nthe present day. This is critical in understanding how species came to have the traits that they show today. In particular, one can easily visualize and differentiate between species who have \ntraits that are inherited unchanging from their deep ancestors (‘conservatism’) from species whose traits have evolved and diverged into their current form. Using A. equestris as an example again, \nthe path view reveals that whereas body size (SVL) has steadily increased throughout the species’ evolutionary trajectory, limb length (PC1_limbs) exhibits relative stasis (Figure 2).</p>\n\n<img src="public/assets/figure-2-case.png">\n<div class="figure-blurb">\nFigure 2. Pattern view of instances of convergence and divergence in Anolis lizards. A. Pattern view of well documented convergence among two members \n(A. insolatus & A. paternus) of the twig ecomorph. B. Pattern view of divergence between members of two distinct ecomorphs, a crown giant (A. garmani) \nand a twig anole (A. valencienni). C. A newly discovered case of convergence in tail length between mainland anolis lizards (A. petersii and A. frenatus). \n</div>\n\n<p>Finally, the Trevo pattern view provides a novel way to visualize patterns of convergence and divergence among species pairs. In particular, \nthis view has a set of tools that quickly isolate and visualize the most convergent or divergent pairs of species in a phylogenetic tree. \nWe used this approach to 1) confirm hypothesized instances of convergent and divergent trait evolution in island Anolis lizards, and 2) identify a \nheretofore undescribed convergent species pair in the relatively understudied Anolis lizards of South and Central America.</p>\n\n<p>To demonstrate the capacity of Trevo to identify known cases of convergence and divergence, we first focused our study on the ecomorphs of the Greater \nAntilles. For instance, twig anoles have slender bodies, shortened limbs and tails, and widened toe pads, all of which are adaptations to facilitate traversal \nalong narrow twigs at the ends of branches. Twig anoles anoles are classic examples of convergent evolution, and the path view demonstrates this clearly; A. \ninsolatus and A. paternus, both twig anoles, diverged in toepad width and tail length for much of their evolutionary trajectories, but now exhibit an \nexceptional degree of convergence (Figure 2A). In contrast, that path view demonstrates how A. garmani (a crown giant), and A. valencienni (a twig anole) \nhave diverged extensively in traits such as body size, toe pad width, and tail length (Figure 2B). Previously, we would have been able to identify putatively \nconvergent (or divergent) species pairs by, for instance, comparing observed trait similarity among species to that expected under an assumed model of trait \nevolution. However, given that the path view is novel to Trevo, we would have been unable to generate such a visualization of convergence and divergence in \ntrait values using other commonly used software for the phylogenetic analysis of trait evolution. </p>\n\n<p>Having demonstrated that Trevo can identify and visualize known instances of trait convergence and divergence, \nwe subsequently sought to redirect our attention to the relatively understudied mainland species of Anolis. \nBy repeating the analysis described above, but focusing on mainland species exclusively, we were able to identify a pair of species exhibiting a strong \npattern of morphological convergence, specifically with respect to tail length (Figure 2C). These two species, A. petersii and A. frenatus last share a \ncommon ancestor more than 50 million years ago, yet despite their long and distinct evolutionary histories, use of the pattern view reveals that each \nspecies independently evolved from intermediate length tails, to particularly long tails. This finding leads us to question what evolutionary force led \nto this pattern of convergence, and demonstrates the utility of Trevo to conduct exploratory analysis, and to identify future research opportunities. </p>\n\n\n';function f(e,t,a){return e.append("button").text(t).classed("btn btn--stripe",!0).on("click",()=>null!=a?a():console.log("null"))}!function(){let e=n.g("#header").append("div").classed("button-wrap",!0);n.g("#header").select("h1").on("click",()=>s()),f(e,"Timeline",p),f(e,"Case Study",g),f(e,"References",r)}();n.g("#tooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("position","absolute");let v=new URL(document.location).searchParams,m=v.get("id");console.log("params",v),m?p(m):s()},7:function(e,t,a){}});
//# sourceMappingURL=app.a4b44cd5.js.map