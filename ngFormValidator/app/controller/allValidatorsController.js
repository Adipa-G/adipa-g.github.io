(function() {
    angular.module('validatorApp').controller('allValidators', ['$scope', function ($scope) {
        $scope.requiredVal = { enabled: true, message: 'Required validation', value: '' };
        $scope.stringVal = { enabled: true, message: 'String validation', minLength : 2,maxLength : 5 , value: '' };
        $scope.numberVal = { enabled: true, message: 'Number validation', minValue : 200,maxValue : 1000 , value: 300 };
        $scope.regexVal = { enabled: true, message: 'Pattern validation', pattern : '\\S+@\\S+\\.\\S+', value : 'aa@bb.com' };
        $scope.emailVal = { enabled: true, message: 'Email validation', value : 'aa@bb.com' };
        $scope.urlVal = { enabled: true, message: 'Url validation', value : 'http://www.google.com' };
        $scope.equalToVal = { enabled: true, message: 'Equal to validation', value1 : 'user@company.com', value2 : 'user@company.com' };
        $scope.customVal = { enabled: true, value : 1 };
        
        $scope.customValidate = function(value){
          return { valid : value%2 === 1, message : 'Should be an odd number' };  
        };
    }]);
})();