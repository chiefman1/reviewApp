(function(){
	'use strict';

	angular
			.module('reviewApp')
			.controller('sendController', sendController);

	sendController.$inject = ['$scope', 'getData', '$route', '$stateParams'];

	function sendController($scope, getData, $route, $stateParams){
		console.log('sendController loaded');
		var vm = this;

	}

})();