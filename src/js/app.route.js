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
					controllerAs: 'vm',
					templateUrl: "/templates/home.html"
				})

				.state('write', {
					url: "/write",
					controllerAs: 'vm',
					templateUrl: "/templates/steps/write.html"
				})

				.state('share', {
					url: "/share",
					controllerAs: 'vm',
					templateUrl: "/templates/steps/share.html"
				})

				.state('send', {
					url: "/send",
					templateUrl: "/templates/steps/send.html",
					controllerAs: 'vm'
				})
	}
})();