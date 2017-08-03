angular.module('starter.controllers', [])

.controller('LoginCtrl', function ($scope, $state) {
  $scope.goToRegistration = function () {
    $state.go('registration');
  }

})

.controller('ProfileCtrl', function ($scope, $stateParams, Chats) {
  $scope.user = Chats.getUser(1);

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
    $scope.modal.hide();
    $scope.chats.push({

      id: -1,
      name: $scope.topic,
      lastText: 'Mobile Develeopment',
      face: 'img/ben.png',
      thread: [{
        user: "chanaka",
        desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
      }, {
        user: "max",
        desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
      }, {
        user: "adam",
        desc: "That is indeed strange, it should look like this:"
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
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
