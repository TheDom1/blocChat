(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser === '') {
      		// Do something to allow users to set their username
      		$uibModal.open({
	  			// Modal configuration object properties
	  			templateUrl: '/templates/userModal.html',
	  			controller: 'UserModalCtrl as user_modal',
	  			size: 'sm',
	  			backdrop: 'static',
	  			keyboard: false
	  		})
      	}
    }

	angular
	    .module('blocChat')
	    .run(['$cookies', '$uibModal', BlocChatCookies]);
  })();
