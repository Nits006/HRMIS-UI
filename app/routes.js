angularObj.config([ '$routeProvider', function($routeProvider)
{
    $routeProvider
    .when('/',
    {
       templateUrl : 'views/login.html',
       controller : 'appParentController'
    })
    .when('/overview',
    {
        templateUrl : 'views/dashboard.html',
        controller : 'employeeDetailsController'
    })
    .when('/admin',
    {
        templateUrl : 'admin.html'
    })
    .when('/editadmin',
    {
        templateUrl : 'admin.html'
    })
   .when('/development',
    {
        templateUrl : 'development.html'
    })
    .when('/editdevelopment',
    {
        templateUrl : 'development.html'
    })
    .otherwise({
        redirectTo : '/'
    });
}]);
