_messageMod.config(['messageModProvider', function (messageModProvider) {
    console.log('messageMod.config');
    messageModProvider.setModName('message');
    messageModProvider.setInfoTemplate('mod/message/views/info.html');
    messageModProvider.setErrorTemplate('mod/message/views/error.html');
    messageModProvider.setFatalTemplate('mod/message/views/fatal.html');
    messageModProvider.setLoadingTemplate('mod/message/views/load.html');
    messageModProvider.setLoadingRoundTemplate('mod/message/views/load-round.html');
    messageModProvider.setModalConfig({
        backdrop: true,
        dialogFade: true,
        templateUrl: 'mod/message/views/modal.html',
        controller: 'messageModalController',
        backdropClick: false,
        keyboard: false
    });
}]);
