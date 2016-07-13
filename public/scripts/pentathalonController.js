angular.module('olympicApp').controller('pentathalonController', function($scope, DataService){
  $scope.data = DataService.data;
  DataService.pentAthlete();
});
