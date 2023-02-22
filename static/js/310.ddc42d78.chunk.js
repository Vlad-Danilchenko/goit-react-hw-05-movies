"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{9245:function(n,t,e){e.d(t,{a:function(){return p}});var r,o=e(8966),i=e(168),a=e(7402).Z.div(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  width: 100px;\n"]))),c=e(184),p=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.g4,{height:"80",width:"80",radius:"9",color:"#d71b1b",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5310:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,o,i,a,c,p,u,f,l,s=e(9439),d=e(7596),h=e(168),g=e(1087),x=e(7402),m=x.Z.form(r||(r=(0,h.Z)(["\n  margin: 20px auto;\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 15px;\n  overflow: hidden;\n"]))),b=x.Z.input(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 4px;\n  height: 36px;\n\n  background-color: rgba(0, 0, 0, 0);\n\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 15px 0 0 15px;\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 140%;\n\n  letter-spacing: -0.03em;\n\n  color: #ffffff;\n"]))),v=x.Z.button(i||(i=(0,h.Z)(["\n  margin-left: -2px;\n  padding: 0 32px 0 28px;\n  background: #f31d1d;\n  border-radius: 0px 15px 15px 0px;\n  display: inline-block;\n  min-width: 64px;\n  height: 42px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.8;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=(x.Z.h1(a||(a=(0,h.Z)(["\n  padding: 20px;\n  text-align: center;\n  /* font-family: 'Poppins'; */\n  font-style: normal;\n  font-weight: 600;\n  font-size: 64px;\n  line-height: 1.3%;\n  /* or 83px */\n  color: #ffffff;\n"]))),x.Z.ul(c||(c=(0,h.Z)(["\n  display: grid;\n  max-width: calc(100vw - 54px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))),w=x.Z.li(p||(p=(0,h.Z)(["\n  background: #1f1f1f;\n  border-radius: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),Z=x.Z.img(u||(u=(0,h.Z)(["\n  display: block;\n  width: 100%;\n  object-fit: cover;\n"]))),k=(0,x.Z)(g.rU)(f||(f=(0,h.Z)(["\n  text-decoration: none;\n  color: #f7f7f7;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    cursor: zoom-in;\n    font-weight: 600;\n    color: #d71b1b;\n  }\n"]))),j=x.Z.p(l||(l=(0,h.Z)(["\n  /* display: block; */\n  text-align: center;\n  text-decoration: none;\n\n  /* font-family: 'Poppins'; */\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.75;\n  letter-spacing: -0.011em;\n\n  color: inherit;\n"]))),_=e(2791),S=e(7689),z=e(9245),C=e(1221),Q=e(184),T=function(){var n=(0,_.useState)(!1),t=(0,s.Z)(n,2),e=t[0],r=t[1],o=(0,_.useState)([]),i=(0,s.Z)(o,2),a=i[0],c=i[1],p=(0,_.useState)(""),u=(0,s.Z)(p,2),f=u[0],l=u[1],h=(0,g.lr)(),x=(0,s.Z)(h,2),T=x[0],U=x[1],q=T.get("query"),P=(0,S.TH)();return(0,_.useEffect)((function(){null!==q&&(c([]),r(!0),(0,C.Qu)(q).then((function(n){var t=n.results.map((function(n){var t=n.id,e=n.title,r=n.name;return{id:t,movieTitle:e||r,poster_path:n.poster_path}}));c(t)})).finally((function(){r(!1)})))}),[q]),(0,Q.jsxs)("main",{children:[(0,Q.jsxs)(m,{onSubmit:function(n){n.preventDefault(),""!==f.trim()?(U({query:f}),l("")):d.Am.error("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443")},children:[(0,Q.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"",value:f,onChange:function(n){l(n.currentTarget.value.toLowerCase())}}),(0,Q.jsx)(v,{type:"submit",children:"Search"})]}),a&&(0,Q.jsx)(y,{children:a.map((function(n){var t=n.id,e=n.movieTitle,r=n.poster_path;return(0,Q.jsx)(w,{children:(0,Q.jsxs)(k,{to:"".concat(t),state:{from:P},children:[(0,Q.jsx)(Z,{alt:"".concat(e),src:"".concat(C.YQ).concat(r)}),(0,Q.jsx)(j,{children:e})]})},t)}))}),e&&(0,Q.jsx)(z.a,{})]})}},1221:function(n,t,e){e.d(t,{Df:function(){return i},IQ:function(){return p},Jh:function(){return u},Qu:function(){return c},TP:function(){return a},YQ:function(){return o}});var r="d78968a65961b0fbd63bb81018ffc9d2",o="https://image.tmdb.org/t/p/w500",i=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r)).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.json()}))},p=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US    ")).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=310.ddc42d78.chunk.js.map