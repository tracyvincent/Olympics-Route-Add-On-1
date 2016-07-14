angular.module('olympicApp').controller('taekwondoController', function($scope, DataService){
  $scope.data = DataService.data;
  // DataService.taekAthlete();
});
