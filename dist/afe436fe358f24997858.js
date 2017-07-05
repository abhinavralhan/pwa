webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1> <p><button class=nav-admin>Go to admin page</button></p> <p><button class=nav-login>Go to login page</button></p> <p><button class=nav-unknown>Go to unknown page</button></p> <p>Here is some random data for you. Fetched from the internet (when you are connected):</p> <p class=content></p>";

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["open"] = open;
/* harmony export (immutable) */ __webpack_exports__["close"] = close;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(1);




function open() {
	document.body.innerHTML = __WEBPACK_IMPORTED_MODULE_0__page_html___default.a;
	document.querySelector(".nav-admin").addEventListener("click", () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app__["c" /* navigate */])("admin");
	});
	document.querySelector(".nav-login").addEventListener("click", () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app__["c" /* navigate */])("login");
	});
	document.querySelector(".nav-unknown").addEventListener("click", () => {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app__["c" /* navigate */])("unknown");
	});
	const lastResult = localStorage.random;
	if(lastResult)
		document.querySelector(".content").innerText = `${lastResult} (updating...)`;
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_fetch__["a" /* fetchAsBase64 */])("https://httpbin.org/bytes/10").then(res => {
		document.querySelector(".content").innerText = localStorage.random = res;
	}).catch(err => {
		if(lastResult)
			document.querySelector(".content").innerText = `${lastResult} (Sorry you are offline, this was the last result)`;
		else
			document.querySelector(".content").innerText = "Sorry you are offline.";
	});
}

function close() {
	return Promise.resolve();
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAsBase64;
function fetchAsBase64(url) {
	return fetch(url)
		.then(res => res.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result.split(",")[1]);
			};
			reader.readAsDataURL(blob);
		}));
}


/***/ })

});