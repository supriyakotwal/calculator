(this.webpackJsonpCalculator1=this.webpackJsonpCalculator1||[]).push([[0],{1:function(_,e,t){"use strict";t(2);var r=t(0);e.a=function(_){return Object(r.jsx)("input",{type:"button",value:_.label,onClick:_.onClick})}},10:function(_,e,t){"use strict";t.r(e);t(2);var r=t(4),a=t.n(r),c=t(5),s=(t(16),t(0));a.a.render(Object(s.jsx)(c.a,{}),document.getElementById("root"))},16:function(_,e,t){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),Calculator=function(_React$Component){Object(C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;return Object(C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this),_this.onClick=function(e){var value=e.target.value;if(_this.state.reset)_this.setState({ans:"",reset:!1});else{var tempValue=_this.state.ans;_this.setState({ans:tempValue+=value})}switch(value){case"C":_this.setState({ans:""});break;case"=":try{_this.setState({ans:eval(_this.state.ans.substring(0,_this.state.ans.length-1)),reset:!0})}catch(err){}}},_this.state={ans:"",reset:!1},_this}return Object(C_Learn_react_assignments_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{colSpan:"3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{type:"text",readOnly:!0,value:this.state.ans})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"C",onClick:this.onClick})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"1",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"2",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"3",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"+",onClick:this.onClick})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"4",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"5",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"6",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"-",onClick:this.onClick})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"7",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"8",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"9",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"/",onClick:this.onClick})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:".",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"0",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"*",onClick:this.onClick})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{label:"=",onClick:this.onClick})})]})]})})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator}},[[10,1,2]]]);
//# sourceMappingURL=main.56c7f16a.chunk.js.map