angular.module('starter.services', [])

.factory('Chats', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'ionic2 - unable to retrieve/display data using navcontroller',
    lastText: 'Mobile Develeopment',
    face: 'img/ben.png',
    thread: [{
      user: "chanaka",
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    },
    {
      user: "max",
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    },
    {
       user: "adam",
      desc:"That is indeed strange, it should look like this:"
    }
    ]
  }, {
    id: 1,
    name: 'Call Alert Ionic',
    lastText: 'Web Development',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Focus the ion-searchbar on ionViewDidEnter',
    lastText: 'Mobile Development',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Open dynamic hyperlink',
    lastText: 'Web Design',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Firebase: Copying data from firebase database of one user to another users database',
    lastText: 'Cloud Computing',
    face: 'img/mike.png'
  }];

  return {
    all: function () {
      return chats;
    },
    remove: function (chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function (chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
