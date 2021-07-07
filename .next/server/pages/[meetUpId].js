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
}; //hàm này chạy trước getStaticProps - dùng để xử lý tham số trên đường dẫn


const getStaticPaths = async () => {
  //kết nối mongo database
  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db(); //truy cập đến meetups document

  const meetupsCollection = db.collection("meetups"); //lấy mảng các meet up id để đặt vào paths

  const meetupsId = await meetupsCollection.find({}, {
    _id: 1
  }).toArray(); // tham số thứ hai {_id:1} chỉ ra đối tượng muốn lấy từ tập dữ liệu

  client.close();
  return {
    //nếu fallback: false thì chỉ trả về những giá trị tương ứng với key (tên file hoặc thư mục tham số) có giá trị trong paths
    // ví dụ như domain/m1 => trong paths có meetUpId: 'm1' => trả về phần params chứa  meetUpId: 'm1 => ngược lại hiển thị một 404 page
    //nếu fallback: true thì sẽ trả về giá trị mà người dùng nhập trên path
    //ví dụ như domain/m1 => trả về luôn params: {meetUpId:'m1'} mà không cần quan tâm đến paths
    // lưu ý tham số trả về luôn phải ở dạng params: { keyname(tương ứng với tên file hoặc tên thư mục tham số):giá trị }
    //dùng fallback: false sẽ bảo mật hơn
    fallback: false,
    //dựa vào tham số trên đường dẫn - một đối tượng tham số tương ứng trong mảng paths sẽ được lấy ra và truyền cho hàm getStaticProps
    //paths trong trường hợp này sẽ nhận dữ liệu csdl
    paths: meetupsId.map(data => {
      return {
        params: {
          meetUpId: data._id.toString()
        }
      };
    }) // paths:[
    //     {
    //         params:{
    //             //key giá trị phải trùng với tên file hoặc thư mục tham số
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
}; //sử dụng getStaticProps vì project hiện tại không có chức năng thay đổi
//bên cạnh đó thực tế thì meetup không thay đổi thường xuyên

const getStaticProps = async context => {
  //muốn lấy giá trị từ context.params thì trước hết phải có hàm getStaticPaths
  const meetUpId = context.params.meetUpId;
  console.log(meetUpId); //truy cập mongo để lấy chi tiết một id
  //kết nối mongo database

  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db(); //truy cập đến meetups document

  const meetupsCollection = db.collection("meetups"); //lấy dữ liệu 1 meet up dựa vào id

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