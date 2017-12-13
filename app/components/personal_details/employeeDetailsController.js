angularObj.controller('employeeDetailsController',function($scope, $location){
    
    $scope.currentPage = $location.path();
    console.log($scope.currentPage);
    
});
