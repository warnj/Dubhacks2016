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
	   
	document.getElementById("submit").onclick = function() {
		/* var info = document.getElementById("mainArea").contactInfo;
		var correctNumber = "";
		for (var j = 0; j < info.phoneNumbers[0].value.length; j++) {
			if (/[\d]/.test(info.phoneNumbers[0].value.charAt(j))) {
				correctNumber += info.phoneNumbers[0].value.charAt(j);
			}
		}
		alert(correctNumber + "@email.uscc.net") */
		document.getElementById("secondPage").classList.add("hiddenArea");
		document.getElementById("thirdPage").classList.remove("hiddenArea");
	};
	
	document.getElementById("contactMeNow").onclick = function () {
		var info = document.getElementById("mainArea").contactInfo;
		if(document.getElementById("textOption").checked) {
			//send a text here
			for (var i = 0; i < info.phoneNumbers.length; i++) {
				var correctNumber = "";
				for (var j = 0; j < info.phoneNumbers[i].value.length; j++) {
					if (/[\d]/.test(info.phoneNumbers[i].value.charAt(j))) {
						correctNumber += info.phoneNumbers[i].value.charAt(j);
					}
				}
				emailjs.send("outlook","dubhacks16",{from_name: "James", reply_to: "warnj@outlook.com",
						to_email: correctNumber + "@email.uscc.net", message_html: "Contact me now!!!!!"})
				.then(function(response) {
					   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					   Alert("Sent");
				}, function(err) {
					   console.log("FAILED. error=", err);
				});
			}
		}
		if (document.getElementById("emailOption").checked) {
			for (var i = 0; i < info.emails.length; i++) {
				emailjs.send("outlook","dubhacks16",{from_name: "James", reply_to: "warnj@outlook.com",
						to_email: info.emails[i].value, message_html: "Contact me now!!!!!"})
				.then(function(response) {
					   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					   Alert("Sent");
				}, function(err) {
					   console.log("FAILED. error=", err);
				});
			}
		}
		if (document.getElementById("imOption").checked) {
			// send instant message
			alert(JSON.stringify(info.ims[0]));
		}
		document.getElementById("finish").classList.remove("hiddenArea");
	}
	
	document.getElementById("help").onclick = function () {
		var info = document.getElementById("mainArea").contactInfo;
		if(document.getElementById("textOption").checked) {
			//send a text here
		}
		if (document.getElementById("emailOption").checked) {
			for (var i = 0; i < info.emails.length; i++) {
				emailjs.send("outlook","dubhacks16",{from_name: "James", reply_to: "warnj@outlook.com",
						//to_email: info.emails[i].value, message_html: "I need help!!!!!"})
						to_email: "5623627441@txt.att.net", message_html: "i need help12!"})
				.then(function(response) {
					   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
				}, function(err) {
					   console.log("FAILED. error=", err);
				});
			}
		}
		if (document.getElementById("imOption").checked) {
			// send instant message
		}
		document.getElementById("finish").classList.remove("hiddenArea");
	}
	
	document.getElementById("personalMessage").onclick = function () {
		var info = document.getElementById("mainArea").contactInfo;
		if(document.getElementById("textOption").checked) {
			//send a text here
		}
		if (document.getElementById("emailOption").checked) {
			for (var i = 0; i < info.emails.length; i++) {	
				emailjs.send("outlook","dubhacks16",{from_name: "James", reply_to: "warnj@outlook.com",
						to_email: info.emails[i].value, message_html: document.getElementById("selfMessage").value})
				.then(function(response) {
					   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					   Alert("Sent");
				}, function(err) {
					   console.log("FAILED. error=", err);
				});
			}
		}
		if (document.getElementById("imOption").checked) {
			// send instant message
		}
		document.getElementById("finish").classList.remove("hiddenArea");
	}
	
	document.getElementById("returnHome").onclick = function() {
		document.getElementById("thirdPage").classList.add("hiddenArea");
		document.getElementById("frontPage").classList.remove("hiddenArea");
	}
}); 

	/* function setUpContactlist(friendList) {
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
	} */
	

  
  });

example.controller('starter', function($scope, $cordovaContacts, $ionicPlatform) {
	
	$ionicPlatform.ready(function() {
		$cordovaContacts.find({filter: ""}).then(function(result) {	
			//$scope.contacts = result;
			for (var i = 0; i < result.length; i++) {
				if (result[i].displayName !== null) {
					var row = document.createElement("tr");
					var contact = document.createElement("td");
					var nameTag = document.createElement("button");
					nameTag.contactInfo = result[i];
					nameTag.textContent = nameTag.contactInfo.displayName;
					nameTag.onclick = function() {
						document.getElementById("frontPage").classList.add("hiddenArea");
						document.getElementById("secondPage").classList.remove("hiddenArea");
						document.getElementById("selectedFriend").textContent = this.textContent;
						document.getElementById("mainArea").contactInfo = this.contactInfo;
						if (this.contactInfo.phoneNumbers !== null) {
							document.getElementById("textField").classList.remove("hiddenArea");
						}
						if (this.contactInfo.emails !== null) {
							document.getElementById("emailField").classList.remove("hiddenArea");
						}
						if (this.contactInfo.ims !== null) {
							document.getElementById("imField").classList.remove("hiddenArea");
						}			
					}
					contact.appendChild(nameTag);
					row.appendChild(contact);
					document.getElementById("contactList").appendChild(row);
				}
			}
		}, function(error) {
			console.log("error:" + error);
		});
	});
	



});


