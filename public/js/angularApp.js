angular.module('mainModule', [])
    .controller('defaultController', function () {
        var data = this;
        data.elements = [
            { text: 'element1'},
            { text: 'element2'}];
    });

