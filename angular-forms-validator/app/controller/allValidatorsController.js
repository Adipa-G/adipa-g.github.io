(function() {
    angular.module('validatorApp').controller('allValidators', ['$scope', function ($scope) {
        $scope.requiredVal = { enabled: true, message: 'Required validation', value: '' };
        $scope.stringVal = { enabled: true, message: 'String validation', minLength : 2,maxLength : 5 , value: '' };
	}]);
})();