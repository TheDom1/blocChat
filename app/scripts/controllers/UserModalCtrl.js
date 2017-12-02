(function() {
	function UserModalCtrl($scope, $uibModalInstance, $cookies) {

		$scope.createUserName = function (userName) {
			$cookies.put('blocChatCurrentUser', userName);
			if (userName !== undefined) {
					$uibModalInstance.close();
			}
		}
	}

angular
	.module('blocChat')
	.controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();
