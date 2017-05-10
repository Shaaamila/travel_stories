(function (angular){
	angular
	.module('portfolioApp')
	.controller('navCtrl');

	function navCtrl($rootscope, $scope, $location){
		var vm = this;

		vm.currentUrl = currentUrl;
		// vm.showLinks = showLinks;
		// vm.mobileScreen = false;
		// vm.openMenu = false;

		//Autoscroll on top on statechange
		$rootscope.$on('$stateChangeSuccess', function(){
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