(this["webpackJsonpsecond-half-team"]=this["webpackJsonpsecond-half-team"]||[]).push([[0],{10:function(e,a,c){e.exports={header:"Navbar_header__qu-As",nav:"Navbar_nav__1dWpI","image-container":"Navbar_image-container__3k3Xi",image:"Navbar_image__3tYK1"}},11:function(e,a,c){e.exports={card:"About_card__1rr9n",info:"About_info__3szVM","image-container":"About_image-container__1ljBz",image:"About_image__3JpeB"}},16:function(e,a,c){e.exports={footer:"Footer_footer__3kRR3",nav:"Footer_nav__1HYy0"}},20:function(e,a,c){e.exports={members:"Team_members__3aYnD"}},22:function(e,a,c){e.exports={section:"Highlights_section__2iK7Q"}},28:function(e,a,c){},35:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c.n(t),i=c(18),s=c.n(i),r=(c(28),c(8)),o=c(2),l=c(16),m=c.n(l),j=c(0),b=function(){return Object(j.jsx)("footer",{className:m.a.footer,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("nav",{className:m.a.nav,children:[Object(j.jsx)("div",{children:"Home"}),Object(j.jsx)("div",{children:"About"}),Object(j.jsx)("div",{children:"Team"}),Object(j.jsx)("div",{children:"Contact"})]})})})},d=c(6),u=c(19),_=c.p+"static/media/Logo.c07c92ed.png",h=c(10),x=c.n(h),O=function(e){var a=e.showLogo,c=void 0===a||a,t=e.backgroundColor,n=void 0===t?"rgba(0,0,0,0.12)":t;return Object(j.jsx)("header",{className:x.a.header,style:{backgroundColor:n},children:Object(j.jsxs)("nav",{className:x.a.nav,children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/",children:"About"}),Object(j.jsx)(r.b,{to:"/",className:x.a["image-container"],children:c&&Object(j.jsx)("img",{src:_,alt:"logo",className:x.a.image})}),Object(j.jsx)(r.b,{to:"/",children:"Team"}),Object(j.jsx)(r.b,{to:"/",children:"Contact"})]})})},g=c(11),f=c.n(g),v=function(){return Object(j.jsx)("section",{className:"container",children:Object(j.jsxs)("div",{className:f.a.card,children:[Object(j.jsxs)("div",{className:f.a.info,children:[Object(j.jsx)("h1",{children:"Playing Games"}),Object(j.jsx)("h1",{children:"and Stuff"})]}),Object(j.jsx)("div",{className:f.a["image-container"],children:Object(j.jsx)("img",{src:"https://via.placeholder.com/300x200",alt:"about",className:f.a.image})})]})})},N=function(){return Object(j.jsx)("section",{className:"container",children:Object(j.jsx)("h1",{className:"text-center",children:"We Take Those! - Abraham Lincoln"})})},p=c(7),k=c.n(p),C=c(9),w=c(5),y=c.n(w),H=c(17),T=function(e){var a=e.link;switch(a.type){case"twitch":return Object(j.jsx)("a",{href:a.url,target:"_blank",rel:"noreferrer",className:y.a.link,children:Object(j.jsx)(C.a,{icon:H.a,size:"2x",className:y.a.icon})});case"youtube":return Object(j.jsx)("a",{href:a.url,target:"_blank",rel:"noreferrer",className:y.a.link,children:Object(j.jsx)(C.a,{icon:H.b,size:"2x",className:y.a.icon})});default:return null}},z=function(e){var a=e.member;return Object(j.jsxs)("div",{className:y.a.card,children:[Object(j.jsx)("div",{className:y.a["image-container"],children:Object(j.jsx)("img",{src:a.image,alt:"member",className:y.a.image})}),Object(j.jsxs)("div",{className:y.a.info,children:[Object(j.jsx)("div",{className:y.a.name,children:a.name}),Object(j.jsx)("div",{className:y.a.title,children:a.title}),Object(j.jsx)("div",{style:{flex:1}}),Object(j.jsx)("div",{className:y.a.icons,children:a.links&&a.links.map((function(e){return Object(j.jsx)(T,{link:e},e.type)}))})]})]})},L=c(20),M=c.n(L),F=[{name:"Ozzy Gomez",image:"https://via.placeholder.com/300x300",title:"Player",links:[{type:"twitch",url:"https://www.twitch.tv/OzzyGomez"}]}],A=function(){return Object(j.jsx)("section",{className:"container",children:Object(j.jsx)("div",{className:M.a.members,children:F.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(z,{member:e})},e.name)}))})})},q=c(21),E=c.n(q),S=c(23),I=c.p+"static/media/lol.04b3cefa.png",K=c.p+"static/media/valorant.64f0064d.png",B=c.p+"static/media/tft.3ea9cebc.png",W=c(22),P=c.n(W),R=function(){return Object(j.jsx)("section",{className:P.a.section,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("img",{src:"https://via.placeholder.com/300x200",alt:"banner",style:{width:"100%",height:500,objectFit:"contain"}})})})},Y=[{name:"Valorant",image:K},{name:"League of Legends",image:I},{name:"Team Fight Tactics",image:B}],D=function(){var e=Object(t.useRef)(null),a=Object(t.useRef)(null),c=Object(t.useState)(!0),n=Object(d.a)(c,2),i=n[0],s=n[1],r=Object(t.useState)(!0),o=Object(d.a)(r,2),l=o[0],m=o[1];return Object(t.useEffect)((function(){window.addEventListener("scroll",(function(){var c=document.documentElement.scrollTop;if(a.current){var t=a.current.scrollHeight,n=a.current.offsetTop;s(!(c>t+n))}if(e.current){var i=e.current.scrollHeight,r=e.current.offsetTop;m(!(c>i+r-64))}}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{showLogo:!i,backgroundColor:l?"":"rgba(0,0,0,0.52)"}),Object(j.jsx)("div",{ref:e,className:k.a.banner,children:Object(j.jsx)("img",{src:_,alt:"logo",className:k.a.image,ref:a})}),Object(j.jsx)(E.a,{className:k.a.marquee,speed:200,children:Y.map((function(e){return Object(j.jsxs)(t.Fragment,{children:[Object(j.jsx)("img",{src:e.image,alt:e.name,className:k.a["marquee-image"]}),Object(j.jsx)(C.a,{icon:S.a,className:k.a.icon})]},e.name)}))}),Object(j.jsx)("div",{className:k.a.section,children:Object(j.jsx)(v,{})}),Object(j.jsx)("div",{className:Object(u.a)(k.a.section,"bg-gray"),children:Object(j.jsx)(A,{})}),Object(j.jsx)(R,{}),Object(j.jsx)("div",{className:k.a.section,children:Object(j.jsx)(N,{})})]})};var G=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(D,{})})}),Object(j.jsx)(b,{})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(a){var c=a.getCLS,t=a.getFID,n=a.getFCP,i=a.getLCP,s=a.getTTFB;c(e),t(e),n(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),J()},5:function(e,a,c){e.exports={card:"MemberCard_card__31Wk3","image-container":"MemberCard_image-container__1zpHX",image:"MemberCard_image__1f4c0",info:"MemberCard_info__oBfw6",name:"MemberCard_name__2K6FW",title:"MemberCard_title__1mDdL",link:"MemberCard_link__1Envs",icon:"MemberCard_icon__2aYq4",icons:"MemberCard_icons__3AISI"}},7:function(e,a,c){e.exports={banner:"Home_banner__ICk5T",image:"Home_image__3vU4r",section:"Home_section__KviEk",marquee:"Home_marquee__KUebO","marquee-image":"Home_marquee-image__3KSXE",text:"Home_text__1NjLE",icon:"Home_icon__1_WeT"}}},[[35,1,2]]]);
//# sourceMappingURL=main.1926a596.chunk.js.map