angular.module('olympicApp').controller('pingpongController', function($scope, DataService){
  $scope.data = DataService.data;
  DataService.tableAthlete();
});
