/**
 * Created by xieql on 2016/3/12.
 */
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $http.get("welcome.htm").then(function (response) {
        $scope.myWelcome = response.data;

    });

});