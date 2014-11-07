angular.module('starter.controllers', [])

    .controller('HomeCtrl', function($scope) {
    })

    .controller('SearchCtrl', function($scope, Girls) {
        $scope.girls = Girls.all();
    })

    .controller('RanksCtrl', function($scope) {
    })

.controller('ReviewsCtrl', function($scope, Reviews, Activities) {
  $scope.reviews = Reviews.all();
  $scope.activities = Activities.all();
})

.controller('ReviewDetailCtrl', function($scope, $stateParams, Reviews, Activities) {
  $scope.review = Reviews.get($stateParams.reviewId);
  $scope.activities = Activities.get($stateParams.activityId);
})

    .controller('ProfileCtrl', function($scope) {
    });
