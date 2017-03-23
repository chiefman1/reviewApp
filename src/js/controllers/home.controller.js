(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('homeController', homeController);

	homeController.$inject = ['$scope', 'dataService', '$state', '$rootScope'];

	function homeController($scope, dataService, $state, $rootScope){
		console.log('homeController loaded');
		var vm = this;
		console.log($state.current);
		vm.state = $state.current.name;
		vm.shareDisabled = true;
		vm.sendDisabled = true;
		vm.dealButtons = function() {
			if (vm.state === 'send') {
				console.log('state SEND');
			} else if (vm.state === 'share') {
				console.log('state share');
			}
		};

		$rootScope.$on('$stateChangeSuccess', vm.dealButtons);
	}

})();