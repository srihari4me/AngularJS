describe('PlayersCtrl',function(){
	
	var $q,$rootScope,$scope,Player,PlayerResponse;
	
	
	beforeEach(module('MyApp.services'))
	
	beforeEach(module('MyApp.controllers'))
	
	
	
	beforeEach(inject(function(_$q_,_$rootScope_){
		
		$q=_$q_;
		$rootScope=_$rootScope_;
		
	}));
	beforeEach(inject(function($controller){
		$scope=$rootScope.$new();
		
		Player={
			query:function(){
				queryDeferred=$q.defer();
				return {$promise:queryDeferred.promise}
			}
		}
		spyOn(Player,'query').and.callThrough();
		$controller('PlayersCtrl',{
		'$scope':$scope,
		'Player':Player	
			
		})
		
		
		
	}));
	
	
	
	describe('Player.query',function(){
		
		beforeEach(function(){
			queryDeferred.resolve(PlayerResponse);
			$rootScope.$apply();
		});
		
it('should query the Player Service ',function(){
	expect(Player.query).toHaveBeenCalled();
			
		})

it('should set the response from the Player Service  to $scope.players ',function(){
	expect($scope.players).toEqual(PlayerResponse);
			
		})

		
	})
	
	
});
	
	
	
	
	
	
	
	
