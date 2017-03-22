app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("home", {
		url:"/home",
		templateUrl:"app/home/home.html",
		controller:"homeCtrl"
	})
	.state("header", {
		url:"/header",
		templateUrl:"app/header/header.html"
	})
	.state("footer", {
		url:"/footer",
		templateUrl:"app/footer/footer.html"
	})
	.state("jpnc", {
		url:"/jpnc",
		templateUrl:"app/jpnc/jpnc.html"
	})
	
	$urlRouterProvider.otherwise("/home");
}]);