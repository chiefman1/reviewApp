(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('shareController', shareController);

	shareController.$inject = ['$state', 'dataService'];

	function shareController($state, dataService){
		var vm = this;

		vm.activate = function() {
			if (dataService.userData){
				vm.user = dataService.userData;
			} else vm.user = {};
			//vm.user = $stateParams.userData;
			vm.facebook = false;
			vm.twitter = false;
			vm.linkedIn = false;
		};

		vm.sendForm = function() {
				vm.user.facebook = vm.facebook;
				vm.user.twitter = vm.twitter;
				vm.user.linkedIn = vm.linkedIn;
				dataService.pushData(vm.user);
				$state.go('send');
		};

		vm.activate();
	}

})();