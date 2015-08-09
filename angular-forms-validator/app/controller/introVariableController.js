(function() {
    angular.module('validatorApp').controller('introVariable', ['$scope', function ($scope) {
        $scope.model = { requiredField: '', enableValidation: true, validationMessage : 'Test Message' };
	}]);
})();