(this["webpackJsonpknown-human-beings"]=this["webpackJsonpknown-human-beings"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),r=n(4),i=n(3),l=n(0),c=n.n(l),o=n(6),m=n.n(o),u=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"mentioned-human"},c.a.createElement("div",{className:"mentioned-image"},c.a.createElement("img",{src:"./images/".concat(this.props.name,".jpg"),alt:this.props.name})),c.a.createElement("div",{className:"mentioned-info"},c.a.createElement("h4",null,this.props.name),c.a.createElement("h4",{className:"mentioned-subtitle"},this.props.subtitle)))}}]),n}(c.a.Component),h=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"known-human-being",id:"human-"},c.a.createElement("div",{className:"human-header"},c.a.createElement("h2",{className:"human-vowels"},this.props.vowels)),c.a.createElement("div",{className:"human-main"},c.a.createElement("div",{className:"favourite"},c.a.createElement("div",{className:"human-image"},c.a.createElement("img",{src:"./images/".concat(this.props.name,".jpg"),alt:this.props.name})),c.a.createElement("div",{className:"human-info"},c.a.createElement("h2",null,c.a.createElement("a",{href:this.props.link},this.props.name)),c.a.createElement("h3",null,this.props.subtitle),c.a.createElement("p",null,this.props.blurb))),this.props.mentions.length>0&&c.a.createElement("h4",{className:"just-a-mention-header"},"Just a mention:"),c.a.createElement("div",{className:"just-a-mention"},this.props.mentions&&this.props.mentions.map((function(e){return c.a.createElement(u,Object.assign({},e,{key:e.name}))})))))}}]),n}(c.a.Component),p=(n(12),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={vowelFilter:"A",humans:[],mentions:[]},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("favourites.json").then((function(e){return e.json()})).then((function(t){return e.setState({humans:t})})).catch(console.log),fetch("mentions.json").then((function(e){return e.json()})).then((function(t){return e.setState({mentions:t})})).catch(console.log)}},{key:"handleClick",value:function(e){this.setState({vowelFilter:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"headers"},c.a.createElement("h2",null,"Supervocalics"),c.a.createElement("h1",null,"Known Human Beings")),c.a.createElement("div",{className:"vowel-filters"},c.a.createElement("h4",{className:"vowel-filters-label"},"First vowel:"),["A","E","I","O","U"].map((function(t){return c.a.createElement("button",{className:"vowel-button"+(e.state.vowelFilter===t?" active-vowel-button":""),key:t,vowel:t,onClick:function(){return e.handleClick(t)}},t)}))),this.state.humans.filter((function(t){return t.vowels.startsWith(e.state.vowelFilter)})).map((function(t){return c.a.createElement(h,Object.assign({},t,{key:t.name,mentions:e.state.mentions.filter((function(e){return e.vowels===t.vowels}))}))})))}}]),n}(c.a.Component));m.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.bc90370c.chunk.js.map