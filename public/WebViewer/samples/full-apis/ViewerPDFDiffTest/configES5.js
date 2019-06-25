!function(e){"use strict";var l,u=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",r=t.toStringTag||"@@toStringTag",n="object"==typeof module,a=e.regeneratorRuntime;if(a)n&&(module.exports=a);else{(a=e.regeneratorRuntime=n?module.exports:{}).wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={},i=m.prototype=s.prototype;g.prototype=i.constructor=m,m.constructor=g,m[r]=g.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(i),e},a.awrap=function(e){return new x(e)},w(b.prototype),a.async=function(e,t,r,n){var o=new b(c(e,t,r,n));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(i),i[o]=function(){return this},i[r]="Generator",i.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return a.type="throw",a.arg=r,n.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?this.next=o.finallyLoc:this.complete(a),y},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},y}}}function c(e,t,r,n){var o=t&&t.prototype instanceof s?t:s,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(i,c,u){var s=f;return function(e,t){if(s===h)throw new Error("Generator is already running");if(s===d){if("throw"===e)throw t;return _()}for(;;){var r=u.delegate;if(r){if("return"===e||"throw"===e&&r.iterator[e]===l){u.delegate=null;var n=r.iterator.return;if(n){var o=v(n,r.iterator,t);if("throw"===o.type){e="throw",t=o.arg;continue}}if("return"===e)continue}var o=v(r.iterator[e],r.iterator,t);if("throw"===o.type){u.delegate=null,e="throw",t=o.arg;continue}e="next",t=l;var a=o.arg;if(!a.done)return s=p,a;u[r.resultName]=a.value,u.next=r.nextLoc,u.delegate=null}if("next"===e)u.sent=u._sent=t;else if("throw"===e){if(s===f)throw s=d,t;u.dispatchException(t)&&(e="next",t=l)}else"return"===e&&u.abrupt("return",t);s=h;var o=v(i,c,u);if("normal"===o.type){s=u.done?d:p;var a={value:o.arg,done:u.done};if(o.arg!==y)return a;u.delegate&&"next"===e&&(t=l)}else"throw"===o.type&&(s=d,e="throw",t=o.arg)}}}(e,r,i),a}function v(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function s(){}function g(){}function m(){}function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function x(e){this.arg=e}function b(c){function u(e,t,r,n){var o=v(c[e],c,t);if("throw"!==o.type){var a=o.arg,i=a.value;return i instanceof x?Promise.resolve(i.arg).then(function(e){u("next",e,r,n)},function(e){u("throw",e,r,n)}):Promise.resolve(i).then(function(e){a.value=e,r(a)},n)}n(o.arg)}var t;"object"==typeof process&&process.domain&&(u=process.domain.bind(u)),this._invoke=function(r,n){function e(){return new Promise(function(e,t){u(r,n,e,t)})}return t=t?t.then(e,e):e()}}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=l,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:l,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _asyncToGenerator(e){return function(){var c=e.apply(this,arguments);return new Promise(function(a,i){return function t(e,r){try{var n=c[e](r),o=n.value}catch(e){return void i(e)}if(!n.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}!function(){var f=null,i=null,o=null,n=window.parent.window.document,c=[null,null],a=n.getElementById("viewer");a.addEventListener("ready",_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,f.PDFDoc.createFromURL("../../../samples/files/test_doc_1.pdf");case 4:return t=e.sent,e.next=7,f.PDFDoc.createFromURL("../../../samples/files/test_doc_2.pdf");case 7:return r=e.sent,e.next=10,d(t,r);case 10:n.getElementById("fileUpload1").disabled=!1,n.getElementById("fileUpload2").disabled=!1;case 12:case"end":return e.stop()}},e,void 0)}))),n.getElementById("fileUpload1").addEventListener("change",function(e){l(e.target.files[0],0)}),n.getElementById("fileUpload2").addEventListener("change",function(e){l(e.target.files[0],1)});var e,t,r,u,s=(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=n.getElementById("compareButton")).classList.contains("disabled")){e.next=3;break}return e.abrupt("return");case 3:t.classList.remove("disabled"),t.addEventListener("click",_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c[0].getPDFDoc();case 2:return t=e.sent,e.next=5,c[1].getPDFDoc();case 5:return r=e.sent,e.next=8,d(t,r);case 8:case"end":return e.stop()}},e,void 0)})));case 5:case"end":return e.stop()}},e,void 0)})),function(){return e.apply(this,arguments)}),l=function(e,t){var r=new i.Document(e.name,"pdf"),n=i.getDefaultBackendType(),o={workerTransportPromise:i.initPDFWorkerTransports(n,{}),extension:"pdf"},a=new i.PartRetrievers.LocalPdfPartRetriever(e);r.loadAsync(a,function(e){e&&console.warn(e),c[t]=r,null!==c[1]&&null!==c[0]&&s()},o)},p=(t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f=a.querySelector("iframe").contentWindow.PDFNet,t=n.getElementById("viewer").getElementsByTagName("iframe")[0],i=t.contentWindow.CoreControls,o=t.contentWindow.Annotations,f=a.querySelector("iframe").contentWindow.PDFNet,i.resetWorker(),e.next=8,i.getDefaultBackendType();case 8:return r=e.sent,i.enableFullPDF(!0),i.initPDFWorkerTransports(r,{}),e.next=13,f.initialize();case 13:case"end":return e.stop()}},e,void 0)})),function(){return t.apply(this,arguments)}),h=(r=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new o.Color(200,0,0,1),r=new o.Color(0,200,200,1),e.next=4,f.createDiffOptions();case 4:return(n=e.sent).setColorA(t),n.setColorB(r),n.setBlendMode(5),e.abrupt("return",n);case 9:case"end":return e.stop()}},e,void 0)})),function(){return r.apply(this,arguments)}),d=(u=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var a,i,n,o,c,u,s,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.PDFDoc.create();case 2:return(a=e.sent).lock(),e.next=6,h();case 6:return i=e.sent,n=[],e.next=10,t.getPageIterator(1);case 10:return o=e.sent,e.next=13,r.getPageIterator(1);case 13:c=e.sent,u=0;case 16:return e.next=18,o.hasNext();case 18:if(e.sent)return e.next=21,o.current();e.next=27;break;case 21:s=e.sent,n[u]=[s],u++;case 24:o.next(),e.next=16;break;case 27:u=0;case 29:return e.next=31,c.hasNext();case 31:if(e.sent)return e.next=34,c.current();e.next=40;break;case 34:l=e.sent,(n[u]||(n[u]=[null])).push(l),u++;case 37:c.next(),e.next=29;break;case 40:return n.forEach(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r=_slicedToArray(t,2),n=r[0],o=r[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n||(n=new f.Page(0)),o||(o=new f.Page(0)),e.next=4,a.appendVisualDiff(n,o,i);case 4:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}()),e.next=43,a.unlock();case 43:readerControl.loadDocument(a);case 44:case"end":return e.stop()}},e,void 0)})),function(e,t){return u.apply(this,arguments)})}(window);