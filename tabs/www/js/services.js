angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Reviews', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var reviews = [
    { id: 0, name: 'Jane McFarland', imageUrl:'img/girls/girl_20.jpg', lastDate:'Nov. 27' },
    { id: 1, name: 'Rachel Truff', imageUrl:'img/girls/girl_21.jpg', lastDate:'Nov. 12' },
    { id: 2, name: 'Erika Smith', imageUrl:'img/girls/girl_22.jpg', lastDate:'Oct. 31' },
    { id: 3, name: 'Mimi Loveless', imageUrl:'img/girls/girl_23.jpg', lastDate:'Oct. 25' }
  ];

  return {
    all: function() {
      return reviews;
    },
    get: function(reviewId) {
      // Simple index lookup
      return reviews[reviewId];
    }
  }
})

    .factory('Activities', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var activities = [
            { id: 0, name: 'Mini-Golf' },
            { id: 1, name: 'Movie Theater' },
            { id: 2, name: 'Dinner at KFC' },
            { id: 3, name: 'Board Games' }
        ];

        return {
            all: function() {
                return activities;
            },
            get: function(activityId) {
                // Simple index lookup
                return activities[activityId];
            }
        }
    })

.factory('BoysAndGirls', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
        var girls = [
            { id: 0, name: 'Stephanie', imageUrl:'img/girls/girl_01.jpg', topRanks:'Flirty, Fun, Nice', averageScore:'91%' },
            { id: 1, name: 'Shalise', imageUrl:'img/girls/girl_02.jpg', topRanks:'Smart, Funny, Independent', averageScore:'76%' },
            { id: 2, name: 'Shauna', imageUrl:'img/girls/girl_03.jpg', topRanks:'Professional, Flirty, Smart', averageScore:'82%' },
            { id: 3, name: 'Laura', imageUrl:'img/girls/girl_04.jpg', topRanks:'Independent, Smart, Quiet', averageScore:'92%' },
            { id: 4, name: 'Mandy', imageUrl:'img/girls/girl_05.jpg', topRanks:'Flirty, Nice, Quiet', averageScore:'54%' },
            { id: 5, name: 'Anne', imageUrl:'img/girls/girl_06.jpg', topRanks:'Conversationalist, Nice, Caring', averageScore:'76%' },
            { id: 6, name: 'Amy', imageUrl:'img/girls/girl_07.jpg', topRanks:'Smart, Playful, Fun', averageScore:'23%' },
            { id: 7, name: 'Calindy', imageUrl:'img/girls/girl_08.jpg', topRanks:'Active, Fun, Funny', averageScore:'56%' },
            { id: 8, name: 'Jill', imageUrl:'img/girls/girl_09.jpg', topRanks:'Playful, Funny, Caring', averageScore:'83%' },
            { id: 9, name: 'Julia', imageUrl:'img/girls/girl_10.jpg', topRanks:'Flirty, Active, Fun', averageScore:'71%' },
            { id: 10, name: 'Sally', imageUrl:'img/girls/girl_11.jpg', topRanks:'Caring, Smart, Quiet', averageScore:'95%' },
            { id: 11, name: 'Susan', imageUrl:'img/girls/girl_12.jpg', topRanks:'Flirty, Fun, Nice', averageScore:'99%' },
            { id: 12, name: 'Christina', imageUrl:'img/girls/girl_13.jpg', topRanks:'Smart, Funny, Independent', averageScore:'12%' },
            { id: 13, name: 'Crystal', imageUrl:'img/girls/girl_14.jpg', topRanks:'Professional, Flirty, Smart', averageScore:'64%' },
            { id: 14, name: 'Celes', imageUrl:'img/girls/girl_15.jpg', topRanks:'Independent, Smart, Quiet', averageScore:'94%' },
            { id: 15, name: 'Jamie', imageUrl:'img/girls/girl_16.jpg', topRanks:'Flirty, Nice, Quiet', averageScore:'64%' },
            { id: 16, name: 'Judy', imageUrl:'img/girls/girl_17.jpg', topRanks:'Conversationalist, Nice, Caring', averageScore:'78%' },
            { id: 17, name: 'Michelle', imageUrl:'img/girls/girl_18.jpg', topRanks:'Smart, Playful, Fun', averageScore:'84%' },
            { id: 18, name: 'Molly', imageUrl:'img/girls/girl_19.jpg', topRanks:'Active, Fun, Funny', averageScore:'83%' },
            { id: 19, name: 'Patricia', imageUrl:'img/girls/girl_20.jpg', topRanks:'Playful, Funny, Caring', averageScore:'69%' }
        ];

    return {
        all: function() {
            return girls;
        },
        get: function(girlId) {
            // Simple index lookup
            return girls[girlId];
        }
    };

})

    .factory('TestReview', function($http) {
        // Might use a resource here that returns a JSON array

        // Adding http request to load json file
        var testReview = [];
        $http.get('data/profileInfo.json').success(function(data){
            testReview = data;
        });

        return {
            all: function() {
                return testReview;
            },
            get: function(testReviewId) {
                // Simple index lookup
                return testReview[testReviewId];
            }
        }
    });
