(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1079:function(e,a,t){},1080:function(e,a,t){},1081:function(e,a,t){},1082:function(e,a,t){},1083:function(e,a,t){},1084:function(e,a,t){},1085:function(e,a,t){},1086:function(e,a,t){"use strict";t.r(a);var n,r=t(0),s=t.n(r),c=t(10),i=t.n(c),o=(t(17),t(1)),l=t.n(o),u=(t(19),t(20),t(5)),m=t(2),d=t(21),v=t(30),f=t(31),p=t(1),g=(n=10,Array.from({length:n},function(){return h()})),E=p.mapKeys(g,"user_id"),_=function(e){var a={};return p.forEach(g,function(t){var n;a[t.user_id]=Object(m.a)({},p.mapKeys((n=e,Array.from({length:n},function(e,a){return{number:a,text:v.sentence(),is_user_msg:f.random.boolean()}})),"number"))}),a};h(),_(10);function h(){return{name:f.name.findName(),email:f.internet.email(),profile_pic:f.internet.avatar(),status:v.sentence(),user_id:d.generate()}}var y="SET_ACTIVE_USER_ID",b="SET_TYPING_VALUE",N="SEND_MESSAGE",I="EDIT_MESSAGE",w="DELETE_MESSAGE";var S=t(3);var U=Object(u.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h();return arguments.length>1&&arguments[1],e},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;arguments.length>1&&arguments[1];return e},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:return a.payload;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(10),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:var t=a.payload,n=t.message,r=t.activeUserId,s=t.messageId,c=e[r],i=s||+l.a.keys(c).pop()+1;return console.log(c),Object(m.a)({},e,Object(S.a)({},r,Object(m.a)({},c,Object(S.a)({},i,{number:i,text:s?"".concat(n," (edited)"):n,is_user_msg:!0}))));case w:var o=a.payload,u=o.message_Id,d=o.activeUser_Id;return console.log(u),Object(m.a)({},e,Object(S.a)({},d,l.a.omit(e[d],u)));default:return e}},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return a.payload;case N:return"";case I:return a.payload.message;default:return e}},messageId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"null",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:return a.payload.messageId;case w:return a.payload.message_Id;default:return e}}}),j=Object(u.b)(U),k=(t(1079),function(e){var a=e.user,t=a.name,n=a.profile_pic,r=a.status,c=t.split(" ")[0];return s.a.createElement("div",{className:"Empty"},s.a.createElement("h1",{className:"Empty__name"},"Welcome, ",c),s.a.createElement("img",{src:n,alt:t,className:"Empty__img"}),s.a.createElement("p",{className:"Empty__status"},s.a.createElement("b",null,"Status:")," ",r),s.a.createElement("button",{className:"Empty__btn"},"Start a conversation"),s.a.createElement("p",{className:"Empty__info"},"Search for someone to start chatting with or go to contacts to check who is available"))}),O=(t(1080),t(1081),function(e){var a=e.user,t=a.name,n=a.profile_pic,r=a.status;return s.a.createElement("header",{className:"Header"},s.a.createElement("div",{className:"Header__details"},s.a.createElement("img",{src:n,alt:t,className:"Header__image"}),s.a.createElement("h1",{className:"Header__name"},t)),s.a.createElement("p",{className:"Header__status"},r))}),C=(t(1082),function(e){var a=e.message,t=j.getState().activeUserId,n=a.text,r=a.is_user_msg,c=a.number;return r?s.a.createElement("div",{className:"Chat is-user-msg",onDoubleClick:function(e,a){j.dispatch(function(e,a,t){return{type:I,payload:{message:e,messageId:a,activeUserId:t}}}(a,e,t))}.bind(null,c,n)},s.a.createElement("span",{className:"close__btn",onClick:function(e){j.dispatch({type:w,payload:{message_Id:e,activeUser_Id:t}})}.bind(null,c)},"X"),n):s.a.createElement("div",{className:"Chat"},n)}),A=function(e){var a=e.messages,t=Object(r.useRef)();Object(r.useEffect)(function(){n()}),Object(r.useEffect)(function(){n()},[]);var n=function(){t.current.scrollTop=t.current.scrollHeight};return s.a.createElement("div",{className:"Chats",ref:t},a.map(function(e){return s.a.createElement(C,{message:e,key:e.number})}))},T=(t(1083),function(e){var a=e.value;return s.a.createElement("form",{className:"Message",onSubmit:function(e){e.preventDefault();var a=j.getState(),t=a.typing,n=a.activeUserId,r=a.messageId;j.dispatch(function(e,a,t){return{type:N,payload:{message:e,activeUserId:a,messageId:t}}}(t,n,r))}},s.a.createElement("input",{className:"Message__input",onChange:function(e){var a;j.dispatch((a=e.target.value,{type:b,payload:a}))},value:a,placeholder:"write a message"}))}),D=function(e){var a=e.activeUserId,t=j.getState(),n=t.contacts[a],r=t.messages[a],c=t.typing;return s.a.createElement("div",{className:"ChatWindow"},s.a.createElement(O,{user:n}),s.a.createElement(A,{messages:l.a.values(r)}),s.a.createElement(T,{value:c}))},H=function(){var e=j.getState(),a=e.user,t=e.activeUserId;return s.a.createElement("main",{className:"Main"},t?s.a.createElement(D,{activeUserId:t}):s.a.createElement(k,{user:a,activeUserId:t}))},M=(t(1084),function(e){var a=e.user,t=a.name,n=a.profile_pic,r=a.status,c=a.user_id;return s.a.createElement("div",{className:"User",onClick:function(){j.dispatch(function(e){return{type:y,payload:e}}(c))}},s.a.createElement("img",{src:n,alt:t,className:"User__pic"}),s.a.createElement("div",{className:"User__details"},s.a.createElement("p",{className:"User__details-name"},t),s.a.createElement("p",{className:"User__details-status"},r)))}),x=(t(1085),function(e){var a=e.contacts;return s.a.createElement("aside",{className:"Sidebar"},a.map(function(e){return s.a.createElement(M,{user:e,key:e.user_id})}))}),G=function(){var e=j.getState(),a=e.contacts,t=e.user,n=e.activeUserId;return s.a.createElement("div",{className:"App"},s.a.createElement(x,{contacts:l.a.values(a)}),s.a.createElement(H,{user:t,activeUserId:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(){console.log("%c Rendered with \ud83d\udc49 \ud83d\udc49\ud83d\udc47","background: purple; color:#fff"),console.log(j.getState()),i.a.render(s.a.createElement(G,null),document.getElementById("root"))};W(),j.subscribe(W),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},12:function(e,a,t){e.exports=t(1086)},17:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.b347787c.chunk.js.map