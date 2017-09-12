var App = angular.module('IndexApp', []);

App.controller('IndexCtrl', function ($scope) {

    $scope.apps = [
        {
            title: 'AngularJS Expression',
            desc: 'Our first AngularJS app to welcome the user',
            bgcolor: '#46B6AC',
            link: 'welcome.html'

        },
        {
            title: 'Form Validations',
            desc: 'Track each and every movement in your form with angularJS',
            bgcolor: '#EF6C00',
            link: 'Validation.html'
        },
        {
            title: 'Currency Converter',
            desc: 'Real time currency converter app using API',
            bgcolor: '#5D4037',
            link: 'Currency.html'
        },
        {
            title: 'Basic Todo App',
            desc: 'A simple todo app with ability to mark complete, undo and delete',
            bgcolor: '#455a64',
            link: 'Todo.html'
        },
        {
            title: 'Employee Database',
            desc: 'A very powerfull app to search, filter and add employees',
            bgcolor: '#455a64',
            link: 'Employee.html'
        }
    ];

});