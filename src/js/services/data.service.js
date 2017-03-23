(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.factory('dataService', dataService);
		
	dataService.$inject = ['$http'];
	
	function dataService($http){
		
		var service = {};

		function Customer(title, name, rating, reviewText, facebook, twitter, linkedIn) {
			this.title = title;
			this.name = name;
			this.rating = rating;
			this.reviewText = reviewText;
			this.facebook = facebook;
			this.twitter = twitter;
			this.linkedIn = linkedIn;
		}

		service.pushData = function(data) {
			service.userData = data;
			console.log(service.userData);
			return service.userData;
		};

		service.getData = function(data){
			if (service.userData) {
				return service.userData;
			}

		};

		return service;	

	}
})();