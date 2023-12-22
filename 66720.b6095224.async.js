"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[66720],{206171:function(B,u,n){n.d(u,{Z:function(){return v}});var c=n(487462),i=n(667294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},s=E,M=n(713401),r=function(O,l){return i.createElement(M.Z,(0,c.Z)({},O,{ref:l,icon:s}))},v=i.forwardRef(r)},366720:function(B,u,n){n.r(u);var c=n(805574),i=n.n(c),E=n(97857),s=n.n(E),M=n(168400),r=n.n(M),v=n(618073),g=n(206171),O=n(65630),l=n(667294),K=n(294184),P=n.n(K),R=n(361446),U=n(438199),o=n(785893),D,b,j,L,W=(0,O.kc)(function(d){var _=d.token,e=d.css,a=_.colorSplit,t=_.iconCls,f=_.fontSizeIcon;return{prevNextNav:e(D||(D=r()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:e(b||(b=r()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),t,f),prevNav:e(j||(j=r()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:e(L||(L=r()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),S=function d(_){return Array.isArray(_)?_.reduce(function(e,a){if(!a)return e;if("children"in a&&a.children){var t;return e.concat((t=d(a.children))!==null&&t!==void 0?t:[])}return e.concat(a)},[]):null},Z=function(_){var e=_.rtl,a=W(),t=a.styles,f={className:"footer-nav-icon-before"},A={className:"footer-nav-icon-after"},z=e?(0,o.jsx)(v.Z,s()({},f)):(0,o.jsx)(g.Z,s()({},f)),V=e?(0,o.jsx)(g.Z,s()({},A)):(0,o.jsx)(v.Z,s()({},A)),F=(0,R.Z)({before:z,after:V}),C=i()(F,2),N=C[0],I=C[1],G=(0,l.useContext)(U.Z),H=G.isMobile,J=(0,l.useMemo)(function(){var m=S(N);if(!m)return[null,null];var p=-1;return m.forEach(function(y,Q){y&&y.key===I&&(p=Q)}),[m[p-1],m[p+1]]},[N,I]),T=i()(J,2),h=T[0],x=T[1];return H?null:(0,o.jsxs)("section",{className:t.prevNextNav,children:[h&&l.cloneElement(h.label,{className:P()(t.pageNav,t.prevNav,h.className)}),x&&l.cloneElement(x.label,{className:P()(t.pageNav,t.nextNav,x.className)})]})};u.default=Z}}]);
