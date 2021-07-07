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
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUMsSUFEUDtBQUVJQyxPQUFLLEVBQUMsZ0JBRlY7QUFHSUMsT0FBSyxFQUFDLG1GQUhWO0FBSUlDLFNBQU8sRUFBQyxpQ0FKWjtBQUtJQyxhQUFXLEVBQUM7QUFMaEIsQ0FEa0IsRUFRbEI7QUFDSUosSUFBRSxFQUFDLElBRFA7QUFFSUMsT0FBSyxFQUFDLGlCQUZWO0FBR0lDLE9BQUssRUFBQyxxRkFIVjtBQUlJQyxTQUFPLEVBQUMsa0NBSlo7QUFLSUMsYUFBVyxFQUFDO0FBTGhCLENBUmtCLENBQXRCLEMsQ0FtQkE7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Msc0JBRVEscUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUlGLEtBQUssQ0FBQ0c7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZSO0FBS0gsQ0FQRCxDLENBUUE7QUFDQTtBQUNBOzs7S0FWTUosUTtBQXVDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQwOGYyN2RjNTMwNjkzMTI0NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRvbWFpbi9cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDonbTEnLFxyXG4gICAgICAgIHRpdGxlOidBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6J2h0dHBzOi8vaW1hZ2VzLndhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2Uvcm9hZF9tYXJraW5nX2JyaWRnZV8xMjMzOThfMTkyMHgxMDgwLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczonU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonbTInLFxyXG4gICAgICAgIHRpdGxlOidBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3JhaWx3YXlfdHJhaW5fc3RhdGlvbl8xMzQ1ODZfMTkyMHgxMDgwLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczonU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCcsXHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG5cclxuXVxyXG4vL3Byb3BzIGzDoCB0aGFtIHPhu5Egbmjhuq1uIMSRxrDhu6NjIHThu6sgaMOgbSBnZXRTdGF0aWNQcm9wc1xyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgXHJcbiAgICAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHMgPSB7cHJvcHMubWVldHVwc30vPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG4vL2jDoG0gbsOgeSBz4bq9IGNo4bqheSB0csaw4bubYyBow6BtIHJlbmRlciBjb21wb25lbnQgLSBuw7MgY2jhuqF5IHRyb25nIHN14buRdCBxdcOhIHRyw6xuaCBwcmUtcmVuZGVyIHBhZ2VcclxuLy90aMOtY2ggaOG7o3AgxJHhu4MgZ+G7jWkgYXBpLCBs4bqleSBmaWxlLCBk4buvIGxp4buHdSDEkeG7gyBoaeG7g24gdGjhu4sgbMOqbiB2aWV3IHRyxrDhu5tjIGtoaSBtw6AgbsOzIMSRxrDhu6NjIHJlbmRlciByYSBob8OgbiB0b8OgblxyXG4vL2TDuW5nIGPDoWkgbsOgeSB0YSBz4bq9IHRyw6FuaCDEkcaw4bujYyB2aeG7h2MgZMO5bmcgdXNlRWZmZWN0IHbDoCB1c2VTdGF0ZSxcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy92w6wgaMOgbSBuw6B5IGNo4buJIGNo4bqheSB0cm9uZyBxdcOhIHRyw6xuaCBidWlsZCB2w6Aga2hpIGRlcGxveSBsw6puIHNlcnZlclxyXG4gICAgLy8ga2jDtG5nIGNo4bqheSDhu58gcGjDrWEgbmfGsOG7nWkgZMO5bmdcclxuICAgIC8vIG7Dqm4gdGEgZ+G7jWkgdHLhu7FjIHRp4bq/cCBs4bqleSBk4buvIGxp4buHdSB04burIG1vbmdvIOG7nyDEkcOieSBjxaluZyDEkcaw4bujY1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgICdtb25nb2RiK3NydjovL3RvdGhhbmh0aW4xMjM0NTpBbmh5ZXVlbTEyM0BjbHVzdGVyMC5mZTQwYy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgLy90w6xtIHThuqV0IGPhuqMgZOG7ryBsaeG7h3UgdOG7qyBtZWV0dXBzIGRvY3VtZW50IHbDoCBiaeG6v24gY2jDum5nIHRow6BuaCBt4buZdCBt4bqjbmdcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgLy/EkcOzbmcga+G6v3QgbuG7kWlcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgLy9tYXAgZOG7ryBsaeG7h3UgbOG6pXkgdOG7qyBtb25nb1xyXG4gICAgICAgICAgICBtZWV0dXBzOm1lZXR1cHMubWFwKG1lZXR1cD0+KHtcclxuICAgICAgICAgICAgICAgIGlkOm1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy90aHXhu5ljIHTDrW5oIHJlbG9hZCBs4bqhaSBwYWdlIHNhdSAxIGdpw6J5XHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMSxcclxuICAgIH1cclxufVxyXG5cclxuLy9ow6BtIG7DoHkgc+G6vSBjxaluZyB0xrDGoW5nIHThu7EgZ2V0U3RhdGljUHJvcHNcclxuLy9uaMawbmcgbsOzIMSRxrDhu6NjIGNo4bqheSBs4bqhaSBzYXUga2hpIMSRxrDhu6NjIGRlcGxveSBsw6puIHNlcnZlclxyXG4vLyB2w6AgbeG7l2kgY8OzIHJlcXVlc3QgxJHhur9uIHNlcnZlclxyXG4vL2NvbnRleHQ6IGzDoCDEkeG7kWkgdMaw4bujbmcgY2jhu6lhIHJlcSwgcmVzIGPhu6dhIG5nb3Vpd2YgZMO5bmdcclxuLy8gZXhwb3J0IGNvbnN0ICBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCk9PntcclxuLy8gICAgIGNvbnN0IHJlcSA9Y29udGV4dC5yZXE7XHJcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9