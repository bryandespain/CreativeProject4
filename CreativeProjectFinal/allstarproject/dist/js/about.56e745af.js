(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(e,t,n){var r=n("342f"),a=r.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"0b42":function(e,t,n){var r=n("da84"),a=n("e8b5"),i=n("68ee"),s=n("861d"),o=n("b622"),u=o("species"),c=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,i(t)&&(t===c||a(t.prototype))?t=void 0:s(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?c:t}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),i=n("2d00"),s=a("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("06cf").f,s=n("50c4"),o=n("577e"),u=n("5a34"),c=n("1d80"),d=n("ab13"),f=n("c430"),l=a("".startsWith),m=a("".slice),p=Math.min,v=d("startsWith"),h=!f&&!v&&!!function(){var e=i(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!h&&!v},{startsWith:function(e){var t=o(c(this));u(e);var n=s(p(arguments.length>1?arguments[1]:void 0,t.length)),r=o(e);return l?l(t,r,n):m(t,n,n+r.length)===r}})},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),s=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},"4dae":function(e,t,n){var r=n("da84"),a=n("23cb"),i=n("07fa"),s=n("8418"),o=r.Array,u=Math.max;e.exports=function(e,t,n){for(var r=i(e),c=a(t,r),d=a(void 0===n?r:n,r),f=o(u(d-c,0)),l=0;c<d;c++,l++)s(f,l,e[c]);return f.length=l,f}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),s=i("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("59ed"),s=n("7b0b"),o=n("07fa"),u=n("577e"),c=n("d039"),d=n("addb"),f=n("a640"),l=n("04d1"),m=n("d998"),p=n("2d00"),v=n("512c"),h=[],g=a(h.sort),b=a(h.push),I=c((function(){h.sort(void 0)})),w=c((function(){h.sort(null)})),x=f("sort"),_=!c((function(){if(p)return p<70;if(!(l&&l>3)){if(m)return!0;if(v)return v<603;var e,t,n,r,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)h.push({k:t+r,v:n})}for(h.sort((function(e,t){return t.v-e.v})),r=0;r<h.length;r++)t=h[r].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),y=I||!w||!x||!_,C=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}};r({target:"Array",proto:!0,forced:y},{sort:function(e){void 0!==e&&i(e);var t=s(this);if(_)return void 0===e?g(t):g(t,e);var n,r,a=[],u=o(t);for(r=0;r<u;r++)r in t&&b(a,t[r]);d(a,C(e)),n=a.length,r=0;while(r<n)t[r]=a[r++];while(r<u)delete t[r++];return t}})},"512c":function(e,t,n){var r=n("342f"),a=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"5a34":function(e,t,n){var r=n("da84"),a=n("44e7"),i=r.TypeError;e.exports=function(e){if(a(e))throw i("The method doesn't accept regular expressions");return e}},6560:function(e,t,n){"use strict";n("c941")},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?a.f(e,s,i(0,n)):e[s]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d039"),s=n("e8b5"),o=n("861d"),u=n("7b0b"),c=n("07fa"),d=n("8418"),f=n("65f0"),l=n("1dde"),m=n("b622"),p=n("2d00"),v=m("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",b=a.TypeError,I=p>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),w=l("concat"),x=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:s(e)},_=!I||!w;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,a,i,s=u(this),o=f(s,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?s:arguments[t],x(i)){if(a=c(i),l+a>h)throw b(g);for(n=0;n<a;n++,l++)n in i&&d(o,l,i[n])}else{if(l>=h)throw b(g);d(o,l++,i)}return o.length=l,o}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,i=function(e,t){var n=e.length,u=a(n/2);return n<8?s(e,t):o(e,i(r(e,0,u),t),i(r(e,u),t),t)},s=function(e,t){var n,r,a=e.length,i=1;while(i<a){r=i,n=e[i];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==i++&&(e[r]=n)}return e},o=function(e,t,n,r){var a=t.length,i=n.length,s=0,o=0;while(s<a||o<i)e[s+o]=s<a&&o<i?r(t[s],n[o])<=0?t[s++]:n[o++]:s<a?t[s++]:n[o++];return e};e.exports=i},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,i=n("e330"),s=n("9bf2").f,o=Function.prototype,u=i(o.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=i(c.exec),f="name";r&&!a&&s(o,f,{configurable:!0,get:function(){try{return d(c,u(this))[1]}catch(e){return""}}})},b727:function(e,t,n){var r=n("0366"),a=n("e330"),i=n("44ad"),s=n("7b0b"),o=n("07fa"),u=n("65f0"),c=a([].push),d=function(e){var t=1==e,n=2==e,a=3==e,d=4==e,f=6==e,l=7==e,m=5==e||f;return function(p,v,h,g){for(var b,I,w=s(p),x=i(w),_=r(v,h),y=o(x),C=0,A=g||u,k=t?A(p,y):n||l?A(p,0):void 0;y>C;C++)if((m||C in x)&&(b=x[C],I=_(b,C,w),e))if(t)k[C]=I;else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return C;case 2:c(k,b)}else switch(e){case 4:return!1;case 7:c(k,b)}return f?-1:a||d?d:k}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},c941:function(e,t,n){},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin"},[n("h1",[e._v("The Admin Page")]),e._m(0),n("div",{staticClass:"add"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{placeholder:"Number"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.points,expression:"points"}],attrs:{placeholder:"Points"},domProps:{value:e.points},on:{input:function(t){t.target.composing||(e.points=t.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rebounds,expression:"rebounds"}],attrs:{placeholder:"Rebounds"},domProps:{value:e.rebounds},on:{input:function(t){t.target.composing||(e.rebounds=t.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.assists,expression:"assists"}],attrs:{placeholder:"Assists"},domProps:{value:e.assists},on:{input:function(t){t.target.composing||(e.assists=t.target.value)}}}),n("p"),n("input",{attrs:{type:"file",name:"photo"},on:{change:e.fileChanged}}),n("button",{on:{click:e.upload}},[e._v("Upload")])]),e.addItem?n("div",{staticClass:"upload"},[n("h2",[e._v(e._s(e.addItem.name)+" #"+e._s(e.addItem.number))]),n("img",{attrs:{src:e.addItem.path}}),n("p")]):e._e()]),e._m(1),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:e.findTitle},on:{input:function(t){t.target.composing||(e.findTitle=t.target.value)}}}),e.suggestions.length>0?n("div",{staticClass:"suggestions"},e._l(e.suggestions,(function(t){return n("div",{key:t.id,staticClass:"suggestion",on:{click:function(n){return e.selectItem(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0):e._e()]),e.findItem?n("div",{staticClass:"upload"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.name,expression:"findItem.name"}],attrs:{placeholder:"Name"},domProps:{value:e.findItem.name},on:{input:function(t){t.target.composing||e.$set(e.findItem,"name",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.number,expression:"findItem.number"}],attrs:{placeholder:"Number"},domProps:{value:e.findItem.number},on:{input:function(t){t.target.composing||e.$set(e.findItem,"number",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.points,expression:"findItem.points"}],attrs:{placeholder:"Points"},domProps:{value:e.findItem.points},on:{input:function(t){t.target.composing||e.$set(e.findItem,"points",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.rebounds,expression:"findItem.rebounds"}],attrs:{placeholder:"Rebounds"},domProps:{value:e.findItem.rebounds},on:{input:function(t){t.target.composing||e.$set(e.findItem,"rebounds",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.assists,expression:"findItem.assists"}],attrs:{placeholder:"Assists"},domProps:{value:e.findItem.assists},on:{input:function(t){t.target.composing||e.$set(e.findItem,"assists",t.target.value)}}})]),n("p"),n("img",{attrs:{src:e.findItem.path}})]):e._e(),e.findItem?n("div",{staticClass:"actions"},[n("p",[n("button",{on:{click:function(t){return e.deleteItem(e.findItem)}}},[e._v("Delete")])]),n("p",[n("button",{on:{click:function(t){return e.editItem(e.findItem)}}},[e._v("Edit")])])]):e._e()])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h2",[e._v("Add an Item")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h2",[e._v("Edit/Delete an Item")])])}],i=n("1da1"),s=(n("96cf"),n("99af"),n("b0c0"),n("4de4"),n("d3b7"),n("2ca0"),n("4e82"),n("bc3a")),o=n.n(s),u={name:"Admin",data:function(){return{name:"",file:null,number:"",points:"",rebounds:"",assists:"",addItem:null,items:[],findTitle:"",findItem:null,description:""}},created:function(){this.getItems()},methods:{fileChanged:function(e){this.file=e.target.files[0]},upload:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=new FormData,console.log("The name is ".concat(e.name," and the number is ").concat(e.number)),n.append("photo",e.file,e.file.name),t.next=6,o.a.post("/api/photos",n);case 6:return r=t.sent,t.next=9,o.a.post("/api/players",{name:e.name,path:r.data.path,number:e.number,points:e.points,rebounds:e.rebounds,assists:e.assists});case 9:a=t.sent,e.addItem=a.data,console.log(e.addItem),t.next=17;break;case 14:return t.prev=14,t.t0=t["catch"](0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},getItems:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("/api/players");case 3:return n=t.sent,e.items=n.data,t.abrupt("return",!0);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},selectItem:function(e){this.findTitle="",this.findItem=e},deleteItem:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.delete("/api/players/"+e._id);case 3:return t.findItem=null,t.getItems(),n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n["catch"](0),n.abrupt("return",!1);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editItem:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.put("/api/players/"+e._id,{name:t.findItem.name,number:t.findItem.number,points:t.findItem.points,rebounds:t.findItem.rebounds,assists:t.findItem.assists});case 3:return t.findItem=null,t.getItems(),n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n["catch"](0),n.abrupt("return",!1);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},computed:{suggestions:function(){var e=this,t=this.items.filter((function(t){return t.name.toLowerCase().startsWith(e.findTitle.toLowerCase())}));return t.sort((function(e,t){return e.name>t.name}))}}},c=u,d=(n("6560"),n("2877")),f=Object(d["a"])(c,r,a,!1,null,"a24a43fa",null);t["default"]=f.exports}}]);
//# sourceMappingURL=about.56e745af.js.map