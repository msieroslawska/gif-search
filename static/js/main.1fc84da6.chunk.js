(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),i=n.n(c),s=(n(34),n(13)),l=n(2),u=(n(35),n.p+"static/media/poweredByGiphy.89206ca8.gif"),h=n(6),j=n.n(h),d=n(11),p=n(8),o=n(12),f=n.n(o),b=(n(55),n(1)),m=function(e){var t=e.images;return void 0===t||t.length<1?null:Object(b.jsx)("div",{className:"Gallery",children:t.map((function(e){var t=e.id,n=e.src,r=e.title;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:n,alt:r}),Object(b.jsx)("p",{className:"Gallery-caption",children:r})]},t)}))})},x=function(){var e=a.a.useState(),t=Object(p.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"https://api.giphy.com/v1/gifs/trending",params:{api_key:"NUK3B8h1yZAUoY6B5WV2jlimmkx61Ugf",limit:10}},e.next=3,f()(t);case 3:n=e.sent,a=n.data.data.map((function(e){var t=e.id,n=e.images,r=e.title,a=e.url;return{id:t,src:n.fixed_height.url,title:r,url:a}})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){c()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"App-header",children:"Trending"}),Object(b.jsx)("button",{onClick:c,className:"App-refresh",children:"Refresh"}),Object(b.jsx)(m,{images:n})]})},g=function(){var e=a.a.useState(),t=Object(p.a)(e,2),n=t[0],r=t[1],c=a.a.useState(""),i=Object(p.a)(c,2),s=i[0],l=i[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"https://api.giphy.com/v1/gifs/search",params:{api_key:"NUK3B8h1yZAUoY6B5WV2jlimmkx61Ugf",limit:10,q:s}},e.next=3,f()(t);case 3:n=e.sent,a=n.data.data.map((function(e){var t=e.id,n=e.images,r=e.title,a=e.url;return{id:t,src:n.fixed_height.url,title:r,url:a}})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"App-header",children:"Search"}),Object(b.jsx)("input",{value:s,onChange:function(e){var t=e.currentTarget.value;l(t)}}),Object(b.jsx)("button",{onClick:u,className:"App-refresh",children:"Fetch"}),Object(b.jsx)(m,{images:n})]})},O=function(){return Object(b.jsx)(s.a,{basename:"/gif-search",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)(s.b,{to:"/",children:"Trending"})," | ",Object(b.jsx)(s.b,{to:"/search",children:"Search"})]}),Object(b.jsx)("header",{className:"App-header",children:"Giphy gallery"}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(l.a,{path:"/search",children:Object(b.jsx)(g,{})})]}),Object(b.jsx)("img",{src:u,alt:"Powered By Giphy"})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.1fc84da6.chunk.js.map