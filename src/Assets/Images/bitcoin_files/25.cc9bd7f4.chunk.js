(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[25],{1689:function(e,a,s){"use strict";var t=s(4),i=s(7),n=s(12),l=s(0),c=s(5),r=s.n(c),o=s(69),m=s(171),d=s(101),g=function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s},x=function(e){var a,s=e.prefixCls,n=e.className,c=e.checked,o=e.onChange,m=e.onClick,x=g(e,["prefixCls","className","checked","onChange","onClick"]),j=(0,l.useContext(d.b).getPrefixCls)("tag",s),h=r()(j,(a={},Object(t.a)(a,"".concat(j,"-checkable"),!0),Object(t.a)(a,"".concat(j,"-checkable-checked"),c),a),n);return l.createElement("span",Object(i.a)({},x,{className:h,onClick:function(e){null===o||void 0===o||o(!c),null===m||void 0===m||m(e)}}))},j=s(363),h=s(364),b=function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s},p=new RegExp("^(".concat(j.a.join("|"),")(-inverse)?$")),u=new RegExp("^(".concat(j.b.join("|"),")$")),O=function(e,a){var s,c=e.prefixCls,g=e.className,x=e.style,j=e.children,O=e.icon,f=e.color,N=e.onClose,v=e.closeIcon,y=e.closable,w=void 0!==y&&y,k=b(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=l.useContext(d.b),S=C.getPrefixCls,T=C.direction,A=l.useState(!0),q=Object(n.a)(A,2),L=q[0],E=q[1];l.useEffect((function(){"visible"in k&&E(k.visible)}),[k.visible]);var J=function(){return!!f&&(p.test(f)||u.test(f))},P=Object(i.a)({backgroundColor:f&&!J()?f:void 0},x),D=J(),I=S("tag",c),z=r()(I,(s={},Object(t.a)(s,"".concat(I,"-").concat(f),D),Object(t.a)(s,"".concat(I,"-has-color"),f&&!D),Object(t.a)(s,"".concat(I,"-hidden"),!L),Object(t.a)(s,"".concat(I,"-rtl"),"rtl"===T),s),g),F=function(e){e.stopPropagation(),null===N||void 0===N||N(e),e.defaultPrevented||"visible"in k||E(!1)},$="onClick"in k||j&&"a"===j.type,B=Object(o.a)(k,["visible"]),K=O||null,M=K?l.createElement(l.Fragment,null,K,l.createElement("span",null,j)):j,W=l.createElement("span",Object(i.a)({},B,{ref:a,className:z,style:P}),M,w?v?l.createElement("span",{className:"".concat(I,"-close-icon"),onClick:F},v):l.createElement(m.a,{className:"".concat(I,"-close-icon"),onClick:F}):null);return $?l.createElement(h.a,null,W):W},f=l.forwardRef(O);f.displayName="Tag",f.CheckableTag=x;a.a=f},1692:function(e,a,s){"use strict";s(0);var t=s(1),i=function(e){var a=e.title,s=e.extra,i=e.styleName;return Object(t.jsxs)("h2",{className:"gx-entry-title ".concat(i),children:[a,Object(t.jsx)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block",children:s})]})};i.defaultProps={styleName:""},a.a=i},1758:function(e,a,s){"use strict";s.d(a,"g",(function(){return i})),s.d(a,"h",(function(){return n})),s.d(a,"c",(function(){return l})),s.d(a,"b",(function(){return c})),s.d(a,"e",(function(){return r})),s.d(a,"d",(function(){return o})),s.d(a,"a",(function(){return m})),s.d(a,"f",(function(){return d}));s(0);var t=s(1),i={id:"vUAqPRNWgYdS2DyJNAC1lV5KpJF21",name:"Chelsea Jones @chelsea",image:"/assets/images/wall/alisha.jpeg",address:"Florida, USA",email:"@chelsea"},n={followers:"2k+",following:847,frinds:327,isFollow:!1},l=[{id:1,interest:"Music"},{id:2,interest:"Drawing"},{id:3,interest:"Sports"},{id:4,interest:"Graphic Designing"},{id:5,interest:"Tourism"}],c=[{id:1,image:"/assets/images/avatar/a5.png",name:"Chelsea",status:"online"},{id:2,image:"/assets/images/avatar/a6.png",name:"Kenery Thomson",status:"offline"},{id:3,image:"/assets/images/avatar/a7.png",name:"Amanda",status:"away"},{id:4,image:"/assets/images/avatar/a8.png",name:"Joshua",status:"away"},{id:5,image:"/assets/images/avatar/a14.png",name:"Alex Mulski",status:"away"},{id:6,image:"/assets/images/avatar/a10.png",name:"Stella Johnson",status:"away"}],r=[{id:1,text:"",user:{id:1,name:"Kenery Thomson",image:"/assets/images/wall/alisha.jpeg"},date:"Sun Jul 22 2018 10:02:47 GMT+0530 (India Standard Time)",mediaList:[{image:"/assets/images/products/football.jpeg"},{image:"/assets/images/products/headphone.jpeg"}],viewCount:350,likeCount:150,isLike:!1,commentCount:0,commentList:[{user:{id:1,name:"Kenery Thomson",image:"/assets/images/avatar/jimmy-jo.png"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Mon Jul 23 2018 10:02:47 GMT+0530 (India Standard Time)",isLike:!0,likeCount:2,commentList:[]}]},{id:2,text:"",user:{id:1,name:"Kenery Thomson",image:"/assets/images/avatar/john-smith.png"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"/assets/images/products/speaker.jpeg"},{image:"/assets/images/products/iPhone.jpeg"},{image:"/assets/images/products/wach.jpeg"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"/assets/images/avatar/a6.png"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]},{id:3,text:"",user:{id:1,name:"Kenery Thomson",image:"/assets/images/wall/alisha.jpeg"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"/assets/images/products/headphone.jpeg"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"/assets/images/avatar/kadir-m.png"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]}],o=[{id:1,image:"/assets/images/wall/p1.jpeg"},{id:2,image:"/assets/images/wall/p2.jpeg"},{id:3,image:"/assets/images/wall/p3.jpeg"},{id:4,image:"/assets/images/wall/p4.jpeg"},{id:5,image:"/assets/images/wall/p5.jpeg"},{id:6,image:"/assets/images/wall/p6.jpeg"}],m=[{id:1,image:"/assets/images/wall/c1.jpg",title:"Layers"},{id:2,image:"/assets/images/wall/c2.jpg",title:"play"},{id:3,image:"/assets/images/wall/c3.jpg",title:"Fun & Tourism"},{id:4,image:"/assets/images/wall/c4.jpg",title:"Music Lovers"},{id:5,image:"/assets/images/wall/c5.jpg",title:"Dancing"},{id:6,image:"/assets/images/wall/c6.jpg",title:"Fitness"}],d=[{id:1,day:"Today",tasks:[{id:1,name:"Mila Alba",title:[Object(t.jsx)("span",{className:"gx-link",children:"Mila Alba"},1)," left a 5 star review on ",Object(t.jsx)("span",{className:"gx-link",children:"Albama\u2019s House"},2)],avatar:"/assets/images/avatar/a7.png",imageList:[]},{id:2,name:"Bob Builder",title:["Callback request from ",Object(t.jsx)("span",{className:"gx-link",children:"Bob Builder"},3)," for the property ",Object(t.jsx)("span",{className:"gx-link",children:"Dimitri House"},4)],avatar:"/assets/images/avatar/a10.png",imageList:[]},{id:3,name:"Tom Moody",title:["Congratulations to ",Object(t.jsx)("span",{className:"gx-link",children:"Tom Moody"},5)," for joining 10+ club "],avatar:"/assets/images/avatar/a11.png",imageList:[]},{id:4,name:"Norman Dolphi",title:["Norman Dolphi is looking for a house in New Jersy, USA"],avatar:"",imageList:[]}]},{id:2,day:"Yesterday",tasks:[{id:5,name:"Kily Johns",title:["Agent ",Object(t.jsx)("span",{className:"gx-link",children:"Kily Johns"},6)," has added 7 new photos to the property ",Object(t.jsx)("span",{className:"gx-link",children:"Albama\u2019s House"},7)],avatar:"",imageList:["/assets/images/avatar/a7.png","/assets/images/avatar/a12.png","/assets/images/avatar/a13.png"]},{id:6,name:"Tom Moody",title:["Welcome to a new agent ",Object(t.jsx)("span",{className:"gx-link",children:"Tom Moody in the Company"},8)],avatar:"/assets/images/avatar/a12.png",imageList:[]},{id:7,name:"Oliver Shorter",title:[Object(t.jsx)("span",{className:"gx-link",children:"Oliver Shorter"},9)," is looking for an office space in ",Object(t.jsx)("span",{className:"gx-link",children:"Colorado, USA"},10)],avatar:"/assets/images/avatar/a13.png",imageList:[]}]}]},1765:function(e,a,s){"use strict";var t=s(62),i=s(0),n=s(1807),l=s(1651),c=s(1692),r=s(128),o=s(1),m=function(e){var a=e.task;return Object(o.jsxs)(r.a,{children:[Object(o.jsx)("p",{className:"gx-mb-0",children:a.title}),a.imageList.length>0?Object(o.jsx)("ul",{className:"gx-list-inline gx-mb-3 gx-mt-2",children:a.imageList.map((function(e,s){return 2===s?Object(o.jsx)("li",{className:"gx-mb-1",children:Object(o.jsxs)("span",{className:"gx-link gx-img-more",children:[" +",a.imageList.length-2," More"]})},s):s>2?null:Object(o.jsx)("li",{className:"gx-mb-1",children:Object(o.jsx)(l.a,{shape:"square",className:"gx-size-40",src:e})},s)}))}):null]})},d=n.a.Item;function g(e,a){if(""===e.avatar){var s=e.name.split(" ");if(1===e.name.split(" ").length){var t=s[0].charAt(0).toUpperCase();return Object(o.jsx)(l.a,{shape:a,className:"gx-size-40 gx-bg-primary",children:t})}var i=s[0].charAt(0).toUpperCase()+s[1].charAt(0).toUpperCase();return Object(o.jsx)(l.a,{shape:a,className:"gx-size-40 gx-bg-cyan",children:i})}return Object(o.jsx)(l.a,{shape:a,className:"gx-size-40",src:e.avatar})}a.a=function(e){var a=Object(i.useState)(3),s=Object(t.a)(a,2),l=s[0],r=s[1],x=Object(i.useState)(e.shape),j=Object(t.a)(x,2),h=j[0],b=j[1];Object(i.useEffect)((function(){b(e.shape),window.innerWidth<575&&r(1)}),[e.shape]);return Object(o.jsxs)("div",{className:"gx-entry-sec",children:[Object(o.jsx)(c.a,{title:"Recent Activities"}),e.recentList.slice(0,l).map((function(e,a){return Object(o.jsxs)("div",{className:"gx-timeline-info",children:[Object(o.jsx)("h4",{className:"gx-timeline-info-day",children:e.day}),Object(o.jsx)(n.a,{children:e.tasks.map((function(e,a){return Object(o.jsx)(d,{mode:"alternate",dot:g(e,h),children:Object(o.jsx)(m,{task:e})},"timeline"+a)}))})]},"activity"+a)})),Object(o.jsx)("span",{className:"gx-link gx-btn-link",onClick:function(){r(l+1)},children:"Load More"})]})}},1807:function(e,a,s){"use strict";var t=s(7),i=s(4),n=s(0),l=s(5),c=s.n(l),r=s(143),o=s(101),m=function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s},d=function(e){var a,s,l=e.prefixCls,r=e.className,d=e.color,g=void 0===d?"blue":d,x=e.dot,j=e.pending,h=void 0!==j&&j,b=(e.position,e.label),p=e.children,u=m(e,["prefixCls","className","color","dot","pending","position","label","children"]),O=(0,n.useContext(o.b).getPrefixCls)("timeline",l),f=c()((a={},Object(i.a)(a,"".concat(O,"-item"),!0),Object(i.a)(a,"".concat(O,"-item-pending"),h),a),r),N=c()((s={},Object(i.a)(s,"".concat(O,"-item-head"),!0),Object(i.a)(s,"".concat(O,"-item-head-custom"),!!x),Object(i.a)(s,"".concat(O,"-item-head-").concat(g),!0),s));return n.createElement("li",Object(t.a)({},u,{className:f}),b&&n.createElement("div",{className:"".concat(O,"-item-label")},b),n.createElement("div",{className:"".concat(O,"-item-tail")}),n.createElement("div",{className:N,style:{borderColor:/blue|red|green|gray/.test(g||"")?void 0:g}},x),n.createElement("div",{className:"".concat(O,"-item-content")},p))},g=s(55),x=function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s},j=function(e){var a,s=n.useContext(o.b),l=s.getPrefixCls,m=s.direction,j=e.prefixCls,h=e.pending,b=void 0===h?null:h,p=e.pendingDot,u=e.children,O=e.className,f=e.reverse,N=void 0!==f&&f,v=e.mode,y=void 0===v?"":v,w=x(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),k=l("timeline",j),C="boolean"===typeof b?null:b,S=b?n.createElement(d,{pending:!!b,dot:p||n.createElement(r.a,null)},C):null,T=n.Children.toArray(u);T.push(S),N&&T.reverse();var A=function(e,a){return"alternate"===y?"right"===e.props.position?"".concat(k,"-item-right"):"left"===e.props.position?"".concat(k,"-item-left"):"".concat(k,a%2===0?"-item-left":"-item-right"):"left"===y?"".concat(k,"-item-left"):"right"===y||"right"===e.props.position?"".concat(k,"-item-right"):""},q=T.filter((function(e){return!!e})),L=n.Children.count(q),E="".concat(k,"-item-last"),J=n.Children.map(q,(function(e,a){var s=a===L-2?E:"",t=a===L-1?E:"";return Object(g.a)(e,{className:c()([e.props.className,!N&&b?s:t,A(e,a)])})})),P=T.some((function(e){var a;return!!(null===(a=null===e||void 0===e?void 0:e.props)||void 0===a?void 0:a.label)})),D=c()(k,(a={},Object(i.a)(a,"".concat(k,"-pending"),!!b),Object(i.a)(a,"".concat(k,"-reverse"),!!N),Object(i.a)(a,"".concat(k,"-").concat(y),!!y&&!P),Object(i.a)(a,"".concat(k,"-label"),P),Object(i.a)(a,"".concat(k,"-rtl"),"rtl"===m),a),O);return n.createElement("ul",Object(t.a)({},w,{className:D}),J)};j.Item=d;var h=j;a.a=h},2417:function(e,a,s){"use strict";s.r(a);var t=s(0),i=s(298),n=s(170),l=s(1638),c=s(1639),r=s(350),o=s(656),m=s(128),d=s(62),g=s(48),x=s(1),j=function(e){var a=Object(t.useState)(!1),s=Object(d.a)(a,2),i=s[0],n=s[1],l=function(){n(!i)},c=e.chartProperties,r=c.prize,o=c.title,m=c.styleName,j=c.desc,h=c.bgColor,b=c.percent;return Object(x.jsx)(g.a,{styleName:"gx-card-full",children:Object(x.jsxs)("div",{className:"gx-fillchart gx-bg-".concat(h,!0===i?" gx-fillchart-nocontent":" gx-overlay-fillchart"),children:[Object(x.jsx)("div",{className:"ant-card-head-title",children:o}),e.children,Object(x.jsxs)("div",{className:"gx-fillchart-content",children:[Object(x.jsx)("div",{className:"ant-card-head-title gx-mb-3",children:o}),Object(x.jsx)("h2",{className:"gx-mb-2 gx-fs-xxxl gx-font-weight-medium",children:r}),b>0,Object(x.jsxs)("p",{className:"gx-mb-0 gx-fs-sm",children:[Object(x.jsxs)("span",{className:"gx-font-weight-medium gx-fs-md gx-chart-".concat(m),children:[b,b>0?Object(x.jsx)("i",{className:"icon icon-menu-up gx-fs-sm"}):null]}),j]})]}),Object(x.jsx)("div",{className:"gx-fillchart-btn-close",onClick:l,children:Object(x.jsx)("i",{className:"icon icon-close"})}),Object(x.jsx)("div",{className:"gx-fillchart-btn",onClick:l,children:Object(x.jsx)("i",{className:"icon icon-stats gx-fs-xxxl"})})]})})},h=s(187),b=s(1692),p=[{id:1,image:"/assets/images/avatar/alex-dolgove.png",name:"Alex Johns",rating:"5.0",deals:"27 Deals"},{id:2,image:"/assets/images/avatar/chelsea-johns.jpg",name:"Chelsea Johns",rating:"4.5",deals:"21 Deals"},{id:3,image:"/assets/images/avatar/domnic-brown.png",name:"Domnic Johns",rating:"5.0",deals:"27 Deals"},{id:4,image:"/assets/images/avatar/ken-ramirez.jpg",name:"Ken Ramirez",rating:"5.0",deals:"27 Deals"},{id:5,image:"/assets/images/avatar/zakie-chain.jpg",name:"Zakie Chain",rating:"5.0",deals:"27 Deals"}],u=function(){return Object(x.jsxs)(m.a,{children:[Object(x.jsx)(b.a,{styleName:"gx-flex-row",title:"Popular Agents",extra:Object(x.jsxs)("span",{children:["Go to agents list ",Object(x.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})}),Object(x.jsx)("ul",{className:"gx-agents-list",children:p.map((function(e,a){return Object(x.jsx)("li",{children:Object(x.jsxs)("div",{className:"gx-profileon gx-pointer",children:[Object(x.jsx)("div",{className:"gx-profileon-thumb",children:Object(x.jsx)("img",{alt:"...",src:e.image,className:"gx-rounded-lg"})}),Object(x.jsxs)("div",{className:"gx-profileon-content",children:[Object(x.jsx)("h5",{className:"gx-mb-1 gx-text-truncate",children:e.name}),Object(x.jsxs)("p",{className:"gx-mb-0 gx-fs-sm gx-text-truncate",children:[Object(x.jsx)("i",{className:"icon icon-star gx-text-orange gx-pr-1"})," ",e.rating," ",Object(x.jsx)("span",{className:"gx-px-sm-1",children:"|"})," ",e.deals]})]})]})},a)}))}),Object(x.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-mb-4 gx-d-block gx-d-sm-none",children:["Go to agents list ",Object(x.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})},O=s(1765),f=s(1758),N=s(202),v=function(){return Object(x.jsx)(g.a,{title:Object(x.jsx)("h2",{className:"h4 gx-text-capitalize gx-mb-0",children:"Your Current Plan"}),extra:Object(x.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-oth-plans-up",children:["Other plans ",Object(x.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]}),children:Object(x.jsxs)("div",{className:"gx-currentplan-row",children:[Object(x.jsxs)("div",{className:"gx-currentplan-col",children:[Object(x.jsxs)("h2",{className:"gx-text-primary gx-fs-xlxl gx-font-weight-medium gx-mb-1",children:["$19",Object(x.jsx)("sub",{className:"gx-fs-md gx-bottom-0",children:"/month"})]}),Object(x.jsxs)("p",{className:"gx-mb-1",children:[Object(x.jsx)("span",{className:"gx-size-8 gx-bg-dark gx-rounded-xs gx-d-inline-block gx-mr-1"})," Max listing items 2K"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{className:"gx-size-8 gx-bg-dark gx-rounded-xs gx-d-inline-block gx-mr-1"})," Max agents - 10"]})]}),Object(x.jsx)("div",{className:"gx-currentplan-col gx-currentplan-right",children:Object(x.jsxs)("div",{className:"gx-currentplan-right-content",children:[Object(x.jsx)("p",{className:"gx-text-red",children:"Expires in 80 days"}),Object(x.jsx)(N.a,{className:"gx-btn gx-btn-orange gx-mb-0 gx-mr-0 gx-text-uppercase",children:"Renew Plan"}),Object(x.jsxs)("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-mts-3 gx-oth-plans-down",children:["Other plans ",Object(x.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})})]})})},y=s(1643),w=s(275),k=s(660),C=s(1650),S=[{name:"JAN",closedDeals:200,queries:600},{name:"FEB",closedDeals:500,queries:900},{name:"MAR",closedDeals:700,queries:1200},{name:"APR",closedDeals:800,queries:1300},{name:"MAY",closedDeals:700,queries:1200},{name:"JUN",closedDeals:500,queries:900},{name:"JUL",closedDeals:600,queries:200},{name:"AUG",closedDeals:200,queries:800},{name:"SEP",closedDeals:400,queries:400},{name:"OCT",closedDeals:400,queries:500},{name:"NOV",closedDeals:400,queries:1200},{name:"DEC",closedDeals:200,queries:800}],T=function(){return Object(x.jsxs)(g.a,{children:[Object(x.jsxs)("div",{className:"gx-dealclose-header",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"h4 gx-mb-2",children:"927 Deals Closed"}),Object(x.jsx)("p",{className:"gx-text-grey",children:"This year"})]}),Object(x.jsxs)("div",{className:"gx-dealclose-header-right",children:[Object(x.jsxs)("p",{className:"gx-mb-2",children:[Object(x.jsx)(C.a,{className:"gx-mb-0",status:"warning"}),"Queries"]}),Object(x.jsxs)("p",{className:"gx-ml-2 gx-mb-2",children:[Object(x.jsx)(C.a,{className:"gx-mb-0",status:"processing"}),"Closed Deals"]})]})]}),Object(x.jsx)(l.a,{width:"100%",height:90,children:Object(x.jsxs)(y.a,{data:S,margin:{top:0,right:0,left:0,bottom:0},children:[Object(x.jsx)(r.a,{}),Object(x.jsx)(w.a,{dataKey:"name"}),Object(x.jsx)(k.a,{dataKey:"closedDeals",stackId:"a",fill:"#038FDE",barSize:8}),Object(x.jsx)(k.a,{dataKey:"queries",stackId:"a",fill:"#FE9E15",barSize:8})]})})]})},A=s(1634),q=s(257),L=s(1689),E=function(e){var a=e.data,s=a.image,t=a.title,i=a.subTitle,n=a.name,l=a.date,c=a.isFeatured,r=a.prize,o=a.sqft,m=a.bedrooms,d=a.baths,g=a.area,j=a.more;return Object(x.jsxs)("div",{className:"gx-media gx-featured-item",children:[!0===c?Object(x.jsx)(L.a,{color:"orange",children:Object(x.jsx)("span",{className:"gx-text-uppercase",children:"featured"})}):null,Object(x.jsxs)("div",{className:"gx-featured-thumb",children:[Object(x.jsx)("img",{className:"gx-rounded-lg gx-width-175",src:s,alt:"..."}),Object(x.jsx)(L.a,{className:"gx-rounded-xs gx-bg-orange gx-border-orange gx-text-white",children:"Featured"})]}),Object(x.jsxs)("div",{className:"gx-media-body gx-featured-content",children:[Object(x.jsxs)("div",{className:"gx-featured-content-left",children:[Object(x.jsx)(L.a,{className:"gx-rounded-xs",color:"#06BB8A",children:"FOR SALE"}),Object(x.jsx)("h3",{className:"gx-mb-2",children:t}),Object(x.jsx)("p",{className:"gx-text-grey gx-mb-1",children:i}),Object(x.jsxs)("div",{className:"ant-row-flex",children:[Object(x.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(x.jsx)("span",{className:"gx-text-grey",children:"Bedrooms:"})," ",m]}),Object(x.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(x.jsx)("span",{className:"gx-text-grey",children:"Baths:"})," ",d]}),Object(x.jsxs)("p",{className:"gx-mr-3 gx-mb-1",children:[Object(x.jsx)("span",{className:"gx-text-grey",children:"Area:"})," ",g]}),Object(x.jsxs)("a",{className:"gx-text-grey gx-text-underline gx-mb-2",href:"#/",children:[" + ",j," more"]})]}),Object(x.jsxs)("div",{className:"ant-row-flex",children:[Object(x.jsxs)("p",{className:"gx-text-grey gx-mb-1",children:[Object(x.jsx)("i",{className:"icon icon-user gx-fs-xs gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),n]}),Object(x.jsxs)("p",{className:"gx-text-grey gx-ml-4 gx-mb-1",children:[Object(x.jsx)("i",{className:"icon icon-datepicker gx-fs-xs gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),l]})]})]}),Object(x.jsxs)("div",{className:"gx-featured-content-right",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"gx-text-primary gx-mb-1 gx-font-weight-medium",children:r}),Object(x.jsx)("p",{className:"gx-text-grey gx-fs-sm",children:o})]}),Object(x.jsxs)("p",{className:"gx-text-primary gx-text-truncate gx-mt-auto gx-mb-0 gx-pointer",children:["Check in detail ",Object(x.jsx)("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})]})]})]})]})},J=[[{id:1,image:"/assets/images/dashboard/pexels-photo-home-3.jpg",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"/assets/images/dashboard/pexels-photo-home-1.jpg",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"/assets/images/dashboard/pexels-photo-home-2.jpg",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"/assets/images/dashboard/pexels-photo-home-3.jpg",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"/assets/images/dashboard/pexels-photo-home-1.jpg",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"/assets/images/dashboard/pexels-photo-home-2.jpg",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"/assets/images/dashboard/pexels-photo-home-3.jpg",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"/assets/images/dashboard/pexels-photo-home-1.jpg",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"/assets/images/dashboard/pexels-photo-home-2.jpg",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}],[{id:1,image:"/assets/images/dashboard/pexels-photo-home-3.jpg",isFeatured:!1,title:"Luxury family home at beach side",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:3,baths:3,area:"1400 m2",more:1},{id:2,image:"/assets/images/dashboard/pexels-photo-home-1.jpg",isFeatured:!1,title:"Beach side Villah ",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:2,baths:2,area:"1100 m2",more:2},{id:3,image:"/assets/images/dashboard/pexels-photo-home-2.jpg",isFeatured:!1,title:"CB Jeni Lifestyle Homes",subTitle:"South Western Ave",name:"John Nash",date:"2 days ago",prize:"$670,500",sqft:"$587/sqft",bedrooms:4,baths:1,area:"1300 m2",more:4}]],P=function(){var e=Object(t.useState)(J[0]),a=Object(d.a)(e,2),s=a[0],i=a[1],n=Object(t.useState)(!1),l=Object(d.a)(n,2),c=l[0],r=l[1];return Object(x.jsxs)(g.a,{children:[Object(x.jsxs)("div",{className:"ant-row-flex gx-justify-content-between gx-mb-3 gx-mb-sm-4 gx-dash-search",children:[Object(x.jsx)("h2",{className:"h4 gx-mb-3 gx-mb-sm-1 gx-mr-2",children:"Properties"}),Object(x.jsx)("div",{className:"gx-mx-sm-2",children:Object(x.jsxs)(A.a.Group,{className:"gx-radio-group-link gx-radio-group-link-bg-light",defaultValue:0,onChange:function(e){var a=e.target.value;i(J[a]),r(!0),setTimeout((function(){r(!1)}),1500)},children:[Object(x.jsx)(A.a.Button,{value:0,className:"gx-mb-2",children:"Popular"}),Object(x.jsx)(A.a.Button,{value:1,className:"gx-mb-2",children:"New Jersy"}),Object(x.jsx)(A.a.Button,{value:2,className:"gx-mb-2",children:"Colorado"}),Object(x.jsx)(A.a.Button,{value:3,className:"gx-mb-2",children:"Albama"})]})}),Object(x.jsx)("span",{className:"gx-ml-2 gx-search-icon",children:Object(x.jsx)("i",{className:"icon icon-search-new gx-pointer gx-text-primary gx-fs-xxl"})})]}),c?Object(x.jsx)(q.a,{className:"gx-loader-400"}):s.map((function(e,a){return Object(x.jsx)(E,{data:e},a)}))]})};a.default=function(){return Object(x.jsx)(m.a,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(n.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(x.jsx)(j,{chartProperties:{title:"PROPERTIES",prize:"26,873",icon:"stats",bgColor:"primary",styleName:"up",desc:"This week",percent:"03%"},children:Object(x.jsx)(l.a,{width:"100%",height:75,children:Object(x.jsxs)(c.a,{data:h.g,margin:{top:0,right:0,left:0,bottom:0},children:[Object(x.jsx)(r.a,{}),Object(x.jsx)(o.a,{dataKey:"properties",strokeWidth:0,stackId:"2",stroke:"#092453",fill:"#092453",fillOpacity:1})]})})})}),Object(x.jsx)(n.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(x.jsx)(j,{chartProperties:{title:"CITIES",prize:"3,840",icon:"stats",bgColor:"orange",styleName:"up",desc:"7 New cities this week",percent:""},children:Object(x.jsx)(l.a,{width:"100%",height:75,children:Object(x.jsxs)(c.a,{data:h.a,margin:{top:0,right:0,left:0,bottom:0},children:[Object(x.jsx)(r.a,{}),Object(x.jsx)(o.a,{dataKey:"cities",type:"monotone",strokeWidth:0,stackId:"2",stroke:"#C87000",fill:"#C87000",fillOpacity:1})]})})})}),Object(x.jsx)(n.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(x.jsx)(j,{chartProperties:{title:"ONLINE VISITS",prize:"84,729",icon:"stats",bgColor:"teal",styleName:"down",desc:"Avg. 327 visits daily",percent:""},children:Object(x.jsx)(l.a,{width:"100%",height:75,children:Object(x.jsxs)(c.a,{data:h.l,margin:{top:0,right:0,left:0,bottom:0},children:[Object(x.jsx)(r.a,{}),Object(x.jsx)(o.a,{dataKey:"visit",strokeWidth:0,stackId:"2",stroke:"#158765",fill:"#158765",fillOpacity:1})]})})})}),Object(x.jsx)(n.a,{xl:6,lg:12,md:12,sm:12,xs:24,children:Object(x.jsx)(j,{chartProperties:{title:"ONLINE QUERIES",prize:"87,239",icon:"stats",bgColor:"pink",styleName:"down",desc:"from past month",percent:"39"},children:Object(x.jsx)(l.a,{width:"100%",height:75,children:Object(x.jsxs)(c.a,{data:h.h,margin:{top:0,right:0,left:0,bottom:0},children:[Object(x.jsx)(r.a,{}),Object(x.jsx)(o.a,{dataKey:"queries",strokeWidth:0,stackId:"2",stroke:"#BB1258",fill:"#BB1258",fillOpacity:1})]})})})}),Object(x.jsx)(n.a,{xl:8,lg:24,md:24,sm:24,xs:24,className:"gx-order-lg-2",children:Object(x.jsx)(g.a,{children:Object(x.jsx)(O.a,{recentList:f.f})})}),Object(x.jsxs)(n.a,{xl:16,lg:24,md:24,sm:24,xs:24,className:"gx-order-lg-1",children:[Object(x.jsx)(u,{}),Object(x.jsxs)(i.a,{children:[Object(x.jsx)(n.a,{xl:12,lg:12,md:24,sm:24,xs:24,children:Object(x.jsx)(v,{})}),Object(x.jsx)(n.a,{xl:12,lg:12,md:24,sm:24,xs:24,children:Object(x.jsx)(T,{})})]}),Object(x.jsx)(P,{})]})]})})}}}]);