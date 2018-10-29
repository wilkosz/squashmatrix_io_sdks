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
    instance = new SquashMatrixApi.Player();
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

  describe('Player', function() {
    it('should create an instance of Player', function() {
      // uncomment below and update the code to test Player
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be.a(SquashMatrixApi.Player);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be();
    });

    it('should have the property rating (base name: "rating")', function() {
      // uncomment below and update the code to test the property rating
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be();
    });

    it('should have the property gamesAsPlayerA (base name: "games_as_player_a")', function() {
      // uncomment below and update the code to test the property gamesAsPlayerA
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be();
    });

    it('should have the property gamesAsPlayerB (base name: "games_as_player_b")', function() {
      // uncomment below and update the code to test the property gamesAsPlayerB
      //var instane = new SquashMatrixApi.Player();
      //expect(instance).to.be();
    });

  });

}));
