(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),a=t(29),i=t.n(a),r=t(9),j=t(4),l=t(5),d=t(6),o=t(26),b=t(50);t(27);function h(e){var c=e.hideMenu;return Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/",className:"nav-link",onClick:c,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/assignments",className:"nav-link mobile",onClick:c,children:"Assignments"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/studying-materials",className:"nav-link",onClick:c,children:"Studying Materials"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/users",className:"nav-link",onClick:c,children:"Users"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/users",className:"nav-link",onClick:c,children:"Pass papers"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/users",className:"nav-link",onClick:c,children:"Quize"})})]})}function O(){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),t=c[0],a=c[1],i=Object(o.b)(t,null,{from:{opacity:0,transform:"translateX(-100%"},enter:{opacity:1,transform:"translateX(0)"},leave:{opacity:0,transform:"translateX(-100%"}});function l(){a(!1)}return Object(s.jsx)("nav",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"nav-wraper",children:[Object(s.jsx)("div",{className:"nav-logo",children:Object(s.jsx)("ul",{className:"nav",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/",className:"nav-link",children:Object(s.jsx)("div",{className:"logo-img-wraper",children:Object(s.jsx)("img",{className:"logo-img",src:"/next-it/pic/my-logo.png"})})})})})}),Object(s.jsx)("div",{className:"nav-link-wraper desctop",children:Object(s.jsx)(h,{hideMenu:l})}),i.map((function(e){var c=e.item,t=e.key,n=e.props;return c&&Object(s.jsx)(o.a.div,{style:n,className:"nav-link-wraper",children:Object(s.jsx)(h,{hideMenu:l})},t)})),Object(s.jsx)("div",{className:"nav-menu desctop",children:Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/nofications",className:"nav-link",onClick:l,children:Object(s.jsx)(d.b,{className:"icon"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/setting",className:"nav-link",children:Object(s.jsx)(d.d,{className:"icon"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/",className:"nav-link",children:Object(s.jsx)(d.i,{className:"icon"})})})]})}),Object(s.jsx)("div",{className:"nav-menu mobile",children:Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(j.b,{to:"/nofications",className:"nav-link",onClick:l,children:Object(s.jsx)(d.i,{className:"icon"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("span",{className:"nav-link",onClick:function(){a(!t)},children:t?Object(s.jsx)(d.h,{className:"icon"}):Object(s.jsx)(d.a,{className:"icon"})})})]})})]}),Object(s.jsxs)("div",{className:"second-naav mobile",children:[Object(s.jsx)(j.b,{to:"/",onClick:l,children:Object(s.jsx)(d.g,{className:"icon"})}),Object(s.jsx)(j.b,{to:"/studying-materials",onClick:l,children:Object(s.jsx)(d.c,{className:"icon"})}),Object(s.jsx)(j.b,{to:"/assignments",onClick:l,children:Object(s.jsx)(d.f,{className:"icon"})}),Object(s.jsx)(j.b,{to:"/users",onClick:l,children:Object(s.jsx)(d.j,{className:"icon"})}),Object(s.jsxs)(j.b,{to:"/nofications",onClick:l,children:[Object(s.jsx)(d.b,{className:"icon"}),Object(s.jsx)(b.a,{variant:"danger",children:"20"})]})]})]})})}t(41);var x=t(53);t(42);function u(){return Object(s.jsx)("div",{className:"loader-wraper",children:Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("img",{src:"/next-it/pic/image2.png"})})})}t(43);function m(){var e,c=Object(n.useState)({status:!1,error:!1,data:null}),t=Object(r.a)(c,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){i({status:!1,error:!1,data:null}),fetch("/posts").then((function(e){return e.json()})).then((function(e){return i({status:!0,error:!1,data:e})})).catch((function(e){return i({error:!0,data:null})}))}),[]),a.data?e=a.data.map((function(e){return Object(s.jsxs)("div",{className:"news-wraper",children:[Object(s.jsx)("h5",{children:Object(s.jsx)("b",{children:e.post_title})}),0!=e.post_img?Object(s.jsx)("img",{className:"news-img",src:"/next-it"+e.post_img}):null,Object(s.jsx)("p",{children:e.post_body})]})})):a.status?a.error&&(e="something went wrong!"):e=Object(s.jsx)(u,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)("div",{className:"main-header"}),Object(s.jsxs)("div",{className:"main-body",children:[Object(s.jsx)("div",{className:"title-wraper",children:Object(s.jsx)("h2",{children:Object(s.jsx)("b",{children:"News and updates"})})}),Object(s.jsx)("div",{children:e})]})]})}t(44);function p(){var e,c=Object(n.useState)({status:!1,error:!1,data:null}),t=Object(r.a)(c,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){i({status:!1,error:!1,data:null}),fetch("/assignments").then((function(e){return e.json()})).then((function(e){return i({status:!0,error:!1,data:e})})).catch((function(e){return i({error:!0,data:null})}))}),[]),a.status?e=a.data.map((function(e){return Object(s.jsxs)("div",{className:"assignment-content my-4",children:[Object(s.jsx)("h5",{children:Object(s.jsx)("b",{children:e.file_title})}),Object(s.jsxs)("span",{children:["Deadline: ",e.upload_date]}),Object(s.jsx)("p",{children:e.dicription}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download"]})]})})):a.status?a.error&&(e="something went wrong!"):e=Object(s.jsx)(u,{}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"title-wraper",children:Object(s.jsx)("h2",{children:"Assignments"})}),Object(s.jsx)("div",{children:e})]})}t(45);function v(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"title-wraper",children:Object(s.jsx)("h2",{children:Object(s.jsx)("b",{children:"Studying Materials"})})}),Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"my-4",children:[Object(s.jsx)("h5",{children:"Physic Heat"}),Object(s.jsx)("p",{children:"MyApp is a open sourch web application for university of Juba collage of computer science, information and technology to help students share notes, Ideas, and academicaly related "}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download "]})]}),Object(s.jsxs)("div",{className:"my-4",children:[Object(s.jsx)("h5",{children:"Physic Heat"}),Object(s.jsx)("p",{children:"MyApp is a open sourch web application for university of Juba collage of computer science,"}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download "]})]}),Object(s.jsxs)("div",{className:"my-4",children:[Object(s.jsx)("h5",{children:"Physic Heat"}),Object(s.jsx)("p",{children:"MyApp is a open sourch web application for university of Juba collage of computer science, information and technology to help students share notes, Ideas, and academicaly related "}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download "]})]}),Object(s.jsxs)("div",{className:"my-4",children:[Object(s.jsx)("h5",{children:"Physic Heat"}),Object(s.jsx)("p",{children:"MyApp is a open sourch web application for university of Juba collage of computer science,"}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download "]})]})]})]})}t(46);function f(){var e,c=Object(n.useState)({status:!1,error:!1,data:null}),t=Object(r.a)(c,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("https://next-it-api.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){return i({status:!0,error:!1,data:e})}))}),[]),a.status?e=a.data.map((function(e){return Object(s.jsxs)(j.b,{className:"user-wraper",to:"/profile/".concat(e.student_id),children:[Object(s.jsx)("div",{className:"user-img-wraper",children:Object(s.jsx)("img",{src:"/next-it/pic/FB_IMG_15623326197874033.jpg"})}),Object(s.jsxs)("div",{className:"user-info",children:[Object(s.jsx)("h5",{children:e.name}),Object(s.jsx)("h6",{children:"I.T"})]})]})})):a.status||(e=Object(s.jsx)(u,{})),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"title-wraper",children:[Object(s.jsx)("h2",{children:"Friends list"}),Object(s.jsx)("div",{className:"",children:e})]})})}var N=t(51),g=t(52);function y(){var e,c=Object(n.useState)({status:!1,error:!1,data:null}),t=Object(r.a)(c,2),a=t[0],i=t[1],j=Object(l.f)().id,d="/profile/".concat(j);return Object(n.useEffect)((function(){fetch(d).then((function(e){return e.json()})).then((function(e){return i({status:!0,error:!1,data:e})}))}),[d]),a.data&&(e=a.data.map((function(e){return Object(s.jsxs)(N.a,{className:"profile-wraper",children:[Object(s.jsx)(g.a,{md:8,children:Object(s.jsx)("img",{src:"/next-it/pic/FB_IMG_15623326197874033.jpg"})}),Object(s.jsxs)(g.a,{md:8,children:[Object(s.jsx)("h4",{children:"Details"}),Object(s.jsxs)("h6",{children:["Name: ",e.name]}),Object(s.jsx)("h6",{children:"College of : CSIT"}),Object(s.jsx)("h6",{children:"Department: Information & technology"}),Object(s.jsxs)("h6",{children:["Semister: ",e.semister]}),Object(s.jsx)("h6",{children:"E-mail: konakech32gmail.com"}),Object(s.jsx)("h6",{children:"Address: Juba"}),Object(s.jsx)("p",{})]}),Object(s.jsxs)(g.a,{md:6,children:[Object(s.jsx)("h4",{children:"About me"}),Object(s.jsx)("p",{children:e.about})]})]},e.student_id)}))),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"Kon's Profile"})}),e]})}function w(){return Object(s.jsx)("div",{children:"Nofications"})}var k=t(10),C=t(15),_=t(13),M=t(12),D=function(e){Object(_.a)(t,e);var c=Object(M.a)(t);function t(e){return Object(k.a)(this,t),c.call(this,e)}return Object(C.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(s.jsx)("div",{children:"Setting"})}}]),t}(n.Component);t(47);function S(){return Object(s.jsx)("div",{className:"footer-wraper",children:"Footer"})}t(48);var A=function(){var e,c=Object(n.useState)({status:!1,error:!1,data:null}),t=Object(r.a)(c,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){i({status:!1,error:!1,data:null}),fetch("/assignments").then((function(e){return e.json()})).then((function(e){return i({status:!0,error:!1,data:e})})).catch((function(e){return i({error:!0,data:null})}))}),[]),a.status?e=a.data.map((function(e){return Object(s.jsxs)("div",{className:"assignment-content my-4",children:[Object(s.jsx)("h5",{children:Object(s.jsx)("b",{children:e.file_title})}),Object(s.jsxs)("span",{children:["Deadline: ",e.upload_date]}),Object(s.jsx)("p",{children:e.dicription}),Object(s.jsxs)(x.a,{variant:"success btn-sm",children:[Object(s.jsx)(d.e,{})," Download"]})]})})):a.status?a.error&&(e="something went wrong!"):e=Object(s.jsx)(u,{}),Object(s.jsx)(j.a,{children:Object(s.jsxs)("div",{className:"app-wraper",children:[Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"main-content",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/next-it",children:Object(s.jsx)(m,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/assignments",children:Object(s.jsx)(p,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/studying-materials",children:Object(s.jsx)(v,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/users",children:Object(s.jsx)(f,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/profile/:id",children:Object(s.jsx)(y,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/setting",children:Object(s.jsx)(D,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/nofications",children:Object(s.jsx)(w,{})})]})}),Object(s.jsxs)("div",{className:"sidebar-content",children:[Object(s.jsx)("div",{className:"title-wraper",children:Object(s.jsx)("h2",{children:Object(s.jsx)("b",{children:"Assignments"})})}),Object(s.jsx)("div",{className:"",children:e})]}),Object(s.jsx)(S,{})]})})]})})};i.a.render(Object(s.jsx)(A,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b9a6196a.chunk.js.map