var serverBundle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/static/server/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MODAL_OPEN = exports.LOGOUT = exports.USERS_PAGINATE = exports.LOAD_USERS_ERROR = exports.LOAD_USERS_SUCCESS = exports.USERS_UNMOUNT = exports.LOAD_USERS = exports.LOAD_USER_ERROR = exports.LOAD_USER_SUCCESS = exports.LOAD_USER = exports.REGISTRATION_ERROR = exports.REGISTRATION_SUCCESS = exports.REGISTRATION = exports.LOGOUT_ERROR = exports.LOGOUT_START = exports.LOGIN_ERROR = exports.LOGIN_SUCCESS = exports.LOGIN = undefined;
exports.zero = zero;
exports.openModal = openModal;
exports.login = login;
exports.logout = logout;
exports.registration = registration;
exports.current = current;
exports.userChange = userChange;
exports.usersFetchData = usersFetchData;
exports.usersUnMount = usersUnMount;

var _load = __webpack_require__(12);

var _users = __webpack_require__(33);

var _reduxApiMiddleware = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN = exports.LOGIN = 'LOGIN';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_ERROR = exports.LOGIN_ERROR = 'LOGIN_ERROR';
var LOGOUT_START = exports.LOGOUT_START = 'LOGOUT_START';
var LOGOUT_ERROR = exports.LOGOUT_ERROR = 'LOGOUT_ERROR';
var REGISTRATION = exports.REGISTRATION = 'REGISTRATION';
var REGISTRATION_SUCCESS = exports.REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
var REGISTRATION_ERROR = exports.REGISTRATION_ERROR = 'REGISTRATION_ERROR';
var LOAD_USER = exports.LOAD_USER = 'LOAD_USER';
var LOAD_USER_SUCCESS = exports.LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_ERROR = exports.LOAD_USER_ERROR = 'LOAD_USER_ERROR';
var LOAD_USERS = exports.LOAD_USERS = 'LOAD_USERS';
var USERS_UNMOUNT = exports.USERS_UNMOUNT = 'USERS_UNMOUNT';
var LOAD_USERS_SUCCESS = exports.LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
var LOAD_USERS_ERROR = exports.LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';
var USERS_PAGINATE = exports.USERS_PAGINATE = 'USERS_PAGINATE';
var LOGOUT = exports.LOGOUT = 'LOGOUT';
var MODAL_OPEN = exports.MODAL_OPEN = 'MODAL_OPEN';

function zero(result) {
    return result;
}

function openModal(isOpen, modal) {
    return {
        type: MODAL_OPEN,
        isOpen: isOpen,
        modal: modal
    };
}

function login(url, username, password) {
    var types = [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ username: username, password: password }), zero, true);
}

function logout() {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'same-origin',
        endpoint: '/logout/',
        method: 'GET',
        types: [LOGOUT_START, LOGOUT, LOGOUT_ERROR]
    });
    // return {
    //     type: LOGOUT,
    // }
}

function registration(url, username, password, email, first_name, last_name) {
    var types = [REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ username: username, password: password, email: email, first_name: first_name, last_name: last_name }), zero, true);
}

function current(url) {
    var types = [LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR];
    return (0, _load.apiLoad)(url, 'GET', types, null, _users.userNormalize, true);
}

function userChange(url, username, first_name, last_name, email, avatar) {
    var types = [LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR];
    var data = new FormData();
    // console.log(JSON.parse(data.serializeArray()));
    data.append('username', username);
    data.append('email', email);
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    if (avatar !== null) {
        data.append('avatar', avatar);
    }
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'same-origin',
        endpoint: url,
        method: 'PUT',
        body: data,
        types: [types[0], {
            type: types[1],
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    return (0, _users.userNormalize)(json);
                });
            }
        }, types[2]]
    });
}

function usersFetchData(url) {
    var types = [LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR, USERS_PAGINATE];
    return (0, _load.FetchData)(url, types, _users.usersNormalize, 'get', null);
}

function usersUnMount() {
    return {
        type: USERS_UNMOUNT
    };
}

// function fileCoding(file) {
//     console.log(File.read(file));
//     let base64_image = new Buffer(File.read(file)).toString('base64');;
//     return "data:image/jpg;base64," + base64_image;
// }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taskFetchData = exports.TASK_DELETE_ERROR = exports.TASK_DELETE_SUCCESS = exports.TASK_DELETE = exports.TASKS_PAGINATE = exports.LOAD_TASK_ERROR = exports.LOAD_TASK_SUCCESS = exports.LOAD_TASK = exports.LOAD_TASKS_ERROR = exports.LOAD_TASKS_MORE = exports.LOAD_TASKS_SUCCESS = exports.LOAD_TASKS = undefined;
exports.taskMoreFetchData = taskMoreFetchData;
exports.ownTaskFetchData = ownTaskFetchData;
exports.taskCreate = taskCreate;
exports.projectFetchDate = projectFetchDate;
exports.taskChange = taskChange;
exports.taskDelete = taskDelete;

var _load = __webpack_require__(12);

var _users = __webpack_require__(3);

var _tasks = __webpack_require__(34);

var _normalizr = __webpack_require__(10);

var _reduxApiMiddleware = __webpack_require__(8);

var LOAD_TASKS = exports.LOAD_TASKS = 'LOAD_TASKS';
var LOAD_TASKS_SUCCESS = exports.LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
var LOAD_TASKS_MORE = exports.LOAD_TASKS_MORE = 'LOAD_TASKS_MORE';
var LOAD_TASKS_ERROR = exports.LOAD_TASKS_ERROR = 'LOAD_TASKS_ERROR';
var LOAD_TASK = exports.LOAD_TASK = 'LOAD_TASK';
var LOAD_TASK_SUCCESS = exports.LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS';
var LOAD_TASK_ERROR = exports.LOAD_TASK_ERROR = 'LOAD_TASK_ERROR';
var TASKS_PAGINATE = exports.TASKS_PAGINATE = 'TASKS_PAGINATE';
var TASK_DELETE = exports.TASK_DELETE = 'TASK_DELETE';
var TASK_DELETE_SUCCESS = exports.TASK_DELETE_SUCCESS = 'TASK_DELETE_SUCCESS';
var TASK_DELETE_ERROR = exports.TASK_DELETE_ERROR = 'TASK_DELETE_ERROR';

var taskFetchData = exports.taskFetchData = function taskFetchData(url) {
    var types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _tasks.tasksNormalize, false);
};

function taskMoreFetchData(url) {
    var types = [LOAD_TASKS, LOAD_TASKS_MORE, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _tasks.tasksNormalize, false);
}

function ownTaskFetchData(url) {
    var types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return (0, _load.apiLoad)(url, 'GET', types, null, _tasks.taskNormalize, true);
}

function taskCreate(url, text, description, project_id) {
    var types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ text: text, description: description, status: 1, project_id: project_id }), _tasks.taskNormalize, true);
}

function projectFetchDate(url) {
    var types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _tasks.tasksNormalize, false);
}

function taskChange(url, text, description, project_id) {
    var types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return (0, _load.apiLoad)(url, 'PUT', types, JSON.stringify({ text: text, description: description, status: 1, project_id: project_id }), _tasks.taskNormalize, true);
}

function taskDelete(url, id) {
    var types = [TASK_DELETE_SUCCESS, TASK_DELETE_ERROR];
    return (0, _load.FetchDelete)(url, types, id);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PROJECT_DELETE_ERROR = exports.PROJECT_DELETE_SUCCESS = exports.PROJECTS_PAGINATE = exports.LOAD_NEW_PROJECT_ERROR = exports.LOAD_NEW_PROJECT_SUCCESS = exports.LOAD_NEW_PROJECT = exports.PROJECT_MEMBERS_PAGINATE = exports.LOAD_PROJECT_MEMBER_ERROR = exports.LOAD_PROJECT_MEMBER_SUCCESS = exports.LOAD_PROJECT_MEMBER = exports.LOAD_PROJECT_MEMBERS_ERROR = exports.LOAD_PROJECT_MEMBERS_SUCCESS = exports.LOAD_PROJECT_MEMBERS = exports.LOAD_PROJECT_ERROR = exports.LOAD_PROJECT_SUCCESS = exports.LOAD_PROJECT = exports.LOAD_PROJECTS_MORE = exports.LOAD_PROJECTS_ERROR = exports.LOAD_PROJECTS_SUCCESS = exports.LOAD_PROJECTS = undefined;
exports.projectsFetchData = projectsFetchData;
exports.projectMembersFetchData = projectMembersFetchData;
exports.projectMemberCreate = projectMemberCreate;
exports.projectsMoreFetchData = projectsMoreFetchData;
exports.projectCreate = projectCreate;
exports.projectChange = projectChange;
exports.projectDelete = projectDelete;

var _load = __webpack_require__(12);

var _users = __webpack_require__(3);

var _project = __webpack_require__(37);

var LOAD_PROJECTS = exports.LOAD_PROJECTS = 'LOAD_PROJECTS';
var LOAD_PROJECTS_SUCCESS = exports.LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
var LOAD_PROJECTS_ERROR = exports.LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR';
var LOAD_PROJECTS_MORE = exports.LOAD_PROJECTS_MORE = 'LOAD_PROJECTS_MORE';
var LOAD_PROJECT = exports.LOAD_PROJECT = 'LOAD_PROJECT';
var LOAD_PROJECT_SUCCESS = exports.LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
var LOAD_PROJECT_ERROR = exports.LOAD_PROJECT_ERROR = 'LOAD_PROJECT_ERROR';
var LOAD_PROJECT_MEMBERS = exports.LOAD_PROJECT_MEMBERS = 'LOAD_PROJECT_MEMBERS';
var LOAD_PROJECT_MEMBERS_SUCCESS = exports.LOAD_PROJECT_MEMBERS_SUCCESS = 'LOAD_PROJECT_MEMBERS_SUCCESS';
var LOAD_PROJECT_MEMBERS_ERROR = exports.LOAD_PROJECT_MEMBERS_ERROR = 'LOAD_PROJECT_MEMBERS_ERROR';
var LOAD_PROJECT_MEMBER = exports.LOAD_PROJECT_MEMBER = 'LOAD_PROJECT_MEMBER';
var LOAD_PROJECT_MEMBER_SUCCESS = exports.LOAD_PROJECT_MEMBER_SUCCESS = 'LOAD_PROJECT_MEMBER_SUCCESS';
var LOAD_PROJECT_MEMBER_ERROR = exports.LOAD_PROJECT_MEMBER_ERROR = 'LOAD_PROJECT_MEMBER_ERROR';
var PROJECT_MEMBERS_PAGINATE = exports.PROJECT_MEMBERS_PAGINATE = 'PROJECT_MEMBERS_PAGINATE';
var LOAD_NEW_PROJECT = exports.LOAD_NEW_PROJECT = 'LOAD_NEW_PROJECT';
var LOAD_NEW_PROJECT_SUCCESS = exports.LOAD_NEW_PROJECT_SUCCESS = 'LOAD_NEW_PROJECT_SUCCESS';
var LOAD_NEW_PROJECT_ERROR = exports.LOAD_NEW_PROJECT_ERROR = 'LOAD_NEW_PROJECT_ERROR';
var PROJECTS_PAGINATE = exports.PROJECTS_PAGINATE = 'PROJECTS_PAGINATE';
var PROJECT_DELETE_SUCCESS = exports.PROJECT_DELETE_SUCCESS = 'PROJECT_DELETE_SUCCESS';
var PROJECT_DELETE_ERROR = exports.PROJECT_DELETE_ERROR = 'PROJECT_DELETE_ERROR';

function projectsFetchData(url) {
    var types = [LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS, LOAD_PROJECTS_ERROR, PROJECTS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _project.projectsNormalize, false);
}

function projectMembersFetchData(url) {
    var types = [LOAD_PROJECT_MEMBERS, LOAD_PROJECT_MEMBERS_SUCCESS, LOAD_PROJECT_MEMBERS_ERROR, PROJECT_MEMBERS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _project.projectMembersNormalize, false);
}

function projectMemberCreate(url, project, user_id, role) {
    var types = [LOAD_PROJECT_MEMBER, LOAD_PROJECT_MEMBER_SUCCESS, LOAD_PROJECT_MEMBER_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ project: project, user_id: user_id, role: role }), _project.projectMemberNormalize, true);
}

