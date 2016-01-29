(function() {
    "use strict";

    angular
        .module("finderApp")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["DupFinderService"];

    function HomeController(DupFinderService) {
        var home = this;
        home.dupList = [];

        home.name = "Bedford";
        home.dupFinder = DupFinderService.letterFinder;

        home.findDups = function(string1, string2) {

            home.result = home.dupFinder(string1, string2);
            home.dupList.unshift(home.result);
            home.string1 = "";
            home.string2 = "";
        }
    }
})();