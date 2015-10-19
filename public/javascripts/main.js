angular.module('CountriesApp', [])

angular.module('CountriesApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
	
	$scope.showVisitedCountries = false
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
				$scope.searchedForCountry = returnData.data
				console.log($scope.searchedForCountry)
			})
	}

	$scope.addCountry = function(index){
		console.log("The country name should appear here")
		$scope.searchedForCountry[index].hasTravelled = !$scope.searchedForCountry[index].hasTravelled
		console.log($scope.searchedForCountry[index])
			$http.post('/hasbeen', $scope.searchedForCountry[index])
	}

	$scope.loadVisitedCountries = function(index){
		$scope.showVisitedCountries = !$scope.showVisitedCountries
		console.log("loadthevisitedcountries")
		$http.get('/retrieveVisited')
		.then(function(returnData){
			$scope.visitedCountries = returnData.data
		})
	}

	}])