app.controller('fbCtrl',function($scope,$window,$cordovaInAppBrowser,$timeout,$ionicLoading){
    
    
    $scope.gitChael = function(){
        
        $window.open("https://github.com/michaeljymsgutierrez",'_self',"location=no");
    };
    
    
    $scope.fbDirect = function(){
       $ionicLoading.show({template:"Connecting facebook . . ."});


            $timeout(function(){
                                $ionicLoading.hide();
             },10000);

       
                       
            $window.open("https://m.facebook.com/",'_self',"location=no");  
                        

                    
                    
 
    };
    

    
});