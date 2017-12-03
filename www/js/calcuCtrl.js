app.controller('calculatorCtrl', $scope => {
  $scope.title = 'iCalc';
  $scope.keyboard = [9, 8, 7, 6, 5, 4, 3, 2, 1, '.', 0, '='];
  $scope.operators = ['/', '*', '-', '+'];
  $scope.printEquation = '0';
  $scope.equationResult = '';
  $scope.lastParamSave = '';

  $scope.equation = data => {
    if (data === '=') {
      $scope.equationResult = eval($scope.printEquation);
    } else {
      if (!isNaN(data) && data === 0 && $scope.printEquation === '0') {
        $scope.lastParamSave = '';
        $scope.printEquation = '0';
      } else if (
        $scope.printEquation === '0' &&
        $scope.lastParamSave === '' &&
        data !== '.' &&
        data !== '*' &&
        data !== '/' &&
        data !== '+'
      ) {
        $scope.lastParamSave = data;
        $scope.printEquation = data.toString();
      } else if (!isNaN(data) && !isNaN($scope.lastParamSave)) {
        $scope.lastParamSave = data;
        $scope.printEquation += data;
      } else if (
        $scope.lastParamSave !== data &&
        !isNaN($scope.lastParamSave)
      ) {
        $scope.lastParamSave = data;
        $scope.printEquation += data;
      } else if (!isNaN(data) && isNaN($scope.lastParamSave)) {
        $scope.lastParamSave = data;
        $scope.printEquation += data;
      }
    }
  };

  $scope.clean = () => {
    $scope.printEquation = '0';
    $scope.equationResult = '';
    $scope.lastParamSave = '';
  };

});
