(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],{27:function(t,n,e){},28:function(t,n,e){},29:function(t,n,e){},31:function(t,n,e){},32:function(t,n,e){},41:function(t,n){},42:function(t,n,e){"use strict";e.r(n);var c=e(5),i=e.n(c),l=e(18),a=e.n(l),d=(e(27),e(12)),s=e(13),r=e(21),h=e(20),u=(e(28),e(29),e(1)),j=function(t){return Object(u.jsx)("div",{className:"btn-wrapper ".concat((n=t.children,isNaN(n)&&"."!==n&&"="!==n?"operator":null)),onClick:function(){return t.handleClick(t.children)},children:t.children});var n},o=(e(31),function(t){return Object(u.jsx)("div",{className:"input",children:t.input})}),p=(e(32),function(t){return Object(u.jsx)("div",{className:"clear-btn",onClick:t.handleClear,children:t.children})}),b=e(44),O=function(t){Object(r.a)(e,t);var n=Object(h.a)(e);function e(t){var c;return Object(d.a)(this,e),(c=n.call(this,t)).addToInput=function(t){c.setState({input:c.state.input+t})},c.handleEqual=function(){c.setState({input:b.a(c.state.input)})},c.handleMultiply=function(t){"x"===t&&c.setState({input:c.state.input+t.replace("x","*")})},c.state={input:""},c}return Object(s.a)(e,[{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"calculator-wrapper",children:[Object(u.jsx)(o,{input:this.state.input}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(j,{handleClick:this.addToInput,children:"7"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"8"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"9"}),Object(u.jsx)(j,{handleClick:this.handleMultiply,children:"x"})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(j,{handleClick:this.addToInput,children:"4"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"5"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"6"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"-"})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(j,{handleClick:this.addToInput,children:"1"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"2"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"3"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"+"})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(j,{handleClick:this.addToInput,children:"0"}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"."}),Object(u.jsx)(j,{handleClick:function(){return t.handleEqual()},children:"="}),Object(u.jsx)(j,{handleClick:this.addToInput,children:"/"})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(p,{handleClear:function(){return t.setState({input:""})},children:"clear"})})]})})}}]),e}(c.Component),x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,l=n.getLCP,a=n.getTTFB;e(t),c(t),i(t),l(t),a(t)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.12c7359c.chunk.js.map