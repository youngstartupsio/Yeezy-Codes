// initiates angular app
var app = angular.module('app', []);
/** controller for this page
* @param $scope [string] injects angular scope
*/
app.controller('testing', function($scope) {
  //binding text area
$scope.angular_example = "$scope.showNewDiv = true;"

  /** method evulates code in binded area
  * @param inputcode [string] the code in the text area
  */
  function evaluatetor(inputcode) {
    eval(inputcode);
  }
  var input = $scope.angular_example;
  evaluatetor(input);

  $scope.runCode = function() {
    var inputtest = $scope.angular_example
    evaluatetor(inputtest);
  }
  var font-size = "12";
  $scope.rangeslider = font-size;
  document.getElementById('editor').style.fontSize=font-size + "px";

});
