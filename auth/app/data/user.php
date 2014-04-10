<?php
	$user=json_decode(file_get_contents('php://input')); // get user from json headers
	if($user->mail=='northdacoder@gmail.com' && $user->pass=='1234')
		print 'success';
	else print 'error';
?>