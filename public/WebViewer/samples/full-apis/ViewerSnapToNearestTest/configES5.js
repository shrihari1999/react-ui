!function(t){"use strict";var s,u=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag",n="object"==typeof module,i=t.regeneratorRuntime;if(i)n&&(module.exports=i);else{(i=t.regeneratorRuntime=n?module.exports:{}).wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",v={},a=w.prototype=l.prototype;g.prototype=a.constructor=w,w.constructor=g,w[r]=g.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(a),t},i.awrap=function(t){return new L(t)},m(x.prototype),i.async=function(t,e,r,n){var o=new x(c(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},m(a),a[o]=function(){return this},a[r]="Generator",a.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),v},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},v}}}function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(a,c,u){var l=f;return function(t,e){if(l===p)throw new Error("Generator is already running");if(l===y){if("throw"===t)throw e;return j()}for(;;){var r=u.delegate;if(r){if("return"===t||"throw"===t&&r.iterator[t]===s){u.delegate=null;var n=r.iterator.return;if(n){var o=d(n,r.iterator,e);if("throw"===o.type){t="throw",e=o.arg;continue}}if("return"===t)continue}var o=d(r.iterator[t],r.iterator,e);if("throw"===o.type){u.delegate=null,t="throw",e=o.arg;continue}t="next",e=s;var i=o.arg;if(!i.done)return l=h,i;u[r.resultName]=i.value,u.next=r.nextLoc,u.delegate=null}if("next"===t)u.sent=u._sent=e;else if("throw"===t){if(l===f)throw l=y,e;u.dispatchException(e)&&(t="next",e=s)}else"return"===t&&u.abrupt("return",e);l=p;var o=d(a,c,u);if("normal"===o.type){l=u.done?y:h;var i={value:o.arg,done:u.done};if(o.arg!==v)return i;u.delegate&&"next"===t&&(e=s)}else"throw"===o.type&&(l=y,t="throw",e=o.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function l(){}function g(){}function w(){}function m(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){this.arg=t}function x(c){function u(t,e,r,n){var o=d(c[t],c,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a instanceof L?Promise.resolve(a.arg).then(function(t){u("next",t,r,n)},function(t){u("throw",t,r,n)}):Promise.resolve(a).then(function(t){i.value=t,r(i)},n)}n(o.arg)}var e;"object"==typeof process&&process.domain&&(u=process.domain.bind(u)),this._invoke=function(r,n){function t(){return new Promise(function(t,e){u(r,n,t,e)})}return e=e?e.then(t,t):t()}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=s,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:s,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(){var u=function(t){var e=readerControl.docViewer.getDisplayModeManager().getDisplayMode(),r=function(t){var e=readerControl.docViewer.getScrollViewElement(),r=e.scrollLeft||0,n=e.scrollTop||0;return{x:t.pageX+r,y:t.pageY+n}}(t),n=e.getSelectedPages(r,r),o=null!==n.first?n.first:readerControl.docViewer.getCurrentPage()-1;return{point:e.windowToPage(r,o),pageNumber:o+1}};$(document).on("documentLoaded",function(){var a=new Annotations.LineAnnotation;a.setStartPoint(0,0),a.setEndPoint(0,0),a.PageNumber=1;var c=readerControl.docViewer.getAnnotationManager();c.addAnnotation(a),readerControl.docViewer.on("mouseMove",function(t,e){var r=u(e),n=r.point,o=r.pageNumber,i=a.PageNumber;a.PageNumber=o,a.setStartPoint(n.x,n.y),o!==i&&c.drawAnnotations(i),readerControl.docViewer.snapToNearest(o,n.x,n.y).then(function(t){a.setEndPoint(t.x,t.y),c.redrawAnnotation(a)})})})}(window);