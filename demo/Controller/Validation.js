var App = angular.module('validationApp', []);

App.controller('mainController', function ($scope) {

    $scope.submitForm = function (isValid) {
        if (isValid) {
            alert('Our form is Amazing');
        }
        else {
            alert('Please enter the values and click submit');
        }
    };

});