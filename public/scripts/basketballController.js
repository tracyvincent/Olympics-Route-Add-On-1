angular.module('olympicApp').controller('basketballController', function($scope, DataService){
  $scope.data = DataService.data;
  DataService.basketAthlete();
});
