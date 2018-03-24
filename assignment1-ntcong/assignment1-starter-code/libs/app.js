(function() {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController',assignment);

	function assignment($scope) {
		$scope.lunchmenu = "";
		$scope.mess = "";

		// Ham chua xu ly phan tu trong
		/*$scope.displayMess = function() {
			var re = /\s*,\s*/;
			/*var listItems = $scope.lunchmenu.split(re);
			
			if($scope.lunchmenu =="")
				$scope.mess = "Please enter data first";
			else if(listItems.length <= 3)
				$scope.mess = "Enjoy!";
				else $scope.mess = "Too much!";
		}*/

		// Ham xu ly phan tu trong
		$scope.displayMess = function() {
			var numItems=0;
			var re = /\s*,\s*/;
			var listItems = $scope.lunchmenu.split(re);
			
			if($scope.lunchmenu =="")
				$scope.mess = "Please enter data first";
			else
			{
				for(var i = 0; i < listItems.length; i++) {
					// Bo qua phan tu trong
					if(listItems[i] != "") {
						numItems += 1;
					}
				}
				if(numItems <= 3)
					$scope.mess = numItems + ": Enjoy!";
				else $scope.mess = numItems + ": Too much!";
			}
		}
	}
}());