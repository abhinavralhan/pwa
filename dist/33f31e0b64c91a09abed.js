webpackJsonp([4],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["open"] = open;
/* harmony export (immutable) */ __webpack_exports__["close"] = close;
function open(name) {
	document.body.innerHTML = "<h1></h1>";
	document.querySelector("h1").innerText = `Loading ${name}...`;
	return Promise.resolve();
}

function close() {
	return Promise.resolve();
}

/***/ })

});