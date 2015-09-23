(function () {
    var app = angular.module('app', ['ngCordova']);
    app.controller('pictureCtrl', function ($scope, $cordovaCamera) {
        document.addEventListener("deviceready", function () {

            alert('Camera device ready to use');

        }, false);

        $scope.capturePhotoWithData = function () {
            if ($cordovaCamera == undefined) alert("$cordovaCamera is undefined");

            $cordovaCamera.getPicture().then(function (imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function (message) {
                alert('Failed because: ' + message);
            });

        }

    });

})();