(this.webpackJsonpreactcrashcourse=this.webpackJsonpreactcrashcourse||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),i=n(2),o=n(8),u=n(3),s=n(6),d={title:"",body:"",id:null};var m=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),l=Object(a.useState)(d),o=Object(u.a)(l,2),m=o[0],p=o[1],f=function(e){p(Object(i.a)(Object(i.a)({},m),{},Object(s.a)({},e.target.name,e.target.value)))},b=Object(a.useRef)(!1);return Object(a.useEffect)((function(){p(Object(i.a)(Object(i.a)({},m),{},{title:e.data.title,body:e.data.body,id:e.data.id})),b.current?(t.current.style.display="none",n.current.style.display="inline",c.current.style.display="inline"):b.current=!0}),[e.data]),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Add Title",value:m.title,onChange:f}),r.a.createElement("label",null,"Title")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"text",name:"body",placeholder:"Add body",value:m.body,onChange:f}),r.a.createElement("label",null,"body")),r.a.createElement("button",{style:{display:"inline",marginRight:"1rem"},ref:t,onClick:function(){e.addItem(m),p(d)},className:"add-btn btn green darken-1"},"Add Blog"),r.a.createElement("button",{style:{display:"none",marginRight:"1rem"},ref:n,onClick:function(){e.updateItem(m),p(d),t.current.style.display="inline",n.current.style.display="none",c.current.style.display="none"},className:"update-btn btn  lime darken-1"},"Update Blog"),r.a.createElement("button",{style:{display:"none",marginRight:"1rem"},ref:c,onClick:function(){e.deleteItem(m.id),p(d),t.current.style.display="inline",n.current.style.display="none",c.current.style.display="none"},className:"delete-btn btn  blue-grey darken-4"},"Delete Blog"))};var p=function(e){var t={title:e.item.title,body:e.item.body,id:e.item.id};return r.a.createElement("li",{className:"collection-item"},r.a.createElement("strong",null,e.item.title,r.a.createElement("a",{href:"google.com",className:"secondary-body"},r.a.createElement("i",{className:"edit-item fa fa-pencil",onClick:function(n){n.preventDefault(),e.onEditItem(t)}}))),r.a.createElement("br",null),r.a.createElement("p",null,e.item.body))};var f=function(e){return r.a.createElement("ul",null,e.state.length>0?r.a.createElement(r.a.Fragment,null,e.state.map((function(t){return r.a.createElement(p,{key:t.id,item:t,onEditItem:e.onEditItem})}))):r.a.createElement("li",null,"Log not found"))},b=n(1),y=n.n(b),h=n(5),E=function(){var e=Object(h.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(y.a.mark((function e(t,n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(h.a)(y.a.mark((function e(t,n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",headers:{"Content-type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,c=[],l=1;l<=Math.ceil(n/t);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{onClick:function(){return a(e)},href:"!#"},e))}))))};var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({title:"",body:"",id:null}),s=Object(u.a)(l,2),d=s[0],p=s[1],b=Object(a.useState)(1),y=Object(u.a)(b,2),h=y[0],k=y[1],x=Object(a.useState)(5),N=Object(u.a)(x,1)[0],w=h*N,C=w-N,I=n.slice(C,w);return Object(a.useEffect)((function(){E("https://jsonplaceholder.typicode.com/posts").then((function(e){c(e.sort((function(e,t){return t.id-e.id})))}))}),[]),r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"nelsonnnn.github.io",className:"brand-logo"},"Create Blog and Edit")))),r.a.createElement("br",null),r.a.createElement(m,{addItem:function(e){j("https://jsonplaceholder.typicode.com/posts",e).then((function(e){var t=[].concat(Object(o.a)(n),[e]);c(t.sort((function(e,t){return t.id-e.id})))}))},updateItem:function(e){c(n.map((function(t){return e.id===t.id&&(v("https://jsonplaceholder.typicode.com/posts/".concat(t.id),e),t=e),t})))},deleteItem:function(e){g("https://jsonplaceholder.typicode.com/posts/".concat(e)),c(Object(o.a)(n.filter((function(t){return t.id!==e}))))},data:d}),r.a.createElement(f,{state:I,onEditItem:function(e){p(Object(i.a)(Object(i.a)({},d),{},{title:e.title,body:e.body,id:e.id}))}}),r.a.createElement(O,{postsPerPage:N,totalPosts:n.length,paginate:function(e){return k(e)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5969a140.chunk.js.map