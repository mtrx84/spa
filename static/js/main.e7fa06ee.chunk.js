(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/img3.69944fb3.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/img1.3c7adf1a.jpg"},function(e,t,a){e.exports=a.p+"static/media/img2.94dc6ff3.jpg"},function(e,t,a){e.exports=a(43)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),l=a.n(i),c=(a(25),a(6)),o=a(7),u=a(9),m=a(8),s=a(10),p=(a(27),a(46)),d=a(44),h=a(48),E=(a(29),a(17)),f=a.n(E),g=a(18),v=a.n(g),b=a(14),j=a.n(b),k=[{path:"/",img:f.a,alt:"zdj\u0119cie"},{path:"/products",img:v.a,alt:"zdj\u0119cie"},{path:"/contacts",img:j.a,alt:"zdj\u0119cie"},{path:"/admin",img:j.a,alt:"zdj\u0119cie"}],y=function(){var e=k.map(function(e,t){return r.a.createElement(d.a,{key:t,path:e.path,exact:!0,render:function(){return r.a.createElement("img",{src:e.img,alt:e.alt})}})});return r.a.createElement(h.a,null,e,r.a.createElement(d.a,{render:function(){return r.a.createElement("h1",{style:{textAlign:"center"}},"Not found...")}}))},x=(a(34),a(45)),w=[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contacts"},{name:"panel",path:"/admin"}],O=function(){var e=w.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(x.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},C=(a(37),function(e){var t=e.title,a=e.name,n=e.article;return r.a.createElement("article",{className:"article",style:{borderBottom:"1px solid #262626",margin:"20px 0px",paddingBottom:"20px"}},r.a.createElement("h1",{style:{marginLeft:15,fontSize:25,textTransform:"uppercase"}},t),r.a.createElement("h4",{style:{margin:"0px 20px 20px",fontSize:12}},a),r.a.createElement("p",{style:{marginLeft:20}},n))}),z=[{id:1,title:'"O obrotach cia\u0142 niebieskich"',name:"Miko\u0142aj Kopernik",article:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."},{id:2,title:'"Bla bla car"',name:"Adianna Nowak",article:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."},{id:3,title:'"Ktokolwiek widzia\u0142, ktokolwiek wie"',name:"Krzysztof Ibisz",article:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."}],N=function(){var e=z.map(function(e){return r.a.createElement(C,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},S=a(49),P=(a(39),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault()},a.handleClick=function(){a.setState({value:""})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{placeholder:"Wpisz wiadomo\u015b\u0107...",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleClick},"Wy\u015blij"),r.a.createElement(S.a,{when:this.state.value.length>0,message:"Po opuszczeniu strony wiadomo\u015b\u0107 zostanie usuni\u0119ta."})))}}]),t}(r.a.Component)),A=a(47),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={permission:!0},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.permission),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{render:function(){return e.state.permission?r.a.createElement("h3",null,"Panel administratora"):r.a.createElement(A.a,{to:"/login"})}}),r.a.createElement("button",{onClick:function(){return e.setState({permission:!1})}},"wyloguj"))}}]),t}(r.a.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={nameValue:"",passwordValue:"",permission:!1},a.handleChangeName=function(e){return a.setState({nameValue:e.target.value})},a.handleChangePass=function(e){a.setState({passwordValue:e.target.value})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"name"},"Podaj nazw\u0119:",r.a.createElement("input",{value:this.state.nameValue,onChange:this.handleChangeName,type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"name"},"Podaj has\u0142o:",r.a.createElement("input",{value:this.state.passwordValue,onChange:this.handleChangePass,type:"password"})),r.a.createElement("button",{onClick:this.handleClick},"Zaloguj"))}}]),t}(r.a.Component),B=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h3",null,e.id))},F=a(36),J=function(e){return console.log(e),r.a.createElement("div",{className:"product"},r.a.createElement("h2",null,"Strona produktu"),r.a.createElement(B,{id:e.match.params.id}),r.a.createElement(F.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},K=["car","bike","motor"],I=function(){var e=K.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(F.a,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("ul",null,e))},T=function(){return r.a.createElement("h1",{style:{textAlign:"center",marginTop:50}},"Strona nie istnieje")},W=function(){return r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:N}),r.a.createElement(d.a,{path:"/products",component:I}),r.a.createElement(d.a,{path:"/product/:id",component:J}),r.a.createElement(d.a,{path:"/contacts",component:P}),r.a.createElement(d.a,{path:"/admin",component:L}),r.a.createElement(d.a,{path:"/login",component:V}),r.a.createElement(d.a,{component:T}))},D=(a(41),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(d.a,{path:"/",exact:!0,render:function(){return r.a.createElement("p",null,"Jeste\u015b na stronie g\u0142\xf3wnej")}}),r.a.createElement(d.a,{path:"/:id",render:function(e){var t;return[{id:"products",name:"produkty"},{id:"product",name:"produkt"},{id:"contacts",name:"kontakt"},{id:"admin",name:"panel administracyjny"}].forEach(function(a){return a.id===e.match.params.id?t=a.name:e.match.params.id}),console.log(t),r.a.createElement("p",null,"Jeste\u015b na stronie",r.a.createElement("span",null," ",t),r.a.createElement(d.a,{path:"/:id/:id",render:function(e){return r.a.createElement("span",null," -> ",e.match.params.id)}}))}}))}),M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null," ",r.a.createElement(O,null)," "),r.a.createElement("section",{className:"page"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(D,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[19,2,1]]]);
//# sourceMappingURL=main.e7fa06ee.chunk.js.map