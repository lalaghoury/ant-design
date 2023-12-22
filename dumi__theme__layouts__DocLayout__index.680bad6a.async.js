"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{361446:function(Rn,X,t){var rn=t(805574),A=t.n(rn),xn=t(719632),w=t.n(xn),fn=t(667294),J=t(844183),an=t(566254),b=t(385956),s=t(472638),S=t(438746),M=t(785893),$=function(){var ln=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=(0,b.useFullSidebarData)(),f=(0,S.Z)(),y=f.pathname,n=f.search,m=(0,b.useSidebarData)(),sn=ln.before,_=ln.after,An=(0,fn.useMemo)(function(){var vn,Q=w()(m!=null?m:[]);if(y.startsWith("/docs/spec")){var Bn=Q.splice(0,1);Q.push.apply(Q,w()(Bn))}if(y.startsWith("/docs/react")){var bn,i=(bn=Object.entries(d).find(function(U){var j=A()(U,1),Y=j[0];return Y.startsWith("/changelog")}))===null||bn===void 0?void 0:bn[1];i&&Q.splice(1,0,i[0])}if(y.startsWith("/changelog")){var un,mn=(un=Object.entries(d).find(function(U){var j=A()(U,1),Y=j[0];return Y.startsWith("/docs/react")}))===null||un===void 0?void 0:un[1];mn&&(Q.unshift(mn[0]),Q.push.apply(Q,w()(mn.slice(1))))}var gn=function(j){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return j&&Y&&(0,M.jsx)(J.Z,{color:j==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:j.replace("VERSION",an.Z)})};return(vn=Q==null?void 0:Q.reduce(function(U,j){if(j!=null&&j.title)if(y.startsWith("/docs/spec")){var Y,Sn,kn=j.children.reduce(function(h,c){var l,u,v=(l=(u=c.frontmatter)===null||u===void 0?void 0:u.type)!==null&&l!==void 0?l:"default";return h[v]||(h[v]=[]),h[v].push(c),h},{}),jn=[];jn.push.apply(jn,w()((Y=(Sn=kn.default)===null||Sn===void 0?void 0:Sn.map(function(h){return{label:(0,M.jsxs)(s.Z,{to:"".concat(h.link).concat(n),children:[sn,h==null?void 0:h.title,_]}),key:h.link.replace(/(-cn$)/g,"")}}))!==null&&Y!==void 0?Y:[])),Object.entries(kn).forEach(function(h){var c=A()(h,2),l=c[0],u=c[1];l!=="default"&&jn.push({type:"group",label:l,key:l,children:u==null?void 0:u.map(function(v){return{label:(0,M.jsxs)(s.Z,{to:"".concat(v.link).concat(n),children:[sn,v==null?void 0:v.title,_]}),key:v.link.replace(/(-cn$)/g,"")}})})}),U.push({label:j==null?void 0:j.title,key:j==null?void 0:j.title,children:jn})}else{var yn;U.push({type:"group",label:j==null?void 0:j.title,key:j==null?void 0:j.title,children:(yn=j.children)===null||yn===void 0?void 0:yn.map(function(h){var c,l;return{label:(0,M.jsxs)(s.Z,{to:"".concat(h.link).concat(n),style:{display:"flex",alignItems:"center"},children:[sn,(0,M.jsx)("span",{children:h==null?void 0:h.title},"english"),(0,M.jsx)("span",{className:"chinese",children:(c=h.frontmatter)===null||c===void 0?void 0:c.subtitle},"chinese"),gn((l=h.frontmatter)===null||l===void 0?void 0:l.tag,!sn&&!_),_]}),key:h.link.replace(/(-cn$)/g,"")}})})}else{var I=j.children||[];I.every(function(h){var c;return h==null||(c=h.frontmatter)===null||c===void 0?void 0:c.date})&&I.sort(function(h,c){var l,u;return((l=h.frontmatter)===null||l===void 0?void 0:l.date)>((u=c.frontmatter)===null||u===void 0?void 0:u.date)?-1:1}),U.push.apply(U,w()(I.map(function(h){return{label:(0,M.jsxs)(s.Z,{to:"".concat(h.link).concat(n),style:{display:"flex",alignItems:"center"},children:[sn,h==null?void 0:h.title,gn(h.frontmatter.tag,!sn&&!_),_]}),key:h.link.replace(/(-cn$)/g,"")}})))}return U},[]))!==null&&vn!==void 0?vn:[]},[m,d,y,n,ln]);return[An,y]};X.Z=$},148050:function(Rn,X,t){t.r(X),t.d(X,{default:function(){return M}});var rn=t(168400),A=t.n(rn),xn=t(667294),w=t(186548),fn=t(65630),J=t(879587),an=t(785893),b,s="https://github.com/ant-design/ant-design/edit/master/",S=(0,fn.kc)(function($){var tn=$.token,ln=$.css,d=tn.colorIcon,f=tn.colorText,y=tn.iconCls;return{editButton:ln(b||(b=A()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),y,d,f)}});function M($){var tn=$.title,ln=$.filename,d=S(),f=d.styles;return(0,an.jsx)(J.Z,{title:tn,children:(0,an.jsx)("a",{className:f.editButton,href:"".concat(s).concat(ln),target:"_blank",rel:"noopener noreferrer",children:(0,an.jsx)(w.Z,{})})})}},160743:function(Rn,X,t){t.r(X),t.d(X,{default:function(){return vo}});var rn=t(805574),A=t.n(rn),xn=t(294184),w=t.n(xn),fn=t(727484),J=t.n(fn),an=t(533852),b=t(385956),s=t(667294),S=t(715778),M=t(75529),$=t(302559),tn=t(438746),ln=t(168400),d=t.n(ln),f=t(370917),y=t(65630),n=t(785893),m,sn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},_=function(){var e=(0,y.Fg)(),o=function g(x){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(x,"-").concat(p,` {
  background: `).concat(e["".concat(x,"-").concat(p)],`;
}
`).concat(g(x,p+1),`
    `):""},a=function g(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return x<=13?`
