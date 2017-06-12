angular.module('app.services', [])

.factory('quizzes', ['$http',function($http){
    console.log($http)
    var data = Array()
    var n_quizzes = 1 ;

    var udata = []
    //for (var i=1; i < n_quizzes+1 ; i++) {
    //    console.log('data/quizz'+i+ '/data.json')
    //    udata[i-1] = $http.get('data/quizz'+i+ '/data.json').success(function(response){console.log("response",response);data[i-1]=response})
    //}
    udata[0] = $http.get('data/quizz001_biotin/data.json').success(function(response){console.log("response",response);data[0]=response})
    //udata[1] = $http.get('data/quizz2/data.json').success(function(response){console.log("response",response);data[1]=response})
    udata[1] = $http.get('data/quizz003_penicilin_V/data.json').success(function(response){console.log("response",response);data[1]=response})
    udata[2] = $http.get('data/quizz004_quinine/data.json').success(function(response){console.log("response",response);data[2]=response})
    udata[3] = $http.get('data/quizz002_aspirin/data.json').success(function(response){console.log("response",response);data[3]=response})
    udata[4] = $http.get('data/quizz005_terpineol/data.json').success(function(response){console.log("response",response);data[4]=response})
    udata[5] = $http.get('data/quizz006_lsd/data.json').success(function(response){console.log("response",response);data[5]=response})
    udata[6] = $http.get('data/quizz008_tacrolimus/data.json').success(function(response){console.log("response",response);data[6]=response})
    udata[7] = $http.get('data/quizz009_fullerene/data.json').success(function(response){console.log("response",response);data[7]=response})

    udata[8] = $http.get('data/quizz010_vitamin_A/data.json').success(function(response){console.log("response",response);data[8]=response})
    udata[9] = $http.get('data/quizz011_colchicine/data.json').success(function(response){console.log("response",response);data[9]=response})
    udata[10] = $http.get('data/quizz012_Cubane/data.json').success(function(response){console.log("response",response);data[10]=response})
    udata[11] = $http.get('data/quizz013_caffeine/data.json').success(function(response){console.log("response",response);data[11]=response})

    console.log("data",data)

    var updateAnswer = function(quizid,cardid,answer) {
        data[quizid].cards[cardid].good_answer = answer;
        };
    return { n_quizzes,
            data
            };

}])


.service('BlankService', [function(){

}]);

angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key, defaultValue) {
      return JSON.parse($window.localStorage[key] || JSON.stringify(defaultValue));
    }
  }
}]);
