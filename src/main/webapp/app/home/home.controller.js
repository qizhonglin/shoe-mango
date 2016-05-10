(function() {
    'use strict';

    angular
        .module('shoeApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function HomeController ($scope, Principal, LoginService, $state) {
        function getSlides(){
            var slides = [] ;
            slides.push({
                image: 'content/images/bartlesvillecf.jpg',
                text: 'bartlesvillecf.jpg',
                id: 0
            });
            slides.push({
                image: 'content/images/emancipation.jpg',
                text: 'emancipation.jpg',
                id: 1
            });
            slides.push({
                image: 'content/images/okwu.jpg',
                text: 'okwu.jpg',
                id: 2
            });
            slides.push({
                image: 'content/images/okwu-athletics.jpg',
                text: 'okwu-athletics.jpg',
                 id: 3
            });

            return slides ;
        }

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.slides = getSlides();
    }
})();
