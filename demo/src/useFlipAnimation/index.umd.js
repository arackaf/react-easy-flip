!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.reactEasyFlip={},t.react)}(this,function(t,e){t.useFlipAnimation=function(t){var n=t.root,r=t.opts,i=t.deps,o=e.useRef({refs:Object.create(null)}),a=r.transition||500,u=r.delay||0,f=r.easing||"ease";e.useEffect(function(){if(n.current){var t=n.current,e=function(t){o.current.refs[t.target.dataset.id]=t.target.getBoundingClientRect(),t.target.inFlight=!1};return t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}}},[n,i]),e.useEffect(function(){var t,e,r=(t=function(){if(n.current)for(var t=0,e=n.current.children;t<e.length;t+=1){var r=e[t];o.current.refs[r.dataset.id]=r.getBoundingClientRect()}},function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];clearTimeout(e),e=setTimeout(function(){return t.apply(void 0,n)})});return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}},[n]),e.useLayoutEffect(function(){if(n.current){var t=n.current.children;if(!(t.length<1)){var e=Object.assign({},o.current.refs);requestAnimationFrame(function(){for(var n=function(){var t,n=i[r],o=n.dataset.id;if(o in e){var s=e[o],c=s.left,d=s.top,l=n.getBoundingClientRect().left,g=n.getBoundingClientRect().top;(t=n,function(e){t.style.transform="translate("+e.dx+"px, "+e.dy+"px)",t.style.transition="transform 0s"})({dx:c-l,dy:d-g}),requestAnimationFrame(function(){return(t=n).style.transform="",t.style.transition="transform "+a+"ms "+f+" "+u+"ms",void(t.inFlight=!0);var t})}},r=0,i=t;r<i.length;r+=1)n()});for(var r=0,i=t;r<i.length;r+=1){var s=i[r];s.inFlight||(o.current.refs[s.dataset.id]=s.getBoundingClientRect())}}}},[i,a,u,f,n])}});
//# sourceMappingURL=index.umd.js.map
