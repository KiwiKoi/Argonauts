(this["webpackJsonpargonauts-app"]=this["webpackJsonpargonauts-app"]||[]).push([[0],{34:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/logo.43991ade.png"},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),m=n(30),l=n.n(m),o=n(31),c=n(2);n(39),n(40);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".copyright-year"),t=(new Date).getFullYear();e.textContent=t}));var u=function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("p",null,"R\xe9alis\xe9 par Jason en Anthest\xe9rion de l'an 515 avant JC"),r.a.createElement("p",{className:"copyright"},"Copyright \xa9",r.a.createElement("span",{className:"copyright-year"}),".")))},i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("img",{src:n(41),alt:"brand"}),"Les Argonautes"))},s=n(12),b=n(13),d=n(8),h=n(16),p=n(15),E=n(66),f=n(9),v=n.n(f),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChangeMemberName=a.onChangeMemberName.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.state={membername:"",members:[],reload:!1},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/members").then((function(t){t.data.length>0&&e.setState({members:t.data.map((function(e){return e.membername})),membername:t.data[0].membername})}))}},{key:"onChangeMemberName",value:function(e){this.setState({membername:e.target.value})}},{key:"onSubmit",value:function(e){var t={membername:this.state.membername};console.log(t),v.a.post("http://localhost:5000/members/add",t).then((function(e){return console.log(e.data)})),this.setState({membername:"",reload:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"create-component"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"new-member-form"},r.a.createElement("label",{htmlFor:"name"},r.a.createElement("h2",null,"Ajouter un(e) Argonaute")),r.a.createElement("input",{id:"name",name:"name",type:"text",onChange:this.onChangeMemberName,placeholder:"Nom"}),r.a.createElement("br",null),r.a.createElement(E.a,{className:"customBtn",variant:"outline-danger",type:"submit",value:"Cr\xe9er Argonaute"},"Envoyer")))}}]),n}(a.Component),y=n(65),M=function(e){return r.a.createElement("td",null,r.a.createElement("div",{className:"member-name"},e.member.membername),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.deleteMember(e.member._id)}},"Supprimer"))},C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).deleteMember=a.deleteMember.bind(Object(d.a)(a)),a.state={members:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/members/").then((function(t){e.setState({members:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteMember",value:function(e){v.a.delete("http://localhost:5000/members/"+e).then((function(e){return console.log(e.data)})),this.setState({members:this.state.members.filter((function(t){return t._id!==e}))})}},{key:"memberList",value:function(){var e=this;return this.state.members.map((function(t){return r.a.createElement(M,{member:t,deleteMember:e.deleteMember,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("main",{id:"list-component"},r.a.createElement("h2",null,"Membres de l'\xe9quipage"),r.a.createElement(y.a,{className:"member-list",responsive:!0,bordered:!0,variant:"light"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.memberList()))))}}]),n}(a.Component);var S=function(){return r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(g,null),r.a.createElement(c.a,{path:"/",exact:!0,component:C}),r.a.createElement(u,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e236ece4.chunk.js.map