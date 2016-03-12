/**
 * Created by xieql on 2016/3/12.
 */
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.names = [
        {name: "zhangsan", country: "cn"},
        {name: "lisi", country: "us"},
        {name: "shukeshaha", country: "neimeng"}
    ];
});