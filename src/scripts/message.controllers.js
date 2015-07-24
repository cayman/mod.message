_messageMod.controller('messageModalController',['$log', '$scope', '$modalInstance', 'messageTitle', 'messageData',
    function ($log, $scope, $modalInstance, messageTitle, messageData) {
    $log.info('messageModalController');

    if (messageData) {
        $scope.messageTitle = messageTitle;
        $scope.messageData= messageData;
    }
    $scope.close = function (result) {
        $modalInstance.close(result);
    };

}]);