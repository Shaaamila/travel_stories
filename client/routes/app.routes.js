console.log(halua);
(function (angular){
		.module('portfolioApp')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider, $compileProvider){
		$urlRouterProvider.otherwise('/#/home');
		$stateProvider
			.state('home',{
				// url: '/',
				// templateUrl: 'partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.state('about',{
				// url: '/about',
				// templateUrl: '#about',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			.state('portfolio',{
				// url: '/portfolio',
				// templateUrl: 'partials/portfolio.html',
				controller: 'portfolioCtrl',
				controllerAs: 'vm'
			})
			.state('skills',{
				// url: '/skills',
				// templateUrl: 'partials/skills.html',
				controller: 'skillsCtrl',
				controllerAs: 'vm'
			})
			.state('contact',{


				controller: 'contactCtrl',
				controllerAs: 'vm'
			});
		$compileProvider.debugInfoEnabled(false);
	}


}  ) (angular);

