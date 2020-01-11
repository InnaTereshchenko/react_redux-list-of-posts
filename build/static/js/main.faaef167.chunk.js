(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),c=n(2),u=n(3),i=n.n(u),l=n(1),m=n(11),p=function(e){var t=e.user;return r.a.createElement("div",{className:"post__author author"},r.a.createElement("p",null,"Post by:"," ",t.name," ","from"," ",t.address.city),r.a.createElement("p",null,t.email))},d=n(7),f=function(e){return e.posts.filter(function(t){return(t.title+t.body).includes(e.querySelector)})},E=Object(d.b)(function(e,t){switch(t.type){case"SET_POSTS":return Object(l.a)({},e,{posts:t.posts});case"SET_QUERY_SELECTOR":return Object(l.a)({},e,{querySelector:t.inputValue});case"DELETE_POST":return Object(l.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"DELETE_COMMENT":return Object(l.a)({},e,{posts:e.posts.map(function(e){return e.id===t.postId&&(e.comments=e.comments.filter(function(e){return e.id!==t.commentId})),Object(l.a)({},e,{comments:e.comments})})});case"START_LOADING":return Object(l.a)({},e,{isLoading:!0});case"FINISH_LOADING":return Object(l.a)({},e,{isLoading:!1});case"LOADING_BUTTON_IS_OFF":return Object(l.a)({},e,{loadingButton:!1});default:return e}},{posts:[],isLoading:!1,loadingButton:!0,querySelector:""}),b={deleteComment:function(e,t){return{type:"DELETE_COMMENT",commentId:e,postId:t}}},_=Object(c.b)(null,b)(function(e){var t=e.comment,n=e.deleteComment;return r.a.createElement("div",{className:"comments__item"},r.a.createElement("li",{className:"comments__name"},t.name,r.a.createElement("span",null,r.a.createElement("button",{type:"button",className:"post__button",onClick:function(){return n(t.id,t.postId)}},"X"))),r.a.createElement("p",{className:"comments__email"},"By"," ",t.email),r.a.createElement("p",{className:"comments__text"},t.body))}),O=function(e){var t=e.comments;return r.a.createElement("div",{className:"post__comments comments"},r.a.createElement("p",null,"Comments:"),r.a.createElement("ul",{className:"comments__list"},t.map(function(e){return r.a.createElement(_,{comment:e})})))},y={deletePost:function(e){return{type:"DELETE_POST",postId:e}}},N=Object(c.b)(null,y)(function(e){var t=e.post,n=e.deletePost;return r.a.createElement("div",{className:"post"},r.a.createElement("button",{type:"button",className:"post__button",onClick:function(){return n(t.id)}},"X"),r.a.createElement("p",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__body"},t.body),r.a.createElement(p,{user:t.user}),r.a.createElement(O,{comments:t.comments}))}),v=Object(c.b)(function(e){return{posts:f(e)}})(function(e){return e.posts.map(function(e){return r.a.createElement(N,{post:e})})}),h=(n(25),function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})}),L=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/comments"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},T=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},g={setPosts:function(e){return{type:"SET_POSTS",posts:e}},startLoading:function(){return{type:"START_LOADING"}},finishLoading:function(){return{type:"FINISH_LOADING"}},hideLoadingButton:function(){return{type:"LOADING_BUTTON_IS_OFF"}},setQuerySelector:function(e){return{type:"SET_QUERY_SELECTOR",inputValue:e}}},j=Object(c.b)(function(e){return{isLoading:e.isLoading,loadingButton:e.loadingButton,countAllPosts:e.posts.length,countVisiblePosts:f(e).length}},g)(function(e){var t=e.startLoading,n=e.finishLoading,s=e.hideLoadingButton,o=e.setPosts,c=e.isLoading,u=e.loadingButton,p=e.countAllPosts,d=e.setQuerySelector,f=e.countVisiblePosts,E=Object(a.useState)(""),b=Object(m.a)(E,2),_=b[0],O=b[1],y=Object(a.useCallback)(function(e,t){var n=0;return function(){clearTimeout(n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];n=setTimeout.apply(void 0,[e,t].concat(r))}}(function(e){d(e)},1e3),[]);return c?r.a.createElement("h1",{className:"App"},"Loading..."):u?r.a.createElement("div",{className:"box"},r.a.createElement("button",{type:"button",onClick:function(){var e,a,r,c,u,p;return i.a.async(function(d){for(;;)switch(d.prev=d.next){case 0:return t(),d.next=3,i.a.awrap(Promise.all([h(),L(),T()]));case 3:return e=d.sent,a=Object(m.a)(e,3),r=a[0],c=a[1],u=a[2],n(),s(),p=r.map(function(e){return Object(l.a)({},e,{user:u.find(function(t){return t.id===e.userId}),comments:c.filter(function(t){return t.postId===e.id})})}),o(p),d.abrupt("return",p);case 13:case"end":return d.stop()}})},className:"filter__button button"},"Load posts")):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"filter"},r.a.createElement("h1",null,"Redux List of Posts"),r.a.createElement("p",null,"all posts:",p," ","visible posts:",f),r.a.createElement("input",{type:"text",className:"filter__input",value:_,onChange:function(e){O(e.target.value),y(e.target.value)}})),r.a.createElement(v,null))});o.a.render(r.a.createElement(c.a,{store:E},r.a.createElement(j,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.faaef167.chunk.js.map