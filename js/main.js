const angular = require('angular');
require('angular-route');
require('angular-cookies');
require('angular-toArrayFilter');
require('angular-animate');
//every app that needs user data has acess to $rootscope
//timeout required becuase we need to wait for ng-href
//in the header.html to trigger before we trigger the logout funtion
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'angular-toArrayFilter', 'ngCookies']);

//util
//config
agoraApp.config(['$routeProvider', '$locationProvider', require('./config/routing.js')]);
//services
agoraApp.service('getSingleQuestionService',               require('./services/getSingleQuestion.js'));
agoraApp.service('cookieService',                   require('./services/cookieUtil.js'));
agoraApp.service('scrollService',                   require('./services/scroll.js'));
agoraApp.service('submitResponseService',           require('./services/submitResponse.js'));
agoraApp.service('submitQuestionService',           require('./services/submitQuestion.js'));
agoraApp.service('questionsTopService',             require('./services/questionsTop.js'));
agoraApp.service('questionsSearchService',          require('./services/questionsSearch.js'));
agoraApp.service('accountService',                  require('./services/account.js'));
agoraApp.service('upVoteService',                   require('./services/upVote.js'));
agoraApp.service('loginService',                    require('./services/login.js'));
agoraApp.service('logoutService',                   require('./services/logout.js'));
agoraApp.service('createAccountService',            require('./services/createAccount.js'));

//controllers
agoraApp.controller('questionController',           require('./controllers/question.js'));
agoraApp.controller('mainController',               require('./controllers/main.js'));
agoraApp.controller('aboutController',              require('./controllers/about.js'));
agoraApp.controller('accountController',            require('./controllers/account.js'));
agoraApp.controller('createAccountController',      require('./controllers/createAccount.js'));
agoraApp.controller('checkUsernameController',      require('./controllers/checkUsername.js'));
agoraApp.controller('loginController',              require('./controllers/login.js'));
agoraApp.controller('loginFormController',          require('./controllers/loginForm.js'));
agoraApp.controller('questions',                    require('./controllers/questions.js'));
agoraApp.controller('pagerController',              require('./controllers/pager.js'));
agoraApp.controller('searchController',             require('./controllers/search.js'));
agoraApp.controller('submitQuestionFormController', require('./controllers/submit-question.js'));
agoraApp.controller('submitResponseFormController', require('./controllers/submit-response.js'));
agoraApp.controller('questionSearchController',     require('./controllers/questionsSearch.js'));
agoraApp.controller('headerController',             require('./controllers/header.js'));