.palette-gray-`.concat(x,` {
  background: `).concat(sn[x],`;
}
`).concat(g(x+1),`
    `):""};return(0,n.jsx)(f.xB,{styles:(0,f.iv)(m||(m=d()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,o("blue"),o("purple"),o("cyan"),o("green"),o("magenta"),o("red"),o("volcano"),o("orange"),o("gold"),o("yellow"),o("lime"),o("geekblue"),a())})},An=_,vn,Q=function(){return(0,n.jsx)(f.xB,{styles:(0,f.iv)(vn||(vn=d()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Bn,bn=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(Bn||(Bn=d()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},i,un=function(){var r=(0,y.Fg)(),e=r.anchorTop;return(0,n.jsx)(f.xB,{styles:(0,f.iv)(i||(i=d()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},mn=t(510274),gn,U=function(){var e=(0,y.Fg)(),o=e.antCls,a=e.colorPrimary;return(0,n.jsx)(f.xB,{styles:(0,f.iv)(gn||(gn=d()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,o,o,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,o,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),o,o,o,a,new mn.C(a).setAlpha(.75).toHex8String(),o,o,e.colorWhite,o,new mn.C(a).setAlpha(.75).toHexString(),o,o,new mn.C(a).setAlpha(.75).toHexString(),o,o,o,o,new mn.C(a).setAlpha(.6).toHexString(),o,o,o)})},j=U,Y,Sn=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(Y||(Y=d()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},kn,jn=function(){var e=(0,y.Fg)(),o=e.antCls,a=e.iconCls;return(0,n.jsx)(f.xB,{styles:(0,f.iv)(kn||(kn=d()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadiusLG,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadiusLG,e.borderRadiusLG,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,o,o,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,o,o,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,o)})},yn=jn,I,h=function(){var r=(0,y.Fg)(),e=r.antCls,o=r.iconCls;return(0,n.jsx)(f.xB,{styles:(0,f.iv)(I||(I=d()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),o,e,r.colorPrimary,o,e)})},c,l=function(){var r=(0,y.Fg)(),e=r.iconCls;return(0,n.jsx)(f.xB,{styles:(0,f.iv)(c||(c=d()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},u,v=function(){return(0,n.jsx)(f.xB,{styles:(0,f.iv)(u||(u=d()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},C,k=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(C||(C=d()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},N,H=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(N||(N=d()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},dn,nn=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(dn||(dn=d()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},en,cn="dumi-default-",Tn=function(){var r=(0,y.Fg)();return(0,n.jsx)(f.xB,{styles:(0,f.iv)(en||(en=d()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),cn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,cn,r.colorBgElevated,r.colorBgElevated,cn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},zn,En=function(){return(0,n.jsx)(f.xB,{styles:(0,f.iv)(zn||(zn=d()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Fn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(bn,{}),(0,n.jsx)(un,{}),(0,n.jsx)(j,{}),(0,n.jsx)(Sn,{}),(0,n.jsx)(yn,{}),(0,n.jsx)(h,{}),(0,n.jsx)(l,{}),(0,n.jsx)(v,{}),(0,n.jsx)(k,{}),(0,n.jsx)(H,{}),(0,n.jsx)(nn,{}),(0,n.jsx)(En,{}),(0,n.jsx)(An,{}),(0,n.jsx)(Q,{}),(0,n.jsx)(Tn,{})]})},Dn=Fn,In=t(97857),T=t.n(In),Un=t(9783),on=t.n(Un),Ln=t(301210),Nn=t(660532),Hn=t(469181),Vn=t(344682),re=t(11739),ae=t(664095),Zn=t(883458),ie=t(722449),le=t(316165),se="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Kn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Gn=function(e){return(0,n.jsx)(le.Z,T()(T()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?se:Kn})})}))},_n=Gn,dt=t(562925),pn=t(373638),ne=t(438199),he,xe,ct=(0,y.kc)(function(r){var e=r.token,o=r.css,a=e.headerHeight,g=e.colorTextHeading,x=e.fontFamily,p=e.mobileMaxWidth;return{logo:o(he||(he=d()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,g,x,a,g,p),title:o(xe||(xe=d()([`
      line-height: 32px;
    `])))}}),pt=function(e){var o=e.isZhCN,a=(0,b.useLocation)(),g=a.search,x=ct(),p=x.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(b.Link,{to:pn.J1("/",o,g),className:p.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:p.title,children:"Ant Design"})]})})},ut=pt,mt=t(280882),gt=t(963918),ht=t(988872),fe,ve,be,ye,we=(0,y.kc)(function(r){var e=r.css,o=r.token;return{smallStyle:e(fe||(fe=d()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(ve||(ve=d()([`
    color: `,`;
  `])),o.colorTextQuaternary),downOutlined:e(be||(be=d()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(ye||(ye=d()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),je=function(){var e=we(),o=e.styles;return(0,n.jsxs)("span",{className:o.smallStyle,children:["(",(0,n.jsx)(b.FormattedMessage,{id:"app.implementation.community"}),")"]})},Ce=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(b.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(b.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(b.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(je,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(je,{})]}),key:"vue"}]},xt=function(e){var o=e.isRTL,a=we(),g=a.styles;return(0,n.jsx)(gt.Z,{menu:{items:Ce()},placement:"bottomRight",children:(0,n.jsxs)(ht.ZP,{size:"small",children:[(0,n.jsx)(b.FormattedMessage,{id:"app.header.menu.more"}),(0,n.jsx)(mt.Z,{className:w()(o?g.downOutlinedRTL:g.downOutlined,g.down)})]})})},ft=xt,vt=t(719632),de=t.n(vt),Se=t(923232),Xn=t(472638),ke,Ee,bt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},yt=(0,y.kc)(function(r){var e=r.token,o=e.antCls,a=e.iconCls,g=e.fontFamily,x=e.headerHeight,p=e.menuItemBorder,z=e.colorPrimary,L=e.colorText;return{nav:(0,y.iv)(ke||(ke=d()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),g,o,o,o,40+12*2,x,x,p,L,o,a,o,z,o,o),popoverMenuNav:(0,y.iv)(Ee||(Ee=d()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),o,o,o,o,o)}}),wt=function(r){var e,o,a=r.isZhCN,g=r.isMobile,x=r.responsive,p=r.directionText,z=r.onLangChange,L=r.onDirectionChange,F=(0,b.useLocation)(),D=F.pathname,Z=F.search,W=(0,$.Z)(bt),R=A()(W,1),P=R[0],G=(0,b.useFullSidebarData)(),E=((e=G["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],K=yt(),B=K.styles,q=g?"inline":"horizontal",Mn=D.split("/").filter(function(On){return On}).slice(0,-1).join("/"),Cn=Mn||"home";D.startsWith("/changelog")?Cn="docs/react":D.startsWith("/docs/resources")&&(Cn="docs/resources");var V,wn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(b.FormattedMessage,{id:"app.header.lang"}),onClick:z,key:"switch-lang"},{label:p,onClick:L,key:"switch-direction"}].concat(de()(Ce()));g?V=wn:x==="crowded"&&(V=[{label:(0,n.jsx)(Nn.Z,{}),key:"additional",children:de()(wn)}]);var Pn=[{label:(0,n.jsx)(Xn.Z,{to:pn.J1("/docs/spec/introduce",a,Z),children:P.design}),key:"docs/spec"},{label:(0,n.jsx)(Xn.Z,{to:pn.J1("/docs/react/introduce",a,Z),children:P.development}),key:"docs/react"},{label:(0,n.jsx)(Xn.Z,{to:pn.J1("/components/overview/",a,Z),children:P.components}),key:"components"},E.length?{label:(0,n.jsx)(Xn.Z,{to:pn.J1(E.sort(function(On,ue){var $n,Qn;return(($n=On.frontmatter)===null||$n===void 0?void 0:$n.date)>((Qn=ue.frontmatter)===null||Qn===void 0?void 0:Qn.date)?-1:1})[0].link,a,Z),children:P.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(Xn.Z,{to:pn.J1("/docs/resources",a,Z),children:P.resources}),key:"docs/resources"},a?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(de()((o=V)!==null&&o!==void 0?o:[]));return(0,n.jsx)(Se.Z,{mode:q,selectedKeys:[Cn],className:B.nav,disabledOverflow:!0,items:Pn,style:{borderRight:0}})},jt=t(879587),Me,Be,Te,ze,Le,Wn="1.2em",Ct=(0,y.kc)(function(r){var e=r.token,o=r.css,a=e.colorText,g=e.colorBorder,x=e.colorBgContainer,p=e.colorBgTextHover,z=e.borderRadius,L=e.controlHeight,F=e.motionDurationMid;return{btn:o(Me||(Me=d()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,g,L,L,z,F,F,p,Wn,Wn,Wn),innerDiv:o(Be||(Be=d()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Wn,Wn),labelStyle:o(Te||(Te=d()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Wn,a,a),label1Style:o(ze||(ze=d()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,x),label2Style:o(Le||(Le=d()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),St=function(e){var o=e.label1,a=e.label2,g=e.tooltip1,x=e.tooltip2,p=e.value,z=e.pure,L=e.onClick,F=Ct(),D=F.styles,Z=D.btn,W=D.innerDiv,R=D.labelStyle,P=D.label1Style,G=D.label2Style,E=(0,n.jsx)("button",{onClick:L,className:Z,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[z&&(p===1?o:a),!z&&(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)("span",{className:w()(R,p===1?P:G),children:o}),(0,n.jsx)("span",{className:w()(R,p===1?G:P),children:a})]})]})},"lang-button");return g||x?(0,n.jsx)(jt.Z,{title:p===1?g:x,children:E}):E},ce=St,Ae,Fe,De,Pe,Oe,Re,Ie=1120,Ne=1200,kt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},Et=(0,y.kc)(function(r){var e=r.token,o=r.css,a="#ced4d9";return{header:o(Ae||(Ae=d()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:o(Fe||(Fe=d()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:o(De||(De=d()([`
      width: 16px;
    `]))),popoverMenu:on()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:o(Pe||(Pe=d()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:o(Oe||(Oe=d()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:o(Re||(Re=d()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),Mt=function(){var e=(0,$.Z)(kt),o=A()(e,2),a=o[0],g=o[1],x=(0,b.useSiteData)(),p=x.pkg,z=(0,pn.Is)(),L=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),F=A()(L,2),D=F[0],Z=F[1],W=(0,s.useContext)(ne.Z),R=W.direction,P=W.isMobile,G=W.bannerVisible,E=W.updateSiteConfig,K=(0,s.useRef)(null),B=(0,b.useLocation)(),q=B.pathname,Mn=B.search,Cn=Et(),V=Cn.styles,wn=(0,s.useCallback)(function(){Z(function(O){return T()(T()({},O),{},{menuVisible:!1})})},[]),Pn=(0,s.useCallback)(function(){Z(function(O){return T()(T()({},O),{},{windowWidth:window.innerWidth})})},[]),On=(0,s.useCallback)(function(){Z(function(O){return T()(T()({},O),{},{menuVisible:!0})})},[]),ue=(0,s.useCallback)(function(O){Z(function(hn){return T()(T()({},hn),{},{menuVisible:O})})},[]),$n=function(){E({direction:R!=="rtl"?"rtl":"ltr"})},Qn=function(){E({bannerVisible:!1}),pn.Fy()&&localStorage.setItem(dt.ANT_DESIGN_NOT_SHOW_BANNER,J()().toISOString())};(0,s.useEffect)(function(){wn()},[B]),(0,s.useEffect)(function(){return Pn(),window.addEventListener("resize",Pn),function(){window.removeEventListener("resize",Pn),K.current&&clearTimeout(K.current)}},[]);var bo=(0,s.useCallback)(function(O){var hn=window.location.href,oe=window.location.pathname;if(/overview/.test(oe)&&/0?[1-39][0-3]?x/.test(O)){window.location.href=hn.replace(window.location.origin,O).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(O)?"":"/react","/introduce")).replace(/\/$/,"");return}var qn=new URL(hn.replace(window.location.origin,O));qn.host.includes("antgroup")?(qn.pathname="".concat(qn.pathname.replace(/\/$/,""),"/"),window.location.href=qn.toString()):window.location.href=qn.href.replace(/\/$/,"")},[]),tt=(0,s.useCallback)(function(){var O="".concat(window.location.protocol,"//"),hn=window.location.href.slice(O.length);pn.Fy()&&localStorage.setItem("locale",pn.KE(q)?"en-US":"zh-CN"),window.location.href=O+hn.replace(window.location.pathname,pn.J1(q,!pn.KE(q),Mn).pathname)},[B]),yo=(0,s.useMemo)(function(){return R!=="rtl"?"RTL":"LTR"},[R]),wo=(0,s.useMemo)(function(){return R==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[R]),jo=D.menuVisible,te=D.windowWidth,ot=D.searching,rt=T()(on()({},p.version,p.version),z==null?void 0:z.docVersions),Co=Object.keys(rt).map(function(O){return{value:rt[O],label:O}}),at=["","index","index-cn"].includes(q),it=g==="cn",So=R==="rtl",me=null;te<Ie?me="crowded":te<Ne&&(me="narrow");var ko=w()(V.header,"clearfix",{"home-header":at}),ge={isZhCN:it,isRTL:So},lt=(0,n.jsx)(wt,T()(T()({},ge),{},{responsive:me,isMobile:P,directionText:yo,onLangChange:tt,onDirectionChange:$n}),"nav"),Yn=[lt,(0,n.jsx)(Hn.Z,{className:"version",size:"small",defaultValue:p.version,onChange:bo,dropdownStyle:wo,popupMatchSelectWidth:!1,getPopupContainer:function(hn){return hn.parentNode},options:Co},"version"),(0,n.jsx)(ft,T()({},ge),"more"),(0,n.jsx)(ce,{onClick:tt,value:pn.KE(q)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(ce,{onClick:$n,value:R==="rtl"?2:1,label1:(0,n.jsx)(_n,{className:V.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(_n,{className:V.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(ce,{value:1,label1:(0,n.jsx)(Ln.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];te<Ie?Yn=ot?[]:[lt]:te<Ne&&(Yn=ot?[]:Yn);var st=at?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:ko,children:[P&&(0,n.jsx)(Vn.Z,{overlayClassName:V.popoverMenu,placement:"bottomRight",content:Yn,trigger:"click",open:jo,arrow:{arrowPointAtCenter:!0},onOpenChange:ue,children:(0,n.jsx)(Nn.Z,{className:"nav-phone-icon",onClick:On})}),it&&G&&(0,n.jsx)(M.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,n.jsx)(re.Z,{className:V.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:P?a.shortMessage:a.message}),(0,n.jsx)("a",{className:V.link,href:a.link,target:"_blank",rel:"noreferrer",onClick:function(){var hn,oe;(hn=(oe=window).gtag)===null||hn===void 0||hn.call(oe,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:a.link})},children:a.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Qn})}),(0,n.jsxs)(ae.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Zn.Z,T()(T()({},st[0]),{},{children:(0,n.jsx)(ut,T()(T()({},ge),{},{location:B}))})),(0,n.jsxs)(Zn.Z,T()(T()({},st[1]),{},{className:V.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(ie.ZP,{})}),!P&&Yn]}))]})]})},Bt=Mt,Eo=t(945462),Tt=t(513769),zt=t.n(Tt),He=t(777502),Lt=["children"],At=function(e){var o=e.children,a=zt()(e,Lt);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b.Helmet,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.desc&&(0,n.jsx)("meta",{name:"description",content:a.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:o}),(0,n.jsx)(He.default,{})]})},Ft=At,Dt=t(86198),Ze=t(185209),Pt=function(){var e=(0,b.useRouteMeta)(),o=(0,s.useMemo)(function(){var p;if(!e.frontmatter.subtitle&&!e.frontmatter.title)p="404 Not Found - Ant Design";else{var z;p="".concat(e.frontmatter.subtitle||""," ").concat(((z=e.frontmatter)===null||z===void 0?void 0:z.title)||""," - Ant Design")}var L=e.frontmatter.description||"";return[p,L]},[e]),a=A()(o,2),g=a[0],x=a[1];return(0,n.jsxs)(b.Helmet,{children:[(0,n.jsx)("title",{children:g}),(0,n.jsx)("meta",{property:"og:title",content:g}),x&&(0,n.jsx)("meta",{name:"description",content:x})]})},We=Pt,Ot=t(148050),Rt=t(823493),It=t.n(Rt),Nt=t(468990),Ht=t(658192),$e,Ue,Ve,Ke=["scroll","resize"],Zt=(0,y.kc)(function(r){var e=r.token,o=r.css,a=e.boxShadowSecondary,g=e.antCls;return{affixTabs:o($e||($e=d()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,g,g,g),affixTabsFixed:o(Ue||(Ue=d()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(Ve||(Ve=d()([`
      text-transform: capitalize;
    `])))}}),Ge=32,Wt=function(){var e=s.useRef(null),o=s.useRef([]),a=s.useState(!1),g=A()(a,2),x=g[0],p=g[1],z=s.useState(void 0),L=A()(z,2),F=L[0],D=L[1],Z=Zt(),W=Z.styles,R=W.affixTabs,P=W.affixTabsFixed,G=W.span;function E(B){var q=document.getElementById(B);if(q){var Mn=q.offsetTop-e.current.offsetHeight-Ge;(0,Ht.Z)(Mn)}}s.useEffect(function(){o.current=Array.from(document.querySelectorAll("h2[id]")).map(function(B){var q=B.id;return q}),p(!0)},[]),s.useEffect(function(){var B=decodeURIComponent((location.hash||"").slice(1));B&&E(B)},[x]);var K=s.useMemo(function(){function B(){for(var q=window,Mn=q.scrollY,Cn=e.current.offsetHeight,V=o.current.length-1;V>=0;V-=1){var wn=o.current[V],Pn=document.getElementById(wn),On=Pn.offsetTop-Cn-Ge;if(On<=Mn){D(wn);return}}D(void 0)}return It()(B)},[]);return s.useEffect(function(){return Ke.forEach(function(B){return window.addEventListener(B,K)}),K(),function(){Ke.forEach(function(B){return window.removeEventListener(B,K)})}},[]),(0,n.jsx)("div",{className:w()(R,F&&P),ref:e,children:(0,n.jsx)(Nt.Z,{activeKey:F,onChange:E,items:o.current.map(function(B){return{key:B,label:(0,n.jsx)("span",{className:G,children:B.replace(/-/g," ")})}})})})},$t=Wt,Xe,Je,Qe,Ye=40,ee=1208,pe=24,Ut=(0,y.kc)(function(r){var e=r.token,o=r.css,a=e.antCls;return{resourcePage:o(Xe||(Xe=d()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),ee),resourceContent:o(Je||(Je=d()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Ye,ee,pe,a),banner:o(Qe||(Qe=d()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Ye,ee,ee,pe,pe)}}),Vt=function(e){var o,a=e.children,g=Ut(),x=g.styles,p=(0,b.useRouteMeta)();return(0,n.jsx)(M.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Dt.Z,{children:[(0,n.jsx)(We,{}),(0,n.jsxs)("div",{id:"resources-page",className:x.resourcePage,children:[(0,n.jsx)($t,{}),(0,n.jsxs)("div",{className:x.banner,children:[(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30},children:[(o=p.frontmatter)===null||o===void 0?void 0:o.title,(0,n.jsx)(Ot.default,{title:(0,n.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,n.jsx)("section",{children:p.frontmatter.description})]}),(0,n.jsx)("div",{className:x.resourceContent,children:a}),(0,n.jsx)(He.default,{})]})]})})},Kt=Vt,Jn=t(575054),Gt=t(945016),Xt=t(217187),Jt=t(524229),qe,Qt=s.lazy(function(){return t.e(16175).then(t.bind(t,516175))}),Yt=s.lazy(function(){return t.e(49148).then(t.bind(t,349148))}),qt=s.lazy(function(){return t.e(68301).then(t.bind(t,368301))}),_t=s.lazy(function(){return t.e(58598).then(t.bind(t,458598))}),no=s.lazy(function(){return Promise.resolve().then(t.bind(t,777502))}),eo=s.lazy(function(){return t.e(66720).then(t.bind(t,366720))}),to=s.lazy(function(){return Promise.all([t.e(2281),t.e(15926)]).then(t.bind(t,615926))}),oo=s.lazy(function(){return Promise.resolve().then(t.bind(t,148050))}),ro=(0,y.kc)(function(r){var e=r.token,o=r.css;return{articleWrapper:o(qe||(qe=d()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),ao=function(e){var o,a,g,x=e.children,p=(0,b.useRouteMeta)(),z=(0,tn.Z)(),L=z.pathname,F=z.hash,D=(0,s.useContext)(ne.Z),Z=D.direction,W=ro(),R=W.styles,P=(0,Xt.Z)(!1),G=A()(P,2),E=G[0],K=G[1],B=(0,s.useMemo)(function(){var V;return((V=p.toc)===null||V===void 0?void 0:V.filter(function(wn){return wn._debug_demo}).map(function(wn){return wn.id}))||[]},[p]),q=B.includes(F.slice(1));(0,s.useLayoutEffect)(function(){K(q)},[]);var Mn=(0,s.useMemo)(function(){return{showDebug:E,setShowDebug:K}},[E,B]),Cn=Z==="rtl";return(0,n.jsx)(Jt.Z.Provider,{value:Mn,children:(0,n.jsxs)(Zn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(Jn.Z.Input,{active:!0,size:"small"}),children:(0,n.jsx)(qt,{showDebug:E,debugDemos:B})}),(0,n.jsxs)("article",{className:w()(R.articleWrapper,{rtl:Cn}),children:[(o=p.frontmatter)!==null&&o!==void 0&&o.title?(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Gt.Z,{size:"small",children:[(a=p.frontmatter)===null||a===void 0?void 0:a.title,(g=p.frontmatter)===null||g===void 0?void 0:g.subtitle,!L.startsWith("/components/overview")&&(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(oo,{title:(0,n.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),L.startsWith("/components/")&&(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(to,{pathname:L})})]}):null,(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(Jn.Z.Input,{active:!0,size:"small"}),children:(0,n.jsx)(_t,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:x}),(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(Jn.Z.Input,{active:!0,size:"small"}),children:(0,n.jsx)(Yt,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(Jn.Z.Input,{active:!0,size:"small"}),children:(0,n.jsx)(Qt,{filename:p.frontmatter.filename})})]}),(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(Jn.Z.Input,{active:!0,size:"small"}),children:(0,n.jsx)(eo,{rtl:Cn})}),(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(no,{})})]})})},io=ao,lo=t(650010),so=t(361446),_e,nt,co=(0,y.kc)(function(r){var e=r.token,o=r.css,a=e.antCls,g=e.fontFamily,x=e.colorSplit;return{asideContainer:o(_e||(_e=d()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),g,a,a,a,a,a,a,x,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:o(nt||(nt=d()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),po=function(){var e=(0,b.useSidebarData)(),o=(0,s.useContext)(ne.Z),a=o.isMobile,g=o.theme,x=co(),p=x.styles,z=(0,so.Z)(),L=A()(z,2),F=L[0],D=L[1],Z=g.includes("dark"),W=(0,y.Fg)(),R=W.colorBgContainer,P=(0,n.jsx)(M.ZP,{theme:{components:{Menu:{itemBg:R,darkItemBg:R}}},children:(0,n.jsx)(Se.Z,{items:F,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:Z?"dark":"light",selectedKeys:[D],defaultOpenKeys:e==null?void 0:e.map(function(G){var E=G.title;return E}).filter(function(G){return G})})});return a?(0,n.jsx)(lo.Z,{children:P},"Mobile-menu"):(0,n.jsx)(Zn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:P})})},uo=po,et,mo=(0,y.kc)(function(r){var e=r.css,o=r.token;return{main:e(et||(et=d()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),go=function(e){var o=e.children,a=mo(),g=a.styles;return(0,n.jsxs)("main",{className:g.main,children:[(0,n.jsx)(We,{}),(0,n.jsx)(uo,{}),(0,n.jsx)(io,{children:o})]})},ho=go,xo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},fo=function(){var e=(0,b.useOutlet)(),o=(0,tn.Z)(),a=o.pathname,g=o.search,x=o.hash,p=(0,$.Z)(xo),z=A()(p,2),L=z[0],F=z[1],D=(0,s.useRef)(null),Z=(0,s.useContext)(ne.Z),W=Z.direction,R=(0,b.useSiteData)(),P=R.loading;(0,s.useLayoutEffect)(function(){F==="cn"?J().locale("zh-cn"):J().locale("en")},[]),(0,s.useEffect)(function(){var E=document.getElementById("nprogress-style");E&&(D.current=setTimeout(function(){var K;(K=E.parentNode)===null||K===void 0||K.removeChild(E)},0))},[]),(0,s.useEffect)(function(){var E,K=x.replace("#","");K&&((E=document.getElementById(decodeURIComponent(K)))===null||E===void 0||E.scrollIntoView())},[P,x]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+g)},[o]);var G=(0,s.useMemo)(function(){return["","/"].some(function(E){return E===a})||["/index"].some(function(E){return a.startsWith(E)})?(0,n.jsx)(Ft,{title:L.title,desc:L.description,children:e}):a.startsWith("/docs/resource")?(0,n.jsx)(Kt,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(ho,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b.Helmet,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:F==="cn"?"zh-CN":F,"data-direction":W,className:w()({rtl:W==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:L.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(M.ZP,{direction:W,locale:F==="cn"?S.Z:void 0,children:[(0,n.jsx)(Dn,{}),(0,n.jsx)(Bt,{}),G]})]})},vo=fo},777502:function(Rn,X,t){t.r(X),t.d(X,{default:function(){return jn}});var rn=t(805574),A=t.n(rn),xn=t(168400),w=t.n(xn),fn=t(857278),J=t(430932),an=t(985093),b=t(115668),s=t(642207),S=t(301210),M=t(13923),$=t(825035),tn=t(937993),ln=t(448118),d=t(938545),f=t(569980),y=t(510274),n=t(65630),m=t(385956),sn=t(391298),_=t(667294),An=t(630770),vn=t(302559),Q=t(438746),Bn=t(438199),bn=t(693399),i=t(785893),un="ant-where-checker",mn={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function gn(){var yn=(0,vn.Z)(mn),I=A()(yn,1),h=I[0],c=_.useState(!0),l=A()(c,2),u=l[0],v=l[1];return _.useEffect(function(){var C=document.createElement("p");C.className=un,C.style.position="fixed",C.style.pointerEvents="none",C.style.visibility="hidden",C.style.width="0",document.body.appendChild(C),(0,bn.updateCSS)(`
