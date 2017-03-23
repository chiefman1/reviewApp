(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('sendController', sendController);

	sendController.$inject = ['$scope', 'dataService', '$state'];

	function sendController($scope, dataService, $state){
		var vm = this;

			vm.activate = function() {
				vm.user = {};
				if (dataService.userData){
					vm.user = dataService.userData;
				}// else $state.go('write');
			};
		vm.activate();
		vm.publish = function() {
			alert('Your review has been published successfully');
		};
	}

})();