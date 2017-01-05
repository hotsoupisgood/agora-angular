module.exports = function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/answer/:questionId', {
            templateUrl: 'html-components/answer-question-page.html',
            controller: 'submitResponseFormController'
        }).when('/tag/:tagId', {
            templateUrl: 'html-components/answer-question-page.html',
            controller: 'submitResponseFormController'
        }).when('/ask', {
            templateUrl: 'html-components/ask-question-page.html'
        }).when('/questions/:page', {
            templateUrl: 'html-components/top30.html',
            controller: 'questions'
        }).when('/search', {
            templateUrl: 'html-components/questionsSearch.html',
            controller: 'questionSearchController'
        }).when('/user/:username', {
            templateUrl: 'html-components/user.html',
            controller: 'userController'
        }).when('/about', {
            templateUrl: 'html-components/about.html',
            controller: 'aboutController'
        }).when('/createAccount', {
            templateUrl: 'html-components/createAccount.html',
            controller: 'createAccountController'
        }).when('/login', {
            templateUrl: 'html-components/login.html',
            controller: 'loginController'
        }).otherwise({
            redirectTo: '/questions/0'
        });
        // one day....
        // $locationProvider.html5Mode(true);
};
