/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//defining a facade definition
var module = (function() {

    var angularObj = angular.module("bookmarkAppModule", ['ngSanitize']);
    var _private = {
        //function to initialize the angular application & pass default datato view
        initApplication: function(){
            
            angularObj.controller("bookmarkController", function($scope, $http) {
                
                if(localStorage.getItem("bookmarkData") != null){
                    
                    $scope.bookmarkData = JSON.parse(localStorage.getItem("bookmarkData"));
                    _private.renderCategories($scope, $scope.bookmarkData);
                } else {
                    _private.readFileData($scope, $http);
                }
                
                $scope.prependText = function(key) {
                    _private.doMenuActive(key);
                    const bookmarkContent = $scope.bookmarkData[key].data;
                    const content = `<p class="lead"> ${bookmarkContent} </p>`;
                    $scope.divHtmlVar = content;
                }
            });
        },

        readFileData: function($scope, $http) {

            $http.get('js/bookmark-data.json')
            .success(function(data) {
                localStorage.setItem("bookmarkData", JSON.stringify(data));
                _private.renderCategories($scope, data);
            })
            .error(function() {
                alert('error loading json file.');
            });
        },
        
        renderCategories: function($scope, data) {
            $scope.categoryList = data;
        },
        
        doMenuActive: function(key){
            const menuId = `menu${key}`
            var active = document.querySelector(".active");
            if(active!=null)active.classList.remove("active");
            document.getElementById(menuId).classList.add("active");
        }
    };
    return {
        facade : function( args ) {
            _private.initApplication();
        }
    };
}());

module.facade({functionCall: "initApplication", args:{}});
