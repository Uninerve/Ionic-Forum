angular.module('starter.controllers', [])

.controller('LoginCtrl', function ($scope, $state, $window) {
  $scope.goToRegistration = function () {

    $state.go('registration');
  };
  $scope.login = function () {
    $window.localStorage['user'] = {
      userId: 1,
      userName: "buwaneka",
      fullName: "Buwaneka Fenando",
      address: "Piliyandala Sri Lanka",
      email: "neshila67@gmail.com",
      mobile: "+93 7789 078",
      pic: "img/mike.png"

    };

    console.log(JSON.stringify($window.localStorage['user'].userName));
    $state.go('tab.home');

  }

})

.controller('ProfileCtrl', function ($scope, $stateParams, Chats) {
    $scope.user = Chats.getUser(1);
    console.log($scope.user);

  })
  .controller('SettingCtrl', function ($scope, $stateParams, Chats) {


  })

.controller('HomeCtrl', function ($scope, $ionicModal, Chats) {

  $scope.chats = Chats.all();
  $scope.topic = null;


  $scope.remove = function (chat) {
    Chats.remove(chat);
  };

  $ionicModal.fromTemplateUrl('templates/new-topic.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openNewTopicModal = function () {
    $scope.modal.show();
  };
  $scope.closeNewTopicModal = function () {
    console.log($scope.topic);
    $scope.user = {
      userId: 1,
      userName: "buwaneka",
      fullName: "Buwaneka Fenando",
      address: "Piliyandala Sri Lanka",
      email: "neshila67@gmail.com",
      mobile: "+93 7789 078",
      pic: "img/mike.png"

    };
    $scope.modal.hide();
    $scope.chats.push({

      id: 20 + Math.random()*10,
      name: "hgdfhgdifg hbbsh",
      lastText: 'Mobile Develeopment',
      face: 'img/ben.png',
      thread: [{
        user: $scope.user,
        desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
      }]
    })
  };

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, $ionicModal, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

  $ionicModal.fromTemplateUrl('templates/reply-to-topic.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openReplyTopicModal = function () {
    $scope.modal.show();
  };
  $scope.closeReplyTopicModal = function () {
    $scope.modal.hide();
  };

})

.controller('AccountCtrl', function ($scope, $window) {
  $scope.user ={
      userId: 1,
      userName: "buwaneka",
      fullName: "Buwaneka Fenando",
      address: "Piliyandala Sri Lanka",
      email: "neshila67@gmail.com",
      mobile: "+93 7789 078",
      pic: "img/mike.png"

    };
  console.log($scope.user);
  $scope.settings = {
    enableFriends: true
  };
});
