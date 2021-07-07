webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "E:\\react_js\\study\\23\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _this = undefined;

// domain/



 //props là tham số nhận được từ hàm getStaticProps

var HomePage = function HomePage(props) {
  console.log('ok');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
}; //hàm này sẽ chạy trước hàm render component - nó chạy trong suốt quá trình pre-render page
//thích hợp để gọi api, lấy file, dữ liệu để hiển thị lên view trước khi mà nó được render ra hoàn toàn
//dùng cái này ta sẽ tránh được việc dùng useEffect và useState,


_c = HomePage;
//hàm này sẽ cũng tương tự getStaticProps
//nhưng nó được chạy lại sau khi được deploy lên server
// và mỗi có request đến server
//context: là đối tượng chứa req, res của ngouiwf dùng
// export const  getServerSideProps = async (context)=>{
//     const req =context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNDLHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFDSSxZQUFJLEVBQUMsYUFEVDtBQUVJLGVBQU8sRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFJRixLQUFLLENBQUNHO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBakJELEMsQ0FrQkE7QUFDQTtBQUNBOzs7S0FwQk1KLFE7QUFzRE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwZTA5NDVlNWFjNmE5Nzc3YzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkb21haW4vXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG4vL3Byb3BzIGzDoCB0aGFtIHPhu5Egbmjhuq1uIMSRxrDhu6NjIHThu6sgaMOgbSBnZXRTdGF0aWNQcm9wc1xyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD0nQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgbWVldHVwcyEnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHMgPSB7cHJvcHMubWVldHVwc30vPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG4vL2jDoG0gbsOgeSBz4bq9IGNo4bqheSB0csaw4bubYyBow6BtIHJlbmRlciBjb21wb25lbnQgLSBuw7MgY2jhuqF5IHRyb25nIHN14buRdCBxdcOhIHRyw6xuaCBwcmUtcmVuZGVyIHBhZ2VcclxuLy90aMOtY2ggaOG7o3AgxJHhu4MgZ+G7jWkgYXBpLCBs4bqleSBmaWxlLCBk4buvIGxp4buHdSDEkeG7gyBoaeG7g24gdGjhu4sgbMOqbiB2aWV3IHRyxrDhu5tjIGtoaSBtw6AgbsOzIMSRxrDhu6NjIHJlbmRlciByYSBob8OgbiB0b8OgblxyXG4vL2TDuW5nIGPDoWkgbsOgeSB0YSBz4bq9IHRyw6FuaCDEkcaw4bujYyB2aeG7h2MgZMO5bmcgdXNlRWZmZWN0IHbDoCB1c2VTdGF0ZSxcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy92w6wgaMOgbSBuw6B5IGNo4buJIGNo4bqheSB0cm9uZyBxdcOhIHRyw6xuaCBidWlsZCB2w6Aga2hpIGRlcGxveSBsw6puIHNlcnZlclxyXG4gICAgLy8ga2jDtG5nIGNo4bqheSDhu58gcGjDrWEgbmfGsOG7nWkgZMO5bmdcclxuICAgIC8vIG7Dqm4gdGEgZ+G7jWkgdHLhu7FjIHRp4bq/cCBs4bqleSBk4buvIGxp4buHdSB04burIG1vbmdvIOG7nyDEkcOieSBjxaluZyDEkcaw4bujY1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgICdtb25nb2RiK3NydjovL3RvdGhhbmh0aW4xMjM0NTpBbmh5ZXVlbTEyM0BjbHVzdGVyMC5mZTQwYy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgLy90w6xtIHThuqV0IGPhuqMgZOG7ryBsaeG7h3UgdOG7qyBtZWV0dXBzIGRvY3VtZW50IHbDoCBiaeG6v24gY2jDum5nIHRow6BuaCBt4buZdCBt4bqjbmdcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgLy/EkcOzbmcga+G6v3QgbuG7kWlcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgLy9tYXAgZOG7ryBsaeG7h3UgbOG6pXkgdOG7qyBtb25nb1xyXG4gICAgICAgICAgICBtZWV0dXBzOm1lZXR1cHMubWFwKG1lZXR1cD0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDptZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOm1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOm1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vdGh14buZYyB0w61uaCByZWxvYWQgbOG6oWkgcGFnZSBzYXUgMSBnacOieVxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vaMOgbSBuw6B5IHPhur0gY8WpbmcgdMawxqFuZyB04buxIGdldFN0YXRpY1Byb3BzXHJcbi8vbmjGsG5nIG7DsyDEkcaw4bujYyBjaOG6oXkgbOG6oWkgc2F1IGtoaSDEkcaw4bujYyBkZXBsb3kgbMOqbiBzZXJ2ZXJcclxuLy8gdsOgIG3hu5dpIGPDsyByZXF1ZXN0IMSR4bq/biBzZXJ2ZXJcclxuLy9jb250ZXh0OiBsw6AgxJHhu5FpIHTGsOG7o25nIGNo4bupYSByZXEsIHJlcyBj4bunYSBuZ291aXdmIGTDuW5nXHJcbi8vIGV4cG9ydCBjb25zdCAgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57XHJcbi8vICAgICBjb25zdCByZXEgPWNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==