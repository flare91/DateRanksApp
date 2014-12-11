angular.module('starter.controllers', [])

    .controller('HomeCtrl', function($scope) {})

    .controller('SearchCtrl', function($scope, BoysAndGirls) {
        $scope.girls = BoysAndGirls.all();
    })

    .controller('ReviewsCtrl', function($scope, Reviews, Activities) {
        $scope.reviews = Reviews.all();
        $scope.activities = Activities.all();
    })

    .controller('ReviewDetailCtrl', function($scope, $stateParams, Reviews, Activities) {
        $scope.review = Reviews.get($stateParams.reviewId);
        $scope.activities = Activities.get($stateParams.activityId);
    })

    .controller('ProfileCtrl', function($scope) {})

    .controller("TestReviewsCtrl", ['$scope', '$http', function($scope, $http) {
        $http.get('data/testReviews.json').success(function(data) {
            console.log(data);
            $scope.testReviews = data;
        });

    }])

    .controller("PreviousReviewCtrl", ['$scope', '$http', function($scope, $http) {
        $http.get('data/previousReview.json').success(function(data) {
            console.log(data);
            $scope.previousReview = data;
        });

    }])

    .controller("SearchProfilesCtrl", ['$scope', '$http', function($scope, $http) {
        $http.get('data/profileInfo.json').success(function(data) {
            console.log(data);
            $scope.profileInfo = data;
        });

    }])

    .controller('FeedbackCtrl', function($scope) {
        $scope.feedbackView = function() {
            console.log($scope.feedbackView.checked);
        };
    })

    .controller('PopupCtrl', function($scope, $ionicPopup) {

        // Triggered on a button click, or some other target
        $scope.showPopup = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.text">',
                title: 'Reply or Comment',
                subTitle: 'Feedback will be reviewed by recipient.',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Send</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.text) {
                            //don't allow the user to close unless a reply or comment is made
                            e.preventDefault();
                        } else {
                            document.getElementById("show").setAttribute("id", "hide");
                            return $scope.data.text;
                        }
                    }
                }, ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };
        // A confirm dialog
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Review',
                template: 'Are you sure you want to delete this review?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    console.log('Review will not be posted on your account.');
                    document.getElementById("show").setAttribute("id", "hide");
                } else {
                    console.log('Review will remain on the home screen.');
                }
            });
        };

        // An alert dialog
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Review Confirmed',
                template: 'It will be visible on your profile.'
            });
            alertPopup.then(function(res) {
                console.log('Please check for other reviews.');
                document.getElementById("show").setAttribute("id", "hide");
            });
        };
    })

    .controller('ActivityReviewPopup', function($scope, $ionicActionSheet) {

        // Triggered on a button click, or some other target
        $scope.show = function() {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [{
                    text: 'Liked it.'
                }],
                destructiveText: 'Did not like it.',
                titleText: 'How was it?',
                cancelText: 'Cancel',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    return true;
                }
            });

        };
    })

    .controller('PopupReviewCtrl', function($scope, $ionicPopup) {

        // Triggered on a button click, or some other target
        $scope.showPopup = function() {
            $scope.data = {}
        };
        // A confirm dialog
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Submit Review',
                template: 'Are you sure you want to submit this review?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    console.log('Review will be sent for approval.');
                    window.location = "/#/tab/reviews"
                } else {
                    console.log('Review will not be submitted at this time.');
                }
            });
        };

        // An alert dialog
        $scope.showAlert = function() {};


    });