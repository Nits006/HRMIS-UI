angularObj.controller('loginController',function($scope, $location, $timeout){
    $scope.currentPage = $location.path();
    console.log($scope.currentPage);
    
    $scope.validateLogin = function(credentials){
        
        $("#loginBtn").button('loading');
        console.log(credentials);
        $timeout(callAtTimeout, 3000);
    }
    
    function callAtTimeout(){
        console.log('segegr');
        $location.path('/overview');
    }
});
