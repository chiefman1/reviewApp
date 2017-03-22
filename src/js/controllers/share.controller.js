(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('shareController', shareController);

	shareController.$inject = ['$scope', 'getData', '$route', '$stateParams'];

	function shareController($scope, getData, $route, $stateParams){
		console.log('shareController loaded');
		var vm = this;

	}

})();