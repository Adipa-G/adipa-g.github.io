(function () {
    angular.module('validatorApp').controller('email', ['$scope', function ($scope) {
        $scope.model = { emailField: '' };
    }]);
})();