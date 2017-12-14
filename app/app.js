var angularObj = angular.module("hrimsApp", ["ngRoute", "jcs-autoValidate"]);

angularObj.controller('appParentController',function($scope, $location, $timeout){

    $scope.isloggedIn = (localStorage.getItem('is_loggedin') != null && (typeof(localStorage.getItem('is_loggedin')) != 'undefined')?true:false);
        // if($scope.isloggedIn){
        //     $location.path('/overview');
        //     window.location.reload();
        // }
    $scope.currentPage = $location.path();
    $scope.validateLogin = function(credentials){
        
        $("#loginBtn").button('loading');
        console.log(credentials);
        $timeout(callAtTimeout, 1500);
    }
    
    function callAtTimeout(){
        
        $scope.currentPage = '/overview';
        localStorage.setItem('is_loggedin', true);
        $scope.isloggedIn = true;
        $location.path('/overview');
        window.location.reload();
    }
});