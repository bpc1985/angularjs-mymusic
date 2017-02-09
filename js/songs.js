var app = angular.module('appMusic', ['ui.router']);

app.config(function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/album1");
    $stateProvider
        .state('album1', {
            url: '/album1',
            templateUrl: 'views/album1.html',
            controller: 'Album1Controller',
            data: { pageTitle: 'TÂM HỒN CỦA ĐÁ' }
        })
        .state('album2', {
            url: '/album2',
            templateUrl: 'views/album2.html',
            controller: 'Album2Controller',
            data: { pageTitle: 'NGÀY HÔM QUA' }
        });
});

app.controller("MainController", function ($scope) {
    $scope.play = function(data) {
        var player = $("#music-player")[0];
        player.src = data.file;
        player.play();
        $("#song-name").html(data.name);
    };
});

app.controller("Album1Controller", function () {
    this.songs = [
        { name: 'Đường đến ngày vinh quang', file: 'audio/duong-den-ngay-vinh-quang.mp3' },
        { name: 'Bông hồng thủy tinh', file: 'audio/bong-hong-thuy-tinh.mp3' },
        { name: 'Tâm hồn của đá', file: 'audio/tam-hon-cua-da.mp3' }
    ];
});

app.controller("Album2Controller", function () {
    this.songs = [
        { name: 'Ngày hôm qua', file: 'audio/ngay-hom-qua.mp3' },
        { name: 'Giọt đắng', file: 'audio/giot-dang.mp3' },
        { name: 'Hoa ban trắng', file: 'audio/hoa-ban-trang.mp3'}
    ];
});
