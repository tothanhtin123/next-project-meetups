module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ypWE");


/***/ }),

/***/ "9azE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"details": "MeetupDetails_details__3zPqQ"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "ypWE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__("9azE");
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);

// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js




const MeetupDetails = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: MeetupDetails_module_default.a['details'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
      children: props.address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: props.description
    })]
  });
};

/* harmony default export */ var meetups_MeetupDetails = (MeetupDetails);
// CONCATENATED MODULE: ./pages/[meetUpId]/index.js


// domain/:meetUpId





const MeetupDetailsPage = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: props.meetupData.description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetails, {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    })]
  });
}; //h??m n??y ch???y tr?????c getStaticProps - d??ng ????? x??? l?? tham s??? tr??n ???????ng d???n


const getStaticPaths = async () => {
  //k???t n???i mongo database
  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db(); //truy c???p ?????n meetups document

  const meetupsCollection = db.collection("meetups"); //l???y m???ng c??c meet up id ????? ?????t v??o paths

  const meetupsId = await meetupsCollection.find({}, {
    _id: 1
  }).toArray(); // tham s??? th??? hai {_id:1} ch??? ra ?????i t?????ng mu???n l???y t??? t???p d??? li???u

  client.close();
  return {
    //n???u fallback: false th?? ch??? tr??? v??? nh???ng gi?? tr??? t????ng ???ng v???i key (t??n file ho???c th?? m???c tham s???) c?? gi?? tr??? trong paths
    // v?? d??? nh?? domain/m1 => trong paths c?? meetUpId: 'm1' => tr??? v??? ph???n params ch???a  meetUpId: 'm1 => ng?????c l???i hi???n th??? m???t 404 page
    //n???u fallback: true th?? s??? tr??? v??? gi?? tr??? m?? ng?????i d??ng nh???p tr??n path
    //v?? d??? nh?? domain/m1 => tr??? v??? lu??n params: {meetUpId:'m1'} m?? kh??ng c???n quan t??m ?????n paths
    // l??u ?? tham s??? tr??? v??? lu??n ph???i ??? d???ng params: { keyname(t????ng ???ng v???i t??n file ho???c t??n th?? m???c tham s???):gi?? tr??? }
    //d??ng fallback: false s??? b???o m???t h??n
    fallback: false,
    //d???a v??o tham s??? tr??n ???????ng d???n - m???t ?????i t?????ng tham s??? t????ng ???ng trong m???ng paths s??? ???????c l???y ra v?? truy???n cho h??m getStaticProps
    //paths trong tr?????ng h???p n??y s??? nh???n d??? li???u csdl
    paths: meetupsId.map(data => {
      return {
        params: {
          meetUpId: data._id.toString()
        }
      };
    }) // paths:[
    //     {
    //         params:{
    //             //key gi?? tr??? ph???i tr??ng v???i t??n file ho???c th?? m???c tham s???
    //             meetUpId: 'm1',
    //         }
    //     },
    //     {
    //         params:{
    //             meetUpId: 'm2',
    //         }
    //     },
    // ]

  };
}; //s??? d???ng getStaticProps v?? project hi???n t???i kh??ng c?? ch???c n??ng thay ?????i
//b??n c???nh ???? th???c t??? th?? meetup kh??ng thay ?????i th?????ng xuy??n

const getStaticProps = async context => {
  //mu???n l???y gi?? tr??? t??? context.params th?? tr?????c h???t ph???i c?? h??m getStaticPaths
  const meetUpId = context.params.meetUpId;
  console.log(meetUpId); //truy c???p mongo ????? l???y chi ti???t m???t id
  //k???t n???i mongo database

  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db(); //truy c???p ?????n meetups document

  const meetupsCollection = db.collection("meetups"); //l???y d??? li???u 1 meet up d???a v??o id

  const meetup = await meetupsCollection.findOne({
    _id: Object(external_mongodb_["ObjectID"])(meetUpId)
  }, {
    _id: 0
  });
  client.close();
  console.log(meetup);
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image
      }
    }
  };
};
/* harmony default export */ var _meetUpId_ = __webpack_exports__["default"] = (MeetupDetailsPage);

/***/ })

/******/ });