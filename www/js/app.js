const app = angular.module('starter', ['ionic']);
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('calculatorCtrl', ($scope) => {

  $scope.title = 'iCalc'
  $scope.keyboard = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, '.', 0, '='];
  $scope.operators = [ '/', '*', '-', '+',];
  $scope.printEquation = '0';
  $scope.equationResult;
  $scope.lastParamSave;

  $scope.equation = (data) => {
    if($scope.printEquation === 0 && data !== 0) {
      $scope.printEquation = data;
    }else if(data === '.') {
      $scope.lastParamSave = data;
      $scope.printEquation += data;
    }else if(isNaN(data) === false && isNaN($scope.lastParamSave) === false) {
      console.log($scope.lastParamSave);
      $scope.lastParamSave = data;
      $scope.printEquation += data;
    }else if(data === '+'|| data === '-' || data === '/' || data === '*' || data === '.') {
        $scope.lastParamSave = data;
        $scope.printEquation += data;
    }else {
      $scope.printEquation += data;
      console.log($scope.lastParamSave);
    }

  }

  $scope.clean = () => {
    $scope.printEquation = '0';
  }
})
