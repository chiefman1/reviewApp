(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('homeController', homeController);

	homeController.$inject = ['$scope', 'dataService', '$state'];

	function homeController($scope, dataService, $route){
		console.log('homeController loaded');
		var vm = this;

	}

})();