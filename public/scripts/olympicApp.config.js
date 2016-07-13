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
