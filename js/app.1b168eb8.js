(function(t){function e(e){for(var a,o,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)o=c[l],n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var i=s[c];0!==n[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1257:function(t,e,s){"use strict";var a=s("dfbd"),n=s.n(a);n.a},"28da":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o=(s("5c0b"),s("2877")),c={},i=Object(o["a"])(c,n,r,!1,null,null,null),u=i.exports,d=s("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{staticClass:"nav"},[a("img",{attrs:{src:s("cf05"),alt:"logo"}}),a("router-link",{staticClass:"basketLink",attrs:{to:"/koszyk"}},[a("img",{attrs:{src:s("ccc3"),alt:"basket",width:"50px",height:"50px"}})])],1),a("h1",{staticClass:"appTitle"},[t._v("Shop")]),a("div",{staticClass:"shop"},[t._l(t.data,function(e){return a("div",{key:e.id,staticClass:"card"},[a("div",{staticClass:"card-image"},[a("img",{attrs:{srcset:e.image}}),a("button",{on:{click:function(s){return t.add(e)}}},[t._v("Buy now")])]),a("router-link",{attrs:{to:"/produkt"}},[a("p",{staticClass:"title",on:{click:function(s){return t.setProduct(e)}}},[t._v(t._s(e.product_name))])]),a("p",{staticClass:"price"},[t._v(t._s(e.price))])],1)}),a("div",{staticClass:"modal none"},[a("div",{staticClass:"modalBody"},[a("h2",[t._v("DODANO DO KOSZYKA")]),a("h4",[t._v(" "+t._s(t.productCard.product_name)+" ")]),a("div",{staticClass:"basketInfo"},[a("div",{staticClass:"basketInfoItem"},[a("p",[t._v("Cena jednostkowa")]),a("p",[t._v(" 1 x "+t._s(t.productCard.price))]),a("button",{on:{click:function(e){return t.removeClass()}}},[t._v("Kontynuuj zakupy")])]),a("div",{staticClass:"basketInfoItem"},[a("p",[t._v("Wartość koszyka")]),a("p",[t._v(" $"+t._s(t.basketValue.toFixed(2))+" ")]),a("router-link",{attrs:{to:"/koszyk"}},[a("button",[t._v("Przejdź do koszyka")])])],1)])])])],2)])},p=[],f=s("cebc"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))])])},k=[],m={name:"Main",props:["msg"]},_=m,b=Object(o["a"])(_,v,k,!1,null,"764b2471",null),h=b.exports,C=s("2f62"),y={name:"home",components:{Main:h},data:function(){return{}},methods:{add:function(t){this.$store.dispatch("addToBasket",t),this.$store.dispatch("updateBasketValue",t),this.setProduct(t),document.querySelector(".modal").classList.remove("none")},removeClass:function(){document.querySelector(".modal").classList.add("none")},setProduct:function(t){var e=Object(f["a"])({},t,{counter:1});this.$store.dispatch("addToProductCard",e)}},mounted:function(){this.$store.dispatch("getData")},computed:Object(C["b"])(["data","productCard","basketValue"])},g=y,O=(s("729d"),Object(o["a"])(g,l,p,!1,null,"0701b156",null)),T=O.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("nav",{staticClass:"nav"},[a("p",{staticClass:"shopBack"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05"),alt:"logo"}})])],1)]),a("div",{staticClass:"basket"},[t._m(0),t._l(t.basket,function(e){return a("div",{key:e.id,staticClass:"basketItem"},[a("div",{staticClass:"itemDesc"},[a("img",{attrs:{srcset:e.image}}),a("p",[t._v(t._s(e.product_name))]),a("p",{staticClass:"price"},[t._v(t._s(e.price))]),a("p",[a("button",{on:{click:function(s){return t.subtract(e)}}},[t._v("-")]),t._v(" "+t._s(e.counter)+" "),a("button",{on:{click:function(s){return t.increaseCounter(e)}}},[t._v("+")])]),a("p",[t._v("$"+t._s((e.price.slice(1)*e.counter).toFixed(2)))]),a("button",{staticClass:"delete",on:{click:function(s){return t.deleteItem(e)}}},[t._v("X")])])])}),a("div",{staticClass:"basketValue"},[t._v("\n            wartość koszyka: $"+t._s(this.result.toFixed(2))+"\n          ")])],2)])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"basketHeader"},[s("p",[t._v("Produkt")]),s("p",{staticClass:"not-mobile"}),s("p",[t._v("Cena")]),s("p",[t._v("Ilość")]),s("p",[t._v("Wartość")]),s("p")])}],B=(s("c5f6"),{data:function(){return{result:0}},methods:{deleteItem:function(t){this.$store.dispatch("removeFromBasket",t);this.$store.basketValue;this.result-=Number(t.price.slice(1)*t.counter),this.$store.dispatch("setBasketValue",this.result),0===this.result&&(document.querySelector(".basketHeader").innerHTML="<p style='text-aling:center; width: 100%;'> Brak produktów w koszyku </p>")},subtract:function(t){t.counter>1&&(t.counter--,this.result-=Number(t.price.slice(1)),this.$store.dispatch("setBasketValue",this.result))},increaseCounter:function(t){t.counter++,this.result+=Number(t.price.slice(1)),this.$store.dispatch("setBasketValue",this.result)}},mounted:function(){for(var t=this.$store.state.basket.map(function(t){return Number(t.price.slice(1)*t.counter)}),e=0;e<t.length;e++)this.result+=t[e];this.$store.dispatch("setBasketValue",this.result),0===this.result&&(document.querySelector(".basketHeader").innerHTML="<p style='text-aling:center; width: 100%;'> Brak produktów w koszyku </p>")},computed:Object(C["b"])(["basket","basketValue"])}),E=B,S=(s("6a9d"),Object(o["a"])(E,w,A,!1,null,"d2af1f50",null)),D=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"produkt"},[a("div",{staticClass:"nav"},[a("p",{staticClass:"shopBack"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05"),alt:"logo"}})])],1),a("router-link",{staticClass:"basketLink",attrs:{to:"/koszyk"}},[a("img",{attrs:{src:s("ccc3"),alt:"basket",width:"50px",height:"50px"}})])],1),a("div",{staticClass:"produktCard"},[a("img",{attrs:{srcset:t.productCard.image}}),a("p",{staticClass:"title"},[t._v(t._s(t.productCard.product_name))]),a("div",{staticClass:"desc"},[a("div",{staticClass:"desc-item"},[a("p",{staticClass:"price"},[t._v(t._s(t.productCard.price))]),a("p",{staticClass:"price"},[t._v("PLN/szt.")])]),a("div",{staticClass:"desc-item"},[a("div",{staticClass:"counter"},[a("button",{on:{click:function(e){return t.subtract(t.productCard)}}},[t._v("-")]),a("p",[t._v(t._s(t.productCard.counter))]),a("button",{on:{click:function(e){t.productCard.counter++}}},[t._v("+")])]),a("button",{on:{click:function(e){return t.add(t.productCard)}}},[t._v("Do koszyka")])])])]),a("div",{staticClass:"modal none"},[a("div",{staticClass:"modalBody"},[a("h2",[t._v("DODANO DO KOSZYKA")]),a("h4",[t._v(" "+t._s(t.productCard.product_name)+" ")]),a("div",{staticClass:"basketInfo"},[a("div",{staticClass:"basketInfoItem"},[a("p",[t._v("Cena jednostkowa")]),a("p",[t._v(" "+t._s(t.productCard.counter)+" x "+t._s(t.productCard.price))]),a("button",{on:{click:function(e){return t.removeClass()}}},[t._v("Kontynuuj zakupy")])]),a("div",{staticClass:"basketInfoItem"},[a("p",[t._v("Wartość koszyka")]),a("p",[t._v(" $"+t._s(t.basketValue.toFixed(2))+" ")]),a("router-link",{attrs:{to:"/koszyk"}},[a("button",[t._v("Przejdź do koszyka")])])],1)])])])])},j=[],V={data:function(){return{}},methods:{add:function(t){for(var e=1;e<=t.counter;e++)this.$store.dispatch("addToBasket",t),this.$store.dispatch("updateBasketValue",t);document.querySelector(".modal").classList.remove("none")},removeClass:function(){document.querySelector(".modal").classList.add("none")},subtract:function(t){t.counter>1&&t.counter--}},mounted:function(){},computed:Object(C["b"])(["productCard","basketValue"])},$=V,P=(s("1257"),Object(o["a"])($,x,j,!1,null,"dd877836",null)),z=P.exports;a["a"].use(d["a"]);var K=new d["a"]({routes:[{path:"/",name:"home",component:T},{path:"/koszyk",name:"Koszyk",component:D},{path:"/produkt",name:"Produkt",component:z}]}),I=(s("6762"),s("2fdb"),s("bc3a")),L=s.n(I),M=s("a7fe"),F=s.n(M);a["a"].use(F.a,L.a),a["a"].use(C["a"]);var N=new C["a"].Store({state:{data:"",productCard:[],basket:[],basketValue:0},mutations:{SET_DATA:function(t,e){t.data=e},ADD_TO_BASKET:function(t,e){var s=Object(f["a"])({},e,{counter:1}),a=t.basket.map(function(t){return t.id});if(a.includes(e.id)){var n=t.basket.filter(function(t){return t.id===e.id});n[0].counter++}else t.basket.push(s)},REMOVE_FROM_BASKET:function(t,e){t.basket=t.basket.filter(function(t){return t!==e})},ADD_TO_PRODUCTCARD:function(t,e){t.productCard=e},SET_BASKETVALUE:function(t,e){t.basketValue=e},UPDATE_BASKETVALUE:function(t,e){t.basketValue+=Number(e.price.slice(1))}},actions:{getData:function(t){var e=t.commit;L.a.get("https://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6").then(function(t){return t.data}).then(function(t){e("SET_DATA",t)})},addToBasket:function(t,e){var s=t.commit;s("ADD_TO_BASKET",e)},removeFromBasket:function(t,e){var s=t.commit;s("REMOVE_FROM_BASKET",e)},addToProductCard:function(t,e){var s=t.commit;s("ADD_TO_PRODUCTCARD",e)},setBasketValue:function(t,e){var s=t.commit;s("SET_BASKETVALUE",e)},updateBasketValue:function(t,e){var s=t.commit;s("UPDATE_BASKETVALUE",e)}}});a["a"].config.productionTip=!1,new a["a"]({router:K,store:N,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},"606a":function(t,e,s){},"6a9d":function(t,e,s){"use strict";var a=s("28da"),n=s.n(a);n.a},"729d":function(t,e,s){"use strict";var a=s("606a"),n=s.n(a);n.a},ccc3:function(t,e,s){t.exports=s.p+"img/shopping-cart-solid.8bf1af37.svg"},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},dfbd:function(t,e,s){}});
//# sourceMappingURL=app.1b168eb8.js.map