(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),l=(n(14),n(9)),i=n(5),o=n(2),d=(n(15),n(0)),j=function(e){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)("a",{className:"nav-link",href:"/#",children:["Home ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/#",children:"Link"})}),Object(d.jsxs)("li",{className:"nav-item dropdown",children:[Object(d.jsx)("a",{className:"nav-link dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(d.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(d.jsx)("a",{className:"dropdown-item",href:"/#",children:"Action"}),Object(d.jsx)("a",{className:"dropdown-item",href:"/#",children:"Another action"}),Object(d.jsx)("div",{className:"dropdown-divider"}),Object(d.jsx)("a",{className:"dropdown-item",href:"/#",children:"Something else here"})]})]}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link disabled",href:"/#",tabIndex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(d.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(d.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})};j.defaultProps={title:"App"};var b=j,u=function(e){return Object(d.jsx)("button",{onClick:e.onClick,className:"btn ".concat(e.bgcolor&&"btn-"+e.bgcolor," ").concat(e.float&&"float-"+e.float),children:e.text})},h=n(8),m=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return Object(d.jsxs)("div",{className:"task card p-3 ".concat(t.reminder?"bg-info":"bg-white"),onDoubleClick:function(){return a(t.id)},style:{cursor:"pointer"},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(h.a,{className:"float-right",style:{cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(m,{task:e,onDelete:n,onToggle:a},e.id)}))})},O=function(e){var t=e.onAdd,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),j=i[0],b=i[1],u=Object(a.useState)(!1),h=Object(o.a)(u,2),m=h[0],x=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),Text?(t({text:r,day:j,reminder:m}),s(""),b(""),x("")):alert("Please input task name")},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"",children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",className:"form-control",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"",children:"Datetime"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Datetime",className:"form-control",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("label",{htmlFor:"",children:"Reminder"})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("input",{type:"checkbox",placeholder:"Add Reminder",checked:m,value:m,onChange:function(e){return x(e.currentTarget.checked)}})})]})}),Object(d.jsx)("input",{type:"submit",value:"Save",className:"btn btn-primary"})]})},p=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{children:[t,Object(d.jsx)(u,{text:a?"X":"Add",bgcolor:a?"danger":"info",float:"right",onClick:n})]})})},v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,text:"A",day:"2020-01-25",reminder:!0},{id:2,text:"B",day:"2020-05-25",reminder:!1},{id:3,text:"C",day:"2019-05-25",reminder:!1}]),s=Object(o.a)(r,2),j=s[0],h=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{title:"CurrencyApp"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Hello world"}),Object(d.jsxs)("h2",{children:["Hello ","Max"," ",2]}),"Yes",Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-primary",children:"Press"}),Object(d.jsx)(u,{onClick:function(e){console.log(e)},bgcolor:"success",text:"submit"}),Object(d.jsx)(p,{title:"Task Tracker",showAdd:n,onAdd:function(){return c(!n)}}),n&&Object(d.jsx)(O,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);h([].concat(Object(l.a)(j),[n]))}}),Object(d.jsx)("br",{}),j.length>0?Object(d.jsx)(x,{tasks:j,onDelete:function(e){h(j.filter((function(t){return t.id!==e})))},onToggle:function(e){h(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"Nothing"]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.644db7b1.chunk.js.map