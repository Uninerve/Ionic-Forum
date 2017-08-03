angular.module('starter.services', [])

.factory('Chats', function () {
  var chats = [{
    id: 0,
    name: 'ionic2 - unable to retrieve/display data using navcontroller',
    lastText: 'Mobile Develeopment',
    thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/perry.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
  }, {
    id: 1,
    name: 'Call Alert Ionic',
    lastText: 'Web Development',
     thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/max.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
  }, {
    id: 3,
    name: 'Open dynamic hyperlink',
    lastText: 'Web Design',
     thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/ben.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
    
  }, {
    id: 2,
    name: 'Focus the ion-searchbar on ionViewDidEnter',
    lastText: 'Mobile Development',
     thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/mike.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
  }, {
    id: 3,
    name: 'Open dynamic hyperlink',
    lastText: 'Web Design',
     thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/ionic.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
  }, {
    id: 4,
    name: 'Firebase: Copying data from firebase database of one user to another users database',
    lastText: 'Cloud Computing',
    thread: [{
      user: {
        id: 1,
        userId: 1,
        userName: "dineshks",
        fullName: "Nuwantha Fenando",
        address: "Colombo Sri Lanka",
        email: "dish67@gmail.com",
        mobile: "+96 7789 078",
        pic: "img/mike.png"
      },
      desc: 'I have just started develoing with ionic following a tutorial. Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 2,
        userName: "neshks",
        fullName: "Nuwan Fenando",
        address: "Colombo Sri Lanka",
        email: "sheema67@gmail.com",
        mobile: "+94 7789 078",
        pic: "img/ben.png"
      },
      desc: ' Everythings seems actually quite logical - but now I am trying to upload my simple hello world code without any luck. On the command line I was able to login on my apps.ionic.io account and I was also able to link my local code with the app that I have created in the browser on apps.ionic.io.My app_id was then written to ionic.config.json.  I am also able to build the app and run it in the android simulator. But when I execute the following command it just does a build but doesnt seem to upload the generated code:'
    }, {
      user: {
        id: 3,
        userName: "deeshan90",
        fullName: "Chamara Fenando",
        address: "Sydny Sri Lanka",
        email: "leema67@gmail.com",
        mobile: "+94 7999 078",
        pic: "img/perry.png"
      },
      desc: "That is indeed strange, it should look like this:"
    }]
  }];

  var users = [{
    id: 1,
    userId: 1,
    userName: "dineshks",
    fullName: "Nuwantha Fenando",
    address: "Colombo Sri Lanka",
    email: "dish67@gmail.com",
    mobile: "+96 7789 078",
    pic: "img/mike.png"
  }, {
    id: 2,
    userName: "neshks",
    fullName: "Nuwan Fenando",
    address: "Colombo Sri Lanka",
    email: "sheema67@gmail.com",
    mobile: "+94 7789 078",
    pic: "img/ben.png"
  }, {
    id: 3,
    userName: "deeshan90",
    fullName: "Chamara Fenando",
    address: "Sydny Sri Lanka",
    email: "leema67@gmail.com",
    mobile: "+94 7999 078",
    pic: "img/perry.png"
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
    },
    getUser: function (userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;

    }
  };
});
