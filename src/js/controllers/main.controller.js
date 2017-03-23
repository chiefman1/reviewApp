(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.controller('mainController', mainController);

	mainController.$inject = ['$scope','$state', 'dataService', '$rootScope'];
	
	function mainController($scope, $state, dataService, $rootScope){
		var vm = this;

		vm.activate = function() {
			vm.state = $state.current.name;
			vm.shareDisabled = true;
			vm.sendDisabled = true;
			$scope.rating = -1;
			vm.error = false;
			vm.user = {};
			if (dataService.userData){
				vm.user = dataService.userData;
				vm.title = dataService.userData.title;
				vm.name = dataService.userData.name;
				vm.reviewText = dataService.userData.reviewText;
				vm.reviewHeader = dataService.userData.reviewHeader;
				vm.rating = dataService.userData.rating;
			} else {
				vm.title = '';
				vm.facebook = false;
				vm.twitter = false;
				vm.linkedIn = false;
				vm.name = '';
				vm.reviewText = '';
				vm.reviewHeader = '';
				vm.rating = -1;
			}
		};

		vm.activate();

		console.log('mainController loaded');

		$scope.uiRouterState = $state;

		$scope.writeWatch = function(){
			$scope.$watch('[]', vm.goWrite, true);
		};

		$scope.shareWatch = function(){
			$scope.$watch('[]', vm.goShare, true);
		};

		$scope.sendWatch = function(){
			$scope.$watch('[]', vm.goSend, true);
		};

		vm.rate = function(rating) {
			vm.rating = rating;
		};

		vm.goShare = function() {
			$state.go('share');
		};

		vm.goSend = function() {
			$state.go('send');
		};

		vm.goWrite = function() {
			$state.go('write');
		};

		vm.sendShareForm = function() {
			vm.user.facebook = vm.facebook;
			vm.user.twitter = vm.twitter;
			vm.user.linkedIn = vm.linkedIn;
			dataService.pushData(vm.user);
			vm.goSend();
			vm.user = dataService.getData;
		};

		vm.sendWrittenForm = function() {
			if (vm.title) {
				vm.user.title = vm.title;
			}
			if (vm.name && vm.reviewText && vm.rating && vm.reviewHeader) {
				vm.user.name = vm.name;
				vm.user.reviewText = vm.reviewText;
				vm.user.rating = vm.rating;
				vm.user.reviewHeader = vm.reviewHeader;
				dataService.pushData(vm.user);
				vm.goShare();
				console.log(vm.user);

			} else {
				vm.error = true;
			}

		};

		vm.publish = function() {
			alert('Your review has been published successfully');
			$state.go('home');
		};


	}
	
})();