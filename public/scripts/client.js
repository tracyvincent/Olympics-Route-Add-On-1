angular.module('olympicApp', ['ngRoute']);
angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/archery',{
      templateUrl: 'views/archery.html',
      controller: 'archeryController'
    })
    .when('/basketball',{
      templateUrl: 'views/basketball.html',
      controller: 'basketballController'
    })
    .when('/taekwondo',{
      templateUrl: 'views/taekwondo.html',
      controller: 'taekwondoController'
    })
    .when('/pingpong',{
      templateUrl: 'views/pingpong.html',
      controller: 'pingpongController'
    })
    .when('/pentathalon',{
      templateUrl: 'views/pentathalon.html',
      controller: 'pentathalonController'
    })
    $locationProvider.html5Mode(true);
});
angular.module('olympicApp').controller('archeryController', function($scope, $http){
  var archeryObject={
  method:'GET',
  url: 'athletes/archery'
};
function archerSuccess(response){
  $scope.archer=response.data;
  console.log($scope.archer);
};
function archerFailure(response){
  console.log("failed to Get Archer");
};
$http(archeryObject).then(archerSuccess, archerFailure);
});
angular.module('olympicApp').controller('basketballController', function($scope, $http){
  var basketballObject={
    method:'GET',
    url: 'athletes/basketball'
  };
  function basketballSuccess(response){
    $scope.bbplayer=response.data;
    console.log($scope.bbplayer);
  };
  function basketballFailure(response){
    console.log("failed to Get basketball player");
  };
  $http(basketballObject).then(basketballSuccess, basketballFailure);
});
angular.module('olympicApp').controller('taekwondoController', function($scope, $http){
  var taekwondoObject={
    method:'GET',
    url: 'athletes/taekwondo'
  };
  function taekwondoSuccess(response){
    $scope.taek=response.data;
    console.log($scope.taek);
  };
  function taekwondoFailure(response){
    console.log("failed to Get taekwondo");
  };
  $http(taekwondoObject).then(taekwondoSuccess, taekwondoFailure);
});
angular.module('olympicApp').controller('pingpongController', function($scope, $http){
  var tableTennisObject={
    method:'GET',
    url: 'athletes/tableTennis'
  };
  function tableTennisSuccess(response){
    $scope.pingPong=response.data;
    console.log($scope.pingPong);
  };
  function tableTennisFailure(response){
    console.log("failed to Get Table Tennis");
  };
  $http(tableTennisObject).then(tableTennisSuccess, tableTennisFailure);
});
angular.module('olympicApp').controller('pentathalonController', function($scope, $http){
  var pentathlonObject={
    method:'GET',
    url: 'athletes/pentathlon'
  };
  function pentathlonSuccess(response){
    $scope.pent=response.data;
    console.log($scope.pent);
  };
  function pentathlonFailure(response){
    console.log("failed to Get pentathlon");
  };
  $http(pentathlonObject).then(pentathlonSuccess, pentathlonFailure);
});
