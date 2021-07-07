webpackHotUpdate_N_E("pages/[meetUpId]",{

/***/ "./pages/[meetUpId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetUpId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");


var _jsxFileName = "E:\\react_js\\study\\23\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetUpId]\\index.js",
    _this = undefined;

// domain/:meetUpId




var MeetupDetailsPage = function MeetupDetailsPage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
}; //hàm này chạy trước getStaticProps - dùng để xử lý tham số trên đường dẫn


_c = MeetupDetailsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailsPage);

var _c;

$RefreshReg$(_c, "MeetupDetailsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXRVcElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ25DLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLHlFQUFEO0FBQ0UsV0FBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLEtBRDFCO0FBRUUsV0FBSyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRjFCO0FBR0UsYUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJLE9BSDVCO0FBSUUsaUJBQVcsRUFBRUwsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZELEMsQ0FpQkE7OztLQWpCTUosaUI7O0FBbUdTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldFVwSWRdLjI0ZGVmOWRmMGU2MDMwMTk3ZTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkb21haW4vOm1lZXRVcElkXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJRCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vaMOgbSBuw6B5IGNo4bqheSB0csaw4bubYyBnZXRTdGF0aWNQcm9wcyAtIGTDuW5nIMSR4buDIHjhu60gbMO9IHRoYW0gc+G7kSB0csOqbiDEkcaw4budbmcgZOG6q25cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8va+G6v3QgbuG7kWkgbW9uZ28gZGF0YWJhc2VcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3RvdGhhbmh0aW4xMjM0NTpBbmh5ZXVlbTEyM0BjbHVzdGVyMC5mZTQwYy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIC8vdHJ1eSBj4bqtcCDEkeG6v24gbWVldHVwcyBkb2N1bWVudFxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgLy9s4bqleSBt4bqjbmcgY8OhYyBtZWV0IHVwIGlkIMSR4buDIMSR4bq3dCB2w6BvIHBhdGhzXHJcbiAgY29uc3QgbWVldHVwc0lkID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpOyAvLyB0aGFtIHPhu5EgdGjhu6kgaGFpIHtfaWQ6MX0gY2jhu4kgcmEgxJHhu5FpIHTGsOG7o25nIG114buRbiBs4bqleSB04burIHThuq1wIGThu68gbGnhu4d1XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vbuG6v3UgZmFsbGJhY2s6IGZhbHNlIHRow6wgY2jhu4kgdHLhuqMgduG7gSBuaOG7r25nIGdpw6EgdHLhu4sgdMawxqFuZyDhu6luZyB24bubaSBrZXkgKHTDqm4gZmlsZSBob+G6t2MgdGjGsCBt4bulYyB0aGFtIHPhu5EpIGPDsyBnacOhIHRy4buLIHRyb25nIHBhdGhzXHJcbiAgICAvLyB2w60gZOG7pSBuaMawIGRvbWFpbi9tMSA9PiB0cm9uZyBwYXRocyBjw7MgbWVldFVwSWQ6ICdtMScgPT4gdHLhuqMgduG7gSBwaOG6p24gcGFyYW1zIGNo4bupYSAgbWVldFVwSWQ6ICdtMSA9PiBuZ8aw4bujYyBs4bqhaSBoaeG7g24gdGjhu4sgbeG7mXQgNDA0IHBhZ2VcclxuICAgIC8vbuG6v3UgZmFsbGJhY2s6IHRydWUgdGjDrCBz4bq9IHRy4bqjIHbhu4EgZ2nDoSB0cuG7iyBtw6AgbmfGsOG7nWkgZMO5bmcgbmjhuq1wIHRyw6puIHBhdGhcclxuICAgIC8vdsOtIGThu6UgbmjGsCBkb21haW4vbTEgPT4gdHLhuqMgduG7gSBsdcO0biBwYXJhbXM6IHttZWV0VXBJZDonbTEnfSBtw6Aga2jDtG5nIGPhuqduIHF1YW4gdMOibSDEkeG6v24gcGF0aHNcclxuICAgIC8vIGzGsHUgw70gdGhhbSBz4buRIHRy4bqjIHbhu4EgbHXDtG4gcGjhuqNpIOG7nyBk4bqhbmcgcGFyYW1zOiB7IGtleW5hbWUodMawxqFuZyDhu6luZyB24bubaSB0w6puIGZpbGUgaG/hurdjIHTDqm4gdGjGsCBt4bulYyB0aGFtIHPhu5EpOmdpw6EgdHLhu4sgfVxyXG4gICAgLy9kw7luZyBmYWxsYmFjazogZmFsc2Ugc+G6vSBi4bqjbyBt4bqtdCBoxqFuXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAvL2Thu7FhIHbDoG8gdGhhbSBz4buRIHRyw6puIMSRxrDhu51uZyBk4bqrbiAtIG3hu5l0IMSR4buRaSB0xrDhu6NuZyB0aGFtIHPhu5EgdMawxqFuZyDhu6luZyB0cm9uZyBt4bqjbmcgcGF0aHMgc+G6vSDEkcaw4bujYyBs4bqleSByYSB2w6AgdHJ1eeG7gW4gY2hvIGjDoG0gZ2V0U3RhdGljUHJvcHNcclxuICAgIC8vcGF0aHMgdHJvbmcgdHLGsOG7nW5nIGjhu6NwIG7DoHkgc+G6vSBuaOG6rW4gZOG7ryBsaeG7h3UgY3NkbFxyXG4gICAgcGF0aHM6IG1lZXR1cHNJZC5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG1lZXRVcElkOiBkYXRhLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuICAgIC8vIHBhdGhzOltcclxuICAgIC8vICAgICB7XHJcblxyXG4gICAgLy8gICAgICAgICBwYXJhbXM6e1xyXG4gICAgLy8gICAgICAgICAgICAgLy9rZXkgZ2nDoSB0cuG7iyBwaOG6o2kgdHLDuW5nIHbhu5tpIHTDqm4gZmlsZSBob+G6t2MgdGjGsCBt4bulYyB0aGFtIHPhu5FcclxuICAgIC8vICAgICAgICAgICAgIG1lZXRVcElkOiAnbTEnLFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHBhcmFtczp7XHJcbiAgICAvLyAgICAgICAgICAgICBtZWV0VXBJZDogJ20yJyxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sXHJcblxyXG4gICAgLy8gXVxyXG4gIH07XHJcbn07XHJcblxyXG4vL3Phu60gZOG7pW5nIGdldFN0YXRpY1Byb3BzIHbDrCBwcm9qZWN0IGhp4buHbiB04bqhaSBraMO0bmcgY8OzIGNo4bupYyBuxINuZyB0aGF5IMSR4buVaVxyXG4vL2LDqm4gY+G6oW5oIMSRw7MgdGjhu7FjIHThur8gdGjDrCBtZWV0dXAga2jDtG5nIHRoYXkgxJHhu5VpIHRoxrDhu51uZyB4dXnDqm5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy9tdeG7kW4gbOG6pXkgZ2nDoSB0cuG7iyB04burIGNvbnRleHQucGFyYW1zIHRow6wgdHLGsOG7m2MgaOG6v3QgcGjhuqNpIGPDsyBow6BtIGdldFN0YXRpY1BhdGhzXHJcbiAgY29uc3QgbWVldFVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0VXBJZDtcclxuICBjb25zb2xlLmxvZyhtZWV0VXBJZCk7XHJcbiAgLy90cnV5IGPhuq1wIG1vbmdvIMSR4buDIGzhuqV5IGNoaSB0aeG6v3QgbeG7mXQgaWRcclxuICAvL2vhur90IG7hu5FpIG1vbmdvIGRhdGFiYXNlXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly90b3RoYW5odGluMTIzNDU6QW5oeWV1ZW0xMjNAY2x1c3RlcjAuZmU0MGMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAvL3RydXkgY+G6rXAgxJHhur9uIG1lZXR1cHMgZG9jdW1lbnRcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIC8vbOG6pXkgZOG7ryBsaeG7h3UgMSBtZWV0IHVwIGThu7FhIHbDoG8gaWRcclxuICBjb25zdCBtZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKFxyXG4gICAgeyBfaWQ6IE9iamVjdElEKG1lZXRVcElkKSB9LFxyXG4gICAgeyBfaWQ6IDAgfVxyXG4gICk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgY29uc29sZS5sb2cobWVldHVwKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==