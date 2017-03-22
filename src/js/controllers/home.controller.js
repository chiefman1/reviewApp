(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('homeController', homeController);

	homeController.$inject = ['$scope', 'getData', '$route', '$stateParams'];

	function homeController($scope, getData, $route, $stateParams){
		console.log('homeController loaded');
		var vm = this;

	}

})();