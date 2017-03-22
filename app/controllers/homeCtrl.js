app.controller("homeCtrl", ["$scope", function ($scope) {
	$scope.navItems = [
		{
			name: "Home",
			templateUrl: "app/home/home.html"

	},
		{
			name:"Open Access",
			templateUrl:"app/views/openAccess.html"
		},
		{
			name: "Journals",
			templateUrl:"app/views/journals.html"
		},
		{
			name:"Current Issues",
			templateUrl:"app/views/currentIssue.html"
		}

	]
}]);