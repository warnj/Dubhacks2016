// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic', 'ngCordova'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	   
}); 

	function setUpContactlist(friendList) {
		for (var i = 0; i < friendList.length; i++) {
			var row = document.createElement("tr");
			var contact = document.createElement("td");
			contact.contactInfo = friendList[i];
			var name = document.createTextNode(contact.contactInfo.displayName);
			row.addEventListener('touchend', function() {
				setUpOptions(contact.contactInfo);
			});
			contact.appendChild(name);
			row.appendChild(contact);
			document.getElementById("contactList").appendChild(row);
		}
	}
  
	function setUpOptions() {
		document.getElementById("frontPage").classList.add("hiddenArea");
		document.getElementById("secondPage").classList.remove("hiddenArea");
		document.getElementById("selectedFriend").textContent = this.displayName;
	}
  
  });

example.controller('starter', function($scope, $cordovaContacts, $ionicPlatform) {
	
	$ionicPlatform.ready(function() {
		$cordovaContacts.find({filter: ""}).then(function(result) {
			setUpContactList(result);	
			$scope.contacts = result;
		}, function(error) {
			console.log("error:" + error);
		});
	});
	



});


