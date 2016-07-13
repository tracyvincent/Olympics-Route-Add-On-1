angular.module('olympicApp').controller('archeryController', function($scope, DataService){
  $scope.data = DataService.data;
  DataService.archeryAthlete();
});
