(function(){
    "use strict";

    angular
        .module("finderApp")
        .config(config);

    config.$inject =["$locationProvider", "$stateProvider", "$urlRouterProvider" ];

    function config($locationProvider, $stateProvider, $urlRouterProvider ) {

        $stateProvider
            .state("home",{
                url: "/",
                controller: "HomeController",
                controllerAs: "home",
                templateUrl: "layout/home.template.html"
            });

        $urlRouterProvider.otherwise('/');
        //removes hash in urls
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    };

})();