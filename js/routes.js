angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    },

    params: {
    quizzid: 0,
    cardid: 0,
    goodanswer: 0,
  }
  })
  .state('menu.quizz', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quizz.html',
        controller: 'quizzCtrl'
      }
    },

    params: {
    quizzid: 0,
  }
  })
 .state('menu.bilan', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bilan.html',
        controller: 'bilanCtrl'
      }
    },

    params: {
    quizzid: 0,
    goodanswer: 0,
  }
  })
  .state('menu.credits', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/credits.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
