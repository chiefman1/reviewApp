(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.controller('writeController', writeController);

	writeController.$inject = ['$scope', 'getData', '$route', '$stateParams'];
	
	function writeController($scope, getData, $route, $stateParams){
		console.log('writeController loaded');
		var vm = this;

	}
	
})();