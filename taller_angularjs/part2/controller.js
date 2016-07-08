/**
* MyFirstApp Module
*
* Description
*/
angular.module('MyFirstApp', [])
.controller("FirstController", function($scope) {
    $scope.nombre = "Omar";
    $scope.comentarios = [
        {
            comentario: "Testing 1",
            usuario: "Omar"
        },
        {
            comentario: "Testing 2",
            usuario: "Yahir"
        }
    ];
    $scope.agregarComentario = function() {
        $scope.comentarios.push($scope.nuevoComentario);
    }
});