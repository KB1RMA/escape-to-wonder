(window.webpackJsonp=window.webpackJsonp||[]).push([["10b6"],{"1RuJ":function(e,t,n){"use strict";var o=n("+0iv");e.exports=function(e){return o(e)||"function"==typeof e||Array.isArray(e)}},Wi4t:function(e,t,n){"use strict";n.r(t);var o=n("MX0m"),i=n.n(o),r=n("q1tI"),s=n.n(r),a=n("17x9"),u=n.n(a),c=n("MgzW"),h=n.n(c),l=n("cZGM"),f=n.n(l),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t}return v(e,[{key:"getDocumentRelativeElementOffset",value:function(e){var t=this.getRootOfEl(e).getBoundingClientRect(),n=t.left,o=t.top,i=e.getBoundingClientRect(),r=i.left,s=i.top;return{x:Math.abs(n)+r,y:Math.abs(o)+s}}},{key:"getRootOfEl",value:function(e){return e.parentElement?this.getRootOfEl(e.parentElement):e}},{key:"getComputedElementRelativeCursorPosition",value:function(e,t){this.lastEvent=e;var n=this.getDocumentRelativeCursorPosition(e),o=n.x,i=n.y,r=t.x,s=t.y;return{x:Math.round(o-r),y:Math.round(i-s)}}},{key:"getDocumentRelativeCursorPosition",value:function(e){return{x:e.pageX,y:e.pageY}}},{key:"getCursorPosition",value:function(e){return this.getComputedElementRelativeCursorPosition(e,this.documentRelativeElementOffset)}},{key:"documentRelativeElementOffset",get:function(){return this.elementOffset||(this.elementOffset=this.getDocumentRelativeElementOffset(this.el)),this.elementOffset}}]),e}();function d(e,t,n,o){return e.addEventListener(t,n,o),{removeEventListener:function(){e.removeEventListener(t,n,o)}}}var y="touch",m="tap",b="press",g="click",E="hover",M=function(){},C=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var T=function(){function e(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).onIsActiveChanged;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"function"!=typeof t)throw new Error("onIsActiveChanged should be a function");this.onIsActiveChanged=t,this.isActive=!1,this.timers=[]}return C(e,[{key:"activate",value:function(){this.isActive=!0,this.onIsActiveChanged({isActive:!0})}},{key:"deactivate",value:function(){this.isActive=!1,this.onIsActiveChanged({isActive:!1}),this.clearTimers()}},{key:"toggleActivation",value:function(){this.isActive?this.deactivate():this.activate()}},{key:"clearTimers",value:function(){for(var e=this.timers;e.length;){var t=e.pop();clearTimeout(t.id)}}},{key:"clearTimer",value:function(e){this.timers.forEach(function(t){t.name===e&&clearTimeout(t.id)})}}]),e}(),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var w=function(e){function t(e){var n=e.onIsActiveChanged;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}));return o.initialElTop=0,o.currentElTop=0,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),k(t,[{key:"touchStarted",value:function(){}},{key:"touchMoved",value:function(){}},{key:"touchEnded",value:function(){this.deactivate()}},{key:"touchCanceled",value:function(){this.deactivate()}}]),t}(),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var A=function(e){function t(e){var n=e.onIsActiveChanged,o=e.pressDurationInMs,i=e.pressMoveThreshold;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}));return r.pressDurationInMs=o,r.pressMoveThreshold=i,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,w),O(t,[{key:"touchStarted",value:function(e){var t=e.position;this.initPressEventCriteria(t),this.setPressEventTimer()}},{key:"touchMoved",value:function(e){var t=e.position;this.isActive||this.setPressEventCriteria(t)}},{key:"setPressEventTimer",value:function(){var e=this;this.timers.push({name:"pressEvent",id:setTimeout(function(){Math.abs(e.currentElTop-e.initialElTop)<e.pressMoveThreshold&&e.activate()},this.pressDurationInMs)})}},{key:"setPressEventCriteria",value:function(e){this.currentElTop=e.y}},{key:"initPressEventCriteria",value:function(e){var t=e.y;this.initialElTop=t,this.currentElTop=t}}]),t}(),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var D=function(e){function t(e){var n=e.onIsActiveChanged;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,w),P(t,[{key:"touchStarted",value:function(e){e.e.preventDefault(),this.activate()}}]),t}(),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var _=function(e){function t(e){var n=e.onIsActiveChanged,o=e.tapDurationInMs,i=e.tapMoveThreshold;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}));return r.hasTapGestureEnded=!1,r.tapDurationInMs=o,r.tapMoveThreshold=i,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,w),I(t,[{key:"touchStarted",value:function(e){var t=e.position;this.hasTapGestureEnded=!1,this.initMoveThreshold(t),this.setTapEventTimer()}},{key:"touchMoved",value:function(e){var t=e.position;this.isActive||this.setMoveThresholdCriteria(t)}},{key:"touchEnded",value:function(){this.hasTapGestureEnded=!0}},{key:"setTapEventTimer",value:function(){var e=this;this.timers.push({name:"tap",id:setTimeout(function(){e.isTapGestureActive&&e.toggleActivation()},this.tapDurationInMs)})}},{key:"setMoveThresholdCriteria",value:function(e){this.currentElTop=e.y}},{key:"initMoveThreshold",value:function(e){var t=e.y;this.initialElTop=t,this.currentElTop=t}},{key:"hasPassedMoveThreshold",get:function(){return Math.abs(this.currentElTop-this.initialElTop)>this.tapMoveThreshold}},{key:"isTapGestureActive",get:function(){return!this.hasPassedMoveThreshold&&this.hasTapGestureEnded}}]),t}(),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var S=function(e){function t(e){var n=e.onIsActiveChanged;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),j(t,[{key:"mouseEntered",value:function(){}},{key:"mouseMoved",value:function(){}},{key:"mouseLeft",value:function(){}},{key:"mouseClicked",value:function(){}}]),t}(),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var R=function(e){function t(e){var n=e.onIsActiveChanged,o=e.hoverDelayInMs,i=e.hoverOffDelayInMs;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}));return r.hoverDelayInMs=o,r.hoverOffDelayInMs=i,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,S),x(t,[{key:"mouseEntered",value:function(){this.clearTimers(),this.schedulActivation(this.hoverDelayInMs)}},{key:"mouseLeft",value:function(){this.clearTimers(),this.scheduleDeactivation(this.hoverOffDelayInMs)}},{key:"schedulActivation",value:function(e){var t=this,n=setTimeout(function(){t.activate()},e);this.timers.push({id:n,name:"setHovering"})}},{key:"scheduleDeactivation",value:function(e){var t=this,n=setTimeout(function(){t.deactivate()},e);this.timers.push({id:n,name:"unsetHovering"})}}]),t}(),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var G=function(e){function t(e){var n=e.onIsActiveChanged;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{onIsActiveChanged:n}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,S),L(t,[{key:"mouseClicked",value:function(){this.toggleActivation()}}]),t}(),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var F=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return N.call(n),n.state={detectedEnvironment:{isMouseDetected:!1,isTouchDetected:!1},elementDimensions:{width:0,height:0},isActive:!1,isPositionOutside:!0,position:{x:0,y:0}},n.shouldGuardAgainstMouseEmulationByDevices=!1,n.eventListeners=[],n.timers=[],n.elementOffset={x:0,y:0},n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onTouchCancel=n.onTouchCancel.bind(n),n.onMouseEnter=n.onMouseEnter.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onMouseLeave=n.onMouseLeave.bind(n),n.onClick=n.onClick.bind(n),n.onIsActiveChanged=n.onIsActiveChanged.bind(n),n.setTouchActivationStrategy(e.activationInteractionTouch),n.setMouseActivationStrategy(e.activationInteractionMouse),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),B(t,[{key:"onIsActiveChanged",value:function(e){e.isActive?this.activate():this.deactivate()}},{key:"onTouchStart",value:function(e){this.init(),this.onTouchDetected(),this.setShouldGuardAgainstMouseEmulationByDevices();var t=this.core.getCursorPosition(this.getTouchEvent(e));this.setPositionState(t),this.touchActivation.touchStarted({e:e,position:t})}},{key:"onTouchMove",value:function(e){if(this.isCoreReady){var t=this.core.getCursorPosition(this.getTouchEvent(e));this.touchActivation.touchMoved({e:e,position:t}),this.state.isActive&&(this.setPositionState(t),e.preventDefault(),this.props.shouldStopTouchMovePropagation&&e.stopPropagation())}}},{key:"onTouchEnd",value:function(){this.touchActivation.touchEnded(),this.unsetShouldGuardAgainstMouseEmulationByDevices()}},{key:"onTouchCancel",value:function(){this.touchActivation.touchCanceled(),this.unsetShouldGuardAgainstMouseEmulationByDevices()}},{key:"onMouseEnter",value:function(e){this.shouldGuardAgainstMouseEmulationByDevices||(this.init(),this.onMouseDetected(),this.setPositionState(this.core.getCursorPosition(e)),this.mouseActivation.mouseEntered())}},{key:"onMouseMove",value:function(e){if(this.isCoreReady){var t=this.core.getCursorPosition(e);this.setPositionState(t),this.mouseActivation.mouseMoved(t)}}},{key:"onMouseLeave",value:function(){this.mouseActivation.mouseLeft(),this.setState({isPositionOutside:!0})}},{key:"onClick",value:function(e){this.setPositionState(this.core.getCursorPosition(e)),this.mouseActivation.mouseClicked(),this.onMouseDetected()}},{key:"onTouchDetected",value:function(){var e={isTouchDetected:!0,isMouseDetected:!1};this.setState({detectedEnvironment:e}),this.props.onDetectedEnvironmentChanged(e)}},{key:"onMouseDetected",value:function(){var e={isTouchDetected:!1,isMouseDetected:!0};this.setState({detectedEnvironment:e}),this.props.onDetectedEnvironmentChanged(e)}},{key:"componentDidMount",value:function(){this.props.isEnabled&&this.enable()}},{key:"componentWillReceiveProps",value:function(e){var t=e.isEnabled;this.props.isEnabled!==t&&(t?this.enable():this.disable())}},{key:"componentWillUnmount",value:function(){this.disable()}},{key:"enable",value:function(){this.addEventListeners()}},{key:"disable",value:function(){this.removeEventListeners()}},{key:"init",value:function(){this.core=new p(this.el),this.setElementDimensionsState(this.getElementDimensions(this.el))}},{key:"setTouchActivationStrategy",value:function(e){var t=this.props,n=t.pressDurationInMs,o=t.pressMoveThreshold,i=t.tapDurationInMs,r=t.tapMoveThreshold;switch(e){case b:this.touchActivation=new A({onIsActiveChanged:this.onIsActiveChanged,pressDurationInMs:n,pressMoveThreshold:o});break;case m:this.touchActivation=new _({onIsActiveChanged:this.onIsActiveChanged,tapDurationInMs:i,tapMoveThreshold:r});break;case y:this.touchActivation=new D({onIsActiveChanged:this.onIsActiveChanged});break;default:throw new Error("Must implement a touch activation strategy")}}},{key:"setMouseActivationStrategy",value:function(e){var t=this.props,n=t.hoverDelayInMs,o=t.hoverOffDelayInMs;switch(e){case E:this.mouseActivation=new R({onIsActiveChanged:this.onIsActiveChanged,hoverDelayInMs:n,hoverOffDelayInMs:o});break;case g:this.mouseActivation=new G({onIsActiveChanged:this.onIsActiveChanged});break;default:throw new Error("Must implement a mouse activation strategy")}}},{key:"reset",value:function(){var e=this.core,t=(e=void 0===e?{}:e).lastEvent;this.init(),t&&this.setPositionState(this.core.getCursorPosition(t))}},{key:"activate",value:function(){this.setState({isActive:!0}),this.props.onActivationChanged({isActive:!0})}},{key:"deactivate",value:function(){var e=this;this.setState({isActive:!1},function(){var t=e.state,n=t.isPositionOutside,o=t.position;e.props.onPositionChanged({isPositionOutside:n,position:o}),e.props.onActivationChanged({isActive:!1})})}},{key:"setPositionState",value:function(e){var t=this.getIsPositionOutside(e);this.setState({isPositionOutside:t,position:e},this.onPositionChanged)}},{key:"setElementDimensionsState",value:function(e){this.setState({elementDimensions:e})}},{key:"setShouldGuardAgainstMouseEmulationByDevices",value:function(){this.shouldGuardAgainstMouseEmulationByDevices=!0}},{key:"unsetShouldGuardAgainstMouseEmulationByDevices",value:function(){var e=this;this.timers.push({name:"mouseEmulation",id:setTimeout(function(){e.shouldGuardAgainstMouseEmulationByDevices=!1},0)})}},{key:"getElementDimensions",value:function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height}}},{key:"getIsPositionOutside",value:function(e){var t=e.x,n=e.y,o=this.state.elementDimensions,i=o.width,r=o.height;return t<0||n<0||t>i||n>r}},{key:"getTouchEvent",value:function(e){return e.touches[0]}},{key:"getIsReactComponent",value:function(e){return"function"==typeof e.type}},{key:"shouldDecorateChild",value:function(e){return!!e&&this.getIsReactComponent(e)&&this.props.shouldDecorateChildren}},{key:"decorateChild",value:function(e,t){return Object(r.cloneElement)(e,t)}},{key:"decorateChildren",value:function(e,t){var n=this;return r.Children.map(e,function(e){return n.shouldDecorateChild(e)?n.decorateChild(e,t):e})}},{key:"addEventListeners",value:function(){this.eventListeners.push(d(this.el,"touchstart",this.onTouchStart,{passive:!1}),d(this.el,"touchmove",this.onTouchMove,{passive:!1}),d(this.el,"touchend",this.onTouchEnd),d(this.el,"touchcancel",this.onTouchCancel),d(this.el,"mouseenter",this.onMouseEnter),d(this.el,"mousemove",this.onMouseMove),d(this.el,"mouseleave",this.onMouseLeave),d(this.el,"click",this.onClick))}},{key:"removeEventListeners",value:function(){for(;this.eventListeners.length;)this.eventListeners.pop().removeEventListener()}},{key:"getPassThroughProps",value:function(){var e=Object.keys(this.constructor.propTypes);return f()(this.props,e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,i=t.mapChildProps,r=t.style,a=h()({},i(this.state),this.getPassThroughProps());return s.a.createElement("div",{className:o,ref:function(t){return e.el=t},style:h()({},r,{WebkitUserSelect:"none"})},this.decorateChildren(n,a))}},{key:"isCoreReady",get:function(){return!!this.core}}]),t}();F.displayName="ReactCursorPosition",F.propTypes={activationInteractionMouse:u.a.oneOf([g,E]),activationInteractionTouch:u.a.oneOf([b,m,y]),children:u.a.any,className:u.a.string,hoverDelayInMs:u.a.number,hoverOffDelayInMs:u.a.number,isEnabled:u.a.bool,mapChildProps:u.a.func,onActivationChanged:u.a.func,onDetectedEnvironmentChanged:u.a.func,onPositionChanged:u.a.func,pressDurationInMs:u.a.number,pressMoveThreshold:u.a.number,shouldDecorateChildren:u.a.bool,shouldStopTouchMovePropagation:u.a.bool,style:u.a.object,tapDurationInMs:u.a.number,tapMoveThreshold:u.a.number},F.defaultProps={activationInteractionMouse:E,activationInteractionTouch:b,hoverDelayInMs:0,hoverOffDelayInMs:0,isEnabled:!0,mapChildProps:function(e){return e},onActivationChanged:M,onDetectedEnvironmentChanged:M,onPositionChanged:M,pressDurationInMs:500,pressMoveThreshold:5,shouldDecorateChildren:!0,shouldStopTouchMovePropagation:!1,tapDurationInMs:180,tapMoveThreshold:5};var N=function(){var e=this;this.onPositionChanged=function(){(0,e.props.onPositionChanged)(e.state)}},q=F,W=function(e){var t=e.dispatch;return s.a.createElement(q,{className:"position-listener"},s.a.createElement(function(e){var n=e.isActive,o=e.position,i=o.x,s=o.y,a=e.elementDimensions,u=a.height,c=a.width,h=Object(r.useMemo)(function(){var e=0-c,t=0-u;return Math.sqrt(e*e+t*t).toFixed(0)},[u,c]),l=Object(r.useMemo)(function(){return(s/u*100).toFixed(1)},[u,s]),f=Object(r.useMemo)(function(){var e=0-i,t=0-s;return(Math.sqrt(e*e+t*t).toFixed(1)/h*100).toFixed(1)},[i,s,h]),v=Object(r.useMemo)(function(){var e=c-i,t=u-s;return(Math.sqrt(e*e+t*t).toFixed(1)/h*100).toFixed(1)},[i,s,h,c,u]),p=Object(r.useCallback)(function(){t({type:"batch_update_opacity",imagesToUpdate:[{index:0,opacity:l},{index:1,opacity:f},{index:2,opacity:v}]})},[l,f,v]);return Object(r.useEffect)(function(){n&&window.requestAnimationFrame(p)},[p,n,l,f,v]),null},null))};t.default=function(e){e.images;var t=e.dispatch;return s.a.createElement("div",{className:"jsx-230079650 triangular-controller-wrapper"},s.a.createElement(W,{dispatch:t}),s.a.createElement(i.a,{id:"230079650"},[".triangular-controller-wrapper.jsx-230079650{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;height:75%;}",".triangular-controller-wrapper.jsx-230079650>.position-listener{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;height:75%;border:solid 1px #000;}"]))}},cZGM:function(e,t,n){"use strict";var o=n("1RuJ");e.exports=function(e,t,n){if(!o(e))return{};"function"==typeof t&&(n=t,t=[]),"string"==typeof t&&(t=[t]);for(var i="function"==typeof n,r=Object.keys(e),s={},a=0;a<r.length;a++){var u=r[a],c=e[u];t&&(-1!==t.indexOf(u)||i&&!n(c,u,e))||(s[u]=c)}return s}}}]);