var angularObj = angular.module("hrimsApp", ["ngRoute", "jcs-autoValidate"]);

angularObj.controller('appParentController',function($scope, $location, $timeout){

    $scope.currentPage = $location.path();
    $scope.validateLogin = function(credentials){
        
        $("#loginBtn").button('loading');
        console.log(credentials);
        $timeout(callAtTimeout, 3000);
    }
    
    function callAtTimeout(){
        
        $scope.currentPage = '/overview';
        $location.path('/overview');
    }
});