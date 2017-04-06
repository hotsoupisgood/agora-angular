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
        }).when('/delete/:id', {
            templateUrl: 'html-components/delete-question.html'
        }).when('/discover/:page', {
            templateUrl: 'html-components/discover.html',
            controller: 'questions'
        }).when('/question/:questionId', {
            templateUrl: 'html-components/question-full.html',
            controller: 'questionController'
        }).when('/search/:searchQuery', {
            templateUrl: 'html-components/search.html',
            controller: 'searchController'
        }).when('/search', {
            templateUrl: 'html-components/search.html',
            controller: 'searchController'
        }).when('/user/:username', {
            templateUrl: 'html-components/user.html',
            controller: 'userController'
        }).when('/about', {
            templateUrl: 'html-components/about.html',
            controller: 'aboutController'
        }).when('/login', {
            templateUrl: 'html-components/login.html'
        }).when('/edit/question/:id', {
            templateUrl: 'html-components/edit-question.html',
            controller: 'editQuestionController'
        }).otherwise({
            redirectTo: '/discover/0'
        });
};
