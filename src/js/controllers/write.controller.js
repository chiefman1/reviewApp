(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.controller('writeController', writeController);

	writeController.$inject = ['$scope','$state', 'dataService'];
	
	function writeController($scope, $state, dataService){
		var vm = this;

		vm.activate = function() {
			$scope.rating = -1;
			vm.error = false;
			vm.user = {};
			if (dataService.userData){
				vm.title = dataService.userData.title;
				vm.name = dataService.userData.name;
				vm.reviewText = dataService.userData.reviewText;
				vm.reviewHeader = dataService.userData.reviewHeader;
				vm.rating = dataService.userData.rating;

			} else vm.title = '';
			vm.name = '';
			vm.reviewText = '';
			vm.reviewHeader = '';
			vm.rating = 0;

		};

		vm.rate = function(rating) {
			vm.rating = rating;
		};

		vm.sendForm = function() {
			console.log('send form');
			if (vm.title) {
				vm.user.title= vm.title;
			}
			if (vm.name && vm.reviewText && vm.rating && vm.reviewHeader) {
				vm.user.name = vm.name;
				vm.user.reviewText = vm.reviewText;
				vm.user.rating = vm.rating;
				vm.user.reviewHeader = vm.reviewHeader;
				dataService.pushData(vm.user);
				vm.goShare(vm.user);

			} else {
				vm.error = true;
			}

		};

		vm.goShare = function(data) {
			$state.go('share', {userData: data});
		};

		vm.activate();
	}
	
})();