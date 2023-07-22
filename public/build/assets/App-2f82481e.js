import{o as r,f as a,b as i,F as b,A as m,e as k,t as n,B as _,c as C,n as R,d as j,a as $}from"./app-81463a82.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const E={name:"DiceBar",props:{},data(){return{dice_types:[{value:2,img:!1},{value:4,img:!1},{value:6,img:!1},{value:8,img:!1},{value:10,img:!1},{value:20,img:!1},{value:50,img:!1},{value:100,img:!1}],mod:0}},watch:{mod(h){this.$emit("mod",h)}},methods:{rollDice(h){let v=Math.floor(Math.random()*h)+1;console.log(v),this.$emit("roll",[h,v])}}},N={class:"m-1 px-3 pt-4 pb-2"},T={class:"d-flex justify-content-around flex-wrap"},B=["onClick"],H={class:"mr-1"};function I(h,v,t,l,z,s){return r(),a("div",N,[i("div",T,[(r(!0),a(b,null,m(z.dice_types,e=>(r(),a("button",{key:e.value,class:"btn btn-primary mb-1",onClick:k(M=>s.rollDice(e.value),["prevent"])},[i("span",H,n("d"+e.value),1)],8,B))),128))])])}const O=f(E,[["render",I]]);var u={};function y(h,v){v?v.constructor.super.util.warn(h,v):console.error(h)}var V={name:"fa-icon",props:{name:{type:String,validator:function(h){return!h||h in u||(y('Invalid prop: prop "name" is referring to an unregistered icon "'+h+`".
Please make sure you have imported this icon before using it.`,this),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(h){return h==="horizontal"||h==="vertical"||h==="both"}},label:String,tabindex:[Number,String]},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var h=this.scale;return h=h===void 0?1:Number(h),isNaN(h)||h<=0?(y('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):h*this.outerScale},klass:function(){var h=this,v={"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":this.flip==="horizontal","fa-flip-vertical":this.flip==="vertical","fa-flip-both":this.flip==="both","fa-inverse":this.inverse,"fa-pulse":this.pulse};return this.classes&&Object.keys(this.classes).forEach(function(t){h.classes[t]&&(v[t]=!0)}),v},icon:function(){return this.name?u[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var h=this.icon,v=h.width,t=h.height;return Math.max(v,t)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return this.normalizedScale!==1&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var h=this.icon.raw,v={};return h=h.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,l,z){var s=function(e){return e===void 0&&(e=""),e+F++}("vat-");return v[z]=s,' id="'+s+'"'}),h=h.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,l,z,s){var e=l||s;return e&&v[e]?"#"+v[e]:t}),h},focusable:function(){var h=this.tabindex;return h==null?"false":(typeof h=="string"?parseInt(h,10):h)>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var h=this;if(this.name||this.name===null||this.$children.length!==0){if(!this.icon){var v=0,t=0;this.$children.forEach(function(l){l.outerScale=h.normalizedScale,v=Math.max(v,l.width),t=Math.max(t,l.height)}),this.childrenWidth=v,this.childrenHeight=t,this.$children.forEach(function(l){l.x=(v-l.width)/2,l.y=(t-l.height)/2})}}else y('Invalid prop: prop "name" is required.',this)}},render:function(h){if(this.name===null)return h();var v={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable},on:this.$listeners};if(this.raw){var t="<g>"+this.raw+"</g>";this.title&&(t="<title>"+function(z){return z.replace(/[<>"&]/g,function(s){return L[s]||s})}(this.title)+"</title>"+t),v.domProps={innerHTML:t}}var l=this.title?[h("title",this.title)]:[];return h("svg",v,this.raw?null:l.concat([h("g",this.$slots.default||(this.icon?this.icon.paths.map(function(z,s){return h("path",{attrs:z,key:"path-"+s})}).concat(this.icon.polygons.map(function(z,s){return h("polygon",{attrs:z,key:"polygon-"+s})})):[]))]))},register:function(h){for(var v in h){var t=h[v],l=t.paths;l===void 0&&(l=[]);var z=t.d,s=t.polygons;s===void 0&&(s=[]);var e=t.points;z&&l.push({d:z}),e&&s.push({points:e}),u[v]=D({},t,{paths:l,polygons:s})}},icons:u};function A(h,v){return Object.prototype.hasOwnProperty.call(h,v)}function D(h){for(var v=[],t=arguments.length-1;t-- >0;)v[t]=arguments[t+1];return v.forEach(function(l){for(var z in l)A(l,z)&&(h[z]=l[z])}),h}var F=0,L={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function P(h,v,t,l,z,s,e,M,g,o){typeof e!="boolean"&&(g=M,M=e,e=!1);var w,p=typeof t=="function"?t.options:t;if(h&&h.render&&(p.render=h.render,p.staticRenderFns=h.staticRenderFns,p._compiled=!0,z&&(p.functional=!0)),l&&(p._scopeId=l),s?(w=function(d){(d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(d=__VUE_SSR_CONTEXT__),v&&v.call(this,g(d)),d&&d._registeredComponents&&d._registeredComponents.add(s)},p._ssrRegister=w):v&&(w=e?function(d){v.call(this,o(d,this.$root.$options.shadowRoot))}:function(d){v.call(this,M(d))}),w)if(p.functional){var S=p.render;p.render=function(d,q){return w.call(q),S(d,q)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,w):[w]}return t}function U(h){return h||typeof __VUE_SSR_CONTEXT__>"u"||(h=__VUE_SSR_CONTEXT__),h?("styles"in h||(h._styles=h._styles||{},Object.defineProperty(h,"styles",{enumerable:!0,get:function(){return h._renderStyles(h._styles)}}),h._renderStyles=h._renderStyles||X),function(v,t){return function(l,z,s){var e=z.media||"default",M=s._styles[e]||(s._styles[e]={ids:[],css:""});if(!M.ids.includes(l)){M.media=z.media,M.ids.push(l);var g=z.source;M.css+=g+`