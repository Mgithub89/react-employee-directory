(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),s=n.n(c),a=n(12),i=n.n(a),l=(n(25),n(13)),o=n(14),u=n(15),h=n(19),d=n(18);var j=function(){return Object(r.jsxs)("div",{className:"container-fluid text-center bg-success py-3",children:[Object(r.jsx)("h2",{className:"text-center text-white",children:"Employee Directory"}),Object(r.jsx)("p",{className:"text-center text-white",children:"Click on control to filter by headin or use the search box to narrow your result. "})]})};var b=function(e){return Object(r.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(r.jsx)("input",{type:"text",placeholder:"Search",onChange:e.handleInputChange,value:e.search})})},m=n(16),x=n.n(m),f=function(){return x.a.get("https://randomuser.me/api/?results=50")},O=n(17),p=n.n(O);var g=function(e){return console.log(e.result),Object(r.jsx)("tbody",{children:e.result.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{alt:e.name.first,src:e.picture.thumbnail})}),Object(r.jsxs)("td",{children:[e.name.first," ",e.name.last," "]}),Object(r.jsx)("td",{children:e.cell}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:p()(e.dob.date).format("MM/DD/YYYY")})]},e.login.uuid)}))})};var v=function(e){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsx)("th",{children:Object(r.jsx)("button",{onClick:e.handleSort,children:"Name"})}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"DOB"})]})})};var C=function(e){return Object(r.jsxs)("table",{className:"container text-center table bg-dark text-white mx-5  mt-3",children:[Object(r.jsx)(v,{handleSort:e.handleSort}),Object(r.jsx)(g,{result:e.result})]})},y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={result:[],search:"",isClicked:!1},e.searchRandomEmployee=function(){f().then((function(t){e.setState({result:t.data.results}),console.log(e.state.result)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value;e.setState(Object(l.a)({},n,r));var c=r.trim().toLocaleLowerCase(),s=[];""===c?s.length=0:s=e.state.result.filter((function(e){return e.name.first.includes(c)})),""===c||0===s.length?e.setState({result:e.state.result}):e.setState({result:s})},e.handleFormSubmit=function(t){t.preventDefault(),e.searchMovies(e.state.search)},e.handleSort=function(){var t=e.state.result;e.state.isClicked?(t.sort((function(e,t){return e.name.first.toUpperCase()>t.name.first.toUpperCase()?-1:1})),e.setState({results:t,isClicked:!1})):(t.sort((function(e,t){return e.name.first.toUpperCase()>t.name.first.toUpperCase()?1:-1})),e.setState({results:t,isClicked:!0}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.searchRandomEmployee()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(b,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(r.jsx)(C,{handleSort:this.handleSort,result:this.state.result})]})}}]),n}(c.Component);var S=function(){return Object(r.jsx)(y,{})},k=(n(44),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))});i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.a8282f12.chunk.js.map