(this["webpackJsonp06-section"]=this["webpackJsonp06-section"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),i=(n(14),n(1)),l=n(2),o=function(e){var t=e.addCategory,n=Object(a.useState)(""),c=Object(l.a)(n,2),u=c[0],i=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t(u),i(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;i(t)}}))},m=function(e){var t=e.title,n=e.url;e.id;return r.a.createElement("div",{className:"card animate__animated animate__fadeInDown"},r.a.createElement("p",null,t),r.a.createElement("img",{src:n,alt:t}))},s=n(5),d=n.n(s),f=n(8),p=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=V5ohFHt1LT0lQHG1ITjrDGWzrBpSkvuR&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,e.abrupt("return",Object(i.a)(c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){setTimeout((function(){return c({data:Object(i.a)(e),loading:!1})}),3e3)})).catch((function(e){return console.log(e)}))}),[e]),r},g=function(e){var t=e.name,n=v(t),a=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),a&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},null===c||void 0===c?void 0:c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["One piece"]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Git Expert App"),r.a.createElement(o,{addCategory:function(e){return c([e].concat(Object(i.a)(n)))}}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(g,{name:e,key:e})})))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.46373d9b.chunk.js.map