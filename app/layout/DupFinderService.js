(function() {
    "use strict";

    angular
        .module("finderApp")
        .factory("DupFinderService", DupFinderService);

    DupFinderService.$inject = [];

    function DupFinderService() {
        var factory ={};


        // takes to strings and returns a string with only 1 of each letter if found in both
        factory.letterFinder = function(strOne, strTwo) {
            var result = {};
            var firstStr;
            var turnStr2Hash;
            var deleteEmptyProp;
            var checkForDupsOnce;
            var checkForDupsAll;
            var makeStr;

            // takes a string and returns a hash with the letters from string as keys
            // only one unique string as key
            turnStr2Hash = function(str) {
                var strHash = {};

                for(var i = 0; i < str.length; i++) {
                    strHash[str[i]] = 0;
                }
                // console.log(strHash);
                return strHash;
            };

            // takes a hash and string, adds 1 if found returns hash
            checkForDupsOnce = function(strHash, strTwo) {
                for(var i = 0; i < strTwo.length; i++) {
                    if(strHash[strTwo[i]] === 0) {
                        strHash[strTwo[i]] += 1;

                    } else if(strHash[strTwo[i]] > 0) {
                        //console.log("duplicate", strTwo[i]);
                    }
                }
                return strHash;
            };

            // takes a hash and string, adds 1 if found returns hash
            // if it sees the same letter more than once it will continue to count
            checkForDupsAll = function(strHash, strTwo) {
                for(var i = 0; i < strTwo.length; i++) {
                    if(strHash[strTwo[i]] >= 0 ) {
                        strHash[strTwo[i]] += 1;

                    } else {
                        //console.log("not found", strTwo[i]);
                    }
                }
                return strHash;

            };

            // delete prop with zero
            deleteEmptyProp = function(obj) {
                for(var key in obj) {
                    if(obj.hasOwnProperty(key)){
                        if(obj[key] === 0){
                            delete obj[key];
                        }
                    }
                }
            };

            // turn object keys into string and return string
            makeStr = function(obj) {
                var newStrWithNum = "";
                var  newStr = "";

                for(var key in obj) {
                    if(obj.hasOwnProperty(key)) {
                        newStrWithNum += key + ":" + obj[key] + " ";
                        newStr += key;
                    }
                }

                return "'" + newStr + "'" + " " +newStrWithNum;
            };


            // start

            result.strOne = strOne;
            result.strTwo = strTwo;

            firstStr = turnStr2Hash(strOne.toLowerCase());
            result.singleDup = checkForDupsOnce(firstStr, strTwo.toLowerCase());
            result.allDups =  checkForDupsAll( turnStr2Hash(strOne.toLowerCase()), strTwo.toLowerCase() );

            deleteEmptyProp(result.singleDup);
            deleteEmptyProp(result.allDups);


            result.singleDup = makeStr(result.singleDup);
            result.allDups = makeStr(result.allDups);

            return result;
        };




        return factory;
    }
})();