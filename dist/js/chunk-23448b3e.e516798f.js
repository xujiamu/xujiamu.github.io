(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23448b3e"],{"05b9":function(t,e,n){"use strict";var r=n("b3cb"),o=n.n(r);o.a},"0693":function(t,e,n){"use strict";var r=n("5901"),o=n.n(r);o.a},"073a":function(t,e,n){},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"2b00":function(t,e,n){"use strict";var r=n("5b23"),o=n.n(r);o.a},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),s=n("35e8"),c=n("481b"),a=n("8f60"),u=n("45f2"),f=n("53e2"),l=n("5168")("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",p="keys",v="values",m=function(){return this};t.exports=function(t,e,n,b,A,g,y){a(n,e,b);var x,w,T,S=function(t){if(!d&&t in P)return P[t];switch(t){case p:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",I=A==v,L=!1,P=t.prototype,D=P[l]||P[h]||A&&P[A],k=D||S(A),O=A?I?S("entries"):k:void 0,j="Array"==e&&P.entries||D;if(j&&(T=f(j.call(new t)),T!==Object.prototype&&T.next&&(u(T,C,!0),r||"function"==typeof T[l]||s(T,l,m))),I&&D&&D.name!==v&&(L=!0,k=function(){return D.call(this)}),r&&!y||!d&&!L&&P[l]||s(P,l,k),c[e]=k,c[C]=m,A)if(x={values:I?k:S(v),keys:g?k:S(p),entries:O},y)for(w in x)w in P||i(P,w,x[w]);else o(o.P+o.F*(d||L),e,x);return x}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"34fd":function(t,e,n){},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},3702:function(t,e,n){var r=n("481b"),o=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"3cac":function(t,e,n){"use strict";var r=n("34fd"),o=n.n(r);o.a},"40c3":function(t,e,n){var r=n("6b4c"),o=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,n){var r=n("5168")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(s){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,s="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))};c.store=r},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},"549b":function(t,e,n){"use strict";var r=n("d864"),o=n("63b6"),i=n("241e"),s=n("b0dc"),c=n("3702"),a=n("b447"),u=n("20fd"),f=n("7cd6");o(o.S+o.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,d=i(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,b=0,A=f(d);if(m&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==A||h==Array&&c(A))for(e=a(d.length),n=new h(e);e>b;b++)u(n,b,m?v(d[b],b):d[b]);else for(l=A.call(d),n=new h;!(o=l.next()).done;b++)u(n,b,m?s(l,v,[o.value,b],!0):o.value);return n.length=b,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},5901:function(t,e,n){},"5b23":function(t,e,n){},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,s){var c,a=r(e),u=o(a.length),f=i(s,u);if(t&&n!=n){while(u>f)if(c=a[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),s=n("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var u=c[a],f=r[u],l=f&&f.prototype;l&&!l[s]&&o(l,s,u),i[u]=i.Array}},"6d71":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.goods.length?n("div",{staticClass:"GoodList"},[t._l(t.goods,(function(t){return[n("goods-list-item",{attrs:{item:t}})]}))],2):t._e()},o=[],i=n("9977"),s={name:"GoodsList",components:{GoodsListItem:i["a"]},props:{goods:{type:Array,default:function(){return[]}}}},c=s,a=(n("85db"),n("2877")),u=Object(a["a"])(c,r,o,!1,null,"2b933c6a",null);e["a"]=u.exports},7080:function(t,e,n){},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,s,c=String(o(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):i:t?c.slice(a,a+2):s-56320+(i-55296<<10)+65536)}}},"774e":function(t,e,n){t.exports=n("d2d5")},7788:function(t,e,n){},"7cd6":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,s=i(e),c=s.length,a=0;while(c>a)r.f(t,n=s[a++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"85db":function(t,e,n){"use strict";var r=n("7080"),o=n.n(r);o.a},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),s={};n("35e8")(s,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"95d5":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},9952:function(t,e,n){},"9bd0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.title,(function(e,r){return n("div",{staticClass:"tab-control-item",on:{click:function(e){return t.changeIndex(r)}}},[n("span",{class:{active:t.currentIndex===r}},[t._v(t._s(e))])])})),0)},o=[],i={name:"TabControl",data:function(){return{currentIndex:0}},props:{title:Array},methods:{changeIndex:function(t){this.currentIndex=t,this.$emit("ChangeIndex",t)}}},s=i,c=(n("2b00"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"36d8d490",null);e["a"]=a.exports},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),s=n("5559")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",s=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),u=t.F;while(r--)delete u[a][i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[a]=r(t),n=new c,c[a]=null,n[s]=t):n=u(),void 0===e?n:o(n,e)}},a745:function(t,e,n){t.exports=n("f410")},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){var i=t["return"];throw void 0!==i&&r(i.call(t)),s}}},b3cb:function(t,e,n){},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{scopedSlots:t._u([{key:"center",fn:function(){return[t._v("\n      购物街\n    ")]},proxy:!0}])}),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabTop,expression:"isTabTop"}],ref:"tabControl2",staticClass:"fixed",attrs:{title:["流行","新款","精选"]},on:{ChangeIndex:t.ChangeIndex}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll,pullUp:t.pullUp}},[n("home-swiper",{attrs:{banner:t.banner},on:{swiperImgLoad:t.swiperImgLoad}}),n("recommend-view",{attrs:{recommend:t.recommend}}),n("feature-view"),n("tab-control",{ref:"tabControl1",attrs:{title:["流行","新款","精选"]},on:{ChangeIndex:t.ChangeIndex}}),n("goods-list",{attrs:{goods:t.goodsShow}})],1),n("go-back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},o=[],i=n("a745"),s=n.n(i);function c(t){if(s()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var a=n("774e"),u=n.n(a),f=n("c8bb"),l=n.n(f);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return c(t)||d(t)||h()}n("90b9");var v=n("eecb"),m=n("a7ac"),b=n("9bd0"),A=n("6d71"),g=n("5d17"),y=n("f4c5"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banner.length?n("swiper",{scopedSlots:t._u([{key:"default",fn:function(){return t._l(t.banner,(function(e){return n("swiperItem",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:"图片加载中",title:e.link},on:{load:t.imgLoad}})])])}))},proxy:!0}],null,!1,3935917206)}):t._e()},w=[],T=n("dc2c"),S={name:"HomeSwiper",data:function(){return{isLoad:!1}},props:{banner:{type:Array,default:function(){return[]}}},methods:{imgLoad:function(){this.isLoad||(this.$emit("swiperImgLoad"),this.isLoad=!0)}},components:{Swiper:T["a"],SwiperItem:T["b"]}},C=S,I=n("2877"),L=Object(I["a"])(C,x,w,!1,null,"3e4b06c8",null),P=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"recommend-view"}},t._l(t.recommend,(function(e){return n("div",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},k=[],O={name:"recommendView",props:{recommend:{type:Array,default:function(){return[]}}}},j=O,H=(n("be39"),Object(I["a"])(j,D,k,!1,null,"32211f83",null)),E=H.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"feature"}},[r("a",{attrs:{href:"https://act.mogujie.com/zz1x67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],W={name:"FeatureView"},_=W,G=(n("bf32"),Object(I["a"])(_,z,M,!1,null,"d5603cce",null)),q=G.exports,N=n("1bab");function F(){return Object(N["a"])({url:"/api/v1/home/multidata"})}function V(t,e){return Object(N["a"])({url:"/api/v1/home/data",params:{type:t,page:e}})}var B={name:"Home",data:function(){return{banner:[],recommend:[],goods:{pop:{type:"pop",page:0,list:[]},new:{type:"new",page:0,list:[]},sell:{type:"sell",page:0,list:[]}},show:"pop",isShowBackTop:!1,offsetTop:0,isTabTop:!1,scrollY:0}},components:{NavBar:m["a"],HomeSwiper:P,RecommendView:E,FeatureView:q,TabControl:b["a"],GoodsList:A["a"],Scroll:g["a"],GoBackTop:y["a"]},mixins:[v["b"]],created:function(){this.getHomeMultidata(),this.getHomeGoods(this.goods.pop.type),this.getHomeGoods(this.goods.new.type),this.getHomeGoods(this.goods.sell.type)},mounted:function(){},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.scrollY,0)},deactivated:function(){this.scrollY=this.$refs.scroll.getScroll(),this.$bus.$off("LoadImg",this.loadImg)},computed:{goodsShow:function(){return this.goods[this.show].list}},methods:{getHomeMultidata:function(){var t=this;F().then((function(e){t.banner=e.data.banner.list,t.recommend=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;V(t,n).then((function(n){var r;(r=e.goods[t].list).push.apply(r,p(n.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))},ChangeIndex:function(t){switch(t){case 0:this.show="pop";break;case 1:this.show="new";break;case 2:this.show="sell"}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},backTop:function(){this.$refs.scroll.scrollTo(0,0,200)},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isTabTop=-t.y>this.offsetTop},pullUp:function(){this.getHomeGoods(this.show)},swiperImgLoad:function(){this.offsetTop=this.$refs.tabControl1.$el.offsetTop}}},R=B,U=(n("05b9"),Object(I["a"])(R,r,o,!1,null,"6726e140",null));e["default"]=U.exports},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},be39:function(t,e,n){"use strict";var r=n("073a"),o=n.n(r);o.a},bf32:function(t,e,n){"use strict";var r=n("7788"),o=n.n(r);o.a},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),s=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d418:function(t,e,n){"use strict";var r=n("9952"),o=n.n(r);o.a},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},dc2c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,r){return n("div",{key:r,staticClass:"indi-item",class:{active:r===t.currentIndex-1}})}))):t._e()],2)],2)},o=[],i=(n("c5f6"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,c=(n("3cac"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"ddd81de4",null),u=a.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},l=[],d={name:"Slide"},h=d,p=(n("0693"),Object(c["a"])(h,f,l,!1,null,"376fae32",null)),v=p.exports;n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return v}))},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),s=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);while(e.length>a)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f4c5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"go-back-top"},[r("img",{attrs:{src:n("684a"),alt:""}})])}],i={name:"GoBackTop"},s=i,c=(n("d418"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"29a53b8e",null);e["a"]=a.exports}}]);
//# sourceMappingURL=chunk-23448b3e.e516798f.js.map