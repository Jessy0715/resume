(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{511:function(t,e,r){var content=r(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e23b7040",content,!0,{sourceMap:!1})},512:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.fz-xl{font-size:23.996px}.fz-larger{font-size:17.99px}.fz-normal{font-size:15.988px}.fz-sml{font-size:14px}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},513:function(t,e,r){"use strict";r(9),r(10),r(11),r(3),r(13),r(8),r(14);var n=r(2),o=(r(23),r(190),r(191),r(511),r(229)),c=r(230),d=r(72),l=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},520:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("34844c63",content,!0,{sourceMap:!1})},530:function(t,e,r){"use strict";r(520)},531:function(t,e,r){var n=r(16)(!1);n.push([t.i,".fz-xl[data-v-35104871]{font-size:23.996px}.fz-larger[data-v-35104871]{font-size:17.99px}.fz-normal[data-v-35104871]{font-size:15.988px}.fz-sml[data-v-35104871]{font-size:14px}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg[data-v-35104871]{background-color:transparent!important}",""]),t.exports=n},535:function(t,e,r){"use strict";r.r(e);var n={name:"PostCard",props:{isJobPage:{type:Boolean}},data:function(){return{iconGroup:[{name:"mdi-attachment",isDisabled:!0},{name:"mdi-file-image",isDisabled:!1},{name:"mdi-movie",isDisabled:!0},{name:"mdi-send",isDisabled:!0}],jobIconGroup:[{name:"mdi-filter-variant",isDisabled:!0},{name:"mdi-magnify",isDisabled:!1}]}}},o=(r(530),r(89)),c=r(101),d=r.n(c),l=r(233),v=r(513),h=r(218),f=r(152),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[t._t("title",(function(){return[t._v("預設 title")]})),t._v(" "),r("div",{staticClass:"px-4"},[r("v-divider")],1),t._v(" "),r("div",{staticClass:"d-flex align-center"},[t._t("text",(function(){return[t._v("預設 text")]})),t._v(" "),r("div",{staticClass:"d-flex"},[t.isJobPage?t._e():t._l(t.iconGroup,(function(e,n){return r("v-btn",{key:n,staticClass:"mr-4 pa-0",attrs:{color:"primary",disabled:e.isDisabled,"min-width":"25","max-height":"25"}},[r("v-icon",{style:3==n||0==n?"transform: rotate(-30deg)":"",attrs:{size:"20"}},[t._v(" "+t._s(e.name)+" ")])],1)})),t._v(" "),t.isJobPage?t._l(t.jobIconGroup,(function(e,n){return r("v-btn",{key:n,staticClass:"mr-4 pa-0",attrs:{color:"primary",disabled:e.isDisabled,"min-width":"25","max-height":"25"}},[r("v-icon",{attrs:{size:"20"}},[t._v(" "+t._s(e.name)+" ")])],1)})):t._e()],2)],2)],2)}),[],!1,null,"35104871",null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:v.a,VDivider:h.a,VIcon:f.a})}}]);