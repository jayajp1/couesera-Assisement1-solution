
(function(){
'Use strict'
   angular.module('MyApp',[]).
        controller('MyCtrl', function($scope)
            { 
                $scope.names="";
                $scope.countNames = function () { 
               
                    if($scope.names.length == "")   
                    {
                        $scope.message="enter something";
                    } 
                    else{
                        if($scope.names.length==1)
                        {
                            $scope.message="enjoy!" ;
                        }
                        else{
                            var totalNames=$scope.names.split(",");
                            var len=totalNames.length;
                            if(len>3)
                            {
                               $scope.message="too much!";
                            }
                            if( len>1 && len<4){
                                  $scope.message="enjoy!" ;
                               }

                        }

                      
                    }
                   
                } 
            });
})();