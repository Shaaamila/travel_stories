(function (angular){  
  angular
    .module('portfolioApp')
    .controller('contactCtrl',contactCtrl);

  function contactCtrl($scope, $http, $mdToast, $location){
    var vm = this;

    $scope.toastPosition = {
      bottom : true,
      top : false,
      left : false,
      right : true
    };
    $scope.getToastPosition = function(){
      return Object.keys($scope.toastPosition)
      .filter(function(pos){
        return $scope.toastPosition[pos];
      })
      .join(' ');
    };

    this.sendMail = function(){
      data = ({
        contactName : this.contactName, 
        contactEmail : this.contactEmail,
        contactMsg : this.contactMsg
       })
      console.log('luli');

      // http setup
      $http.post('/contact-form', data).
        success(function(data, status, headers, config){

      $mdToast.show(
        $mdToast.simple()
        .content('Thanks for your message'+ data.contactName +'. You rock!')
        .position($scope.getToastPosition())
        .hideDelay(5000)
        );
        // if (data == "sent"){
        //    $("#msg").empty().html("Your has been sent!");
        //  }

        }).
        error(function(data, status, headers, config){

        });

    };
  }
} ) (angular);