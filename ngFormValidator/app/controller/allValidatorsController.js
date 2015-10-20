(function() {
    angular.module('validatorApp').controller('allValidators', ['$scope', function ($scope) {
        $scope.requiredVal = { enabled: true, message: 'Required validation', value: '' };
        $scope.stringVal = { enabled: true, message: 'String validation', minLength : 2,maxLength : 5 , value: '' };
        $scope.numberVal = { enabled: true, message: 'Number validation', minValue : 200,maxValue : 1000 , value: 300 };
        $scope.regexVal = { enabled: true, message: 'Pattern validation', pattern : '\\S+@\\S+\\.\\S+', value : 'aa@bb.com' };
        $scope.emailVal = { enabled: true, message: 'Email validation', value : 'aa@bb.com' };
        $scope.urlVal = { enabled: true, message: 'Url validation', value : 'http://www.google.com' };
    }]);
})();