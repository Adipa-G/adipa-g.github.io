(function () {
    angular.module('validatorApp').controller('custom', ['$scope', function ($scope) {
        $scope.model = { customField : 0 };
        $scope.customValidate = function(value){
          return { valid : value%2 === 1, message : 'Should be an odd number' };  
        };
    }]);
})();