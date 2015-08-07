#mod.message - Компонента информационных сообщений
## Описание
Отображение информации на странице портала.
Компонента реализована как модуль и как директивы Angular.

## Зависимости

 - [Библиотека angular-bootstrap](https://github.com/angular-ui/bootstrap)
 - [Компонета mod.core](https://github.com/cayman/mode.core)

# Функции настройки провайдера

    messageModProvider.setModName('message');
    messageModProvider.setInfoTemplate('mod/message/views/info.html');
    messageModProvider.setErrorTemplate('mod/message/views/error.html');
    messageModProvider.setFatalTemplate('mod/message/views/fatal.html');
    messageModProvider.setLoadingTemplate('mod/message/views/loading.html');
    messageModProvider.setLoadingRoundTemplate('mod/message/views/loading-round.html');
    messageModProvider.setModalConfig({
        backdrop: true,
        dialogFade: true,
        templateUrl: 'mod/message/views/modal.html',
        controller: 'messageModalController',
        backdropClick: false,
        keyboard: false
    });


# Визуальный элемент messageLooking (директива message-looking)
Отображает процесс поиска.
Задается как элемент или атрибут

    <message-looking ng-if="result.processSearching"></message-looking>

Свойства настройки в **config.yml**:

    message:
        looking: 'Ищем...'
    
# Визуальный элемент messageLoading (директива message-loading, message-loading-round)
Отображает процесс загрузки
Задается как элемент или атрибут
    
    <message-loading ng-if="result.processSearching"></message-loading>
    <message-loading-round ng-if="result.processSearching"></message-loading-round>

Свойства настройки в **config.yml**:

   message:
       loading: 'Загружаем...'

# Визуальный сообщения messageInfo, messageError, messageFatal 
методы отображения и сокрытия:

     messageMod.showInfo(text)
     messageMod.hideInfo()
     
     messageMod.showError(text)
     messageMod.hideError()    
     
     messageMod.showFatal(text)
     messageMod.hideFatal()       

Места отображения обозначаются в виде директив message-info, message-error, message-fatal  

    <message-info></message-info, 
    <message-error></message-error>, 
    <message-fatal></message-fatal>
    


# Модальноее окно сообщения (Функция showModalWindow)  
Отображает сообщения в виде модальног окна

    messageMod.showModalWindow(title,text);