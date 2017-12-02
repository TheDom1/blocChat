(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
    	getByRoomId: function(roomId) {
    		// Filter the messages by their room ID.
    		return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    	},
      send: function(newMessage, roomId) {
        // Send method logic
        messages.$add({
          userName: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          sentAt: firebase.database.ServerValue.TIMESTAMP,
          roomId: roomId
        });
      }
    }
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
