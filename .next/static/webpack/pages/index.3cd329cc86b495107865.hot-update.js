webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "E:\\react_js\\study\\23\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _this = undefined;

// domain/



var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://images.wallpaperscraft.com/image/road_marking_bridge_123398_1920x1080.jpg',
  address: 'Some address 5, 12345 Some City',
  description: 'This is a first meetup'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://images.wallpaperscraft.com/image/railway_train_station_134586_1920x1080.jpg',
  address: 'Some address 10, 12345 Some City',
  description: 'This is a second meetup'
}]; //props là tham số nhận được từ hàm getStaticProps

var HomePage = function HomePage(props) {
  console.log('ok');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEQ7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFDLElBRFA7QUFFSUMsT0FBSyxFQUFDLGdCQUZWO0FBR0lDLE9BQUssRUFBQyxtRkFIVjtBQUlJQyxTQUFPLEVBQUMsaUNBSlo7QUFLSUMsYUFBVyxFQUFDO0FBTGhCLENBRGtCLEVBUWxCO0FBQ0lKLElBQUUsRUFBQyxJQURQO0FBRUlDLE9BQUssRUFBQyxpQkFGVjtBQUdJQyxPQUFLLEVBQUMscUZBSFY7QUFJSUMsU0FBTyxFQUFDLGtDQUpaO0FBS0lDLGFBQVcsRUFBQztBQUxoQixDQVJrQixDQUF0QixDLENBbUJBOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNDLHNCQUVRLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFJRixLQUFLLENBQUNHO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGUjtBQUtILENBUEQsQyxDQVFBO0FBQ0E7QUFDQTs7O0tBVk1KLFE7QUE0Q047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjZDMyOWNjODZiNDk1MTA3ODY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCIvLyBkb21haW4vXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20xJyxcclxuICAgICAgICB0aXRsZTonQSBGaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3JvYWRfbWFya2luZ19icmlkZ2VfMTIzMzk4XzE5MjB4MTA4MC5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6J1NvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIGEgZmlyc3QgbWVldHVwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20yJyxcclxuICAgICAgICB0aXRsZTonQSBTZWNvbmQgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTonaHR0cHM6Ly9pbWFnZXMud2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9yYWlsd2F5X3RyYWluX3N0YXRpb25fMTM0NTg2XzE5MjB4MTA4MC5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6J1NvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAnLFxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuXHJcbl1cclxuLy9wcm9wcyBsw6AgdGhhbSBz4buRIG5o4bqtbiDEkcaw4bujYyB04burIGjDoG0gZ2V0U3RhdGljUHJvcHNcclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgIFxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzID0ge3Byb3BzLm1lZXR1cHN9Lz5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuLy9ow6BtIG7DoHkgc+G6vSBjaOG6oXkgdHLGsOG7m2MgaMOgbSByZW5kZXIgY29tcG9uZW50IC0gbsOzIGNo4bqheSB0cm9uZyBzdeG7kXQgcXXDoSB0csOsbmggcHJlLXJlbmRlciBwYWdlXHJcbi8vdGjDrWNoIGjhu6NwIMSR4buDIGfhu41pIGFwaSwgbOG6pXkgZmlsZSwgZOG7ryBsaeG7h3UgxJHhu4MgaGnhu4NuIHRo4buLIGzDqm4gdmlldyB0csaw4bubYyBraGkgbcOgIG7DsyDEkcaw4bujYyByZW5kZXIgcmEgaG/DoG4gdG/DoG5cclxuLy9kw7luZyBjw6FpIG7DoHkgdGEgc+G6vSB0csOhbmggxJHGsOG7o2Mgdmnhu4djIGTDuW5nIHVzZUVmZmVjdCB2w6AgdXNlU3RhdGUsXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vdsOsIGjDoG0gbsOgeSBjaOG7iSBjaOG6oXkgdHJvbmcgcXXDoSB0csOsbmggYnVpbGQgdsOgIGtoaSBkZXBsb3kgbMOqbiBzZXJ2ZXJcclxuICAgIC8vIGtow7RuZyBjaOG6oXkg4bufIHBow61hIG5nxrDhu51pIGTDuW5nXHJcbiAgICAvLyBuw6puIHRhIGfhu41pIHRy4buxYyB0aeG6v3AgbOG6pXkgZOG7ryBsaeG7h3UgdOG7qyBtb25nbyDhu58gxJHDonkgY8WpbmcgxJHGsOG7o2NcclxuICAgIFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICAnbW9uZ29kYitzcnY6Ly90b3RoYW5odGluMTIzNDU6QW5oeWV1ZW0xMjNAY2x1c3RlcjAuZmU0MGMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgIC8vdMOsbSB04bqldCBj4bqjIGThu68gbGnhu4d1IHThu6sgbWVldHVwcyBkb2N1bWVudCB2w6AgYmnhur9uIGNow7puZyB0aMOgbmggbeG7mXQgbeG6o25nXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIC8vxJHDs25nIGvhur90IG7hu5FpXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIC8vbWFwIGThu68gbGnhu4d1IGzhuqV5IHThu6sgbW9uZ29cclxuICAgICAgICAgICAgbWVldHVwczptZWV0dXBzLm1hcChtZWV0dXA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6bWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczptZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTptZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3RodeG7mWMgdMOtbmggcmVsb2FkIGzhuqFpIHBhZ2Ugc2F1IDEgZ2nDonlcclxuICAgICAgICByZXZhbGlkYXRlOiAxLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL2jDoG0gbsOgeSBz4bq9IGPFqW5nIHTGsMahbmcgdOG7sSBnZXRTdGF0aWNQcm9wc1xyXG4vL25oxrBuZyBuw7MgxJHGsOG7o2MgY2jhuqF5IGzhuqFpIHNhdSBraGkgxJHGsOG7o2MgZGVwbG95IGzDqm4gc2VydmVyXHJcbi8vIHbDoCBt4buXaSBjw7MgcmVxdWVzdCDEkeG6v24gc2VydmVyXHJcbi8vY29udGV4dDogbMOgIMSR4buRaSB0xrDhu6NuZyBjaOG7qWEgcmVxLCByZXMgY+G7p2EgbmdvdWl3ZiBkw7luZ1xyXG4vLyBleHBvcnQgY29uc3QgIGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KT0+e1xyXG4vLyAgICAgY29uc3QgcmVxID1jb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=