function projectsMoreFetchData(url) {
    var types = [LOAD_PROJECTS, LOAD_PROJECTS_MORE, LOAD_PROJECTS_ERROR, PROJECTS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _project.projectsNormalize, false);
}

function projectCreate(url, name) {
    var types = [LOAD_PROJECT, LOAD_PROJECT_SUCCESS, LOAD_PROJECT_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ name: name }), _project.projectNormalize, true);
}

function projectChange(url, name) {
    var types = [LOAD_NEW_PROJECT, LOAD_NEW_PROJECT_SUCCESS, LOAD_NEW_PROJECT_ERROR];
    return (0, _load.apiLoad)(url, 'PUT', types, JSON.stringify({ name: name }), _project.projectNormalize, true);
}

function projectDelete(url, id) {
    var types = [PROJECT_DELETE_SUCCESS, PROJECT_DELETE_ERROR];
    return (0, _load.FetchDelete)(url, types, id);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taskUrl = exports.taskUrl = "http://138.197.187.175" + '/api/tasks/?ordering=-created_at';
var projectUrl = exports.projectUrl = "http://138.197.187.175" + '/api/projects/?ordering=-created_at';
var commentUrl = exports.commentUrl = '/api/comment/?ordering=-created_at';
var usersUrl = exports.usersUrl = '/api/users/';
var count = exports.count = 10;
var taskSort = exports.taskSort = '?project=';
var page = exports.page = 'page=';
var absoluteUrl = exports.absoluteUrl = 'http://138.197.187.175';
var projectMemberUrl = exports.projectMemberUrl = "http://138.197.187.175" + '/api/projectMember/?project=';

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux-api-middleware");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-addons-update");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _users = __webpack_require__(3);

var _propTypes = __webpack_require__(54);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalComponent = exports.ModalComponent = function (_React$Component) {
    _inherits(ModalComponent, _React$Component);

    function ModalComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ModalComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = function () {
            _this.props.openModal(!_this.props.isOpen);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ModalComponent, [{
        key: 'render',
        value: function render() {
            if (!this.props.isOpen) {
                return null;
            }
            return _react2.default.createElement(
                'div',
                { className: 'b-modal_container' },
                _react2.default.createElement(
                    'div',
                    { className: 'b-modal' },
                    _react2.default.createElement(
                        'button',
                        { onClick: this.onClose },
                        '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                    ),
                    this.props.children
                )
            );
        }
    }]);

    return ModalComponent;
}(_react2.default.Component);

ModalComponent.propTypes = {
    isOpen: _propTypes2.default.bool,
    openModal: _propTypes2.default.func.isRequired
};


ModalComponent.propTypes = {};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isOpen: state.users.isModalOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        openModal: _users.openModal
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ModalComponent);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FetchDelete = FetchDelete;
exports.FetchData = FetchData;
exports.apiLoad = apiLoad;

var _reactCookies = __webpack_require__(32);

var _reactCookies2 = _interopRequireDefault(_reactCookies);

var _reduxApiMiddleware = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loadres(bool, type) {
    return {
        type: type,
        isLoading: bool
    };
}

function loadSuccess(apiResponse, normilizer, type, id) {
    var result = normilizer(apiResponse);
    return {
        type: type,
        result: result,
        id: id
    };
}

function loadError(type, id) {
    return {
        type: type,
        id: id
    };
}

function loadpaginate(result, type) {
    return {
        type: type,
        result: result
    };
}

function loaddelete(type, id, idOld) {
    return {
        type: type,
        id: id,
        idOld: idOld
    };
}

function FetchDelete(url, types, id, idOld) {
    var token = null;
    if (localStorage.hasOwnProperty("token")) {
        token = "Token " + localStorage["token"];
    }
    return function (dispatch) {
        fetch(url, {
            credentials: "include",
            method: 'delete',
            headers: {
                "Authorization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(loaddelete(types[0], id, idOld));
            return response;
        }).catch(function () {
            return dispatch(loadError(types[1], id));
        }).catch(console.log);
    };
}

function FetchData(url, types, normilizer, method, data, model, id) {
    var token = null;
    if (localStorage.hasOwnProperty("token")) {
        token = "Token " + localStorage["token"];
    }
    var headers = null;
    if (model === 'multi') {
        headers = {
            "Authorization": token,
            'Accept': 'html/text; q=1.0, */*'
        };
    } else {
        headers = {
            "Authorization": token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }
    var body = null;
    if (method === 'post' || method === 'put' || method === 'patch') {
        console.log(data);
        body = data;
    }
    // console.log(types);
    console.log(headers);
    return function (dispatch) {
        fetch(url, {
            credentials: "include",
            method: method,
            headers: headers,
            body: body
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(loadres(false, types[0]));
            return response;
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (model === 'simple' || model === 'multi') {
                dispatch(loadSuccess(data, normilizer, types[1], id));
            } else {
                dispatch(loadSuccess(data.results, normilizer, types[1], id));
            }
            return data;
        }).then(function (data) {
            if (method === 'get' && model !== 'simple') {
                dispatch(loadpaginate(data.count, types[3]));
            }
        }).catch(function () {
            return dispatch(loadError(types[2], id));
        }).catch(console.log);
    };
}

function apiLoad(url, method, types, body, normalizer, isSimple) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'same-origin',
        endpoint: url,
        headers: { 'Content-Type': 'application/json' },
        method: method,
        body: body,
        types: [types[0], {
            type: types[1],
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    if (isSimple) return normalizer(json);else return normalizer(json.results, json.count);
                });
            }
        }, types[2]]
    });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrivateRoute = exports.fakeAuth = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRouterDom = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fakeAuth = exports.fakeAuth = {
    // isAuthenticated: localStorage.hasOwnProperty("token"),
    authenticate: function authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout: function signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        rest = _objectWithoutProperties(_ref, ['component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return undefined.props.isLogin ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: '/login/',
                    state: { from: props.location }
                } });
        } }));
};

exports.PrivateRoute = PrivateRoute;

var LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            login: '',
            password: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.login = function () {
            _this.props.login('/api/token-auth/', _this.state.login, _this.state.password);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginComponent, [{
        key: 'render',
        value: function render() {
            // const { from } = this.props.location.state || { from: { pathname: '/' } };
            // if (this.props.isLogin) {
            //     return (
            //         <Redirect to={from}/>
            //     )
            // }

            return _react2.default.createElement(
                'div',
                { className: 'login' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041B\u043E\u0433\u0438\u043D'
                ),
                _react2.default.createElement('input', { name: 'login', onChange: this.onChange }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041F\u0430\u0440\u043E\u043B\u044C'
                ),
                _react2.default.createElement('input', { name: 'password', onChange: this.onChange, type: 'password' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.login },
                    '\u0412\u043E\u0439\u0442\u0438'
                ),
                this.props.isFalied ? _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C!'
                ) : null
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLogin: state.users.isLogin,
        isFalied: state.users.isFalied
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        login: _users.login,
        logout: _users.logout
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(LoginComponent);

// class LoginComponent extends React.Component {
//     state = {
//         username: '',
//         password: '',
//     }
//
//     submitForm(e) {
//         e.preventDefault()
//         const data = new FormData();
//         data.append('username', this.state.username);
//         data.append('password', this.state.password);
//         fetch('/api/token-auth/', {method: 'POST', body: data}).then((data) => {
//             console.log(data);
//             if (data.status >= 200 && data.status < 300){
//                 return data.json()
//             } else {
//                 return Promise.resolve({error: true})
//             }
//         }).then((json) => {
//             if (json.error && json.status === 'ok'){
//                 console.log('auth-success')
//             }
//         })
//
//     }
//
//     render() {
//         if (this.props.isLoading) {
//             return <div className="b-task-list">Загрузка...</div>;
//         }
//
//         return (
//             <div className="b-task-list">
//                 <form onSubmit={ (e) => this.submitForm(e) }>
//                     <div>
//                         <label
//                             htmlFor="username"
//                         >
//                             username
//                         </label>
//                         <input
//                             name="username"
//                             id='username'
//                             value={ this.state.username }
//                             onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
//                         />
//                     </div>
//                     <div>
//                         <label
//                             htmlFor="password"
//                         >
//                             password
//                         </label>
//                         <input
//                             id="password"
//                             name="password"
//                             type="password"
//                             value={ this.state.password }
//                             onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
//                         />
//                     </div>
//                     <button>сохранить</button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default LoginComponent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COMMENT_DELETE_ERROR = exports.COMMENT_DELETE_SUCCESS = exports.COMMENTS_PAGINATE = exports.LOAD_COMMENT = exports.LOAD_COMMENT_ERROR = exports.LOAD_COMMENT_SUCCESS = exports.LOAD_COMMENTS = exports.LOAD_COMMENTS_ERROR = exports.LOAD_COMMENTS_SUCCESS = undefined;
exports.commentsFetchData = commentsFetchData;
exports.commentCreate = commentCreate;
exports.commentDelete = commentDelete;

var _comments = __webpack_require__(39);

var _load = __webpack_require__(12);

var LOAD_COMMENTS_SUCCESS = exports.LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
var LOAD_COMMENTS_ERROR = exports.LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
var LOAD_COMMENTS = exports.LOAD_COMMENTS = 'LOAD_COMMENTS';
var LOAD_COMMENT_SUCCESS = exports.LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
var LOAD_COMMENT_ERROR = exports.LOAD_COMMENT_ERROR = 'LOAD_COMMENT_ERROR';
var LOAD_COMMENT = exports.LOAD_COMMENT = 'LOAD_COMMENT';
var COMMENTS_PAGINATE = exports.COMMENTS_PAGINATE = 'COMMENTS_PAGINATE';
var COMMENT_DELETE_SUCCESS = exports.COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS';
var COMMENT_DELETE_ERROR = exports.COMMENT_DELETE_ERROR = 'COMMENT_DELETE_ERROR';

function commentsFetchData(url) {
    var types = [LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR, COMMENTS_PAGINATE];
    return (0, _load.apiLoad)(url, 'GET', types, null, _comments.commentsNormalize, false);
}

function commentCreate(url, text, task) {
    var types = [LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_ERROR];
    return (0, _load.apiLoad)(url, 'POST', types, JSON.stringify({ text: text, task: task }), _comments.commentNormalize, true);
}

function commentDelete(url, id) {
    var types = [COMMENT_DELETE_SUCCESS, COMMENT_DELETE_ERROR];
    return (0, _load.FetchDelete)(url, types, id);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SET_SSR_FLAG = exports.SET_SSR_FLAG = 'SET_SSR_FLAG';

var serverFlag = exports.serverFlag = function serverFlag() {
    return {
        type: SET_SSR_FLAG
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _users = __webpack_require__(3);

var _project = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectChangeComponent = function (_React$Component) {
    _inherits(ProjectChangeComponent, _React$Component);

    function ProjectChangeComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectChangeComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectChangeComponent.__proto__ || Object.getPrototypeOf(ProjectChangeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: _this.props.name
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.projectChange('/api/projects/' + _this.props.id + '/', _this.state.name);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectChangeComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    value: this.state.name,
                    name: 'name',
                    onChange: this.onChange
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
                )
            );
        }
    }]);

    return ProjectChangeComponent;
}(_react2.default.Component);

ProjectChangeComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        name: state.project.projects[props.id].name
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        projectChange: _project.projectChange
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectChangeComponent);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _reducers = __webpack_require__(29);

var _reducers2 = _interopRequireDefault(_reducers);

var _middleware = __webpack_require__(41);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function jsonEscape(str) {
    return str.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
}

function initStore() {
    var additionalMiddlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var initialStore = {};
    if (false) {
        initialStore = JSON.parse(jsonEscape(window.__REDUX__SERVER__STORE__));
    }
    var enhancerList = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(additionalMiddlewares).concat(_toConsumableArray(_middleware2.default)))];
    if (typeof window !== 'undefined') {
        if (window.__REDUX_DEVTOOLS_EXTENSION__()) {
            enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
        }
    }
    var enhancers = _redux.compose.apply(undefined, enhancerList);
    return (0, _redux.createStore)(_reducers2.default, initialStore, enhancers);
}

