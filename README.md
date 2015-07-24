#mod.message - Компонента информационных сообщений
## Описание
Отображение информации на странице портала.
Компонента реализована как модуль и как директивы Angular.

## Зависимости

 - [Библиотека angular-bootstrap](https://github.com/angular-ui/bootstrap) ( "angular-bootstrap": "~0.8.0"),
 - [Компонета mod.core](mode_core/mod/core)

# Функции настройки провайдера

    messageModProvider.setModName('message');
    messageModProvider.setInfoTemplate('mod/message/views/info.html');
    messageModProvider.setErrorTemplate('mod/message/views/error.html');
    messageModProvider.setFatalTemplate('mod/message/views/fatal.html');
    messageModProvider.setLoadTemplate('mod/message/views/load.html');
    messageModProvider.setLoadRoundTemplate('mod/message/views/load-round.html');
    messageModProvider.setModalConfig({
        backdrop: true,
        dialogFade: true,
        templateUrl: 'mod/message/views/modal.html',
        controller: 'messageModalController',
        backdropClick: false,
        keyboard: false
    });


# Визуальный элемент messageSearch(директива message-search)
Задается как элемент или атрибут

    <message-search ng-if="result.processSearching"></message-search>

Свойства настройки в **config.yml**:

    searchText: 'Ищем...'
    
# Визуальный элемент messageLoad (директива message-load)
Отображает процесс загрузки.
Задается как элемент или атрибут

    <message-load ng-if="result.processSearching"></message-load>

Свойства настройки в **config.yml**:

    loadText: 'Загружаем...'
    
# Визуальный элемент messageLoad (директива message-load)
Отображает процесс загрузки.
Задается как элемент или атрибут
    
    <message-load-round ng-if="result.processSearching"></message-load-round>

    
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