/**
 * Squash Matrix API
 * # Endeavor The squash matrix API enables clubs, players, and regions to own their information, with results being updated weekly. The API information sits ontop of squash matrix australia website [https://squashmatrix.com](https://squashmatrix.com) # API Aside from the documentation provided below, there is also a `{json:api}` available and can be accessed in the same manner, with the addition of the accept header `{accept: application/vnd.api+json}`. More information about json api can be viewed on their website at [http://jsonapi.org/](http://jsonapi.org/) # Squash Matrix Scrapper There is a ruby SDK for retrieving information from [https://squashmatrix.com](https://squashmatrix.com) which can be found at https://rubygems.org/gems/squash_matrix # SDK's Please stay posted! Client sdk's for the following will be provided shortly:    - Javascript   - Java   - Ruby  # Blog Find relevent and interesting media on [wilkosz.com.au](http://wilkosz.com.au) # Contact Join this endeavor and be appart of the community [https://www.facebook.com/squashmatrixapi](https://www.facebook.com/squashmatrixapi) <hr />
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SquashMatrixApi);
  }
}(this, function(expect, SquashMatrixApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SquashMatrixApi.Game();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Game', function() {
    it('should create an instance of Game', function() {
      // uncomment below and update the code to test Game
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be.a(SquashMatrixApi.Game);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property division (base name: "division")', function() {
      // uncomment below and update the code to test the property division
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerAName (base name: "player_a_name")', function() {
      // uncomment below and update the code to test the property playerAName
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBName (base name: "player_b_name")', function() {
      // uncomment below and update the code to test the property playerBName
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerAId (base name: "player_a_id")', function() {
      // uncomment below and update the code to test the property playerAId
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBId (base name: "player_b_id")', function() {
      // uncomment below and update the code to test the property playerBId
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerAPoints (base name: "player_a_points")', function() {
      // uncomment below and update the code to test the property playerAPoints
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBPoints (base name: "player_b_points")', function() {
      // uncomment below and update the code to test the property playerBPoints
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerAGames (base name: "player_a_games")', function() {
      // uncomment below and update the code to test the property playerAGames
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBGames (base name: "player_b_games")', function() {
      // uncomment below and update the code to test the property playerBGames
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerARating (base name: "player_a_rating")', function() {
      // uncomment below and update the code to test the property playerARating
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBRating (base name: "player_b_rating")', function() {
      // uncomment below and update the code to test the property playerBRating
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerARatingAdjustment (base name: "player_a_rating_adjustment")', function() {
      // uncomment below and update the code to test the property playerARatingAdjustment
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property playerBRatingAdjustment (base name: "player_b_rating_adjustment")', function() {
      // uncomment below and update the code to test the property playerBRatingAdjustment
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

    it('should have the property matchId (base name: "match_id")', function() {
      // uncomment below and update the code to test the property matchId
      //var instane = new SquashMatrixApi.Game();
      //expect(instance).to.be();
    });

  });

}));