exports.default = initStore;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logoutMiddleware = undefined;

var _users = __webpack_require__(3);

var _reduxApiMiddleware = __webpack_require__(8);

var logoutMiddleware = exports.logoutMiddleware = function logoutMiddleware(token) {
    return function (store) {
        return function (next) {
            return function (action) {
                if (action.type === _users.LOGOUT_START) {
                    action[_reduxApiMiddleware.CALL_API]['headers'] = { 'Authorization': 'token ' + token };
                }
                return next(action);
            };
        };
    };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(6);

var _tasks = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskComponent = function (_React$Component) {
    _inherits(TaskComponent, _React$Component);

    function TaskComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TaskComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TaskComponent.__proto__ || Object.getPrototypeOf(TaskComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onDelete = function (e) {
            _this.props.taskDelete("/api/tasks/" + _this.props.id + '/', _this.props.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TaskComponent, [{
        key: 'render',
        value: function render() {
            var status = null;
            switch (this.props.status) {
                case 1:
                    status = "New";
                    break;
                case 2:
                    status = "Waiting";
                    break;
                case 3:
                    status = "Complete";
                    break;
            }
            var link = "/task/" + this.props.id + '/';
            return _react2.default.createElement(
                'div',
                { className: 'flex-block' },
                _react2.default.createElement('img', { className: 'delete', src: '/static/img/close.png', onClick: this.onDelete }),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: link },
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.props.text
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.description.substring(0, 20),
                    '...'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.created_at.substring(0, 10),
                    '  ',
                    status
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-short' },
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                )
            );
        }
    }]);

    return TaskComponent;
}(_react2.default.Component);

TaskComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        text: state.tasks.tasks[props.id].text,
        description: state.tasks.tasks[props.id].description,
        status: state.tasks.tasks[props.id].status,
        created_at: state.tasks.tasks[props.id].created_at,
        first_name: state.tasks.tasks[props.id].assign_to !== null ? state.users.users[state.tasks.tasks[props.id].assign_to].first_name : null,
        last_name: state.tasks.tasks[props.id].assign_to !== null ? state.users.users[state.tasks.tasks[props.id].assign_to].last_name : null
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        taskDelete: _tasks.taskDelete
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(TaskComponent);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

var _constants = __webpack_require__(7);

var _project = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MembersAddComponent = function (_React$Component) {
    _inherits(MembersAddComponent, _React$Component);

    function MembersAddComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MembersAddComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MembersAddComponent.__proto__ || Object.getPrototypeOf(MembersAddComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeUser = function (e) {
            _this.setState({ user: e.target.value });
        }, _this.onChangeRole = function (e) {
            _this.setState({ role: e.target.value });
        }, _this.onCreate = function (e) {
            _this.props.projectMemberCreate('/api/projectMember/', _this.props.id, _this.state.user, _this.state.role);
            _this.props.openModal(!_this.props.isOpen);
        }, _this.state = {
            user: 1,
            role: 1
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MembersAddComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.usersFetchData('/api/users/');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.usersUnMount();
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (this.props.count !== nextProps.count) {
                for (var i = 2; i <= nextProps.count / _constants.count + 1; i++) {
                    this.props.usersFetchData(_constants.usersUrl + '?' + _constants.page + i);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var select = [];
            if (this.props.isLoading) {
                select = this.props.userList.map(function (userId) {
                    return _react2.default.createElement(
                        'option',
                        { key: userId, value: userId },
                        _this2.props.users[userId].first_name,
                        ' ',
                        _this2.props.users[userId].last_name
                    );
                });
            }
            return _react2.default.createElement(
                'div',
                null,
                !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : _react2.default.createElement(
                    'select',
                    { value: this.state.user, onChange: this.onChangeUser },
                    select
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'select',
                    { onChange: this.onChangeRole, value: this.state.role },
                    _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '\u041C\u0430\u0441\u0442\u0435\u0440'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
                )
            );
        }
    }]);

    return MembersAddComponent;
}(_react2.default.Component);

MembersAddComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        count: state.users.count,
        isLoading: state.users.isLoading,
        userList: state.users.userList,
        users: state.users.users,
        isOpen: state.users.isModalOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        usersFetchData: _users.usersFetchData,
        projectMemberCreate: _project.projectMemberCreate,
        openModal: _users.openModal,
        usersUnMount: _users.usersUnMount
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(MembersAddComponent);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _comments = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentCreateComponent = function (_React$Component) {
    _inherits(CommentCreateComponent, _React$Component);

    function CommentCreateComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommentCreateComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentCreateComponent.__proto__ || Object.getPrototypeOf(CommentCreateComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            text: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.commentCreate('/api/comment/', _this.state.text, _this.props.id);
            _this.setState({ name: '' });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommentCreateComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flex-block create' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439'
                ),
                _react2.default.createElement('input', { name: 'text', onChange: this.onChange }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                )
            );
        }
    }]);

    return CommentCreateComponent;
}(_react2.default.Component);

CommentCreateComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        commentCreate: _comments.commentCreate
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(CommentCreateComponent);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(69);
    var insertCss = __webpack_require__(71);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
        content = require("!!../../node_modules/css-loader/index.js!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(25);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _template = __webpack_require__(27);

var _template2 = _interopRequireDefault(_template);

var _reactRouter = __webpack_require__(28);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(17);

var _store2 = _interopRequireDefault(_store);

var _headerMiddleware = __webpack_require__(44);

__webpack_require__(45);

var _App = __webpack_require__(46);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(23);

var _logoutMiddleware = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expressproxy = __webpack_require__(74);
// require('es6-promise').polyfill();

var cookieParser = __webpack_require__(75);
var path = __webpack_require__(76);
var serveStatic = __webpack_require__(77);


var app = (0, _express2.default)();

var apiURL = 'http://138.197.187.175/';

app.use(cookieParser());
app.use('/static', serveStatic('static'));

app.post('/api/token-auth/', expressproxy(apiURL, {
    userResDecorator: function userResDecorator(proxyRes, proxyResData, userReq, userRes) {
        if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300) {
            var data = JSON.parse(proxyResData.toString('utf8'));
            userRes.cookie('token', data.token, { httpOnly: true });
            return JSON.stringify({ status: 'ok' });
        }
        return proxyResData;
    }
}));

app.all('/logout/', function (req, res, next) {
    var key = req.cookies.token;
    if (key) {
        res.clearCookie("token");
    }
    next();
});

app.all('/api/*', function (req, res, next) {
    var key = req.cookies.token;
    if (key) {
        req.headers['Authorization'] = 'token ' + key;
    }
    next();
});

app.all('/api/*', expressproxy(apiURL));

