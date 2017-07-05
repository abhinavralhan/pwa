webpackJsonp([2],{

/***/ 12:
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1> <p><button class=nav-dashboard>Go to dashboard page</button></p> <p><button class=nav-admin>Go to admin page</button></p> <p>This is the login page...</p> ";

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["open"] = open;
/* harmony export (immutable) */ __webpack_exports__["close"] = close;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_html__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(1);



function open() {
	document.body.innerHTML = __WEBPACK_IMPORTED_MODULE_0__page_html___default.a;
	document.querySelector(".nav-dashboard").addEventListener("click", () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app__["c" /* navigate */])("dashboard");
	});
	document.querySelector(".nav-admin").addEventListener("click", () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app__["c" /* navigate */])("admin");
	});
	return Promise.resolve();
}

function close() {
	return Promise.resolve();
}


/***/ })

});