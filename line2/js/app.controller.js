var app = angular.module('app',[]);

app.controller('lineCtrl',function($scope){
	$scope.legend = ['beijing', 'xian', 'shanghai', 'jinan'];
	$scope.item = ['Jan', 'Feb', 'Mar', 'apr', 'mar', 'Jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	$scope.data = [
		[-5,-2,4,1,0,7,4,8,13,7,20,22],  //beijing
		[0,4,2,5,-1,7,9,3,10,5,11,6],    //xian
		[7,8,9,8,12,12,6,6,10,5,16,18],   //shanghai
		[0,5,9,12,15,7,9,10,4,6,10,15]   //jinan
	];
});

