'use strict';
var app = angular.module('exampleApp', ['JSONedit']);

app.controller('jsonCtrl',function($scope,$filter,$http){

	$http.get('/vctr.json').success(function(data){
		$scope.jsonData = data;
	});

	  $scope.$watch('jsonData', function(json) {
        $scope.jsonString = $filter('json')(json);
    }, true);
    $scope.$watch('jsonString', function(json) {
        try {
            $scope.jsonData = JSON.parse(json);
            $scope.wellFormed = true;
        } catch(e) {
            $scope.wellFormed = false;
        }
    }, true);

	$scope.saveJson = function(){
		$http.post('/saveJson',$scope.jsonData).success(function(data){
			console.log('Done');
		});
	}

});