app.get('*', function (req, res) {
    console.log(req.headers.referer);
    console.log(req.url);
    var store = (0, _store2.default)([(0, _headerMiddleware.headerMiddleware)(req.cookies.token)]);
    var context = {};
    var resultServer = function resultServer(value) {
        console.log(value);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                console.log("ITEM", item);
                if ((!item.payload || item.error || item.payload.status === 401) && req.url !== '/login/') {
                    res.redirect('/login/');
                    return;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var resultText = (0, _server.renderToString)((0, _react.createElement)(_reactRedux.Provider, { store: store }, (0, _react.createElement)(_reactRouter.StaticRouter, { location: req.url, context: context }, _react2.default.createElement(_App2.default, { server: false }))));
        var storeString = JSON.stringify(store.getState());

        res.send((0, _template2.default)({
            body: resultText,
            title: 'FROM THE SERVER',
            store: storeString
        }));
    };
    var promises = [];
    var addToPromises = function addToPromises(promis) {
        console.log("ADDD", promis);
        promises.push(promis);
    };
    (0, _server.renderToString)((0, _react.createElement)(_reactRedux.Provider, { store: store }, (0, _react.createElement)(_reactRouter.StaticRouter, { location: req.url, context: context }, _react2.default.createElement(_App2.default, { server: true, addToPromises: addToPromises }))));
    console.log("PROMISSE", promises);
    return Promise.all(promises).then(function (value) {
        return resultServer(value);
    });
});

var port = 3000;
app.listen(port);
console.log('Listening on port ' + port);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      store = _ref.store;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n        <script>\n          window.__REDUX__SERVER__STORE__ = '" + store + "'\n          </script>\n      </head>\n      <body>\n        <div id=\"root\">" + body + "</div>\n        <script src=\"/static/build/indexBundle.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(30);

var _users = __webpack_require__(31);

var _users2 = _interopRequireDefault(_users);

var _tasks = __webpack_require__(35);

var _tasks2 = _interopRequireDefault(_tasks);

var _project = __webpack_require__(36);

var _project2 = _interopRequireDefault(_project);

var _comments = __webpack_require__(38);

var _comments2 = _interopRequireDefault(_comments);

var _SSR = __webpack_require__(40);

var _SSR2 = _interopRequireDefault(_SSR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    routerReducer: _reactRouterRedux.routerReducer,
    users: _users2.default,
    tasks: _tasks2.default,
    project: _project2.default,
    comments: _comments2.default,
    SSR: _SSR2.default
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = users;

var _reactAddonsUpdate = __webpack_require__(9);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _users = __webpack_require__(3);

var _Login = __webpack_require__(13);

var _tasks = __webpack_require__(4);

var _serverFlag = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inititalStore = {
    isLogin: true,
    isFalied: false,
    users: {},
    userList: [],
    user: null,
    isLoading: false,
    isModalOpen: false,
    modalValue: null,
    count: 0
};

function users() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalStore;
    var action = arguments[1];

    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('user')) {
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        users: {
                            $merge: action.payload.entities.user
                        }
                    });
                }
            }
            if (action.payload.hasOwnProperty('status')) {
                if (action.payload.status === 401) {
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        isLogin: {
                            $set: false
                        }
                    });
                }
            }
        }
    }
    switch (action.type) {
        case _users.MODAL_OPEN:
            if (action.modal !== undefined) {
                store = (0, _reactAddonsUpdate2.default)(store, {
                    modalValue: {
                        $set: action.modal
                    }
                });
            }
            return (0, _reactAddonsUpdate2.default)(store, {
                isModalOpen: {
                    $set: action.isOpen
                }
            });

        case _users.LOGIN_SUCCESS:
            // if(action.result.token !== undefined) {
            //     localStorage.setItem("token", action.result.token);
            //     fakeAuth.authenticate();
            return (0, _reactAddonsUpdate2.default)(store, {
                isLogin: {
                    $set: true
                },
                isFalied: {
                    $set: false
                }
            });
        // }
        // else {
        //     localStorage.removeItem("token");
        //     fakeAuth.signout();
        //     return update(store, {
        //         isLogin: {
        //             $set: false
        //         },
        //     })
        // }
        case _users.LOGIN_ERROR:
            // fakeAuth.signout();
            // localStorage.removeItem("token");
            return (0, _reactAddonsUpdate2.default)(store, {
                isLogin: {
                    $set: false
                },
                isFalied: {
                    $set: true
                }
            });
        case _users.REGISTRATION_ERROR:
            return (0, _reactAddonsUpdate2.default)(store, {
                isFalied: {
                    $set: true
                }
            });
        case _users.LOGOUT:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLogin: {
                    $set: false
                }
            });
        case _users.LOAD_USER:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: false
                }
            });
        case _users.LOAD_USER_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                user: {
                    $set: action.payload.result
                }
            });
        case _users.LOAD_USERS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: false
                }
            });
        case _users.LOAD_USERS_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                userList: {
                    $push: action.payload.result
                }
            });
        case _users.USERS_PAGINATE:
            return (0, _reactAddonsUpdate2.default)(store, {
                count: {
                    $set: action.result
                }
            });
        case _users.USERS_UNMOUNT:
            return (0, _reactAddonsUpdate2.default)(store, {
                userList: {
                    $set: []
                }
            });
        default:
            return store;
    }
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userNormalize = userNormalize;
exports.usersNormalize = usersNormalize;

var _normalizr = __webpack_require__(10);

function userNormalize(users) {
    var user = new _normalizr.schema.Entity('user');
    return (0, _normalizr.normalize)(users, user);
}

function usersNormalize(users) {
    var user = new _normalizr.schema.Entity('user');
    return (0, _normalizr.normalize)(users, [user]);
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tasksNormalize = tasksNormalize;
exports.taskNormalize = taskNormalize;

var _normalizr = __webpack_require__(10);

function tasksNormalize(tasks, count) {
    var user = new _normalizr.schema.Entity('user');
    var project = new _normalizr.schema.Entity('project', {
        'author': user
    });
    var task = new _normalizr.schema.Entity('task', {
        'author': user,
        'assign_to': user,
        'project': project
    });
    var result = (0, _normalizr.normalize)(tasks, [task]);
    result.count = count;
    return result;
}

function taskNormalize(tasks) {
    var user = new _normalizr.schema.Entity('user');
    var project = new _normalizr.schema.Entity('project', {
        'author': user
    });
    var task = new _normalizr.schema.Entity('task', {
        'author': user,
        'assign_to': user,
        'project': project
    });
    return (0, _normalizr.normalize)(tasks, task);
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tasks;

var _reactAddonsUpdate = __webpack_require__(9);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _tasks = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inititalStore = {
    isLoading: false,
    isProjectLoading: false,
    isTaskLoading: false,
    taskList: [],
    tasks: {},
    count: 0,
    page: 2
};

function tasks() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalStore;
    var action = arguments[1];

    console.log("REDUSER", action);
    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('task')) {
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        tasks: {
                            $merge: action.payload.entities.task
                        }
                    });
                }
            }
        }
    }
    var index = null;
    switch (action.type) {
        case _tasks.TASK_DELETE_SUCCESS:
            index = store.taskList.indexOf(action.id);
            return (0, _reactAddonsUpdate2.default)(store, {
                taskList: {
                    $splice: [[index, 1]]
                }
            });
        case _tasks.LOAD_TASKS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                isProjectLoading: {
                    $set: false
                }
            });
        case _tasks.LOAD_TASKS_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                taskList: {
                    $set: action.payload.result
                },
                isProjectLoading: {
                    $set: true
                },
                count: {
                    $set: action.payload.count
                }
            });
        case _tasks.LOAD_TASKS_MORE:
            return (0, _reactAddonsUpdate2.default)(store, {
                taskList: {
                    $push: action.payload.result
                },
                page: {
                    $set: store.page + 1
                },
                isProjectLoading: {
                    $set: true
                }
            });
        case _tasks.LOAD_TASK:
            return (0, _reactAddonsUpdate2.default)(store, {
                isTaskLoading: {
                    $set: false
                }
            });
        case _tasks.LOAD_TASK_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                taskList: {
                    $unshift: [action.payload.result]
                },
                isTaskLoading: {
                    $set: true
                }
            });
        case _tasks.TASKS_PAGINATE:
            return (0, _reactAddonsUpdate2.default)(store, {
                count: {
                    $set: action.payload
                }
            });
        default:
            return store;
    }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = project;

var _reactAddonsUpdate = __webpack_require__(9);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _project = __webpack_require__(5);

var _immutable = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inititalIMStore = (0, _immutable.fromJS)((0, _immutable.Map)({
    isLoading: false,
    projectList: (0, _immutable.List)([]),
    projects: (0, _immutable.Map)({})
}));

var inititalStore = {
    isLoading: false,
    projectList: [],
    projects: {},
    count: 0,
    page: 2,
    members: {},
    membersList: {},
    isMembersLoading: false,
    memberCount: 0
};

function project() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalStore;
    var action = arguments[1];

    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('project')) {
                    // store = store.updateIn(['projects'], project => project.merge(action.result.entities.project));
                    // store.projects = store.projects.merge(store.projects, action.result.entities.project);
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        projects: {
                            $merge: action.payload.entities.project
                        }
                    });
                }
                if (action.payload.entities.hasOwnProperty('projectMember')) {
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        members: {
                            $merge: action.payload.entities.projectMember
                        }
                    });
                }
            }
        }
    }
    var index = null;
    switch (action.type) {
        case _project.PROJECT_DELETE_SUCCESS:
            index = store.projectList.indexOf(action.id);
            return (0, _reactAddonsUpdate2.default)(store, {
                projectList: {
                    $splice: [[index, 1]]
                }
            });
        case _project.LOAD_PROJECTS:
            // return store.set('isLoading', true);
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                }
            });
        case _project.PROJECTS_PAGINATE:
            return (0, _reactAddonsUpdate2.default)(store, {
                count: {
                    $set: action.result
                }
            });
        case _project.LOAD_PROJECTS_SUCCESS:
            // return store.set('isLoading', true).set('projectList', action.result.result);
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                projectList: {
                    $set: action.payload.result
                },
                count: {
                    $set: action.payload.count
                }
            });
        case _project.LOAD_PROJECT_SUCCESS:
            // return store.push('projectList', [action.result.result]);
            return (0, _reactAddonsUpdate2.default)(store, {
                projectList: {
                    $unshift: [action.payload.result]
                }
            });
        case _project.LOAD_PROJECTS_MORE:
            return (0, _reactAddonsUpdate2.default)(store, {
                projectList: {
                    $push: action.payload.result
                },
                page: {
                    $set: store.page + 1
                }
            });
        case _project.LOAD_PROJECT_MEMBERS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isMembersLoading: {
                    $set: false
                }
            });
        case _project.LOAD_PROJECT_MEMBER_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                membersList: {
                    $push: [action.payload.result]
                },
                memberCount: {
                    $set: store.memberCount + 1
                }
            });
        case _project.LOAD_PROJECT_MEMBERS_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isMembersLoading: {
                    $set: true
                },
                membersList: {
                    $set: action.payload.result
                },
                memberCount: {
                    $set: action.payload.count
                }
            });
        case _project.PROJECT_MEMBERS_PAGINATE:
            return (0, _reactAddonsUpdate2.default)(store, {
                memberCount: {
                    $set: action.result
                }
            });
        default:
            return store;
    }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.projectsNormalize = projectsNormalize;
exports.projectNormalize = projectNormalize;
exports.projectMembersNormalize = projectMembersNormalize;
exports.projectMemberNormalize = projectMemberNormalize;

var _normalizr = __webpack_require__(10);

function projectsNormalize(projects, count) {
    var user = new _normalizr.schema.Entity('user');
    var project = new _normalizr.schema.Entity('project', {
        'author': user
    });
    var result = (0, _normalizr.normalize)(projects, [project]);
    result.count = count;
    return result;
}

