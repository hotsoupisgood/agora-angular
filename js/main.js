const angular = require('angular');
require('angular-route');
require('angular-cookies');
require('angular-toArrayFilter');
require('angular-animate');
require('angular-sanitize');
require('angular-elastic');
var d3 = require("d3");
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'angular-toArrayFilter', 'ngCookies', 'ngSanitize','monospaced.elastic']);

//config
agoraApp.config(['$routeProvider', '$locationProvider', require('./config/routing.js')]);
//services
agoraApp.service('cookieService',                   require('./services/cookieUtil.js'));
agoraApp.service('editService',                     require('./services/edit.js'));
agoraApp.service('getQuestionService',              require('./services/getQuestion.js'));
agoraApp.service('getUserService',                  require('./services/getUser.js'));
agoraApp.service('submitCommentService',            require('./services/submitComment.js'));
agoraApp.service('submitQuestionService',           require('./services/submitQuestion.js'));
agoraApp.service('submitResponseService',           require('./services/submitResponse.js'));
agoraApp.service('submitUserService',               require('./services/submitUser.js'));
agoraApp.service('submitVoteService',               require('./services/submitVote.js'));
agoraApp.service('searchService',                   require('./services/search.js'));
agoraApp.service('loginService',                    require('./services/login.js'));
agoraApp.service('logoutService',                   require('./services/logout.js'));
agoraApp.service('removeService',                   require('./services/remove.js'));
agoraApp.service('animationService',                require('./services/animations.js'));

//dicrectives
// agoraApp.directive('suchHref',                      require('./directives/navigation.js'));

//controllers
agoraApp.controller('editQuestionController',       require('./controllers/edit-question.js'));
agoraApp.controller('responseController',           require('./controllers/response.js'));
agoraApp.controller('questionController',           require('./controllers/question.js'));
agoraApp.controller('commentsController',           require('./controllers/comments.js'));
agoraApp.controller('submitCommentController',      require('./controllers/submitComment.js'));
agoraApp.controller('submitQuestionFormController', require('./controllers/submitQuestion.js'));
agoraApp.controller('submitResponseFormController', require('./controllers/submitResponse.js'));
agoraApp.controller('mainController',               require('./controllers/main.js'));
agoraApp.controller('aboutController',              require('./controllers/about.js'));
agoraApp.controller('userController',               require('./controllers/user.js'));
agoraApp.controller('createAccountController',      require('./controllers/createAccount.js'));
agoraApp.controller('checkUsernameController',      require('./controllers/checkUsername.js'));
agoraApp.controller('loginFormController',          require('./controllers/loginForm.js'));
agoraApp.controller('questions',                    require('./controllers/questions.js'));
agoraApp.controller('searchController',             require('./controllers/search.js'));
agoraApp.controller('questionSearchController',     require('./controllers/questionsSearch.js'));
agoraApp.controller('headerController',             require('./controllers/header.js'));
