"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[125],{7125:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(2791),s=t(4942),r=t(1413),i=t(9439),l=t(5984),c="Form_form__v9Auz",o="Form_label__hinnL",u="Form_input__VeVG3",m="Form_submit__cVibs",d=t(3553),_=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},x=(0,d.P1)([_,function(e){return e.filter}],(function(e,n){var t=n.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}))})),j=t(4420),b=t(2762),N=t(184),v={name:"",number:""},p=function(){var e=(0,a.useState)((0,r.Z)({},v)),n=(0,i.Z)(e,2),t=n[0],d=n[1],h=(0,j.v9)(_),f=(0,j.I0)(),x=function(e){var n=e.target,a=n.name,i=n.value;d((0,r.Z)((0,r.Z)({},t),{},(0,s.Z)({},a,i)))},p=function(e){if(function(e){var n=e.name,t=e.number,a=n.toLowerCase(),s=t.toLowerCase(),r=h.find((function(e){var n=e.name.toLowerCase(),t=e.number.toLowerCase();return n===a||t===s}));return Boolean(r)}(e))return alert("Book with ".concat(e.number," and ").concat(e.name," already in list"));f((0,b.uK)(e)),C()},C=function(){d({name:"",number:""})},w=(0,l.x0)(),F=(0,l.x0)();return(0,N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p((0,r.Z)({},t))},className:c,children:[(0,N.jsxs)("label",{htmlFor:w,className:o,children:["Name",(0,N.jsx)("input",{className:u,type:"text",name:"name",value:t.name,onChange:x,id:w,required:!0})]}),(0,N.jsxs)("label",{htmlFor:F,className:o,children:["Number",(0,N.jsx)("input",{className:u,type:"tel",name:"number",value:t.number,onChange:x,id:F,required:!0})]}),(0,N.jsxs)("label",{htmlFor:w,className:o,children:["Email (is not working now)",(0,N.jsx)("input",{className:u,disabled:!0})]}),(0,N.jsxs)("label",{htmlFor:w,className:o,children:["Address (is not working now)",(0,N.jsx)("input",{className:u,disabled:!0})]}),(0,N.jsxs)("label",{htmlFor:w,className:o,children:["Mob. Phone (is not working now)",(0,N.jsx)("input",{className:u,disabled:!0})]}),(0,N.jsx)("button",{type:"submit",className:m,children:"Add Contact"})]})},C="ContactList_list__JFruW",w="ContactList_item__+lAjJ",F="ContactList_span__XU+yw",L="ContactList_delete__PvS9Z",k=t(9260),g=function(){var e=(0,j.v9)(h),n=(0,j.v9)(f),t=(0,j.I0)();(0,a.useEffect)((function(){t((0,b.yF)())}),[t]);var s=(0,j.v9)(x);return(0,N.jsxs)("ul",{className:C,children:[n&&(0,N.jsx)("p",{children:n}),e&&(0,N.jsx)(k.Z,{}),Boolean(s.length)&&s.map((function(e){var n=e.name,a=e.id,s=e.number;return(0,N.jsxs)("li",{className:w,children:[(0,N.jsxs)("span",{children:["Contact's name: ",(0,N.jsx)("span",{className:F,children:n})]}),(0,N.jsxs)("span",{children:["Contact's number:",(0,N.jsx)("span",{className:F,children:s})]}),(0,N.jsx)("button",{onClick:function(){return function(e){t((0,b.GK)(e))}(a)},className:L,children:"Delete"})]},a)}))]})},Z="Filter_form__ZUxlI",y="Filter_filterLabel__-02Nb",I="Filter_filterInput__fgy9k",q=t(5653),A=function(){var e=(0,j.I0)();return(0,N.jsx)("form",{className:Z,children:(0,N.jsxs)("label",{className:y,children:["Filter",(0,N.jsx)("input",{type:"text",onChange:function(n){var t=n.target;return e((0,q.T)(t.value))},className:I})]})})},P={main:"Contact_main__qEdq4",title:"Contact_title__oR72+"},B=function(){return(0,N.jsxs)("div",{className:P.main,children:[(0,N.jsxs)("div",{className:P.form_div,children:[(0,N.jsx)("h1",{className:P.title,children:"Phonebook"}),(0,N.jsx)(p,{})]}),(0,N.jsxs)("div",{className:P.contacts_div,children:[(0,N.jsx)("h2",{className:P.title,children:" Contacts"}),(0,N.jsx)(A,{}),(0,N.jsx)(g,{})]})]})},E=t(7689),S=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{}),(0,N.jsx)(E.j3,{})]})}}}]);
//# sourceMappingURL=125.9c289a30.chunk.js.map