function projectNormalize(projects) {
    var user = new _normalizr.schema.Entity('user');
    var project = new _normalizr.schema.Entity('project', {
        'author': user
    });
    return (0, _normalizr.normalize)(projects, project);
}

function projectMembersNormalize(projectMembers, count) {
    var user = new _normalizr.schema.Entity('user');
    var projectMember = new _normalizr.schema.Entity('projectMember', {
        'user': user
    });
    var result = (0, _normalizr.normalize)(projectMembers, [projectMember]);
    result.count = count;
    return result;
}
function projectMemberNormalize(projectMembers) {
    var user = new _normalizr.schema.Entity('user');
    var projectMember = new _normalizr.schema.Entity('projectMember', {
        'user': user
    });
    return (0, _normalizr.normalize)(projectMembers, projectMember);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = comments;

var _reactAddonsUpdate = __webpack_require__(9);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _comments = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inititalStore = {
    isLoading: false,
    commentList: [],
    comments: {}
};

function comments() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalStore;
    var action = arguments[1];

    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('comment')) {
                    store = (0, _reactAddonsUpdate2.default)(store, {
                        comments: {
                            $merge: action.payload.entities.comment
                        }
                    });
                }
            }
        }
    }
    var index = null;
    switch (action.type) {
        case _comments.LOAD_COMMENTS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: false
                }
            });
        case _comments.LOAD_COMMENTS_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                isLoading: {
                    $set: true
                },
                commentList: {
                    $set: action.payload.result
                }
            });
        case _comments.LOAD_COMMENT_SUCCESS:
            return (0, _reactAddonsUpdate2.default)(store, {
                commentList: {
                    $push: [action.payload.result]
                }
            });
        case _comments.COMMENT_DELETE_SUCCESS:
            index = store.commentList.indexOf(action.id);
            return (0, _reactAddonsUpdate2.default)(store, {
                commentList: {
                    $splice: [[index, 1]]
                }
            });
        default:
            return store;
    }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commentsNormalize = commentsNormalize;
exports.commentNormalize = commentNormalize;

var _normalizr = __webpack_require__(10);

function commentsNormalize(comments) {
    var user = new _normalizr.schema.Entity('user');
    var comment = new _normalizr.schema.Entity('comment', {
        'author': user
    });
    return (0, _normalizr.normalize)(comments, [comment]);
}

function commentNormalize(comments) {
    var user = new _normalizr.schema.Entity('user');
    var comment = new _normalizr.schema.Entity('comment', {
        'author': user
    });
    return (0, _normalizr.normalize)(comments, comment);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SSR;

var _reactAddonsUpdate = __webpack_require__(9);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _serverFlag = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function SSR() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (true) {
        newStore = {
            serverRendering: true
        };
    }
    switch (action.type) {
        case _serverFlag.SET_SSR_FLAG:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    serverRendering: { $set: false }
                });
            }
        default:
            return newStore;
    }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logger2 = undefined;

var _logger = __webpack_require__(42);

var _reduxApiMiddleware = __webpack_require__(8);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _logoutMiddleware = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger2 = exports.logger2 = function logger2(store) {
    return function (next) {
        return function (action) {
            console.log('dispatching2', action);
            var result = next(action);
            // console.log('next state', store.getState(result));
            return result;
        };
    };
};

exports.default = [_logger.logger, _reduxThunk2.default, _reduxApiMiddleware.apiMiddleware];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var logger = exports.logger = function logger(store) {
    return function (next) {
        return function (action) {
            console.log('dispatching', action);
            var result = next(action);
            // console.log('next state', store.getState(result));
            return result;
        };
    };
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.headerMiddleware = undefined;

var _reduxApiMiddleware = __webpack_require__(8);

var _users = __webpack_require__(3);

// создаем функцию принимающую токе и возвращающую мидлварь, что бы добавлять Authorisation хедер к нащим
// запросам от сервера
var headerMiddleware = exports.headerMiddleware = function headerMiddleware(token) {
    return function (store) {
        return function (next) {
            return function (action) {
                if ((0, _reduxApiMiddleware.isRSAA)(action)) {
                    action[_reduxApiMiddleware.CALL_API]['headers'] = { 'Authorization': 'token ' + token };
                }
                return next(action);
            };
        };
    };
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(6);

var _Login = __webpack_require__(13);

var _Login2 = _interopRequireDefault(_Login);

var _Projects = __webpack_require__(47);

var _Projects2 = _interopRequireDefault(_Projects);

var _OwnProject = __webpack_require__(51);

var _OwnProject2 = _interopRequireDefault(_OwnProject);

var _store = __webpack_require__(17);

var _store2 = _interopRequireDefault(_store);

var _SelfRoom = __webpack_require__(57);

var _SelfRoom2 = _interopRequireDefault(_SelfRoom);

var _Tasks = __webpack_require__(60);

var _Tasks2 = _interopRequireDefault(_Tasks);

var _OwnTask = __webpack_require__(61);

var _OwnTask2 = _interopRequireDefault(_OwnTask);

var _Registration = __webpack_require__(66);

var _Registration2 = _interopRequireDefault(_Registration);

var _Layout = __webpack_require__(67);

var _Layout2 = _interopRequireDefault(_Layout);

__webpack_require__(23);

var _serverFlag = __webpack_require__(15);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';


var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.serverFlag();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Layout2.default,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/',
                        render: function render(props) {
                            return _react2.default.createElement(_Projects2.default, _extends({}, props, {
                                addToPromises: _this2.props.addToPromises
                            }));
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        exact: true,
                        path: '/project/:id/',
                        render: function render(props) {
                            return _this2.props.isLogin ? _react2.default.createElement(_OwnProject2.default, _extends({}, props, {
                                server: _this2.props.server,
                                addToPromises: _this2.props.addToPromises
                            })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                                    pathname: '/login/',
                                    state: { from: props.location }
                                } });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/projects/',
                        render: function render(props) {
                            return _this2.props.isLogin ? _react2.default.createElement(_Projects2.default, _extends({}, props, {
                                server: _this2.props.server,
                                addToPromises: _this2.props.addToPromises
                            })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                                    pathname: '/login/',
                                    state: { from: props.location }
                                } });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/self_room/',
                        render: function render(props) {
                            return _this2.props.isLogin ? _react2.default.createElement(_SelfRoom2.default, _extends({}, props, {
                                server: _this2.props.server,
                                addToPromises: _this2.props.addToPromises
                            })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                                    pathname: '/login/',
                                    state: { from: props.location }
                                } });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/tasks/',
                        exact: true,
                        render: function render(props) {
                            return _this2.props.isLogin ? _react2.default.createElement(_Tasks2.default, _extends({}, props, {
                                server: _this2.props.server,
                                addToPromises: _this2.props.addToPromises
                            })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                                    pathname: '/login/',
                                    state: { from: props.location }
                                } });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/task/:id/',
                        exact: true,
                        render: function render(props) {
                            return _this2.props.isLogin ? _react2.default.createElement(_OwnTask2.default, _extends({}, props, {
                                server: _this2.props.server,
                                addToPromises: _this2.props.addToPromises
                            })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                                    pathname: '/login/',
                                    state: { from: props.location }
                                } });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/login/', component: _Login2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/registration/', component: _Registration2.default })
                )
            );
        }
    }]);

    return AppComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLogin: state.users.isLogin
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({ serverFlag: _serverFlag.serverFlag }, dispatch));
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(AppComponent));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _project = __webpack_require__(5);

var _Project = __webpack_require__(48);

var _Project2 = _interopRequireDefault(_Project);

var _ProjectCreate = __webpack_require__(49);

var _ProjectCreate2 = _interopRequireDefault(_ProjectCreate);

var _toJs = __webpack_require__(50);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router-dom';


var ProjectsComponent = function (_React$Component) {
    _inherits(ProjectsComponent, _React$Component);

    function ProjectsComponent(props) {
        _classCallCheck(this, ProjectsComponent);

        var _this = _possibleConstructorReturn(this, (ProjectsComponent.__proto__ || Object.getPrototypeOf(ProjectsComponent)).call(this, props));

        _this.onLoadMore = function (e) {
            _this.props.projectsMoreFetchData(_constants.projectUrl + '&&' + _constants.page + _this.props.page);
        };

        if (true) {
            console.log('ADDTO_PROMISE');
            _this.props.addToPromises(_this.props.projectsFetchData(_constants.projectUrl));
        }
        return _this;
    }

    _createClass(ProjectsComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.isServerRendering) {
                this.props.projectsFetchData(_constants.projectUrl);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var projectList = [];
            console.log(this.props.isLoading);
            if (this.props.isLoading) {
                projectList = this.props.projectList.map(function (projectId) {
                    return _react2.default.createElement(_Project2.default, { key: projectId, id: projectId });
                });
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'flex-container' },
                    !this.props.isLoading ? null : _react2.default.createElement(_ProjectCreate2.default, null),
                    !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : projectList,
                    this.props.isLoading && this.props.count > _constants.count * (this.props.page - 1) ? _react2.default.createElement(
                        'div',
                        { className: 'flex-block' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.onLoadMore },
                            '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435'
                        )
                    ) : null
                )
            );
        }
    }], [{
        key: 'staticRender',
        value: function staticRender(store) {
            store.dispatch((0, _project.projectsFetchData)(_constants.projectUrl));
        }
    }]);

    return ProjectsComponent;
}(_react2.default.Component);

ProjectsComponent.defaultProps = {
    addToPromises: function addToPromises() {}
};


ProjectsComponent.propTypes = {
    addToPromises: _react2.default.PropTypes.func
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.project.isLoading,
        projects: state.project.projects,
        projectList: state.project.projectList,
        count: state.project.count,
        page: state.project.page,
        isServerRendering: state.SSR.serverRendering
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        projectsFetchData: _project.projectsFetchData,
        projectsMoreFetchData: _project.projectsMoreFetchData
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectsComponent);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _project = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectComponent = function (_React$Component) {
    _inherits(ProjectComponent, _React$Component);

    function ProjectComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectComponent.__proto__ || Object.getPrototypeOf(ProjectComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onDelete = function (e) {
            _this.props.projectDelete("/api/projects/" + _this.props.id + '/', _this.props.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectComponent, [{
        key: 'render',
        value: function render() {
            var link = "/project/" + this.props.id + '/';
            return _react2.default.createElement(
                'div',
                { className: 'flex-block' },
                _react2.default.createElement('img', { className: 'delete', src: '/static/img/close.png', onClick: this.onDelete }),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: link },
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.props.name
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.created_at.substring(0, 10)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-short' },
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                )
            );
        }
    }]);

    return ProjectComponent;
}(_react2.default.Component);

ProjectComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        name: state.project.projects[props.id].name,
        created_at: state.project.projects[props.id].created_at,
        first_name: state.users.users[state.project.projects[props.id].author].first_name,
        last_name: state.users.users[state.project.projects[props.id].author].last_name
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        projectDelete: _project.projectDelete
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectComponent);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _project = __webpack_require__(5);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectCreateComponent = function (_React$Component) {
    _inherits(ProjectCreateComponent, _React$Component);

    function ProjectCreateComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectCreateComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectCreateComponent.__proto__ || Object.getPrototypeOf(ProjectCreateComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.projectCreate(_constants.projectUrl, _this.state.name);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectCreateComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flex-block create' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
                ),
                _react2.default.createElement('input', { name: 'name', onChange: this.onChange }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                )
            );
        }
    }]);

    return ProjectCreateComponent;
}(_react2.default.Component);

ProjectCreateComponent.propTypes = {};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        projectCreate: _project.projectCreate
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectCreateComponent);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toJS = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _immutable = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toJS = exports.toJS = function toJS(WrappedComponent) {
    return function (wrappedComponentProps) {
        var KEY = 0;
        var VALUE = 1;

        var propsJS = Object.entries(wrappedComponentProps).reduce(function (newProps, wrappedComponentProp) {
            newProps[wrappedComponentProp[KEY]] = _immutable.Iterable.isIterable(wrappedComponentProp[VALUE]) ? wrappedComponentProp[VALUE].toJS() : wrappedComponentProp[VALUE];
            return newProps;
        }, {});

        return _react2.default.createElement(WrappedComponent, propsJS);
    };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _Task = __webpack_require__(20);

var _Task2 = _interopRequireDefault(_Task);

var _TaskCreate = __webpack_require__(52);

var _TaskCreate2 = _interopRequireDefault(_TaskCreate);

var _ProjectPage = __webpack_require__(53);

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

var _constants = __webpack_require__(7);

var _ProjectMembers = __webpack_require__(55);

var _ProjectMembers2 = _interopRequireDefault(_ProjectMembers);

var _Modal = __webpack_require__(11);

var _Modal2 = _interopRequireDefault(_Modal);

var _MembersAdd = __webpack_require__(21);

var _MembersAdd2 = _interopRequireDefault(_MembersAdd);

var _ProjectChange = __webpack_require__(16);

var _ProjectChange2 = _interopRequireDefault(_ProjectChange);

var _project = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OwnProjectComponent = function (_React$Component) {
    _inherits(OwnProjectComponent, _React$Component);

    function OwnProjectComponent(props) {
        _classCallCheck(this, OwnProjectComponent);

        var _this = _possibleConstructorReturn(this, (OwnProjectComponent.__proto__ || Object.getPrototypeOf(OwnProjectComponent)).call(this, props));

        _this.onLoadMore = function (e) {
            _this.props.taskMoreFetchData(_constants.taskUrl + _constants.taskSort + _this.props.match.params.id + '&' + _constants.page + _this.props.page);
        };

        if (true) {
            _this.props.addToPromises(_this.props.projectFetchDate(_constants.taskUrl + _constants.taskSort + _this.props.match.params.id));
            _this.props.addToPromises(_this.props.projectMembersFetchData(_constants.projectMemberUrl + _this.props.match.params.id));
        }
        return _this;
    }

    _createClass(OwnProjectComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.isServerRendering) {
                this.props.projectFetchDate(_constants.taskUrl + _constants.taskSort + this.props.match.params.id);
                this.props.addToPromises(this.props.projectMembersFetchData(_constants.projectMemberUrl + this.props.match.params.id));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var taskList = [];
            var project = null;
            var modal = null;
            if (this.props.isLoading) {
                taskList = this.props.taskList.map(function (taskId) {
                    return _react2.default.createElement(_Task2.default, { key: taskId, id: taskId });
                });
                project = _react2.default.createElement(_ProjectPage2.default, { id: parseInt(this.props.match.params.id) });
            }
            switch (this.props.modal) {
                case "members":
                    modal = _react2.default.createElement(_MembersAdd2.default, { id: parseInt(this.props.match.params.id) });
                    break;
                case "change":
                    modal = _react2.default.createElement(_ProjectChange2.default, { id: parseInt(this.props.match.params.id) });
                    break;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    !this.props.isLoading ? null : project
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'flex-container' },
                    !this.props.isLoading ? null : _react2.default.createElement(_ProjectMembers2.default, {
                        id: parseInt(this.props.match.params.id)
                    }),
                    !this.props.isLoading ? null : _react2.default.createElement(_TaskCreate2.default, { id: parseInt(this.props.match.params.id) }),
                    !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : taskList,
                    this.props.isLoading && this.props.count > _constants.count * (this.props.page - 1) ? _react2.default.createElement(
                        'div',
                        { className: 'flex-block' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.onLoadMore },
                            '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435'
                        )
                    ) : null
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    null,
                    modal
                )
            );
        }
    }]);

    return OwnProjectComponent;
}(_react2.default.Component);

OwnProjectComponent.defaultProps = {
    addToPromises: function addToPromises() {}
};


OwnProjectComponent.propTypes = {
    addToPromises: _react2.default.PropTypes.func
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.tasks.isLoading,
        tasks: state.tasks.tasks,
        taskList: state.tasks.taskList,
        count: state.tasks.count,
        page: state.tasks.page,
        modal: state.users.modalValue,
        isServerRendering: state.SSR.serverRendering
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        projectFetchDate: _tasks.projectFetchDate,
        taskMoreFetchData: _tasks.taskMoreFetchData,
        projectMembersFetchData: _project.projectMembersFetchData
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(OwnProjectComponent);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskCreateComponent = function (_React$Component) {
    _inherits(TaskCreateComponent, _React$Component);

    function TaskCreateComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TaskCreateComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TaskCreateComponent.__proto__ || Object.getPrototypeOf(TaskCreateComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            text: '',
            description: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.taskCreate('/api/tasks/', _this.state.text, _this.state.description, _this.props.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TaskCreateComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flex-block create' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
                ),
                _react2.default.createElement('input', { name: 'text', onChange: this.onChange }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
                ),
                _react2.default.createElement('input', { name: 'description', onChange: this.onChange }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                )
            );
        }
    }]);

    return TaskCreateComponent;
}(_react2.default.Component);

TaskCreateComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        taskCreate: _tasks.taskCreate
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(TaskCreateComponent);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _Modal = __webpack_require__(11);

var _Modal2 = _interopRequireDefault(_Modal);

var _users = __webpack_require__(3);

var _ProjectChange = __webpack_require__(16);

var _ProjectChange2 = _interopRequireDefault(_ProjectChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPageComponent = function (_React$Component) {
    _inherits(ProjectPageComponent, _React$Component);

    function ProjectPageComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectPageComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectPageComponent.__proto__ || Object.getPrototypeOf(ProjectPageComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_open_name: false,
            name: _this.props.name
        }, _this.onOpen = function (e) {
            _this.props.openModal(!_this.props.isOpen, "change");
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectPageComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'title-block' },
                _react2.default.createElement(
                    'h3',
                    null,
                    this.props.name,
                    _react2.default.createElement('img', { name: 'name', className: 'delete', src: '/static/img/light_check.png', onClick: this.onOpen })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.created_at
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-short' },
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                )
            );
        }
    }]);

    return ProjectPageComponent;
}(_react2.default.Component);

ProjectPageComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        name: state.tasks.isProjectLoading ? state.project.projects[props.id].name : null,
        created_at: state.tasks.isProjectLoading ? state.project.projects[props.id].created_at.substring(0, 10) : null,
        first_name: state.tasks.isProjectLoading ? state.users.users[state.project.projects[props.id].author].first_name : null,
        last_name: state.tasks.isProjectLoading ? state.users.users[state.project.projects[props.id].author].last_name : null,
        isOpen: state.users.isModalOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        openModal: _users.openModal
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectPageComponent);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(6);

var _tasks = __webpack_require__(4);

var _project = __webpack_require__(5);

var _Member = __webpack_require__(56);

var _Member2 = _interopRequireDefault(_Member);

var _users = __webpack_require__(3);

var _MembersAdd = __webpack_require__(21);

var _MembersAdd2 = _interopRequireDefault(_MembersAdd);

var _Modal = __webpack_require__(11);

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectMembersComponent = function (_React$Component) {
    _inherits(ProjectMembersComponent, _React$Component);

    function ProjectMembersComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectMembersComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectMembersComponent.__proto__ || Object.getPrototypeOf(ProjectMembersComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onOpen = function (e) {
            _this.props.openModal(!_this.props.isOpen, "members");
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectMembersComponent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var membersList = [];
            if (this.props.isLoading) {
                membersList = this.props.membersList.filter(function (memberId) {
                    return _this2.props.membersList.indexOf(memberId) < 4;
                }).map(function (memberId) {
                    return _react2.default.createElement(_Member2.default, { key: memberId, id: memberId });
                });
            }
            return _react2.default.createElement(
                'div',
                { className: 'flex-block' },
                !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : membersList,
                this.props.membersList.length > 4 ? _react2.default.createElement(
                    'p',
                    null,
                    '\u0418 \u0435\u0449\u0435 ',
                    this.props.memberCount - 4,
                    _react2.default.createElement(
                        'button',
                        { className: 'add', onClick: this.onOpen },
                        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
                    )
                ) : _react2.default.createElement(
                    'button',
                    { className: 'add', onClick: this.onOpen },
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
                )
            );
        }
    }]);

    return ProjectMembersComponent;
}(_react2.default.Component);

ProjectMembersComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.project.isMembersLoading,
        members: state.project.members,
        membersList: state.project.membersList,
        isOpen: state.users.isModalOpen,
        memberCount: state.project.memberCount
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        openModal: _users.openModal
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectMembersComponent);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(6);

var _tasks = __webpack_require__(4);

var _project = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MembersComponent = function (_React$Component) {
    _inherits(MembersComponent, _React$Component);

    function MembersComponent() {
        _classCallCheck(this, MembersComponent);

        return _possibleConstructorReturn(this, (MembersComponent.__proto__ || Object.getPrototypeOf(MembersComponent)).apply(this, arguments));
    }

    _createClass(MembersComponent, [{
        key: 'render',
        value: function render() {
            var img = null;
            switch (this.props.role) {
                case 1:
                    img = _react2.default.createElement('img', { className: 'role', src: '/static/img/master.png' });
                    break;
                case 2:
                    img = _react2.default.createElement('img', { className: 'role', src: '/static/img/developer.png' });
                    break;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    img,
                    ' ',
                    this.props.first_name,
                    '  ',
                    this.props.last_name
                )
            );
        }
    }]);

    return MembersComponent;
}(_react2.default.Component);

MembersComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        role: state.project.members[props.id].role,
        first_name: state.users.users[state.project.members[props.id].user].first_name,
        last_name: state.users.users[state.project.members[props.id].user].last_name
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({}, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(MembersComponent);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

var _Profile = __webpack_require__(58);

var _Profile2 = _interopRequireDefault(_Profile);

var _Modal = __webpack_require__(11);

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileChange = __webpack_require__(59);

var _ProfileChange2 = _interopRequireDefault(_ProfileChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelfRoomComponent = function (_React$Component) {
    _inherits(SelfRoomComponent, _React$Component);

    function SelfRoomComponent() {
        _classCallCheck(this, SelfRoomComponent);

        return _possibleConstructorReturn(this, (SelfRoomComponent.__proto__ || Object.getPrototypeOf(SelfRoomComponent)).apply(this, arguments));
    }

    _createClass(SelfRoomComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.current('/api/users/current/');
        }
    }, {
        key: 'render',
        value: function render() {
            var profile = null;
            if (this.props.isLoading) {
                profile = _react2.default.createElement(_Profile2.default, null);
            }
            return _react2.default.createElement(
                'div',
                null,
                !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : profile,
                _react2.default.createElement(
                    _Modal2.default,
                    null,
                    _react2.default.createElement(_ProfileChange2.default, null)
                )
            );
        }
    }]);

    return SelfRoomComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.users.isLoading
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        current: _users.current
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(SelfRoomComponent);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileComponent = function (_React$Component) {
    _inherits(ProfileComponent, _React$Component);

    function ProfileComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProfileComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileComponent.__proto__ || Object.getPrototypeOf(ProfileComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onOpen = function () {
            _this.props.openModal(!_this.props.isOpen);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProfileComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'login' },
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                ),
                _react2.default.createElement('img', { className: 'avatar', src: this.props.avatar }),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.email
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onOpen },
                    '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
                )
            );
        }
    }]);

    return ProfileComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        avatar: state.users.users[state.users.user].avatar,
        last_name: state.users.users[state.users.user].last_name,
        first_name: state.users.users[state.users.user].first_name,
        email: state.users.users[state.users.user].email,
        isOpen: state.users.isOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        openModal: _users.openModal
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProfileComponent);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileChangeComponent = function (_React$Component) {
    _inherits(ProfileChangeComponent, _React$Component);

    function ProfileChangeComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProfileChangeComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileChangeComponent.__proto__ || Object.getPrototypeOf(ProfileChangeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            first_name: _this.props.first_name,
            last_name: _this.props.last_name,
            email: _this.props.email,
            avatar: null
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            e.preventDefault();
            _this.props.userChange(_constants.usersUrl + _this.props.user + '/', _this.props.username, _this.state.first_name, _this.state.last_name, _this.state.email, _this.state.avatar);
        }, _this.getFile = function (e) {
            console.log(e.target.files[0]);
            _this.setState({ avatar: e.target.files[0] });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProfileChangeComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { action: '.', encType: 'multipart/form-data' },
                    _react2.default.createElement('input', {
                        value: this.state.first_name,
                        name: 'first_name',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                        value: this.state.last_name,
                        name: 'last_name',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                        value: this.state.email,
                        name: 'email',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                        type: 'file',
                        onChange: this.getFile
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.onCreate },
                        '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
                    )
                )
            );
        }
    }]);

    return ProfileChangeComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        username: state.users.users[state.users.user].username,
        first_name: state.users.users[state.users.user].first_name,
        last_name: state.users.users[state.users.user].last_name,
        email: state.users.users[state.users.user].email,
        avatar: state.users.users[state.users.user].avatar,
        user: state.users.user
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        userChange: _users.userChange
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProfileChangeComponent);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _Task = __webpack_require__(20);

var _Task2 = _interopRequireDefault(_Task);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TasksComponent = function (_React$Component) {
    _inherits(TasksComponent, _React$Component);

    function TasksComponent(props) {
        _classCallCheck(this, TasksComponent);

        var _this = _possibleConstructorReturn(this, (TasksComponent.__proto__ || Object.getPrototypeOf(TasksComponent)).call(this, props));

        _this.redirect = function () {
            _this.props.history.push('/login/');
        };

        if (true) {
            console.log('ADDTO_PROMISE');
            _this.props.addToPromises(_this.props.taskFetchData(_constants.taskUrl));
        }
        return _this;
    }

    _createClass(TasksComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.isServerRendering) {
                this.props.taskFetchData(_constants.taskUrl);
                if (!this.props.isLogin) {
                    this.redirect();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var taskList = [];
            if (this.props.isLoading) {
                taskList = this.props.taskList.map(function (taskId) {
                    return _react2.default.createElement(_Task2.default, { key: taskId, id: taskId });
                });
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'flex-container' },
                    !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : taskList
                )
            );
        }
    }], [{
        key: 'staticRender',
        value: function staticRender(store) {
            store.dispatch((0, _tasks.taskFetchData)(_constants.taskUrl));
        }
    }]);

    return TasksComponent;
}(_react2.default.Component);

TasksComponent.defaultProps = {
    addToPromises: function addToPromises() {}
};


TasksComponent.propTypes = {
    server: _react2.default.PropTypes.bool,
    addToPromises: _react2.default.PropTypes.func
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isServerRendering: state.SSR.serverRendering,
        isLoading: state.tasks.isLoading,
        tasks: state.tasks.tasks,
        taskList: state.tasks.taskList,
        isLogin: state.users.isLogin
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        taskFetchData: _tasks.taskFetchData
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(TasksComponent);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _TaskPage = __webpack_require__(62);

var _TaskPage2 = _interopRequireDefault(_TaskPage);

var _comments = __webpack_require__(14);

var _CommentCreate = __webpack_require__(22);

var _CommentCreate2 = _interopRequireDefault(_CommentCreate);

var _CommentList = __webpack_require__(64);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OwnProjectComponent = function (_React$Component) {
    _inherits(OwnProjectComponent, _React$Component);

    function OwnProjectComponent(props) {
        _classCallCheck(this, OwnProjectComponent);

        var _this = _possibleConstructorReturn(this, (OwnProjectComponent.__proto__ || Object.getPrototypeOf(OwnProjectComponent)).call(this, props));

        if (true) {
            _this.props.addToPromises(_this.props.ownTaskFetchData(_constants.absoluteUrl + '/api/tasks/' + _this.props.match.params.id + '/'));
            _this.props.addToPromises(_this.props.commentsFetchData(_constants.absoluteUrl + '/api/comment/?task=' + _this.props.match.params.id));
        }
        return _this;
    }

    _createClass(OwnProjectComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.isServerRendering) {
                this.props.ownTaskFetchData('/api/tasks/' + this.props.match.params.id + '/');
                this.props.commentsFetchData('/api/comment/?task=' + this.props.match.params.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var task = null;
            if (this.props.isLoading) {
                task = _react2.default.createElement(_TaskPage2.default, { id: parseInt(this.props.match.params.id) });
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-block' },
                        !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : task
                    )
                ),
                _react2.default.createElement(_CommentList2.default, { id: parseInt(this.props.match.params.id) })
            );
        }
    }]);

    return OwnProjectComponent;
}(_react2.default.Component);

OwnProjectComponent.defaultProps = {
    addToPromises: function addToPromises() {}
};


OwnProjectComponent.propTypes = {
    addToPromises: _react2.default.PropTypes.func
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.tasks.isTaskLoading,
        tasks: state.tasks.tasks,
        taskList: state.tasks.taskList,
        isServerRendering: state.SSR.serverRendering
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        ownTaskFetchData: _tasks.ownTaskFetchData,
        commentsFetchData: _comments.commentsFetchData
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(OwnProjectComponent);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _Modal = __webpack_require__(11);

var _Modal2 = _interopRequireDefault(_Modal);

var _users = __webpack_require__(3);

var _ProjectChange = __webpack_require__(16);

var _ProjectChange2 = _interopRequireDefault(_ProjectChange);

var _TaskChange = __webpack_require__(63);

var _TaskChange2 = _interopRequireDefault(_TaskChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskPageComponent = function (_React$Component) {
    _inherits(TaskPageComponent, _React$Component);

    function TaskPageComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TaskPageComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TaskPageComponent.__proto__ || Object.getPrototypeOf(TaskPageComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_open_name: false,
            name: _this.props.name
        }, _this.onOpen = function (e) {
            _this.props.openModal(!_this.props.isOpen);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TaskPageComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    this.props.text,
                    _react2.default.createElement('img', { name: 'name', className: 'delete', src: '/static/img/light_check.png', onClick: this.onOpen })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    ' ',
                    this.props.description
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.created_at
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-short' },
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    null,
                    _react2.default.createElement(_TaskChange2.default, { id: this.props.id })
                )
            );
        }
    }]);

    return TaskPageComponent;
}(_react2.default.Component);

TaskPageComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        text: state.tasks.tasks[props.id].text,
        description: state.tasks.tasks[props.id].description,
        created_at: state.tasks.tasks[props.id].created_at.substring(0, 10),
        first_name: state.users.users[state.tasks.tasks[props.id].author].first_name,
        last_name: state.users.users[state.tasks.tasks[props.id].author].last_name,
        isOpen: state.users.isModalOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        openModal: _users.openModal
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(TaskPageComponent);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _tasks = __webpack_require__(4);

var _users = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectChangeComponent = function (_React$Component) {
    _inherits(ProjectChangeComponent, _React$Component);

    function ProjectChangeComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectChangeComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectChangeComponent.__proto__ || Object.getPrototypeOf(ProjectChangeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            text: _this.props.text,
            description: _this.props.description
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.taskChange('/api/tasks/' + _this.props.id + '/', _this.state.text, _this.state.description, _this.props.project_id);
        }, _this.onOpen = function (e) {
            _this.props.openModal(!_this.props.isOpen);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectChangeComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    _react2.default.createElement('input', {
                        value: this.state.text,
                        name: 'text',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('textarea', {
                        value: this.state.description,
                        name: 'description',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.onCreate },
                        '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
                    )
                )
            );
        }
    }]);

    return ProjectChangeComponent;
}(_react2.default.Component);

ProjectChangeComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        text: state.tasks.tasks[props.id].text,
        description: state.tasks.tasks[props.id].description,
        project_id: state.tasks.tasks[props.id].project,
        isOpen: state.users.isModalOpen
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        taskChange: _tasks.taskChange,
        openModal: _users.openModal

    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(ProjectChangeComponent);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _Comment = __webpack_require__(65);

