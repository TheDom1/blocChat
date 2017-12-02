(function() {
	function config($stateProvider, $locationProvider) {
		//configure an application's path
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			});
	}

	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
		.config(config);

})();
