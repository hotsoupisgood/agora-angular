const angular = require('angular');
require('angular-ui-bootstrap')
// require('./node_modules/angular-route')
// require('angular-toArrayFilter')
//every app that needs user data has acess to $rootscope
//timeout required becuase we need to wait for ng-href
//in the header.html to trigger before we trigger the logout funtion
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-toArrayFilter', 'ngCookies']);
//util
//config
agoraApp.config(['$routeProvider',                  require('./config/routing.js')]);
//services
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
agoraApp.controller('aboutController',              require('./controllers/about.js'));
agoraApp.controller('accountController',            require('./controllers/account.js'));
agoraApp.controller('createAccountController',      require('./controllers/createAccount.js'));
agoraApp.controller('checkUsernameController',      require('./controllers/checkUsername.js'));
agoraApp.controller('loginController',              require('./controllers/login.js'));
agoraApp.controller('loginFormController',          require('./controllers/loginForm.js'));
agoraApp.controller('top30',                        require('./controllers/questions.js'));
agoraApp.controller('pagerController',              require('./controllers/pager.js'));
agoraApp.controller('searchController',             require('./controllers/search.js'));
agoraApp.controller('submitQuestionFormController', require('./controllers/submit-question.js'));
agoraApp.controller('submitResponseFormController', require('./controllers/submit-response.js'));
agoraApp.controller('questionSearchController',     require('./controllers/questionsSearch.js'));
agoraApp.controller('headerController',             require('./controllers/header.js'));