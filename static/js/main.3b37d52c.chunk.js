(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(7),l=n.n(o),u=n(1),c=n(2),s=n(4),i=n(3),d=(n(13),n(5)),h=function(t){var e=t.good;return a.a.createElement("li",null,e)},p=function(t){var e=t.optionsNumbers,n=t.onSelect,r=t.setValue,o=e.map((function(t){return a.a.createElement("option",{key:t,value:t},t)}));return a.a.createElement("select",{value:r,onChange:function(t){return n(t.target.value)}},o)},m=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={currentGoods:t.props.initialGoods,selectValue:1},t.options=[1,2,3,4,5,6,7,8,9,10],t.handleReverseButton=function(){return t.setState((function(t){return{currentGoods:Object(d.a)(t.currentGoods).reverse()}}))},t.handleSortButton=function(){return t.setState((function(t){return{currentGoods:Object(d.a)(t.currentGoods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.handleResetButton=function(){return t.setState({currentGoods:t.props.initialGoods,selectValue:1})},t.handleSortLButton=function(){return t.setState((function(t){return{currentGoods:Object(d.a)(t.currentGoods).sort((function(t,e){return t.length-e.length}))}}))},t.handleSelectChanged=function(e){return t.setState({currentGoods:t.props.initialGoods.filter((function(t){return t.length>=e})),selectValue:e})},t}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:this.handleResetButton},"Reset"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",onClick:this.handleReverseButton},"Reverse"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",onClick:this.handleSortButton},"Sort alphabetically"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",onClick:this.handleSortLButton},"Sort by length"),a.a.createElement("br",null),a.a.createElement(p,{optionsNumbers:this.options,setValue:this.state.selectValue,onSelect:this.handleSelectChanged}),a.a.createElement("br",null),a.a.createElement("ul",null,this.state.currentGoods.map((function(t){return a.a.createElement(h,{key:t,good:t})}))))}}]),n}(a.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={initialGoods:b,isStarted:!1},t.handleStartButton=function(){t.setState({isStarted:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.initialGoods,n=t.isStarted;return a.a.createElement("div",{className:"App"},n?a.a.createElement(m,{initialGoods:e}):a.a.createElement("button",{type:"button",onClick:this.handleStartButton},"Start"),e.length)}}]),n}(a.a.Component);l.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3b37d52c.chunk.js.map