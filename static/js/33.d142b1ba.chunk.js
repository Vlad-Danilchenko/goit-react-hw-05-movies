"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{9245:function(n,e,t){t.d(e,{a:function(){return l}});var i,r=t(8966),o=t(168),a=t(7402).Z.div(i||(i=(0,o.Z)(["\n  margin: 0 auto;\n  width: 100px;\n"]))),s=t(184),l=function(){return(0,s.jsx)(a,{children:(0,s.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#d71b1b",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var i,r,o,a,s,l,c,p,d,f,h=t(9439),x=t(168),g=t(1087),m=t(7402),v=m.Z.main(i||(i=(0,x.Z)(["\n  padding: 20px;\n  margin: 0 -15px;\n"]))),u=m.Z.div(r||(r=(0,x.Z)(["\n  margin: 20px auto;\n  padding: 15px;\n  max-width: 800px;\n  background-color: #1f1f1fa8;\n  border-radius: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),b=m.Z.div(o||(o=(0,x.Z)(["\n  display: flex;\n"]))),j=m.Z.div(a||(a=(0,x.Z)(["\n  margin-left: 15px;\n"]))),w=m.Z.h1(s||(s=(0,x.Z)(["\n  /* font-family: 'Poppins'; */\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n\n  letter-spacing: -0.03em;\n\n  color: #ffffff;\n"]))),Z=m.Z.h2(l||(l=(0,x.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n\n  letter-spacing: -0.02em;\n\n  color: #ffffff;\n"]))),y=m.Z.p(c||(c=(0,x.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.3;\n  letter-spacing: -0.011em;\n\n  color: #ffffff;\n\n  opacity: 0.56;\n"]))),_=m.Z.ul(p||(p=(0,x.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin: -8px;\n  margin-bottom: 8px;\n"]))),k=m.Z.li(d||(d=(0,x.Z)(["\n  margin: 8px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.3;\n  letter-spacing: -0.011em;\n\n  color: #ffffff;\n\n  opacity: 0.56;\n"]))),B=(0,m.Z)(g.OL)(f||(f=(0,x.Z)(["\n  padding: 8px 16px;\n  margin-right: 8px;\n  margin-top: 20px;\n\n  min-width: 48px;\n  min-height: 24px;\n\n  border: 1px solid #f4f4f4;\n  border-radius: 32px;\n\n  text-align: center;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.3;\n  letter-spacing: -0.011em;\n  text-decoration: none;\n\n  color: #f4f4f4;\n  &:hover,\n  &:focus {\n    border: 1px solid #e22b2b;\n    color: #e22b2b;\n  }\n"]))),S=t(7689),z=t(2791),E=t(9245),C=t(184),T="https://image.tmdb.org/t/p/w500",O=function(){var n,e,t,i,r=(0,z.useState)(!1),o=(0,h.Z)(r,2),a=o[0],s=o[1],l=(0,S.UO)().movieId,c=(0,z.useState)({}),p=(0,h.Z)(c,2),d=p[0],f=p[1],x=(0,S.TH)(),g=null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",m=null!==(t={from:null===(i=x.state)||void 0===i?void 0:i.from})&&void 0!==t?t:"/",O={},U={};x.pathname==="/movies/".concat(l,"/cast")&&(O={border:"1px solid #E22B2B",color:"#E22B2B"}),x.pathname==="/movies/".concat(l,"/reviews")&&(U={border:"1px solid #E22B2B",color:"#E22B2B"}),(0,z.useEffect)((function(){s(!0),fetch("https://api.themoviedb.org/3/movie/".concat(l,"?api_key=").concat("d78968a65961b0fbd63bb81018ffc9d2","&language=en-US")).then((function(n){return n.json()})).then((function(n){f(function(){var e=n.title,t=n.name,i=n.overview,r=n.genres,o=n.vote_average,a="";return e&&(a=e),t&&(a=t),{poster_path:n.poster_path,movieTitle:a,overview:i,genres:r,vote_average:o,backdrop_path:n.backdrop_path}}())})).finally((function(){s(!1)}))}),[l]);var G=d.poster_path,I=d.movieTitle,L=d.overview,F=d.genres,H=d.vote_average,N=d.backdrop_path;console.log(H);var P={backgroundImage:"linear-gradient(to right,\n                      rgba(47, 48, 58, 0.4),\n                        rgba(47, 48, 58, 0.4)),url(".concat(T).concat(N,")")};return(0,C.jsxs)(C.Fragment,{children:[d.movieTitle&&(0,C.jsxs)(v,{style:P,children:[(0,C.jsx)("div",{children:(0,C.jsx)(B,{to:g,children:"Go back"})}),(0,C.jsxs)(u,{children:[(0,C.jsxs)(b,{children:[(0,C.jsx)("div",{children:(0,C.jsx)("img",{alt:"".concat(I),src:"".concat(T).concat(G),width:"250"})}),(0,C.jsxs)(j,{children:[(0,C.jsx)(w,{children:I}),(0,C.jsxs)(Z,{children:["User Score: ",H]}),(0,C.jsx)(Z,{children:"Overview"}),(0,C.jsx)(y,{children:L}),(0,C.jsx)(Z,{children:"Genres"}),(0,C.jsx)(_,{children:F&&F.map((function(n){var e=n.id,t=n.name;return(0,C.jsx)(k,{children:t},e)}))}),(0,C.jsx)(B,{to:"cast",style:O,state:m,children:"Cast"}),(0,C.jsx)(B,{to:"reviews",style:U,state:m,children:"Reviews"})]})]}),(0,C.jsx)(z.Suspense,{children:(0,C.jsx)(S.j3,{})})]})]}),a&&(0,C.jsx)(E.a,{})]})}}}]);
//# sourceMappingURL=33.d142b1ba.chunk.js.map