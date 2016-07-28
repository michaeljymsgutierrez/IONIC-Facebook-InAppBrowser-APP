app.controller('fbCtrl',function($scope,$window,$cordovaInAppBrowser){
    
    
    $scope.gitChael = function(){
        
        $window.open("https://github.com/michaeljymsgutierrez",'_self',"location=no");
    };
    
    
    $scope.fbDirect = function(){
        
        $window.open("https://m.facebook.com/",'_self',"location=no");  
    };
    
});