var app = angular.module("App",["ngRoute"]);
app.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl : 'home.html',
            controller : 'Homectrl'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'ctrl'
        }).otherwise({
            redirectTo : 'index.html'
        });
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
]);
app.controller("ctrl",function($scope,$http,$location){
  $http.get("data.json").then(function(response)
  {
      $scope.Users = angular.fromJson(response.data.Users);
  });
  $scope.uid ;
  $scope.pwd ;
  $scope.exist = 0;
  $scope.submit = function(){
    // if($scope.uid){
        angular.forEach($scope.Users,function(value,key){
          if($scope.uid == value.Userid && $scope.pwd == value.passwd){
            $scope.exist = 1;
             $location.path("/home" );
          }
    });
    // }else{
    //         alert("Please Username and Password");
    // }
    if($scope.exist == 0){
       alert("Please enter valid username and password");
    }
  }

});
app.controller("HomeCtrl", function($scope, $location) {

});
