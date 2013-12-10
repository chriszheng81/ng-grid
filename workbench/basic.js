var app = angular.module('MyGridApp', ['ngGrid']);

app.controller('bodyController', ['$scope', function($scope) {
    $scope.myData = [{Name: "Moroni", Age: 50},
                     {Name: "Tiancum", Age: 43},
                     {Name: "Jacob", Age: 27},
                     {Name: "Nephi", Age: 29},
                     {Name: "Enos", Age: 34}];
    $scope.gridOptions = { data : 'myData' };// $scope.myData is also acceptable but will not update properly. OK to use the object if you don't care about updating the data in the grid.
}]);