module.exports = function($routeProvider) {
    $routeProvider
        .when('/top', {
            templateUrl: 'html-components/top30.html',
            controller: 'top30'
        }).when('/search', {
            templateUrl: 'html-components/questionsSearch.html',
            controller: 'questionSearchController'
        }).when('/account', {
            templateUrl: 'html-components/account.html',
            controller: 'accountController'
        }).otherwise({
            redirectTo: '/questions'
        }).when('/about', {
            templateUrl: 'html-components/about.html',
            controller: 'aboutController'
        }).when('/createAccount', {
            templateUrl: 'html-components/createAccount.html',
            controller: 'createAccountController'
        }).when('/login', {
            templateUrl: 'html-components/login.html',
            controller: 'loginController'
        }).when('/ask', {
            templateUrl: 'html-components/ask-question-page.html' 
        }).otherwise({
            redirectTo: '/top'
        });
};
