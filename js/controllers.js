angular.module('app.controllers', ['ionic.utils'])

.controller('homeCtrl', function($scope,$localstorage, quizzes) {


    $scope.quizzes = quizzes ;

    $scope.clean_local = function (quizzes){

    var quizzesdata = $localstorage.getObject("quizzesdata", []);
    $localstorage.setObject("quizzesdata",quizzesdata);
    }

    $scope.update_n_quizzes = function (quizzes){


    var quizzesdata = $localstorage.getObject("quizzesdata", []);


    var totl = quizzesdata.length;
    for (var i=0; i< quizzes.data.length - totl; i++) {
        quizzesdata.push({ ncards : 0,
                           ngood : 0,
                          done : false});
    }
    for (var i=0; i< quizzes.data.length ; i++) {
        if (quizzesdata[i].ncards != quizzes.data[i].cards.length){
          quizzesdata[i].ncards = 0
          quizzesdata[i].ngood = 0
          quizzesdata[i].done = false

        }

    }
    //check right number of cards

    //TODO remove if toomuch
    $localstorage.setObject("quizzesdata",quizzesdata);
    return ;

    };


    $scope.get_answer = function (quizid){

        var quizzesdata = $localstorage.getObject("quizzesdata",[]);


        if (quizid < quizzesdata.length){

            return quizzesdata[quizid].ngood ;
        }

        return 0;

    }

    $scope.get_ncard = function (quizid){

        var quizzesdata = $localstorage.getObject("quizzesdata",[]);


        if (quizid < quizzesdata.length){

            return quizzesdata[quizid].ncards ;
        }

        return 0;

    }

    $scope.Done = function (quizid){

        var quizzesdata = $localstorage.getObject("quizzesdata",[]);
        //quizzesdata = [];

        //console.log("test");


        if (quizid < quizzesdata.length){

            return quizzesdata[quizid].done ;
        }

        return false;

    }

})

.controller('cartCtrl', function($scope, $state, $stateParams, quizzes) {

    $scope.quizzid = $stateParams.quizzid;
    $scope.cardid = $stateParams.cardid;
    $scope.goodanswer = $stateParams.goodanswer;

    $scope.quizzes = quizzes ;
    $scope.answered= false;
    $scope.idclicked=0;
    $scope.rand = Math.random();
    if ($scope.rand > 0.5){
        $scope.rand = true;
    }
    else {
        $scope.rand = false;
    }



    //$ionicHistory.clearHistory() ;
    $scope.isItTrue = function( index , solution){


    if (  $scope.answered == false ){
        if (index == solution){
            $scope.good_answer = true;
            quizzes.data[$scope.quizzid].cards[$scope.cardid].good_answer = 1;
        }
        else {
            $scope.good_answer = false;
            quizzes.data[$scope.quizzid].cards[$scope.cardid].good_answer = 0;

        }
     $scope.idclicked = index;


    }
     $scope.answered = true;

    }

    $scope.resetState = function (){

    $scope.answered= false;
    $scope.good_answer = false ;
    }

})

.controller('quizzCtrl', function($scope, $state, $stateParams, quizzes) {

    $scope.quizzid = $stateParams.quizzid;
    $scope.quizzes = quizzes ;

})

.controller('bilanCtrl', function($scope, $state, $stateParams , quizzes, $localstorage) {

    $scope.quizzid = $stateParams.quizzid;
    $scope.quizzes = quizzes ;
    $scope.goodanswer = $stateParams.goodanswer;


    $scope.goodanswers = function (quizzes,quizzid){

    var sum = 0;

     for (var i=0; i< quizzes.data[$scope.quizzid].cards.length ;i++) {
          sum =  sum + quizzes.data[$scope.quizzid].cards[i].good_answer ;
    }

    //save result

    var quizzesdata = $localstorage.getObject("quizzesdata", []);
    //quizzesdata = [];
    //$localstorage.setObject("quizzesdata",quizzesdata);
    //console.log(quizzesdata) ;

    var totl = quizzesdata.length
    for (var i=0; i< quizzes.data.length - totl; i++) {
        quizzesdata.push({ ncards : 0,
                           ngood : 0,
                          done : false});
    }

    quizzesdata[$scope.quizzid].ngood = sum;
    quizzesdata[$scope.quizzid].ncards = quizzes.data[$scope.quizzid].cards.length;
    quizzesdata[$scope.quizzid].done = true;


    $localstorage.setObject("quizzesdata",quizzesdata);

     return sum ;


    };


})

.controller('cloudCtrl', function($scope) {

})
