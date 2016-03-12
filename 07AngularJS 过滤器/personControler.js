/**
 * Created by xieql on 2016/3/12.
 */
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.firstname = "xing";
    $scope.lastname = "xuexi";
    $scope.fullname = function () {
        return $scope.firstname + " " + $scope.lastname;
    };
});
