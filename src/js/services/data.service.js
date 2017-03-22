(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.factory('getData', dataService);
		
	dataService.$inject = ['$http'];
	
	function dataService($http){
		
		var service = {

		};
		
		return service;	

	}
})();