/**
* MyFirstApp Module
*
* Description
*/
dependencies_modules = ["ngResources"];
var app = angular.module('MyFirstApp', depedencies_modules);

app.controller("MyFirstController", function($scope) {
    $scope.nombre="Omar Mendoza";
});