var _Comment2 = _interopRequireDefault(_Comment);

var _CommentCreate = __webpack_require__(22);

var _CommentCreate2 = _interopRequireDefault(_CommentCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentListComponent = function (_React$Component) {
    _inherits(CommentListComponent, _React$Component);

    function CommentListComponent() {
        _classCallCheck(this, CommentListComponent);

        return _possibleConstructorReturn(this, (CommentListComponent.__proto__ || Object.getPrototypeOf(CommentListComponent)).apply(this, arguments));
    }

    _createClass(CommentListComponent, [{
        key: 'render',
        value: function render() {
            var commentList = [];
            if (this.props.isLoading) {
                commentList = this.props.commentList.map(function (commentId) {
                    return _react2.default.createElement(_Comment2.default, { key: commentId, id: commentId });
                });
            }
            return _react2.default.createElement(
                'div',
                { className: 'flex-container' },
                !this.props.isLoading ? null : _react2.default.createElement(_CommentCreate2.default, { id: this.props.id }),
                !this.props.isLoading ? _react2.default.createElement('div', { className: 'loading' }) : commentList
            );
        }
    }]);

    return CommentListComponent;
}(_react2.default.Component);

CommentListComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLoading: state.comments.isLoading,
        comments: state.comments.comments,
        commentList: state.comments.commentList
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({}, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(CommentListComponent);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _comments = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentComponent = function (_React$Component) {
    _inherits(CommentComponent, _React$Component);

    function CommentComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommentComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentComponent.__proto__ || Object.getPrototypeOf(CommentComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onDelete = function (e) {
            _this.props.commentDelete("/api/comment/" + _this.props.id + '/', _this.props.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommentComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flex-block' },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.text
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.created_at.substring(0, 10)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-short' },
                    this.props.first_name,
                    ' ',
                    this.props.last_name
                )
            );
        }
    }]);

    return CommentComponent;
}(_react2.default.Component);

CommentComponent.propTypes = {
    id: _react2.default.PropTypes.number.isRequired
};

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        text: state.comments.comments[props.id].text,
        created_at: state.comments.comments[props.id].created_at,
        first_name: state.users.users[state.comments.comments[props.id].author].first_name,
        last_name: state.users.users[state.comments.comments[props.id].author].last_name
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        commentDelete: _comments.commentDelete
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(CommentComponent);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationComponent = function (_React$Component) {
    _inherits(RegistrationComponent, _React$Component);

    function RegistrationComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RegistrationComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegistrationComponent.__proto__ || Object.getPrototypeOf(RegistrationComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            login: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onCreate = function (e) {
            _this.props.registration('/api/users/', _this.state.login, _this.state.password, _this.state.email, _this.state.first_name, _this.state.last_name);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RegistrationComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'registration' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041B\u043E\u0433\u0438\u043D'
                ),
                _react2.default.createElement('input', { name: 'login', onChange: this.onChange, required: true }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u0435\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0438'
                ),
                _react2.default.createElement('input', { name: 'email', onChange: this.onChange }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u0418\u043C\u044F'
                ),
                _react2.default.createElement('input', { name: 'first_name', onChange: this.onChange }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u0424\u0430\u043C\u0438\u043B\u0438\u044F'
                ),
                _react2.default.createElement('input', { name: 'last_name', onChange: this.onChange }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041F\u0430\u0440\u043E\u043B\u044C'
                ),
                _react2.default.createElement('input', { name: 'password', onChange: this.onChange, type: 'password' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onCreate },
                    '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F'
                ),
                this.props.isFalied ? _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445!'
                ) : null
            );
        }
    }]);

    return RegistrationComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isFalied: state.users.isFalied
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        registration: _users.registration
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(RegistrationComponent);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _Logout = __webpack_require__(68);

var _Logout2 = _interopRequireDefault(_Logout);

var _Login = __webpack_require__(13);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_React$Component) {
    _inherits(LayoutComponent, _React$Component);

    function LayoutComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LayoutComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
            // this.props.history.push('/login/');
            _this.props.logout();
            // let url = '/logout/';
            // fetch(url, {
            //     method: 'GET',
            //     body: null,
            // });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LayoutComponent, [{
        key: 'render',
        value: function render() {
            var self_data = null;
            var auth = null;
            if (this.props.isLogin) {
                self_data = _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/self_room/' },
                    _react2.default.createElement(
                        'button',
                        null,
                        '\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442'
                    )
                );
                auth = _react2.default.createElement(
                    'button',
                    { onClick: this.logout },
                    '\u0412\u044B\u0439\u0442\u0438'
                );
            } else {
                self_data = _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/registration/' },
                    _react2.default.createElement(
                        'button',
                        null,
                        '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F'
                    )
                );
                auth = _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login/' },
                    _react2.default.createElement(
                        'button',
                        null,
                        '\u0412\u043E\u0439\u0442\u0438'
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'layout' },
                    self_data,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/projects/' },
                        _react2.default.createElement(
                            'button',
                            null,
                            '\u041C\u043E\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B'
                        )
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/tasks/' },
                        _react2.default.createElement(
                            'button',
                            null,
                            '\u041C\u043E\u0438 \u0442\u0430\u0441\u043A\u0438'
                        )
                    ),
                    auth
                ),
                this.props.children
            );
        }
    }]);

    return LayoutComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLogin: state.users.isLogin
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        logout: _users.logout
    }, dispatch));
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)(LayoutComponent));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _users = __webpack_require__(3);

var _Login = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutComponent = function (_React$Component) {
    _inherits(LogoutComponent, _React$Component);

    function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);

        return _possibleConstructorReturn(this, (LogoutComponent.__proto__ || Object.getPrototypeOf(LogoutComponent)).apply(this, arguments));
    }

    _createClass(LogoutComponent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var auth = null;
            if (_Login.fakeAuth.isAuthenticated) {
                auth = _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.props.logout();
                            _Login.fakeAuth.signout(function () {
                                return _this2.props.history.push('/');
                            });
                        } },
                    '\u0412\u044B\u0439\u0442\u0438'
                );
            } else {
                auth = _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login/' },
                    _react2.default.createElement(
                        'button',
                        null,
                        '\u0412\u043E\u0439\u0442\u0438'
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                auth
            );
        }
    }]);

    return LogoutComponent;
}(_react2.default.Component);

var mapStoreToProps = function mapStoreToProps(state, props) {
    return {
        isLogin: state.users.isLogin
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)({
        logout: _users.logout
    }, dispatch));
};

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(LogoutComponent));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(undefined);
// imports


// module
exports.push([module.i, "body{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: AliceBlue no-repeat center center fixed;\r\n    margin: 0;\r\n    font-family: Verdana, serif;\r\n}\r\n.layout{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 50px;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n}\r\n.layout button{\r\n    background-color: Navy;\r\n    color: AliceBlue;\r\n    border: 1px solid AliceBlue;\r\n    padding: 5px;\r\n    border-radius: 1px;\r\n}\r\n.login{\r\n    margin-top: 100px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 10px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.registration{\r\n    margin-top: 100px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n    width: 400px;\r\n    height: 450px;\r\n    padding: 10px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\nbutton {\r\n    background-color: Navy;\r\n    color: AliceBlue;\r\n    border: 1px solid AliceBlue;\r\n    padding: 5px;\r\n    border-radius: 1px;\r\n    cursor: pointer;\r\n}\r\n.loading {\r\n    position: relative;\r\n    width: 0;\r\n    padding: 3%;  /* если задать в %, то будет рассчитываться от ширины родителя */\r\n    background:\r\n            linear-gradient(rgba(0,0,0,1) 30%, transparent 30%, transparent 70%, rgba(0,0,0,.4) 70%),\r\n            linear-gradient(to left, rgba(0,0,0,.2) 30%, transparent 30%, transparent 70%, rgba(0,0,0,.8) 70%);\r\n    background-repeat: no-repeat;\r\n    background-size: 10% 100%, 100% 10%;\r\n    background-position: 50% 0%, 0 50%;\r\n    -webkit-animation: loading .7s infinite steps(8);\r\n    animation: loading .7s infinite steps(8);\r\n}\r\n\r\n.loading:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image:\r\n            linear-gradient(rgba(0,0,0,.1) 30%, transparent 30%, transparent 70%, rgba(0,0,0,.5) 70%),\r\n            linear-gradient(to left, rgba(0,0,0,.3) 30%, transparent 30%, transparent 70%, rgba(0,0,0,.9) 70%);\r\n    background-repeat: no-repeat;\r\n    background-size: 10% 100%, 100% 10%;\r\n    background-position: 50% 0%, 0 50%;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n@-webkit-keyframes loading {\r\n    100% {-webkit-transform: rotate(1turn);}\r\n}\r\n\r\n@keyframes loading {\r\n    100% {transform: rotate(1turn);}\r\n}\r\n.title{\r\n    color: white;\r\n    margin: 10px;\r\n    text-align: center;\r\n}\r\n.title-block{\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    padding: 10px;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n    height: 120px;\r\n}\r\n.content-block{\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    padding: 10px;\r\n    padding-bottom: 50px;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n    min-height: 120px;\r\n}\r\n.flex-container{\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n.flex-block{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    width: 200px;\r\n    background-color: rgba(33, 37, 40, 0.8);\r\n    color: white;\r\n}\r\n.flex-block a{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.user-short{\r\n    float: right;\r\n}\r\n.create{\r\n    text-align: center;\r\n}\r\n.avatar{\r\n    height: 100px;\r\n}\r\n.delete{\r\n    width: 15px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n/*.b-modal_container {*/\r\n    /*position: fixed;*/\r\n    /*top: 0;*/\r\n    /*right: 0;*/\r\n    /*left: 0;*/\r\n    /*bottom: 0;*/\r\n    /*z-index: 2;*/\r\n    /*opacity: .8;*/\r\n    /*background: #212528;*/\r\n/*}*/\r\n\r\n/*.b-modal {*/\r\n    /*position: absolute;*/\r\n    /*top: 200px;*/\r\n    /*right: 200px;*/\r\n    /*left: 200px;*/\r\n    /*bottom: 200px;*/\r\n    /*background-color: black;*/\r\n    /*z-index: 3;*/\r\n/*}*/\r\n.b-modal {\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 250px;\r\n    left: 250px;\r\n    bottom: 100px;\r\n    overflow: hidden;\r\n    z-index: 2000;\r\n    padding: 0;\r\n    background: black;\r\n    text-align: center;\r\n}\r\n\r\n.b-modal_container {\r\n    background: #212528;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1000;\r\n    opacity: .9;\r\n}\r\n.role{\r\n    width: 20px;\r\n    float: left;\r\n}\r\n.add{\r\n    float: right;\r\n}", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(72);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(73);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ })
/******/ ]);