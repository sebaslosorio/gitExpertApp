(this["webpackJsonpgif-experct-app"]=this["webpackJsonpgif-experct-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],j=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&j(""),e((function(t){return[c].concat(Object(s.a)(t))}))},children:Object(u.jsx)("input",{onChange:function(t){j(t.target.value)},type:"text",value:c})})},o=n(6),d=n.n(o),l=n(8),f=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=uIU5z1K6juO9JOAwcvw3cJMg6SCgZ0wn"),t.next=3,fetch(n);case 3:if((a=t.sent).status){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,a.json();case 8:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInLeft",children:[Object(u.jsx)("img",{className:"card-img",src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},b=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}),3e3)})),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeInLeft",children:e}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(p,{img:t,title:t.title,url:t.url},t.id)}))})]})};function m(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(b,{category:t},t)}))})]})}n(16);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.06e4675a.chunk.js.map