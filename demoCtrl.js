app.controller('demoCtrl',['$scope',function($scope){
	$scope.message="";
	$scope.left=function(){
		return 100 - $scope.message.length;
	}
	$scope.save=function(){
		alert("Note Saved");
	}
	$scope.clear=function(){
		$scope.message='';
	}
}])