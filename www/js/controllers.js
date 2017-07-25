angular.module('app')

.controller('jeuCtrl', function($scope, $ionicHistory, $state, $stateParams,$ionicPopup, $ionicViewSwitcher, $http, $sce, $ionicLoading, $timeout) {

  jeu = this;

  jeu.titre = "Bienvenue dans le jeu de sylvain!!";

//0 pour rouge
//1 pour bleu
//2 pour vide

  var datas = new Array();

  for(i=0;i<7;i++)
  {
    if(i<3)
      datas[i] = 0;
    else if(i==3)
      datas[i] = 2;
    else
      datas[i] = 1;
  }

jeu.TypeCercle = datas;
jeu.selectedCercle = -1;

jeu.CercleClicked = function ($index) {
    jeu.selectedCercle = $index;
  }

  jeu.placement_click =function($index) {
    jeu.message = "";
    var bond = $index - jeu.selectedCercle;

    if(datas[$index] == 2)
    {
      if(($index > jeu.selectedCercle && datas[jeu.selectedCercle] == 0) 
        || ($index < jeu.selectedCercle && datas[jeu.selectedCercle] == 1))
      {
        if(bond < 3 && bond > -3)
        {
          datas[$index] = datas[jeu.selectedCercle];
          datas[jeu.selectedCercle] = 2;
          jeu.TypeCercle = datas;
        }
        else
          jeu.message = "désolé tu ne peux qu'un seul bond!!";
      }
      else
      {
        jeu.message = "désolé t'as pas le droit de reculer!!";
      }
    }

  }


})

.directive('mydirective', [function($scope, $document,windowService) {
return{
    link : function(scope,element,attars){
        var containers = $('.container');
        containers.bind('click', function (event) {
        var elem = event.currentTarget;
        $(elem).append('<div>test</div>');
        })
    }
  }
}]);



