angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Reviews', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var reviews = [
    { id: 0, name: 'Jane McFarland' },
    { id: 1, name: 'Rachel Truff' },
    { id: 2, name: 'Erika Smith' },
    { id: 3, name: 'Mimi Loveless' }
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

.factory('Girls', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
        var girls = [
            { id: 0, name: 'Stephanie' },
            { id: 1, name: 'Shalise' },
            { id: 2, name: 'Shauna' },
            { id: 3, name: 'Laura' },
            { id: 4, name: 'Mandy' },
            { id: 5, name: 'Anne' },
            { id: 6, name: 'Amy' },
            { id: 7, name: 'Calindy' },
            { id: 8, name: 'Jill' },
            { id: 9, name: 'Julia' },
            { id: 10, name: 'Sally' },
            { id: 11, name: 'Susan' },
            { id: 12, name: 'Christina' },
            { id: 13, name: 'Crystal' },
            { id: 14, name: 'Celes' },
            { id: 15, name: 'Jamie' },
            { id: 16, name: 'Judy' },
            { id: 17, name: 'Michelle' },
            { id: 18, name: 'Molly' },
            { id: 19, name: 'Patricia' },
            { id: 20, name: 'Cindy' }
        ];

    return {
        all: function() {
            return girls;
        },
        get: function(girlId) {
            // Simple index lookup
            return girls[girlId];
        }
    }
});
