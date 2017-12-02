(function() {
	function HomeCtrl($scope, Room, Message, $uibModal) {
		this.rooms = Room.all;

		this.addRoom = function() {
			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl as modal',
				size: 'sm'
			});
		};

		$scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
        };

        $scope.sendMessage = function(newMessage) {
            Message.send($scope.newMessage, $scope.currentRoom.$id);
            $scope.newMessage = "";
            console.log(newMessage);
        }
	};

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
