_messageMod.directive('messageInfo', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-info.directive');
    return {
        templateUrl: messageMod.getInfoTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = {};
            element.hide();
            function showInfoMessage(message) {
                scope.message = message;
                element.show();
            }
            function hideInfoMessage(){
                element.hide();
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
            scope.message = {};
            element.hide();
            function showErrorMessage(message) {
                scope.message = message;
                element.show();
            }
            function hideErrorMessage(){
                element.hide();
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
            element.hide();
            function showFatalMessage(message) {
                scope.message = message;
                element.show();
                //element.animate({height: 'show'}, messageMod.getAnimateTime());
            }
            function hideFatalMessage(){
                element.hide();
                //$log.debug('hideFatalMessage()');
                //element.animate({height: 'hide'}, messageMod.getAnimateTime());
            }
            messageMod.subscribeShowMessage('fatal',showFatalMessage);
            messageMod.subscribeHideMessage('fatal',hideFatalMessage);
        }
    };
}]);

_messageMod.directive('messageLoad', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-load.directive');
    return {
        templateUrl: messageMod.getLoadTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = messageMod.getLoadText();
            scope.assets = messageMod.getAssets();
        }
    };
}]);

_messageMod.directive('messageSearch', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-search.directive');
    return {
        templateUrl: messageMod.getLoadTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.message = messageMod.getSearchText();
            scope.assets = messageMod.getAssets();
        }
    };
}]);

_messageMod.directive('messageLoadRound', ['$log', 'messageMod', function ($log, messageMod) {
    $log.info('message-load-round.directive');
    return {
        templateUrl: messageMod.getLoadRoundTemplate(),
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.assets = messageMod.getAssets();
        }
    };
}]);


