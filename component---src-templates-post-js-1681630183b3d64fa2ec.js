webpackJsonp([0xb1abc741118f],{328:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){var n=t.onNewComment,r=t.language,o=l(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(2),p=r(d),h=n(8),m=r(h),y=["shortname","identifier","title","url","category_id","onNewComment","language"],g=!1,b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return y.some(function(e){return e===n})?t:c({},t,o({},n,e.props[n]))},{});return p.default.createElement("div",t,p.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!g){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),g=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};y.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){s(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){s(this,t)},this.addDisqusScript())}}]),t}(p.default.Component);b.displayName="DisqusThread",b.propTypes={id:m.default.string,shortname:m.default.string.isRequired,identifier:m.default.string,title:m.default.string,url:m.default.string,category_id:m.default.string,onNewComment:m.default.func,language:m.default.string},b.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=b},329:function(e,t,n){"use strict";e.exports=n(328)},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),l=r(u),s=n(329),c=r(s),f=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){return l.default.createElement(c.default,{shortname:"luteceblog",title:""+this.props.title,url:"http://blog.lutece.kr/"+this.props.path,category_id:""+this.props.path,identifier:""+this.props.path})},t}(u.Component);t.default=f,e.exports=t.default},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.data,n=t.markdownRemark,r=n.frontmatter,o=n.html;return i.default.createElement("div",{className:"blog-post-container"},i.default.createElement("div",{className:"blog-post"},i.default.createElement("div",{className:"blog--title"},i.default.createElement("h1",null,r.title),i.default.createElement("h2",null,r.date)),i.default.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:o}})),i.default.createElement("div",{className:"disqusContainer"},i.default.createElement(l.default,r)))}t.__esModule=!0,t.pageQuery=void 0,t.default=o;var a=n(2),i=r(a);n(324);var u=n(178),l=r(u);t.pageQuery="** extracted graphql fragment **"},324:function(e,t){}});
//# sourceMappingURL=component---src-templates-post-js-1681630183b3d64fa2ec.js.map