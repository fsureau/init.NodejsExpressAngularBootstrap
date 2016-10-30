angular.module('mainModule', [])
    .controller('defaultController', function () {
        var data = this;
        data.inputText = "My first application";
        data.elements = [
            { text: 'element1'},
            { text: 'element2'}];
    });

