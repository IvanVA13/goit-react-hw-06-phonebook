(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={section:"Section_section__1RG-R","main-title":"Section_main-title__2s-Zy",title:"Section_title__377Jy"}},12:function(t,e,n){t.exports={example:"Filter_example__1l_Uj","input-layout":"Filter_input-layout__Ykk3W",title:"Filter_title__NZdDv",input:"Filter_input__1q98O",btn:"Filter_btn__1Cc19"}},4:function(t,e,n){t.exports={form:"ContactForm_form__3p8Da","input-layout":"ContactForm_input-layout__1DbIr",title:"ContactForm_title__3Oq3F",input:"ContactForm_input__2nxGx",btn:"ContactForm_btn__3Er6U"}},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=n(6),o=n(16),l=n(11),u=n.n(l),b=n(1),j=function(t){var e=t.title,n=t.children,a=t.main;return Object(b.jsxs)("section",{className:u.a.section,children:[a?Object(b.jsx)("h1",{className:u.a["main-title"],children:e}):Object(b.jsx)("h2",{className:u.a.title,children:e}),n]})};j.defaultProps={title:"",main:!1};var m,d=j,h=n(3),p=n(17),O=n.n(p),f=Object(h.b)("contacts/add-contact",(function(t,e){return{payload:{name:t,number:e,id:O.a.generate()}}})),_=Object(h.b)("contacts/del-contact"),x=Object(h.b)("contacts/filter-contact"),v=n(7),y=n(18),C=n(19),N=n(24),g=n(23),F=n(4),k=n.n(F),S=function(t){Object(N.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(y.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,a=t.props,c=a.contacts,r=a.submitHandler;c.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):r(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(C.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(b.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:k.a["input-layout"],children:Object(b.jsxs)("label",{className:k.a.title,children:["Name",Object(b.jsx)("input",{className:k.a.input,onChange:this.handleChange,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(b.jsx)("div",{className:k.a["input-layout"],children:Object(b.jsxs)("label",{className:k.a.title,children:["Number",Object(b.jsx)("input",{className:k.a.input,onChange:this.handleChange,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(b.jsx)("button",{className:k.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),w=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{submitHandler:function(e){var n=e.name,a=e.number;return t(f(n,a))}}}))(S),A=n(12),D=n.n(A),L=function(t){var e=t.value,n=t.onFilter;return Object(b.jsx)("div",{className:D.a["input-layout"],children:Object(b.jsxs)("label",{className:D.a.title,children:["Find contacts by name",Object(b.jsx)("input",{className:D.a.input,type:"text",value:e,onChange:n})]})})},q=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onFilter:function(e){return t(x(e.target.value))}}}))(L),z=n(8),J=n.n(z),Z=function(t){var e=t.contacts,n=t.handleDelContact;return 0!==e.length&&Object(b.jsx)("ul",{className:J.a["contacts-list"],children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(b.jsx)("li",{className:J.a["contacts-list-item"],children:Object(b.jsxs)("div",{className:J.a["contact-container"],children:[Object(b.jsxs)("span",{className:J.a.contact,children:[e,":"]}),Object(b.jsx)("span",{className:J.a.contact,children:a}),Object(b.jsx)("button",{className:J.a.btn,type:"button",onClick:function(){return n(c)},children:"Delete"})]})},c)}))})},I=Object(s.b)((function(t){var e=t.contacts;return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter)}}),(function(t){return{handleDelContact:function(e){return t(_(e))}}}))(Z),P=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"Phonebook",main:!0,children:Object(b.jsx)(w,{})}),Object(b.jsxs)(d,{title:"Contacts",children:[Object(b.jsx)(q,{}),Object(b.jsx)(I,{})]})]})},B=n(20),E=n.n(B),G=n(5),H=n(21),M=n.n(H),R=n(22),U=n(2),Q=Object(h.c)([],(m={},Object(v.a)(m,f,(function(t,e){var n=e.payload;return[].concat(Object(R.a)(t),[n])})),Object(v.a)(m,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),m)),T=Object(h.c)("",Object(v.a)({},x,(function(t,e){return e.payload}))),W=Object(U.b)({items:Q,filter:T}),Y={key:"contacts",storage:M.a,blacklist:["filter"]},$=Object(h.a)({reducer:{contacts:Object(G.g)(Y,W)},devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}}).concat(E.a)}}),K={store:$,persistor:Object(G.h)($)};n(47),n(48);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{store:K.store,children:Object(b.jsx)(o.a,{persistor:K.persistor,children:Object(b.jsx)(P,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={"contacts-list":"ContactList_contacts-list__3nQyo","contacts-list-item":"ContactList_contacts-list-item__2vma4","contact-container":"ContactList_contact-container__3qIxP",btn:"ContactList_btn__1hDhJ"}}},[[49,1,2]]]);
//# sourceMappingURL=main.616533df.chunk.js.map