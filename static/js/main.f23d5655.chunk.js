(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),r=c.n(s),a=(c(12),c(7)),o=c(4),j=c(0),h=function(e){var t=e.movies,c=e.handleFavouritesClick,n=e.favouriteComponent;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("span",{children:e.vote_average})]}),Object(j.jsx)("div",{onClick:function(){return c(e)},children:Object(j.jsx)(n,{})})]})}))})},u=function(){return Object(j.jsx)("button",{className:"fav_btn",children:"add favourites"})},b=function(){return Object(j.jsx)("button",{className:"fav_btn",children:"remove favourites"})},l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Favourites"}),Object(j.jsx)("hr",{style:{color:"white",height:5}})]})},d=(c(14),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),d=r[0],v=r[1],f=Object(n.useState)([]),O=Object(o.a)(f,2),m=O[0],p=O[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=93a9e0753db51ee50c523885574fb580&page=1").then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]);return 0===c.length?Object(j.jsx)("h1",{children:"no data found"}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=93a9e0753db51ee50c523885574fb580&query="+d).then((function(e){return e.json()})).then((function(e){i(e.results)}))},children:[Object(j.jsx)("input",{className:"search",type:"text",onChange:function(e){v(e.target.value)},placeholder:"search...",value:d}),Object(j.jsx)("button",{className:"search_btn",type:"submit",children:"search"})]})}),Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"movie-container",children:Object(j.jsx)(h,{movies:m,handleFavouritesClick:function(e){var t=m.filter((function(t){return t.id!==e.id}));p(t)},favouriteComponent:b})}),Object(j.jsx)("div",{children:Object(j.jsx)("hr",{style:{color:"white",height:5}})}),Object(j.jsxs)("div",{className:"movie-container",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Movies"})}),Object(j.jsx)(h,{movies:c,handleFavouritesClick:function(e){var t=[].concat(Object(a.a)(m),[e]);p(t)},favouriteComponent:u})]})]})});r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f23d5655.chunk.js.map