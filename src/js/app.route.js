(function(){
	'use strict';
	
	angular
		.module('reviewApp')
		.config(config);
		
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider

				.state('home', {
					url: "/",
					controller: 'homeController',
					controllerAs: 'vm',
					templateUrl: "/templates/home.html"
				})

				.state('write', {
					url: "/write",
					controller: 'writeController',
					controllerAs: 'vm',
					templateUrl: "/templates/steps/write.html"
				})

				.state('share', {
					url: "/share",
					controller: 'shareController',
					controllerAs: 'vm',
					templateUrl: "/templates/steps/share.html"
				})

				.state('send', {
					url: "/send",
					controller: 'sendController',
					templateUrl: "/templates/steps/send.html",
					controllerAs: 'vm'
				})
	}
})();