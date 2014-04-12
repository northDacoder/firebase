'use strict';

app.factory('loginService', function($http){
	return {
		login:function(user, $scope){
			// var $promise=$http.post('data/user.php', user); // send data to user.php
			var $promise = new Firebase('https://angularauth.firebaseio.com/');
			var email = $('#exampleInputUser1').val();
			var pass = $('#exampleInputPassword1').val();
			console.log(email + "," + pass);
			$promise.push({email:email, pass:pass});
			$('#messageInput').val('');
			console.log(email + "," + pass); 
			$promise.then(function(msg){
				if (msg.data=='success') {
					$scope.msgtxt='Correct information';
				} else {
					$scope.msgtxt='Error information';
				}
			});
		}
	}
});

