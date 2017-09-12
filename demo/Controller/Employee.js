var myApp = angular.module('App', []);

myApp.controller("EmployeeCtrl", function ($scope) {

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.alertMassege = "";
    $scope.sortType = 'user.name';
    $scope.sortReverse = false;
    $scope.searchText = '';

    $scope.head = {
        a: "S.No",
        b: "Name",
        c: "Employee ID",
        d: "Email",
        e: "Edit",
        f: "delete"
    };

    $scope.sort = {
        column: 'b',
        descending: false
    };

    $scope.selectedCls = function (column) {
        return column == scope.sort.column && 'sort-' + scope.sort.descending;
    };

    $scope.changeSorting = function (column) {
        var sort = scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };

    $scope.users = [
        { name: "Santhosh", empid:1542, email: "mail@xxx.com" },
        { name: "Kiran", empid:5698 , email: "kiran@mail.com" },
        { name: "Lazrus", empid: 3652, email: "laz@mail.com" },
        { name: "Sanaker", empid: 4652, email: "laz@mail.com" }
    ];


    $scope.saveUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.alertMassege = "New item add on list successfully!!";
    };


    $scope.selectUser = function (user) {
        //console.log(user);
        $scope.clickedUser = user;
    };

    $scope.updateUser = function () {
        $scope.alertMassege = "Update Successfully!!";
    };


    $scope.deleteUser = function () {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.alertMassege = "Deleted successfully!!";
    };

    $scope.clickedAlert = function () {
        $scope.alertMassege = "";
    };

});