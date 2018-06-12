!function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],c=0,i=[];c<a.length;c++)o=a[c],M[o]&&i.push(M[o][0]),M[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(R&&R(t);i.length;)i.shift()();return T.push.apply(T,u||[]),n()}function n(){for(var e,t=0;t<T.length;t++){for(var n=T[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==M[a]&&(r=!1)}r&&(T.splice(t--,1),e=A(A.s=n[0]))}return e}var r=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--y&&0===b&&x()}(e,t),r&&r(e,t)};var o,a=!0,s="999c3bcadcbead4bffd9",u=1e4,c={},i=[],l=[];var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,v,h,y=0,b=0,_={},w={},g={};function j(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,p("check"),(t=u,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+s+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},_={},g=e.c,h=e.h,p("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in v={},M)O(n);return"prepare"===f&&0===b&&0===y&&x(),t});var t}function O(e){g[e]?(w[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=A.p+""+e+"."+s+".hot-update.js",t.appendChild(n)}(e)):_[e]=!0}function x(){p("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(j(n));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,u;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),s=o.id,u=o.chain;if((a=k[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:u,moduleId:s};for(var c=0;c<a.parents.length;c++){var i=a.parents[c],l=k[i];if(l){if(l.hot._declinedDependencies[s])return{type:"declined",chain:u.concat([i]),moduleId:s,parentId:i};-1===t.indexOf(i)&&(l.hot._acceptedDependencies[s]?(n[i]||(n[i]=[]),d(n[i],[s])):(delete n[i],t.push(i),r.push({chain:u.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},y=[],b={},_=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var E;u=j(w);var O=!1,x=!1,P=!1,T="";switch((E=v[w]?l(u):{type:"disposed",moduleId:w}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),P=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return p("abort"),Promise.reject(O);if(x)for(u in b[u]=v[u],d(y,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,u)&&(m[u]||(m[u]=[]),d(m[u],E.outdatedDependencies[u]));P&&(d(y,[E.moduleId]),b[u]=_)}var C,S=[];for(r=0;r<y.length;r++)u=y[r],k[u]&&k[u].hot._selfAccepted&&S.push({module:u,errorHandler:k[u].hot._selfAccepted});p("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete M[e]}(e)});for(var N,R,D=y.slice();D.length>0;)if(u=D.pop(),a=k[u]){var I={},V=a.hot._disposeHandlers;for(o=0;o<V.length;o++)(n=V[o])(I);for(c[u]=I,a.hot.active=!1,delete k[u],delete m[u],o=0;o<a.children.length;o++){var H=k[a.children[o]];H&&((C=H.parents.indexOf(u))>=0&&H.parents.splice(C,1))}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(a=k[u]))for(R=m[u],o=0;o<R.length;o++)N=R[o],(C=a.children.indexOf(N))>=0&&a.children.splice(C,1);for(u in p("apply"),s=h,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var B=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(a=k[u])){R=m[u];var L=[];for(r=0;r<R.length;r++)if(N=R[r],n=a.hot._acceptedDependencies[N]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:R[r],error:e}),t.ignoreErrored||B||(B=e)}}}for(r=0;r<S.length;r++){var U=S[r];u=U.module,i=[u];try{A(u)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||B||(B=n),B||(B=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||B||(B=e)}}return B?(p("fail"),Promise.reject(B)):(p("idle"),new Promise(function(e){e(y)}))}var k={},M={4:0},T=[];function A(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:P,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}(t),parents:(l=i,i=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=k[e];if(!t)return A;var n=function(n){return t.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(i=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),i=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&"e"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&p("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(_[e]||O(e),0===b&&0===y&&x())}},n}(t)),n.l=!0,n.exports}A.m=e,A.c=k,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A.h=function(){return s};var C=this.webpackJsonp=this.webpackJsonp||[],S=C.push.bind(C);C.push=t,C=C.slice();for(var N=0;N<C.length;N++)t(C[N]);var R=S;T.push([7,0,2]),n()}({"./src/App.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("./node_modules/react/index.js")),o=c(n("./node_modules/react-dom/index.js")),a=n("./node_modules/react-redux/es/index.js");n("./node_modules/bootstrap/dist/css/bootstrap.min.css"),n("./src/main.css");c(n("./src/worker/main.worker.js")),c(n("./src/stores/presets-list-store.js"));var s=c(n("./src/stores/preset-store.js")),u=c(n("./src/components/Layout.js"));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",{className:"App"},r.default.createElement("header",null,r.default.createElement("div",{className:"container"},"Metronome")),r.default.createElement(u.default,null),r.default.createElement("footer",null,r.default.createElement("div",{className:"container"},"Metronome")))};t.default=i,o.default.render(r.default.createElement(a.Provider,{store:s.default},r.default.createElement(i,null)),document.getElementById("content"))},"./src/actions/preset-actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startPreset=function(){a.default.dispatch({type:"START"})},t.stopPreset=function(){a.default.dispatch({type:"STOP"})},t.setBeat=function(e){a.default.dispatch({type:"SET_BEAT",payload:parseInt(e)})},t.setNoteValue=function(e){a.default.dispatch({type:"SET_NOTE_VALUE",payload:parseInt(e)})},t.setBpm=function(e){a.default.dispatch({type:"SET_BPM",payload:parseInt(e)})},t.setVolume=function(e){a.default.dispatch({type:"SET_VOLUME",payload:parseFloat(e/100)})},t.setAccent=function(e){a.default.dispatch({type:"SET_ACCENT",payload:{division:parseInt(e.division),volume:parseFloat(e.volume/100)}})};var r,o=n("./src/stores/preset-store.js"),a=(r=o)&&r.__esModule?r:{default:r}},"./src/components/Layout.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n("./node_modules/react/index.js")),a=c(n("./src/utils/context.js")),s=n("./src/utils/buffers.js"),u=c(n("./src/components/Player.js"));function c(e){return e&&e.__esModule?e:{default:e}}var i=function e(){a.default.unlock(function(){window.removeEventListener("touchstart",e)})},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("touchstart",i,!1),e.next=3,(0,s.loadAll)();case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var s=t[o](a),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return o.default.createElement("div",{className:"Layout container"},o.default.createElement(u.default,null))}}]),t}();t.default=l},"./src/components/MainForm.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=i(n("./node_modules/react/index.js")),u=n("./node_modules/react-redux/es/index.js"),c=i(n("./src/constants/form-constants.js"));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,u.connect)(function(e){return a({},e)})(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"onParamsChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.props.onChange(n,r)}},{key:"onAccentChange",value:function(e,t){this.props.onChange("accent",{division:e,volume:t})}},{key:"isAccentOn",value:function(e){return!!e}},{key:"changeTrackStatus",value:function(){this.props.isPlaying?this.props.onChange("status",!1):this.props.onChange("status",!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.beat,r=t.noteValue,o=t.bpm,a=t.volume,u=t.accents,i=t.isPlaying,l=c.default.beatRange.map(function(e,t){return s.default.createElement("option",{key:t,value:e},e)}),d=c.default.noteValueRange.map(function(e,t){return s.default.createElement("option",{key:t,value:e.value},e.name)}),f=function(e){return!e.isHidden},p=u.filter(f).map(function(t,n){var r="volume_accent_"+t.division,o=t.division+"_on",a=t.division+"_off";return s.default.createElement("li",{key:n,className:"col-sm"},s.default.createElement("button",{className:"accent_switch",name:r,id:o,"data-is-on":e.isAccentOn(t.volume),onClick:e.onAccentChange.bind(e,t.division,1)},"on"),s.default.createElement("button",{className:"accent_switch",name:r,id:a,"data-is-off":!e.isAccentOn(t.volume),onClick:e.onAccentChange.bind(e,t.division,0)},"off"))}),m=u.filter(f).map(function(e,t){return s.default.createElement("li",{key:t,className:"col-sm"},e.name)});return s.default.createElement("div",{className:"MainForm"},s.default.createElement("div",{className:"row labels"},s.default.createElement("div",{className:"col-sm"},"beat"),s.default.createElement("div",{className:"col-sm"},"note value"),s.default.createElement("div",{className:"col-sm"},"bpm: ",o),s.default.createElement("div",{className:"col-sm"},"volume")),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-sm"},s.default.createElement("select",{name:"beat",id:"beat_select",defaultValue:n,onChange:this.onParamsChange.bind(this)},l)),s.default.createElement("div",{className:"col-sm"},s.default.createElement("select",{name:"noteValue",id:"noteValue",defaultValue:r,onChange:this.onParamsChange.bind(this)},d)),s.default.createElement("div",{className:"col-sm"},s.default.createElement("input",{type:"range",min:"20",max:"350",name:"bpm",id:"bpm",onChange:this.onParamsChange.bind(this),defaultValue:o})),s.default.createElement("div",{className:"col-sm"},s.default.createElement("input",{type:"range",min:"0",max:"100",name:"volume",id:"volume",onChange:this.onParamsChange.bind(this),defaultValue:100*a}))),s.default.createElement("ul",{className:"row accents-labels"},m),s.default.createElement("ul",{className:"row accents-inputs"},p),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-xl"},s.default.createElement("button",{className:"main-button","data-is-playing":i,onClick:this.changeTrackStatus.bind(this)},i?"stop":"start"))))}}]),t}())||r;t.default=l},"./src/components/Player.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("./node_modules/react-redux/es/index.js"),s=i(n("./node_modules/react/index.js")),u=(i(n("./src/constants/form-constants.js")),i(n("./src/stores/preset-store.js")),n("./src/actions/preset-actions.js")),c=i(n("./src/components/MainForm.js"));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,a.connect)(function(e){return{track:e}})(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"onParamsChange",value:function(e,t){switch(e){case"beat":(0,u.setBeat)(t);break;case"noteValue":(0,u.setNoteValue)(t);break;case"bpm":(0,u.setBpm)(t);break;case"volume":(0,u.setVolume)(t);break;case"accent":(0,u.setAccent)(t);break;case"status":t?(0,u.startPreset)():(0,u.stopPreset)()}}},{key:"render",value:function(){var e=this.props,t=e.beat,n=e.noteValue,r=e.volume,o=e.bpm,a=e.accents;return s.default.createElement("div",null,s.default.createElement(c.default,{beat:t,noteValue:n,volume:r,bpm:o,accents:a,onChange:this.onParamsChange}))}}]),t}())||r;t.default=l},"./src/constants/form-constants.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={beatRange:[3,4,5,6,7,8,9,10,11,12,13,14,15,16],noteValueRange:[{name:"4",value:4},{name:"8",value:8},{name:"8 triplet",value:12},{name:"16",value:16},{name:"16 triplet",value:24}],defaultBeat:4,defaultNoteValue:{name:"4",value:4}}},"./src/constants/preset-constants.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={beat:4,noteValue:4,volume:1,bpm:120,accents:[{name:"whole",division:1,volume:1,isHidden:!0},{name:"half",division:2,volume:1,isHidden:!0},{name:"quarter",division:4,volume:1},{name:"eight",division:8,volume:0},{name:"triplet",division:12,volume:0},{name:"sixteenth",division:16,volume:0}]}},"./src/index.js":function(e,t,n){"use strict";r(n("./src/App.js")),r(n("./src/main.css"));function r(e){return e&&e.__esModule?e:{default:e}}},"./src/main.css":function(e,t,n){var r=n("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/reducers/preset-reducer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/redux/es/redux.js"),s=n("./src/constants/preset-constants.js"),u=(r=s)&&r.__esModule?r:{default:r};t.default=(0,a.combineReducers)({isPlaying:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"START":return!0;case"STOP":return!1;default:return e}},beat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.beat,t=arguments[1];return"SET_BEAT"===t.type?t.payload:e},noteValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.noteValue,t=arguments[1];return"SET_NOTE_VALUE"===t.type?t.payload:e},accents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.accents,t=arguments[1];return"SET_ACCENT"===t.type?e.map(function(e){return t.payload.division===e.division?o({},e,t.payload):e}):e},volume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.volume,t=arguments[1];switch(t.type){case"SET_VOLUME":return t.payload;case"MUTE":return 0;default:return e}},bpm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.bpm,t=arguments[1];return"SET_BPM"===t.type?t.payload:e}})},"./src/reducers/presets-list-reducer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"CREATE_PRESET":return[].concat(s(e),[{id:(0,a.default)(),data:t.payload}]);case"REMOVE_PRESET":return e.reduce(function(e,n){if(n.id!==t.payload.id)return n},[]);case"POPULATE":return t.payload;case"MOVE_PRESET":return t.payload.newIndex<t.payload.oldIndex?c(e,t.payload.newIndex,t.payload.oldIndex):t.payload.newIndex>t.payload.oldIndex?u(e,t.payload.newIndex,t.payload.oldIndex):e;default:return e}};var r,o=n("./node_modules/cuid/index.js"),a=(r=o)&&r.__esModule?r:{default:r};function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=function(e,t,n){return[].concat(s(e.slice(0,t)),[e[n]],s(e.slice(t,n)),s(e.slice(n+1,e.length)))},c=function(e,t,n){return[].concat(s(e.slice(0,n)),s(e.slice(n+1,t+1)),[e[n]],s(e.slice(t+1,e.length)))}},"./src/sounds/metronome-high.wav":function(e,t,n){e.exports=n.p+"src/sounds/metronome-high.wav"},"./src/sounds/metronome-low.wav":function(e,t,n){e.exports=n.p+"src/sounds/metronome-low.wav"},"./src/sounds/metronome-med.wav":function(e,t,n){e.exports=n.p+"src/sounds/metronome-med.wav"},"./src/stores/preset-store.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/redux/es/redux.js"),o=n("./node_modules/redux-logger/dist/redux-logger.js"),a=u(n("./node_modules/redux-thunk/es/index.js")),s=u(n("./src/reducers/preset-reducer.js"));u(n("./src/constants/preset-constants.js"));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.createLogger)(),i=(0,r.applyMiddleware)(a.default,c);t.default=(0,r.createStore)(s.default,i)},"./src/stores/presets-list-store.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/redux/es/redux.js"),o=n("./node_modules/redux-logger/dist/redux-logger.js"),a=u(n("./node_modules/redux-thunk/es/index.js")),s=u(n("./src/reducers/presets-list-reducer.js"));u(n("./src/constants/preset-constants.js"));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.createLogger)(),i=(0,r.applyMiddleware)(a.default,c);t.default=(0,r.createStore)(s.default,[],i)},"./src/utils/buffers.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBuffer=t.loadAll=void 0;var r,o,a,s=(r=m(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){b(r.response).then(e).catch(function(e){n("Error decoding drum samples!",e)})},r.send()}));case 1:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),u=(o=m(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(h);case 2:return t=e.sent,e.abrupt("return",(0,i.reduce)(t,function(e,t){return e.push(t),e},y));case 4:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),c=(a=m(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.map)(t,function(){var e=m(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.next=3,s(t.url);case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,buffer:e.t1});case 5:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)}),i=n("./node_modules/lodash/lodash.js"),l=(p(n("./src/utils/context.js")),p(n("./src/sounds/metronome-low.wav"))),d=p(n("./src/sounds/metronome-med.wav")),f=p(n("./src/sounds/metronome-high.wav"));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,a){try{var s=t[o](a),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var v=window.OfflineAudioContext||window.webkitOfflineAudioContext,h=[{name:"metronome-low",url:l.default},{name:"metronome-med",url:d.default},{name:"metronome-high",url:f.default}];window.availableSamples=h;var y=[],b=function(e){return new Promise(function(t,n){var r=new DataView(e),o=r.getUint32(24,!0),a=r.getUint16(22,!0);new v(a,1,o).decodeAudioData(e,t,n)})};t.loadAll=u,t.getBuffer=function(e){var t=y.find(function(t){return t.name===e});if(!t)throw new Error("No buffer "+e);return t.buffer},t.default={recompileBufferGain:function(e,t,n){for(var r=e.numberOfChannels,o=e.length,a=e.sampleRate,s=new v(r,o,a),u=s.createBuffer(r,o,a),c=s.createBufferSource(),i=s.createGain(),l=t||1,d=0;d<r;d++)for(var f=u.getChannelData(d),p=0;p<o;p++)f[p]=e.getChannelData(d)[p];c.buffer=u,i.gain.value=l,c.connect(i),i.connect(s.destination),c.start(0),s.oncomplete=function(){n(event.renderedBuffer)},s.startRendering()}}},"./src/utils/context.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=new(window.AudioContext||window.webkitAudioContext),o=!1;t.default={context:r,unlock:function(e){var t=r.createBuffer(1,1,22050),n=r.createBufferSource();n.buffer=t,n.connect(r.destination),n.start(0),setTimeout(function(){n.playbackState!==n.PLAYING_STATE&&n.playbackState!==n.FINISHED_STATE||(o=!0),e()},10)},isUnlocked:function(){return o}}},"./src/worker/main.worker.js":function(e,t,n){"use strict";e.exports=function(){return new Worker(n.p+"4f26ff4e70944c8492fe.worker.js")}},7:function(e,t,n){n("./node_modules/babel-polyfill/lib/index.js"),e.exports=n("./src/index.js")}});
//# sourceMappingURL=index.999c3bcadcbead4bffd9.js.map