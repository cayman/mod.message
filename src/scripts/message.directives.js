_messageMod.directive('messageInfo', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-info.directive');
    return {
        templateUrl: messageMod.getInfoTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = {};
            messageMod.hideElement(element);
            function showInfoMessage(message) {
                scope.message = message;
                messageMod.showElement(element);
            }
            function hideInfoMessage(){
                messageMod.hideElement(element);
            }
            messageMod.subscribeShowMessage('info',showInfoMessage);
            messageMod.subscribeHideMessage('info',hideInfoMessage);
        }
    };
}]);
_messageMod.directive('messageError', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-error.directive');
    return {
        templateUrl: messageMod.getErrorTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = null;
            messageMod.hideElement(element);
            function showErrorMessage(message) {
                scope.message = message;
                $log.debug('show',message);
                messageMod.showElement(element);
            }
            function hideErrorMessage(){
                messageMod.hideElement(element);
            }
            messageMod.subscribeShowMessage('error',showErrorMessage);
            messageMod.subscribeHideMessage('error',hideErrorMessage);
        }
    };
}]);
_messageMod.directive('messageFatal', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-fatal.directive');
    return {
        templateUrl: messageMod.getFatalTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = {};
            messageMod.hideElement(element);
            function showFatalMessage(message) {
                scope.message = message;
                messageMod.showElement(element,messageMod.getAnimateTime());

            }
            function hideFatalMessage(){
                messageMod.hideElement(element,messageMod.getAnimateTime());
            }
            messageMod.subscribeShowMessage('fatal',showFatalMessage);
            messageMod.subscribeHideMessage('fatal',hideFatalMessage);
        }
    };
}]);

_messageMod.directive('messageLoading', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-loading.directive');
    return {
        templateUrl: messageMod.getLoadingTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = messageMod.getMessage().loading || 'Loading...';
            scope.assets = messageMod.getAssets();
        }
    };
}]);

_messageMod.directive('messageLooking', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-looking.directive');
    return {
        templateUrl: messageMod.getLoadingTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = messageMod.getMessage().looking || 'Looking...';
            scope.assets = messageMod.getAssets();
        }
    };
}]);

_messageMod.directive('messageLoadingRound', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-load-round.directive');
    return {
        templateUrl: messageMod.getLoadingRoundTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.assets = messageMod.getAssets();
        }
    };
}]);


