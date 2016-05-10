/**
 * Created by 310031267 on 2016/5/10.
 */
(function() {
    'use strict';

    angular
        .module('shoeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('about', {
            parent: 'app',
            url: '/about',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('about');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
