(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9774],{92703:function(e,r,t){"use strict";var n=t(50414);function u(){}function o(){}o.resetWarningCache=u,e.exports=function(){function e(e,r,t,u,o,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:u};return t.PropTypes=t,t}},45697:function(e,r,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75251:function(e,r,t){"use strict";t(96086);var n=t(49639),u=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;u=o("react.element"),r.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,o={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:u,type:e,key:i,ref:f,props:o,_owner:s.current}}r.jsx=i,r.jsxs=i},85893:function(e,r,t){"use strict";e.exports=t(75251)},68217:function(e,r,t){"use strict";var n=t(96086),u=t(49639);r.useSubscription=function(e){var r=e.getCurrentValue,t=e.subscribe,o=u.useState((function(){return{getCurrentValue:r,subscribe:t,value:r()}}));e=o[0];var s=o[1];return o=e.value,e.getCurrentValue===r&&e.subscribe===t||(o=r(),s({getCurrentValue:r,subscribe:t,value:o})),u.useDebugValue(o),u.useEffect((function(){function e(){if(!u){var e=r();s((function(u){return u.getCurrentValue!==r||u.subscribe!==t||u.value===e?u:n({},u,{value:e})}))}}var u=!1,o=t(e);return e(),function(){u=!0,o()}}),[r,t]),o}},67161:function(e,r,t){"use strict";e.exports=t(68217)}}]);
//# sourceMappingURL=framework-9a467c51984b4381fe7a.js.map