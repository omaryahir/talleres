angular.module("Todolst",["LocalStorageModule"])
.controller("TodoController", function($scope, localStorageService) {
    if(localStorageService.get("angular-todolist")){
        $scope.todo = localStorageService.get("angular-todolist");        
    } else {
        $scope.todo = [];
    }
    /*
        {
            actividad: 'mi actividad',
            fecha: '01-01-2016 10:00 am'
        }
    */
    $scope.$watchCollection('todo',function(newValue, oldValue){
        localStorageService.set("angular-todolist",$scope.todo);
    });
    $scope.addAct = function (){
        $scope.todo.push($scope.newAct);
        $scope.newAct = {};
    }
    $scope.delAct = function (){
        $scope.todo = [];
    }



});