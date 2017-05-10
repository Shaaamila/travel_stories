( function (angular) {
	angular
		.module('portfolioApp', ['ui.router','ui.bootstrap','ngAnimate', 'ngMaterial']);
} )(angular);

(function (angular){
	angular
		.module('portfolioApp')
		.config(routes);
                     
	function routes($stateProvider, $urlRouterProvider, $compileProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url: '/',
				// templateUrl: '/partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm',
				// onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    // 				$timeout(function() { 
    //   				$location.hash($stateParams.scrollTo);
    //   				$anchorScroll()
    // 				}, 100)
    // 			}
			})
			.state('about',{  
				// url: '/about/:scrollTo',
				// templateUrl: '#about',
				controller: 'aboutCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
      				console.log("hukiiii");
    				}, 100)
    			}

			})


			.state('portfolio',{
				// url: '/portfolio',
				// templateUrl: 'partials/portfolio.html',
				controller: 'portfolioCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			})
			.state('skills',{
				// url: '/skills',
				// templateUrl: 'partials/skills.html',
				controller: 'skillsCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			})
			.state('contact',{
				// url: '/contact',
				// templateUrl: 'partials/contact.html',
				controller: 'contactCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			});
		$compileProvider.debugInfoEnabled(false);
	}


}  ) (angular);


(function (angular){	
	angular
		.module('portfolioApp')
		.controller('homeCtrl',homeCtrl);

	function homeCtrl($scope, $location){
		var vm = this;
	}
} ) (angular);

(function (angular){
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

//$rootscope,
	function navCtrl ($rootScope, $scope, $location, $anchorScroll){

			$scope.isCollapsed = true;
			
			// $scope.scrollTo = function(id) {
			// $location.hash(id);
			// $anchorScroll();  //^this stopped working

			$scope.scrollTo = function (id) {
    		var old = $location.hash();
    		$location.hash(id);
    		$anchorScroll();
    		$location.hash(old);
 		} // need these to scroll down

		
		var vm = this;

		vm.currentUrl = currentUrl;
		// vm.showLinks = showLinks;
		// vm.mobileScreen = false;
		// vm.openMenu = false;

		//Autoscroll on top on statechange
		$rootScope.$on('$stateChangeSuccess', function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

		function currentUrl(urlLocation){
			return urlLocation === $location.url();
		}

		// 		function showLinks() {
		// 	if (vm.mobileScreen === true && vm.openMenu === true) {
		// 		vm.mobileScreen = false;
		// 		vm.openMenu = false;
		// 	} else {
		// 		vm.openMenu = true;
		// 		vm.mobileScreen = true;
		// 	}
		// }
	}
} ) (angular);
(function (angular){
	angular
	.module('portfolioApp')
	.controller('aboutCtrl', aboutCtrl);

	function aboutCtrl($scope, $location){
	
		var vm = this;
	}
} ) (angular);



(function (angular){	
	angular
		.module('portfolioApp')
		.controller('portfolioCtrl',portfolioCtrl);

	function portfolioCtrl($scope, $location){
		var vm = this;
	}
} ) (angular);

(function (angular){	
	angular
		.module('portfolioApp')
		.controller('skillsCtrl',skillsCtrl);

	function skillsCtrl($scope, $location){
		var vm = this;
	}
} ) (angular);

(function (angular){	
	angular
		.module('portfolioApp')
		.controller('contactCtrl',contactCtrl);

	function contactCtrl($scope, $http, $mdToast, $location){
		var vm = this;

		$scope.toastPosition = {
			bottom : true,
			top : false,
			left : false,
			right : true
		};
		$scope.getToastPosition = function(){
			return Object.keys($scope.toastPosition)
			.filter(function(pos){
				return $scope.toastPosition[pos];
			})
			.join(' ');
		};

		this.sendMail = function(){
			data = ({
				contactName : this.contactName, 
				contactEmail : this.contactEmail,
				contactMsg : this.contactMsg
			 })
			console.log('luli');

			// http setup
			$http.post('/contact-form', data).
				success(function(data, status, headers, config){

			$mdToast.show(
				$mdToast.simple()
				.content('Thanks for your message'+ data.contactName +'. You rock!')
				.position($scope.getToastPosition())
				.hideDelay(5000)
				);
				// if (data == "sent"){
				// 		$("#msg").empty().html("Your has been sent!");
				// 	}

				}).
				error(function(data, status, headers, config){

				});

		};
	}
} ) (angular);


