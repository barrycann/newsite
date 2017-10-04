
(function(){
    angular.module('app')
        .controller('workCtrl', function($scope, mainService){

            $scope.backgroundImage = mainService.backgrounds[Math.floor(Math.random() * (11 - 1 + 1)) + 1];

            let backgroundPic = document.getElementById('work-background');

            window.onscroll = function() {
                let offSet = window.pageYOffset,
                    csParaStart = offSet * 0.75;

                mainService.navBackground(offSet);
                mainService.parallaxIt(backgroundPic,csParaStart);
            };

            //This is the animations for the work sections
            $scope.workEnter = function(num){
                TweenMax.to(document.getElementById('work-content-image-' + num), 0.75, {
                            filter: "blur(8px)",
                            opacity: 0
                    });
            };

            $scope.workLeave = function(num){
                TweenMax.to(document.getElementById('work-content-image-' + num), 0.5, {
                    opacity: 1,
                    filter: "blur(0)"
                })
            }

        })
})();