app.controller('fbCtrl',function($scope,$window,$cordovaInAppBrowser,$timeout,$ionicLoading,$ionicPopup){
    
    
    $scope.gitChael = function(){
        
        $window.open("https://github.com/michaeljymsgutierrez",'_self',"location=no");
    };
    
    
    $scope.fbDirect = function(){
        
            
            $scope.mypopUp = $ionicPopup.confirm({
                title: 'Ionic Facebook',
                template: 'Do you want to proceed to Facebook?'
            });
            


             $scope.mypopUp.then(function(res){
                 
                 if(res){
                     console.info("Redirecting");
                     $window.open("https://m.facebook.com/",'_self',"location=no"); 
                 }
                 else{
                     console.info("Not Redirecting");
                     
                 }
             })

 
    };
    

    
});