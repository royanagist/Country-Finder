(()=>{var t={286:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},372:t=>{"use strict";t.exports=function(t){return t[1]}},39:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new R(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=S(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",v={};function m(){}function b(){}function g(){}var w={};s(w,c,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(L([])));E&&E!==n&&o.call(E,c)&&(w=E);var O=g.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,c,a,u){var s=f(t[i],t,c);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===r(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return b.prototype=g,s(O,"constructor",g),s(g,"constructor",b),b.displayName=s(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},k(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new j(l(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(O),s(O,u,"Generator"),s(O,c,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}("object"===r(t=n.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},705:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var r,o,u,s,l=(r=f,o=i(),function(){var t,e=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=l.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return u=f,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host {\n                display: block;\n                width: 100%;\n                background-color: steelblue;\n                color: white;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                text-align: center;\n            }\n            h2 {\n                padding-top: 30px;\n            }\n            p {\n                padding: 15px;\n                padding-bottom: 30px;\n            }\n        </style>\n        <h2>Country Finder</h2>\n        <p>Find information about countries around the world</p>\n        "}}])&&e(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("app-bar",u)},498:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var r,o,u,s,l=(r=f,o=i(),function(){var t,e=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=l.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return u=f,(s=[{key:"country",set:function(t){var e=t.name.official,n=t.name.nativeName;n&&Object.keys(n).forEach((function(t){return e=n[t].official})),this._country=t,this.nativeName=e,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n            <style>\n                * {\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n                :host {\n                    display: block;\n                    margin: 0 auto;\n                    margin-bottom: 18px;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                    border-radius: 10px;\n                    overflow: hidden;\n                    max-width: 600px;\n                }\n                \n                .flag-country {\n                    min-width: 600px;\n                    max-width: 600px;\n                    object-fit: cover;\n                    object-position: center;\n                }\n                \n                .country-info {\n                    padding: 24px;\n                }\n                \n                .country-info > h2 {\n                    font-weight: lighter;\n                    margin-bottom: 5px;\n                }\n\n                .country-info > h3 {\n                    font-weight: lighter;\n                    margin-top: 0px;\n                }\n                \n                .country-info > p {\n                    margin-top: 10px;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    display: -webkit-box;\n                    -webkit-box-orient: vertical;\n                    -webkit-line-clamp: 10; /* number of lines to show */\n                }\n                @media screen and (max-width: 650px){\n                    :host{\n                        max-width: 400px;\n                    }\n                    .flag-country {\n                        min-width: 400px;\n                        max-width: 400px;\n                    }\n                }\n                @media screen and (max-width: 410px){\n                    :host{\n                        max-width: 300px;\n                    }\n                    .flag-country {\n                        min-width: 300px;\n                        max-width: 300px;\n                    }\n                }\n            </style>\n            <img class="flag-country" src="'.concat(this._country.flags.svg,'" alt="Flag">\n            <div class="country-info">\n                <h2>').concat(this._country.name.official,"</h2>\n                <h3><i>(").concat(this.nativeName,")</i></h3>\n                <p>Area (km<sup>2</sup>): ").concat(this._country.area.toLocaleString("en-US"),"</p>\n                <p>Region: ").concat(this._country.region,"</p>\n                <p>Capital: ").concat(this._country.capital,"</p>\n                <p>Population (2020): ").concat(this._country.population.toLocaleString("en-US"),"</p>\n            </div>")}}])&&e(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("country-item",u)},998:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(t,e,n){return i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(p,t);var o,i,s,l,f=(o=p,i=c(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),f.apply(this,arguments)}return s=p,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEventName",set:function(t){this._clickEventName=t,this.render()}},{key:"clickEventAfrica",set:function(t){this._clickEventAfrica=t,this.render()}},{key:"clickEventAmericas",set:function(t){this._clickEventAmericas=t,this.render()}},{key:"clickEventAsia",set:function(t){this._clickEventAsia=t,this.render()}},{key:"clickEventEurope",set:function(t){this._clickEventEurope=t,this.render()}},{key:"clickEventOceania",set:function(t){this._clickEventOceania=t,this.render()}},{key:"valueName",get:function(){return this.querySelector("#searchByName").value}},{key:"render",value:function(){this.innerHTML='\n            <section>\n                <div class="search-by-region">\n                    <p>Search by Region</p>\n                    <div class="search-container">\n                        <button id="searchAfrica" type="submit" class="button">Africa</button>\n                        <button id="searchAmericas" type="submit" class="button">Americas</button>\n                        <button id="searchAsia" type="submit" class="button">Asia</button>\n                        <button id="searchEurope" type="submit" class="button">Europe</button>\n                        <button id="searchOceania" type="submit" class="button">Oceania</button>\n                    </div>\n                </div>\n                <div class="search-by-name">\n                    <p>Search by Name</p>\n                    <div id="search-container" class="search-container">\n                        <input placeholder="Search Country" id="searchByName" type="search">\n                        <button id="searchButtonElement" type="submit" class="fa fa-search button"></button>\n                    </div>\n                </div>\n                \n            </section>\n        ',this.querySelector("#searchButtonElement").addEventListener("click",this._clickEventName),this.querySelector("#searchAfrica").addEventListener("click",this._clickEventAfrica),this.querySelector("#searchAmericas").addEventListener("click",this._clickEventAmericas),this.querySelector("#searchAsia").addEventListener("click",this._clickEventAsia),this.querySelector("#searchEurope").addEventListener("click",this._clickEventEurope),this.querySelector("#searchOceania").addEventListener("click",this._clickEventOceania)}}])&&n(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("search-bar",s)},890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(372),o=n.n(r),i=n(286),c=n.n(i)()(o());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400&display=swap);"]),c.push([t.id,'* {\n    padding: 0;\n    margin: 0 auto;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: "Balsamiq Sans", sans-serif;\n    background-color: aliceblue;\n}\n\ncountry-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n    margin: 0 auto;\n}\n\nsection{\n    display: flex;\n    position: sticky;\n    top: 0;\n    width: 100%;\n    background-color: skyblue;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n.search-by-region  {\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    border-bottom-left-radius: 10px;\n}\n.search-by-name{\n    display: flex;\n    width: 35%;\n    flex-direction: column;\n}\n.search-by-region p, .search-by-name p{\n    font-size: medium;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    margin-top: 10px;\n}\n.search-container{\n    display: flex;\n    margin: 10px;\n}\n.button{\n    width: 20%;\n    margin-right: 10px;\n    background-color: steelblue;\n    color: white;\n    cursor: pointer;\n    padding: 16px;\n    border: 0;\n    border-radius: 5px;\n}\n.button:hover {\n    background-color: rgb(19, 96, 160);\n    color: black;\n    font-weight: bold;\n}\n\n.search-container > input {\n    width: 75%;\n    padding: 16px;\n    border: 0;\n    font-weight: bold;\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px;\n    margin-right: 0px;\n}\n\n#search-container > button{\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n    margin-left: 0px;\n}\n\n.search-container > input:focus {\n    outline: 0;\n}\n\n.search-container > input:focus::placeholder {\n    font-weight: bold;\n}\n\n.search-container >  input::placeholder {\n    color: steelblue;\n    font-weight: normal;\n}\n\n@media screen and (max-width: 650px){\n    section {\n        flex-direction: column;\n        position: static;\n    }\n    .search-by-name, .search-by-region{\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 410px){\n    .search-container{\n        flex-direction: column;\n    }\n    .button{\n        width: 70%;\n        margin: 5px auto;\n        \n    }\n    #search-container > button{\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        margin: 0 auto;\n    }\n    .search-container > input {\n        width: 70%;\n        margin: 5px auto;\n        padding: 16px;\n        border: 0;\n        font-weight: bold;\n        border-radius: 5px;\n    }\n}',""]);const a=c},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var y=o(h,r);r.byIndex=a,e.splice(a,0,{identifier:f,updater:y,references:1})}c.push(f)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var u=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";n(39);var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),c=n.n(i),a=n(565),u=n.n(a),s=n(216),l=n.n(s),f=n(589),p=n.n(f),h=n(890),y={};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){var e="function"==typeof Map?new Map:void 0;return b=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return g(t,arguments,E(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),x(r,t)},b(t)}function g(t,e,n){return g=w()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&x(o,n.prototype),o},g.apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}y.styleTagTransform=p(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals,n(705),n(498);var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(c,t);var e,n,r,o,i=(e=c,n=w(),function(){var t,r=E(e);if(n){var o=E(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return m(this,t)});function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"countries",set:function(t){this._countries=t,this.render()}},{key:"render",value:function(){var t=this;this.shadowDOM.innerHTML="",this._countries.forEach((function(e){var n=document.createElement("country-item");n.country=e,t.shadowDOM.appendChild(n)}))}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n        <style>\n            .placeholder {\n                font-weight: lighter;\n                color: rgba(0,0,0,0.5);\n                -webkit-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n        </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t,"</h2>")}}])&&v(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),c}(b(HTMLElement));function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("country-list",O),n(998);const j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"searchCountryByName",value:function(t){var e="https://restcountries.com/v3.1/name/".concat(t);return""==t&&(e="https://restcountries.com/v3.1/all"),fetch(e).then((function(t){return t.json()})).then((function(e){return 404==e.status?Promise.reject("".concat(t," is not found")):Promise.resolve(e)}))}},{key:"searchCountryAfrica",value:function(){return fetch("https://restcountries.com/v3.1/region/africa").then((function(t){return t.json()})).then((function(t){return 404==t.status?Promise.reject("Region Africa is not found"):Promise.resolve(t)}))}},{key:"searchCountryAmericas",value:function(){return fetch("https://restcountries.com/v3.1/region/americas").then((function(t){return t.json()})).then((function(t){return 404==t.status?Promise.reject("Region Americas is not found"):Promise.resolve(t)}))}},{key:"searchCountryAsia",value:function(){return fetch("https://restcountries.com/v3.1/region/asia").then((function(t){return t.json()})).then((function(t){return 404==t.status?Promise.reject("Region Asia is not found"):Promise.resolve(t)}))}},{key:"searchCountryEurope",value:function(){return fetch("https://restcountries.com/v3.1/region/europe").then((function(t){return t.json()})).then((function(t){return 404==t.status?Promise.reject("Region Europe is not found"):Promise.resolve(t)}))}},{key:"searchCountryOceania",value:function(){return fetch("https://restcountries.com/v3.1/region/oceania").then((function(t){return t.json()})).then((function(t){return 404==t.status?Promise.reject("Region Oceania is not found"):Promise.resolve(t)}))}}],null&&k(e.prototype,null),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function _(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){S(i,r,o,c,a,"next",t)}function a(t){S(i,r,o,c,a,"throw",t)}c(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar");console.log(t);var e=document.querySelector("country-list"),n=function(t){e.countries=t},r=function(t){e.renderError(t)},o=function(){var e=_(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.searchCountryByName(t.valueName);case 3:o=e.sent,n(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var t=_(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.searchCountryAfrica();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=_(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.searchCountryAmericas();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=_(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.searchCountryAsia();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=_(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.searchCountryEurope();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=_(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.searchCountryOceania();case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t.clickEventName=o,t.clickEventAfrica=i,t.clickEventAmericas=c,t.clickEventAsia=a,t.clickEventEurope=u,t.clickEventOceania=s}))})()})();