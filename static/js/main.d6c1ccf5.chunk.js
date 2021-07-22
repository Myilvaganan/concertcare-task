(this["webpackJsonpconcetcare-task"]=this["webpackJsonpconcetcare-task"]||[]).push([[0],{145:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(23),r=c.n(n),o=c(20),i=c(31),l=c(64),u=c(65),d=c(77),j=c(9),b="GET_POSTS",p="GET_USERS",h="GET_TODOS",x="GET_USER_BY_ID",O="GET_POST_BY_USER",m="SHOW_ERROR",f="CREATE_POST",g="DELETE_POST",y={posts:[],post:[],post_loading:!0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case b:return Object(j.a)(Object(j.a)({},e),{},{posts:s,post_loading:!1});case O:return Object(j.a)(Object(j.a)({},e),{},{post:s,post_loading:!1});case f:return Object(j.a)(Object(j.a)({},e),{},{posts:[s].concat(Object(d.a)(e.posts)),loading:!1});case g:return Object(j.a)(Object(j.a)({},e),{},{post:e.post.filter((function(e){return e._id!==s})),post_loading:!1});case m:return Object(j.a)(Object(j.a)({},e),{},{error:s,post_loading:!1});default:return e}},k={users:[],user:[],todos:[],user_loading:!0,todos_loading:!0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case p:return Object(j.a)(Object(j.a)({},e),{},{users:s,user_loading:!1});case x:return Object(j.a)(Object(j.a)({},e),{},{user:s,user_loading:!1});case h:return Object(j.a)(Object(j.a)({},e),{},{todos:s,todos_loading:!1});case m:return Object(j.a)(Object(j.a)({},e),{},{error:s,user_loading:!1});default:return e}},T=Object(i.combineReducers)({postReducer:v,userReducer:N}),_=[u.a],w=Object(i.createStore)(T,{},Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,_))),P=c(66),B=c(67),C=c(78),S=c(76),E=c(14),R=c(12),D=c(16),U=c.n(D),G=c(25),I=c(26),F=c.n(I),A="d9c46955fe2d7767c2f8321643e852c4c66bebd5cfe637d7960d3f095bc4c4e4",L=function(e){return function(){var t=Object(G.a)(U.a.mark((function t(c){var s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://gorest.co.in//public/v1/posts?page=".concat(e,"?access-token=")+A);case 3:s=t.sent,c({type:b,payload:s.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:m,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(G.a)(U.a.mark((function t(c){var s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://gorest.co.in/public/v1/users/".concat(e,"?access-token=")+A);case 3:s=t.sent,c({type:x,payload:s.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:m,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(G.a)(U.a.mark((function t(c){var s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://gorest.co.in/public/v1/users/".concat(e,"/todos?access-token=")+A);case 3:s=t.sent,c({type:h,payload:s.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:m,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},J=c(168),M=c(169),W=c(75),Y=c(172),q=c(166),K=c(170),Q=c(2),V=Object(q.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(5)}}}}));var X=Object(o.b)((function(e){return{posts:e.postReducer.posts,users:e.userReducer}}),{getPosts:L,getUserByID:z})((function(e){var t=e.posts.meta,c=e.getPosts,s=V(),a=t?t.pagination.pages:20;return Object(Q.jsx)("div",{className:s.root,children:Object(Q.jsx)(K.a,{count:a,defaultPage:1,boundaryCount:2,color:"secondary",size:"large",showFirstButton:!0,showLastButton:!0,onChange:function(e){return function(e){c(e.target.textContent?e.target.textContent:1)}(e)}})})})),Z=c(72),$=function(){return Object(Q.jsx)("div",{className:"loader",children:Object(Q.jsx)(Z.SemipolarLoading,{size:"large"})})},ee=Object(o.b)((function(e){return{posts:e.postReducer,users:e.userReducer}}),{getPosts:L,getUsers:function(){return function(){var e=Object(G.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("https://gorest.co.in/public/v1/users?access-token="+A);case 3:c=e.sent,t({type:p,payload:c.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:m,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},getUserByID:z})((function(e){var t=e.getPosts,c=e.getUsers,a=e.getUserByID,n=e.posts,r=n.posts,o=n.post_loading,i=e.users,l=i.user,u=i.user_loading,d=Object(s.useCallback)((function(e){a(e)}),[a]);return Object(s.useEffect)((function(){t(1),c()}),[t,c]),Object(Q.jsx)(J.a,{className:"my-5",children:o&&u?Object(Q.jsx)($,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(M.a,{children:Object(Q.jsx)(W.a,{md:12,className:"mb-5 d-flex justify-content-end",children:Object(Q.jsx)(X,{getPosts:t})})}),Object(Q.jsx)(M.a,{children:r.data?r.data.map((function(e,t){return Object(Q.jsx)(W.a,{md:4,className:"my-2 d-flex align-items-stretch justify-content-center",children:Object(Q.jsxs)(Y.a,{className:"card",children:[Object(Q.jsx)("span",{className:"mark",children:t+1}),Object(Q.jsxs)(Y.a.Body,{className:"d-flex flex-column justify-content-center align-items-center  text-center",children:[Object(Q.jsxs)(Y.a.Title,{className:"author-name",children:[" ",Object(Q.jsx)(E.b,{to:"/user/".concat(e.user_id),children:l.id===e.user_id?"Author: ".concat(l.name):null})]}),Object(Q.jsx)(Y.a.Title,{children:e.title}),Object(Q.jsx)(Y.a.Text,{children:e.body}),Object(Q.jsx)(Y.a.Subtitle,{className:"mb-2 text-muted subtitle"}),Object(Q.jsx)("button",{id:"show-author-btn",onClick:function(t){return d(e.user_id)},children:Object(Q.jsx)(E.b,{to:"/user/".concat(e.user_id),children:l.id===e.user_id?l.name:"Show Author"})})]})]})},e.id)})):Object(Q.jsx)(W.a,{className:"my-4 d-flex align-items-stretch justify-content-center",children:Object(Q.jsx)($,{})})}),Object(Q.jsx)(W.a,{md:12,className:"mb-5 d-flex justify-content-end",children:Object(Q.jsx)(X,{})})]})})})),te=c(41),ce=c(173),se=c(32),ae=(c(62),Object(o.b)((function(e){return{posts:e.postReducer,users:e.userReducer}}),{getPostByUser:function(e){return function(){var t=Object(G.a)(U.a.mark((function t(c){var s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://gorest.co.in/public/v1/users/".concat(e,"/posts?access-token=")+A);case 3:s=t.sent,c({type:O,payload:s.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:m,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getUserByID:z,getTodos:H,deletePost:function(e,t){return function(){var c=Object(G.a)(U.a.mark((function c(s){return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,F.a.delete("https://gorest.co.in/public/v1/posts/".concat(e,"?access-token=")+A,t,{Authorization:"Bearer ".concat(A)});case 3:s({type:g,payload:e}),c.next=10;break;case 6:c.prev=6,c.t0=c.catch(0),console.error(c.t0),s({type:m,payload:c.t0.message});case 10:case"end":return c.stop()}}),c,null,[[0,6]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,c=(e.history,e.getUserByID),n=e.getPostByUser,r=e.getTodos,o=e.deletePost,i=e.posts,l=i.post,u=i.post_loading,d=e.users,j=d.user,b=d.user_loading,p=t.params.id,h=a.a.useState(!1),x=Object(te.a)(h,2),O=x[0],m=x[1];Object(s.useEffect)((function(){c(p),n(p)}),[c,n,O,p]);var f=function(){se.b.success("Post has been Deleted successfully !")};return Object(Q.jsx)(J.a,{className:"my-5",children:u&&b?Object(Q.jsx)($,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(M.a,{children:[Object(Q.jsx)(se.a,{}),Object(Q.jsxs)(W.a,{className:"d-flex justify-content-between ",children:[Object(Q.jsx)(ce.a,{id:"back-btn",className:"mb-4",children:Object(Q.jsx)(E.b,{to:"/concertcare-task",children:"\u2190 Go To Home"})}),Object(Q.jsx)(ce.a,{id:"back-btn",className:"mb-4 create",children:Object(Q.jsx)(E.b,{to:"/user/".concat(p,"/create"),children:"Create New Post"})})]})]}),Object(Q.jsx)(M.a,{children:Object(Q.jsx)(W.a,{children:Object(Q.jsxs)(Y.a,{className:"card",children:[Object(Q.jsxs)(Y.a.Body,{className:"d-flex flex-column justify-content-center align-items-center  text-center",children:[Object(Q.jsx)(Y.a.Title,{className:"name-style userName",children:j.name}),Object(Q.jsx)(Y.a.Text,{className:"text-style email",children:j.email}),Object(Q.jsx)(Y.a.Text,{className:"text-style gender",children:j.gender}),Object(Q.jsx)(Y.a.Text,{className:"text-style my-3",children:Object(Q.jsx)("span",{className:"status",children:j.status})})]}),Object(Q.jsx)(ce.a,{id:"back-btn",className:"mb-4 todo-btn",onClick:function(e){return r(j.id)},children:Object(Q.jsxs)(E.b,{to:"/user/".concat(j.id,"/todos"),children:[j.name,"'s Todos \u2192"]})})]})})}),Object(Q.jsx)(M.a,{children:l.length?l.map((function(e){return Object(Q.jsx)(W.a,{md:6,className:"my-4 d-flex align-items-stretch justify-content-center",children:Object(Q.jsxs)(Y.a,{className:"card",children:[Object(Q.jsxs)(Y.a.Body,{className:"d-flex flex-column justify-content-center align-items-center  text-center",children:[Object(Q.jsx)(Y.a.Title,{children:e.title}),Object(Q.jsx)(Y.a.Text,{children:e.body})]}),Object(Q.jsx)(ce.a,{onClick:function(t){return c=e.id,o(c),f(),void setTimeout((function(){m(!0)}),1e3);var c},id:"delete-btn",children:"Delete"})]})},e.id)})):Object(Q.jsx)(W.a,{className:"my-4 d-flex align-items-stretch justify-content-center",children:Object(Q.jsx)("h4",{children:"Oops! No Posts for this user"})})})]})})}))),ne=(c(145),c(146),function(){return Object(Q.jsxs)("nav",{className:"nav-bar",children:[Object(Q.jsx)("h3",{children:Object(Q.jsx)(E.b,{to:"/concertcare-task",children:"ConcertCare Task"})}),Object(Q.jsxs)("div",{className:"nav-bar-link",children:[Object(Q.jsx)("a",{href:"https://github.com/Myilvaganan/concertcare-task",rel:"noreferrer",target:"_blank",children:"Github"}),Object(Q.jsx)("a",{href:"https://myilvaganan.github.io/concertcare-task/",rel:"noreferrer",target:"_blank",children:"Deploy"}),Object(Q.jsx)("a",{href:"https://myilvaganan.github.io/myilportfolio/",rel:"noreferrer",target:"_blank",children:"Portfolio"})]})]})}),re=Object(o.b)((function(e){return{todos:e.userReducer}}),{getTodos:H})((function(e){var t=e.match,c=e.todos,a=c.todos,n=c.todo_loading,r=e.getTodos,o=t.params.id;return Object(s.useEffect)((function(){r(o)}),[r,o]),console.log(a),Object(Q.jsx)(J.a,{className:"my-5 todo",children:n?Object(Q.jsx)($,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ce.a,{id:"back-btn",className:"mb-4",children:Object(Q.jsx)(E.b,{to:"/user/".concat(o),children:"\u2190 Go Back "})}),Object(Q.jsx)(M.a,{children:a.length?a.map((function(e){return Object(Q.jsx)(W.a,{md:3,className:"my-4 d-flex align-items-stretch justify-content-center",children:Object(Q.jsx)(Y.a,{className:"card",children:Object(Q.jsxs)(Y.a.Body,{className:"d-flex flex-column justify-content-center align-items-center  text-center",children:[Object(Q.jsx)(Y.a.Title,{className:"todo-text title",children:e.title}),Object(Q.jsx)(Y.a.Text,{className:"status",id:"todo-status",children:e.status}),Object(Q.jsx)(Y.a.Text,{className:"todo-text date",children:e.due_on.slice(0,10)})]})})},e.id)})):Object(Q.jsx)(W.a,{className:"my-4 d-flex align-items-stretch justify-content-center",children:Object(Q.jsx)("h4",{children:"Oops! No Todos for this user"})})})]})})})),oe=c(39),ie=c(171),le=Object(o.b)((function(e){return{posts:e.postReducer}}),{createPost:function(e,t){return function(){var c=Object(G.a)(U.a.mark((function c(s){var a;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,F.a.post("https://gorest.co.in/public/v1/users/".concat(e,"/posts?access-token=")+A,t,{Authorization:"Bearer ".concat(A)});case 3:a=c.sent,s({type:f,payload:a.data}),console.log(a.data),c.next=12;break;case 8:c.prev=8,c.t0=c.catch(0),console.error(c.t0),s({type:m,payload:c.t0.message});case 12:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,c=e.history,s=e.createPost,n=e.posts.posts,r=t.params.id,o=a.a.useState({title:"",body:""}),i=Object(te.a)(o,2),l=i[0],u=i[1];console.log(n);var d=function(){se.b.success("Post has been created successfully !")},b=function(e){var t=e.target,c=t.name,s=t.value;u(Object(j.a)(Object(j.a)({},l),{},Object(oe.a)({},c,s)))};return Object(Q.jsxs)(J.a,{className:"my-5",children:[Object(Q.jsx)(se.a,{}),Object(Q.jsx)(ce.a,{id:"back-btn",className:"mb-4",children:Object(Q.jsx)(E.b,{to:"/user/".concat(r),children:"\u2190 Go Back"})}),Object(Q.jsx)(M.a,{children:Object(Q.jsxs)(W.a,{md:6,children:[Object(Q.jsx)("h3",{children:"Create New Post"}),Object(Q.jsxs)(ie.a,{className:"form my-4",onSubmit:function(e){e.preventDefault(),s(r,l),u({title:"",body:""}),d(),setTimeout((function(){c.push("/user/".concat(r))}),6e3)},children:[Object(Q.jsxs)(ie.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(Q.jsx)(ie.a.Label,{children:"Title"}),Object(Q.jsx)(ie.a.Control,{as:"textarea",rows:2,name:"title",value:l.title,onChange:b})]}),Object(Q.jsxs)(ie.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(Q.jsx)(ie.a.Label,{children:"Body"}),Object(Q.jsx)(ie.a.Control,{as:"textarea",rows:6,name:"body",value:l.body,onChange:b})]}),Object(Q.jsx)(ce.a,{variant:"dark",type:"submit",children:"Submit"})]})]})})]})})),ue=function(e){Object(C.a)(c,e);var t=Object(S.a)(c);function c(){return Object(P.a)(this,c),t.apply(this,arguments)}return Object(B.a)(c,[{key:"render",value:function(){return Object(Q.jsxs)(E.a,{children:[Object(Q.jsx)(ne,{}),Object(Q.jsxs)(R.c,{children:[Object(Q.jsx)(R.a,{exact:!0,path:"/concertcare-task",component:ee}),Object(Q.jsx)(R.a,{exact:!0,path:"/user/:id",component:ae}),Object(Q.jsx)(R.a,{exact:!0,path:"/user/:id/todos",component:re}),Object(Q.jsx)(R.a,{exact:!0,path:"/user/:id/create",component:le})]})]})}}]),c}(s.Component);r.a.render(Object(Q.jsx)(o.a,{store:w,children:Object(Q.jsx)(ue,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.d6c1ccf5.chunk.js.map