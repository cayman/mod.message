_messageMod.provider('messageMod', function () {
    console.log('messageMod.provider');
    var _name = 'message';
    this.setModName = function (modName) {
        _name = modName;
    };

    var _infoTemplate = null;
    var _errorTemplate = null;
    var _fatalTemplate = null;
    var _loadTemplate = null;
    var _loadRoundTemplate = null;

    this.setInfoTemplate = function (template) {
        _infoTemplate = template;
    };

    this.setErrorTemplate = function (template) {
        _errorTemplate = template;
    };

    this.setFatalTemplate = function (template) {
        _fatalTemplate = template;
    };

    this.setLoadTemplate = function (template) {
        _loadTemplate = template;
    };


    this.setLoadRoundTemplate = function (template) {
        _loadRoundTemplate = template;
    };

    var _modalConfig = null;

    this.setModalConfig = function (configModal) {
        _modalConfig = configModal;
    };

    this.$get = function ($log, $rootScope, coreMod, $modal) {
        $log.log('messageMod.provider.$get');

        var _config = coreMod.configMod(_name);

        function showMessageEvent(level, title, text) {
            var message = {
                level: level,
                title: title,
                text: text
            };
            $log.log('message:show', message);
            $rootScope.$broadcast('message:show', message);
        }

        function hideMessageEvent(level) {
            var message = {
                level: level
            };
            $log.log('message:hide', message);
            $rootScope.$broadcast('message:hide', message);
        }

        return {
            getAssets: function () {
                return coreMod.getAssets();
            },
            getInfoTemplate: function () {
                return _infoTemplate;
            },
            getErrorTemplate: function () {
                return _errorTemplate;
            },
            getFatalTemplate: function () {
                return _fatalTemplate;
            },
            getLoadTemplate: function () {
                return _loadTemplate;
            },
            getLoadRoundTemplate: function () {
                return _loadRoundTemplate;
            },
            showInfo: function (text, title) {
                showMessageEvent('info', title, text);
            },
            hideInfo: function () {
                hideMessageEvent('info');
            },
            showError: function (text, title) {
                showMessageEvent('error', title, text);
            },
            hideError: function () {
                hideMessageEvent('error');
            },
            showFatal: function (text, title) {
                showMessageEvent('fatal', title, text);
            },
            hideFatal: function () {
                hideMessageEvent('fatal');
            },

            showModalWindow: function (title, text) {
                var message = {
                    title: title,
                    text: text
                };
                _modalConfig.resolve = {
                    message: function () {
                        return message;
                    }
                };
                return $modal.open(_modalConfig);
            },

            subscribeShowMessage: function (level, callback) {
                $rootScope.$on('message:show', function (event, message) {
                    if (message.level === level) {
                        callback(message);
                    }
                });
            },
            subscribeHideMessage: function (level, callback) {
                $rootScope.$on('message:hide', function (event, message) {
                    if (message.level === level) {
                        callback();
                    }
                });
            },
            getAnimateTime: function () {
                return _config.animateTime;
            },
            getLoadText: function () {
                return _config.loadText;
            },
            getSearchText: function () {
                return _config.searchText;
            }
        };
    };

    this.$get.$inject = ['$log', '$rootScope', 'coreMod', '$modal'];
});

