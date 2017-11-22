/**
 * Created by Seth on 8/21/2017.
 */
(function(){
    angular.module('app')
        .controller('telecomCtrl', function($scope, mainService){

            let backgroundPic = document.getElementById('telecom-background');

            window.onscroll = function() {
                let offSet = window.pageYOffset,
                    csParaStart = offSet * 0.75;

                mainService.navBackground(offSet);
                mainService.parallaxIt(backgroundPic,csParaStart);
            };

            $scope.readMore = function () {

                if(window.innerWidth <= 768){

                    TweenMax.to(document.getElementById('telecom-more-info'), 0.25, {
                        position: "relative",
                        visibility: "visible",
                        margin: "0 0 100px 0"
                    });
                    TweenMax.to(document.getElementById('telecom-read-more'), 0.25, {
                        visibility: "hidden"
                    });
                    TweenMax.to(document.getElementById('telecom-industry-info'), 0.25, {
                        margin: "0 0 0 0"
                    });

                }

                if(window.innerWidth > 768){

                    TweenMax.to(document.getElementById('telecom-more-info'), 0.25, {
                        position: "relative",
                        visibility: "visible",
                        margin: "0 0 100px 0"
                    });
                    TweenMax.to(document.getElementById('telecom-read-more'), 0.25, {
                        visibility: "hidden"
                    });
                    TweenMax.to(document.getElementById('telecom-industry-info'), 0.25, {
                        margin: "100px 0 0 0"
                    });

                }

            };

            $scope.readLess = function () {

                if(window.innerWidth <= 768){
                    TweenMax.to(document.getElementById('telecom-more-info'), 0.25, {
                        position: "absolute",
                        visibility: "hidden",
                        margin: "0 0 0 0"
                    });
                    TweenMax.to(document.getElementById('telecom-read-more'), 0.25, {
                        visibility: "visible"
                    });
                    TweenMax.to(document.getElementById('telecom-industry-info'), 0.25, {
                        margin: "0 0 100px 0"
                    });

                    window.scrollTo(0,0);
                }

                if(window.innerWidth > 768){
                    TweenMax.to(document.getElementById('telecom-more-info'), 0.25, {
                        position: "absolute",
                        visibility: "hidden",
                        margin: "0 0 0 0"
                    });
                    TweenMax.to(document.getElementById('telecom-read-more'), 0.25, {
                        visibility: "visible"
                    });
                    TweenMax.to(document.getElementById('telecom-industry-info'), 0.25, {
                        margin: "100px 0 100px 0"
                    });
                    window.scrollTo(0,0);
                }

            }

        })
})();