'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Post, User){

	$scope.user = User.findbyUsername($routeParams.username);

});