'use strict';

/**
 * @ngdoc function
 * @name scupTestApp.controller:FetchresultsCtrl
 * @description
 * # FetchresultsCtrl
 * Controller of the scupTestApp
 */
angular.module('scupTestApp')
  .controller('FetchresultsCtrl', function ($scope, $http, scupData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.callInfo= {};

	$scope.$watch("callInfo", function(newValue, oldValue){ 
		$scope.callInfo.tenPercent = (($scope.callInfo.price*10)/100)+$scope.callInfo.price;

		for(var index in $scope.dddPricing.data){

			var origin = $scope.dddPricing.data[index].origin;
			var destiny = $scope.dddPricing.data[index].destiny;

			if ($scope.callInfo.origin == origin && $scope.callInfo.destiny == destiny) {
				$scope.callInfo.price = parseFloat($scope.dddPricing.data[index].price);
			};
		}
	}, true);



	scupData.getPricing()
	    .success(function (pricing) {
	        $scope.dddPricing = pricing;
	    })
	    .error(function (error) {
	        // console.error(error.message);
	    });

	scupData.getDetail()
	    .success(function (detail) {
	        $scope.dddDetail = detail;
	    })
	    .error(function (error) {
	        // console.error(error.message);
	    });

	scupData.getPlans()
	    .success(function (plan) {
	        $scope.dddPlan = plan;
	        // console.log($scope.dddPlan.data);
	    })
	    .error(function (error) {
	        // console.error(error.message);
	    });	        
  })

.factory('scupData', function($http) {

	var scupData = {};
	var scupBaseUrl = "http://private-fe2a-scuptel.apiary-mock.com/";

	scupData.getPricing = function(){
		return $http.get(scupBaseUrl + "ddd/pricing");
	};

	scupData.getDetail = function(){
		return $http.get(scupBaseUrl + "ddd/details");
	};

	scupData.getPlans = function(){
		return $http.get(scupBaseUrl + "plans");
	};	
	return scupData;

});
