(function() {
	function ModalCtrl(Room, $uibModalInstance, $scope) {

		$scope.close = function () {
			$uibModalInstance.dismiss();
		};

		$scope.submit = function (roomName) {
			Room.create(roomName);
			$uibModalInstance.close();
		};
	}


angular
	.module('blocChat')
	.controller('ModalCtrl', ['Room', '$uibModalInstance', '$scope', ModalCtrl]);
})();
