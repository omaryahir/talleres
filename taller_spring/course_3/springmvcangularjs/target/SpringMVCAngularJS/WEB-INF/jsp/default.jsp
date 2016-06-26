<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Spring MVC + AngularJS</title>
        <!--<spring src="https://ajax.google.com/ajax/libs/angularjs/1.0.8/angular.min.js"></spring>-->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
        <script>
            var app=angular.module('myApp', []);

            function MyController($scope, $http){
                $scope.getPersonDataFromServer = function() {
                    $http({method: 'GET', url: 'springAngularJS.web'}).success(function(data, status, headers, config){
                        $scope.person=data;
                    }).error(function(data, status, headers, config){
                       alert("Error!");
                    });
                };
            };

        </script>
    </head>

    <body>
        <div data-ng-app="myApp">
            <div data-ng-controller="MyController">
                <button data-ng-click=""getPersonDataFromServer()">Get Person data from server</button>
                <p>First Name: {{person.firstName}} </p>
                <p>Last Name: {{person.lastName}} </p>
            </div>
        </div>
    </body>
</html>

