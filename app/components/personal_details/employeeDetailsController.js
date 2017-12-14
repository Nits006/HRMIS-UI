angularObj.controller('employeeDetailsController',function($scope, $location){
	
	$scope.isloggedIn = (localStorage.getItem('is_loggedin') != null && (typeof(localStorage.getItem('is_loggedin')) != 'undefined')?true:false);
    $scope.currentPage = $location.path();
    console.log($scope.currentPage);

});
