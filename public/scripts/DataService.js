angular.module('olympicApp').factory('DataService', function($http){

  var data = {};

  function handleSuccess(response){
    data.athlete=response.data;
    console.log(data.athlete);
  };
  function handleFailure(response){
    console.log("failed to Get taekwondo");
  };
  // function taekAthlete(){
  //   $http.get('athletes/taekwondo').then(handleSuccess, handleFailure);
  // }
  // function pentAthlete(){
  //   $http.get('athletes/pentathlon').then(handleSuccess, handleFailure);
  // }
  // function tableAthlete(){
  //   $http.get('athletes/tableTennis').then(handleSuccess, handleFailure);
  // }
  // function basketAthlete(){
  //   $http.get('athletes/basketball').then(handleSuccess, handleFailure);
  // }
  // function archeryAthlete(){
  //   $http.get('athletes/archery').then(handleSuccess, handleFailure);
  // }

function final(){
  $http.get('athletes/finalAthletes').then(handleSuccess, handleFailure);
}

final();

return {
  data: data,
  final: final
  // taekAthlete: taekAthlete,
  // pentAthlete: pentAthlete,
  // tableAthlete: tableAthlete,
  // basketAthlete: basketAthlete,
  // archeryAthlete: archeryAthlete
}


})
