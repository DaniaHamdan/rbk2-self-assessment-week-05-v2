angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($routeScope){
    $routeScope.display="";
    $routeScope.counter=0

  })
  .controller('fizzbuzzCtrl', function($routeScope,counter){
    var increment=function(){
      $routeScope.counter+=1;
      if($routeScope.counter%3===0){
        $routeScope.display="FIZZ"
      }else if($routeScope.counter%5===0){
        $routeScope.display="BIZZ"
      }else if($routeScope.counter%3===0&&$routeScope.counter%5===0){
        $routeScope.display="FIZZBIZZ"
      }
      return increment:increment
    }
  })
  .controller('fozzbazzCtrl', function($routeScope,counter){
var increment=function(){
      $routeScope.counter+=1;
      if($routeScope.counter%4===0){
        $routeScope.display="FOZZ"
      }else if($routeScope.counter%6===0){
        $routeScope.display="BOZZ"
      }else if($routeScope.counter%4===0&&$routeScope.counter%6===0){
        $routeScope.display="FOZZBOZZ"
      }
      return increment:increment
    }
  });
