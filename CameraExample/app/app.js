(function() {
    var app = angular.module('app', ['ngCordova']);
    app.controller('pictureCtrl', function($scope, $cordovaCamera) {
        document.addEventListener("deviceready", function () {

            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });

        }, false);
        function onPhotoDataSuccess(imageData) {
            // Get image handle
            //
            var smallImage = document.getElementById('smallImage');
            // Unhide image elements
            //
            smallImage.style.display = 'block';
            // Show the captured photo
            // The inline CSS rules are used to resize the image
            //
            smallImage.src = "data:image/jpeg;base64," + imageData;
        }
        function onFail(message) {
            alert('Failed because: ' + message);
        }
        $scope.capturePhotoWithData = function() {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
        }

    });

})();