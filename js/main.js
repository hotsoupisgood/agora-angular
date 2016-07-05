const angular = require('angular');
require('angular-ui-bootstrap')
// require('./node_modules/angular-route')
// require('angular-toArrayFilter')
//every app that needs user data has acess to $rootscope
//timeout required becuase we need to wait for ng-href
//in the header.html to trigger before we trigger the logout funtion
//misc global vars
// var numIteratedPerPage = 15,
//     // account info
//     accountInfo = null,
//     isLoggedIn = false,
//     questionsAPage = 15,
//     totalQueriedQuestions = null,
//     minLengthOfUsernames = 4,
//     //debug usr account
//     usr = 'henry',
//     pass = 'fuck';
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-toArrayFilter', 'ngCookies']);
//util
//config
agoraApp.config(['$routeProvider',                  require('./config/routing.js')]);
//services
agoraApp.service('submitResponseService',           require('./services/submitResponse.js'));
//controllers
agoraApp.controller('aboutController',              require('./controllers/about.js'));
agoraApp.controller('accountController',            require('./controllers/account.js'));
agoraApp.controller('accountInfoController',        require('./controllers/accountInfo.js'));
agoraApp.controller('createAccountController',      require('./controllers/createAccount.js'));
agoraApp.controller('checkUsernameController',      require('./controllers/checkUsername.js'));
agoraApp.controller('loginController',              require('./controllers/login.js'));
agoraApp.controller('loginFormController',          require('./controllers/loginForm.js'));
agoraApp.controller('top30',                        require('./controllers/questions.js'));
agoraApp.controller('pagerController',              require('./controllers/pager.js'));
agoraApp.controller('searchController',             require('./controllers/search.js'));
agoraApp.controller('submitQuestionFormController', require('./controllers/submit-question.js'));
agoraApp.controller('submitResponseFormController', require('./controllers/submit-response.js'));
agoraApp.controller('headerController',             require('./controllers/header.js'));
