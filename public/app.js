(function(){
  angular
  .module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', config])
  .run(['$rootScope', '$window', scrollFix])

  function config($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'homeCtrl',
        templateUrl: '/components/home/home.html'
      })
      .state('/expertise', {
        url: '/expertise',
        controller: 'expertiseCtrl',
        templateUrl: '/components/expertise/expertise.html'
      })
    
    $urlRouterProvider
      .otherwise('/home')
  }

  function scrollFix($rootScope, $window){
    $rootScope.$on('$stateChangeSuccess', function(){
      $window.scrollTo(0, 0)
    })
  }

})()

