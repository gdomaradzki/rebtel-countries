webpackJsonp([1],[,,,,,,,,,,function(t,e,n){"use strict";var s=n(3),i=n(53),a=n(47),c=n.n(a),o=n(46),r=n.n(o),l=n(48),u=n.n(l);s.a.component("app-side-bar",r.a),s.a.component("app-logo",u.a),s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:c.a}]})},function(t,e){},function(t,e,n){n(40);var s=n(1)(n(33),n(50),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=function(t,e){return t.length>=e?t.slice(0,e)+"...":t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n(12),a=n.n(i),c=n(10),o=n(11);n.n(o);s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,render:function(t){return t(a.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),i=n.n(s);e.default={name:"app",data:function(){return{countryList:[],country:[],isVisible:!1,wasClicked:!0}},created:function(){this.fetchCountriesNames()},methods:{fetchCountriesNames:function(){var t=this;i.a.get("https://restcountries.eu/rest/v2/all?fields=name").then(function(e){t.countryList=e.data.map(function(t){return t.name})}).catch(function(t){console.log(t)})},fetchCountry:function(t){var e=this;i.a.get("https://restcountries.eu/rest/v2/name/"+t).then(function(t){var n=t.data;e.country=n.length?n[0]:null}).catch(function(t){console.log(t)})},countrySelectHandler:function(t){this.fetchCountry(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(31);e.default={name:"SelectCountry",props:["countryList","countrySelectHandler"],data:function(){return{infos:["Development Assignment for Rebtel","Thank you for using this App"],selectedCountry:"",isVisible:!1,wasClicked:!1}},computed:{countryOptions:function(){return this.countryList.map(function(t){return{label:n.i(s.a)(t,29),name:t}})}},methods:{buttonClickHandler:function(){this.$emit("toggleVisible"),this.$emit("wasStarted"),this.countrySelectHandler(this.selectedCountry)},mobileButtonClickHandler:function(){(document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth)<=800&&(this.isVisible=!this.isVisible)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Home",props:["country","isVisible"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Logo",props:["isVisible"],data:function(){return{isActive:!1}},methods:{}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){n(39);var s=n(1)(n(34),n(49),"data-v-33fb2ac4",null);t.exports=s.exports},function(t,e,n){n(42);var s=n(1)(n(35),n(52),null,null);t.exports=s.exports},function(t,e,n){n(41);var s=n(1)(n(36),n(51),"data-v-6fe9a908",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-side-bar",class:t.isVisible?"app-side-bar-active":"app-side-bar-inactive"},[n("app-logo",{on:{toggleVisible:function(e){t.isVisible=!t.isVisible},wasStarted:function(e){t.wasClicked=!0}}}),t._v(" "),n("p",{staticClass:"md-side-bar-start-reminder",class:t.wasClicked?"app-reminder-inactive":"app-reminder-active"},[t._v("click me to start")]),t._v(" "),n("aside",{staticClass:"layout-app-sidebar",class:t.isVisible?"is-area-visible":"is-area-hidden"},[n("h3",{staticClass:"md-subtitle"},[t._v("select a country")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCountry,expression:"selectedCountry"}],staticClass:"md-select-country",attrs:{name:"select-country",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedCountry=e.target.multiple?n:n[0]}}},[n("option",{attrs:{hidden:"",value:""}},[t._v("Choose one")]),t._v(" "),t._l(t.countryOptions,function(e){return n("option",{domProps:{value:e.name}},[t._v(t._s(e.label))])})],2),t._v(" "),n("button",{staticClass:"md-magic-button",on:{click:function(e){t.buttonClickHandler(),t.mobileButtonClickHandler()}}},[t._v("Magic!")]),t._v(" "),n("article",{staticClass:"layout-info"},t._l(t.infos,function(e){return n("p",{staticClass:"md-info"},[t._v(t._s(e))])})),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"layout-copyright"},[n("p",{staticClass:"md-copyright"},[t._v("Made with ❤ by Gustavo Domaradzki")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("app-side-bar",{attrs:{countryList:t.countryList,countrySelectHandler:t.countrySelectHandler},on:{toggleVisible:function(e){t.isVisible=!0},wasStarted:function(e){t.wasClicked=!0}}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m12 l10"},[n("router-view",{attrs:{country:t.country,isVisible:t.isVisible}})],1)])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"app-logo",class:t.isActive?"is-active":"is-inactive",attrs:{mlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.9 220.7"},on:{click:function(e){t.$emit("toggleVisible"),t.$emit("wasStarted"),t.isActive=!t.isActive}}},[n("path",{attrs:{fill:"#E3232C",d:"M0 0h566.9v220.7H0z"}}),n("path",{attrs:{fill:"#FFF",d:"M415.8 51.4h23.9l18 47.6h20.8V51.4h22.7V173h-43.5c-15.2 0-26.3-3.4-33.4-10.3-7.1-6.8-10.7-15.7-10.7-26.6 0-16.2 7.6-27.3 22.7-33.3l-20.5-51.4zm62.7 65.8h-17.2c-8.2 0-14.2 1.7-18.2 5.2-4 3.4-6 8.2-6 14.2 0 5.5 2 10 5.9 13.4 3.9 3.4 9.4 5.1 16.5 5.1h19v-37.9zM387.8 85.7c-.5-13-6.9-20.1-18.6-20.1-7.8 0-13 3-17.7 10.1L332 72.5c6.2-15.3 19.1-23.4 36.6-23.4 24.7 0 40.6 15.6 40.6 39.9 0 24.3-15.5 40.1-39.4 40.1-23.8 0-38.5-15.5-38.5-40.3v-3.1h56.5zM351.5 99c2.3 9.7 8.5 14.9 17.7 14.9 9.5 0 15.8-5.4 17.7-14.9h-35.4zM296.1 116.9c-7.5 8.5-14.9 12.2-24.8 12.2-20.8 0-36.8-17.2-36.8-39.8 0-23.1 15.8-40.3 37.2-40.3 10.2 0 17.7 3.6 24.5 12.2v-9.7h21v121.6h-21v-56.2zm-.5-27.8c0-11.6-9.6-21.2-21-21.2-11.8 0-21.2 9.4-21.2 21 0 11.8 9.4 21.2 21.2 21.2 11.6 0 21-9.3 21-21zM196.1 51.4h21v57h11.1v18.2h-11.1v25.7h-21v-25.7H185v-18.2h11.1v-57zM157.3 85.7c-.5-13-6.9-20.1-18.6-20.1-7.8 0-13 3-17.7 10.1l-19.4-3.1c6.2-15.3 19.1-23.4 36.6-23.4 24.7 0 40.6 15.6 40.6 39.9 0 24.3-15.5 40.1-39.4 40.1-23.8 0-38.5-15.5-38.5-40.3v-3.1h56.4zM121 99c2.3 9.7 8.5 14.9 17.7 14.9 9.5 0 15.8-5.4 17.7-14.9H121zM65.7 51.4h21V173h-21V51.4z"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"layout-home-page"},[t._m(0),t._v(" "),n("h2",{staticClass:"md-subtitle-info"},[t._v("Get to know more about your world!")]),t._v(" "),n("section",{staticClass:"layout-country-info",class:t.isVisible?"is-area-visible":"is-area-hidden"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12"},[n("h3",{staticClass:"md-country-name"},[t._v(t._s(t.country.name))])]),t._v(" "),n("div",{staticClass:"col s12 m8 l5"},[n("h4",{staticClass:"md-country-name md-native-name"},[t._v(t._s(t.country.nativeName))]),t._v(" "),n("img",{staticClass:"md-country-flag",attrs:{src:t.country.flag,alt:t.country.name}})]),t._v(" "),n("div",{staticClass:"col s12 m4 l7"},[n("h5",{staticClass:"md-info-label"},[t._v("Capital")]),t._v(" "),n("p",{staticClass:"md-country-text"},[t._v(t._s(t.country.capital))]),t._v(" "),n("h5",{staticClass:"md-info-label"},[t._v("Calling Codes")]),t._v(" "),t._l(t.country.callingCodes,function(e){return n("p",{staticClass:"md-country-text"},[t._v(t._s(e))])}),t._v(" "),n("h5",{staticClass:"md-info-label"},[t._v("Region")]),t._v(" "),n("p",{staticClass:"md-country-text"},[t._v(t._s(t.country.region))]),t._v(" "),n("h5",{staticClass:"md-info-label"},[t._v("Currencies")]),t._v(" "),t._l(t.country.currencies,function(t){return n("div",{staticClass:"layout-country-currencies"})}),t._v(" "),t._l(t.country.currencies,function(e){return n("ul",{staticClass:" layout-country-currencies"},[n("li",{staticClass:"md-country-text"},[t._v("Code: "+t._s(e.code))]),t._v(" "),n("li",{staticClass:"md-country-text"},[t._v("Name: "+t._s(e.name))]),t._v(" "),n("li",{staticClass:"md-country-text"},[t._v("Symbol: "+t._s(e.symbol))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"md-title"},[t._v("Are you ready to be a "),n("span",{staticClass:"md-rebtel"},[t._v("Rebel")]),t._v("?")])}]}}],[32]);
//# sourceMappingURL=app.1c87fff7830d45baaf5c.js.map