'use strict';

app.controller('loginCtrl', function($scope, loginService, $http){
	$scope.msgtxt='';
	$scope.login = function(user) {
		loginService.login(user, $scope); // call login service 
	};
});