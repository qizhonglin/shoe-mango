/**
 * Created by 310031267 on 2016/5/10.
 */

(function(){
    'use strict';

    angular.module('shoeApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [];
    function HeaderController() {
        var vm = this ;
        vm.companyHref = 'http://www.baidu.com' ;
        vm.telphone = '136 3647 7046' ;
        vm.fax = '021 2011 5296' ;
    }



})();
