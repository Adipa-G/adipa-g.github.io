(function () {
    angular.module('validatorApp').controller('equalTo', ['$scope', function ($scope) {
        $scope.model = { email : 'a', confirmEmail:'b' };
    }]);
})();