:where(.`.concat(un,`) {
  content: "__CHECK__";
}
    `),un);var k=getComputedStyle(C),N=k.content;v(String(N).includes("CHECK")),document.body.removeChild(C),(0,bn.removeCSS)(un)},[]),u?null:(0,i.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[h.whereNotSupport," ",(0,i.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:h.whereDocUrl,children:h.whereDocTitle})]})})}var U,j,Y={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Sn=function(){var I=(0,_.useContext)(Bn.Z),h=I.isMobile;return(0,n.kc)(function(c){var l=c.token,u=c.css,v=new y.C((0,An.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(U||(U=w()([`
      background: `,`;
    `])),v),footer:u(j||(j=w()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),v,l.colorTextSecondary,l.colorText,h?60:0,h?20:0,l.marginXXL,l.fontSize)}})()},kn=function(){var I=(0,Q.Z)(),h=(0,vn.Z)(Y),c=A()(h,2),l=c[0],u=c[1],v=Sn(),C=v.styles,k=I.getLink,N=_.useMemo(function(){var H=u==="cn",dn={title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:H?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:H?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:H?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},nn={title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,i.jsx)(fn.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,i.jsx)(J.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,i.jsx)(an.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,i.jsx)(b.Z,{style:{color:"#056de8"}}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,i.jsx)(b.Z,{style:{color:"#056de8"}}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};H&&nn.items.push({icon:(0,i.jsx)(s.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.work_with_us"}),url:k("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:m.Link});var en={title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,i.jsx)(S.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,i.jsx)(M.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.change-log"}),url:k("/changelog"),LinkComponent:m.Link},{icon:(0,i.jsx)($.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.faq"}),url:k("/docs/react/faq"),LinkComponent:m.Link},{icon:(0,i.jsx)(tn.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,i.jsx)(ln.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,i.jsx)(d.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,i.jsx)($.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,i.jsx)($.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},cn={icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.galacean"}),description:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,i.jsx)(f.Z,{}),title:(0,i.jsx)(m.FormattedMessage,{id:"app.footer.theme"}),url:k("/theme-editor"),LinkComponent:m.Link}]};return[dn,nn,en,cn]},[u,I.search]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(sn.Z,{columns:N,className:C.footer,bottom:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,i.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,i.jsx)("div",{children:l.owner})]})}),(0,i.jsx)(gn,{})]})},jn=kn},647727:function(Rn,X,t){t.d(X,{Z:function(){return rn.Z}});var rn=t(582485)},86198:function(Rn,X,t){t.d(X,{Z:function(){return h}});var rn=t(719632),A=t.n(rn),xn=t(9783),w=t.n(xn),fn=t(805574),J=t.n(fn),an=t(513769),b=t.n(an),s=t(97857),S=t.n(s),M=t(667294),$=t(294184),tn=t.n($),ln=t(518475),d=t(73287),f=t(121790),y=t(45598),n=t(296708);function m(c,l,u){if(typeof u=="boolean")return u;if(c.length)return!0;var v=(0,y.default)(l);return v.some(function(C){return C.type===n.Z})}var sn=t(900210),_=t(286665),An=function(l){var u,v=l.componentCls,C=l.bodyBg,k=l.lightSiderBg,N=l.lightTriggerBg,H=l.lightTriggerColor;return w()({},"".concat(v,"-sider-light"),(u={background:k},w()(u,"".concat(v,"-sider-trigger"),{color:H,background:N}),w()(u,"".concat(v,"-sider-zero-width-trigger"),{color:H,background:N,border:"1px solid ".concat(C),borderInlineStart:0}),u))},vn=An,Q=function(l){var u,v,C=l.antCls,k=l.componentCls,N=l.colorText,H=l.triggerColor,dn=l.footerBg,nn=l.triggerBg,en=l.headerHeight,cn=l.headerPadding,Tn=l.headerColor,zn=l.footerPadding,En=l.triggerHeight,Fn=l.zeroTriggerHeight,Dn=l.zeroTriggerWidth,In=l.motionDurationMid,T=l.motionDurationSlow,Un=l.fontSize,on=l.borderRadius,Ln=l.bodyBg,Nn=l.headerBg,Hn=l.siderBg;return v={},w()(v,k,S()(S()((u={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:Ln,"&, *":{boxSizing:"border-box"}},w()(u,"&".concat(k,"-has-sider"),w()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),w()(u,"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),w()(u,"".concat(k,"-sider"),{position:"relative",minWidth:0,background:Hn,transition:"all ".concat(In,", background 0s"),"&-children":w()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(C,"-menu").concat(C,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:En},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:En,color:H,lineHeight:(0,sn.unit)(En),textAlign:"center",background:nn,cursor:"pointer",transition:"all ".concat(In)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:en,insetInlineEnd:l.calc(Dn).mul(-1).equal(),zIndex:1,width:Dn,height:Fn,color:H,fontSize:l.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Hn,borderStartStartRadius:0,borderStartEndRadius:on,borderEndEndRadius:on,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(T," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(T),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:l.calc(Dn).mul(-1).equal(),borderStartStartRadius:on,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:on}}}}),u),vn(l)),{},{"&-rtl":{direction:"rtl"}})),w()(v,"".concat(k,"-header"),w()({height:en,padding:cn,color:Tn,lineHeight:(0,sn.unit)(en),background:Nn},"".concat(C,"-menu"),{lineHeight:"inherit"})),w()(v,"".concat(k,"-footer"),{padding:zn,color:N,fontSize:Un,background:dn}),w()(v,"".concat(k,"-content"),{flex:"auto",minHeight:0}),v},Bn=function(l){var u=l.colorBgLayout,v=l.controlHeight,C=l.controlHeightLG,k=l.colorText,N=l.controlHeightSM,H=l.marginXXS,dn=l.colorTextLightSolid,nn=l.colorBgContainer,en=C*1.25;return{colorBgHeader:"#001529",colorBgBody:u,colorBgTrigger:"#002140",bodyBg:u,headerBg:"#001529",headerHeight:v*2,headerPadding:"0 ".concat(en,"px"),headerColor:k,footerPadding:"".concat(N,"px ").concat(en,"px"),footerBg:u,siderBg:"#001529",triggerHeight:C+H*2,triggerBg:"#002140",triggerColor:dn,zeroTriggerWidth:C,zeroTriggerHeight:C,lightSiderBg:nn,lightTriggerBg:nn,lightTriggerColor:k}},bn=(0,_.I$)("Layout",function(c){return[Q(c)]},Bn,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),i=t(785893),un=["prefixCls","suffixCls","className","tagName"],mn=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function gn(c){var l=c.suffixCls,u=c.tagName,v=c.displayName;return function(C){var k=M.forwardRef(function(N,H){return(0,i.jsx)(C,S()({ref:H,suffixCls:l,tagName:u},N))});return k}}var U=M.forwardRef(function(c,l){var u=c.prefixCls,v=c.suffixCls,C=c.className,k=c.tagName,N=b()(c,un),H=M.useContext(d.E_),dn=H.getPrefixCls,nn=dn("layout",u),en=bn(nn),cn=J()(en,3),Tn=cn[0],zn=cn[1],En=cn[2],Fn=v?"".concat(nn,"-").concat(v):nn;return Tn((0,i.jsx)(k,S()({className:tn()(u||Fn,C,zn,En),ref:l},N)))}),j=M.forwardRef(function(c,l){var u,v=M.useContext(d.E_),C=v.direction,k=M.useState([]),N=J()(k,2),H=N[0],dn=N[1],nn=c.prefixCls,en=c.className,cn=c.rootClassName,Tn=c.children,zn=c.hasSider,En=c.tagName,Fn=c.style,Dn=b()(c,mn),In=(0,ln.default)(Dn,["suffixCls"]),T=M.useContext(d.E_),Un=T.getPrefixCls,on=T.layout,Ln=Un("layout",nn),Nn=m(H,Tn,zn),Hn=bn(Ln),Vn=J()(Hn,3),re=Vn[0],ae=Vn[1],Zn=Vn[2],ie=tn()(Ln,(u={},w()(u,"".concat(Ln,"-has-sider"),Nn),w()(u,"".concat(Ln,"-rtl"),C==="rtl"),u),on==null?void 0:on.className,en,cn,ae,Zn),le=M.useMemo(function(){return{siderHook:{addSider:function(Kn){dn(function(Gn){return[].concat(A()(Gn),[Kn])})},removeSider:function(Kn){dn(function(Gn){return Gn.filter(function(_n){return _n!==Kn})})}}}},[]);return re((0,i.jsx)(f.V.Provider,{value:le,children:(0,i.jsx)(En,S()(S()({ref:l,className:ie,style:S()(S()({},on==null?void 0:on.style),Fn)},In),{},{children:Tn}))}))}),Y=gn({tagName:"div",displayName:"Layout"})(j),Sn=gn({suffixCls:"header",tagName:"header",displayName:"Header"})(U),kn=gn({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(U),jn=gn({suffixCls:"content",tagName:"main",displayName:"Content"})(U),yn=Y,I=yn;I.Header=Sn,I.Footer=kn,I.Content=jn,I.Sider=n.Z,I._InternalSiderContext=n.D;var h=I},715778:function(Rn,X,t){t.d(X,{Z:function(){return $}});var rn=t(174219),A=t(97857),xn=t.n(A),w=t(585369),fn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},J=fn,an={lang:xn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:xn()({},J)};an.lang.ok="\u786E\u5B9A";var b=an,s=b,S="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",M={locale:"zh-cn",Pagination:rn.Z,DatePicker:b,TimePicker:J,Calendar:s,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:S,method:S,array:S,object:S,number:S,date:S,boolean:S,integer:S,float:S,regexp:S,email:S,url:S,hex:S},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},$=M}}]);
