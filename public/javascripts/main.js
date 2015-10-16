angular.module('CountriesApp', [])

angular.module('CountriesApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
		
	$scope.greeting = "Just give me some pizza"

	$scope.loadCountries = function() {
		$http.get('/countries')
			.then(function(returnData){
				$scope.countries = returnData.data
			})
			console.log($scope.countries)
	}

	

	$scope.submitQuery = function(){
		console.log($scope.cInput)
		$http.post('/search', $scope.cInput)
		.then(function(returnData){
				console.log(returnData.data)
				$scope.searchedForCountry = returnData.data
			})

		// $scope.cInput = {}
	}


	}])